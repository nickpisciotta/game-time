var Block = require("./block.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var firstBlock = new Block({canvas: canvas, context: context});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  firstBlock.draw();

  requestAnimationFrame(gameLoop);
});

// Need to change from document to canvas once we figure it out
document.addEventListener("keydown", function(e) {
  if (e.keyCode === 38) {
    firstBlock.moveUp();
  } else if (e.keyCode === 40) {
    firstBlock.moveDown();
  } else if (e.keyCode === 39) {
    firstBlock.moveRight();
  } else if (e.keyCode === 37) {
    firstBlock.moveLeft();
  }
});
