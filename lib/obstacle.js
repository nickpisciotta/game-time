function Obstacle(options) {
  this.options = options || {};
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = generateXVariable();
  this.y = this.options.y;
  this.width = this.options.width;
  this.height = this.options.height;
}

function generateXVariable (){
  return Math.floor((Math.random() * -500) + 1);
}

Obstacle.prototype.movingRight = function() {
  if (this.x < this.canvas.width) {
    this.x = this.x + 2 ;
  } else {
    this.x = generateXVariable();
  }
  return this;
}

Obstacle.prototype.draw = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = Obstacle;
