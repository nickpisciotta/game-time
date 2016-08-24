var _ = require('underscore');
var yValues = [200, 250, 300, 350, 400];
var xValues = _.range(0, -500, -30);
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var allObstacles = [];

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



function makeObstacle() {
  _(15).times(function() {
   var newObstacle = new Obstacle({y: _.sample(yValues), x: _.sample(xValues), width: 15,
                               height: 10, canvas: canvas, context: context });
   allObstacles.push(newObstacle);
 });
 return allObstacles;
}

makeObstacle();

module.exports = allObstacles;
