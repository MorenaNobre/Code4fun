function verifyAge(age) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return age >= 18 ? resolve() : reject()
    }, 2000)
  })
}

verifyAge(17)
  .then(function() {
    console.log('Older than 18')
  })
  .catch(function() {
    console.warn('Younger than 18')
  })