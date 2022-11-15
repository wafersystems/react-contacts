'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('antd/es/spin/style');
var _Spin = _interopDefault(require('antd/es/spin'));
require('antd/es/col/style');
var _Col = _interopDefault(require('antd/es/col'));
require('antd/es/form/style');
var _Form = _interopDefault(require('antd/es/form'));
require('antd/es/row/style');
var _Row = _interopDefault(require('antd/es/row'));
require('antd/es/tag/style');
var _Tag = _interopDefault(require('antd/es/tag'));
require('antd/es/message/style');
var _message = _interopDefault(require('antd/es/message'));
require('antd/es/input/style');
var _Input = _interopDefault(require('antd/es/input'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
require('antd/es/pagination/style');
var _Pagination = _interopDefault(require('antd/es/pagination'));
require('antd/es/card/style');
var _Card = _interopDefault(require('antd/es/card'));
require('antd/es/list/style');
var _List = _interopDefault(require('antd/es/list'));
require('antd/es/checkbox/style');
var _Checkbox = _interopDefault(require('antd/es/checkbox'));
require('antd/es/radio/style');
var _Radio = _interopDefault(require('antd/es/radio'));
require('antd/es/tree/style');
var _Tree = _interopDefault(require('antd/es/tree'));
var reactDnd = require('react-dnd');
var reactDndHtml5Backend = require('react-dnd-html5-backend');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var IconContext = /*#__PURE__*/React.createContext({});

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
/* eslint-enable */

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

var MARK_KEY = "rc-util-key";

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;

    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (option.prepend && container.prepend) {
    // Use `prepend` first
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }

  var existNode = Array.from(containerCache.get(container).children).find(function (node) {
    return node.tagName === 'STYLE' && node[MARK_KEY] === key;
  });

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;

      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}

function warning$1(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate$1(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2$1({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2$1(_objectSpread2$1({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = React.useContext(IconContext),
      csp = _useContext.csp;

  React.useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};

var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2$1({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties(props, _excluded);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2$1(_objectSpread2$1({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate$1(target.icon, "svg-".concat(target.name), _objectSpread2$1({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties(props, _excluded$1);

  var _React$useContext = React.useContext(IconContext),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames(prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty$1(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/React.createElement("span", _objectSpread2$1(_objectSpread2$1({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

var _excluded$2 = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
var Icon$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      Component = props.component,
      viewBox = props.viewBox,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      children = props.children,
      restProps = _objectWithoutProperties(props, _excluded$2);

  warning$1(Boolean(Component || children), 'Should have `component` prop or `children`.');
  useInsertStyles();

  var _React$useContext = React.useContext(IconContext),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames(prefixCls, className);
  var svgClassString = classnames(_defineProperty$1({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var innerSvgProps = _objectSpread2$1(_objectSpread2$1({}, svgBaseProps), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });

  if (!viewBox) {
    delete innerSvgProps.viewBox;
  } // component > children


  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/React.createElement(Component, _objectSpread2$1({}, innerSvgProps), children);
    }

    if (children) {
      warning$1(Boolean(viewBox) || React.Children.count(children) === 1 && /*#__PURE__*/React.isValidElement(children) && React.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/React.createElement("svg", _objectSpread2$1(_objectSpread2$1({}, innerSvgProps), {}, {
        viewBox: viewBox
      }), children);
    }

    return null;
  };

  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return /*#__PURE__*/React.createElement("span", _objectSpread2$1(_objectSpread2$1({
    role: "img"
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon$1.displayName = 'AntdIcon';

var _excluded$3 = ["type", "children"];
var customCache = new Set();

function isValidCustomScriptUrl(scriptUrl) {
  return Boolean(typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl));
}

function createScriptUrlElements(scriptUrls) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentScriptUrl = scriptUrls[index];

  if (isValidCustomScriptUrl(currentScriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);

    if (scriptUrls.length > index + 1) {
      script.onload = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };

      script.onerror = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }

    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}

function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
      _options$extraCommonP = options.extraCommonProps,
      extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;
  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */

  if (scriptUrl && typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function') {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }

  var Iconfont = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var type = props.type,
        children = props.children,
        restProps = _objectWithoutProperties(props, _excluded$3); // children > type


    var content = null;

    if (props.type) {
      content = /*#__PURE__*/React.createElement("use", {
        xlinkHref: "#".concat(type)
      });
    }

    if (children) {
      content = children;
    }

    return /*#__PURE__*/React.createElement(Icon$1, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, extraCommonProps), restProps), {}, {
      ref: ref
    }), content);
  });
  Iconfont.displayName = 'Iconfont';
  return Iconfont;
}

var IconProvider = IconContext.Provider;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".contacts_rightAlign__2DAXJ {\n  text-align: right;\n}\n.contacts_treeLeft__zvPEq {\n  padding-left: 0;\n}\n/* 定义滚动条轨道 */\n.contacts_card__9kiRW::-webkit-scrollbar-track {\n  background: #e9e9e9;\n}\n/* 定义滑块 */\n.contacts_card__9kiRW::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.45);\n  border-radius: 19px;\n}\n.contacts_card__9kiRW {\n  min-height: 347px;\n  max-height: 347px;\n  overflow-y: auto;\n}\n.contacts_card__9kiRW .ant-card-body {\n  padding: 16px 7px 7px 8px;\n}\n.contacts_card__9kiRW .ant-list-sm .ant-list-item {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.contacts_list__2oGRy {\n  width: max-content;\n  padding-right: 5px;\n}\n.contacts_listEmpty__YZiVJ {\n  padding-right: 5px;\n}\n.contacts_deptInfo__3e5E7 {\n  height: 21px;\n  font-weight: bold;\n  font-size: 15px;\n}\n.contacts_itemDiv__3FGhc {\n  width: 100%;\n  display: contents;\n}\n.contacts_itemDiv__3FGhc .contacts_checkbox__tJaOX {\n  float: left;\n  text-align: left;\n  width: 120px;\n}\n.contacts_itemDiv__3FGhc .contacts_checkbox__tJaOX span:nth-child(2) {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.contacts_itemDiv__3FGhc .contacts_deptName__29k1a {\n  float: right;\n  text-align: left;\n  width: 100px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.contacts_itemDiv__3FGhc .contacts_deptName_disabled__2Op9y {\n  float: right;\n  text-align: left;\n  width: 100px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.contacts_itemDiv__3FGhc:hover {\n  background: var(--list-item-hover-color);\n}\n.contacts_pagination__XYaLU {\n  width: 100%;\n  margin-top: 9px;\n}\n.contacts_pagination__XYaLU .contacts_checkbox__tJaOX {\n  float: left;\n  padding-left: 10px;\n}\n.contacts_pagination__XYaLU .contacts_pageNoe__1EStH {\n  float: right;\n}\n.contacts_label__VCr20 .ant-form-item-label {\n  line-height: 1;\n}\n.contacts_number__3CopY {\n  color: var(--react-contacts-number-color);\n}\n.contacts_resultDiv__2wcEb {\n  width: 100%;\n  min-height: 100px;\n  max-height: 123px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: var(--react-contacts-bg-color);\n  border: 1px solid var(--border-color);\n  border-radius: 6px;\n}\n.contacts_resultDiv__2wcEb .contacts_deptTag__3mANU {\n  height: 24px;\n  margin-top: 8px;\n  margin-left: 10px;\n  color: var(--react-contacts-dept-color);\n  background-color: var(--react-contacts-dept-backgroud-color);\n  border: 1px solid var(--react-contacts-dept-border-color);\n}\n.contacts_resultDiv__2wcEb .contacts_userTag__20MmI {\n  height: 24px;\n  margin-top: 8px;\n  margin-left: 10px;\n  color: var(--react-contacts-user-color);\n  background-color: var(--react-contacts-user-backgroud-color);\n  border: 1px solid var(--react-contacts-user-border-color);\n  border-radius: 4px;\n}\n.contacts_resultDiv__2wcEb .ant-form-item {\n  margin-bottom: 2px;\n}\n.contacts_userText__1-U5C {\n  cursor: pointer;\n}\n.contacts_textColor__1w1Zd {\n  color: #2ea498;\n  font-weight: 400;\n  background-color: #f8f8f8;\n}\n.contacts_userTextWrapper__3qNCL {\n  display: flex;\n  align-items: center;\n  margin: 4px 0 4px 23px;\n}\n";
var styles = {"rightAlign":"contacts_rightAlign__2DAXJ","treeLeft":"contacts_treeLeft__zvPEq","card":"contacts_card__9kiRW","list":"contacts_list__2oGRy","listEmpty":"contacts_listEmpty__YZiVJ","deptInfo":"contacts_deptInfo__3e5E7","itemDiv":"contacts_itemDiv__3FGhc","checkbox":"contacts_checkbox__tJaOX","deptName":"contacts_deptName__29k1a","deptName_disabled":"contacts_deptName_disabled__2Op9y","pagination":"contacts_pagination__XYaLU","pageNoe":"contacts_pageNoe__1EStH","label":"contacts_label__VCr20","number":"contacts_number__3CopY","resultDiv":"contacts_resultDiv__2wcEb","deptTag":"contacts_deptTag__3mANU","userTag":"contacts_userTag__20MmI","userText":"contacts_userText__1-U5C","textColor":"contacts_textColor__1w1Zd","userTextWrapper":"contacts_userTextWrapper__3qNCL"};
styleInject(css_248z);

var Search = _Input.Search;
var Right = (function (_ref) {
  var selectAllText = _ref.selectAllText,
      searchUserPlaceholder = _ref.searchUserPlaceholder,
      deptSearch = _ref.deptSearch,
      userData = _ref.userData,
      handleSearch = _ref.handleSearch,
      handleSearchUser = _ref.handleSearchUser,
      deptId = _ref.deptId,
      updateSelectUsers = _ref.updateSelectUsers,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      setOnSearch = _ref.setOnSearch,
      nameKey = _ref.nameKey,
      setNameKey = _ref.setNameKey,
      selectUser = _ref.selectUser,
      setSelectUser = _ref.setSelectUser,
      userNameKey = _ref.userNameKey,
      radio = _ref.radio,
      showLeft = _ref.showLeft,
      enNameKey = _ref.enNameKey,
      disableUsers = _ref.disableUsers,
      isSelectedOfMeeting = _ref.isSelectedOfMeeting;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      selectAll = _useState2[0],
      setSelectAll = _useState2[1]; // 当列表数据发生变化时，重新计算全选


  React.useEffect(function () {
    calculateSelectAll(selectUser);
  }, [userData]); // 当选中人数据发生变化，重新计算全选

  React.useEffect(function () {
    calculateSelectAll(selectUser);
  }, [selectUser]);
  /**
   * 姓名搜索为空时处理
   * @param e
   */

  var handleSearchChange = function handleSearchChange(e) {
    if (!e.target.value) {
      setOnSearch(false);
      setNameKey(null);
      handleSearch('');
    }
  };
  /**
   * 判断用户是否选择
   * @param data
   * @return {boolean}
   */


  var isUserCheck = function isUserCheck(data) {
    var result = selectUser.find(function (value) {
      return value.userId === data.userId;
    });
    return !!result;
  };
  /**
   * 点击用户列表的回调
   * @param e
   */


  var onUserCheck = function onUserCheck(e) {
    var _e$target = e.target,
        checked = _e$target.checked,
        data = _e$target.data;
    var tmp = [];
    var newSelectUser;

    if (checked) {
      tmp.push(data);
      newSelectUser = selectUser.concat(tmp);
    } else {
      var result = selectUser.filter(function (value) {
        return value.userId !== data.userId;
      });
      newSelectUser = result.concat(tmp);
    }

    setSelectUser(newSelectUser);
    updateSelectUsers(newSelectUser);

    if (checked) {
      calculateSelectAll(newSelectUser);
    } else {
      setSelectAll(false);
    }
  };
  /**
   * Radio时点击用户列表的回调
   * @param e
   */


  var onUserRadioCheck = function onUserRadioCheck(e) {
    var _e$target2 = e.target,
        checked = _e$target2.checked,
        data = _e$target2.data;
    var newSelectUser = [];

    if (checked) {
      newSelectUser.push(data);
    }

    setSelectUser(newSelectUser);
    updateSelectUsers(newSelectUser);
  };
  /**
   * 翻页查询处理
   * @param page
   */


  var onPageChange = function onPageChange(page) {
    if (debug) {
      window.console.log(page);
    }

    if (handleSearchUser) {
      handleSearchUser(page, nameKey, deptId, isSelectedOfMeeting);

      if (isSelectedOfMeeting) {
        setOnSearch(false);
      } else {
        setOnSearch(true);
      }
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 计算是否全部选中
   * @param newSelectUser
   */


  var calculateSelectAll = function calculateSelectAll(newSelectUser) {
    var tmp = [];
    console.log(disableUsers, '+== console.log(disableUsers)=');
    userData.records.forEach(function (value) {
      if (!disableUsers.includes(value.userId)) {
        tmp.push(value);
      }
    });

    if (tmp.length === 0) {
      setSelectAll(false);
      return;
    }

    var count = 0;
    tmp.forEach(function (val) {
      var result = newSelectUser.find(function (valUser) {
        return val.userId === valUser.userId;
      });

      if (result) {
        count += 1;
      }
    });
    setSelectAll(count === tmp.length);
  };
  /**
   * 点击用户全选的回调
   * @param e
   */


  var onCheckAll = function onCheckAll(e) {
    var checked = e.target.checked;
    setSelectAll(checked);
    var tmp = [];
    userData.records.forEach(function (value) {
      tmp.push(value);
    });
    var newSelectUser = [];
    console.log(checked, "+===checked===");

    if (checked) {
      // 如果是选中，遍历添加，重复的不添加
      tmp.forEach(function (val) {
        var result = selectUser.find(function (valUser) {
          return val.userId === valUser.userId;
        });

        if (!result && disableUsers.indexOf(val.userId) === -1) {
          newSelectUser.push(val);
        }
      });
      newSelectUser = selectUser.concat(newSelectUser);
    } else {
      // 不选中的遍历删除
      selectUser.forEach(function (val) {
        var result = tmp.find(function (valUser) {
          return val.userId === valUser.userId;
        });

        if (!result) {
          newSelectUser.push(val);
        }
      });
    }

    updateSelectUsers(newSelectUser);
    setSelectUser(newSelectUser);
  };

  var colWidth = showLeft ? 12 : 24;
  console.log(userData, '===userData==');
  return /*#__PURE__*/React__default.createElement(_Col, {
    xs: colWidth,
    sm: colWidth,
    md: colWidth,
    lg: colWidth,
    xl: colWidth,
    className: styles.treeLeft
  }, /*#__PURE__*/React__default.createElement(_Card, {
    style: {
      borderBottomRightRadius: '6px',
      borderBottomLeftRadius: 0,
      borderTopRightRadius: '6px',
      borderTopLeftRadius: 0,
      borderLeft: 0
    },
    className: styles.card
  }, deptSearch && /*#__PURE__*/React__default.createElement(Search, {
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch,
    onChange: handleSearchChange
  }), deptSearch && /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement(_List, {
    className: userData.records.length === 0 ? styles.listEmpty : styles.list,
    size: "small",
    bordered: false,
    dataSource: userData.records,
    split: false,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React__default.createElement(_List.Item, null, /*#__PURE__*/React__default.createElement("div", {
        className: styles.itemDiv
      }, /*#__PURE__*/React__default.createElement("div", {
        className: styles.checkbox,
        title: item[userNameKey]
      }, radio && /*#__PURE__*/React__default.createElement(_Radio, {
        className: styles.checkbox,
        checked: isUserCheck(item),
        data: item,
        onChange: onUserRadioCheck,
        disabled: disableUsers.includes(item.userId)
      }, item[userNameKey]), !radio && /*#__PURE__*/React__default.createElement(_Checkbox, {
        className: styles.checkbox,
        data: item,
        checked: isUserCheck(item),
        onChange: onUserCheck,
        title: item[userNameKey],
        disabled: disableUsers.includes(item.userId)
      }, item[userNameKey])), /*#__PURE__*/React__default.createElement("div", {
        className: disableUsers.includes(item.userId) ? styles.deptName_disabled : styles.deptName,
        title: item.deptName
      }, item.deptName), enNameKey && /*#__PURE__*/React__default.createElement("div", {
        style: {
          paddingLeft: '10px'
        },
        title: item[enNameKey],
        className: disableUsers.includes(item.userId) ? styles.deptName_disabled : styles.deptName
      }, item[enNameKey])));
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles.pagination
  }, !radio && /*#__PURE__*/React__default.createElement(_Checkbox, {
    onChange: onCheckAll,
    className: styles.checkbox,
    checked: selectAll
  }, selectAllText), /*#__PURE__*/React__default.createElement(_Pagination, {
    className: styles.pageNoe,
    simple: true,
    current: userData.current || 1,
    pageSize: userData.size,
    total: userData.total,
    onChange: onPageChange
  })));
});

var TreeNode = _Tree.TreeNode;
/**
 * 过滤dept节点,如果父节点选中不显示子节点
 * @param list
 * @returns {[]}
 */

var filterDeptTagShow = function filterDeptTagShow(list) {
  /**
   *
   * @param object
   * @param node
   */
  var removeDescendants = function removeDescendants(object, node) {
    if (node.children && node.children.length > 0) {
      node.children.forEach(function (v) {
        removeDescendants(object, v);
        delete object[v.id];
      });
    }
  };

  var obj = {};
  list.forEach(function (value) {
    obj[value.id] = value;
  });
  list.forEach(function (value) {
    removeDescendants(obj, value);
  });
  var dept = [];
  Object.keys(obj).forEach(function (key) {
    dept.push(obj[key]);
  });
  return dept;
};
/**
 *  格式化树数据
 * @param treeData
 * @param deptNameKey
 * @param disableDept
 * @returns {*}
 */

var formatDeptData = function formatDeptData(treeData, deptNameKey) {
  var disableDept = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return treeData.map(function (v) {
    if (!v.id) {
      v.id = v.deptId;
    }

    try {
      v.key = v.id ? v.id.toString() : v.deptId.toString();
    } catch (e) {
      v.key = new Date().getTime();
    }

    console.log(disableDept.includes(v.id), v.id);

    if (disableDept.includes(v.id)) {
      v.disabled = true;
      console.log(v);
    }

    v.title = v[deptNameKey];
    v.isLeaf = !v.hasChild;

    if (v.children && v.children.length > 0) {
      v.isLeaf = false;
      v.children = formatDeptData(v.children, deptNameKey, disableDept);
    }

    return v;
  });
};

var Search$1 = _Input.Search;
var Left = (function (_ref) {
  var searchDeptPlaceholder = _ref.searchDeptPlaceholder,
      deptSearch = _ref.deptSearch,
      deptCheckBox = _ref.deptCheckBox,
      _ref$deptTree = _ref.deptTree,
      deptTree = _ref$deptTree === void 0 ? [] : _ref$deptTree,
      handleSearchUser = _ref.handleSearchUser,
      setDeptId = _ref.setDeptId,
      setOnSearch = _ref.setOnSearch,
      deptTreeNode = _ref.deptTreeNode,
      setDeptTreeNode = _ref.setDeptTreeNode,
      updateSelectDept = _ref.updateSelectDept,
      deptNameKey = _ref.deptNameKey,
      radio = _ref.radio,
      checkStrictly = _ref.checkStrictly,
      returnReducedNode = _ref.returnReducedNode,
      nameKey = _ref.nameKey,
      loadData = _ref.loadData,
      disableDept = _ref.disableDept,
      commonUserTextOfSmt = _ref.commonUserTextOfSmt,
      isSelectedOfMeeting = _ref.isSelectedOfMeeting,
      setIsSelectedOfMeeting = _ref.setIsSelectedOfMeeting,
      isShowUserOfSmt = _ref.isShowUserOfSmt;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      deptSearchResult = _useState2[0],
      setDeptSearchResult = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      onDeptSearch = _useState4[0],
      setOnDeptSearch = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedKeys = _useState6[0],
      setSelectedKeys = _useState6[1];

  var onSearchDeptChange = function onSearchDeptChange(e) {
    if (!e.target.value) {
      setDeptSearchResult([]);
      setOnDeptSearch(false);
    }
  };
  /**
   * 根据关键字搜索部门树
   * @param key
   * @param deptTree
   * @param dataList
   */


  var searchByKey = function searchByKey(key, deptTree, dataList) {
    deptTree.forEach(function (item) {
      if (item.name.indexOf(key) > -1) {
        dataList.push(item);
      }

      if (item.children && item.children.length > 0) {
        searchByKey(key, item.children, dataList);
      }
    });
  };
  /**
   * 根据关键字搜索部门
   * @param value
   */


  var onSearchDept = function onSearchDept(value) {
    if (!value) {
      setDeptSearchResult([]);
      setOnDeptSearch(!!value);
    } else {
      var dataList = [];
      searchByKey(value.trim(), deptTree, dataList);
      setDeptSearchResult(dataList);
      setOnDeptSearch(!!value);
    }
  };
  /**
   * 生成选择树
   * @param data
   * @return {*}
   */


  var makeCheckedKeys = function makeCheckedKeys(data) {
    return data.map(function (v) {
      return v.id.toString();
    });
  };
  /**
   * 点击部门树时传递部门id到回调里面
   * @param selectedKeys 选择的部门id
   */


  var onTreeSelect = function onTreeSelect(selectedKeys) {
    if (handleSearchUser) {
      var _selectedKeys = _slicedToArray(selectedKeys, 1),
          deptId = _selectedKeys[0];

      handleSearchUser(0, nameKey, deptId, false);
      setOnSearch(true);
      setDeptId(deptId);
      setSelectedKeys(selectedKeys);
      setIsSelectedOfMeeting(false);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 点击树的check box 回调
   * @param checkedKeys
   * @param checked
   * @param checkedNodes
   * @param node
   */


  var onDeptTreeCheck = function onDeptTreeCheck(checkedKeys, _ref2) {
    var checked = _ref2.checked,
        checkedNodes = _ref2.checkedNodes,
        node = _ref2.node;
    var tmp = [];
    console.log(checked, checkedNodes, node);
    checkedNodes.forEach(function (v) {
      tmp.push(v);
    });

    if (returnReducedNode) {
      updateSelectDept(filterDeptTagShow(tmp));
    } else {
      updateSelectDept(tmp);
    }

    setDeptTreeNode(tmp);
  };
  /**
   * 判断部门是否选择
   * @param data
   * @return {boolean}
   */


  var isDeptCheck = function isDeptCheck(data) {
    var result = deptTreeNode.find(function (value) {
      return value.id === data.id;
    });
    return !!result;
  };
  /**
   * 部门查询结果点击checkbox
   * @param e
   */


  var onDeptCheck = function onDeptCheck(e) {
    var _e$target = e.target,
        checked = _e$target.checked,
        data = _e$target.data;
    var tmp = [];

    if (checked) {
      tmp.push(data);

      if (returnReducedNode) {
        updateSelectDept(filterDeptTagShow(deptTreeNode.concat(tmp)));
      } else {
        updateSelectDept(deptTreeNode.concat(tmp));
      }

      setDeptTreeNode(deptTreeNode.concat(tmp));
    } else {
      var result = deptTreeNode.filter(function (value) {
        return value.id !== data.id;
      });

      if (returnReducedNode) {
        updateSelectDept(filterDeptTagShow(result.concat(tmp)));
      } else {
        updateSelectDept(result.concat(tmp));
      }

      setDeptTreeNode(result.concat(tmp));
    }
  };
  /**
   * 点击部门查询结果后，传递部门ID给外部查询
   * @param item
   */


  var onDeptSelect = function onDeptSelect(item) {
    if (handleSearchUser) {
      handleSearchUser(0, null, item.id, false);
      setOnSearch(true);
      setDeptId(item.id);
      setIsSelectedOfMeeting(false);
    } else {
      _message.error('search function not found.');
    }
  };

  var defaultExpandedKeys = function defaultExpandedKeys() {
    try {
      if (deptTree.length > 0 && deptTree[0] && deptTree[0].id) {
        return [deptTree[0].id.toString()];
      } else {
        return [];
      }
    } catch (e) {
      window.console.error(e);
      return [];
    }
  };

  var onSelectOfMeeting = function onSelectOfMeeting() {
    setIsSelectedOfMeeting(!isSelectedOfMeeting);
    setDeptTreeNode([]);
    setDeptId(null);
    setSelectedKeys([]);
    setOnSearch(false);
  };

  console.log(disableDept, deptTree);
  return /*#__PURE__*/React__default.createElement(_Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  }, /*#__PURE__*/React__default.createElement(_Card, {
    style: {
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: '6px',
      borderTopRightRadius: 0,
      borderTopLeftRadius: '6px'
    },
    className: styles.card
  }, deptSearch && !loadData && /*#__PURE__*/React__default.createElement(Search$1, {
    placeholder: searchDeptPlaceholder,
    onSelect: onSearchDeptChange,
    onSearch: onSearchDept
  }), deptSearch && !loadData && /*#__PURE__*/React__default.createElement("br", null), isShowUserOfSmt && /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      onSelectOfMeeting();
    },
    className: styles.userTextWrapper
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "".concat(styles.userText, " ").concat(isSelectedOfMeeting ? styles.textColor : '')
  }, commonUserTextOfSmt, " ")), !onDeptSearch && deptTree.length > 0 && /*#__PURE__*/React__default.createElement(_Tree, {
    // style={{paddingTop:5}}
    checkable: deptCheckBox && !radio,
    checkedKeys: makeCheckedKeys(deptTreeNode),
    onSelect: onTreeSelect,
    onCheck: onDeptTreeCheck,
    checkStrictly: checkStrictly,
    selectedKeys: selectedKeys,
    defaultExpandedKeys: defaultExpandedKeys(),
    treeData: formatDeptData(deptTree, deptNameKey, disableDept),
    loadData: loadData
  }), onDeptSearch && /*#__PURE__*/React__default.createElement(_List, {
    size: "small",
    bordered: false,
    dataSource: deptSearchResult,
    split: false,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/React__default.createElement(_List.Item, null, /*#__PURE__*/React__default.createElement("div", {
        className: styles.itemDiv
      }, deptCheckBox && /*#__PURE__*/React__default.createElement(_Checkbox, {
        className: styles.checkbox,
        data: item,
        checked: isDeptCheck(item),
        onChange: onDeptCheck
      }), /*#__PURE__*/React__default.createElement("span", {
        style: {
          marginLeft: '10px'
        },
        onClick: function onClick() {
          return onDeptSelect(item);
        }
      }, item[deptNameKey])));
    }
  })));
});

var ItemTypes = 'card';
var IconFont = create({
  scriptUrl: ['//at.alicdn.com/t/font_1596018_xkmgoaljpq.js' // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ]
});

var Card = function Card(_ref) {
  var id = _ref.id,
      text = _ref.text,
      index = _ref.index,
      moveCard = _ref.moveCard,
      unCheckUser = _ref.unCheckUser,
      card = _ref.card;
  var ref = React.useRef(null);

  var _useDrop = reactDnd.useDrop({
    accept: ItemTypes,
    collect: function collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      };
    },
    hover: function hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      var dragIndex = item.index;
      var hoverIndex = index; // Don't replace items with themselves

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      } // Determine rectangle on screen


      // Determine rectangle on screen
      var hoverBoundingRect = ref.current && ref.current.getBoundingClientRect(); // Get vertical middle

      // Get vertical middle
      var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

      // Determine mouse position
      var clientOffset = monitor.getClientOffset(); // Get pixels to the top

      // Get pixels to the top
      var hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      } // Dragging upwards


      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      } // Time to actually perform the action


      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    }
  }),
      _useDrop2 = _slicedToArray(_useDrop, 2),
      handlerId = _useDrop2[0].handlerId,
      drop = _useDrop2[1];

  var _useDrag = reactDnd.useDrag({
    type: ItemTypes,
    item: function item() {
      return {
        id: id,
        index: index
      };
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    }
  }),
      _useDrag2 = _slicedToArray(_useDrag, 2),
      isDragging = _useDrag2[0].isDragging,
      drag = _useDrag2[1];

  var opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return /*#__PURE__*/React__default.createElement(_Tag, {
    onClick: function onClick() {
      unCheckUser(_objectSpread2({}, card));
    },
    ref: ref,
    className: styles.userTag,
    style: opacity,
    "data-handler-id": handlerId // longpress={() => { console.log('longe') }}

  }, text, /*#__PURE__*/React__default.createElement(IconFont, {
    type: "icon-delete2",
    style: {
      color: '#D8D8D8'
    }
  }));
};

var immutabilityHelper = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
function stringifiable(obj) {
    // Safely stringify Object.create(null)
    /* istanbul ignore next */
    return typeof obj === 'object' && !('toString' in obj) ?
        Object.prototype.toString.call(obj).slice(8, -1) :
        obj;
}
var isProduction = typeof process === 'object' && process.env.NODE_ENV === 'production';
function invariant(condition, message) {
    if (!condition) {
        /* istanbul ignore next */
        if (isProduction) {
            throw new Error('Invariant failed');
        }
        throw new Error(message());
    }
}
exports.invariant = invariant;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;
var toString = Object.prototype.toString;
function type(obj) {
    return toString.call(obj).slice(8, -1);
}
var assign = Object.assign || /* istanbul ignore next */ (function (target, source) {
    getAllKeys(source).forEach(function (key) {
        if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    });
    return target;
});
var getAllKeys = typeof Object.getOwnPropertySymbols === 'function'
    ? function (obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)); }
    /* istanbul ignore next */
    : function (obj) { return Object.keys(obj); };
function copy(object) {
    return Array.isArray(object)
        ? assign(object.constructor(object.length), object)
        : (type(object) === 'Map')
            ? new Map(object)
            : (type(object) === 'Set')
                ? new Set(object)
                : (object && typeof object === 'object')
                    ? assign(Object.create(Object.getPrototypeOf(object)), object)
                    /* istanbul ignore next */
                    : object;
}
var Context = /** @class */ (function () {
    function Context() {
        this.commands = assign({}, defaultCommands);
        this.update = this.update.bind(this);
        // Deprecated: update.extend, update.isEquals and update.newContext
        this.update.extend = this.extend = this.extend.bind(this);
        this.update.isEquals = function (x, y) { return x === y; };
        this.update.newContext = function () { return new Context().update; };
    }
    Object.defineProperty(Context.prototype, "isEquals", {
        get: function () {
            return this.update.isEquals;
        },
        set: function (value) {
            this.update.isEquals = value;
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.extend = function (directive, fn) {
        this.commands[directive] = fn;
    };
    Context.prototype.update = function (object, $spec) {
        var _this = this;
        var spec = (typeof $spec === 'function') ? { $apply: $spec } : $spec;
        if (!(Array.isArray(object) && Array.isArray(spec))) {
            invariant(!Array.isArray(spec), function () { return "update(): You provided an invalid spec to update(). The spec may " +
                "not contain an array except as the value of $set, $push, $unshift, " +
                "$splice or any custom command allowing an array value."; });
        }
        invariant(typeof spec === 'object' && spec !== null, function () { return "update(): You provided an invalid spec to update(). The spec and " +
            "every included key path must be plain objects containing one of the " +
            ("following commands: " + Object.keys(_this.commands).join(', ') + "."); });
        var nextObject = object;
        getAllKeys(spec).forEach(function (key) {
            if (hasOwnProperty.call(_this.commands, key)) {
                var objectWasNextObject = object === nextObject;
                nextObject = _this.commands[key](spec[key], nextObject, spec, object);
                if (objectWasNextObject && _this.isEquals(nextObject, object)) {
                    nextObject = object;
                }
            }
            else {
                var nextValueForKey = type(object) === 'Map'
                    ? _this.update(object.get(key), spec[key])
                    : _this.update(object[key], spec[key]);
                var nextObjectValue = type(nextObject) === 'Map'
                    ? nextObject.get(key)
                    : nextObject[key];
                if (!_this.isEquals(nextValueForKey, nextObjectValue)
                    || typeof nextValueForKey === 'undefined'
                        && !hasOwnProperty.call(object, key)) {
                    if (nextObject === object) {
                        nextObject = copy(object);
                    }
                    if (type(nextObject) === 'Map') {
                        nextObject.set(key, nextValueForKey);
                    }
                    else {
                        nextObject[key] = nextValueForKey;
                    }
                }
            }
        });
        return nextObject;
    };
    return Context;
}());
exports.Context = Context;
var defaultCommands = {
    $push: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$push');
        return value.length ? nextObject.concat(value) : nextObject;
    },
    $unshift: function (value, nextObject, spec) {
        invariantPushAndUnshift(nextObject, spec, '$unshift');
        return value.length ? value.concat(nextObject) : nextObject;
    },
    $splice: function (value, nextObject, spec, originalObject) {
        invariantSplices(nextObject, spec);
        value.forEach(function (args) {
            invariantSplice(args);
            if (nextObject === originalObject && args.length) {
                nextObject = copy(originalObject);
            }
            splice.apply(nextObject, args);
        });
        return nextObject;
    },
    $set: function (value, _nextObject, spec) {
        invariantSet(spec);
        return value;
    },
    $toggle: function (targets, nextObject) {
        invariantSpecArray(targets, '$toggle');
        var nextObjectCopy = targets.length ? copy(nextObject) : nextObject;
        targets.forEach(function (target) {
            nextObjectCopy[target] = !nextObject[target];
        });
        return nextObjectCopy;
    },
    $unset: function (value, nextObject, _spec, originalObject) {
        invariantSpecArray(value, '$unset');
        value.forEach(function (key) {
            if (Object.hasOwnProperty.call(nextObject, key)) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                delete nextObject[key];
            }
        });
        return nextObject;
    },
    $add: function (values, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$add');
        invariantSpecArray(values, '$add');
        if (type(nextObject) === 'Map') {
            values.forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (nextObject === originalObject && nextObject.get(key) !== value) {
                    nextObject = copy(originalObject);
                }
                nextObject.set(key, value);
            });
        }
        else {
            values.forEach(function (value) {
                if (nextObject === originalObject && !nextObject.has(value)) {
                    nextObject = copy(originalObject);
                }
                nextObject.add(value);
            });
        }
        return nextObject;
    },
    $remove: function (value, nextObject, _spec, originalObject) {
        invariantMapOrSet(nextObject, '$remove');
        invariantSpecArray(value, '$remove');
        value.forEach(function (key) {
            if (nextObject === originalObject && nextObject.has(key)) {
                nextObject = copy(originalObject);
            }
            nextObject.delete(key);
        });
        return nextObject;
    },
    $merge: function (value, nextObject, _spec, originalObject) {
        invariantMerge(nextObject, value);
        getAllKeys(value).forEach(function (key) {
            if (value[key] !== nextObject[key]) {
                if (nextObject === originalObject) {
                    nextObject = copy(originalObject);
                }
                nextObject[key] = value[key];
            }
        });
        return nextObject;
    },
    $apply: function (value, original) {
        invariantApply(value);
        return value(original);
    },
};
var defaultContext = new Context();
exports.isEquals = defaultContext.update.isEquals;
exports.extend = defaultContext.extend;
exports.default = defaultContext.update;
// @ts-ignore
exports.default.default = module.exports = assign(exports.default, exports);
// invariants
function invariantPushAndUnshift(value, spec, command) {
    invariant(Array.isArray(value), function () { return "update(): expected target of " + stringifiable(command) + " to be an array; got " + stringifiable(value) + "."; });
    invariantSpecArray(spec[command], command);
}
function invariantSpecArray(spec, command) {
    invariant(Array.isArray(spec), function () { return "update(): expected spec of " + stringifiable(command) + " to be an array; got " + stringifiable(spec) + ". " +
        "Did you forget to wrap your parameter in an array?"; });
}
function invariantSplices(value, spec) {
    invariant(Array.isArray(value), function () { return "Expected $splice target to be an array; got " + stringifiable(value); });
    invariantSplice(spec.$splice);
}
function invariantSplice(value) {
    invariant(Array.isArray(value), function () { return "update(): expected spec of $splice to be an array of arrays; got " + stringifiable(value) + ". " +
        "Did you forget to wrap your parameters in an array?"; });
}
function invariantApply(fn) {
    invariant(typeof fn === 'function', function () { return "update(): expected spec of $apply to be a function; got " + stringifiable(fn) + "."; });
}
function invariantSet(spec) {
    invariant(Object.keys(spec).length === 1, function () { return "Cannot have more than one key in an object with $set"; });
}
function invariantMerge(target, specValue) {
    invariant(specValue && typeof specValue === 'object', function () { return "update(): $merge expects a spec of type 'object'; got " + stringifiable(specValue); });
    invariant(target && typeof target === 'object', function () { return "update(): $merge expects a target of type 'object'; got " + stringifiable(target); });
}
function invariantMapOrSet(target, command) {
    var typeOfTarget = type(target);
    invariant(typeOfTarget === 'Map' || typeOfTarget === 'Set', function () { return "update(): " + stringifiable(command) + " expects a target of type Set or Map; got " + stringifiable(typeOfTarget); });
}
});

var update = unwrapExports(immutabilityHelper);
var immutabilityHelper_1 = immutabilityHelper.invariant;
var immutabilityHelper_2 = immutabilityHelper.Context;
var immutabilityHelper_3 = immutabilityHelper.isEquals;
var immutabilityHelper_4 = immutabilityHelper.extend;

var style = {
  display: "flex",
  flexWrap: 'wrap'
};

var Container = function Container(_ref) {
  var data = _ref.data,
      unCheckUser = _ref.unCheckUser,
      updateSelectUsers = _ref.updateSelectUsers,
      userNameKey = _ref.userNameKey;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      returncards = _useState4[0],
      setreturncards = _useState4[1];

  React.useEffect(function () {
    setCards(data);
  }, [data]);
  var moveCard = React.useCallback(function (dragIndex, hoverIndex) {
    var dragCard = cards[dragIndex];
    setCards(update(cards, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
    }));
    setreturncards(true);
  }, [cards]);

  if (returncards) {
    updateSelectUsers(cards);
    setreturncards(false);
  }

  var renderCard = function renderCard(card, index) {
    return /*#__PURE__*/React__default.createElement(Card, {
      updateSelectUsers: updateSelectUsers,
      unCheckUser: unCheckUser,
      card: card,
      key: card.userId,
      index: index,
      id: card.userId,
      text: card[userNameKey],
      moveCard: moveCard
    });
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    style: style
  }, cards.map(function (card, i) {
    return renderCard(card, i);
  })));
};

function App(props) {
  return /*#__PURE__*/React__default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React__default.createElement(reactDnd.DndProvider, {
    backend: reactDndHtml5Backend.HTML5Backend
  }, /*#__PURE__*/React__default.createElement(Container, props)));
}

var Search$2 = _Input.Search;
var IconFont$1 = create({
  scriptUrl: ['//at.alicdn.com/t/font_1596018_xkmgoaljpq.js' // icon-javascript, icon-java, icon-shoppingcart (overrided)
  ]
});

var Contacts = function Contacts(props) {
  var users = props.users,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      searchResult = props.searchResult,
      _props$userSearch = props.userSearch,
      userSearch = _props$userSearch === void 0 ? false : _props$userSearch,
      searchUserPlaceholder = props.searchUserPlaceholder,
      totalShowText = props.totalShowText,
      handleSearchUser = props.handleSearchUser,
      updateSelectUsers = props.updateSelectUsers,
      defaultUserSelected = props.defaultUserSelected,
      defaultDeptSelected = props.defaultDeptSelected,
      updateSelectDept = props.updateSelectDept,
      userNameKey = props.userNameKey,
      deptNameKey = props.deptNameKey,
      radio = props.radio,
      radioShowText = props.radioShowText,
      checkStrictly = props.checkStrictly,
      showAllDeptTags = props.showAllDeptTags,
      Drag = props.Drag,
      showLeft = props.showLeft,
      loadData = props.loadData,
      disableUsers = props.disableUsers,
      disableDept = props.disableDept,
      commonUserTextOfSmt = props.commonUserTextOfSmt,
      isShowUserOfSmt = props.isShowUserOfSmt,
      commonUserData = props.commonUserData;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      deptTreeNode = _useState2[0],
      setDeptTreeNode = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectUser = _useState4[0],
      setSelectUser = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      onSearch = _useState6[0],
      setOnSearch = _useState6[1];

  var _useState7 = React.useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      deptId = _useState8[0],
      setDeptId = _useState8[1];

  var _useState9 = React.useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      nameKey = _useState10[0],
      setNameKey = _useState10[1];

  var _useState11 = React.useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isSelectedOfMeeting = _useState12[0],
      setIsSelectedOfMeeting = _useState12[1];

  React.useEffect(function () {
    updateSelectUsers(defaultUserSelected);
    setSelectUser(defaultUserSelected);
  }, [defaultUserSelected]);
  React.useEffect(function () {
    updateSelectDept(defaultDeptSelected);
    setDeptTreeNode(defaultDeptSelected);
  }, [defaultDeptSelected]);
  /**
   *  点击查询回调，会把name key 和 dept id 回传，外部调用查询用
   * @param nameKey 名字搜索关键字
   * @param deptId 部门id
   */

  var handleSearch = function handleSearch() {
    var nameKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (handleSearchUser) {
      handleSearchUser(0, nameKey, deptId, isSelectedOfMeeting);

      if (isSelectedOfMeeting) {
        setOnSearch(false);
      } else {
        setOnSearch(true);
      }

      setNameKey(nameKey);
    } else {
      _message.error('search function not found.');
    }
  };
  /**
   * 生成显示的部门Tag
   * @param v
   * @return {*}
   */


  var makeDeptTag = function makeDeptTag(v) {
    return /*#__PURE__*/React__default.createElement(_Tag, {
      key: v.id,
      className: styles.deptTag,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckDept(v);
      }
    }, v[deptNameKey], " ", /*#__PURE__*/React__default.createElement(IconFont$1, {
      type: "icon-delete2",
      style: {
        color: '#D8D8D8'
      }
    }));
  };
  /**
   *
   * @param object
   * @param key
   */


  var delObjProperty = function delObjProperty(object, key) {
    var t = object[key];

    if (t) {
      delete object[key];
      delObjProperty(object, t.parentId);
    }
  };
  /**
   *
   * @param data
   */


  var unCheckDept = function unCheckDept(data) {
    console.log(data, '删除');
    var dept = [];
    var obj = {};
    deptTreeNode.forEach(function (value) {
      obj[value.id] = value;
    });
    delObjProperty(obj, data.id);
    Object.keys(obj).forEach(function (key) {
      dept.push(obj[key]);
    });
    updateSelectDept(dept);
    setDeptTreeNode(dept);
  };
  /**
   * 生成显示的用户Tag
   * @param v
   * @return {*}
   */


  var makeUserTag = function makeUserTag(v) {
    return /*#__PURE__*/React__default.createElement(_Tag, {
      key: v.userId,
      className: styles.userTag,
      onClick: function onClick(e) {
        e.preventDefault();
        unCheckUser(v);
      }
    }, v[userNameKey], " ", /*#__PURE__*/React__default.createElement(IconFont$1, {
      type: "icon-delete2",
      style: {
        color: '#D8D8D8'
      }
    }));
  };
  /**
   * 点击用户Tag时取消选择
   * @param data
   */


  var unCheckUser = function unCheckUser(data) {
    var tmp = [];
    var result = selectUser.filter(function (value) {
      return value.userId !== data.userId;
    });
    var userList = result.concat(tmp);
    updateSelectUsers(userList);
    setSelectUser(userList);
  };

  var makeShowMsg = function makeShowMsg() {
    if (!radio) {
      var tmp = totalShowText.split('$');
      var font = '';
      var end = '';

      if (tmp.length === 2) {
        font = tmp[0];
        end = tmp[1];
      } else {
        font = totalShowText;
      }

      var length = 0;

      if (!showAllDeptTags) {
        length = filterDeptTagShow(deptTreeNode).length + selectUser.length;
      } else {
        length = deptTreeNode.length + selectUser.length;
      }

      return /*#__PURE__*/React__default.createElement("div", null, font, " ", /*#__PURE__*/React__default.createElement("span", {
        className: styles.number
      }, length), " ", end);
    }

    var name = '';

    if (selectUser.length > 0) {
      var _selectUser = _slicedToArray(selectUser, 1),
          use = _selectUser[0];

      name = use[userNameKey];
    }

    return /*#__PURE__*/React__default.createElement("div", null, radioShowText, " ", /*#__PURE__*/React__default.createElement("span", {
      className: styles.number
    }, name));
  };

  var userData;

  if (onSearch) {
    userData = searchResult;
  } else if (isSelectedOfMeeting) {
    userData = commonUserData;
  } else {
    userData = users;
  }

  console.log(onSearch, '==onSearch=', isSelectedOfMeeting, userData);
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React__default.createElement(_Spin, {
    spinning: loading
  }, userSearch && /*#__PURE__*/React__default.createElement(_Row, null, /*#__PURE__*/React__default.createElement(Search$2, {
    placeholder: searchUserPlaceholder,
    onSearch: handleSearch
  })), userSearch && /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement(_Row, null, showLeft && /*#__PURE__*/React__default.createElement(Left, _extends({}, props, {
    setDeptId: setDeptId,
    setOnSearch: setOnSearch,
    deptTreeNode: deptTreeNode,
    setDeptTreeNode: setDeptTreeNode,
    handleSearchUser: handleSearchUser,
    checkStrictly: checkStrictly,
    updateSelectDept: updateSelectDept,
    deptNameKey: deptNameKey,
    radio: radio,
    nameKey: nameKey,
    disableDept: disableDept,
    commonUserTextOfSmt: commonUserTextOfSmt,
    isSelectedOfMeeting: isSelectedOfMeeting,
    setIsSelectedOfMeeting: setIsSelectedOfMeeting,
    isShowUserOfSmt: isShowUserOfSmt
  })), /*#__PURE__*/React__default.createElement(Right, _extends({}, props, {
    userData: userData,
    onSearch: onSearch,
    setOnSearch: setOnSearch,
    loadData: loadData,
    nameKey: nameKey,
    setNameKey: setNameKey,
    selectUser: selectUser,
    handleSearch: handleSearch,
    userNameKey: userNameKey,
    deptId: deptId,
    isSelectedOfMeeting: isSelectedOfMeeting,
    setSelectUser: setSelectUser,
    radio: radio,
    showLeft: showLeft,
    disableUsers: disableUsers
  })), /*#__PURE__*/React__default.createElement(_Col, {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24
  }, /*#__PURE__*/React__default.createElement(_Form, {
    colon: false,
    layout: "vertical"
  }, /*#__PURE__*/React__default.createElement(_Form.Item, {
    className: styles.label,
    label: makeShowMsg()
  }, !radio && /*#__PURE__*/React__default.createElement("div", {
    className: styles.resultDiv
  }, !showAllDeptTags && deptTreeNode && filterDeptTagShow(deptTreeNode).map(function (v) {
    return makeDeptTag(v);
  }), showAllDeptTags && deptTreeNode && deptTreeNode.map(function (v) {
    return makeDeptTag(v);
  }), Drag ? selectUser.length > 0 && /*#__PURE__*/React__default.createElement(App, {
    updateSelectUsers: updateSelectUsers,
    data: selectUser,
    unCheckUser: unCheckUser,
    userNameKey: userNameKey
  }) : selectUser && selectUser.map(function (v) {
    return makeUserTag(v);
  }))))))));
};

Contacts.propTypes = {
  deptTree: PropTypes.array.isRequired,
  users: PropTypes.object,
  loading: PropTypes.bool,
  searchResult: PropTypes.object,
  handleSearchUser: PropTypes.func.isRequired,
  deptSearch: PropTypes.bool,
  updateSelectUsers: PropTypes.func.isRequired,
  updateSelectDept: PropTypes.func.isRequired,
  deptCheckBox: PropTypes.bool,
  searchDeptPlaceholder: PropTypes.string,
  searchUserPlaceholder: PropTypes.string,
  defaultUserSelected: PropTypes.array,
  defaultDeptSelected: PropTypes.array,
  debug: PropTypes.bool,
  numberColor: PropTypes.string,
  selectAllText: PropTypes.string,
  totalShowText: PropTypes.string,
  userNameKey: PropTypes.string,
  deptNameKey: PropTypes.string,
  radio: PropTypes.bool,
  radioShowText: PropTypes.string,
  checkStrictly: PropTypes.bool,
  showAllDeptTags: PropTypes.bool,
  // 返回精简节点，如果为true，只返回精简的节点，比如子节点全部选中，只返回父节点一个node
  returnReducedNode: PropTypes.bool,
  Drag: PropTypes.bool,
  // 显示左边部门树
  showLeft: PropTypes.bool,
  // 异步加载数据
  loadData: PropTypes.func,
  // 显示英文名key
  enNameKey: PropTypes.string,
  // 不可选择用户id列表
  disableUsers: PropTypes.array,
  // 不可选择部门id列表
  disableDept: PropTypes.array,
  // 会议常用联系人文字
  // 是否显示会议常用联系人
  isShowUserOfSmt: PropTypes.bool,
  commonUserTextOfSmt: PropTypes.string,
  commonUserData: PropTypes.object
};
Contacts.defaultProps = {
  users: {
    records: []
  },
  loading: false,
  searchResult: {
    records: []
  },
  deptSearch: true,
  deptCheckBox: true,
  searchDeptPlaceholder: '请输入搜索部门',
  searchUserPlaceholder: '请输入搜索姓名',
  defaultUserSelected: [],
  defaultDeptSelected: [],
  numberColor: '#1B9AFF',
  debug: false,
  selectAllText: '全选',
  totalShowText: '共选择了$个',
  userNameKey: 'username',
  deptNameKey: 'name',
  radio: false,
  radioShowText: '已经选择',
  checkStrictly: false,
  showAllDeptTags: false,
  returnReducedNode: false,
  Drag: false,
  // 显示左边部门树，默认显示
  showLeft: true,
  loadData: false,
  enNameKey: 'username',
  disableUsers: [],
  disableDept: [],
  commonUserTextOfSmt: '常用联系人',
  isShowUserOfSmt: true,
  commonUserData: {
    records: []
  }
};

module.exports = Contacts;
//# sourceMappingURL=index.js.map
