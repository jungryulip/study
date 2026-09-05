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
    date: "2026-09-05",
    day: "DAY 37",
    title: "Spring Data JPA와 RESTful CRUD API",
    summary:
      "Member 엔티티를 테이블과 매핑하고 JpaRepository로 저장·조회·조건 검색·삭제를 실습했다. Query by Example으로 동적 조건을 만들고 REST Controller와 연결해 Postman으로 POST·GET·PUT·DELETE 요청과 H2 반영 결과를 검증했다.",
    learned: [
      "JPA 엔티티와 테이블·컬럼·기본키 매핑",
      "JpaRepository CRUD와 이름 기반 조회·삭제",
      "Query by Example을 이용한 동적 조건 조회",
      "REST Controller와 HTTP 메서드별 CRUD 검증",
    ],
    tags: ["Spring Boot", "Spring Data JPA", "REST API"],
    folder: "Java/20260905",
    readTime: 14,
  },
  {
    date: "2026-09-04",
    day: "DAY 36",
    title: "Spring Boot 데이터베이스와 MyBatis",
    summary:
      "Spring Data JDBC로 Oracle의 Member 테이블을 객체와 매핑하고 CrudRepository를 이용해 저장·조회·수정·삭제와 조건 조회를 실습했다. HikariCP 커넥션 풀을 이해하고 H2 기반 MyBatis에서 XML·애노테이션 SQL 매핑도 구현했다.",
    learned: [
      "Spring Data JDBC·Oracle과 테이블 객체 매핑",
      "CrudRepository CRUD와 메서드 이름 기반 조회",
      "DataSource·HikariCP와 스키마 연결 오류 점검",
      "H2·MyBatis의 XML 및 애노테이션 SQL 매핑",
    ],
    tags: ["Spring Boot", "Spring Data JDBC", "MyBatis"],
    folder: "Java/20260904",
    readTime: 18,
  },
  {
    date: "2026-09-03",
    day: "DAY 35",
    title: "Spring Boot IoC·DI, AOP와 Lombok",
    summary:
      "Spring Boot의 자동 설정과 내장 서버를 이해하고 커피 머신 예제로 직접 객체 생성에서 인터페이스 기반 DI와 Spring Container 관리로 발전시키는 과정을 실습했다. 여러 Bean 선택·정렬, AOP 실행 시간 측정과 Lombok·SLF4J도 함께 익혔다.",
    learned: [
      "Spring Boot와 Spring Framework의 역할",
      "IoC·DI·Container·Bean과 결합도",
      "Qualifier·List 주입·Order로 여러 Bean 관리",
      "AOP·Lombok·Builder·EqualsAndHashCode·SLF4J",
    ],
    tags: ["Java", "Spring Boot", "IoC·DI"],
    folder: "Java/20260903",
    readTime: 16,
  },
  {
    date: "2026-09-01",
    day: "DAY 34",
    title: "BookMate 관리자 승인·신고 처리와 GPT 협업",
    summary:
      "관리자 책 승인 목록·상세 UI와 DTO를 만들고 게시글·댓글 신고의 조회·검색·승인·반려 흐름을 구현했다. GPT와 기존 코드를 병합하고 지원 범위, 스포일러 저장 누락과 시연 영상 품질도 점검해 PR #10·#11·#12로 정리했다.",
    learned: [
      "책 등록 승인 목록·상세 UI와 요청 DTO 설계",
      "신고 조회·검색·승인·반려와 트랜잭션",
      "실제 데이터 구조에 맞춘 관리자 기능 범위 조정",
      "GPT를 활용한 충돌 병합·오류 진단·영상 분석",
    ],
    tags: ["Mini Project", "BookMate", "관리자·GPT"],
    folder: "Project/20260901",
    readTime: 17,
  },
  {
    date: "2026-08-31",
    day: "DAY 33",
    title: "BookMate 댓글·신고와 관리자 콘텐츠 관리",
    summary:
      "게시글 상세에 댓글 조회·등록·작성자 수정과 소프트 삭제를 연결하고 게시글·댓글 공통 신고와 중복 방지를 구현했다. 관리자 게시글·댓글 관리 화면도 분리해 두 단계의 PR로 main에 병합했다.",
    learned: [
      "댓글 조회·등록·작성자 수정과 소프트 삭제",
      "게시글·댓글 공통 신고와 본인·중복 신고 방지",
      "댓글·신고 상태와 트랜잭션 관리",
      "관리자 게시글·댓글 관리 화면 분리",
    ],
    tags: ["Mini Project", "BookMate", "댓글·신고"],
    folder: "Project/20260831",
    readTime: 15,
  },
  {
    date: "2026-08-30",
    day: "DAY 32",
    title: "BookMate 게시글 좋아요 등록·취소와 상태 동기화",
    summary:
      "BookMate 커뮤니티의 게시글 좋아요 등록·취소 API를 만들고 POST_LIKE 테이블과 상세 화면을 연결했다. 회원별 중복 좋아요를 방지하고 좋아요 수와 현재 상태가 새로고침 후에도 유지되도록 구현해 PR로 main에 병합했다.",
    learned: [
      "POST_LIKE 기반 회원별 좋아요 상태 저장",
      "중복 방지와 등록·취소 토글 트랜잭션",
      "상세 화면의 좋아요 수·버튼 상태 동기화",
      "오류 점검과 화면·API·DB 단계별 검증",
    ],
    tags: ["Mini Project", "BookMate", "좋아요·상태"],
    folder: "Project/20260830",
    readTime: 11,
  },
  {
    date: "2026-08-29",
    day: "DAY 31",
    title: "BookMate 게시글 수정·삭제·숨김과 작성자 권한",
    summary:
      "BookMate 커뮤니티에서 작성자가 자신의 글을 수정·소프트 삭제·숨김 처리할 수 있도록 화면과 Servlet·Service·DAO를 연결했다. 비회원과 다른 사용자의 접근을 제한하고 기능 브랜치의 변경을 PR로 main에 병합했다.",
    learned: [
      "게시글 기존 값 조회·수정 API와 이탈 방지",
      "작성자 권한의 프런트·Service 이중 검증",
      "소프트 삭제와 HIDDEN_BY_WRITER 상태 관리",
      "Controller·Service·DAO 연동과 PR 협업 흐름",
    ],
    tags: ["Mini Project", "BookMate", "CRUD·권한"],
    folder: "Project/20260829",
    readTime: 14,
  },
  {
    date: "2026-08-28",
    day: "DAY 30",
    title: "BookMate 관리자·커뮤니티 기능 연동과 검증",
    summary:
      "세션과 권한에 맞춰 공통 헤더와 관리자 회원 관리를 연결하고 커뮤니티의 필터·검색, 게시글 작성·상세·작성자 권한을 구현했다. DAO와 Service의 정상·예외 시나리오를 검증하고 테스트 데이터를 원상복구했다.",
    learned: [
      "세션·역할에 따른 공통 헤더와 접근 메뉴",
      "관리자 회원 잠금·해제와 관리자 계정 보호",
      "커뮤니티 카테고리·장르·기간·검색 필터",
      "게시글 작성·상세·작성자 권한과 계층별 검증",
    ],
    tags: ["Mini Project", "BookMate", "권한·검증"],
    folder: "Project/20260828",
    readTime: 16,
  },
  {
    date: "2026-08-27",
    day: "DAY 29",
    title: "BookMate UI 리디자인과 디자인 시스템",
    summary:
      "기존 BookMate 화면을 분석하고 사이트맵과 디자인 규칙을 정리했다. 메인·책 목록·랭킹·책 취향·커뮤니티의 와이어프레임을 만든 뒤 검색·필터·카드·게시글 작성 흐름을 일관된 UI로 리디자인했다.",
    learned: [
      "사이트맵·화면 우선순위·공통 내비게이션",
      "화이트·그레이·바다색·핑크 디자인 토큰",
      "메인·책·랭킹·책 취향·커뮤니티 와이어프레임",
      "검색·필터·카드·폼·상태 배지 컴포넌트 규칙",
    ],
    tags: ["Mini Project", "BookMate", "UI/UX"],
    folder: "Project/20260827",
    readTime: 14,
  },
  {
    date: "2026-08-26",
    day: "DAY 28",
    title: "BookMate 게시판 기능 구현과 웹 실행 환경",
    summary:
      "Maven과 Tomcat으로 BookMate를 실행하고 게시글의 DTO·DAO·Service·Controller 계층을 구현했다. DB 연동 기능을 롤백 방식으로 검증한 뒤 목록·상세·작성 API를 HTML·CSS·JavaScript 화면과 연결했다.",
    learned: [
      "Maven 빌드·Tomcat WAR 배포와 컨텍스트 경로",
      "PostDTO·PostDAO·PostService 계층별 책임",
      "트랜잭션·소프트 삭제·작성자와 관리자 권한",
      "fetch·JSON·게시글 목록·상세·작성 화면 연결",
    ],
    tags: ["Mini Project", "BookMate", "Java Web"],
    folder: "Project/20260826",
    readTime: 13,
  },
  {
    date: "2026-08-25",
    day: "DAY 27",
    title: "BookMate 미니프로젝트 기획과 요구사항 정의",
    summary:
      "독서 취향 공유 커뮤니티 BookMate의 기획 발표 자료와 요구사항정의서를 작성했다. 프로젝트 목표와 핵심 기능, 역할·일정을 구조화하고 게시판·댓글·관리자·승인 기능을 사용자·입력·처리·완료 기준까지 구체화했다.",
    learned: [
      "기획 발표 자료·제안서의 정보 구조 설계",
      "요구사항 ID·입력·처리·출력·완료 기준 정의",
      "게시판·댓글·관리자·승인 기능 분석",
      "Java 계층 구조와 Oracle 스키마의 연결 흐름",
    ],
    tags: ["Mini Project", "BookMate", "요구사항 정의"],
    folder: "Project/20260825",
    readTime: 12,
  },
  {
    date: "2026-08-24",
    day: "DAY 26",
    title: "Java JDBC로 Oracle 데이터베이스 다루기",
    summary:
      "JDBC로 Java와 Oracle을 연결하고 PreparedStatement에 값을 바인딩해 INSERT와 UPDATE를 실행했다. SELECT 결과를 ResultSet에서 읽어 Java 객체에 매핑하고 예외 처리와 자원 해제 흐름도 익혔다.",
    learned: [
      "JDBC 드라이버와 Oracle Connection",
      "PreparedStatement·파라미터 바인딩",
      "INSERT·UPDATE·executeUpdate",
      "SELECT·ResultSet·객체 매핑·자원 해제",
    ],
    tags: ["Java", "JDBC", "Oracle"],
    folder: "Java/20260824",
    readTime: 18,
  },
  {
    date: "2026-08-21",
    day: "DAY 25",
    title: "JavaScript 객체와 문서 객체 모델",
    summary:
      "객체의 프로퍼티와 메서드를 이해하고 Array·Date와 브라우저 객체를 실습했다. DOM 트리에서 요소를 선택·변경하고 이벤트를 등록한 뒤 노드를 생성·추가·삭제하고 classList를 제어했다.",
    learned: [
      "객체·프로퍼티·메서드와 Array 객체",
      "Date·Window와 브라우저 객체",
      "DOM 트리·요소 선택·내용과 속성 변경",
      "addEventListener·NodeList·노드·classList",
    ],
    tags: ["JavaScript", "객체", "DOM"],
    folder: "HTML/20260821",
    readTime: 21,
  },
  {
    date: "2026-08-20",
    day: "DAY 24",
    title: "JavaScript 제어문, 함수와 이벤트",
    summary:
      "연산자와 if·switch 조건문, for·while 반복문으로 실행 흐름을 제어했다. var·let·const와 스코프를 비교하고 매개변수·반환값·익명·즉시 실행·화살표 함수, DOM 이벤트와 객체 개념을 실습했다.",
    learned: [
      "연산자·if·switch 조건문",
      "for·while·do-while·break·continue",
      "var·let·const·스코프·호이스팅",
      "함수·화살표 함수·DOM 이벤트·객체",
    ],
    tags: ["JavaScript", "제어문", "함수"],
    folder: "HTML/20260820",
    readTime: 22,
  },
  {
    date: "2026-08-19",
    day: "DAY 23",
    title: "CSS 고급 선택자·애니메이션과 JavaScript 기초",
    summary:
      "연결·속성·가상 선택자로 요소를 정밀하게 선택하고 필터, transform, transition, keyframes 애니메이션을 실습했다. JavaScript를 HTML에 연결한 뒤 DOM 이벤트와 변수·상수·자료형·문자열·배열의 기본도 익혔다.",
    learned: [
      "연결·속성·가상 선택자와 가상 요소",
      "filter·transform·transition·animation",
      "JavaScript 연결·DOM 선택·이벤트",
      "let·const·자료형·템플릿 리터럴·배열",
    ],
    tags: ["CSS", "JavaScript", "애니메이션"],
    folder: "HTML/20260819",
    readTime: 23,
  },
  {
    date: "2026-08-18",
    day: "DAY 22",
    title: "CSS 배경, 반응형 웹과 Flexbox",
    summary:
      "배경 이미지의 위치·크기·적용 범위를 조절하고 선형·원형 그라데이션을 만들었다. object-fit과 미디어 쿼리, Flexbox의 방향·정렬·크기 속성을 활용해 다양한 화면에 대응하는 레이아웃을 실습했다.",
    learned: [
      "배경 이미지·위치·크기·적용 범위",
      "선형·원형 그라데이션",
      "반응형 이미지·object-fit·미디어 쿼리",
      "Flexbox 방향·정렬·flex-grow",
    ],
    tags: ["CSS", "반응형 웹", "Flexbox"],
    folder: "HTML/20260818",
    readTime: 21,
  },
  {
    date: "2026-08-17",
    day: "DAY 21",
    title: "HTML·CSS 기본 스타일과 레이아웃",
    summary:
      "CSS를 HTML에 적용하는 방법과 선택자·캐스케이딩을 익혔다. 글꼴·색상·텍스트·목록·표를 꾸미고 박스 모델, 여백, 테두리, display·float·position으로 레이아웃을 구성했다.",
    learned: [
      "인라인·내부·외부 스타일 시트",
      "선택자·캐스케이딩·우선순위",
      "글꼴·색상·텍스트·목록·표",
      "박스 모델·display·float·position",
    ],
    tags: ["HTML", "CSS", "레이아웃"],
    folder: "HTML/20260817",
    readTime: 20,
  },
  {
    date: "2026-08-14",
    day: "DAY 20",
    title: "HTML 미디어, 링크와 폼",
    summary:
      "audio와 video로 미디어를 삽입하고 하이퍼링크와 표를 만들었다. form 안에서 체크박스·라디오·파일·날짜·범위 입력과 required·autofocus·placeholder도 실습했다.",
    learned: [
      "audio·video와 미디어 속성",
      "외부·내부 하이퍼링크",
      "table과 셀 병합",
      "form·input type·입력 속성",
    ],
    tags: ["HTML", "폼", "미디어"],
    folder: "HTML/20260814",
    readTime: 17,
  },
  {
    date: "2026-08-13",
    day: "DAY 19",
    title: "Java 예외 처리, 입출력과 스레드",
    summary:
      "try-catch-finally와 try-with-resources로 예외와 자원을 관리했다. 바이트·문자·버퍼 스트림을 비교하고 Thread와 Runnable, sleep·join·interrupt, synchronized 동기화를 실습했다.",
    learned: [
      "try-catch-finally·try-with-resources",
      "바이트·문자 입출력 스트림",
      "BufferedStream",
      "스레드·sleep·join·interrupt·동기화",
    ],
    tags: ["Java", "입출력", "스레드"],
    folder: "Java/20260813",
    readTime: 18,
  },
  {
    date: "2026-08-12",
    day: "DAY 18",
    title: "Java 람다, 스트림과 예외 처리",
    summary:
      "ArrayList와 HashSet을 비교하고 익명 클래스와 람다로 동작을 간결하게 표현했다. Stream의 filter·map·sorted·collect·reduce와 try-catch-finally·throws 예외 처리도 실습했다.",
    learned: [
      "ArrayList·HashSet과 Iterator",
      "익명 내부 클래스·함수형 인터페이스·람다",
      "Stream 중간·최종 연산",
      "try-catch-finally·throws",
    ],
    tags: ["Java", "Stream", "예외 처리"],
    folder: "Java/20260812",
    readTime: 17,
  },
  {
    date: "2026-08-11",
    day: "DAY 17",
    title: "Java 기본 클래스, 제네릭과 컬렉션",
    summary:
      "Object의 toString·equals·hashCode를 재정의하고 String의 불변성을 확인했다. enum과 record, 제네릭을 익힌 뒤 ArrayList·LinkedList·Stack·Queue·HashSet을 비교했다.",
    learned: [
      "Object·toString·equals·hashCode",
      "String·StringBuilder·StringBuffer",
      "enum·record·제네릭",
      "ArrayList·LinkedList·Stack·Queue·HashSet",
    ],
    tags: ["Java", "제네릭", "컬렉션"],
    folder: "Java/20260811",
    readTime: 16,
  },
  {
    date: "2026-08-10",
    day: "DAY 16",
    title: "HTML 웹 문서의 기본 구조",
    summary:
      "클라이언트와 서버, IP·도메인·DNS 등 웹의 기본 동작을 이해했다. HTML 문서 구조를 만들고 텍스트, 목록, 표, 이미지와 대체 텍스트를 직접 작성했다.",
    learned: [
      "웹·클라이언트·서버와 DNS",
      "HTML 문서 구조와 텍스트 태그",
      "목록·표·셀 병합",
      "이미지·상대 경로·대체 텍스트",
    ],
    tags: ["HTML", "웹", "접근성"],
    folder: "HTML/20260810",
    readTime: 12,
  },
  {
    date: "2026-08-07",
    day: "DAY 15",
    title: "Java 다형성, 다운캐스팅과 추상화",
    summary:
      "상위 타입으로 여러 하위 객체를 다루는 다형성을 연습했다. instanceof를 이용한 안전한 다운캐스팅과 추상 클래스, 템플릿 메서드, 인터페이스 기반 구현 교체도 학습했다.",
    learned: [
      "다형성과 IS-A·HAS-A 관계",
      "다운캐스팅과 instanceof",
      "추상 클래스·템플릿 메서드",
      "인터페이스와 구현 교체",
    ],
    tags: ["Java", "다형성", "인터페이스"],
    folder: "Java/20260807",
    readTime: 15,
  },
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
