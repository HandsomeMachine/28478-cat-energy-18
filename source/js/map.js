var map;
var mapCoordinates = { lat: 59.93879, lng: 30.323199 };
var markerCoordinates = { lat: 59.93879, lng: 30.323199 };
var markerImage = "img/map-pin.png";

function initMap() {
  var mapOptions = {
    center: mapCoordinates,
    zoom: 17,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    zoomControlOptions: { position: google.maps.ControlPosition.LEFT_TOP },
    streetViewControl: false
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
    position: markerCoordinates,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "ул. Большая Конюшенная, д. 19/8",
    icon: markerImage
  });
}

document.addEventListener("DOMContentLoaded", initMap);
