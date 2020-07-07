
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if(nivel==='dificil'){
    criaMosquitoTempo = 1000
}else if (nivel==='impossivel') {
    criaMosquitoTempo = 750
}



function ajustaTamanhoPalcoJogo(){
    //capturando altura e largura da tela
     altura = window.innerHeight
     largura = window.innerWidth
     console.log(altura, largura)

}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo -=1

    if(tempo < 0){
        clearInterval(cronometro) //Finaliza cronometro quando há vitória
        clearInterval(criaMosquito)//Finaliza criação de mosquito quando há vitória
        window.location.href = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
},1000)

function posicaoRandomica(){

    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove() //Remove o elemento mosquito
        if(vidas > 3){//Se vidas for maior que 3 jogo termina e usuário perde
            window.location.href = 'fim_de_jogo.html'
            
        
        }else{//Caso vida for menor que 3 variavel vida é incrementada
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas++
        }

        
    }
    
       //fim
var posicaoX = Math.floor(Math.random() * largura) -90
var posicaoY = Math.floor(Math.random() * altura) -90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Criar o elemento html:

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
//Clica no mosquito:
mosquito.onclick = function(){
    this.remove()
}    
//Fim função clicar no mosquito
document.body.appendChild(mosquito)
}

//Tamanho aleatório do mosquito
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:    
             return 'mosquito2'
        case 2:
            return 'mosquito3'
    } 
}
/*Fazer a imagem do mosquito inverter:*/
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:    
             return 'ladoB'
                 }

}

