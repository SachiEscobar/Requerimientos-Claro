// Obtener referencia al formulario y al campo de entrada de operador
var formulario = document.getElementById("miFormulario");
var operadorInput = document.getElementById("operador");

// Agregar un listener para el evento de cambio en el campo de entrada del operador
operadorInput.addEventListener("change", function () {
  // Obtener el valor del operador
  var operador = parseInt(operadorInput.value);

  // Definir el correo electrónico predeterminado
  var correoElectronico = "santiago.esc23@hotmail.com";

  // Verificar el valor del operador y actualizar el correo electrónico en consecuencia
  if (operador === 1) {
    correoElectronico = "santiago.esc23@hotmail.com";
  } else if (operador === 2) {
    correoElectronico = "samucastcam@gmail.com";

  }

  // Actualizar el atributo 'action' del formulario con el correo electrónico correspondiente
  formulario.action = "https://formsubmit.co/" + correoElectronico;
});