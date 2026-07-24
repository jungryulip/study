/*아래와 같은 결과를 출력해보세요*/
select e.ename||'의 사번은 '||e.empno||'이고, 매니저는'|| m.ename||'이고 사번은'|| m.empno ||'입니다'
from emp e , emp m
where e.mgr = m.empno;

desc emp;
select * from emp;
