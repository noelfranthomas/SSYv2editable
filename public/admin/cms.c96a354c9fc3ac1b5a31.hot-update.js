webpackHotUpdate("cms",{

/***/ "./src/templates/ContactPage.js":
/*!**************************************!*\
  !*** ./src/templates/ContactPage.js ***!
  \**************************************/
/*! exports provided: ContactPageTemplate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageTemplate", function() { return ContactPageTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormSimpleAjax */ "./src/components/FormSimpleAjax.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContactPage.css */ "./src/templates/ContactPage.css");
/* harmony import */ var _ContactPage_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ContactPage_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/noelthomas/Desktop/SSYv2editable/src/templates/ContactPage.js",
    _this = undefined;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






 // Export Template for use in CMS preview

var ContactPageTemplate = function ContactPageTemplate(_ref) {
  var body = _ref.body,
      address = _ref.address,
      email = _ref.email,
      facebook = _ref.facebook,
      instagram = _ref.instagram;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "Contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section Contact--Section1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container Contact--Section1--Container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    source: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Contact--Details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.google.com.au/maps/search/" + encodeURI(address),
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["MapPin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), " ", address), email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "mailto:" + email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Mail"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), " ", email), facebook && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.google.com.au/maps/search/" + encodeURI(facebook),
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Facebook"], {
    style: {
      color: "blue"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), " ", facebook), instagram && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "Contact--Details--Item",
    href: "https://www.facebook.com/pages/category/Youth-Organization/Stars-for-Sheltered-Youth-113006647108687/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_feather__WEBPACK_IMPORTED_MODULE_1__["Instagram"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), " ", instagram))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FormSimpleAjax__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Simple Form Ajax",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    className: "map",
    title: "map",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10026.690997175832!2d-114.140695!3d51.0775908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36aff4a9e3c803fb!2sUniversity%20of%20Calgary!5e0!3m2!1sen!2sca!4v1595546993486!5m2!1sen!2sca",
    width: "2000",
    height: "500",
    frameBorder: "0",
    style: {
      border: "0",
      allowFullScreen: "",
      ariaHidden: 'false',
      tabIndex: '0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }));
};

var ContactPage = function ContactPage(_ref2) {
  var page = _ref2.data.page;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    meta: page.frontmatter.meta || false,
    title: page.frontmatter.title || false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactPageTemplate, Object.assign({}, page.frontmatter, {
    body: page.html,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  })));
};

var _default = ContactPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
var pageQuery = "1278516743";
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContactPageTemplate, "ContactPageTemplate", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/ContactPage.js");
  reactHotLoader.register(ContactPage, "ContactPage", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/ContactPage.js");
  reactHotLoader.register(pageQuery, "pageQuery", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/ContactPage.js");
  reactHotLoader.register(_default, "default", "/Users/noelthomas/Desktop/SSYv2editable/src/templates/ContactPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.c96a354c9fc3ac1b5a31.hot-update.js.map