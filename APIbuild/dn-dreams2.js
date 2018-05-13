function Dreams2()
{
    var c;
    var img;
   
    
this.setup = function() {

  createCanvas(1280,720);
  fill('cyan');
  noStroke();
  textFont(ftVarelaRound,100);
  
  frameRate(30);
  colorMode(HSB,256,100,100,1);
  image(imgFace,0,0);
  a=0;
  

}
this.mousePressed = function()
{
    this.sceneManager.showScene( Statue );
}

    this.draw = function()
    { 
      a++;
     
          drawDreams2Screen();     
    }

    function drawDreams2Screen()
    {   
        textFont(ftVarelaRound,40);
        textAlign(LEFT);
        fill("white");
        noStroke();

        text('The whole world will run its fingers through your hair',200,200);

      background(0,100,50,.5);
      blendMode(OVERLAY);

      image(imgFace, 2*a, 25);
      image(tvGirl,640-a,360-a,2*a,2*a);


      
        
        pop();
   
        
        
      
        push();
        fill(200,0,100,.8)
      
        textFont(ftVarelaRound,2*a);
        text('oh',(a^2),100+a);
        pop();
      
        basicbutton();
       
        
    }

}

function basicbutton() {
  push();
  noStroke();
  fill(0,100,65);
  hit = collidePointRect(mouseX, mouseY, 4*a, 100, 200, 100); //see if the mouse is in the rect
  if (hit) { 
    blendMode(SCREEN);
  }
  else {
    blendMode(NORMAL);
  }
  rect(4*a, 100, 200, 100);
  pop();
}



