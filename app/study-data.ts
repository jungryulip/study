export type DailyPost = {
  date: string;
  day: string;
  title: string;
  summary: string;
  learned: string[];
  tags: string[];
  folder: string;
  readTime: number;
};

// 새 글은 이 배열의 맨 위에 추가하세요.
// folder에는 GitHub 저장소 안의 날짜별 폴더 경로를 입력합니다.
export const posts: DailyPost[] = [
  {
    date: "2026-07-28",
    day: "DAY 07",
    title: "시퀀스, 테이블 관리와 무결성 제약조건",
    summary:
      "시퀀스로 번호를 생성하고 DDL로 테이블 구조를 관리했다. 데이터 사전을 조회하고 기본 키·외래 키를 비롯한 제약조건을 직접 추가하고 변경했다.",
    learned: [
      "시퀀스와 Identity Column",
      "CREATE·ALTER·DROP·TRUNCATE",
      "데이터 사전 조회",
      "기본 키·외래 키·무결성 제약조건",
    ],
    tags: ["시퀀스", "DDL", "제약조건"],
    folder: "Oracle_SQL/20260728",
    readTime: 11,
  },
  {
    date: "2026-07-27",
    day: "DAY 06",
    title: "다중행 서브쿼리와 데이터 조작어",
    summary:
      "IN, ANY, ALL, EXISTS를 이용한 다중행 서브쿼리와 INSERT, UPDATE, DELETE, MERGE를 연습하고 COMMIT과 ROLLBACK의 차이를 확인했다.",
    learned: [
      "IN·ANY·ALL 다중행 서브쿼리",
      "EXISTS와 NOT EXISTS",
      "Pairwise·Unpairwise 비교",
      "INSERT·UPDATE·DELETE·MERGE",
    ],
    tags: ["서브쿼리", "DML", "트랜잭션"],
    folder: "Oracle_SQL/20260727",
    readTime: 10,
  },
  {
    date: "2026-07-24",
    day: "DAY 05",
    title: "JOIN으로 테이블을 연결하고 서브쿼리로 답을 찾기",
    summary:
      "서로 다른 테이블의 관계를 따라 데이터를 연결했다. INNER·OUTER·SELF JOIN의 차이를 비교하고, 단일행 서브쿼리로 다른 쿼리의 결과를 조건에 활용했다.",
    learned: [
      "Cartesian Product와 CROSS JOIN",
      "EQUI·NATURAL·INNER JOIN",
      "LEFT·RIGHT·FULL OUTER JOIN",
      "SELF JOIN과 단일행 서브쿼리",
    ],
    tags: ["JOIN", "OUTER JOIN", "서브쿼리"],
    folder: "Oracle_SQL/20260724",
    readTime: 6,
  },
  {
    date: "2026-07-23",
    day: "DAY 04",
    title: "NULL 처리부터 GROUP BY와 ROLLUP까지",
    summary:
      "NULL 때문에 계산 결과가 사라지는 문제를 일반 함수로 해결하고, 집계 함수와 GROUP BY를 사용해 여러 행을 의미 있는 통계로 요약했다.",
    learned: [
      "NVL·NVL2·NULLIF·COALESCE",
      "DECODE와 CASE 조건 표현",
      "COUNT·AVG·SUM·MIN·MAX",
      "GROUP BY·HAVING·ROLLUP·CUBE",
    ],
    tags: ["NULL", "GROUP BY", "ROLLUP"],
    folder: "Oracle_SQL/20260723",
    readTime: 7,
  },
  {
    date: "2026-07-22",
    day: "DAY 03",
    title: "문자·숫자·날짜를 다루는 Oracle 단일행 함수",
    summary:
      "데이터를 원하는 형태로 가공하기 위해 문자, 숫자, 날짜 함수를 연습했다. 날짜 형식과 NLS 설정이 결과에 미치는 영향도 함께 확인했다.",
    learned: [
      "UPPER·LOWER·INITCAP과 LENGTH",
      "SUBSTR·INSTR·LPAD·RPAD",
      "ROUND·TRUNC·MOD",
      "TO_CHAR·TO_DATE와 날짜 연산",
    ],
    tags: ["단일행 함수", "날짜 함수", "TO_CHAR"],
    folder: "Oracle_SQL/20260722",
    readTime: 8,
  },
  {
    date: "2026-07-21",
    day: "DAY 02",
    title: "WHERE 조건식으로 필요한 행만 정확하게 찾기",
    summary:
      "별칭과 연결 연산자로 결과를 읽기 쉽게 만들고, WHERE 절의 비교·논리 연산자를 조합해 원하는 행만 조회하는 법을 익혔다.",
    learned: [
      "열 별칭과 문자열 연결 연산자",
      "WHERE와 AND·OR·NOT",
      "BETWEEN과 IN",
      "LIKE 패턴 검색과 NULL 조건",
    ],
    tags: ["WHERE", "LIKE", "조건식"],
    folder: "Oracle_SQL/20260721",
    readTime: 6,
  },
  {
    date: "2026-07-20",
    day: "DAY 01",
    title: "Oracle SQL 첫걸음: 테이블을 확인하고 조회하기",
    summary:
      "테이블 구조를 살펴본 뒤 SELECT 문으로 필요한 열을 조회했다. DISTINCT와 ORDER BY를 사용해 중복을 제거하고 결과의 순서를 정리했다.",
    learned: [
      "DESC로 테이블 구조 확인",
      "SELECT와 FROM의 기본 구조",
      "필요한 열만 선택해 조회",
      "DISTINCT와 ORDER BY",
    ],
    tags: ["SELECT", "DISTINCT", "ORDER BY"],
    folder: "Oracle_SQL/20260720",
    readTime: 4,
  },
];

export const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));
