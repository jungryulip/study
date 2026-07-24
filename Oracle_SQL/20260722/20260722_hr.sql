//order by 설정

select name, tel
from student
order by grade desc;

//sql 함수
--initcap

select name, userid, initcap(userid)
from student
where name ='김영균';

select userid, lower(userid), upper(userid)
from student
where studno = 20101;

--length, lengthb

select dname, length(dname), lengthb(dname)
from department;

--concat

select concat(concat(name,'의 직책은 '), position)
from professor;

select concat(name,'의 직책은 '), position
from professor;

--substr

select name, idnum, substr(idnum,1,6) birth_date, substr(idnum,3,2) birth_mon
from student
where grade = '1'
and substr(idnum,7,1) in (2, 4);
//and idnum like '______2%';

--instr

select dname, instr(dname,'과')
from department;

--lpad,rpad

select position, lpad(position, 10, '*') lapad_position,
        userid, rpad(userid, 12, '+') rpad_userid
from professor;
      
--ltrim, rtrim  
SELECT ltrim('xyxXyLASTWORD','xy')
FROM dual;

SELECT rtrim('xyxXyLASTWORD','xy')
FROM dual;

select dname, Rtrim(dname,'과')
from department;

--round
select name, sal, sal/22, round(sal/22), round(sal/22,2), round(sal/22,-1)
from professor
where deptno = 101;

--trunc
select name, sal, sal/22, trunc(sal/22,1), trunc(sal/22,2), trunc(sal/22,-1)
from professor
where deptno = 101;

--mod
select name, sal, comm, sal/comm, mod(sal,comm)
from professor
where deptno = 101;

--ceil, floor
select ceil(19.7), floor(12.345)
from dual;

//날짜함수
select name, hiredate, hiredate+30, hiredate+60
from professor
where profno = 9908;

select profno, hiredate,
    months_between(sysdate,hiredate) tenure,
    add_months(hiredate, 6) review
from professor
where months_between(sysdate,hiredate) < 360;

--last_day, next_day

alter session set nls_language = korean;
select sysdate, last_day(sysdate), next_day(sysdate,'일')
from dual;

alter session set nls_language = american;
select sysdate, last_day(sysdate), next_day(sysdate,1)
from dual;

//+ alter session set nls_language = 나라언어; 중요한 점은 데이터가 깨질 수 있으니 잘 생각해서.

select to_char(sysdate, 'yy/mm/dd hh24:mi:ss') nomal,
       to_char(trunc(sysdate),'yy/mm/dd hh24:mi:ss') trunc,
       to_char(round(sysdate), 'yy/mm/dd hh24:mi:ss') round
from dual;

select to_char(hiredate, 'yy/mm/dd hh24:mi:ss') hiredate,
       to_char(round(hiredate, 'dd'), 'yy/mm/dd') round_dd,
       to_char(round(hiredate, 'mm'), 'yy/mm/dd') round_mm,
       to_char(round(hiredate, 'yy'), 'yy/mm/dd') round_yy
from professor
where deptno = 101;
--년은 7월1일이 기준으로, 월은 16일 기준으로 반올림된다.

//to_char

select studno, to_char(birthdate, 'yy-mm') birthdate
from student
where name = '전인하';

select name, grade, to_char(birthdate, 'day month dd, yyyy') birthdate
from student
where deptno = 102;

//
alter session set nls_language = american;
alter session set nls_language = korean;
select name, to_char(hiredate, 'Month dd,yyyy hh24:mi:ss pm') hiredate
from professor
where deptno = 101;
/* 달이 영문이 아니라 한글로 나오는 오류가 있어서 그걸 해소하기 위한 시도
김도훈	6월  24,1982 00:00:00 오전
성연희	5월  17,1993 00:00:00 오전
이만식	9월  13,1988 00:00:00 오전
전은지	6월  01,2001 00:00:00 오전*/
select name, to_char(hiredate, 'month dd, yyyy hh24:mi:ss', 'nls_date_language=american') 
          || to_char(hiredate, 'pm', 'nls_date_language=korean') as hiredate
from professor
where deptno = 101;

//
select name, position, to_char(hiredate, 'mon "the" ddth "of" yyyy') hiredate
from professor
where deptno = 101;

//숫자를 문자 형식으로 변환하는 예
select name, sal, comm, to_char((sal+comm)*12, '9,999') anual_sal
from professor
where comm is not null;

//to_date
select name, hiredate
from professor
where hiredate = to_date('6월 01, 01', 'month dd, yy');
--달은 세션값이 영어로 되어 있어서 그렇다.

//
select to_char(to_date(substr(idnum, 1, 6), 'yymmdd'), 'yy/mm/dd') birthday
from student;

//여러분이 출생한지 며칠째인지 출력해 보세요. 열 레이블은 live day 입니다.
select trunc(sysdate-to_date('2009/08/18', 'yyyy/mm/dd')) as "lived_day", 
       round(months_between(sysdate, '2009/08/18')) as "lived_month"
from dual;

//문제1 사원테이블에서 2월에 입사한 사원을 출력해보세요.


rollback;