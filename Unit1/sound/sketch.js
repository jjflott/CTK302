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

}
