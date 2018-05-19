var userWins = 0;
var userLosses = 0;
var score = 0;
var randomNumber = 0;

var randomNumberDisplay = $("#random");
var userWinsDisplay = $("#wins");
var userLossesDisplay = $("#losses");
var scoreDisplay = $("#score");

function initialize(){
    var randomNumber = Math.floor(Math.random() * 100);
    $(randomNumberDisplay).text(randomNumber);
    $(userLossesDisplay).text(0);
    $(userWinsDisplay).text(0);
    $(scoreDisplay).text(0);
}

$(document).ready(function() {

initialize();


});