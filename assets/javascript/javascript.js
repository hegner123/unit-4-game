$( document ).ready(function() {
  // main character variables
  
var userCharacter = "";

var computerCharacter = "";

// character objects
  var admiralAkbar = {
    data:"admiralAkbar",
    hp: 100,
    attack: 20,
    counterAttack: 5,
    modifier: "",
    display: "Admiral Akbar",
  }

  var bobbaFett = {
    data:"bobbaFett",
    hp: 100,
    attack: 20,
    counterAttack: 5,
    modifier: "",
    display: "Bobba Fett",
  }

  var chewbaca = {
    data:"chewbaca",
    hp: 100,
    attack: 20,
    counterAttack: 5,
    modifier: "",
    display: "Chewbaca"
  }

  var darthVader = {
    data:"darthVader",
    hp: 100,
    attack: 100,
    counterAttack: 1000,
    modifier: "",
    display: "Darth Vader",
  }

var characters = ["admiralAkbar", "bobbaFett", "chewbaca", "darthVader"];
var characterObject = [admiralAkbar, bobbaFett, chewbaca, darthVader];

// create div's with images with for loop
for (i=0;i<characters.length;i++) {
  var characterbtn = $("<div>");
    characterbtn.addClass("chara-button character not-selected " + characters[i]);
    characterbtn.data("data", characters[i]);
    characterbtn.appendTo("#char-sel");
    console.log(characterbtn.data());
    characterImage();
    function characterImage() {
      var charImg = $("<img>");
      charImg.addClass("imgClear character-image");
      charImg.appendTo(characterbtn);
      charImg.attr("src", "assets/images/" + characters[i] + ".jpg");
    }
}

  function charaSel (){
    $(".character").on("click", function(){
      if (game.step < 1){
        userCharacter = $(this).data();
      $(this).addClass("user-chara-sel");
      $(this).removeClass("not-selected");
      $(".not-selected").appendTo("#enemy-select");
      game.state = compCharacter();
      console.log(userCharacter);
      game.step += 1;
      } else {
        ;
      }
      
    })
  }

  function compCharacter(){
    $(".character").on("click", function(){
      if (game.step < 2 && ($(this).hasClass("not-selected"))) {
        computerCharacter = $(this).data();
      $(this).addClass("comp-chara-sel");
      $(".comp-chara-sel").appendTo("#attack-target");
      game.state = attackState();
      console.log(computerCharacter);
      game.step += 1;
      } else {
        ;
      }
    })
  }

  function attackState(){
    $("#attack-button").on("click", function (){
      for (j=0;j<characterObject.length;j++) {
        console.log(characterObject[j].data);
        if (userCharacter.data == characterObject[j].data ) {
          userCharacter = characterObject[j];
        } else if ( computerCharacter.data == characterObject[j].data) {
          computerCharacter = characterObject[j];
        } else {
          console.log(userCharacter);
          console.log(computerCharacter);
        }
      }

      fightAction();
      $(".after-action").text(userCharacter.display + " :" + userCharacter.hp + "     " + computerCharacter.display + " :" + computerCharacter.hp);
      checkGameState();

    });}
    
  function fightAction () {
  userCharacter.hp = userCharacter.hp - computerCharacter.counterAttack;
  computerCharacter.hp = computerCharacter.hp - userCharacter.attack;
}

function checkGameState () {
  if (userCharacter.hp < 0) {
    ;
  } else if (computerCharacter.hp == 0) {
    game.step = 1;
    computerCharacter = "" ;
    
    $(".character").removeClass("comp-chara-sel");
    
  }
}
     
  var game = {
    state: charaSel(),
    userCharacter: "",
    step:0,
    compCharacter: "",
  }


  


})



