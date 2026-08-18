# DAY 22 — CSS 배경, 반응형 웹과 Flexbox

> 2026-08-18 학습 기록

CSS로 배경 이미지와 그라데이션을 표현하고, 이미지가 컨테이너에 맞게 보이는
방식을 조절했다. 미디어 쿼리와 Flexbox를 사용해 화면 크기가 달라져도 자연스럽게
배치되는 반응형 레이아웃을 실습했다.

## 오늘 배운 내용

### 1. 배경 색상과 적용 범위

- `background-color`로 요소의 배경색 지정
- `background-clip`으로 배경을 테두리·패딩·콘텐츠 영역 중 어디까지 표시할지 결정
- `border-box`, `padding-box`, `content-box`의 차이 확인

### 2. 배경 이미지

```css
.hero {
  background-image: url("./images/bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

- `background-repeat`으로 이미지 반복 여부와 방향 설정
- `background-position`으로 기준 위치 조절
- `background-origin`으로 배경 이미지의 시작 범위 지정
- `background-size: cover | contain`으로 요소에 맞게 크기 조절

### 3. 선형·원형 그라데이션

- `linear-gradient()`로 방향이나 각도를 가진 선형 그라데이션 생성
- 색상 중지점을 추가해 색이 바뀌는 위치 제어
- `radial-gradient()`로 원형·타원형 그라데이션 생성
- 원의 크기와 중심 위치를 지정해 다양한 배경 표현

```css
.gradient {
  background: linear-gradient(135deg, #6191f8, #d9e5ff);
}
```

### 4. 반응형 이미지와 `object-fit`

- `max-width: 100%`와 유동 너비로 이미지가 부모 영역을 넘지 않게 설정
- `object-fit: cover`로 영역을 채우되 비율 유지
- `object-fit: contain`으로 이미지 전체를 영역 안에 표시
- 뷰포트 단위 `vw`, `vh`를 활용한 크기 지정

### 5. 미디어 쿼리

```css
@media screen and (max-width: 768px) {
  .container {
    padding: 16px;
  }
}
```

- 화면 너비와 미디어 유형에 따라 다른 스타일 적용
- 브레이크포인트를 기준으로 글자, 이미지, 배치 변경
- 모바일부터 확장하는 모바일 퍼스트 방식 이해

### 6. Flexbox 레이아웃

- `display: flex`로 플렉스 컨테이너 생성
- `flex-direction`으로 주축 방향 결정
- `flex-wrap`으로 줄바꿈 허용
- `justify-content`로 주축 정렬
- `align-items`, `align-content`로 교차축 정렬
- `flex-basis`, `flex-grow`, `flex-shrink`로 항목의 기본 크기와 증감 비율 제어
- `gap`으로 항목 사이의 일정한 간격 설정

### 7. 함께 실습한 Grid

- 행과 열을 갖는 2차원 레이아웃 구성
- `grid-template-columns`, `gap`으로 갤러리 배치
- Flexbox는 한 방향, Grid는 행과 열을 함께 다룰 때 유용하다는 차이 확인

## 실습 자료

- HTML·CSS·JavaScript 원본 예제와 이미지 리소스
- 실행 화면 및 참고 이미지
- 팀 소개·카드·반응형 갤러리 실습
- 수업 원본 노트: [`notes.txt`](./notes.txt)

## 회고

고정된 크기로만 디자인하면 화면이 달라질 때 레이아웃이 쉽게 깨진다는 점을
확인했다. 이미지에는 유동 크기와 `object-fit`을 적용하고, 전체 배치는 미디어
쿼리와 Flexbox·Grid를 조합하면 다양한 화면에 더 안정적으로 대응할 수 있다.
