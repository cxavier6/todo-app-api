import  Database  from "../infraestrutura/Database.js";

class DatabaseUsuariosMetodos{
    /* Para ativar as chaves estrangeiras, é uma função nativa do sqlite*/
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (error) => {
            if(error){
                console.log(error)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static createTable(){

        this.activePragma()

        const query = `CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )`

        return new Promise((resolve, reject) => {
            Database.run(query, (error) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve("Tabela criada com sucesso")
                }
            })
        })
    }

    static inserirUsuario(usuario){
        const query = `INSERT INTO usuarios(nome, email, telefone) VALUES (?,?,?)`
        const body = Object.values(usuario)
        return new Promise((resolve,reject) => {
            Database.run(query, [...body], (error) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve({error: false, message: "Usuário cadastrado com sucesso!"})
                }
            })
        })
    }

    static listarTodosUsuarios(){
        const query = `SELECT * FROM usuarios`
        return new Promise((resolve, reject) => {
            Database.all(query, (error, result) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static listarUsuarioPorId(id){
        const query = `SELECT * FROM usuarios WHERE id = ?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (error, result) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static deletaUsuarioPorId(id){
        const query = `DELETE FROM usuarios WHERE id = ?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (error, result) => {
                if(error){
                    reject(error.message)
                } else {
                    resolve({Sucesso: `Usuário com id = ${id} deletado com sucesso!`})
                }
            })
        })
    }
}

export default DatabaseUsuariosMetodos