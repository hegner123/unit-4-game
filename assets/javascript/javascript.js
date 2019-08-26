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
    var hitpoints = characterObject[i].hp;
    var characterbtn = $("<div>");
    characterbtn.addClass("float-left chara-button not-selected col col-1 " + characters[i]);
    characterbtn.data("data", characters[i]);
    characterbtn.prependTo("#char-sel");
    characterImage();
    chacterText();

    function chacterText() {
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
            nextState();
            displayStuff();
            checkStats();
          } ) ;
          }

// calculate new character stats THIS SECTION NEEDS WORK-----------------------------------------------------------------------------------------
  function fightAction() {
    if ((userCharacter.hp > 0) && (computerCharacter.hp > 0)) {
      userCharacter.hp = userCharacter.hp - computerCharacter.counterAttack;
      computerCharacter.hp = computerCharacter.hp - userCharacter.attack;
      userCharacter.attack = userCharacter.attack + computerCharacter.counterAttack
      } else {;}
      }
// ---------------------------------------------------------------------------------------------------------------------------------------------


  

    function nextState () {
      if (computerCharacter.hp <= 0){
      $("div.attack-target > div").removeClass("comp-chara-sel");
      $("div.attack-target > div").addClass("defeated");
      computerCharacter = "";
      $(".defeated").hide();
      game.opponents-- ;
      game.step = 1;
      } else {;}
      }


    function checkStats () {
      if (game.opponents == 0) {
        $(".box-three").text("You Win");
        game.wins++;
      } else if (userCharacter.hp < 0){
        $(".box-three").text("You lose");
        game.losses++;
      } else {;}
      }

    function win () {
      
    }


     // display the results of the attack state ------------------------------------------------------------------------------------------------------------------------
  function displayStuff() {
    if (!computerCharacter == false){
      $("div.user-chara-sel > p").text(userCharacter.hp);
      $("div.comp-chara-sel > p").text(computerCharacter.hp);
      $(".box-three").text(userCharacter.display + " did " + userCharacter.attack + " damage");
      $(".box-four").text(computerCharacter.display + " did " + computerCharacter.counterAttack + " damage");
    } else if (!computerCharacter) {
      $("div.user-chara-sel > p").text(userCharacter.hp);
      $(".box-three").text(userCharacter.display + " did " + userCharacter.attack + " damage");
      $(".box-four").text("");
    } else {;}
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