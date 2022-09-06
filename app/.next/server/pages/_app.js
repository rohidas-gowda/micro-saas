/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_async_to_generator.js":
/*!**************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_async_to_generator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({\r\n    value: true\r\n}));\r\nexports[\"default\"] = _asyncToGenerator;\r\nfunction _asyncToGenerator(fn) {\r\n    return function() {\r\n        var self = this, args = arguments;\r\n        return new Promise(function(resolve, reject) {\r\n            var gen = fn.apply(self, args);\r\n            function _next(value) {\r\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\r\n            }\r\n            function _throw(err) {\r\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\r\n            }\r\n            _next(undefined);\r\n        });\r\n    };\r\n}\r\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\r\n    try {\r\n        var info = gen[key](arg);\r\n        var value = info.value;\r\n    } catch (error) {\r\n        reject(error);\r\n        return;\r\n    }\r\n    if (info.done) {\r\n        resolve(value);\r\n    } else {\r\n        Promise.resolve(value).then(_next, _throw);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19hc3luY190b19nZW5lcmF0b3IuanM/MGUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2FzeW5jVG9HZW5lcmF0b3I7XHJcbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcclxuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_async_to_generator.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", ({\r\n    value: true\r\n}));\r\nexports[\"default\"] = _interopRequireDefault;\r\nfunction _interopRequireDefault(obj) {\r\n    return obj && obj.__esModule ? obj : {\r\n        default: obj\r\n    };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyby1zYWFzLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcz82NmVjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./lib/isMobile.ts":
/*!*************************!*\
  !*** ./lib/isMobile.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile)\n/* harmony export */ });\nconst mobileRE = /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;\nfunction isMobile(opts) {\n    if (!opts) {\n        opts = {};\n    }\n    let ua = opts.ua;\n    if (!ua && typeof navigator !== \"undefined\") {\n        ua = navigator.userAgent;\n    }\n    if (!ua && opts.req && opts.req.headers && typeof opts.req.headers[\"user-agent\"] === \"string\") {\n        ua = opts.req.headers[\"user-agent\"];\n    }\n    if (typeof ua !== \"string\") {\n        return false;\n    }\n    return mobileRE.test(ua);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaXNNb2JpbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVEscVVBQXFVO0FBRTVVLFNBQVNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0lBQzdCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO1FBQ1RBLElBQUksR0FBRyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUlDLEVBQUUsR0FBR0QsSUFBSSxDQUFDQyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0EsRUFBRSxJQUFJLE9BQU9DLFNBQVMsS0FBSyxXQUFXLEVBQUU7UUFDM0NELEVBQUUsR0FBR0MsU0FBUyxDQUFDQyxTQUFTLENBQUM7S0FDMUI7SUFDRCxJQUFJLENBQUNGLEVBQUUsSUFBSUQsSUFBSSxDQUFDSSxHQUFHLElBQUlKLElBQUksQ0FBQ0ksR0FBRyxDQUFDQyxPQUFPLElBQUksT0FBT0wsSUFBSSxDQUFDSSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDN0ZKLEVBQUUsR0FBR0QsSUFBSSxDQUFDSSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUNyQztJQUVELElBQUksT0FBT0osRUFBRSxLQUFLLFFBQVEsRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBT0gsUUFBUSxDQUFDUSxJQUFJLENBQUNMLEVBQUUsQ0FBQyxDQUFDO0NBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL2xpYi9pc01vYmlsZS50cz9iNjUyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vYmlsZVJFID0gLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2k7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2JpbGUob3B0cykge1xyXG4gIGlmICghb3B0cykge1xyXG4gICAgb3B0cyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbGV0IHVhID0gb3B0cy51YTtcclxuICBpZiAoIXVhICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgfVxyXG4gIGlmICghdWEgJiYgb3B0cy5yZXEgJiYgb3B0cy5yZXEuaGVhZGVycyAmJiB0eXBlb2Ygb3B0cy5yZXEuaGVhZGVyc1sndXNlci1hZ2VudCddID09PSAnc3RyaW5nJykge1xyXG4gICAgdWEgPSBvcHRzLnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J107XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHVhICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1vYmlsZVJFLnRlc3QodWEpO1xyXG59Il0sIm5hbWVzIjpbIm1vYmlsZVJFIiwiaXNNb2JpbGUiLCJvcHRzIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJyZXEiLCJoZWFkZXJzIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/isMobile.ts\n");

/***/ }),

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themeDark\": () => (/* binding */ themeDark),\n/* harmony export */   \"themeLight\": () => (/* binding */ themeLight)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst themeDark = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#238636\"\n        },\n        secondary: {\n            main: \"#b62324\"\n        },\n        type: \"dark\",\n        background: {\n            default: \"#0d1117\"\n        },\n        text: {\n            primary: \"#c9d1d9\"\n        }\n    },\n    typography: {\n        button: {\n            textTransform: \"none\"\n        }\n    }\n});\nconst themeLight = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#238636\"\n        },\n        secondary: {\n            main: \"#b62324\"\n        },\n        type: \"light\",\n        background: {\n            default: \"#fff\"\n        },\n        text: {\n            primary: \"#222\"\n        }\n    },\n    typography: {\n        button: {\n            textTransform: \"none\"\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUV2RCxNQUFNQyxTQUFTLEdBQUdELHFFQUFXLENBQUM7SUFDNUJFLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUU7WUFBRUMsSUFBSSxFQUFFLFNBQVM7U0FBQztRQUMzQkMsU0FBUyxFQUFFO1lBQUNELElBQUksRUFBRSxTQUFTO1NBQUM7UUFDNUJFLElBQUksRUFBRSxNQUFNO1FBQ1pDLFVBQVUsRUFBRTtZQUFDQyxPQUFPLEVBQUUsU0FBUztTQUFDO1FBQ2hDQyxJQUFJLEVBQUU7WUFDSk4sT0FBTyxFQUFFLFNBQVM7U0FDbkI7S0FDRjtJQUNETyxVQUFVLEVBQUU7UUFDVkMsTUFBTSxFQUFFO1lBQ05DLGFBQWEsRUFBRSxNQUFNO1NBQ3RCO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTUMsVUFBVSxHQUFHYixxRUFBVyxDQUFDO0lBQzdCRSxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFO1lBQUVDLElBQUksRUFBRSxTQUFTO1NBQUM7UUFDM0JDLFNBQVMsRUFBRTtZQUFDRCxJQUFJLEVBQUUsU0FBUztTQUFDO1FBQzVCRSxJQUFJLEVBQUUsT0FBTztRQUNiQyxVQUFVLEVBQUU7WUFBQ0MsT0FBTyxFQUFFLE1BQU07U0FBQztRQUM3QkMsSUFBSSxFQUFFO1lBQ0pOLE9BQU8sRUFBRSxNQUFNO1NBQ2hCO0tBQ0Y7SUFDRE8sVUFBVSxFQUFFO1FBQ1ZDLE1BQU0sRUFBRTtZQUNOQyxhQUFhLEVBQUUsTUFBTTtTQUN0QjtLQUNGO0NBQ0YsQ0FBQztBQUUrQiIsInNvdXJjZXMiOlsid2VicGFjazovL21pY3JvLXNhYXMvLi9saWIvdGhlbWUudHM/MjQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5jb25zdCB0aGVtZURhcmsgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeTogeyBtYWluOiAnIzIzODYzNid9LFxyXG4gICAgc2Vjb25kYXJ5OiB7bWFpbjogJyNiNjIzMjQnfSxcclxuICAgIHR5cGU6ICdkYXJrJyxcclxuICAgIGJhY2tncm91bmQ6IHtkZWZhdWx0OiAnIzBkMTExNyd9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBwcmltYXJ5OiAnI2M5ZDFkOScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCB0aGVtZUxpZ2h0ID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHsgbWFpbjogJyMyMzg2MzYnfSxcclxuICAgIHNlY29uZGFyeToge21haW46ICcjYjYyMzI0J30sXHJcbiAgICB0eXBlOiAnbGlnaHQnLFxyXG4gICAgYmFja2dyb3VuZDoge2RlZmF1bHQ6ICcjZmZmJ30sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6ICcjMjIyJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBidXR0b246IHtcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IHRoZW1lRGFyaywgdGhlbWVMaWdodCB9OyJdLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsInRoZW1lRGFyayIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInR5cGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInRleHQiLCJ0eXBvZ3JhcGh5IiwiYnV0dG9uIiwidGV4dFRyYW5zZm9ybSIsInRoZW1lTGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _async_to_generator = (__webpack_require__(/*! @swc/helpers/lib/_async_to_generator.js */ \"./node_modules/@swc/helpers/lib/_async_to_generator.js\")[\"default\"]);\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\r\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\r\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\r\n */ _async_to_generator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nvar _Component;\nclass App extends (_Component = _react.default.Component) {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNISCxtREFBa0Q7SUFDOUNJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsV0FBVztRQUNaLE9BQU9DLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDO0tBQ2pDO0NBQ0osRUFBQyxDQUFDO0FBQ0hQLHVEQUFzRDtJQUNsREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxXQUFXO1FBQ1osT0FBT0MsTUFBTSxDQUFDRSxtQkFBbUIsQ0FBQztLQUNyQztDQUNKLEVBQUMsQ0FBQztBQUNITixrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlRLG1CQUFtQixHQUFHQyx5SUFBMEQ7QUFDcEYsSUFBSUMsd0JBQXdCLEdBQUdELG1KQUErRDtBQUM5RixJQUFJRSxNQUFNLEdBQUdELHdCQUF3QixDQUFDRCxtQkFBTyxDQUFDLG9CQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFJTCxNQUFNLEdBQUdLLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFDM0MsU0FBU0csa0JBQWtCLENBQUNDLENBQUMsRUFBRTtJQUMzQixPQUFPQyxtQkFBbUIsQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLENBQUM7Q0FDckQ7QUFDRCxTQUFTRixtQkFBbUIsR0FBRztJQUMzQkEsbUJBQW1CLEdBQUc7UUFJbEIsTUFBTUssU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUVmLE1BQU0sQ0FBQyxDQUFDZ0IsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRyxDQUFDO1FBQ3ZFLE9BQU87WUFDSEMsU0FBUztTQUNaLENBQUM7S0FDTCxDQUFDLENBQUM7SUFDSCxPQUFPTDtDQUNWO0FBQ0QsSUFBSU87QUFDSixNQUFNQyxHQUFHLFNBQVMsQ0FBQ0QsVUFBVSxHQUFHVixNQUFNLENBQUNKLE9BQU8sQ0FBQ1U7O1FBRXZDLE1BQU07UUFDTixPQUFPLFdBQVcsR0FBR04sTUFBTSxDQUFDSixPQUFPLENBQUNrQixhQUFhLENBQUNSO0tBQ3JEO0NBQ0o7QUFDREssR0FBRyxDQUFDSyxtQkFBbUIsR0FBR2Ysa0JBQWtCLENBQUM7QUFDN0NVLEdBQUcsQ0FBQ007QUFDSjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcz85NjFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XHJcbiAgICB9XHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcclxuICAgIH1cclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9hc3luY190b19nZW5lcmF0b3IgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzXCIpLmRlZmF1bHQ7XHJcbnZhciBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanNcIikuZGVmYXVsdDtcclxudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XHJcbmZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfKSB7XHJcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcbmZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKSB7XHJcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXHJcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cclxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXHJcbiAqLyBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHlpZWxkICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxudmFyIF9Db21wb25lbnQ7XHJcbmNsYXNzIEFwcCBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQgLCBwYWdlUHJvcHMgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwYWdlUHJvcHMpKTtcclxuICAgIH1cclxufVxyXG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcclxuQXBwLmdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcclxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiTmV4dFdlYlZpdGFsc01ldHJpYyIsImRlZmF1bHQiLCJfYXN5bmNfdG9fZ2VuZXJhdG9yIiwicmVxdWlyZSIsIl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCIsIl9yZWFjdCIsImFwcEdldEluaXRpYWxQcm9wcyIsIl8iLCJfYXBwR2V0SW5pdGlhbFByb3BzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiX0NvbXBvbmVudCIsIkFwcCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lib_isMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/isMobile */ \"./lib/isMobile.ts\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.ts\");\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_3___default()) {\n    static async getInitialProps({ Component , ctx  }) {\n        const pageProps = {\n            isMobile: (0,lib_isMobile__WEBPACK_IMPORTED_MODULE_6__.isMobile)({\n                req: ctx.req\n            }),\n            firstGridItem: true\n        };\n        if (Component.getInitialProps) {\n            Object.assign(pageProps, await Component.getInitialProps(ctx));\n        }\n        return {\n            pageProps\n        };\n    }\n    componentDidMount() {\n        // remove the server-side injected css\n        const jssStyles = document.querySelector(\"#jss-server-side\");\n        if (jssStyles && jssStyles.parentNode) {\n            jssStyles.parentNode.removeChild(jssStyles);\n        }\n    }\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            theme:  false ? 0 : _lib_theme__WEBPACK_IMPORTED_MODULE_7__.themeLight,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1.0\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Rohidas\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://storage.googleapis.com/async-await/nprogress-dark.min.css?v=1\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Rohidas\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Rohidas\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                    fileName: \"E:\\\\Rohidas\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\Rohidas\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\Rohidas\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUNKO0FBQ1E7QUFDL0I7QUFDWTtBQUNEO0FBQ1k7QUFFcEQsTUFBTVEsS0FBSyxTQUFTTixpREFBRztJQUNyQixhQUFvQk8sZUFBZSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsR0FBRyxHQUFFLEVBQUM7UUFDckQsTUFBTUMsU0FBUyxHQUFHO1lBQUVQLFFBQVEsRUFBRUEsc0RBQVEsQ0FBQztnQkFBRVEsR0FBRyxFQUFFRixHQUFHLENBQUNFLEdBQUc7YUFBQyxDQUFDO1lBQUVDLGFBQWEsRUFBRSxJQUFJO1NBQUU7UUFFOUUsSUFBSUosU0FBUyxDQUFDRCxlQUFlLEVBQUM7WUFDNUJNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSixTQUFTLEVBQUUsTUFBTUYsU0FBUyxDQUFDRCxlQUFlLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPO1lBQUVDLFNBQVM7U0FBRTtLQUNyQjtJQUVELGlCQUF3QixHQUFHO1FBQ3pCLHNDQUFzQztRQUN0QyxNQUFNTSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBQzVELElBQUdGLFNBQVMsSUFBSUEsU0FBUyxDQUFDRyxVQUFVLEVBQUM7WUFDbkNILFNBQVMsQ0FBQ0csVUFBVSxDQUFDQyxXQUFXLENBQUNKLFNBQVMsQ0FBQyxDQUFDO1NBQzdDO0tBQ0Y7SUFFRCxNQUFhLEdBQUk7UUFDZixNQUFNLEVBQUNSLFNBQVMsR0FBRUUsU0FBUyxHQUFFLEdBQUcsSUFBSSxDQUFDWSxLQUFLO1FBRTFDLHFCQUNFLDhEQUFDdkIsOERBQWE7WUFBQ3dCLEtBQUssRUFBSyxNQUFLLEdBQUduQixDQUFTLEdBQUdDLGtEQUFVOzs4QkFDckQsOERBQUNKLGtEQUFJOztzQ0FDSCw4REFBQ3VCLE1BQUk7NEJBQUNDLElBQUksRUFBQyxVQUFVOzRCQUFDQyxPQUFPLEVBQUMsdUNBQXVDOzs7OztnQ0FBRztzQ0FDeEUsOERBQUNDLE1BQUk7NEJBQUNDLEdBQUcsRUFBQyxZQUFZOzRCQUFDQyxJQUFJLEVBQUMsdUVBQXVFOzs7OztnQ0FBRzs7Ozs7O3dCQUNqRzs4QkFDUCw4REFBQy9CLHNFQUFXOzs7O3dCQUFHOzhCQUNmLDhEQUFDVSxTQUFTO29CQUFFLEdBQUdFLFNBQVM7Ozs7O3dCQUFJOzs7Ozs7Z0JBQ2QsQ0FDaEI7S0FDSDtDQUNGO0FBRUQsaUVBQWVKLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21pY3JvLXNhYXMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IEFwcCwgeyBBcHBDb250ZXh0LCBBcHBJbml0aWFsUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAnbGliL2lzTW9iaWxlJztcclxuaW1wb3J0ICB7dGhlbWVEYXJrLCB0aGVtZUxpZ2h0fSBmcm9tICcuLi9saWIvdGhlbWUnO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8eyBpc01vYmlsZTogYm9vbGVhbiB9PiB7XHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KXtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHsgaXNNb2JpbGU6IGlzTW9iaWxlKHsgcmVxOiBjdHgucmVxfSksIGZpcnN0R3JpZEl0ZW06IHRydWUgfTtcclxuXHJcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyl7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24ocGFnZVByb3BzLCBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyByZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIGNzc1xyXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgaWYoanNzU3R5bGVzICYmIGpzc1N0eWxlcy5wYXJlbnROb2RlKXtcclxuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lID0geyBmYWxzZSA/IHRoZW1lRGFyayA6IHRoZW1lTGlnaHQgfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wJyAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPSdodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYXN5bmMtYXdhaXQvbnByb2dyZXNzLWRhcmsubWluLmNzcz92PTEnIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJBcHAiLCJIZWFkIiwiUmVhY3QiLCJpc01vYmlsZSIsInRoZW1lRGFyayIsInRoZW1lTGlnaHQiLCJNeUFwcCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsInJlcSIsImZpcnN0R3JpZEl0ZW0iLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wb25lbnREaWRNb3VudCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbmRlciIsInByb3BzIiwidGhlbWUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/styles");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();