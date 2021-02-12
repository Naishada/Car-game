class Game{
    constructor(){
        
    }

    getState(){
        var  gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
       database.ref('/').update({
           gameState:state
       });

    }

    start(){
       if(gameState === 0){
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200,20,20);
        car2 = createSprite(130,200,20,20);
        car3 = createSprite(160,200,20,20);
        car4 = createSprite(190,200,20,20);
        cars = [car1,car2,car3,car4];
    }

    /* allPlayers = {
        player1: name:""
                 distance:0
        player2: name:""
                 distance:0
    }
    //player3 - player.index = 3, car3 - index - 2
    allPlayers.player1.name
    */
   //class-39
    play(){
        // display information of all the players
        Player.getAllPlayersInfo();
        console.log(allPlayers);
        form.greeting.hide();
        //for-in loop
        // Name : Distance
        var index = 0;
        var xPos = 100;
        var yPos;
        for(var plr in allPlayers){
            //text( allPlayers[plr].name + ":" + allPlayers[plr].distance,250,y); 
            yPos = height - allPlayers[plr].distance;
            cars[index].x = xPos;
            cars[index].y = yPos;

            if(player.index === index + 1){
                cars[index].shapeColor = "red";
                camera.position.y = cars[index].y
            }

            xPos = xPos + 50;
            index = index+1;
        }
        if(keyDown(UP_ARROW)){
            player.distance +=50;
            player.update();
        }

        drawSprites();
    }
}