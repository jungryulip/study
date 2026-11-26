# DAY 101 — SpaceLink AI 고객상담 범위 정리, 필터 링크, Zustand 전환

> 2026-11-26 · Final Project, Spring AI, 정규식, React, Zustand, Spring Batch

어제 만든 AI 고객상담을 **사이트 이용 안내**로 좁혔다. 매물 질문은 AI를 부르지 않고, 질문에서 뽑은
조건으로 **필터가 걸린 목록 링크**를 바로 준다. 이어지는 질문, 참고한 FAQ, 이어서 물어보기, 대화 복사도
붙였다. 오전에는 공용 상태를 Zustand로 옮기고 홈 디자인을 정리했으며(PR #16·#17), 환경 데이터 재수집이
제대로 끝나는지도 확인했다.

## 오늘 커밋

| 커밋 | 내용 |
| --- | --- |
| `ebd7e87` (PR #16) | 공용 상태(찜·희망 조건·후보 비교)를 Zustand 저장소로 전환 |
| `24c09e0` (PR #17) | 홈 검색·청약 캘린더 디자인 정리, 글자 크기 짝수로 통일 |
| `555fc4a` | 고객상담을 사이트 이용 안내로 좁히고 매물 질문은 해당 페이지로 안내 |
| `4cbbfe6` | 필터 링크·참고 FAQ·이어서 물어보기·대화 복사 추가 |
| `0d60894` | 참고 FAQ는 질문이 겹칠 때만 표시, 대화 복사 권한 문제 보완 |
| `7b8b948` | 대화 복사에 바로가기 링크를 전체 주소로 함께 넣기 |

저녁에 AI 고객상담 브랜치와 어제 남겨 둔 희망 조건 수정 브랜치를 main에 병합했다(아래 7절).

## 1. 상담 범위 나누기 — `SupportGuidance`

질문을 AI에 보내기 전에 서버가 먼저 분류한다. AI를 부르지 않아도 되는 질문은 정해진 답과 링크로 끝낸다.

```text
질문 (+ 이어지는 질문이면 앞 사용자 질문을 붙여서 판단)
  ├─ 날씨·주식·코딩 같은 무관한 주제         → 상담 범위 안내 + FAQ·이용 안내 링크
  ├─ 매물·가격·청약 질문 (이용 문의 단어 없음) → AI 없이 필터 걸린 목록·매물지도 링크
  ├─ 로그인·알림·찜·출처 같은 이용 문의        → AI 상담 (공개 FAQ 근거)
  └─ 대화 중인 질문 ("그럼 다른 방법은요?")    → AI 상담 (앞 대화 맥락으로)
```

```java
public static Reply reply(Question q) {
    String text = topic(q);                       // 이어지는 질문이면 직전 사용자 질문을 붙인다
    if (UNRELATED.matcher(text).find()) return scope();
    if (PROPERTY.matcher(text).find() && !USAGE.matcher(text).find()) {
        List<Link> links = propertyLinks(text);  // AI를 부르지 않고 목록 링크로 안내
        return new Reply("... 매물의 가격·조건은 아래 " + links.getFirst().label() + "에서 확인할 수 있습니다 ...", links);
    }
    return SERVICE.matcher(text).find() || USAGE.matcher(text).find() || inConversation(q) ? null : scope();
}
```

- "관심 매물 목록", "데이터 출처", "화면 정보가 실제와 달라요" 같은 말은 매물 단어가 들어 있어도
  **사이트 이용 문의**로 분류한다(`USAGE`).
- '조회', '화면'만으로는 이용 문의로 보지 않는다. 매물 정보 질문을 사이트 오류로 잘못 분류하지 않기 위해서다.
- 바로가기 주소는 **서버가 정한 실제 경로만** 준다. 모델이 도메인이나 상세 ID를 지어내지 못하게 하려는 것이다.

## 2. 질문에서 목록 필터 뽑기 — `ListFilters`

"마포구 아파트 3억~5억 접수 중"이라고 물으면 집 목록이 필터가 걸린 채로 열린다.

```text
"마포구 아파트 3억~5억 접수 중"
  → /houses?regionCode=11440&type=APT&price=300000000-500000000&status=OPEN
```

| 필터 | 뽑는 방법 |
| --- | --- |
| 자치구 `regionCode` | 서울 25개 구 이름 → 시군구 코드. "마포"만 써도 되지만, 다른 말과 겹치는 "중"·"동작"은 "구"까지 써야 한다 |
| 유형 `type` | 긴 말부터 찾고 찾은 부분은 지운다("공공 임대"가 다른 유형으로 또 잡히지 않게) |
| 가격 `price` · 면적 `area` | "3억~5억", "3억 이하", "85㎡ 초과" 패턴 → `min-max` (NFKC로 ㎡는 m2가 된다) |
| 접수 상태 `status` | "접수 중"·"예정"·"마감" |

값이 목록 화면의 선택지와 **딱 맞지 않거나 둘 이상 겹치면 그 필터는 걸지 않는다.** 잘못된 필터로 빈 목록을
보여 주는 것보다 필터 없이 여는 편이 낫기 때문이다.

```java
static String apply(String path, String category, String text) {
    var query = new LinkedHashMap<String, String>();
    one(guCodes(text)).ifPresent(v -> query.put("regionCode", v));
    one(types(text)).filter(TYPES.get(category)::contains).ifPresent(v -> query.put("type", v));
    price(text).filter((house ? HOUSE_PRICES : OTHER_PRICES)::contains).ifPresent(v -> query.put("price", v));
    // ... area, status
}
private static Optional<String> one(Set<String> values) {
    return values.size() == 1 ? Optional.of(values.iterator().next()) : Optional.empty();
}
```

구 이름은 앞뒤 글자를 확인해(뒤에 구·역·동이나 조사가 올 때만) 다른 단어의 일부를 잘못 잡지 않게 했다.

### 목록 화면이 주소의 필터를 받게

집·상가·오피스·공고 목록이 `?regionCode=11440&type=APT`처럼 **주소로 필터를 받아 연다.** 필터 선택지와
구간 값은 `lib/spaceFilters.js` 한 곳에 두고, 서버의 `ListFilters`도 같은 값을 쓴다. 공고 목록에 있던
필터 코드도 이 파일로 옮겨 목록 화면끼리 같은 규칙을 쓴다.

## 3. 상담 화면 보강

- **참고한 FAQ**: 답변 아래 근거 FAQ를 보여 준다. FAQ 질문이 사용자 질문과 겹칠 때만 보이고, 두 번째 FAQ는
  첫 번째의 절반 이상 겹칠 때만 붙인다. FAQ를 고를 때 조사·어미를 떼고 비교해 "데이터 출처" FAQ도 찾게 했다.
- **이어서 물어보기**: 같은 분류의 다음 질문을 버튼으로 보여 준다.
- **대화 복사**: 바로가기 링크를 전체 주소로 바꿔 함께 복사한다. 클립보드 권한이 막혔거나 https가 아니면
  `navigator.clipboard`가 실패하므로, 숨긴 `textarea`를 선택해 복사하는 방식으로 한 번 더 시도한다.
- **나갈 때 확인**: 대화 중 다른 화면으로 가면 "상담을 끝낼까요?" 확인 창을 띄우고, 새로고침·탭 닫기는
  브라우저 경고를 띄운다. 대화를 저장하지 않으므로 실수로 잃지 않게 하려는 것이다.
- 첫 안내 문구는 한 글자씩 적히게 했다. 동작 줄이기 설정을 켠 사용자에게는 한 번에 보여 준다.

## 4. 공용 상태를 Zustand로 (PR #16)

찜·희망 조건·후보 비교는 여러 화면이 같이 보는 값이라 `useSyncExternalStore`와 직접 만든 구독 목록으로
관리하고 있었다. 이것을 **Zustand 저장소 하나**로 바꿨다.

```js
const useStore = create(() => ({ preferences: NO_PREFERENCES, favorites: [], loggedIn: false, comparison: loadComparison() }));
const emit = (patch) => useStore.setState(patch);     // 바뀐 값만 넣는다

// 후보 비교 선택만 브라우저에 남긴다
useStore.subscribe((next, prev) => {
  if (next.comparison === prev.comparison) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, comparison: next.comparison }));
});
export const useFrontendState = () => useStore();
```

- 리스너 관리와 `{ ...state, ... }` 복사 코드가 사라지고, `setState`에 바뀐 값만 넘기면 된다.
- 바꾸는 함수(`toggleFavorite` 등)는 저장소 밖에서 내보내, 쓰는 화면은 저장소 구조를 몰라도 된다.
- 한 화면에서만 쓰는 값은 그 화면의 `useState`에 두고, 저장소에는 여러 화면이 같이 보는 값만 둔다.

## 5. 홈 디자인 정리 (PR #17)

- 검색 종류를 아래로 펼치는 목록으로 바꾸고, 고른 종류의 목록(집·상가·오피스)으로 이동한다.
- 선택한 날짜의 일정은 3건씩 보여 주고 페이지 번호로 넘긴다. 목록 678px, 카드 210px, 간격 16px로 고정했다.
- 글자 크기 토큰을 짝수로 통일했다(17→16, 15→14, 13→12, 11→10). 달력 칸 글자는 그대로 두었다.

## 6. 환경 데이터 재수집 확인

팀장님이 환경 데이터 수집을 **100건 단위로 나눠 커밋**하도록 고친 뒤(청크마다 새 트랜잭션), 다시 수집해
결과를 확인했다.

- Oracle PGA 기본 한도(2G)에서 성공했고, 세션 메모리는 18MB였다. 한 트랜잭션에 전부 쌓지 않으니
  메모리를 적게 쓴다.
- 매물 2,451건 중 침수·교통·인프라는 전부, 소음은 1,473건이 채워졌다. 악취·상권은 0건이라 원인을 더 봐야 한다.


## 7. main 병합 (저녁)

남아 있던 브랜치 두 개를 main에 병합했다.

| 브랜치 | 커밋 | 내용 |
| --- | --- | --- |
| `feature/support-consult-scope` | `555fc4a` · `4cbbfe6` · `0d60894` · `7b8b948` | 오늘 만든 AI 고객상담 보강 전체 (1~3절) |
| `fix/preferences-progress` | `c71365c` | 희망 조건 '작성 순서'가 대상별 조건까지 채우면 2 / 2로 바뀌도록 수정 |

병합 전 main 대비 **25개 파일, 941줄 추가 · 135줄 삭제**다.

### 충돌 확인

브랜치가 갈라진 뒤 main에서 바뀐 파일과 각 브랜치에서 바뀐 파일을 비교했다. 겹치는 파일이 하나도 없어서
**충돌 없이** 병합됐다. 상담 브랜치는 이미 오늘 main(`d1f67b9`, 소음 수집 컴파일 오류 수정)을 받아 둔 상태였고,
main에서 바뀐 것은 배치(환경 데이터 수집) 쪽이라 내 코드와 겹치지 않았다.

```bash
base=$(git merge-base origin/main feature/support-consult-scope)
comm -12 <(git diff --name-only $base origin/main | sort) \
         <(git diff --name-only $base feature/support-consult-scope | sort)   # 결과 없음 = 겹치는 파일 없음
```

### 희망 조건 작성 순서 수정

희망 조건 화면 왼쪽의 작성 순서가 대상별 조건을 다 채워도 1 / 2에 머물렀다. 두 번째 단계에도 완료 여부를
넘기고, 완료 개수에 조건 입력이 유효한지를 더했다.

```jsx
{ id: 'detail', label: target ? `${targetLabel} 조건` : '대상별 조건', done: valid },
// ...
doneCount={(target ? 1 : 0) + (valid ? 1 : 0)}
```

### 병합 후 확인

- 프런트 테스트 **435개 통과**(희망 조건 순서 테스트 1개 추가), `vite build` 성공
- 백엔드는 병합으로 바뀐 코드가 없다(겹치는 파일 없음). 오후에 상담 브랜치에서 652개 통과한 상태 그대로다.

### 트러블슈팅 — 연결된 폴더에서 git 브랜치 전환이 멈춤

다른 환경에서 연결해 쓰는 폴더라 파일 삭제가 막혀 있었는데, `git checkout main`이 옛 파일을 지우지 못해
브랜치만 main으로 바뀌고 작업 트리에는 상담 브랜치 파일이 남았다. `.git/index.lock`도 남았다.

1. 남은 파일이 모두 상담 브랜치에 커밋된 내용과 같은지 하나씩 비교해 잃을 코드가 없는지 확인
2. 삭제 권한을 받은 뒤 남은 `index.lock` 삭제
3. `git checkout -f main`으로 작업 트리를 main에 맞추고, 브랜치에만 있던 새 파일 정리
4. 다시 `git merge --no-ff`

> git은 작업 중 잠금 파일(`index.lock`)을 만들었다가 지운다. 삭제가 막힌 곳에서는 잠금 파일이 남아
> 다음 git 명령이 `File exists`로 실패하므로, 실행 중인 git이 없을 때만 지워야 한다.

## 확인

- 백엔드 테스트 652개 · 프런트 테스트 434개 통과

## 오늘의 정리

- AI가 꼭 필요 없는 질문은 서버에서 먼저 걸러 정해진 답과 링크로 끝내면 정확하고 비용도 들지 않는다.
- 링크 주소는 모델이 만들게 하지 말고, 서버가 실제 경로에 확실한 필터만 붙여 준다.
- 자연어에서 값을 뽑을 때 애매하면 걸지 않는 편이 낫다(하나로 정해질 때만 사용).
- 여러 화면이 같이 보는 상태만 전역 저장소에 두고, 나머지는 화면 안에 둔다.
- 대량 데이터 처리는 나눠서 커밋해야 DB 메모리 한도를 넘지 않는다.
- 병합 전에 양쪽에서 바뀐 파일이 겹치는지 먼저 보면 충돌 여부를 미리 알 수 있다.
