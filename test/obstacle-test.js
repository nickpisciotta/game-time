var assert = require('chai').assert;
var Obstacle = require("../lib/obstacle.js");

var canvas = {width: 300, height: 300};
var options = {canvas: canvas, x: 100, y: 100, width: 300, height: 300, context: "context" }

describe ("Obstacle", function() {
  it ("should create obstacle given params", function() {
    var obstacle = new Obstacle(options);
    assert.equal(obstacle.x, 100);
    assert.equal(obstacle.y, 100);
    assert.equal(obstacle.width, 300);
    assert.equal(obstacle.height, 300);
  });

  it ("should increase x value when moving right", function() {
    var obstacle = new Obstacle(options);
    var x = obstacle.x;
    obstacle.movingRight();

    assert.isAbove(obstacle.x, x);
  });
});
//before function in chai document.addElement -- canvas object in document. Still only works in browser, but works in browser.
//have a block class that then player, obstacle, and platform inherit from; where logic of collisions would live.
//Gameloop definition should be short--refactor into smaller functions.
