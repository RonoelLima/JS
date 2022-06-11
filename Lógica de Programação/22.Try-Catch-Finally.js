try {
    // é executado quando não há erros
    console.log(a)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou um erro')
    console.log('Fechei o arquivo')
} catch (error) {
    // é executado quando há erros
    console.log('Tratando o erro')
} finally {
    // Sempre é executado, mas pode ser omitido.
    console.log('Eu sempre sou executado')
}

// const hora = (data)=> {
//     if(data && !(data instanceof Date)) {
//         throw new TypeError('Esperando instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }


//     return data.toLocaleString('Pt-br', {
//         hora12: false,
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//     })

// }

// const data =  new Date('01-01-1970 12:58:12')
// const horas = hora(data)
