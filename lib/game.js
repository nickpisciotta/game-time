var _ = require('underscore');
var $ = require('jQuery');
var Player = require("./player.js");
var Obstacle = require("./obstacle.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
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
var player = new Player({canvas: canvas, context: context});
var game = new Game();

function Game(canvas, context) {
  this.lives = 3;
  this.state = "active";
  this.score = 0;
}

localStorage.setItem("gamelives", JSON.stringify(game.lives));
localStorage.setItem("gamescore", JSON.stringify(game.score));

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
    game.scoreIncrease();
    requestAnimationFrame(gameLoop);
  } else {
    gameOverMessage();
    setTimeout(function() {game.restartGame();}, 1000);
    requestAnimationFrame(gameLoop);
  }
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

function checkForCollision(player) {
  allObstacles.forEach(function(obstacle){
    if (player.x < obstacle.x + obstacle.width && player.x +
        player.width > obstacle.x && player.y < obstacle.y +
        obstacle.height && player.height + player.y> obstacle.y) {
        game.deactivateGame();
    }
  });
}

// collisionChange.js

// collisionFunctions ={
//   collisionChange: collisionChange,
//
// }

//function collisionChange(state, game, localStorage){
  // game.state = state;
  // game.lives -= 1;
  // etc etc
// }

// module.exports = collsionChange;

//var collisionChange = require('collisionChange.js')
Game.prototype.deactivateGame = function() {
  collisionChange('deactive', this, localStorage);
  this.state = "deactive";
  this.lives -= 1;
  player.score = 0;
};

Game.prototype.activateGame = function() {
  this.state = "active";
};

Game.prototype.restartGame = function() {
  this.activateGame();
  player.x = 225;
  player.y = 430;
};

var currentHeight = 430;

Game.prototype.scoreIncrease = function() {
  if (player.y <= currentHeight - 10) {
    this.score += 10;
    currentHeight = this.y
  };
}

function gameOverMessage() {
  context.font = "bold 40pt arial";
  context.fillStyle = "#FFFFFF";
  context.fillText("Yuck, vegetables", 20, 140);
}

function makeObstacle() {
  _(15).times(function() {
   var newObstacle = new Obstacle({y: _.sample(yValues), x: _.sample(xValues), width: 30,
                               height: 20, canvas: this.canvas, context: context });
   allObstacles.push(newObstacle);
 });
 return allObstacles;
}

makeObstacle();

module.exports = game;

//module.exports = Game;
