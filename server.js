const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();
const PORT = process.env.PORT || 4000;

var corsOptions = {
    origin: [
        "http://localhost:3000"
    ]
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync()
    .then(() => {
        console.log("------Base de datos sincronizada");
    })
    .catch((err) => {
        console.log("------Error al sincronizar la base de datos: " + err.message);
    });

app.get("/", (req, res) => {
    res.json({ message: "API Desarrollo Web" });
});
require("./app/routes/cliente.routes")(app);


app.listen(PORT, () => {
    console.log(`------Servidor corriendo en puerto: ${PORT}.`);
});