const db = require('../config/db'); // Importa o objeto 'db' que representa a conexão com o banco de dados.

const User = { // Define um objeto 'User' que conterá as funções para interagir com a tabela 'users'.

    getAllUsers: (callback) => { // Define uma função para buscar todos os usuários.
        const sql = 'SELECT * FROM users'; // Define a consulta SQL para selecionar todos os registros da tabela 'users'.
        db.query(sql, (err, results) => { // Executa a consulta SQL usando a conexão 'db'.
            if (err) throw err; // Se houver um erro na consulta, lança o erro.
            callback(results); // Chama a função de callback, passando os resultados da consulta.
        });
    },



    getUserById: (id, callback) => { // Define uma função para buscar um usuário pelo ID.
        const sql = 'SELECT * FROM users WHERE id = ?'; // Define a consulta SQL para selecionar um usuário com o ID fornecido.
        db.query(sql, [id], (err, result) => { // Executa a consulta SQL, passando o ID como parâmetro.
            if (err) throw err; // Se houver um erro na consulta, lança o erro.
            callback(result[0]); // Chama a função de callback, passando o primeiro resultado (o usuário encontrado).
        });
    },

    addUser: (data, callback) => { // Define uma função para adicionar um novo usuário.
        const sql = 'INSERT INTO users SET ?'; // Define a consulta SQL para inserir um novo registro na tabela 'users'.
        db.query(sql, data, (err, result) => { // Executa a consulta SQL, passando os dados do novo usuário como parâmetro.
            if (err) throw err; // Se houver um erro na consulta, lança o erro.
            callback(result); // Chama a função de callback, passando o resultado da inserção.
        });
    },

    updateUser: (id, data, callback) => { // Define uma função para atualizar um usuário existente.
        const sql = 'UPDATE users SET ? WHERE id = ?'; // Define a consulta SQL para atualizar um registro na tabela 'users'.
        db.query(sql, [data, id], (err, result) => { // Executa a consulta SQL, passando os dados atualizados e o ID como parâmetros.
            if (err) throw err; // Se houver um erro na consulta, lança o erro.
            callback(result); // Chama a função de callback, passando o resultado da atualização.
        });
    },

    deleteUser: (id, callback) => { // Define uma função para deletar um usuário.
        const sql = 'DELETE FROM users WHERE id = ?'; // Define a consulta SQL para deletar um registro da tabela 'users'.
        db.query(sql, [id], (err, result) => { // Executa a consulta SQL, passando o ID como parâmetro.
            if (err) throw err; // Se houver um erro na consulta, lança o erro.
            callback(result); // Chama a função de callback, passando o resultado da exclusão.
        });
    },

    

    getUserByUsername: (username, callback) => {
        const sql = 'SELECT * FROM users WHERE username = ?';
        db.query(sql, [username], (err, result) => { // Executa a consulta SQL, passando o ID como parâmetro.
            if (err) throw err; // Se houver um erro na consulta, lança o erro.
            callback(result[0]); // Chama a função de callback, passando o resultado da exclusão.
        });
    }

};



module.exports = User; // Exporta o objeto 'User', permitindo que outros módulos do projeto utilizem as funções de interação com a tabela 'users'.