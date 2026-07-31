# DAY 10 — Java 변수, 자료형과 연산자

> 2026-07-31 · 값을 안전하게 저장하고 변환하며 연산하는 Java의 기초 익히기

## 오늘 배운 내용

- 변수 선언과 초기화, 변수 이름 규칙
- 정수·실수·문자·논리·문자열 자료형
- `final`을 이용한 상수 선언
- 자동 형변환과 명시적 형변환
- 숫자와 문자열 사이의 변환
- 산술·대입·증감·논리·삼항 연산자

## 변수와 이름 규칙

변수는 프로그램에서 사용할 값을 저장하기 위해 이름을 붙인 공간입니다.
사용하기 전에 자료형과 이름을 정해 선언해야 하며, 선언하면서 값을 넣는 것을
초기화라고 합니다.

```java
int level;       // 선언
level = 10;      // 대입
int score = 95;  // 선언과 초기화
```

- 영문자, 숫자, `_`, `$`를 사용할 수 있지만 숫자로 시작할 수 없습니다.
- 대소문자를 구분하며 공백과 Java 예약어를 사용할 수 없습니다.
- 변수 이름은 역할을 알 수 있도록 의미 있게 작성합니다.
- 여러 단어는 `studentName`, `courseName`처럼 camelCase로 표현합니다.

## 기본 자료형과 문자열

```java
int count = 30;
long population = 12_345_678_900L;
double average = 95.5;
float ratio = 3.14F;
char grade = 'A';
boolean passed = true;
String message = "Hello Java";
```

- `int`는 일반적인 정수, `long`은 더 큰 정수를 저장합니다.
- `long` 리터럴에는 `L`, `float` 리터럴에는 `F`를 붙입니다.
- 실수 계산은 일반적으로 정밀도가 더 높은 `double`을 사용합니다.
- `char`는 작은따옴표로 문자 하나, `String`은 큰따옴표로 문자열을 표현합니다.
- `boolean`에는 `true` 또는 `false`만 저장할 수 있습니다.

## 상수

변경하면 안 되는 값은 `final`로 선언합니다. 상수 이름은 관례적으로 대문자와
밑줄을 사용합니다.

```java
final int MAX_NUM = 100;
final int STUDENT_COUNT = 30;
final String KR_COUNTRY_CODE = "+82";
```

## 형변환

작은 범위에서 큰 범위로 변환할 때는 자동 형변환이 가능하지만, 큰 범위에서 작은
범위로 변환하면 값이 손실될 수 있으므로 변환할 자료형을 직접 명시해야 합니다.

```java
int point = 85;
double decimalPoint = point;       // 자동 형변환

double score = 76.5;
int integerScore = (int) score;    // 명시적 형변환: 76
```

문자열과 숫자는 전용 메서드로 변환합니다.

```java
String text = String.valueOf(85);
int number = Integer.parseInt("85");
double decimal = Double.parseDouble("76.5");
```

## 연산자

```java
int total = 90 + 70;
double average = total / 2.0;
int remainder = 10 % 3;

int number = 10;
number += 2;
number *= 2;
```

- `++score`는 값을 먼저 증가시킨 뒤 사용하고, `score++`는 현재 값을 사용한 뒤 증가시킵니다.
- `&&`는 왼쪽 조건이 거짓이면 오른쪽을 실행하지 않습니다.
- `||`는 왼쪽 조건이 참이면 오른쪽을 실행하지 않습니다.
- 삼항 연산자 `조건 ? 참일 때 값 : 거짓일 때 값`으로 간단한 조건 결과를 선택할 수 있습니다.

```java
String result = age >= 15 ? "관람 가능합니다." : "관람할 수 없습니다.";
```

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| 변수 이름 규칙 | [보기](./images/01_variable-naming_.PNG) |
| 기본 자료형 | [보기](./images/02_Datatypes.PNG) |
| 상수 | [보기](./images/03_constant.PNG) |
| 변수 실습 | [보기](./images/04_practice.PNG) |
| 형변환 | [보기](./images/06_typecasting.PNG) |
| 산술·대입 연산자 | [보기](./images/07_operationEx.PNG) |
| 전위·후위 증감 연산자 | [보기](./images/08_operationEx2.PNG) |
| 논리 연산자 | [보기](./images/09_operationEx.PNG) |
| 삼항 연산자 | [보기](./images/10_operationEx4.PNG) |
| 종합 문제 | [보기](./images/11_Q3.PNG) |

## 실습 중 알게 된 점

- 자료형은 저장 가능한 값의 종류와 범위를 결정합니다.
- 정수끼리 나누면 소수점 이하가 사라지므로 평균 계산에는 실수를 사용해야 합니다.
- 명시적 형변환은 데이터 손실 가능성을 확인한 뒤 사용해야 합니다.
- 전위와 후위 증감 연산자는 다른 연산과 함께 쓸 때 실행 순서를 주의해야 합니다.
- 논리 연산자는 단축 평가로 인해 오른쪽 식이 실행되지 않을 수 있습니다.

## 오늘의 한 줄

변수와 자료형을 정확히 이해하면 값이 어떻게 저장되고 계산되는지 예측할 수 있다.

