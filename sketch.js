var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1 = createSprite(100,100,50,80);
  obj2 = createSprite(200,100,50,80);
  obj3 = createSprite(300,100,50,80);
  obj4 = createSprite(400,100,50,80);
  obj3.velocityX = 2;
  obj4.velocityX = -2;

}

function draw() {
  background(0,0,0);  

obj1.x = World.mouseX
obj1.y = World.mouseY
if(isTouching(obj1, obj2)) {
  obj1.shapeColor = 'red';
  obj2.shapeColor = 'lime';

}
else {
  fixedRect.shapeColor = 'grey';
  movingRect.shapeColor = 'grey';
}
bounceOff(obj3, obj4);

 
  drawSprites();
}


  


