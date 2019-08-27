$(document).ready(function () {
  // main character variables

  var userCharacter = "";

  var computerCharacter = "";

  // character values ------------------------------------------------------------------------------------------------------------------------
  var admiralAkbar = {
    data: "admiralAkbar",
    hp: 90,
    attack: 2,
    counterAttack: 2,
    display: "Admiral Akbar",
  }

  var bobbaFett = {
    data: "bobbaFett",
    hp: 95,
    attack: 2,
    counterAttack: 2,
    display: "Bobba Fett",
  }

  var chewbaca = {
    data: "chewbaca",
    hp: 120,
    attack: 2,
    counterAttack: 2,
    display: "Chewbaca"
  }

  var darthVader = {
    data: "darthVader",
    hp: 200,
    attack: 35,
    counterAttack: 35,
    display: "Darth Vader",
  }
// character arrays ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  var characters = ["admiralAkbar", "bobbaFett", "chewbaca", "darthVader"];
  var characterObject = [admiralAkbar, bobbaFett, chewbaca, darthVader];

// run createcharacterdiv
createCharacterDiv();

  // create div's with images with for loop------------------------------------------------------------------------------------------------
  function createCharacterDiv () {
  for (i = 0; i < characters.length; i++) {
    var hitpoints = characterObject[i].hp;
    var characterbtn = $("<div>");
    characterbtn.addClass("float-left chara-button not-selected col col-1 " + characters[i]);
    characterbtn.data("data", characters[i]);
    characterbtn.prependTo("#char-sel");
    characterImage();
    characterText();

    function characterText() {
      var charText = $("<p>");
      charText.addClass("char-text");
      charText.text(hitpoints)
      charText.appendTo(characterbtn);
      };

    function characterImage() {
      var charImg = $("<img>");
      charImg.addClass("imgClear character-image img-fluid");
      charImg.appendTo(characterbtn);
      charImg.attr("src", "assets/images/" + characters[i] + ".jpg");
      };
      }
      }

// chose a character----------------------------------------------------------------------------------------------------------------
  function charaSel() {
    $(".chara-button").on("click", function () {
      if (game.step < 1) {
        userCharacter = $(this).data();
        $(this).addClass("user-chara-sel");
        $(this).removeClass("not-selected");
        $(".not-selected").appendTo("#enemy-select");
        game.state = compCharacterSel();
        console.log(userCharacter);
        game.step += 1;
        return "charaSel"
      } else {;}
      } )
      }

// chose a character for the computer------------------------------------------------------------------------------------------------------------------------- 

  function compCharacterSel() {
    $(".chara-button").on("click", function () {
      if (game.step < 2 && ($(this).hasClass("not-selected"))) {
        computerCharacter = $(this).data();
        $(this).addClass("comp-chara-sel");
        $(".comp-chara-sel").appendTo("#attack-target");
        game.state = attackState();
        game.step += 1;
        assignCharacterData();
      } else {;}
      } )
      }



      function assignCharacterData () {
        // if computer character has not been chosen, do nothing
      if (!computerCharacter) {
        ;
        // if computer character has been choosen, run the following loop to assign character data to the div.
      } else if (!computerCharacter == false){
        // for however many items in the characater object array
        for (j = 0; j < characterObject.length; j++) {
          // if user character data matches the data of the current index of character object assign that data to user characater
          if (userCharacter.data == characterObject[j].data) {
            userCharacter = characterObject[j];
            // if computer character data matches the data of the current index of character object assign that data to computercharacater
          } else if (computerCharacter.data == characterObject[j].data) {
            computerCharacter = characterObject[j];
          } else {;}
          }
          } 
      }

// function to be run when player has chosen a character and chosen a character for computer player------------------------------------------
  function attackState() {
    $("#attack-button").on("click", function () {
      if ((game.state == winState) || (game.state == loseState)) {
        ;
      } else if ((userCharacter.hp > 0) && (computerCharacter.hp > 0)) {
        userfightAction();
          if (computerCharacter.hp < 0) {
            displayStuff()
          } else {
            computerfightAction();
            defeatedCharacter();
            displayStuff();
          };
      } else if ((userCharacter.hp <= 0) || (computerCharacter.hp <= 0)) {
        defeatedCharacter();
        displayStuff();
        
      } else {;}
      } );
      }

// calculate new character stats THIS SECTION NEEDS WORK-----------------------------------------------------------------------------------------
  function computerfightAction() {
      userCharacter.hp = userCharacter.hp - computerCharacter.counterAttack;
      } 

      function userfightAction() {
        userCharacter.attack = userCharacter.attack + userCharacter.display.length;
        computerCharacter.hp = computerCharacter.hp - userCharacter.attack;
        } 
// ---------------------------------------------------------------------------------------------------------------------------------------------


  var defeatedName ="";

    function defeatedCharacter () {
      if (computerCharacter.hp <= 0){
      $("div.attack-target > div").removeClass("comp-chara-sel");
      $("div.attack-target > div").addClass("defeated");
      defeatedName = computerCharacter.display;
      console.log(defeatedName);
      console.log(computerCharacter.display);
      computerCharacter = "";
      $(".defeated").hide();
      game.opponents-- ;
      game.step = 1;
      } else {;}
      }

     // display the results of the attack state ------------------------------------------------------------------------------------------------------------------------
  function displayStuff() {
    if (!computerCharacter == false){
      $("div.user-chara-sel > p").text(userCharacter.hp);
      $("div.comp-chara-sel > p").text(computerCharacter.hp);
      $(".box-four").text(userCharacter.display + " did " + userCharacter.attack + " damage");
      $(".box-three").text(computerCharacter.display + " did " + computerCharacter.counterAttack + " damage");
      $(".box-two").text("Wins: " + game.wins + "|| " + "Loses: " + game.losses);
      $(".box-one").text("  ");
      checkStats();
    } else if (!computerCharacter) {
      $("div.user-chara-sel > p").text(userCharacter.hp);
      $(".box-four").text(userCharacter.display + " did " + userCharacter.attack + " damage");
      $(".box-three").text(defeatedName + " was defeated! Please select the next enemy to defeat!");
      $(".box-two").text("Wins: " + game.wins + "|| " + "Loses: " + game.losses);
      $(".box-one").text("  ");
      checkStats();
    } else {;}
    }

  // runs at the end of display stuff, final action of attack chain of functions.
    function checkStats () {
      if (game.opponents == 0) {
        game.state = winState();
      } else if ((userCharacter.hp <= 0) && (!userCharacter == false)) {
        userCharacter = "";
        game.state = loseState();
      } else {;}
      }

      $(".reset").on("click", function () {
        reset();
      });

      function reset(){
        $(".chara-button").remove();
        console.log(game);
        userCharacter = "";
        computerCharacter = "";
        game.step = 0;
        game.opponents = 3;
        admiralAkbar.hp = 90;
        admiralAkbar.attack = 2;
        chewbaca.hp = 120;
        chewbaca.attack = 20;
        bobbaFett.hp = 95;
        bobbaFett.attack = 20 
        darthVader.hp = 200;
        darthVader.attack = 10;
        createCharacterDiv();
        charaSel();
        $(".box-one").text("");
        $(".box-three").text(""); 
        $(".box-four").text("");
        game.state = charaSel();
        }

  function winState () {
    console.log("win")
    game.wins++
    $(".box-two").text("Wins: " + game.wins + "|| " + "Loses: " + game.losses);
    $(".box-four").text("You Win")
    $(".box-three").text("");
  }

  function loseState () {
    console.log("lose")
    game.losses++
    $(".box-two").text("Wins: " + game.wins + "|| " + "Loses: " + game.losses);
    $(".box-four").text("You Lose")
    $(".box-three").text("");

  }

  // primary game object.
  var game = {
    state: charaSel(),
    step: 0,
    opponents: 3,
    wins:0,
    losses:0,
    }

  })