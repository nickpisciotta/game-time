var Block = require("./block.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var player = new Block({canvas: canvas, context: context});
var collisionBlock1 = new Block({canvas: canvas, context: context, x:-20, y:100});
var collisionBlock2 = new Block({canvas: canvas, context: context, x:0, y:100});
var collisionBlock3 = new Block({canvas: canvas, context: context, x: 0, y: 150})
var collisionBlock4 = new Block({canvas: canvas, context: context, x: 0, y: 150})
var collisionBlock5 = new Block({canvas: canvas, context: context, x: 0, y: 200})
var collisionBlock6 = new Block({canvas: canvas, context: context, x: 0, y: 200})
var collisionBlock7 = new Block({canvas: canvas, context: context, x: 0, y: 250})
var collisionBlock8 = new Block({canvas: canvas, context: context, x: 0, y: 250})
var collisionBlock9 = new Block({canvas: canvas, context: context, x: 0, y: 0})
var collisionBlock10 = new Block({canvas: canvas, context: context, x: 0, y: 250})
 var row = [row1, row2]
var row1 = [collisionBlock1, collisionBlock2]
var row2 = [collisionBlock3, collisionBlock4]
var row3 = [collisionBlock5, collisionBlock6]
var row4 = [collisionBlock7, collisionBlock8]
var row5 = [collisionBlock9, collisionBlock10]

context.fillStyle = "red"
document.getElementById("canvas").style.backgroundColor = "blue"

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  row1.forEach(function(block){
    block.movingRight().draw()
  })
  row2.forEach(function(block) {
    block.movingRight().draw()
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
