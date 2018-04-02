$(document).ready(function() {

//Golbal variables
  var wins = 0;
  var losses = 0;
  var score = 0;
  var jonSnow;
  var danny;
  var drogo;
  var nightKing;
  var theHound;
  var theMountain;

//FUNCTIONS

//start game reset variables
function startGame() {

  //reset HP for gameCharacters
  var hpJon = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpJon").append(hpJon);
    console.log(hpJon);
  var hpDanny = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpDanny").append(hpDanny);
    console.log(hpDanny);
  var hpDrogo = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpDrogo").append(hpDrogo);
    console.log(hpDrogo);
  var hpNightKing = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpNightKing").append(hpNightKing);
    console.log(hpNightKing);
  var hpTheHound = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpTheHound").append(hpTheHound);
    console.log(hpTheHound);
  var hpTheMountain = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpTheMountain").append(hpTheMountain);
    console.log(hpTheMountain);

  //reset Attack values
  var attackJon;
  var attackDanny;
  var attackDrogo;
  var attackNightKing;
  var attackTheHound;
  var attackTheMountain;

  //reset Counter values
  var counterJon = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#jonSnow").append("value", counterJon);
  var counterDanny = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#danny").append("value", counterDanny);
  var counterDrogo = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#drogo").append("value", counterDrogo);
  var counterNightKing = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#nightKing").append("value", counterNightKing);
  var counterTheHound = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#theHound").append("value", counterTheHound);
  var counterTheMountain = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#theMountain").append("value", counterTheMountain);

  //return gameCharacters to 'your character' div



//check win
function checkWin() {

};

}

startGame();

});








//notes:
//have game know when a character is chosen
//
