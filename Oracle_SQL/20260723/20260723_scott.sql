//사원 테이블에서 10번과 30번 부서에 근무하는 직원들의 이름 급여, 커미션, 급여+커미션을 출력하세요

select deptno, ename, sal, comm, sal+nvl(comm, 0) total 
from emp
where deptno = 10
or deptno = 30;

/*사원이름과 보너스를 출력하세요
단 보너스를 받지 않은 사원은 'No comm'을 출력해 주세요. 열 레이블은 comm입니다*/
select ename, comm, nvl2(comm, comm, to_char(nvl(comm,0),'No comm')) comm 
from emp;//내가 한것"ORA-01481: 숫자 형식 모델이 부적합합니다"//괄호를 잘못 쓰움

select ename,  comm, nvl(to_char(comm), 'No comm') comm
from emp;

select ename,  comm, nvl2(to_char(comm),to_char(comm), 'No comm') comm
from emp;

/*사원 테이블에서 중복되지 않는 job의 갯수. 그리고 평균급여, 급여의 합을 각각 출력*/ 
select count(distinct job)
from emp;
select round(avg(sal)), sum(sal)
from emp;
select count(distinct job), round(avg(sal)), sum(sal)
from emp;

/*사원 테이블에서 20번 부서에서 가장 작은 급여와 많은 급여를 출력해보세요*/
select max(sal), min(sal)
from emp
where deptno = 20;

/*사원 테이블에서 가장 급여가 높은 직업을 출력해보세요*/
select job, round(avg(sal),2)
from emp
group by job
order by 2 desc;

/*사원테이블에서 부서별 최대급여와 최소급여를 구하되
최대 급여가 2980이상인 부서만 출력하세요*/
select deptno, max(sal), min(sal)
from emp
group by deptno
having max(sal)>= 2980;

/*scott의 사번, 이름 급여, 부서명, 부서위치를 출력(emp,dept)*/
select e.empno, e.ename, e.sal, d.dname, d.loc
from emp e, dept d
where e.deptno = d.deptno
and lower(e.ename) = 'scott';

desc emp;
/*chicago에 근무하는 전체 사원수와 최대급여, 최소급여를 출력해 보세요*/
select d.loc, count(empno), max(sal), min(sal)
from emp e, dept d
where e.deptno = d.deptno
and d.loc = 'CHICAGO'
group by d.loc;

select d.loc, e.empno, e.sal
from emp e, dept d
where e.deptno = d.deptno
and d.loc = 'CHICAGO'
order by d.loc desc;

/*문제1
모든 사원의 최대 급여, 최저 급여, 합계 그리고 평균 급여를 출력하세요.
열레이블은 Maximum, Minimum, Sum 그리고 Average입니다. 소수점에서 결과를 반올림 하십시오.
(아래와 같은 결과가 나오도록)

Maximum Minimum Sum Average
--------- ---------- ---------- ----------
5000 800 5000 5000
*/
select * from emp;
select round(max(sal)) as Maximum, round(min(sal)) as Minimum, round(sum(sal)) Sum, round(avg(sal)) Average
from emp;

/*문제2
ROLLUP 연산자를 이용하여 아래와 같이 부서별, 직업별 전체 사원수 및 전체 급여의 합계를 출력하세요. (아래와 같은 결과가 나오도록)
DNAME                JOB       Total Emp Total Sal
-------------------- --------- ---------- ----------
SALES                CLERK      1           950
SALES               MANAGER     1            2850
SALES               SALESMAN    4           5600
SALES                           6           9400
RESEARCH CLERK 2 1900
RESEARCH ANALYST 2 6000
RESEARCH MANAGER 1 2975
RESEARCH         5 10875
ACCOUNTING CLERK 1 1300
ACCOUNTING MANAGER 1 2450
ACCOUNTING PRESIDENT 1 5000

DNAME               JOB      Total Emp   Total Sal
-------------------- --------- ---------- ----------
ACCOUNTING         3 8750
14 29025
*/
select * from dept;
select * from emp;

select d.dname as Dname, e.job as job, count(e.job) total_emp, sum(e.sal) total_sal
from emp e, dept d
where e.deptno = d.deptno
group by rollup(d.dname, e.job)
order by 1 desc;
--order by grouping(d.dname),d.dname desc, grouping(e.job),e.job;// 그룹핑으로 정렬 순서까지 맞춤


/*문제3
1980, 1981, 1982, 1983년에 입사한 전체 사원 수와 연도별 사원수를
출력하는 SQL을 작성하세요. (적당한 열레이블을 부여하세요.)

TOTAL 1980 1981 1982 1983
------------------------------------------------------------
14 1 10 1 0
*/
select *from emp;
select count(empno) total,
       sum (case when to_char(hiredate,'yy') = 80 then 1 else 0 end) as "1980",
       sum (case when to_char(hiredate,'yy') = 81 then 1 else 0 end) as "1981",
       sum (case when to_char(hiredate,'yy') = 82 then 1 else 0 end) as "1982",
       sum (case when to_char(hiredate,'yy') = 83 then 1 else 0 end) as "1983"
from emp;

select count(*) TOTAL, 
        count(decode(to_char(hiredate,'yyyy'),'1980',1)) "1980",
        count(decode(to_char(hiredate,'yyyy'),'1981',1)) "1981",
        count(decode(to_char(hiredate,'yyyy'),'1982',1)) "1982",
        count(decode(to_char(hiredate,'yyyy'),'1983',1)) "1983"
from emp;