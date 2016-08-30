var _ = require('underscore');
var Player = require("./player.js");
var Game = require("./game.js");
var Obstacle = require("./obstacle.js");
var allObstacles = [];
var xValues = _.range(0, -500, -30);
var yValues = [210, 240, 270, 300, 330, 360, 390];
var leftValues = [240, 300, 360];



//  function drawPieces(game, player) {
//   player.draw();
//   allObstacles.forEach(function(obstacle) {
//     if (_.contains(leftValues, obstacle.y)) {
//       obstacle.movingLeft().draw();
//     } else {
//       obstacle.movingRight().draw();
//     }
//   });
// }

//  function makeObstacle() {
//    _(15).times(function() {
//     var newObstacle = new Obstacle({y: _.sample(yValues), x: _.sample(xValues), width: 30,
//                                 height: 20, canvas: this.canvas, context: context });
//     allObstacles.push(newObstacle);
//   });
//   return allObstacles;
//  }
//
// makeObstacle();

module.exports = allObstacles;
