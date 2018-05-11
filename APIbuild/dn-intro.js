function Intro() {

    console.log("playing dn-intro.js")

    this.imgX0=imgX0;
    

this.setup = function (){
    image(this.sceneManager.lorcomp3gif, 0, 0,1280, 720);
 
}
    this.draw = function () {
        image(this.sceneManager.lorcomp3gif, 0, 0,1280, 720);
        drawIntroScreen();
    }


    function drawIntroScreen() {

        textFont(ftVarelaRound, 50);
        textAlign(CENTER);
        fill("white");

        text("what's up you bougie little fucker", 640, 670);
    }

    
    this.mousePressed = function()
    {
        this.sceneManager.showScene( Statue );
    }



}

function chooseweather() {
    sunrisetime = (bmoreweather.sys.sunrise);
    sunsettime = (bmoreweather.sys.sunset);
    if((bdc.timestamp <= (sunrisetime - 1800)) || (bdc.timestamp >= (sunsettime + 1800))) {dp = 0}
    if((bdc.timestamp >= (sunrisetime - 1800)) && (bdc.timestamp <= (sunrisetime + 3600)) ||
        (bdc.timestamp >= (sunsettime - 3600)) && (bdc.timestamp <= (sunsettime + 1800))) { dp=1 };
    if((bdc.timestamp <= (sunsettime - 3600)) && (bdc.timestamp >= (sunrisetime + 3600))){dp = 2}
    console.log(dp);
    console.log("chooseweather completed!")
}

function loadweather() {
    imgX0=loadImage(mgr.imgX.dayphase[dp].gifpaths[0])
    console.log(imgX0);
    console.log("loadweather completed!")
}