//caracteristica do if - e cuidado para escrever o código
function teste1(num){
    //sem bloco associado ao if
    if(num > 7)
        console.log(num)//somente essa sentença de código está associada com o bloco if

    console.log('Final')//identação correta e não tem relação com if
}
//a sentença Final está fora do escopo if, sempre será executada.

teste1(6)
teste1(8)

//advertência ; ponto e vírgula
function teste2(num){
    if(num > 7)
        ; //sentença de codigo vazia terminada com ; - isso que está associado ao if
    {
        console.log(num)//esse bloco não tem filtro, então executa os dois numeros abaixo na chamada
    }
}

teste2(6)
teste2(8)