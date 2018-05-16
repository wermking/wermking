function setup() {
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100, 1);
    noStroke();
    frameRate(30);

}

var a=0;
function draw() {
    background(342, 94, 73);
    fill(40,100,75,.5)
    a++;
    heads();
    }

function heads() {
    push();
    translate(80, 2*a - 300);
    lordedraw(2);
    pop();
    push();
    translate(5, 2* a);
    lordedraw(5);
    pop();
    push();
    translate(-60, -200 + 2* a);
    lordedraw(3);
    pop();
    push();
    translate(-200,3* a);
    lordedraw(2);
    pop();
}

function lordedraw(l) {
    beginShape();
vertex(121*l, 11*l);
vertex(131   *l, 14   *l);
vertex( 142  *l, 24   *l);
vertex( 148  *l, 39   *l);
vertex( 149  *l, 49   *l);
vertex(  140 *l,  35  *l);
vertex( 133  *l, 38   *l);
vertex( 129  *l,  42  *l);
vertex( 132  *l,  43  *l);
vertex( 139  *l,  40  *l);
vertex( 147  *l, 44   *l);
vertex(  150 *l,  48  *l);
vertex( 153  *l,  70  *l);

vertex(  153 *l, 79   *l);
vertex( 149  *l,  92  *l);
vertex( 145  *l, 108   *l);
vertex(  140 *l, 116   *l);
vertex(  132 *l, 121   *l);
vertex( 116  *l, 120   *l);
vertex(  109 *l, 113   *l);
vertex( 106  *l, 107   *l);
vertex( 111  *l, 104   *l);
vertex( 118  *l, 104   *l);
vertex( 125  *l, 103   *l);
vertex( 120  *l,  100  *l);
vertex( 113  *l,  100  *l);
vertex( 110  *l,  97  *l);
vertex( 110  *l,  96  *l);

vertex(  121 *l, 96   *l);
vertex(  131 *l,  97  *l);
vertex(126   *l,92    *l);
vertex(120   *l,89    *l);
vertex(113   *l,87    *l);
vertex(109   *l,84    *l);
vertex(120   *l,76    *l);
vertex(116   *l,69    *l);
vertex(115   *l,60    *l);
vertex(115   *l,49    *l);
vertex(109  *l, 41   *l);
vertex(102   *l,36    *l);
vertex(100   *l, 28  *l);
vertex(104   *l, 18   *l);
vertex(114   *l, 15   *l);

beginContour();
vertex(127  *l,56  *l);
vertex(138  *l,58  *l);
vertex(140  *l,55  *l);
vertex(152  *l,58  *l);
vertex(142  *l,52  *l);
vertex(131  *l,51  *l);
endContour();

beginContour();
vertex(123  *l,76  *l);
vertex(124  *l, 76 *l);
vertex(127  *l, 75 *l);
vertex(125  *l,73  *l);
vertex(126  *l,73  *l);
vertex(122  *l, 75 *l);
endContour();

endShape(CLOSE);
}