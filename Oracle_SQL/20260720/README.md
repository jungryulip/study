# DAY 01 — SELECT 기본 조회

> 2026-07-20 · Oracle SQL 첫 수업

## 오늘 배운 내용

- `DESC`로 테이블의 열과 자료형 확인
- `SELECT`와 `FROM`을 사용한 기본 데이터 조회
- 필요한 열만 선택해서 출력
- `DISTINCT`로 중복 값 제거
- `ORDER BY`로 결과 정렬

## 핵심 정리

```sql
SELECT DISTINCT position
FROM professor
ORDER BY position;
```

- `SELECT *`는 테이블의 모든 열을 조회합니다.
- 필요한 열 이름을 직접 작성하면 결과를 읽기 쉽고 불필요한 조회를 줄일 수 있습니다.
- `DISTINCT`는 조회 결과에서 중복된 행을 제거합니다.
- `ORDER BY`는 기본적으로 오름차순으로 정렬합니다.

## 실습 파일

- [HR 실습 — department, professor, student 조회](./20260720_hr.sql)
- [SCOTT 실습 — EMP 테이블 구조 확인](./20260720_scott.sql)

## 오늘의 한 줄

SQL 조회의 시작은 테이블 구조를 먼저 확인하고, 필요한 열을 명확하게 선택하는 것이다.
