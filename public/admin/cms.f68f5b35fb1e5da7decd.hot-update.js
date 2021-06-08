webpackHotUpdate("cms",{

/***/ "./src/templates/HomePage.js":
/*!***********************************!*\
  !*** ./src/templates/HomePage.js ***!
  \***********************************/
/*! exports provided: HomePageTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageTemplate", function() { return HomePageTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TitleHeader */ "./src/components/TitleHeader.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Image */ "./src/components/Image.js");
var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/templates/HomePage.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





 // Export Template for use in CMS preview

var HomePageTemplate = function HomePageTemplate(_ref) {
  var title = _ref.title,
      featuredImage = _ref.featuredImage,
      body = _ref.body;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TitleHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    large: true,
    title: title,
    backgroundImage: featuredImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container taCenter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Our Mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://ucarecdn.com/cef9f32d-3ec5-4c61-a5eb-f564f93ca8d9/",
    className: "image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Hello"))));
}; // Export Default HomePage for front-end

var HomePage = function HomePage(_ref2) {
  var page = _ref2.data.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    meta: page.frontmatter.meta || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomePageTemplate, Object.assign({}, page, page.frontmatter, {
    body: page.html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  })));
};

var _default = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "3714610932";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomePageTemplate, "HomePageTemplate", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/HomePage.js");
  reactHotLoader.register(HomePage, "HomePage", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/HomePage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/HomePage.js");
  reactHotLoader.register(_default, "default", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/HomePage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.f68f5b35fb1e5da7decd.hot-update.js.map