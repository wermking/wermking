var mgr;
//images
var lorcomp3;
var lorcomp3gif;
var lorcomp3gifa;
let tvGirl;
var imgFace;
var a;
var hit;
var mouseX;
var mouseY;
var buttonHit;
var l;
//json
var bmoretime;
var bmoreweather;
var sunsettime;
var sunrisetime;
var d;

//weather+time variables
var bmoredate;
var bdc;
var imgX;
var imgX0;
var imgX0a;
//fonts
var ftVarelaRound;
var ftWalter;
var ftVT323;
//displaytexts
var checkpoint = ["passed preload", "passed jsonload", "passed if", "passed mgr var hell", "passed draw"]
var dtime = ["day","sunr","night"];
function preload() {
    //preload images
    lorcomp3gifa = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadGif("assets/lorcomp3.gif");
    tvGirl = loadImage('assets/television.png');
    imgFace = loadImage('assets/smallface.png');
    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftWalter = loadFont('assets/WalterTurncoat-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    console.log(checkpoint[0])
    //preload json + apis
    imgX = loadJSON("cl-assetpath.json");
    //timezonedb
    bdc = loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
        0, 'jsonp');
    //openweather
    bmoreweather = loadJSON("http://api.openweathermap.org/data/2.5/weather?id=4347820&appid=b08c4875ac8fd1e3786ba9b3a376f783"
    );

    console.log(bdc);
    console.log(bmoreweather);
    if (bmoreweather) { "bmoreweather loaded" }
}

function setup() {
   
    createCanvas(1280, 720);
    chooseweather();
    console.log("1*");
    routeloading();
    console.log("2*");
    console.log(checkpoint[2])
    console.log(lorcomp3gifa);
    mgr = new SceneManager();
    
    console.log(checkpoint[3]);
    mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Statue);
    mgr.addScene(Dreams2);
    mgr.showScene(Intro);
}
function draw()
{
    mgr.draw();
}
function chooseweather() {
    sunrisetime = (bmoreweather.sys.sunrise);
    sunsettime = (bmoreweather.sys.sunset);
    //day
    if ((bdc.timestamp <= (sunsettime - 1800)) && (bdc.timestamp >= (sunrisetime + 1800))) { d = 0 };
    if ((bdc.timestamp <= (sunsettime - 1800)) && (bdc.timestamp >= (sunrisetime + 1800))) { d = 0 };
    //sunrise & sunset
    if ((bdc.timestamp >= (sunrisetime - 1800)) && (bdc.timestamp <= (sunrisetime + 1800)) ||
        (bdc.timestamp >= (sunsettime - 1800)) && (bdc.timestamp <= (sunsettime + 1800))) { d = 1 };
    //nighttime
    if ((bdc.timestamp <= (sunrisetime - 1800)) || (bdc.timestamp >= (sunsettime + 1800))) { d = 2 };

    console.log("d=", d);
    console.log("chooseweather completed!")
}

function routeloading() {
    if (d == 0) {
        imgX0 = loadImage(imgX.dayphase[0].gifpaths[0]);
        console.log("rl-0");
    }
    if (d == 1) {
        imgX0 = loadImage(imgX.dayphase[1].gifpaths[0]);
        console.log("rl-1");
    }
    if (d == 2) {
        imgX0 = loadImage(imgX.dayphase[2].gifpaths[0]),
        console.log("rl-2")
    }
    console.log("routeloading completed!");
    
}
console.log("wink!")
function mousePressed()
{
    mgr.mousePressed();
}
function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Animation1 );
            break;
        case '2':
            mgr.showScene( Animation2 );
            break;
        case '3':
            mgr.showScene( Animation3 );
            break;
    }
    
    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

// =============================================================
// =                         EXAMPLES                     = 
// =============================================================
function Animation1()
{
    var textX;
    var textY;
    
    // enter() will be executed each time the SceneManager switches
    // to this animation
    this.enter = function()
    {
    }
    this.keyPressed = function()
    {
        text(keyCode, textX, textY += 10);
        if ( textY > height )
        {
            textX += 20;
            textY = 0;
        }
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

function Animation2()
{
    this.y = 0;
    
    this.draw = function()
    {
        background("teal");
        line(0, this.y, width, this.y);
        this.y++;
        if ( this.y > height )
            this.y = 0;
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

// =============================================================
// =                         REAL SCENES                    = 
// =============================================================
function Intro() {
    
    this.setup = function (){
        console.log("intro")
        image(lorcomp3gifa,0,0);
    }

    this.draw = function () {
        drawIntroScreen();
    }
    this.mousePressed = function()
    {
        this.sceneManager.showScene( Statue );
    }
}

function drawIntroScreen() {
    textFont(ftVT323, 50);
    textAlign(CENTER);
    fill(255,255,255);
    text("what's up you bougie little fucker", 640, 670);
}

function Statue() {

    this.setup = function (){
        console.log("playing cl-statue.js");
        image(imgX0,0,0);
    }

    this.draw = function () {
        textFont(ftVT323, 50);
        textAlign(RIGHT);
        fill(255,255,255,70);
        text(dtime[d], 1220, 50);
    }

    this.mousePressed = function(){
        this.sceneManager.showScene( Dreams2 );
    }
}

function Dreams2()
{
this.setup = function() {

  createCanvas(1280,720);
  fill('cyan');
  noStroke();
  textFont(ftVarelaRound,100);
  
  frameRate(30);
  colorMode(HSB,256,100,100,1);
  image(imgFace,0,0);
  a=0;

}
this.mousePressed = function()
{
    this.sceneManager.showScene( Statue );
}

    this.draw = function(){ 
     a++;
      drawDreams2Screen();     
    }
}

function drawDreams2Screen(){
    textFont(ftVarelaRound,40);
    textAlign(LEFT);
    fill("white");
    noStroke();
    text('The whole world will run its fingers through your hair',200,200);
    push();
    blendMode(OVERLAY);
  background(0,100,50,.5);
  image(imgFace, 2*a, 25);
  image(tvGirl,640-a,360-a,2*a,2*a);
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






