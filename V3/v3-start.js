var mgr;

//images
var lorcomp3;
var lorcomp3gif;
var lorcomp3gifa;
var mem1;
let tvGirl;
var ambience;
var imgFace;
var a;
var hit;
var hit1;
var hit2;
var hit3;
var mouseX;
var mouseY;
var l;
var imageoverlay = [];
var cursortest;
var cu;
var footstep = [];
var oggabi = [];
var gracememos = [];
var prop = [];
var propNight = [];
var propSunr = [];
var propDay = [];
var atn;

//json+api
var at;
var bmoreTimezonedb;
var btz;
var bmoreWeather;
var fortunenumber;
var fortunes = ["I don't feel like giving you a fucking fortune right now",
    "pack a snack next time you go out...you'll need it", "your mom is gonna say something stupid",
    "you're gonna see some lame grad student art", "you're gonna crumble into yourself next week",
    "You should listen to Sevdaliza.", "Dude, I *love* Jorja Smith", "The Reagan Agenda",
    "Silicon Valley", "Silicon Valley Fucker", "Stop Shaking all over, weirdo.", "Talk about your feelings more",
    "Check out your horoscope and lick your shoe", "the bus is gonna come on time for once!!!",
    "late bus baby", "i'm tired", "you're a lame baby", "Tem Cruiz", "you gonna eat an okay meal"]
//functions
var dp;
var d;
var r;
var ftn;
var j;

//NAV
var hitW;
var hitA;
var hitD;
var hitS;
var sceneW;
var sceneA;
var sceneS;
var sceneD;

//rectbutton shit
var x;
var y;
var w;
var h;
var callback;

var t1;
var t2;
var t3;
//
var ptProp;
var ptX;
var ptY;
var ptW;
var ptR;
var pH;
var pS;
var pL;

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
var dtime = ["night", "sunr", "day"];

function preload() {
    cursortest = ["assets/cursor/cursor1.png",
        "assets/cursor/cursor2.png",
        "assets/cursor/cursor3.png",
        "assets/cursor/cursor4.png",
        "assets/cursor/cursor5.png",
        "assets/cursor/cursor6.png",
        "assets/cursor/cursor7.png"
    ]

    //preload images
    lorcomp3gifa = loadImage("assets/lorcomp3.gif");
    mem1 = loadImage("assets/mem1.png");
    tvGirl = loadImage('assets/television.png');
    imgFace = loadImage('assets/smallface.png');
    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    //preload json + apis
    at = loadJSON("v3-at.json");
    item = loadJSON("v3-item.json");

    //timezonedb
    btz = loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
        0, 'jsonp');
    //btz = loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=64.18&lng=-51.69",
    //0, 'jsonp');

    //64.1814° N, 51.6941W
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
    assetAsyncloader();
    loadSound('assets/rough-dreamaudio.mp3', function (ambience) {
        ambience.play();
        ambience.setLoop(true);
    })
    noStroke();
    collideDebug(true);
    colorMode(HSL, 360, 100, 100, 1);
    frameRate(30);
    loadAtmonoise();
    loadFootstep();
    loadoggabi();
    loadGracememos();
    atn = 0;
    ftn = 0;
    atmocolor();
    mgr = new SceneManager();
    mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Statue2c);
    mgr.addScene(Statue2b);
    mgr.addScene(Statue2);
    mgr.addScene(Shitfield);
    mgr.addScene(Forkintheroad);
    mgr.addScene(Hill);
    mgr.addScene(Mem1a);
    mgr.addScene(Mem1b);
    mgr.addScene(Mem1d);
    mgr.addScene(Mem1e);
    mgr.addScene(Mem1f);
    mgr.addScene(Calle);
    mgr.addScene(Trashteller);
    mgr.addScene(Atmotest);
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
function assetAsyncloader() {
    var itNight = item.night;
    for (var u = 0; u < itNight.length; u++) {
        propNight.push(loadImage(item.night[u]));
        propSunr.push(loadImage(item.sunr[u]));
        propDay.push(loadImage(item.day[u]));
    }
    prop.push(propNight);
    prop.push(propSunr);
    prop.push(propDay);
    console.log("aal complete");
}
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
function friendlyCursorChooser(w2,a2,d2,s2){
    var w2; var a2; var d2; var s2;
    var hit2w = false; var hit2a = false; var hit2d = false; var hit2s = false;
    if (w2 !=0){
        hit2w = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            4.6 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16))
    }
        if (hit2w) {
            cu=3;
    }
    if (a2 !=0){hit2a = collidePointRect(mouseX, mouseY,
     0, 0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16));}
    if (hit2a) {
        cu=4;}
    if (d2 !=0){hit2d = collidePointRect(mouseX, mouseY, 14 * (windowWidth / 16),
        0,
        2 * (windowWidth / 16),
        8 * (windowWidth / 16));}
    if (hit2d) {
        cu=5;}
    if (s2 !=0){hit2s=collidePointRect(mouseX, mouseY,
        2 * (windowWidth / 16),
        7.4 * (windowWidth / 16),
        12 * (windowWidth / 16),
        1.7 * (windowWidth / 16));}
        if (hit2s) {
            cu=6;}
    
    }
