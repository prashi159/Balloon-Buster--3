var backGround, backGroundImage;
var bow, bowImage;
var redBalloon, greenBalloon, blueBalloon, pinkBalloon;
var redImage, greenImage, blueImage, pinkImage;
var arrow, arrowImage;
var rand;



function preload() {
  
  //To load the background image
  backGroundImage = loadImage("background0.png");
  
  //To load the bow image
  bowImage = loadImage("bow0.png");
  
  //To load the images of the balloons
  redImage = loadImage("red_balloon0.png");
  greenImage = loadImage("green_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  
  //To load the image of the arrow
  arrowImage = loadImage("arrow0.png");

}

function setup() {
  createCanvas(600, 600);

  backGround = createSprite(0, 0, 600, 600);
  backGround.addImage(backGroundImage);
 
  backGround.scale = 2.5;

  bow = createSprite(480, 220, 20, 50);
  bow.addImage(bowImage);
  bow.scale = 1;

  console.log(rand);





}

function draw() {

  // background(220)
  
  // To make the background move
   backGround.velocityX = -3;
  
  // To make the background reset 
  if (backGround.x < 0) {
    backGround.x = backGround.width / 2;

  }
  
   bow.y = World.mouseY;

  

  // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
  }

  var select_balloon = Math.round(random(1, 4));
  console.log(select_balloon);

  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      blueBalloon();
    } else if (select_balloon == 3) {
      greenBalloon();
    } else {
      pinkBalloon();
    }

  }

  // redBalloon();
  // blueBalloon();
  // greenBalloon();
  // pinkBalloon();



  //  for(i = 60; i < 300; i = i+40){
  //    redBalloon = createSprite(20,i,20,40);
  //    redBalloon.addImage(redImage);
  //    redBalloon.scale = 0.06;
  // }
  // for(i = 100; i < 300; i = i+40){
  //    greenBalloon = createSprite(50,i,20,40);
  //    greenBalloon.addImage(greenImage);
  //    greenBalloon.scale = 0.06;
  // }
  // for(i = 140; i < 300; i = i+40){
  //    blueBalloon = createSprite(80,i,20,40);
  //    blueBalloon.addImage(blueImage);
  //    blueBalloon.scale = -0.06;
  // }
  // for(i = 180; i < 300; i = i+40){
  //    pinkBalloon = createSprite(110,i,20,40);
  //    pinkBalloon.addImage(pinkImage);
  //    pinkBalloon.scale = 0.7;
  // }



  drawSprites();



}




function redBalloon() {
  if (frameCount % 80 === 0) {
    red = createSprite(0, Math.round(random(20, 370)), 10, 10);
    red.addImage(redImage);
    red.velocityX = 3;
    red.lifetime = 200;
    red.scale = 0.1;
  }
  console.log(frameCount);

}

function blueBalloon() {
  if (frameCount % 80 === 0) {
    blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
    blue.addImage(blueImage);
    blue.velocityX = 3;
    blue.lifetime = 200;
    blue.scale = 0.1;
  }
}

function greenBalloon() {
  if (frameCount % 80 === 0) {
    green = createSprite(0, Math.round(random(20, 370)), 10, 10);
    green.addImage(greenImage);
    green.velocityX = 3;
    green.lifetime = 200;
    green.scale = 0.1;
  }
}

function pinkBalloon() {
  if (frameCount % 80 === 0) {
    pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
    pink.addImage(pinkImage);
    pink.velocityX = 3;
    pink.lifetime = 200;
    pink.scale = 1;
  }
}

// Creating  arrows for bow
function createArrow() {
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}