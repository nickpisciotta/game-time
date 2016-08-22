
function Block (options) {
  this.options = options || {}
  this.canvas = this.options.canvas
  this.context = this.options.context
  this.x = this.options.x || 50;
  this.y = this.options.y || 290;
  this.width = this.options.width || 100;
  this.height = this.options.height || 100;
}

Block.prototype.draw = function () {
  this.context.fillRect(this.x, this.y, this.width, this.height)
}

Block.prototype.moveLeft = function() {
  this.x-- ;
  return this;
}

Block.prototype.moveRight = function() {
  this.x++ ;
  return this;
}

Block.prototype.moveUp = function() {
  this.y-- ;
  return this;
}

Block.prototype.moveDown = function() {
  this.y++;
  return this;
}

module.exports = Block
