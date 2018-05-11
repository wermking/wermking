function Statue() {

    

    this.setup = function (){
        console.log("playing dn-statue.js")
        console.log(this.sceneManager.imgX0);
        image(this.sceneManager.imgX0, 0, 0,1280, 720);
    }
   
    this.draw = function () {


        textFont(ftVarelaRound, 50);
        textAlign(CENTER);
        fill("white");

        text(dp, 640, 670);
    }
}
