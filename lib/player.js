var avatar = new Image();
avatar.src = "../assets/boy.png";
var highestY = 430;
var $ = require('jQuery');

function Player(options) {
  this.options = options || {};
  this.canvas = this.options.canvas;
  this.context = this.options.context;
  this.x = this.options.x || 225;
  this.y = this.options.y || 430;
  this.width = this.options.width || 20;
  this.height = this.options.height || 42;
  this.score = 0;
}

Player.prototype.draw = function() {
  this.context.drawImage(avatar, this.x, this.y, this.width, this.height);
  $('.score-counter').html(this.score);
};

Player.prototype.moveRight= function() {
  if (this.x < this.canvas.width - this.width) {
    this.x = this.x + 10;
  }
  return this;
};

Player.prototype.moveLeft = function() {
  if (this.x > 1) {
    this.x = this.x - 10;
  }
  return this;
};

Player.prototype.moveUp = function() {
  if (this.y > 410) {
    highestY = 430;
  }
  if (this.y > 10) {
    this.y = this.y - 10;
    if (this.y < 410 && this.y < highestY) {
      this.score += 10;
      $('.score-counter').html(this.score);
      highestY = this.y;
    }
  }
  return this;
};

Player.prototype.moveDown = function() {
  if (this.y < this.canvas.height - this.height) {
    this.y = this.y + 10;
  }
  return this;
};

module.exports = Player;
