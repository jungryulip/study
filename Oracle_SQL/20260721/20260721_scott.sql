desc emp;

select * from emp;

select ename ｜｜ ', ' ｜｜ job "Employee and Title"
from emp;

select empno, ename, sal, sal*1.2 as "New Salary"
from emp;

select empno, ename, sal, sal*1.2 as "New Salary", sal*1.2-sal as Increase
from emp;

/*select empno, ename, sal, sal*1.2 as "New Salary", "New Salary"-sal as Increase
from emp; 인센티브 값을 구하는 공식에서는 지정된 별명의 결과값을 도출해서 가져올 수 없다.*/

//null값

desc emp;

select empno, ename, sal, comm, sal+comm
from emp;

// 문제1 
desc emp;
select ename, sal
from emp
where sal > 2780;

/*
JONES	2975
BLAKE	2850
SCOTT	3000
KING	5000
FORD	3000*/

// 문제2

/*SELECT name, job, sal*12 AS yearly sal
FROM emp;*/
// name이 ename이고, yearly sal은 ""안에 넣어야 한다.

select ename, job, sal*12 as "yearly sal"
from emp;
/*
SMITH	CLERK	9600
ALLEN	SALESMAN	19200
WARD	SALESMAN	15000
JONES	MANAGER	35700
MARTIN	SALESMAN	15000
BLAKE	MANAGER	34200
CLARK	MANAGER	29400
SCOTT	ANALYST	36000
KING	PRESIDENT	60000
TURNER	SALESMAN	18000
ADAMS	CLERK	13200
JAMES	CLERK	11400
FORD	ANALYST	36000
MILLER	CLERK	15600*/

// 문제3

select * from emp;

select empno, ename, sal, comm
from emp
where comm is null
and ename like '%A%';

/*7698	BLAKE	2850	
7782	CLARK	2450	
7876	ADAMS	1100	
7900	JAMES	950	*/


// 문제4

select ename, job, sal
from emp
where not ((sal=1000 and sal=3000)
or sal=5000)
and job ='MANAGER' or job = 'SALESMAN';
/*
ALLEN	SALESMAN	1600
WARD	SALESMAN	1250
JONES	MANAGER	2975
MARTIN	SALESMAN	1250
BLAKE	MANAGER	2850
CLARK	MANAGER	2450
TURNER	SALESMAN	1500*/
 
// 문제5

select empno, ename, job, sal, sal*1.22 as "New Salary", sal*0.22 increase
from emp;

/*
7369	SMITH	CLERK	800	976	176
7499	ALLEN	SALESMAN	1600	1952	352
7521	WARD	SALESMAN	1250	1525	275
7566	JONES	MANAGER	2975	3629.5	654.5
7654	MARTIN	SALESMAN	1250	1525	275
7698	BLAKE	MANAGER	2850	3477	627
7782	CLARK	MANAGER	2450	2989	539
7788	SCOTT	ANALYST	3000	3660	660
7839	KING	PRESIDENT	5000	6100	1100
7844	TURNER	SALESMAN	1500	1830	330
7876	ADAMS	CLERK	1100	1342	242
7900	JAMES	CLERK	950	1159	209
7902	FORD	ANALYST	3000	3660	660
7934	MILLER	CLERK	1300	1586	286*/