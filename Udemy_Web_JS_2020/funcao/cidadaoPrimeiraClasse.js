// Funcao em JS é First-Class Object (Citizens)
// Higher order function
// funcao como um dado


//criar de forma literal
//uma funcao sempre retorna undefined caso não colocar o return
function fun1() {}

// armazenar em uma variavel
//abaixo funcao anonima
const fun2 = function() {}

// armazenar funcao dentro de array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

// armazenar em atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// passar uma funcao como parametro para outra funcao
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)