$(document).ready(function () {
  // main character variables

  var userCharacter = "";

  var computerCharacter = "";

  // character values ------------------------------------------------------------------------------------------------------------------------
  var admiralAkbar = {
    data: "admiralAkbar",
    hp: 90,
    attack: 2,
    counterAttack: 5,
    modifier: "",
    display: "Admiral Akbar",
  }

  var bobbaFett = {
    data: "bobbaFett",
    hp: 95,
    attack: 20,
    counterAttack: 15,
    modifier: "",
    display: "Bobba Fett",
  }

  var chewbaca = {
    data: "chewbaca",
    hp: 120,
    attack: 20,
    counterAttack: 5,
    modifier: "",
    display: "Chewbaca"
  }

  var darthVader = {
    data: "darthVader",
    hp: 200,
    attack: 10,
    counterAttack: 22,
    modifier: "",
    display: "Darth Vader",
  }
// character arrays ----------------------------------------------------------------------------------------------------------------------------------------------------------------
  var characters = ["admiralAkbar", "bobbaFett", "chewbaca", "darthVader"];
  var characterObject = [admiralAkbar, bobbaFett, chewbaca, darthVader];

  // create div's with images with for loop------------------------------------------------------------------------------------------------
  for (i = 0; i < characters.length; i++) {
    var name = characterObject[i].display;
    var characterbtn = $("<div>");
    characterbtn.addClass("float-left chara-button not-selected col col-1 " + characters[i]);
    characterbtn.data("data", characters[i]);
    characterbtn.prependTo("#char-sel");
    characterImage();
    chacterText();

    function chacterText() {
      var charText = $("<p>");
      charText.addClass("char-text");
      charText.text(name)
      charText.appendTo(characterbtn);
      };

    function characterImage() {
      var charImg = $("<img>");
      charImg.addClass("imgClear character-image img-fluid");
      charImg.appendTo(characterbtn);
      charImg.attr("src", "assets/images/" + characters[i] + ".jpg");
      };
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
      } else {;}
      } )
      }


// function to be run when player has chosen a character and chosen a character for computer player------------------------------------------
  function attackState() {
    $("#attack-button").on("click", function () {
      if (!computerCharacter) {
        ;
      } else {
        for (j = 0; j < characterObject.length; j++) {
          if (userCharacter.data == characterObject[j].data) {
            userCharacter = characterObject[j];
          } else if (computerCharacter.data == characterObject[j].data) {
            computerCharacter = characterObject[j];
          } else {;}
          }
          }
            fightAction();
            // checkGameState();
            displayStuff();
          } ) ;
          }

// calculate new character stats THIS SECTION NEEDS WORK-----------------------------------------------------------------------------------------
  function fightAction() {
    if ((userCharacter.hp > 0) && (computerCharacter.hp > 0)) {
      userCharacter.hp = userCharacter.hp - computerCharacter.counterAttack;
      computerCharacter.hp = computerCharacter.hp - userCharacter.attack;
      userCharacter.attack = userCharacter.attack + computerCharacter.counterAttack
    } else if (userCharacter.hp < 0) {
      userCharacter.hp = 0
    } else if (computerCharacter.hp < 0) {
      computerCharacter.hp = 0;
    } else {;}
    }
// ---------------------------------------------------------------------------------------------------------------------------------------------

// THIS SECTION NEEDS WORK: CHECK THE GAME STATE AND DISPLAY WIN/LOSE/PICK NEW CHARACTER/DELETE DEFEATED CHARACTER
  // function checkGameState() {
  //   if (userCharacter.hp == 0) {
  //     $(".after-action").text("YOU LOSE");
  //   } else if (computerCharacter.hp == 0) {
  //     game.step = 1;
  //     computerCharacter = "";

  //     $(".character").removeClass("comp-chara-sel");

  //   }
  // }


  // display the results of the attack state ------------------------------------------------------------------------------------------------------------------------
  function displayStuff() {
    $(".box-one").text(userCharacter.display + " HP:" + userCharacter.hp);
    $(".box-two").text(computerCharacter.display + " HP:" + computerCharacter.hp);
    $(".box-three").text(userCharacter.display + " did " + userCharacter.attack + " damage");
    $(".box-four").text(computerCharacter.display + " did " + computerCharacter.counterAttack + " damage");
  }


  // primary game object.
  var game = {
    state: charaSel(),
    step: 0,
  }





})