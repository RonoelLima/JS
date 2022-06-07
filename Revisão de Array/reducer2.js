const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'False', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
]

const result = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista))
console.log(alunos.map(a => a.bolsista).reduce(result))


const resultados = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(resultados))