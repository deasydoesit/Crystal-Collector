var userWins = 0;
var userLosses = 0;
var score = 0;
var randomNumber = 0;
var isInputActive = true;

var crystOne = 0;
var crystTwo = 0;
var crystThree = 0;
var crystFour = 0;

var randomNumberDisplay = $("#random");
var userWinsDisplay = $("#wins");
var userLossesDisplay = $("#losses");
var scoreDisplay = $("#score");
var victoryToast = $("#victoryToast");
var defeatToast = $("#defeatToast");

function displayVictoryToast() {
    if (isInputActive) {
        isInputActive = false;
        $("input").prop('disabled', true).removeClass("hvr-grow");
        $(".score").removeClass("show").addClass("hide");
        $(".win").removeClass("hide").addClass("show");
    }
}

function displayDefeatToast() {
    if (isInputActive) {
        isInputActive = false;
        $("input").prop('disabled', true).removeClass("hvr-grow");
        $(".score").removeClass("show").addClass("hide");
        $(".lose").removeClass("hide").addClass("show");
    }
}

function generateCrystalNums(num) {
    crystOne = Math.ceil(Math.random() * 12);
    crystTwo = Math.ceil(Math.random() * 12);
    crystThree = Math.ceil(Math.random() * 12);
    crystFour = Math.ceil(Math.random() * 12);
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

    setTimeout(function() {    
        if (!isInputActive) {
            isInputActive = true;
            $(".score").removeClass("hide").addClass("show");
            $(".lose").removeClass("show").addClass("hide");
            $(".win").removeClass("show").addClass("hide");
            $("input").prop('disabled', false).addClass("hvr-grow");
        }
    }, 3000);
}

function checkGameStatus(userNum, compNum) {
    if (userNum === compNum) {
        userWins++;
        displayVictoryToast();
        initialize();
    } else if (userNum <=compNum) {
        $(scoreDisplay).text(userNum);
    } else {
        userLosses++;
        displayDefeatToast();
        initialize();
    }
}

$(document).ready(function() {

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

    initialize();
});