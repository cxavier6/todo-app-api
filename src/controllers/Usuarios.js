import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseUsuariosMetodos from "../DAO/DatabaseUsuariosMetodos.js";
import Database from "../infraestrutura/Database.js";

class Usuarios{
    static rotas(app){
        app.get('/usuarios', async (req, res) => {
            try {
                const response = await DatabaseUsuariosMetodos.listarTodosUsuarios()
                res.status(200).json(response)
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.get('/usuarios/:id', async (req, res) => {
            try {
                const usuario = await DatabaseUsuariosMetodos.listarUsuarioPorId(req.params.id)
                res.status(200).json(usuario)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.post('/usuarios', async (req,res) => {
            const isValid = ValidacoesService.isValid(...Object.values(req.body))

            try {
                if(isValid) {
                    //const usuario = new UsuarioModel(nome, email, telefone)
                    const usuario = new UsuarioModel(...Object.values(req.body))
                    const response = await DatabaseUsuariosMetodos.inserirUsuario(usuario)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo")
                }
            } catch (error) {
                res.status(400).json(error.message)
            }
        })

        app.put("/usuarios/:id", (req, res)=> {
            const isValid = ValidacoesService.isValid(...Object.values(req.body))

            if(isValid){
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseUsuariosMetodos.atualizarPorId(req.params.id, usuario)
                res.status(201).json(response)
            } else {
                res.status(400).json(error.message)
            }
        })

        app.delete("/usuarios/:id", async (req, res) => {
            try {
                const usuario = await DatabaseUsuariosMetodos.deletaUsuarioPorId(req.params.id)
                res.status(200).json(usuario)
            } catch (error) {
                res.status(404).json(error.message)
            }
        })
    }
}

export default Usuarios;
