/******/ var __webpack_modules__ = ({

/***/ "./resources/js/pages/Test.tsx":
/*!*************************************!*\
  !*** ./resources/js/pages/Test.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
function Test(_ref) {
  _objectDestructuringEmpty(_ref);
  return (0, jsx_runtime_1.jsx)("button", {
    type: "button",
    onClick: function onClick() {
      alert('hello!');
      console.log('hello!');
    },
    children: "Say hello"
  });
}
exports["default"] = Test;

/***/ }),

/***/ "./resources/js/ssr.tsx":
/*!******************************!*\
  !*** ./resources/js/ssr.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
var server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ "react-dom/server"));
function render(page) {
  return (0, inertia_react_1.createInertiaApp)({
    page: page,
    render: server_1["default"].renderToString,
    resolve: function resolve(name) {
      return __webpack_require__("./resources/js/pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_ref) {
      var App = _ref.App,
        props = _ref.props;
      return (0, jsx_runtime_1.jsx)(App, _objectSpread({}, props));
    }
  });
}
exports["default"] = render;

/***/ }),

/***/ "./resources/js/pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Test": "./resources/js/pages/Test.tsx",
	"./Test.tsx": "./resources/js/pages/Test.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@inertiajs/inertia-react":
/*!*******************************************!*\
  !*** external "@inertiajs/inertia-react" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@inertiajs/inertia-react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./resources/js/ssr.tsx");
/******/ module.exports = __webpack_exports__;
/******/ 
