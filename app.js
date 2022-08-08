import express from "express";
import * as dotenv from "dotenv"
import cors from "cors";
import Usuarios from "./src/controllers/Usuarios.js"
import Tarefas from "./src/controllers/Tarefas.js"
import DatabaseUsuariosMetodos from "./src/DAO/DatabaseUsuariosMetodos.js";

dotenv.config()

//acessar a variável de ambiente que tem a porta no .env ou porta 3100
const port = process.env.PORT || 3100
const app = express()

app.listen(port, () => {
    console.log(`Servidor está funcionando em http://localhost:${port}`)
    DatabaseUsuariosMetodos.createTable()
})

app.use(express.json())
app.use(cors())

Usuarios.rotas(app)
Tarefas.rotas(app)
