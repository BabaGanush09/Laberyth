var Gbackground, GbackgroundImg;
var Miles, milesImg;
var maze,mazeImg;
var ChillImg, Chill;



function preload(){
  GbackgroundImg = loadImage("GalaxyBackground.jpg")
 milesImg = loadImage("miles.png");
 mazeImg = loadImage("maze.png");
ChillImg = loadImage("Chill.gif");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
Chill = createSprite(width/2, height/2);
Chill.addImage(ChillImg);
Chill.scale=2;
Gbackground = createSprite(width/2, height/2);
Gbackground.addImage(mazeImg);
Gbackground.scale= 10;
Miles = createSprite(-1240, -1555);
Miles.addImage(milesImg);
Miles.scale = 0.2
maze = createSprite(width/2, height/2);




}


function draw(){
  background("white");
Miles.velocityY=0;
Miles.velocityX=0;

if(keyIsDown(87)){
  Miles.velocityY=-10;
}
if(keyIsDown(83)){
  Miles.velocityY=+10;
}
if(keyIsDown(65)){
  Miles.velocityX=-10;
}
if(keyIsDown(68)){
  Miles.velocityX=+10;
}
camera.position.y=Miles.y;
camera.position.x=Miles.x;


console.log(mouseY);
console.log(mouseX);

drawSprites();

//line(-1500,-2000,-1500, 2400);
//line(-1385,-2000,-1385, 2400);
//line(-1285,-2000,-1285, 2400);
line(-1400, -1718, 2750, -1718);

for(var i = -1386; i < 2750 ; i = i+50){
  line(i,-2000,i, 2400);
  
}
for (var i = -1718; i < 2400; i = i+50){
  line(-1400, i, 2750, i);
  text(i, -1400, i+5);
}




}
