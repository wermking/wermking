
//images
var lorcomp3;
var lorcomp3gif;

//fonts
var ftVarelaRound;
var ftWalter;
var ftVT323;

function preload()
{
    lorcomp3 = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadGif ("assets/lorcomp3.gif");

    //loadfonts
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');
    ftWalter = loadFont('assets/WalterTurncoat-Regular.ttf');
    ftVT323 = loadFont('assets/VT323-Regular.ttf');

}

function setup()
{
    createCanvas(1280,720);

    var mgr = new SceneManager();
    mgr.lorcomp3 = lorcomp3; // inject bkImage property
    mgr.lorcomp3gif = lorcomp3gif;
    mgr.ftVarelaRound = ftVarelaRound;
    mgr.wire();
    mgr.addScene ( Dreams2 );
    mgr.showScene( Intro );
}