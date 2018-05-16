var a;
var b;
var c;
var d;
var anchorX;
var anchorY;

function setup() {

    createCanvas(1000, 600);
    colorMode(HSB,360,100,100,100);
    angleMode(DEGREES);
    noStroke();
    frameRate(30);

    //grid
    stroke(200, 180, 200);
    fill(0);
    var xShift = 0;
    var yShift = 0;
    var distHor = 1000;
    var distVert = 600;
    var gapHeight = 50;
    var gapWidth = 50;
    var linenumHor = 20;
    var linenumVert = 20;
    for (var i = linenumHor + linenumVert; i > -4; i -= 1) {
        if (linenumHor > 0) { rect(xShift, gapHeight * (linenumHor - 1), distHor, 1); }
        if (linenumVert > 0) { rect(gapWidth * (linenumVert - 1), yShift, 1, distVert); }
        linenumHor -= 1;
        linenumVert -= 1;
    }



    a = 500;
    b = 600;
    c=0;

}

function draw() {
    background(219, 20, 80,5);
    noStroke();

 //bouncing boy
    ellipse(abs(a * sin(b)), b, 30,15);


    push();
    //middle circle
    fill(0, 50,90, 1);
    ellipse(300, 300, 40 * sin(b) * (300 / mouseX));
    fill(0, 50, 90, 1);
    ellipse(300, 300, mouseY + 40 * cos(b));
    pop();
    
    

    r = (mouseY + 40 * cos(b) / 2)
    push();
    fill(150, 50, 0, 30);
    translate(300, 300);
    ellipse(mouseX * sin(r), mouseY * cos(r), 24, 24);
    pop();

    //more bounce
    ellipse(abs(a * sin(b)), b, 20,10);
    ellipse(abs(a * cos(b)), b + 200, 24, 24);

    //crawl upwards
    ellipse((700+c)-.3*b, 2*b + 50, 15, 15);
    ellipse(a + c, 2*b + 30, 15, 15);

    //cu2
    ellipse((685+c)-.3*b, 2*b + 200, 15, 15);
    ellipse(a -15 + c, 2*b +400, 15, 15);

    
    push();
    translate(700, b);
    pop();
 

    mouseCircle();

    //moving up at constant speed
    b = b - 2;

    if (b < -200) {
        b = 600;
        c=c+30;
    }
}

function mouseCircle(){
    push();
    fill(50, 100, 70, 5);
    ellipse(mouseX,mouseY,d,d);
    pop();

    d=((mouseX-anchorX)^2+(mouseY-anchorY)^2)^.5;

    if (mouseIsPressed){
        anchorX=mouseX;
        anchorY=mouseY;
    }
}

