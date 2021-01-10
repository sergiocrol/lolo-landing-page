module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./styles/tailwind.css
var tailwind = __webpack_require__("Rpix");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./components/Icons/Logo.js




function Logo() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "37",
    height: "36",
    fill: "none",
    viewBox: "0 0 37 36",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fill: "#3E3E64",
      d: "M16.093 2.108a3.046 3.046 0 014.27 0L34.32 15.892a2.955 2.955 0 010 4.216L20.362 33.892a3.046 3.046 0 01-4.27 0L2.135 20.108a2.955 2.955 0 010-4.216L16.093 2.108z"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      filter: "url(#filter56_i)",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
        cx: "18.342",
        cy: "18.113",
        fill: "#E5E5E5",
        rx: "7.105",
        ry: "7.017"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ellipse", {
        cx: "18.203",
        cy: "18.25",
        fill: "#515151",
        rx: "3.622",
        ry: "3.577"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("g", {
      filter: "url(#filter57_d)",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        fill: "#E5858F",
        d: "M15.768 6.852h4.794v22.52h-4.794V6.852z"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("defs", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("filter", {
        id: "filter56_i",
        width: "14.211",
        height: "18.033",
        x: "11.236",
        y: "11.096",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feBlend", {
          in: "SourceGraphic",
          in2: "BackgroundImageFix",
          result: "shape"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feOffset", {
          dy: "4"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feGaussianBlur", {
          stdDeviation: "2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feComposite", {
          in2: "hardAlpha",
          k2: "-1",
          k3: "1",
          operator: "arithmetic"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feBlend", {
          in2: "shape",
          result: "effect1_innerShadow"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("filter", {
        id: "filter57_d",
        width: "8.795",
        height: "26.521",
        x: "13.768",
        y: "6.852",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feColorMatrix", {
          in: "SourceAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feOffset", {
          dy: "2"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feGaussianBlur", {
          stdDeviation: "1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow",
          result: "shape"
        })]
      })]
    })]
  });
}

/* harmony default export */ var Icons_Logo = (Logo);
// CONCATENATED MODULE: ./components/Icons/BurgerMenu.js





