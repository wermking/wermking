
//images
var lorcomp3;
var lorcomp3gif;
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


//fonts
var ftVarelaRound;
var ftWalter;
var ftVT323;

var checkpoint=["passed preload", "passed jsonload","passed if","passed mgr var hell", "passed draw"]

function preload() {

    lorcomp3 = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadImage("assets/lorcomp3.gif");
    tvGirl = loadImage('assets/television.png');
    imgFace = loadImage('assets/smallface.png');
    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftWalter = loadFont('assets/WalterTurncoat-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    imgtest=loadImage("dn-gif/woman-day.gif");
    console.log(checkpoint[0])

    data1=loadJSON("dn-assetpath.json");
    data2=loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
    0,'jsonp');
    data3=loadJSON("http://api.openweathermap.org/data/2.5/weather?id=4347820&appid=b08c4875ac8fd1e3786ba9b3a376f783"
    );
    console.log(data1);
    console.log(data3);
}

function setup() {
    createCanvas(1280, 720);
image(imgtest,0,0,1280,720);
    

   
    console.log(checkpoint[1])
    if(imgX){loadImage(imgX.dayphase[0].gifpaths[0])}
    
    console.log
    console.log(checkpoint[2])
    var mgr = new SceneManager();
    mgr.lorcomp3 = lorcomp3; // inject bkImage property
    mgr.lorcomp3gif = lorcomp3gif;
    mgr.imgFace = imgFace;
    mgr.a = a;
    mgr.l = l;
    mgr.lword = lword;
    mgr.imgstatueday = imgstatueday;
    mgr.imgstatuesunr = imgstatuesunr;
    mgr.imgstatuenight = imgstatuenight;
    mgr.ftVarelaRound = ftVarelaRound;
    mgr.hit = hit;
    mgr.mouseX = mouseX;
    mgr.mouseY = mouseY;
    mgr.buttonHit = buttonHit;
    
mgr.bmoretime=bmoretime;
mgr.bmoreweather=bmoreweather;
mgr.sunsettime=sunsettime;
mgr.sunrisetime=sunrisetime;
mgr.d=d;
mgr.bmoredate=bmoredate
mgr.bdc=bdc;
mgr.imgX=imgX;
mgr.imgX0=imgX0;
console.log(checkpoint[3]);
console.log(imgX0);
mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Statue);

    
}

function draw() {
    if(bdc && bmoreweather){chooseweather()}
    if(bdc && bmoreweather && imgX){loadweather()
    mousePressed();
}
function mousePressed()
    {
        mgr.showScene( Intro );
    }





function chooseweather() {
    sunrisetime = (bmoreweather.sys.sunrise);
    sunsettime = (bmoreweather.sys.sunset);
    if((bdc.timestamp <= (sunrisetime - 1800)) || (bdc.timestamp >= (sunsettime + 1800))) {d = 0}
    if((bdc.timestamp >= (sunrisetime - 1800)) && (bdc.timestamp <= (sunrisetime + 3600)) ||
        (bdc.timestamp >= (sunsettime - 3600)) && (bdc.timestamp <= (sunsettime + 1800))) { d=1 };
    if((bdc.timestamp <= (sunsettime - 3600)) && (bdc.timestamp >= (sunrisetime + 3600))){d = 2}
    console.log("d=",d);
    console.log("chooseweather completed!")
}



function loadweather() {

    
    imgX0=loadImage(imgX.dayphase[d].gifpaths[0]);
    
    console.log(imgX0);
    console.log("loadweather completed!")
}
    
function gotData1(data1){
    console.log(data1);
imgX=data1;

}

function gotData2(wink){
    console.log("wink!")
}

function gotData3(data3){
    console.log(data3);
    bmoreweather=data3;
}
}