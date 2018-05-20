var userWins = 0;
var userLosses = 0;
var score = 0;
var randomNumber = 0;

var crystOne = 0;
var crystTwo = 0;
var crystThree = 0;
var crystFour = 0;

var randomNumberDisplay = $("#random");
var userWinsDisplay = $("#wins");
var userLossesDisplay = $("#losses");
var scoreDisplay = $("#score");

function initialize(){
    randomNumber = Math.floor(Math.random() * 100);
    $(randomNumberDisplay).text(randomNumber);
    $(userLossesDisplay).text(0);
    $(userWinsDisplay).text(0);
    $(scoreDisplay).text(0);
}

function generateCrystalNums(num) {
    crystOne = Math.ceil(num / (Math.random() * 10));
    crystTwo = Math.ceil(num / (Math.random() * 10));
    crystThree = Math.ceil(num / (Math.random() * 10));
    crystFour = Math.ceil(num / (Math.random() * 10));
}

$(document).ready(function() {

    initialize();
    generateCrystalNums(randomNumber);

    $(".crystal-group").on("click", "#crystal-one", function (){
        score += crystOne;
        $(scoreDisplay).text(score);
    }).on("click", "#crystal-two", function (){
        score += crystTwo;
        $(scoreDisplay).text(score);
    }).on("click", "#crystal-three", function (){
        score += crystThree;
        $(scoreDisplay).text(score);
    }).on("click", "#crystal-four", function (){
        score += crystFour;
        $(scoreDisplay).text(score);
    });

});