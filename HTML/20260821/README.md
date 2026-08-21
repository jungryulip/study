# DAY 25 — JavaScript 객체와 문서 객체 모델

> 2026-08-21 학습 기록

JavaScript 객체의 프로퍼티와 메서드를 이해하고 Array·Date 같은 내장 객체와
Window 등 브라우저 객체를 실습했다. DOM 트리에서 요소를 선택·변경하고 이벤트를
연결한 뒤, 노드를 생성·추가·삭제하고 클래스를 제어하는 방법을 학습했다.

## 오늘 배운 내용

### 1. 객체의 기본

- 객체는 프로그램에서 인식하고 다룰 수 있는 대상
- 프로퍼티는 객체의 특징이나 상태를 나타내는 값
- 메서드는 객체가 수행할 수 있는 동작
- 내장 객체, 브라우저 객체, 문서 객체, 사용자 정의 객체로 구분

### 2. Array 객체

- `concat()`으로 기존 배열을 변경하지 않고 새 배열 생성
- `join()`으로 배열 요소를 하나의 문자열로 연결
- `push()`·`unshift()`로 끝과 앞에 요소 추가
- `pop()`·`shift()`로 끝과 앞의 요소 꺼내기
- `splice()`로 배열 중간의 요소를 추가·삭제
- `slice()`로 원본을 유지하면서 일부 범위 복사

```javascript
const subjects = ["HTML", "CSS", "JavaScript"];
subjects.push("React");
const selected = subjects.slice(1, 3);
```

### 3. Date 객체

- `new Date()`로 현재 날짜와 특정 날짜 생성
- `getTime()`으로 1970년부터 지난 시간을 밀리초로 가져오기
- 두 날짜의 차이를 밀리초에서 일수로 변환
- 독서 챌린지의 연속 달성 일수 계산

### 4. 브라우저 객체

- `window.open()`으로 크기와 위치를 지정한 팝업 열기
- `window.close()`로 현재 팝업 닫기
- `navigator`, `history`, `location`, `screen` 객체의 역할 확인
- 실제 사용 시 브라우저의 팝업 차단 정책 고려

### 5. DOM과 DOM 트리

- DOM은 HTML 문서를 객체의 계층 구조로 표현하는 방식
- 문서의 시작점인 루트 노드와 부모·자식 관계 이해
- 요소·텍스트·속성·주석 노드 구분
- `getElementById()`, `querySelector()`로 원하는 요소 선택
- `querySelectorAll()`이 반환하는 NodeList 확인

### 6. 문서 내용과 속성 변경

- `innerText`로 요소의 표시 텍스트 변경
- 이미지 요소의 `src` 속성을 바꿔 화면 이미지 교체
- `style` 프로퍼티로 인라인 스타일 변경
- `classList.add()`, `remove()`, `toggle()`로 CSS 클래스 제어

```javascript
const heading = document.querySelector("#heading");
const cup = document.querySelector("#cup");

heading.onclick = () => {
  heading.innerText = "비 오는 날 커피";
};

cup.onclick = () => {
  cup.src = "images/coffee-blue.jpg";
};
```

### 7. 이벤트 처리

- `onclick` 프로퍼티에 함수 연결
- `addEventListener()`로 하나의 요소에 여러 이벤트 등록
- `mouseover`와 `mouseout`으로 마우스 진입·이탈 처리
- 이벤트 종류와 실행할 함수를 분리해 유지보수하기 쉬운 코드 작성

### 8. 노드 생성과 관리

- `createElement()`와 `createTextNode()`로 새 노드 생성
- `appendChild()`로 DOM 트리에 노드 추가
- `remove()` 또는 부모 노드를 통해 요소 삭제
- 여러 노드를 NodeList로 순회하며 동일한 동작 적용

## 실습 자료

- HTML 예제와 CSS 스타일 시트
- 배열·날짜·브라우저 객체와 DOM 실행 화면
- 이미지 변경, 라이트박스, 목록 및 노드 관리 실습
- 수업 원본 노트: [`notes.txt`](./notes.txt)

## 회고

DOM을 사용하면 HTML을 고정된 문서가 아니라 JavaScript로 탐색하고 변경할 수 있는
객체 구조로 다룰 수 있다. 요소 선택, 이벤트 등록, 노드 변경을 각각 분리하면
동작을 이해하기 쉽고 재사용 가능한 인터랙션을 만들 수 있다.