function cursorChooser(w2, a2, d2, s2) {
    var w2; var a2; var d2; var s2;
    var hit2w = false; var hit2a = false; var hit2d = false; var hit2s = false;
    
    if (w2 != 0) {
        hit2w = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            4.6 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16))
    }
    if (hit2w) {
        cu = 3;
    }
    if (a2 != 0) {
        hit2a = collidePointRect(mouseX, mouseY,
            0, 0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16));
    }
    if (hit2a) {
        cu = 4;
    }
    if (d2 != 0) {
        hit2d = collidePointRect(mouseX, mouseY, 14 * (windowWidth / 16),
            0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16));
    }
    if (hit2d) {
        cu = 5;
    }
    if (s2 != 0) {
        hit2s = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            7.4 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16));
    }
    if (hit2s) {
        cu = 6;
    }
    if (!hit2w && !hit2a && !hit2d && !hit2s) {
        cu = 0;
    }

}
function atmonoise() {
    push();
    blendMode(OVERLAY);
    atn++
    if (atn > 4) {
        atn = 0;
    }
    image(imageoverlay[atn], 0, 0, windowWidth, ((9 / 16) * windowWidth))
    pop();
}
function loadAtmonoise() {
    for (var atn = 0; atn < 5; atn++) {
        imageoverlay.push(loadImage(at.atmonoise[atn]));
    }
}
function loadFootstep() {
    for (ftn = 0; ftn < 4; ftn++) {
        footstep.push(loadSound(at.footsteps[ftn], console.log("fs loaded", ftn)));
    } if (ftn > 3) {
        ftn = 0;
    }
}
function loadGracememos() {
    for (var i = 0; i < 22; i++) {
        gracememos.push(loadSound(at.gracememos[i], console.log("grace loaded", i)));
    } if (i > 22) {
        i = 0;
    }
}
function loadoggabi() {
    for (ftn = 0; ftn < 6; ftn++) {
        oggabi.push(loadSound(at.oggabi[ftn], console.log("abi loaded", ftn)));
    } if (ftn > 5) {
        ftn = 0;
    }
}
function grid() {
    var j = (width / 16);
    stroke("navy");
    for (var i = 0; i < 17; i++) {
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
    alpha(1);
    var sky0 = color(230, 68, 20);
    var sky1 = color(335, 94, 30);
    var sky2 = color(12, 72, 65);
    var sky3 = color(43, 72, 60);
    var sky4 = color(210, 70, 40);
    var currentColor;

    if (btz.dst = 1) {
        sunrisetime = ((bmoreWeather.sys.sunrise - 14400) % 86400);

        sunsettime = ((bmoreWeather.sys.sunset - 14400) % 86400);

        currenttime = ((btz.timestamp % 86400));

    } else {
        sunrisetime = ((bmoreWeather.sys.sunrise - 18000) % 86400);

        sunsettime = ((bmoreWeather.sys.sunset - 18000) % 86400);

        currenttime = (btz.timestamp % 86400);

    }
    //night1+2
    if (currenttime <= (sunrisetime - 3600) || currenttime > (sunsettime + 3600)) {
        background(sky0);
        dp = 0; d = 0; currentColor = sky0;
    }

    //night to red
    if (currenttime > (sunrisetime - 3600) && (currenttime <= (sunrisetime - 1800))) {
        skyIvl = ((currenttime - (sunrisetime - 3600)) / 1800)
        currentColor = lerpColor(sky0, sky1, skyIvl);
        background(lerpColor(sky0, sky1, skyIvl));
        console.log(currentColor);
        dp = 1; d = 0;
    }
    //red interlude
    if (currenttime > (sunrisetime - 1800) && (currenttime <= (sunrisetime - 900))) {
        background(sky1);
        currentColor = sky1;
        dp = 2; d = 1;
    }
    //red to orange
    if (currenttime > (sunrisetime - 900) && currenttime <= sunrisetime) {
        skyIvl = ((currenttime - (sunrisetime - 900)) / 900)
        currentColor = lerpColor(sky1, sky2, skyIvl);
        background(currentColor);
        dp = 3; d = 1;
    }
    //golden hour
    if ((currenttime > sunrisetime) && (currenttime <= (sunrisetime + 900))) {
        skyIvl = ((currenttime - sunrisetime) / 900)
        currentColor = lerpColor(sky2, sky3, skyIvl)
        background(currentColor);
        dp = 4; d = 1;
    }
    //gold to day
    if ((currenttime > (sunrisetime + 900)) && (currenttime <= (sunrisetime + 1800))) {
        skyIvl = ((currenttime - (sunrisetime + 900)) / 900)
        currentColor = lerpColor(sky3, sky4, skyIvl)
        background(currentColor);
        dp = 5; d = 1;
    }

    //day
    if ((currenttime > (sunrisetime + 1800)) && (currenttime <= (sunsettime - 3600))) {
        currentColor = sky4;
        background(sky4);
        dp = 6; d = 2;
    }
    //day to gold
    if ((currenttime > (sunsettime - 3600)) && (currenttime <= (sunsettime - 2700))) {
        skyIvl = ((currenttime - (sunsettime - 3600)) / 900)
        currentColor = lerpColor(sky4, sky3, skyIvl)
        background(currentColor);
        dp = 7; d = 1;
    }
    //sr gold hr 
    if ((currenttime > (sunsettime - 2700)) && (currenttime <= (sunsettime - 1800))) {
        skyIvl = ((currenttime - (sunsettime - 2700)) / 900)
        currentColor = lerpColor(sky3, sky2, skyIvl);
        background(currentColor);
        dp = 8; d = 1;
    }
    //orange to red
    if ((currenttime > (sunsettime - 1800)) && (currenttime <= (sunsettime - 900))) {
        skyIvl = ((currenttime - (sunsettime - 1800)) / 900)
        currentColor = lerpColor(sky2, sky1, skyIvl);
        background(currentColor);
        dp = 0; d = 1;
    }
    //sr red interlude
    if ((currenttime > (sunsettime - 900)) && (currenttime <= sunsettime)) {
        background(sky1); currentColor = sky1;
        dp = 10; d = 1;
    }
    //red to night
    if ((currenttime > sunsettime) && (currenttime <= (sunsettime + 1800))) {
        skyIvl = ((currenttime - sunsettime) / 1800)
        currentColor = lerpColor(sky1, sky0, skyIvl)
        background(currentColor);
        dp = 11; d = 1;

    }

    console.log(dp);
    pH = hue(currentColor);
    pS = saturation(currentColor);
    pL = lightness(currentColor);


}
function pTool(ptProp, ptX, ptY, ptW, ptR) {
    push();
    imageMode(CENTER);
    blendMode(MULTIPLY);
    tint(pH, pS, pL, .7);

    image(ptProp, ptX, ptY, ptW, ptW * ptR);
    blendMode(SCREEN);
    tint(255, .6);
    image(ptProp, ptX, ptY, ptW, ptW * ptR);

    blendMode(OVERLAY);
    image(ptProp, ptX, ptY, ptW, ptW * ptR);


    ;
    pop();
}

function ambientsound() {
    ambience.play();
    ambience.setLoop(true);
}
function nav(sceneW, sceneA, sceneD, sceneS) {

    hitW = false;
    hitA = false;
    hitD = false;
    hitS = false;
    if (sceneW != 0) {
        hitW = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            4.6 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16));
            
        if (hitW) {
            cursor(cursortest[3]);
            cu=3;
            mgr.showScene(sceneW);
        } 
    }

    if (sceneA != 0) {
        hitA = collidePointRect(mouseX, mouseY, 0, 0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16)
        );
        if (hitA) {
            cursor(cursortest[4]);
            cu=4;
            mgr.showScene(sceneA);
           
        } 
    }

    if (sceneD != 0) {
        hitD = collidePointRect(mouseX, mouseY, 14 * (windowWidth / 16),
            0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16));
        if (hitD) {
            cursor(cursortest[5]);
            cu=5;
            mgr.showScene(sceneD);
        } 
    }

    if (sceneS != 0) {
        hitS = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            7.4 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16));
        if (hitS) {
            cursor(cursortest[6]);
            cu=6;
            mgr.showScene(sceneS);
        } 
    }
}

