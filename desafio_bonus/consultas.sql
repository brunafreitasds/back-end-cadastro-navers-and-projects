--consultas a serem realizadas no banco
--E.B.3 Faça uma querie que traga todos os navers ordenados pelo seu tempo de empresa admission_date

select navers from navers
order by admission_date
--E.B.4 Faça uma querie que traga todos os projetos com seus respectivos navers.

select name, naver_id from project_navers, project
where project.id = project_navers.project_id

--E.B.5 Faça uma querie que traga todos os projetos com sua quantidade de navers.



select project.name,(select count(project_navers.naver_id)
            from
                project_navers
            where
                project_navers.project_id = project.id ) AS Quantidade_navers
        from
            project
        group by
            project.id
