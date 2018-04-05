//reset variables for game object
function resetGame() {

  window.gameObj = {
    attack: false;
    win: false;
    loss: false;
    surrender: false;
    retreat: false;
    gameOver: false;
    //other variables if needed;
    characterList: [
      {
        character: "Jon Snow";
        picture: "assets/images/jonSnow1.jpg";
        hp: Math.floor(Math.random() * (125 - 50 + 1) + 50);
        attack: Math.floor(Math.random() * (10 - 7 + 1) + 7);
        counterAttack: Math.floor(Math.random() * (15 - 5 + 1) + 5);
      };
      {
        character: "Danny";
        picture: "assets/images/danny1.jpg";
        hp: Math.floor(Math.random() * (125 - 50 + 1) + 50);
        attack: Math.floor(Math.random() * (10 - 7 + 1) + 7);
        counterAttack: Math.floor(Math.random() * (15 - 5 + 1) + 5);
      };
      {
        character: "Drogo";
        picture: "assets/images/drogo1.jpg";
        hp: Math.floor(Math.random() * (125 - 50 + 1) + 50);
        attack: Math.floor(Math.random() * (10 - 7 + 1) + 7);
        counterAttack: Math.floor(Math.random() * (15 - 5 + 1) + 5);
      };
      {
        character: "The Night King";
        picture: "assets/images/nightKing1.jpg";
        hp: Math.floor(Math.random() * (125 - 50 + 1) + 50);
        attack: Math.floor(Math.random() * (10 - 7 + 1) + 7);
        counterAttack: Math.floor(Math.random() * (15 - 5 + 1) + 5);
      };
      {
        character: "The Hound";
        picture: "assets/images/theHound1.jpg";
        hp: Math.floor(Math.random() * (125 - 50 + 1) + 50);
        attack: Math.floor(Math.random() * (10 - 7 + 1) + 7);
        counterAttack: Math.floor(Math.random() * (15 - 5 + 1) + 5);
      };
      {
        character: "The Mountain";
        picture: "assets/images/theMountain2.jpg";
        hp: Math.floor(Math.random() * (125 - 50 + 1) + 50);
        attack: Math.floor(Math.random() * (10 - 7 + 1) + 7);
        counterAttack: Math.floor(Math.random() * (15 - 5 + 1) + 5);
      };
    ];

    //Start Game Resets
    startGame: true;
    userCharacter: null;
    currentDefender: null;
    graveyard: null;
    currentAttack: null;
    wins: false;
    losses: false;

    //Game Audio
    gameSound: "assets/audio/gotTheme.mp3";
    battleSound: "assets/audio/battleSound.mp3";
    attackSound: "assets/audio/steelsword.mp3";

  };//end of game object
};//end of resetGame()

//Setup and display
$$(document).ready(function() {
  reset();
  
});











//Notes:
