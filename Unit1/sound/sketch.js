/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

let elevate;

function preload() {
  elevate = loadSound("assets/elevate.mp3");
}


function setup() {
  createCanvas(500, 500);
  elevate.play();
}

function draw() {
  background("black");
  fill("white");
  text("the name of the song is elevate and I like it because I want to elevate like Doctor Strange", 100, 100, 400, 400);
}

function mouseReleased() {
  if (elevate.isPlaying()) {
    elevate.pause();
  }  else {
      elevate.play()
  }
}

function touchStarted() {
  getAudioContext().resume();
}


