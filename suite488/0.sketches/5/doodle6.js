function setup(){

    createCanvas(500,625);
    background(50,200,100);
    angleMode(DEGREES);
    noStroke();

    fill(200,180,0);
    fill(0);
            xShift = 0;
            yShift = 0;
            distHor=500;
            distVert=625;
            gapHeight = 40;
            gapWidth = 40;
            linenumHor = 20;
            linenumVert = 20;
        for(var i =linenumHor+linenumVert;i >-4;i-=1 ){
             if(linenumHor>0){ rect(xShift, yShift + gapHeight*(linenumHor-1), distHor, 1);}
        if(linenumVert>0){rect(xShift + gapWidth*(linenumVert-1), yShift, 1, distVert);}
            linenumHor -=1;
            linenumVert -=1;

        }




//figure white
var j = 40
fill(50);
alpha(.5);
rect(11*j,0,200,700);
rect(0,16*j,500,400);

fill(255);
ellipse(6.5*j,5*j,4*j);
fill(200);
quad(j,9*j,8*j,8*j,10*j,16*j,2*j,16*j);
quad(4.5*j,6*j,4.2*j,3.5*j,7*j,2*j,8.8*j,3.8*j);
triangle(4.5*j,5.5*j,7*j,8.1*j,8*j,6*j);
quad(4.5*j,6*j,5.8*j,7.8*j,5*j,8.5*j,3.5*j,8*j);
fill(100,255,255);
triangle(5*j,8*j,2*j,8*j,3.8*j,7.2*j);
fill(255,200,200);
triangle(1*j,8.5*j,2*j,8*j,2*j,8.5*j);
triangle(j,8.5*j,j,9.4*j,.6*j,9.4*j);
rect(j,8.5*j,j,1.5*j);
rect(.6*j,9.4*j,1.35*j,.6*j);
quad(.6*j,10*j,1.65*j,15.75*j,3.6*j,15.6*j,3*j,10*j);
rect(2*j,8*j,3*j,2*j);


    }