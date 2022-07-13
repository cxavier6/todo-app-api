class Usuarios{
    static rotas(app){
        app.get('/usuarios', (req, res) => 
        res.send("rota usuários"))
    }
}

export default Usuarios;