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
        car1.addImage("car1",car01);
        car2 = createSprite(130,200,20,20);
        car2.addImage("car2",car02);
        car3 = createSprite(160,200,20,20);
        car3.addImage("car3",car03);
        car4 = createSprite(190,200,20,20);
        car4.addImage("car4",car04);
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
        player.getFinishedCars();
        console.log(allPlayers);
        form.greeting.hide();
        //for-in loop
        // Name : Distance
        var index = 0;
        var xPos = 425;
        var yPos;
        console.log(player.distance);
        image(track0,0,-4*height,width,5*height);
        for(var plr in allPlayers){
            //text( allPlayers[plr].name + ":" + allPlayers[plr].distance,250,y); 
            yPos = height - allPlayers[plr].distance;
            cars[index].x = xPos;
            cars[index].y = yPos;

            if(player.index === index + 1){
                fill("red");
                circle(xPos,yPos,100);
                camera.position.y = cars[index].y-height/2+100;
            }

            xPos = xPos + 200;
            index = index+1;
        }
        if(keyDown(UP_ARROW)){
            player.distance +=50;
            player.update();
        }
        if(player.distance >= 3200){
            player.rank = player.rank + 1;
            player.updateFinishedCars(player.rank);
            player.update();
            gameState = 2;
        }
        

        drawSprites();
    }
    end(){
        background("white");
        console.log("Game ended");
        console.log(player.rank);
        var yPos = 300;
        camera.position.y = height/2;
        camera.position.x = width/2;
        for(var plr in allPlayers){
            fill("red");
            textSize(25);
            text(allPlayers[plr].name + " : " + allPlayers[plr].rank , width/2, yPos);
            yPos = yPos +50;
        }
    }
}