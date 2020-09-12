function planoSalario(plano, salarioAtual) {
  switch (plano) {
    case 'A':
      return salarioAtual * 1.1
    case 'B':
      return salarioAtual * 1.15
    case 'C':
      return salarioAtual * 1.2
    default:
      return 'Plano inválido'
  }
}

console.log(planoSalario('A', 1000))
console.log(planoSalario('B', 1000))
console.log(planoSalario('C', 1000))
console.log(planoSalario('D', 1000))