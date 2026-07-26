export type StudyNote = {
  slug: string;
  title: string;
  summary: string;
  category: "데이터 모델링" | "SQL 기본" | "SQL 활용";
  tags: string[];
  date: string;
};

// 새 학습 기록은 이 배열 맨 위에 추가하세요.
// 저장 후 GitHub에 올리면 사이트가 자동으로 다시 배포됩니다.
export const notes: StudyNote[] = [
  {
    slug: "join-types",
    title: "JOIN, 관계를 따라 데이터를 연결하는 법",
    summary: "INNER·OUTER JOIN의 차이를 기준 집합 관점에서 정리하고 실행 결과로 비교했습니다.",
    category: "SQL 활용",
    tags: ["JOIN", "OUTER JOIN"],
    date: "2026-07-24",
  },
  {
    slug: "normalization",
    title: "정규화는 왜 필요한가",
    summary: "이상 현상을 줄이는 1·2·3정규화의 원리와 반정규화의 판단 기준을 기록했습니다.",
    category: "데이터 모델링",
    tags: ["정규화", "이상현상"],
    date: "2026-07-21",
  },
  {
    slug: "group-functions",
    title: "GROUP BY와 집계 함수",
    summary: "행을 그룹으로 묶는 과정과 WHERE·HAVING의 실행 순서 차이를 예제로 확인했습니다.",
    category: "SQL 기본",
    tags: ["GROUP BY", "HAVING"],
    date: "2026-07-18",
  },
  {
    slug: "window-functions",
    title: "윈도우 함수로 순위와 누계 구하기",
    summary: "RANK, DENSE_RANK, ROW_NUMBER의 차이와 PARTITION BY 사용법을 정리했습니다.",
    category: "SQL 활용",
    tags: ["WINDOW", "RANK"],
    date: "2026-07-15",
  },
  {
    slug: "entity-relationship",
    title: "엔터티와 관계를 식별하는 기준",
    summary: "업무에서 엔터티를 찾고 식별자·관계·카디널리티를 표현하는 순서를 살펴봤습니다.",
    category: "데이터 모델링",
    tags: ["엔터티", "ERD"],
    date: "2026-07-12",
  },
  {
    slug: "null",
    title: "NULL은 값이 아니다",
    summary: "3값 논리와 NVL·COALESCE, 비교 연산에서 자주 틀리는 포인트를 모았습니다.",
    category: "SQL 기본",
    tags: ["NULL", "COALESCE"],
    date: "2026-07-09",
  },
];

export const roadmap = [
  {
    title: "데이터 모델링의 이해",
    description: "엔터티, 속성, 관계와 정규화",
    done: true,
  },
  {
    title: "SQL 기본 및 활용",
    description: "SELECT부터 서브쿼리와 윈도우 함수까지",
    done: true,
  },
  {
    title: "기출문제 회독",
    description: "오답의 근거를 설명하는 반복 학습",
    done: false,
  },
  {
    title: "시험 & 회고",
    description: "실전 응시와 학습 과정 정리",
    done: false,
  },
];
