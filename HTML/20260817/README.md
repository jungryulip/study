# DAY 21 — HTML·CSS 기본 스타일과 레이아웃

> 2026-08-17 학습 기록

HTML 문서에 CSS를 연결하고 선택자와 캐스케이딩으로 스타일 적용 범위를 제어했다.
글꼴·색상·텍스트·목록·표를 꾸민 뒤 박스 모델과 `display`, `float`,
`position`을 활용해 웹 페이지의 디자인과 레이아웃을 구성했다.

## 오늘 배운 내용

### 1. CSS 적용 방법

- 인라인 스타일: 태그의 `style` 속성에 직접 작성
- 내부 스타일 시트: `<head>`의 `<style>` 안에 작성
- 외부 스타일 시트: 별도의 CSS 파일을 `<link>`로 연결
- 유지보수와 재사용이 필요한 실제 프로젝트에서는 외부 스타일 시트가 유리하다.

### 2. 선택자와 캐스케이딩

- 전체 선택자 `*`, 타입 선택자, 클래스 선택자 `.class`, 아이디 선택자 `#id`
- 여러 선택자를 쉼표로 묶는 그룹 선택자
- 상속과 소스 순서에 따른 스타일 적용
- 대표적인 우선순위: `!important` → 인라인 → `id` → 클래스 → 타입

### 3. 글꼴·색상·텍스트

- `font-family`, `font-size`, `font-weight`, `font-style`
- 웹 폰트와 대체 글꼴 지정
- 색상 이름, HEX, RGB·RGBA 표현
- `text-align`, `line-height`, `text-decoration`, `text-shadow`
- `text-transform`, `letter-spacing`, `word-spacing`

### 4. 목록과 표

- `list-style-type`, `list-style-position`으로 목록 기호와 위치 변경
- 표의 테두리, 셀 여백과 정렬 적용
- `border-collapse`로 이중 테두리 합치기

### 5. 박스 모델

요소는 콘텐츠를 중심으로 `padding`, `border`, `margin` 영역을 가진다.

```css
.box {
  width: 320px;
  padding: 20px;
  border: 2px solid #6191f8;
  margin: 24px auto;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
```

- `box-sizing: border-box`를 사용하면 지정한 너비 안에 패딩과 테두리가 포함된다.
- `margin`은 요소 바깥, `padding`은 콘텐츠와 테두리 사이의 여백이다.
- `border-radius`와 `box-shadow`로 카드 형태의 표현을 만들 수 있다.

### 6. 레이아웃

- `display`로 블록·인라인·인라인 블록의 배치 방식 변경
- `float`로 요소를 좌우에 띄우고 콘텐츠를 감싸게 배치
- `position: relative | absolute | fixed | sticky`와 위치 속성 사용
- 절대 위치 요소는 가장 가까운 positioned 조상 요소를 기준으로 배치된다.

## 실습 자료

- HTML 예제 31개
- 실행 화면 39장
- 수업 원본 노트: [`notes.txt`](./notes.txt)
- 실행 화면 모음: [`images/`](./images/)

## 회고

CSS는 속성을 외우는 것보다 선택자 우선순위와 박스 모델을 먼저 이해하는 것이
중요하다는 점을 확인했다. 앞으로는 `float`와 `position`의 동작을 충분히 익힌 뒤
Flexbox와 Grid를 사용해 더 유연한 반응형 레이아웃으로 확장할 계획이다.
