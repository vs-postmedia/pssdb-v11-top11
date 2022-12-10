(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var scrollama__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scrollama__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_normalize_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64);
/* harmony import */ var _css_postmedia_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_postmedia_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65);
/* harmony import */ var _css_colors_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_colors_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_11__);





// LIBS

 // CSS





 // JS

var init = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
    var scroller, iframe;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // instantiate the scrollama
            scroller = scrollama__WEBPACK_IMPORTED_MODULE_6___default()();
            iframe = document.querySelector('.scrollyteller .chart > iframe'); // setup the instance, pass callback functions

            scroller.setup({
              offset: 0.75,
              step: '.step'
            }).onStepEnter(function (resp) {
              // { element, index, direction }
              iframe.src = iframe.src.replace(/#slide-.*/, '') + '#slide-' + resp.index;
            }).onStepExit(function (resp) {// { element, index, direction }
            }); // setup resize event

            window.addEventListener("resize", scroller.resize);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[31,1,2]]]);