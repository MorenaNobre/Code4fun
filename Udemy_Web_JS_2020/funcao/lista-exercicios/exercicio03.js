function expoente (base, expoente) {
  let resultado = Math.pow(base, expoente)

  //ou - novo método
  resultado = base ** expoente
  return resultado
}

console.log(expoente(2, 3))