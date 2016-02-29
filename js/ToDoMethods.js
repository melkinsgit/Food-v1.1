var map;
var infowindow;

$('document').ready(function () {

});

// initMap, callback and createMarker from:  https://developers.google.com/maps/documentation/javascript/examples/place-search
function initMap(mapToAdd, searchPhrase) {

	var mapDiv = document.getElementById(mapToAdd);

	var minneapolis = new google.maps.LatLng(44.9778, -93.2650);

	var mapOptions = {
		center: minneapolis,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	};

	map = new google.maps.Map(mapDiv, mapOptions);

	infowindow = new google.maps.InfoWindow();  // this is where I will get the DATA FROM THE MAP ??
	getJsonData('data.json');

	var service = new google.maps.places.PlacesService(map);

	//console.log('the search phrase is ' + searchPhrase);
	service.nearbySearch({
		location: minneapolis,
		radius: 50000,
		//types: ['store']
		keyword: searchPhrase,
		rankby: 'prominence'
	}, callback);
}

function callback(results, status) {
	if (status === google.maps.places.PlacesServiceStatus.OK) {
		console.log('results length is ' + results.length);
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i]);
		}
	}
}

function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(place.name);
		infowindow.open(map, this);
	});
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

	addRow(toDoArray[currIndex]);

	initMap(toDoArray[currIndex].msgText, toDoArray[currIndex].searchFor);

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

function addRow (msgObject) {

	var rowBody = document.getElementById('addRows');

	var tableRow = document.createElement('tr');
	var rowStart = document.createElement('th');
	//rowStart.scope = 'row' + msgObject.description;
	var val1 = document.createElement('td');
	var mapVal = document.createElement('td');
	var mapDiv = document.createElement('div');
	mapDiv.id = msgObject.msgText;
	mapDiv.className = 'map';

	val1.innerHTML = msgObject.msgText;
	tableRow.appendChild(rowStart);
	tableRow.appendChild(val1);

	mapVal.appendChild(mapDiv);
	tableRow.appendChild(mapVal);


	rowBody.appendChild(tableRow);

}

function getJsonData (filename) {

	map.data.loadGeoJson(filename);

}