# DAY 20 — HTML 미디어, 링크와 폼

> 2026-08-14 · 멀티미디어를 삽입하고 사용자의 입력을 받는 웹 문서 만들기

## 오늘 배운 내용

- `<audio>`와 `<video>` 미디어 삽입
- `controls`, `autoplay`, `loop`, `muted`, `poster`
- `<a>`를 이용한 외부·내부 링크
- 표의 행·열과 셀 병합
- `<form>`, `action`, `method`
- 체크박스와 라디오 버튼
- 텍스트·비밀번호·이메일·전화번호 입력
- 파일·날짜·시간·숫자·범위 입력
- `required`, `autofocus`, `placeholder`

## 오디오와 비디오

HTML 문서에 오디오와 비디오를 삽입할 때 각각 `<audio>`와 `<video>`를 사용합니다.

```html
<audio src="medias/spring.mp3" controls loop></audio>

<video
  src="medias/salad.mp4"
  controls
  width="700"
  poster="images/salad.jpg">
</video>
```

- `controls`: 재생·일시 정지·음량 조절 UI를 표시합니다.
- `autoplay`: 페이지가 열리면 자동 재생을 요청합니다.
- `loop`: 재생이 끝나면 처음부터 반복합니다.
- `muted`: 음소거 상태로 시작합니다.
- `poster`: 동영상 재생 전 표시할 대표 이미지를 지정합니다.
- `preload`: 페이지 로딩 시 미디어를 미리 읽는 방식을 지정합니다.

브라우저는 사용자를 보호하기 위해 소리가 있는 자동 재생을 막을 수 있어
`autoplay`를 사용할 때는 일반적으로 `muted`를 함께 사용합니다.

## 하이퍼링크

`<a>`의 `href`에는 이동할 문서, 웹 주소 또는 현재 문서의 요소 ID를 지정합니다.

```html
<a href="order.html">주문서</a>
<a href="https://www.example.com" target="_blank">외부 사이트</a>
<a href="#product">상품 구성으로 이동</a>

<h2 id="product">상품 구성</h2>
```

`target="_blank"`는 새 탭에서 문서를 엽니다. 이미지를 `<a>`로 감싸면 이미지도
클릭 가능한 링크가 됩니다. 문서 안 이동은 `href="#id"`와 대상의 `id`를 연결합니다.

## 표 만들기

표는 `table`, 행은 `tr`, 제목 셀은 `th`, 데이터 셀은 `td`로 구성합니다.
`rowspan`은 세로 셀을, `colspan`은 가로 셀을 합칩니다.

```html
<table>
  <caption>지원 양식</caption>
  <tr>
    <th rowspan="2">개인정보</th>
    <td>이름</td>
  </tr>
  <tr><td>연락처</td></tr>
</table>
```

표는 화면 배치가 아니라 행과 열의 관계가 있는 데이터를 표현할 때 사용합니다.

## form의 역할

`<form>`은 사용자가 입력한 값을 서버로 제출하는 범위를 정의합니다.

```html
<form action="/orders" method="post">
  <!-- 입력 요소 -->
</form>
```

- `action`: 데이터를 받을 서버 주소입니다.
- `method="get"`: 입력값을 URL 쿼리에 포함하며 조회에 적합합니다.
- `method="post"`: 요청 본문에 데이터를 담으며 등록·변경에 적합합니다.
- `name`: 폼을 식별하는 이름입니다.
- `target`: 제출 결과를 표시할 위치입니다.

POST가 주소창에 값을 노출하지 않는다고 해서 자동으로 암호화되는 것은 아닙니다.
민감한 데이터 보호에는 HTTPS가 필요합니다.

## label과 입력창

`label`은 입력 요소의 의미를 설명하고 클릭 영역을 넓혀 접근성을 높입니다.

```html
<label for="user-name">이름</label>
<input
  type="text"
  id="user-name"
  name="userName"
  placeholder="이름을 입력하세요"
  autofocus
  required>
```

서버로 값이 전달되려면 일반적으로 `name`이 필요합니다. `id`는 `label`의 `for`와
연결하거나 CSS·JavaScript에서 요소를 찾을 때 사용합니다.

## 체크박스와 라디오 버튼

