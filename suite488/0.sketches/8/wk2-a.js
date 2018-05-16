function setup(){

    createCanvas(500,625);
    background(255,255,0);
    angleMode(DEGREES);
    noStroke();

    //grid
    fill(200, 180, 0);
    fill(0);
    var xShift = 0;
    var yShift = 0;
    var distHor = 500;
    var distVert = 625;
    var gapHeight = 40;
    var gapWidth = 40;
    var linenumHor = 20;
    var linenumVert = 20;
    for (var i = linenumHor + linenumVert; i > -4; i -= 1) {
        if (linenumHor > 0) { rect(xShift, yShift + gapHeight * (linenumHor - 1), distHor, 1); }
        if (linenumVert > 0) { rect(xShift + gapWidth * (linenumVert - 1), yShift, 1, distVert); }
        linenumHor -= 1;
        linenumVert -= 1;
    }

    


}


function draw(){

    fill(25,0,255);
    let j = 40;

    ellipse(7*j,)
    rect(7*j,3*j,4*j,17*j,2*j);
    

    beginShape();
    vertex(0,10);
    vertex(10,15);
    vertex(150,150);
    vertex(90,80);
    endShape(close);


}