function navHover(sceneW, sceneA, sceneD, sceneS) {

    hitW = false;
    hitA = false;
    hitD = false;
    hitS = false;
    if (sceneW != 0) {
        hitW = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            4.6 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16));
            
        if (hitW) {
            cursor(HAND);
        } 
    }

    if (sceneA != 0) {
        hitA = collidePointRect(mouseX, mouseY, 0, 0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16)
        );
        if (hitA) {
            cursor(HAND);
        } 
    }

    if (sceneD != 0) {
        hitD = collidePointRect(mouseX, mouseY, 14 * (windowWidth / 16),
            0,
            2 * (windowWidth / 16),
            8 * (windowWidth / 16));
        if (hitD) {
            cursor(HAND);
        } 
    }

    if (sceneS != 0) {
        hitS = collidePointRect(mouseX, mouseY,
            2 * (windowWidth / 16),
            7.4 * (windowWidth / 16),
            12 * (windowWidth / 16),
            1.7 * (windowWidth / 16));
        if (hitS) {
            cursor(HAND);
        } 
    }
}
// =============================================================
// =                         REAL SCENES                    = 
// =============================================================
function Intro() {
    this.setup = function () {
        console.log("intro")
        image(lorcomp3gifa, 0, 0, width, height);
        cursor(cursortest[1]);
    }
    this.draw = function () {
        drawIntroScreen();

    }
    this.mousePressed = function () {
        this.sceneManager.showScene(Atmotest);
    }
    function drawIntroScreen() {

        textFont(ftVT323, floor(height * (1 / 15)));
        textAlign(CENTER);
        fill(255, 255, 255);
        text("what's up you bougie little fucker", .5 * width, height - floor(height * (1 / 15)));
    }
}

