webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _Icons_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Logo */ \"./components/Icons/Logo.js\");\n/* harmony import */ var _Icons_BurgerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/BurgerMenu */ \"./components/Icons/BurgerMenu.js\");\n/* harmony import */ var _Icons_LogoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/LogoName */ \"./components/Icons/LogoName.js\");\n/* harmony import */ var _hooks_useWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWidth */ \"./hooks/useWidth.js\");\n/* harmony import */ var _hooks_useHeight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useHeight */ \"./hooks/useHeight.js\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/home/sergio/Documentos/lolo-landing-page/components/Header/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"])();\n  var controlList = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"])();\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var height = Object(_hooks_useHeight__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(); // const [isOpen, toggleOpen] = useCycle(null, true);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var viewportWidth = Object(_hooks_useWidth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      scrolled = _useState2[0],\n      setScrolled = _useState2[1];\n\n  var listener = null;\n\n  if (isOpen) {\n    controls.start({\n      clipPath: \"circle(\".concat(height * 2 + 200, \"px at 100% 0px)\"),\n      backgroundColor: '#FFFFFF',\n      transition: {\n        type: 'spring',\n        stiffness: 20,\n        restDelta: 2\n      }\n    });\n    controlList.start(function (i) {\n      return {\n        opacity: 1,\n        y: 10,\n        transition: {\n          delay: i * 0.3\n        }\n      };\n    });\n  } else {\n    controls.start({\n      clipPath: 'circle(15px at 100% -15px)',\n      transition: {\n        delay: 0.5,\n        type: 'spring',\n        stiffness: 400,\n        damping: 40\n      }\n    }).then(function () {\n      controls.start({\n        backgroundColor: '#FFFFFF00'\n      });\n    }).then(function () {\n      return setIsOpen(null);\n    });\n    controlList.start(function (i) {\n      return {\n        opacity: 0,\n        y: 0,\n        transition: {\n          duration: 0.2\n        }\n      };\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (viewportWidth > 0) {\n      listener = document.addEventListener('scroll', function (e) {\n        var scrolledSize = document.scrollingElement.scrollTop;\n        scrolledSize >= 20 && viewportWidth < 1024 ? setScrolled(true) : setScrolled(false);\n      });\n      return function () {\n        return document.removeEventListener('scroll', listener);\n      };\n    }\n  }, [scrolled, viewportWidth]);\n\n  var toggleOpen = function toggleOpen() {\n    setIsOpen(isOpen === null || !isOpen ? true : scrolled ? null : false);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"navContainer\"], \" \").concat(scrolled ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"navContainerScrolled\"] : null, \" fixed top-0 w-screen flex justify-between items-center px-8 py-2 lg:bg-transparent lg:shadow-none lg:flex lg:container lg:absolute lg:max-w-full lg:justify-around lg:h-24 lg:mt-4 lg:px-12 xl:px-0\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex align-middle\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logo\"], \" w-3\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icons_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\\n          \".concat(isOpen === null ? scrolled ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logoName\"] : null : isOpen ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logoName\"] : _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logoNameClosed\"], \"\\n           flex align-middle w-12 ml-1 lg:w-16\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icons_LogoName__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          style: {\n            width: '100%',\n            height: 'auto'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"#como-funciona\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"opacity-50 hover:opacity-100\",\n          children: \"C\\xF3mo funciona\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"#por-que-lolo\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"opacity-50 hover:opacity-100\",\n          children: \"Por qu\\xE9 Lolo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"#servicios\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"opacity-50 hover:opacity-100\",\n          children: \"Servicios\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      initial: false,\n      custom: height,\n      ref: containerRef,\n      className: \"lg:hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"burger\"], \" \\n          \").concat(isOpen === null ? scrolled ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"burgerScrolled\"] : null : isOpen ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"burgerScrolled\"] : _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"burgerScrolled\"], \"\\n           z-50 lg:hidden\"),\n        onClick: function onClick() {\n          return toggleOpen();\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icons_BurgerMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          isOpen: isOpen\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"absolute top-0 right-0 bottom-0 w-full h-screen\",\n        style: {\n          zIndex: -999\n        },\n        animate: controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col w-full h-90 items-center justify-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n            custom: 0,\n            animate: controlList,\n            className: \"mt-10 opacity-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              href: \"#como-funciona\",\n              passHref: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100\",\n                onClick: function onClick() {\n                  return toggleOpen();\n                },\n                children: \"C\\xF3mo funciona\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 161,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 160,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n            custom: 1,\n            animate: controlList,\n            className: \"mt-10 opacity-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              href: \"#por-que-lolo\",\n              passHref: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100\",\n                onClick: function onClick() {\n                  return toggleOpen();\n                },\n                children: \"Por qu\\xE9 Lolo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 175,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 174,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 169,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n            custom: 2,\n            animate: controlList,\n            className: \"mt-10 opacity-0 mb-10\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              href: \"#servicios\",\n              passHref: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100\",\n                onClick: function onClick() {\n                  return toggleOpen();\n                },\n                children: \"Servicios\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 189,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 188,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 183,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          custom: 3,\n          animate: controlList,\n          className: \"lg:hidden text-center relative\",\n          style: {\n            bottom: '8%'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"text-orange\",\n            children: \"Espa\\xF1ol\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 204,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"text-orange opacity-50 inline-block mx-1\",\n            children: \" \\u2022 \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 205,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"text-orange opacity-50\",\n            children: \"Catal\\xE0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 206,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"d85Wec52gJjfCY+WK8r0RdJQelU=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"], framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"], _hooks_useHeight__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _hooks_useWidth__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/M2EwYyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xMaXN0IiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiaGVpZ2h0IiwidXNlSGVpZ2h0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ2aWV3cG9ydFdpZHRoIiwidXNlV2lkdGgiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwibGlzdGVuZXIiLCJzdGFydCIsImNsaXBQYXRoIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJpIiwib3BhY2l0eSIsInkiLCJkZWxheSIsImRhbXBpbmciLCJ0aGVuIiwiZHVyYXRpb24iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2Nyb2xsZWRTaXplIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVPcGVuIiwibmF2Q29udGFpbmVyIiwibmF2Q29udGFpbmVyU2Nyb2xsZWQiLCJsb2dvIiwibG9nb05hbWUiLCJsb2dvTmFtZUNsb3NlZCIsIndpZHRoIiwiYnVyZ2VyIiwiYnVyZ2VyU2Nyb2xsZWQiLCJ6SW5kZXgiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFXQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVksRUFBN0I7QUFDQSxNQUFNQyxXQUFXLEdBQUdELGtFQUFZLEVBQWhDO0FBQ0EsTUFBTUUsWUFBWSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBM0I7QUFD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QUE7QUFBQTtBQUFBLG1CQVBGLGVBUUU7QUFBRyxxQkFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBIRCxDQTdMRDs7R0FBTWhELE07VUFDYUUsMEQsRUFDR0EsMEQsRUFFTEssd0QsRUFHT0ssdUQ7OztLQVBsQlosTTtBQStMU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUN5Y2xlLCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuaW1wb3J0IExvZ28gZnJvbSAnLi4vSWNvbnMvTG9nbyc7XG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tICcuLi9JY29ucy9CdXJnZXJNZW51JztcbmltcG9ydCBMb2dvTmFtZSBmcm9tICcuLi9JY29ucy9Mb2dvTmFtZSc7XG5cbmltcG9ydCB1c2VXaWR0aCBmcm9tICcuLi8uLi9ob29rcy91c2VXaWR0aCc7XG5pbXBvcnQgdXNlSGVpZ2h0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUhlaWdodCc7XG5cbmltcG9ydCB7XG4gIGxvZ28sXG4gIGxvZ29OYW1lLFxuICBsb2dvTmFtZUNsb3NlZCxcbiAgYnVyZ2VyLFxuICBidXJnZXJTY3JvbGxlZCxcbiAgYnVyZ2VyQ2xvc2VkLFxuICBuYXZDb250YWluZXIsXG4gIG5hdkNvbnRhaW5lclNjcm9sbGVkLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgY29udHJvbExpc3QgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBoZWlnaHQgPSB1c2VIZWlnaHQoKTtcbiAgLy8gY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShudWxsLCB0cnVlKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB2aWV3cG9ydFdpZHRoID0gdXNlV2lkdGgoKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG5cbiAgaWYgKGlzT3Blbikge1xuICAgIGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCAxMDAlIDBweClgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICBzdGlmZm5lc3M6IDIwLFxuICAgICAgICByZXN0RGVsdGE6IDIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnRyb2xMaXN0LnN0YXJ0KChpKSA9PiAoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHk6IDEwLFxuICAgICAgdHJhbnNpdGlvbjogeyBkZWxheTogaSAqIDAuMyB9LFxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICBjb250cm9sc1xuICAgICAgLnN0YXJ0KHtcbiAgICAgICAgY2xpcFBhdGg6ICdjaXJjbGUoMTVweCBhdCAxMDAlIC0xNXB4KScsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgICAgICAgIGRhbXBpbmc6IDQwLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYwMCcsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHNldElzT3BlbihudWxsKSk7XG5cbiAgICBjb250cm9sTGlzdC5zdGFydCgoaSkgPT4gKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB5OiAwLFxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH0sXG4gICAgfSkpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlld3BvcnRXaWR0aCA+IDApIHtcbiAgICAgIGxpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsZWRTaXplID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHNjcm9sbGVkU2l6ZSA+PSAyMCAmJiB2aWV3cG9ydFdpZHRoIDwgMTAyNFxuICAgICAgICAgID8gc2V0U2Nyb2xsZWQodHJ1ZSlcbiAgICAgICAgICA6IHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxlZCwgdmlld3BvcnRXaWR0aF0pO1xuXG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGlzT3BlbiA9PT0gbnVsbCB8fCAhaXNPcGVuID8gdHJ1ZSA6IHNjcm9sbGVkID8gbnVsbCA6IGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7bmF2Q29udGFpbmVyfSAke1xuICAgICAgICBzY3JvbGxlZCA/IG5hdkNvbnRhaW5lclNjcm9sbGVkIDogbnVsbFxuICAgICAgfSBmaXhlZCB0b3AtMCB3LXNjcmVlbiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtOCBweS0yIGxnOmJnLXRyYW5zcGFyZW50IGxnOnNoYWRvdy1ub25lIGxnOmZsZXggbGc6Y29udGFpbmVyIGxnOmFic29sdXRlIGxnOm1heC13LWZ1bGwgbGc6anVzdGlmeS1hcm91bmQgbGc6aC0yNCBsZzptdC00IGxnOnB4LTEyIHhsOnB4LTBgfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2xvZ299IHctM2B9PlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGlzT3BlbiA9PT0gbnVsbFxuICAgICAgICAgICAgICA/IHNjcm9sbGVkXG4gICAgICAgICAgICAgICAgPyBsb2dvTmFtZVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICA6IGlzT3BlblxuICAgICAgICAgICAgICA/IGxvZ29OYW1lXG4gICAgICAgICAgICAgIDogbG9nb05hbWVDbG9zZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgIGZsZXggYWxpZ24tbWlkZGxlIHctMTIgbWwtMSBsZzp3LTE2YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxMb2dvTmFtZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJyB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCB0ZXh0LXdoaXRlIG9wYWNpdHktNzAgdGV4dC0yNCBtaW4tdy0yOSBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNjb21vLWZ1bmNpb25hXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMFwiPkPDs21vIGZ1bmNpb25hPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjcG9yLXF1ZS1sb2xvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBob3ZlcjpvcGFjaXR5LTEwMFwiPlBvciBxdcOpIExvbG88L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNzZXJ2aWNpb3NcIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwXCI+U2VydmljaW9zPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxtb3Rpb24ubmF2XG4gICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICBjdXN0b209e2hlaWdodH1cbiAgICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17YGxnOmhpZGRlbmB9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2J1cmdlcn0gXG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGlzT3BlbiA9PT0gbnVsbFxuICAgICAgICAgICAgICA/IHNjcm9sbGVkXG4gICAgICAgICAgICAgICAgPyBidXJnZXJTY3JvbGxlZFxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICA6IGlzT3BlblxuICAgICAgICAgICAgICA/IGJ1cmdlclNjcm9sbGVkXG4gICAgICAgICAgICAgIDogYnVyZ2VyU2Nyb2xsZWRcbiAgICAgICAgICB9XG4gICAgICAgICAgIHotNTAgbGc6aGlkZGVuYH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8QnVyZ2VyTWVudSBpc09wZW49e2lzT3Blbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCB3LWZ1bGwgaC1zY3JlZW5cIlxuICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogLTk5OSB9fVxuICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xzfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLTkwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY3VzdG9tPXswfVxuICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sTGlzdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgb3BhY2l0eS0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNjb21vLWZ1bmNpb25hXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHRleHQtMzIgbWQ6dGV4dC00MCBmb250LW1vbnRzZXJyYXQgZm9udC1ib2xkIGhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wZW4oKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDw7NtbyBmdW5jaW9uYVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgY3VzdG9tPXsxfVxuICAgICAgICAgICAgICBhbmltYXRlPXtjb250cm9sTGlzdH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgb3BhY2l0eS0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNwb3ItcXVlLWxvbG9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UgdGV4dC0zMiBtZDp0ZXh0LTQwIGZvbnQtbW9udHNlcnJhdCBmb250LWJvbGQgaG92ZXI6b3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3BlbigpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBvciBxdcOpIExvbG9cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGN1c3RvbT17Mn1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbExpc3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIG9wYWNpdHktMCBtYi0xMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjc2VydmljaW9zXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHRleHQtMzIgbWQ6dGV4dC00MCBmb250LW1vbnRzZXJyYXQgZm9udC1ib2xkIGhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wZW4oKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTZXJ2aWNpb3NcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY3VzdG9tPXszfVxuICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbExpc3R9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC1jZW50ZXIgcmVsYXRpdmVcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYm90dG9tOiAnOCUnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2VcIj5Fc3Bhw7FvbDwvYT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIG9wYWNpdHktNTAgaW5saW5lLWJsb2NrIG14LTFcIj4g4oCiIDwvcD5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIG9wYWNpdHktNTBcIj5DYXRhbMOgPC9hPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24ubmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

})