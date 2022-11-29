/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" /> 

// Spring 2019 Curtis Stieger's group worked on this

var fence;
var locationData;
var num;
var distance;
var places = [];
var reggieImg;

function preload() {
  locationData = getCurrentPosition();
  reggieImg = loadImage('assets/reggie.jpg');
  // TURN "reggieImg;" into "reggieImg = [];" to create an array of different images
  //reggieImg = loadImage('assets/reggie1.jpg'); //these will change to images of pics in front of the buildings for welcome week
  //reggieImg[2] = loadImage('assets/reggie2.jpg');
}

function setup() {
  //fence = new geoFenceCircle(40.506229, -88.990537, 0.02); //sets geofence location to cva room 17
  createCanvas(displayWidth, displayHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
    // places.push(new Place(40.47859881213726, -88.96815846900026, "Rose's House", .02, reggieImg)); // new Place object, for CVA room 17

  // places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02, reggieImg)); // new Place object, for CVA room 17
  // places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02, reggieImg)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES
 // places.push(new Place(40.510824736433904, -88.99134151266699, "ISU College Bridge", .02, reggieImg)); // new Place object, for ISU bridge over College Ave

  places.push(new Place(40.50931521, -88.98866339, "Rose's Office", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50979896, -88.98923233, "Electrical Room", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50946499, -88.98911583, "Music Therapy Room", .02), reggieImg); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50978191, -88.98909065, "Storage Room", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50949390, -88.98887783, "Mechanical Room", .02, reggieImg)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50982388, -88.98913954, "Our Class", .02, reggieImg)); // new Place object, for ISU bridge over College Ave


}

function draw() {

  // for (var i = 0, i < places.length, i++) {
  //   print(places[i].fence.insideFence);
  // }
}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      places[i].display();
      break; //should break out of the for loop?
      //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
    }
  }

}

function Place(lat, long, desc, radius, reggieImg) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates



  this.display = function() {
    image(reggieImg, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}
