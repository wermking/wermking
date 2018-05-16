//assets
var ftVT323;

//images
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

//script arrays
var checkpoint;

function preload() {
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    //preload json + apis
    at = loadJSON("at.json");
    //timezonedb
    btz = loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
        0, 'jsonp');
    //openweather
    bmoreWeather = loadJSON("http://api.openweathermap.org/data/2.5/weather?id=4347820&appid=b08c4875ac8fd1e3786ba9b3a376f783"
    );
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
}

function windowResized() {
    resizeCanvas(windowWidth, ((9 / 16) * windowWidth));
}

function draw() {
    if (frameCount % 30 == 0) {
        blendMode(NORMAL);
        //background(210, 70, 40, 1);
        atmocolor();
        atmonoise();
        grid();
    }

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
        console.log("rl-0");
    }
    if (d == 1) {
        console.log("rl-1");
    }
    if (d == 2) {
        console.log("rl-2")
    }
    console.log("routeloading completed!");
}

function atmoDay() {


    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            if (r < 1) {
                fill(1, 70, 40, 1);
                point(i, j);
            } else {
                point(i, j);
            }

        }
    }
}

function ad() {
    for (var j = 0; j < 200; j++) {
        for (var i = 0; i < 200; i++) {
            push();
            blendMode(OVERLAY);
            var r = random(255);
            stroke(r);
            point(i, j);
            pop();

        }
    }
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

function leftovers() {
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

//86400



//width is width of canvas
//height is height of canvas
//cursor() or noCursor()? 
//fullscreen
//displayDensity();
//pixelDensity(density)
//getURL() Gets the current URL.
//getURLPath() Gets the current URL path as an array.
//getURLParams() *** could be good for api

//mouseMoved() mouseOver() changed() input()
//parent() id() class()
//mousePressed() mouseReleased()
//doubleClicked, mouseWheel,
//mouseOut() 
//touchStarted() touchMoved() touchEnded()
//dragOver() .dragLeave()
//.drop()