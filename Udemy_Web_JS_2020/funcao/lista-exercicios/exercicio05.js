function retornarValorDecimal(valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
  console.log(valorEmReais)
}

retornarValorDecimal(0.1 + 0.2)
retornarValorDecimal(0.4 + 0.2)
retornarValorDecimal(0.4 + 1.3)