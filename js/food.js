function GetFood()
{
   var foodArray = ["listen to classical","eat a great dessert","go to a zoo","visit the arboretum",
   					"visit a conservatory"
   					];

   var random = foodArray[Math.floor(Math.random() * foodArray.length)];
   document.getElementById("message").innerHTML = random;
   
}


$('.btn').click(function(){
		var $this = $(this);
		$this.toggleClass('btn');
		if($this.hasClass('btn')){
			$this.text('Entertain me ..');
		} else {
			$this.text('Something Else...');
		}

	});

function randomize(){
	document.getElementById('message').style.color = randomColors();
}

function randomColors(){
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function getName(){
	var person = prompt("What is your name?", "");

	if(person != null){
		document.getElementById("name").innerHTML =  person + ", Click the button to decide what to do!";
	}
	
}





