function Block (options) {
  this.options = options || {};
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x || 50;
  this.y = this.options.y || 290;
  this.width = this.options.width || 50;
  this.height = this.options.height || 10;
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
  this.x = this.x + 10;
  return this;
};
//create a different draw method that clears it. Every time call draw, clear canvas; will only want to happen in the game
//every time requestAnimationFrame starts, clearing and drawing
//in requestAnimationFrame, only trigger gamestart and movement
Block.prototype.moveUp = function() {
  this.y = this.y - 10;
  return this;
};

Block.prototype.moveLeft = function() {
  this.x = this.x - 10;
  return this;
};

Block.prototype.moveDown = function() {
  // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.y = this.y + 10;
  return this;
};

module.exports = Block;
