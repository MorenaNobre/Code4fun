// const prod1 = {
//   nome: '...',
//   preco: 45
// }
// const prod2 = {
//   nome: '...',
//   preco: 36
// }

//Função Factory é uma função que retorna um objeto - tem a função de fabricar/criar uma nova instância de um objeto
function criarPessoa() {
  return {
    nome: 'Morena',
    sobrenome: 'Nobre'
  }
}

console.log(criarPessoa())