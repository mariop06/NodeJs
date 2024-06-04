const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_ADMIN}:${process.env.MONGO_DB_PASSWORD}@dbnode.res6cav.mongodb.net/`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexão concluída!');
    } catch (error) {
        console.log('Ocorreu um erro. ERRO: ' + error);
    }
}

module.exports = connectToDatabase;
