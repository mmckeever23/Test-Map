function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: {lat: 0, lng: 0},
    mapTypeId: 'roadmap',
    gestureHandling: 'greedy'
  });

  
//Droppable pins//

  google.maps.event.addListener(map, 'click', function (event) {
    new google.maps.Marker({
        position: event.latLng,
        map: map,
        icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
        draggable: true
    });
});


//Pin with a form//

  let marker = new google.maps.Marker({
    position: {lat: 38.6272700, lng: -90.1978900},
    map: map,
    icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
    draggable: true
  })

  let content = 
  "<h2>Create New Pin</h2>" +
    "<form>" +
      "<label>Location: </label>" +
      "<input type='text' required><br>" +
      "<br>" +
      "<label>Date Arrived: </label>" +
      "<input type='date' required><br>" +
      "<br>" +
      "<label>Date Departed: </label>" +
      "<input type='date' required><br>" +
      "<br>" +
      "<label>Companions: </label><br>" +
      "<input type='checkbox'>" +
      "<label>Mom</label><br>" +
      "<input type='checkbox'>" +
      "<label>Dad</label><br>" +
      "<input type='checkbox'>" +
      "<label>Julie</label><br>" +
      "<p style='margin-left: 13px'>+ Add Companion</p>" +
      "<label>Details: </label><br>" +
      "<textarea placeholder='What did you do there?' rows='10' cols='29'></textarea><br>" +
      "<br>" +
      "<input type='submit' value='Create Pin'>" +
      "<br>" +
    "</form>"

  let infoWindow = new google.maps.InfoWindow({
    content: content,
  })
  
  marker.addListener("click", function() {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });


//Multiple pins stored as objects//

  let firstLocation = {
    info: '<h2>Sydney, Australia</h2>\
          <h4>Home of the Sydney Opera House</h4>',
    lat: -33.8678500,
    long: 151.2073200
  }

  let secondLocation = {
    info: '<h2>Paris, France</h2>\
          <h4>Home of the Eiffel Tower</h4>',
    lat: 48.8534100,
    long: 2.3488000
  }

  let locations = [
    [firstLocation.info, firstLocation.lat, firstLocation.long, 0],
    [secondLocation.info, secondLocation.lat, secondLocation.long, 1]
  ]

  let pin, i

  for (i = 0; i < locations.length; i++) {
    pin = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
      draggable: true,
      map: map,
    })
  }

}
