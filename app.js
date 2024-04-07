document.addEventListener('DOMContentLoaded', function() {
    var botonMostrar = document.getElementById('mostrarLista');
    var listaOculta = document.getElementById('listaOculta');
  
    botonMostrar.addEventListener('click', function() {
      // Alternar la visibilidad de la lista al hacer clic en el botón
      if (listaOculta.classList.contains('oculto')) {
        listaOculta.classList.remove('oculto');
      } else {
        listaOculta.classList.add('oculto');
      }
    });
  });
  