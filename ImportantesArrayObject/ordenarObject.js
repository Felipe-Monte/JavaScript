

let turma = [{aluno: 'carlos'} , {aluno: 'felipe'} , {aluno: 'monte'}, {aluno:'mandinga'} ]

function ordenar(a, b) {
    if (a.aluno > b.aluno) {
        return true
    } else {
        return -1
    }
}

turma.sort(ordenar)
console.log(turma)