var assert = require('chai').assert;
var Block = require("../lib/block.js");

describe ("Initializes to default value", function() {
  it ("should have default x and y", function () {
    var block = new Block();
    assert.equal(block.x, 50)
    assert.equal(block.y, 290)
  })

  it ("should have a default width and height", function() {
    var block = new Block();
    assert.equal(block.width, 100);
    assert.equal(block.height, 100);
  })

  it ("should change x and y values with params", function(){
    var block = new Block({x: 100, y: 100});
    assert.equal(block.x, 100)
    assert.equal(block.y, 100)
  })

  it ("should change width and height values with params", function(){
    var block = new Block({width: 200, height: 200});
    assert.equal(block.width, 200)
    assert.equal(block.height, 200)
  })

  it ("should change block x value if it moves to the left", function(){
    var block = new Block();
    block.moveLeft();
    assert.equal(block.x, 49)
  })

  it ("should change block x value if it moves to the right", function(){
    var block = new Block();
    block.moveRight();
    assert.equal(block.x, 51)
  })

  it ("should change block y value if it moves up", function(){
    var block = new Block();
    block.moveUp();
    assert.equal(block.y, 289)
  })

  it ("should change block y value if it moves down", function(){
    var block = new Block({y: 200});
    block.moveDown();
    assert.equal(block.y, 201)
  })

})
