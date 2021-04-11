var snowImg;



function preload(){
  snowImg= loadAnimation("snow1.png,snow2.png,snow3.png,snow4.webp,snow5.webp");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}