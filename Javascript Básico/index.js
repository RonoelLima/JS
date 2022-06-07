function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEventoForm (e) {
        e.preventDefault()
        const nome = form.querySelector('.name')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        console.log(nome, sobrenome, peso, altura)

        resultado.innerHTML += `<p> O seu nome é ${nome.value}</p>`
        resultado.innerHTML += `<p> O seu sobrenome é ${sobrenome.value}</p>`
        resultado.innerHTML += `<p> O seu peso é ${peso.value}</p>`
        resultado.innerHTML += `<p> A sua altura é ${altura.value}</p>`

        function pessoa (nome, sobrenome, peso, altura){
            const pessoa = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            }

        

            return pessoas.push(pessoa)
        }

        console.log(pessoas)

       return pessoas
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()