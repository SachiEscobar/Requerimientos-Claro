document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtiene los valores de latitud y longitud ingresados por el usuario
    var latitud = parseFloat(document.getElementById("latitud").value);
    var longitud = parseFloat(document.getElementById("longitud").value);
  
    // Verifica si los valores son válidos
    if (isNaN(latitud) || isNaN(longitud)) {
      alert("Por favor ingrese valores numéricos válidos para latitud y longitud.");
      return;
    }
  
    // Inicializa el mapa y establece la vista en las coordenadas ingresadas
    var mymap = L.map('mapid').setView([latitud, longitud], 13);
  
    // Añade una capa de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(mymap);
  
    // Añade un marcador en las coordenadas ingresadas
    L.marker([latitud, longitud]).addTo(mymap)
      .bindPopup('Latitud: ' + latitud + '<br>Longitud: ' + longitud)
      .openPopup();
  });
  