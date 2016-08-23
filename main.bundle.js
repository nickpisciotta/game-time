/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Block = __webpack_require__(1);
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

	var firstBlock = new Block({ canvas: canvas, context: context });

	requestAnimationFrame(function gameLoop() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  firstBlock.draw();

	  requestAnimationFrame(gameLoop);
	});

	// Need to change from document to canvas once we figure it out
	document.addEventListener("keydown", function (e) {
	  if (e.keyCode === 38) {
	    firstBlock.moveUp();
	  } else if (e.keyCode === 40) {
	    firstBlock.moveDown();
	  } else if (e.keyCode === 39) {
	    firstBlock.moveRight();
	  } else if (e.keyCode === 37) {
	    firstBlock.moveLeft();
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	function Block(options) {
	  this.options = options || {};
	  this.canvas = this.options.canvas;
	  this.context = this.options.context;
	  this.x = this.options.x || 50;
	  this.y = this.options.y || 290;
	  this.width = this.options.width || 50;
	  this.height = this.options.height || 100;
	}

	Block.prototype.draw = function () {
	  this.context.fillRect(this.x, this.y, this.width, this.height);
	};

	// requestAnimationFrame(function Block.prototype.moveLeft(){
	//   this.context.clearRect(0, 0, canvas.width, canvas.height);
	//   this.context.fillRect(this.x--, this.y, this.width, this.height);
	//   return this;
	//   requestAnimationFrame(Block.prototype.moveLeft())
	// })
	// };
	// Block.prototype.moveLeft = function() {

	Block.prototype.moveRight = function () {
	  this.x++;
	  return this;
	};
	//create a different draw method that clears it. Every time call draw, clear canvas; will only want to happen in the game
	//every time requestAnimationFrame starts, clearing and drawing
	//in requestAnimationFrame, only trigger gamestart and movement
	Block.prototype.moveUp = function () {
	  this.y = this.y - 10;
	  this.context.fillStyle = "pink";
	  return this;
	};

	Block.prototype.moveLeft = function () {
	  this.x--;
	  return this;
	};

	Block.prototype.moveDown = function () {
	  // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  this.y++;
	  return this;
	};

	module.exports = Block;

/***/ }
/******/ ]);