var fixedBox,movingBox;
function setup() {
createCanvas(800,400);
fixedBox=createSprite(100, 200, 50, 50);
fixedBox.shapeColor="red";
fixedBox.velocityX=5;
movingBox=createSprite(700,200,50,50);
movingBox.shapeColor="orange";
movingBox.velocityX=-5;

}

function draw() {
background(150);  
if(isTouching(movingBox,fixedBox))
{
  movingBox.shapeColor="blue";
  fixedBox.shapeColor="green";
}
bounceOff(fixedBox,movingBox);
drawSprites();
}
