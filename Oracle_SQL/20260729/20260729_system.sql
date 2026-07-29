//project db
create table project(
project_id  number(5) constraint pro_id_pk primary key,
project_name varchar2(100),
studno number(5),
profno number(5));

insert into project values(12345, 'portfolio', 10101, 9910);

select * from project;

//동의어 생성법
grant select on project to scott;

grant create synonym to scott;

//공용 동의어 생성
create public synonym pub_project for project;

drop public synonym pub_project;

// 실습 테이블20260729

//실습3
create table employee(
id  number(7) constraint emp_id_pk primary key,
last_name varchar2(25),
first_name varchar2(25),
dept_id number(7));
--Table EMPLOYEE이(가) 생성되었습니다.
select * from employee;
insert into employee values(0000000,'REO','JEONG',9999999);
--1 행 이(가) 삽입되었습니다.
/*
EMPLOYEE 테이블 출력결과
ID  FIRST_NAME lAST_NAME DEPT_ID
0	REO	       JEONG	 9999999*/

//실습4
grant select on employee to kosa;
--Grant을(를) 성공했습니다.

grant create synonym to kosa;
--Grant을(를) 성공했습니다.

create public synonym pub_employee for employee;
--Synonym PUB_EMPLOYEE이(가) 생성되었습니다.
/*
kosa테이블 출력결과
ID  FIRST_NAME lAST_NAME DEPT_ID
0	REO	       JEONG	 9999999*/

//실습6
drop public synonym pub_employee;
--Synonym MY_PROJECT이(가) 삭제되었습니다.

//지우기
drop table employee;