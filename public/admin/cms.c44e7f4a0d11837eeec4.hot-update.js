webpackHotUpdate("cms",{

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup.css */ "./src/components/Popup.css");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Popup_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/components/Popup.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var Popup = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Popup, _Component);

  function Popup(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleKeyDown = function (ev) {
      if (ev.keyCode === 13 && !_this.state.showPopup) {
        // enter to open
        _this.togglePopup();
      } else if (ev.keyCode === 27 && _this.state.showPopup) {
        // escape to close
        _this.togglePopup();
      }
    };

    _this.state = {
      showPopup: false
    };
    return _this;
  }

  var _proto = Popup.prototype;

  _proto.togglePopup = function togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "taCenter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Button",
      onClick: this.togglePopup.bind(this),
      onKeyDown: this.handleKeyDown,
      tabIndex: 0,
      "aria-label": "Toggle Popup",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, "Click To Launch Popup")), this.state.showPopup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Popup-Overlay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Popup-Background",
      onClick: this.togglePopup.bind(this),
      onKeyDown: this.handleKeyDown,
      tabIndex: 0,
      "aria-label": "Toggle Popup",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Popup-Inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_2__["X"], {
      className: "Popup-Close",
      onClick: this.togglePopup.bind(this),
      onKeyDown: this.handleKeyDown,
      tabIndex: 0,
      "aria-label": "Toggle Popup",
      role: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }), children)) : null);
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default = Popup;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popup, "Popup", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Popup.js");
  reactHotLoader.register(_default, "default", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Popup.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.c44e7f4a0d11837eeec4.hot-update.js.map