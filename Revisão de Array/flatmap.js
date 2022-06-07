const escola = [
    {
    nome: 'Turma M1',
    alunos: 
    [{
        nome: 'Gustavo',
        nota: 8.1
        },
        {
        nome: 'Ana',
        nota: 9.3
        }]},
    {
    nome: 'Turma M2',
    alunos: 
    [{
        nome: 'Rebeca',
        nota: 8.9
        },
        {
        nome: 'Roberto',
        nota: 7.3
        }]},       
    ]

    const getNotadoAluno = aluno => aluno.nota
    const getNotadaTurma = turma => turma.alunos.map(getNotadoAluno)

    const notas1 = escola.map(getNotadaTurma)
    console.log(notas1)

    let newArray = []
    newArray.concat(notas1)
    console.log(newArray)