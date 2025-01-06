class Nodo {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class ListaCS {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    agregarFinal(datos) {
        var nodo = new Nodo(datos, null);

        if (this.head === null) {
            this.head = nodo;
            nodo.next = this.head;  // El nodo apunta a sí mismo
        } else {
            let aux = this.head;
            while (aux.next !== this.head) {
                aux = aux.next;  // Recorrer hasta el último nodo
            }
            aux.next = nodo;
            nodo.next = this.head;  // El nuevo nodo apunta al inicio
        }

        this.size++;  // Actualizar el tamaño correctamente
    }

    agregarInicio(datos) {
        var nodo = new Nodo(datos, null);

        if (this.head === null) {
            this.head = nodo;
            nodo.next = nodo;  // El nodo apunta a sí mismo
        } else {
            let aux = this.head;
            while (aux.next !== this.head) {
                aux = aux.next;  // Recorrer hasta el último nodo
            }
            aux.next = nodo;
            nodo.next = this.head;  // El nuevo nodo apunta al inicio
            this.head = nodo;  // El nuevo nodo se convierte en la cabeza
        }

        this.size++;  // Actualizar el tamaño correctamente
    }

    imprimirLista() {
        if (!this.head) return null;

        let actual = this.head;
        let s = "";
        do {
            s += actual.data + " -> ";
            actual = actual.next;
        } while (actual !== this.head); // Continuar hasta volver al inicio
        return s.slice(0, -4);  // Eliminar el último "->"
    }

    vacio() {
        return this.size === 0;
    }

    temario() {
        return this.size;
    }

    removerInicio() {
        if (this.head) {
            if (this.head === this.head.next) {
                this.head = null;  // Si solo hay un nodo, la lista queda vacía
            } else {
                let actual = this.head;
                while (actual.next !== this.head) {
                    actual = actual.next;  // Recorrer hasta el último nodo
                }
                actual.next = this.head.next;  // El último nodo apunta al siguiente del primero
                this.head = this.head.next;  // El siguiente nodo se convierte en la cabeza
            }
            this.size--;  // Actualizar el tamaño correctamente
        }
    }

    removerFinal() {
        if (this.head) {
            if (this.head === this.head.next) {
                this.head = null;  // Si solo hay un nodo, la lista queda vacía
            } else {
                let actual = this.head;
                let aux = null;
                while (actual.next !== this.head) {
                    aux = actual;
                    actual = actual.next;  // Recorrer hasta el último nodo
                }
                aux.next = this.head;  // El penúltimo nodo apunta al inicio
            }
            this.size--;  // Actualizar el tamaño correctamente
        }
    }

    removerValor(valor) {
        let actual = this.head;
        let anterior = null;
        do {
            if (actual.data === valor) {
                if (actual === this.head) {
                    return this.removerInicio();  // Si es el primer nodo, usar removerInicio
                } else {
                    anterior.next = actual.next;  // El nodo anterior apunta al siguiente
                    this.size--;  // Actualizar el tamaño correctamente
                    return actual.data;  // Retornar el valor del nodo eliminado
                }
            }
            anterior = actual;
            actual = actual.next;
        } while (actual !== this.head);
        return null;  // Si no se encuentra el valor
    }

    removerPorIndice(indice) {
        if (indice < 0 || indice >= this.size) {
            return null;  // Índice fuera de rango
        }

        if (indice === 0) {
            return this.removerInicio();  // Si el índice es 0, usar removerInicio
        }

        let actual = this.head;
        let anterior = null;
        let count = 0;

        // Recorrer hasta el nodo en el índice especificado
        while (count < indice) {
            anterior = actual;
            actual = actual.next;
            count++;
        }

        // Eliminar el nodo
        if (actual !== this.head) {
            anterior.next = actual.next;
            this.size--;  // Actualizar el tamaño correctamente
            return actual.data;
        }

        return null;
    }
}

// Crear la lista circular
const lista = new ListaCS();

// Funciones para interactuar con la interfaz
document.getElementById("agregarInicio").onclick = function() {
    const dato = document.getElementById("inputDato").value;
    if (dato) {
        lista.agregarInicio(dato);
        actualizarVista();
    }
};

document.getElementById("agregarFinal").onclick = function() {
    const dato = document.getElementById("inputDato").value;
    if (dato) {
        lista.agregarFinal(dato);
        actualizarVista();
    }
};

document.getElementById("removerInicio").onclick = function() {
    lista.removerInicio();
    actualizarVista();
};

document.getElementById("removerFinal").onclick = function() {
    lista.removerFinal();
    actualizarVista();
};

document.getElementById("removerValor").onclick = function() {
    const valor = prompt("Ingrese el valor a eliminar:");
    if (valor) {
        lista.removerValor(valor);
        actualizarVista();
    }
};

document.getElementById("removerIndice").onclick = function() {
    const indice = prompt("Ingrese el índice del nodo a eliminar:");
    if (indice !== null) {
        lista.removerPorIndice(Number(indice));
        actualizarVista();
    }
};

// Función para actualizar la vista
function actualizarVista() {
    document.getElementById("listaResultado").innerText = "Lista: " + lista.imprimirLista();
    document.getElementById("tamanoLista").innerText = "Tamaño de la lista: " + lista.temario();
}
