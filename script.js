function calcular() {
    var total = 0;

    // VUELO (lee el radio seleccionado)
    var vuelo = document.querySelector('input[name="vuelo"]:checked');
    if (vuelo == null) {
        alert("Selecciona una opción de vuelo");
        return;
    }
    if (vuelo.value == "sin-avion") {
        total = 999;
    } else if (vuelo.value == "ida") {
        total = 2499;
    } else if (vuelo.value == "ida-vuelta") {
        total = 5999;
    }

    // HOSPEDAJE
    var hotel = document.querySelector('input[name="hospedaje"]:checked');
    if (hotel == null) {
        alert("Selecciona una opción de hospedaje");
        return;
    }
    if (hotel.value == "sin-hotel") {
        total = total + 499;
    } else if (hotel.value == "sencilla") {
        total = total + 799;
    } else if (hotel.value == "doble") {
        total = total + 999;
    }

    // ADULTOS (select siempre tiene valor en tu HTML)
    var adultos = Number(document.getElementById("adultos").value);
    total = total + (865 * adultos);

    // MENORES
    var menores = Number(document.getElementById("menores").value);
    total = total + (437 * menores);

   // DÍAS (comprobación simple)
var dias = document.getElementById("dias-individual").value;

if (dias == "") {
    alert("Ingresa el número de días");
    return;
}

dias = Number(dias);

if (dias < 1) {
    alert("Ingresa un número válido de días (mínimo 1)");
    return;
}

total = total + (769 * dias);


    // Mostrar total en el <p id="ind-total">
    document.getElementById("ind-total").textContent = "Total: $" + total.toLocaleString("es-MX") + " MXN";
}


function calcularPaquetes() {
    var total = 0;

    // DESTINO TURÍSTICO
    var destino = document.querySelector('input[name="destino"]:checked');
    if (destino == null) {
        alert("Selecciona un destino");
        return;
    }

    if (destino.value == "suramerica") {
        total = 7999;
    } else if (destino.value == "europa") {
        total = 21999;
    } else if (destino.value == "africa") {
        total = 17999;
    } else if (destino.value == "asia") {
        total = 25999;
    } else if (destino.value == "norteamerica") {
        total = 12999;
    }

    // DÍAS
    var dias = document.getElementById("dias-paquete").value;
    if (dias == "" || dias == 0) {
        alert("Ingresa el número de días");
        return;
    }
    total = total + (dias * 899);

    // PAQUETE ESPECIAL
    var especial = document.querySelector('input[name="especial"]:checked');
    if (especial != null) {
        total = total + 19999;
    }

    // EXTRAS
    var extras = document.querySelectorAll('input[name="extras"]:checked');
    var cantidadExtras = extras.length;
    total = total + (cantidadExtras * 699);

    // MOSTRAR TOTAL EN ALERT
    alert("Total del Paquete: $" + total + " MXN");
}
