let num = document.getElementById('numero')
let num2 = document.getElementById('numero2')
let res = document.getElementById('res')


 

function verificar() {
    if (num.value == 0) {
        alert('[ERRO] campo em branco')
    } else if (num2.value == 0 || num2.value > 12 || num2.value < 1) {
        alert('Seria em quantas vezes? so aceitamos até 12 !')

    } else {
    
        let n = Number(num.value) 
        let n2 = Number(num2.value)
        let taxa = (n * 20) / 100 + n
        let parcela = taxa / n2

        res.innerHTML = `<p>Pegando ${n} você pagará <strong>R$:${taxa}</strong></p>`
        res.innerHTML += `<p>Em ${n2}x de R$:${parcela}</p>`
    
    }    

    num.focus()
    
}