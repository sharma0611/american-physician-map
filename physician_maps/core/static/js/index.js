var SearchControl = document.getElementById('SBox');
var ColorChange = document.getElementById('color');

function searchbox(num) {
  if(num == "1"){
    SearchControl.style.visibility = "visible";
    SearchControl.style.opacity = "1";
  } else if(num == "0") {
    SearchControl.style.visibility = "hidden";
    SearchControl.style.opacity = "0";
    }
  }

$("#search").submit(function(event) {
// do the extra stuff her
event.preventDefault;
console.log( "Handler for .submit() called." );
var query = $(this).serialize();
$.get("doctorsearch", {'query': query})
  .done(function(data){
    var latlng = new google.maps.LatLng(data.latitude, data.longitude);
    marker.setPosition(latlng);
  })
})

$("#search").keydown(function(event) {
// do the extra stuff her
if (event.keyCode == 13) {
	event.preventDefault();
	console.log( "Handler for .submit() called." );
	var query = $(this).serialize();
	$.get("doctorsearch", {'query': query})
	  .done(function(data){
	    var latlng = new google.maps.LatLng(data.latitude, data.longitude);
	    marker.setPosition(latlng);
	    map.panTo(latlng);
	  })
}
})
