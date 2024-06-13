import { db } from "./firebase.js";
import {addDoc, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


export const registrarPersona = async(persona)=>{
    const docRef = await addDoc(collection(db,"personas"), persona);
}

export const obtenerPersona = async()=>{
    //recupera la referencia (ruta)
    const ref = collection(db, "personas");
    const qSnap = await getDocs(ref);
    let listado = []
    qSnap.forEach((doc)=>{
        console.log(doc.data());
        listado.push({ ...doc.data(),id: doc.id })
    });
    console.log(listado);
    return listado;
};

export const eliminarPersona = async (id) =>{
    await deleteDoc(doc(db,"personas",id));
    console.log("Documento eliminado:");
};

export const editarPersona = async (persona,id)=>{
    const docRef =doc(db,"personas",id);
    await updateDoc(docRef,persona);
    console.log("Documento Editado");
};

