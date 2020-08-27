//para uma quantidade indeterminada de repetições
//não sabe exatamente quantos elementos você irá interar
//enquanto usuario não aperta stop o sistema continua
//pode usar o while como determinado tb
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')