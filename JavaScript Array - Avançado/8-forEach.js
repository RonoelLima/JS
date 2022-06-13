const a1 = [1 , 2, 3, 4, 5]
for(let valor of a1){
    console.log(valor)
}

a1.forEach((valor, indice, array)=>{
    console.log(valor, indice, array)
})