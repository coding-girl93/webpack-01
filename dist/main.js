/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/esmodule/a.mjs":
/*!****************************!*\
  !*** ./src/esmodule/a.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"b\": () => (/* binding */ b)\n/* harmony export */ });\n/* harmony import */ var _b_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b.mjs */ \"./src/esmodule/b.mjs\");\n\nconst  a =()=>{\n  console.log('a')\n}\nconst  b =()=>{\n  console.log('b')\n}\n;(0,_b_mjs__WEBPACK_IMPORTED_MODULE_0__.c)()\n;(0,_b_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()\n\n;\n\n\n//# sourceURL=webpack://webpack-01/./src/esmodule/a.mjs?");

/***/ }),

/***/ "./src/esmodule/b.mjs":
/*!****************************!*\
  !*** ./src/esmodule/b.mjs ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"d\": () => (/* binding */ d),\n/* harmony export */   \"c\": () => (/* binding */ c)\n/* harmony export */ });\n/* harmony import */ var _a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.mjs */ \"./src/esmodule/a.mjs\");\n\n\nconst c =()=>{\n  console.log('c')\n}\nconst d = ()=>{\n  console.log('d')\n}\n;(0,_a_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()\n;(0,_a_mjs__WEBPACK_IMPORTED_MODULE_0__.b)()\n\n\n//# sourceURL=webpack://webpack-01/./src/esmodule/b.mjs?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _esmodule_a_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esmodule/a.mjs */ \"./src/esmodule/a.mjs\");\nconsole.log('main starting');\n\n\nconsole.log('in main, a.done = %j, b.done = %j', _esmodule_a_mjs__WEBPACK_IMPORTED_MODULE_0__.a.done, _esmodule_a_mjs__WEBPACK_IMPORTED_MODULE_0__.b.done);\n\n//# sourceURL=webpack://webpack-01/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;