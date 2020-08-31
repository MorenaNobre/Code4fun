const usuarios = [
  { nome: 'Morena', idade: 37, empresa: 'CodeOn' },
  { nome: 'Raira', idade: 28, empresa: 'CodeOn'},
  { nome: 'Paola', idade: 36, empresa: 'RenderOn'},
  { nome: 'Yan', idade: 15, empresa: 'RenderOn'}
]

//map
const soIdade = usuarios.map(usuario => usuario.idade)
console.log(soIdade)

//filter
const codeOn29 = usuarios.filter(
  usuario => usuario.empresa === 'CodeOn' && usuario.idade >= 29
)
console.log(codeOn29)

//find
const workGoogle = usuarios.find(usuario => usuario.empresa === 'Google')
console.log(workGoogle)

//Multiplique a idade usuarios e encontre quem tem mais de 50 anos
const menos50 = usuarios
  .map(usuario => ({...usuario, idade: usuario.idade * 2}))
  .filter(usuario => usuario.idade <= 50)
console.log(menos50)