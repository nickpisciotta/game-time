var assert = require('chai').assert;
var Upperobstacle = require("../lib/upper-obstacle.js");

var canvas = {width: 300, height: 300};
var options = {canvas: canvas, x: 100, y: 100, width: 300, height: 300, context: "context" };

describe ("Upperobstacle", function() {
  it ("should create obstacle given params", function() {
    var obstacle = new Upperobstacle(options);
    assert.equal(obstacle.x, 100);
    assert.equal(obstacle.y, 100);
    assert.equal(obstacle.width, 300);
    assert.equal(obstacle.height, 300);
  });

  it ("should increase x value when moving right", function() {
    var obstacle = new Upperobstacle(options);
    var x = obstacle.x;
    obstacle.movingRight();

    assert.isAbove(obstacle.x, x);
  });

  it ("should decrease x value when moving left", function() {
    var obstacle = new Upperobstacle(options);
    var x = obstacle.x;
    obstacle.movingLeft();

    assert.isBelow(obstacle.x, x);
  });
});
