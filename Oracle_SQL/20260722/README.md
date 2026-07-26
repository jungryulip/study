# DAY 03 — Oracle 단일행 함수

> 2026-07-22 · 문자, 숫자, 날짜를 원하는 형태로 가공하기

## 오늘 배운 내용

- 문자 함수: `UPPER`, `LOWER`, `INITCAP`, `LENGTH`, `SUBSTR`, `INSTR`
- 문자열 정리: `LPAD`, `RPAD`, `LTRIM`, `RTRIM`
- 숫자 함수: `ROUND`, `TRUNC`, `MOD`, `CEIL`, `FLOOR`
- 날짜 계산: `MONTHS_BETWEEN`, `ADD_MONTHS`, `LAST_DAY`, `NEXT_DAY`
- 형 변환 함수: `TO_CHAR`, `TO_DATE`
- 다중 열 `ORDER BY`

## 핵심 정리

```sql
SELECT name,
       TO_CHAR(hiredate, 'YYYY-MM-DD') AS hire_date
FROM professor;
```

- 단일행 함수는 입력된 행마다 하나의 결과를 반환합니다.
- `LENGTH`는 문자 수를, `LENGTHB`는 바이트 수를 반환합니다.
- `ROUND`는 반올림하고 `TRUNC`는 지정한 자리 아래를 버립니다.
- Oracle에서는 날짜에 숫자를 더하거나 빼서 일 단위 계산을 할 수 있습니다.
- 날짜 문자를 변환할 때는 데이터와 형식 모델을 일치시켜야 합니다.

## 실습 중 알게 된 점

요일이나 월 이름은 세션의 `NLS_LANGUAGE` 설정에 영향을 받습니다.
문자 기준으로 날짜를 정렬하는 것과 실제 날짜 값으로 정렬하는 것은 결과가 다를 수 있습니다.

## 실습 파일

- [HR 실습 — 문자·숫자·날짜 함수와 형 변환](./20260722_hr.sql)
- [SCOTT 실습 — 정렬과 단일행 함수 문제](./20260722_scott.sql)

## 오늘의 한 줄

함수를 외우는 것보다 어떤 자료형을 받아 어떤 자료형을 돌려주는지 이해해야 한다.
