function setup(){

    createCanvas(1000,600);
    angleMode(DEGREES);
    noStroke();
    frameRate(30);

}


function draw(){
rect(100,100,100,100);


starGetCol(200,200, 30, 50,
    255-(mouseX/40), 255-(mouseX/10), 255-(mouseX/40),
    0, 90, 160,

   (mouseX/40), (mouseX/10),(mouseX/40),
    0, 160, 250,

    (mouseX/5),mouseY/4,100,
    mouseY/80, mouseY/5, mouseY/6,

    mouseX/5, 0, 50,
    0, 200, 200
);

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
    endShape(CLOSE);}


    //modified for movement

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
                ellipse(i*mouseX/10, i*mouseY/10, (num - i) * radStep * 2);
                fill(Rs1start+(Rs1values*i),Gs1start+(Gs1values*i),Bs1start+(Bs1values*i));
                star(i*mouseX/10, i*mouseY/10, (num - i - 1) * radStep, (num - i) * radStep, npoints);
            } else {
                fill(Re2start+(Re2values*i),Ge2start+(Ge2values*i),Be2start+(Be2values*i));
                ellipse(i*mouseX/10, i*mouseY/10, (num - i) * radStep * 2);
                rotate(270 / npoints);
                fill(Rs2start+(Rs2values*i),Gs2start+(Gs2values*i),Bs2start+(Bs2values*i));
                star(i*mouseX/10, i*mouseY/10, (num - i - 1) * radStep, (num - i) * radStep, npoints);
                rotate(-270 / npoints);
            }
        }
        pop();
        }

