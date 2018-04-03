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
    $("#jonSnow").attr("value", "hidden", counterJon).appendTo('#jonSnow');
  var counterDanny = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#danny").attr("value", "hidden", counterDanny).appendTo('#danny');
  var counterDrogo = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#drogo").attr("value", "hidden", counterDrogo).appendTo("#drogo");
  var counterNightKing = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#nightKing").attr("value","hidden", counterNightKing).appendTo('#nightKing');
  var counterTheHound = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#theHound").attr("value","hidden", counterTheHound).appendTo('#theHound');
  var counterTheMountain = Math.floor(Math.random() * (20 - 5 + 1) + 5);
    $("#theMountain").attr("value","hidden", counterTheMountain).appendTo('#theMountain');
    console.log("Counter Attack Powers are: " + counterDanny,counterDrogo,counterJon,counterNightKing,counterTheHound,counterTheMountain);

  //return gameCharacters to 'userCharacterArea' div
  $("#jonSnow, #danny, #drogo, #nightKing, #theHound, #theMountain").detach().appendTo('.userCharacterArea');

//check win
function checkWin() {


};

//User Selects Character
$("#jonSnow, #danny, #drogo, #nightKing, #theHound, #theMountain").on("click", function() {
    //if statements depending on character clicked, move others to defenderArea div
  if (this.id == "#jonSnow") {
    $("#danny, #drogo, #nightKing, #theHound, #theMountain").insertAfter('#defenderHeader');
    //
  };


});

//Attack Function
$("#attackButton").on("click", function() {

});

//retreat button
$("#retreatButton").on("click", function() {
  losses++;
  $("#losses").text(losses);
  score--;
  $("#userScore").text(score);
  //startGame();

});

//Surrender button
$("#surrenderButton").on("click", function() {
  losses++;
  $("#losses").text(losses);
  score -= 2;
  $("#userScore").text(score);
  //startGame();

});




};

startGame();

});








//notes:
//have game know when a character is chosen
//moving characters to new divs with detach() and appendTo()
//write increase in attack value after each attack button click
//need to have values get cleared at begining of startGame
//








//
