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
    date: "2026-08-06",
    day: "DAY 14",
    title: "Java 객체 배열과 상속",
    summary:
      "객체 배열의 생성과 얕은·깊은 복사를 비교하고 ArrayList로 목록을 관리했다. extends 상속, 업캐스팅과 메서드 오버라이딩도 실습했다.",
    learned: [
      "객체 배열과 요소별 인스턴스",
      "얕은 복사·깊은 복사",
      "향상된 for문·ArrayList",
      "상속·업캐스팅·오버라이딩",
    ],
    tags: ["Java", "배열", "상속"],
    folder: "Java/20260806",
    readTime: 13,
  },
  {
    date: "2026-08-05",
    day: "DAY 13",
    title: "Java 캡슐화, this, static과 배열",
    summary:
      "객체의 내부 구현을 캡슐화하고 this와 this()의 역할을 확인했다. static 공유 변수, 지역 변수, 싱글턴 패턴과 1·2차원 배열을 실습했다.",
    learned: [
      "캡슐화와 객체 협력",
      "this와 this() 생성자 호출",
      "static·지역 변수·싱글턴",
      "배열·복사·2차원 배열",
    ],
    tags: ["Java", "캡슐화", "배열"],
    folder: "Java/20260805",
    readTime: 13,
  },
  {
    date: "2026-08-04",
    day: "DAY 12",
    title: "Java 객체와 클래스",
    summary:
      "객체의 속성과 기능을 클래스의 멤버 변수와 메서드로 표현했다. 인스턴스 생성, 생성자 오버로딩, 참조 자료형과 private을 이용한 정보 은닉을 연습했다.",
    learned: [
      "객체지향과 클래스 설계",
      "멤버 변수·메서드·인스턴스",
      "생성자와 생성자 오버로딩",
      "참조 자료형·private·getter·setter",
    ],
    tags: ["Java", "클래스", "객체지향"],
    folder: "Java/20260804",
    readTime: 11,
  },
  {
    date: "2026-08-03",
    day: "DAY 11",
    title: "Java 조건문과 반복문",
    summary:
      "if와 switch로 조건에 따라 실행 흐름을 나누고, while·do-while·for문으로 작업을 반복했다. 중첩 반복문과 break·continue도 함께 연습했다.",
    learned: [
      "if·else if 다중 조건문",
      "switch-case와 switch 표현식",
      "while·do-while·for 반복문",
      "중첩 반복·break·continue",
    ],
    tags: ["Java", "조건문", "반복문"],
    folder: "Java/20260803",
    readTime: 12,
  },
  {
    date: "2026-07-31",
    day: "DAY 10",
    title: "Java 변수, 자료형과 연산자",
    summary:
      "변수 이름 규칙과 기본 자료형, final 상수를 익혔다. 자동·명시적 형변환과 산술·증감·논리·삼항 연산자를 예제로 연습했다.",
    learned: [
      "변수 선언·초기화와 이름 규칙",
      "기본 자료형과 final 상수",
      "자동·명시적 형변환",
      "산술·증감·논리·삼항 연산자",
    ],
    tags: ["Java", "자료형", "연산자"],
    folder: "Java/20260731",
    readTime: 10,
  },
  {
    date: "2026-07-30",
    day: "DAY 09",
    title: "계층형 질의와 Java 첫걸음",
    summary:
      "START WITH와 CONNECT BY로 조직의 계층 구조를 탐색했다. Java의 바이트코드와 JVM을 이해하고 Hello World, 주석, 변수와 기본 연산을 실습했다.",
    learned: [
      "START WITH·CONNECT BY PRIOR",
      "LEVEL·SYS_CONNECT_BY_PATH",
      "Java·JVM·바이트코드",
      "Hello World·주석·변수",
    ],
    tags: ["계층형 질의", "Java", "JVM"],
    folder: "Oracle_SQL/20260730",
    readTime: 12,
  },
  {
    date: "2026-07-29",
    day: "DAY 08",
    title: "인덱스, 뷰, 권한과 동의어",
    summary:
      "조회 성능을 위한 인덱스와 쿼리 재사용을 위한 뷰를 만들었다. 시스템·객체 권한, Role, Private·Public Synonym으로 사용자 접근을 관리했다.",
    learned: [
      "고유·결합·함수 기반 인덱스",
      "단순·복합·인라인 뷰",
      "시스템 권한과 객체 권한",
      "Role과 Private·Public Synonym",
    ],
    tags: ["인덱스", "뷰", "권한"],
    folder: "Oracle_SQL/20260729",
    readTime: 12,
  },
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
