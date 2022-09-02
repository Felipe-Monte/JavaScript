let num = [5, 8, 2, 9, 3]
num.push(1) // acrescentou o valor ao final 1
num.sort() // organiza na ordem crescente 
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) { // -1 para valores que nao consta no array
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}   