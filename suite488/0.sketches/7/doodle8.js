function setup(){

    createCanvas(500,625);
    background(0);
    angleMode(DEGREES);
    noStroke();

    
    starGetCol(100,100,5,10,
        150,0,0,
        255,100,0,

        100,0,100,
        255,200,200,

        255,0,150,
        255,255,0,
        
        255,0,50,
        255,255,0);

    starGetCol(200, 100, 5, 10,
        90, 90, 200,
        150, 255, 0,

        90,0, 100,
        255, 200, 200,

        255, 0, 0,
        255, 90, 160,

        255, 0, 50,
        255, 160, 250);

    starGetCol(300, 100, 5, 10,
        90, 90, 200,
        150, 255, 0,

        90, 0, 100,
        255, 200, 200,

        150, 255, 0,
        90, 90, 200,

        255, 200, 200,
        90, 0, 100,
    );

    starGetCol(400, 100, 5, 10,
        255, 0, 0,
        255, 90, 160,

        255, 0, 50,
        255, 160, 250,

        255, 0, 0,
        255, 90, 160,

        255, 0, 50,
        255, 160, 250);


    starGetCol(150, 187, 5, 10,
        100, 0, 0,
        255, 90, 160,

        150, 0, 50,
        255, 160, 250,

        255, 0, 0,
        255, 150, 150,

        255, 0, 50,
        255, 200, 200);

    starGetCol(250, 187, 5, 10,
        0, 0, 0,
        0, 90, 160,

        0, 0, 50,
        0, 160, 250,

        150, 0, 0,
        0, 150, 150,

        150, 0, 50,
        0, 200, 200);

        starGetCol(350, 187, 5, 10,
            0, 0, 0,
            0, 90, 160,
    
            0, 0, 50,
            0, 160, 250,
    
            0, 0, 0,
            0, 150, 150,
    
            0, 0, 200,
            0, 200, 200);

            starGetCol(450, 187, 5, 10,
                100, 0, 0,
                0, 90, 160,
        
                0, 0, 50,
                100, 160, 0,
        
                0, 0, 200,
                0, 150, 150,
        
                0, 100,50,
                255, 200, 0);

                starGetCol(50, 187, 10, 5,
                    100, 0, 0,
                    0, 90, 160,
            
                    0, 0, 50,
                    100, 160, 0,
            
                    0, 0, 200,
                    0, 150, 150,
            
                    0, 100,50,
                    255, 200, 0);
                    starGetCol(300,274,2,25,
                        150,0,0,
                        255,100,0,
                
                        100,0,100,
                        255,200,200,
                
                        255,0,150,
                        255,255,0,
                        
                        255,0,50,
                        255,255,0);
                    
                        starGetCol(400, 274, 10,5,
                            90, 90, 200,
                            150, 255, 0,
                    
                            90, 0, 100,
                            255, 200, 200,
                    
                            150, 255, 0,
                            90, 90, 200,
                    
                            255, 200, 200,
                            90, 0, 100,
                        );
                        starGetCol(200, 274, 10,5,
                            0, 255, 255,
                            0, 165, 95,
                    
                            255, 0, 50,
                            255, 160, 250,
                    
                            255, 0, 0,
                            255, 90, 160,
                    
                            255, 0, 50,
                            255, 160, 250);

                            starGetCol(100, 274, 5, 10,
                                0, 95, 5,
                                0, 100, 205,
                                
                                0, 165, 95,
                                0, 100, 255,
                                
                                0, 95, 5,
                                0, 100, 205,
                                
                                0, 165, 95,
                                0, 100, 255
                                );
    }


 function starGetCol(x,y,radStep,num,
    Re1start,Ge1start,Be1start,
    Rs1start,Gs1start,Bs1start,
    Re1end,Ge1end,Be1end,
    Rs1end,Gs1end,Bs1end,
    Re2start,Ge2start,Be2start,
    Rs2start,Gs2start,Bs2start,
    Re2end,Ge2end,Be2end,
    Rs2end,Gs2end,Bs2end){

        var Re1values = ( Re1end - Re1start) / num;
        var Ge1values = ( Ge1end - Ge1start) / num;
        var Be1values = ( Be1end - Be1start) / num;
        var Rs1values = ( Rs1end - Rs1start) / num;
        var Gs1values = ( Gs1end - Gs1start) / num;
        var Bs1values = ( Gs1end - Gs1start) / num;
        var Re2values = ( Re2end - Re2start) / num;
        var Ge2values = ( Ge2end - Ge2start) / num;
        var Be2values = ( Be2end - Be2start) / num;
        var Rs2values = ( Rs2end - Rs2start) / num;
        var Gs2values = ( Gs2end - Gs2start) / num;
        var Bs2values = ( Bs2end - Bs2start) / num;

    push();
    translate(x,y);
    for (var i = 0; i < num; i++) {
        let npoints = round((num - i) * 3.627);
        if (i % 2 == 0) {
            fill(Re1start+(Re1values*i),Ge1start+(Ge1values*i),Be1start+(Be1values*i));
            ellipse(0, 0, (num - i) * radStep * 2);
            fill(Rs1start+(Rs1values*i),Gs1start+(Gs1values*i),Bs1start+(Bs1values*i));
            star(0, 0, (num - i - 1) * radStep, (num - i) * radStep, npoints);
        } else {
            fill(Re2start+(Re2values*i),Ge2start+(Ge2values*i),Be2start+(Be2values*i));
            ellipse(0, 0, (num - i) * radStep * 2);
            rotate(270 / npoints);
            fill(Rs2start+(Rs2values*i),Gs2start+(Gs2values*i),Bs2start+(Bs2values*i));
            star(0, 0, (num - i - 1) * radStep, (num - i) * radStep, npoints);
            rotate(-270 / npoints);
        }
    }
    pop();
    }

function starGet(x, y, radStep, num) {
    var grayvalues = 255 / num;
    push();
    translate(x,y);
    for (var i = 0; i < num; i++) {
        fill(i * grayvalues);
        ellipse(0, 0, (num - i) * radStep * 2);
        fill(i * grayvalues + 60);
        let npoints = round((num - i) * 3.627);
        if (i % 2 == 0) {
            star(0, 0, (num - i - 1) * radStep, (num - i) * radStep, npoints);
        } else {
            rotate(270 / npoints);
            star(0, 0, (num - i - 1) * radStep, (num - i) * radStep, npoints);
            rotate(-270 / npoints);
        }
    }
    pop();
}  

function star(x, y, radius1, radius2, npoints) {
    var angle = 360 / npoints;
    var halfAngle = angle/2.0;
    beginShape();
    for (var a = 0; a < 360; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a+halfAngle) * radius1;
      sy = y + sin(a+halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}

    function objHand(xShift, yShift, j, cVal1, cVal2, cVal3) {
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



