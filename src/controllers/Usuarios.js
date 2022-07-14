import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"

class Usuarios{
    static rotas(app){
        app.get('/usuarios', (req, res) => {
            
            const nome = "Camila"
            const email = "camila@camila.com"
            const telefone = "219999999"

            const isValid = ValidacoesService.isValid(nome, email, telefone)

            if(isValid) {
                const usuario = new UsuarioModel(nome, email, telefone)
                res.status(200).json({...usuario, verbo: "get"})
            } else {
                res.status(400).send("Erro")
            }

        })

        app.post('/usuarios', (req,res) => {
           
            const nome = "Camila"
            const email = "camila@camila.com"
            const telefone = "219999999"

            const isValid = ValidacoesService.isValid(nome, email, telefone)

            if(isValid) {
                const usuario = new UsuarioModel(nome, email, telefone)
                res.status(201).json({...usuario, verbo: "post"})
            } else {
                res.status(400).send("Erro")
            }
        
        })
    }
}

export default Usuarios;
