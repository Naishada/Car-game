class Player{
    constructor(){
        this.name = null
        this.distance = 0
        this.index = null
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }
    update(){
        //player1 - child node - name - value
        //player + playerCount - players/player1 .. players/player2 ...
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
        
    }
    //Player.getAllPlayersInfo()
    // static function is attached to the class itself
    static getAllPlayersInfo(){
        var playersRef = database.ref("players");
        playersRef.on("value",function(data){
            allPlayers = data.val();
        })
    }
}