/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

var bubbles = [];
let url = "";
let img1;
let f1;

function setup() {
  img1 = loadImage("assets/aback.jpeg");
  f1 = loadFont("assets/smile.otf");

  let key = "1JuCCR7Keb0MedkOxinwj-Y__oZqyekG3IRM7m6h_Eug"; // this is KEY of the URL from the sheet
  
  //  let key = "1g6o2AfpufqOBwo1bthRzXYd_S85WxsjYqWIU4t16rzg"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["what's your fav ice cream?"],
        data[i]["do you like marvel? if so, any fav hero?"],
        data[i]["your name"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("blue");
  image(img1, 0, 0, 600, 600);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(happy, thankful, name) {
    // only the order of these parameters matters!
    this.happy = happy;
    this.thankful = thankful;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("lightblue");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 120, 120);
    fill("black");
    textFont(f1, 15);
    text(
      this.name + "\n" + this.happy + "\n" + this.thankful,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ; 
    
  }
  
  
}

