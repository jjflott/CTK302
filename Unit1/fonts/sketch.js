let f1, f2, f3;


function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/gloomy.otf");
  f2 = loadFont("assets/signature.otf");
  f3 = loadFont("assets/pocket.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("hello there!", width/2, 100);
  textFont(f2, 24);
  text("I am Obi Wan", width/2, 200);
  textFont(f3, 62);
  text("Kenobi", width/2, 300);
}
