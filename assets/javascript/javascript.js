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
      game.userCharacter = $(this);
      game.userCharacterSet = true,
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
      $(this).addClass("comp-chara-sel");
      game.computerCharacter = $(this);
      game.computerCharacterSet = true,
      game.battleState = ""
      
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

  $(game.characters).click(function () {
  if (game.userCharacterSet === false) {
    ;
  } else {
;
  };
})

  
  return "playState";
}







  });