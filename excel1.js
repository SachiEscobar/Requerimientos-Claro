function combinarYGuardar() {
  // Obtener los datos del almacenamiento local
  const formData1 = JSON.parse(localStorage.getItem('formData'));

  // Obtener los datos del segundo formulario
  const formData2 = new FormData(document.getElementById('miFormulario'));
  const data2 = {};
  formData2.forEach((value, key) => {
      data2[key] = value;
  });

  // Combinar los datos de ambos formularios
  const combinedData = { ...formData1, ...data2 };

  // Generar el archivo Excel
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet([combinedData]);

  // Agregar la hoja de cálculo al libro
  XLSX.utils.book_append_sheet(wb, ws, "Datos Combinados");

  // Guardar el archivo Excel
  XLSX.writeFile(wb, "Formulario_Final.xlsx");
}