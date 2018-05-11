function Statue() {

   

    this.setup = function (){
    
    }
   
    this.draw = function () {

            image(this.sceneManager.imgx0, 0, 0, 1280, 720);

        textFont(ftVarelaRound, 50);
        textAlign(CENTER);
        fill("white");

        text(dp, 640, 670);
    }
}
