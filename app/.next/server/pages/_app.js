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
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _asyncToGenerator;\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9fYXN5bmNfdG9fZ2VuZXJhdG9yLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19hc3luY190b19nZW5lcmF0b3IuanM/MGUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3luY1RvR2VuZXJhdG9yO1xuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_async_to_generator.js\n");

/***/ }),

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyby1zYWFzLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsdUdBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcz82NmVjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./lib/isMobile.ts":
/*!*************************!*\
  !*** ./lib/isMobile.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMobile\": () => (/* binding */ isMobile)\n/* harmony export */ });\nconst mobileRE = /(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;\nfunction isMobile(opts) {\n    if (!opts) {\n        opts = {};\n    }\n    let ua = opts.ua;\n    if (!ua && typeof navigator !== \"undefined\") {\n        ua = navigator.userAgent;\n    }\n    if (!ua && opts.req && opts.req.headers && typeof opts.req.headers[\"user-agent\"] === \"string\") {\n        ua = opts.req.headers[\"user-agent\"];\n        console.log(ua);\n    }\n    if (typeof ua !== \"string\") {\n        return false;\n    }\n    return mobileRE.test(ua);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaXNNb2JpbGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVEscVVBQXFVO0FBRTVVLFNBQVNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0lBQzdCLElBQUksQ0FBQ0EsSUFBSSxFQUFFO1FBQ1RBLElBQUksR0FBRyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUlDLEVBQUUsR0FBR0QsSUFBSSxDQUFDQyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0EsRUFBRSxJQUFJLE9BQU9DLFNBQVMsS0FBSyxXQUFXLEVBQUU7UUFDM0NELEVBQUUsR0FBR0MsU0FBUyxDQUFDQyxTQUFTLENBQUM7S0FDMUI7SUFDRCxJQUFJLENBQUNGLEVBQUUsSUFBSUQsSUFBSSxDQUFDSSxHQUFHLElBQUlKLElBQUksQ0FBQ0ksR0FBRyxDQUFDQyxPQUFPLElBQUksT0FBT0wsSUFBSSxDQUFDSSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDN0ZKLEVBQUUsR0FBR0QsSUFBSSxDQUFDSSxHQUFHLENBQUNDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsSUFBSSxPQUFPQSxFQUFFLEtBQUssUUFBUSxFQUFFO1FBQzFCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPSCxRQUFRLENBQUNVLElBQUksQ0FBQ1AsRUFBRSxDQUFDLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyby1zYWFzLy4vbGliL2lzTW9iaWxlLnRzP2I2NTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9iaWxlUkUgPSAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01vYmlsZShvcHRzKSB7XHJcbiAgaWYgKCFvcHRzKSB7XHJcbiAgICBvcHRzID0ge307XHJcbiAgfVxyXG5cclxuICBsZXQgdWEgPSBvcHRzLnVhO1xyXG4gIGlmICghdWEgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICB9XHJcbiAgaWYgKCF1YSAmJiBvcHRzLnJlcSAmJiBvcHRzLnJlcS5oZWFkZXJzICYmIHR5cGVvZiBvcHRzLnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICB1YSA9IG9wdHMucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXTtcclxuICAgIGNvbnNvbGUubG9nKHVhKTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdWEgIT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbW9iaWxlUkUudGVzdCh1YSk7XHJcbn0iXSwibmFtZXMiOlsibW9iaWxlUkUiLCJpc01vYmlsZSIsIm9wdHMiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInJlcSIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/isMobile.ts\n");

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
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"AppInitialProps\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.AppInitialProps;\n    }\n}));\nObject.defineProperty(exports, \"NextWebVitalsMetric\", ({\n    enumerable: true,\n    get: function() {\n        return _utils.NextWebVitalsMetric;\n    }\n}));\nexports[\"default\"] = void 0;\nvar _async_to_generator = (__webpack_require__(/*! @swc/helpers/lib/_async_to_generator.js */ \"./node_modules/@swc/helpers/lib/_async_to_generator.js\")[\"default\"]);\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _utils = __webpack_require__(/*! ../shared/lib/utils */ \"../shared/lib/utils\");\nfunction appGetInitialProps(_) {\n    return _appGetInitialProps.apply(this, arguments);\n}\nfunction _appGetInitialProps() {\n    _appGetInitialProps = /**\n * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n * This allows for keeping state between navigation, custom error handling, injecting additional data.\n */ _async_to_generator(function*({ Component , ctx  }) {\n        const pageProps = yield (0, _utils).loadGetInitialProps(Component, ctx);\n        return {\n            pageProps\n        };\n    });\n    return _appGetInitialProps.apply(this, arguments);\n}\nvar _Component;\nclass App extends (_Component = _react.default.Component) {\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ _react.default.createElement(Component, Object.assign({}, pageProps));\n    }\n}\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;\nexports[\"default\"] = App; //# sourceMappingURL=_app.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxLQUFLLEVBQUUsSUFBSTtDQUNkLEVBQUMsQ0FBQztBQUNISCxtREFBa0Q7SUFDOUNJLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxHQUFHLEVBQUUsV0FBVztRQUNaLE9BQU9DLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDO0tBQ2pDO0NBQ0osRUFBQyxDQUFDO0FBQ0hQLHVEQUFzRDtJQUNsREksVUFBVSxFQUFFLElBQUk7SUFDaEJDLEdBQUcsRUFBRSxXQUFXO1FBQ1osT0FBT0MsTUFBTSxDQUFDRSxtQkFBbUIsQ0FBQztLQUNyQztDQUNKLEVBQUMsQ0FBQztBQUNITixrQkFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLElBQUlRLG1CQUFtQixHQUFHQyx5SUFBMEQ7QUFDcEYsSUFBSUMsd0JBQXdCLEdBQUdELG1KQUErRDtBQUM5RixJQUFJRSxNQUFNLEdBQUdELHdCQUF3QixDQUFDRCxtQkFBTyxDQUFDLG9CQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFJTCxNQUFNLEdBQUdLLG1CQUFPLENBQUMsZ0RBQXFCLENBQUM7QUFDM0MsU0FBU0csa0JBQWtCLENBQUNDLENBQUMsRUFBRTtJQUMzQixPQUFPQyxtQkFBbUIsQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLENBQUM7Q0FDckQ7QUFDRCxTQUFTRixtQkFBbUIsR0FBRztJQUMzQkEsbUJBQW1CLEdBQUc7OztDQUd6QixHQUFHTixtQkFBbUIsQ0FBQyxVQUFVLEVBQUVTLFNBQVMsR0FBR0MsR0FBRyxHQUFHLEVBQUU7UUFDaEQsTUFBTUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUVmLE1BQU0sQ0FBQyxDQUFDZ0IsbUJBQW1CLENBQUNILFNBQVMsRUFBRUMsR0FBRyxDQUFDO1FBQ3ZFLE9BQU87WUFDSEMsU0FBUztTQUNaLENBQUM7S0FDTCxDQUFDLENBQUM7SUFDSCxPQUFPTCxtQkFBbUIsQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDLENBQUM7Q0FDckQ7QUFDRCxJQUFJSyxVQUFVO0FBQ2QsTUFBTUMsR0FBRyxTQUFTLENBQUNELFVBQVUsR0FBR1YsTUFBTSxDQUFDSixPQUFPLENBQUNVLFNBQVMsQ0FBQztJQUNyRE0sTUFBTSxHQUFHO1FBQ0wsTUFBTSxFQUFFTixTQUFTLEdBQUdFLFNBQVMsR0FBRyxHQUFHLElBQUksQ0FBQ0ssS0FBSztRQUM3QyxPQUFPLFdBQVcsR0FBR2IsTUFBTSxDQUFDSixPQUFPLENBQUNrQixhQUFhLENBQUNSLFNBQVMsRUFBRW5CLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQyxFQUFFLEVBQUVQLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDOUY7Q0FDSjtBQUNERyxHQUFHLENBQUNLLG1CQUFtQixHQUFHZixrQkFBa0IsQ0FBQztBQUM3Q1UsR0FBRyxDQUFDTSxlQUFlLEdBQUdoQixrQkFBa0IsQ0FBQztBQUN6Q1osa0JBQWUsR0FBR3NCLEdBQUcsQ0FBQyxDQUV0QixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taWNyby1zYWFzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzPzk2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBcHBJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5BcHBJbml0aWFsUHJvcHM7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZXh0V2ViVml0YWxzTWV0cmljXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYztcbiAgICB9XG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfYXN5bmNfdG9fZ2VuZXJhdG9yID0gcmVxdWlyZShcIkBzd2MvaGVscGVycy9saWIvX2FzeW5jX3RvX2dlbmVyYXRvci5qc1wiKS5kZWZhdWx0O1xudmFyIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qc1wiKS5kZWZhdWx0O1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3V0aWxzXCIpO1xuZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF8pIHtcbiAgICByZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuZnVuY3Rpb24gX2FwcEdldEluaXRpYWxQcm9wcygpIHtcbiAgICBfYXBwR2V0SW5pdGlhbFByb3BzID0gLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqLyBfYXN5bmNfdG9fZ2VuZXJhdG9yKGZ1bmN0aW9uKih7IENvbXBvbmVudCAsIGN0eCAgfSkge1xuICAgICAgICBjb25zdCBwYWdlUHJvcHMgPSB5aWVsZCAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhZ2VQcm9wc1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG52YXIgX0NvbXBvbmVudDtcbmNsYXNzIEFwcCBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCAsIHBhZ2VQcm9wcyAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCBwYWdlUHJvcHMpKTtcbiAgICB9XG59XG5BcHAub3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wcztcbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJkZWZhdWx0IiwiX2FzeW5jX3RvX2dlbmVyYXRvciIsInJlcXVpcmUiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJfcmVhY3QiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfIiwiX2FwcEdldEluaXRpYWxQcm9wcyIsImFwcGx5IiwiYXJndW1lbnRzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIl9Db21wb25lbnQiLCJBcHAiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJhc3NpZ24iLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lib_isMobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/isMobile */ \"./lib/isMobile.ts\");\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.ts\");\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_3___default()) {\n    static async getInitialProps({ Component , ctx  }) {\n        const pageProps = {\n            isMobile: (0,lib_isMobile__WEBPACK_IMPORTED_MODULE_6__.isMobile)({\n                req: ctx.req\n            }),\n            firstGridItem: true\n        };\n        if (Component.getInitialProps) {\n            Object.assign(pageProps, await Component.getInitialProps(ctx));\n        }\n        console.log(pageProps);\n        return {\n            pageProps\n        };\n    }\n    componentDidMount() {\n        // remove the server-side injected css\n        const jssStyles = document.querySelector(\"#jss-server-side\");\n        if (jssStyles && jssStyles.parentNode) {\n            jssStyles.parentNode.removeChild(jssStyles);\n        }\n    }\n    render() {\n        const { Component , pageProps  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n            theme:  false ? 0 : _lib_theme__WEBPACK_IMPORTED_MODULE_7__.themeLight,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1.0\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"https://storage.googleapis.com/async-await/nprogress-dark.min.css?v=1\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                    fileName: \"E:\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"E:\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\micro-saas\\\\app\\\\pages\\\\_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUNKO0FBQ1E7QUFDL0I7QUFDWTtBQUNEO0FBQ1k7QUFFcEQsTUFBTVEsS0FBSyxTQUFTTixpREFBRztJQUNyQixhQUFvQk8sZUFBZSxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsR0FBRyxHQUFFLEVBQUM7UUFDckQsTUFBTUMsU0FBUyxHQUFHO1lBQUVQLFFBQVEsRUFBRUEsc0RBQVEsQ0FBQztnQkFBRVEsR0FBRyxFQUFFRixHQUFHLENBQUNFLEdBQUc7YUFBQyxDQUFDO1lBQUVDLGFBQWEsRUFBRSxJQUFJO1NBQUU7UUFFOUUsSUFBSUosU0FBUyxDQUFDRCxlQUFlLEVBQUM7WUFDNUJNLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSixTQUFTLEVBQUUsTUFBTUYsU0FBUyxDQUFDRCxlQUFlLENBQUNFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRE0sT0FBTyxDQUFDQyxHQUFHLENBQUNOLFNBQVMsQ0FBQyxDQUFDO1FBRXZCLE9BQU87WUFBRUEsU0FBUztTQUFFO0tBQ3JCO0lBRUQsaUJBQXdCLEdBQUc7UUFDekIsc0NBQXNDO1FBQ3RDLE1BQU1RLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDNUQsSUFBR0YsU0FBUyxJQUFJQSxTQUFTLENBQUNHLFVBQVUsRUFBQztZQUNuQ0gsU0FBUyxDQUFDRyxVQUFVLENBQUNDLFdBQVcsQ0FBQ0osU0FBUyxDQUFDLENBQUM7U0FDN0M7S0FDRjtJQUVELE1BQWEsR0FBSTtRQUNmLE1BQU0sRUFBQ1YsU0FBUyxHQUFFRSxTQUFTLEdBQUUsR0FBRyxJQUFJLENBQUNjLEtBQUs7UUFFMUMscUJBQ0UsOERBQUN6Qiw4REFBYTtZQUFDMEIsS0FBSyxFQUFLLE1BQUssR0FBR3JCLENBQVMsR0FBR0Msa0RBQVU7OzhCQUNyRCw4REFBQ0osa0RBQUk7O3NDQUNILDhEQUFDeUIsTUFBSTs0QkFBQ0MsSUFBSSxFQUFDLFVBQVU7NEJBQUNDLE9BQU8sRUFBQyx1Q0FBdUM7Ozs7O2dDQUFHO3NDQUN4RSw4REFBQ0MsTUFBSTs0QkFBQ0MsR0FBRyxFQUFDLFlBQVk7NEJBQUNDLElBQUksRUFBQyx1RUFBdUU7Ozs7O2dDQUFHOzs7Ozs7d0JBQ2pHOzhCQUNQLDhEQUFDakMsc0VBQVc7Ozs7d0JBQUc7OEJBQ2YsOERBQUNVLFNBQVM7b0JBQUUsR0FBR0UsU0FBUzs7Ozs7d0JBQUk7Ozs7OztnQkFDZCxDQUNoQjtLQUNIO0NBQ0Y7QUFFRCxpRUFBZUosS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWljcm8tc2Fhcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwLCB7IEFwcENvbnRleHQsIEFwcEluaXRpYWxQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdsaWIvaXNNb2JpbGUnO1xyXG5pbXBvcnQgIHt0aGVtZURhcmssIHRoZW1lTGlnaHR9IGZyb20gJy4uL2xpYi90aGVtZSc7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcDx7IGlzTW9iaWxlOiBib29sZWFuIH0+IHtcclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pe1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0geyBpc01vYmlsZTogaXNNb2JpbGUoeyByZXE6IGN0eC5yZXF9KSwgZmlyc3RHcmlkSXRlbTogdHJ1ZSB9O1xyXG5cclxuICAgIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKXtcclxuICAgICAgT2JqZWN0LmFzc2lnbihwYWdlUHJvcHMsIGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFnZVByb3BzKTtcclxuXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gcmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBjc3NcclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcclxuICAgIGlmKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSl7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZSA9IHsgZmFsc2UgPyB0aGVtZURhcmsgOiB0aGVtZUxpZ2h0IH0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2FzeW5jLWF3YWl0L25wcm9ncmVzcy1kYXJrLm1pbi5jc3M/dj0xJyAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiQ3NzQmFzZWxpbmUiLCJUaGVtZVByb3ZpZGVyIiwiQXBwIiwiSGVhZCIsIlJlYWN0IiwiaXNNb2JpbGUiLCJ0aGVtZURhcmsiLCJ0aGVtZUxpZ2h0IiwiTXlBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJyZXEiLCJmaXJzdEdyaWRJdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudERpZE1vdW50IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVuZGVyIiwicHJvcHMiLCJ0aGVtZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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