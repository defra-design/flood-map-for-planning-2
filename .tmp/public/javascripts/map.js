/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/event-target-polyfill/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/event-target-polyfill/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var root = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof __webpack_require__.g !== "undefined" && __webpack_require__.g;
var shouldPolyfillEvent = function () {
  try {
    new root.Event("");
  } catch (error) {
    return true;
  }
  return false;
}();
var shouldPolyfillEventTarget = function () {
  try {
    new root.EventTarget();
  } catch (error) {
    return true;
  }
  return false;
}();
if (shouldPolyfillEvent) {
  root.Event = function () {
    function Event(type, options) {
      this.bubbles = !!options && !!options.bubbles;
      this.cancelable = !!options && !!options.cancelable;
      this.composed = !!options && !!options.composed;
      this.type = type;
    }
    return Event;
  }();
}
if (shouldPolyfillEventTarget) {
  root.EventTarget = function () {
    function EventTarget() {
      this.__listeners = new Map();
    }
    EventTarget.prototype = Object.create(Object.prototype);
    EventTarget.prototype.addEventListener = function (type, listener, options) {
      if (arguments.length < 2) {
        throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
      }
      var __listeners = this.__listeners;
      var actualType = type.toString();
      if (!__listeners.has(actualType)) {
        __listeners.set(actualType, new Map());
      }
      var listenersForType = __listeners.get(actualType);
      if (!listenersForType.has(listener)) {
        // Any given listener is only registered once
        listenersForType.set(listener, options);
      }
    };
    EventTarget.prototype.removeEventListener = function (type, listener, _options) {
      if (arguments.length < 2) {
        throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only " + arguments.length + " present.");
      }
      var __listeners = this.__listeners;
      var actualType = type.toString();
      if (__listeners.has(actualType)) {
        var listenersForType = __listeners.get(actualType);
        if (listenersForType.has(listener)) {
          listenersForType.delete(listener);
        }
      }
    };
    EventTarget.prototype.dispatchEvent = function (event) {
      var _this = this;
      if (!(event instanceof Event)) {
        throw new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.");
      }
      var type = event.type;
      var __listeners = this.__listeners;
      var listenersForType = __listeners.get(type);
      if (listenersForType) {
        var _iterator = _createForOfIteratorHelper(listenersForType.entries()),
          _step;
        try {
          var _loop = function _loop() {
              listnerEntry = _step.value;
              var listener = listnerEntry[0];
              var options = listnerEntry[1];
              try {
                if (typeof listener === "function") {
                  // Listener functions must be executed with the EventTarget as the `this` context.
                  listener.call(_this, event);
                } else if (listener && typeof listener.handleEvent === "function") {
                  // Listener objects have their handleEvent method called, if they have one
                  listener.handleEvent(event);
                }
              } catch (err) {
                // We need to report the error to the global error handling event,
                // but we do not want to break the loop that is executing the events.
                // Unfortunately, this is the best we can do, which isn't great, because the
                // native EventTarget will actually do this synchronously before moving to the next
                // event in the loop.
                setTimeout(function () {
                  throw err;
                });
              }
              if (options && options.once) {
                // If this was registered with { once: true }, we need
                // to remove it now.
                listenersForType.delete(listener);
              }
            },
            listnerEntry;
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      // Since there are no cancellable events on a base EventTarget,
      // this should always return true.
      return true;
    };
    return EventTarget;
  }();
}

/***/ }),

/***/ "./node_modules/@defra/flood-map/src/js/lib/capabilities.js":
/*!******************************************************************!*\
  !*** ./node_modules/@defra/flood-map/src/js/lib/capabilities.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capabilities: function() { return /* binding */ capabilities; },
