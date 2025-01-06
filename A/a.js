// Definición de las clases

class Nodo {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class ListaDobleEnlazada {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Agregar un nuevo nodo (PILA LIFO)
    insertarVenta(data) {
      const nuevoNodo = new Nodo(data);
      if (!this.head) {
        this.head = this.tail = nuevoNodo;
      } else {
        nuevoNodo.next = this.head;
        this.head.prev = nuevoNodo;
        this.head = nuevoNodo;
      }
    }
  
    // Eliminar el nodo (PILA LIFO)
    eliminarVenta() {
      if (!this.head) return null;
  
      const ventaEliminada = this.head.data;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
  
      return ventaEliminada;
    }
  
    // Mostrar todas las ventas
    mostrarVentas() {
      let ventas = [];
      let current = this.head;
      while (current) {
        ventas.push(current.data);
        current = current.next;
      }
      return ventas;
    }
  }
  
  class Cola {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    // Agregar un nuevo elemento
    encolar(data) {
      const nuevoNodo = new Nodo(data);
      if (!this.front) {
        this.front = this.rear = nuevoNodo;
      } else {
        this.rear.next = nuevoNodo;
        nuevoNodo.prev = this.rear;
        this.rear = nuevoNodo;
      }
    }
  
    // Mostrar todos los elementos de la cola
    mostrarCola() {
      let elementos = [];
      let current = this.front;
      while (current) {
        elementos.push(current.data);
        current = current.next;
      }
      return elementos;
    }
  }
  
  // Instancias de las estructuras
  const tienda = new ListaDobleEnlazada();  // La tienda que gestionará las ventas
  const papelera = new Cola();  // Cola de reciclaje
  
  // Funciones para manejar la página
  
  function registrarVenta() {
    const nombre = prompt("Ingrese los nombres y apellidos del cliente:");
    const descripcion = prompt("Ingrese la descripción del producto:");
    const valorUnitario = parseFloat(prompt("Ingrese el valor unitario del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
  
    if (nombre && descripcion && !isNaN(valorUnitario) && !isNaN(cantidad)) {
      const total = valorUnitario * cantidad;
      const venta = {
        nombre,
        descripcion,
        valorUnitario,
        cantidad,
        total,
      };
  
      // Registrar la venta en la lista
      tienda.insertarVenta(venta);
      alert("Venta registrada exitosamente.");
    } else {
      alert("Por favor, ingrese todos los datos correctamente.");
    }
  }
  
  function verVentas() {
    const ventas = tienda.mostrarVentas();
    const tabla = document.getElementById("ventasTabla");
    tabla.innerHTML = `
      <tr>
        <th>Nombres y Apellidos</th>
        <th>Descripción</th>
        <th>Valor Unitario</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
    `;
    ventas.forEach((venta) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${venta.nombre}</td>
        <td>${venta.descripcion}</td>
        <td>${venta.valorUnitario}</td>
        <td>${venta.cantidad}</td>
        <td>${venta.total}</td>
      `;
      tabla.appendChild(fila);
    });
  }
  
  function borrarVenta() {
    const ventaEliminada = tienda.eliminarVenta();
    if (ventaEliminada) {
      // Encolar la venta eliminada
      papelera.encolar(ventaEliminada);
      alert("Venta eliminada exitosamente.");
    } else {
      alert("No hay ventas registradas para eliminar.");
    }
  }
  
  function verCola() {
    const elementosReciclaje = papelera.mostrarCola();
    const tabla = document.getElementById("reciclajeTabla");
    tabla.innerHTML = `
      <tr>
        <th>Nombres y Apellidos</th>
        <th>Descripción</th>
        <th>Cantidad</th>
      </tr>
    `;
    elementosReciclaje.forEach((elemento) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${elemento.nombre}</td>
        <td>${elemento.descripcion}</td>
        <td>${elemento.cantidad}</td>
      `;
      tabla.appendChild(fila);
    });
  }
  
  function reporte() {
    const ventas = tienda.mostrarVentas();
    const totalesPorCliente = {};
  
    ventas.forEach((venta) => {
      if (!totalesPorCliente[venta.nombre]) {
        totalesPorCliente[venta.nombre] = 0;
      }
      totalesPorCliente[venta.nombre] += venta.total;
    });
  
    const tabla = document.getElementById("reporteTabla");
    tabla.innerHTML = `
      <tr>
        <th>Nombres y Apellidos</th>
        <th>Total de Ventas</th>
      </tr>
    `;
  
    for (const cliente in totalesPorCliente) {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${cliente}</td>
        <td>${totalesPorCliente[cliente]}</td>
      `;
      tabla.appendChild(fila);
    }
  }
  