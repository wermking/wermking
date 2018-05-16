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
var imgOL = [];

//json+api
var at;
var bmoreTimezonedb;
var btz;
var bmoreWeather;

//functions
var dp;
var d;
var r;
var atn;

//calculators
var sunrisetime;
var sunsettime;
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
var dtime = ["day", "sunr", "night"];

function preload() {
    //preload images
    lorcomp3gifa = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadGif("assets/lorcomp3.gif");
    tvGirl = loadImage('assets/television.png');
    imgFace = loadImage('assets/smallface.png');
    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    //preload json + apis
    at = loadJSON("v3-at.json");
    //timezonedb
    btz = loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
        0, 'jsonp');
    //openweather
    bmoreWeather = loadJSON("http://api.openweathermap.org/data/2.5/weather?id=4347820&appid=b08c4875ac8fd1e3786ba9b3a376f783"
    );
    imgX = loadJSON("v3-assetpath.json");
    console.log(btz);
    console.log(bmoreWeather);
    if (bmoreWeather) { "bmoreweather loaded" }
}

function setup() {

    createCanvas(windowWidth, ((9 / 16) * windowWidth));
    chooseweather();
    routeloading();
    colorMode(HSL, 360, 100, 100, 1);
    frameRate(30);
    loadAtmonoise();
    atn = 0;
    atmocolor();
    console.log(checkpoint[2])
    console.log(lorcomp3gifa);
    mgr = new SceneManager();

    console.log(checkpoint[3]);
    mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Atmotest);
    mgr.addScene(Statue);
    mgr.addScene(Dreams2);
    mgr.showScene(Intro);
}
function draw() {
    mgr.draw();
}
function chooseweather() {
    sunrisetime = (bmoreWeather.sys.sunrise);
    sunsettime = (bmoreWeather.sys.sunset);
    //day
    if ((btz.timestamp <= (sunsettime - 1800)) && (btz.timestamp >= (sunrisetime + 1800))) { d = 0 };
    if ((btz.timestamp <= (sunsettime - 1800)) && (btz.timestamp >= (sunrisetime + 1800))) { d = 0 };
    //sunrise & sunset
    if ((btz.timestamp >= (sunrisetime - 1800)) && (btz.timestamp <= (sunrisetime + 1800)) ||
        (btz.timestamp >= (sunsettime - 1800)) && (btz.timestamp <= (sunsettime + 1800))) { d = 1 };
    //nighttime
    if ((btz.timestamp <= (sunrisetime - 1800)) || (btz.timestamp >= (sunsettime + 1800))) { d = 2 };

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
function mousePressed() {
    mgr.mousePressed();
}
function keyPressed() {
    // You can optionaly handle the key press at global level...
    switch (key) {
        case '1':
            mgr.showScene(Animation1);
            break;
        case '2':
            mgr.showScene(Animation2);
            break;
        case '3':
            mgr.showScene(Animation3);
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
// =============================================================
// =                        FREQ FUNCTIONS                      = 
// =============================================================
function windowResized() {
    resizeCanvas(windowWidth, ((9 / 16) * windowWidth));
}
function atmonoise() {
    push();
    blendMode(OVERLAY);
    atn++
    if (atn > 4) {
        atn = 0;
    }
    image(imgOL[atn], 0, 0, windowWidth, ((9 / 16) * windowWidth))
    pop();
}
function loadAtmonoise() {
    for (var atn = 0; atn < 5; atn++) {
        imgOL.push(loadImage(at.atmonoise[atn], console.log("ol loaded", atn)));
    } if (atn > 4) {
        atn = 0;
    }
}
function grid() {
    var j = (width / 16);
    stroke("navy");
    for (i = 0; i < 17; i++) {
        rect(i * j, 0, 0, height);
        rect(0, i * j, width, 0);
    }
    stroke("black");
    rect(.5 * width, 0, 1, height);
    rect(0, .5 * height, width, 0);
}
function atmocolor() {
    //12:00am is 0.
    var skyIvl;
    var sky0 = color(227, 68, 36, 1);
    var sky1 = color(342, 94, 73, 1);
    var sky2 = color(12, 72, 100, 1);
    var sky3 = color(43, 72, 100, 1);
    var sky4 = color(210, 70, 40, 1);

    if (btz.dst = 1) {
        console.log("dst true")
        sunrisetime = ((bmoreWeather.sys.sunrise - 14400) % 86400);
        console.log(bmoreWeather.sys.sunrise);
        console.log("sunrisetime=", sunrisetime);
        sunsettime = ((bmoreWeather.sys.sunset - 14400) % 86400);
        console.log("sunsettime=", sunsettime);
        currenttime = ((btz.timestamp % 86400));
        console.log("currenttime=", currenttime);
    } else {
        sunrisetime = ((bmoreWeather.sys.sunrise - 18000) % 86400);
        console.log(bmoreWeather.sys.sunrise);
        console.log("sunrisetime=", sunrisetime);
        sunsettime = ((bmoreWeather.sys.sunset - 18000) % 86400);
        console.log("sunsettime=", sunsettime);
        currenttime = (btz.timestamp % 86400);
        console.log("currenttime=", currenttime);
    }
    //night1+2
    if (currenttime <= (sunrisetime - 3600) || currenttime > (sunsettime + 3600)) {
        background(227, 68, 36, 1);
        dp = 0;
    }

    //night to red
    if (currenttime > (sunrisetime - 3600) && (currenttime <= (sunrisetime - 1800))) {
        skyIvl = ((currenttime - (sunrisetime - 3600)) / 1800)
        background(lerpColor(sky0, sky1, skyIvl));
        dp = 1;
    }
    //red interlude
    if (currenttime > (sunrisetime - 1800) && (currenttime <= (sunrisetime - 900))) {
        background(342, 94, 73, 1);
        dp = 2;
    }
    //red to orange
    if (currenttime > (sunrisetime - 900) && currenttime <= sunrisetime) {
        skyIvl = ((currenttime - (sunrisetime - 900)) / 900)
        background(lerpColor(sky1, sky2, skyIvl));
        dp = 3;
    }
    //golden hour
    if ((currenttime > sunrisetime) && (currenttime <= (sunrisetime + 900))) {
        skyIvl = ((currenttime - sunrisetime) / 900)
        background(lerpColor(sky2, sky3, skyIvl));
        dp = 4;
    }
    //gold to day
    if ((currenttime > (sunrisetime + 900)) && (currenttime <= (sunrisetime + 1800))) {
        skyIvl = ((currenttime - (sunrisetime + 900)) / 900)
        background(lerpColor(sky3, sky4, skyIvl));
        dp = 5;
    }

    //day
    if ((currenttime > (sunrisetime + 1800)) && (currenttime <= (sunsettime - 3600))) {
        background(sky4);
        dp = 6;
    }
    //day to gold
    if ((currenttime > (sunsettime - 3600)) && (currenttime <= (sunsettime - 2700))) {
        skyIvl = ((currenttime - (sunsettime - 3600)) / 900)
        background(lerpColor(sky4, sky3, skyIvl));
        dp = 7;
    }
    //sr gold hr 
    if ((currenttime > (sunsettime - 2700)) && (currenttime <= (sunsettime - 1800))) {
        skyIvl = ((currenttime - (sunsettime - 2700)) / 900)
        background(lerpColor(sky3, sky2, skyIvl));
        dp = 8;
    }
    //orange to red
    if ((currenttime > (sunsettime - 1800)) && (currenttime <= (sunsettime - 900))) {
        skyIvl = ((currenttime - (sunsettime - 1800)) / 900)
        background(lerpColor(sky2, sky1, skyIvl));
        dp = 0;
    }
    //sr red interlude
    if ((currenttime > (sunsettime - 900)) && (currenttime <= sunsettime)) {
        background(sky1);
        dp = 10;
    }
    //red to night
    if ((currenttime > sunsettime) && (currenttime <= (sunsettime + 1800))) {
        skyIvl = ((currenttime - sunsettime) / 1800)
        background(lerpColor(sky1, sky0, skyIvl));
        dp = 11;
    }

    console.log(dp);
}


// =============================================================
// =                         REAL SCENES                    = 
// =============================================================
function Intro() {

    this.setup = function () {
        console.log("intro")
        image(lorcomp3gifa, 0, 0,width,height);
        cursor(CROSS);
    }
    this.draw = function () {
        drawIntroScreen();
    }
    this.mousePressed = function () {
        this.sceneManager.showScene(Atmotest);
    }
}

function drawIntroScreen() {
    textFont(ftVT323, floor(height*(1/15)));
    textAlign(CENTER);
    fill(255, 255, 255);
    text("what's up you bougie little fucker", .5*width, height-floor(height*(1/15)));
}

function Atmotest(){
    this.enter = function () {
        
    }
    this.setup = function () {
        console.log("v3 Atmotest")
    }

    this.draw = function () {
        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();
        }
    }
    this.mousePressed = function () {
        this.sceneManager.showScene(Statue);
    }
}

function Statue() {

    this.setup = function () {
        console.log("playing v3-statue.js");
        image(imgX0, 0, 0,width,height);
    }

    this.draw = function () {
        textFont(ftVT323, 50);
        textAlign(RIGHT);
        fill(255, 255, 255, 70);
        text(dtime[d], 1220, 50);
    }

    this.mousePressed = function () {
        this.sceneManager.showScene(Atmotest);
    }
}

function Dreams2() {
    this.setup = function () {

        createCanvas(width,height);
        fill('cyan');
        noStroke();
        textFont(ftVarelaRound, 100);

        frameRate(30);
        colorMode(HSB, 256, 100, 100, 1);
        image(imgFace, 0, 0);
        a = 0;
    }
    this.mousePressed = function () {
        this.sceneManager.showScene(Statue);
    }

    this.draw = function () {
        a++;
        drawDreams2Screen();
    }
}

function drawDreams2Screen() {
    textFont(ftVarelaRound, 40);
    textAlign(LEFT);
    fill("white");
    noStroke();
    text('The whole world will run its fingers through your hair', 200, 200);
    push();
    blendMode(OVERLAY);
    background(0, 100, 50, .5);
    image(imgFace, 2 * a, 25);
    image(tvGirl, 640 - a, 360 - a, 2 * a, 2 * a);
    fill(200, 0, 100, .8)
    textFont(ftVarelaRound, 2 * a);
    text('oh', (a ^ 2), 100 + a);
    pop();

    basicbutton();
}

function basicbutton() {
    push();
    noStroke();
    fill(0, 100, 65);
    hit = collidePointRect(mouseX, mouseY, 4 * a, 100, 200, 100); //see if the mouse is in the rect
    if (hit) {
        blendMode(SCREEN);
    }
    else {
        blendMode(NORMAL);
    }
    rect(4 * a, 100, 200, 100);
    pop();
}


// =============================================================
// =                         EXAMPLES                     = 
// =============================================================
function Animation1() {
    var textX;
    var textY;

    // enter() will be executed each time the SceneManager switches
    // to this animation
    this.enter = function () {
    }
    this.keyPressed = function () {
        text(keyCode, textX, textY += 10);
        if (textY > height) {
            textX += 20;
            textY = 0;
        }
    }
    this.mousePressed = function () {
        this.sceneManager.showNextScene();
    }
}

function Animation2() {
    this.y = 0;

    this.draw = function () {
        background("teal");
        line(0, this.y, width, this.y);
        this.y++;
        if (this.y > height)
            this.y = 0;
    }
    this.mousePressed = function () {
        this.sceneManager.showNextScene();
    }
}

