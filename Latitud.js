function validarDecimal(input) {
    // Reemplazar cualquier coma por un punto
    input.value = input.value.replace(',', '.');

    // Obtener el valor ingresado
    var valor = input.value;
    var errorMessage = document.getElementById("errorMessage");

    // Validar si el valor es un número decimal
    if (isNaN(valor) || valor.trim() === '' || valor.indexOf('.') === -1) {
        // Si no es un número decimal válido, mostrar un mensaje de error
        errorMessage.textContent = 'Ingrese un valor decimal válido.';
    } else {
        // Si es un número decimal válido, borrar el mensaje de error
        errorMessage.textContent = '';
    }
}