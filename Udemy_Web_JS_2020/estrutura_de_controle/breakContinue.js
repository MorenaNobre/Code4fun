//não usar isso tudo aqui
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let x in nums) {
    if(x == 5) {
        break //não age no bloco if, age no bloco mais proximo, neste caso o for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for( let a in nums) {
    for( let b in nums) {
        if ( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}