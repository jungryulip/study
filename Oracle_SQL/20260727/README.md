# DAY 06 — 다중행 서브쿼리와 데이터 조작어

> 2026-07-27 · 여러 행을 반환하는 서브쿼리와 DML을 직접 실행하며 익히기

## 오늘 배운 내용

- 다중행 서브쿼리 `IN`, `ANY`, `ALL`
- `EXISTS`와 `NOT EXISTS`
- 다중 컬럼 서브쿼리
- Pairwise와 Unpairwise 비교
- `INSERT`, `UPDATE`, `DELETE`
- 다중 테이블 `INSERT ALL`, `INSERT FIRST`
- `MERGE`
- `COMMIT`과 `ROLLBACK`

## 핵심 정리

### IN

서브쿼리가 반환한 여러 값 중 하나와 일치하는 행을 찾습니다.

```sql
SELECT name, grade, deptno
FROM student
WHERE deptno IN (
    SELECT deptno
    FROM department
    WHERE college = 100
);
```

### ANY와 ALL

```sql
SELECT studno, name, height
FROM student
WHERE height > ANY (
    SELECT height
    FROM student
    WHERE grade = '4'
);
```

- `> ANY`: 반환된 값 중 가장 작은 값보다 크면 참입니다.
- `> ALL`: 반환된 모든 값, 즉 가장 큰 값보다 커야 참입니다.
- 서브쿼리가 여러 행을 반환하면 단일행 연산자 `=` 대신 결과에 맞는 연산자를 사용해야 합니다.

### EXISTS

```sql
SELECT profno, name, sal, comm, sal + NVL(comm, 0)
FROM professor
WHERE EXISTS (
    SELECT profno
    FROM professor
    WHERE comm IS NOT NULL
);
```

`EXISTS`는 서브쿼리의 실제 값보다 조건에 맞는 행이 존재하는지를 검사합니다.

### 다중 컬럼 서브쿼리

```sql
SELECT name, grade, weight
FROM student
WHERE (grade, weight) IN (
    SELECT grade, MIN(weight)
    FROM student
    GROUP BY grade
)
ORDER BY grade;
```

Pairwise 비교는 여러 열을 하나의 쌍으로 비교합니다. 열을 각각 나누어 비교하는
Unpairwise 방식은 서로 관계없는 값이 조합되어 예상보다 많은 행이 나올 수 있습니다.

## 데이터 변경과 트랜잭션

- `INSERT`: 새로운 행 추가
- `UPDATE`: 기존 행 수정
- `DELETE`: 조건에 맞는 행 삭제
- `MERGE`: 조건에 따라 INSERT 또는 UPDATE 수행
- `COMMIT`: 변경 내용을 데이터베이스에 확정
- `ROLLBACK`: COMMIT 전의 변경 내용 취소

변경 쿼리를 실행하기 전에는 반드시 `WHERE` 조건과 대상 행을 SELECT로 먼저 확인합니다.

## 실습 파일

- [전체 SQL 실습 코드](./20260727_hr.sql)
- [쿼리와 실행 결과](./results.txt)
- [실습 화면 66장](./images/)

## 주요 실습 화면

| 주제 | 화면 |
| --- | --- |
| IN 다중행 서브쿼리 | [보기](./images/01_meltiple_subquery_in_1.PNG) |
| ANY 다중행 서브쿼리 | [보기](./images/02_meltiple_subquery_any_1.PNG) |
| ALL 다중행 서브쿼리 | [보기](./images/03_meltiple_subquery_all_1.PNG) |
| EXISTS | [보기](./images/04_meltiple_subquery_exists_1.PNG) |
| NOT EXISTS | [보기](./images/05_meltiple_subquery_notexists_1.PNG) |
| Pairwise 비교 | [보기](./images/08_meltiplecluem_subquery_pairwise_1.PNG) |
| Unpairwise 비교 | [보기](./images/09_meltiplecluem_subquery_unpairwise_1.PNG) |
| ROLLBACK | [보기](./images/22_datacotrol_insert_5_rollback.PNG) |
| COMMIT | [보기](./images/24_datacotrol_insert_5_commit.PNG) |
| UPDATE 서브쿼리 | [보기](./images/48_datemodify_updateSubquery_1.PNG) |
| MERGE | [보기](./images/56_datemarge_1-M.PNG) |

## 실습 중 알게 된 점

- `ANY`와 `ALL`은 비교 연산자의 방향에 따라 기준값의 의미가 달라집니다.
- Pairwise와 Unpairwise는 비슷해 보여도 행의 조합 방식이 다릅니다.
- DML은 실행 전에 대상 행을 확인하고, COMMIT 전에 결과를 검증해야 합니다.
- 실수로 변경했을 때 ROLLBACK할 수 있는 시점은 COMMIT 전까지입니다.

## 오늘의 한 줄

서브쿼리는 반환되는 행과 열의 개수를 먼저 파악하고, 그 결과에 맞는 연산자를 선택해야 한다.
