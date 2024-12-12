let font;


function preload(){
  font = loadFont('/desktop/Ribes-Regular.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('black');
  textFont(font);
  textSize(36);
  text('p5*js', 10, 50);

  describe('LOADING');
}

function draw() {
  background(255,20,147);
  
}
