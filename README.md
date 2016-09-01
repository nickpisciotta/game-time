# Cake Walk

## About

Cake Walk is built using JavaScript, jQuery, and HTML5 canvas. It is tested with Mocha and Chai. The game's protagonist, Billy, is a child who hates vegetables, and the player's goal is to help him dodge the vegetables in the first part of the game canvas. In the second part of the game canvas, Billy avoids a gym equipment to get to his coveted cake. Once you reach the cake, Billy has successfully completed a level.

As a player advances levels, the obstacles and platforms (both vegetables and gym equipment) begin moving faster and increment with each level advance so the game increases in difficulty.

---

## Creators

This game was the creation of [Nick Pisciotta](http://github.com/nickpisciotta) and [Marcella Wigg](http://github.com/marcellawigg) as a pair project.

---
## Technical Challenges
 Ideally the second terrain(gym floor) was supposed to contain platforms that the player could jump on to get to the cake. However, collision detection for these platform objects proved to be more difficult.  When a player collided with a platform the player was supposed to increase its speed and direction to match that of the platform so that the player could traverse just the platforms and not step on the gym floor.  

We then altered this terrain to just contain additional obstacles(gym equipment).

---
## Technical Accomplishments
- Proud of this code because it shortened reduced the requestAnimationFunction to just 4 lines and was cool to use a switch statement in JS.
  - [Nick's Code](https://github.com/nickpisciotta/game-time/blob/master/lib/index.js#L59-L75)

- Proud of this code because it was logically difficult to figure out how to make object speed and and increasing levels flexible, and infinitely increasing.
  - [Marcella's Code](https://github.com/nickpisciotta/game-time/blob/master/lib/game.js#L133-L143)

---

## See It In Action!
![](http://g.recordit.co/hWaFzYHIeb.gif)

---

## Play Live

[Play CakeWalk!](nickpisciotta.github.io/game-time)

---

## Installation Instructions

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/index.html/` to view and play the game.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```

To run tests in Node:

```js
npm test
```
