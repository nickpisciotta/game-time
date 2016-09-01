var _ = require('underscore');
var $ = require('jQuery');
var Player = require("./player.js");
var Obstacle = require("./obstacle.js");
var Upperobstacle = require("./upper-obstacle.js");
var allObstacles = [];
var allUpperObstacles = [];
var xValues = _.range(0, -500, -30);
var yValues = [210, 240, 270, 300, 330, 360, 390];
var upperYValues = [45, 75, 105, 145];
var upperLeftValues = [45, 105];
var leftValues = [240, 300, 360];
var ew = new Audio('assets/ew.mp3');
var yay = new Audio('assets/yay.mp3');

function Game(canvas, context) {
  this.lives = 3;
  this.state = "active";
  this.score = 0;
  this.canvas = canvas;
  this.context = context;
  this.player = new Player({canvas: canvas, context: context});
  this.obstacles = makeObstacle(canvas, context);
  this.upperObstacles = makeUpperObstacle(canvas, context);
  this.level = 1;
  localStorage.setItem("gamelives", JSON.stringify(this.lives));
  localStorage.setItem("playerscore", JSON.stringify(this.player.score));
}

Game.prototype.checkForCollision = function(player) {

  if (this.player.y > 180) {
    this.checkObstacles(player, this.obstacles);
  } else if (this.player.y < 160 && this.player.y > 10)
   {
    this.checkObstacles(player, this.upperObstacles);
  }
};

Game.prototype.checkObstacles = function(player, obstacleArray) {
  var self = this;
  obstacleArray.forEach(function(obstacle){
    if (player.x < obstacle.x + obstacle.width && player.x +
      player.width > obstacle.x && player.y < obstacle.y +
      obstacle.height && player.height + player.y> obstacle.y) {
        self.deactivateGame();
      }
    });
};

Game.prototype.deactivateGame = function() {
  ew.play();
  if (this.lives > 1) {
    this.state = "deactive";
    this.lives -= 1;
    localStorage.gamelives -= 1;
  } else {
    this.lives -= 1;
    localStorage.gamelives -= 1;
    this.state = "disabled";
  }
};

Game.prototype.moveObstacles = function() {
  this.obstacles.forEach(function(obstacle){
    if (_.contains(leftValues, obstacle.y)) {
      obstacle.movingLeft().draw();
    } else {
      obstacle.movingRight().draw();
    }
  });
  this.upperObstacles.forEach(function(upperObstacle){
    if (_.contains(upperLeftValues, upperObstacle.y)) {
      upperObstacle.movingLeft().draw();
    } else {
      upperObstacle.movingRight().draw();
    }
  });
}

Game.prototype.initiateElements = function(){
  $(".level-counter").html(this.level);
  this.player.draw();
  this.moveObstacles();
  this.checkForCollision(this.player);
  this.checkLevel();
  $(".lives-counter").html(localStorage.gamelives);
};

Game.prototype.restartLevel = function() {

  this.player.score = 0;
  localStorage.playerscore = 0;
  this.player.x = 225;
  this.player.y = 430;
  this.lives = 3;
  localStorage.gamelives = 3;
  this.level = 1;
  this.activateGame();
  this.obstacles.forEach(function(obstacle){
    obstacle.speed = 0.75;
  });
  this.upperObstacles.forEach(function(obstacle){
    obstacle.speed = 0.75;
  });
};

Game.prototype.activateGame = function() {
  this.state = "active";
  $('.level-counter').html(this.level);
};

Game.prototype.restartGame = function() {
  this.activateGame();
  this.player.x = 225;
  this.player.y = 430;
  this.player.score = (this.level - 1) * 400;
  localStorage.playerscore = (this.level - 1) * 400;
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
    yay.play();
  }
};

Game.prototype.advanceLevel = function() {
  var self = this;
  this.level = this.player.score / 400 + 1;
  this.obstacles.forEach(function(obstacle){
    obstacle.speed = (self.level * 0.75);
  });
  this.upperObstacles.forEach(function(obstacle){
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

function makeUpperObstacle(canvas, context) {
  _(15).times(function() {
    var newObstacle = new Upperobstacle({y: _.sample(upperYValues), x: _.sample(xValues), width: 30,
      height: 20, canvas: canvas, context: context });
      allUpperObstacles.push(newObstacle);
    });
    return allUpperObstacles;
  }

module.exports = Game;
