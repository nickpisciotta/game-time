var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var Game = require("./game.js");
var game = new Game(canvas, context);

localStorage.setItem("gamelives", JSON.stringify(game.lives));
localStorage.setItem("gamescore", JSON.stringify(game.score));


// kick off the game starting process
// add third state3
requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (game.state === "active") {
    game.partyTime();
  } else {
    gameOverMessage();
    setTimeout(function() {game.restartGame();}, 1000);
  };
  requestAnimationFrame(gameLoop);
});



// Need to change from document to canvas once we figure it out
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
  context.fillText("Yuck, vegetables", 20, 140);
}

// var Game = require("./game.js");


// var game = new Game(canvas, context);

// game.startPlay();

//game.nextTick();

// $("#game-board").hide();
// $(function(){
//   $("#start-button").on("click", function(){
//       $("#start-menu, #game-board").toggle();
//   });
// });
