/*인덱스 관리*/
//고유 인덱스
create unique index idx_dept_name
on department(dname);

//비고유 인덱스
create index idex_stud_birthdate
on student(birthdate);

//결합인덱스
create index idx_stud_dno_grade
on student(deptno, grade);

//DESENDING INDEX
create index fidx_stud_no_name on student(deptno desc, name asc);

//FUNCTION BASED INDEX
create index uppercase_idx on emp(upper(ename));
select * from emp where upper(ename) = 'KING';

//함수기반 인덱스
create index idx_standard_weight on student((height-100)*0.9);

//인덱스 실행경로 확인법
select deptno, dname
from department
where dname = '정보미디어학부';

//인덱스 삭제
drop index idx_dept_name;

//실행
select name, birthdate
from student
where birthdate = '79/04/02';

drop index idex_stud_birthdate;

//인덱스 관리 USER_INDEXES
select index_name, uniqueness
from user_indexes
where table_name = 'STUDENT';

--columns
select index_name, column_name
from user_ind_columns
where table_name = 'STUDENT';

//drop
drop index fidx_stud_no_name;

//재구성 rebuild
alter index stud_no_pk rebuild;

//VIEW ; 하나이상의 기본 테이블이나 다른 뷰를 이용해서 생성되는 가상의 테이블
create view v_stud_dept101 as
       select studno, name, deptno
       from student
       where deptno = 101;
       
select * from v_stud_dept101;// 왜 안나오지??????

//복합뷰
create view v_stud_dept102
as select s.studno, s.name, s.grade, d.dname
from student s, department d
where s.deptno = d.deptno and s.deptno = 102;

select * from v_stud_dept102;

//replace
create or replace view v_stud_dept102
as select s.studno, s.name, s.grade, d.dname
from student s, department d
where s.deptno = d.deptno and s.deptno = 102;

//함수 이용
create view v_prof_avg_sal
as select deptno, sum(sal) sum_sal, avg(sal) avg_sal
from professor
group by deptno;

//inline view
select dname, avg_height, avg_weight
from (select deptno, avg(height) avg_height, avg(weight) avg_weight
      from student
      group by deptno) s, department d
where s.deptno = d.deptno;

//@C:\oracle\table.sql//테이블 다시 불러오기

select * from professor;

alter session set nls_date_language=
