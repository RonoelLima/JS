function max(num1, num2){
    if(num1 > num2) return num1
    if(num2 > num1) return num2
}

const max2 = (x, y ) => {
    return x > y ? x : y;
}

const max3 = (x, y ) =>  x > y ? x : y;

console.log(max(10,20))