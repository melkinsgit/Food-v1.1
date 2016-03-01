var map;
var infowindow;

$('document').ready(function () {

});

$('#message').mousedown(function() {
	//console.log('just clicked down on the message and adding to allIdeas ' + toDoArray[currIndex].msgText);
	//allIdeas.push(toDoArray[currIndex].msgText);
	//console.log('and the array of ideas is ' + allIdeas);
	console.log('adding this to all Ideas array ' + toDoArray[currIndex].msgText);
	addToSubMenu(toDoArray[currIndex]);

	addRow(toDoArray[currIndex]);

	initMap(toDoArray[currIndex].msgText, toDoArray[currIndex].searchFor);

});

// initMap, callback and createMarker from:  https://developers.google.com/maps/documentation/javascript/examples/place-search
function initMap(mapToAdd, searchPhrase) {

	var mapDivs = document.getElementsByClassName(mapToAdd);
	console.log(mapDivs[mapDivs.length - 1]);
	var mapDiv = mapDivs[mapDivs.length - 1];
	console.log('in init map and params are ' + mapToAdd + ' ' + searchPhrase);

	var minneapolis = new google.maps.LatLng(44.9778, -93.2650);

	var mapOptions = {
		center: minneapolis,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	};

	map = new google.maps.Map(mapDiv, mapOptions);

	infowindow = new google.maps.InfoWindow();  // this is where I will get the DATA FROM THE MAP ??
	getJsonData('data.json');  // DOESN'T WORK YET

	var service = new google.maps.places.PlacesService(map);

	service.nearbySearch({
		location: minneapolis,
		radius: 50000,
		keyword: searchPhrase,
		rankby: 'prominence'
	}, callback);
}

function callback(results, status) {  // where results is an array of marker objects that are the result of the search
	if (status === google.maps.places.PlacesServiceStatus.OK) {  // when the search is successful (?)
		for (var i = 0; i < results.length; i++) {
			//console.log(results[i]);
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
		console.log('adding listener to mark where this is ' + this);
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

function getMsgObj(ideaName) {
	//console.log('in get msg obj for ' + ideaName + ' where len of all ideas ' + allIdeas.length);
	//console.log('the array of ideas is ' + allIdeas);
	for (var i = 0; i < toDoArray.length; i++){
		if (toDoArray[i].msgText === ideaName){
			console.log('calling addRow of ' + toDoArray[i].msgText);
			addRow(toDoArray[i]);
			console.log('calling initMap of ' + toDoArray[i].msgText + ' and ' + toDoArray[i].searchFor);
			initMap(toDoArray[i].msgText, toDoArray[i].searchFor);
		}
	}

}
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

	newListItem.addEventListener('click', function () {
		var aItem = this.getElementsByTagName('a');

		// got the var arrayVar = [].slice.call(HTMLCollection) from stackoverflow: http://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
		var aArr = [].slice.call(aItem);
		getMsgObj(aArr[0].innerHTML);
		}
	);

	//$('.newListItem:last-child').on('click', function () {
	//	var thisObj = $(this);
	//	console.log('this object is ' + thisObj);
	//});
}


function addRow (msgObject) {

	var rowBody = document.getElementById('addRows');

	var tableRow = document.createElement('tr');
	var rowStart = document.createElement('th');
	//rowStart.scope = 'row' + msgObject.description;

	var val1 = document.createElement('td');
	//addDropDownToRow (val1);
	var mapVal = document.createElement('td');
	var mapDiv = document.createElement('div');
	//mapDiv.id = msgObject.msgText;
	console.log('mapDiv.id in add row is ' + msgObject.msgText);
	mapDiv.className = 'map ' + msgObject.msgText;
	console.log('new class for map is ' + mapDiv.className);

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