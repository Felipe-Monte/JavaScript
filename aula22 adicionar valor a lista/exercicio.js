var num = document.getElementById('numero')
var lista = document.getElementById('area')
var res = document.getElementById('res')
var vetor = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, vetor)) {

        vetor.push(Number(num.value)) // Adiciona numero no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {

        window.alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar !')
    } else {
        let tot = vetor.length

        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0 

        for(let pos in vetor) {  // verificar um por um no veltor, e ver qual o maior e menor valor
                                      // para cada posiçao no vetor, verifica qual o maior e menor
            soma += vetor[pos] 

            if (vetor[pos] > maior) 
                maior = vetor[pos]
            if (vetor[pos] < menor)
                menor = vetor[pos]
        }

        media = soma / tot
        res.innerHTML = '' // Limpar o valor do resultado (res)
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media entre os valores e ${media}</p>`
    }

}