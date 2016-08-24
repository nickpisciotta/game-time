var Block = require("./block.js");
var Obstacle = require("./obstacle.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var _ = require('underscore');

var player = new Block({canvas: canvas, context: context});


context.fillStyle = "red"
document.getElementById("canvas").style.backgroundColor = "blue"

var yValues = [200, 250, 300, 350, 400]
var allObstacles = [];

function makeObstacle() {
  _(20).times(function() {
   newObstacle = new Obstacle({y: _.sample(yValues), width: 30,
                               height: 10, canvas: canvas, context: context })
   allObstacles.push(newObstacle);
 })
 return allObstacles;
}

makeObstacle();

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  allObstacles.forEach(function(obstacle){
    obstacle.movingRight().draw();
  })
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
