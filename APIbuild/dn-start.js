
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
var lword;
var imgstatueday;
var imgstatuesunr;
var imgstatuenight;
var imgtest;
var wink;

//json

var bmoretime;
var bmoreweather;
var sunsettime;
var sunrisetime;
var d;
var data1;
var data2;
var data3;
//weather+time variables
var bmoredate;
var bdc;
var imgX;
var imgX0;
var anim1;
var anim;


//fonts
var ftVarelaRound;
var ftWalter;
var ftVT323;

var checkpoint = ["passed preload", "passed jsonload", "passed if", "passed mgr var hell", "passed draw"]
var dtime = ["day","sunr","night"];
function preload() {

    lorcomp3gifa = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadGif("assets/lorcomp3.gif");
    tvGirl = loadImage('assets/television.png');
    imgFace = loadImage('assets/smallface.png');
    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftWalter = loadFont('assets/WalterTurncoat-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    imgtest = loadImage("dn-gif/woman-day.gif");
    console.log(checkpoint[0])

   imgX = loadJSON("dn-assetpath.json");
   anim = loadJSON("dn-animpath.json");
    bdc= loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
        0, 'jsonp');
    bmoreweather = loadJSON("http://api.openweathermap.org/data/2.5/weather?id=4347820&appid=b08c4875ac8fd1e3786ba9b3a376f783"
    );
    console.log(bdc);
    console.log(data1);
    console.log(bmoreweather);
    if(bmoreweather){"bmoreweather loaded"}
    
}


function setup() {
   
    createCanvas(1280, 720);
   
gotData1();
gotData3();
    chooseweather();


    console.log("1*");
    routeloading();
    routeloading1();
    console.log("2*");
    console.log(checkpoint[2])
    console.log(lorcomp3gifa);
    var mgr = new SceneManager();
    mgr.lorcomp3 = lorcomp3; // inject bkImage property
    mgr.lorcomp3gif = lorcomp3gif;
    mgr.lorcomp3gifa = lorcomp3gifa;
    mgr.imgFace = imgFace;
    mgr.a = a;
    mgr.l = l;
    mgr.lword = lword;
    mgr.imgstatueday = imgstatueday;
    mgr.imgstatuesunr = imgstatuesunr;
    mgr.imgstatuenight = imgstatuenight;
    mgr.ftVarelaRound = ftVarelaRound;
    mgr.ftVT323 = ftVT323;
    mgr.hit = hit;
    mgr.mouseX = mouseX;
    mgr.mouseY = mouseY;
    mgr.buttonHit = buttonHit;

    mgr.bmoretime = bmoretime;
    mgr.bmoreweather = bmoreweather;
    mgr.sunsettime = sunsettime;
    mgr.sunrisetime = sunrisetime;
    mgr.d = d;
    mgr.bmoredate = bmoredate
    mgr.bdc = bdc;
    mgr.imgX = imgX;
    mgr.imgX0 = imgX0;
    mgr.anim = anim;
    mgr.anim1 = anim1;
    mgr.dtime=dtime;
    console.log(checkpoint[3]);
    mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Statue);
    mgr.showScene(Intro);


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

function routeloading1() {
    if (d == 0) {
        anim1 = loadAnimation(
            "dn-png/woman1day00.png",
                      "dn-png/woman1day01.png",
                      "dn-png/woman1day02.png",
                      "dn-png/woman1day03.png",
                      "dn-png/woman1day04.png")
        console.log("rl1-0");
    }
    if (d == 1) {
        anim1 = loadAnimation("dn-png/woman1sunr00.png",
"dn-png/woman1sunr01.png",
"dn-png/woman1sunr02.png",
"dn-png/woman1sunr03.png",
"dn-png/woman1sunr04.png");
console.log("rl1-1");
    }
    if (d == 2) {
        anim1 = loadAnimation(
            "dn-png/woman1night00.png",
            "dn-png/woman1night01.png",
            "dn-png/woman1night02.png",
            "dn-png/woman1night03.png",
            "dn-png/woman1night04.png");
            console.log("rl1-2");
    }
    console.log("routeloading completed!");
    
}





         



function gotData1(data1) {

}

function gotData2(wink) {
    console.log("wink!")
    data2=bdc;
}

function gotData3(data3) {
}

