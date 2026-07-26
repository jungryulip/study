## DAY 05 — JOIN과 서브쿼리

> 2026-07-24 · 관계를 따라 테이블을 연결하고 쿼리 결과를 조건으로 사용하기

#### 오늘 배운 내용

- Cartesian Product와 `CROSS JOIN`
- EQUI JOIN과 ANSI `INNER JOIN`
- `NATURAL JOIN`과 `USING`
- Non-Equi JOIN
- `LEFT`, `RIGHT`, `FULL OUTER JOIN`
- `SELF JOIN`
- 단일행 서브쿼리
- 집계 결과를 이용한 서브쿼리

#### 핵심 정리

```sql
SELECT s.name,
       d.dname,
       d.loc
FROM student s
JOIN department d
  ON s.deptno = d.deptno;
```

- JOIN 조건을 빠뜨리면 두 테이블의 모든 행이 결합된 Cartesian Product가 만들어집니다.
- 같은 열 이름이 여러 테이블에 있으면 테이블 별칭을 붙여 출처를 명확하게 합니다.
- INNER JOIN은 양쪽에 일치하는 행만 반환합니다.
- OUTER JOIN은 일치하지 않는 행도 NULL과 함께 보존합니다.
- SELF JOIN은 같은 테이블 안의 계층이나 상하 관계를 표현할 때 사용합니다.
- 단일행 비교 연산자는 서브쿼리가 하나의 값만 반환해야 합니다.

#### 실습 중 알게 된 점

학생, 교수, 학과처럼 세 개 이상의 테이블을 연결할 때는 각 테이블 사이의 연결 조건을
하나씩 확인해야 합니다. 서브쿼리의 결과 행 수와 바깥 쿼리의 연산자도 반드시 맞아야 합니다.

#### 실습 파일

- [HR 실습 — 다양한 JOIN과 서브쿼리](./20260724_hr.sql)
- [SCOTT 실습 — SELF JOIN으로 사원과 관리자 연결](./20260724_scott.sql)

#### 오늘의 한 줄

JOIN은 테이블을 붙이는 문법이 아니라 데이터 사이의 관계를 표현하는 문법이다.