function BurgerMenu({
  isOpen
}) {
  const {
    formatMessage: f
  } = Object(external_react_intl_["useIntl"])();
  const variantsRight = {
    open: {
      pathLength: [1, 0],
      strokeOpacity: [1, 1],
      transition: {
        duration: 0.2
      }
    },
    closed: {
      pathLength: [0, 1],
      strokeOpacity: [1, 1],
      transition: {
        duration: 0.2
      }
    }
  };
  const variantsLeft = {
    open: {
      pathLength: [1, 0],
      strokeOpacity: [1, 0],
      transition: {
        duration: 0.2
      }
    },
    closed: {
      pathLength: [0, 1],
      strokeOpacity: [0, 1],
      transition: {
        duration: 0.2
      }
    }
  };
  const variantsTitle = {
    open: {
      opacity: [0, 1],
      x: [-10, 0],
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    },
    closed: {
      opacity: [1, 0],
      x: [0, -10],
      transition: {
        duration: 0.1
      }
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "17",
      fill: "none",
      viewBox: "0 0 24 17",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].path, {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeOpacity: "0.64",
        strokeWidth: "3",
        d: "M22.5 1.5L1.5 1.5",
        animate: isOpen ? 'open' : 'closed',
        variants: variantsRight,
        initial: {
          pathLength: 1,
          strokeOpacity: 0.64
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].path, {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeOpacity: "0.64",
        strokeWidth: "3",
        d: "M1.5 8.5L14.5 8.5",
        animate: isOpen ? 'open' : 'closed',
        variants: variantsLeft,
        initial: {
          pathLength: 1
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].path, {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeOpacity: "0.64",
        strokeWidth: "3",
        d: "M22.5 15.5L9.499 15.5",
        animate: isOpen ? 'open' : 'closed',
        variants: variantsRight,
        initial: {
          pathLength: 1
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].path, {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeOpacity: "0.64",
        strokeWidth: "3",
        d: "M22.5 8.5L19.5 8.5",
        animate: isOpen ? 'open' : 'closed',
        variants: variantsRight,
        initial: {
          pathLength: 1
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].path, {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeOpacity: "0.64",
        strokeWidth: "3",
        d: "M1.5 15.5L4.5 15.5",
        animate: isOpen ? 'open' : 'closed',
        variants: variantsLeft,
        initial: {
          pathLength: 1
        }
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
      style: {
        opacity: 0,
        position: 'absolute',
        top: -10,
        left: -45,
        fontSize: 22,
        color: 'darkgray'
      },
      animate: isOpen ? 'open' : 'closed',
      variants: variantsTitle,
      initial: {
        opacity: 0
      },
      children: f({
        id: 'navClose'
      })
    })]
  });
}

/* harmony default export */ var Icons_BurgerMenu = (BurgerMenu);
// CONCATENATED MODULE: ./components/Icons/LogoName.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function LogoName(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", _objectSpread(_objectSpread({
    width: 37,
    height: 16,
    viewBox: "0 0 37 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("g", {
      id: "Vector",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M3.3965 15.952C2.74955 15.952 2.20552 15.8561 1.76442 15.6641C1.33802 15.4574 0.992484 15.1696 0.727821 14.8005C0.463159 14.4314 0.272014 13.9959 0.154386 13.4939C0.0514622 12.9772 0 12.4088 0 11.7887V1.19584C0 0.686233 0.411435 0.273117 0.918967 0.273117H2.87453C3.38206 0.273117 3.79349 0.686234 3.79349 1.19584V11.9216C3.79349 12.3054 3.85966 12.5638 3.99199 12.6967C4.13903 12.8295 4.27871 12.896 4.41104 12.896C4.48456 12.896 4.54337 12.896 4.58748 12.896C4.70573 12.896 4.8249 12.9584 4.84344 13.0756L5.13694 14.9323C5.20292 15.3496 4.97636 15.7608 4.56419 15.8461C4.53567 15.852 4.50667 15.8578 4.4772 15.8634C4.18314 15.9225 3.8229 15.952 3.3965 15.952Z",
        fill: "white",
        fillOpacity: 0.7
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M22.8626 15.6789C22.2157 15.6789 21.6716 15.5829 21.2305 15.391C20.8041 15.1843 20.4586 14.8964 20.1939 14.5273C19.9293 14.1583 19.7381 13.7227 19.6205 13.2208C19.5176 12.704 19.4661 12.1357 19.4661 11.5156V0.922722C19.4661 0.413116 19.8776 0 20.3851 0H22.3406C22.8482 0 23.2596 0.413117 23.2596 0.922723V11.6485C23.2596 12.0323 23.3258 12.2907 23.4581 12.4235C23.6051 12.5564 23.7448 12.6228 23.8772 12.6228C23.9507 12.6228 24.0095 12.6228 24.0536 12.6228C24.1718 12.6228 24.291 12.6852 24.3096 12.8025L24.6031 14.6592C24.669 15.0765 24.4425 15.4877 24.0303 15.573C24.0018 15.5789 23.9728 15.5847 23.9433 15.5903C23.6493 15.6494 23.289 15.6789 22.8626 15.6789Z",
        fill: "white",
        fillOpacity: 0.7
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M12.1345 16C10.9337 16 9.91675 15.7601 9.08355 15.2803C8.25036 14.7882 7.61933 14.1238 7.19048 13.2872C6.77388 12.4506 6.56559 11.5094 6.56559 10.4637C6.56559 9.43021 6.77388 8.49519 7.19048 7.65859C7.61933 6.82198 8.25036 6.16377 9.08355 5.68396C9.91675 5.19184 10.9337 4.94578 12.1345 4.94578C13.3231 4.94578 14.3339 5.19184 15.1671 5.68396C16.0003 6.16377 16.6252 6.82198 17.0418 7.65859C17.4584 8.49519 17.6667 9.43021 17.6667 10.4637C17.6667 11.5094 17.4584 12.4506 17.0418 13.2872C16.6252 14.1238 16.0003 14.7882 15.1671 15.2803C14.3339 15.7601 13.3231 16 12.1345 16ZM12.1345 13.2687C12.8574 13.2687 13.4027 13.0288 13.7703 12.549C14.1501 12.0692 14.34 11.3741 14.34 10.4637C14.34 9.56555 14.1501 8.87658 13.7703 8.39676C13.4027 7.91695 12.8574 7.67704 12.1345 7.67704C11.3994 7.67704 10.8418 7.91695 10.462 8.39676C10.0822 8.87658 9.89224 9.56555 9.89224 10.4637C9.89224 11.3741 10.0822 12.0692 10.462 12.549C10.8418 13.0288 11.3994 13.2687 12.1345 13.2687Z",
        fill: "white",
        fillOpacity: 0.7
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
        d: "M31.4678 15.6678C30.267 15.6678 29.25 15.4279 28.4169 14.9481C27.5837 14.456 26.9526 13.7916 26.5238 12.955C26.1072 12.1184 25.8989 11.1772 25.8989 10.1315C25.8989 9.09805 26.1072 8.16302 26.5238 7.32642C26.9526 6.48982 27.5837 5.83161 28.4169 5.35179C29.25 4.85967 30.267 4.61361 31.4678 4.61361C32.6564 4.61361 33.6672 4.85967 34.5004 5.35179C35.3336 5.83161 35.9585 6.48982 36.3751 7.32642C36.7917 8.16302 37 9.09805 37 10.1315C37 11.1772 36.7917 12.1184 36.3751 12.955C35.9585 13.7916 35.3336 14.456 34.5004 14.9481C33.6672 15.4279 32.6564 15.6678 31.4678 15.6678ZM31.4678 12.9366C32.1907 12.9366 32.736 12.6967 33.1036 12.2169C33.4834 11.737 33.6733 11.0419 33.6733 10.1315C33.6733 9.23338 33.4834 8.54441 33.1036 8.0646C32.736 7.58478 32.1907 7.34487 31.4678 7.34487C30.7326 7.34487 30.1751 7.58478 29.7953 8.0646C29.4155 8.54441 29.2255 9.23338 29.2255 10.1315C29.2255 11.0419 29.4155 11.737 29.7953 12.2169C30.1751 12.6967 30.7326 12.9366 31.4678 12.9366Z",
        fill: "white",
        fillOpacity: 0.7
      })]
    })
  }));
}

