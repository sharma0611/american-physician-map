//function to query api on submit & update google maps with values
function submitquery(event) {
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
			contentString = contentString + '<h4>' +  data.body + ' </h4> </div>';
			var infowindow = new google.maps.InfoWindow();
			infowindow.setContent(contentString);
			infowindow.open(map, marker);
			activeInfoWindow = infowindow;
		});
	$('#search').autocomplete('disable');
	$('#search').autocomplete('close');
}

//functions to use when document is ready
$(document).ready(function() {

	// On clicking search button, submit query
	$("#searchbutton").click(function(event) {
		submitquery(event);
	});

	// On hitting enter, submit query, otherwise enable autocomplete
	$("#search").keydown(function(event) {
		if (event.keyCode == 13) {
			submitquery(event);
		} else {
			$('#search').autocomplete('enable');
		}
	});

	// Attach jquery autocomplete to search input div
	$("#search").autocomplete({
		source: "get_doctors",
		minLength: 2,
		autoFocus: true,
		select: function( event, ui ) {
			event.preventDefault();
			$( "#search" ).val( ui.item.value );
			submitquery(event);
		},
	});

});


// The latitude and longitude of your business / place
var position = [40.850033, -97.6500523];
var activeInfoWindow;

function initMap() {

    var latLng = new google.maps.LatLng(position[0], position[1]);

    var mapOptions = {
        zoom: 5, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latLng
    };

    map = new google.maps.Map(document.getElementById('googlemaps'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: (null, null),
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);

