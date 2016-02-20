/**
 * Created by Margaret on 2/20/2016.
 */

// global to script file for access in variout methods

var randomActivity;
var currIndex;
var likesArray = ['doThingsDropDown', 'seeThingsDropDown', 'eatThingsDropDown'];

//Acts as our class definition - defines a constructor
var message = function(msg, likeArType) {
    this.msgText = msg;
    this.description = "";
    this.type = likeArType;
};

var classical = new message("listen to classical", likesArray[0]);
var dessert = new message("savor a great dessert", likesArray[2]);
var zoo = new message("go to a zoo", likesArray[0]);
var aboretum = new message("visit the arboretum", likesArray[0]);
var conservatory = new message("visit a conservatory", likesArray[0]);
var blowOut = new message("find a great blow out", likesArray[0]);
var massage = new message("get a massage", likesArray[0]);
var hike = new message("go for a hike", likesArray[0]);
var art = new message("see some art", likesArray[1]);
var kid = new message("take a kid somewhere", likesArray[0]);
var imax = new message("watch an IMAX movie", likesArray[1]);

// Kweku used an array for the food options, so I did the same for entertainment options, but I turned them into ojbects and took them out of the GetToDo method
var toDoArray = [classical, dessert, zoo, aboretum, conservatory, blowOut, massage, hike, art, kid, imax];
