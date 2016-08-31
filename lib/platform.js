var _ = require('underscore');
var xValues = _.range(0, -500, -30);
var xValuesLeft = _.range (450, 1000, 30);

function Platform(options) {
  this.options = options || {};
  // this.image = images[Math.floor(Math.random() * images.length )];
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x;
  this.y = this.options.y;
  this.width = this.options.width;
  this.height = this.options.height;
  this.speed = 1;
}

Platform.prototype.movingRight = function() {
  if (this.x < this.canvas.width) {
    this.x = this.x + this.speed;
  } else {
    this.x = _.sample(xValues);
  }
  return this;
};

Platform.prototype.movingLeft = function() {
  if (this.x > 0) {
    this.x = this.x - this.speed;
  } else {
    this.x = _.sample(xValuesLeft);
  }
  return this;
};

Platform.prototype.draw = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = Platform;
