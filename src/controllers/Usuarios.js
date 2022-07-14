import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"

class Usuarios{
    static rotas(app){
        app.get('/usuarios', (req, res) => {
            
            const nome = "José"
            const email = "josé@couve.com"
            const telefone = "219999999"

            const isValid = ValidacoesService.isValid(nome, email, telefone)

            if(isValid) {
                const usuario = new UsuarioModel(nome, email, telefone)
                res.send(usuario)
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}

export default Usuarios;