//일반 함수
/*nvl함수
: 교수의 이름, 직급, 급여, 보직수당, 급여와 보직 수당의 합계를 출력하여라. 
단 보직수당이 null인 경우에는 보직 수당을 0으로 계산한다.
*/
select name, position, sal, comm, sal+comm, 
       sal+nvl(comm,0) s1, nvl(sal+comm, sal) s2
from professor;

/*nvl2함수
: 102번 학과 교수중 보직수당을 받는 사람은 급여와 보직수당을 더한 값을 금여 총액을 출력하여라
단, 보직 수당을 받지 않는 교수는 급여만 출력하여라.*/
select name, position, sal, comm, nvl2(comm, sal+comm, sal) total
from professor
where deptno = 102;

/*nullif
교수테이블에서 이름의 바이트 수와 사용자 아이디의 바이트 수를 비교해서 같으면 
null로 반환하고 같지 않으면 이름의 바이트 수를 반환하여라(substr)
*/
select name, userid, lengthb(name)-3, lengthb(userid),
       nullif(lengthb(name)-3, lengthb(userid)) nullif_result
from professor;//다른 사람들 예제보기

/*오라클의 한글 바이트 셋 확인하는 방법*/
select * from nls_database_parameters
where parameter = 'NLS_CHARACTERSET';
//진짜 최후의 보루, 바꾸지 않는 것이 최선 바꾸고 난 다음에 다시 돌아오지 않을 가능성이 높음

/*coalesce
교슈 테이블에서 보직수당이 null이 아니면 보직수당을 출력하고
보직수당이 null이고 급여가 null이 아니면 급여를 출력
보직수당과 급여가 null이면 0을 출력하라*/
select name, comm, sal, coalesce(comm, sal, 0) co_result
from professor;

/*decode
교수 테이블 에서 교수 소속 학과 번호를 학과 이름으로 변환하여 출력하라
학과번호가 101이면 컴퓨터 공학과, 102면 멀티미디어학과, 201이면 전자공학과 
나머지는 기계공학과로 변환한다.*/
select name, deptno,
       decode(deptno, 101,'컴퓨터공학과', 102 ,'멀티미디어학과',
                      201,'전자공학과', '기계공학과') DNAME
from professor;

/*학생테이블에서 101학과 학생들은 computer science로 출력해보세요
학과번호, 이름, 학과명*/
select deptno, name, decode(deptno, 101, 'Computer Science', 'ETC') as "학과명"
from student;

/*case함수
교수테이블에서 소속학과에 따라 보너스를 다르게 계산하여 출력하여라
학과번호 별로 보너스는 다음과 같이 계산한다. 학과 번호가 101이면 보너스는 급여의 10%,
102면 20%, 201이면 30%, 나머지 학과는 0%이다.*/
select name, deptno, sal, 
       case when deptno = 101 then sal*0.1
            when deptno = 102 then sal*0.2
            when deptno = 201 then sal*0.3
            else 0
       end bobus
from professor;

/*학생 테이블에서 학생들이 태어난 월과 몇 사분기에 태어났는지 출력해세요.
이름, 태어난 월, 분기를 출력*/
select name, substr(birthdate,4,2) as Month , 
       case
       when substr(birthdate,4,2) between 1 and 3 then '1/4'
       when substr(birthdate,4,2) between 4 and 6 then '2/4'
       when substr(birthdate,4,2) between 7 and 9 then '3/4'
       when substr(birthdate,4,2) between 10 and 12 then '4/4'
       end Quarter
from student;
/*다른 분의 방식
select name, substr(birthdate, 4, 2) month, 
    case when to_char(birthdate, 'q') = 1 then '1/4'
        when to_char(birthdate, 'q') = 2 then '2/4'
        when to_char(birthdate, 'q') = 3 then '3/4'
        when to_char(birthdate, 'q') = 4 then '4/4'
    end Quarter
from student;

select name, TO_CHAR(birthdate, 'MM') month,
                case
                    when TO_CHAR(birthdate, 'MM') IN('01','02','03') then '1/4'
                    when TO_CHAR(birthdate, 'MM') IN('04','06','07') then '2/4'
                    when TO_CHAR(birthdate, 'MM') IN('07','08','09') then '3/4'
                end 'Quarter'
from student;
*/

//group함수
/*count
101번 학과 교수 중 보직수당을 받는 교수의 수를 출력하여라*/
select count(comm)
from professor
where deptno = 101;
/*==*/
select count(*)
from professor
where deptno = 101 and comm is not null;

