class ValidacoesService {
    static validaNome(nome){
        return nome.length >= 3
    }
    static validaEmail(email){
        return true
    }
    static validaTelefone(telefone){
        return true
    }
    static isValid(nome, email, telefone){
        return this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
    }
}

export default ValidacoesService;