function Statue2() {
    this.enter = function () {
        footstep[0].play();
    }
    this.draw = function () {
        cursorChooser(1,0,1,1);
        if (hit1) {cu=1}
        cursor(cursortest[cu]);
        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            pTool(prop[d][0], .5 * width, .5 * height, .8 * height, 11 / 13);

            //wasd
            textFont(ftVT323, 50);
            textAlign(RIGHT);
            fill(255, 255, 255, 70);
            text(dtime[d], 1220, 50);
        }
    }
    this.mousePressed = function () {
        rectButton1();
        nav(Forkintheroad, 0, Calle, Statue2b);
    }
    function rectButton1() {
        hit1 = false;
        hit1 = collidePointRect(mouseX, mouseY, 7 * (windowWidth / 16),
            2.5 * (windowWidth / 16),
            2 * (windowWidth / 16),
            2.5 * (windowWidth / 16)); //see if the mouse is in the rect
        if (hit1) {
            cu=1;
            gracememos[2].play()}
        }
    }

function Forkintheroad() {

    this.enter = function () {
        footstep[2].play();
        console.log("forkintheroad");
    }
    this.setup = function () {

    }

    
    this.draw = function () {
        cursorChooser(0,1,1,1);
        hit3 = collidePointRect(mouseX, mouseY,
            9.75 * (windowWidth / 16),
            6.75 * (windowWidth / 16),
            3 * (windowWidth / 16),
            .5 * (windowWidth / 16)); //see if the mouse is in the rect
        if (hit3) {cu=2}
        cursor(cursortest[cu]);
        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();
            pTool(prop[d][35], .5 * width, .7 * height, width, 2 / 5);
            pTool(prop[d][20], .7 * width, .8 * height, .2 * width, 1 / 4);

            textFont(ftVT323, 50);
            textAlign(RIGHT);
            fill(255, 255, 255, 70);
            text(dtime[d], 1220, 50);
            
        }
    }
    this.mousePressed = function () {
        rectButton3();
        nav(0, Shitfield, Trashteller, Statue2);
    }
    
    function rectButton3() {
        hit3 = false;
        hit3 = collidePointRect(mouseX, mouseY,
            9.75 * (windowWidth / 16),
            6.75 * (windowWidth / 16),
            3 * (windowWidth / 16),
            .5 * (windowWidth / 16)); //see if the mouse is in the rect

        if (hit3) {
            cursor(cursortest[2]);
            oggabi[1].setVolume(.75);
            oggabi[1].play()
        }
    }
}
function Shitfield() {

    this.enter = function () {
        footstep[2].play();
        console.log("forkintheroad");
        t1=0;
    }
    this.setup = function () {
    }
    this.draw = function () {
        cursorChooser(1,0,1,0);
        hit1 = collidePointRect(mouseX, mouseY,
            10 * (width / 16), 3.75 * (width / 16), 4 * (width / 16), 1 * (width / 16));
if(hit1){
cu=1;}
hit2 = collidePointRect(mouseX, mouseY,
    1.8 * (width / 16), 7.25 * (width / 16), 1.5 * (width / 16), .65 * (width / 16));
if(hit2){
cu=1;}
        cursor(cursortest[cu]);

        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();
            pTool(prop[d][3], .25 * width, .5 * height, .3 * width, 3 / 4);
            pTool(prop[d][17], .76 * width, .6 * height, .3 * width, 4 / 5);


            pTool(prop[d][13], 2.5 * windowWidth / 16, 7.5 * windowWidth / 16, windowWidth / 10, 2 / 5);


            pTool(prop[d][0], .6 * width, .7 * height, (1 / 16) * width, 1 / 3);

            textFont(ftVT323, 1 / 25 * width);
            textAlign(CENTER);
            if (t1 != 0) {
                text("                   ...Is this some kind of shitty beach?", .5 * width, .85 * height);
            }

           
        }
    }
    this.mousePressed = function () {
        rectButtonUmbrella();
        rectButtonShell();
        nav(Hill, 0, Forkintheroad, 0);
    }

    function rectButtonUmbrella() {
        hit1 = false;
        hit1 = collidePointRect(mouseX, mouseY,
            10 * (width / 16), 3.75 * (width / 16), 4 * (width / 16), 1 * (width / 16)); //see if the mouse is in the rect
        if (hit1) {
            cu=1;
            text("                   ...Is this some kind of shitty beach?", .5 * width, .85 * height);
            t1 = 1;
        }
    }
    function rectButtonShell() {
        hit2 = false;
        hit2 = collidePointRect(mouseX, mouseY,
            1.8 * (width / 16), 7.25 * (width / 16), 1.5 * (width / 16), .65 * (width / 16)); //see if the mouse is in the rect
        if (hit2) {
            cu=1;
            mgr.showScene(Mem1a);
       
        }
    }
}

