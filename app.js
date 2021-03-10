express = require("express");
mongoose = require("mongoose");
mongoose.Promise = require("q").Promise;
ObjectIDForModel = mongoose.Schema.Types.ObjectId;
ObjectId = mongoose.Types.ObjectId;
const bodyParser = require("body-parser");
const { connect } = require("./config/db");

const app = express();


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: "true",
    })
);

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Funcionando! :D",
    });
});

db = connect();
db.then(() => {
    console.log("DB Conectado! :D");
    const naversRoutes = require("./routes/naverRoute");
    const projectsRoutes = require("./routes/projectRoute");
    app.use("/navers", naversRoutes);
    app.use("/projects", projectsRoutes);

    app.listen(PORT, () => {
        console.log("Servidor ligado na porta " + PORT);
    });
}).catch((e) => {
    console.log("Não foi possível estabelecer conexão com o banco. :-(", e);
});