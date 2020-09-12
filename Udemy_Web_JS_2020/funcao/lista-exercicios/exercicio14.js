function queroFruta(fruta) {
  switch (fruta) {
    case 'maçã':
      console.log('Não vendemos esta fruta aqui')
      break
    case 'pitanga':
      console.log('Estamos com escassez de pitanga.')
      break
    case 'melancia':
      console.log('Aqui está, custa R$ 3,00 o quilo.')
      break
    default:
      console.log('404, esta fruta não foi encontrada.')
  }
}

queroFruta('maçã')
queroFruta('pitanga')
queroFruta('melancia')
queroFruta('flahridah')