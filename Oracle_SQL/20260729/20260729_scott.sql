//inline view
select dname, avg_height, avg_weight
from (select deptno, avg(height) avg_height, avg(weight) avg_weight
      from student
      group by deptno) s, department d
where s.deptno = d.deptno;

/*각 학년의 평균키를 구하고 평균 키보다 큰 학생의 학년, 이름, 키, 각 학년의 평균 키를 출력하세요*/ 
select s.grade, s.name, s.height, a.avg_height
from (select grade, round(avg(height)) avg_height
      from student
      group by grade) a, student s
where a.grade = s.grade
and s.height > a.avg_height
order by 1;

/*EMP, DEPT 데이블을 조회하여 부서번호와 부서별 최대 급여, 부서명을 출력해 보세요*/
DESC emp;
select e.deptno, d.dname, e.max_sal
from (select deptno, max(sal) max_sal
      from emp
      group by deptno) e, dept d
where e.deptno = d.deptno
order by 1;

//뷰의 내부처리과정
create view v_stud_dept101
as select studno, name, deptno
from student
where deptno =101;

select * from v_stud_dept101
where name = '김영균';

// 뷰 조회
select view_name, text
from user_views;

//뷰 수정
create or replace view v_stud_dept101
as select studno, name, deptno, grade
   from student
   where deptno = 101;
   
//drop 뷰
drop view v_stud_dept101;

//사용자 권한 제어
select * from user_sys_privs;

//객체 권한 부여

 alter session set "_oracle_script"=true;

세션이 변경되었습니다.

SQL> create user tiger identified by tiger123
  2  default tablespace users
  3  temporary tablespace temp;
create user tiger identified by tiger123
