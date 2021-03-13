
<h1>Documentação teste técnico estagio back-end </h1>

Por: Bruna dos Santos Freitas<br>
<br>
<strong>Link das resoluções dos exercícios de lógica no Codesandbox</strong><br>
<href>https://codesandbox.io/s/teste-estagio-template-bruna-forked-ewv6z?file=/src/exercise01.js</href><br>
<strong>Dificuldades exercícios de lógica:</strong><br>
- No exercício 10, encontrei dificuldade de acessar os valores filtrados no array.

<h2>Introdução</strong></h2>
<strong>Tecnologias utilizadas: </strong><br>
- NodeJs - banco de dados utilizado na aplicação;<br>
- MongoDB - banco de dados utilizado na aplicação;<br>
- Mongoose - biblioteca para abstrair a camada de dados;<br>
- Express - conectar a aplicação no servidor web;<br>
- Nodemon - rodar o servidor em segundo plano, atualizando-o a cada alteração.<br>

Cada naver é composto pelos seguintes atributos:

-name <br>
-birthdate<br>
-job_role<br>
-admission_date<br>
-index_project<br>
-index_naver

Cada project é composto pelos seguintes atributos:

-name <br>
-index_project<br>
-index_naver<br>
<h3>Documentação da aplicacação:</h3>

<strong> Iniciar o servidor: </strong>

-npm install <br>
-nodemon app.js

 FUNCIONALIDADES DE CONSULTAS NO BANCO:

<strong> Rotas dos Navers:</strong>

- <strong>GET</strong> localhost:3000/navers/list-navers - para fazer a leitura de todos os navers;
- <strong>GET</strong> localhost:3000/navers/getbyId/:id - para fazer a leitura de um naver em específico com base no ID dele;
- <strong>GET</strong> localhost:3000/navers/getbyName/:id - para filtrar um naver em específico com base Name dele
- <strong>PUT</strong> localhost:3000/navers/update-naver/:id - para editar um naver em específico com base no ID dele;
- <strong>POST</strong> localhost:3000/navers/new-naver - para criar e adicionar um naver no banco;
- <strong>DELETE</strong> localhost:3000/navers/delete/:id - para excluir um naver no banco;

<strong> Rotas dos Projects: </strong>

- <strong>GET</strong> localhost:3000/projects/list-projects - para fazer a leitura de todos os projetos;
- <strong>GET</strong> localhost:3000/projects/getbyId/:id - para fazer a leitura de um projeto em específico com base no ID dele;
- <strong>GET</strong> localhost:3000/projects/getbyName/:id - para filtrar um project em específico com base Name dele
- <strong>PUT</strong> localhost:3000/projects/update-project/:id - para editar um project em específico com base no ID dele;
- <strong>POST</strong> localhost:3000/projects/new-project - para criar e adicionar um project no banco;
- <strong>DELETE</strong> localhost:3000/projects/delete/:id - para excluir um project no banco;


<strong>Dificuldades desafio back-end:</strong><br>
- Por ter optado utilizar um banco de dados não relacional, orientado a documentos, foi necessário forçar o relacionamento dos dados.
- Para fazer o request de um projeto em específico e puxar seus navers, é necessário g
