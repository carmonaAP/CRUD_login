const User = require('../models/userModel'); // Importa o modelo 'userModel' que contém as funções para interagir com os dados dos usuários.

// EXIBIR TODOS OS USUÁRIOS
exports.getAllUsers = (req, res) => { // Define uma função para buscar e exibir todos os usuários.
    User.getAllUsers((users) => { // Chama a função 'getAllUsers' do modelo, passando uma função de callback.
        res.render('index', { users }); // Renderiza a view 'index' e passa a lista de usuários para ela.
    });
};
// EXIBIR USUÁRIO ANTES DE EDITAR
exports.getUserById = (req, res) => { // Define uma função para buscar e exibir um usuário específico para edição.
    const userId = req.params.id; // Obtém o ID do usuário da URL (parâmetro 'id').
    User.getUserById(userId, (user) => { // Chama a função 'getUserById' do modelo, passando o ID e uma função de callback.
        res.render('edit', { user }); // Renderiza a view 'edit' e passa os dados do usuário para ela.
    });
};
// EXIBIR USUÁRIO ANTES DE DELETAR
exports.getdeleteByUser = (req, res) => { // Define uma função para buscar e exibir um usuário específico para confirmação de exclusão.
    const userId = req.params.id; // Obtém o ID do usuário da URL (parâmetro 'id').
    User.getUserById(userId, (user) => { // Chama a função 'getUserById' do modelo, passando o ID e uma função de callback.
        res.render('dell', { user }); // Renderiza a view 'dell' (delete) e passa os dados do usuário para ela.
    });
};

// ADICIONAR USUÁRIO
exports.addUser = (req, res) => { // Define uma função para adicionar um novo usuário.
    const newUser = { // Cria um objeto 'newUser' com os dados do usuário obtidos do corpo da requisição.
        name: req.body.name, // Obtém o nome do usuário do corpo da requisição.
        email: req.body.email, // Obtém o email do usuário do corpo da requisição.
        fone: req.body.fone, // Obtém o nome do usuário do corpo da requisição.
        endereco: req.body.endereco // Obtém o email do usuário do corpo da requisição.
    };
    User.addUser(newUser, () => { // Chama a função 'addUser' do modelo, passando o novo usuário e uma função de callback.
        res.redirect('/'); // Redireciona o usuário para a página inicial ('/').
    });
};

// ALTERAR USUÁRIO
exports.updateUser = (req, res) => { // Define uma função para atualizar um usuário existente.
    const userId = req.params.id; // Obtém o ID do usuário da URL (parâmetro 'id').
    const updatedUser = { // Cria um objeto 'updatedUser' com os dados atualizados do usuário.
        name: req.body.name, // Obtém o novo nome do usuário do corpo da requisição.
        email: req.body.email, // Obtém o novo email do usuário do corpo da requisição.
        fone: req.body.fone, // Obtém o nome do usuário do corpo da requisição.
        endereco: req.body.endereco // Obtém o email do usuário do corpo da requisição.
    };
    User.updateUser(userId, updatedUser, () => { // Chama a função 'updateUser' do modelo, passando o ID, os dados atualizados e uma função de callback.
        res.redirect('/'); // Redireciona o usuário para a página inicial ('/').
    });
};

// DELETAR USUÁRIO
exports.deleteUser = (req, res) => { // Define uma função para deletar um usuário.
    const userId = req.params.id; // Obtém o ID do usuário da URL (parâmetro 'id').
    User.deleteUser(userId, () => { // Chama a função 'deleteUser' do modelo, passando o ID e uma função de callback.
        res.redirect('/'); // Redireciona o usuário para a página inicial ('/').
    });
};

// Funcão usada para logar
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    User.getUserByUsername(username, (user) => {
        if (user && user.pass === password) {
            res.redirect('/')
        } else {
            res.render('login', { loginFalhou: true });
        }
    })
};