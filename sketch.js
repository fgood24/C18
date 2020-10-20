var banana, monkey, bananaimage, monkeyanimation, stone, stoneimage, background1, monkeyImage, ground;
var PLAY = 1;
var END = 0;
var score;
var gameState = PLAY;
function preload(){
  bananaimage = loadImage("Banana.png");
  monkeyanimation = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  monkeyImage = loadAnimation("Monkey.png")
  background2 = loadImage("jungle2.jpg")
  stoneimage = loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  background1 = createSprite(0,200,400,400);
  background1.addImage("background", background2)
  background1.scale = 1
  background1.x = background1.width /2;
  background1.velocityX = -4;
  monkey = createSprite(50,350,10,10);
  monkey.addAnimation("monkey", monkeyanimation);
  monkey.addAnimation("monkey1", monkeyImage);
  monkey.scale = 0.15;
  banana = createSprite(500,250,10,10);
  banana.addImage("banana", bananaimage);
  banana.scale = 0.1;
  ground = createSprite(200,400,400,10);
  stone = createSprite(500,400,10,10);
  stone.addImage("stone", stoneimage);
  stone.scale = 0.18;
  score = 0;
}

function draw() {
  background("white");
 (monkey.collide(ground));
  monkey.velocityY = monkey.velocityY + 0.7;
  if(keyDown("space")& monkey.y > 350 & gameState === PLAY){
    monkey.velocityY = -12;
  }

  if(background1.x<0){
    background1.x = background1.width /2; 
  }
  if(gameState === PLAY){
 if (frameCount % 100 === 0) {
    banana.y = random(200,300);
    banana.velocityX = -5;

  }
  if(frameCount % 200 === 0) {
    stone.velocityX = - (6 + 3*score/10);
  }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")&& monkey.y > 350){
      monkey.velocityY = -12 ;
     }
    
  if   (monkey.isTouching(banana)){
  score = score + 1;
  banana.x = 500;
}
if(banana.x<0){
  score=score-1;
  banana.x = 500;
}
if(stone.x<0){
  stone.x = 500;
}
  if(monkey.isTouching(stone)){
    gameState = END;
  }
    }
  
  
  else if(gameState === END) {
    background1.velocityX = 0;
    monkey.velocityY = 0;
  monkey.changeAnimation("monkey1",monkeyImage);
    stone.velocityX = 0;
    banana.velocityX = 0;
    stone.setLifetime = -1;
    banana.setLifetime = -1;
    text("GameOver", 170, 200);
  }
  drawSprites();
   stroke("white");
  textSize(20); 
  fill("white");
  text("Score: "+ score, 150, 100);
}
function spawnRocks(){
  
}