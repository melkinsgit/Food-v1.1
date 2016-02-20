/**
 * Created by Margaret on 2/20/2016.
 */

// intiMap is originally from portions of my Lab 04 Pt04 Adv initMap method

//function initMap () {
//
//    // get the map element of the current
//    var mapDiv = document.getElementById("map");
//
//    var mapOptions = {
//        center: new google.maps.LatLng(startMap.lat, startMap.long),
//        zoom: startMap.zoom,
//        //mapTypeControlOptions: {
//        mapTypeId: ROADMAP
//        //}
//    }
//    //And create the map, with the options specified
//    map = new google.maps.Map(mapDiv, mapOptions);
//
//} // end initMap



// from google api:  https://developers.google.com/places/javascript/
function initialize() {

    var mapDiv = document.getElementById("map");

    var pyrmont = new google.maps.LatLng(-33.8665, 151.1956);

    var mapOptions = {
        center: pyrmont,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        //scrollwheel: false
    };

    var map = new google.maps.Map(mapDiv, mapOptions);

    // Specify location, radius and place types for your Places API search.
    //var request = {
    //    location: pyrmont,
    //    radius: '500',
    //    types: ['dance class']
    //};

    // Create the PlaceService and send the request.
    // Handle the callback with an anonymous function.
    //var service = new google.maps.places.PlacesService(map);
    //service.nearbySearch(request, function(results, status) {
    //    if (status == google.maps.places.PlacesServiceStatus.OK) {
    //        for (var i = 0; i < results.length; i++) {
    //            var place = results[i];
    //            // If the request succeeds, draw the place location on
    //            // the map as a marker, and register an event to handle a
    //            // click on the marker.
    //            var marker = new google.maps.Marker({
    //                map: map,
    //                position: place.geometry.location
    //            });
    //        }
    //    }
    //});
}

// Run the initialize function when the window has finished loading.
//google.maps.event.addDomListener(window, 'load', initialize);