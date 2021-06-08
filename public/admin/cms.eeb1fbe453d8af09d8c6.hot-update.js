webpackHotUpdate("cms",{

/***/ "":
false,

/***/ "./src/components/Accordion.js":
/*!*************************************!*\
  !*** ./src/components/Accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_feather_dist_icons_chevron_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-feather/dist/icons/chevron-down */ "./node_modules/react-feather/dist/icons/chevron-down.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Accordion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Accordion.css */ "./src/components/Accordion.css");
/* harmony import */ var _Accordion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Accordion_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/components/Accordion.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Accordion = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Accordion, _React$Component);

  function Accordion() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleKeyDown = function (ev) {
      if (ev.keyCode === 13 && !ev.target.classList.contains('active')) {
        // enter to open
        _this.toggleAccordion(ev);
      } else if (ev.keyCode === 27 && ev.target.classList.contains('active')) {
        // escape to close
        _this.toggleAccordion(ev);
      }
    };

    return _this;
  }

  var _proto = Accordion.prototype;

  // use state to auto close but has issues mobile view. onClick={() => this.handleClick(index)}
  // state = {
  //   activeItem: null
  // }
  //
  // handleClick = index => {
  //   this.setState({
  //     activeItem: this.state.activeItem === index ? null : index
  //   })
  // }
  _proto.toggleAccordion = function toggleAccordion(e) {
    e.target.classList.toggle('active');
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        items = _this$props.items,
        className = _this$props.className;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "Accordion " + className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, !!items && items.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "Accordion--item ",
        key: "accordion-item-" + (lodash_kebabCase__WEBPACK_IMPORTED_MODULE_3___default()(item.title) + '-' + index),
        onClick: _this2.toggleAccordion.bind(_this2),
        onKeyDown: _this2.handleKeyDown,
        tabIndex: 0,
        "aria-label": "Toggle Accordion",
        role: "button",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "flex",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }
      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_feather_dist_icons_chevron_down__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: 'description',
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }
      }, item.description, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 36
        }
      }), "Hello", item.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        href: item.link,
        className: "button",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 19
        }
      }, item.linkTitle)));
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Accordion;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Accordion.defaultProps = {
  items: [],
  className: ''
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Accordion, "Accordion", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Accordion.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/templates/ProgramsPage.css":
/*!****************************************!*\
  !*** ./src/templates/ProgramsPage.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1623026921585
      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"hmr":true,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

})
//# sourceMappingURL=cms.eeb1fbe453d8af09d8c6.hot-update.js.map