/* harmony export */   getArrayFindLast: function() { return /* binding */ getArrayFindLast; }
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var getWebGL = function getWebGL(names) {
  if (!window.WebGLRenderingContext) {
    // WebGL is not supported
    return {
      isEnabled: false,
      error: 'WebGL is not supported'
    };
  }
  var canvas = document.createElement('canvas');
  var context = false;
  var _iterator = _createForOfIteratorHelper(names),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      try {
        context = canvas.getContext(name);
        if (context && typeof context.getParameter === 'function') {
          // WebGL is enabled
          return {
            isEnabled: true
          };
        }
      } catch (e) {
        // WebGL is supported, but disabled
      }
    }
    // WebGL is supported, but disabled
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    isEnabled: false,
    error: 'WebGL is supported, but disabled'
  };
};
var getArrayFindLast = function getArrayFindLast() {
  if (Array.prototype.findLast) {
    return {
      isSupported: true
    };
  }
  return {
    isSupported: false,
    error: 'Array.prototype.findLast() is not supported'
  };
};
var capabilities = {
  default: {
    srid: '4326',
    hasSize: !!window.globalThis,
    isLatest: !!window.globalThis,
    getDevice: function getDevice() {
      var webGL = getWebGL(['webgl2', 'webgl1']);
      var isIE = document.documentMode;
      return {
        isSupported: webGL.isEnabled,
        error: isIE && 'Internet Explorer is not supported' || webGL.error
      };
    }
  },
  esri: {
    srid: '27700',
    hasSize: false,
    getDevice: function getDevice() {
      var webGL = getWebGL(['webgl2']);
      var arrayFindLast = getArrayFindLast();
      return {
        isSupported: webGL.isEnabled && arrayFindLast.isSupported,
        error: arrayFindLast.error || webGL.error
      };
    }
  }
};

/***/ }),

/***/ "./node_modules/@defra/flood-map/src/js/lib/dom.js":
/*!*********************************************************!*\
  !*** ./node_modules/@defra/flood-map/src/js/lib/dom.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constrainFocus: function() { return /* binding */ constrainFocus; },
/* harmony export */   findTabStop: function() { return /* binding */ findTabStop; },
/* harmony export */   setInitialFocus: function() { return /* binding */ setInitialFocus; },
/* harmony export */   toggleInert: function() { return /* binding */ toggleInert; },
/* harmony export */   updateTitle: function() { return /* binding */ updateTitle; }
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var ATTR_PAGE = 'data-fm-page';
var ARIA_HIDDEN = 'aria-hidden';
var getContainer = function getContainer(el) {
  var _container, _modal, _container2;
  var isPage = !!document.querySelector("[".concat(ATTR_PAGE, "]"));
  var container = document.querySelector("[".concat(ATTR_PAGE, "]")) || (el === null || el === void 0 ? void 0 : el.closest('[data-fm-container]'));
  var modal = (_container = container) === null || _container === void 0 ? void 0 : _container.querySelector('[aria-modal="true"][open]');
  var isWithinModal = (_modal = modal) === null || _modal === void 0 ? void 0 : _modal.contains(el);
  var isWithinContainer = (_container2 = container) === null || _container2 === void 0 ? void 0 : _container2.contains(el);
  modal = (isPage || isWithinContainer) && isWithinModal && modal;
  container = isPage && container;
  return modal || container;
};
var updateTitle = function updateTitle() {
  var _document$querySelect;
  var page = (_document$querySelect = document.querySelector("[".concat(ATTR_PAGE, "]"))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute(ATTR_PAGE);
  document.documentElement.classList.toggle('fm-page', !!page);
  var parts = document.title.split(' - ');
  var title = parts[parts.length - 1];
  document.title = page ? "".concat(page, " - ").concat(title) : title;
};
var toggleInert = function toggleInert(activeEl) {
  var inertEls = document.querySelectorAll('[data-fm-inert]');
  var _iterator = _createForOfIteratorHelper(inertEls),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var inertEl = _step.value;
      inertEl.removeAttribute(ARIA_HIDDEN);
      inertEl.removeAttribute('data-fm-inert');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var el = getContainer(activeEl || document.activeElement);
  if (!el) {
    return;
  }
  while (el.parentNode && el !== document.body) {
    var sibling = el.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== el && !sibling.hasAttribute(ARIA_HIDDEN)) {
        sibling.setAttribute(ARIA_HIDDEN, true);
        sibling.setAttribute('data-fm-inert', '');
      }
      sibling = sibling.nextSibling;
    }
    el = el.parentNode;
  }
};
var setInitialFocus = function setInitialFocus() {
  var _el, _modal2;
  var el = document.activeElement;
  var isPage = !!document.querySelector("[".concat(ATTR_PAGE, "]"));
  var container = document.querySelector("[".concat(ATTR_PAGE, "]")) || ((_el = el) === null || _el === void 0 ? void 0 : _el.closest('[data-fm-container]'));
  var modal = container === null || container === void 0 ? void 0 : container.querySelector('[aria-modal="true"][open]');
  var isWithinModal = (_modal2 = modal) === null || _modal2 === void 0 ? void 0 : _modal2.contains(el);
  var isWithinContainer = container === null || container === void 0 ? void 0 : container.contains(el);
  modal = (isPage || isWithinContainer) && modal && !isWithinModal && modal;
  var viewport = isPage && !isWithinContainer && container.querySelector('[data-fm-viewport]');
  el = modal || viewport;
  if (el) {
    el.focus();
  }
};
var constrainFocus = function constrainFocus(e) {
  if (e.key !== 'Tab') {
    return;
  }
  var el = document.activeElement.closest("[aria-modal=\"true\"][open], [".concat(ATTR_PAGE, "]"));
  if (!el) {
    return;
  }
  var selectors = ['a[href]:not([disabled])', 'button:not([disabled])', 'textarea:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', '*[tabindex="0"]:not([disabled])'];
  var focusableEls = Array.from(el.querySelectorAll(selectors.join(',')));
  focusableEls = focusableEls.filter(function (focusableEl) {
    return !!focusableEl.offsetParent;
  });
  var firstFocusableEl = focusableEls[0];
  var lastFocusableEl = focusableEls[focusableEls.length - 1];
  if (e.shiftKey && (document.activeElement === el || document.activeElement === firstFocusableEl)) {
    lastFocusableEl.focus();
    e.preventDefault();
  }
  if (!e.shiftKey && document.activeElement === lastFocusableEl) {
    firstFocusableEl.focus();
    e.preventDefault();
  }
};
var findTabStop = function findTabStop(el, direction) {
  var focusableEls = document.querySelectorAll('input, button, select, textarea, a[href]');
  var list = Array.prototype.filter.call(focusableEls, function (item) {
    return item.tabIndex >= '0';
  });
  var index = list.indexOf(el);
  return list[direction === 'next' ? index + 1 : index - 1] || list[0];
};

