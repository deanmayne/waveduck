/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/duck.js":
/*!*********************!*\
  !*** ./src/duck.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Duck\n/* harmony export */ });\nconst CONSTANTS = {\n    accuracy: 5,\n    gravity: 4,\n    friction: 0.99,\n    bounce: 0.5,\n    height: 30,\n    width: 40,\n    \n}\n\nclass Duck {\n    constructor(dimensions){\n        this.dimensions = dimensions;\n        this.x = this.dimensions.width * 0.9;\n        this.y = this.dimensions.height * 0.9;\n        this.v = 0\n    }\n\n\n    animate(ctx){\n        this.moveDuck();\n        this.drawDuck(ctx);\n    }\n\n    moveDuck() {\n    this.y += this.v;\n    this.v += CONSTANTS.gravity;\n\n  }\n\n    drawDuck(ctx){\n    ctx.fillStyle = \"yellow\";\n    ctx.fillRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);\n  }\n\n  \n    \n}\n\n//# sourceURL=webpack://waveduck/./src/duck.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wavebox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wavebox.js */ \"./src/wavebox.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"canvas\");\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  new _wavebox_js__WEBPACK_IMPORTED_MODULE_0__.default(canvas, 10, 1);\n\n});\n\n//# sourceURL=webpack://waveduck/./src/index.js?");

/***/ }),

/***/ "./src/point.js":
/*!**********************!*\
  !*** ./src/point.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Point\n/* harmony export */ });\nconst CONSTANTS = {\n    accuracy: 5,\n    gravity: 4,\n    friction: 0.99,\n    bounce: 0.5,\n    height: 1,\n    width: 1,\n    \n}\n\nclass Point {\n  constructor(dimensions) {\n    this.dimensions = dimensions;\n    this.x = this.dimensions.width * 0.9;\n    this.y = this.dimensions.height * 0.9;\n    this.v = 0;\n  }\n\n  animate(ctx) {\n    this.movePoint();\n    this.drawPoint(ctx);\n  }\n\n  movePoint() {\n    this.y += this.v;\n    this.v += CONSTANTS.gravity;\n  }\n\n  drawPoint(ctx) {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(this.x, this.y, CONSTANTS.width, CONSTANTS.height);\n  }\n\n  animate(ctx){\n      this.movePoint();\n      this.drawPoint(ctx);\n  }\n\n\n}\n\n//# sourceURL=webpack://waveduck/./src/point.js?");

/***/ }),

/***/ "./src/wavebox.js":
/*!************************!*\
  !*** ./src/wavebox.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ WaveBox\n/* harmony export */ });\n/* harmony import */ var _duck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duck.js */ \"./src/duck.js\");\n/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.js */ \"./src/point.js\");\n\n\n\nclass WaveBox {\n  constructor(canvas, num_points, num_ducks) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.num_points = num_points;\n    this.num_ducks = num_ducks;\n    this.load();\n  }\n\n\n  load() {\n    this.points = [];\n    for (let i = 0; i < this.num_points; i++) {\n      this.points.push(new _point_js__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions));\n    }\n    this.ducks = [];\n    for (let i = 0; i < this.num_ducks; i++) {\n      this.ducks.push(new _duck_js__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions));\n    }\n\n    this.animate();\n  }\n\n  animate(ctx) {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    this.ducks.forEach((duck) => {\n      duck.animate(ctx);\n    });\n\n    this.points.forEach((point) => {\n      point.animate(ctx);\n    });\n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\n\n//# sourceURL=webpack://waveduck/./src/wavebox.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;