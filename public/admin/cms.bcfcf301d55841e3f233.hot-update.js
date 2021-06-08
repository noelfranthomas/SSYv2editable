webpackHotUpdate("cms",{

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./src/components/Image.js");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card.css */ "./src/components/Card.css");
/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/components/Card.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Card = function Card(_ref) {
  var title = _ref.title,
      backgroundImage = _ref.backgroundImage,
      large = _ref.large,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;
  if (large) className += ' Card-large';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Card relative " + className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, backgroundImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    background: true,
    className: "Card",
    resolutions: "large",
    src: backgroundImage,
    alt: title,
    size: "cover",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container relative CardText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "Card--Title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title)));
};

Card.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
var _default = Card;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Card, "Card", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Card.js");
  reactHotLoader.register(_default, "default", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Card.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.bcfcf301d55841e3f233.hot-update.js.map