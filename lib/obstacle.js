var _ = require('underscore');
var xValues = _.range(0, -500, -30);


function Obstacle(options) {
  this.options = options || {};
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x;
  this.y = this.options.y;
  this.width = this.options.width;
  this.height = this.options.height;
}

Obstacle.prototype.movingRight = function() {
  if (this.x < this.canvas.width) {
    this.x = this.x + 1.5;
  } else {
    this.x = _.sample(xValues);
  }
  return this;
};

Obstacle.prototype.draw = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = Obstacle;
//move somewhere else? doesn't need to live w/i obstacle. Maybe put in index.js, game.js. Put it somewhere that won't be tested. move to game.j--where you put stuff that has pieces together. Game.js doesn't get very many tests
//Manages rendering, event listeners, etc.
