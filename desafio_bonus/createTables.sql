--E.B.1 Crie um script que delete e crie todas as tabelas.
SET DATESTYLE TO PostgreSQL,European;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE navers(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  Nome Varchar(50),
  job_role Varchar(50 ),
  birtdate Date,
  admission_date Date,
  created_at timestamp,
  updated_at timestamp
);


CREATE TABLE project_navers(
  project_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  id int,
  naver_id uuid references navers (id)
);


CREATE TABLE project(
  name varchar(50),
  id uuid  references Project_navers (project_id),
  created_at timestamp,
  updated_at timestamp
);

-- DELETAR TABELAS

DROP TABLE navers;
DROP TABLE project_navers;
DROP TABLE Project;