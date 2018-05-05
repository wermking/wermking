var img;
var c;
var a;
var hit = false;
var mouseX;

//fonts
var ftWalter;
var ftVarelaRound;
var ftVT323;

//images
let tvGirl;

function preload () {
  ftWalter = loadFont('assets/WalterTurncoat-Regular.ttf');
  ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
  ftVT323 = loadFont('assets/VT323-Regular.ttf');
  tvGirl = loadImage('assets/television.png');


}

function setup() {
  
  createCanvas(1280,720,P2D);
  background('cyan');
  fill('white');
  noStroke();
  textFont(ftVarelaRound);
  text('please work for me :[',100,100);
  a = 0;
  frameRate(30);
  colorMode(HSB,256,100,100,1);
 img = loadImage('assets/smallface.png',function(img){
  image(img, 25, 25);
 });
  
}

function draw() {
  noStroke();
background(0,100,50,.5);
blendMode(OVERLAY);
  a=a+1;

  push();
 
  image(img, 2*a, 25);
  
  pop();
 
  

  image(tvGirl,640-a,360-a,2*a,2*a);
  

  push();
  fill(200,0,100,.8)

  textFont(ftVarelaRound,2*a);
  text('oh',(a^2),100+a);
  pop();

  basicbutton();
  
}


function basicbutton() {
  push();
  noStroke();
  fill(0,100,65);
  hit = collidePointRect(mouseX, mouseY, 4*a, 100, 200, 100); //see if the mouse is in the rect
  if (hit) { 
    blendMode(SCREEN);
  }
  else {
    blendMode(NORMAL);
  }
  rect(4*a, 100, 200, 100);
  pop();
}
 