const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2, [7, 8, 9], 'Ronoel')
console.log(a3)

// concatenando com o spread operator ...rest
const a4 = [...a1, ...a2, 'Ronoel']
console.log(a4)