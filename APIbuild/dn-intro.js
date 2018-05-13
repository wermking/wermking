function Intro() {
    
    this.setup = function (){
        console.log("playing dn-intro.js")
        image(this.sceneManager.lorcomp3gifa,0,0);

    }

    this.draw = function () {
        drawIntroScreen();
    }



    function drawIntroScreen() {

        textFont(ftVT323, 50);
        textAlign(CENTER);
        fill(255,255,255);


        text("what's up you bougie little fucker", 640, 670);
    }

    
    this.mousePressed = function()
    {
        this.sceneManager.showScene( Statue );
    }

}

