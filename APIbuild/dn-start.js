
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

//json

var bmoretime;
var bmoreweather;
var sunsettime;
var sunrisetime;
var dp;
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

function preload() {

    lorcomp3 = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadGif("assets/lorcomp3.gif");
    tvGirl = loadImage('assets/television.png');
    imgFace = loadImage('assets/smallface.png');
    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftWalter = loadFont('assets/WalterTurncoat-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');
    
}

function setup() {
    createCanvas(1280, 720);

    loadJSON("dn-assetpath.json",gotData1);
    loadJSON("http://api.timezonedb.com/v2/get-time-zone?key=V26ET0GFQ0T8&format=json&by=position&lat=39.29&lng=-76.61",
    gotData2,'jsonp');
    loadJSON("http://api.openweathermap.org/data/2.5/weather?id=4347820&appid=b08c4875ac8fd1e3786ba9b3a376f783"
    ,gotData3);

    if(bdc && bmoreweather){chooseweather()}
    if(bdc && bmoreweather && imgX){loadweather()}
    
    console.log(dp);
   
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
mgr.dp=dp;
mgr.bmoredate=bmoredate
mgr.bdc=bdc;
mgr.imgX=imgX;
mgr.imgX0=imgX0;

mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Statue);
    mgr.showScene(Intro);
}

function draw(){
    
    

}

function chooseweather() {
    sunrisetime = (bmoreweather.sys.sunrise);
    sunsettime = (bmoreweather.sys.sunset);
    if((bdc.timestamp <= (sunrisetime - 1800)) || (bdc.timestamp >= (sunsettime + 1800))) {dp = 0}
    if((bdc.timestamp >= (sunrisetime - 1800)) && (bdc.timestamp <= (sunrisetime + 3600)) ||
        (bdc.timestamp >= (sunsettime - 3600)) && (bdc.timestamp <= (sunsettime + 1800))) { dp=1 };
    if((bdc.timestamp <= (sunsettime - 3600)) && (bdc.timestamp >= (sunrisetime + 3600))){dp = 2}
}

function loadweather() {
    imgX0=loadGif(imgX.dayphase[dp].gifpaths[0])
}
    
function gotData1(data1){
    console.log(data1);
imgX=data1;

}

function gotData2(data2){
    console.log(data2);
    bdc=data2;
}
function gotData3(data3){
    console.log(data3);
    bmoreweather=data3;
}