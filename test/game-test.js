var assert = require("chai").assert;
var Game = require("../lib/game.js")

var game = new Game();

describe ("Game", function() {

  before(function() {
    var game = new Game();
   });

  it ("should start with three lives, active, and no score ", function() {
    assert.equal(game.lives, 3);
    assert.equal(game.state, "active");
    assert.equal(game.score, 0);
  });

  it("should decrease lives and change state when game is deactivated", function() {
    assert.equal(game.lives, 3);
    assert.equal(game.state, "active");

    game.deactivateGame();
    game.deactivateGame();

    assert.equal(game.lives, 1);
    assert.equal(game.state, "deactive");
  });

  it("should change state and lives total when game is deactivated", function() {
    game1 = new Game();

    assert.equal(game1.lives, 3);
    assert.equal(game1.state, "active");

    game1.deactivateGame();

    assert.equal(game1.lives, 2);
    assert.equal(game1.state, "deactive");
  });

  it("should change state and player coordinates when game is activated", function(){
    game2 = new Game();

    assert.equal(game2.state, "active");
    game2.deactivateGame();

    game2.activateGame();

    assert.equal(game2.state, "active");
    assert.equal(game2.player.x, 225);
    assert.equal(game2.player.y, 430);
  })
})
