// this em funcao normal varia conforme é chamado - pode ser no escopo global ou nao
// this em funcao arrow fica atrelado a funcao
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind metodo responsavel por amarrar o objeto . sempre que chamar o this o objeto sera o q vc passou para o bind - o this fica amarrado ao objeto
falarDePessoa()