let cabeza = null;
function agregarContacto() {
    
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;

    
    let nuevoContacto = {
        nombre: nombre,
        telefono: telefono,
        siguiente: null
    };

   
    if (cabeza === null) {
        cabeza = nuevoContacto;
    } else {
       
        let actual = cabeza;
        while (actual.siguiente !== null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevoContacto;
    }

    
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";

   
    mostrarAgenda();
}


function eliminarContacto() {
    if (cabeza === null) {
        alert("No hay contactos en la agenda.");
        return;
    }

   
    if (cabeza.siguiente === null) {
        cabeza = null;
        mostrarAgenda();
        return;
    }

   
    let actual = cabeza;
    while (actual.siguiente !== null && actual.siguiente.siguiente !== null) {
        actual = actual.siguiente;
    }

   
    actual.siguiente = null;

   
    mostrarAgenda();
}


function mostrarAgenda() {
    let tabla = document.getElementById("tablaContactos").getElementsByTagName("tbody")[0];
    tabla.innerHTML = "";  

    let actual = cabeza;
    let indice = 1;

    
    while (actual !== null) {
        let fila = tabla.insertRow();
        fila.insertCell(0).textContent = indice;
        fila.insertCell(1).textContent = actual.nombre;
        fila.insertCell(2).textContent = actual.telefono;

        actual = actual.siguiente;
        indice++;
    }
}
