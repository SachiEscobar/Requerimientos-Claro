// function guardarEnExcel(nombre, proyecto, correo, Region, Departamento) {
//   // Obtener los datos del formulario actual
//   var datosActuales = [{ Nombre: document.getElementById('nombre').value, 
//                          Proyecto: document.getElementById('proyecto').value, 
//                          Correo: document.getElementById('correo').value, 
//                          Region: document.getElementById('Region').value, 
//                          Departamento: document.getElementById('Departamento').value }];

//   // Combinar los datos actuales con los datos adicionales
//   var nuevosDatos = datosActuales.concat([{ Nombre: nombre, Proyecto: proyecto, Correo: correo, Region: Region, Departamento: Departamento }]);

//   // Crear un libro de Excel
//   var workbook = XLSX.utils.book_new();
//   var hoja = XLSX.utils.json_to_sheet(nuevosDatos);
//   XLSX.utils.book_append_sheet(workbook, hoja, 'Datos');

//   // Guardar el archivo Excel
//   XLSX.writeFile(workbook, 'Parte1.xlsx');
// }

function guardarEnExcel() {
  const formData = new FormData(document.getElementById('miFormulario'));
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });

  // Almacenar los datos en el almacenamiento local
  localStorage.setItem('formData', JSON.stringify(data));
   // Mostrar los datos almacenados en la consola
   console.log('Datos almacenados en localStorage:', data); 
  // Redireccionar a la segunda página
  window.location.href = 'Empresas&Negocios.html';
}

