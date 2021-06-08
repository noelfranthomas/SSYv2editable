webpackHotUpdate("cms",{

/***/ "./src/components/Image.js":
/*!*********************************!*\
  !*** ./src/components/Image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Observer */ "./src/components/Observer.js");
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Image.css */ "./src/components/Image.css");
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Image_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/components/Image.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Image = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.imageSizes = ['320', '450', '640', '750', '800', '900', '1000', '1200', '1500', '1600', '2000'];
    _this.state = {
      isIntersecting: false
    };

    _this.handleIntersection = function (e) {
      if (e.isIntersecting) {
        _this.setState({
          isIntersecting: true
        });
      }
    };

    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    return _this;
  }

  var _proto = Image.prototype;

  _proto.checkIsUploadcare = function checkIsUploadcare(src) {
    return typeof src === 'string' && src.includes('ucarecdn.com');
  };

  _proto.getResolutionString = function getResolutionString(res) {
    /* add resolutions options for inline images */
    if (res === 'small') {
      res = '800x';
    } else if (res === 'medium') {
      res = '1000x';
    } else if (res === 'large') {
      res = '2000x';
    }

    return res;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        background = _this$props.background,
        _this$props$backgroun = _this$props.backgroundSize,
        backgroundSize = _this$props$backgroun === void 0 ? 'cover' : _this$props$backgroun,
        _this$props$resolutio = _this$props.resolutions,
        resolutions = _this$props$resolutio === void 0 ? '1000x' : _this$props$resolutio,
        _this$props$className = _this$props.className,
        className = _this$props$className === void 0 ? '' : _this$props$className,
        src = _this$props.src,
        _this$props$secSet = _this$props.secSet,
        secSet = _this$props$secSet === void 0 ? '' : _this$props$secSet,
        fullSrc = _this$props.fullSrc,
        smallSrc = _this$props.smallSrc,
        _this$props$title = _this$props.title,
        title = _this$props$title === void 0 ? '' : _this$props$title,
        _this$props$alt = _this$props.alt,
        alt = _this$props$alt === void 0 ? '' : _this$props$alt,
        _this$props$lazy = _this$props.lazy,
        lazy = _this$props$lazy === void 0 ? true : _this$props$lazy;
    var isUploadcare = this.checkIsUploadcare(src),
        fullImage = !isUploadcare || !lazy;
    /* create source set for images */

    if (isUploadcare) {
      secSet = this.imageSizes.map(function (size) {
        return src + "-/progressive/yes/-/format/auto/-/preview/" + size + "x" + size + "/-/quality/lightest/" + size + ".jpg " + size + "w";
      });
    }

    fullSrc = "" + src + (isUploadcare ? '-/progressive/yes/-/format/auto/-/resize/' + this.getResolutionString(resolutions) + '/' : '');
    smallSrc = "" + src + (isUploadcare ? '-/progressive/yes/-/format/auto/-/resize/10x/' : '');
    var style = {};

    if (background && lazy) {
      style = {
        backgroundImage: "url(" + (this.state.isIntersecting ? fullSrc : smallSrc) + ")",
        backgroundSize: backgroundSize
      };
    } else {
      style = {
        backgroundImage: "url(" + fullSrc + ")",
        backgroundSize: backgroundSize
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, isUploadcare && lazy && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Observer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: this.handleIntersection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "BackgroundImage",
      ref: this.ref,
      style: {
        backgroundImage: "url(" + smallSrc + ")",
        backgroundSize: 'cover'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, !background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "LazyImage " + (className + this.state.isIntersecting ? ' faded' : ''),
      src: this.state.isIntersecting ? fullSrc : '',
      srcSet: this.state.isIntersecting ? secSet : '',
      sizes: '100vw',
      title: title,
      alt: alt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }), background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: lazy + " LazyImage BackgroundImage absolute " + (className + this.state.isIntersecting ? ' faded' : ''),
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }))), fullImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "BackgroundImage absolute " + className,
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }
    }), !background && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "rounded Corners " + className,
      src: fullSrc,
      srcSet: secSet,
      sizes: '100vw',
      title: title,
      alt: alt,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    })));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Image.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
var _default = Image;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Image, "Image", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Image.js");
  reactHotLoader.register(_default, "default", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Image.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.0b32a2dbeda8b979e65c.hot-update.js.map