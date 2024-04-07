function limitarLongitud(input) {
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2); // Limitar la longitud a 2 caracteres
    }
}

document.getElementById("numero").addEventListener("input", function() {
    limitarLongitud(this);
});
