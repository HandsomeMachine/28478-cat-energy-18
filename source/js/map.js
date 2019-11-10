var map;
var mapCoordinates = { lat: 59.938905, lng: 30.319311 };
var markerCoordinates = { lat: 59.938874, lng: 30.323529 };
var markerImage = 'img/map-pin.png';

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: mapCoordinates,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: markerCoordinates,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: markerImage
  });
}
