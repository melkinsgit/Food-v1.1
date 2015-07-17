function GetFood()
{
   var foodArray = ["pizza","apple","orange","burrito",
   					"cake","soda","poptarts","guacamole",
   					"taco","hamburger","casserole","pickle",
   					"salad","mashed potatoes", "corn", "meatloaf",
   					"Gyro","roast beef sandwich", "egg rolls",
   					"fresh fruit","apple pie", "spaghetti", "lo mein",
   					"Pho Dac Beit", "Jollof Rice", "Stir Fry", "Pad Thai" 
   					];

   var random = foodArray[Math.floor(Math.random() * foodArray.length)];
   document.getElementById("message").innerHTML = random;
   
}


$('.btn').click(function(){
		var $this = $(this);
		$this.toggleClass('btn');
		if($this.hasClass('btn')){
			$this.text('Eat..');			
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
		document.getElementById("name").innerHTML =  person + ", Click the button to decide what to eat!";
	}
	
}





