// //função geradora
// function* geradora1(){
//     //Código....
//     yield 'Valor 1'
//     //Código....
//     yield 'Valor 2'
//     //Código....
//     yield 'Valor 3'
// }

// const g1 = geradora1();
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())

// for(valor of g1){
//     console.log(valor)
// }

function* gerador2(){
    let i = 0
    while(true) {
        yield i;
        i++;
    }
}

const g2 = gerador2();
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)