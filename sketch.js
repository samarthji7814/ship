var sea
var seaimg
var ship
var shipimg


function preload(){
shipimg=loadAnimation("ship1.png","ship2.png")



seaimg=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship= createSprite(30,180,20,20)
  ship.addAnimation(shipimg)
  sea=createSprite(10,250,600,10);
  sea.x=sea.width/2
  sea.velocityX=-2;
  sea.visible=false

 
}

function draw() {
  background(seaimg);
  if (keyDown("space")) {
    ship.velocityY = -10;
  }
  
  ship.velocityY = ship.velocityY + 0.8
  
  if (sea.x < 0){
    sea.x=sea.width/2
  }
 ship.collide(sea)
drawSprites()
}