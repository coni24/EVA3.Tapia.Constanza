
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
    validarCampo("nombre");
    validarCampo("email");
    validarCampo("asunto");
    validarCampo("mensaje");
    validarTelefono("telefono");
}

function validarCampo(idCampo){
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value;
    let eParrafo = document.getElementById("p" + idCampo);

    if(valor.trim() == ""){
        console.log("Nada")
        elemento.style.borderColor = "pink";
        eParrafo.style.display = "block";
    }else{
        let contieneNumero = /[0-9]/.test(valor);
        if(contieneNumero) {
            elemento.style.borderColor = "pink";
            eParrafo.innerText = "No puede contener numeros";
            eParrafo.style.display = "block";
        }else{
        console.log("algo")
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
        }
    }
}
  
function validarTelefono(idCampo){
    let elemento = document.getElementById(idCampo);
    let valor = elemento.value;
    let eParrafo = document.getElementById("p" + idCampo);

    if (isNaN(valor)|| Number(valor)<0){
        eParrafo.innerText = "Debes ingresar un numero valido";
        eParrafo.style.display = "block";
    }else if (valor.trim().length === 9 || valor.trim().length === 0){
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }else {
        elemento.style.borderColor = "pink";
        eParrafo.innerText = "Debes ingresar un numero de 9 digitos";
        eParrafo.style.display = "block";
    }
}