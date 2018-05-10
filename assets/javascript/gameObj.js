$(document).ready(function() {
//backstretch
$("body").backstretch("assets/images/GOTbackground3.jpg");
//Instructions
$("#instructions").hide();
$(".dropbtn").click(function() {
  $("#instructions").toggle(600);
});

//characters
var danny = {
    name:"Daenerys",
    healthPoints: 22,
    attackPower: 4,
    counterAttackPower: 10,
    image: "./assets/images/danny1.jpg"
}
var jonSnow = {
    name:"John Snow",
    healthPoints: 15,
    attackPower: 8,
    counterAttackPower: 4,
    image: "./assets/images/jonSnow1.jpg"
}
var nightKing = {
    name:"The Night King",
    healthPoints: 18,
    attackPower: 6,
    counterAttackPower: 8,
    image: "./assets/images/nightKing1.jpg"
}
var drogo = {
    name:"Drogo",
    healthPoints: 18,
    attackPower: 10,
    counterAttackPower: 10,
    image: "./assets/images/drogo1.jpg"
}


const wins = $("#wins");
var winsCount = null;
const defeats = $("#defeats");
var defeatsCount = null;
const score = $("#score");
var scoreCount = null;


function startGame(){
    var characters = [danny,jonSnow,nightKing,drogo]
    characterDiv = $("#characterSection")
    for (var i = 0; i < characters.length; i++) {
        var image = $("<img>");
        image.attr("src",characters[i].image);
        var name = $("<h1></h1>");
        name.text(characters[i].name);
        var health = $("<h1></h1>");
        health.text(characters[i].healthPoints);
        health.addClass("health");
        var character = $("<div></div>");
        character.addClass("character");
        character.attr("health", characters[i].healthPoints);
        character.attr("name",characters[i].name);
        character.attr("attackPower",characters[i].attackPower);
        character.attr("counterAttackPower",characters[i].counterAttackPower);
        character.append(name);
        character.append(image);
        character.append("hp", health);
        characterDiv.append(character);
    }

    function attack(a, b)
    {
        var damage = Math.floor(Math.random()*parseInt($(a).attr("attackPower")));
        console.log("damage: " + damage);
        var health = parseInt($(b).attr("health"));
        health -= damage;
        console.log("health: " + health);
        $(b).attr("health",health);
        $(b + " .health").text(health);
        console.log("-----------------");
    };

    function combatantSelected()
    {
        if($("#defenders").html().trim() == "")
        {
            return false;
        }
        return true;
    };

    $("#characterSection").on("click", ".character", function() {
        if(combatantSelected())
        {
            $(this).attr("id","attacker");
            $(this).css("background-color", "rgb(241,0,73)");
            $("#attackers").html(this);
        }
        else{
            $(this).attr("id","defender");
            $(this).css("background-color", "rgb(48,180,112)")
            $("#defenders").html(this);
        }
      });

    $("#buttons").on("click", "#attack", function() {
        attack("#attacker","#defender");
        attack("#defender","#attacker");
        if(parseInt($("#defender").attr("health")) <= 0)
        {
            $("#defenders").html("");
            defeatsCount++;
            console.log("defeats: " + defeatsCount);
            defeats.text(defeatsCount);
            scoreCount -= 2;
            console.log("score: " + scoreCount);
            score.text(scoreCount);
            $("#attackers").html("");
            $("#defenders").html("");
            $("#characterSection").html("");
            startGame();
        }
        else if(parseInt($("#attacker").attr("health"))<= 0)
        {
            $("#attackers").html("");

        }
        if ($("#charactersSection").is(":empty")) {
          winsCount++;
          console.log("wins: " + winsCount);
          wins.text(winsCount);
          scoreCount += 5;
          console.log("score: " + scoreCount);
          score.text(scoreCount);
          $("#attackers").html("");
          $("#defenders").html("");
          $("#characterSection").html("");
          startGame();
        }
    });
    $("#buttons").on('click', '#reset', function() {
      location.reload();
    });
    $("#buttons").on('click', '#retreat', function() {
      defeatsCount++;
      console.log("defeats: " + defeatsCount);
      defeats.text(defeatsCount);
      scoreCount -= 1;
      console.log("score: " + scoreCount);
      score.text(scoreCount);
      $("#attackers").html("");
      $("#defenders").html("");
      $("#characterSection").html("");
      startGame();
    })
  };
  startGame();
});
