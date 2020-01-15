
// Métodos HTTP - GET, POST, PUT, DELETE

// Tipos de parâmetros
// Query -> request.query (Ordenação, Filtros, Pesquisa, etc.)
// Route -> request.params (Identificação de um registro para atualizar ou apagar)
// Route -> request.body (Informações de um novo registro)


const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@otrochat-5snbq.mongodb.net/week10?retryWrites=true&w=majority", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());

app.use(routes);

app.listen(3333);