$( document ).ready(function() {

// create div's with images with for loop

var characters = ["admiralAkbar", "bobbaFett", "chewbaca", "darthVader"];

for (i=0;i<characters.length;i++) {
  var characterbtn = $("<div>");
    characterbtn.addClass("chara-button character not-selected " + characters[i]);
    // characterbtn.attr("character-name", characters[i]);
    characterbtn.appendTo("#char-sel");
    console.log(characterbtn);
    characterImage();
    function characterImage() {
      var charImg = $("<img>");
      charImg.addClass("imgClear");
      charImg.appendTo(characterbtn);
      charImg.attr("src", "assets/images/" + characters[i] + ".jpg");
    }
}



  var admiralAkbar = {
    
    health: 100,
    attack: 20,
    counterAttack:25,
    modifier: "",
  }

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
      if (game.step < 3) {
        $(".chara-sel").css("height", "50px");
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



assets/images/admiral_akbar.jpg