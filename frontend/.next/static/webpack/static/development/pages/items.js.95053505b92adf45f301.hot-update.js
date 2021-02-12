webpackHotUpdate("static/development/pages/items.js",{

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/bachir/EcommerceMento/frontend/components/AddToCart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation addToCart($id: ID!) {\n    addToCart(id: $id) {\n      id\n      quantity\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddToCart, _React$Component);

  function AddToCart() {
    _classCallCheck(this, AddToCart);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddToCart).apply(this, arguments));
  }

  _createClass(AddToCart, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
        mutation: ADD_TO_CART_MUTATION,
        variables: {
          id: id
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, function (addToCart) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: addToCart,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "Add To Cart");
      });
    }
  }]);

  return AddToCart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-CA/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-CA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-CA/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-GB/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-GB/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/index.js":
false,

/***/ "./node_modules/date-fns/locale/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/index.js":
false,

/***/ "./node_modules/date-fns/toDate/index.js":
false

})
//# sourceMappingURL=items.js.95053505b92adf45f301.hot-update.js.map