/***/ }),

/***/ "./node_modules/@defra/flood-map/src/js/lib/eventbus.js":
/*!**************************************************************!*\
  !*** ./node_modules/@defra/flood-map/src/js/lib/eventbus.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var eventBus = {
  on: function on(el, event, callback) {
    el.addEventListener(event, function (e) {
      return callback(e.detail);
    });
  },
  dispatch: function dispatch(el, event, data) {
    el.dispatchEvent(new CustomEvent(event, {
      detail: data
    }));
  },
  remove: function remove(el, event, callback) {
    el.removeEventListener(event, callback);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (eventBus);

/***/ }),

/***/ "./node_modules/@defra/flood-map/src/js/lib/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/@defra/flood-map/src/js/lib/utils.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColor: function() { return /* binding */ getColor; },
/* harmony export */   getQueryParam: function() { return /* binding */ getQueryParam; },
/* harmony export */   hasQueryParam: function() { return /* binding */ hasQueryParam; },
/* harmony export */   isSame: function() { return /* binding */ isSame; },
/* harmony export */   parseAttribute: function() { return /* binding */ parseAttribute; }
/* harmony export */ });
var parseAttribute = function parseAttribute(a) {
  try {
    return JSON.parse(a);
  } catch (e) {
    return a;
  }
};
var isSame = function isSame(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
};
var getQueryParam = function getQueryParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};
var hasQueryParam = function hasQueryParam(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.has(name);
};
var getColor = function getColor(value, style) {
  var colors = value === null || value === void 0 ? void 0 : value.replace(/\s/g, '').split(',').map(function (f) {
    return f.includes(':') ? f : "default:".concat(f);
  });
  var color = colors !== null && colors !== void 0 && colors.length ? (colors.find(function (f) {
    return f.includes(style);
  }) || colors[0]).split(':')[1] : null;
  return color;
};

/***/ }),

