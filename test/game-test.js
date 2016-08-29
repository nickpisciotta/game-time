var assert = require("chai").assert;
var game = require("../lib/game.js")


describe ("Game", function() {
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

  it("should change state and player coordinates when game is restarted", function() {
    assert.equal(game.lives, 3);
    assert.equal(game.state, "active");

    game.deactivateGame();

    assert.equal(game.lives, 2);
    assert.equal(game.state, "active");
    assert.equal(player.x, 225);
    assert.equal(player.y, 430);
  });
})
