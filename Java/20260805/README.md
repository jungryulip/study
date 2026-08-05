# DAY 13 — Java 캡슐화, this, static과 배열

> 2026-08-05 · 객체의 내부 구현을 보호하고 공유 데이터와 여러 값을 체계적으로 관리하기

## 오늘 배운 내용

- 캡슐화와 객체 사이의 협력
- 현재 인스턴스를 가리키는 `this`
- `this()`를 이용한 다른 생성자 호출
- 인스턴스가 공유하는 `static` 변수와 메서드
- 메서드 안에서 사용하는 지역 변수의 생명주기
- 싱글턴 패턴의 기본 구조
- 배열 선언·초기화·순회와 `length`
- 배열 복사와 2차원 배열

## 캡슐화

캡슐화는 관련 데이터와 기능을 하나의 클래스 안에 모으고, 외부에는 필요한 기능만
공개하는 방법입니다. 내부 작업을 `private` 메서드로 숨기면 사용하는 쪽은 복잡한
처리 순서를 알지 않아도 공개 메서드 하나로 기능을 실행할 수 있습니다.

```java
public class PhoneStore {
    private Phone phone;

    public Phone sellPhone(String model, double budget) {
        if (model.equals(phone.getModel()) && budget >= phone.getPrice()) {
            registerPayment();
            discountPromotion();
            saveData();
            return phone;
        }
        return null;
    }

    private void registerPayment() {
        System.out.println("요금제와 약정을 등록합니다.");
    }
}
```

`Customer`, `PhoneStore`, `Phone`이 각자의 역할을 맡고 메서드를 통해 요청과 결과를
주고받는 과정도 연습했습니다.

## this와 생성자

`this`는 현재 생성된 인스턴스 자신을 가리킵니다. 매개변수와 멤버 변수의 이름이
같을 때 둘을 구분하거나 현재 객체의 참조값을 사용할 때 활용합니다.

```java
public void setYear(int year) {
    this.year = year;
}
```

생성자 안에서 `this()`를 사용하면 같은 클래스의 다른 생성자를 호출할 수 있습니다.
반드시 생성자의 첫 문장에 작성해야 합니다.

```java
Person() {
    this("이름없음", 1);
}

Person(String name, int age) {
    this.name = name;
    this.age = age;
}
```

## 객체 사이의 협력

학생이 버스나 지하철을 이용하는 예제로 한 객체가 다른 객체의 메서드를 호출하면서
각 객체의 상태가 함께 변하는 과정을 확인했습니다.

```java
public void takeBus(Bus bus) {
    bus.take(1000);
    this.money -= 1000;
}
```

학생의 잔액은 줄고, 버스의 승객 수와 수입은 늘어납니다. 각 클래스는 자신의 상태를
직접 관리하고 다른 객체는 공개된 메서드를 통해 협력합니다.

## static 변수와 메서드

`static` 멤버는 인스턴스마다 새로 만들어지지 않고 클래스에 하나만 존재합니다.
따라서 같은 클래스의 모든 인스턴스가 값을 공유합니다.

```java
public class Student {
    private static int serialNumber = 1000;
    private int studentId;

    public Student() {
        serialNumber++;
        studentId = serialNumber;
    }

    public static int getSerialNumber() {
        return serialNumber;
    }
}
```

클래스 멤버는 `Student.getSerialNumber()`처럼 클래스 이름으로 접근하는 것이 의미를
명확하게 보여 줍니다. `static` 메서드는 특정 인스턴스 없이 실행되므로 인스턴스
멤버를 직접 사용할 수 없습니다.

## 지역 변수의 생명주기

수업 노트의 “로컬 함수” 부분은 예제상 메서드 내부의 지역 변수를 다룬 내용입니다.
지역 변수는 메서드가 호출될 때 생성되고 실행이 끝나면 사용할 수 없게 됩니다.

```java
public static int getSerialNumber() {
    int count = 10;
    count++;
    return serialNumber;
}
```

