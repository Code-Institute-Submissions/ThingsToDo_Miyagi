// marker clustering //

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

  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
 var locations = [
      {lat: 38.1365, lng: 140.4495},
      {lat: 38.9608, lng: 140.7882},
      {lat: 38.7296, lng: 140.6908},
      {lat: 38.5889, lng: 141.0984},
      {lat: 38.4717, lng: 140.8864},
      {lat: 38.1853, lng: 140.6719},
      {lat: 38.1267, lng: 140.5287},
      {lat: 38.7869, lng: 140.6394},
      {lat: 38.4188, lng: 140.7230}
  ]

// Filter table: taken from https://www.w3schools.com/howto/howto_js_filter_table.asp //
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
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
    