class Player {
    constructor(){
        this.name = null;
        this.index = null;
        this.x =200 ;
        this.y =400 ;
    }

    readCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    readPosition(){
        var playerPosition = "players/player" + this.index;
        database.ref(playerPosition).on("value",(data)=>{
            position = data.val();
            this.x = position.x;
            this.y = position.y;
        })
            
    }

    writePosition(x,y){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
            x: position.x+x,
            y: position.y+y
        })
    }
    

  /*  update(){
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).update({
            name: this.name
        })
    }*/

    createPlayer(){
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({
            name: this.name,
            x: this.x,
            y: this.y
        })
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }



}