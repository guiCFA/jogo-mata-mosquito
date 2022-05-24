// Descobrindo a altura e a largura da tela
var altura = 0;
var largura = 0;

//velocidade do jogo
var nivel = window.location.search;
nivel = nivel.replace('?', '');

var criaMosquitoTempo = 1500;

if(nivel === 'normal'){
    criaMosquitoTempo = 1500;
    
} else if(nivel === 'dificil'){
    criaMosquitoTempo = 100;

} else if(nivel === 'chucknorris'){
    criaMosquitoTempo = 750;
}


//variavel global para contar as vidas
var vidas = 3;

// Vamos colocar essa função dentro do body com o "onresize"
function AjusteTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    
    console.log(largura, altura);
}
AjusteTela();


// variavel de tempo
var tempo = 50;

var cronometro = setInterval( function(){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);


// Criando posições randômicas 
function apareceMosquito(){
    
    // removendo o mosquito (caso exista)
    if(document.getElementById('mosquito') ){
        document.getElementById('mosquito').remove();

        if(vidas < 1){
            window.location.href = "fim_de_jogo.html"
        } else{
            document.getElementById('v' + vidas).src = "./imagens/coracao_vazio.png";
            vidas--;
        }
    }
    
    // Estamos usando o floor para arrendondar para baixo 
    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    // criar elemento html
    var mosquitoIMG = document.createElement('img');
    mosquitoIMG.src = './imagens/mosca.png';
    mosquitoIMG.className = tamanhaMosquito() + ' ' + ladoMosquito();
    mosquitoIMG.style.position = 'absolute';
    mosquitoIMG.style.left = posicaoX + 'px';
    mosquitoIMG.style.top = posicaoY + 'px';
    mosquitoIMG.id = 'mosquito'
    mosquitoIMG.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquitoIMG)
}

// criando tamanho aleatório para o mosquito
function tamanhaMosquito(){
    var classe = Math.floor(Math.random() * 3);
    console.log(classe)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

// crinado função que vai mudar o lado do mosquito
function ladoMosquito(){
    var classe = Math.floor(Math.random() * 2);
    console.log(classe)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}