/*avg, sum*/
select avg(weight), sum(weight)
from student
where deptno = 101;

/*min, max*/
select max(height), min(height)
from student
where deptno = 102;

/*stddev, variance*/
select trunc(stddev(sal)), trunc(variance(sal))
from professor;

/*group by*/
select deptno, count(*), count(comm)
from professor
group by deptno;

/*다중 컬럼
전체 학생을 소속 학과별로나누고, 같은 학과 학생은 다시 학년별로 그룹핑하고 학과와 학년 별 인원수 평균몸무게를 출력하라,
단 평균 몸무게는 소수점 이하 첫번째 자리에서 반올림하라*/
select deptno, grade, count(*), round(avg(weight))
from student
where deptno is not null
group by deptno, grade 
order by 1,2;

/*rollup, cube*/
select deptno, sum(sal)
from professor
group by rollup(deptno);

/*rollup을 이용해서 학과 및 직급별 교수수와 학과별 교수 수, 전체 교수 수를 출력*/
select deptno, position, count(*)
from professor
group by rollup(deptno, position)
order by 1,2;

/*CUBE을 이용해서 학과 및 직급별 교수수와 학과별 교수 수, 전체 교수 수를 출력*/
select deptno, position, count(*)
from professor
group by cube(deptno, position)
order by 1,2;

/*grouping*/
select deptno, grade, count(*),
       grouping(deptno) grp_dno,
       grouping(grade) grp_grade
from student
group by rollup(deptno, grade)
order by 1,2;

/*grouping set 
학과내에서 학년별 인원수와 태어난 년도별 인원 수를 출력하여라*/

select deptno, grade, null, count(*)
from student
group by deptno, grade
union all
select deptno, null, to_char(birthdate, 'YYYY'), count(*)
from student
group by deptno, to_char(birthdate, 'YYYY');

select deptno, grade, to_char(birthdate, 'YYYY') birthdate, count(*)
from student
group by grouping sets((deptno, grade), (deptno,to_char(birthdate,'YYYY')));

desc student;
/*having절
학생수가 4명이상인 학년에 대해서 학년, 학생수, 평균 키, 평균 몸무게를 출력하여라.
단 평균키와 평균 몸무게는 소수점 첫번째 자리에서 반올림하고, 
출력순서는 평균키가 높은 순부터 내림차순으로 출력*/
select grade, count(grade), round(avg(height)) avg_height
    , round(avg(weight)) avg_weight
from student
group by grade
order by avg_height desc;

select grade, count(grade), round(avg(height)) avg_height
    , round(avg(weight)) avg_weight
from student
group by grade
having count(*) > 4
order by avg_height desc;

/*학과별 학생의 평균 몸무게중 최대 평균 몸무게를 출력하여라*/
select max(avg(weight)) max_weight //이거 말함
from student
group by deptno;

/*학과별 학생 수가 최대 또는 최소인 학과의 학생 수를 출력하여라*/
select max(count(studno)) MAX_cnt, min(count(studno)) MIN_cnt
from student
where deptno is not null//전에 넣은 황보_정호때문에 값이 잘못 나옴.
group by deptno;

/*join*/
select student.studno, student.name, student.deptno, department.dname
from student, department
where student.deptno = department.deptno
and student.name = '전인하';

select s.studno, s.name, s.deptno, d.dname
from student s, department d
where s.deptno = d.deptno
and s.name = '전인하';

select s.studno, s.name, s.weight, d.deptno, d.dname, d.loc
from student s, department d
where s.deptno = d.deptno
and s.weight >= 80
and d.dname = '컴퓨터공학과';

/*컴퓨터공학과 교수님들의 이름, 직급, 급여, 학과번호, 학과명, 학과위치를 출력하세요*/
select p.name, p.position, p.sal, d.deptno, rtrim(d.dname, '과'), substr(d.loc,1,2)
from professor p, department d
where p.deptno = d.deptno
and d.dname = '컴퓨터공학과';

/*학생이름, 키, 몸무게, 지도교수번호, 지도교수이름을 출력하세요*/
select s.name, s.height, s.weight, p.profno, p.name
from student s, professor p
where s.profno = p.profno
and s.name = '오유석';

/*문제4
전임강사들의 이름, 급여, 부서번호, 부서이름, 부서 위치를 출력하세요.
*/
desc professor;
select position from professor;

select p.name, p.sal, d.deptno, d.dname, d.loc
from department d, professor p
where d.deptno = p.deptno
and p.position = '전임강사';