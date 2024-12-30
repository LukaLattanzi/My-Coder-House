function ejemploFor() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar el contenido previo

    for (let i = 0; i < 5; i++) {
        numero += 1;
        output.innerHTML += `Resultado de la suma: ${numero}<br>`;
    }
}

function ejemploWhile() {
    let texto = prompt("Ingresa un texto:");
    let output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar el contenido previo

    while (texto !== "ESC") {
        texto += " concatenado";
        output.innerHTML += `Resultado de la concatenación: ${texto}<br>`;
        texto = prompt("Ingresa un texto (o ESC para salir):");
    }
}

function ejemploHola() {
    let numero = parseInt(prompt("Ingresa un número:"));
    let output = document.getElementById("output");
    output.innerHTML = ""; // Limpiar el contenido previo

    for (let i = 0; i < numero; i++) {
        output.innerHTML += "Hola<br>";
    }
}