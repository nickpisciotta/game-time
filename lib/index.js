var Game = require("./game.js");
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var game = new Game(canvas, context);
var player = new Player({canvas: canvas, context: context});
var gameElements = {newGame: game, newPlayer: player}

game.startPlay();


//game.nextTick();

// $("#game-board").hide();
// $(function(){
//   $("#start-button").on("click", function(){
//       $("#start-menu, #game-board").toggle();
//   });
// });


// module.exports = gameElements;
