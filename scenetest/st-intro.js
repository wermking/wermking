function Intro() {
    this.draw = function () {
        image(this.sceneManager.lorcomp3gif, 0, 0);
        drawIntroScreen();
    }


    function drawIntroScreen() {

        textFont(ftVarelaRound, 50);
        textAlign(CENTER);
        fill("white");

        text("what's up you bougie little fucker", 640, 670);
    }

    this.mousePressed = function () {

        this.sceneManager.showScene = function (Dreams2)

   }


}