# Study

Oracle SQL, SQLD와 Java 학습 자료를 함께 관리하는 저장소입니다.

- 포트폴리오: https://jungryulip.github.io/study/
- SQL 실습 기록: [`Oracle_SQL/`](./Oracle_SQL/)
- Java 학습 기록: [`Java/`](./Java/)

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 포트폴리오를 자동으로 다시 배포합니다.

## 학습 기록 업데이트

`app/study-data.ts`의 `posts` 배열 맨 위에 아래 형식으로 기록을 추가합니다.

```ts
{
  date: "2026-07-26",
  day: "DAY 06",
  title: "서브쿼리 실행 원리",
  summary: "메인쿼리와 서브쿼리의 실행 관계를 예제로 정리했습니다.",
  learned: ["단일행 서브쿼리", "다중행 서브쿼리"],
  tags: ["서브쿼리", "상관쿼리"],
  folder: "Oracle_SQL/20260726",
  readTime: 5,
},
```

`folder`에는 해당 날짜의 SQL 또는 Java 학습 폴더 경로를 입력합니다.

## 내 컴퓨터에서 미리보기

```bash
npm install
npm run dev
```

배포용 결과를 확인하려면 `npm run build`를 실행합니다.
