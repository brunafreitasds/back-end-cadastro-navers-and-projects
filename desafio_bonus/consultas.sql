--consultas a serem realizadas no banco
--E.B.3 Faça uma querie que traga todos os navers ordenados pelo seu tempo de empresa admission_date
select navers from navers
order by admission_date
--E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.

select nome, id_naver from project_navers, navers
where project.id_naver = = navers.id
--E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.