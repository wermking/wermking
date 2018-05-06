var lorcomp3;

function preload()
{
    lorcomp3 = loadImage("assets/lorcomp3.gif");    
}

function setup()
{
    createCanvas(1280,720);

    var mgr = new SceneManager();
    mgr.lorcomp3 = lorcomp3; // inject bkImage property
    mgr.wire();
    mgr.showScene( Intro );
