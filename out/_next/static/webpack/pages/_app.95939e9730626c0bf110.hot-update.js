webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _Icons_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icons/Logo */ \"./components/Icons/Logo.js\");\n/* harmony import */ var _Icons_BurgerMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icons/BurgerMenu */ \"./components/Icons/BurgerMenu.js\");\n/* harmony import */ var _Icons_LogoName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icons/LogoName */ \"./components/Icons/LogoName.js\");\n/* harmony import */ var _hooks_useWidth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWidth */ \"./hooks/useWidth.js\");\n/* harmony import */ var _hooks_useHeight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useHeight */ \"./hooks/useHeight.js\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/index.module.css */ \"./styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _jsxFileName = \"/home/sergio/Documentos/lolo-landing-page/components/Header/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var controls = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"])();\n  var controlList = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"])();\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var height = Object(_hooks_useHeight__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(); // const [isOpen, toggleOpen] = useCycle(null, true);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var viewportWidth = Object(_hooks_useWidth__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      scrolled = _useState2[0],\n      setScrolled = _useState2[1];\n\n  var listener = null;\n\n  if (isOpen) {\n    controls.start({\n      clipPath: \"circle(\".concat(height * 2 + 200, \"px at 100% 0px)\"),\n      backgroundColor: '#FFFFFF',\n      transition: {\n        type: 'spring',\n        stiffness: 20,\n        restDelta: 2\n      }\n    });\n    controlList.start(function (i) {\n      return {\n        opacity: 1,\n        y: 10,\n        transition: {\n          delay: i * 0.3\n        }\n      };\n    });\n  } else {\n    controls.start({\n      clipPath: 'circle(15px at 100% -15px)',\n      transition: {\n        delay: 0.5,\n        type: 'spring',\n        stiffness: 400,\n        damping: 40\n      }\n    }).then(function () {\n      controls.start({\n        backgroundColor: '#FFFFFF00'\n      });\n    }).then(function () {\n      return setIsOpen(null);\n    });\n    controlList.start(function (i) {\n      return {\n        opacity: 0,\n        y: 0,\n        transition: {\n          duration: 0.2\n        }\n      };\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (viewportWidth > 0) {\n      listener = document.addEventListener('scroll', function (e) {\n        var scrolledSize = document.scrollingElement.scrollTop;\n        scrolledSize >= 20 && viewportWidth < 1024 ? setScrolled(true) : setScrolled(false);\n      });\n      return function () {\n        return document.removeEventListener('scroll', listener);\n      };\n    }\n  }, [scrolled, viewportWidth]);\n\n  var toggleOpen = function toggleOpen() {\n    setIsOpen(isOpen === null || !isOpen ? true : scrolled ? null : false);\n  };\n\n  console.log(isOpen);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"navContainer\"], \" \").concat(scrolled ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"navContainerScrolled\"] : null, \" fixed top-0 w-screen flex justify-between items-center px-8 py-2 lg:bg-transparent lg:shadow-none lg:flex lg:container lg:absolute lg:max-w-full lg:justify-around lg:h-24 lg:mt-4 lg:px-12 xl:px-0\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex align-middle\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logo\"], \" w-3\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icons_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\\n          \".concat(isOpen === null ? scrolled ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logoName\"] : null : isOpen ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logoName\"] : _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"logoNameClosed\"], \"\\n           flex align-middle w-12 ml-1 lg:w-16\"),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icons_LogoName__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          style: {\n            width: '100%',\n            height: 'auto'\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"#como-funciona\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"opacity-50 hover:opacity-100\",\n          children: \"C\\xF3mo funciona\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"#por-que-lolo\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"opacity-50 hover:opacity-100\",\n          children: \"Por qu\\xE9 Lolo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"#servicios\",\n        passHref: true,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"opacity-50 hover:opacity-100\",\n          children: \"Servicios\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].nav, {\n      initial: false,\n      custom: height,\n      ref: containerRef,\n      className: \"lg:hidden\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"burger\"], \" \").concat(scrolled || isOpen ? _styles_index_module_css__WEBPACK_IMPORTED_MODULE_9__[\"burgerScrolled\"] : null, \" z-50 lg:hidden\"),\n        onClick: function onClick() {\n          return toggleOpen();\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Icons_BurgerMenu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          isOpen: isOpen\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"absolute top-0 right-0 bottom-0 w-full h-screen\",\n        style: {\n          zIndex: -999\n        },\n        animate: controls,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col w-full h-90 items-center justify-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n            custom: 0,\n            animate: controlList,\n            className: \"mt-10 opacity-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              href: \"#como-funciona\",\n              passHref: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100\",\n                onClick: function onClick() {\n                  return toggleOpen();\n                },\n                children: \"C\\xF3mo funciona\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 154,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 153,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 148,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n            custom: 1,\n            animate: controlList,\n            className: \"mt-10 opacity-0\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              href: \"#por-que-lolo\",\n              passHref: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100\",\n                onClick: function onClick() {\n                  return toggleOpen();\n                },\n                children: \"Por qu\\xE9 Lolo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 168,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 162,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n            custom: 2,\n            animate: controlList,\n            className: \"mt-10 opacity-0 mb-10\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n              href: \"#servicios\",\n              passHref: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                className: \"text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100\",\n                onClick: function onClick() {\n                  return toggleOpen();\n                },\n                children: \"Servicios\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 182,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 181,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 176,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n          custom: 3,\n          animate: controlList,\n          className: \"lg:hidden text-center relative\",\n          style: {\n            bottom: '8%'\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"text-orange\",\n            children: \"Espa\\xF1ol\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"text-orange opacity-50 inline-block mx-1\",\n            children: \" \\u2022 \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 198,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"text-orange opacity-50\",\n            children: \"Catal\\xE0\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 199,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 191,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"d85Wec52gJjfCY+WK8r0RdJQelU=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"], framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useAnimation\"], _hooks_useHeight__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _hooks_useWidth__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/M2EwYyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjb250cm9scyIsInVzZUFuaW1hdGlvbiIsImNvbnRyb2xMaXN0IiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwiaGVpZ2h0IiwidXNlSGVpZ2h0IiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ2aWV3cG9ydFdpZHRoIiwidXNlV2lkdGgiLCJzY3JvbGxlZCIsInNldFNjcm9sbGVkIiwibGlzdGVuZXIiLCJzdGFydCIsImNsaXBQYXRoIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJpIiwib3BhY2l0eSIsInkiLCJkZWxheSIsImRhbXBpbmciLCJ0aGVuIiwiZHVyYXRpb24iLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2Nyb2xsZWRTaXplIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVPcGVuIiwiY29uc29sZSIsImxvZyIsIm5hdkNvbnRhaW5lciIsIm5hdkNvbnRhaW5lclNjcm9sbGVkIiwibG9nbyIsImxvZ29OYW1lIiwibG9nb05hbWVDbG9zZWQiLCJ3aWR0aCIsImJ1cmdlciIsImJ1cmdlclNjcm9sbGVkIiwiekluZGV4IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBVUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLEVBQTdCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxrRUFBWSxFQUFoQztBQUNBLE1BQU1FLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxnRUFBUyxFQUF4QixDQUptQixDQUtuQjs7QUFMbUIsa0JBTVNDLHNEQUFRLENBQUMsSUFBRCxDQU5qQjtBQUFBLE1BTVpDLE1BTlk7QUFBQSxNQU1KQyxTQU5JOztBQU9uQixNQUFNQyxhQUFhLEdBQUdDLCtEQUFRLEVBQTlCOztBQVBtQixtQkFRYUosc0RBQVEsQ0FBQyxLQUFELENBUnJCO0FBQUEsTUFRWkssUUFSWTtBQUFBLE1BUUZDLFdBUkU7O0FBU25CLE1BQUlDLFFBQVEsR0FBRyxJQUFmOztBQUVBLE1BQUlOLE1BQUosRUFBWTtBQUNWUixZQUFRLENBQUNlLEtBQVQsQ0FBZTtBQUNiQyxjQUFRLG1CQUFZWCxNQUFNLEdBQUcsQ0FBVCxHQUFhLEdBQXpCLG9CQURLO0FBRWJZLHFCQUFlLEVBQUUsU0FGSjtBQUdiQyxnQkFBVSxFQUFFO0FBQ1ZDLFlBQUksRUFBRSxRQURJO0FBRVZDLGlCQUFTLEVBQUUsRUFGRDtBQUdWQyxpQkFBUyxFQUFFO0FBSEQ7QUFIQyxLQUFmO0FBU0FuQixlQUFXLENBQUNhLEtBQVosQ0FBa0IsVUFBQ08sQ0FBRDtBQUFBLGFBQVE7QUFDeEJDLGVBQU8sRUFBRSxDQURlO0FBRXhCQyxTQUFDLEVBQUUsRUFGcUI7QUFHeEJOLGtCQUFVLEVBQUU7QUFBRU8sZUFBSyxFQUFFSCxDQUFDLEdBQUc7QUFBYjtBQUhZLE9BQVI7QUFBQSxLQUFsQjtBQUtELEdBZkQsTUFlTztBQUNMdEIsWUFBUSxDQUNMZSxLQURILENBQ1M7QUFDTEMsY0FBUSxFQUFFLDRCQURMO0FBRUxFLGdCQUFVLEVBQUU7QUFDVk8sYUFBSyxFQUFFLEdBREc7QUFFVk4sWUFBSSxFQUFFLFFBRkk7QUFHVkMsaUJBQVMsRUFBRSxHQUhEO0FBSVZNLGVBQU8sRUFBRTtBQUpDO0FBRlAsS0FEVCxFQVVHQyxJQVZILENBVVEsWUFBTTtBQUNWM0IsY0FBUSxDQUFDZSxLQUFULENBQWU7QUFDYkUsdUJBQWUsRUFBRTtBQURKLE9BQWY7QUFHRCxLQWRILEVBZUdVLElBZkgsQ0FlUTtBQUFBLGFBQU1sQixTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FmUjtBQWlCQVAsZUFBVyxDQUFDYSxLQUFaLENBQWtCLFVBQUNPLENBQUQ7QUFBQSxhQUFRO0FBQ3hCQyxlQUFPLEVBQUUsQ0FEZTtBQUV4QkMsU0FBQyxFQUFFLENBRnFCO0FBR3hCTixrQkFBVSxFQUFFO0FBQUVVLGtCQUFRLEVBQUU7QUFBWjtBQUhZLE9BQVI7QUFBQSxLQUFsQjtBQUtEOztBQUVEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJbkIsYUFBYSxHQUFHLENBQXBCLEVBQXVCO0FBQ3JCSSxjQUFRLEdBQUdnQixRQUFRLENBQUNDLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLFVBQUNDLENBQUQsRUFBTztBQUNwRCxZQUFNQyxZQUFZLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEJDLFNBQS9DO0FBQ0FGLG9CQUFZLElBQUksRUFBaEIsSUFBc0J2QixhQUFhLEdBQUcsSUFBdEMsR0FDSUcsV0FBVyxDQUFDLElBQUQsQ0FEZixHQUVJQSxXQUFXLENBQUMsS0FBRCxDQUZmO0FBR0QsT0FMVSxDQUFYO0FBTUEsYUFBTztBQUFBLGVBQU1pQixRQUFRLENBQUNNLG1CQUFULENBQTZCLFFBQTdCLEVBQXVDdEIsUUFBdkMsQ0FBTjtBQUFBLE9BQVA7QUFDRDtBQUNGLEdBVlEsRUFVTixDQUFDRixRQUFELEVBQVdGLGFBQVgsQ0FWTSxDQUFUOztBQVlBLE1BQU0yQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCNUIsYUFBUyxDQUFDRCxNQUFNLEtBQUssSUFBWCxJQUFtQixDQUFDQSxNQUFwQixHQUE2QixJQUE3QixHQUFvQ0ksUUFBUSxHQUFHLElBQUgsR0FBVSxLQUF2RCxDQUFUO0FBQ0QsR0FGRDs7QUFJQTBCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZL0IsTUFBWjtBQUVBLHNCQUNFO0FBQ0UsYUFBUyxZQUFLZ0MscUVBQUwsY0FDUDVCLFFBQVEsR0FBRzZCLDZFQUFILEdBQTBCLElBRDNCLHlNQURYO0FBQUEsNEJBS0U7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLFlBQUtDLDZEQUFMLFNBQWQ7QUFBQSwrQkFDRSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFDRSxpQkFBUyx3QkFFUGxDLE1BQU0sS0FBSyxJQUFYLEdBQ0lJLFFBQVEsR0FDTitCLGlFQURNLEdBRU4sSUFITixHQUlJbkMsTUFBTSxHQUNObUMsaUVBRE0sR0FFTkMsdUVBUkcscURBRFg7QUFBQSwrQkFhRSxxRUFBQyx1REFBRDtBQUFVLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJ4QyxrQkFBTSxFQUFFO0FBQXpCO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUF5QkU7QUFBSyxlQUFTLEVBQUMsdUVBQWY7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxnQkFBWDtBQUE0QixnQkFBUSxNQUFwQztBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyw4QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZ0JBQVEsTUFBbkM7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsOEJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFPRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQXdCLGdCQUFRLE1BQWhDO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLDhCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRixlQW9DRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFPLEVBQUUsS0FEWDtBQUVFLFlBQU0sRUFBRUEsTUFGVjtBQUdFLFNBQUcsRUFBRUYsWUFIUDtBQUlFLGVBQVMsYUFKWDtBQUFBLDhCQU1FO0FBQ0UsaUJBQVMsWUFBSzJDLCtEQUFMLGNBQ1BsQyxRQUFRLElBQUlKLE1BQVosR0FBcUJ1Qyx1RUFBckIsR0FBc0MsSUFEL0Isb0JBRFg7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVYsVUFBVSxFQUFoQjtBQUFBLFNBSlg7QUFBQSwrQkFNRSxxRUFBQyx5REFBRDtBQUFZLGdCQUFNLEVBQUU3QjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBY0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsaUJBQVMsRUFBQyxpREFEWjtBQUVFLGFBQUssRUFBRTtBQUFFd0MsZ0JBQU0sRUFBRSxDQUFDO0FBQVgsU0FGVDtBQUdFLGVBQU8sRUFBRWhELFFBSFg7QUFBQSxnQ0FLRTtBQUFLLG1CQUFTLEVBQUMsdURBQWY7QUFBQSxrQ0FDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxrQkFBTSxFQUFFLENBRFY7QUFFRSxtQkFBTyxFQUFFRSxXQUZYO0FBR0UscUJBQVMsRUFBQyxpQkFIWjtBQUFBLG1DQUtFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxnQkFBWDtBQUE0QixzQkFBUSxNQUFwQztBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyw0RUFEWjtBQUVFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTW1DLFVBQVUsRUFBaEI7QUFBQSxpQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBZUUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0Usa0JBQU0sRUFBRSxDQURWO0FBRUUsbUJBQU8sRUFBRW5DLFdBRlg7QUFHRSxxQkFBUyxFQUFDLGlCQUhaO0FBQUEsbUNBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGVBQVg7QUFBMkIsc0JBQVEsTUFBbkM7QUFBQSxxQ0FDRTtBQUNFLHlCQUFTLEVBQUMsNEVBRFo7QUFFRSx1QkFBTyxFQUFFO0FBQUEseUJBQU1tQyxVQUFVLEVBQWhCO0FBQUEsaUJBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRixlQTZCRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxrQkFBTSxFQUFFLENBRFY7QUFFRSxtQkFBTyxFQUFFbkMsV0FGWDtBQUdFLHFCQUFTLEVBQUMsdUJBSFo7QUFBQSxtQ0FLRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsWUFBWDtBQUF3QixzQkFBUSxNQUFoQztBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyw0RUFEWjtBQUVFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTW1DLFVBQVUsRUFBaEI7QUFBQSxpQkFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFpREUscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsZ0JBQU0sRUFBRSxDQURWO0FBRUUsaUJBQU8sRUFBRW5DLFdBRlg7QUFHRSxtQkFBUyxFQUFDLGdDQUhaO0FBSUUsZUFBSyxFQUFFO0FBQUUrQyxrQkFBTSxFQUFFO0FBQVYsV0FKVDtBQUFBLGtDQU1FO0FBQUcscUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GLGVBT0U7QUFBRyxxQkFBUyxFQUFDLDBDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBUUU7QUFBRyxxQkFBUyxFQUFDLHdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0hELENBdkxEOztHQUFNbEQsTTtVQUNhRSwwRCxFQUNHQSwwRCxFQUVMSyx3RCxFQUdPSyx1RDs7O0tBUGxCWixNO0FBeUxTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgdXNlQ3ljbGUsIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9JY29ucy9Mb2dvJztcbmltcG9ydCBCdXJnZXJNZW51IGZyb20gJy4uL0ljb25zL0J1cmdlck1lbnUnO1xuaW1wb3J0IExvZ29OYW1lIGZyb20gJy4uL0ljb25zL0xvZ29OYW1lJztcblxuaW1wb3J0IHVzZVdpZHRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZVdpZHRoJztcbmltcG9ydCB1c2VIZWlnaHQgZnJvbSAnLi4vLi4vaG9va3MvdXNlSGVpZ2h0JztcblxuaW1wb3J0IHtcbiAgbG9nbyxcbiAgbG9nb05hbWUsXG4gIGxvZ29OYW1lQ2xvc2VkLFxuICBidXJnZXIsXG4gIG5hdkNvbnRhaW5lcixcbiAgbmF2Q29udGFpbmVyU2Nyb2xsZWQsXG4gIGJ1cmdlclNjcm9sbGVkLFxufSBmcm9tICcuLi8uLi9zdHlsZXMvaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgY29udHJvbExpc3QgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBoZWlnaHQgPSB1c2VIZWlnaHQoKTtcbiAgLy8gY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShudWxsLCB0cnVlKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB2aWV3cG9ydFdpZHRoID0gdXNlV2lkdGgoKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG5cbiAgaWYgKGlzT3Blbikge1xuICAgIGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgIGNsaXBQYXRoOiBgY2lyY2xlKCR7aGVpZ2h0ICogMiArIDIwMH1weCBhdCAxMDAlIDBweClgLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICBzdGlmZm5lc3M6IDIwLFxuICAgICAgICByZXN0RGVsdGE6IDIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnRyb2xMaXN0LnN0YXJ0KChpKSA9PiAoe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHk6IDEwLFxuICAgICAgdHJhbnNpdGlvbjogeyBkZWxheTogaSAqIDAuMyB9LFxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICBjb250cm9sc1xuICAgICAgLnN0YXJ0KHtcbiAgICAgICAgY2xpcFBhdGg6ICdjaXJjbGUoMTVweCBhdCAxMDAlIC0xNXB4KScsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgICAgICAgIGRhbXBpbmc6IDQwLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29udHJvbHMuc3RhcnQoe1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYwMCcsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHNldElzT3BlbihudWxsKSk7XG5cbiAgICBjb250cm9sTGlzdC5zdGFydCgoaSkgPT4gKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB5OiAwLFxuICAgICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH0sXG4gICAgfSkpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmlld3BvcnRXaWR0aCA+IDApIHtcbiAgICAgIGxpc3RlbmVyID0gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsZWRTaXplID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIHNjcm9sbGVkU2l6ZSA+PSAyMCAmJiB2aWV3cG9ydFdpZHRoIDwgMTAyNFxuICAgICAgICAgID8gc2V0U2Nyb2xsZWQodHJ1ZSlcbiAgICAgICAgICA6IHNldFNjcm9sbGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sIFtzY3JvbGxlZCwgdmlld3BvcnRXaWR0aF0pO1xuXG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGlzT3BlbiA9PT0gbnVsbCB8fCAhaXNPcGVuID8gdHJ1ZSA6IHNjcm9sbGVkID8gbnVsbCA6IGZhbHNlKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhpc09wZW4pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtuYXZDb250YWluZXJ9ICR7XG4gICAgICAgIHNjcm9sbGVkID8gbmF2Q29udGFpbmVyU2Nyb2xsZWQgOiBudWxsXG4gICAgICB9IGZpeGVkIHRvcC0wIHctc2NyZWVuIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC04IHB5LTIgbGc6YmctdHJhbnNwYXJlbnQgbGc6c2hhZG93LW5vbmUgbGc6ZmxleCBsZzpjb250YWluZXIgbGc6YWJzb2x1dGUgbGc6bWF4LXctZnVsbCBsZzpqdXN0aWZ5LWFyb3VuZCBsZzpoLTI0IGxnOm10LTQgbGc6cHgtMTIgeGw6cHgtMGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGFsaWduLW1pZGRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bG9nb30gdy0zYH0+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAke1xuICAgICAgICAgICAgaXNPcGVuID09PSBudWxsXG4gICAgICAgICAgICAgID8gc2Nyb2xsZWRcbiAgICAgICAgICAgICAgICA/IGxvZ29OYW1lXG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIDogaXNPcGVuXG4gICAgICAgICAgICAgID8gbG9nb05hbWVcbiAgICAgICAgICAgICAgOiBsb2dvTmFtZUNsb3NlZFxuICAgICAgICAgIH1cbiAgICAgICAgICAgZmxleCBhbGlnbi1taWRkbGUgdy0xMiBtbC0xIGxnOnctMTZgfVxuICAgICAgICA+XG4gICAgICAgICAgPExvZ29OYW1lIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4IHRleHQtd2hpdGUgb3BhY2l0eS03MCB0ZXh0LTI0IG1pbi13LTI5IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8TGluayBocmVmPVwiI2NvbW8tZnVuY2lvbmFcIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwXCI+Q8OzbW8gZnVuY2lvbmE8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNwb3ItcXVlLWxvbG9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGhvdmVyOm9wYWNpdHktMTAwXCI+UG9yIHF1w6kgTG9sbzwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiI3NlcnZpY2lvc1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9wYWNpdHktNTAgaG92ZXI6b3BhY2l0eS0xMDBcIj5TZXJ2aWNpb3M8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPG1vdGlvbi5uYXZcbiAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgIGN1c3RvbT17aGVpZ2h0fVxuICAgICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtgbGc6aGlkZGVuYH1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YnVyZ2VyfSAke1xuICAgICAgICAgICAgc2Nyb2xsZWQgfHwgaXNPcGVuID8gYnVyZ2VyU2Nyb2xsZWQgOiBudWxsXG4gICAgICAgICAgfSB6LTUwIGxnOmhpZGRlbmB9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlT3BlbigpfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1cmdlck1lbnUgaXNPcGVuPXtpc09wZW59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgdy1mdWxsIGgtc2NyZWVuXCJcbiAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IC05OTkgfX1cbiAgICAgICAgICBhbmltYXRlPXtjb250cm9sc31cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC05MCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGN1c3RvbT17MH1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbExpc3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIG9wYWNpdHktMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjY29tby1mdW5jaW9uYVwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZSB0ZXh0LTMyIG1kOnRleHQtNDAgZm9udC1tb250c2VycmF0IGZvbnQtYm9sZCBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ8OzbW8gZnVuY2lvbmFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGN1c3RvbT17MX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbExpc3R9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIG9wYWNpdHktMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjcG9yLXF1ZS1sb2xvXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIHRleHQtMzIgbWQ6dGV4dC00MCBmb250LW1vbnRzZXJyYXQgZm9udC1ib2xkIGhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU9wZW4oKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQb3IgcXXDqSBMb2xvXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBjdXN0b209ezJ9XG4gICAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xMaXN0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCBvcGFjaXR5LTAgbWItMTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI3NlcnZpY2lvc1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZSB0ZXh0LTMyIG1kOnRleHQtNDAgZm9udC1tb250c2VycmF0IGZvbnQtYm9sZCBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVPcGVuKCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2VydmljaW9zXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGN1c3RvbT17M31cbiAgICAgICAgICAgIGFuaW1hdGU9e2NvbnRyb2xMaXN0fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6aGlkZGVuIHRleHQtY2VudGVyIHJlbGF0aXZlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJvdHRvbTogJzglJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlXCI+RXNwYcOxb2w8L2E+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZSBvcGFjaXR5LTUwIGlubGluZS1ibG9jayBteC0xXCI+IOKAoiA8L3A+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZSBvcGFjaXR5LTUwXCI+Q2F0YWzDoDwvYT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLm5hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

})