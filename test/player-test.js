var assert = require('chai').assert;
var Player = require("../lib/player.js");

var canvas = {width: 300, height: 300};

describe ("Player", function() {
  it ("should have default x and y values", function () {
    var player = new Player();
    assert.equal(player.x, 225);
    assert.equal(player.y, 430);
  });

  it ("should have a default width and height", function() {
    var player = new Player();
    assert.equal(player.width, 20);
    assert.equal(player.height, 42);
  });

  it ("should change x and y values with params", function(){
    var player = new Player({x: 100, y: 100});
    assert.equal(player.x, 100);
    assert.equal(player.y, 100);
  });

  it ("should change width and height values with params", function(){
    var player = new Player({width: 200, height: 200});
    assert.equal(player.width, 200);
    assert.equal(player.height, 200);
  });

  it ("should change player x value if it moves to the left", function(){
    var player = new Player();
    player.moveLeft();
    assert.equal(player.x, 215);
  });

  it ("should change player x value if it moves to the right", function(){
    var player = new Player({canvas: canvas});
    player.moveRight();
    assert.equal(player.x, 235);
  });

  it ("should change player y value if it moves up", function(){
    var player = new Player();
    player.moveUp();
    assert.equal(player.y, 420);
  });

  it ("should change player y value if it moves down", function(){
    var player = new Player({canvas: canvas, y: 200});
    player.moveDown();
    assert.equal(player.y, 210);
  });

  it ("should not move left if x is 1", function() {
    var player = new Player({x: 1});
    player.moveLeft();
    assert.equal(player.x, 1);
  });

  it ("should not move right of canvas", function() {
    var player = new Player({x: 290, canvas: canvas});
    player.moveRight();
    assert.equal(player.x, 290);
  });

  it ("should not move below canvas", function() {
    var player = new Player({y: 290, canvas: canvas});
    player.moveDown();
    assert.equal(player.y, 290);
  });

  it ("should not move above canvas", function() {
    var player = new Player({y: 1});
    player.moveUp();
    assert.equal(player.y, 1);
  });


});
