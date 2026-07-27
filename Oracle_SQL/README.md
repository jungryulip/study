# Oracle SQL 학습 기록

Oracle SQL 수업에서 직접 실행한 쿼리와 그날 배운 내용을 날짜별로 정리합니다.
날짜를 클릭하면 학습 요약과 실습 파일을 함께 볼 수 있습니다.

## 날짜별 기록

| 날짜 | 주요 학습 내용 | 기록 |
| --- | --- | --- |
| 2026-07-27 | 다중행·다중열 서브쿼리, DML, COMMIT·ROLLBACK | [DAY 06 보기](./20260727/) |
| 2026-07-24 | JOIN, OUTER JOIN, SELF JOIN, 서브쿼리 | [DAY 05 보기](./20260724/) |
| 2026-07-23 | NULL 처리, 조건 함수, 그룹 함수, ROLLUP·CUBE | [DAY 04 보기](./20260723/) |
| 2026-07-22 | 문자·숫자·날짜 함수, 형 변환 | [DAY 03 보기](./20260722/) |
| 2026-07-21 | 별칭, 연결 연산자, WHERE 조건 검색 | [DAY 02 보기](./20260721/) |
| 2026-07-20 | 테이블 구조 확인, SELECT, DISTINCT, ORDER BY | [DAY 01 보기](./20260720/) |

## 폴더 구성

```text
Oracle_SQL/
├── README.md
├── DAILY_TEMPLATE.md
└── YYYYMMDD/
    ├── README.md
    ├── YYYYMMDD_hr.sql
    └── YYYYMMDD_scott.sql
```

각 날짜 폴더의 `README.md`에는 그날 배운 내용을 정리하고, `.sql` 파일에는
직접 실행한 쿼리와 시행착오를 기록합니다.

## 새 학습 기록 추가 방법

1. `Oracle_SQL` 안에 `YYYYMMDD` 형식의 날짜 폴더를 만듭니다.
2. [`DAILY_TEMPLATE.md`](./DAILY_TEMPLATE.md)를 복사해 새 폴더의 `README.md`로 사용합니다.
3. 실행한 SQL을 `YYYYMMDD_hr.sql` 또는 `YYYYMMDD_scott.sql`에 저장합니다.
4. 이 문서의 **날짜별 기록** 표 맨 위에 새 날짜를 추가합니다.
5. 포트폴리오의 `app/study-data.ts`에도 같은 날짜의 게시물을 추가합니다.

> SQL이 완성되지 않았더라도 시도한 쿼리와 오류 원인을 함께 남깁니다.
> 나중에 다시 봤을 때 “왜 틀렸고 어떻게 고쳤는지”가 가장 좋은 학습 기록이 됩니다.
