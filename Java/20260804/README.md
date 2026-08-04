# DAY 12 — Java 객체와 클래스

> 2026-08-04 · 객체의 속성과 기능을 클래스로 설계하고 인스턴스로 사용하기

## 오늘 배운 내용

- 객체지향 프로그래밍과 클래스의 역할
- 멤버 변수와 메서드
- 패키지와 클래스 이름 규칙
- `new`를 이용한 인스턴스 생성
- 메서드의 매개변수와 반환값
- 기본 생성자와 생성자 오버로딩
- 참조 자료형과 객체 사이의 협력
- `private`, getter, setter를 이용한 정보 은닉

## 객체와 클래스

객체지향 프로그래밍은 프로그램을 여러 객체로 나누고, 각 객체의 역할과 객체 사이의
협력을 구현하는 방식입니다. 클래스는 객체가 가질 속성과 기능을 코드로 정의한
설계도입니다.

```java
public class Student {
    int studentId;
    String studentName;
    int grade;
    String address;

    public void showStudentInfo() {
        System.out.println(studentName + ", " + address);
    }
}
```

- 객체의 속성은 멤버 변수로 표현합니다.
- 객체가 수행하는 기능은 메서드로 구현합니다.
- 클래스 이름은 보통 대문자로 시작하는 PascalCase를 사용합니다.
- 패키지 이름은 소문자로 작성하고 관련 클래스를 계층적으로 묶습니다.

## 메서드

메서드는 입력값을 매개변수로 받아 작업한 뒤 결과를 반환할 수 있습니다. 반환값이
없으면 `void`, 반환값이 있으면 반환할 자료형을 작성합니다.

```java
public static int add(int number1, int number2) {
    return number1 + number2;
}

int result = add(10, 20);
```

기능을 메서드로 분리하면 코드의 의미가 명확해지고, 같은 기능을 재사용하기 쉬우며,
수정할 위치도 줄어듭니다.

## 인스턴스 생성

클래스로 실제 객체를 만들 때 `new`를 사용합니다. 같은 클래스에서 생성한 객체라도
각 인스턴스는 서로 다른 상태를 가질 수 있습니다.

```java
Student studentAhn = new Student();
studentAhn.studentName = "안연수";
studentAhn.address = "서울 송파구";

Student studentLee = new Student();
studentLee.studentName = "이순신";
studentLee.address = "서울 서초구";
```

`studentAhn`과 `studentLee`에는 객체 자체가 아니라 생성된 객체를 찾아갈 수 있는
참조값이 저장됩니다.

## 생성자와 오버로딩

생성자는 인스턴스를 만들 때 호출되며 객체의 초기 상태를 설정합니다. 생성자를 직접
작성하지 않으면 컴파일러가 매개변수 없는 기본 생성자를 제공합니다. 필요한 초기화
방식이 여러 개라면 매개변수가 다른 생성자를 여러 개 정의할 수 있습니다.

```java
public class Person {
    String name;
    float height;
    float weight;

    public Person() {
    }

    public Person(String name) {
        this.name = name;
    }
}
```

`this.name`은 현재 인스턴스의 멤버 변수를 뜻하며, 이름이 같은 매개변수와 구분할 때
사용합니다.

## 참조 자료형과 객체 협력

클래스 안에서 다른 클래스형 변수를 사용하면 객체가 또 다른 객체를 포함하고 협력하는
구조를 만들 수 있습니다.

```java
public class Student {
    String studentName;
    Subject korean;
    Subject math;

    public Student(String studentName) {
        this.studentName = studentName;
        korean = new Subject();
        math = new Subject();
    }
}
```

`String`, `Student`, `Subject`처럼 클래스로 정의된 자료형을 참조 자료형이라고 합니다.

## 정보 은닉

멤버 변수를 `private`으로 선언하면 클래스 외부에서 직접 접근할 수 없습니다. 필요한
경우 getter와 setter를 제공하여 읽기와 변경 방식을 클래스가 통제합니다.

```java
public class MyDate {
    private int year;
    private int month;
    private int day;

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }
}
```

setter 안에서 날짜 범위를 검사하는 것처럼 유효성 검증을 추가하면 잘못된 값이 객체에
저장되는 것을 막을 수 있습니다.

## 실습 자료

- [전체 수업 노트와 예제 코드](./notes.txt)
- [실습 화면 전체 보기](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| 클래스와 메서드 | [보기](./images/01_class-method.PNG) |
| 함수 작성과 호출 | [보기](./images/02_fuctions.PNG) |
| Student 인스턴스 생성 | [보기](./images/03_newstudent.PNG) |
| 여러 인스턴스 | [보기](./images/04_instence.PNG) |
| 인스턴스 참조값 | [보기](./images/05_address.PNG) |
| Coffee 클래스 | [보기](./images/06_Q1_coffeeclass.PNG) |
| 생성자 | [보기](./images/09_construtors.PNG) |
| 참조 자료형 | [보기](./images/11_reference.PNG) |
| 객체 협력 결과 | [보기](./images/12_reference_result.PNG) |
| private과 getter·setter | [보기](./images/13_private.PNG) |

## 실습 중 알게 된 점

- 클래스는 속성과 기능을 한곳에 모아 객체의 역할을 표현합니다.
- 같은 클래스에서 만든 인스턴스도 각자 독립적인 멤버 변수 값을 가집니다.
- 생성자는 반환형이 없으며 클래스 이름과 같아야 합니다.
- 생성자를 직접 정의하면 컴파일러가 기본 생성자를 자동으로 추가하지 않습니다.
- 멤버 변수를 `private`으로 보호하면 객체의 상태를 더 안전하게 관리할 수 있습니다.

## 오늘의 한 줄

클래스는 객체의 설계도이고, 인스턴스는 그 설계로 만들어 각자의 상태를 가진 실제 객체다.

