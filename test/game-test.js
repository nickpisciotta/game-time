var assert = require("chai").assert;
var Game = require("../lib/game.js")
var Obstacle = require("../lib/obstacle.js")

var game = new Game();

describe ("Game", function() {

  before(function() {
    var game = new Game();
   });

  it ("should start with three lives, active, and no score ", function() {
    assert.equal(game.lives, 3);
    assert.equal(game.state, "active");
    assert.equal(game.score, 0);
    assert.equal(Array.isArray(game.obstacles), true)
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

  it ("should reset lives and level when level ends", function() {
    game3 = new Game();
    game3.level = 2;
    game3.lives = 0;
    game3.restartLevel();

    assert.equal(game3.level, 1);
    assert.equal(game3.lives, 3);
  });

  it ("should change game state if player has a y value of 10", function() {
    game4 = new Game();
    game4.player.y = 10;

    game4.checkLevel();

    assert.equal(game4.state, "changeLevel")
  });

  it ("should do increase to level 2 if the score is >= 400", function() {
    game5 = new Game();
    game5.player.score = 400;

    game5.advanceLevel();

    assert.equal(game5.level, 2)
  });

  it ("should decrease life by 1 if colision between player and object", function() {
    game6 = new Game();
    player = game6.player
    player.x = 20;
    player.y = 40;
    obstacle = new Obstacle();
    obstacle.x = 25;
    obstacle.y = 45;
    obstacle.width = 10;
    obstacle.height = 10
    game6.obstacles = [obstacle]

    game6.checkForCollision(player);

    assert.equal(game6.lives, 2)
    assert.equal(game6.state, "deactive")
  });

  it ("should not decrease life by 1 if there is no colision between player and object", function() {
    game7 = new Game();
    player = game7.player
    player.x = 20;
    player.y = 40;
    obstacle = new Obstacle();
    obstacle.x = 200;
    obstacle.y = 400;
    obstacle.width = 10;
    obstacle.height = 10
    game7.obstacles = [obstacle]

    game7.checkForCollision(player);

    assert.equal(game7.lives, 3)
    assert.equal(game7.state, "active")
  });
})
