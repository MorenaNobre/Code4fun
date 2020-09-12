function calcVenda(codigoProduto, qtd) {
  switch(codigoProduto) {
    case 100:
      return qtd * 3
    case 200:
      return qtd * 4
    case 300:
      return qtd * 5.5
    case 400:
      return qtd * 7.5
    case 500:
      return qtd * 3.5
    case 600:
      return qtd * 2.8
    default:
      return 'Esse produto não existe.'
  }
}

console.log(calcVenda(100, 2))
console.log(calcVenda(200, 2))
console.log(calcVenda(300, 2))
console.log(calcVenda(400, 2))
console.log(calcVenda(500, 2))
console.log(calcVenda(600, 2))
console.log(calcVenda(700, 2))