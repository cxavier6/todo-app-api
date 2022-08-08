import Database  from "../infraestrutura/Database.js"

class ValidacoesService {
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome){
        return nome.length >= 3
    }

    /**
     * 
     * @param {string} email 
     * @returns boolean
     */
    static validaEmail(email){
        const emailValidado = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        return emailValidado.test(email)
    }

    /**
     * 
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone(telefone){
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    }

    /**
     * 
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns string
     */
    static isValid(nome, email, telefone){
        return this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
    }

    /**
     * 
     * @param {string} titulo 
     * @returns string
     */
    static validaTitulo(titulo) {
        return titulo.length >= 1
    }

    /**
     * 
     * @param {string} descricao 
     * @returns boolean
     */
    static validaDescricao(descricao) {
        return descricao.length >= 2
    }

    /**
     * 
     * @param {string} titulo 
     * @param {string} descricao 
     * @returns boolean
     */
    static tarefaIsValid(titulo, descricao) {
        return this.validaTitulo(titulo) && this.validaDescricao(descricao)
    }

    static validaIndex(index, database){
        return index <= database.length
    }

}

export default ValidacoesService;

