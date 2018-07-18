var SearchControl = document.getElementById('SBox');
var ColorChange = document.getElementById('color');

$("#searchclick").click(function(event) {
// do the extra stuff her
event.preventDefault();
console.log( "Handler for .submit() called." );
var query = $(document.getElementById('search')).val();

$.get("doctorsearch", {'query': query})
  .done(function(data){
	    var latlng = new google.maps.LatLng(data.latitude, data.longitude);
	    if (activeInfoWindow) { activeInfoWindow.close();}
	    marker.setPosition(latlng);
	    map.panTo(latlng);
	    map.setZoom(13);
	    var contentString = '<div class="info-window"> <h2>' + data.title + '</h2>';
	    contentString = contentString + '<h3>' +  data.body + ' </h3> </div>';
	    var infowindow = new google.maps.InfoWindow();
	    infowindow.setContent(contentString);
            infowindow.open(map, marker);
	  activeInfoWindow = infowindow;
	$('#search').autocomplete('close');
  });
$('#search').autocomplete('close');
});

$(document).ready(function() {
$("#search").keydown(function(event) {
// do the extra stuff her
if (event.keyCode == 13) {
	event.preventDefault();
	console.log( "Handler for .submit() called." );
	var query = $(this).val();
	$.get("doctorsearch", {'query': query})
	  .done(function(data){
	    setTimeout(function() {$('#search').autocomplete('close');}, 1000);
	    var latlng = new google.maps.LatLng(data.latitude, data.longitude);
	    if (activeInfoWindow) { activeInfoWindow.close();}
	    marker.setPosition(latlng);
	    map.panTo(latlng);
	    map.setZoom(13);
	    var contentString = '<div class="info-window"> <h2>' + data.title + '</h2>';
	    contentString = contentString + '<h3>' +  data.body + ' </h3> </div>';
	    var infowindow = new google.maps.InfoWindow();
	    infowindow.setContent(contentString);
            infowindow.open(map, marker);
		  activeInfoWindow = infowindow;
	  });
	    $('#search').autocomplete('close');
}
});
});
$(document).ready(function() {
  $("#search").autocomplete({
    autofocus: true,
    source: "get_doctors",
    minLength: 2,
  });
});

