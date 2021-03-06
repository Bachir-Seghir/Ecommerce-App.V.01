webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default, LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_CART_MUTATION", function() { return TOGGLE_CART_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
var _jsxFileName = "/Users/bachir/EcommerceMento/frontend/components/Cart.js";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var LOCAL_STATE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var TOGGLE_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());

var Cart = function Cart() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, function (_ref) {
    var me = _ref.data.me;
    if (!me) return null;
    console.log(me);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: TOGGLE_CART_MUTATION,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, function (toggleCart) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: LOCAL_STATE_QUERY,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
          open: data.cartOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onClick: toggleCart,
          title: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Supreme__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Your Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "You Have __ Items in your cart")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "$10.10"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_SickButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Checkout")));
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Cart);


/***/ })

})
//# sourceMappingURL=_app.js.b20f42e4475ba6ce9046.hot-update.js.map