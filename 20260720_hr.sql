desc emp; //테이블의 정보값

select * from tab;

//1번

select * 
from department;

//deptno, dname, college, loc
/*101	컴퓨터공학과	100	1호관
102	멀티미디어학과	100	2호관
201	전자공학과	200	3호관
202	기계공학과	200	4호관
100	정보미디어학부	10	
200	메카트로닉스학부	10	
10	공과대학		*/
// dname은 학과명


//2번

select name, position, sal, deptno
from professor;

/*
김도훈	교수	500	101
이재우	조교수	320	201
성연희	조교수	360	101
염일웅	전임강사	240	102
권혁일	교수	450	102
이만식	부교수	420	101
전은지	전임강사	210	101
남은혁	부교수	400	202
*/

//3번

select studno, name, userid
from student;

//studno, name, userid
/*
10101	전인하	jun123
20101	이동훈	Dals
10102	박미경	ansel414
10103	김영균	mandu
20102	박동진	Ping2
10201	김진영	simply
10104	지은경	Gomo00
10202	오유석	yousuk
10203	하나리	hanal
10105	임유진	YouJin12
10106	서재진	seolly
10204	윤진욱	Samba7
10107	이광훈	huriky
20103	김진경	lovely
20104	조명훈	Rader214
10108	류민정	cleanSky
*/

//4번

select DISTINCT position
from professor;

/*
교수
조교수
전임강사
부교수
*/

//5번

select profno, name, position, comm
from professor
order by position;

/*
9901	김도훈	교수	20
9905	권혁일	교수	25
9906	이만식	부교수	
9908	남은혁	부교수	17
9904	염일웅	전임강사	
9907	전은지	전임강사	
9902	이재우	조교수	
9903	성연희	조교수	15
*/

select * from professor;

