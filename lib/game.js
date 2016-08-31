var _ = require('underscore');
var $ = require('jQuery');
var Player = require("./player.js");
var Obstacle = require("./obstacle.js");
var allObstacles = [];
var xValues = _.range(0, -500, -30);
var yValues = [210, 240, 270, 300, 330, 360, 390];
var leftValues = [240, 300, 360];
$("#game-board").hide();
$(function(){
  $("#start-button").on("click", function(){
      $("#start-menu, #game-board").toggle();
  });
});

// var rightValues = [210, 270, 330, 390];
function Game(canvas, context) {
  this.lives = 3;
  this.state = "active";
  this.score = 0;
  this.canvas = canvas;
  this.context = context;
  this.player = new Player({canvas: canvas, context: context});
  this.obstacles = makeObstacle(canvas, context);
}

Game.prototype.checkForCollision = function(player) {
  var self = this;
  this.obstacles.forEach(function(obstacle){
    if (player.x < obstacle.x + obstacle.width && player.x +
        player.width > obstacle.x && player.y < obstacle.y +
        obstacle.height && player.height + player.y> obstacle.y) {
        self.deactivateGame();
    }
  });
};

Game.prototype.partyTime = function(){
      this.player.draw();
      this.obstacles.forEach(function(obstacle){
        if (_.contains(leftValues, obstacle.y)) {
          obstacle.movingLeft().draw();
        } else {
          obstacle.movingRight().draw();
        }
      });
      this.checkForCollision(this.player);
};

Game.prototype.deactivateGame = function() {
  this.state = "deactive";
  this.lives -= 1;
  this.player.score = 0;
};

Game.prototype.activateGame = function() {
  this.state = "active";
};

Game.prototype.restartGame = function() {
  this.activateGame();
  this.player.x = 225;
  this.player.y = 430;
};

var currentHeight = 430;

Game.prototype.scoreIncrease = function() {
  if (this.player.y <= currentHeight - 10) {
    this.score += 10;
  }
};



function makeObstacle(canvas, context) {
  _(15).times(function() {
   var newObstacle = new Obstacle({y: _.sample(yValues), x: _.sample(xValues), width: 30,
                               height: 20, canvas: canvas, context: context });
   allObstacles.push(newObstacle);
 });
 return allObstacles;
}

module.exports = Game;
