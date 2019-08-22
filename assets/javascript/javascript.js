$( document ).ready(function() {



var game = {
  state: pauseState(),
  battleState: "",
  userCharacter: "" ,
  userCharacterSet: false,
  computerCharacter: "",
  computerCharacterSet: false,
  modifiers: "",
  character1: $("#admiral-akbar"),
  character2: $("#bobba-fett"),
  character3: $("#chewbaca"),
  character4: $("#darth-vader"),
  characters: $(".character"),

  characterSelect: function () {
    
    $(game.characters).click(function () {
      if (game.userCharacter === ""){
;
      } else {
        $(game.userCharacter).removeClass("user-chara-sel");
        game.userCharacter = "";
      }
      $(this).addClass("user-chara-sel");
      $(this).removeClass("not-selected")
      game.userCharacter = $(this);
      game.userCharacterSet = true;

      $(".not-selected").appendTo("#enemy-select");
      game.battleState = game.computerCharacterSelect();
      console.log(game);
      return "characterSelect"
      
    })
  },
  computerCharacterSelect: function () {
    console.log(game);
    $(game.characters).click(function () {

      if (game.computerCharacter === "") {
        ;
        
      } else  {

        $(game.computerCharacter).removeClass("comp-chara-sel");
        game.computerCharacter = "";
      }
     
      game.computerCharacter = $(this);
      game.computerCharacterSet = true,
      
      $(this).addClass("comp-chara-sel");
      $(this).removeClass("not-selected");
      $(".comp-chara-sel").appendTo("#attack-target");
      
      return "compCharacterSelect"

    })
  },
  
}

function pauseState(){

  $(document).click(function(){
    game.state = $(playState());
  });
  return "pauseState";
}


function playState () {
  game.battleState = game.characterSelect();

  
  }

  return "playState";})


  


  function checkBattleState () {
    $(game.characters).click(function (){
      if ((game.userCharacter === "") && (game.computerCharacter === "")) {
        ;
      } else {
        game.battleState = "";
      }
      
    })}