체크박스는 여러 항목을 동시에 선택할 수 있고, 라디오 버튼은 같은 `name`을 가진
그룹에서 하나만 선택할 수 있습니다.

```html
<label><input type="checkbox" name="product" value="3kg"> 3kg</label>

<label><input type="radio" name="gift" value="yes"> 선물 포장</label>
<label><input type="radio" name="gift" value="no"> 포장 안 함</label>
```

`value`는 해당 항목을 선택했을 때 서버로 전달되는 값입니다.

## 다양한 input type

| type | 용도 |
| --- | --- |
| `text`, `password` | 일반 문자열과 가려진 비밀번호 입력 |
| `email`, `tel` | 이메일과 전화번호 입력 |
| `number`, `range` | 숫자와 범위 선택 |
| `date`, `month`, `week` | 날짜·월·주 선택 |
| `time`, `datetime-local` | 시간과 지역 날짜·시간 선택 |
| `file` | 사용자의 파일 첨부 |
| `submit`, `reset` | 폼 제출과 초기화 |

`min`, `max`, `step`, `value`로 허용 범위와 초기값을 정할 수 있습니다. 파일을 실제로
업로드하는 폼은 보통 `method="post"`와 `enctype="multipart/form-data"`를 사용합니다.

## 입력 속성

- `required`: 제출 전에 값이 반드시 입력되었는지 검사합니다.
- `autofocus`: 페이지가 열릴 때 해당 입력 요소에 초점을 둡니다.
- `placeholder`: 입력 전 보이는 짧은 힌트입니다.
- `readonly`: 값을 전송하지만 사용자가 수정하지 못하게 합니다.
- `disabled`: 입력과 제출 대상에서 요소를 제외합니다.

`placeholder`는 입력 후 사라지므로 항상 `label`을 대신할 수는 없습니다. 브라우저의
기본 유효성 검사는 사용자 편의를 위한 기능이며, 서버에서도 입력값을 다시 검증해야
합니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [미디어와 링크 예제](./20260814.html)
- [날짜·시간 입력 예제](./5-1.html)
- [파일 첨부 예제](./5-2.html)
- [주문 폼 예제](./5.html)
- [링크·표 종합 예제](./link-4_2020814.html)
- [실습 화면 전체 보기](./images/)

> 예제 HTML에서 참조하는 수업용 오디오·비디오 원본은 제공된 폴더에 포함되어 있지 않아
> 코드만 보관했습니다. 실습 결과는 아래 캡처에서 확인할 수 있습니다.

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| PDF 삽입 | [보기](./images/01_pdf.PNG) |
| 오디오 삽입 | [보기](./images/02_audio.PNG) |
| 비디오와 controls | [보기](./images/03_video.PNG) |
| 자동 재생과 반복 | [보기](./images/03_video_loop%20auto%20paly.PNG) |
| poster 이미지 | [보기](./images/03_video_poster.PNG) |
| 외부 링크와 새 탭 | [보기](./images/04_hypelink_blank.PNG) |
| 문서 내부 앵커 | [보기](./images/05_hyperlink_id.PNG) |
| 표 실습 | [보기](./images/06_Q_table%20make.PNG) |
| 주문 폼 | [보기](./images/07_form.PNG) |
| 파일 첨부 | [보기](./images/08_returepage.PNG) |
| required 입력 검증 | [보기](./images/09_requried.PNG) |

## 실습 중 알게 된 점

- 자동 재생 정책 때문에 동영상의 `autoplay`는 `muted`와 함께 쓰는 경우가 많습니다.
- 링크는 외부 문서뿐 아니라 같은 문서의 특정 위치에도 연결할 수 있습니다.
- 폼 입력값을 서버에 보내려면 각 컨트롤에 의미 있는 `name`을 지정해야 합니다.
- 라디오 버튼은 동일한 `name`으로 묶어 하나만 선택되게 합니다.
- 브라우저 검증만 믿지 말고 서버에서도 입력값을 반드시 검증해야 합니다.

## 오늘의 한 줄

HTML 폼은 입력창을 나열하는 것이 아니라 사용자의 정보를 의미 있게 묶어 서버에 전달하는 구조다.
