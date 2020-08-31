const empresa = {
  nome: 'CodeOn',
  endereco: {
    cidade: 'Sorocaba',
    estado: 'SP'
  }
}

const {
  nome,
  endereco: { cidade, estado }
} = empresa

console.log(nome)
console.log(cidade)
console.log(estado)

//--------------------------------//

function mostraInfo ({ nome, idade }) {
  return `${nome} tem ${idade} anos.`
}

mostraInfo({ nome: 'Morena', idade: 37})