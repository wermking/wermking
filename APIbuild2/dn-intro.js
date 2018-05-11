function Intro() {

    console.log("playing dn-intro.js")


    this.draw = function () {
        createCanvas(1280, 720);
   
        image(this.sceneManager.lorcomp3gifa,0,0);
        console.log("*");
        drawIntroScreen();
    }

    




    function drawIntroScreen() {

        textFont(ftVT323, 50);
        textAlign(CENTER);
        fill("white");

        text("what's up you bougie little fucker", 640, 670);
    }

    
    this.mousePressed = function()
    {
        this.sceneManager.showScene( Statue );
    }



}

