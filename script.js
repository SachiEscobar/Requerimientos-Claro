document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Escuchar el evento de cambio en cada checkbox
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        // No hacer nada aquí, guardaremos el Excel solo al final
      });
    });
    
    // Función para guardar la selección en un archivo Excel
    function guardarSeleccion() {
      // Crear un nuevo libro de trabajo
      var workbook = XLSX.utils.book_new();
      var worksheet = XLSX.utils.json_to_sheet(obtenerSeleccion());
      
      // Agregar la hoja al libro de trabajo
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Seleccion');
      
      // Guardar el libro de trabajo como archivo Excel
      XLSX.writeFile(workbook, 'seleccion.xlsx');
    }
    
    // Función para obtener las opciones seleccionadas
    function obtenerSeleccion() {
      var seleccion = [];
      checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
          seleccion.push({ Solicitud: checkbox.value });
        }
      });
      return seleccion;
    }
    
    // Escuchar el clic en el botón de guardar Excel
    document.getElementById('guardarExcel').addEventListener('click', function() {
      guardarSeleccion();
    });
  });
  