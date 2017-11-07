var map
var $miubicacion = { lat: 21.782087,lng: -103.305565}
function initMap() {
    var map = new google.maps.Map(document.getElementById('mapa'), {
        center: $miubicacion,
        scrollwheel: false,
        zoom: 16
    })

    const mimarca = new google.maps.Marker({
        map: map, // la variable que contiene el google.maps.Map
        position: $miubicacion,
        title: "Restaurante Vostro",
        visible: true
    })

    UserLocation.get(function(coords){ // se invoca el método get de UserLocation enviando un objeto para que se retorne la ubicación
        // calcular distancia
        var origen= new google.maps.LatLng(coords.lat,coords.lng)
        var destino= new google.maps.LatLng($miubicacion.lat, $miubicacion.lng)
        var distanceservice = new google.maps.DistanceMatrixService()
        // getDistanceMatrix necesita un objeto de origenes y destinos, y un callback o función
        distanceservice.getDistanceMatrix({
            origins: [origen],// puede aceptar varios origenes y destinos, por eso se pone en un arreglo
            destinations: [destino],
            travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status){ // response es una matriz de distancias de TODOS los origenes a TODOS los destinos
            if (status === google.maps.DistanceMatrixStatus.OK) {
                const distancia = response.rows[0].elements[0] // distancia entre el primer origen y el primer destino
                var distanciatiemposegundos = distancia.duration.value // se obtiene la distancia en tiempo de viaje
                // para mostrar la distancia en tiempo de manera legible, se construye un texto en españo de horas y minutos
                var horas = Math.floor(distanciatiemposegundos / 3600);
                distanciatiemposegundos %= 3600;
                var minutos = Math.floor(distanciatiemposegundos / 60);
                var distanciatiempotexto = horas +" horas y "+ minutos +" minutos"
                $("#mensaje").html('Usted está a '+distanciatiempotexto+', en auto, de distrutar de una excelente comida en <p class="dancing-script text-medium-size">Restaurante Vostro</p>')
            } else {
                alert("No se pudo calcular la distancia desde su ubicación.")
                $("#mensaje").css("display", "none")
            }
        })
    })
}

class UserLocation { // para obtener la ubicación del usuario
    static get (callback) { // callback es un método por el que podemos regresar un objeto
        // verifica que la geolocalización del cliente esté habilitada
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (location){ // funciona como un listener
                callback({ // le estamos poniendo un objeto dentro del callback para retornar las coordenadas
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                })
            })
        }else { // si no se puede
            alert("No se puede obtener tu ubicación, revisa que esté habilitada")
            callback({ // le estamos poniendo un objeto dentro del callback para retornar las coordenadas
                lat: 0,
                lng: 0
            })
        }
    }
}
