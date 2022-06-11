// const num = (num) => {
//     if (num < 0 || num > 100){
//         return;
//     }  

//     if(num % 3 === 0) { if(num % 5 === 0) return  'FizzBuzz}'
//     if(num % 3 === 0) return  'Fizz'
//     if(num % 5 === 0) return  'Buz'
//     if(num % 3 && 5 !== 0) return num
 
// }

// console.log(num(10))

const fizzBuzz= (numero) => {
    
    if(typeof numero !== 'number') return numero;
    
    if( numero % 3 === 0 && numero % 5 ===0 ) return 'FizzBuzz';
    if( numero % 3 === 0 ) return 'Fizz';
    if( numero % 5 ===0 ) return 'Buzz';
    return numero
}

for (let i = 0; i <=100 ; i++){
    console.log(i, fizzBuzz(i))
}

