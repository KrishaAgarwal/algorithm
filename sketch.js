var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400,200,80,50);

  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background(0);
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 && 
   fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
   movingrect.y - fixedrect.y < fixedrect.hight/2 + movingrect.hight/2 && 
   fixedrect.y - movingrect.y < fixedrect.hight/2 + movingrect.hight/2 
   ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
  
  drawSprites();
}