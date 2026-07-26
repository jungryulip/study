# Study

Oracle SQL 실습 자료와 SQLD 학습 포트폴리오를 함께 관리하는 저장소입니다.

- 포트폴리오: https://jungryulip.github.io/study/
- SQL 실습 기록: [`Oracle_SQL/`](./Oracle_SQL/)

`main` 브랜치에 변경 사항을 올리면 GitHub Actions가 포트폴리오를 자동으로 다시 배포합니다.

## 학습 기록 업데이트

`app/study-data.ts`의 `notes` 배열 맨 위에 아래 형식으로 노트를 추가합니다.

```ts
{
  slug: "subquery",
  title: "서브쿼리 실행 원리",
  summary: "메인쿼리와 서브쿼리의 실행 관계를 예제로 정리했습니다.",
  category: "SQL 활용",
  tags: ["서브쿼리", "상관쿼리"],
  date: "2026-07-26",
},
```

로드맵 진도는 같은 파일의 `roadmap`에서 `done: true` 또는 `false`로 바꿉니다.

## 내 컴퓨터에서 미리보기

```bash
npm install
npm run dev
```

배포용 결과를 확인하려면 `npm run build`를 실행합니다.
