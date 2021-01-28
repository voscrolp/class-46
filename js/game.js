class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value",(data)=>{
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
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.readCount();
            }

        form = new Form();
        form.display();

        }

        player1 = createSprite(200,100);
        player1.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player1.scale = 0.1;
        //player1.visible = false;
         
        player2 = createSprite(200,300);
        player2.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player2.scale = 0.1;
        //player2.visible = false;

        player3 = createSprite(200,500);
        player3.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player3.scale = 0.1;
         //player3.visible = false;

        player4 = createSprite(200,400);
        player4.addAnimation("gameFiles/playerIdle/frame_0_delay-0.5s.png","gameFiles/playerIdle/frame_1_delay-0.5s.png","gameFiles/playerIdle/frame_2_delay-0.5s.png");
        player4.scale = 0.1;
        //player4.visible = false;

        players = [player1,player2,player3,player4];

       
    }

    play(){
        form.hide();
        var monster;

        if(frameCount == 400){
          monster = createSprite(400,400);
          monster.velocityX = 2;
          monster.addAnimation(monsterAnimation);
        }

        

        
       
        Player.getPlayerInfo();
        //read initial position 
        //on presseing key change value in database 
        
        if(allPlayers !== undefined){
            var index = 0;
           

            for(var plr in allPlayers){
                player.readPosition();
                index = index + 1;
   
                if(index == player.index){
                   players[index-1].shapeColor="red";
                   if(keyDown('D') || keyDown('d') && index==player.index){
                    player.writePosition(3,0);
                    player.readPosition();
                    players[index-1].x=player.x;
                    players[index-1].y=player.y;
                }
                if(keyDown('A') || keyDown('a') && index==player.index){
                    player.writePosition(-3,0);
                    player.readPosition();
                    players[index-1].x=player.x;
                    players[index-1].y=player.y;
                }
                if(keyDown('W') || keyDown('w') && index==player.index){
                    player.writePosition(0,-3);
                    player.readPosition();
                    players[index-1].x=player.x;
                    players[index-1].y=player.y;
                }
                
                if(keyDown('S') || keyDown('s') && index==player.index){
                    player.writePosition(0,3);
                    player.readPosition();
                    players[index-1].x=player.x;
                    players[index-1].y=player.y;
                }
            } 
            }     
        }
        drawSprites();
    }

    }