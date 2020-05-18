var back,e1,h,gm;
var distance=0;
function preload(){
  back = loadImage('track.png');
  e1 = loadImage('enemy.png');
  h = loadImage('hero.png');
  gm = loadImage('g.png');

}
function setup(){
  createCanvas(600,600);

  track = createSprite(300,300);
  track.addImage(back);
  track.scale = 0.95;

  enemy1 = createSprite(random(60,310),-100);
  enemy1.addImage(e1);
  enemy1.scale = 0.3;
  enemy1.velocityY = 10;
  
  enemy1.setCollider("rectangle",0,0,220,420);
 

  enemy2 = createSprite(random(370,550),-500);
  enemy2.addImage(e1);
  enemy2.scale = 0.3;
  enemy2.velocityY = 10;
  
  enemy2.setCollider("rectangle",0,0,240,440);

  hero = createSprite(300,530);
  hero.addImage(h);
  hero.scale = 0.25;
 
  hero.setCollider("rectangle",-15,0,320,540);
}

function draw(){
 background(0);

 track.velocityY = 10;

 if (track.y > 400) {
   track.y = track.height/4;
 }

 if(enemy1.y>650){
   enemy1.x = random(60,300);
   enemy1.y = -100;
 }
 if(enemy2.y>650){
  enemy2.x = random(370,550);
  enemy2.y = -300;
}
if(hero.visible == true){
  distance=distance+1;
}



if(keyDown("LEFT_ARROW") && hero.x >75){
  hero.x  = hero.x-8;
}
if(keyDown("RIGHT_ARROW") && hero.x < 525){
  hero.x  = hero.x+8;
}
if(keyDown("UP_ARROW")){
  track.velocityY = 16;
  enemy1.velocityY =16;
  enemy2.velocityY =16;
  if(hero.visible == true){
    distance = distance+2;
  }
  
}else{
  track.velocityY = 10;
  enemy1.velocityY =10;
  enemy2.velocityY =10;
}
if(hero.isTouching(enemy1) || hero.isTouching(enemy2)){

  hero.visible = false;
  enemy1.visible = false;
  enemy2.visible = false;
}
if(hero.visible == false){
 var game = createSprite(300,300);
 game.addImage(gm);
 game.scale = 0.75;

}

 drawSprites();
 
 fill("red")
 textSize(25);
 text('distance: '+distance+'m',370,40);
 if(hero.visible == true){
 textSize(17);
 text('move and save your car by pressing left and right arrows',40,60);
 text('to increase your speed press up arrow of your keyboard ',40,80);
 }
 
}