function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var proyecto = document.getElementById("proyecto").value;
    var correo = document.getElementById("correo").value;
    var Region = document.getElementById("Region").value;
    var Departamento = document.getElementById("Departamento").value;
    var EB = document.getElementById("EB").value;
    // Verificar si algún campo está vacío
    if (nombre == "" || proyecto == "" || correo == "" || Region == "" || Departamento == "" || EB == "") {
        // Mostrar un mensaje de error
        alert("Por favor, complete todos los campos.");
        return false; // Impedir que el formulario se envíe
    }

    return true; // Permitir que el formulario se envíe
}