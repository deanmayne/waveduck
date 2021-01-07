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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Duck\n/* harmony export */ });\nconst CONSTANTS = {\n  gravity: 0.1,\n  friction: 0.99,\n};\n\nclass Duck {\n  constructor(dimensions, theme) {\n    this.dimensions = dimensions;\n    this.x = Math.random() * this.dimensions.width - 50;\n    this.y = 0.25 * this.dimensions.height;\n    this.velocity = { x: 0, y: 0 };\n    this.height = 60;\n    this.width = 75;\n    this.radius = this.width;\n    this.theme = theme;\n  }\n\n  animate(ctx) {\n    this.move();\n    this.draw(ctx);\n  }\n\n  move() {\n    this.velocity.y += CONSTANTS.gravity;\n    this.velocity.x *= CONSTANTS.friction;\n    this.velocity.y *= CONSTANTS.friction;\n\n    if (this.velocity.x >= 3) {\n      this.velocity.x = 3;\n    } else if (this.velocity.x <= -3) {\n      this.velocity.x = -3;\n    }\n\n    if (this.velocity.y >= 3) {\n      this.velocity.y = 3;\n    } else if (this.velocity.y <= -3) {\n      this.velocity.y = -3;\n    }\n\n    this.y += this.velocity.y;\n    this.x += this.velocity.x;\n\n    if (this.y > this.dimensions.height - this.height) {\n      this.y = this.dimensions.height - this.height;\n      this.velocity.y = -Math.abs(this.velocity.y);\n    }\n    if (this.y < this.height) {\n      this.y = this.height;\n      this.velocity.y = Math.abs(this.velocity.y);\n    }\n    if (this.x > this.dimensions.width - this.width) {\n      this.x = this.dimensions.width - this.width;\n      this.velocity.x = -Math.abs(this.velocity.x);\n    }\n    if (this.x < this.width) {\n      this.x = this.width;\n      this.velocity.x = Math.abs(this.velocity.x);\n    }\n  }\n\n  draw(ctx) {\n    const duck = new Image();\n    switch (this.theme) {\n      case \"french\":\n        duck.src = \"./src/svg/FrenchRubberDucky.svg\";\n        break;\n      case \"devil\":\n        duck.src = \"./src/svg/DevilRubberDucky.svg\";\n        break;\n      default:\n        duck.src = \"./src/svg/RubberDucky.svg\";\n        break;\n    }\n\n    ctx.drawImage(duck, this.x, this.y, this.width, this.height);\n  }\n\n\n}\n\n\n//# sourceURL=webpack:///./src/duck.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wavebox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wavebox.js */ \"./src/wavebox.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"canvas\");\n  new _wavebox_js__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Point\n/* harmony export */ });\nconst CONSTANTS = {\n  gravity: 0.1,\n  friction: 0.99,\n};\n\nclass Point {\n  constructor(dimensions, theme, color) {\n    this.dimensions = dimensions;\n    this.x = Math.random() * this.dimensions.width - 10;\n    this.y = (Math.random() * 0.6 + 0.4) * this.dimensions.height;\n    this.velocity = { x: 0, y: 0 };\n    this.radius = Math.max(Math.random() * 10, 5);\n    this.theme = theme;\n    this.color = color;\n  }\n\n  animate(ctx) {\n    this.move();\n    this.draw(ctx);\n  }\n\n  move() {\n    this.velocity.y += CONSTANTS.gravity;\n    this.velocity.x *= CONSTANTS.friction;\n    this.velocity.y *= CONSTANTS.friction;\n\n    if (this.velocity.x >= 3) {\n      this.velocity.x = 3;\n    } else if (this.velocity.x <= -3) {\n      this.velocity.x = -3;\n    }\n\n    if (this.velocity.y >= 3) {\n      this.velocity.y = 3;\n    } else if (this.velocity.y <= -3) {\n      this.velocity.y = -3;\n    }\n\n    this.x += this.velocity.x;\n    this.y += this.velocity.y;\n\n    if (this.y > this.dimensions.height - this.radius) {\n      this.y = this.dimensions.height - this.radius;\n      this.velocity.y = -Math.abs(this.velocity.y);\n    }\n    if (this.y < this.radius) {\n      this.y = this.radius;\n      this.velocity.y = Math.abs(this.velocity.y);\n    }\n    if (this.x > this.dimensions.width - this.radius) {\n      this.x = this.dimensions.width - this.radius;\n      this.velocity.x = -Math.abs(this.velocity.x);\n    }\n    if (this.x < this.radius) {\n      this.x = this.radius;\n      this.velocity.x = Math.abs(this.velocity.x);\n    }\n  }\n\n  draw(ctx) {\n    let color = \"\";\n    switch (this.theme) {\n      case \"french\":\n        color = this.color;\n        break;\n      case \"devil\":\n        color = this.color;\n        break;\n      case \"unicorn\":\n        color = this.color;\n        break;\n      default:\n        color = \"blue\";\n        break;\n    }\n\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n    ctx.stroke();\n    ctx.fillStyle = color;\n    ctx.fill();\n  }\n\n\n}\n\n\n//# sourceURL=webpack:///./src/point.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ WaveBox\n/* harmony export */ });\n/* harmony import */ var _duck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duck.js */ \"./src/duck.js\");\n/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.js */ \"./src/point.js\");\n\n\n\nlet mouse = {\n  x: 0,\n  y: 0,\n  down: false,\n};\n\nlet theme = document.getElementById(\"theme\").value;\nlet num_ducks = document.getElementById(\"duckSlider\").value;\nlet num_points = document.getElementById(\"liquidSlider\").value;\n\nclass WaveBox {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = { width: canvas.width, height: canvas.height };\n    this.load();\n  }\n\n  load() {\n    this.points = [];\n    for (let i = 0; i < num_points; i++) {\n      let color = \"\";\n      switch (theme) {\n        case \"french\":\n          color = [\"blue\", \"white\", \"red\"][Math.floor(Math.random() * 3)];\n          break;\n        case \"devil\":\n          color = \"red\";\n          break;\n        case \"unicorn\":\n          color = \"pink\";\n          break;\n        default:\n          color = \"blue\";\n          break;\n      }\n      this.points.push(new _point_js__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions, theme, color));\n      this.points[i].draw(this.ctx);\n    }\n    this.ducks = [];\n    for (let i = 0; i < num_ducks; i++) {\n      this.ducks.push(new _duck_js__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, theme));\n      this.ducks[i].draw(this.ctx);\n    }\n\n    this.animate();\n  }\n\n  animate() {\n    this.ctx.clearRect(0, 0, canvas.width, canvas.height);\n    if (\n      this.ducks[0].theme !== theme ||\n      this.ducks.length != num_ducks ||\n      this.points.length != num_points\n    ) {\n      this.load();\n      return\n    }\n\n    let allObjects = [...this.ducks, ...this.points];\n    for (let i = 0; i < allObjects.length; i++) {\n      let object = allObjects[i];\n\n      object.animate(this.ctx);\n\n      for (let j = 0; j < allObjects.length; j++) {\n        if (i === j) {\n          continue;\n        }\n        let object2 = allObjects[j];\n        let dx = object2.x - object.x;\n        let dy = object2.y - object.y;\n        let d = Math.sqrt(dx * dx + dy * dy);\n\n        if (d < object.radius - 3) {\n          if (d === 0) {\n            d = 0.1;\n          }\n          let unitX = dx / d;\n          let unitY = dy / d;\n\n          let force = -0.1;\n\n          let forceX = unitX * force * 0.3;\n          let forceY = unitY * force * 0.3;\n          object.velocity.x += forceX;\n          object.velocity.y += forceY;\n\n          object2.velocity.x -= forceX;\n          object2.velocity.y -= forceY;\n        }\n        j++;\n      }\n    }\n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\n// canvas.addEventListener(\"mousemove\", function (e) {\n//   mouse.x = e.x;\n//   mouse.y = e.y;\n// });\n\n// canvas.addEventListener(\"mousedown\", function (e) {\n//   mouse.down = true;\n//   mouse.x = e.x;\n//   mouse.y = e.y;\n\n//   for (i = 0; i < allObjects.length; i++) {\n//     let allObjects = allObjects[i];\n//     let dx = mouse.x - allObjects.x;\n//     let dy = mouse.y - allObjects.y;\n//     let d = Math.sqrt(dx * dx + dy * dy);\n\n//     if (d < radius) {\n//       allObjectsUnderMouse = allObjects;\n//       break; // break (stop) the for loop\n//     }\n//   }\n// });\n\n// canvas.addEventListener(\"mouseup\", function (e) {\n//   mouse.down = false;\n// });\n\nlet dropdown = document.getElementById(\"theme\");\ndropdown.addEventListener(\"change\", function () {\n  theme = dropdown.value;\n});\n\nlet duckSlider = document.getElementById(\"duckSlider\");\nduckSlider.addEventListener(\"change\", function () {\n  num_ducks = duckSlider.value;\n});\n\nlet liquidSlider = document.getElementById(\"liquidSlider\");\nliquidSlider.addEventListener(\"change\", function () {\n  num_points = liquidSlider.value;\n});\n\n\n//# sourceURL=webpack:///./src/wavebox.js?");

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