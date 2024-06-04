

const { Person } = require('./person');

const add = new Person('mario').getName();
    // console.log(add);

    // Apresentando o nome do arquivo atual
    // require('./modules/path')

    // Trabalhando com Modules
    // require('./modules/fs')

    // Trabalhando sem express
    // require('./modules/http');

    // Trabalhando com express



    /*Conexao com o MongoDB*/

const dotenv = require('dotenv');
dotenv.config(); // Certifique-se de carregar as variáveis de ambiente antes de usá-las

const connectToDatabase = require('./src/database/connect');
    require('./src/express');

const runApplication = async () => {
    await connectToDatabase(); // Aguarde a conexão com o banco de dados
}

runApplication(); // Execute a função principal para iniciar a aplicação
