var Block = require("./block.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var firstBlock = new Block({canvas: canvas, context: context});
firstBlock.draw();

document.addEventListener("keydown", function(e) {
  if (e.keyCode === 38) {
    firstBlock.moveUp().draw();
  } else if (e.keyCode === 40) {
    firstBlock.moveDown().draw();
  } else if (e.keyCode === 39) {
    firstBlock.moveRight().draw();
  } else if (e.keyCode === 37) {
    firstBlock.moveLeft().draw();
  }
});
