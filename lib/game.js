var _ = require('underscore');
var Player = require("./player.js");
var Obstacle = require("./obstacle.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var allObstacles = [];
var xValues = _.range(0, -500, -30);
var yValues = [200, 250, 300, 350, 400];
var player = new Player({canvas: canvas, context: context});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  allObstacles.forEach(function(obstacle){
    obstacle.movingRight().draw();
  });
  if (checkForCollision(player, allObstacles)) {
    debugger;
  } else {
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
        gameOver();
    };
  });
};

function gameOver() {
  context.font = "bold 50pt arial";
  // context.fillStyle = "#FFFFFF";
  context.fillText("Game Ovnpmer", 60, 130);
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
