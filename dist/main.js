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

eval("console.log(\"Webpack is working!\");\n\n// test webpack working, manipulate html element\n// document.querySelectorAll(\"ul.works > li\").forEach( element => {\n//     element.style.color = \"red\";\n// });\n\n// testing The Met API link up\n// const id = \"bcb83c4b54aee8418983c2aff3073b3b\";\n// const city = \"London,UK\";\n\n// GET /public/collection/v1/objects : returns a listing of all valid Object IDs available to use\n// 487401 objects\n// public/collection/v1/objects/437133 : returns a specific object at the object id (ex. 437133, \"Garden at Sainte-Adresse\" by Claude Monet) \n\n// Search by criteria\n// returns an array of object IDs that match criteria\n// could use object ID to get at fields, and then iterate through each object, collect that info from each object\n// fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=1800&dateEnd=1899&q=*`)\n//   .then(response => {\n//     if (response.ok) {\n//       return response.json();\n//     } else {\n//       throw new Error(response);\n//     }\n//   })\n//   .then(\n//     data => {\n//       console.log(\"Success!\");\n//       console.log(data);\n//     },\n//     errorResponse => {\n//       console.log(\"Failure!\");\n//       console.log(errorResponse);\n//     }\n//   );\n\n// function to save data from fetch\nfunction collectData(data) {\n  return data;\n}\n\n// Fetch for time period and isHighlight\nconst dateBegin = \"-240000\";\nconst dateEnd = \"0\";\nlet dataset;\nfetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&dateBegin=${dateBegin}&dateEnd=${dateEnd}&q=*`).then(response => {\n  if (response.ok) {\n    return response.json();\n  } else {\n    throw new Error(response);\n  }\n}).then(data => {\n  console.log(\"Success!\");\n  console.log(data);\n  //   console.log(data[\"objectIDs\"]);\n  dataset = [...data[\"objectIDs\"]];\n  console.log(dataset, \"hi\");\n}, errorResponse => {\n  console.log(\"Failure!\");\n  console.log(errorResponse);\n});\nconsole.log(\"this is dataset\");\nconsole.log(dataset, \"hello\");\n\n// Search option, search by category\n// search by (title, artist, year, material, tag)\n\n// View for each time period:\n// Show % highlights among total number of works \n//  - pie chart for this with % highlights vs. non highlights (show specific numbers in hover description)\n\n// Show top artists (artists with the most works)\n//  - collect all object ids that fall within a certain time period, then iterate through those \n// Show % of regions represented \n// Show makeup of Years of Accession\n// Show top tags \n// - could use the search query to search tags//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiY29sbGVjdERhdGEiLCJkYXRhIiwiZGF0ZUJlZ2luIiwiZGF0ZUVuZCIsImRhdGFzZXQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIkVycm9yIiwiZXJyb3JSZXNwb25zZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiV2VicGFjayBpcyB3b3JraW5nIVwiKVxuXG4vLyB0ZXN0IHdlYnBhY2sgd29ya2luZywgbWFuaXB1bGF0ZSBodG1sIGVsZW1lbnRcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC53b3JrcyA+IGxpXCIpLmZvckVhY2goIGVsZW1lbnQgPT4ge1xuLy8gICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuLy8gfSk7XG5cbi8vIHRlc3RpbmcgVGhlIE1ldCBBUEkgbGluayB1cFxuLy8gY29uc3QgaWQgPSBcImJjYjgzYzRiNTRhZWU4NDE4OTgzYzJhZmYzMDczYjNiXCI7XG4vLyBjb25zdCBjaXR5ID0gXCJMb25kb24sVUtcIjtcblxuLy8gR0VUIC9wdWJsaWMvY29sbGVjdGlvbi92MS9vYmplY3RzIDogcmV0dXJucyBhIGxpc3Rpbmcgb2YgYWxsIHZhbGlkIE9iamVjdCBJRHMgYXZhaWxhYmxlIHRvIHVzZVxuLy8gNDg3NDAxIG9iamVjdHNcbi8vIHB1YmxpYy9jb2xsZWN0aW9uL3YxL29iamVjdHMvNDM3MTMzIDogcmV0dXJucyBhIHNwZWNpZmljIG9iamVjdCBhdCB0aGUgb2JqZWN0IGlkIChleC4gNDM3MTMzLCBcIkdhcmRlbiBhdCBTYWludGUtQWRyZXNzZVwiIGJ5IENsYXVkZSBNb25ldCkgXG5cbi8vIFNlYXJjaCBieSBjcml0ZXJpYVxuLy8gcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3QgSURzIHRoYXQgbWF0Y2ggY3JpdGVyaWFcbi8vIGNvdWxkIHVzZSBvYmplY3QgSUQgdG8gZ2V0IGF0IGZpZWxkcywgYW5kIHRoZW4gaXRlcmF0ZSB0aHJvdWdoIGVhY2ggb2JqZWN0LCBjb2xsZWN0IHRoYXQgaW5mbyBmcm9tIGVhY2ggb2JqZWN0XG4vLyBmZXRjaChgaHR0cHM6Ly9jb2xsZWN0aW9uYXBpLm1ldG11c2V1bS5vcmcvcHVibGljL2NvbGxlY3Rpb24vdjEvc2VhcmNoP2lzSGlnaGxpZ2h0PXRydWUmZGF0ZUJlZ2luPTE4MDAmZGF0ZUVuZD0xODk5JnE9KmApXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICBpZiAocmVzcG9uc2Uub2spIHtcbi8vICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZSk7XG4vLyAgICAgfVxuLy8gICB9KVxuLy8gICAudGhlbihcbi8vICAgICBkYXRhID0+IHtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyFcIik7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICB9LFxuLy8gICAgIGVycm9yUmVzcG9uc2UgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coXCJGYWlsdXJlIVwiKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yUmVzcG9uc2UpO1xuLy8gICAgIH1cbi8vICAgKTtcblxuLy8gZnVuY3Rpb24gdG8gc2F2ZSBkYXRhIGZyb20gZmV0Y2hcbmZ1bmN0aW9uIGNvbGxlY3REYXRhKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YVxufVxuXG4vLyBGZXRjaCBmb3IgdGltZSBwZXJpb2QgYW5kIGlzSGlnaGxpZ2h0XG5jb25zdCBkYXRlQmVnaW49IFwiLTI0MDAwMFwiO1xuY29uc3QgZGF0ZUVuZCA9IFwiMFwiO1xubGV0IGRhdGFzZXQ7XG5cbiAgZmV0Y2goYGh0dHBzOi8vY29sbGVjdGlvbmFwaS5tZXRtdXNldW0ub3JnL3B1YmxpYy9jb2xsZWN0aW9uL3YxL3NlYXJjaD9pc0hpZ2hsaWdodD10cnVlJmRhdGVCZWdpbj0ke2RhdGVCZWdpbn0mZGF0ZUVuZD0ke2RhdGVFbmR9JnE9KmApXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZSk7XG4gICAgfVxuICB9KVxuICAudGhlbihcbiAgICBkYXRhID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyFcIik7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGFbXCJvYmplY3RJRHNcIl0pO1xuICAgICAgZGF0YXNldCA9IFsuLi5kYXRhW1wib2JqZWN0SURzXCJdXTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGFzZXQsIFwiaGlcIik7XG4gICAgfSxcbiAgICBlcnJvclJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbHVyZSFcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvclJlc3BvbnNlKTtcbiAgICB9XG4gICk7XG5cbiAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGRhdGFzZXRcIik7XG4gIGNvbnNvbGUubG9nKGRhdGFzZXQsIFwiaGVsbG9cIik7XG5cbiAgLy8gU2VhcmNoIG9wdGlvbiwgc2VhcmNoIGJ5IGNhdGVnb3J5XG4gIC8vIHNlYXJjaCBieSAodGl0bGUsIGFydGlzdCwgeWVhcizCoG1hdGVyaWFsLCB0YWcpXG5cbiAgLy8gVmlldyBmb3IgZWFjaCB0aW1lIHBlcmlvZDpcbiAgLy8gU2hvdyAlIGhpZ2hsaWdodHMgYW1vbmcgdG90YWwgbnVtYmVyIG9mIHdvcmtzIFxuICAvLyAgLSBwaWUgY2hhcnQgZm9yIHRoaXMgd2l0aCAlIGhpZ2hsaWdodHMgdnMuIG5vbiBoaWdobGlnaHRzIChzaG93IHNwZWNpZmljIG51bWJlcnMgaW4gaG92ZXIgZGVzY3JpcHRpb24pXG5cbiAgLy8gU2hvdyB0b3AgYXJ0aXN0cyAoYXJ0aXN0cyB3aXRoIHRoZSBtb3N0IHdvcmtzKVxuICAvLyAgLSBjb2xsZWN0IGFsbCBvYmplY3QgaWRzIHRoYXQgZmFsbCB3aXRoaW4gYSBjZXJ0YWluIHRpbWUgcGVyaW9kLCB0aGVuIGl0ZXJhdGUgdGhyb3VnaCB0aG9zZSBcbiAgLy8gU2hvdyAlIG9mIHJlZ2lvbnMgcmVwcmVzZW50ZWQgXG4gIC8vIFNob3cgbWFrZXVwIG9mIFllYXJzIG9mIEFjY2Vzc2lvblxuICAvLyBTaG93IHRvcCB0YWdzIFxuICAvLyAtIGNvdWxkIHVzZSB0aGUgc2VhcmNoIHF1ZXJ5IHRvIHNlYXJjaCB0YWdzIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBU0MsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3ZCLE9BQU9BLElBQUk7QUFDZjs7QUFFQTtBQUNBLE1BQU1DLFNBQVMsR0FBRSxTQUFTO0FBQzFCLE1BQU1DLE9BQU8sR0FBRyxHQUFHO0FBQ25CLElBQUlDLE9BQU87QUFFVEMsS0FBSyxDQUFFLDhGQUE2RkgsU0FBVSxZQUFXQyxPQUFRLE1BQUssQ0FBQyxDQUN0SUcsSUFBSSxDQUFDQyxRQUFRLElBQUk7RUFDaEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEVBQUU7SUFDZixPQUFPRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO0VBQ3hCLENBQUMsTUFBTTtJQUNMLE1BQU0sSUFBSUMsS0FBSyxDQUFDSCxRQUFRLENBQUM7RUFDM0I7QUFDRixDQUFDLENBQUMsQ0FDREQsSUFBSSxDQUNITCxJQUFJLElBQUk7RUFDTkgsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3ZCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO0VBQ25CO0VBQ0VHLE9BQU8sR0FBRyxDQUFDLEdBQUdILElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztFQUNoQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU8sRUFBRSxJQUFJLENBQUM7QUFDNUIsQ0FBQyxFQUNETyxhQUFhLElBQUk7RUFDZmIsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3ZCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksYUFBYSxDQUFDO0FBQzVCLENBQ0YsQ0FBQztBQUVEYixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUM5QkQsT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU8sRUFBRSxPQUFPLENBQUM7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImlnbm9yZUxpc3QiOltdfQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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