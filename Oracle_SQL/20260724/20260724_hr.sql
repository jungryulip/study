//카티션 곱: 연결고리가 없어서 행을 모두 결합해서 만들어짐
select studno, name, s.deptno, d.deptno, dname
from student s, department d;

//cross join: 카티션 곱과 동일한 결과
select studno, name, s.deptno, d.deptno, dname
from student s cross join department d;

/*학생테이블과 부서 테이블을 equi join하여 학번과 이름, 학과, 번호, 소속학과 이름, 학과 위치를 출력하여라*/
select s.studno, s.name, s.deptno, d.dname, d.loc
from student s, department d
where s.deptno = d.deptno;

//natural join
select s.studno, s.name, deptno, d.dname
from student s, department d
where s.deptno = d.deptno;//wrong

select studno, name, d.deptno, dname
from student s, department d
where s.deptno = d.deptno;//right

select studno, name, deptno, dname
from student s
     natural join department d;
     
//natural join ~using
select s.studno, s.name, deptno, d.dname, d.loc
from student s join department d
    using(deptno);

select studno, name, deptno, dname, loc
from student join department
    using(deptno);
    
//inner join
select name, dname, loc
from student s
inner join department d
    on s.deptno = d.deptno
where name like'김%';


desc student;
/*학생의 학번,학생의 이름,학생의 몸무게 지도교수 이름, 지도교수 급여, 학과이름 ,학과 위치를 출력하세요*/
select s.profno, s.name, s.weight, p.name, p.sal, d.dname, d.loc
from student s, professor p, department d
where s.profno = p.profno
and s.deptno = d.deptno
and s.name = '전인하';

/*inner join 변경*/
select s.profno, s.name, s.weight, p.name, p.sal, d.dname, d.loc
from  professor p
inner join student s
    on s.profno = p.profno
inner join department d
    on p.deptno = d.deptno
where s.name = '전인하';

//non-equl join: 등급을 투출할때[연결고리가 없을때]
select * from salgrade;//다른 연결자가 없는 셀
select p.profno, p.name, p.sal, s.grade
from professor p, salgrade s
where p.sal between s.losal and s.hisal
and p.deptno = 101;

//outer join 
select s.name, s.grade, p.name, p.position
from student s, professor p
where s.profno = p.profno(+)
order by p.profno;

select s.name, s.grade, p.name, p.position
from student s, professor p
where s.profno(+) = p.profno
order by p.profno;

select s.name, s.grade, p.name, p.position
from student s, professor p
where s.profno = p.profno(+)
union
select s.name, s.grade, p.name, p.position
from student s, professor p
where s.profno(+) = p.profno;

--left outer join
select studno, s.name, s.profno, p.name
from student s
    left outer join professor p
    on s.profno = p.profno;

--right outer join   
select studno, s.name, s.profno, p.name
from student s
    right outer join professor p
    on s.profno = p.profno;
    
--full outer join
select studno, s.name, s.profno, p.name
from student s
    full outer join professor p on s.profno=p.profno;
    
//self join: 조직도나 위계관계를 표현할때
select dept.dname ||'의 소속은 '||org.dname
from department dept, department org
where dept.college = org.deptno;

select dept.dname ||'의 소속은 '||org.dname
from department dept join department org
    on dept.college = org.deptno;
    
select dept.dname ||'의 소속은 '||org.dname
from department dept, department org
where dept.college = org.deptno
and dept.deptno >=201;

select dept.dname ||'의 소속은 '||org.dname
from department dept join department org
    on dept.college = org.deptno
where dept.deptno >= 201;

//서브쿼리
select name, position
from professor
where position =(select position 
                 from professor
                 where name = '전은지'
                 );
                 
//단일행 서브쿼리
select studno, name, grade
from student
where grade = (select grade
               from student
               where userid ='jun123'
               );
               
/*101번 학과 학생들의 평균 몸무게보다 몸무게가 적은 학생의 이름, 학과번호, 몸무게를 출력하라*/
select name, deptno, weight
from student
where weight < (select avg(weight)
                from student
                where deptno =101
                )
order by deptno;

/*101번 학과 학생들의 평균 몸무게보다 몸무게가 적은 학생의 이름, 학과번호, 몸무게를 출력하라
+학과 이름까지 출력해보세요.*/
select s.name, s.deptno, s.weight, d.dname
from student s, department d
where weight < (select avg(weight)
                from student
                where deptno =101
                )
and s.deptno = d.deptno
order by deptno;

select name, s.deptno, weight, dname
from student s join department d on s.deptno = d.deptno
where weight < (select avg(weight)
                from student
                where deptno =101
                )
order by deptno;

/*힉과별 학생수가 최대인 학과번호와 학생수를 출력하세요*/
select deptno 학과번호, count(studno) 학생수
from student
group by deptno
having count(studno)=(select max(count(studno))
                      from student
                      group by deptno
                      );

select * from 
(select count(*) 학생수, deptno 학과번호
from student
group by deptno
order by count(*)desc
)
where rownum = 1;
--이건 다른 분이 한건데. 결과값은 같은데. rownum은 값을 1개만 가져오는 거.

/*학과별 학생수가 최대인 학과번호, 학과명, 학생수를 출력하세요*/
select d.deptno 학과번호, d.dname 학과명, count(s.studno) 학생수
from department d join student s on d.deptno = s.deptno
group by d.deptno, d.dname
having count(s.studno)=(select max(count(studno))
                        from student
                        group by deptno
                        );
--계속 틀렸던 이유, select에서 명명한 값을 group by에 안가지고 온 것이 있어서 

/*20101번 학생과 학년이 같고, 키는 20101번 학생보다 큰 학생의 이름, 학년, 키를 구하여라*/
select name, grade, height
from student
where grade = (select grade
               from student 
               where studno = 20101)
and height > (select height
              from student
              where studno = 20101);