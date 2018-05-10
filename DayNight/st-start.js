
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
//statue
imgstatueday= loadGif("assets-day/woman1.gif");
imgstatuesunr= loadGif("assets-sunr/woman2.gif");
imgstatuenight= loadGif("assets-night/woman3.gif");
}

function setup() {
    createCanvas(1280, 720);

    var mgr = new SceneManager();
    mgr.lorcomp3 = lorcomp3; // inject bkImage property
    mgr.lorcomp3gif = lorcomp3gif;
    mgr.imgFace = imgFace;
    mgr.a = a;
    mgr.l=l;
    mgr.lword=lword;
    mgr.imgstatueday=imgstatueday;
    mgr.imgstatuesunr=imgstatuesunr;
    mgr.imgstatuenight=imgstatuenight;
    mgr.ftVarelaRound = ftVarelaRound;
    mgr.hit = hit;
    mgr.mouseX = mouseX;
    mgr.mouseY = mouseY;
    mgr.buttonHit=buttonHit;
    mgr.wire();
    mgr.addScene(Intro);
    mgr.addScene(Statue);
    mgr.showScene(Intro);

}