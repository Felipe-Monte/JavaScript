
var card = document.getElementById('card')
var btn = document.getElementById('botao')

var meusGatos = {
    gatos: [
        {
            "nome": 'Carlos',
            'descricao': 'gato inteligente',
            'fotoUrl': 'images/gato-01.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        },

        {
            'nome': 'Felipe',
            'descricao': 'gato feliz',
            'fotoUrl': 'images/gato-02.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        },

        {
            'nome': 'Monte',
            'descricao': 'gato alegre',
            'fotoUrl': 'images/gato-03.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        }
    ]
}

function getGato() {
    //Buscando valor da caixa de texto e coloando tudo em letras minúsculas.
    var texto = document.getElementById('texto').value.toLowerCase()


    //Loop para verificar cada gato do array e encontrar o que deseja.
    for (var i = 0; meusGatos.gatos.length > i; i++) {


        // if para: se o texto digitado for == ao nome de algum gato faça:
        if (texto == meusGatos.gatos[i].nome.toLowerCase()) {
            card.querySelector('h1').innerHTML = meusGatos.gatos[i].nome  
            card.querySelector('img').setAttribute('src', meusGatos.gatos[i].fotoUrl)  
            return; // return para parar loop assim que for encontrado 
        } else {
            card.querySelector('h1').innerHTML = 'gato nao tem'
            
        }
    }
}

btn.addEventListener('click', getGato)