function initMap() {

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

//google.maps.event.addDomListener(window, 'load', initialize);

function GetToDo()
{
	// I turned the array of strings into an array of objects
	currIndex = Math.floor(Math.random() * toDoArray.length);
	randomActivity = toDoArray[currIndex].msgText;
	$('#message').text(randomActivity);  // I rewrote in jQuery
   
}

// This is Kweku's function; I removed a toggle feature that I didn't need
$('.btn').click(function(){
		var $this = $(this);
		$this.text('Something Else ...');

	});

// This is Kweku's function; I changed the if statement from js to jQuery
function randomize(){
	$('#message').css({"color": randomColors()});  // I rewrote in jQuery
}

// This is Kweku's, I also found it on the web here:  http://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColors(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// This is Kweku's function; I changed the if statement from js to jQuery
function getName(){
	var person = prompt("What is your name?", "");
	if(person != null){
		$('#name').text(person + ", click the button to enliven your existence!");
	}
	
}

$('#message').mousedown(function() {

	addToSubMenu(toDoArray[currIndex]);
	getMap(toDoArray[currIndex]);

});

function addToSubMenu (msgObject) {

	// get the text of the users choice var
	var currentIdea = msgObject.msgText;

	// get the dropdown ul tag var from the type property of the object
	var theDropDown = document.getElementById(msgObject.type);

	// get the parent node, which is the menu header ul tag
	var theMenu = theDropDown.parentNode;

	// create a new li tag var that will go under dropdown ul var
	var newListItem = document.createElement('li');

	// create a new a tag var and give an href val of #, to show it's clickable
	var newAttribute = document.createElement('a');
	newAttribute.href = '#';
	// put the users choice text into the a tag
	newAttribute.innerHTML = currentIdea;

	// add the a tag to the new li and the new li to the ul dropdown menu
	newListItem.appendChild(newAttribute);
	theDropDown.appendChild(newListItem);
}

function getMap (msgObject) {

	console.log('the ojbect is ' + msgObject);

	//initialize();
}
