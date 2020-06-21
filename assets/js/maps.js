function initMap() {
 var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: {lat: 38.6306, lng: 141.1193}
  });

 var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 var markers = locations.map(function(location, i) {
         return new google.maps.Marker({
         position: location,
         label: labels[i % labels.length]   
        });
 });

 var locations = [
     {marker: {lat: 38.1365, lng: 140.4495}, description: "Kurikomayama"}, 
     {marker: {lat: 38.9608, lng: 140.7882}, description: "Naruko Gorge"},
     {marker: {lat: 38.7296, lng: 140.6908}, description: "Zao Okama"},
     {marker: {lat: 38.5889, lng: 141.0984}, description: "Kagobo Park Golf Course"},
     {marker: {lat: 38.4717, lng: 140.8864}, description: "Manyo Create Park"},
     {marker: {lat: 38.1853, lng: 140.6719}, description: "Michinoku Park"},
     {marker: {lat: 38.1267, lng: 140.5287}, description: "Onikuobe"},
     {marker: {lat: 38.7869, lng: 140.6394}, description: "Spring Valley"},
     {marker: {lat: 38.4188, lng: 140.7230}, description: "Zao Eboshi Ski Resort"}
];


   // infoWindows 
   var  infowindow = new google.maps.InfoWindow();

 //  var request = {
  //  location: 'location',
 //   fields: ['name', 'geometry'],
 // };

   var service = new google.maps.places.PlacesService(map);

       service.findPlaceFromQuery(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
                 }
               map.setCenter(results[0].geometry.location);
            }
        });

    // suggestion from my mentor Rohit Sharma  
   function createMarker(place) {
      var markers = locations.map(function(location, i) {
          marker =  new google.maps.Marker({
            position: location.marker,
            label: labels[i % labels.length]
          });

          google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + location.description + '</strong><br></div>');
              infowindow.open(map, this);
            });
          return marker;
         }); 
    }

    // marker clustering by google map
     var markerCluster = new MarkerClusterer(map, markers,
          {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


}

// Filter table: taken from https://www.w3schools.com/howto/howto_js_filter_table.asp 
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchActivities");
  filter = input.value.toUpperCase();
  table = document.getElementById("activitiesTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
         txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
       }
    }
  }
}