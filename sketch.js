function setup() {
  createCanvas(700, 400);
  mySpaceShip = new spaceShip(width*0.13, height*0.25, 153, 100);
  mySpaceShip2 = new spaceShip(width*0.01, height*0.40, 100, 150);
  mySpaceShip3 = new spaceShip(width*0.25, height*0.60, 80, 360);
  mySpaceShip4 = new spaceShip(width*0.5, height*0.25, 50, 20);
  mySpaceShip5 = new spaceShip(width*0.84, height*0.40, 160, 80);
  mySpaceShip6 = new spaceShip(width, height*0.60, 80, 220);
  myZoog = new Zoog (width-width*0.08, height/2, 50);
  frameRate(500);
}

function draw() {
  background(0, 0, 153);
  mySpaceShip.display();
  mySpaceShip.moveUpDown();
  mySpaceShip.moveForward();
  mySpaceShip.startAgain();
  mySpaceShip2.display();
  mySpaceShip2.moveUpDown();
  mySpaceShip2.moveForward();
  mySpaceShip2.startAgain();
  mySpaceShip3.display();
  mySpaceShip3.moveUpDown();
  mySpaceShip3.moveForward();
  mySpaceShip3.startAgain();
  mySpaceShip4.display();
  mySpaceShip4.moveUpDown();
  mySpaceShip4.moveForward();
  mySpaceShip4.startAgain();
  mySpaceShip5.display();
  mySpaceShip5.moveUpDown();
  mySpaceShip5.moveForward();
  mySpaceShip5.startAgain();
  mySpaceShip5.display();
  mySpaceShip6.moveUpDown();
  mySpaceShip6.moveForward();
  mySpaceShip6.startAgain();
  myZoog.display();
  myZoog.navigate();
  myZoog.update();

  if (myZoog.x <= 0) {
    background(0, 0, 153);
    fill(255);
    textSize(100);
    text("You win!", width*0.25, height*0.55);
  }
}

function spaceShip(tempX, tempY, tempSize, tempAngle) {
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;
  this.angle = tempAngle;

  this.display = function () {
  //SPACESHIP
    ellipse(this.x, this.y, this.size*0.11, size*0.11);
    ellipse(this.x+this.size*1/4, this.y, this.size*0.11, this.size*0.11);
    ellipse(this.x+this.size*1/2, this.y, this.size*0.11, this.size*0.11);
    noStroke();
    fill(155, 40, 255);
    //body
    ellipse(this.x + this.size*1/4, this.y, this.size, this.size/3.4);
    //hublot
    ellipse(this.x + this.size*1/4, this.y-this.size*0.07, this.size*0.4, this.size*0.38);
    fill(40, 241, 255);
    //windows
    stroke(40, 241, 255);
    strokeWeight(this.size/8.5);
    point(this.x, this.y);
    point(this.x+this.size*1/4, this.y);
    point(this.x+this.size*1/2, this.y);
    noStroke();
  }

  this.moveUpDown = function () {
    // moves up and down
    this.y = this.y + sin(this.angle)*7;
    this.angle = this.angle + random (-0.01, 0.1);
  }

  this.moveForward = function () {
    //the space ship moves forward
    this.x = this.x + 2;
  }
  //starts again
   this.startAgain = function () {
     if (this.x > width) {
       this.x = 0;
     }
   }
}

function Zoog(tempX, tempY, tempRadius) {
  this.x = tempX;
  this.y = tempY;
  this.radius = tempRadius;
  this.eyeColor = color(40, 241, 255);

//Showing Zoog
  this.display = function () {
    //left leg
    line(this.x, this.y, this.x-75, this.y+100);

    //middle leg
    line(this.x, this.y, this.x, this.y + 150);

    //right leg
    line(this.x, this.y, this.x + 75, this.y + 100);

    //outer eyeball
    strokeWeight(6);
    fill(255);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);

     //inner eyeball
     fill(this.eyeColor);
     ellipse(this.x, this.y, this.radius/1.8*2, this.radius/1.8*2);

    //pupil
      fill(0);
      ellipse(this.x, this.y, this.radius*2/7.2, this.radius*2/7.2);
      strokeWeight(20);
  }
