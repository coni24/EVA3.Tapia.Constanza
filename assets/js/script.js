import { registrarPersona, eliminarPersona, obtenerPersona, editarPersona } from "./promesas.js";
window.addEventListener("load", () => {
    cargarDatos();
    document.getElementById("btnRegistrar").addEventListener('click', registrar);
    document.getElementById("btnEditar").addEventListener('click', editar);
});
//se obtiene los elementos del formulario
const registrar = () => {
    let eNombre = document.getElementById("nombre");
    let eEmail = document.getElementById("email");
    let eTelefono = document.getElementById("telefono");
    let eAsunto = document.getElementById("asunto");
    let eMensaje = document.getElementById("mensaje");
    let eProductos = document.getElementById("productos");
    let eSuscripcion = document.getElementById("suscripcion").checked;
    let eGenero = document.getElementsByName("genero");
    
    //reuperar valor del elemento.
    let vNombre = eNombre.value;
    let vEmail = eEmail.value;
    let vTelefono = eTelefono.value;
    let vAsunto = eAsunto.value;
    let vMensaje = eMensaje.value;
    let vProductos = eProductos.value;
    let vSubcripcion = eSuscripcion;
    let vGenero = "";
    eGenero.forEach((radio) => { //verififcar cual es la opcion seleccionada
        if (radio.checked) {
            vGenero = radio.value;
        }
    });
    //crear un objeto con los datos recuperados.
    let objeto = {
        nombre: vNombre,
        email: vEmail,
        telefono: vTelefono,
        asunto: vAsunto,
        mensaje: vMensaje,
        productos: vProductos,
        subscripcion: vSubcripcion,
        genero: vGenero
    };
    //Envio el objeto y el id a las promesas
    registrarPersona(objeto).then(() => {
        alert("Se registró con éxito");
        cargarDatos(); //recargar los datos en la tabla
    }).catch((error) => {
        console.error("Error al registrar:", error);
    });
};

const cargarDatos = () => {
    obtenerPersona().then((personas) => {  //obtener a las personas de la base.
        let estructura = "";
        personas.forEach((p) => {
            estructura += "<tr>";
            estructura += "<td>" + p.nombre + "</td>";
            estructura += "<td>" + p.email + "</td>";
            estructura += "<td>" + p.telefono + "</td>";
            estructura += "<td>" + p.asunto + "</td>";
            estructura += "<td>" + p.mensaje + "</td>";
            estructura += "<td>" + p.productos + "</td>";
            estructura += "<td>" + p.subscripcion + "</td>";
            estructura += "<td>" + p.genero + "</td>";
            estructura += "<td><button class='btnEditar' id='ED" + p.id + "'>Editar</button></td>";
            estructura += "<td><button class='btnEliminar' id='DEL" + p.id + "'>Eliminar</button></td>";
            estructura += "</tr>";
        });

        document.getElementById("cuerpoTabla").innerHTML = estructura;
        
        //generar las filas de la tabla con los datos de los usuarios.
        personas.forEach((p) => {
            document.getElementById("ED" + p.id).addEventListener("click", () => {
                document.getElementById("nombre").value = p.nombre;
                document.getElementById("email").value = p.email;
                document.getElementById("telefono").value = p.telefono;
                document.getElementById("asunto").value = p.asunto;
                document.getElementById("mensaje").value = p.mensaje;
                document.getElementById("productos").value = p.productos;
                document.getElementById("suscripcion").checked = p.subscripcion;
                document.getElementsByName("genero").forEach((radio) => {  
                    if (radio.value === p.genero) {
                        radio.checked = true;
                    } else {
                        radio.checked = false;
                    }
                });
                document.getElementById("btnEditar").value = p.id;  
            });
            //para el boton editar
            document.getElementById("DEL" + p.id).addEventListener("click", () => {
                if (confirm("¿Desea eliminar a:\n" + p.nombre + "?")) {
                    eliminarPersona(p.id).then(() => {
                        alert("Se eliminó con éxito");
                        cargarDatos();
                        })
                        .catch((e) => {
                            console.log(e);
                        });
                }
            });
        });
    }).catch((error) => {
        console.error("Error al cargar datos:", error);
    });
};
//funcion editar datos ingresados por el usaurio
const editar = () => {
    let eNombre = document.getElementById("nombre");
    let eEmail = document.getElementById("email");
    let eTelefono = document.getElementById("telefono");
    let eAsunto = document.getElementById("asunto");
    let eMensaje = document.getElementById("mensaje");
    let eProductos = document.getElementById("productos");
    let eSuscripcion = document.getElementById("suscripcion").checked;
    let eGenero = document.getElementsByName("genero");

    let vNombre = eNombre.value;
    let vEmail = eEmail.value;
    let vTelefono = eTelefono.value;
    let vAsunto = eAsunto.value;
    let vMensaje = eMensaje.value;
    let vProductos = eProductos.value;
    let vSuscripcion = eSuscripcion;
    let vGenero = "";
    eGenero.forEach((radio) => {
        if (radio.checked) {       //determina que radio del genero fue seleccionado.
            vGenero = radio.value; 
        }
    });

    document.getElementById("btnEditar").value;
    
    let objeto = {
        nombre: vNombre,
        email: vEmail,
        telefono: vTelefono,
        asunto: vAsunto,
        mensaje: vMensaje,
        productos: vProductos,
        subscripcion: vSuscripcion,
        genero: vGenero
    };
    
    editarPersona(objeto).then(() => {
        alert("Se actualizó con éxito");
        cargarDatos();
    }).catch((error) => {
        console.error("Error al editar:", error);
    });
};



