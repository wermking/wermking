function loadweather() {

    
    imgX0=loadImage(imgX.dayphase[d].gifpaths[0]);
    
    console.log(imgX0);
    console.log("loadweather completed!")
}

ele = createAudio('assets/rough-dreamaudio.mp3');

// here we set the element to autoplay
// The element will play as soon
// as it is able to do so.
ele.autoplay(true);



          var sequenceAnimation;
var glitch;

function preload() {


function setup() {
createCanvas(800, 600);
}

function draw() {
background(0);

animation(glitch, 200, 100);
}

function routeloading1() {
    if (d == 0) {
        anim1 = loadAnimation(
            "dn-png/woman1day00.png",
                      "dn-png/woman1day01.png",
                      "dn-png/woman1day02.png",
                      "dn-png/woman1day03.png",
                      "dn-png/woman1day04.png")
        console.log("rl1-0");
    }
    if (d == 1) {
        anim1 = loadAnimation("dn-png/woman1sunr00.png",
"dn-png/woman1sunr01.png",
"dn-png/woman1sunr02.png",
"dn-png/woman1sunr03.png",
"dn-png/woman1sunr04.png");
console.log("rl1-1");
    }
    if (d == 2) {
        anim1 = loadAnimation(
            "dn-png/woman1night00.png",
            "dn-png/woman1night01.png",
            "dn-png/woman1night02.png",
            "dn-png/woman1night03.png",
            "dn-png/woman1night04.png");
            console.log("rl1-2");
    }
    console.log("routeloading completed!");
    
}