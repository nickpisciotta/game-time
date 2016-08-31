var _ = require('underscore');
var xValues = _.range(0, -500, -30);
var xValuesLeft = _.range (450, 1000, 30);
var carrot = new Image();
carrot.src = 'assets/carrot.png';
var broccoli = new Image();
broccoli.src = 'assets/broccoli.png';
var asparagus = new Image();
asparagus.src = 'assets/asparagus.png';
var cauliflower = new Image();
cauliflower.src = 'assets/cauliflower.png';
var eggplant = new Image();
eggplant.src = 'assets/aubergine.png';
var pepper = new Image();
pepper.src = 'assets/pepper.png';
var images = [broccoli, carrot, cauliflower, asparagus, eggplant, pepper];

function Obstacle(options) {
  this.options = options || {};
  this.image = images[Math.floor(Math.random() * images.length )];
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x;
  this.y = this.options.y;
  this.width = this.options.width;
  this.height = this.options.height;
  this.speed = 1;
}

Obstacle.prototype.movingRight = function() {
  if (this.x < this.canvas.width) {
    this.x = this.x + this.speed;
  } else {
    this.x = _.sample(xValues);
  }
  return this;
};

Obstacle.prototype.movingLeft = function() {
  if (this.x > 0) {
    this.x = this.x - this.speed;
  } else {
    this.x = _.sample(xValuesLeft);
  }
  return this;
};

Obstacle.prototype.draw = function() {
  this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
};

module.exports = Obstacle;
