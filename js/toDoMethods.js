// declaring global vars for access in various functions
var map;
var infowindow;
var service;
var currIndex;
var placesIPicked = [];

$('document').ready(function () {
	//getName();
});

// when the user clicks/chooses a phrase describing something to do, which is in a d iv with the id message, three things happen: 1) the to do object is added to the appropriate sub menu in the nav bar; 2) another row is added to the bottom of the webpage with the to do and 3) a map of where to find it is also added to the row
$('#message').mousedown(function() {
	if (placesIPicked.indexOf(toDoArray[currIndex])) {
		placesIPicked.push(toDoArray[currIndex]);
		addToSubMenu(toDoArray[currIndex]);
		addRow(toDoArray[currIndex]);
		initMap(toDoArray[currIndex].msgText, toDoArray[currIndex].searchFor);
	}


});

// initMap, callback and createMarker from:  https://developers.google.com/maps/documentation/javascript/examples/place-search; I added the parameters so that the map is created for a particular to do item; the to do object has a searchPhrase property for the search feature of google maps; I also added comments
function initMap(mapToAdd, searchPhrase) {

	// find all the div elements with the class name of the current message text, there may be more than one if the map is being added from a click to the submenu rather than a click to the message, so we take the most recent one, which is the last one in the array of elements returned to the value mapDivs
	var mapDivs = document.getElementsByClassName(mapToAdd);
	// the last element in mapDivs will be the most recently created div
	var mapDiv = mapDivs[0];

	// this will be the center location
	var minneapolis = new google.maps.LatLng(44.9778, -93.2650);

	// map options with center location as defined above, zoom level 10
	var mapOptions = {
		center: minneapolis,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	};

	// make the map - the div created for it is big enough to hold it based on CSS specs for 'map' class
	map = new google.maps.Map(mapDiv, mapOptions);

	infowindow = new google.maps.InfoWindow();  // this is where I will get the DATA FROM THE MAP

	// new places feature of google maps that allows search
	service = new google.maps.places.PlacesService(map);

	// search in 50000 meters from minneapolis (same center as defined above)
	service.nearbySearch({
		location: minneapolis,
		radius: 50000,
		// searchPhrase is to do object property
		keyword: searchPhrase,
		// google search option
		rankby: 'prominence'
	}, callback);
}

// take the results and run through them creating a marker for each one
function callback(results, status) {  // where results is an array of marker objects that are the result of the search
	if (status === google.maps.places.PlacesServiceStatus.OK) {  // when the search is successful
		for (var i = 0; i < results.length; i++) {
			createMarker(results[i], toDoArray[currIndex].marksArray);
		}
	}
}

function addDetailsToRow(infoObj, currRow) {

	//var currRow = document.getElementById(toDoArray[currIndex].msgText);
	//var currRow2 = this.previousSibling.innerHTML;
	var newPar = document.createElement('p');
	newPar.innerHTML = infoObj.name + '<br />' + infoObj.formatted_address + '<br />' + infoObj.formatted_phone_number;
	var newWebTag = document.createElement('a');
	newWebTag.href = infoObj.website;
	newWebTag.innerHTML = infoObj.website;
	newWebTag.target = "_blank";
	currRow.appendChild(newPar);
	currRow.appendChild(newWebTag);
}

// creates a marker for and adds an event listener, the info window with place name and other data will show when marker is clicked
function getTableLoc(messageText) {
	var tdsArray = document.getElementsByTagName('td');
	var tdsToTarget = [].slice.call(tdsArray);  // need to have submenu move thing to top of list;
	//var thing = tdsToTarget[2];
	//var message = (tdsToTarget[1].innerHTML);
	//console.log(thing);
	var tableRows = [];
	tableRows[0] = tdsToTarget[1];
	tableRows[1] = tdsToTarget[2];
	return(tableRows);
}

function createMarker(place, markerArray) {
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
	});
	markerArray.push(marker);

	var divObj = map.streetView.R;
	var classToFind = divObj.className.substr(4);
	var rowForOutput = getTableLoc(classToFind);
	console.log(rowForOutput[1]);

	// got the basics for the following from StackOverflow: http://stackoverflow.com/questions/9520808/google-places-api-places-detail-request-undefined; I just had to make my service var global; I added the addDetailsToRow function
	var request = { reference: place.reference };
	service.getDetails(request, function(details) {  // get the data details from the marker
		google.maps.event.addListener(marker, 'click', function() {
			if(details) {
				infowindow.setContent(details.name + "<br />" + details.formatted_address + "<br />" + details.website + "<br /> 5-point Rating: " + details.rating + "<br />" + details.formatted_phone_number);
				addDetailsToRow(details, rowForOutput[0]);
			}
			else {
				infowindow.setContent('Sorry, no information available.')
			}

			infowindow.open(map, this);
		});
	});

}

// This is Kweku's function. I changed what was originally an array of strings into an array of objects - matching my data
function GetToDo()
{
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

// this function takes the message string name and finds the object it belongs to among the objects in the to do Array; when the match is found, a new row is added and a map is added to the row
function reinsertMap(ideaName) {

	for (var i = 0; i < toDoArray.length; i++) {
		if (toDoArray[i].msgText === ideaName) {
			addRow(toDoArray[i]);
			initMap(toDoArray[i].msgText, toDoArray[i].searchFor);
		}
	}

}
function addToSubMenu (msgObject) {

	// get the text of the users choice var
	var currentIdea = msgObject.msgText;

	// get the dropdown ul tag var from the type property of the object
	var theDropDown = document.getElementById(msgObject.type);

	// create a new li tag var that will go under dropdown ul var
	var newListItem = document.createElement('li');

	// create a new a tag var and give an href val of #, to show it's clickable
	var newAttribute = document.createElement('a');
	newAttribute.href = '#';
	// put the users choice text into the a tag
	newAttribute.innerHTML = currentIdea;

	// add the a tag to the new li and the new li to the ul dropdown menu; got the insertBefore method info from W3: http://www.w3schools.com/jsref/met_node_insertbefore.asp
	newListItem.appendChild(newAttribute);
	theDropDown.insertBefore(newListItem, theDropDown.childNodes[0]);

	// add an event listener to the new submenu item that will call reinsertMap when the item is clicked in the submenu; I want the item chosen from the submenu to be reinserted in the Map table, i.e. moved to the top row, when someone recalls it from the submenu
	newListItem.addEventListener('click', function () {
		var aItem = this.getElementsByTagName('a');

		// got the var arrayVar = [].slice.call(HTMLCollection) from stackoverflow: http://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
		var aArr = [].slice.call(aItem);
		reinsertMap(aArr[0].innerHTML); // there is only one
		}
	);
}


function addRow (msgObject) {

	// get the addRows element which is table body
	var tableBody = document.getElementById('addRows');
	// insert a row at the head, got insertRow and insertCell from: http://www.w3schools.com/jsref/met_table_insertrow.asp
	var newRow = tableBody.insertRow(0);

	// create all three data cells
	var noVal = newRow.insertCell(0);
	var val1 = newRow.insertCell(1);
	var mapVal = newRow.insertCell(2);
	val1.id = msgObject.msgText;
	val1.className = 'funThingCell';

	// create a div to be included in the data cell for the map
	var mapDiv = document.createElement('div');
	// give the mapDiv a class name that includes map for CSS formatting and the ojbect message for map-making later
	mapDiv.className = 'map ' + msgObject.msgText;

	// give the val1 cell the content of the object message
	val1.innerHTML = msgObject.msgText;

	// add the mapDiv to the mapVal cell
	mapVal.appendChild(mapDiv);

}
