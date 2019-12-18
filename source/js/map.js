var map;
var mapCoordinates;
var markerCoordinates;
var markerImage = {
  url: "img/map-pin.png"
}
var mapZoom;

function initMap() {

  if (window.matchMedia("(min-width: 1300px)").matches) {
    mapCoordinates = { lat: 59.939120, lng: 30.319680 };
    markerCoordinates = { lat: 59.938840, lng: 30.323348 };
    markerImage.scaledSize = new google.maps.Size(124, 106);
    mapZoom = 17;

  } else if (window.matchMedia("(min-width: 768px)").matches) {
    mapCoordinates = { lat: 59.938985, lng: 30.323363 };
    markerCoordinates = { lat: 59.938840, lng: 30.323360 };
    markerImage.scaledSize = new google.maps.Size(124, 106);
    mapZoom = 18;

  } else {
    mapCoordinates = { lat: 59.938840, lng: 30.323368 };
    markerCoordinates = { lat: 59.938720, lng: 30.323348 };
    markerImage.scaledSize = new google.maps.Size(55, 53);
    mapZoom = 16;
  }

  var mapOptions = {
    center: mapCoordinates,
    zoom: mapZoom,
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

google.maps.event.addDomListener(window, "load", initMap);
