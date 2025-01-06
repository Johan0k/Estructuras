class Nodo {
    constructor(cedula, nombres, apellidos, total) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.total = total;
        this.next = null;
        this.prev = null;
    }
}

class ListaCircularDoble {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    
    agregarInicio(cedula, nombres, apellidos, total) {
        let nodo = new Nodo(cedula, nombres, apellidos, total);
        
        if (this.size === 0) {
            this.head = nodo;
            this.tail = nodo;
            nodo.next = this.head;
            nodo.prev = this.tail;
        } else {
            nodo.next = this.head;
            nodo.prev = this.tail;
            this.tail.next = nodo;
            this.head.prev = nodo;
            this.head = nodo;
        }
        this.size++;
    }

    
    agregarFinal(cedula, nombres, apellidos, total) {
        let nodo = new Nodo(cedula, nombres, apellidos, total);

        if (this.size === 0) {
            this.head = nodo;
            this.tail = nodo;
            nodo.next = this.head;
            nodo.prev = this.tail;
        } else {
            nodo.next = this.head;
            nodo.prev = this.tail;
            this.tail.next = nodo;
            this.head.prev = nodo;
            this.tail = nodo;
        }
        this.size++;
    }


    mostrarLista() {
        let actual = this.head;
        let ventas = [];

        if (this.size === 0) return ventas;

        do {
            ventas.push({
                cedula: actual.cedula,
                nombres: actual.nombres,
                apellidos: actual.apellidos,
                total: actual.total
            });
            actual = actual.next;
        } while (actual !== this.head);

        return ventas;
    }

    
    obtenerUsuariosConDescuento() {
        let actual = this.head;
        let usuarios = new Map();

        if (this.size === 0) return [];

        do {
            if (usuarios.has(actual.cedula)) {
                usuarios.get(actual.cedula).compras++;
            } else {
                usuarios.set(actual.cedula, {
                    nombres: actual.nombres,
                    apellidos: actual.apellidos,
                    compras: 1
                });
            }
            actual = actual.next;
        } while (actual !== this.head);

       
        let usuariosConDescuento = [];
        usuarios.forEach((usuario) => {
            if (usuario.compras > 1) {
                usuariosConDescuento.push({
                    nombres: usuario.nombres,
                    apellidos: usuario.apellidos,
                    descuento: 10
                });
            }
        });

        return usuariosConDescuento;
    }

    
    eliminarPorCedula(cedula) {
        if (this.size === 0) return;

        let actual = this.head;

        do {
            if (actual.cedula === cedula) {
                if (actual === this.head && this.size === 1) {
                    this.head = null;
                    this.tail = null;
                } else if (actual === this.head) {
                    this.head = actual.next;
                    this.tail.next = this.head;
                    this.head.prev = this.tail;
                } else if (actual === this.tail) {
                    this.tail = actual.prev;
                    this.tail.next = this.head;
                    this.head.prev = this.tail;
                } else {
                    actual.prev.next = actual.next;
                    actual.next.prev = actual.prev;
                }
                this.size--;
                return;
            }
            actual = actual.next;
        } while (actual !== this.head);
    }
}


const listaVentas = new ListaCircularDoble();
const listaUsuariosConDescuento = new ListaCircularDoble();


const ventasTableBody = document.querySelector("#ventasTable tbody");
const descuentosTableBody = document.querySelector("#descuentosTable tbody");
const ventaForm = document.querySelector("#ventaForm");


function actualizarTablas() {
    ventasTableBody.innerHTML = '';
    descuentosTableBody.innerHTML = '';

    
    const ventas = listaVentas.mostrarLista();
    ventas.forEach(venta => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${venta.cedula}</td>
            <td>${venta.nombres}</td>
            <td>${venta.apellidos}</td>
            <td>${venta.total}</td>
        `;
        ventasTableBody.appendChild(row);
    });

    
    const usuariosConDescuento = listaVentas.obtenerUsuariosConDescuento();
    usuariosConDescuento.forEach(usuario => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${usuario.nombres} ${usuario.apellidos}</td>
            <td>${usuario.descuento}%</td>
        `;
        descuentosTableBody.appendChild(row);
    });
}


ventaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cedula = document.querySelector("#cedula").value;
    const nombres = document.querySelector("#nombres").value;
    const apellidos = document.querySelector("#apellidos").value;
    const total = parseFloat(document.querySelector("#total").value);

    
    listaVentas.agregarFinal(cedula, nombres, apellidos, total);

   
    ventaForm.reset();

    
    actualizarTablas();
});


actualizarTablas();