function Calle() {
var h1;
var h2;
var h3;
    this.enter = function () {
        footstep[0].play();
        console.log("toilets");
        cu=0;
    }
    this.setup = function () {
    }
    this.draw = function () {
        cursorChooser(0,1,0,0);
        h1 = collidePointRect(mouseX, mouseY,
            13 * (windowWidth / 16),
            6 * (windowWidth / 16),
            2 * (windowWidth / 16),
            1 * (windowWidth / 16));
            h2 = collidePointRect(mouseX, mouseY,
                10 * (windowWidth / 16),
                3 * (windowWidth / 16),
                2 * (windowWidth / 16),
                3 * (windowWidth / 16));
                h3 = collidePointRect(mouseX, mouseY,
                    3 * (windowWidth / 16),
                    1 * (windowWidth / 16),
                    .5 * (windowWidth / 16),
                    1.5 * (windowWidth / 16)); 

if (h1){cu=2,console.log("h1 true")};
if (h2){cu=2};
if (h3){cu=2};
console.log("cu=",cu)
cursor(cursortest[cu]);
        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();
            pTool(prop[d][6], .64 * width, .6 * height, .75 * width, 4 / 5);
            pTool(prop[d][5], .2 * width, .5 * height, .1 * width, 5);

            textFont(ftVT323, 50);
            textAlign(RIGHT);
            fill(255, 255, 255, 70);
            text(dtime[d], 1220, 50);
        }
    }
    this.mousePressed = function () {
        rectButtonLamp();
        rectButtonToilet();
        rectButtonSink();
        nav(0, Statue2, 0, 0);
    }
    function rectButtonLamp() {
        var hitl = false;
        hitl = collidePointRect(mouseX, mouseY,
            3 * (windowWidth / 16),
            1 * (windowWidth / 16),
            .5 * (windowWidth / 16),
            1.5 * (windowWidth / 16)); //see if the mouse is in the rect
        if (hitl) {
            cu=2;
            gracememos[3].play()
        }
    }

    function rectButtonToilet() {
        hitt = false;
        hitt = collidePointRect(mouseX, mouseY,
            10 * (windowWidth / 16),
            3 * (windowWidth / 16),
            2 * (windowWidth / 16),
            3 * (windowWidth / 16)); //see if the mouse is in the rect
        if (hitt) {
            cu=2;
            oggabi[2].play()
        }
    }
    function rectButtonSink() {
        hitsk = false;
        hitsk = collidePointRect(mouseX, mouseY,
            13 * (windowWidth / 16),
            6 * (windowWidth / 16),
            2 * (windowWidth / 16),
            1 * (windowWidth / 16)); //see if the mouse is in the rect

        if (hitsk) {
            cu=2;
            gracememos[14].play()
        }
    }
}

