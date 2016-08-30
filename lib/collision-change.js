// var gameElements = require("./index.js");
// var game = gameElements.newGame;

function checkForCollision(player, obstacles) {
  obstacles.forEach(function(obstacle){
    if (player.x < obstacle.x + obstacle.width && player.x +
        player.width > obstacle.x && player.y < obstacle.y +
        obstacle.height && player.height + player.y> obstacle.y) {
        game.deactivateGame();
    }
  });
}

module.exports = checkForCollision;
