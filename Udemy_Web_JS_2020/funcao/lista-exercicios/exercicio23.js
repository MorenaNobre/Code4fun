function calculaNotaFinal(codAlunx, nota1, nota2, nota3) {
  let notas = []
  notas.push(nota1)
  notas.push(nota2)
  notas.push(nota3)
  notas.sort((a, b) => a < b ? 1 : -1)

  let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
  console.log(`Codigo dx Alunx: ${codAlunx}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calculaNotaFinal(123, 2.8, 6, 3.5)
calculaNotaFinal(124, 5.5, 6, 9.5)