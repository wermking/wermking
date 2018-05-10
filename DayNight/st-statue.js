function Statue() {

   

    this.setup = function (){
        l=2;
        

       

    }

   
    this.draw = function () {
 
        if (l = 0) {
            image(this.sceneManager.imgstatueday, 0, 0, 1280, 720);
        }
        else if (l = 1) {
            image(this.sceneManager.imgstatuesunr, 0, 0, 1280, 720);
        }
        else {
            image(this.sceneManager.imgstatuenight, 0, 0, 1280, 720);
        }
        
    

        textFont(ftVarelaRound, 50);
        textAlign(CENTER);
        fill("white");

        text(l, 640, 670);
    }
}

function drawStatueScreen() {
    if (l = 0) {
        image(this.sceneManager.imgstatueday, 0, 0, 1280, 720);
    }
    else { }
    if (l = 1) {
        image(this.sceneManager.imgstatuesunr, 0, 0, 1280, 720);
    }
    else { }
    if (l = 2) {
        image(this.sceneManager.imgstatuenight, 0, 0, 1280, 720);
    }
    else { }
}
