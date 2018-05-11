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