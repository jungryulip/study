desc emp;

//별명지정의 규칙
select dname 학과명, deptno 학과번호
from department;

select dname dpt_name, deptno ds
from department;

select * from professor;

select name 교수명, deptno 학과번호, sal 급여 
from professor
order by sal;

select * from department;
select dname "Department Name", deptno "부서 번호#"
from department
order by "부서 번호#";

select * from professor;
select name Professor, sal "Monthly salary"
from professor
order by "Monthly salary";

//공백삽입

select * from student;
select studno ｜｜ ' ' ｜｜ name student
from student;

select name, weight, weight*2.2 as weight_pound
from student;

//테이블 삽입하기

create table ex_type 
(c char(10), v varchar2(10));

insert into ex_type
values('sql','sql');

select * 
from ex_type
where c='sql';

desc ex_type;

//sysdate 날짜확인하기

select sysdate from dual;

select sysdate-1 as yesterday, sysdate as today, sysdate+1 as tommorrow
from dual;

//rowid를 넣어서 확인

select rowid,studno, name from student;

select rowid, name, position from professor;

select 23*25
from dual;

select 23*25
from emp;

select 23*25
from professor;

desc sys.dual;

select dummy from dual;

// where절 사용

select studno, name, deptno
from student
where grade = '1';

select studno, name, deptno, grade
from student
where grade = '1'
order by name;

select * from professor;
select name, position, sal, deptno
from professor
where position = '교수';

select studno, name, grade, deptno, weight
from student
where weight <= '70'
order by weight;

//AND OR NOT 연산자
--and
select name, grade, weight, deptno
from student
where grade = '1'
and weight >= 70;

desc professor;

select name, sal, position, deptno
from professor
where position = '조교수'
and sal >= 350;

-- or
select studno, name, weight, deptno, grade
from student
where grade = '1' or weight >= 70
order by grade;

--not
select studno, name, weight, deptno
from student
where not deptno = 101
order by deptno;

--between
select studno, name, weight
from student
where weight between 50 and 70
order by weight;

desc professor;
select name, sal, deptno
from professor
where not deptno = 102 and (sal between 350 and 400);//이렇게 만들어도 되는지 나중에 질문
// where sal between 350 and 400 and not deptno = 102;

select name, birthdate
from student
where birthdate between '81/01/01' and '83/12/31';

select name, grade, birthdate
from student
where birthdate between '81/01/01' and '83/12/31'
and (grade = 1 or grade = 3)
order by birthdate;

--in

select name, grade, deptno
from student
where deptno in (102,201)
order by deptno;

/*교수 테이블에 급여가 400~500이고 학과번호가 101이나 201에 속하는 
교수들의 교수번호, 이름, 급여, 학과 번호를 출력하세요. 
교수No.   교수명,  급여, 학과 번호
*/

desc prefessor;
select profno "교수No.", name 이름, sal 급여, deptno "학과 번호#"
from professor
where sal between 400 and 500
and deptno in (101,201)
order by deptno;

--like 검색하는 것이 %기호 입력
//이름이 김으로 시작하는 사람
select name, grade, deptno
from student
where name like '김%';
//이름이 훈으로 끝나는 사람
select name, grade, deptno
from student
where name like '%훈';

select name, grade, deptno
from student
where name like '김_영';

desc student;
// 학생 테이블에서 남학생들만 학번, 이름, 주민등록번호, 학과번호를 출력해보세요
select userid, name, idnum, deptno
from student
where idnum like '______1%';

// 학생 테이블에서 남학생들이면서 79학번, 이름, 주민등록번호, 101학과번호를 출력해보세요
select userid, name, idnum, deptno
from student
where idnum like '79____1%' 
and deptno in '101';
//where idnum like '79____1%' 가 아니라 where idnum like '______1%' and birthdate like '79%' 

//escape 
insert into student (studno, name)
values (33333,'황보_정호');
--1 행 이(가) 삽입되었습니다.
select name from student;

select name
from student
where name like '황보\_%'escape'\';

//is null is not null

select name, position, comm
from professor
where comm is null;

/*학생테이블에서 이름이 진으로 끝나고, 지도교수를 배정받지 못한 101법 학과
학생 아이디, 이름, 학년, 학과번호, 지도교수를 출력하시오*/
desc student;
select userid, name, grade, deptno, profno 
from student
where name like '%진'
and profno is null
and deptno in 101;

/*학생테이블에서 지도 교수를 베정받은 
학생들의 아이디,이름, 학년,학과번호, 지도교수를 출력*/
select userid, name, grade, deptno, profno 
from student
where profno is not null;

//102학과, 1학년 또는 4학년, 이름, 학년, 학과번호
select name, grade, deptno
from student
where deptno in 102
and (grade = 1 or grade = 4);


select name, grade, deptno
from student
where deptno in 102
and grade = 1 or grade = 4;
--괄호의 유무로 조건이 달리 해석됨, 아래꺼는 102학번이면서 1학년인 학생과 4학년인 학생만 출혁함. 

//table생성, union 용
create table stud_heavy
as select * from student
where weight >= 70 and grade = '1';

create table stud_101
as select * from student
where deptno =101 and grade ='1';

//union 집합
select studno, name
from stud_heavy
union
select studno, name
from stud_101;

//union all 합집합
select studno, name
from stud_heavy
union all
select studno, name
from stud_101;

//학생과 교수 전체 명단, 이름, 학과번호, 급여[학생의 경우는 값이 없으니 0을 널어서 마무리]

desc student;
desc professor;
select name, deptno, 0 as sal
from student
union 
select name, deptno, sal
from professor;

//intersect 교집합
select name from stud_heavy
intersect
select name from stud_101;

//minus 차집합
select studno 학번, name 이름
from stud_heavy
minus
select studno, name
from stud_101;

select studno 학번, name 이름
from stud_101
minus
select studno, name
from stud_heavy;

/*교수 테이블에서 전체 교수의 급여를 인상하기 위해 직원 명단 출력
단 직급인 전임강사인 사람들은 명단에서 제외하세요.*/
select name, position
from professor
minus
select name, position
from professor
where position in '전임강사';
//where position = '전임강사'로 써도 된다.
