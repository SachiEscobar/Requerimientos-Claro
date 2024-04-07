       function initMap() {
            const mapElement = document.getElementById('map');
            const latInput = document.getElementById('latitud');
            const lngInput = document.getElementById('longitud');
            const mapForm = document.getElementById('mapForm');

            mapForm.addEventListener('button', function(event) {
                event.preventDefault();
                const lat = parseFloat(latInput.value);
                const lng = parseFloat(lngInput.value);

                if (isNaN(lat) || isNaN(lng)) {
                    alert('Por favor, introduce valores válidos para latitud y longitud.');
                    return;
                }

                const map = new google.maps.Map(mapElement, {
                    center: { lat: lat, lng: lng },
                    zoom: 8
                });

                const marker = new google.maps.Marker({
                    position: { lat: lat, lng: lng },
                    map: map
                });
            });
        }