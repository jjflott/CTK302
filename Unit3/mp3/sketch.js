/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


let cars = [];
let i1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  i1 = loadImage("assets/spidey.jpeg");
  imageMode(CENTER);
     
}

function draw() {
  background("white");

  image(i1, width/2, height/2, 600, 500);
  
    cars.push(new Car());
  
  for (let i = 0; i < cars.length; i++) {
 cars[i].display();
  cars[i].move();
    
    
    
    if (cars[i].opacity < 0 ) {
      cars.splice(i, 1);
    }
    
  }
  fill("black");
  // text(cars.length, 40, 40); 

}

class Car {

  constructor() {
  this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-.3, .3), random(-10, -3));
    this.r = random(300);
    this.b = random(300);
    this.g = random(300);
    this.opacity = random(200);
    this.size = random(48, 128);
    
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.opacity);
    textSize(this.size);
    text("Spidey", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity -= 5;
  }
}
