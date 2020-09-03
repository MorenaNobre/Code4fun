alert('Testando')




// import * as funcoes from './funcoes'
// // import soma, { sub } from './funcoes'
// // import { soma as somaFunction, sub } from './funcoes'
// // import { soma, sub } from './funcoes'
// // import somaFunction from './soma'

// // console.log(soma(1, 2))
// // console.log(sub(10, 5))
// // console.log(funcoes)
// console.log(funcoes.soma(1, 2))
// console.log(funcoes.sub(10, 5))
// console.log(funcoes.mult(10, 5))







// //Object Short Syntax
// const nome = 'Morena'
// const idade = 37

// // const usuario = {
// //   nome: nome,
// //   idade: idade,
// //   empresa: 'CodeOn'
// // }

// const usuario = {
//   nome,
//   idade,
//   empresa: 'CodeOn'
// }
// console.log(usuario)





// //Templates Literals
// const nome = 'Morena'
// const idade = 37

// // console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.')
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)



// //Operadores rest/spread
// //REST - resto das propriedades
// const usuario = {
//   nome: 'Morena',
//   idade: 37,
//   empresa: 'CodeOn'
// }
// const { nome, ...resto } = usuario
// console.log(nome)
// console.log(resto)

// //pode ser aplicado REST em vetores também
// const arr = [1, 2, 3, 4]
// const [ a, b, ...c] = arr
// console.log(a)
// console.log(b)
// console.log(c)

// //parametros de funcões
// function soma(...params) {
//   return params.reduce((total, next) => total + next)
// }
// console.log(soma(1, 3, 4))

// function soma1(a, b,...params) {
//   return params
// }
// console.log(soma1(1, 3, 4, 5, 7, 9))


//SPREAD - repassa infos de uma para outra estrutura de dados
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const usuario1 = {
//   nome: 'Morena',
//   idade: 37,
//   empresa: 'CodeOn',
// }

// const usuario2 = { ...usuario1, nome: 'Raira' }
// console.log(usuario2)





// //Desestruturação de objetos no JS
// const usuario = {
//   nome: 'Morena',
//   idade: 37,
//   endereco: {
//     cidade: 'Sorocaba',
//     estado: 'SP'
//   }
// }
// console.log(usuario)

// const { nome, idade, endereco: { cidade } } = usuario
// console.log(nome)
// console.log(idade)
// console.log(cidade)

// function mostraNome({ nome, idade }) {
//   console.log(nome, idade)
// }
// mostraNome(usuario)



// //Valores padrões
// // function soma(a = 3, b = 6) {
// //   return a + b
// // }
// const soma = (a = 3, b = 6) => a + b
// console.log(soma(1))
// console.log(soma())
// console.log(soma(2, 3))


// //Arrow function - funções anonimas
// const arr = [1, 3, 4, 5, 6]

// const newArr = arr.map( item => item * 2 )
// console.log(newArr)

// const teste = () => {
//   return 'teste'
// }
// console.log(teste())

// const teste1 = () => [1, 2, 3]
// console.log(teste1())

// //retornar obj - undefined se não tiver parenteses por volta do obj
// const teste2 = () => ({ nome: 'Morena' })
// console.log(teste2())



// //Vetores Array
// const arr = [1, 3, 4, 5, 8, 9]
// const newArr = arr.map(function(item, index) {
//   return item + index
// })
// console.log(newArr)

// //reduce - consumir todo o vetor e transormar em uma única variável/informação - geralmente um número
// const sum = arr.reduce(function(total, next) {
//   return total + next
// })
// console.log(sum)

// //filter
// const filter = arr.filter(function(item) {
//   return item % 2 === 0
// })
// console.log(filter)

// //find - verificar ou encontrar info dentro do array
// const find = arr.find(function(item) {
//   return item === 4
// })
// console.log(find)


//escopo
// function teste(x) {
//   let y = 2

//   if(x > 5) {
//     let y = 4
//     console.log(x, y)
//   }
// }

// // console.log(y)
// teste(10)


//mutação dentro de const
// const usuario = { nome: 'Morena' }
// usuario.nome = 'Raira'
// console.log(usuario)


// class Matematica {
//   static soma(a, b) {
//     return a + b
//   }
// }

// console.log(Matematica.soma(1, 2))

// class TodoList {
//   static addTodo() {
//     this.todos.push('Novo todo')
//     console.log(this.todos)
//   }
// }

// TodoList.addTodo()
// TodoList.addTodo()
// TodoList.addTodo()
// TodoList.addTodo()


// class List {
//   constructor() {
//     this.data = []
//   }

//   add(data) {
//     this.data.push(data)
//     console.log(this.data)
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super()

//     this.usuario = 'Morena'
//   }

//   mostraUsuario() {
//     console.log(this.usuario)
//   }
// }

// var MinhaLista = new TodoList()

// document.getElementById('novotodo').onclick = function() {
//   MinhaLista.add('Novo todo')  
// }

// MinhaLista.mostraUsuario()