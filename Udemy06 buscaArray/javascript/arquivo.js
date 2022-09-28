
var card = document.getElementById('card')
var btn = document.getElementById('botao')

var meusGatos = {
    gatos: [
        {
            "nome": 'carlos',
            'descricao': 'gato inteligente',
            'fotoUrl': 'imagens/gato-01.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        },

        {
            'nome': 'felipe',
            'descricao': 'gato feliz',
            'fotoUrl': 'imagens/gato-01.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        },

        {
            'nome': 'monte',
            'descricao': 'gato alegre',
            'fotoUrl': 'imagens/gato-01.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        }
    ]
}

function getGato() {
    var texto = document.getElementById('texto').value

    for (var i = 0; meusGatos.gatos.length > i; i++) {

        if (texto == meusGatos.gatos[i].nome) {
            card.querySelector('h1').innerHTML = meusGatos.gatos[i].nome  
            return;
        } else {
            card.querySelector('h1').innerHTML = 'gato nao tem'
            
        }
    }
}

btn.addEventListener('click', getGato)