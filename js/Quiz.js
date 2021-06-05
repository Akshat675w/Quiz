class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    textSize(30)
    text("Quiz Start",120,100)
    Player.getPlayerInfo()
    if(allContestant!==undefined){
      var display_position = 130
      for(var plr in allContestant){

      
      if(plr === "contestant"+contestant.index)
        fill("green")
      
      else

            fill("red")

      
      textSize(15)
      text(allContestant[plr].name+" : ")
    }
    }
 
   contestant.update()
    
  

  }
}
