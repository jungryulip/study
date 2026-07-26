//order by 다중 열에 대한 정렬

select ename,job, deptno, sal
from emp
order by deptno, sal desc;

//order by 문제1
desc emp;

select ename, deptno
from emp
where deptno in(10,30)
order by ename;

//order by 문제2

select ename, hiredate
from emp
where hiredate like '82%';

//order by 문제3

select ename, sal, comm
from emp
where comm is not null
and comm <> 0
order by sal desc, comm desc;

//order by 문제4

select ename, sal, comm,deptno
from emp
where deptno in 30
and comm >= sal*0.2;

//sql 함수

/*scott 사원이 있는지 확인해주세요*/
select *
from emp
where ename = 'scott';

select * from emp
where lower (ename)= 'scott';

/*이름이 j,m 또는 s으로 시작되는 사원에 대해 
사원의 이름을 대문자로, 업무는 첫문자를 대문자로 나머지는 소문자로
그리고 이름 길이를 출력하도록 질의를 작성하세요.
열 레이블은  Name, Job, Name Length로 부여하세요
사원 명 순으로 정렬하세요.*/
 
select upper(ename) as  Name, initcap(job) as Job, length(ename) as Length 
from emp
where ename like 'J%'
or ename like 'M%'
or ename like 'S%'
order by ename;
//order by 1; 이라고 해도 결과동일한데. 1로 하면 내가 불러온 결과를 가지고 오라는 의미이다. 

//사원명, 입사일 그리고 입사한 요일을 출력하세요. 열레이블은 DAY 입니다. 결과는 월요일부터 시작하는 요일순으로 정렬

desc emp;
select ename, hiredate, upper(to_char(hiredate, 'day')) DAY
from emp
order by to_char(hiredate-1,'d');
--order by 정렬을 하려고 하면 날짜가 나타내는 숫자를 순서로 정렬하면 된다. d는 숫자이고, day는 문자라 가나다 순으로 나옴

//문제1 사원테이블에서 2월에 입사한 사원을 출력해보세요.
select hiredate from emp;
select ename, substr(hiredate,4,2)
from emp
where substr(hiredate,4,2) = '02';

/*
ALLEN	02
WARD	02
*/

//문제2 사원명 급여를 아래 포멧과 같은 형태로 출력해보세요.

SELECT concat(ename,': ')  || concat('1 monthly salary = ', sal) Monthly
from emp;

/*
SMITH: 1 monthly salary = 800
ALLEN: 1 monthly salary = 1600
WARD: 1 monthly salary = 1250
JONES: 1 monthly salary = 2975
MARTIN: 1 monthly salary = 1250
BLAKE: 1 monthly salary = 2850
CLARK: 1 monthly salary = 2450
SCOTT: 1 monthly salary = 3000
KING: 1 monthly salary = 5000
TURNER: 1 monthly salary = 1500
ADAMS: 1 monthly salary = 1100
JAMES: 1 monthly salary = 950
FORD: 1 monthly salary = 3000
MILLER: 1 monthly salary = 1300
*/

/*문제3 직급이 manager인 사원을 검색하려고 아래와 같은 질의문을 작성하였으나, '선택된 레코드가 없습니다.'라고 나온다. 
이유를 설명하고 직급이 manager인 사원을 검색하도록 질의문을 수정해보다.*/

select ename, job 
from emp
where lower(job) in 'manager';
//이유: manager를 소문자로 필터걸었기 때문에

/*
JONES	MANAGER
BLAKE	MANAGER
CLARK	MANAGER
*/

/*문제4 이름이 J,A,M으로 시작하는 모든 사원에 대해서 
첫번째 문자는 대문자로 그리고 나머지는 모두 소문자로 나타나는 사원의 이름과 이름 길이를 출력하세요.
각각의 열에 Name,Length라는 레이블을 부여하세요(substr)*/

select initcap(ename) Name, length(ename) Length 
from emp
where substr(ename,1,1) like 'J'
or substr(ename,1,1) like 'A'
or substr(ename,1,1) like 'M';

/*
Allen	5
Jones	5
Martin	6
Adams	5
James	5
Miller	6
*/

//문제5 이름에 L이 두자가 있고 부서가 30이거나 또는 관리자가 7782인 모든 사원의 이름을 출력하세요.

desc emp;
select * from emp;
select ename, deptno, job , mgr
from emp
where (ename = '%L%L%'
and deptno in 30)
or mgr = '7782';

select ename, deptno, job , mgr
from emp
where ename like '%L%L%'
and deptno in 30
or mgr = '7782';

/*
ALLEN	30	SALESMAN	7698
MILLER	10	CLERK	7782*/

//문제5 풀이 교재 144의 replace
/*
1)
SELECT ename name	
FROM emp
WHERE 
INSTR(ename, 'L', 1,2) != 0
AND (deptno=30 OR mgr=7782);
2)
SELECT ename as "name"
FROM emp
WHERE INSTR(ename,'L',1,2) > 0
AND (deptno = 30
OR mgr = 7782)
3)
select ename, deptno, mgr
from emp
where ename like '%L%L%'
and (deptno = 30
or mgr = 7782);

--이름에 L이 여러개 들은 사람 찾기

select ename, deptno, mgr,length(ename), length(replace(ename,'L',''))//이름에서 L을 없앤다.
from emp
where length(ename) - length(replace(ename,'L', '')) = 3//이름의 길이에서 L이 3개 빠진 이름이 빠진 것만 출력한다.
*/

rollback;