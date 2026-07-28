# DAY 07 — 시퀀스, 테이블 관리와 무결성 제약조건

> 2026-07-28 · Oracle 객체를 만들고 변경하며 데이터 구조와 무결성 관리하기

## 오늘 배운 내용

- 시퀀스 생성과 `NEXTVAL`, `CURRVAL`
- Identity Column
- `CREATE`, `ALTER`, `RENAME`, `DROP`, `TRUNCATE`
- 서브쿼리를 이용한 테이블 생성
- 테이블과 컬럼 주석
- 데이터 사전 조회
- `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `CHECK`
- 제약조건 추가·삭제·비활성화·활성화

## 시퀀스

시퀀스는 여러 행에서 중복되지 않는 번호를 순서대로 생성하는 Oracle 객체입니다.

```sql
CREATE SEQUENCE s_seq
INCREMENT BY 1
START WITH 1
MAXVALUE 100;
```

```sql
INSERT INTO emp(empno, ename, job, deptno)
VALUES (s_seq.NEXTVAL, 'CANDY', 'SALESMAN', 20);
```

- `NEXTVAL`: 다음 번호를 생성하고 반환합니다.
- `CURRVAL`: 현재 세션에서 마지막으로 생성한 번호를 반환합니다.
- 시퀀스 이름은 데이터 사전에서 대문자로 조회합니다.
- `ALTER SEQUENCE`로 증가값과 최댓값 등을 변경할 수 있습니다.

## 테이블 생성과 변경

```sql
CREATE TABLE address (
    id    NUMBER(3),
    name  VARCHAR2(50),
    addr  VARCHAR2(100),
    phone VARCHAR2(30),
    email VARCHAR2(100)
);
```

서브쿼리를 사용하면 조회 결과와 함께 테이블을 만들거나 구조만 복사할 수 있습니다.

```sql
CREATE TABLE addr_fourth
AS
SELECT id, name
FROM address
WHERE 1 = 2;
```

| 명령 | 역할 |
| --- | --- |
| `ALTER TABLE ... ADD` | 컬럼 또는 제약조건 추가 |
| `ALTER TABLE ... MODIFY` | 컬럼 정의 변경 |
| `ALTER TABLE ... DROP COLUMN` | 컬럼 삭제 |
| `RENAME` | 객체 이름 변경 |
| `TRUNCATE` | 테이블의 모든 행을 빠르게 삭제 |
| `DROP TABLE` | 테이블 객체 삭제 |

`TRUNCATE`는 DDL이므로 실행 후 일반적인 `ROLLBACK`으로 데이터를 복구할 수 없습니다.

## 데이터 사전

Oracle이 관리하는 메타데이터를 데이터 사전 뷰로 확인했습니다.

```sql
SELECT table_name
FROM user_tables;
```

- `USER_TABLES`: 현재 사용자가 소유한 테이블
- `ALL_TABLES`: 현재 사용자가 접근 가능한 테이블
- `DBA_TABLES`: 데이터베이스 전체 테이블
- `USER_OBJECTS`: 사용자가 소유한 모든 객체
- `USER_CATALOG`: 테이블, 뷰, 시퀀스 등의 목록
- `USER_CONSTRAINTS`: 제약조건 정보
- `USER_CONS_COLUMNS`: 제약조건이 적용된 컬럼 정보

## 무결성 제약조건

```sql
CREATE TABLE sugang (
    studno NUMBER(5)
        CONSTRAINT sugang_studno_fk REFERENCES student(studno),
    subno NUMBER(5)
        CONSTRAINT sugang_subno_fk REFERENCES subject(subno),
    regdate DATE,
    result NUMBER(3),
    CONSTRAINT sugang_pk PRIMARY KEY(studno, subno)
);
```

- `PRIMARY KEY`: 행을 고유하게 식별하며 NULL을 허용하지 않습니다.
- `FOREIGN KEY`: 부모 테이블에 존재하는 값을 참조합니다.
- `UNIQUE`: 중복 값을 허용하지 않습니다.
- `NOT NULL`: NULL 입력을 허용하지 않습니다.
- `CHECK`: 입력할 수 있는 값의 조건을 제한합니다.

외래 키를 만들기 전에 참조 대상 컬럼에 `PRIMARY KEY` 또는 `UNIQUE` 조건이
있는지 확인해야 합니다.

## 실습 파일

- [전체 SQL 실습 코드](./20260728_hr.sql)
- [쿼리와 실행 결과](./results.txt)
- [실습 화면 61장](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| 시퀀스 오류 | [보기](./images/01_squence_error.PNG) |
| 시퀀스 오류 해결 | [보기](./images/02_squence_error_solve.PNG) |
| 시퀀스 생성 | [보기](./images/03_squence.PNG) |
| NEXTVAL | [보기](./images/04_squence_nextvalue_1.PNG) |
| CURRVAL | [보기](./images/05_squence_currval.PNG) |
| 테이블 생성 | [보기](./images/11_table_create_1.PNG) |
| 서브쿼리로 테이블 생성 | [보기](./images/13_table_create_subquery_.PNG) |
| TRUNCATE | [보기](./images/22_table_truncate_1.PNG) |
| USER_TABLES | [보기](./images/28_user_tables.PNG) |
| 제약조건 오류 해결 | [보기](./images/43_dataN_table_instance_add_error-solve.PNG) |
| 제약조건 조회 | [보기](./images/52_data_constraints_research.PNG) |

## 실습 중 알게 된 점

- `CURRVAL`은 같은 세션에서 `NEXTVAL`을 먼저 호출한 후 사용할 수 있습니다.
- DDL은 객체 구조를 바꾸므로 DML보다 실행 전 확인이 더 중요합니다.
- 테이블스페이스 생성처럼 높은 권한이 필요한 작업은 관리자 계정에서 권한과 경로를 확인해야 합니다.
- 외래 키는 부모 테이블의 고유한 키를 참조해야 합니다.
- 제약조건은 삭제하지 않고 일시적으로 `DISABLE`한 뒤 다시 `ENABLE`할 수도 있습니다.

## 오늘의 한 줄

테이블을 만드는 것만큼 데이터가 잘못 들어오지 못하도록 규칙을 설계하는 것이 중요하다.
