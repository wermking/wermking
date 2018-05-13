function Statue() {


    this.setup = function (){
        console.log("playing dn-statue.js");
       

        image(this.sceneManager.imgX0,0,0);

        image(this.sceneManager.imgX0a,0,0);
        
    }

    this.draw = function () {



        textFont(ftVT323, 50);
        textAlign(RIGHT);
        fill(255,255,255,70);

        text(dtime[d], 1220, 50);


        
    }

    this.mousePressed = function()
    {
        this.sceneManager.showScene( Dreams2 );
    }


}
