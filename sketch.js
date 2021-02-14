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
var car01,car02,car03,car04,ground,track0,track1;
function preload(){

    car01 = loadImage("images/car1.png");
    car02 = loadImage("images/car2.png");
    car03 = loadImage("images/car3.png");
    car04 = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");
    track0 = loadImage("images/track.jpg");
    track1 = loadImage("images/track.png")
}
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
    if(gameState === 2){
        game.end();
    }
}