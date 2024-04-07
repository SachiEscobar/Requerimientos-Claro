var hora = new Date().getHours();
var mensaje = document.getElementById("mensaje");

if (hora < 12) {
  mensaje.innerHTML = "<strong>BUENOS DIAS USUARIO</strong>";

} else if (hora < 18) {
  mensaje.innerHTML = "<strong>BUENAS TARDES USUARIO</strong>";

} else {
  mensaje.innerHTML = "<strong>BUENAS NOCHES USUARIO</strong>";

}
