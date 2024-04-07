document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("miFormulario");
    var progreso = document.getElementById("progreso");
  
  
    formulario.addEventListener("input", function () {
      var inputs = formulario.querySelectorAll("input");
      var completado = 0;
      var total = inputs.length;
  
      inputs.forEach(function (input) {
        if (input.value !== "") {
          completado++;
        }
      });
      var porcentaje = (completado / total) * 100;
      progreso.style.width = porcentaje + "%";
      var color = 'rgb(' + Math.round(255 * (100 - porcentaje) / 100) + ',' + Math.round(255 * porcentaje / 100) + ',0)';
      progreso.style.backgroundColor = color;
  
    });
  });
  