/***/ "./node_modules/@defra/flood-map/src/js/store/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@defra/flood-map/src/js/store/constants.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaults: function() { return /* binding */ defaults; },
/* harmony export */   drawTools: function() { return /* binding */ drawTools; },
/* harmony export */   events: function() { return /* binding */ events; },
/* harmony export */   margin: function() { return /* binding */ margin; },
/* harmony export */   offsets: function() { return /* binding */ offsets; },
/* harmony export */   settings: function() { return /* binding */ settings; },
/* harmony export */   tools: function() { return /* binding */ tools; }
/* harmony export */ });
var events = {
  READY: 'ready',
  CHANGE: 'change',
  QUERY: 'query',
  ACTION: 'action',
  APP_READY: 'appready',
  APP_CHANGE: 'appchange',
  APP_QUERY: 'appquery',
  APP_ACTION: 'appaction',
  SET_SEARCH: 'setsearch',
  SET_INFO: 'setinfo',
  SET_SELECTED: 'setselected',
  SET_INTERFACE_TYPE: 'setinterfacetype',
  MAP_QUERY: 'mapquery',
  MAP_CLICK: 'mapclick',
  MAP_LOAD: 'load',
  MAP_STYLE: 'style'
};
var defaults = {
  CONTAINER_TYPE: 'buttonFirst',
  PANEL_POSITION: 'overlayRight',
  MIN_SEARCH_LENGTH: 3,
  STYLES: ['default', 'dark', 'aerial', 'deuteranopia', 'tritanopia'],
  MAX_BOUNDS_4326: [-5.719993, 49.955638, 1.794689, 55.825973],
  MAX_BOUNDS_27700: [167161, 13123, 670003, 663805]
};
var settings = {
  breakpoints: {
    MAX_MOBILE: '640px',
    MIN_DESKTOP: '835px'
  },
  container: {
    buttonFirst: {
      CLASS: 'fm-button-first'
    },
    hybrid: {
      CLASS: 'fm-hybrid',
      HEIGHT: '600px'
    },
    inline: {
      CLASS: 'fm-inline',
      HEIGHT: '600px'
    }
  },
  params: {
    view: 'view',
    centerZoom: 'cz',
    segments: 'seg',
    layers: 'lyr'
  }
};
var offsets = {
  drag: 2,
  pan: {
    ARROWLEFT: [-100, 0],
    ARROWRIGHT: [100, 0],
    ARROWUP: [0, -100],
    ARROWDOWN: [0, 100]
  },
  shiftPan: {
    ARROWLEFT: [-5, 0],
    ARROWRIGHT: [5, 0],
    ARROWUP: [0, -5],
    ARROWDOWN: [0, 5]
  }
};
var margin = {
  TOP: 90,
  BOTTOM: 15,
  LEFT: 70
};
var tools = [{
  id: 'edit',
  name: 'Edit',
  svg: '<path d="M11.298 4.666l3.536 3.536-7.071 7.071-3.536-3.536 7.071-7.071zm2.475-2.475a1.5 1.5 0 0 1 2.121 0l1.415 1.415a1.5 1.5 0 0 1 0 2.121l-1.768 1.768-3.536-3.536 1.768-1.768zM3.52 12.444l3.536 3.536-5.304 1.768 1.768-5.304z"/>'
}, {
  id: 'delete',
  name: 'Delete',
  svg: '<path d="M3 5.963H2V3.989h4V2h8v1.989h4v1.974h-.956V18H3V5.963zm12 0H5.044v10.063H15V5.963zm-8.547 1.04l1-.006.047 8-1 .006-.047-8zm3.024 0l1-.006.046 8-1 .006-.046-8zm3 0l1-.006.046 8-1 .006-.046-8z"/>'
}];
var drawTools = [{
  id: 'square',
  name: 'Square',
  drawMode: 'frame',
  svg: '<path d="M18.002 18H2.001V2h16.001v16zM16.001 4H4.002v12h11.999V4z"/>'
}, {
  id: 'polygon',
  name: 'Polygon',
  drawMode: 'vertex',
  svg: '<path d="M2.98 6h-.919V2H5.98v1h8.041V2h3.919v4h-.96v7.996h.96v4h-3.919V17H5.98v1H2.061v-4h.919V6zm3-1v1h-1v8h1v1h8.041v-1.004h.959V6h-.959V5H5.98z"/>'
}];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "defra:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"map": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdefra"] = self["webpackChunkdefra"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!********************************************************!*\
  !*** ./node_modules/@defra/flood-map/src/flood-map.js ***!
  \********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloodMap: function() { return /* binding */ FloodMap; }
/* harmony export */ });
/* harmony import */ var _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/store/constants.js */ "./node_modules/@defra/flood-map/src/js/store/constants.js");
/* harmony import */ var _js_lib_capabilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/lib/capabilities.js */ "./node_modules/@defra/flood-map/src/js/lib/capabilities.js");
/* harmony import */ var _js_lib_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/lib/utils.js */ "./node_modules/@defra/flood-map/src/js/lib/utils.js");
/* harmony import */ var _js_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/lib/dom.js */ "./node_modules/@defra/flood-map/src/js/lib/dom.js");
/* harmony import */ var _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/lib/eventbus.js */ "./node_modules/@defra/flood-map/src/js/lib/eventbus.js");
/* harmony import */ var event_target_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! event-target-polyfill */ "./node_modules/event-target-polyfill/index.js");
/* harmony import */ var event_target_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(event_target_polyfill__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





// Polyfills

var _window = window,
  location = _window.location,
  history = _window.history;
var cssFocusVisible = 'fm-u-focus-visible';
var FloodMap = /*#__PURE__*/function (_EventTarget) {
  function FloodMap(id, props, callBack) {
    var _this;
    _classCallCheck(this, FloodMap);
    _this = _callSuper(this, FloodMap);
    _defineProperty(_this, "_search", void 0);
    _defineProperty(_this, "_info", void 0);
    _defineProperty(_this, "_selected", void 0);
    _this.el = document.getElementById(id);

    // Check capabilities
    var device = _this._testDevice(props);
    if (!device.isSupported) {
      _this._renderError('Your device is not supported. A map is available with a more up-to-date browser or device.');
      // Remove hidden class
      document.body.classList.remove('fm-js-hidden');
      // Add error flag to body
      document.body.setAttribute('data-fm-error', '');
      // Log error message
      device.error && console.log(device.error);
      return _possibleConstructorReturn(_this);
    }

    // Merge props
    var dataset = _objectSpread({}, _this.el.dataset);
    Object.keys(dataset).forEach(function (key) {
      dataset[key] = (0,_js_lib_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseAttribute)(dataset[key]);
    });
    var parent = document.getElementById(dataset.container || props.container || id);
    var options = _objectSpread(_objectSpread({
      id: id,
      parent: parent,
      title: document.title
    }, props), dataset);
    _this.props = options;
    _this.callBack = callBack;
    _this.id = id;
    _this.root = null;

    // Get visibility
    var maxMobile = options.maxMobile;
    var mobileMQ = window.matchMedia("(max-width: ".concat(maxMobile || _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.settings.breakpoints.MAX_MOBILE, ")"));
    _this.searchParams = new URLSearchParams(document.location.search);

    // Set isMobile and isVisible
    _this._handleMobileMQ(mobileMQ);

    // Add container
    if (_this.isVisible) {
      _this._importComponent();
    }

    // Add button
    if (['buttonFirst', 'hybrid'].includes(props.behaviour)) {
      _this._insertButtonHTML();
      // Remove hidden class
      if (!_this.isVisible) {
        document.body.classList.remove('fm-js-hidden');
      }
    }

    // Exit map
    _this.props.handleExit = _this._handleExit.bind(_this);

    // Responsive change add/remove app
    mobileMQ.addEventListener('change', function () {
      _this._handleMobileMQ(mobileMQ);
      _this.isVisible ? _this._importComponent() : _this._removeComponent();
    });

    // History change add/remove app
    window.addEventListener('popstate', _this._handlePopstate.bind(_this));

    // Set initial focus
    window.addEventListener('focus', function () {
      (0,_js_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.setInitialFocus)();
    });

    // Set keyboard interfaceType
    window.addEventListener('keydown', _this._handleKeydown.bind(_this), true);

    // Set touch interfaceType
    window.addEventListener('touchstart', _this._handleTouchstart.bind(_this), true);

    // Unset interfaceType
    window.addEventListener('pointerdown', _this._handlePointerdown.bind(_this));
    window.addEventListener('wheel', _this._handlePointerdown.bind(_this));

    // Polyfil :focus-visible set
    var handleFocusIn = function handleFocusIn() {
      if (_this.interfaceType === 'keyboard') {
        document.activeElement.classList.add(cssFocusVisible);
      }
    };
    window.addEventListener('focusin', handleFocusIn);

    // Polyfil :focus-visible remove
    var handleFocusOut = function handleFocusOut(e) {
      e.target.classList.remove(cssFocusVisible);
    };
    window.addEventListener('focusout', handleFocusOut);

    // Component ready
    _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].on(parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.APP_READY, function (data) {
      Object.assign(_this, data.framework);
      _this.modules = data.modules;
      _this.isReady = true;
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_INTERFACE_TYPE, _this.interfaceType);
      // We now have a reference to the map
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.READY, _objectSpread({
        type: 'ready'
      }, data));
      // Need to call these after the component is ready
      if (_this._info) {
        _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_INFO, _this._info);
      }
      if (_this._selected) {
        _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_SELECTED, _this._selected);
      }
    });

    // Change, eg segment, layer or style
    _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].on(parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.APP_CHANGE, function (data) {
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.CHANGE, data);
    });

    // Query, eg Click or keyboard
    _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].on(parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.APP_QUERY, function (data) {
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.QUERY, data);
    });

    // Action, eg delete a polygon or confirm update
    _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].on(parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.APP_ACTION, function (data) {
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(_this, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.ACTION, data);
    });
    return _this;
  }
  _inherits(FloodMap, _EventTarget);
  return _createClass(FloodMap, [{
    key: "_testDevice",
    value: function _testDevice(props) {
      var device = function device(framework) {
        return _js_lib_capabilities_js__WEBPACK_IMPORTED_MODULE_1__.capabilities[framework || 'default'].getDevice();
      };
      var _device = device(props.framework),
        isSupported = _device.isSupported,
        error = _device.error;
      var isImplementationSupported = props.deviceTestCallback ? props.deviceTestCallback() : true;
      return {
        isSupported: isSupported && isImplementationSupported,
        error: error
      };
    }
  }, {
    key: "_renderError",
    value: function _renderError(text) {
      this.el.insertAdjacentHTML('beforebegin', "\n      <div class=\"fm-error\">\n        <p class=\"govuk-body\">".concat(text, "</p>\n      </div>\n    "));
    }
  }, {
    key: "_insertButtonHTML",
    value: function _insertButtonHTML() {
      var _this$props = this.props,
        buttonText = _this$props.buttonText,
        buttonType = _this$props.buttonType;
      this.el.insertAdjacentHTML('beforebegin', "\n      <a href=\"".concat(location.pathname, "?view=").concat(this.id, "\" class=\"").concat(buttonType === 'anchor' ? 'fm-c-btn-open-map-anchor' : 'fm-c-btn-open-map', "\" ").concat(this.isVisible ? 'style="display:none"' : '', " role=\"button\">\n          <svg focusable='false' aria-hidden='true' width='16' height='20' viewBox='0 0 16 20' fillRule='evenodd'><path d='M15 7.5c.009 3.778-4.229 9.665-7.5 12.5C4.229 17.165-.009 11.278 0 7.5a7.5 7.5 0 1 1 15 0z'/><path d='M7.5 12.961a5.46 5.46 0 1 0 0-10.922 5.46 5.46 0 1 0 0 10.922z' fill='#fff'/></svg><span>").concat(buttonText || 'Map view', "</span>\n          <span class='fm-u-visually-hidden'>(Visual only)</span>\n      </a>\n    "));
      var button = this.el.previousElementSibling;
      button.addEventListener('click', this._handleClick.bind(this));
      this.button = button;
    }
  }, {
    key: "_handleExit",
    value: function _handleExit() {
      var _history$state,
        _this2 = this;
      if ((_history$state = history.state) !== null && _history$state !== void 0 && _history$state.isBack) {
        history.back();
        return;
      }
      this._removeComponent();
      Object.keys(_js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.settings.params).forEach(function (k) {
        return _this2.searchParams.delete(_js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.settings.params[k]);
      });
      var url = location.pathname + this.searchParams.toString();
      history.replaceState({
        isBack: false
      }, '', url);
    }
  }, {
    key: "_handleClick",
    value: function _handleClick(e) {
      e.preventDefault();
      history.pushState({
        isBack: true
      }, '', "".concat(e.target.getAttribute('href')));
      this.button.setAttribute('data-fm-open', '');
      this._importComponent();
    }
  }, {
    key: "_handleMobileMQ",
    value: function _handleMobileMQ(e) {
      var behaviour = this.props.behaviour;
      var hasViewParam = new URLSearchParams(document.location.search).get('view') === this.id;
      this.isMobile = e.matches;
      this.isVisible = hasViewParam || behaviour === 'inline' || behaviour === 'hybrid' && !e.matches;
    }
  }, {
    key: "_handlePopstate",
    value: function _handlePopstate() {
      var _history$state2;
      var behaviour = this.props.behaviour;
      var hasButton = behaviour === 'buttonFirst' || behaviour === 'hybrid' && this.isMobile;
      if ((_history$state2 = history.state) !== null && _history$state2 !== void 0 && _history$state2.isBack) {
        this._importComponent();
      } else if (hasButton) {
        this._removeComponent();
      } else {
        // No action
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (event.key === 'Tab') {
        this.interfaceType = 'keyboard';
        _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_INTERFACE_TYPE, 'keyboard');
      }
    }
  }, {
    key: "_handleTouchstart",
    value: function _handleTouchstart() {
      this.interfaceType = 'touch';
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_INTERFACE_TYPE, 'touch');
    }
  }, {
    key: "_handlePointerdown",
    value: function _handlePointerdown() {
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_INTERFACE_TYPE, null);
      document.activeElement.classList.remove(cssFocusVisible);
      this.interfaceType = null;
    }
  }, {
    key: "_importComponent",
    value: function _importComponent() {
      var _this$button,
        _this3 = this;
      (_this$button = this.button) === null || _this$button === void 0 || _this$button.setAttribute('style', 'display: none');
      // Add loading spinner
      __webpack_require__.e(/*! import() | flood-map-ui */ "flood-map-ui").then(__webpack_require__.bind(__webpack_require__, /*! ./root.js */ "./node_modules/@defra/flood-map/src/root.js")).then(function (module) {
        _this3._addComponent(module.default);
      }).catch(function (err) {
        // Display error content
        _this3._renderError('There was a problem loading the map. Please try again later');
        console.log(err);
      });
    }
  }, {
    key: "_addComponent",
    value: function _addComponent(root) {
      if (this.root) {
        return;
      }
      this.root = root(this.el, _objectSpread(_objectSpread({}, this.props), {}, {
        callBack: this.callBack,
        interfaceType: this.interfaceType
      }));
    }
  }, {
    key: "_removeComponent",
    value: function _removeComponent() {
      var _this$root;
      this.button.removeAttribute('style');
      this.button.removeAttribute('data-open');
      this.button.focus();
      (_this$root = this.root) === null || _this$root === void 0 || _this$root.unmount();
      this.root = null;
      this._selected = null;
      this._info = null;
      (0,_js_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.updateTitle)();
      (0,_js_lib_dom_js__WEBPACK_IMPORTED_MODULE_3__.toggleInert)();
    }

    // Public methods
  }, {
    key: "setInfo",
    value: function setInfo(value) {
      this._info = value;
      if (!this.isReady) {
        return;
      }
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_INFO, this._info);
    }
  }, {
    key: "setSelected",
    value: function setSelected(value) {
      this._selected = value;
      if (!this.isReady) {
        return;
      }
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_SELECTED, this._selected);
    }
  }, {
    key: "setModal",
    value: function setModal(value) {
      if (!this.isReady) {
        return;
      }
      _js_lib_eventbus_js__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(this.props.parent, _js_store_constants_js__WEBPACK_IMPORTED_MODULE_0__.events.SET_MODAL, value);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(EventTarget));
}();
window.defra = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=map.js.map