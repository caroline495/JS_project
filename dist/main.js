/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("console.log(\"Webpack is working!\");\n\n// test webpack working, manipulate html element\n// document.querySelectorAll(\"ul.works > li\").forEach( element => {\n//     element.style.color = \"red\";\n// });\n\n// testing The Met API link up\n// const id = \"bcb83c4b54aee8418983c2aff3073b3b\";\n// const city = \"London,UK\";\n\n// GET /public/collection/v1/objects : returns a listing of all valid Object IDs available to use\n// 487401 objects\n// public/collection/v1/objects/437133 : returns a specific object at the object id (ex. 437133, \"Garden at Sainte-Adresse\" by Claude Monet) \n\n// \nfetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=sunflowers`).then(response => {\n  if (response.ok) {\n    return response.json();\n  } else {\n    throw new Error(response);\n  }\n}).then(data => {\n  console.log(\"Success!\");\n  console.log(data);\n}, errorResponse => {\n  console.log(\"Failure!\");\n  console.log(errorResponse);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJFcnJvciIsImRhdGEiLCJlcnJvclJlc3BvbnNlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJXZWJwYWNrIGlzIHdvcmtpbmchXCIpXG5cbi8vIHRlc3Qgd2VicGFjayB3b3JraW5nLCBtYW5pcHVsYXRlIGh0bWwgZWxlbWVudFxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVsLndvcmtzID4gbGlcIikuZm9yRWFjaCggZWxlbWVudCA9PiB7XG4vLyAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4vLyB9KTtcblxuLy8gdGVzdGluZyBUaGUgTWV0IEFQSSBsaW5rIHVwXG4vLyBjb25zdCBpZCA9IFwiYmNiODNjNGI1NGFlZTg0MTg5ODNjMmFmZjMwNzNiM2JcIjtcbi8vIGNvbnN0IGNpdHkgPSBcIkxvbmRvbixVS1wiO1xuXG4vLyBHRVQgL3B1YmxpYy9jb2xsZWN0aW9uL3YxL29iamVjdHMgOiByZXR1cm5zIGEgbGlzdGluZyBvZiBhbGwgdmFsaWQgT2JqZWN0IElEcyBhdmFpbGFibGUgdG8gdXNlXG4vLyA0ODc0MDEgb2JqZWN0c1xuLy8gcHVibGljL2NvbGxlY3Rpb24vdjEvb2JqZWN0cy80MzcxMzMgOiByZXR1cm5zIGEgc3BlY2lmaWMgb2JqZWN0IGF0IHRoZSBvYmplY3QgaWQgKGV4LiA0MzcxMzMsIFwiR2FyZGVuIGF0IFNhaW50ZS1BZHJlc3NlXCIgYnkgQ2xhdWRlIE1vbmV0KSBcblxuLy8gXG5mZXRjaChgaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvc2VhcmNoP2lzSGlnaGxpZ2h0PXRydWUmcT1zdW5mbG93ZXJzYClcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlKTtcbiAgICB9XG4gIH0pXG4gIC50aGVuKFxuICAgIGRhdGEgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0sXG4gICAgZXJyb3JSZXNwb25zZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWx1cmUhXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSk7XG4gICAgfVxuICApO1xuIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQUMsS0FBSyxDQUFFLCtGQUE4RixDQUFDLENBQ25HQyxJQUFJLENBQUNDLFFBQVEsSUFBSTtFQUNoQixJQUFJQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtJQUNmLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7RUFDeEIsQ0FBQyxNQUFNO0lBQ0wsTUFBTSxJQUFJQyxLQUFLLENBQUNILFFBQVEsQ0FBQztFQUMzQjtBQUNGLENBQUMsQ0FBQyxDQUNERCxJQUFJLENBQ0hLLElBQUksSUFBSTtFQUNOUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDdkJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxJQUFJLENBQUM7QUFDbkIsQ0FBQyxFQUNEQyxhQUFhLElBQUk7RUFDZlQsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3ZCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsYUFBYSxDQUFDO0FBQzVCLENBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;