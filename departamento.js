function actualizarDepartamentos() {
  var regionSeleccionada = document.getElementById("Region").value;
  var selectDepartamento = document.getElementById("Departamento");
  selectDepartamento.innerHTML = ''; // Limpiar opciones actuales

  // Agregar opciones de departamentos basadas en la región seleccionada
  if (regionSeleccionada ==="1") {
    agregarOpcion(selectDepartamento, "Atlántico");
    agregarOpcion(selectDepartamento, "Bolívar");
    agregarOpcion(selectDepartamento, "Cesar");
    agregarOpcion(selectDepartamento, "Córdoba");
    agregarOpcion(selectDepartamento, "La Guajira");
    agregarOpcion(selectDepartamento, "Magdalena");
    agregarOpcion(selectDepartamento, "Sucre");
    agregarOpcion(selectDepartamento, "San Andrés");
    // Agrega más departamentos de la región de la Amazonia según sea necesario
  } else if (regionSeleccionada === "2") {
    agregarOpcion(selectDepartamento, "Antioquia");
    agregarOpcion(selectDepartamento, "Caldas");
    agregarOpcion(selectDepartamento, "Chocó");
    agregarOpcion(selectDepartamento, "Quindío");
    agregarOpcion(selectDepartamento, "Risaralda");
    // Agrega más departamentos de la región de la Orinoquía según sea necesario
  }else if (regionSeleccionada === "3") {
    agregarOpcion(selectDepartamento, "Caqueta");
    agregarOpcion(selectDepartamento, "Cauca");
    agregarOpcion(selectDepartamento, "Huila");
    agregarOpcion(selectDepartamento, "Nariño");
    agregarOpcion(selectDepartamento, "Putumayo");
    agregarOpcion(selectDepartamento, "Tolima");
    agregarOpcion(selectDepartamento, "Valle del Cauca");
      // Agrega más departamentos de la región de la Orinoquía según sea necesario
  } else if (regionSeleccionada === "4") {
    agregarOpcion(selectDepartamento, "Bogotá");
    agregarOpcion(selectDepartamento, "Soacha");
    agregarOpcion(selectDepartamento, "Chia");
    agregarOpcion(selectDepartamento, "Facatativá");
    agregarOpcion(selectDepartamento, "Madrid");
    agregarOpcion(selectDepartamento, "Mosquera");
    agregarOpcion(selectDepartamento, "Cajicá");
    agregarOpcion(selectDepartamento, "Cota");
    agregarOpcion(selectDepartamento, "Funza");
    agregarOpcion(selectDepartamento, "La calera");
    agregarOpcion(selectDepartamento, "Sopó");
    agregarOpcion(selectDepartamento, "Tocancipá");
    agregarOpcion(selectDepartamento, "Zipaquirá");
    // Agrega más departamentos de la región Andina según sea necesario
  }else if (regionSeleccionada === "5") {
  agregarOpcion(selectDepartamento, "Región de lo santanderes");
  agregarOpcion(selectDepartamento, "Boyacá");
  agregarOpcion(selectDepartamento, "Otros municipios de Cundinamarca");
  agregarOpcion(selectDepartamento, "Meta");
  agregarOpcion(selectDepartamento, "Territorias Nacionales ");
  // Agrega más departamentos de la región Andina según sea necesario
  }
  // Añade más regiones con sus respectivos departamentos si es necesario
}

function agregarOpcion(select, opcion) {
  var option = document.createElement("option");
  option.text = opcion;
  select.add(option);
}

// Actualizar departamentos al cargar la página
actualizarDepartamentos();
