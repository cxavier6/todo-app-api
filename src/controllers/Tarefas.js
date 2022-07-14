import TarefaModel from "../models/TarefasModel.js";

class Tarefas{
    static rotas(app){
        app.get('/tarefas', (req, res) => {
            const tarefa = new TarefaModel("Codewars", "faltam 38pts")
            res.status(200).json({...tarefa, verbo: "get"})
        })

        app.post('/tarefas', (req, res) => {
            const tarefa = new TarefaModel("Codewars", "faltam 38pts")
            res.status(201).json({...tarefa, verbo: "post"})
        })
    }
}

export default Tarefas;