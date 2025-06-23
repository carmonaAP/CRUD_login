const mysql = require('mysql2'); // Importa o módulo 'mysql2', que permite a conexão e interação com bancos de dados MySQL.

const connection = mysql.createConnection({ // Cria uma conexão com o banco de dados MySQL usando as configurações fornecidas.
    host: 'localhost', // Define o endereço do servidor MySQL como 'localhost', indicando que o banco de dados está na mesma máquina.
    user: 'root', // Define o nome de usuário para acessar o banco de dados como 'root'.
    password: '', // Define a senha para acessar o banco de dados como uma string vazia (sem senha). **CUIDADO: Em produção, nunca deixe a senha vazia!**
    database: 'crud_mvc' // Define o nome do banco de dados a ser utilizado como 'crud_mvc'.
});

connection.connect((err) => { // Tenta estabelecer a conexão com o banco de dados.
    if (err) { // Verifica se ocorreu algum erro durante a conexão.
        console.error('Erro ao conectar ao banco de dados:', err); // Se houver um erro, exibe uma mensagem de erro no console, incluindo os detalhes do erro.
    } else { // Se a conexão for bem-sucedida.
        console.log('Conectado ao banco de dados MySQL!'); // Exibe uma mensagem de sucesso no console, indicando que a conexão foi estabelecida.
    }
});

module.exports = connection; // Exporta o objeto 'connection', permitindo que outros módulos do projeto utilizem a conexão com o banco de dados.
