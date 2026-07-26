# DAY 02 — WHERE 조건 검색

> 2026-07-21 · 원하는 데이터만 정확하게 조회하기

## 오늘 배운 내용

- 열 별칭과 문자열 연결 연산자
- `WHERE` 절의 비교 조건
- `AND`, `OR`, `NOT` 논리 연산자
- `BETWEEN`, `IN` 범위와 목록 검색
- `LIKE`를 활용한 문자열 패턴 검색
- `IS NULL`을 사용한 NULL 검사

## 핵심 정리

```sql
SELECT name, grade, deptno
FROM student
WHERE deptno IN (102, 201)
ORDER BY deptno;
```

- 문자와 날짜 값은 작은따옴표로 감쌉니다.
- 여러 논리 조건을 섞을 때는 괄호로 우선순위를 분명하게 표현합니다.
- `%`는 길이에 제한 없이 여러 문자를, `_`는 정확히 한 문자를 의미합니다.
- NULL은 `= NULL`이 아니라 `IS NULL` 또는 `IS NOT NULL`로 확인합니다.

## 실습 중 알게 된 점

SELECT 목록에서 만든 별칭은 같은 SELECT 목록의 다른 계산식에서 바로 사용할 수 없습니다.
복잡한 조건은 괄호 없이 작성하면 의도와 다른 결과가 나올 수 있습니다.

## 실습 파일

- [HR 실습 — 별칭, WHERE, BETWEEN, IN, LIKE](./20260721_hr.sql)
- [SCOTT 실습 — 급여 계산, NULL, 조건 검색 문제](./20260721_scott.sql)

## 오늘의 한 줄

WHERE 절은 조건을 많이 쓰는 것보다 조건의 우선순위를 정확하게 표현하는 것이 중요하다.
