var map;
function initMap() {

var myOptions = { 
           zoom:14,    
          navigationControl: true,     
          scaleControl: true,
           panControl: true,
           center: new google.maps.LatLng(43.6532,-79.3832),
           mapTypeId: google.maps.MapTypeId.ROADMAP
          } 

  map = new google.maps.Map(document.getElementById('map'),myOptions);

  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(43.6532,-79.3832),
      title:"Toronto"
  });

marker.setMap(map);
var searchBox = new google.maps.places.SearchBox(document.getElementById('mapsearch'));
map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('mapsearch'));
google.maps.event.addListener(searchBox, 'places_changed', function() {
searchBox.set('map', null);


var places = searchBox.getPlaces();

var bounds = new google.maps.LatLngBounds();
var i, place;
for (i = 0; place = places[i]; i++) {
 (function(place) {
   var marker = new google.maps.Marker({

     position: place.geometry.location
   });
   marker.bindTo('map', searchBox, 'map');
   google.maps.event.addListener(marker, 'map_changed', function() {
     if (!this.getMap()) {
       this.unbindAll();
     }
   });
   bounds.extend(place.geometry.location);


 }(place));

}
map.fitBounds(bounds);
searchBox.set('map', map);
map.setZoom(Math.min(map.getZoom(),12));

});

}