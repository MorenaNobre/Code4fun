function soBoaNoticia(nota){
    //expressão relacional - comparação
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}
//execução da função
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    //passando só um valor
    if(valor){
        console.log(`É verdade...${valor}`)
    }
}

seForVerdadeEuFalo()//undefined - false
seForVerdadeEuFalo(null)//false
seForVerdadeEuFalo(undefined)//false
seForVerdadeEuFalo(NaN)//false
seForVerdadeEuFalo('')//false
seForVerdadeEuFalo(0)//false
seForVerdadeEuFalo(-1)//true
seForVerdadeEuFalo(' ')//true
seForVerdadeEuFalo('?')//true
seForVerdadeEuFalo([])//true
seForVerdadeEuFalo([1, 2])//true
seForVerdadeEuFalo({})//true