import TarefasModel from "../models/TarefasModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
import DatabaseUsuariosMetodos from "../DAO/DatabaseUsuariosMetodos.js"

class Tarefas {
    static rotas(app) { 

        app.get("/tarefas", (req, res) => {
            const response = DatabaseUsuariosMetodos.listarTodasTarefas()
            res.status(200).json(response)
        })

        app.post("/tarefas", (req, res) => {
            const tarefaIsValid = ValidacoesService.tarefaIsValid(req.body.titulo, req.body.descricao)
            
            if (tarefaIsValid) {
                const tarefa = new TarefasModel(...Object.values(req.body))
                const response = DatabaseUsuariosMetodos.inserirTarefa(tarefa)
                res.status(201).json(response)
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}

export default Tarefas