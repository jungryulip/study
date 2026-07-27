desc professor;

//다중행 서브쿼리 
/*in
정보미디어 학부(부서:100)에 소속된 모든 학생의 학번, 이름, 학과번호를 출력하여라.*/
select name, grade, deptno
from student
where deptno in (select deptno
                 from department
                 where college =100
                 );
/*any
모든 학생 중에서 4학년 학생 중에서 키가 제일 작은 학생보다 키가 큰 학생의 학번, 이름, 키를 출력하여라*/             
select studno, name, height
from student
where height > any(select height 
                   from student
                   where grade = '4'
                   )
order by height;

/*all
모든 학생 중에서 4학년 학생 중에서 키가 제일 작은 학생보다 키가 큰 학생의 학번, 이름, 키를 출력하여라*/             
select studno, name, height
from student
where height > all(select height 
                   from student
                   where grade = '4'
                   );
                   
/*exists <> not exists
보직 수당을 받는 교수가 한 명이라도 있으면 모든 교수의 번호, 이름, 보직수당, 그리고 급여와 보직수당의 합을 출력하여라*/
select profno, name, sal, comm, sal+nvl(comm, 0)
from professor
where exists (select profno
              from professor
              where comm is not null);
              
/*학생 중 goodstudent라는 사용자 아이디가 없으면 1을 출력하여라*/
select 1 useid_exist
from dual
where not exists (select userid
                  from student
                  where userid = 'goodstudent');
                  
/*학과별 평균 몸무게가 최대인 학과 번호와 최대 몸무게를 출력하세요.*/
select deptno, avg(weight)
from student
group by deptno
having avg(weight) = (select max(avg(weight))
                      from student
                      group by deptno);
                      
/*학과별 평균 몸무게가 최대인 학과번호, 학과명, 최대몸무게를 출력하세요*/
select s.deptno 학과번호, d.dname 학과명, avg(s.weight) 최대몸무게
from student s, department d
where s.deptno = d.deptno
group by s.deptno, d.dname
having avg(s.weight) = (select max(avg(weight))
                      from student 
                      group by deptno);
                      
select s.deptno 학과번호, d.dname 학과명, avg(s.weight) 최대몸무게
from student s inner join department d
on s.deptno = d.deptno
group by s.deptno, d.dname
having avg(s.weight) = (select max(avg(weight))
                      from student 
                      group by deptno);
                      
/*다중컬럼 서브쿼리*/
//pairwise
/*pairwise 비교 방법에 의해 학년별로 몸무게가 최소인 학생의 이름, 학년, 몸무게를 출력하라*/
select name, grade, weight
from student
where (grade, weight) in (select grade, min(weight)
                          from student
                          group by grade)
order by grade;

/*unpairwise 비교 방법에 의해 학년별로 몸무게가 최소인 학생의 이름, 학년, 몸무게를 출력하여라*/
select name, grade, weight
from student
where grade in (select grade
                from student
                group by grade
                )
and weight in (select min(weight)
               from student
               group by grade)
order by weight;

//데이터 조작어
--insert

insert into student
values(10110, '홍길동', 'hong', '1', '8501011143098', '85/01/01', '041)630-3114', 170, 70, 101, 9903);

select studno, name
from student
where studno = 10110;

DESC DEPARTMENT;
insert into department(deptno, dname)
values (300, '생명공학부');

select *
from department
where deptno = 300;

insert into department
values (301, '환경보건학과', '', '');

select *
from department
where deptno = 301;

insert into professor(profno, name, position, hiredate, deptno)
values (9920, '최윤식', '조교수', to_date('2006/01/01', 'YYYY/MM/DD'),102);

commit;

select *
from professor
where profno = 9920;

insert into professor
values (9910, '백미선', 'white', '전임강사', 200, sysdate, 10, 101);

select * from professor where profno = 9910;

rollback;

commit;

//단일 테이블에 다중행 입력

--t_student테이블 생성
create table T_STUDENT
as select * from student
where 1 = 0;//거짓조건=껍질을 만드는 것

--t_student 테이블로 insert
insert into T_STUDENT
select * from student;

desc t_student;

/*교수테이블과 동일한 구조를 갖는 imsi_professor 테이블을 생성하고 동일한 데이터를 입력해보세요.*/

create table IMSI_PROFESSOR
as select * from professor
where 1 = 0;

insert into IMSI_PROFESSOR
select *from professor;

desc imsi_professor;

create table I_PROFESSOR
as select * from professor;

desc i_professor;

/*다중행 입력을 위한 height_info, weight_info 예제 테이블을 생성*/

create table height_info(
studno  number(5),
name    varchar2(10),
height  number(5,2));

create table weight_info(
studno  number(5),
name    varchar2(10),
weight  number(5,2));

insert all
into height_info values (studno, name, height)
into weight_info values (studno, name, weight)
select studno, name, height, weight
from student
where grade >= '2';

select * from height_info;
select * from weight_info;

delete from height_info;
delete from weight_info;

rollback;
commit;

insert all
when height > 170 then
into height_info values (studno, name, height)
when weight > 70 then
into weight_info values (studno, name, weight)
select studno, name, height, weight
from student
where grade >= '2';

select * from height_info;
select * from weight_info;

/*교수 테이블에서 교수 번호, 교수 이름으로 구성된 테이블 PROF1, PROF2를 생성해보세요.*/
desc professor;
create table PROF1(
profno number(4),
name varchar2(10));
select * from prof1;

