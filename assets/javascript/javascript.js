$( document ).ready(function() {

  var admiralAkbar = {
    
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

  var admiralAkbar = $(".admiral-akbar");

  var bobbaFett = {
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

  var chewbaca = {
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

  var darthVader = {
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
      game.userCharacter.health = (game.userCharacter.health - game.compCharacter.attack);
      console.log(game.userCharacter);
      console.log(game.compCharacter);
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