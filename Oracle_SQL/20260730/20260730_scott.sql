//계층적 질의문
//top down
select deptno, dname, college
from department
start with deptno = 10
connect by prior deptno = college;

//BOTTOM UP
select deptno, dname, college
from department
start with deptno = 102
connect by prior college = deptno;

//level
select level,
    LPAD(' ',(level-1)*2) || dname 조직도
from department
start with dname = '공과대학'
connect by prior deptno = college;

//계층구조의 가지 제거방법 WHERE절
select deptno, college, dname, loc
from department
where dname != '정보미디어학부'
start with college is null
connect by prior deptno = college;

//문제 계층에 맞게 공백을 4개씩 추가하여라
select deptno, college, LPAD(' ',(level-1)*4) || dname dename, loc
from department
where dname != '정보미디어학부'
start with college is null
connect by prior deptno = college;

//계층구조의 가지 제거 방법 CONNECT BY절
select deptno, college, dname, loc
from department
start with college is null
connect by prior deptno = college
and dname != '정보미디어학부';

//계층적 질의문 connect by root
select lpad(' ', (level)*4)|| ename 사원명
        , empno 사번
        , connect_by_root empno 최상위사번
        , level
from emp
start with job = upper('president')
connect by prior empno = mgr;

//계층적 질의문 connect by isitaf
select lpad(' ', 4*(level-1))|| ename 사원명
        ,empno 사번
        ,connect_by_isleaf leaf_YN
        ,level
from emp
start with job = upper('president')
connect by nocycle prior empno = mgr;

//계층적 질의문 sys connect by path
select lpad(' ', 4*(level-1))|| ename 사원명
        ,empno 사번
        ,sys_connect_by_path(ename,'/') leaf_YN
        ,level
from emp
start with job = upper('president')
connect by nocycle prior empno = mgr;

//계층적 질의문 응용 sys connect by path + connect by isleaf
select  level
        ,sys_connect_by_path(ename,'/') path
from emp
where connect_by_isleaf = 1 
start with mgr is null
connect by prior empno = mgr;

//계층적 질의문 응용 order siblings by
select lpad(' ', 4*(level-1))|| ename 사원명
    , ename ename2, empno 사번, level
from emp
start with job = upper('president')
connect by nocycle prior empno = mgr
order siblings by ename;

/*문제 1
계층적 질의문을 응용하여 아래와 같은 결과가 나오도록 출력해 보세요.
*/
select * from emp;
select e.empno, e.ename, e.job, e.mgr, m.ename as "매니저 이름", level, e.ename 사원명, sys_connect_by_path(e.ename,'-') "사원 path"
from emp e left join emp m on e.mgr = m.empno
start with e.job = upper('president')
connect by nocycle prior e.empno = e.mgr;//참고해서 만듬
//inner join을 사용해서 만들어 보기
select e.empno, e.ename, e.job, e.mgr, m.ename as "매니저 이름", level, e.ename 사원명, sys_connect_by_path(e.ename,'-') "사원 path"
from emp e, emp m 
where e.mgr = m.empno(+)
start with e.job = upper('president')
connect by nocycle prior e.empno = e.mgr;

/*문제 2
학과별 최대키를 구하고 최대키를 가진 학생의
학과명, 최대키, 이름, 키를 출력하세요.(결과는 아래~)
*/
select d.dname, m.max_height, s.name , s.height
from (select deptno, max(height) max_height from student group by deptno) m, department d, student s
where s.deptno = d.deptno
and d.deptno = m.deptno
and m.max_height = s.height
;

update student
set height ='186'
where name = '서재진';