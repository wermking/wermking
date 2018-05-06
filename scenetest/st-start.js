
//images
var lorcomp3;
var lorcomp3gif;

//fonts
var ftVarelaRound;

function preload()
{
    lorcomp3 = loadImage("assets/lorcomp3.gif");
    lorcomp3gif = loadGif ("assets/lorcomp3.gif");
    ftVarelaRound = loadFont('assets/VarelaRound-Regular.ttf');

}

function setup()
{
    createCanvas(1280,720);

    var mgr = new SceneManager();
    mgr.lorcomp3 = lorcomp3; // inject bkImage property
    mgr.lorcomp3gif = lorcomp3gif;
    mgr.ftVarelaRound = ftVarelaRound;
    mgr.wire();
    mgr.showScene( Intro );
}