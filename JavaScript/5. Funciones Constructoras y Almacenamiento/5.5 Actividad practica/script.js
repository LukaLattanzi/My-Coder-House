class Producto {
    static idCounter = 1;

    constructor(nombre, precio, cantidad) {
        this.id = Producto.idCounter++;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.subtotal = this.calcularSubtotal();
    }

    calcularSubtotal() {
        return this.precio * this.cantidad;
    }
}

const productos = [];

function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));

    const nuevoProducto = new Producto(nombre, precio, cantidad);
    productos.push(nuevoProducto);

    console.log(productos);
}

// Llamar a la función para agregar un producto (puedes llamarla varias veces para agregar más productos)
agregarProducto();