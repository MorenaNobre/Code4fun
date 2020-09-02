const arr = [1, 2, 3, 4, 5, 6]

const [x, ...y] = arr

console.log(x)
console.log(y)


function soma(...nums) {
  return nums.reduce((a, b) => a + b)
}

console.log(soma(1, 2, 3, 4, 5, 6))
console.log(soma(1, 2))

//==========================//

const usuario = {
  nome: 'Morena',
  idade: 37,
  endereco: {
    cidade: 'Sorocaba',
    uf: 'SP',
    pais: 'Brasil'
  }
}

const usuario2 = {...usuario, nome:'Raira'}
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'São Paulo'}}

console.log(usuario2)
console.log(usuario3)