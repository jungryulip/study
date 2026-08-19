# DAY 23 — CSS 고급 선택자·애니메이션과 JavaScript 기초

> 2026-08-19 학습 기록

CSS의 연결·속성·가상 선택자로 원하는 요소를 정밀하게 선택하고, 필터와 변형,
트랜지션, 키프레임 애니메이션을 실습했다. 이어서 JavaScript를 HTML에 연결하고
변수·상수·자료형·문자열·배열 등 기본 문법을 학습했다.

## 오늘 배운 내용

### 1. CSS 연결 선택자

- 하위 선택자 `A B`: A 안의 모든 B 요소 선택
- 자식 선택자 `A > B`: A의 바로 아래 자식 B 선택
- 인접 형제 선택자 `A + B`: A 바로 다음의 형제 B 선택
- 일반 형제 선택자 `A ~ B`: A 뒤에 나오는 모든 형제 B 선택

### 2. 속성 선택자

- `[attr]`, `[attr="value"]`로 속성 유무와 정확한 값 확인
- `[attr~="value"]`, `[attr|="value"]`로 단어·하이픈 단위 선택
- `[attr^="value"]`, `[attr$="value"]`, `[attr*="value"]`로 시작·끝·포함 값 선택
- 링크 대상, 파일 확장자, 언어 코드 등에 따라 다른 스타일 적용

### 3. 가상 클래스와 가상 요소

- 링크 상태: `:link`, `:visited`, `:hover`, `:active`, `:focus`
- 구조 선택: `:first-child`, `:last-child`, `:nth-child()`, `:not()`
- 폼 상태: `:checked`, `:enabled`, `:disabled`
- 가상 요소: `::first-line`, `::first-letter`, `::before`, `::after`
- `:root`에 CSS 사용자 정의 속성을 선언하고 `var()`로 재사용

### 4. 필터와 변형

- `filter()`의 `blur`, `brightness`, `contrast`, `grayscale`, `sepia` 등
- `translate`, `scale`, `rotate`, `skew`로 요소 이동·확대·회전·기울이기
- `perspective`와 3차원 회전 실습

### 5. 트랜지션과 애니메이션

```css
.button {
  transition: transform 0.3s ease, background-color 0.3s;
}

.button:hover {
  transform: translateY(-4px) scale(1.05);
}
```

- `transition-property`, `duration`, `timing-function`, `delay`
- `@keyframes`로 중간 단계 정의
- `animation-name`, `duration`, `iteration-count`, `direction` 적용

### 6. JavaScript 연결과 DOM 제어

- HTML 내부 `<script>`와 외부 JavaScript 파일 연결 방식
- `document.getElementById()`로 요소 선택
- `onclick` 이벤트에서 요소의 글자색 변경
- `document.write()`와 `console.log()`로 결과 확인

```javascript
const heading = document.getElementById("heading");

heading.onclick = function () {
  heading.style.color = "red";
};
```

### 7. JavaScript 기본 문법

- 식별자 규칙과 camelCase 작성
- `let` 변수와 `const` 상수
- 숫자·BigInt·문자열·논리형, `undefined`, `null`
- 객체와 배열 같은 참조 자료형
- 백틱과 `${expression}`을 사용하는 템플릿 리터럴
- 배열에 여러 값을 저장하고 자료형을 변환하는 방법

## 실습 자료

- HTML 예제, CSS 스타일 시트와 이미지 리소스
- 선택자·필터·변형·애니메이션 및 JavaScript 실행 화면
- 수업 원본 노트: [`notes.txt`](./notes.txt)

## 회고

고급 선택자를 사용하면 불필요한 클래스 추가를 줄이면서도 요소를 정확히 지정할
수 있다. CSS 애니메이션은 시각적 변화를 담당하고, JavaScript는 이벤트를 받아
문서 요소와 상태를 실제로 변경한다는 역할의 차이를 확인했다.
