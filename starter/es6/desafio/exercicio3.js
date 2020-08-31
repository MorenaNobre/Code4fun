const arr = [1, 2, 3, 4, 5]

arr.map(item => item + 10)

console.log(arr)

//---------------------------------//

const usuario = { nome: 'Morena', idade: 37}
const mostraIdade = usuario => usuario.idade
mostraIdade(usuario)

//---------------------------------//

const nome = 'Morena'
const idade = 37

const mostraUsuario = (nome = 'Morena', idade = 37) => ({
  nome,
  idade
})
mostraUsuario(nome, idade)
mostraUsuario(nome)

//---------------------------------//

const promise = () => new Promise((resolve, reject) => resolve())