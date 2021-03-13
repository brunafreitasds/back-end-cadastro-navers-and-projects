
<h1>Documentação teste técnico estagio back-end </h1>

Por: Bruna dos Santos Freitas<br>
<br>
<strong>Link das resoluções dos exercícios de lógica no Codesandbox</strong><br>
<href>https://codesandbox.io/s/teste-estagio-template-bruna-forked-ewv6z?file=/src/exercise01.js</href><br>
<strong>Dificuldades exercícios de lógica:</strong><br>
- No exercício 10, encontrei dificuldade de acessar os valores filtrados no array.<br>

<h2>Introdução</strong></h2>
<strong>Tecnologias utilizadas: </strong><br>
- NodeJs;<br>
- MongoDB - banco de dados utilizado na aplicação;<br>
- Mongoose - biblioteca para abstrair a camada de dados;<br>
- Express - conectar a aplicação no servidor web;<br>
- Nodemon - rodar o servidor em segundo plano, atualizando-o a cada alteração.<br>
- Foi utilizado um modelo MVC adaptado com uso de services, responsável pelo acesso ao banco de dados.<br>
<br>
Cada naver é composto pelos seguintes atributos:<br>
-name <br>
-birthdate<br>
-job_role<br>
-admission_date<br>
-index_project<br>
-index_naver<br>
<br>
Cada project é composto pelos seguintes atributos:
<br>
-name <br>
-index_project<br>
-index_naver<br>
<h3>Documentação da aplicacação:</h3>

<strong> Iniciar o servidor: </strong>

-npm install <br>
-nodemon app.js

 FUNCIONALIDADES DE CONSULTAS NO BANCO:

<strong> Rotas dos Navers:</strong>

- <strong>GET</strong> localhost:3000/navers/list-navers - Rota para listagem dos Navers.
- <strong>GET</strong> localhost:3000/navers/getbyId - Rota para detalhar informações de um único naver através de seu identificador,usar id como por exemplo: 604a9af5cf849b6fc0080c1a;
- <strong>POST</strong> localhost:3000/navers/new-naver - Rora criar e adicionar um naver no banco;
- <strong>GET</strong> localhost:3000/navers/getbyName/:id - para filtrar um naver em específico com base no Name dele;
- <strong>PUT</strong> localhost:3000/navers/update-naver/:id - para editar um naver em específico com base no ID dele,usar id como por exemplo: 604a9af5cf849b6fc0080c1a;
- <strong>DELETE</strong> localhost:3000/navers/delete/:id - para excluir um naver no banco;

<strong> Rotas dos Projects: </strong>

- <strong>GET</strong> localhost:3000/projects/list-projects - Rota para listagem dos projects.
- <strong>GET</strong> localhost:3000/projects/getbyId/:id - Para fazer a leitura de um projeto em específico com base no ID dele, usar id como por exemplo: 604a9af5cf849b6fc0080c1a;
- <strong>POST</strong> localhost:3000/projects/new-project - Para criar e adicionar um project no banco;
- <strong>GET</strong> localhost:3000/projects/getbyName/:id - Para filtrar um project em específico com base no Name dele;
- <strong>PUT</strong> localhost:3000/projects/update-project/:id - Para editar um project em específico com base no ID dele,usar id como por exemplo: 604a9af5cf849b6fc0080c1a;
- <strong>DELETE</strong> localhost:3000/projects/delete/:id - para excluir um project no banco;


<strong>Dificuldades desafio back-end:</strong><br>
- Por ter optado utilizar um banco de dados não relacional, orientado a documentos, foi necessário forçar o relacionamento dos dados com o operador de agregação $lookup.
- É necessário primeiro fazer o cadastro dos projetos, e posterioermente dos navers relacionados a cada projeto.
