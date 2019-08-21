$( document ).ready(function() {
  
  var game = {
    state:pauseState()

  }


function pauseState(){
  ;
}


var character1 = document.getElementById("admiral-akbar");



var admiralAkbar = {
    health: 100,
    attack: 25,
    
  }

  function select(character) {
    $(character).click(function() {
      $(character).css("border-color","red");
    });
    $("#darth-vader, #chewbaca, #bobba-fett").click(function () {
      $(character).css("border-color","black")
    })
  }

  
  
select(character1);


   


  var boobaFett = {
    health: 100,
    attack: 25,
    
  }

  var chewbaca = {
    health: 100,
    attack: 25,
    
  }

  var darthVader = {
    health: 100,
    attack: 25,
    
  }






















  });


