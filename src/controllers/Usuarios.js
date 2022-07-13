import UsuarioModel from "../models/UsuarioModel.js"

class Usuarios{
    static rotas(app){
        app.get('/usuarios', (req, res) => {
        const usuario = new UsuarioModel("José", "josé@couve.com","219999999")
        res.send(usuario)
        })
    }
}

export default Usuarios;