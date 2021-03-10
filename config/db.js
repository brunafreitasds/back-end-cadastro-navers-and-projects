//configuração do banco de dados
const DB_URI = "mongodb+srv://eu:eu@teste.7h7gv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
    connect: () => {
        return mongoose.createConnection(DB_URI, {
            // parametros da conexão para evitar erros de deprecated
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
    },
};