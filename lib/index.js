var Player = require("./player.js");
var allObstacles = require("./obstacle.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var player = new Player({canvas: canvas, context: context});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  allObstacles.forEach(function(obstacle){
    obstacle.movingRight().draw();
  });
  requestAnimationFrame(gameLoop);
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
