# DAY 14 — Java 객체 배열과 상속

> 2026-08-06 · 여러 객체를 배열과 컬렉션으로 관리하고 기존 클래스를 확장하기

## 오늘 배운 내용

- 객체 배열의 선언과 요소별 인스턴스 생성
- 객체 배열의 얕은 복사와 깊은 복사
- 향상된 `for`문
- `ArrayList`의 `add`, `get`, `size`
- `extends`를 이용한 클래스 상속
- `protected` 접근 제어자와 `super`
- 상위 클래스형으로의 업캐스팅
- 메서드 오버라이딩

## 객체 배열

객체 배열은 기본 자료형의 값이 아니라 객체를 가리키는 참조값을 저장합니다. 배열만
생성하면 각 요소는 `null`이므로, 사용할 객체를 요소마다 `new`로 생성해야 합니다.

```java
Book[] library = new Book[5];

library[0] = new Book("태백산맥1", "조정래");
library[1] = new Book("태백산맥2", "조정래");

for (int i = 0; i < library.length; i++) {
    library[i].showBookInfo();
}
```

초기화하지 않은 요소에서 메서드를 호출하면 `NullPointerException`이 발생할 수
있으므로 객체가 들어 있는지 먼저 확인해야 합니다.

## 얕은 복사와 깊은 복사

`System.arraycopy`로 객체 배열을 복사하면 각 객체의 참조값이 복사됩니다. 두 배열이
같은 객체를 가리키기 때문에 한쪽에서 객체의 값을 변경하면 다른 배열에서도 변경된
값이 보입니다. 이를 얕은 복사라고 합니다.

```java
System.arraycopy(bookArray1, 0, bookArray2, 0, bookArray1.length);
bookArray1[0].setBookName("나목");
```

객체까지 서로 독립적으로 관리하려면 대상 배열에 새 객체를 만들고 각 속성 값을
복사해야 합니다.

```java
for (int i = 0; i < bookArray1.length; i++) {
    bookArray2[i] = new Book(
        bookArray1[i].getBookName(),
        bookArray1[i].getAuthor()
    );
}
```

이처럼 원본과 별개의 객체를 만드는 방식을 깊은 복사라고 합니다.

## 향상된 for문

배열이나 컬렉션의 모든 요소를 처음부터 끝까지 읽을 때 향상된 `for`문을 사용하면
인덱스 없이 간결하게 순회할 수 있습니다.

```java
String[] languages = {"Java", "C", "Python", "JavaScript"};

for (String language : languages) {
    System.out.println(language);
}
```

요소의 위치가 필요하거나 특정 범위만 순회해야 한다면 일반 `for`문을 사용합니다.

## ArrayList

일반 배열은 생성할 때 길이를 정해야 하지만 `ArrayList`는 요소를 추가하거나 제거할
때 크기를 유연하게 관리합니다.

```java
ArrayList<Book> library = new ArrayList<>();

library.add(new Book("태백산맥1", "조정래"));
library.add(new Book("태백산맥2", "조정래"));

for (int i = 0; i < library.size(); i++) {
    Book book = library.get(i);
    book.showBookInfo();
}
```

- 배열의 길이는 `length`, `ArrayList`의 요소 수는 `size()`로 확인합니다.
- `add()`로 요소를 추가하고 `get(index)`로 읽습니다.
- 제네릭 `<Book>`을 사용하면 저장할 객체의 자료형을 제한할 수 있습니다.

## 상속

상속은 이미 구현된 클래스의 속성과 기능을 물려받아 새로운 클래스를 확장하는
방법입니다. Java에서는 `extends`를 사용합니다.

```java
public class VIPCustomer extends Customer {
    private int agentId;
    private double saleRatio;
}
```

`Customer`는 상위 클래스, `VIPCustomer`는 하위 클래스입니다. 하위 클래스는 상위
클래스의 `public`과 `protected` 멤버를 사용할 수 있습니다. 상속은 두 클래스가
“VIP 고객은 고객이다”처럼 `is-a` 관계일 때 사용하는 것이 적절합니다.

## super와 생성자 호출

하위 클래스의 인스턴스를 만들면 상위 클래스 부분이 먼저 생성됩니다. `super()`는
상위 클래스의 생성자를 호출하며, 생략하면 매개변수 없는 상위 생성자가 자동으로
호출됩니다.

```java
public VIPCustomer(String name, int id, int agentId) {
    super(name, id);
    this.agentId = agentId;
    customerGrade = "VIP";
}
```

매개변수가 있는 상위 생성자를 사용하려면 하위 생성자의 첫 문장에서 직접
`super(...)`를 호출해야 합니다.

## 업캐스팅

하위 클래스 객체는 상위 클래스형 변수에 대입할 수 있습니다.

```java
Customer customer = new VIPCustomer();
```

이를 업캐스팅이라고 합니다. 변수의 자료형으로 접근 가능한 멤버가 제한되지만, 실제
호출되는 재정의 메서드는 생성된 인스턴스의 메서드입니다.

## 메서드 오버라이딩

상위 클래스의 메서드가 하위 클래스의 동작에 맞지 않으면 같은 이름과 매개변수,
반환형으로 다시 구현할 수 있습니다.

```java
@Override
public int calcPrice(int price) {
    bonusPoint += (int) (price * bonusRatio);
    return price - (int) (price * saleRatio);
}
```

`@Override`를 붙이면 재정의 규칙을 지켰는지 컴파일러가 검사해 주므로 오타나 잘못된
매개변수 구성을 쉽게 발견할 수 있습니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| Book 객체 배열 | [보기](./images/01_array1_bookArray1.PNG) |
| 객체 배열 얕은 복사 | [보기](./images/01_array1_objectcopy1.PNG) |
| 객체 배열 깊은 복사 | [보기](./images/01_array1_objectcopy2.PNG) |
| 향상된 for문 | [보기](./images/01_enhanceForLoop.PNG) |
| ArrayList 사용 | [보기](./images/02_arrayList_arrayListTest.PNG) |
| 학생별 과목 ArrayList | [보기](./images/03_arrayList_02_student.PNG) |
| Customer 상위 클래스 | [보기](./images/04_inheritance_customer.PNG) |
| VIPCustomer 상속 | [보기](./images/04_inheritance_vipcustomer.PNG) |
| 업캐스팅 | [보기](./images/04_inheritance_customerTest2.PNG) |
| 메서드 오버라이딩 | [보기](./images/05_overriding_1.PNG) |

## 실습 중 알게 된 점

- 객체 배열을 만들었다고 각 요소의 인스턴스까지 자동 생성되는 것은 아닙니다.
- 객체 배열의 얕은 복사는 원본과 복사본이 같은 객체를 공유합니다.
- `ArrayList`는 크기가 변하는 객체 목록을 관리할 때 일반 배열보다 편리합니다.
- 상속은 단순한 코드 재사용보다 클래스 사이의 자연스러운 관계를 먼저 고려해야 합니다.
- 오버라이딩된 메서드는 참조 변수의 자료형보다 실제 인스턴스의 종류에 따라 실행됩니다.

## 오늘의 한 줄

배열과 컬렉션은 여러 객체를 묶고, 상속과 오버라이딩은 객체의 공통점과 차이를 표현한다.

