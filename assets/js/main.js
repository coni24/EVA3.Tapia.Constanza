
//variable para almacenar tamaño de fuente real.
let tamanioFuente = 100;

//se realiza para agrandar fuente de la pagina.
document.getElementById('fGrande').addEventListener("click",function(){
    cambioFuente(10);
})
//se realiza para redur la fuente de la pagina con el evento click.
document.getElementById('fPequenia').addEventListener("click",function(){
    cambioFuente(-10);
})

//se realiza la funcion cambioFuente para realizar calculo de la fuente.
function cambioFuente(calculo){
    tamanioFuente += calculo;  //se suma o resta al tamaño de la fuente original.
    document.body.style.fontSize = tamanioFuente + '%';  // se realiza el cambio de fuente al body.
}
// se realiza para cambiar contraste de la pagina.
document.getElementById('Contraste').addEventListener("click",function(){
    document.body.classList.toggle('oscuro'); // pasa modo oscuro o claro en el body para que se cambie el constraste de la pagina.
})

//se realiza la funcion validar para validar los campos del formulario.
function validar(){  //se llama a cada campo para validar cada uno de ellos.
    validarCampo("nombre");
    validarCampo("email");
    validarCampo("asunto");
    validarCampo("mensaje");
    validarTelefono("telefono");
}
//eta funcion se realiza para validar campos especificos.
function validarCampo(idCampo){
    let elemento = document.getElementById(idCampo);  // recuperamos el elemento por el id.
    let valor = elemento.value;
    let eParrafo = document.getElementById("p" + idCampo); 

    //se utiliza este ciclo para verificar las entradas de los usuarios y validar los datos ingresados.
    if(valor.trim() == ""){
        console.log("Nada")
        elemento.style.borderColor = "pink";  // se cambia el borde del input a color pink si esta vacio.
        eParrafo.style.display = "block";  // se muestra el mensaje de error.
    }else{
        let contieneNumero = /[0-9]/.test(valor);  //se realiza para comprobrar si el valor contiene numeros.
        if(contieneNumero) {
            elemento.style.borderColor = "pink"; //se cambia el borde del input a color pink si contiene numeros.
            eParrafo.innerText = "No puede contener numeros";
            eParrafo.style.display = "block";  // se muestra el mensaje de error.
        }else{
        console.log("algo")
        elemento.style.borderColor = "green"; //se cambia el borde a color green si el dato entregado es correcto.
        eParrafo.style.display = "none"; //esto oculta el mensaje de error.
        }
    }
}
//esta funcion se crea para validar el campo de telefono 
function validarTelefono(idCampo){
    let elemento = document.getElementById(idCampo); //obtenemos el campo de telefono por el id.
    let valor = elemento.value;
    let eParrafo = document.getElementById("p" + idCampo);
    
    //se implementa este ciclo para validar que el numero de telefono sea un numero valido y no sea numeros neg o que no cumpla con la cantidad de digitos.//
    if (isNaN(valor)|| Number(valor)<0){ // compuebra si el numero ingresado no sea negativo
        eParrafo.innerText = "Debes ingresar un numero valido";
        eParrafo.style.display = "block";
    }else if (valor.trim().length === 9 || valor.trim().length === 0){ //comprueba que cumpla con los 9 digitos.
        elemento.style.borderColor = "green"; //cambia a verde si lo ingresado es valido
        eParrafo.style.display = "none";
    }else {
        elemento.style.borderColor = "pink"; //cambia a color rosa si no cuenta con los 9 digitos.
        eParrafo.innerText = "Debes ingresar un numero de 9 digitos"; //mensaje que le aparece al usuario.
        eParrafo.style.display = "block";
    }
}

