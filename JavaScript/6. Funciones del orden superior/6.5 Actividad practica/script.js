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

// Función para agregar productos al array
function agregarProducto(nombre, precio, cantidad) {
    const nuevoProducto = new Producto(nombre, precio, cantidad);
    productos.push(nuevoProducto);
}

// Función para buscar un producto por nombre
function buscarProducto(nombre) {
    const producto = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (producto) {
        console.log("Producto encontrado:", producto);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para filtrar productos por un criterio
function filtrarProductos(criterio, valor) {
    let productosFiltrados;

    switch (criterio.toLowerCase()) {
        case 'nombre':
            productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(valor.toLowerCase()));
            break;
        case 'precio':
            productosFiltrados = productos.filter(p => p.precio <= parseFloat(valor));
            break;
        case 'cantidad':
            productosFiltrados = productos.filter(p => p.cantidad >= parseInt(valor));
            break;
        default:
            console.log("Criterio no válido.");
            return;
    }

    console.log("Productos filtrados:", productosFiltrados);
}

// Función para actualizar precios agregando IVA
function actualizarPrecios(iva) {
    const productosActualizados = productos.map(p => {
        return {
            ...p,
            precio: p.precio * (1 + iva / 100),
            subtotal: p.calcularSubtotal()
        };
    });

    console.log("Productos con precios actualizados:", productosActualizados);
}

// Ejemplo de uso
agregarProducto("Producto 1", 100, 2);
agregarProducto("Producto 2", 200, 3);
agregarProducto("Producto 3", 150, 1);

console.log("Array de productos inicial:", productos);

buscarProducto("Producto 2");

filtrarProductos("nombre", "Producto");
filtrarProductos("precio", "150");
filtrarProductos("cantidad", "2");

actualizarPrecios(21);