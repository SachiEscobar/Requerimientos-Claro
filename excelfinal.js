// Función para combinar dos archivos de Excel en uno solo
function combinarExcel() {
    // Obtener los datos de las tablas
    var tabla1 = document.getElementById('prueba1').querySelector('table');
    var tabla2 = document.getElementById('prueba2').querySelector('table');

    // Crear un nuevo libro de Excel
    var wb = XLSX.utils.book_new();

    // Convertir las tablas a hojas de cálculo de SheetJS
    var ws1 = XLSX.utils.table_to_sheet(tabla1);
    var ws2 = XLSX.utils.table_to_sheet(tabla2);

    // Agregar las hojas de cálculo al libro
    XLSX.utils.book_append_sheet(wb, ws1, 'Hoja1');
    XLSX.utils.book_append_sheet(wb, ws2, 'Hoja2');

    // Guardar el libro como un archivo de Excel
    XLSX.writeFile(wb, 'excel_combinado.xlsx');
  }