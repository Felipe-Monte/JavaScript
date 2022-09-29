
var card = document.getElementById('card')
var btn = document.getElementById('botao')

var meusGatos = {
    gatos: [
        {
            "nome": 'Carlos',
            'descricao': 'Gato inteligente',
            'fotoUrl': 'images/gato-01.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        },

        {
            'nome': 'Felipe',
            'descricao': 'Gato feliz',
            'fotoUrl': 'images/gato-02.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        },

        {
            'nome': 'Monte',
            'descricao': 'Gato alegre',
            'fotoUrl': 'images/gato-03.jpg',
            'linkExterno': 'https://www.instagram.com/felipe_mmonte/'
        }
    ]
}

function getGato() {
    var texto = document.getElementById('texto').value.toLowerCase()


    //Loop para verificar cada gato do array e encontrar o que deseja.
    for (var i = 0; meusGatos.gatos.length > i; i++) {

        // if para: se o texto digitado for == ao nome de algum gato faça:
        if (texto == meusGatos.gatos[i].nome.toLowerCase()) {
            card.querySelector('h1').innerHTML = meusGatos.gatos[i].nome  
            card.querySelector('img').setAttribute('src', meusGatos.gatos[i].fotoUrl)  
            card.querySelector('p').innerHTML = meusGatos.gatos[i].descricao
            return; 
        } else {
            card.querySelector('h1').innerHTML = 'Gato não encontrado'
            card.querySelector('p').innerHTML = 'Tente buscar outro gato'    
            
        }
    }
}

btn.addEventListener('click', getGato)