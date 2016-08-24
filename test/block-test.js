var assert = require('chai').assert;
var Block = require("../lib/block.js");

var canvas = {width: 300, height: 300};

describe ("Block", function() {
  it ("should have default x and y values", function () {
    var block = new Block();
    assert.equal(block.x, 225);
    assert.equal(block.y, 430);
  });

  it ("should have a default width and height", function() {
    var block = new Block();
    assert.equal(block.width, 30);
    assert.equal(block.height, 10);
  });

  it ("should change x and y values with params", function(){
    var block = new Block({x: 100, y: 100});
    assert.equal(block.x, 100);
    assert.equal(block.y, 100);
  });

  it ("should change width and height values with params", function(){
    var block = new Block({width: 200, height: 200});
    assert.equal(block.width, 200);
    assert.equal(block.height, 200);
  });

  it ("should change block x value if it moves to the left", function(){
    var block = new Block();
    block.moveLeft();
    assert.equal(block.x, 215);
  });

  it ("should change block x value if it moves to the right", function(){
    var block = new Block({canvas: canvas});
    block.moveRight();
    assert.equal(block.x, 235);
  });

  it ("should change block y value if it moves up", function(){
    var block = new Block();
    block.moveUp();
    assert.equal(block.y, 420);
  });

  it ("should change block y value if it moves down", function(){
    var block = new Block({canvas: canvas, y: 200});
    block.moveDown();
    assert.equal(block.y, 210);
  });

  it ("should not move left if x is 1", function() {
    var block = new Block({x: 1});
    block.moveLeft();
    assert.equal(block.x, 1);
  });

  it ("should not move right of canvas", function() {
    var block = new Block({x: 290, canvas: canvas});
    block.moveRight();
    assert.equal(block.x, 290);
  });

  it ("should not move below canvas", function() {
    var block = new Block({y: 290, canvas: canvas});
    block.moveDown();
    assert.equal(block.y, 290);
  });

  it ("should not move above canvas", function() {
    var block = new Block({y: 1});
    block.moveUp();
    assert.equal(block.y, 1);
  });


});