function Hill() {

    this.enter = function () {
        footstep[2].play();
        console.log("hill");
    }
    this.setup = function () {
    }
    this.draw = function () {
cursorChooser(0,0,0,1);
hit1 = collidePointRect(mouseX, mouseY,
    5 * (windowWidth / 16),
    2 * (windowWidth / 16),
    3 * (windowWidth / 16),
    4 * (windowWidth / 16)); //see if the mouse is in the rect
if (hit1) {
    cu=2;}
    cursor(cursortest[cu]);

        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();
            pTool(prop[d][4], .4 * width, .8 * height, width, 4 / 5);

            textFont(ftVT323, 50);
            textAlign(RIGHT);
            fill(255, 255, 255, 70);
            text(dtime[d], 1220, 50);
        }
    }
    this.mousePressed = function () {
        rectButton1();
        nav(0, 0, 0, Shitfield);
    }
    function rectButton1() {
        hit1 = false;
        hit1 = collidePointRect(mouseX, mouseY,
            5 * (windowWidth / 16),
            2 * (windowWidth / 16),
            3 * (windowWidth / 16),
            4 * (windowWidth / 16)); //see if the mouse is in the rect
        if (hit1) {
            cu=2;
            gracememos[13].play()
        }
    }
}
function Trashteller() {
    this.enter = function () {
        footstep[1].play();
        t1=0;
    }
    this.setup = function () {
    }
    this.draw = function () {

cursorChooser(0,1,0,0);
hit1 = collidePointRect(mouseX, mouseY, 5 * (windowWidth / 16),
            3 * (windowWidth / 16),
            4 * (windowWidth / 16),
            4 * (windowWidth / 16));
            if(hit1){cu=2};
            cursor(cursortest[cu]);

        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            pTool(prop[d][16], .49 * width, .7 * height, .93 * width, 3 / 5);

            textFont(ftVT323, 1 / 25 * width);
            textAlign(CENTER);
            text("Master of the Friggin' Future", .5 * width, 1 / 25 * width);
            if (fortunenumber) {
                text("Your Fortune:", .5 * width, 2.5 / 25 * width);
                text(fortunes[fortunenumber], .5 * width, 3.5 / 25 * width);
            }
        }
    }
    this.mousePressed = function () {
        rectButton2();
        nav(0, Forkintheroad, 0, 0);
    }
    function rectButton2() {
        hit1 = false;
        hit1 = collidePointRect(mouseX, mouseY, 5 * (windowWidth / 16),
            3 * (windowWidth / 16),
            4 * (windowWidth / 16),
            4 * (windowWidth / 16)); //see if the mouse is in the rect

        if (t1 !=0) {
            if (hit1) {
                cu=2;
                fortunenumber = floor(random(0, 19));
            } 
        } else {
            if (hit1) {
                cu=2
                fortunenumber = floor(random(0, 19));
                text("Your Fortune:", .5 * width, 2.5 / 25 * width);
                text(fortunes[fortunenumber], .5 * width, 3.5 / 25 * width);
                t1=1;
            } 
        }
    }
}