create table PROF2(
profno number(4),
name varchar2(10));
select * from prof2;


/*교수 테이블에서 교수 번호가 9901~9905까지인 교수의 교수번호와 이름은 prof1테이블에 입력
교수 번호가 9906~9920인 까지인 교수의 교수번호와 이름은 prof2테이블에 입력해서 보세요*/

insert all
when profno between 9901 and 9905 then
into prof1 values (profno, name)
when profno between 9906 and 9920 then
into prof2 values (profno, name)
select profno, name
from professor;

//다중행 입력conditional-first insert
insert first
when height > 170 then
into height_info values (studno, name, height)
when weight > 70 then
into weight_info values (studno, name, weight)
select studno, name, height, weight
from student
where grade >= '2';

//다중행 입력pivoting insert : 분석용 테이블 만들때 쓰는 것

//데이터 수정
//update
select profno, name, position
from professor
where profno = 9903;

update professor
set position = '부교수'
where profno = 9903;

rollback;

//update subquery
select * from student
where studno = 10103;
update student
set (grade, deptno) = (select grade, deptno
                       from student
                       where studno = 10103)
where studno = 10201;
select * from student
where studno = 10201;

rollback;

/*남은혁 교수 userid를 black으로 변경*/

select name, userid from professor
where name = '남은혁';
update professor
set userid = 'black'
where name = '남은혁';// 

//delate
delete
from student
where studno = 20103;
select studno from student
where studno = 20103;

delete from student
where deptno = (select deptno
                from department
                where dname = '컴퓨터공학과');
                
/*학생테이블에서 학번이 20000에서 25000번에 해당하는 학생들을 삭제하세요*/
delete from student
where studno between 20000 and 25000;

//marge : 추가하기 위한 조작어
create table professor_temp as
select * from professor
where position = '교수';

update professor_temp
set position='명예교수'
where position='교수';

insert into professor_temp
values(9999, '김도경', 'arom21', '전임강사',200,sysdate, 10, 101 );

select * from professor_temp;
select * from professor;

merge into professor p
using professor_temp f
on (p.profno = f.profno)
when matched then
update set p.position = f.position
when not matched then
insert values(f.profno, f.name, f.userid, f.position, f.sal, f.hiredate, f.comm, f.deptno);

select * from professor
order by position;

//트랜젝션
//commit
//rollback


/*1. 교수 테이블에서 성연희 교수의 직급과 동일 직급을 가진 교수들 중 현재
급여가 410이 안 되는 교수들의 급여를 12% 인상하세요.*/
select * from professor where name = '성연희'; //조교수

select name, sal, position, round(sal*1.12)
from professor
group by name, sal, position
having sal in (select sal
               from professor
               where sal < 410)
and position =(select position
               from professor
               where name = '성연희');

/*2. STUDNO, NAME, USERID, GRADE 그리고 DEPTNO 열만을 포함하는
STUDENT 테이블의 구조를 기초로 STUDENT2 테이블을 생성하세요.*/
desc student;
create table student2(
studno number(5), 
name varchar(20), 
userid varchar(10), 
grade varchar(1), 
deptno number(4));
select * from student2;

/*2-1. student2 테이블에 데이터 2개를 입력하세요.
-1명 입력 4444,'테스트', 'test', '2',101
-1명 업데이트 10103, '김영균', 'manu1', '3', 102*/
insert into student2 values (55555,'테스트', 'test', '2',101);
rollback;

/*3. STUDENT 테이블과 STUDENT2테이블을 MERGE 시키세요.(결과 테이블:student)*/
merge into student s
using student2 st
on (s.studno = st.studno)
when matched then
update set s.name = st.name
when not matched then
insert (s.studno, s.name, s.userid, s.grade, s.deptno)
values(st.studno, st.name, st.userid, st.grade, st.deptno);//student와 student2의 값이 같아야함.

/*4. 교수 테이블에 교수 3명을 입력하세요. ( 직급: '시간강사')*/
desc professor;
select * from professor;

insert into professor values(9998, '김민지', 'kim01', '시간강사', 270, sysdate, 10, 101);
insert into professor values(9988, '초민지', 'cho', '시간강사',220,sysdate, '', 102);
insert into professor values(9980, '이선미', 'leesm', '시간강사',180,sysdate, 10, 102);

      
rollback;
/*5. 입력한 교수 중에서 2명을 삭제하세요.*/
delete from professor
where profno between 9980 and 9990;

/*6. 입력한 교수 중 1명은 직급을 '전문가'로 수정해 보세요.*/
update professor 
set position = '전문가'
where position = '시간강사';

/*7. 각 학과별로 입사일이 가장 오래된 교수의 교수번호와 이름, 입사일, 학과명을 출력하세요.
(입사일 순으로 정렬하세요.)
교수 NO. 교수명 입사일 학과
===== ===== ===== ===========
9901 김도훈 82/06/24 컴퓨터공학과
9905 권혁일 86/01/08 멀티미디어학과
9908 남은혁 90/11/18 기계공학과
9902 이재우 95/04/12 전자공학과*/
select * from department;
select p.profno, p.name, p.hiredate, d.dname, d.deptno
from professor p inner join department d on p.deptno = d.deptno
group by p.profno, p.name, p.hiredate, d.dname, d.deptno
having p.hiredate in (select min(p.hiredate)
                    from professor p
                    group by p.deptno)
order by d.deptno;

rollback;