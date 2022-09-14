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
  text("spider-man", width/2, 100);
  textFont(f2, 24);
  text("is my favorite", width/2, 200);
  textFont(f3, 62);
  text("marvel hero", width/2, 300);
}
