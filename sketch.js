var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var plane1,plane2;
var plane1Img,plane2Img;
var track,ground;
var planes;

var form, player, game;

function preload() {
plane1Img=loadImage("images/plane1.png");
plane2Img=loadImage("images/plane2.png");

track=loadImage("images/bg.jpg");


}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-60);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
