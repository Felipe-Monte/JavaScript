let valores = [7, 5, 3, 2, 4, 6]
console.log(`Esse vetor tem ${valores.length} posições`)
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 

/* funciona assim na contagem de vetores nesse caso é considerado assim:
    0 1 2 3 4 5 pra cada casa de valores, ou seja, enquanto a posição (pos)
    for menor que o valor do ultimo vetor ele recebera ++, nesse caso
    foi ate o 5 viu que não era maior e finalizou mostrando todos os valores
    ocupados nas vagas dos respectivos vetores, que foram 7 5 3 2 4 6 ! */