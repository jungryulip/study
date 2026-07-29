# DAY 08 — 인덱스, 뷰, 권한과 동의어

> 2026-07-29 · Oracle 객체를 활용해 조회 성능과 접근 권한 관리하기

## 오늘 배운 내용

- 고유·비고유·결합 인덱스
- 내림차순 인덱스와 함수 기반 인덱스
- 실행 계획 확인과 인덱스 재구성
- 단순 뷰·복합 뷰·인라인 뷰
- 시스템 권한과 객체 권한
- 역할(Role)을 이용한 권한 관리
- Private·Public Synonym

## 인덱스

인덱스는 테이블의 데이터를 더 빠르게 찾기 위해 별도로 관리하는 데이터베이스 객체입니다.

```sql
CREATE UNIQUE INDEX idx_dept_name
ON department(dname);
```

```sql
CREATE INDEX idx_stud_dno_grade
ON student(deptno, grade);
```

- 고유 인덱스는 인덱스 키의 중복을 허용하지 않습니다.
- 결합 인덱스는 여러 컬럼을 함께 인덱스 키로 사용합니다.
- 함수 기반 인덱스는 쿼리의 조건식과 같은 함수를 사용해야 효과를 얻을 수 있습니다.
- 인덱스는 조회 속도를 높일 수 있지만 INSERT·UPDATE·DELETE 시 관리 비용이 발생합니다.

```sql
CREATE INDEX uppercase_idx
ON emp(UPPER(ename));

SELECT *
FROM emp
WHERE UPPER(ename) = 'KING';
```

인덱스 정보는 `USER_INDEXES`와 `USER_IND_COLUMNS`에서 확인하고,
필요한 경우 `ALTER INDEX ... REBUILD`로 재구성할 수 있습니다.

## 뷰

뷰는 하나 이상의 테이블이나 다른 뷰를 기반으로 정의하는 가상의 테이블입니다.

```sql
CREATE VIEW v_stud_dept101 AS
SELECT studno, name, deptno
FROM student
WHERE deptno = 101;
```

- 단순 뷰는 하나의 기본 테이블을 기반으로 합니다.
- 복합 뷰는 여러 테이블, 그룹 함수 또는 조인을 포함할 수 있습니다.
- `CREATE OR REPLACE VIEW`로 기존 뷰의 정의를 교체할 수 있습니다.
- 인라인 뷰는 FROM 절 안에 작성한 서브쿼리입니다.
- 뷰는 필요한 데이터만 공개하여 보안과 쿼리 재사용성을 높일 수 있습니다.

## 사용자 권한과 역할

```sql
GRANT SELECT ON student TO tiger;
REVOKE SELECT ON student FROM tiger;
```

- 시스템 권한은 사용자 생성이나 세션 접속처럼 데이터베이스 수준의 작업 권한입니다.
- 객체 권한은 특정 테이블·뷰 등의 SELECT, INSERT, UPDATE, DELETE 권한입니다.
- `GRANT`로 권한을 부여하고 `REVOKE`로 회수합니다.
- Role은 여러 권한을 하나로 묶어 사용자에게 일괄 부여하는 객체입니다.

```sql
CREATE ROLE hr_clerk;
GRANT SELECT, INSERT, DELETE ON scott.student TO hr_clerk;
GRANT hr_clerk TO tiger;
```

## 동의어

동의어(Synonym)는 긴 객체 이름이나 다른 사용자가 소유한 객체를 간단한 이름으로
접근할 수 있게 해 줍니다.

```sql
CREATE SYNONYM my_project
FOR system.project;
```

- Private Synonym은 생성한 사용자만 사용합니다.
- Public Synonym은 모든 사용자가 같은 이름으로 접근할 수 있습니다.
- 동의어는 이름을 단순화할 뿐, 원본 객체에 대한 접근 권한을 자동으로 부여하지 않습니다.

## 실습 파일

- [HR — 인덱스와 뷰](./20260729_hr.sql)
- [SCOTT — 인라인 뷰와 권한](./20260729_scott.sql)
- [SYSTEM — 테이블과 Public Synonym](./20260729_system.sql)
- [TIGER — 객체 권한과 Role](./20260729_tiger.sql)
- [KOSA — 다른 사용자의 객체 조회](./20260729_kosa.sql)
- [SCOTT — Synonym 실습](./20260729_scott_synonym.sql)
- [쿼리와 실행 결과](./results.txt)
- [실습 화면 62장](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| 고유 인덱스 생성 | [보기](./images/01_index_create.PNG) |
| 결합 인덱스 | [보기](./images/03_index_create_union.PNG) |
| 함수 기반 인덱스 | [보기](./images/06_index_FBI.PNG) |
| 인덱스 재구성 | [보기](./images/16_index_rebuild.PNG) |
| 뷰 생성 오류 해결 | [보기](./images/18_view_create_error_sqlplus-solve.PNG) |
| 뷰 생성 | [보기](./images/19_view_create.PNG) |
| 인라인 뷰 | [보기](./images/24_inline-view.PNG) |
| 시스템 권한 | [보기](./images/32_system-privilege-set-sqlplus.PNG) |
| Role 생성 | [보기](./images/39_role_create.PNG) |
| Private Synonym | [보기](./images/44_private_synonym.PNG) |
| Public Synonym 결과 | [보기](./images/51_public_synonym_generate-result.PNG) |

## 실습 중 알게 된 점

- 인덱스는 무조건 많을수록 좋은 것이 아니라 자주 사용하는 조회 조건을 기준으로 설계해야 합니다.
- 뷰를 생성하려면 계정에 `CREATE VIEW` 권한이 필요합니다.
- 객체를 조회할 권한과 동의어를 생성할 권한은 서로 별개입니다.
- 동의어가 있어도 원본 객체의 권한이 없다면 조회할 수 없습니다.
- 사용자별 SQL 파일을 나누면 어떤 계정에서 권한을 부여하고 사용하는지 확인하기 쉽습니다.

## 오늘의 한 줄

데이터베이스 객체는 기능뿐 아니라 누가 어떤 이름으로 접근할 수 있는지까지 함께 설계해야 한다.
