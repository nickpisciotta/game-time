var $ = require('jQuery');
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var Game = require("./game.js");
var game = new Game(canvas, context);
$("#game-board").hide();

$(function(){
  $("#start-button").on("click", function(){
    $("#start-menu, #game-board").toggle();
  });
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (game.state === "active") {
    game.initiateElements();
  } else if (game.state === "changeLevel") {
    levelUpMessage();
    game.advanceLevel();
    setTimeout(function() {game.nextGameLevel();}, 1000);
  } else if (game.state === "disabled") {
    $("#game-board").hide();
    $(".game-over").show();
  } else {
    gameOverMessage();
    setTimeout(function() {game.restartGame();}, 1000);
  }
  requestAnimationFrame(gameLoop);
});


$("body").on("click", ".game-button", function() {
  $(".game-over, #game-board").toggle();
  game.restartLevel();
});

document.addEventListener("keydown", function(e) {
  if (e.keyCode === 38) {
    game.player.moveUp();
  } else if (e.keyCode === 40) {
    game.player.moveDown();
  } else if (e.keyCode === 39) {
    game.player.moveRight();
  } else if (e.keyCode === 37) {
    game.player.moveLeft();
  }
});

function gameOverMessage() {
  context.font = "bold 40pt arial";
  context.fillStyle = "#FFFFFF";
  if (game.player.y > 180) {
    context.fillText("Yuck, vegetables", 20, 140);
  } else if (game.player.y < 160 && game.player.y > 10) {
    context.fillText("I hate gym!", 100, 140);
  }

}

function levelUpMessage() {
  context.font = "bold 40pt arial";
  context.fillStyle = "#FFFFFF";
  context.fillText("Levelin' Up!", 20, 140);
}
