select * from scott.student;
// grant update(height,weight) on student to tiger;
update scott.student
set height = 180, weight = 80
where deptno = 101;

//권한 조회 
select * from user_tab_privs_made;
select * from user_tab_privs_recd;

//권한 철회 확인
select * from scott.student;

//롤
select * from scott.student;










