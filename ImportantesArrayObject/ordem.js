let turma = [
{aluno: 'carlos',
 numero:10}, 

{aluno: 'felipe',
numero:111}, 

{aluno: 'monte', 
numero:222}, 

{aluno:'mandinga',
numero:20} ]

function ordenar (a, b) { // ordenar pelo numero
    return a.numero - b.numero
}

turma.sort(ordenar)
console.log(turma)