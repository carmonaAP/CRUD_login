const express = require('express'); // Importa o módulo 'express', que é usado para criar o servidor web.
const bodyParser = require('body-parser'); // Importa o módulo 'body-parser', que é usado para analisar o corpo das requisições HTTP.
const userController = require('./controllers/userController'); // Importa o controlador 'userController', que contém as funções para lidar com as requisições relacionadas a usuários.
const app = express(); // Cria uma instância do aplicativo Express.

// Configura o EJS como mecanismo de visualização
app.set('view engine', 'ejs'); // Define o EJS (Embedded JavaScript templates) como o mecanismo de visualização para renderizar as páginas HTML.

// Middleware para parsing do body
app.use(bodyParser.urlencoded({ extended: false })); // Configura o middleware 'body-parser' para analisar o corpo das requisições HTTP com dados codificados em URL. 'extended: false' usa o analisador simples 'querystring'.

// Rotas
app.get('/index', userController.getAllUsers); // Define uma rota GET para a raiz ('/'), que chama a função 'getAllUsers' do controlador 'userController' para exibir todos os usuários.
app.get('/add', (req, res) => res.render('add')); // Define uma rota GET para '/add', que renderiza a view 'add' para exibir o formulário de adição de usuário.
app.post('/add', userController.addUser); // Define uma rota POST para '/add', que chama a função 'addUser' do controlador 'userController' para adicionar um novo usuário.
app.get('/edit/:id', userController.getUserById); // Define uma rota GET para '/edit/:id', que chama a função 'getUserById' do controlador 'userController' para exibir um usuário específico para edição. ':id' é um parâmetro dinâmico.
app.post('/edit/:id', userController.updateUser); // Define uma rota POST para '/edit/:id', que chama a função 'updateUser' do controlador 'userController' para atualizar um usuário existente.
app.get('/dell/:id', userController.getdeleteByUser); // Define uma rota GET para '/dell/:id', que chama a função 'getdeleteByUser' do controlador 'userController' para exibir um usuário específico para confirmação de exclusão.
app.post('/dell/:id', userController.deleteUser); // Define uma rota POST para '/dell/:id', que chama a função 'deleteUser' do controlador 'userController' para deletar um usuário.

app.get('/', (req, res) => res.render('login',{ loginFalhou: false }));
app.post('/login/', userController.loginUser);


// Iniciar o servidor
app.listen(2000, () => { // Inicia o servidor na porta 2000.
    console.log('http://localhost:2000'); // Exibe uma mensagem no console indicando que o servidor está em execução.
});