/* harmony default export */ var Icons_LogoName = (LogoName);
// CONCATENATED MODULE: ./components/Icons/Arrow.js



function Arrow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Arrow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Arrow_ownKeys(Object(source), true).forEach(function (key) { Arrow_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Arrow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Arrow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Arrow(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", Arrow_objectSpread(Arrow_objectSpread({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 12c0-.552.425-1 .95-1h17.1c.525 0 .95.448.95 1s-.425 1-.95 1H3.95c-.525 0-.95-.448-.95-1z",
      fill: "#3675EC"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L19.586 12l-5.293-5.293a1 1 0 010-1.414z",
      fill: "#F44E77"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("defs", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("linearGradient", {
        id: "prefix__paint0_linear",
        x1: 18,
        y1: 5,
        x2: 18,
        y2: 19,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
          stopColor: "#F44E77"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("stop", {
          offset: 1,
          stopColor: "#F44E77"
        })]
      })
    })]
  }));
}

/* harmony default export */ var Icons_Arrow = (Arrow);
// EXTERNAL MODULE: ./hooks/useWidth.js
var useWidth = __webpack_require__("CAj4");

// EXTERNAL MODULE: ./hooks/useHeight.js
var useHeight = __webpack_require__("dUCX");

// EXTERNAL MODULE: ./styles/index.module.css
var index_module = __webpack_require__("K/ea");

// EXTERNAL MODULE: ./styles/components.module.css
var components_module = __webpack_require__("L3iW");

// CONCATENATED MODULE: ./components/Header/index.js















