/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/dominiccurcio/Documents/CodeForFun/web_dev_practice/next_practice/components/Users.js\",\n    _this = undefined;\n\n\n\nvar Users = function Users(props) {\n  console.log(props);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    className: \"list-group\",\n    children: props.users.map(function (user) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"list-group-item list-group-item-action d-flex justify-content-between align-items-center\",\n        onClick: function onClick() {\n          return next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/users/[id]', '/user/${user.id}');\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n            children: [user.first_name, \" \", user.last_name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Email: \", user.email]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: user.avatar,\n          alt: user.first_name + user.last_name,\n          style: {\n            borderRadius: '50%'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }, _this)]\n      }, user.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\n\nvar _c;\n\n$RefreshReg$(_c, \"Users\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy5qcz9kNDQ2Il0sIm5hbWVzIjpbIlVzZXJzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiUm91dGVyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNJO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQSxjQUVJQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsR0FBWixDQUFpQixVQUFBQyxJQUFJO0FBQUEsMEJBQ2pCO0FBQUksaUJBQVMsRUFBQywwRkFBZDtBQUVBLGVBQU8sRUFBRztBQUFBLGlCQUFLQyx1REFBQSxDQUFZLGFBQVosRUFBMkIsa0JBQTNCLENBQUw7QUFBQSxTQUZWO0FBQUEsZ0NBR0E7QUFBQSxrQ0FDSTtBQUFBLHVCQUFLRCxJQUFJLENBQUNFLFVBQVYsT0FBdUJGLElBQUksQ0FBQ0csU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSxrQ0FBV0gsSUFBSSxDQUFDSSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhBLGVBT0E7QUFDSSxhQUFHLEVBQUVKLElBQUksQ0FBQ0ssTUFEZDtBQUVJLGFBQUcsRUFBRUwsSUFBSSxDQUFDRSxVQUFMLEdBQWtCRixJQUFJLENBQUNHLFNBRmhDO0FBR0ksZUFBSyxFQUFFO0FBQUNHLHdCQUFZLEVBQUU7QUFBZjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEE7QUFBQSxTQUNpRE4sSUFBSSxDQUFDTyxFQUR0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBckI7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0F2QkQ7O0tBQU1iLEs7QUF5Qk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICByZXR1cm4oXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy51c2Vycy5tYXAoIHVzZXIgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXhcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBrZXk9e3VzZXIuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ICgpPT4gUm91dGVyLnB1c2goJy91c2Vycy9baWRdJywgJy91c2VyLyR7dXNlci5pZH0nKX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXJ9IFxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX0vPlxuICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICApICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Users.js\n");

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzP2RiNDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n");

/***/ })

});