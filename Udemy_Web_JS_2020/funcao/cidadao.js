function fun1() {}

const fun2 = function() {}

const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

const obj = {}
obj.falar = function () { return 'Hello World!' }
console.log(obj.falar())

function run(fun) {
  fun()
}
run(function() { console.log('Executando..') })

function soma(a, b) {
  return function(c) {
    console.log( a + b + c)
  }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

