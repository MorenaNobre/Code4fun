// for in - vai dar o indice - nao valore
// const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// for (i in notas) {
//     console.log(i, notas[i])
// }

//array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let nota in notas) {
    console.log(`nota = ${notas[nota]}`)
}

//objeto
const pessoa = {
    nome: 'Morena',
    sobrenome: 'Nobre',
    idade: 37,
    peso: 85
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}