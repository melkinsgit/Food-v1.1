function GetValue()
{
    var foodArray = new Array("pizza","apple","orange","burrito");



    var random = foodArray[Math.floor(Math.random() * foodArray.length)];
   document.getElementById("message").innerHTML=random;
}