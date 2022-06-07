/*
> maior que
>= maior ou igual a
< menor que
== igualdade (valor)
===igualdade estrita
!= diferente (valor)
!== diferença estrita (valor e tipo)
*/
const comp1 = 10 > 5
const comp2 = 10 >= 5  // > || =
const comp3 = 10 >= 11 // > || =
const comp4 = 10 <= 11 // < || =
const comp5 = 10 > 11 

console.log(comp1);
console.log(comp2);
console.log(comp3);
console.log(comp4);
console.log(comp5);

const num1= 10;
const num2=10;
const comp = num1 == num2
console.log(comp)

const num3=10;// number
const num4='10'; // stringer
const teste = num1 == num2 // comp. de valor - verdadeiro
console.log(teste)

const num10 = 10
const num11 = '11'
const compar = num10 === num11
console.log(compar)
// comp. de valor e tipo - falso