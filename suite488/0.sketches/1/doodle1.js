function setup(){
    createCanvas(1600,900);
    background('rgb(125,0,30)');
    stroke('rgb(200,20,0)');
    noFill();
    strokeWeight(5);

    ellipse(50,50,50,25);
    ellipse(100,50,50,25);
    ellipse(150,50,50,25);
    ellipse(200,50,50,25);
    ellipse(250,50,50,25);
    ellipse(300,50,50,25);
    ellipse(350,50,50,25);
    ellipse(400,50,50,25);
    ellipse(450,50,50,25);
    ellipse(500,50,50,25);
    ellipse(550,50,50,25);

    ellipse(50,75,50,25);
    ellipse(100,75,50,25);
    ellipse(150,75,50,25);
    ellipse(200,75,50,25);
    ellipse(250,75,50,25);
    ellipse(300,75,50,25);
    ellipse(350,75,50,25);
    ellipse(400,75,50,25);
    ellipse(450,75,50,25);
    ellipse(500,75,50,25);
    ellipse(550,75,50,25);

    ellipse(50,100,50,25);
    ellipse(100,100,50,25);
    ellipse(150,100,50,25);
    ellipse(200,100,50,25);
    ellipse(250,100,50,25);
    ellipse(300,100,50,25);
    ellipse(350,100,50,25);
    ellipse(400,100,50,25);
    ellipse(450,100,50,25);
    ellipse(500,100,50,25);
    ellipse(550,100,50,25);


    fill(255,255,0,50);
    noStroke();
    rect(200,50,250,400);

    strokeWeight(2);
    stroke('rgb(200,200,0)');

    line(220,0,220,900);
    line(272,0,272,900);

    noStroke();
    quad(333,5,421,221,287,689,150,300);
}
function draw(){
    
    if (mouseIsPressed) {
    
        noStroke()
        if (keyIsPressed) {
        fill(200,150,0,80);
        } else {
        fill(20,20,150,80);
         
        }
    } else {
      noFill();
    }
    ellipse(mouseX, mouseY, 20, 20);
  }