function Intro()
{
    this.draw = function()
    {
        image(this.sceneManager.lorcomp3gif, 0, 0);
        
           
         
          drawIntroScreen();     
    }

    this.keyPressed = function()
    {
        if ( key == '1' || key == '2' )
        {
            // Invoke the Game scene passing as argument the string '1' or '2'
            this.sceneManager.showScene( Game, key );
        }
    } 

    function drawIntroScreen()
    {
        
        textFont(ftVarelaRound,40);
        textAlign(CENTER);
        fill("white");

        text("what's up you bougie little fucker",640,670);
    }

}