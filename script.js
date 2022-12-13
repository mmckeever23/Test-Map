function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: {lat: 0, lng: 0},
  });

  const marker = new google.maps.Marker({
    position: {lat: 38.62727, lng: -90.19789},
    map: map,
    draggable: true
  });
}
