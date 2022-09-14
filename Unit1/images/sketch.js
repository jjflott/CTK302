let i1, i2, i3 ;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/ari.jpeg");
  i2 = loadImage("assets/the1975.jpeg");
  i3 = loadImage("assets/tinashe.jpeg");
  imageMode(CENTER);
}

function draw() {
  background("grey");
  image(i1, width/2, height/2 - 120, 100, 100);
  image(i2, width/2, height/2, 100, 100);
  image(i3, width/2, height/2 + 120, 100, 100);

}
