$( document ).ready(function() {

// create div's with images with for loop


  var admiralAkbar = {
    select: $(".admiral-akbar"),
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

  

  var bobbaFett = {
    select: $(".bobba-fett"),
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

  var chewbaca = {
    select: $(".chewbaca"),
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

  var darthVader = {
    select: $(".dath-vader"),
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

 


  function charaSel (){
    $(".character").on("click", function(){
      if (game.step < 1){
        game.userCharacter = this;
      $(this).addClass("user-chara-sel");
      $(this).removeClass("not-selected");
      $(".not-selected").appendTo("#enemy-select");
      game.state = compCharacter();
      console.log(game);
      game.step += 1;
      } else {
        ;
      }
      
    })
  }

  function compCharacter(){
    $(".character").on("click", function(){
      if (game.step < 2){
        game.compCharacter = this;
      $(this).addClass("comp-chara-sel");
      $(".comp-chara-sel").appendTo("#attack-target");
      game.state = attackState();
      console.log(game);
      game.step += 1;
      } else {
        ;
      }
      
    })
  }

  function attackState(){
    $("#attack-button").on("click", function (){
      if (game.step < 3) {
        ;
        game.step += 1;
      } else {
      console.log(game.userCharacter);
      console.log(game.compCharacter);
      }
      
    })
    ;
  }
 
  var game = {
    state: charaSel(),
    userCharacter: "",
    step:0,
    compCharacter: "",
  }


  


})