function Statue2b() {
    this.enter = function () {
        footstep[2].play();
        footstep[1].play();
    }
    this.setup = function () {
        
    }

    this.draw = function () {
        cursorChooser(1,0,0,1);
        cursor(cursortest[cu]);

        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();


            pTool(prop[d][0], .5 * width, .55 * height, .2 * height, 11 / 13);

            textFont(ftVT323, 50);
            textAlign(RIGHT);
            fill(255, 255, 255, 70);
            text(dtime[d], 1220, 50);
        }
    }
    this.mousePressed = function () {
        nav(Statue2, 0, 0, Statue2c)
    }
}

function Statue2c() {
    this.enter = function () {
        footstep[0].play();
    }
    this.setup = function () {
    }

    this.draw = function () {
        cursorChooser(1,0,0,1);
        cursor(cursortest[cu]);
        if (frameCount % 30 == 0) {
            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();


            pTool(prop[d][0], .5 * width, .55 * height, .05 * height, 11 / 13);

            textFont(ftVT323, 50);
            textAlign(RIGHT);
            fill(255, 255, 255, 70);
            text(dtime[d], 1220, 50);
        }
    }
    this.mousePressed = function () {
        this.sceneManager.showScene(Statue2b);
        nav(Statue2b,0,0,Atmotest);
    }
}

function Atmotest() {
    this.enter = function () {
        footstep[1].play();
    }
    this.setup = function () {
        console.log("v3 Atmotest")
    }
    this.draw = function () {
        cursorChooser(1,0,0,0);
        cursor(cursortest[cu]);
        if (frameCount % 30 == 0) {

            blendMode(NORMAL);
            atmocolor();
            atmonoise();
            grid();
            fill(0, 0, 100, .3);
            rect(2 * (windowWidth / 16),
                4.6 * (windowWidth / 16),
                12 * (windowWidth / 16),
                1.7 * (windowWidth / 16));

            rect(0, 0,
                2 * (windowWidth / 16),
                8 * (windowWidth / 16));

            rect(14 * (windowWidth / 16),
                0,
                2 * (windowWidth / 16),
                8 * (windowWidth / 16));

            rect(2 * (windowWidth / 16),
                7.4 * (windowWidth / 16),
                12 * (windowWidth / 16),
                1.7 * (windowWidth / 16));
            blendMode(NORMAL);
        }
    }
    this.mousePressed = function () {
        nav(Statue2c, 0, 0, 0);
    }
}
function Dreams2() {
    this.setup = function () {

        createCanvas(width, height);
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
        dreams2screen();

    basicbutton();
    }

    function dreams2screen() {
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
        fill(200, 0, 100, .8);
        textFont(ftVarelaRound, 2 * a);
        text('oh', (a ^ 2), 100 + a);
        pop();
    }
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
// =                        MEM1                    = 
// =============================================================

function Mem1a() {
    var cecile = color(199, 99, 65, 1);

    this.enter = function () {
        background("black");
    }
    this.mousePressed = function () {
        mgr.showScene(Mem1b)
    }
}
function Mem1b() {

    var cecile = color(199, 99, 65, 1);


    this.draw = function () {
        noTint();
        noStroke();
        image(mem1, 0, 0, width, height);
        fill(cecile);
        textAlign(RIGHT);
        textSize(.05*windowWidth);
        text("you don't miss your parents???", .64 * width, .5 * height);
        

    }
    this.mousePressed = function () {
        mgr.showScene(Mem1d)
    }
}
function Mem1d() {

    var cecile = color(199, 99, 65, 1);

    this.setup = function () {
    }
    this.draw = function () {
        noTint();
        image(mem1, 0, 0, width, height);
        atmonoise();
        fill(cecile);
        textSize(.05*windowWidth);
        text("not even a little???", .5 * width, .7 * height);
    }

    this.mousePressed = function () {
        mgr.showScene(Mem1e);

    }
}
function Mem1e() {

    var cecile = color(199, 99, 65, 1);

    this.setup = function () {
        background("black");
    }
    this.draw = function () {
        blendMode(NORMAL);
        background("black");
        atmonoise();
    }
    this.mousePressed = function () {
        mgr.showScene(Mem1f);

    }
}
function Mem1f() {
    var cecile = color(199, 99, 65, 1);
    this.setup = function () {
        background("black");
        textSize(.05*windowWidth);
    }
    this.draw = function () {
        blendMode(NORMAL);
        if (frameCount % 30 == 0) {
            background("black");
            atmonoise();
            fill("white");
            text("No?", .5 * width, .5 * height)
        }
    }
    this.mousePressed = function () {
        mgr.showScene(Shitfield);
    }
}