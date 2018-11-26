/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person_js__ = __webpack_require__(1);
// import './utils.js';
// import {square, add} from './utils.js';

// console.log('app.js is running!!!');
// console.log(square(6));
// console.log(add(6, 8));



const age = 19;

console.log(__WEBPACK_IMPORTED_MODULE_0__person_js__["c" /* isAdult */](age));
console.log(__WEBPACK_IMPORTED_MODULE_0__person_js__["a" /* canDrink */](age));
console.log(__WEBPACK_IMPORTED_MODULE_0__person_js__["b" /* default */](64));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isAdult =  (age) => age >= 18 ? 'Is adult' : 'Is baby';
/* harmony export (immutable) */ __webpack_exports__["c"] = isAdult;
 //age >=18 && 'Is adult' (Alternative syntax)
const canDrink = (age) => age >= 21 ? 'Can drink' : 'Is a faggot';
/* harmony export (immutable) */ __webpack_exports__["a"] = canDrink;

const isSenior = (age) => age >= 65 ? 'Is senior' : 'Es chavo pero se le extiende si llena un formato';

/* harmony default export */ __webpack_exports__["b"] = (isSenior);
// export default (age) => age >= 65 ? 'Is senior' : 'Es chavo pero se le extiende hasta los 67 si llena un formato';

/*Syntax for booleans*/
// export const isAdult =  (age) => age >= 18;
// export const canDrink = (age) => age >= 21; 
// const isSenior(age) => age >= 65;
// export default isSenior;

//export default (age) => age >= 65;

/***/ })
/******/ ]);