var assert = require('chai').assert;
var Obstacle = require("../lib/obstacle.js");

var canvas = {width: 300, height: 300};
var options = {canvas: canvas, y: 100, width: 300, height: 300 }

describe ("Obstacle", function() {
  it ("should create obstacle given params", function() {
    var obstacle = new Obstacle(options);

    assert.isNumber(obstacle.x);
    assert.equal(obstacle.y, 100);
    assert.equal(obstacle.width, 300);
    assert.equal(obstacle.height, 300);
  });

  it ("creates an x value between -99 and 0", function() {
    var obstacle = new Obstacle(options);
    assert.isAtMost(obstacle.x,0)
    assert.isAtLeast(obstacle.x,-99)
  })

  it ("should increase x value when moving right", function() {
    var obstacle = new Obstacle(options);
    x = obstacle.x;
    obstacle.movingRight();

    assert.isAbove(obstacle.x, x)
  });
});
