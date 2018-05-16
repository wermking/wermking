var fontRegular, fontItalic, fontBold;

function preload() {
    
  }

function setup(){

    createCanvas(400,500);
    background(100,100,255);
    angleMode(DEGREES);
    noStroke();

    fill(120,120,255);
            xShift = 0;
            yShift = 50;
            distHor=400;
            distVert=200;
            gapHeight = 20;
            gapWidth = 20;
            linenumHor = 11;
            linenumVert = 20;
        for(var i =linenumHor+linenumVert;i >-4;i-=1 ){
             if(linenumHor>0){ rect(xShift, yShift + gapHeight*(linenumHor-1), distHor, 1);}
        if(linenumVert>0){rect(xShift + gapWidth*(linenumVert-1), yShift, 1, distVert);}
            linenumHor -=1;
            linenumVert -=1;

        }

    var j = 5;
    var xShift = 400;
    var yShift = 0;
    var cVal1 = 150;
    var cVal2 = 100;
    var cVal3 = 150;


    

    for(var i = 0; i < 15; i++) {
       
        objHand();
    
                 j+=1;
                 xShift-=50
                 yShift+=50;
                 cVal1-=20;
                 cVal2-=20;
                 cVal3+=30;
    
        }

        var j = 15;
        var xShift = 400;
        var yShift = 80;
        var cVal1 = 200;
        var cVal2 = 50;
        var cVal3 = 150;
    
    
        
        for(var i = 0; i < 15; i++) {
    
            objHand();
                 j+=2;
                 xShift-=75;
                 yShift+=75;
                 cVal1+=20;
                 cVal2-=20;
                 cVal3-=30;
    
        }

        j = 10;
        xShift = 50;
        yShift = 100;
        var cVal1 = 230;
        var cVal2 = 180;
        var cVal3 = 0;
            objHand();
        
            
            var s = 'shut yo dumb ass up';
            textSize(100);
            fill(125,125,255);
            text('STOP',50,-15,300,300);
            fill(50);
            textSize(20);
            text(s, 10, 10,300, 400);
            
    

        function objHand(xShift,yShift,j,cVal1,cVal2,cVal3) {
            fill(cVal1, cVal2, cVal3);
            //palm
            rect(xShift, yShift + 5.5 * j, 5 * j, 2.5 * j);
            arc(xShift + 2.5 * j, yShift + 8 * j, 5 * j, 6 * j, 0, 180, OPEN);
            //fingerstumps
            rect(xShift, yShift + 3.5 * j, 1.2 * j, 2 * j);
            rect(xShift + 3.8 / 3 * j, yShift + 13 / 6 * j, 1.2 * j, 10 / 3 * j);
            rect(xShift + 7.6 / 3 * j, yShift + 1.5 * j, 1.2 * j, 4 * j);
            rect(xShift + 11.4 / 3 * j, yShift + 13 / 6 * j, 1.2 * j, 10 / 3 * j);
            //fingertips
            arc(xShift + .6 * j, yShift + 3.5 * j, 1.2 * j, 1.5 * j, 180, 0, OPEN);
            arc(xShift + 5.6 / 3 * j, yShift + 13 / 6 * j, 1.2 * j, 1.5 * j, 180, 0, OPEN);
            arc(xShift + 9.4 / 3 * j, yShift + 1.5 * j, 1.2 * j, 1.5 * j, 180, 0, OPEN);
            arc(xShift + 13.2 / 3 * j, yShift + 13 / 6 * j, 1.2 * j, 1.5 * j, 180, 0, OPEN);
            //thumb
            triangle(xShift + 2.5 * j, yShift + 11 * j, xShift + 6.5 * j, yShift + 8.24 * j, xShift + 5 * j, yShift + 6.75 * j);
            quad(xShift + 6.5 * j, yShift + 6.7 * j, xShift + 7.4 * j, yShift + 7.6 * j, xShift + 4.4 * j, yShift + 10.6 * j, xShift + 3.5 * j, yShift + 9.7 * j);
            arc(xShift + 6.92 * j, yShift + 7.17 * j, 1.28 * j, 1.28 * j, 215, 45, open);
            bezier(xShift + 2.5 * j, yShift + 11 * j, xShift + 2.9 * j, yShift + 11 * j, xShift + 3.3 * j, yShift + 11 * j, xShift + 4.4 * j, yShift + 10.6 * j);
            bezier(xShift + 2.5 * j, yShift + 11 * j, xShift + 3.2 * j, yShift + 11.01 * j, xShift + 5.58 * j, yShift + 11.10 * j, xShift + 5 * j, yShift + 8.2 * j);
            triangle(xShift + 2.5 * j, yShift + 11 * j, xShift + 4.36 * j, yShift + 10.57 * j, xShift + 3.5 * j, yShift + 9.7 * j);
            
        }


}