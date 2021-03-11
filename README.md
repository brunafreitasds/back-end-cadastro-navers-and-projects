
<h1>Documentação teste técnico estagio back-end </h1>

Por: Bruna dos Santos Freitas<br>
<strong>Link das resoluções dos exercícios de lógica no sandbox</strong><br>
<href>https://codesandbox.io/s/teste-estagio-template-bruna-forked-ewv6z?file=/src/exercise01.js</href>

<strong>Detalhes</strong><br>
Cada naver é composto pelos seguintes atributos:

-name <br>
-anme<br>
-birthdate<br>
-job_role<br>
-index_project<br>
-index_naver<br>

Cada project é composto pelos seguintes atributos:

-name <br>
-index_project<br>
-index_naver<br>
<h2>Documentação da aplicacação</h2>
<strong>Detalhes</strong>
<strong> Iniciar o servidor </strong>

-npm install <br>
-nodemon app.js

 PARA FAZER CONSULTAS NO BANCO:

<strong> Rotas dos Navers </strong>

- localhost:3000/navers/list-navers - para fazer a leitura de todos os navers;
- localhost:3000/navers/getbyId/:id - para fazer a leitura de um naver em específico com base no ID dele;
- localhost:3000/navers/getbyName/:id - para filtrar um naver em específico com base Name dele
- localhost:3000/navers/update-naver/:id - para editar um naver em específico com base no ID dele;
- localhost:3000/navers/new-naver - para criar e adicionar um naver no banco;
- localhost:3000/navers/delete/:id - para excluir um naver no banco;

<strong> Rotas dos Projects </strong>

- localhost:3000/projects/list-projects - para fazer a leitura de todos os projetos;
- localhost:3000/projects/getbyId/:id - para fazer a leitura de um projeto em específico com base no ID dele;
- localhost:3000/projects/getbyName/:id - para filtrar um project em específico com base Name dele
- localhost:3000/projects/update-project/:id - para editar um project em específico com base no ID dele;
- localhost:3000/projects/new-project - para criar e adicionar um project no banco;
- localhost:3000/projects/delete/:id - para excluir um project no banco;

<strong>Tecnologias utilizadas: </strong><br>
- MongoDB - banco de dados utilizado na aplicação;<br>
- Mongoose - biblioteca para abstrair a camada de dados;<br>
- Express - conectar a aplicação no servidor web;<br>
- Nodemon - rodar o servidor em segundo plano, atualizando-o a cada alteração.<br>
- pacote q - trabalhar com promisses e nivelar os erros conforme ordem da pírâmide;<br>
- pacote body-parser - trabalhar com os dados do form;<br>
<strong>Dificuldades desafio back-end</strong><br>
