var Block = require("./block.js")
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var firstBlock = new Block({canvas: canvas, context: context});
debugger

firstBlock.draw()
canvas.addEventListener("keydown", function(e) {
  // if (e.keyCode == 38) {
  //   console.log(firstBlock)
  //   firstBlock.moveUp();
  // }
})
