function verifica(numero) {
  if (numero % 3 === 0) {
    return true
  } else {
    return false
  }
}

console.log(verifica(3))
console.log(verifica(2))
console.log(verifica(10))