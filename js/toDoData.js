/**
 * Created by Margaret on 2/20/2016.
 */

// global to script file for access in variout methods

var randomActivity;

var likesArray = ['doThingsDropDown', 'seeThingsDropDown', 'eatThingsDropDown'];

//var mapSearch = function (toDoToFind) {
//    this.findThis = toDoToFind;
//};

//
//var marksListObj = function (mapMsg, marksArray){
//    this.mapMsg = mapMsg;
//    this.marksArray = marksArray;
//}

//Acts as our class definition - defines a constructor
var message = function(msg, likeArType, searchFor) {
    this.msgText = msg;
    this.description = "";
    this.type = likeArType;
    this.searchFor = searchFor;
    this.marksArray = [];
};

var classical = new message("listen to classical", likesArray[0], 'classical music');
var dessert = new message("savor a great dessert", likesArray[2], 'best dessert');
var zoo = new message("go to a zoo", likesArray[0], 'visit zoo');
var aboretum = new message("visit the arboretum", likesArray[0], 'visit arboretum');
var conservatory = new message("visit a conservatory", likesArray[0], 'visit conservatory');
var blowOut = new message("find a great blow out", likesArray[0], 'blow out');
var massage = new message("get a massage", likesArray[0], 'massage');
var hike = new message("go for a hike", likesArray[0], 'hike');
var art = new message("see some art", likesArray[1], 'visit art museum');
var kid = new message("take a kid somewhere", likesArray[0], 'best places for kids');
var imax = new message("watch an IMAX movie", likesArray[1], 'IMAX theater');

// Kweku used an array for the food options, so I did the same for entertainment options, but I turned them into ojbects and took them out of the GetToDo method
var toDoArray = [classical, dessert, zoo, aboretum, conservatory, blowOut, massage, hike, art, kid, imax];

