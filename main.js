
function tocarSom(seletorAudio){

    elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){ // se o elemento não é vazio && a tag name seja audio
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido.');
        
    }
    
}

document.querySelector('.tecla_pom').onclick = tocarSom;

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`

    //console.log(idAudio)

    tecla.onclick = function(){
        tocarSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        
        console.log(evento.code == 'Space');

        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa'); 
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
