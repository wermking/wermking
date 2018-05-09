function Statue() {
    var l;
    var lword;

    this.setup = function () {

        createCanvas(1280, 720);
        fill('cyan');
        noStroke();
        textFont(ftVarelaRound, 100);

        frameRate(30);
        colorMode(HSB, 256, 100, 100, 1);
        a = 0;
        l = ['day', 'sunr', 'night'];
        lword = random(l),
        gifStatue = loadGif(lword"/woman1.gif");


    }

    this.draw = function () {
        image(this.gifStatue, 0, 0);
        drawIntroScreen();
    }
}