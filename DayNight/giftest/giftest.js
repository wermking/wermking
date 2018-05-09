var lorcomp3;
var lorcomp3gif;

function preload()
{

    
}

function setup()
{
    createCanvas(1280,720)
    lorcomp3gif = loadGif("lorcomp3.gif");


}

function draw() {

    if (lorcomp3gif.loaded()) {
      image(lorcomp3gif, 0, 0);
    }
  }