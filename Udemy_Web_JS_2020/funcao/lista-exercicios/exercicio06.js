function jurosSimples(capitalInicial, taxa, tempo) {
  return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos(capitalInicial, taxa, tempo) {
  return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(700, 5/100, 12))
console.log(jurosCompostos(700, 5/100, 12))