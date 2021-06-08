webpackHotUpdate("cms",{

/***/ "./src/components/Gallery.js":
/*!***********************************!*\
  !*** ./src/components/Gallery.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-photoswipe */ "./node_modules/react-photoswipe/lib/index.js");
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Image */ "./src/components/Image.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/kebabCase */ "./node_modules/lodash/kebabCase.js");
/* harmony import */ var lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Gallery.css */ "./src/components/Gallery.css");
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Gallery_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-photoswipe/lib/photoswipe.css */ "./node_modules/react-photoswipe/lib/photoswipe.css");
/* harmony import */ var react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe_lib_photoswipe_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/components/Gallery.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var query = "4040372661";

var Gallery = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, _Component);

  function Gallery() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      loaded: false,
      isOpen: false,
      sliderImages: [],
      index: 0
    };

    _this.handleKeyDown = function (ev) {
      if (ev.keyCode === 13 && !_this.state.isOpen) {
        // enter to open
        _this.isOpen(true, _this.state.index);
      }
    };

    _this.getImageInfo = function (img, index) {
      return fetch(img.image + '-/json/').then(function (res) {
        return res.json();
      }).then(function (result) {
        var newImagesArr = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.state.sliderImages);

        newImagesArr[index] = {
          src: img.image,
          title: img.title,
          w: result.width,
          h: result.height
        };

        _this.setState({
          sliderImages: newImagesArr
        });

        return true;
      }, function (error) {
        console.log(error);
        return false;
      });
    };

    return _this;
  }

  var _proto = Gallery.prototype;

  _proto.isOpen = function isOpen(_isOpen, index) {
    if (typeof index === 'undefined') index = 0;
    this.setState({
      isOpen: _isOpen,
      index: index
    });
  };

  _proto.componentDidMount = function componentDidMount() {
    var images = this.props.images,
        maxCount = images.length;
    var loopCount = 1;

    for (var i in images) {
      if (this.getImageInfo(images[i], i)) {
        this.setState({
          loaded: loopCount === maxCount
        });
        loopCount++;
      }
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var images = this.props.images;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, images && images.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "Gallery",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, images.map(function (image, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "Gallery--Item",
        key: lodash_kebabCase__WEBPACK_IMPORTED_MODULE_6___default()(image.alt) + '-' + index,
        onClick: function onClick() {
          return _this2.isOpen(true, index);
        },
        onKeyDown: _this2.handleKeyDown,
        tabIndex: 0,
        "aria-label": "Toggle Gallery",
        role: "button",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
        resolutions: "small",
        src: image.image,
        alt: image.alt,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 19
        }
      })), image.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 33
        }
      }, image.title), image.subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figcaption", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 36
        }
      }, image.subtitle));
    })), this.state.loaded && this.state.sliderImages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_photoswipe__WEBPACK_IMPORTED_MODULE_4__["PhotoSwipe"], {
      isOpen: this.state.isOpen,
      items: this.state.sliderImages,
      options: {
        index: this.state.index,
        history: false
      },
      onClose: function onClose() {
        return _this2.isOpen(false);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


Gallery.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(query, "query", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Gallery.js");
  reactHotLoader.register(Gallery, "Gallery", "/Users/noelthomas/Desktop/SSYv2editable/src/components/Gallery.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.e9780594e1b9f82ac4c4.hot-update.js.map