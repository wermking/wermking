function Statue() {


    this.setup = function (){
        console.log("playing dn-statue.js")
        console.log(this.sceneManager.anim1);
        
       
        
    }
   
    this.draw = function () {
        animation(this.sceneManager.anim1, 0,0);

        textFont(ftVT323, 50);
        textAlign(RIGHT);
        fill(255,255,255,70);

        text(dtime[d], 1220, 50);


        
    }
}
