 // Generar un número aleatorio y establecerlo como valor del campo oculto
 document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('solicitudForm');
    var solicitudIdInput = document.getElementById('solicitud_id');
    solicitudIdInput.value = generarNumeroAleatorio();
});

function generarNumeroAleatorio() {
    a=Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 100
    return a+4000;
}