const Header = () => {
  const {
    formatMessage: f,
    locale
  } = Object(external_react_intl_["useIntl"])();
  const controls = Object(external_framer_motion_["useAnimation"])();
  const controlList = Object(external_framer_motion_["useAnimation"])();
  const containerRef = Object(external_react_["useRef"])(null);
  const height = Object(useHeight["a" /* default */])(); // const [isOpen, toggleOpen] = useCycle(null, true);

  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(null);
  const viewportWidth = Object(useWidth["a" /* default */])();
  const {
    0: scrolled,
    1: setScrolled
  } = Object(external_react_["useState"])(false);
  let listener = null;

  if (isOpen) {
    controls.start({
      clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
      backgroundColor: '#FFFFFF',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    });
    controlList.start(i => ({
      opacity: 1,
      y: 10,
      transition: {
        delay: i * 0.3
      }
    }));
  } else {
    controls.start({
      clipPath: 'circle(15px at 100% -15px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }).then(() => {
      controls.start({
        backgroundColor: '#FFFFFF00'
      });
    }).then(() => setIsOpen(null));
    controlList.start(i => ({
      opacity: 0,
      y: 0,
      transition: {
        duration: 0.2
      }
    }));
  }

  Object(external_react_["useEffect"])(() => {
    if (viewportWidth > 0) {
      listener = document.addEventListener('scroll', e => {
        const scrolledSize = document.scrollingElement.scrollTop;
        scrolledSize >= 20 && viewportWidth < 1024 ? setScrolled(true) : setScrolled(false);
      });
      return () => document.removeEventListener('scroll', listener);
    }
  }, [scrolled, viewportWidth]);

  const toggleOpen = () => {
    setIsOpen(isOpen === null || !isOpen ? true : scrolled ? null : false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${index_module["navContainer"]} ${scrolled ? index_module["navContainerScrolled"] : null} fixed top-0 w-screen flex justify-between items-center px-8 py-2 lg:bg-transparent lg:shadow-none lg:flex lg:container lg:absolute lg:max-w-full lg:justify-around lg:h-24 lg:mt-4 lg:px-12 xl:px-0`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex align-middle",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${index_module["logo"]} w-3`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icons_Logo, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `
          ${isOpen === null ? scrolled ? index_module["logoName"] : null : isOpen ? index_module["logoName"] : index_module["logoNameClosed"]}
           flex align-middle w-12 ml-1 lg:w-16`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icons_LogoName, {
          style: {
            width: '100%',
            height: 'auto'
          }
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "#como-funciona",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "opacity-50 hover:opacity-100",
          children: f({
            id: 'navLinkOne'
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "#por-que-lolo",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "opacity-50 hover:opacity-100",
          children: f({
            id: 'navLinkTwo'
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "#servicios",
        passHref: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "opacity-50 hover:opacity-100",
          children: f({
            id: 'navLinkThree'
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "hidden lg:flex",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `flex items-center pr-4`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          locale: "es",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: `${locale === 'es' ? 'text-white' : 'text-transparentWhite'} cursor-pointer hover:underline`,
            children: "Esp"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "text-transparentWhite mx-1 inline-block",
          children: " \u2022 "
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/",
          locale: "ca",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            className: `${locale === 'ca' ? 'text-white' : 'text-transparentWhite'} cursor-pointer hover:underline`,
            children: "Cat"
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `${components_module["btn"]} ${components_module["btnSm"]} ${index_module["btnLogin"]} text-17 inline-block z-10 cursor-pointer justify-center`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "mr-2",
          children: f({
            id: 'headerLogin'
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icons_Arrow, {
          className: `${index_module["loginArrow"]} mt-1`
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].nav, {
      initial: false,
      custom: height,
      ref: containerRef,
      className: `lg:hidden`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `${index_module["burger"]} 
          ${isOpen === null ? scrolled ? index_module["burgerScrolled"] : null : index_module["burgerScrolled"]}
           z-50 lg:hidden`,
        onClick: () => toggleOpen(),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icons_BurgerMenu, {
          isOpen: isOpen
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
        className: "absolute top-0 right-0 bottom-0 w-full h-screen",
        style: {
          zIndex: -999
        },
        animate: controls,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "flex flex-col w-full h-80 items-center justify-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
            custom: 0,
            animate: controlList,
            className: "mt-10 opacity-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "#como-funciona",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100",
                onClick: () => toggleOpen(),
                children: f({
                  id: 'navLinkOne'
                })
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
            custom: 1,
            animate: controlList,
            className: "mt-10 opacity-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "#por-que-lolo",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100",
                onClick: () => toggleOpen(),
                children: f({
                  id: 'navLinkTwo'
                })
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
            custom: 2,
            animate: controlList,
            className: "mt-10 opacity-0 mb-10",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "#servicios",
              passHref: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                className: "text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100",
                onClick: () => toggleOpen(),
                children: f({
                  id: 'navLinkThree'
                })
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
          custom: 3,
          animate: controlList,
          className: "lg:hidden text-center relative",
          style: {
            bottom: '8%'
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "justify-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: `${index_module["btnLoginMobile"]} flex z-10 cursor-pointer justify-center max-w-8 my-0 mx-auto`,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "mr-2 font-montserrat text-orange text-24",
                children: f({
                  id: 'headerLogin'
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icons_Arrow, {
                className: index_module["loginArrow"]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "w-8 text-gray opacity-70",
              children: "______________"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "mt-4 w-auto",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/",
                locale: "es",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: `text-orange ${locale === 'es' ? 'opacity-100' : 'opacity-50'}`,
                  children: "Espa\xF1ol"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "text-orange opacity-50 inline-block mx-1",
                children: " \u2022 "
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/",
                locale: "ca",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: `text-orange ${locale === 'ca' ? 'opacity-100' : 'opacity-50'}`,
                  children: "Catal\xE0"
                })
              })]
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./public/static/locales/es/common.json
var common = __webpack_require__("AT1h");

// EXTERNAL MODULE: ./public/static/locales/ca/common.json
var ca_common = __webpack_require__("y/Wd");

// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const messages = {
  es: common,
  ca: ca_common
};

function MyApp({
  Component,
  pageProps
}) {
  const {
    locale
  } = Object(router_["useRouter"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intl_["IntlProvider"], {
    locale: locale,
    defaultLocale: "es",
    messages: messages[locale],
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `${index_module["html"]} relative overflow-hidden`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "description",
          content: "Encuentra con Lolo a quien cuide de tus mayores tal y como t\xFA lo har\xEDas"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "Lolo"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "AT1h":
/***/ (function(module) {

module.exports = JSON.parse("{\"navLinkHome\":\"Inicio\",\"navLinkOne\":\"Cómo funciona\",\"navLinkTwo\":\"Por qué Lolo\",\"navLinkThree\":\"Servicios\",\"navClose\":\"cerrar\",\"headerLogin\":\"Acceso\",\"heroTitle\":\"Encuentra a quién cuide de tus mayores tal y como tú lo harías\",\"heroSubtitle\":\"Lolo es la plataforma que te ayuda a conectar con profesionales del cuidado de personas mayores.\",\"heroCTA\":\"Encuentra a tu profesional\",\"firstSectionTitleFirst\":\"Encontrar a alguien de\",\"firstSectionTitleSecond\":\"es así de sencillo:\",\"firstSectionTitleKeyWord\":\"confianza\",\"firstSectionFirstStepTitle\":\"Configura tu servicio\",\"firstSectionFirstStepSubtitle\":\"Elige la fecha, hora, frecuencia y características del servicio.\",\"firstSectionSecondStepTitle\":\"Selecciona a tu profesional\",\"firstSectionSecondStepSubtitle\":\"Somos la única plataforma en la que tú seleccionas primero a quién quieres contratar.\",\"firstSectionThirdStepTitle\":\"Paga de forma segura\",\"firstSectionThirdStepSubtitle\":\"Olvídate del efectivo y realiza el pago de forma segura mediante nuestra plataforma.\",\"firstSectionCTA\":\"Configura tu servicio\",\"middleBannerTitle\":\"Encuentra a alguien de confianza, que entienda tus necesidades y con quien te lleves bien\",\"middleBannerSubtitle\":\"Nuestra tecnología te muestra aquellos perfiles que son más afines a lo que necesitas.\",\"secondSectionTitle\":\"¿Por qué\",\"secondSectionSubtitle\":\"Estos son los motivos por los que confiar en nosotros:\",\"secondSectionFirstCardTitle\":\"Calidad\",\"secondSectionFirstCardSubtitle\":\"Los perfiles de nuestros profesionales están verificados y se respaldan con las opiniones de otros usuarios.\",\"secondSectionSecondCardTitle\":\"Elección\",\"secondSectionSecondCardSubtitle\":\"Nuestra plataforma te ofrece opciones. Tú eliges.\",\"secondSectionThirdCardTitle\":\"Flexibilidad y rapidez\",\"secondSectionThirdCardSubtitle\":\"Configura tu servicio a medida, encuentra a tu profesional y reserva en cuestión de minutos.\",\"secondSectionFourthCardTitle\":\"Comunicación\",\"secondSectionFourthCardSubtitle\":\"Te proporcionamos la tecnología para poder gestionar la relación con tu cuidador. Y en el futuro, iremos más allá.\",\"thirdSectionTitle\":\"Conoce nuestros servicios\",\"thirdSectionSubtitle\":\"Tus seres queridos en las mejores manos\",\"thirdSectionSecondSubtitle\":\"Ayudamos a las personas mayores con sus tareas en el día a día\",\"thirdSectionFirstCardTitle\":\"Cuidado diurno\",\"thirdSectionFirstCardText\":\"Incluye, siempre que se desee o se necesite, ayuda en actividades rutinarias, cuidado personal, cocinar, impieza, acompañamiento, recados, actividades de desarrollo motriz y cognitivo.\",\"thirdSectionSecondCardTitle\":\"Cuidado nocturno\",\"thirdSectionSecondCardText\":\"Incluye, siempre que se desee o se necesite, ayuda en actividades rutinarias, cuidado personal, cocinar, impieza, acompañamiento, recados, actividades de desarrollo motriz y cognitivo.\",\"thirdSectionThirdCardTitle\":\"Cuidado 24 horas\",\"thirdSectionThirdCardText\":\"Incluye, siempre que se desee o se necesite, ayuda en actividades rutinarias, cuidado personal, cocinar, impieza, acompañamiento, recados, actividades de desarrollo motriz y cognitivo.\",\"thirdSectionFourthCardTitle\":\"Limpieza\",\"thirdSectionFourthCardText\":\"Elige el pack de limpieza completa o configura con los servicios que quieras, adaptándolo a tus necesidades.\",\"footerFirstSectionTitle\":\"Pruébanos sin compromiso\",\"footerFirstSectionSubtitle\":\"Estamos tan seguros de que te enamorarás de nuestro servicio que la primera vez que reserves te regalamos una hora gratis.\",\"footerFirstSectionCTA\":\"Encuentra a tu profesional\",\"footerSecondSectionTitle\":\"¿Quieres trabajar como cuidador?\",\"footerSecondSectionSubtitle\":\"Somos la plataforma que te pone en contacto con familias que buscan a alguien como tú. Regístrate, recibe ofertas y selecciona las que te interesen.\",\"footerSecondSectionCTA\":\"Regístrate como cuidador\"}");

/***/ }),

/***/ "CAj4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useWidth = () => {
  const {
    0: width,
    1: setWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleResize = () => setWidth(window.innerWidth);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

/* harmony default export */ __webpack_exports__["a"] = (useWidth);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K/ea":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"html": "styles_html__2ZkG9",
	"heroContainer": "styles_heroContainer__2dU9A",
	"bgWrap": "styles_bgWrap__20yFG",
	"heroImageContainer": "styles_heroImageContainer__Ve2TO",
	"heroImage": "styles_heroImage__3XqaR",
	"wave": "styles_wave__1cCIL",
	"heroText": "styles_heroText__16Pwq",
	"boxContainerFirstSection": "styles_boxContainerFirstSection__lr88o",
	"boxFirstSection": "styles_boxFirstSection__3Y3gi",
	"pattern": "styles_pattern__3fZZZ",
	"blockContainer": "styles_blockContainer__8LoLF",
	"titleText": "styles_titleText__LSpfu",
	"bodyText": "styles_bodyText__2xZ30",
	"rectangleShapeFirst": "styles_rectangleShapeFirst__1pYxc",
	"circleShapeFirst": "styles_circleShapeFirst__RdbvZ",
	"stickShapeFirst": "styles_stickShapeFirst__1EbHM",
	"middleBannerContainer": "styles_middleBannerContainer__3h701",
	"bgMiddle": "styles_bgMiddle__1Y2HQ",
	"mockupImage": "styles_mockupImage__2olaQ",
	"iconContainer": "styles_iconContainer__19HG_",
	"carouselContainer": "styles_carouselContainer__1vfcL",
	"dot": "styles_dot__1j-dl",
	"selectedDot": "styles_selectedDot__1D5_Z",
	"heartIcon": "styles_heartIcon__2yooq",
	"serviceImage": "styles_serviceImage__1DXKX",
	"serviceBox": "styles_serviceBox__3IcNo",
	"active": "styles_active__abdeQ",
	"limpiezaSphere": "styles_limpiezaSphere__3by0b",
	"allDaySphereDay": "styles_allDaySphereDay__1vvMv",
	"allDaySphereNight": "styles_allDaySphereNight__dF8pU",
	"daySphere": "styles_daySphere__sh1hv",
	"nightSphere": "styles_nightSphere__2LSsL",
	"fly": "styles_fly__2uWEJ",
	"fly2": "styles_fly2__3LJK5",
	"footerContainer": "styles_footerContainer__2ie4N",
	"bgFooter": "styles_bgFooter__3JljX",
	"boxFooter": "styles_boxFooter__NtuqA",
	"blockContainerFooter": "styles_blockContainerFooter__3g6DC",
	"footerNav": "styles_footerNav__2Xqc8",
	"logo": "styles_logo__3GMmw",
	"burger": "styles_burger__1tvDI",
	"navContainer": "styles_navContainer__1eEqE",
	"navContainerScrolled": "styles_navContainerScrolled__3qQbl",
	"logoName": "styles_logoName__VczRS",
	"logoNameClosed": "styles_logoNameClosed__3l04e",
	"burgerScrolled": "styles_burgerScrolled__3YMd2",
	"btnLogin": "styles_btnLogin__1R2B4",
	"loginArrow": "styles_loginArrow__1tD5L",
	"arrowAnimation": "styles_arrowAnimation__3yAS0",
	"btnLoginMobile": "styles_btnLoginMobile__ezzW4",
	"circleShapeMiddle": "styles_circleShapeMiddle__IbdHR",
	"rectangleShapeMiddle": "styles_rectangleShapeMiddle__2ZOaj",
	"stickShapeMiddle": "styles_stickShapeMiddle__2V0Pl",
	"rectangleShapeThird": "styles_rectangleShapeThird__1z1W0",
	"circleShapeThird": "styles_circleShapeThird__2dyGs",
	"stickShapeThird": "styles_stickShapeThird__2uc_1",
	"circleShapeHero": "styles_circleShapeHero__1j1bD",
	"rectangleShapeHero": "styles_rectangleShapeHero__14ZNq",
	"stickShapeHero": "styles_stickShapeHero__3KzE-",
	"rectangleRedShapeHero": "styles_rectangleRedShapeHero__38E81"
};


/***/ }),

/***/ "L3iW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"btn": "components_btn__2rjbc",
	"btnSm": "components_btnSm__QgJQp",
	"box": "components_box__2LX9_"
};


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Rpix":
/***/ (function(module, exports) {



/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dUCX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useHeight = () => {
  const {
    0: height,
    1: setHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const handleResize = () => setHeight(window.innerHeight);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return height;
};

/* harmony default export */ __webpack_exports__["a"] = (useHeight);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    return locale && locale !== defaultLocale && !path.startsWith('/' + locale + '/') && path !== '/' + locale ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    return locale && (path.startsWith('/' + locale + '/') || path === '/' + locale) ? path.substr(locale.length + 1) || '/' : path;
  }

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (true) {
      this.locale = options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const {
        normalizeLocalePath
      } = __webpack_require__("3wub");

      const localePathResult = normalizeLocalePath(as, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        url = localePathResult.pathname;
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      const normalizeLocalePath = __webpack_require__("3wub").normalizeLocalePath;

      if (options.locale === false) {
        pathname = normalizeLocalePath(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = normalizeLocalePath(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || options.locale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y/Wd":
/***/ (function(module) {

module.exports = JSON.parse("{\"navLinkHome\":\"Inici\",\"navLinkOne\":\"Com funciona\",\"navLinkTwo\":\"Per què Lolo\",\"navLinkThree\":\"Serveis\",\"navClose\":\"tancar\",\"headerLogin\":\"Accés\",\"heroTitle\":\"Troba a qui tingui cura dels teus majors tal com tu ho faries\",\"heroSubtitle\":\"Lolo és la plataforma que t'ajuda a connectar amb professionals de la cura de persones grans.\",\"heroCTA\":\"Troba al teu professional\",\"firstSectionTitleFirst\":\"Trobar a algú de\",\"firstSectionTitleSecond\":\"és així de senzill:\",\"firstSectionTitleKeyWord\":\"confiança\",\"firstSectionFirstStepTitle\":\"Configura el teu servei\",\"firstSectionFirstStepSubtitle\":\"Tria la data, hora, freqüència i característiques de l'servei.\",\"firstSectionSecondStepTitle\":\"Selecciona el teu professional\",\"firstSectionSecondStepSubtitle\":\"Som l'única plataforma en la qual tu selecciones primer a qui vols contractar.\",\"firstSectionThirdStepTitle\":\"Paga de manera segura\",\"firstSectionThirdStepSubtitle\":\"Oblida't de l'efectiu i realitza el pagament de forma segura mitjançant la nostra plataforma.\",\"firstSectionCTA\":\"Configura el teu servei\",\"middleBannerTitle\":\"Troba a algú de confiança, que entengui les teves necessitats i amb qui et portis bé\",\"middleBannerSubtitle\":\"La nostra tecnologia et mostra aquells perfils que són més afins al que necessites.\",\"secondSectionTitle\":\"Per què\",\"secondSectionSubtitle\":\"Aquests són els motius pels quals confiar en nosaltres:\",\"secondSectionFirstCardTitle\":\"Qualitat\",\"secondSectionFirstCardSubtitle\":\"Els perfils dels nostres professionals estan verificats i es recolzen amb les opinions d'altres usuaris.\",\"secondSectionSecondCardTitle\":\"Elecció\",\"secondSectionSecondCardSubtitle\":\"La nostra plataforma t'ofereix opcions. Tu tries.\",\"secondSectionThirdCardTitle\":\"Flexibilitat i rapidesa\",\"secondSectionThirdCardSubtitle\":\"Configura el teu servei a mida, troba al teu professional i reserva en qüestió de minuts.\",\"secondSectionFourthCardTitle\":\"Comunicació\",\"secondSectionFourthCardSubtitle\":\"Et proporcionem la tecnologia per poder gestionar la relació amb el teu cuidador. I en el futur, anirem més enllà.\",\"thirdSectionTitle\":\"Coneix els nostres serveis\",\"thirdSectionSubtitle\":\"Els teus éssers estimats en les millors mans\",\"thirdSectionSecondSubtitle\":\"Ajudem a la gent gran amb les seves tasques en el dia a dia\",\"thirdSectionFirstCardTitle\":\"Cura diürn\",\"thirdSectionFirstCardText\":\"Inclou, sempre que es vulgui o es necessiti, ajuda en activitats rutinàries, cura personal, cuinar, impieza, acompanyament, encàrrecs, activitats de desenvolupament motriu i cognitiu.\",\"thirdSectionSecondCardTitle\":\"Cura nocturn\",\"thirdSectionSecondCardText\":\"Inclou, sempre que es vulgui o es necessiti, ajuda en activitats rutinàries, cura personal, cuinar, impieza, acompanyament, encàrrecs, activitats de desenvolupament motriu i cognitiu.\",\"thirdSectionThirdCardTitle\":\"Cura 24 hores\",\"thirdSectionThirdCardText\":\"Inclou, sempre que es vulgui o es necessiti, ajuda en activitats rutinàries, cura personal, cuinar, impieza, acompanyament, encàrrecs, activitats de desenvolupament motriu i cognitiu.\",\"thirdSectionFourthCardTitle\":\"Neteja\",\"thirdSectionFourthCardText\":\"Tria el pack de neteja completa o configura amb els serveis que vulguis, adaptant-lo a les teves necessitats.\",\"footerFirstSectionTitle\":\"Prova'ns sense compromís\",\"footerFirstSectionSubtitle\":\"Estem tan segurs que t'enamoraràs del nostre servei que la primera vegada que reservis et regalem una hora gratis.\",\"footerFirstSectionCTA\":\"Troba al teu professional\",\"footerSecondSectionTitle\":\"Vols treballar com a cuidador?\",\"footerSecondSectionSubtitle\":\"Som la plataforma que et posa en contacte amb famílies que busquen algú com tu. Registra't, rep ofertes i selecciona les que t'interessin.\",\"footerSecondSectionCTA\":\"Registra't com a cuidador\"}");

/***/ })

/******/ });