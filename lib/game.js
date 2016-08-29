var _ = require('underscore');
var Player = require("./player.js");
var Obstacle = require("./obstacle.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var allObstacles = [];
var xValues = _.range(0, -500, -30);
var yValues = [210, 240, 270, 300, 330, 360, 390];
var leftValues = [240, 300, 360];
// var rightValues = [210, 270, 330, 390];
var player = new Player({canvas: canvas, context: context});
var game = new Game();

function Game(canvas, context) {
  this.lives = 3;
  this.state = "active";
  this.score = 0;
  this.canvas = canvas;
  this.context = context;
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (game.state === "active") {
    player.draw();
    allObstacles.forEach(function(obstacle){
      if (_.contains(leftValues, obstacle.y)) {
        obstacle.movingLeft().draw();
      } else {
        obstacle.movingRight().draw();
      }
    });
    checkForCollision(player, allObstacles);
    requestAnimationFrame(gameLoop);
  } else {
    game.restartGame();
    requestAnimationFrame(gameLoop);
  };
});

// Need to change from document to canvas once we figure it out
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 38) {
    player.moveUp();
  } else if (e.keyCode === 40) {
    player.moveDown();
  } else if (e.keyCode === 39) {
    player.moveRight();
  } else if (e.keyCode === 37) {
    player.moveLeft();
  }
});

function checkForCollision(player, obstacles) {
  allObstacles.forEach(function(obstacle){
    if (player.x < obstacle.x + obstacle.width && player.x +
        + player.width > obstacle.x && player.y < obstacle.y +
        obstacle.height && player.height + player.y> obstacle.y) {
        gameOverMessage();
        game.deactivateGame();
    };
  });
};

Game.prototype.deactivateGame = function() {
  this.state = "deactive";
  this.lives -= 1;
}

Game.prototype.activateGame = function() {
  this.state = "active";
}

Game.prototype.restartGame = function() {
  this.activateGame();
  player.x = 225;
  player.y = 430;
}


function gameOverMessage() {
  context.font = "bold 40pt arial";
  context.fillStyle = "#FFFFFF";
  context.fillText("Yuck, vegetables", 20, 140);
};

function makeObstacle() {
  _(15).times(function() {
   var newObstacle = new Obstacle({y: _.sample(yValues), x: _.sample(xValues), width: 15,
                               height: 10, canvas: this.canvas, context: context });
   allObstacles.push(newObstacle);
 });
 return allObstacles;
}

makeObstacle();

module.exports = game;
