# DAY 11 — Java 조건문과 반복문

> 2026-08-03 · 조건에 따라 실행 흐름을 나누고 필요한 작업을 반복하기

## 오늘 배운 내용

- `if`, `if-else`, `if-else if-else` 조건문
- 독립된 여러 `if`문과 연결된 다중 조건문의 차이
- 전통적인 `switch-case`와 화살표 문법
- `switch` 표현식, 여러 `case` 값과 `yield`
- `while`, `do-while`, `for` 반복문
- 중첩 반복문으로 구구단 출력
- `break`와 `continue`로 반복 흐름 제어

## if 조건문

`if`는 조건식이 `true`일 때만 중괄호 안의 코드를 실행합니다. 실행문이 하나라면
중괄호를 생략할 수 있지만, 실행 범위를 분명하게 보여 주기 위해 항상 작성하는 편이
안전합니다.

```java
int age = 10;

if (age >= 8) {
    System.out.println("학교에 다닙니다.");
} else {
    System.out.println("학교에 다니지 않습니다.");
}
```

여러 조건 중 하나만 선택해야 한다면 `else if`로 연결합니다. 위에서부터 조건을
확인하며 처음 참인 블록 하나만 실행합니다. 반대로 각각의 `if`를 독립적으로 작성하면
참인 조건이 여러 개일 때 여러 블록이 모두 실행될 수 있습니다.

```java
if (age < 8) {
    charge = 1000;
} else if (age < 14) {
    charge = 2000;
} else if (age < 20) {
    charge = 2500;
} else {
    charge = 3000;
}
```

## switch 문과 표현식

하나의 값에 따라 여러 경우 중 하나를 고를 때 `switch`를 사용할 수 있습니다.
전통적인 문법에서는 `break`를 생략하면 다음 `case`까지 이어서 실행됩니다.

```java
switch (ranking) {
    case 1:
        medalColor = 'G';
        break;
    case 2:
        medalColor = 'S';
        break;
    default:
        medalColor = 'A';
}
```

화살표 문법은 `break` 없이 간결하게 작성할 수 있으며, 실행 결과를 변수에 바로
저장하는 표현식으로도 사용할 수 있습니다.

```java
String message = switch (medal) {
    case "Gold" -> "금메달입니다.";
    case "Silver" -> "은메달입니다.";
    case "Bronze" -> "동메달입니다.";
    default -> "메달이 없습니다.";
};
```

여러 값을 쉼표로 묶을 수 있고, 블록 안에서 값을 반환할 때는 `yield`를 사용합니다.

## 반복문

`while`은 조건을 먼저 확인하고, 조건이 참인 동안 반복합니다.

```java
int number = 1;
int sum = 0;

while (number <= 10) {
    sum += number;
    number++;
}
```

`do-while`은 실행문을 먼저 수행한 뒤 조건을 확인하므로 조건이 처음부터 거짓이어도
최소 한 번 실행됩니다.

```java
do {
    sum += number;
    number++;
} while (number <= 10);
```

반복 횟수와 초기값, 조건, 증감식을 한눈에 표현할 때는 `for`문이 편리합니다.

```java
for (int i = 1; i <= 10; i++) {
    sum += i;
}
```

## 중첩 반복과 흐름 제어

반복문 안에 반복문을 작성하면 행과 열처럼 두 단계로 변하는 값을 다룰 수 있습니다.

```java
for (int dan = 2; dan <= 9; dan++) {
    for (int times = 1; times <= 9; times++) {
        System.out.println(dan + " X " + times + " = " + dan * times);
    }
}
```

- `break`는 현재 반복문을 즉시 종료합니다.
- `continue`는 현재 회차의 남은 코드를 건너뛰고 다음 반복으로 이동합니다.
- 중괄호를 생략하면 의도와 다른 문장이 반복되거나 실행될 수 있으므로 범위를 주의합니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| 기본 if문 | [보기](./images/01_ifExample1.PNG) |
| if-else | [보기](./images/02_ifExample2.PNG) |
| 다중 조건문 | [보기](./images/03_ifExample3.PNG) |
| 독립된 if문 비교 | [보기](./images/04_ifExample4.PNG) |
| switch-case | [보기](./images/05_switch.PNG) |
| switch 표현식 | [보기](./images/07_switch.PNG) |
| while 반복문 | [보기](./images/12_while_loop.PNG) |
| do-while 반복문 | [보기](./images/13_do_while_loop.PNG) |
| for 반복문 | [보기](./images/14_forWhile.PNG) |
| 중첩 반복문과 구구단 | [보기](./images/17_구구단.PNG) |
| break | [보기](./images/20_break.PNG) |

## 실습 중 알게 된 점

- 여러 조건 중 하나만 실행할 때는 독립된 `if`가 아니라 `else if`로 연결해야 합니다.
- `switch` 표현식은 분기 결과를 변수에 바로 저장할 수 있습니다.
- 반복문에서는 조건을 언젠가 거짓으로 만드는 증감식이 빠지지 않았는지 확인해야 합니다.
- `do-while`은 조건 검사보다 실행이 먼저이므로 최소 한 번 수행됩니다.
- `break`와 `continue`가 어느 반복문에 적용되는지 중첩 구조에서 특히 주의해야 합니다.

## 오늘의 한 줄

조건문은 길을 선택하고, 반복문은 선택한 작업을 필요한 만큼 이어 간다.

