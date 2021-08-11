var runner,runner_running;
var path,invisibleBoundary1,invisibleBoundary2;
function preload(){
  //pre-load images
  runner_running=loadAnimation("Runner-1.png","Runner-2.png");
  moving_path=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,400);
  path.addImage(moving_path);
  path.velocityY=-4
 

  runner=createSprite(300,300,1,1);
  runner.addAnimation("running",runner_running);
  runner.scale=0.09;

  invisibleBoundary1=createSprite(375,200,60,400);
  invisibleBoundary2=createSprite(25,200,60,400);
  invisibleBoundary1.visible=false;
  invisibleBoundary2.visible=false;
}

function draw() {
  background(0);

  path.velocityY=4;
  if(path.y > 400) {
    path.y=height/2;
  }
  
  runner.x=mouseX;
  runner.collide(invisibleBoundary1);
  runner.collide(invisibleBoundary2);

  drawSprites();
}
