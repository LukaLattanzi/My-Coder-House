// Función para solicitar los datos de entrada

function solicitarNombreUno() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    return { nombre, apellido };
}

const solicitarNombreDos = () => {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    return { nombre, apellido };
}

const solicitarNombreTres = function () {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    return { nombre, apellido };
}

// Función para procesar la información obtenida

function procesarNombresUno(datos) {
    let nombreCompleto = datos.nombre + " " + datos.apellido;
    return nombreCompleto;
}

const procesarNombresDos = (datos) => {
    let nombreCompleto = datos.nombre + " " + datos.apellido;
    return nombreCompleto;
}

const procesarNombresTres = function (datos) {
    let nombreCompleto = datos.nombre + " " + datos.apellido;
    return nombreCompleto;
}

// Función para mostrar el resultado final

function mostrarNombreCompletoUno(nombreCompleto) {
    console.log("Nombre completo: " + nombreCompleto);
}

const mostrarNombreCompletoDos = (nombreCompleto) => {
    console.log("Nombre completo: " + nombreCompleto);
}

const mostrarNombreCompletoTres = function (nombreCompleto) {
    console.log("Nombre completo: " + nombreCompleto);
}

// Llamadas a las funciones en el orden correcto

const datosUno = solicitarNombreUno();
const datosDos = solicitarNombreDos();
const datosTres = solicitarNombreTres();

const nombreCompletoUno = procesarNombresUno(datosUno);
const nombreCompletoDos = procesarNombresDos(datosDos);
const nombreCompletoTres = procesarNombresTres(datosTres);

mostrarNombreCompletoUno(nombreCompletoUno);
mostrarNombreCompletoDos(nombreCompletoDos);
mostrarNombreCompletoTres(nombreCompletoTres);