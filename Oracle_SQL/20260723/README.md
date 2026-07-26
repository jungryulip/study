# DAY 04 — NULL 처리와 그룹 함수

> 2026-07-23 · 여러 행을 하나의 의미 있는 결과로 요약하기

## 오늘 배운 내용

- NULL 처리: `NVL`, `NVL2`, `NULLIF`, `COALESCE`
- 조건 표현: `DECODE`, `CASE`
- 그룹 함수: `COUNT`, `AVG`, `SUM`, `MIN`, `MAX`
- 통계 함수: `STDDEV`, `VARIANCE`
- `GROUP BY`와 `HAVING`
- `ROLLUP`, `CUBE`, `GROUPING SETS`
- 기본 EQUI JOIN

## 핵심 정리

```sql
SELECT deptno,
       COUNT(*) AS professor_count,
       ROUND(AVG(sal)) AS average_salary
FROM professor
GROUP BY deptno
HAVING COUNT(*) >= 2;
```

- NULL이 포함된 산술 연산 결과는 NULL이 됩니다.
- `COUNT(*)`는 모든 행을 세지만 `COUNT(column)`은 NULL을 제외합니다.
- SELECT에 집계되지 않은 열이 있으면 해당 열은 `GROUP BY`에 포함해야 합니다.
- `WHERE`는 그룹화 전 행을, `HAVING`은 그룹화 후 결과를 필터링합니다.
- `ROLLUP`은 단계별 소계와 총계를 함께 구할 때 유용합니다.

## 실습 중 알게 된 점

숫자와 문자열을 한 결과 열에 표시하려면 자료형을 일치시켜야 합니다.
NULL을 처리하지 않은 급여와 수당의 합계는 예상과 다르게 NULL이 될 수 있습니다.

## 실습 파일

- [HR 실습 — NULL 함수, CASE, 그룹 함수, ROLLUP·CUBE](./20260723_hr.sql)
- [SCOTT 실습 — 그룹 함수, HAVING, JOIN 문제](./20260723_scott.sql)

## 오늘의 한 줄

그룹 함수는 데이터를 줄이는 기술이고, GROUP BY는 어떤 기준으로 줄일지 정하는 문법이다.
