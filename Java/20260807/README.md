# DAY 15 — Java 다형성, 다운캐스팅과 추상화

> 2026-08-07 · 하나의 상위 타입으로 여러 구현을 다루고 공통 규칙 설계하기

## 오늘 배운 내용

- 상위 클래스형 참조와 다형성
- `IS-A` 상속 관계와 `HAS-A` 포함 관계
- 다운캐스팅과 `instanceof`
- 추상 클래스와 추상 메서드
- 템플릿 메서드 패턴
- 인터페이스의 선언과 구현
- 인터페이스를 이용한 전략 교체

## 다형성

다형성은 하나의 상위 클래스형 변수가 서로 다른 하위 클래스 인스턴스를 참조하고,
각 인스턴스가 재정의한 동작을 실행하는 객체지향의 특징입니다.

```java
public void moveAnimal(Animal animal) {
    animal.move();
}

moveAnimal(new Human());
moveAnimal(new Tiger());
moveAnimal(new Eagle());
```

매개변수는 모두 `Animal`이지만 실제 전달된 객체에 따라 `Human`, `Tiger`, `Eagle`의
`move()`가 호출됩니다. 덕분에 하위 클래스마다 별도의 메서드를 만들지 않고 공통
코드로 여러 객체를 처리할 수 있습니다.

## IS-A와 HAS-A 관계

- `IS-A`는 “하위 클래스는 상위 클래스의 한 종류이다”라는 상속 관계이며
  `extends`로 표현합니다.
- `HAS-A`는 한 클래스가 다른 객체를 멤버로 포함하는 관계입니다.

두 클래스의 관계가 자연스러운 종류 관계가 아니라면 상속보다 포함 관계가 더
적절할 수 있습니다.

## 컬렉션에서의 다형성

상위 클래스형 컬렉션에는 여러 하위 클래스 객체를 함께 저장할 수 있습니다.

```java
ArrayList<Customer> customers = new ArrayList<>();
customers.add(new Customer(100, "이순신"));
customers.add(new GoldCustomer(120, "초수영"));
customers.add(new VIPCustomer(140, "홍미연", 10011));

for (Customer customer : customers) {
    System.out.println(customer.calcPrice(10000));
}
```

반복문은 `Customer`만 알고 있어도 각 등급이 재정의한 가격 계산 로직을 실행합니다.

## 다운캐스팅과 instanceof

업캐스팅된 참조로는 상위 클래스에 선언된 멤버만 사용할 수 있습니다. 하위 클래스의
고유 기능이 필요할 때 명시적으로 하위 타입으로 변환하는 것을 다운캐스팅이라고 합니다.

```java
if (animal instanceof Human) {
    Human human = (Human) animal;
    human.readBook();
}
```

실제 객체의 타입과 맞지 않게 변환하면 `ClassCastException`이 발생할 수 있으므로
`instanceof`로 타입을 확인한 뒤 캐스팅해야 합니다.

## 추상 클래스

추상 클래스는 `abstract`로 선언하며 구현 코드가 없는 추상 메서드를 포함할 수
있습니다. 공통 속성과 구현은 상위 클래스에 두고, 하위 클래스마다 달라야 하는
동작은 추상 메서드로 강제합니다.

```java
public abstract class Computer {
    public abstract void display();
    public abstract void typing();

    public void turnOn() {
        System.out.println("전원을 켭니다.");
    }
}
```

추상 클래스는 직접 인스턴스를 만들 수 없으며, 구체 클래스가 추상 메서드를 모두
구현해야 합니다.

## 템플릿 메서드

작업의 전체 순서는 상위 클래스의 `final` 메서드로 고정하고, 세부 단계만 하위
클래스에서 구현하도록 설계할 수 있습니다.

```java
public final void run() {
    startCar();
    drive();
    stop();
    turnOff();
}
```

자동차 주행 과정처럼 전체 흐름은 같지만 세부 동작이 다른 경우에 유용합니다.

## 인터페이스

인터페이스는 클래스가 제공해야 할 기능의 규약을 정의합니다. 클래스는
`implements`로 인터페이스를 구현하며, 여러 구현체를 같은 인터페이스형으로 다룰 수
있습니다.

```java
public interface Calc {
    int add(int num1, int num2);
    int subtract(int num1, int num2);
}

public class CompleteCalc implements Calc {
    @Override
    public int add(int num1, int num2) {
        return num1 + num2;
    }
}
```

스케줄러와 정렬 실습에서는 인터페이스를 기준으로 Round Robin, 최소 작업 우선,
우선순위 할당과 Bubble·Heap·Quick Sort 구현을 교체했습니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| Animal 다형성 | [보기](./images/01_.PNG) |
| 다운캐스팅 | [보기](./images/02_downcasting.PNG) |
| 잘못된 다운캐스팅 | [보기](./images/02_downcasting_error.PNG) |
| Computer 추상 클래스 | [보기](./images/03_computer.PNG) |
| 자동차 템플릿 메서드 | [보기](./images/04_car.PNG) |
| Player 레벨 설계 | [보기](./images/05_player.PNG) |
| 계산기 인터페이스 | [보기](./images/06_calc.PNG) |
| 스케줄러 인터페이스 | [보기](./images/07_schedualer.PNG) |
| 정렬 인터페이스 | [보기](./images/08_sort.PNG) |

## 실습 중 알게 된 점

- 다형성을 사용하면 상위 타입에 의존하면서 실제 구현은 유연하게 교체할 수 있습니다.
- 다운캐스팅은 하위 클래스의 고유 기능이 꼭 필요할 때만 안전하게 사용해야 합니다.
- 추상 클래스는 공통 구현과 상태를 공유하면서 하위 클래스의 필수 동작을 정의합니다.
- 인터페이스는 구현보다 역할과 규약에 집중해 클래스 사이의 결합도를 낮춥니다.
- 템플릿 메서드는 전체 실행 순서를 보호하면서 세부 구현만 확장할 수 있게 합니다.

## 오늘의 한 줄

다형성은 같은 역할을 여러 구현으로 실행하게 하고, 추상 클래스와 인터페이스는 그 역할의 기준을 만든다.
