let backpack = []

backpack.push('tent', 'sandals', 'hat');
backpack.unshift('beef jerky')
backpack.pop()
backpack.splice(1, 1)

let sunglasses = "sunglasses"
backpack.push(sunglasses)
backpack.push('knife', 'toothbrush', 'blanket', 'flash light', 'food')

let backpack2 = backpack.splice(4, 4)
let backpack22 = backpack2.slice(0, 2)
console.log('backpack22:', backpack22)
console.log("____________")
console.log('backpack:', backpack)
console.log('backpack2:', backpack2)

for (let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
}
console.log("__________")
for (let i = 0; i < 2; i++){
    console.log(backpack2[i])
}

console.log('________')

for (let i = backpack.length - 3; i < backpack.length; i++){
    console.log(backpack[i])
}



