select * from system.project;

create synonym my_project for system.project;

select * from my_project;

select * from pub_project;

drop synonym my_project;