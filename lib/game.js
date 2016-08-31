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

function Game(canvas, context) {
  this.lives = 3;
  this.state = "active";
  this.score = 0;
  this.canvas = canvas;
  this.context = context;
  this.player = new Player({canvas: canvas, context: context});
  this.obstacles = makeObstacle(canvas, context);
  this.level = 1;
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
      $(".level-counter").html(this.level);
      this.player.draw();
      this.obstacles.forEach(function(obstacle){
        if (_.contains(leftValues, obstacle.y)) {
          obstacle.movingLeft().draw();
        } else {
          obstacle.movingRight().draw();
        }
      });
      this.checkForCollision(this.player);
      this.checkLevel();
};

Game.prototype.deactivateGame = function() {
  this.state = "deactive";
  this.lives -= 1;
  if (this.player.score >= 400 && this.player.score % 400 === 0) {
    this.player.score -= 400;
    
  } else if (this.player.score < 400) {
    this.player.score = 0;
  }
};

Game.prototype.activateGame = function() {
  this.state = "active";
  $('.level-counter').html(this.level);

};

Game.prototype.restartGame = function() {
  this.activateGame();
  this.player.x = 225;
  this.player.y = 430;
};

Game.prototype.nextGameLevel = function() {
  $('.level-counter').html(this.level);
  this.activateGame();
  this.player.x = 225;
  this.player.y = 430;
};

Game.prototype.checkLevel = function() {
  if (this.player.y === 10) {
    this.state = "changeLevel";
  }
};

Game.prototype.advanceLevel = function() {
  var self = this;
  this.level = this.player.score / 400 + 1;
  this.obstacles.forEach(function(obstacle){
    obstacle.speed = (self.level * 0.75);
  });
  $('.level-counter').html(this.level);
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