// Navigating Zoog
  this.navigate = function() {

      if (keyIsDown(LEFT_ARROW)) {
      this.x -= 10;

    } if (keyIsDown(RIGHT_ARROW)) {
        this.x += 10;

    }  if (keyIsDown(DOWN_ARROW)) {
        this.y += 10;

    }  if (keyIsDown(UP_ARROW)) {
        this.y -= 10;

    } if (this.x > width) {
        this.x = width;

    } if (this.x < 0) {
        this.x = 0;

    } if (this.y > height) {
        this.y = height;

    } if (this.y < 0) {
        this.y = 0;
    }
  }

  this.touches = function(other) {

    var distance = dist(other.x, other.y, this.x, this.y);
    if (distance < this.radius) {
      return true;
  } else {
      return false;
  }
}
// Zoog changes colour if touches the windows of the spaceship
  this.update = function () {

    var distancew1s1 = dist(mySpaceShip.x, mySpaceShip.y, myZoog.x, myZoog.y);
    var distancew1s2 = dist(mySpaceShip2.x, mySpaceShip.y, myZoog.x, myZoog.y);
    var distancew1s3 = dist(mySpaceShip3.x, mySpaceShip.y, myZoog.x, myZoog.y);
    var distancew2s1 = dist(mySpaceShip.x+mySpaceShip2.size*1/4, mySpaceShip2.y, myZoog.x, myZoog.y)
    var distancew2s2 = dist(mySpaceShip2.x+mySpaceShip2.size*1/4, mySpaceShip2.y, myZoog.x, myZoog.y);
    var distancew2s3 = dist(mySpaceShip3.x+mySpaceShip2.size*1/4, mySpaceShip2.y, myZoog.x, myZoog.y);;
    var distancew3s1 = dist(mySpaceShip.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew3s2 = dist(mySpaceShip2.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew3s3 = dist(mySpaceShip3.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew4s1 = dist(mySpaceShip.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew4s2 = dist(mySpaceShip2.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew4s3 = dist(mySpaceShip3.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew5s1 = dist(mySpaceShip.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew5s2 = dist(mySpaceShip2.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew5s3 = dist(mySpaceShip3.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew5s1 = dist(mySpaceShip.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew6s2 = dist(mySpaceShip2.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)
    var distancew6s3 = dist(mySpaceShip3.x+mySpaceShip2.size*1/2, mySpaceShip3.y, myZoog.x, myZoog.y)

    if (distancew1s1 < myZoog.radius || distancew1s2 < myZoog.radius || distancew1s3 < myZoog.radius
    || distancew2s1 < myZoog.radius || distancew2s2 < myZoog.radius || distancew2s3 < myZoog.radius
    || distancew3s1 < myZoog.radius || distancew3s2 < myZoog.radius || distancew3s3 < myZoog.radius
    || distancew4s3 < myZoog.radius || distancew4s3 < myZoog.radius || distancew4s3 < myZoog.radius
    || distancew5s3 < myZoog.radius || distancew5s3 < myZoog.radius || distancew5s3 < myZoog.radius
    || distancew6s3 < myZoog.radius || distancew6s3 < myZoog.radius || distancew6s3 < myZoog.radius) {
        reaction();

    } else {
      this.navigate();
      myZoog.eyeColor = color(40, 241, 255);
   }
  }
}

// Position and color of Zoog are affected by the collision
function reaction () {
  var easing = 0.8;

  // Position changes
  myZoog.x += ((width-width*0.08) - (myZoog.x))* easing;

  //Eye color changes
  // myZoog.eyeColor = color(222, 33, 33);
}
