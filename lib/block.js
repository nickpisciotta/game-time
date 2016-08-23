function Block (options) {
  this.options = options || {};
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x || 50;
  this.y = this.options.y || 290;
  this.width = this.options.width || 50;
  this.height = this.options.height || 100;
}

Block.prototype.draw = function () {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

// requestAnimationFrame(function Block.prototype.moveLeft(){
//   this.context.clearRect(0, 0, canvas.width, canvas.height);
//   this.context.fillRect(this.x--, this.y, this.width, this.height);
//   return this;
//   requestAnimationFrame(Block.prototype.moveLeft())
// })
// };
// Block.prototype.moveLeft = function() {

Block.prototype.moveRight = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.context.fillRect(this.x++, this.y, this.width, this.height);
  return this;
};

Block.prototype.moveUp = function() {
  this.context.clearRect(0, 280, this.canvas.width, this.canvas.height);
  this.context.fillRect(this.x, this.y--, this.width, this.height);
  return this;
};

Block.prototype.moveDown = function() {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.context.fillRect(this.x, this.y++, this.width, this.height);
  return this;
};

module.exports = Block;
