document.getElementById("iniciarSimulador").addEventListener("click", function () {
    const categorias = ["Ingresos Mensuales", "Alquiler", "Comida", "Transporte", "Otros"];
    let datos = {};
    let resultadosLista = document.getElementById("resultadosLista");

    // Limpia la lista de resultados antes de empezar
    resultadosLista.innerHTML = "";

    // Obtención de datos con prompt
    categorias.forEach((categoria) => {
        let valor;
        do {
            valor = parseFloat(prompt(`Ingresa el valor para ${categoria}:`));
            if (isNaN(valor) || valor < 0) {
                alert("Por favor, ingresa un número válido.");
            }
        } while (isNaN(valor) || valor < 0);

        datos[categoria] = valor;

        // Mostrar los valores ingresados en la lista
        let item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = `${categoria}: $${valor.toFixed(2)}`;
        resultadosLista.appendChild(item);
    });

    // Cálculo de resultados
    const totalGastos =
        datos["Alquiler"] + datos["Comida"] + datos["Transporte"] + datos["Otros"];
    const ahorro = datos["Ingresos Mensuales"] - totalGastos;

    // Mostrar resumen
    document.getElementById("totalGastos").textContent = totalGastos.toFixed(2);
    document.getElementById("ahorro").textContent = ahorro.toFixed(2);

    const mensajeElement = document.getElementById("mensaje");
    if (ahorro > 0) {
        mensajeElement.textContent = "¡Buen trabajo! Tienes un ahorro positivo este mes.";
    } else {
        mensajeElement.textContent = "Cuidado, tus gastos superan tus ingresos.";
    }

    document.getElementById("resumen").style.display = "block";
});