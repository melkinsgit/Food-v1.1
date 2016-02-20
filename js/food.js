var randomActivity;  // global to script file for access in GetFood and event handler for #message click

var likesArray = ['thingsToDo', 'thingsToSee', 'thingsToEat'];

//Acts as our class definition - defines a constructor
var message = function(msg, likeArType) {
	this.msgText = msg;
	this.description = "";
	this.type = likeArType;
};

var classical = new message("listen to classical", likesArray[0]);
var dessert = new message("eat a great dessert", likesArray[2]);
var zoo = new message("go to a zoo", likesArray[0]);
var aboretum = new message("visit the arboretum", likesArray[0]);
var conservatory = new message("visit a conservatory", likesArray[0]);
var blowOut = new message("find a great blow out", likesArray[0]);
var massage = new message("get a massage", likesArray[0]);
var hike = new message("go for a hike", likesArray[0]);
var art = new message("see some art", likesArray[1]);
var kid = new message("take a kid somewhere", likesArray[0]);
var imax = new message("watch an IMAX movie", likesArray[1]);

function GetFood()
{
	// Kweku used an array for the food options, so I did the same for entertainment options
	var toDoArray = [classical, dessert, zoo, aboretum, conservatory, blowOut, massage, hike, art, kid, imax];

	randomActivity = toDoArray[Math.floor(Math.random() * toDoArray.length)].msgText;
	//document.getElementById("message").innerHTML = random;
	$('#message').text(randomActivity);  // I rewrote in jQuery
   
}

// This is Kweku's function, but I removed the toggle so the button changes to Something Else the first time it's clicked
$('.btn').click(function(){
		var $this = $(this);
		//$this.addClass('btn');
		//if($this.hasClass('btn')){
			$this.text('Something Else ...');
		//} else {
		//	$this.text('Entertain Me ...');
		//}

	});

function randomize(){
	//document.getElementById('message').style.color = randomColors();
	$('#message').css({"color": randomColors()});  // I rewrote in jQuery
}

// This is Kweku's, I also found it on the web here:  http://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomColors(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// This is Kweku's function, but I changed the if statement from js to jQuery
function getName(){
	var person = prompt("What is your name?", "");

	if(person != null){
		$('#name').text(person + ", click the button to enliven your existence!");
	}
	
}

$('#message').mousedown(function() {

	//addToSubMenu();

	// get the things to do dropdown menu header li tag var
	var thingsToDo = document.getElementById('thingsToDo');

	// get the things to do dropdown ul tag var
	var theDropDown = document.getElementById('doThingsDropDown');
	//var theDropDownfn = findObjectById(document, 'doThingsDropDown');

	console.log ('the var ' + theDropDown);

	// create a new li tag var that will go under dropdown ul var
	var newThingListItem = document.createElement('li');

	// get the text of the users choice var
	var currentIdea = document.getElementById('message').innerHTML;
	console.log('the current idea is ' + currentIdea);

	// create a new a tag var and give an href val of #, to show it's clickable
	var newAttribute = document.createElement('a');
	newAttribute.href = '#';
	// put the users choice text into the a tag
	newAttribute.innerHTML = currentIdea;

	// add the a tag to the new li and the new li to the ul dropdown menu
	newThingListItem.appendChild(newAttribute);
	theDropDown.appendChild(newThingListItem);

});

function addToSubMenu () {

	// get the things to do dropdown menu header li tag var
	var thingsToDo = document.getElementById('thingsToDo');

	// get the things to do dropdown ul tag var
	var theDropDown = document.getElementById('thingsDropDown');

	// create a new li tag var that will go under dropdown ul var
	var newThingListItem = document.createElement('li');

	// get the text of the users choice var
	var currentIdea = document.getElementById('message').innerHTML;
	console.log('the current idea is ' + currentIdea);

	// create a new a tag var and give an href val of #, to show it's clickable
	var newAttribute = document.createElement('a');
	newAttribute.href = '#';
	// put the users choice text into the a tag
	newAttribute.innerHTML = currentIdea;

	// add the a tag to the new li and the new li to the ul dropdown menu
	newThingListItem.appendChild(newAttribute);
	theDropDown.appendChild(newThingListItem);

}
// from stackoverflow: http://stackoverflow.com/questions/12899609/how-to-add-an-object-to-a-nested-javascript-object-using-a-parent-id






