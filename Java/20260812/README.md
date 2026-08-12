# DAY 18 — Java 람다, 스트림과 예외 처리

> 2026-08-12 · 컬렉션 데이터를 선언적으로 처리하고 예외에 안전한 흐름 만들기

## 오늘 배운 내용

- `ArrayList`와 `HashSet`의 차이
- 익명 내부 클래스와 캡처 변수
- 함수형 인터페이스와 람다식
- Stream의 생성과 중간·최종 연산
- `filter`, `map`, `sorted`, `collect`, `reduce`
- `try-catch-finally` 예외 처리
- `throws`를 이용한 예외 처리 위임

## ArrayList와 HashSet

`ArrayList`는 입력 순서와 인덱스를 유지하고 중복 요소를 허용합니다. 반면
`HashSet`은 인덱스가 없고 중복을 허용하지 않으며 저장 순서를 보장하지 않습니다.

| 구분 | ArrayList | HashSet |
| --- | --- | --- |
| 순서 | 입력 순서 유지 | 보장하지 않음 |
| 인덱스 | 있음 | 없음 |
| 중복 | 허용 | 허용하지 않음 |
| 탐색 | `get(index)` | 반복자·향상된 for문 |

`HashSet`에서 사용자 정의 객체의 중복을 판단하려면 `equals()`와 `hashCode()`를
논리적 동일성 기준에 맞게 함께 재정의해야 합니다. 반복자로 순회하면서 요소를
삭제할 때는 컬렉션의 `remove()`보다 `Iterator.remove()`를 사용하는 것이 안전합니다.

## 익명 내부 클래스

익명 내부 클래스는 이름 없이 인터페이스나 추상 클래스를 즉시 구현합니다.

```java
Runnable runner = new Runnable() {
    @Override
    public void run() {
        System.out.println("익명 클래스 실행");
    }
};
```

메서드의 지역 변수를 참조할 수 있지만, 해당 변수는 값이 바뀌지 않는
`final` 또는 effectively final 상태여야 합니다.

## 함수형 인터페이스와 람다식

추상 메서드가 하나뿐인 함수형 인터페이스는 람다식으로 간결하게 구현할 수 있습니다.
`@FunctionalInterface`를 붙이면 추상 메서드가 하나인지 컴파일러가 확인합니다.

```java
@FunctionalInterface
interface MyNumber {
    int getMaxNumber(int x, int y);
}

MyNumber max = (x, y) -> x >= y ? x : y;
System.out.println(max.getMaxNumber(10, 20));
```

람다는 매개변수와 실행할 동작을 전달하므로, 한 번만 필요한 작은 동작이나 Stream
연산을 표현할 때 특히 유용합니다.

## Stream 이해하기

Stream은 컬렉션과 배열의 원본을 직접 변경하지 않고 데이터 처리 과정을 연결하는
도구입니다. 핵심은 “반복 방법”보다 “어떤 결과가 필요한지”를 단계로 표현하는 것입니다.

```java
List<String> names = List.of("Kim", "Lee", "Park", "Choi");

List<String> result = names.stream()
    .filter(name -> name.length() >= 4)
    .map(String::toUpperCase)
    .sorted()
    .toList();
```

Stream 파이프라인은 다음 세 부분으로 이해할 수 있습니다.

1. `stream()`으로 데이터 흐름을 만듭니다.
2. `filter`, `map`, `sorted` 같은 중간 연산으로 처리 규칙을 연결합니다.
3. `forEach`, `collect`, `reduce` 같은 최종 연산으로 결과를 만듭니다.

중간 연산은 최종 연산이 호출될 때까지 실제 처리를 미루는 지연 연산의 특징이 있습니다.
Stream은 한 번 최종 연산을 수행하면 다시 사용할 수 없습니다.

## 주요 Stream 연산

- `filter`: 조건을 만족하는 요소만 남깁니다.
- `map`: 각 요소를 다른 값으로 변환합니다.
- `sorted`: 요소를 정렬합니다.
- `collect`: 처리 결과를 리스트나 그룹 등의 자료구조로 모읍니다.
- `reduce`: 여러 요소를 하나의 값으로 누적합니다.

```java
int total = numbers.stream()
    .reduce(0, (sum, number) -> sum + number);
```

여행 고객 실습에서는 나이 조건으로 고객을 걸러내고, 이름을 추출하고, 비용을
합산하는 과정을 Stream 연산으로 나누어 구현했습니다.

## 예외와 예외 처리

예외는 실행 중 발생할 수 있는 비정상 상황을 객체로 표현한 것입니다. 예외 처리는
문제를 숨기는 것이 아니라 실패 상황에서도 프로그램이 적절히 복구하거나 종료되도록
흐름을 설계하는 작업입니다.

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("0으로 나눌 수 없습니다.");
} finally {
    System.out.println("항상 실행되는 정리 작업");
}
```

- `try`: 예외가 발생할 수 있는 코드를 실행합니다.
- `catch`: 발생한 예외 타입에 맞는 대응을 수행합니다.
- `finally`: 성공·실패와 관계없이 필요한 정리 작업을 수행합니다.

## throws로 예외 처리 위임하기

현재 메서드가 예외를 직접 처리하지 않고 호출한 쪽에서 처리하도록 선언할 수 있습니다.

```java
public String readLine() throws IOException {
    return reader.readLine();
}
```

`throws`는 예외를 없애는 것이 아니라 처리 책임을 호출자에게 전달합니다. 호출자는
다시 위임하거나 `try-catch`로 처리해야 합니다. 복구 방법을 가장 잘 아는 계층에서
구체적인 메시지와 대응 방식을 결정하는 것이 좋습니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| 회원 ArrayList | [보기](./images/01_arraylist.PNG) |
| 회원 HashSet | [보기](./images/02_memvberhashset.PNG) |
| 익명 내부 클래스 | [보기](./images/03_innerclass.PNG) |
| 람다 함수형 인터페이스 | [보기](./images/04_lambda_interface.PNG) |
| 문자열 연결 람다 | [보기](./images/05_stringConcat.PNG) |
| 람다 전달 | [보기](./images/06_lambda_testLambda.PNG) |
| Stream `filter` | [보기](./images/07_stream_filter.PNG) |
| Stream `map` | [보기](./images/08_stream_map.PNG) |
| Stream `sorted` | [보기](./images/09_stream_sorted.PNG) |
| Stream `collect` | [보기](./images/10_collect_stream.PNG) |
| Stream `reduce` | [보기](./images/11_reduce_stream.PNG) |
| Stream 종합 실습 | [보기](./images/12_stream_practice.PNG) |
| 기본 예외 처리 | [보기](./images/13_exceptionHandling_.PNG) |
| `try-catch-finally` | [보기](./images/15_exceptionHandling_try-catch-finally.PNG) |
| `throws` | [보기](./images/16_exception_throws.PNG) |

## 실습 중 알게 된 점

- 람다는 함수형 인터페이스의 구현을 값처럼 전달하는 문법입니다.
- Stream은 원본 저장소가 아니라 데이터를 한 번 처리하는 파이프라인입니다.
- 중간 연산과 최종 연산을 구분하면 긴 Stream 코드도 단계별로 읽을 수 있습니다.
- 예외는 무조건 잡는 것보다 복구·기록·위임 중 책임에 맞는 방식을 선택해야 합니다.
- `finally`나 try-with-resources를 사용하면 예외가 발생해도 자원을 안전하게 정리할 수 있습니다.

## 오늘의 한 줄

Stream은 데이터 처리의 의도를 연결하고, 예외 처리는 실패할 때의 책임과 흐름을 설계한다.
