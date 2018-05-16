

var num = 20;

function setup() {
    colorMode(RGB, 255, 255, 255, 1);
    createCanvas(400,150);
    background(250, 200, 0);
    noStroke();
    fill(255);
    angleMode(DEGREES)

    //white horizontals
    var y = 50;
    rect(0,y,400,1);
    y = 100;
    rect(0,y,400,1);
    y = 150;
    rect(0,y,400,1);
    y = 200;
    rect(0,y,400,1);
    y = 250;
    rect(0,y,400,1);
    y = 300;
    rect(0,y,400,1);
    y = 350;
    rect(0,y,400,1);
    y = 400;
    rect(0,y,400,1);
    y = 450;
    rect(0,y,400,1);

    //white verticals
    var x = 50;
    rect(x,0,1,500);
    x = 100;
    rect(x,0,1,500);
    x = 150;
    rect(x,0,1,500);
    x = 200;
    rect(x,0,1,500);
    x = 250;
    rect(x,0,1,500);
    x = 300;
    rect(x,0,1,500);
    x = 350;
    rect(x,0,1,500);

    var j = 15;
    var xShift = 0;
    var yShift = 0;
    var cVal1 = 150;
    var cVal2 = 100;
    var cVal3 = 150;

    for(var i = 0; i < 15; i++) {
       
    objHand();

             j-=1;
             xShift+=50
             yShift+=50;
             cVal1-=20;
             cVal2-=20;
             cVal3+=30;

    }

    var j = 15;
    var xShift = -30;
    var yShift = 100;
    var cVal1 = 200;
    var cVal2 = 50;
    var cVal3 = 150;

    for(var i = 0; i < 15; i++) {

        objHand();
             j+=2;
             xShift+=75;
             yShift+=75;
             cVal1+=20;
             cVal2-=20;
             cVal3-=30;

    }
    

    function objHand() {
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

function draw(){
    strokeCap(SQUARE)
    stroke(255,100,0);
    line(50,0,100,50);
    line(100,50,125,0);
    
    stroke(255,60,200);
    line(100,50,500,450);
    line(100,50,0,250);

    fill(0,0,0,0);
    strokeWeight(1);
    arc(100, 50,50,50,300,45,OPEN);
    arc(100, 50,60,60,298,45,OPEN);
    arc(100, 50,30,30,300,45,OPEN);
    arc(100, 50,65,65,298,45,OPEN);
    
    arc(165,50,50,50,90,270,OPEN);
    arc(165,50,60,60,95,265,OPEN);
    arc(165,50,30,30,90,270,OPEN);
    arc(165,50,65,65,112,248,OPEN);

    arc(165,80,50,50,270,90,OPEN);
    arc(165,80,60,60,275,85,OPEN);
    arc(165,80,30,30,270,90,OPEN);
    arc(165,80,65,65,292,68,OPEN);

    arc(165,20,50,50,270,90,OPEN);
    arc(165,20,60,60,270,85,OPEN);
    arc(165,20,30,30,270,90,OPEN);
    arc(165,20,65,65,270,68,OPEN);
    
    bezier(165,45,160,45,160,55,165,55);

    bezier(165,15,170,15,170,25,165,25);

    bezier(165,75,170,75,170,85,165,85);

    //lower
    arc(165,110,50,50,216,270,OPEN);
    arc(165,110,60,60,218,270,OPEN);
    arc(165,110,30,30,214,270,OPEN);
    arc(165,110,65,65,220,248,OPEN);

    //higher
    arc(165,-10,50,50,90,270,OPEN);
    arc(165,-10,60,60,95,270,OPEN);
    arc(165,-10,30,30,90,270,OPEN);
    arc(165,-10,65,65,112,270,OPEN);

    arc(165,140,50,50,270,00,OPEN);
    arc(165,140,60,60,275,08,OPEN);
    arc(165,140,65,65,292,12,OPEN);

    bezier(165,105,160,105,160,115,165,115);
    fill(250,200,0);
    noStroke();
    triangle(154,105,167,118,154,115);

    stroke(255,40,0);
    line(200,0,200,150);

    fill(200,200,90);
    noStroke();
    quad(115,150,150,150,150,225,105,190);
    rect(135,225,20,30);
    rect(110,250,65,70);
    rect(125,320,50,40);

    fill(100,100,250,1);
    quad(200,0,400,0,400,150,200,150);

    

}



fill(0, 150, 255, .5);
        fill(255, 20, 200);
        fill(0, 150, 255);
        fill(255, 0, 255);
        fill(235);