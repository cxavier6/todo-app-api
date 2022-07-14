import TarefaModel from "../models/TarefasModel.js";

class Tarefas{
    static rotas(app){
        app.get('/tarefas', (req, res) => {
            const tarefa = new TarefaModel("Codewars", "faltam 97pts")
            res.send(tarefa)
        })
    }
}

export default Tarefas;
