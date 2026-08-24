# DAY 26 — Java JDBC로 Oracle 데이터베이스 다루기

> 2026-08-24 학습 기록

JDBC를 이용해 Java 프로그램과 Oracle 데이터베이스를 연결하고 SQL을 실행했다.
`Connection`, `PreparedStatement`, `ResultSet`의 역할을 이해하고 INSERT·UPDATE·SELECT
작업과 자원 해제를 직접 실습했다.

## 오늘 배운 내용

### 1. JDBC란?

JDBC(Java Database Connectivity)는 Java 애플리케이션에서 관계형 데이터베이스에
접속하고 SQL을 실행할 수 있도록 제공되는 표준 API다.

```text
Java 애플리케이션
  → JDBC API
  → Oracle JDBC Driver
  → Oracle Database
```

### 2. Oracle 연결 과정

1. JDBC 드라이버를 프로젝트 의존성에 추가한다.
2. Oracle 드라이버 클래스를 로드한다.
3. JDBC URL과 인증 정보로 `Connection`을 얻는다.
4. SQL 작업을 수행한다.
5. 사용한 자원을 닫는다.

```java
Class.forName("oracle.jdbc.OracleDriver");

Connection conn = DriverManager.getConnection(
    "jdbc:oracle:thin:@localhost:1521/xe",
    System.getenv("DB_USER"),
    System.getenv("DB_PASSWORD")
);
```

접속 계정과 비밀번호는 코드에 직접 작성하지 않고 환경 변수나 안전한 설정 관리
방식을 사용하는 것이 좋다.

### 3. INSERT와 PreparedStatement

```java
String sql = """
    INSERT INTO users
      (userid, username, userpassword, userage, useremail)
    VALUES (?, ?, ?, ?, ?)
    """;

PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userId);
pstmt.setString(2, userName);
pstmt.setString(3, password);
pstmt.setInt(4, age);
pstmt.setString(5, email);

int rows = pstmt.executeUpdate();
```

- 물음표는 나중에 값을 바인딩하는 파라미터 자리다.
- `setString()`, `setInt()` 등으로 SQL 타입에 맞는 값을 지정한다.
- `executeUpdate()`는 INSERT·UPDATE·DELETE에 사용하며 반영된 행 수를 반환한다.
- 문자열 연결보다 SQL Injection 방지와 타입 처리 측면에서 안전하다.

### 4. UPDATE

- 변경할 컬럼과 대상 행을 `WHERE` 조건으로 명확히 지정한다.
- `StringBuilder`로 긴 SQL 문장을 단계별로 조립하는 방법을 실습했다.
- 바인딩 순서는 SQL의 물음표 위치와 정확히 일치해야 한다.

```java
String sql = "UPDATE boards SET btitle = ?, bcontent = ? WHERE bno = ?";
```

### 5. SELECT와 ResultSet

```java
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userId);

ResultSet rs = pstmt.executeQuery();

if (rs.next()) {
    String name = rs.getString("username");
    int age = rs.getInt("userage");
}
```

- `executeQuery()`는 SELECT 실행 후 `ResultSet`을 반환한다.
- `rs.next()`는 커서를 다음 행으로 이동하며 조회 결과가 있는지 알려준다.
- 컬럼명 또는 컬럼 순서로 데이터를 읽을 수 있다.
- 조회 결과를 `User` 객체에 옮겨 Java 객체로 다루는 방법을 연습했다.

### 6. 예외 처리와 자원 해제

- 드라이버를 찾지 못하면 `ClassNotFoundException`이 발생한다.
- 접속이나 SQL 처리 실패는 `SQLException`으로 다룬다.
- `ResultSet`, `PreparedStatement`, `Connection` 순서로 닫는다.
- 실무에서는 `try-with-resources`를 사용하면 누락 없이 자원을 정리하기 쉽다.

```java
try (Connection conn = DriverManager.getConnection(url, user, password);
     PreparedStatement pstmt = conn.prepareStatement(sql)) {
    // SQL 실행
}
```

## 실습 자료

- Oracle JDBC 드라이버 연결
- `users` 테이블 INSERT
- `boards` 테이블 UPDATE
- 조건에 맞는 사용자 SELECT와 객체 매핑
- 수업 원본 노트(접속 정보 제거): [`notes.txt`](./notes.txt)
- 실행 화면: [`images/`](./images/)

## 회고

JDBC 코드는 연결, SQL 준비, 값 바인딩, 실행, 결과 처리, 자원 해제의 일정한 흐름을
가진다. 반복되는 연결과 자원 관리 코드는 별도 유틸리티나 DAO 계층으로 분리하고,
인증 정보는 소스 코드 밖에서 관리해야 안전하고 유지보수하기 쉽다.
