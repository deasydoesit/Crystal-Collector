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

function generateCrystalNums(num) {
    crystOne = Math.ceil(num / (Math.random() * 10));
    crystTwo = Math.ceil(num / (Math.random() * 10));
    crystThree = Math.ceil(num / (Math.random() * 10));
    crystFour = Math.ceil(num / (Math.random() * 10));
}

function initialize(){
    score = 0;
    randomNumber = 0;

    crystOne = 0;
    crystTwo = 0;
    crystThree = 0;
    crystFour = 0;

    randomNumber = Math.floor(Math.random() * 100);
    generateCrystalNums(randomNumber);
    $(randomNumberDisplay).text(randomNumber);
    $(userLossesDisplay).text(userLosses);
    $(userWinsDisplay).text(userWins);
    $(scoreDisplay).text(score);
}

function checkGameStatus(userNum, compNum) {
    if (userNum === compNum) {
        userWins++;
        initialize();
    } else if (userNum <=compNum) {
        $(scoreDisplay).text(userNum);
    } else {
        userLosses++;
        initialize();
    }
}

$(document).ready(function() {
    
    initialize();

    $(".crystal-group").on("click", "#crystal-one", function (){
        score += crystOne;
        checkGameStatus(score, randomNumber);
    }).on("click", "#crystal-two", function (){
        score += crystTwo;
        checkGameStatus(score, randomNumber);
    }).on("click", "#crystal-three", function (){
        score += crystThree;
        checkGameStatus(score, randomNumber);
    }).on("click", "#crystal-four", function (){
        score += crystFour;
        checkGameStatus(score, randomNumber);
    });

});