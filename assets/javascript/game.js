$(document).ready(function() {
//instructions
$("#instructions").hide();
$(".dropbtn").click(function() {
  $("#instructions").toggle(600);
});

//Golbal variables
  var wins = 0;
  var losses = 0;
  var score = 0;

//FUNCTIONS

//start game reset variables
function startGame() {

  //reset HP for gameCharacters
  var hpJon = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpJon").append(hpJon);
    console.log("Jon's HP for this game is: " + hpJon);
  var hpDanny = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpDanny").append(hpDanny);
    console.log("Daenerys' HP for this game is: " + hpDanny);
  var hpDrogo = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpDrogo").append(hpDrogo);
    console.log("Drogo's HP for this game is: " + hpDrogo);
  var hpNightKing = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpNightKing").append(hpNightKing);
    console.log("The Night King's HP for this game is: " + hpNightKing);
  var hpTheHound = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpTheHound").append(hpTheHound);
    console.log("The Hound's HP for this game is: " + hpTheHound);
  var hpTheMountain = Math.floor(Math.random() * (125 - 50 + 1) + 50);
    $("#hpTheMountain").append(hpTheMountain);
    console.log("The Mountain's HP for this game is: " + hpTheMountain);

  //reset Attack values
  var attackPower = Math.floor(Math.random() * (8 - 5 + 1) + 5);
    $(".gameCharacters").data('attackPower', 7);
    console.log("attack power for this game starts at: " + attackPower);

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
  $("#jonSnow", "#danny", "#drogo", "#nightKing", "#theHound", "#theMountain" ).detach().appendTo('#userCharacterArea');

//check win
function checkWin() {

};

//User Selects Character
$(".characterContainer").on("click", function() {

});

//Attack Function
$("#attackButton").on("click", function() {

});






};

startGame();

});








//notes:
//have game know when a character is chosen
//
