
let tamanioFuente = 100;
document.getElementById('fGrande').addEventListener("click",function(){
    cambioFuente(10);
})

document.getElementById('fPequenia').addEventListener("click",function(){
    cambioFuente(-10);
})

function cambioFuente(calculo){
    tamanioFuente += calculo;
    document.body.style.fontSize = tamanioFuente + '%';
}

document.getElementById('Contraste').addEventListener("click",function(){
    document.body.classList.toggle('oscuro');
})

function validar(){
    eValidar('nombre');
}