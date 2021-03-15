--consultas a serem realizadas no banco
--E.B.3 Faça uma querie que traga todos os navers ordenados pelo seu tempo de empresa admission_date

select navers from navers
order by admission_date
--E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.

select name, id_naver from project_navers, project
where project.id = = project_navers.naver.id

--E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.

select count(id) from project