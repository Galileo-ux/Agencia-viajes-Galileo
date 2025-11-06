function calcular() {
    var total = 0;

    var Opciones_de_Vuelo = document.getElementById("Opciones_de_Vuelo").value;

    if (Opciones_de_Vuelo === "sin-avion") {
        total = 999;
    } else if (Opciones_de_Vuelo === "ida") {
        total = 2499;
    } else if (Opciones_de_Vuelo === "ida-vuelta") {
        total = 5999;
    } else {
        alert("Seleccione tipo de vuelo");
        return;
    }

    var Hospedaje = document.getElementById("Hospedaje").value;

    if (Hospedaje === "sin-hotel") {
        total = total + 499;
    } else if (Hospedaje === "sencilla") {
        total = total + 799;
    } else if (Hospedaje === "doble") {
        total = total + 999;
    }

    document.total.value = total;
}
