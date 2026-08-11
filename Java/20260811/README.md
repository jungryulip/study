# DAY 17 — Java 기본 클래스, 제네릭과 컬렉션

> 2026-08-11 · 객체의 동일성을 정의하고 여러 자료형과 자료구조를 안전하게 다루기

## 오늘 배운 내용

- `java.lang` 패키지와 `Object` 클래스
- `toString()`, `equals()`, `hashCode()` 재정의
- 문자열 상수 풀과 `String`의 불변성
- `StringBuilder`와 `StringBuffer`
- `enum`과 `record`
- 제네릭 클래스와 타입 매개변수
- 컬렉션 프레임워크
- `ArrayList`, `LinkedList`, `Stack`, `Queue`, `HashSet`

## java.lang과 Object

`java.lang` 패키지는 Java 프로그램에서 기본적으로 사용하는 클래스가 모여 있어
별도의 `import` 없이 사용할 수 있습니다. `Object`는 모든 Java 클래스의 최상위
클래스이며, 객체를 표현하고 비교하는 기본 메서드를 제공합니다.

## toString()

`toString()`은 객체를 문자열로 표현합니다. 기본 구현은 클래스 이름과 해시 코드
형태를 반환하지만, 객체의 주요 값을 알아보기 쉽게 재정의할 수 있습니다.

```java
@Override
public String toString() {
    return bookTitle + ", " + bookNumber;
}
```

객체를 `System.out.println()`에 전달하면 내부적으로 `toString()`이 호출됩니다.

## equals()와 hashCode()

`==`는 두 참조가 같은 객체를 가리키는지 비교하고, `equals()`는 객체가 논리적으로
같은지 비교하도록 재정의할 수 있습니다.

```java
@Override
public boolean equals(Object obj) {
    if (obj instanceof Student student) {
        return studentId == student.studentId;
    }
    return false;
}

@Override
public int hashCode() {
    return Integer.hashCode(studentId);
}
```

논리적으로 같은 객체는 같은 해시 코드를 반환해야 합니다. 따라서 `equals()`를
재정의할 때는 `hashCode()`도 함께 재정의해야 `HashSet`이나 `HashMap`에서 올바르게
동작합니다. `System.identityHashCode()`를 사용하면 재정의 여부와 관계없이 객체
자체를 기준으로 한 해시 코드를 확인할 수 있습니다.

## String의 특징

문자열 리터럴은 문자열 상수 풀에서 같은 값을 공유할 수 있지만, `new String()`은
힙 영역에 별도의 객체를 만듭니다. 문자열 내용 비교에는 `==`가 아니라 `equals()`를
사용합니다.

```java
String a = "abc";
String b = "abc";
String c = new String("abc");

System.out.println(a == b);      // true일 수 있음
System.out.println(a == c);      // false
System.out.println(a.equals(c)); // true
```

`String`은 불변 객체이므로 문자열을 연결할 때마다 새로운 객체가 만들어집니다.
반복해서 문자열을 변경해야 한다면 가변 문자열 클래스인 `StringBuilder`를 사용하면
불필요한 객체 생성을 줄일 수 있습니다. 여러 스레드에서 동기화가 필요할 때는
`StringBuffer`를 사용할 수 있습니다.

## enum과 record

`enum`은 서로 관련된 상수 집합을 하나의 타입으로 정의합니다.

```java
enum Week {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY
}
```

`record`는 값을 보관하는 불변 데이터 클래스를 간결하게 선언합니다. 컴파일러가
생성자, 접근자, `equals()`, `hashCode()`, `toString()`을 자동으로 제공합니다.

```java
record Member(String name, int age) {}
```

## 제네릭

제네릭은 클래스나 메서드가 사용할 자료형을 타입 매개변수로 받게 합니다. 형변환을
줄이고 컴파일 시점에 잘못된 자료형 사용을 확인할 수 있습니다.

```java
public class GenericPrinter<T> {
    private T material;

    public void setMaterial(T material) {
        this.material = material;
    }

    public T getMaterial() {
        return material;
    }
}
```

`GenericPrinter<Plastic>`과 `GenericPrinter<Powder>`처럼 같은 구조를 여러 자료형에
안전하게 재사용할 수 있습니다. 타입의 범위를 제한하려면 `<T extends Material>`과
같은 상한 제한을 사용합니다.

## 컬렉션 프레임워크

컬렉션 프레임워크는 여러 객체를 저장하고 검색하는 자료구조와 알고리즘을 제공합니다.

| 자료구조 | 특징 | 대표 동작 |
| --- | --- | --- |
| `ArrayList` | 배열 기반, 인덱스 조회가 빠름 | `add`, `get`, `remove` |
| `LinkedList` | 노드 연결 기반, 중간 삽입·삭제에 유리 | `addFirst`, `addLast` |
| `Stack` | LIFO, 마지막에 넣은 요소를 먼저 꺼냄 | `push`, `pop`, `peek` |
| `Queue` | FIFO, 먼저 넣은 요소를 먼저 꺼냄 | `offer`, `poll`, `peek` |
| `HashSet` | 순서 없이 중복을 허용하지 않음 | `add`, `contains`, `remove` |

## Stack과 Queue

스택은 책을 쌓는 것처럼 마지막에 들어온 요소가 먼저 나오는 LIFO 구조입니다.

```java
Stack<String> stack = new Stack<>();
stack.push("A");
stack.push("B");
System.out.println(stack.pop()); // B
```

큐는 줄을 서는 것처럼 먼저 들어온 요소가 먼저 나오는 FIFO 구조입니다. Java에서는
`Queue` 인터페이스의 구현체로 `LinkedList` 등을 사용할 수 있습니다.

```java
Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.offer("B");
System.out.println(queue.poll()); // A
```

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| `toString()` 재정의 | [보기](./images/01_tostringmehod.PNG) |
| 문자열 `equals()` | [보기](./images/02_stringequals.PNG) |
| 객체 동일성 비교 | [보기](./images/03_stringequalsTest.PNG) |
| `identityHashCode()` | [보기](./images/04_identityhashcode.PNG) |
| `String` 생성 방식 | [보기](./images/05_stringclass_1.PNG) |
| 문자열 연결 | [보기](./images/06_connected%20concat.PNG) |
| `StringBuffer` | [보기](./images/07_buffer.PNG) |
| `enum` | [보기](./images/08_.PNG) |
| `record` | [보기](./images/09_record.PNG) |
| 제네릭 클래스 | [보기](./images/10_genericclass.PNG) |
| `Stack` | [보기](./images/12_stack.PNG) |
| `Queue` | [보기](./images/13_Queue.PNG) |
| `LinkedList` | [보기](./images/14_linkedlist.PNG) |
| `HashSet` | [보기](./images/15_hashset.PNG) |

## 실습 중 알게 된 점

- 객체의 주소 동일성과 논리적 동일성은 서로 다른 개념입니다.
- `equals()`가 같은 객체는 반드시 같은 `hashCode()`를 반환해야 합니다.
- `String`은 불변이므로 반복 연결에는 `StringBuilder`가 더 효율적입니다.
- 제네릭은 자료형 오류를 실행 전 컴파일 단계에서 발견하게 해 줍니다.
- 컬렉션은 데이터의 조회·삽입·삭제 순서와 중복 허용 여부에 맞춰 선택해야 합니다.

## 오늘의 한 줄

객체의 동일성 규칙을 올바르게 정의하고 목적에 맞는 제네릭 컬렉션을 선택하면 더 안전한 프로그램을 만들 수 있다.
