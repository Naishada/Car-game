//making variables;
var database;
var gameState = 0;
var playerCount ;
var form;
var player;
var game;
var allPlayers;
var car1,car2,car3,car4;
var cars = [];
function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
        game.play();
    }
}