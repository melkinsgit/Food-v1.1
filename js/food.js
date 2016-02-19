var randomActivity;  // global to script file for access in GetFood and event handler for #message click

function GetFood()
{
	// Kweku used an array for the food options, so I did the same for entertainment options
	var toDoArray = ["listen to classical","eat a great dessert","go to a zoo","visit the arboretum","visit a conservatory","find a great blow out","get a massage","go for a hike","see some art","take a kid somewhere"];

	randomActivity = toDoArray[Math.floor(Math.random() * toDoArray.length)];
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
	var theDropDownfn = findObjectById(document, 'doThingsDropDown');

	console.log ('the var ' + theDropDown + ' and the searched var ' + theDropDownfn);

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
function findObjectById(root, id) {
	if (root.children) {
		console.log('the root has children');
		console.log(root.children);
		for (var k in root.children) {
			console.log(root.children[k].id);
			if (root.children[k].id == id) {
				return root.children[k];
			}
			else if (root.children.length) {
				return findObjectById(root.children[k], id);
			}
		}
	}
}





