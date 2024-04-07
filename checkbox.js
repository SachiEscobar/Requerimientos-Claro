function obtenerSeleccion() {
    var actividades = [];
    var tabla = document.getElementById("actividadesBody");
    var filas = tabla.getElementsByTagName("tr");
    for (var i = 0; i < filas.length; i++) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "actividad";
        checkbox.value = filas[i].getElementsByTagName("td")[0].textContent;

        var celda = document.createElement("td");
        celda.appendChild(checkbox);
        filas[i].appendChild(celda);

        if (checkbox.value !== "") {
            actividades.push(checkbox.value);
        }
    }
    console.log(actividades);
    // Aquí puedes hacer lo que quieras con el array "actividades"
    // Por ejemplo, enviarlo a un servidor o mostrarlo en la página

    // Deshabilitar el botón después de hacer clic
    document.getElementById("btnSeleccion").disabled = true;
}