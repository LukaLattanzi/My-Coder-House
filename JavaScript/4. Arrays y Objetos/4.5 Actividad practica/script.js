// Array para agrupar productos
let productos = [
    { nombre: "Manzana", precio: 1.2 },
    { nombre: "Pan", precio: 0.8 },
    { nombre: "Leche", precio: 1.5 }
];

// Función para mostrar los productos en el HTML
function mostrarProductos() {
    const lista = document.getElementById("productos-lista");
    lista.innerHTML = ""; // Limpiamos el contenido anterior
    productos.forEach((producto, index) => {
        lista.innerHTML += `<p>${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}</p>`;
    });
}

// Función para agregar un producto al array
function agregarProducto() {
    const nombre = document.getElementById("producto-nombre").value;
    const precio = parseFloat(document.getElementById("producto-precio").value);

    if (nombre && !isNaN(precio)) {
        productos.push({ nombre, precio }); // Agregamos al array
        mostrarProductos(); // Actualizamos la lista en el HTML
        alert("Producto agregado correctamente.");
    } else {
        alert("Por favor, completa ambos campos correctamente.");
    }
}

// Inicializamos la lista al cargar la página
mostrarProductos();
