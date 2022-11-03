/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let cars = [];
let f2;
let img1, img2, img3, img4;
let frog;
let maxCars = 13;
let frogPos;
let state = 0;
let timer = 0;
let gamesong;
let gamewin;
let gamelose;

function setup() {
  createCanvas(800, 600);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);


  f2 = loadFont("assets/ulove.TTF");
  img1 = loadImage("assets/back.png");
  img2 = loadImage("assets/bubbles.png");
  img3 = loadImage("assets/mp3.png");
  img4 = loadImage("assets/jelly.png");
  frog = loadImage("assets/bobsponge.png");
  gamesong = loadSound("assets/bmusic.mp3");
  gamewin = loadSound("assets/winner.mp3");
  gamelose = loadSound("assets/loser.mp3");


  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  textFont(f2);
  background("white");



  switch (state) {
    case 0:
      image(img1, 0, 0, 800, 600);
      fill("white");
      textSize(50);
      text("Welcome to\n Catching Jellies", 400, 200);
      textSize(30);
      text("\nClick to start", width / 2, height / 2 + 90);
      translate(width / 2, height / 2);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
      image(img2, -350, -320, 750, 600);
      break;

    case 1:
      game();
      timer++;
      if (timer > 15 * 60) {
        state = 3;
      }
      break;

    case 2:
      if (!gamewin.isPlaying()) {

        gamewin.play();
      }
      image(img1, 0, 0, 800, 600);
      fill('white');
      textSize(30);
      text("YOU WON", width / 2, height / 2);
      textSize(20);
      text("BobSponge had a great time\njelly fishing thanks to you", width / 2, height / 2 + 50);
      break;

    case 3:
      if (!gamelose.isPlaying()) {

        gamelose.play();
      }
      image(img1, 0, 0, 800, 600);
      fill('yellow');
      textSize(50);
      text("YOU LOST", width / 2, height / 2);
      fill('yellow');
      textSize(20);
      text("How sad\nBobSponge will not forgive you for ruining his jellyfishing time", width / 2, height / 2 + 50);
      break;

  }

}


function game() {

  if (!gamesong.isPlaying()) {

    gamesong.play();
  }

  image(img1, 0, 0, width, height);
  

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 70) {
      cars.splice(i, 1);
    }

  }

  if (cars.length == 0) {
    state = 2;
  }

  image(frog, frogPos.x, frogPos.y, 150, 150);
  checkForKeys();

  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image(img2, -350, -320, 750, 600);


}


function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 6;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 6;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 6;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 6;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;

  }

}

class Car {

  constructor() {
    this.pos = createVector(random(300, 40));
    this.vel = createVector(random(5, -3), random(-2, 6));
    this.size = random(40, 80);


  }


  display() {

    image(img4, this.pos.x, this.pos.y, 50, 50);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 9;
    if (this.pos.x < -5) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 1;
    if (this.pos.y < -2) this.pos.y = height;

  }

}
