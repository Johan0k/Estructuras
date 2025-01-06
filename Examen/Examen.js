
class Registro {
    constructor(nombre, descripcion, valorUnitario, cantidad) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valorUnitario = valorUnitario;
        this.cantidad = cantidad;
        this.total = valorUnitario * cantidad; 
    }
}


class Ventas {
    constructor() {
        this.ventas = []; 
    }

  
    agregarVenta(venta) {
        this.ventas.push(venta);
    }

    borrarVenta() {
        return this.ventas.pop();
    }

   
    obtenerVentas() {
        return this.ventas;
    }
}


class Cola {
    constructor() {
        this.reciclaje = []; 
    }

 
    enqueue(venta) {
        this.reciclaje.push(venta);
    }

  
    obtenerReciclaje() {
        return this.reciclaje;
    }
}


const ventas = new Ventas();
const reciclaje = new Cola();


function AgregarVenta() {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const valorUnitario = parseFloat(document.getElementById('valoru').value);
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!nombre || !descripcion || isNaN(valorUnitario) || isNaN(cantidad)) {
        document.getElementById('mensajeError').innerText = "Por favor, complete todos los campos correctamente.";
        return;
    }

  
    const nuevaVenta = new Registro(nombre, descripcion, valorUnitario, cantidad);
    ventas.agregarVenta(nuevaVenta);


    document.getElementById('nombre').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('valoru').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('mensajeError').innerText = '';

   
    verVentas();
}


function verVentas() {
    const tbody = document.getElementById('TablaVentas').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; 

    const ventasLista = ventas.obtenerVentas();
    ventasLista.forEach((venta) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${venta.nombre}</td>
            <td>${venta.descripcion}</td>
            <td>${venta.valorUnitario}</td>
            <td>${venta.cantidad}</td>
            <td>${venta.total}</td>
        `;
        tbody.appendChild(row);
    });
}


function BorrarVenta() {
    const ventaBorrada = ventas.borrarVenta();
    if (ventaBorrada) {
        reciclaje.enqueue(ventaBorrada);
      
        verVentas();
        verReciclaje();
        document.getElementById('mensajeError').innerText = `Venta eliminada: ${ventaBorrada.nombre} - ${ventaBorrada.descripcion}`;
    } else {
        document.getElementById('mensajeError').innerText = "No hay ventas para borrar.";
    }
}


function verReciclaje() {
    const tbody = document.getElementById('ColaReciclaje').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; 

    const reciclajeLista = reciclaje.obtenerReciclaje();
    reciclajeLista.forEach((venta) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${venta.nombre}</td>
            <td>${venta.descripcion}</td>
            <td>${venta.cantidad}</td>
        `;
        tbody.appendChild(row);
    });
}


function reporteVentas() {
    const ventasLista = ventas.obtenerVentas();
    const reporte = {};

 
    ventasLista.forEach((venta) => {
        if (!reporte[venta.nombre]) {
            reporte[venta.nombre] = 0;
        }
        reporte[venta.nombre] += venta.total;
    });

    const tbody = document.getElementById('Reporte').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; 

    for (const cliente in reporte) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cliente}</td>
            <td>${reporte[cliente]}</td>
        `;
        tbody.appendChild(row);
    }
}
