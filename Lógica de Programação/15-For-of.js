const nome = ['Luiz Otávio', 'Ronoel', 'Gustavo']

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i])
}


for (let valor of nome) {
    console.log(valor)
}

nome.forEach(nome => {
    console.log(nome)
})