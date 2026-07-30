# DAY 09 — 계층형 질의와 Java 첫걸음

> 2026-07-30 · Oracle SQL의 계층 구조를 탐색하고 Java 개발 환경과 기본 문법 익히기

## 오늘 배운 내용

### Oracle SQL

- `START WITH`와 `CONNECT BY PRIOR`를 이용한 계층형 질의
- Top-down·Bottom-up 탐색과 `LEVEL`
- `CONNECT_BY_ROOT`, `CONNECT_BY_ISLEAF`
- `SYS_CONNECT_BY_PATH`로 계층 경로 출력
- `ORDER SIBLINGS BY`로 같은 레벨의 데이터 정렬
- `WHERE`와 `CONNECT BY`에서 가지를 제외할 때의 차이
- 데이터베이스 접속과 `STARTUP`·`SHUTDOWN`

### Java

- 고급 언어, 컴파일러, 바이트코드와 JVM의 역할
- JDK와 IntelliJ 설치 및 프로젝트 생성
- 클래스와 `main` 메서드
- `System.out.println`으로 문자열 출력
- 한 줄·여러 줄 주석과 IntelliJ 단축어
- 변수 선언·대입과 사칙연산

## Oracle SQL 정리

계층형 질의는 부모와 자식 관계를 가진 데이터를 트리 형태로 조회할 때 사용합니다.

```sql
SELECT empno, ename, mgr, LEVEL
FROM emp
START WITH mgr IS NULL
CONNECT BY PRIOR empno = mgr;
```

- `START WITH`는 계층 탐색을 시작할 행을 정합니다.
- `CONNECT BY`는 부모 행과 자식 행의 연결 조건을 정합니다.
- `PRIOR`가 어느 컬럼 앞에 붙는지에 따라 Top-down·Bottom-up 방향이 달라집니다.
- `LEVEL`은 현재 행의 계층 깊이를 나타냅니다.

```sql
SELECT ename,
       CONNECT_BY_ROOT ename AS root_name,
       CONNECT_BY_ISLEAF AS is_leaf,
       SYS_CONNECT_BY_PATH(ename, '/') AS path
FROM emp
START WITH mgr IS NULL
CONNECT BY PRIOR empno = mgr
ORDER SIBLINGS BY ename;
```

`WHERE` 절에서 행을 제외하면 해당 행만 결과에서 빠지지만, `CONNECT BY` 조건에서
제외하면 그 행 아래의 가지 전체가 탐색 대상에서 빠질 수 있다는 차이도 확인했습니다.

## Java 정리

Java 소스 코드는 컴파일러를 통해 바이트코드로 변환되고, 운영체제별 JVM이 이를
실행합니다. 이 구조 덕분에 같은 바이트코드를 여러 환경에서 사용할 수 있습니다.

```java
public class _01_HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World~~~");
    }
}
```

- 클래스 이름과 파일 이름을 일치시킵니다.
- 프로그램은 `main` 메서드에서 시작합니다.
- `//`는 한 줄, `/* ... */`는 여러 줄 주석에 사용합니다.
- IntelliJ에서 `main`, `sout` 같은 자동 완성 단축어를 활용할 수 있습니다.

```java
int level;
level = 10;

int javaScore = 90;
int pythonScore = 85;
int htmlScore = 80;
double average = (javaScore + pythonScore + htmlScore) / 3.0;
```

변수는 자료형과 이름을 정해 선언하고 값을 대입합니다. 평균처럼 소수점 결과가
필요한 계산에서는 정수 나눗셈이 되지 않도록 실수 값을 사용해야 합니다.

## 실습 파일

- [Oracle SQL 쿼리](./20260730_scott.sql)
- [실행 결과와 Java 수업 노트](./results-and-notes.txt)
- [Oracle SQL 실습 화면](./images/oracle/)
- [Java 실습 화면](./images/java/)

## 주요 실습 화면

| 구분 | 주제 | 화면 |
| --- | --- | --- |
| Oracle SQL | Top-down 계층형 질의 | [보기](./images/oracle/01_hierarchical-query_top-down.PNG) |
| Oracle SQL | Bottom-up 계층형 질의 | [보기](./images/oracle/02_hierarchical-query_bottom-up.PNG) |
| Oracle SQL | 계층의 LEVEL | [보기](./images/oracle/03_hierarchical-query_level.PNG) |
| Oracle SQL | SYS_CONNECT_BY_PATH | [보기](./images/oracle/09_hierarchical-query_sys-connect-by-path.PNG) |
| Oracle SQL | ORDER SIBLINGS BY | [보기](./images/oracle/11_hierarchical-query_order-siblings-by.PNG) |
| Java | Java와 JVM 소개 | [보기](./images/java/java_01.PNG) |
| Java | Hello World | [보기](./images/java/java_04.PNG) |
| Java | 변수와 연산 | [보기](./images/java/java_07.PNG) |

## 실습 중 알게 된 점

- 계층형 질의는 `PRIOR`의 위치를 먼저 확인해야 탐색 방향을 이해하기 쉽습니다.
- 같은 조건도 `WHERE`와 `CONNECT BY` 중 어디에 작성하는지에 따라 결과가 달라집니다.
- Java는 소스 코드를 바로 실행하지 않고 바이트코드와 JVM을 거칩니다.
- 변수의 자료형은 저장할 값뿐 아니라 연산 결과에도 영향을 줍니다.

## 오늘의 한 줄

데이터의 관계를 따라가는 SQL과 프로그램의 흐름을 만드는 Java를 함께 시작했다.
