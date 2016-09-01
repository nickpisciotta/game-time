var _ = require('underscore');
var xValues = _.range(0, -500, -30);
var xValuesLeft = _.range (450, 1000, 30);
var treadmill = new Image();
treadmill.src = 'assets/treadmill.png';
var rack = new Image();
rack.src = 'assets/squat-rack.png';
var elliptical = new Image();
elliptical.src = 'assets/elliptical.png';
var ball = new Image();
ball.src = 'assets/exercise-ball.png';
var weights = new Image();
weights.src = 'assets/weights.png';
var upperImages = [treadmill, rack, elliptical, ball, weights];


function Upperobstacle(options) {
  this.options = options || {};
  this.image = upperImages[Math.floor(Math.random() * upperImages.length )];
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x;
  this.y = this.options.y;
  this.width = this.options.width;
  this.height = this.options.height;
  this.speed = 1;
}

Upperobstacle.prototype.movingRight = function() {
  if (this.x < this.canvas.width) {
    this.x = this.x + this.speed;
  } else {
    this.x = _.sample(xValues);
  }
  return this;
};

Upperobstacle.prototype.movingLeft = function() {
  if (this.x > 0) {
    this.x = this.x - this.speed;
  } else {
    this.x = _.sample(xValuesLeft);
  }
  return this;
};

Upperobstacle.prototype.draw = function() {
  this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
};

module.exports = Upperobstacle;