위 `count`는 메서드를 호출할 때마다 새로 만들어지지만, `static`인 `serialNumber`는
호출이 끝나도 클래스에 유지됩니다.

## 싱글턴 패턴

싱글턴은 프로그램에서 특정 클래스의 인스턴스를 하나만 만들고 여러 곳에서 공유하는
패턴입니다.

```java
public class Company {
    private static final Company INSTANCE = new Company();

    private Company() {
    }

    public static Company getInstance() {
        return INSTANCE;
    }
}
```

생성자를 `private`으로 막고, 클래스가 보관한 하나의 인스턴스를 공개 메서드로
반환합니다.

## 배열

배열은 같은 자료형의 값을 연속된 순서로 관리합니다. 인덱스는 `0`부터 시작하며
배열의 길이는 `length` 속성으로 확인합니다.

```java
int[] numbers = new int[10];
int[] scores = {80, 90, 75, 100, 85};

for (int i = 0; i < scores.length; i++) {
    System.out.println(scores[i]);
}
```

- 정수 배열의 기본값은 `0`, 실수 배열은 `0.0`, 객체 배열은 `null`입니다.
- 배열을 값과 함께 초기화할 때는 크기를 별도로 지정하지 않습니다.
- 실제로 값을 넣은 개수와 배열 전체 길이가 다르면 `size` 같은 변수를 따로 관리할 수 있습니다.
- 향상된 `for`문으로 배열의 값을 순서대로 읽을 수 있습니다.

## 배열 복사와 2차원 배열

```java
System.arraycopy(source, 0, destination, 0, 4);
```

`System.arraycopy`는 원본 배열, 시작 위치, 대상 배열, 대상 시작 위치, 복사 개수를
지정합니다.

```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6}
};

for (int row = 0; row < matrix.length; row++) {
    for (int column = 0; column < matrix[row].length; column++) {
        System.out.println(matrix[row][column]);
    }
}
```

2차원 배열은 행마다 길이가 다를 수 있으므로 안쪽 반복문의 조건에
`matrix[row].length`를 사용합니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| Phone 캡슐화 | [보기](./images/01_1_phone.PNG) |
| Customer와 PhoneStore 협력 | [보기](./images/01_3_phoneStore.PNG) |
| 현재 인스턴스의 this | [보기](./images/02_this.PNG) |
| 다른 생성자를 호출하는 this() | [보기](./images/02_this_.PNG) |
| 학생과 버스의 객체 협력 | [보기](./images/02_2_bus.PNG) |
| static 변수 공유 | [보기](./images/03_Stu1_test3.PNG) |
| static 메서드와 지역 변수 | [보기](./images/04_Stu2.PNG) |
| 싱글턴 Company | [보기](./images/05_singleton_company.PNG) |
| 배열 선언과 순회 | [보기](./images/06_array.PNG) |
| 배열 길이와 실제 데이터 개수 | [보기](./images/07_array_length_.PNG) |
| 배열 복사 | [보기](./images/08_array_copy.PNG) |
| 2차원 배열 | [보기](./images/09_two_dimension.PNG) |

## 실습 중 알게 된 점

- 캡슐화는 데이터만 숨기는 것이 아니라 내부 처리 과정도 필요한 만큼 감춥니다.
- `this()`는 생성자 코드의 중복을 줄이며 반드시 첫 문장에서 호출해야 합니다.
- `static` 값은 모든 인스턴스가 공유하므로 한 객체의 변경이 다른 객체에도 보입니다.
- 지역 변수와 클래스 변수는 생성 시점과 유지되는 기간이 다릅니다.
- 배열 반복 조건에는 고정 숫자보다 `length`를 사용해야 크기가 바뀌어도 안전합니다.

## 오늘의 한 줄

객체의 경계는 캡슐화로 지키고, 공유 값은 static으로, 같은 종류의 여러 값은 배열로 관리한다.

