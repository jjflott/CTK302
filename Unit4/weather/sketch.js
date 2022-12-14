/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 


// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let img1;
let f1;

function setup() {
  createCanvas(500, 600);

  img1 = loadImage("assets/aurora.jpeg");
  f1 = loadFont("assets/smile.otf");
  textAlign(CENTER);


  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Aurora,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=d24b28063936dbe77242239acdcf1821" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  description = weather.main.description;

}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      image(img1, 0, 0, 800, 600);
      fill("black");
      textFont(f1, 15);
      text("What is the weather in " + weather.name + "?", 100, 20);
      textFont(f1);
      text("windspeed is " + windspeed, 60, 40);
      textFont(f1);
      text("temperature is " + temperature, 70, 60);
      textFont(f1);
      text("humidity is " + humidity + "%", 60, 80);
      textFont(f1);
      text("description is " + weather.weather[0].description, 77, 100);
      
 

      // cloud
      fill("white");
      noStroke();
      ellipse(x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
