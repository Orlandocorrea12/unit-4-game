var crystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var crystalValueOne = 0;

var crystalValueTwo = 0;

var crystalValueThree = 0;

var crystalValueFour = 0;

var winningNumber = 0;

var currentScore = 0;

var winsAmount = 0;

var lossesAmount = 0;

$(document).ready(function () {
    startGame();
    $("#crystal1").click(function (e) {
        currentScore = currentScore + crystalValueOne;
        updateStats();
    });
    $("#crystal2").click(function (e) {
        currentScore = currentScore + crystalValueTwo;
        updateStats();
    });
    $("#crystal3").click(function (e) {
        currentScore = currentScore + crystalValueThree;
        updateStats();
    });
    $("#crystal4").click(function (e) {
        currentScore = currentScore + crystalValueFour;
        updateStats();
    });
    updateStats();
});
function getRandomNumber() {
    var targetNumber = Math.floor((Math.random() * 12) + 1);
    return targetNumber;
}
function setCrystalValue() {
    crystalValueOne = getRandomNumber()
    crystalValueTwo = getRandomNumber()
    crystalValueThree = getRandomNumber()
    crystalValueFour = getRandomNumber()
}
function resetGame() {
    setCrystalValue();
    currentScore = 0;
    setWinningNumber();

}
function setWinningNumber(){
    winningNumber = getRandomNumber() + getRandomNumber() + getRandomNumber() + 100;
}
function startGame() {
    setCrystalValue();
    setWinningNumber();
}
function updateStats() {

    if (currentScore === winningNumber) {
        winsAmount ++;
        resetGame();
    } else if (currentScore > winningNumber) {
        lossesAmount++;
        resetGame();
    } else {
        //do nothing
    }
    $("#number-to-guess").text("Number to Guess " + winningNumber.toString());

    $("#winsAmount").text("Wins " + winsAmount.toString())

    $("#lossesAmount").text("Losses " + lossesAmount.toString())

    $("#counter").text("Current Score " + currentScore.toString())
}

