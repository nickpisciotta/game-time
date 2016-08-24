function Block (options) {
  this.options = options || {};
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x || 225;
  this.y = this.options.y || 430;
  this.width = this.options.width || 30;
  this.height = this.options.height || 10;
}

Block.prototype.draw = function() {
  this.context.fillRect(this.x, this.y, this.width, this.height);
};

Block.prototype.moveRight= function() {
  if (this.x < this.canvas.width - this.width) {
    this.x = this.x + 10;
  }
  return this;
};

// Block.prototype.movingRightSlow = function() {
//   if (this.x < this.canvas.width) {
//     this.x++;
//   } else {
//     this.x = 0;
//   }
//   return this;
// }

Block.prototype.moveLeft = function() {
  if (this.x > 1) {
    this.x = this.x - 10;
  }
  return this;
};
//create a different draw method that clears it. Every time call draw, clear canvas; will only want to happen in the game
//every time requestAnimationFrame starts, clearing and drawing
//in requestAnimationFrame, only trigger gamestart and movement
Block.prototype.moveUp = function() {
  if (this.y > 1) {
  this.y = this.y - 10;
  }
  return this;
};

Block.prototype.moveDown = function() {
  if (this.y < this.canvas.height - this.height) {
    this.y = this.y + 10;
  }
  return this;
};

module.exports = Block;
