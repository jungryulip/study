# SQLD Log

SQLD 학습 과정을 기록하는 개인 포트폴리오입니다. 노트를 추가해 `main` 브랜치에 올리면 GitHub Pages가 자동으로 갱신됩니다.

## 처음 한 번만 설정하기

1. GitHub에서 새 저장소를 만듭니다. 저장소 이름은 자유롭게 정해도 됩니다.
2. 이 프로젝트 전체를 저장소의 `main` 브랜치에 올립니다.
3. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
4. 상단의 **Actions** 탭에서 `Deploy SQLD Portfolio` 작업이 끝나면 Pages 주소가 만들어집니다.

사용자 사이트 저장소(`아이디.github.io`)와 일반 프로젝트 저장소 모두 경로가 자동으로 맞춰집니다.

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

로드맵 진도는 같은 파일의 `roadmap`에서 `done: true` 또는 `false`로 바꿉니다. 사이트의 GitHub 버튼 주소는 `app/page.tsx`에서 `href="#"` 부분을 본인의 GitHub 프로필 주소로 교체합니다.

## 내 컴퓨터에서 미리보기

```bash
npm install
npm run dev
```

브라우저에서 표시된 주소를 열면 됩니다. 배포용 결과를 확인하려면 `npm run build`를 실행합니다.
