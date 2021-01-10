var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,clouds,cloud,obstacles;
var score= 0;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
  
  cloud = loadImage("ab.png");
  
  obstacle = loadImage("obstacle3.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle4.png");
  obstacle4 = loadImage("obstacle5.png");
  obstacle5 = loadImage("obstacle6.png");
  
  
  
}

function setup() {
 createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(2,190,400,15);
  invisibleGround.visible=false;
  
  
  
}

function draw() {
  background(0,10,10);
  
  //jump when the space button is pressed
  if (keyDown("space")&&trex.y>145) {
    trex.velocityY = -10;
  }
  text("score "+score,500,20);
  score = score+Math.round(frameCount/200);

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  
  
  Mcloud();
  Pobstacles();
  trex.collide(invisibleGround);
  drawSprites();
  console.log(trex.depth);
 
}


function Mcloud(){
 if(frameCount%50===0){
   clouds = createSprite(580,50,20,20);
  clouds.addImage(cloud);
  clouds.scale=0.4;
  clouds.velocityX=-5;
   clouds.y =  Math.round(random(50,110));
   trex.depth = clouds.depth;
  console.log(clouds.depth);
   clouds.lifetime=120;
}
}
function Pobstacles(){
  if(frameCount%50===0){
   obstacles = createSprite(580,165,40,40);
  obstacles.scale=0.1;
  obstacles.velocityX=-5;
  var ball=Math.round(random(1,6));
    obstacle.lifetime=120;
    switch(ball) {
      case 1: obstacles.addImage(obstacle);
        break;
        case 2:obstacles.addImage(obstacle1);
        break;
        case 3:obstacles.addImage(obstacle2);
         
        break;
         case 4:obstacles.addImage(obstacle3);
        obstacles.scale=0.05;
        break;
         case 5:obstacles.addImage(obstacle4);
        obstacles.scale=0.05;
        break;
         case 6:obstacles.addImage(obstacle5);
        break;
    }
   
}

  
}