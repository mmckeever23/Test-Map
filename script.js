function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: {lat: 0, lng: 0},
    gestureHandling: 'greedy'
  });

  const marker = new google.maps.Marker({
    position: {lat: 38.62727, lng: -90.19789},
    map: map,
    icon: "https://img.icons8.com/tiny-color/32/null/map-pin.png",
    draggable: true
  });

  const content = 
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

  const detailWindow = new google.maps.InfoWindow({
    content: content,
  })

  marker.addListener("click", function() {
    detailWindow.open({
      anchor: marker,
      map,
    });
  });
}
