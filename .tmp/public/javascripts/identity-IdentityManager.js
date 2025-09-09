(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["identity-IdentityManager"],{

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/@esri/arcgis-html-sanitizer/dist/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@esri/arcgis-html-sanitizer/dist/esm/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sanitizer: function() { return /* binding */ Sanitizer; },
/* harmony export */   "default": function() { return /* binding */ Sanitizer; }
/* harmony export */ });
/*!
 * @esri/arcgis-html-sanitizer - v4.1.0 - Tue Dec 03 2024 09:13:28 GMT-0500 (Eastern Standard Time)
 * Copyright (c) 2024 - Environmental Systems Research Institute, Inc.
 * Apache-2.0
 * 
 * js-xss
 * Copyright (c) 2012-2018 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var lib$1 = {exports: {}};

var _default$1 = {};

var lib = {exports: {}};

var _default = {};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList$1 () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue$1(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


_default.whiteList = getDefaultWhiteList$1();
_default.getDefaultWhiteList = getDefaultWhiteList$1;
_default.onAttr = onAttr;
_default.onIgnoreAttr = onIgnoreAttr;
_default.safeAttrValue = safeAttrValue$1;

var util$1 = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _$3 = util$1;


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle$1 (css, onAttr) {
  css = _$3.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _$3.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _$3.trim(source.slice(0, j));
        var value = _$3.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) ; else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _$3.trim(retCSS);
}

var parser$2 = parseStyle$1;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT$1 = _default;
var parseStyle = parser$2;


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull$1 (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject$1 (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS$2 (options) {
  options = shallowCopyObject$1(options || {});
  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
  this.options = options;
}

FilterCSS$2.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull$1(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull$1(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


var css = FilterCSS$2;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

(function (module, exports) {
	var DEFAULT = _default;
	var FilterCSS = css;


	/**
	 * XSS过滤
	 *
	 * @param {String} css 要过滤的CSS代码
	 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
	 * @return {String}
	 */
	function filterCSS (html, options) {
	  var xss = new FilterCSS(options);
	  return xss.process(html);
	}


	// 输出
	exports = module.exports = filterCSS;
	exports.FilterCSS = FilterCSS;
	for (var i in DEFAULT) exports[i] = DEFAULT[i];
} (lib, lib.exports));

var libExports$1 = lib.exports;

var util = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  },
};

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS$1 = libExports$1.FilterCSS;
var getDefaultCSSWhiteList = libExports$1.getDefaultWhiteList;
var _$2 = util;

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width",
    ],
  };
}

var defaultCSSFilter = new FilterCSS$1();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _$2.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
// var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
  /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
  /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _$2.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _$2.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end,
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;
      _$2.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    },
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i = html.indexOf("<!--", lastPos);
    if (i === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i);
    var j = html.indexOf("-->", i);
    if (j === -1) {
      break;
    }
    lastPos = j + 3;
  }
  return retHtml;
}

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

_default$1.whiteList = getDefaultWhiteList();
_default$1.getDefaultWhiteList = getDefaultWhiteList;
_default$1.onTag = onTag;
_default$1.onIgnoreTag = onIgnoreTag;
_default$1.onTagAttr = onTagAttr;
_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
_default$1.safeAttrValue = safeAttrValue;
_default$1.escapeHtml = escapeHtml;
_default$1.escapeQuote = escapeQuote;
_default$1.unescapeQuote = unescapeQuote;
_default$1.escapeHtmlEntities = escapeHtmlEntities;
_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
_default$1.friendlyAttrValue = friendlyAttrValue;
_default$1.escapeAttrValue = escapeAttrValue;
_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
_default$1.StripTagBody = StripTagBody;
_default$1.stripCommentTag = stripCommentTag;
_default$1.stripBlankChar = stripBlankChar;
_default$1.cssFilter = defaultCSSFilter;
_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

var parser$1 = {};

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _$1 = util;

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _$1.spaceIndex(html);
  var tagName;
  if (i === -1) {
    tagName = html.slice(1, -1);
  } else {
    tagName = html.slice(1, i + 1);
  }
  tagName = _$1.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag$1(html, onTag, escapeHtml) {

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c === '"' || c === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr$1(html, onAttr) {

  var lastPos = 0;
  var lastMarkPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _$1.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastMarkPos
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _$1.trim(html.slice(lastMarkPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
    }
  }

  return _$1.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findNextQuotationMark(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "'" || c === '"') return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

parser$1.parseTag = parseTag$1;
parser$1.parseAttr = parseAttr$1;

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = libExports$1.FilterCSS;
var DEFAULT = _default$1;
var parser = parser$1;
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = util;

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing,
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

function keysToLowerCase(obj) {
  var ret = {};
  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      ret[i.toLowerCase()] = obj[i].map(function (item) {
        return item.toLowerCase();
      });
    } else {
      ret[i.toLowerCase()] = obj[i];
    }
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }
  if (options.whiteList || options.allowList) {
    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
  } else {
    options.whiteList = DEFAULT.whiteList;
  }

  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag),
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

var xss = FilterXSS;

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

(function (module, exports) {
	var DEFAULT = _default$1;
	var parser = parser$1;
	var FilterXSS = xss;

	/**
	 * filter xss function
	 *
	 * @param {String} html
	 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
	 * @return {String}
	 */
	function filterXSS(html, options) {
	  var xss = new FilterXSS(options);
	  return xss.process(html);
	}

	exports = module.exports = filterXSS;
	exports.filterXSS = filterXSS;
	exports.FilterXSS = FilterXSS;

	(function () {
	  for (var i in DEFAULT) {
	    exports[i] = DEFAULT[i];
	  }
	  for (var j in parser) {
	    exports[j] = parser[j];
	  }
	})();

	// using `xss` on the WebWorker, output `filterXSS` to the globals
	function isWorkerEnv() {
	  return (
	    typeof self !== "undefined" &&
	    typeof DedicatedWorkerGlobalScope !== "undefined" &&
	    self instanceof DedicatedWorkerGlobalScope
	  );
	}
	if (isWorkerEnv()) {
	  self.filterXSS = module.exports;
	} 
} (lib$1, lib$1.exports));

var libExports = lib$1.exports;

/**
 * Determine if the value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */
var isPlainObject = function (value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

/**
 * The Sanitizer Class
 *
 * @export
 * @class Sanitizer
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer(filterOptions, extendDefaults) {
        var _this = this;
        // Supported HTML Spec: https://doc.arcgis.com/en/arcgis-online/reference/supported-html.htm
        this.arcgisWhiteList = {
            a: ["href", "style", "target"],
            abbr: ["title"],
            article: ["style"],
            aside: ["style"],
            audio: ["autoplay", "controls", "loop", "muted", "preload"],
            b: [],
            blockquote: ["style"],
            br: [],
            code: ["style"],
            dd: ["style"],
            del: ["style"],
            details: ["open", "style"],
            div: ["align", "aria-hidden", "aria-label", "style"],
            dl: ["style"],
            dt: ["style"],
            em: [],
            figcaption: ["style"],
            figure: ["style"],
            font: ["color", "face", "size", "style"],
            footer: ["style"],
            h1: ["style"],
            h2: ["style"],
            h3: ["style"],
            h4: ["style"],
            h5: ["style"],
            h6: ["style"],
            header: ["style"],
            hr: [],
            i: [],
            img: ["alt", "border", "height", "src", "style", "width"],
            li: [],
            main: ["style"],
            mark: ["style"],
            nav: ["style"],
            ol: [],
            p: ["style"],
            pre: ["style"],
            section: ["style"],
            source: ["media", "src", "type"],
            span: ["aria-hidden", "aria-label", "style"],
            strong: [],
            sub: ["style"],
            summary: ["style"],
            sup: ["style"],
            table: ["border", "cellpadding", "cellspacing", "height", "style", "width"],
            tbody: [],
            tr: ["align", "height", "style", "valign"],
            td: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width",
            ],
            th: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width",
            ],
            time: ["style"],
            u: [],
            ul: [],
            video: [
                "autoplay",
                "controls",
                "height",
                "loop",
                "muted",
                "poster",
                "preload",
                "width",
            ],
        };
        this.arcgisCSSWhiteList = __assign(__assign({}, libExports.getDefaultCSSWhiteList()), { "align-items": true, "align-self": true, "flex": true, "flex-basis": true, "flex-direction": true, "flex-flow": true, "flex-grow": true, "flex-shrink": true, "flex-wrap": true, "float": true, "gap": true, "grid": true, "grid-area": true, "grid-auto-columns": true, "grid-auto-flow": true, "grid-auto-rows": true, "grid-column": true, "grid-column-end": true, "grid-column-start": true, "grid-row": true, "grid-row-end": true, "grid-row-start": true, "grid-template": true, "grid-template-areas": true, "grid-template-columns": true, "grid-template-rows": true, "justify-content": true, "justify-items": true, "justify-self": true, "line-height": true, "overflow": true });
        this.allowedProtocols = [
            "http",
            "https",
            "mailto",
            "iform",
            "tel",
            "flow",
            "lfmobile",
            "arcgis-navigator",
            "arcgis-appstudio-player",
            "arcgis-survey123",
            "arcgis-collector",
            "arcgis-workforce",
            "arcgis-explorer",
            "arcgis-trek2there",
            "arcgis-quickcapture",
            "mspbi",
            "comgooglemaps",
            "pdfefile",
            "pdfehttp",
            "pdfehttps",
            "boxapp",
            "boxemm",
            "awb",
            "awbs",
            "gropen",
            "radarscope",
        ];
        this.arcgisFilterOptions = {
            allowCommentTag: true,
            safeAttrValue: function (tag, name, value, cssFilter) {
                // Take over safe attribute filtering for `a` `href`, `img` `src`,
                // and `source` `src` attributes, otherwise pass onto the
                // default `XSS.safeAttrValue` method.
                if ((tag === "a" && name === "href") ||
                    ((tag === "img" || tag === "source") && name === "src")) {
                    return _this.sanitizeUrl(value);
                }
                return libExports.safeAttrValue(tag, name, value, cssFilter);
            },
        };
        this._entityMap = {
            "&": "&#x38;",
            "<": "&#x3C;",
            ">": "&#x3E;",
            '"': "&#x22;",
            "'": "&#x27;",
            "/": "&#x2F;",
        };
        var xssFilterOptions;
        if (filterOptions && !extendDefaults) {
            // Override the defaults
            xssFilterOptions = filterOptions;
        }
        else if (filterOptions && extendDefaults) {
            // Extend the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
            Object.keys(filterOptions).forEach(function (key) {
                if (key === "whiteList") {
                    // Extend the whitelist by concatenating arrays
                    xssFilterOptions.whiteList = _this._extendObjectOfArrays([
                        _this.arcgisWhiteList,
                        filterOptions.whiteList || {},
                    ]);
                }
                else if (key === "css") {
                    var cssExtensions_1 = filterOptions.css.whiteList;
                    if (cssExtensions_1 != null && filterOptions.css instanceof Object) {
                        Object.keys(cssExtensions_1).forEach(function (attr) {
                            return (xssFilterOptions.css.whiteList[attr] =
                                cssExtensions_1[attr]);
                        });
                    }
                }
                else {
                    xssFilterOptions[key] = filterOptions[key];
                }
            });
        }
        else {
            // Only use the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.whiteList = this.arcgisWhiteList;
            xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
        }
        this.xssFilterOptions = xssFilterOptions;
        // Make this readable to tests
        this._xssFilter = new libExports.FilterXSS(xssFilterOptions);
    }
    /**
     * Sanitizes value to remove invalid HTML tags.
     *
     * Note: If the value passed does not contain a valid JSON data type (String,
     * Number, JSON Object, Array, Boolean, or null), the value will be nullified.
     *
     * @param {any} value The value to sanitize.
     * @returns {any} The sanitized value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitize = function (value, options) {
        if (options === void 0) { options = {}; }
        switch (typeof value) {
            case "number":
                if (isNaN(value) || !isFinite(value)) {
                    return null;
                }
                return value;
            case "boolean":
                return value;
            case "string":
                return this._xssFilter.process(value);
            case "object":
                return this._iterateOverObject(value, options);
            default:
                if (options.allowUndefined && typeof value === "undefined") {
                    return;
                }
                return null;
        }
    };
    /**
     * Sanitizes a URL string following the allowed protocols and sanitization rules.
     *
     * @param {string} value The URL to sanitize.
     * @param {{ isProtocolRequired: boolean }} options Configuration options for URL checking.
     * @returns {string} The sanitized URL if it's valid, or an empty string if the URL is invalid.
     */
    Sanitizer.prototype.sanitizeUrl = function (value, options) {
        var _a = (options !== null && options !== void 0 ? options : {}).isProtocolRequired, isProtocolRequired = _a === void 0 ? true : _a;
        var protocol = this._trim(value.substring(0, value.indexOf(":")));
        var isRootUrl = value === "/";
        var isUrlFragment = /^#/.test(value);
        var isValidProtocol = protocol && this.allowedProtocols.indexOf(protocol.toLowerCase()) > -1;
        if (isRootUrl || isUrlFragment || isValidProtocol) {
            return libExports.escapeAttrValue(value);
        }
        if (!protocol && !isProtocolRequired) {
            return libExports.escapeAttrValue("https://".concat(value));
        }
        return "";
    };
    /**
     * Sanitizes an HTML attribute value.
     *
     * @param {string} tag The tagname of the HTML element.
     * @param {string} attribute The attribute name of the HTML element.
     * @param {string} value The raw value to be used for the HTML attribute value.
     * @param {XSS.ICSSFilter} [cssFilter] The CSS filter to be used.
     * @returns {string} The sanitized attribute value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitizeHTMLAttribute = function (tag, attribute, value, cssFilter) {
        // use the custom safeAttrValue function if provided
        if (typeof this.xssFilterOptions.safeAttrValue === "function") {
            return this.xssFilterOptions.safeAttrValue(tag, attribute, value, 
            // @ts-expect-error safeAttrValue does handle undefined cssFilter
            cssFilter);
        }
        // otherwise use the default
        // @ts-ignore safeAttrValue does handle undefined cssFilter
        return libExports.safeAttrValue(tag, attribute, value, cssFilter);
    };
    /**
     * Checks if a value only contains valid HTML.
     *
     * @param {any} value The value to validate.
     * @returns {boolean}
     * @memberof Sanitizer
     */
    Sanitizer.prototype.validate = function (value, options) {
        if (options === void 0) { options = {}; }
        var sanitized = this.sanitize(value, options);
        return {
            isValid: value === sanitized,
            sanitized: sanitized,
        };
    };
    /**
     * Encodes the following characters, `& < > \" ' /` to their hexadecimal HTML entity code.
     * Example: "&middot;" => "&#x38;middot;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.encodeHTML = function (value) {
        var _this = this;
        return String(value).replace(/[&<>"'\/]/g, function (s) {
            return _this._entityMap[s];
        });
    };
    /**
     * Encodes all non-alphanumeric ASCII characters to their hexadecimal HTML entity codes.
     * Example: "alert(document.cookie)" => "alert&#x28;document&#x2e;cookie&#x29;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.encodeAttrValue = function (value) {
        var alphanumericRE = /^[a-zA-Z0-9]$/;
        return String(value).replace(/[\x00-\xFF]/g, function (c, idx) {
            return !alphanumericRE.test(c)
                ? "&#x".concat(Number(value.charCodeAt(idx)).toString(16), ";")
                : c;
        });
    };
    /**
     * Extends an object of arrays by by concatenating arrays of the same object
     * keys. If the if the previous key's value is not an array, the next key's
     * value will replace the previous key. This method is used for extending the
     * whiteList in the XSS filter options.
     *
     * @private
     * @param {Array<{}>} objects An array of objects.
     * @returns {{}} The extended object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._extendObjectOfArrays = function (objects) {
        var finalObj = {};
        objects.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (Array.isArray(obj[key]) && Array.isArray(finalObj[key])) {
                    finalObj[key] = finalObj[key].concat(obj[key]);
                }
                else {
                    finalObj[key] = obj[key];
                }
            });
        });
        return finalObj;
    };
    /**
     * Iterate over a plain object or array to deeply sanitize each value.
     *
     * @private
     * @param {object} obj The object to iterate over.
     * @returns {(object | null)} The sanitized object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._iterateOverObject = function (obj, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        try {
            var hasChanged_1 = false;
            var changedObj = void 0;
            if (Array.isArray(obj)) {
                changedObj = obj.reduce(function (prev, value) {
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        return prev.concat([value]);
                    }
                    else {
                        hasChanged_1 = true;
                        return prev.concat([validation.sanitized]);
                    }
                }, []);
            }
            else if (!isPlainObject(obj)) {
                if (options.allowUndefined && typeof obj === "undefined") {
                    return;
                }
                return null;
            }
            else {
                var keys = Object.keys(obj);
                changedObj = keys.reduce(function (prev, key) {
                    var value = obj[key];
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        prev[key] = value;
                    }
                    else {
                        hasChanged_1 = true;
                        prev[key] = validation.sanitized;
                    }
                    return prev;
                }, {});
            }
            if (hasChanged_1) {
                return changedObj;
            }
            return obj;
        }
        catch (err) {
            return null;
        }
    };
    /**
     * Trim whitespace from the start and ends of a string.
     * @param {string} val The string to trim.
     * @returns {string} The trimmed string.
     */
    Sanitizer.prototype._trim = function (val) {
        // @ts-ignore This is used by Jest,
        // but TypeScript errors since it assumes `trim` is always available.
        return String.prototype.trim
            ? val.trim()
            : val.replace(/(^\s*)|(\s*$)/g, "");
    };
    return Sanitizer;
}());




/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/browser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/browser.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ getUserAgentString; },
/* harmony export */   i: function() { return /* binding */ isBrowser; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


const isBrowser = () => _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser &&
    typeof navigator !== "undefined" &&
    typeof window !== "undefined" &&
    typeof location !== "undefined" &&
    typeof document !== "undefined" &&
    window.location === location &&
    window.document === document;
function getUserAgentData() {
    return navigator.userAgentData;
}
function getUserAgentString() {
    if (!isBrowser()) {
        return "";
    }
    const uaData = getUserAgentData();
    return uaData?.brands
        ? uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ")
        : navigator.userAgent;
}



//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/config.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: function() { return /* binding */ focusTrapStack; },
/* harmony export */   l: function() { return /* binding */ logLevel; },
/* harmony export */   s: function() { return /* binding */ stampVersion; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


/**
 * This module allows custom configuration for components.
 */
const existingConfig = globalThis["calciteConfig"];
const focusTrapStack = existingConfig?.focusTrapStack || [];
const runningInE2ETest = _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.Build.isTesting && _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser;
const logLevel = existingConfig?.logLevel || (runningInE2ETest ? "error" : "info");
// the following placeholders are replaced by the build
const version = "2.13.2";
const buildDate = "2024-10-24";
const revision = "e38e2977d";
/**
 * Stamp the version onto the global config.
 */
function stampVersion() {
    if (existingConfig && existingConfig.version) {
        return;
    }
    console.info(`Using Calcite Components ${version} [Date: ${buildDate}, Revision: ${revision}]`);
    const target = existingConfig || globalThis["calciteConfig"] || {};
    Object.defineProperty(target, "version", {
        value: version,
        writable: false,
    });
    globalThis["calciteConfig"] = target;
}



//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAssetPath: function() { return /* reexport safe */ _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.getAssetPath; },
/* harmony export */   setAssetPath: function() { return /* reexport safe */ _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.setAssetPath; },
/* harmony export */   setNonce: function() { return /* reexport safe */ _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.setNonce; },
/* harmony export */   setPlatformOptions: function() { return /* reexport safe */ _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.setPlatformOptions; }
/* harmony export */ });
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ "./node_modules/@esri/calcite-components/dist/components/config.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */





/**
 * Emits when the mode is dynamically toggled between light and dark on <body> or in OS preferences.
 */
function initModeChangeEvent() {
    const { classList } = document.body;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const getMode = () => classList.contains(_resources_js__WEBPACK_IMPORTED_MODULE_0__.d) || (classList.contains(_resources_js__WEBPACK_IMPORTED_MODULE_0__.a) && prefersDark) ? "dark" : "light";
    const emitModeChange = (mode) => document.body.dispatchEvent(new CustomEvent("calciteModeChange", { bubbles: true, detail: { mode } }));
    const modeChangeHandler = (newMode) => {
        currentMode !== newMode && emitModeChange(newMode);
        currentMode = newMode;
    };
    let currentMode = getMode();
    // emits event on page load
    emitModeChange(currentMode);
    // emits event when changing OS mode preferences
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => modeChangeHandler(event.matches ? "dark" : "light"));
    // emits event when toggling between mode classes on <body>
    new MutationObserver(() => modeChangeHandler(getMode())).observe(document.body, {
        attributes: true,
        attributeFilter: ["class"],
    });
}

/**
 * This file is imported in Stencil's `globalScript` config option.
 *
 * @see {@link https://stenciljs.com/docs/config#globalscript}
 */
function appGlobalScript () {
    if ((0,_browser_js__WEBPACK_IMPORTED_MODULE_2__.i)()) {
        if (document.readyState === "interactive") {
            initModeChangeEvent();
        }
        else {
            document.addEventListener("DOMContentLoaded", () => initModeChangeEvent(), { once: true });
        }
    }
    (0,_config_js__WEBPACK_IMPORTED_MODULE_1__.s)();
}

const globalScripts = appGlobalScript;

globalScripts();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ CSS_UTILITY; },
/* harmony export */   D: function() { return /* binding */ DEBOUNCE; },
/* harmony export */   a: function() { return /* binding */ autoMode; },
/* harmony export */   d: function() { return /* binding */ darkMode; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const autoMode = "calcite-mode-auto";
const darkMode = "calcite-mode-dark";
const lightMode = "calcite-mode-light";
const CSS_UTILITY = {
    autoMode,
    darkMode,
    lightMode,
    rtl: "calcite--rtl",
    calciteAnimate: "calcite-animate",
    calciteAnimateIn: "calcite-animate__in",
    calciteAnimateInUp: "calcite-animate__in-up",
    calciteAnimateInDown: "calcite-animate__in-down",
    calciteAnimateInRight: "calcite-animate__in-right",
    calciteAnimateInLeft: "calcite-animate__in-left",
    calciteAnimateInScale: "calcite-animate__in-scale",
};
const DEBOUNCE = {
    filter: 250,
    nextTick: 0,
    resize: 150,
    reposition: 100,
};



//# sourceMappingURL=resources.js.map

/***/ }),

/***/ "./node_modules/@stencil/core/internal/app-data/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/app-data/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUILD: function() { return /* binding */ BUILD; },
/* harmony export */   Env: function() { return /* binding */ Env; },
/* harmony export */   NAMESPACE: function() { return /* binding */ NAMESPACE; }
/* harmony export */ });
// src/app-data/index.ts
var BUILD = {
  allRenderFn: false,
  cmpDidLoad: true,
  cmpDidUnload: false,
  cmpDidUpdate: true,
  cmpDidRender: true,
  cmpWillLoad: true,
  cmpWillUpdate: true,
  cmpWillRender: true,
  connectedCallback: true,
  disconnectedCallback: true,
  element: true,
  event: true,
  hasRenderFn: true,
  lifecycle: true,
  hostListener: true,
  hostListenerTargetWindow: true,
  hostListenerTargetDocument: true,
  hostListenerTargetBody: true,
  hostListenerTargetParent: false,
  hostListenerTarget: true,
  member: true,
  method: true,
  mode: true,
  observeAttribute: true,
  prop: true,
  propMutable: true,
  reflect: true,
  scoped: true,
  shadowDom: true,
  slot: true,
  cssAnnotations: true,
  state: true,
  style: true,
  formAssociated: false,
  svg: true,
  updatable: true,
  vdomAttribute: true,
  vdomXlink: true,
  vdomClass: true,
  vdomFunctional: true,
  vdomKey: true,
  vdomListener: true,
  vdomRef: true,
  vdomPropOrAttr: true,
  vdomRender: true,
  vdomStyle: true,
  vdomText: true,
  watchCallback: true,
  taskQueue: true,
  hotModuleReplacement: false,
  isDebug: false,
  isDev: false,
  isTesting: false,
  hydrateServerSide: false,
  hydrateClientSide: false,
  lifecycleDOMEvents: false,
  lazyLoad: false,
  profile: false,
  slotRelocation: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  appendChildSlotFix: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  cloneNodeFix: false,
  hydratedAttribute: false,
  hydratedClass: true,
  // TODO(STENCIL-1305): remove this option
  scriptDataOpts: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  scopedSlotTextContentFix: false,
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  shadowDomShim: false,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  slotChildNodesFix: false,
  invisiblePrehydration: true,
  propBoolean: true,
  propNumber: true,
  propString: true,
  constructableCSS: true,
  cmpShouldUpdate: true,
  devTools: false,
  shadowDelegatesFocus: true,
  initializeNextTick: false,
  asyncLoading: false,
  asyncQueue: false,
  transformTagName: false,
  attachStyles: true,
  // TODO(STENCIL-914): remove this option when `experimentalSlotFixes` is the default behavior
  experimentalSlotFixes: false
};
var Env = {};
var NAMESPACE = (
  /* default */
  "app"
);



/***/ }),

/***/ "./node_modules/@stencil/core/internal/client/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUILD: function() { return /* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD; },
/* harmony export */   Build: function() { return /* binding */ Build; },
/* harmony export */   Env: function() { return /* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.Env; },
/* harmony export */   Fragment: function() { return /* binding */ Fragment; },
/* harmony export */   H: function() { return /* binding */ H; },
/* harmony export */   HTMLElement: function() { return /* binding */ H; },
/* harmony export */   Host: function() { return /* binding */ Host; },
/* harmony export */   NAMESPACE: function() { return /* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE; },
/* harmony export */   STENCIL_DEV_MODE: function() { return /* binding */ STENCIL_DEV_MODE; },
/* harmony export */   addHostEventListeners: function() { return /* binding */ addHostEventListeners; },
/* harmony export */   bootstrapLazy: function() { return /* binding */ bootstrapLazy; },
/* harmony export */   cmpModules: function() { return /* binding */ cmpModules; },
/* harmony export */   connectedCallback: function() { return /* binding */ connectedCallback; },
/* harmony export */   consoleDevError: function() { return /* binding */ consoleDevError; },
/* harmony export */   consoleDevInfo: function() { return /* binding */ consoleDevInfo; },
/* harmony export */   consoleDevWarn: function() { return /* binding */ consoleDevWarn; },
/* harmony export */   consoleError: function() { return /* binding */ consoleError; },
/* harmony export */   createEvent: function() { return /* binding */ createEvent; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; },
/* harmony export */   disconnectedCallback: function() { return /* binding */ disconnectedCallback; },
/* harmony export */   doc: function() { return /* binding */ doc; },
/* harmony export */   forceModeUpdate: function() { return /* binding */ forceModeUpdate; },
/* harmony export */   forceUpdate: function() { return /* binding */ forceUpdate; },
/* harmony export */   getAssetPath: function() { return /* binding */ getAssetPath; },
/* harmony export */   getElement: function() { return /* binding */ getElement; },
/* harmony export */   getHostRef: function() { return /* binding */ getHostRef; },
/* harmony export */   getMode: function() { return /* binding */ getMode; },
/* harmony export */   getRenderingRef: function() { return /* binding */ getRenderingRef; },
/* harmony export */   getValue: function() { return /* binding */ getValue; },
/* harmony export */   h: function() { return /* binding */ h; },
/* harmony export */   insertVdomAnnotations: function() { return /* binding */ insertVdomAnnotations; },
/* harmony export */   isMemberInElement: function() { return /* binding */ isMemberInElement; },
/* harmony export */   loadModule: function() { return /* binding */ loadModule; },
/* harmony export */   modeResolutionChain: function() { return /* binding */ modeResolutionChain; },
/* harmony export */   nextTick: function() { return /* binding */ nextTick; },
/* harmony export */   parsePropertyValue: function() { return /* binding */ parsePropertyValue; },
/* harmony export */   plt: function() { return /* binding */ plt; },
/* harmony export */   postUpdateComponent: function() { return /* binding */ postUpdateComponent; },
/* harmony export */   promiseResolve: function() { return /* binding */ promiseResolve; },
/* harmony export */   proxyComponent: function() { return /* binding */ proxyComponent; },
/* harmony export */   proxyCustomElement: function() { return /* binding */ proxyCustomElement; },
/* harmony export */   readTask: function() { return /* binding */ readTask; },
/* harmony export */   registerHost: function() { return /* binding */ registerHost; },
/* harmony export */   registerInstance: function() { return /* binding */ registerInstance; },
/* harmony export */   renderVdom: function() { return /* binding */ renderVdom; },
/* harmony export */   setAssetPath: function() { return /* binding */ setAssetPath; },
/* harmony export */   setErrorHandler: function() { return /* binding */ setErrorHandler; },
/* harmony export */   setMode: function() { return /* binding */ setMode; },
/* harmony export */   setNonce: function() { return /* binding */ setNonce; },
/* harmony export */   setPlatformHelpers: function() { return /* binding */ setPlatformHelpers; },
/* harmony export */   setPlatformOptions: function() { return /* binding */ setPlatformOptions; },
/* harmony export */   setValue: function() { return /* binding */ setValue; },
/* harmony export */   styles: function() { return /* binding */ styles; },
/* harmony export */   supportsConstructableStylesheets: function() { return /* binding */ supportsConstructableStylesheets; },
/* harmony export */   supportsListenerOptions: function() { return /* binding */ supportsListenerOptions; },
/* harmony export */   supportsShadow: function() { return /* binding */ supportsShadow; },
/* harmony export */   win: function() { return /* binding */ win; },
/* harmony export */   writeTask: function() { return /* binding */ writeTask; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/app-data */ "./node_modules/@stencil/core/internal/app-data/index.js");
/*
 Stencil Client Platform v4.20.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/client/client-build.ts

var Build = {
  isDev: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev ? true : false,
  isBrowser: true,
  isServer: false,
  isTesting: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isTesting ? true : false
};

// src/client/client-host-ref.ts

var hostRefs = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement ? window.__STENCIL_HOSTREFS__ || (window.__STENCIL_HOSTREFS__ = /* @__PURE__ */ new WeakMap()) : /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
    hostRef.$renderCount$ = 0;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  return hostRefs.set(hostElement, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;

// src/client/client-load-module.ts


// src/client/client-log.ts

var customError;
var consoleError = (e, el) => (customError || console.error)(e, el);
var STENCIL_DEV_MODE = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isTesting ? ["STENCIL:"] : [
  "%cstencil",
  "color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"
];
var consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);
var consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);
var consoleDevInfo = (...m) => console.info(...STENCIL_DEV_MODE, ...m);
var setErrorHandler = (handler) => customError = handler;

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var MODULE_IMPORT_PREFIX = "./";
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && typeof bundleId !== "string") {
    consoleDevError(
      `Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`
    );
    return void 0;
  } else if (!bundleId) {
    return void 0;
  }
  const module = !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
  if (module) {
    return module[exportName];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  return __webpack_require__("./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement && hmrVersionId ? "?s-hmr=" + hmrVersionId : ""}`).then((importedModule) => {
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var modeResolutionChain = [];

// src/client/client-task-queue.ts


// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];

// src/client/client-window.ts

var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var setPlatformHelpers = (helpers) => {
  Object.assign(plt, helpers);
};
var supportsShadow = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom;
var supportsListenerOptions = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.constructableCSS ? /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() : false;

// src/client/client-task-queue.ts
var queueCongestion = 0;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueDomWritesLow = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var consumeTimeout = (queue, timeout) => {
  let i2 = 0;
  let ts = 0;
  while (i2 < queue.length && (ts = performance.now()) < timeout) {
    try {
      queue[i2++](ts);
    } catch (e) {
      consoleError(e);
    }
  }
  if (i2 === queue.length) {
    queue.length = 0;
  } else if (i2 !== 0) {
    queue.splice(0, i2);
  }
};
var flush = () => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
    queueCongestion++;
  }
  consume(queueDomReads);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
    const timeout = (plt.$flags$ & 6 /* queueMask */) === 2 /* appLoaded */ ? performance.now() + 14 * Math.ceil(queueCongestion * (1 / 10)) : Infinity;
    consumeTimeout(queueDomWrites, timeout);
    consumeTimeout(queueDomWritesLow, timeout);
    if (queueDomWrites.length > 0) {
      queueDomWritesLow.push(...queueDomWrites);
      queueDomWrites.length = 0;
    }
    if (queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0) {
      plt.raf(flush);
    } else {
      queueCongestion = 0;
    }
  } else {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var readTask = /* @__PURE__ */ queueTask(queueDomReads, false);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

// src/client/index.ts


// src/runtime/asset-path.ts
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
var setAssetPath = (path) => plt.$resourcesUrl$ = path;

// src/runtime/bootstrap-custom-element.ts


// src/utils/constants.ts
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/helpers.ts
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/runtime/connected-callback.ts


// src/runtime/client-hydrate.ts


// src/runtime/profile.ts

var i = 0;
var createTime = (fnName, tagName = "") => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
    const key = `st:${fnName}:${tagName}:${i++}`;
    performance.mark(key);
    return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
  } else {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
    if (performance.getEntriesByName(key, "mark").length === 0) {
      performance.mark(key);
    }
    return () => {
      if (performance.getEntriesByName(measureText, "measure").length === 0) {
        performance.measure(measureText, key);
      }
    };
  } else {
    return () => {
      return;
    };
  }
};
var inspect = (ref) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    return void 0;
  }
  const flags = hostRef.$flags$;
  const hostElement = hostRef.$hostElement$;
  return {
    renderCount: hostRef.$renderCount$,
    flags: {
      hasRendered: !!(flags & 2 /* hasRendered */),
      hasConnected: !!(flags & 1 /* hasConnected */),
      isWaitingForChildren: !!(flags & 4 /* isWaitingForChildren */),
      isConstructingInstance: !!(flags & 8 /* isConstructingInstance */),
      isQueuedForUpdate: !!(flags & 16 /* isQueuedForUpdate */),
      hasInitializedComponent: !!(flags & 32 /* hasInitializedComponent */),
      hasLoadedComponent: !!(flags & 64 /* hasLoadedComponent */),
      isWatchReady: !!(flags & 128 /* isWatchReady */),
      isListenReady: !!(flags & 256 /* isListenReady */),
      needsRerender: !!(flags & 512 /* needsRerender */)
    },
    instanceValues: hostRef.$instanceValues$,
    ancestorComponent: hostRef.$ancestorComponent$,
    hostElement,
    lazyInstance: hostRef.$lazyInstance$,
    vnode: hostRef.$vnode$,
    modeName: hostRef.$modeName$,
    onReadyPromise: hostRef.$onReadyPromise$,
    onReadyResolve: hostRef.$onReadyResolve$,
    onInstancePromise: hostRef.$onInstancePromise$,
    onInstanceResolve: hostRef.$onInstanceResolve$,
    onRenderResolve: hostRef.$onRenderResolve$,
    queuedListeners: hostRef.$queuedListeners$,
    rmListeners: hostRef.$rmListeners$,
    ["s-id"]: hostElement["s-id"],
    ["s-cr"]: hostElement["s-cr"],
    ["s-lr"]: hostElement["s-lr"],
    ["s-p"]: hostElement["s-p"],
    ["s-rc"]: hostElement["s-rc"],
    ["s-sc"]: hostElement["s-sc"]
  };
};
var installDevTools = () => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.devTools) {
    const stencil = win.stencil = win.stencil || {};
    const originalInspect = stencil.inspect;
    stencil.inspect = (ref) => {
      let result = inspect(ref);
      if (!result && typeof originalInspect === "function") {
        result = originalInspect(ref);
      }
      return result;
    };
  }
};

// src/runtime/vdom/h.ts

var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && typeof nodeName !== "function" && child.$flags$ === void 0) {
          consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && nodeName === "input") {
      validateInputProperties(vnodeData);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && vnodeData.key) {
      key = vnodeData.key;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && vnodeData.name) {
      slotName = vnodeData.name;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomClass) {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && vNodeChildren.some(isHost)) {
    consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomFunctional && typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
    vnode.$key$ = key;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
    vnode.$name$ = slotName;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute) {
    vnode.$attrs$ = null;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
    vnode.$key$ = null;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
    vnode.$name$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};
var validateInputProperties = (inputElm) => {
  const props = Object.keys(inputElm);
  const value = props.indexOf("value");
  if (value === -1) {
    return;
  }
  const typeIndex = props.indexOf("type");
  const minIndex = props.indexOf("min");
  const maxIndex = props.indexOf("max");
  const stepIndex = props.indexOf("step");
  if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
    consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
  }
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  const endHydrate = createTime("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const shadowRootNodes = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRoot ? [] : null;
  const vnode = hostRef.$vnode$ = newVNode(tagName, null);
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
  childRenderNodes.map((c) => {
    const orgLocationId = c.$hostId$ + "." + c.$nodeId$;
    const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
    const node = c.$elm$;
    if (orgLocationNode && supportsShadow && orgLocationNode["s-en"] === "") {
      orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
    }
    if (!shadowRoot) {
      node["s-hn"] = tagName;
      if (orgLocationNode) {
        node["s-ol"] = orgLocationNode;
        node["s-ol"]["s-nr"] = node;
      }
    }
    plt.$orgLocNodes$.delete(orgLocationId);
  });
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRoot) {
    shadowRootNodes.map((shadowRootNode) => {
      if (shadowRootNode) {
        shadowRoot.appendChild(shadowRootNode);
      }
    });
  }
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  if (node.nodeType === 1 /* ElementNode */) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = {
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          $attrs$: null,
          $children$: null,
          $key$: null,
          $name$: null,
          $text$: null
        };
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        parentVNode.$children$[childVNode.$index$] = childVNode;
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(
          parentVNode,
          childRenderNodes,
          slotNodes,
          shadowRootNodes,
          hostElm,
          node.shadowRoot.childNodes[i2],
          hostId
        );
      }
    }
    for (i2 = node.childNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(
        parentVNode,
        childRenderNodes,
        slotNodes,
        shadowRootNodes,
        hostElm,
        node.childNodes[i2],
        hostId
      );
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = {
        $flags$: 0,
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4],
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      };
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = node.nextSibling;
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          childVNode.$tag$ = "slot";
          if (childIdSplt[5]) {
            node["s-sn"] = childVNode.$name$ = childIdSplt[5];
          } else {
            node["s-sn"] = "";
          }
          node["s-sr"] = true;
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRootNodes) {
            childVNode.$elm$ = doc.createElement(childVNode.$tag$);
            if (childVNode.$name$) {
              childVNode.$elm$.setAttribute("name", childVNode.$name$);
            }
            node.parentNode.insertBefore(childVNode.$elm$, node);
            node.remove();
            if (childVNode.$depth$ === "0") {
              shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
            }
          }
          slotNodes.push(childVNode);
          if (!parentVNode.$children$) {
            parentVNode.$children$ = [];
          }
          parentVNode.$children$[childVNode.$index$] = childVNode;
        } else if (childNodeType === CONTENT_REF_ID) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRootNodes) {
            node.remove();
          } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
            hostElm["s-cr"] = node;
            node["s-cn"] = true;
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  }
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1 /* ElementNode */) {
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    for (i2 = 0; i2 < node.childNodes.length; i2++) {
      initializeDocumentHydrate(node.childNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};

// src/runtime/initialize-component.ts


// src/runtime/mode.ts
var computeMode = (elm) => modeResolutionChain.map((h2) => h2(elm)).find((m) => !!m);
var setMode = (handler) => modeResolutionChain.push(handler);
var getMode = (ref) => getHostRef(ref).$modeName$;

// src/runtime/proxy-component.ts


// src/runtime/set-value.ts


// src/runtime/parse-property-value.ts

var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propBoolean && propType & 4 /* Boolean */) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propNumber && propType & 2 /* Number */) {
      return parseFloat(propValue);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propString && propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};

// src/runtime/update-component.ts


// src/runtime/event-emitter.ts


// src/runtime/element.ts

var getElement = (ref) => _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && !elm.isConnected) {
        consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
      }
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};

// src/runtime/styles.ts

var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta, mode);
  const style = styles.get(scopeId2);
  if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.attachStyles) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide && styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
            styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId2);
          }
          const injectStyle = (
            /**
             * we render a scoped component
             */
            !(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) || /**
             * we are using shadow dom and render the style tag within the shadowRoot
             */
            cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */ && styleContainerNode.nodeName !== "HEAD"
          );
          if (injectStyle) {
            styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta,
    hostRef.$modeName$
  );
  if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations && flags & 10 /* needsScopedEncapsulation */ && flags & 2 /* scopedCssEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && flags & 2 /* scopedCssEncapsulation */) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && mode && cmp.$flags$ & 32 /* hasMode */ ? cmp.$tagName$ + "-" + mode : cmp.$tagName$);

// src/runtime/vdom/vdom-render.ts


// src/runtime/vdom/update-element.ts


// src/runtime/vdom/set-accessor.ts

var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomClass && memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomStyle && memberName === "style") {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && memberName === "key") {
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRef && memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomListener && (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomPropOrAttr) {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink) {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink && xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink && xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && !useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && newVNode2.$elm$) {
    consoleDevError(
      `The JSX ${newVNode2.$text$ !== null ? `"${newVNode2.$text$}" text` : `"${newVNode2.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`
    );
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode2) : doc.createTextNode("");
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && !isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg ? doc.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      !useNativeShadowDom && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) : doc.createElement(
      !useNativeShadowDom && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    );
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute) {
      updateElement(null, newVNode2, isSvgMode);
    }
    const rootNode = elm.getRootNode();
    const isElementWithinShadowRoot = !rootNode.querySelector("body");
    if (!isElementWithinShadowRoot && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) {
      updateElementScopeIds(elm, parentElm);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg) {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes) {
          relocateToHostRoot(oldParentVNode.$elm$);
        } else {
          putBackInOriginalLocation(oldParentVNode.$elm$, false);
        }
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.childNodes).find((ref) => ref["s-cr"]);
    const childNodeArray = Array.from(parentElm.childNodes);
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.childNodes);
  if (parentElm["s-sr"] && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(parentReferenceNode(childNode), childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation ? referenceNode(before) : before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
          insertBefore(parentReferenceNode(oldStartVnode.$elm$), node, referenceNode(oldStartVnode.$elm$));
        } else {
          insertBefore(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && leftVNode.$tag$ === "slot") {
      if (
        // The component gets hydrated and no VDOM has been initialized.
        // Here the comparison can't happen as $name$ property is not set for `leftNode`.
        "$nodeId$" in leftVNode && isInitialRender && // `leftNode` is not from type HTMLComment which would cause many
        // hydration comments to be removed
        leftVNode.$elm$.nodeType !== 8
      ) {
        return false;
      }
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && !isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
var parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText || text === null) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg) {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot && tag === "slot" && !useNativeShadowDom) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes && oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      } else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1 /* ElementNode */) {
      if (childNode["s-sr"]) {
        const slotName = childNode["s-sn"];
        childNode.hidden = false;
        for (const siblingNode of childNodes) {
          if (siblingNode !== childNode) {
            if (siblingNode["s-hn"] !== childNode["s-hn"] || slotName !== "") {
              if (siblingNode.nodeType === 1 /* ElementNode */ && (slotName === siblingNode.getAttribute("slot") || slotName === siblingNode["s-sn"]) || siblingNode.nodeType === 3 /* TextNode */ && slotName === siblingNode["s-sn"]) {
                childNode.hidden = true;
                break;
              }
            } else {
              if (siblingNode.nodeType === 1 /* ElementNode */ || siblingNode.nodeType === 3 /* TextNode */ && siblingNode.textContent.trim() !== "") {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  for (const childNode of elm.childNodes) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes || !node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var nullifyVNodeRefs = (vNode) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRef) {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  const inserted = parent == null ? void 0 : parent.insertBefore(newNode, reference);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) {
    updateElementScopeIds(newNode, parent);
  }
  return inserted;
};
var findScopeIds = (element) => {
  const scopeIds = [];
  if (element) {
    scopeIds.push(
      ...element["s-scs"] || [],
      element["s-si"],
      element["s-sc"],
      ...findScopeIds(element.parentElement)
    );
  }
  return scopeIds;
};
var updateElementScopeIds = (element, parent, iterateChildNodes = false) => {
  var _a;
  if (element && parent && element.nodeType === 1 /* ElementNode */) {
    const scopeIds = new Set(findScopeIds(parent).filter(Boolean));
    if (scopeIds.size) {
      (_a = element.classList) == null ? void 0 : _a.add(...element["s-scs"] = [...scopeIds]);
      if (element["s-ol"] || iterateChildNodes) {
        for (const childNode of Array.from(element.childNodes)) {
          updateElementScopeIds(childNode, element, true);
        }
      }
    }
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d, _e;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
    throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect && cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          const orgLocationNode = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? originalLocationDebugNode(nodeToRelocate) : doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes || insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes && !nodeToRelocate["s-hn"] && nodeToRelocate["s-ol"]) {
                nodeToRelocate["s-hn"] = nodeToRelocate["s-ol"].parentNode.nodeName;
              }
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](nodeToRelocate);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalScopedSlotChanges && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
    for (const childNode of rootVnode.$elm$.childNodes) {
      if (childNode["s-hn"] !== hostTagName && !childNode["s-sh"]) {
        if (isInitialLoad && childNode["s-ih"] == null) {
          childNode["s-ih"] = (_e = childNode.hidden) != null ? _e : false;
        }
        childNode.hidden = true;
      }
    }
  }
  contentRef = void 0;
};
var slotReferenceDebugNode = (slotVNode) => doc.createComment(
  `<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ""}> (host=${hostTagName.toLowerCase()})`
);
var originalLocationDebugNode = (nodeToRelocate) => doc.createComment(
  `org-location for ` + (nodeToRelocate.localName ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate["s-hn"]})` : `[${nodeToRelocate.textContent}]`)
);

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    emitLifecycleEvent(elm, "componentWillLoad");
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillLoad) {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  } else {
    emitLifecycleEvent(elm, "componentWillUpdate");
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillUpdate) {
      maybePromise = safeCall(instance, "componentWillUpdate");
    }
  }
  emitLifecycleEvent(elm, "componentWillRender");
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillRender) {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
    hostRef.$flags$ |= 1024 /* devOnRender */;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
    await callRender(hostRef, instance, elm, isInitialLoad);
  } else {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
    hostRef.$renderCount$ = hostRef.$renderCount$ === void 0 ? 1 : hostRef.$renderCount$ + 1;
    hostRef.$flags$ &= ~1024 /* devOnRender */;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
    try {
      serverSideConnected(elm);
      if (isInitialLoad) {
        if (hostRef.$cmpMeta$.$flags$ & 1 /* shadowDomEncapsulation */) {
          elm["s-en"] = "";
        } else if (hostRef.$cmpMeta$.$flags$ & 2 /* scopedCssEncapsulation */) {
          elm["s-en"] = "c";
        }
      }
    } catch (e) {
      consoleError(e, elm);
    }
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  } else {
    postUpdateComponent(hostRef);
  }
};
var renderingRef = null;
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  const allRenderFn = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.allRenderFn ? true : false;
  const lazyLoad = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? true : false;
  const taskQueue = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue ? true : false;
  const updatable = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable ? true : false;
  try {
    renderingRef = instance;
    instance = allRenderFn ? instance.render() : instance.render && instance.render();
    if (updatable && taskQueue) {
      hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    if (updatable || lazyLoad) {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hasRenderFn || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRender || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
          return Promise.resolve(instance).then((value) => renderVdom(hostRef, value, isInitialLoad));
        } else {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      } else {
        const shadowRoot = elm.shadowRoot;
        if (hostRef.$cmpMeta$.$flags$ & 1 /* shadowDomEncapsulation */) {
          shadowRoot.textContent = instance;
        } else {
          elm.textContent = instance;
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  renderingRef = null;
  return null;
};
var getRenderingRef = () => renderingRef;
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  const ancestorComponent = hostRef.$ancestorComponent$;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidRender) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
      hostRef.$flags$ |= 1024 /* devOnRender */;
    }
    safeCall(instance, "componentDidRender");
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
      hostRef.$flags$ &= ~1024 /* devOnRender */;
    }
  }
  emitLifecycleEvent(elm, "componentDidRender");
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations) {
      addHydratedFlag(elm);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidLoad) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$flags$ |= 2048 /* devOnDidLoad */;
      }
      safeCall(instance, "componentDidLoad");
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$flags$ &= ~2048 /* devOnDidLoad */;
      }
    }
    emitLifecycleEvent(elm, "componentDidLoad");
    endPostUpdate();
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad(tagName);
      }
    }
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidUpdate) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$flags$ |= 1024 /* devOnRender */;
      }
      safeCall(instance, "componentDidUpdate");
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$flags$ &= ~1024 /* devOnRender */;
      }
    }
    emitLifecycleEvent(elm, "componentDidUpdate");
    endPostUpdate();
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
    hostRef.$onInstanceResolve$(elm);
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
  }
};
var forceUpdate = (ref) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && (Build.isBrowser || Build.isTesting)) {
    const hostRef = getHostRef(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
      scheduleUpdate(hostRef, false);
    }
    return isConnected;
  }
  return false;
};
var appDidLoad = (who) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations) {
    addHydratedFlag(doc.documentElement);
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
    plt.$flags$ |= 2 /* appLoaded */;
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE } }));
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.measure) {
    performance.measure(`[Stencil] ${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE} initial load (by ${who})`, "st:app:start");
  }
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var emitLifecycleEvent = (elm, lifecycleName) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lifecycleDOMEvents) {
    emitEvent(elm, "stencil_" + lifecycleName, {
      bubbles: true,
      composed: true,
      detail: {
        namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE
      }
    });
  }
};
var addHydratedFlag = (elm) => {
  var _a, _b;
  return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedClass ? elm.classList.add((_a = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedSelectorName) != null ? _a : "hydrated") : _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedAttribute ? elm.setAttribute((_b = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedSelectorName) != null ? _b : "hydrated", "") : void 0;
};
var serverSideConnected = (elm) => {
  const children = elm.children;
  if (children != null) {
    for (let i2 = 0, ii = children.length; i2 < ii; i2++) {
      const childElm = children[i2];
      if (typeof childElm.connectedCallback === "function") {
        childElm.connectedCallback();
      }
      serverSideConnected(childElm);
    }
  }
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && !hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`
    );
  }
  const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || !(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
      if (hostRef.$flags$ & 1024 /* devOnRender */) {
        consoleDevWarn(
          `The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,
          "\nElement",
          elm,
          "\nNew value",
          newVal,
          "\nOld value",
          oldVal
        );
      } else if (hostRef.$flags$ & 2048 /* devOnDidLoad */) {
        consoleDevWarn(
          `The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,
          "\nElement",
          elm,
          "\nNew value",
          newVal,
          "\nOld value",
          oldVal
        );
      }
    }
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || instance) {
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.formAssociated && cmpMeta.$flags$ & 64 /* formAssociated */ && flags & 1 /* isElementConstructor */) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach(
      (cbName) => Object.defineProperty(prototype, cbName, {
        value(...args) {
          const hostRef = getHostRef(this);
          const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$hostElement$ : this;
          const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
          if (!instance) {
            hostRef.$onReadyPromise$.then((instance2) => {
              const cb = instance2[cbName];
              typeof cb === "function" && cb.call(instance2, ...args);
            });
          } else {
            const cb = instance[cbName];
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      })
    );
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member && cmpMeta.$members$ || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.prop || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.state) && (memberFlags & 31 /* Prop */ || (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
              const ref = getHostRef(this);
              if (
                // we are proxying the instance (not element)
                (flags & 1 /* isElementConstructor */) === 0 && // the element is not constructing
                (ref && ref.$flags$ & 8 /* isConstructingInstance */) === 0 && // the member is a prop
                (memberFlags & 31 /* Prop */) !== 0 && // the member is not mutable
                (memberFlags & 1024 /* Mutable */) === 0
              ) {
                consoleDevWarn(
                  `@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`
                );
              }
            }
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.observeAttribute && (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$hostElement$ : this;
              const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect && m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) && bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef, hmrVersionId);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime(
          `st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`,
          `[Stencil] Load module for <${cmpMeta.$tagName$}>`
        );
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member && !Cstr.isProxied) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
        hostRef.$flags$ &= ~8 /* isConstructingInstance */;
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      } else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && typeof Cstr.style !== "string") {
        hostRef.$modeName$ = computeMode(elm);
        if (hostRef.$modeName$) {
          style = Cstr.style[hostRef.$modeName$];
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && hostRef.$modeName$) {
          elm.setAttribute("s-mode", hostRef.$modeName$);
        }
      }
      const scopeId2 = getScopeId(cmpMeta, hostRef.$modeName$);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDomShim && cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
          style = await __webpack_require__.e(/*! import() */ "node_modules_stencil_core_internal_client_shadow-css_js").then(__webpack_require__.bind(__webpack_require__, /*! ./shadow-css.js */ "./node_modules/@stencil/core/internal/client/shadow-css.js")).then((m) => m.scopeCss(style, scopeId2));
        }
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.connectedCallback) {
    safeCall(instance, "connectedCallback");
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent) {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
    }
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      let hostId;
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            const scopeId2 = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute("s-mode")) : addStyle(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && !hostId) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide || (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) && // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide && ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.prop && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.initializeNextTick) {
        nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
      } else {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment(
    _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug ? `content-ref (host=${elm.localName})` : ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};

// src/runtime/disconnected-callback.ts

var disconnectInstance = (instance) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.disconnectedCallback) {
    safeCall(instance, "disconnectedCallback");
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidUnload) {
    safeCall(instance, "componentDidUnload");
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
      disconnectInstance(elm);
    } else if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};

// src/runtime/dom-extras.ts

var patchPseudoShadowDom = (hostElementPrototype, descriptorPrototype) => {
  patchCloneNode(hostElementPrototype);
  patchSlotAppendChild(hostElementPrototype);
  patchSlotAppend(hostElementPrototype);
  patchSlotPrepend(hostElementPrototype);
  patchSlotInsertAdjacentElement(hostElementPrototype);
  patchSlotInsertAdjacentHTML(hostElementPrototype);
  patchSlotInsertAdjacentText(hostElementPrototype);
  patchTextContent(hostElementPrototype);
  patchChildSlotNodes(hostElementPrototype, descriptorPrototype);
  patchSlotRemoveChild(hostElementPrototype);
};
var patchCloneNode = (HostElementPrototype) => {
  const orgCloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function(deep) {
    const srcNode = this;
    const isShadowDom = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot && !isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = [
        "s-id",
        "s-cr",
        "s-lr",
        "s-rc",
        "s-sc",
        "s-p",
        "s-cn",
        "s-sr",
        "s-sn",
        "s-hn",
        "s-ol",
        "s-nr",
        "s-si",
        "s-rf",
        "s-scs"
      ];
      for (; i2 < srcNode.childNodes.length; i2++) {
        slotted = srcNode.childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i2][privateField]);
        if (slotted) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix && clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(srcNode.childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = (HostElementPrototype) => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function(newChild) {
    const slotName = newChild["s-sn"] = getSlotName(newChild);
    const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
    if (slotNode) {
      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchSlotRemoveChild = (ElementPrototype) => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;
  ElementPrototype.removeChild = function(toRemove) {
    if (toRemove && typeof toRemove["s-sn"] !== "undefined") {
      const slotNode = getHostSlotNode(this.childNodes, toRemove["s-sn"], this.tagName);
      if (slotNode) {
        const slotChildNodes = getHostSlotChildNodes(slotNode, toRemove["s-sn"]);
        const existingNode = slotChildNodes.find((n) => n === toRemove);
        if (existingNode) {
          existingNode.remove();
          updateFallbackSlotVisibility(this);
          return;
        }
      }
    }
    return this.__removeChild(toRemove);
  };
};
var patchSlotPrepend = (HostElementPrototype) => {
  const originalPrepend = HostElementPrototype.prepend;
  HostElementPrototype.prepend = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      const slotName = newChild["s-sn"] = getSlotName(newChild);
      const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
      if (slotNode) {
        const slotPlaceholder = document.createTextNode("");
        slotPlaceholder["s-nr"] = newChild;
        slotNode["s-cr"].parentNode.__appendChild(slotPlaceholder);
        newChild["s-ol"] = slotPlaceholder;
        const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        return insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      }
      if (newChild.nodeType === 1 && !!newChild.getAttribute("slot")) {
        newChild.hidden = true;
      }
      return originalPrepend.call(this, newChild);
    });
  };
};
var patchSlotAppend = (HostElementPrototype) => {
  HostElementPrototype.append = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      this.appendChild(newChild);
    });
  };
};
var patchSlotInsertAdjacentHTML = (HostElementPrototype) => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
  HostElementPrototype.insertAdjacentHTML = function(position, text) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement("_");
    let node;
    container.innerHTML = text;
    if (position === "afterbegin") {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === "beforeend") {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
var patchSlotInsertAdjacentText = (HostElementPrototype) => {
  HostElementPrototype.insertAdjacentText = function(position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
var patchSlotInsertAdjacentElement = (HostElementPrototype) => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
  HostElementPrototype.insertAdjacentElement = function(position, element) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === "afterbegin") {
      this.prepend(element);
      return element;
    } else if (position === "beforeend") {
      this.append(element);
      return element;
    }
    return element;
  };
};
var patchTextContent = (hostElementPrototype) => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  Object.defineProperty(hostElementPrototype, "__textContent", descriptor);
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalScopedSlotChanges) {
    Object.defineProperty(hostElementPrototype, "textContent", {
      // To mimic shadow root behavior, we need to return the text content of all
      // nodes in a slot reference node
      get() {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        const textContent = slotRefNodes.map((node) => {
          var _a, _b;
          const text = [];
          let slotContent = node.nextSibling;
          while (slotContent && slotContent["s-sn"] === node["s-sn"]) {
            if (slotContent.nodeType === 3 /* TEXT_NODE */ || slotContent.nodeType === 1 /* ELEMENT_NODE */) {
              text.push((_b = (_a = slotContent.textContent) == null ? void 0 : _a.trim()) != null ? _b : "");
            }
            slotContent = slotContent.nextSibling;
          }
          return text.filter((ref) => ref !== "").join(" ");
        }).filter((text) => text !== "").join(" ");
        return " " + textContent + " ";
      },
      // To mimic shadow root behavior, we need to overwrite all nodes in a slot
      // reference node. If a default slot reference node exists, the text content will be
      // placed there. Otherwise, the new text node will be hidden
      set(value) {
        const slotRefNodes = getAllChildSlotNodes(this.childNodes);
        slotRefNodes.forEach((node) => {
          let slotContent = node.nextSibling;
          while (slotContent && slotContent["s-sn"] === node["s-sn"]) {
            const tmp = slotContent;
            slotContent = slotContent.nextSibling;
            tmp.remove();
          }
          if (node["s-sn"] === "") {
            const textNode = this.ownerDocument.createTextNode(value);
            textNode["s-sn"] = "";
            insertBefore(node.parentElement, textNode, node.nextSibling);
          } else {
            node.remove();
          }
        });
      }
    });
  } else {
    Object.defineProperty(hostElementPrototype, "textContent", {
      get() {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "", this.tagName);
        if (((_a = slotNode == null ? void 0 : slotNode.nextSibling) == null ? void 0 : _a.nodeType) === 3 /* TEXT_NODE */) {
          return slotNode.nextSibling.textContent;
        } else if (slotNode) {
          return slotNode.textContent;
        } else {
          return this.__textContent;
        }
      },
      set(value) {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "", this.tagName);
        if (((_a = slotNode == null ? void 0 : slotNode.nextSibling) == null ? void 0 : _a.nodeType) === 3 /* TEXT_NODE */) {
          slotNode.nextSibling.textContent = value;
        } else if (slotNode) {
          slotNode.textContent = value;
        } else {
          this.__textContent = value;
          const contentRefElm = this["s-cr"];
          if (contentRefElm) {
            insertBefore(this, contentRefElm, this.firstChild);
          }
        }
      }
    });
  }
};
var patchChildSlotNodes = (elm, cmpMeta) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
    const childNodesFn = elm.__lookupGetter__("childNodes");
    Object.defineProperty(elm, "children", {
      get() {
        return this.childNodes.map((n) => n.nodeType === 1);
      }
    });
    Object.defineProperty(elm, "childElementCount", {
      get() {
        return elm.children.length;
      }
    });
    Object.defineProperty(elm, "childNodes", {
      get() {
        const childNodes = childNodesFn.call(this);
        if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0 && getHostRef(this).$flags$ & 2 /* hasRendered */) {
          const result = new FakeNodeList();
          for (let i2 = 0; i2 < childNodes.length; i2++) {
            const slot = childNodes[i2]["s-nr"];
            if (slot) {
              result.push(slot);
            }
          }
          return result;
        }
        return FakeNodeList.from(childNodes);
      }
    });
  }
};
var getAllChildSlotNodes = (childNodes) => {
  const slotRefNodes = [];
  for (const childNode of Array.from(childNodes)) {
    if (childNode["s-sr"]) {
      slotRefNodes.push(childNode);
    }
    slotRefNodes.push(...getAllChildSlotNodes(childNode.childNodes));
  }
  return slotRefNodes;
};
var getSlotName = (node) => node["s-sn"] || node.nodeType === 1 && node.getAttribute("slot") || "";
var getHostSlotNode = (childNodes, slotName, hostName) => {
  let i2 = 0;
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && childNode["s-sn"] === slotName && childNode["s-hn"] === hostName) {
      return childNode;
    }
    childNode = getHostSlotNode(childNode.childNodes, slotName, hostName);
    if (childNode) {
      return childNode;
    }
  }
  return null;
};
var getHostSlotChildNodes = (n, slotName) => {
  const childNodes = [n];
  while ((n = n.nextSibling) && n["s-sn"] === slotName) {
    childNodes.push(n);
  }
  return childNodes;
};

// src/runtime/bootstrap-custom-element.ts
var defineCustomElement = (Cstr, compactMeta) => {
  customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
};
var proxyCustomElement = (Cstr, compactMeta) => {
  const cmpMeta = {
    $flags$: compactMeta[0],
    $tagName$: compactMeta[1]
  };
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
    cmpMeta.$members$ = compactMeta[2];
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
    cmpMeta.$listeners$ = compactMeta[3];
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
    cmpMeta.$watchers$ = Cstr.$watchers$;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
    cmpMeta.$attrsToReflect$ = [];
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
    cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
      patchPseudoShadowDom(Cstr.prototype, cmpMeta);
    }
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotChildNodesFix) {
      patchChildSlotNodes(Cstr.prototype, cmpMeta);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cloneNodeFix) {
      patchCloneNode(Cstr.prototype);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix) {
      patchSlotAppendChild(Cstr.prototype);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scopedSlotTextContentFix && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
      patchTextContent(Cstr.prototype);
    }
  }
  const originalConnectedCallback = Cstr.prototype.connectedCallback;
  const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
  Object.assign(Cstr.prototype, {
    __registerHost() {
      registerHost(this, cmpMeta);
    },
    connectedCallback() {
      const hostRef = getHostRef(this);
      addHostEventListeners(this, hostRef, cmpMeta.$listeners$, false);
      connectedCallback(this);
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.connectedCallback && originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    },
    disconnectedCallback() {
      disconnectedCallback(this);
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.disconnectedCallback && originalDisconnectedCallback) {
        originalDisconnectedCallback.call(this);
      }
    },
    __attachShadow() {
      if (supportsShadow) {
        if (!this.shadowRoot) {
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDelegatesFocus) {
            this.attachShadow({
              mode: "open",
              delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */)
            });
          } else {
            this.attachShadow({ mode: "open" });
          }
        } else {
          if (this.shadowRoot.mode !== "open") {
            throw new Error(
              `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`
            );
          }
        }
      } else {
        this.shadowRoot = this;
      }
    }
  });
  Cstr.is = cmpMeta.$tagName$;
  return proxyComponent(Cstr, cmpMeta, 1 /* isElementConstructor */ | 2 /* proxyState */);
};
var forceModeUpdate = (elm) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
    const mode = computeMode(elm);
    const hostRef = getHostRef(elm);
    if (hostRef.$modeName$ !== mode) {
      const cmpMeta = hostRef.$cmpMeta$;
      const oldScopeId = elm["s-sc"];
      const scopeId2 = getScopeId(cmpMeta, mode);
      const style = elm.constructor.style[mode];
      const flags = cmpMeta.$flags$;
      if (style) {
        if (!styles.has(scopeId2)) {
          registerStyle(scopeId2, style, !!(flags & 1 /* shadowDomEncapsulation */));
        }
        hostRef.$modeName$ = mode;
        elm.classList.remove(oldScopeId + "-h", oldScopeId + "-s");
        attachStyles(hostRef);
        forceUpdate(elm);
      }
    }
  }
};

// src/runtime/bootstrap-lazy.ts


// src/runtime/hmr-component.ts
var hmrStart = (hostElement, cmpMeta, hmrVersionId) => {
  const hostRef = getHostRef(hostElement);
  hostRef.$flags$ = 1 /* hasConnected */;
  initializeComponent(hostElement, hostRef, cmpMeta, hmrVersionId);
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
    performance.mark("st:app:start");
  }
  installDevTools();
  const endBootstrap = createTime("bootstrapLazy");
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
    if (options.syncQueue) {
      plt.$flags$ |= 4 /* queueSync */;
    }
  }
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
    plt.$flags$ |= 2 /* appLoaded */;
  }
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
        cmpMeta.$members$ = compactMeta[2];
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
        cmpMeta.$attrsToReflect$ = [];
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
        cmpMeta.$flags$ |= 8 /* needsShadowDomShim */;
      }
      const tagName = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.transformTagName && options.transformTagName ? options.transformTagName(cmpMeta.$tagName$) : cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            if (supportsShadow) {
              if (!self.shadowRoot) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDelegatesFocus) {
                  self.attachShadow({
                    mode: "open",
                    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* shadowDelegatesFocus */)
                  });
                } else {
                  self.attachShadow({ mode: "open" });
                }
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            } else if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && !("shadowRoot" in self)) {
              self.shadowRoot = self;
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$, false);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.experimentalSlotFixes) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
          patchPseudoShadowDom(HostElement.prototype, cmpMeta);
        }
      } else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotChildNodesFix) {
          patchChildSlotNodes(HostElement.prototype, cmpMeta);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cloneNodeFix) {
          patchCloneNode(HostElement.prototype);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix) {
          patchSlotAppendChild(HostElement.prototype);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scopedSlotTextContentFix && cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
          patchTextContent(HostElement.prototype);
        }
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.formAssociated && cmpMeta.$flags$ & 64 /* formAssociated */) {
        HostElement.formAssociated = true;
      }
      if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
        HostElement.prototype["s-hmr"] = function(hmrVersionId) {
          hmrStart(this, cmpMeta, hmrVersionId);
        };
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.invisiblePrehydration && (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedClass || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedAttribute)) {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile) {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30, "timeout"));
    } else {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;

// src/runtime/host-listener.ts

var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener && listeners) {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent) {
      if (attachParentListeners) {
        listeners = listeners.filter(([flags]) => flags & 32 /* TargetParent */);
      } else {
        listeners = listeners.filter(([flags]) => !(flags & 32 /* TargetParent */));
      }
    }
    listeners.map(([flags, name, method]) => {
      const target = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    } else {
      hostRef.$hostElement$[methodName](ev);
    }
  } catch (e) {
    consoleError(e);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetDocument && flags & 4 /* TargetDocument */) return doc;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetWindow && flags & 8 /* TargetWindow */) return win;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetBody && flags & 16 /* TargetBody */) return doc.body;
  if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent && flags & 32 /* TargetParent */ && elm.parentElement)
    return elm.parentElement;
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

// src/runtime/platform-options.ts
var setPlatformOptions = (opts) => Object.assign(plt, opts);

// src/runtime/vdom/vdom-annotations.ts
var insertVdomAnnotations = (doc2, staticComponents) => {
  if (doc2 != null) {
    const docData = {
      hostIds: 0,
      rootLevelIds: 0,
      staticComponents: new Set(staticComponents)
    };
    const orgLocationNodes = [];
    parseVNodeAnnotations(doc2, doc2.body, docData, orgLocationNodes);
    orgLocationNodes.forEach((orgLocationNode) => {
      var _a;
      if (orgLocationNode != null && orgLocationNode["s-nr"]) {
        const nodeRef = orgLocationNode["s-nr"];
        let hostId = nodeRef["s-host-id"];
        let nodeId = nodeRef["s-node-id"];
        let childId = `${hostId}.${nodeId}`;
        if (hostId == null) {
          hostId = 0;
          docData.rootLevelIds++;
          nodeId = docData.rootLevelIds;
          childId = `${hostId}.${nodeId}`;
          if (nodeRef.nodeType === 1 /* ElementNode */) {
            nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
          } else if (nodeRef.nodeType === 3 /* TextNode */) {
            if (hostId === 0) {
              const textContent = (_a = nodeRef.nodeValue) == null ? void 0 : _a.trim();
              if (textContent === "") {
                orgLocationNode.remove();
                return;
              }
            }
            const commentBeforeTextNode = doc2.createComment(childId);
            commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
            insertBefore(nodeRef.parentNode, commentBeforeTextNode, nodeRef);
          }
        }
        let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
        const orgLocationParentNode = orgLocationNode.parentElement;
        if (orgLocationParentNode) {
          if (orgLocationParentNode["s-en"] === "") {
            orgLocationNodeId += `.`;
          } else if (orgLocationParentNode["s-en"] === "c") {
            orgLocationNodeId += `.c`;
          }
        }
        orgLocationNode.nodeValue = orgLocationNodeId;
      }
    });
  }
};
var parseVNodeAnnotations = (doc2, node, docData, orgLocationNodes) => {
  var _a;
  if (node == null) {
    return;
  }
  if (node["s-nr"] != null) {
    orgLocationNodes.push(node);
  }
  if (node.nodeType === 1 /* ElementNode */) {
    const childNodes = [...Array.from(node.childNodes), ...Array.from(((_a = node.shadowRoot) == null ? void 0 : _a.childNodes) || [])];
    childNodes.forEach((childNode) => {
      const hostRef = getHostRef(childNode);
      if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
        const cmpData = {
          nodeIds: 0
        };
        insertVNodeAnnotations(doc2, childNode, hostRef.$vnode$, docData, cmpData);
      }
      parseVNodeAnnotations(doc2, childNode, docData, orgLocationNodes);
    });
  }
};
var insertVNodeAnnotations = (doc2, hostElm, vnode, docData, cmpData) => {
  if (vnode != null) {
    const hostId = ++docData.hostIds;
    hostElm.setAttribute(HYDRATE_ID, hostId);
    if (hostElm["s-cr"] != null) {
      hostElm["s-cr"].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
    }
    if (vnode.$children$ != null) {
      const depth = 0;
      vnode.$children$.forEach((vnodeChild, index) => {
        insertChildVNodeAnnotations(doc2, vnodeChild, cmpData, hostId, depth, index);
      });
    }
    if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute(HYDRATE_CHILD_ID)) {
      const parent = hostElm.parentElement;
      if (parent && parent.childNodes) {
        const parentChildNodes = Array.from(parent.childNodes);
        const comment = parentChildNodes.find(
          (node) => node.nodeType === 8 /* CommentNode */ && node["s-sr"]
        );
        if (comment) {
          const index = parentChildNodes.indexOf(hostElm) - 1;
          vnode.$elm$.setAttribute(
            HYDRATE_CHILD_ID,
            `${comment["s-host-id"]}.${comment["s-node-id"]}.0.${index}`
          );
        }
      }
    }
  }
};
var insertChildVNodeAnnotations = (doc2, vnodeChild, cmpData, hostId, depth, index) => {
  const childElm = vnodeChild.$elm$;
  if (childElm == null) {
    return;
  }
  const nodeId = cmpData.nodeIds++;
  const childId = `${hostId}.${nodeId}.${depth}.${index}`;
  childElm["s-host-id"] = hostId;
  childElm["s-node-id"] = nodeId;
  if (childElm.nodeType === 1 /* ElementNode */) {
    childElm.setAttribute(HYDRATE_CHILD_ID, childId);
  } else if (childElm.nodeType === 3 /* TextNode */) {
    const parentNode = childElm.parentNode;
    const nodeName = parentNode == null ? void 0 : parentNode.nodeName;
    if (nodeName !== "STYLE" && nodeName !== "SCRIPT") {
      const textNodeId = `${TEXT_NODE_ID}.${childId}`;
      const commentBeforeTextNode = doc2.createComment(textNodeId);
      insertBefore(parentNode, commentBeforeTextNode, childElm);
    }
  } else if (childElm.nodeType === 8 /* CommentNode */) {
    if (childElm["s-sr"]) {
      const slotName = childElm["s-sn"] || "";
      const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
      childElm.nodeValue = slotNodeId;
    }
  }
  if (vnodeChild.$children$ != null) {
    const childDepth = depth + 1;
    vnodeChild.$children$.forEach((vnode, index2) => {
      insertChildVNodeAnnotations(doc2, vnode, cmpData, hostId, childDepth, index2);
    });
  }
};



/***/ }),

/***/ "./node_modules/@arcgis/core/core/domUtils.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/domUtils.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   byId: function() { return /* binding */ n; },
/* harmony export */   reparent: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n){return"string"==typeof n?document.getElementById(n):n??null}function t(n,t){for(;;){const e=n.firstChild;if(!e)break;t.appendChild(e)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/uuid.js":
/*!************************************************!*\
  !*** ./node_modules/@arcgis/core/core/uuid.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateBracedUUID: function() { return /* binding */ r; },
/* harmony export */   generateLowercaseBracedUUID: function() { return /* binding */ o; },
/* harmony export */   generateUUID: function() { return /* binding */ n; },
/* harmony export */   normalizeGlobalID: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t="randomUUID"in crypto;function n(){if(t)return crypto.randomUUID();const n=crypto.getRandomValues(new Uint16Array(8));n[3]=4095&n[3]|16384,n[4]=16383&n[4]|32768;const r=t=>n[t].toString(16).padStart(4,"0");return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)}function r(){return`{${n().toUpperCase()}}`}function o(){return`{${n()}}`}function e(t){const n=t.toUpperCase();return"{"!==t[0]?`{${n}}`:n}


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManager.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityManagerBase.js */ "./node_modules/@arcgis/core/identity/IdentityManagerBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r extends _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__.IdentityManagerBase{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;(0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__.setId)(s);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityManagerBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManagerBase.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Credential: function() { return /* binding */ E; },
/* harmony export */   IdentityManagerBase: function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IdentityModal.js */ "./node_modules/@arcgis/core/identity/IdentityModal.js");
/* harmony import */ var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OAuthCredential.js */ "./node_modules/@arcgis/core/identity/OAuthCredential.js");
/* harmony import */ var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./OAuthInfo.js */ "./node_modules/@arcgis/core/identity/OAuthInfo.js");
/* harmony import */ var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ServerInfo.js */ "./node_modules/@arcgis/core/identity/ServerInfo.js");
/* harmony import */ var _portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../portal/support/urlUtils.js */ "./node_modules/@arcgis/core/portal/support/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const R={},C=e=>{const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(e.owningSystemUrl).host,r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},D=(e,t)=>!!(C(e)&&t&&t.some((t=>t.test(e.server))));let b=null,q=null;try{b=window.localStorage,q=window.sessionStorage}catch{}class j extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this._defaultOAuthInfo=null,this._defaultTokenValidity=60,this.dialog=null,this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.urlToObject)(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^/]+\/[^/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi,this._gwUser=/http.+\/users\/([^/]+).*/i,this._gwItem=/http.+\/items\/([^/]+).*/i,this._gwGroup=/http.+\/groups\/([^/]+).*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getPlatformSelfError=null,this._getOAuthLocationParams(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t);let s,i=this.findServerInfo(t),o=!0;i||(i=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"],i.server=this._getServerInstanceRoot(t),r?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),o=!1):(s=new E({userId:e.userId,server:i.server??void 0,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),o||s.refreshServerTokens()}toJSON(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.fixJson)({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"](t))})),e.length&&this.registerServers(e)}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"](t))})),e.length&&this.registerOAuthInfos(e)}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new E(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){if(!e)return;let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r}getCredential(e,t){let r,s,o=!0;t&&(r=!!t.token,s=t.error,o=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const n=new AbortController,a=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)();if(t.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(t.signal,(()=>{n.abort()})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(n,(()=>{a.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAborted)(n))return a.promise;t.signal=n.signal;const h=this._isAdminResource(e),u=r?this.findCredential(e):null;let _;if(u&&s&&s.details&&498===s.details.httpStatus)u.destroy();else if(u)return _=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized","You are currently signed in as: '"+u.userId+"'. You do not have access to this resource: "+e,{error:s}),a.reject(_),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let g=this.findServerInfo(e);if(g)!g.hasPortal&&g.server&&g.owningSystemUrl&&this._hasSameServerInstance(g.server,g.owningSystemUrl)&&(g.hasPortal=!0),!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return _=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(_),a.promise;g=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"],g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g])}return g.hasPortal&&void 0===g._selfReq&&(o||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t?.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const o=this._rePortalTokenSvc.test(e.tokenServiceUrl),n=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,f,g,m;t&&(m=this.tokenValidity||a||this._defaultTokenValidity,m>a&&a>0&&(m=a)),r&&(h=r.isAdmin,l=r.serverUrl,c=r.token,f=r.signal,g=r.ssl,e.customParameters=r.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(d.toLowerCase()),e.webTierAuth&&r?.serverUrl&&!g&&"http"===n.scheme&&((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(n.uri,d,!0)||"https"===u.scheme&&n.host===u.host&&"7080"===n.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:t?.username,password:t?.password,serverUrl:l,token:c,expiration:m,referer:h||o?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:f,...r?.ioArgs};o||(v.withCredentials=!1);return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d,v).then((r=>{const s=r.data;if(!s?.token)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:authentication-failed","Unable to generate token");const o=e.server;return R[o]||(R[o]={}),t&&(R[o][t.username]=t.password),s.validity=m,s}))}isBusy(){return!!this._busy}async checkSignInStatus(e){return(await this.checkAppAccess(e,"")).credential}checkAppAccess(e,t,r){let o=!1;return this.getCredential(e,{prompt:!1}).then((n=>{let a;const h={f:"json"};if("portal"===n.scope)if(t&&(this._doPortalSignIn(e)||r?.force))a=n.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!n.token)return{credential:n};a=n.server+"/sharing/rest"}else{if(!n.token)return{credential:n};a=n.server+"/rest/services"}return n.token&&(h.token=n.token),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized",`You are currently signed in as: '${n.userId}'.`,e.data);return o=!!e.data.viewOnlyUserTypeApp,{credential:n}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details?.httpStatus;if(498===t)throw n.destroy(),new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:invalid-request");return{credential:n}}))})).then((e=>({credential:e.credential,viewOnly:o})))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.slice(1)),this._processOAuthPopupParams((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.queryToObject)(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const s=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)(),o=()=>{h?.remove(),d?.remove(),this.dialog?.destroy(),this.dialog=h=d=null},n=()=>{o(),this._oAuthDfd=null,s.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))};r.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(r.signal,(()=>{n()}));const a=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__["default"]({open:!0,resource:this.getResourceName(e),server:t.server});this.dialog=a,this.emit("dialog-create");let h=a.on("cancel",n),d=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((i=>{o();const n=new E({userId:e.username,server:t.server??void 0,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity});s.resolve(n)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)();const o=this._oAuthDfd;let n;s?.signal&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&u()})),o.resUrl_=e,o.sinfo_=t,o.oinfo_=r;const a=r._oAuthCred;if(a.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32));n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.base64UrlEncode)(e),a.codeVerifier=n,e=crypto.getRandomValues(new Uint8Array(32)),a.stateUID=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.base64UrlEncode)(e),a.save()||(a.codeVerifier=n=null)}else a.codeVerifier=null;let h,d;this._getCodeChallenge(n).then((i=>{const o=!s||!1!==s.oAuthPopupConfirmation;if(!r.popup||!o)return void this._doOAuthSignIn(e,t,r,i);const n=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__["default"]({oAuthPrompt:!0,server:t.server,open:!0});this.dialog=n,this.emit("dialog-create"),h=n.on("cancel",u),d=n.on("submit",(()=>{p(),this._doOAuthSignIn(e,t,r,i)}))}));const u=()=>{p(),this._oAuthDfd=null,o.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))},p=()=>{h?.remove(),d?.remove(),this.dialog?.destroy(),this.dialog=null};return o.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_6__.on)(window,"message",(t=>{if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===t.data?.type){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.slice(1));const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.queryToObject)(e);let r=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),t.state.portalUrl&&(this._oAuthLocationParams=t,r=!0)}catch{}else if(t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(r=!0,t.state)))try{t.state=JSON.parse(t.state)}catch{}r&&(window.location.hash=t.state?.hash||"")}let t=window.location.search;if(t){"?"===t.charAt(0)&&(t=t.slice(1));const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.queryToObject)(t);let r=!1;if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,r=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(r=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(r){const t={...e};["code","error","error_description","message_code","persist","state"].forEach((e=>{delete t[e]}));const r=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.objectToQuery)(t),s=window.location.pathname+(r?`?${r}`:"")+(e.state?.hash||"");window.history.replaceState(window.history.state,"",s)}}}_getOAuthToken(e,t,r,i,o){return e=e.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:i&&o?{grant_type:"authorization_code",code:t,redirect_uri:i,client_id:r,code_verifier:o}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then((e=>e.data))}async _getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t);return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.base64UrlEncode)(new Uint8Array(r))}return null}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let r,s,i,o,n=-1;const a=t?.token,h=t?.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],i=this.findServerInfo(r.server),s=i?.owningSystemUrl,o=s?this.findCredential(s,r.userId):void 0,n=this._getIdenticalSvcIdx(e,r),!a)return-1===n&&r.resources.push(e),this._addResource(e,o),r;-1!==n&&(r.resources.splice(n,1),this._removeResource(e,o))}else{let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,i=this.findServerInfo(t.server),s=i?.owningSystemUrl,o=s?this.findCredential(s,t.userId):void 0,n=r,!0)))),a)t&&(t.resources.splice(n,1),this._removeResource(e,o));else if(t)return this._addResource(e,o),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t?.isAdmin&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1!==r||(0,_portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_19__.isSecureProxyService)(t)||(r=t.indexOf("/sharing")),-1===r&&t.endsWith("/")&&(r=t.length-1),r>-1?e.slice(0,r):e}_hasSameServerInstance(e,t){return e.endsWith("/")&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=(0,_portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_19__.normalizeArcGISOnlineOrgDomain)(e),t=(0,_portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_19__.normalizeArcGISOnlineOrgDomain)(t),(e=e.slice(Math.max(0,e.indexOf(":"))))===(t=t.slice(Math.max(0,t.indexOf(":"))))}_sanitizeUrl(e){const r=(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.proxyUrl||"").toLowerCase(),s=r?e.toLowerCase().indexOf(r+"?"):-1;return-1!==s&&(e=e.slice(s+r.length+1)),e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.normalize)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.urlToObject)(e).path}_isRESTService(e){return e.includes(this._agsRest)}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r=!1;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replaceAll(e,"$1")===i.replaceAll(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(e.toLowerCase()),s=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(r.uri)));return!i&&s&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),r.uri)),i||_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl&&(i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(r,_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,r.uri)))),i=i||this._agsPortal.test(r.path),i}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,o)=>{-1===r&&i.regex.test(e)&&(r=o),-1===s&&i.regex.test(t)&&(s=o)}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r?.owningSystemUrl;s&&C(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",r=(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.slice(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.Url(e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred;if(e.code){const i=s.codeVerifier;return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then((i=>{const o=new E({userId:i.username,server:r.server??void 0,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=o.userId,s.storage=i.persist?b:q,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=o.userId,s.ssl=o.ssl,s.save(),o}))}const i=new E({userId:e.username,server:r.server??void 0,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=i.userId,s.storage=e.persist?b:q,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){const t=this._oAuthDfd;if(this._oAuthDfd=null,t)if(clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle?.remove(),e.error){const r="access_denied"===e.error,s=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"](r?"identity-manager:user-aborted":"identity-manager:authentication-failed",r?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);t.reject(s)}else this._processOAuthResponseParams(e,t.oinfo_,t.sinfo_).then((e=>{t.resolve(e)})).catch((e=>{t.reject(e)}))}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.slice(1)),this._processOAuthPopupParams((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.queryToObject)(e)))}async _exchangeToken(e,t,r){return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}})).data.token}async _getPlatformSelf(e,t){if(this._getPlatformSelfError&&Date.now()-this._getPlatformSelfError[1]<1e3)throw this._getPlatformSelfError[0];e=e.replace(/^http:/i,"https:");try{const r=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0});return this._getPlatformSelfError=null,r.data}catch(r){throw"OAUTH_0066"===r.details?.messageCode&&(this._getPlatformSelfError=[r,Date.now()]),r}}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(r,e,!0)))}_checkProtocol(e,t,r,s){let o=!0;const n=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(n.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.getProxyRule)(n)&&(o=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!o)){r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return o}_enqueue(e,t,r,s,i,o){return s||(s=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createResolver)()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=o,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e.options_?.resource,s=e.resUrl_,i=e.refresh_;let o=!1;this.credentials.includes(t)||(i&&this.credentials.includes(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,o=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const n=this._soReqs,a={};this._soReqs=[],n.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),n.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,o||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=(o,a,h,l)=>{const d=e.sinfo_,u=!e.options_||!1!==e.options_.prompt,_=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let f,g;if(o)t(new E({userId:o,server:d.server??void 0,token:h??void 0,expires:null!=l?Number(l):null,ssl:!!a}));else if(window!==window.parent&&this._appUrlObj.query?.["arcgis-auth-origin"]&&this._appUrlObj.query?.["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const s=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_6__.on)(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new E(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:credential-request-failed","Parent application's token has expired.")):r(_core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e.data.error))))}));(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(e.options_?.signal,(()=>{s.remove()}))}else if(_){let o=_._oAuthCred;if(!o){const e=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__["default"](_,b),t=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__["default"](_,q);e.isValid()&&t.isValid()?e.expires>t.expires?(o=e,t.destroy()):(o=t,e.destroy()):o=e.isValid()?e:t,_._oAuthCred=o}if(o.isValid()){f=new E({userId:o.userId??void 0,server:d.server??void 0,token:o.token??void 0,expires:o.expires,ssl:o.ssl??void 0,_oAuthCred:o});const i=_.appId!==o.appId&&this._doPortalSignIn(e.resUrl_);i||o.refreshToken?(e._pendingDfd=o.refreshToken?this._getOAuthToken(d.server,o.refreshToken,o.appId).then((e=>(f.expires=Date.now()+1e3*e.expires_in,f.token=e.access_token,f))):Promise.resolve(f),e._pendingDfd.then((e=>i?this._exchangeToken(e.server,_.appId,e.token).then((t=>(e.token=t,e))).catch((()=>e)):e)).then((e=>{t(e)})).catch((e=>{const t=e.details?.httpStatus;t>0&&404!==t?(o.destroy(),s()):r(e)}))):t(f)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(_.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===o.stateUID&&o.codeVerifier)){const s=this._oAuthLocationParams;this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(s,_,d).then((e=>{t(e)})).catch(r)}else{const s=()=>{u?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,_,e.options_).then(t,r):(g=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),r(g))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,_.appId).then((e=>{(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(e.portalUrl,this._appOrigin,!0)?(f=new E({userId:e.username,server:d.server??void 0,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(f)):s()})).catch(s):s()}}else if(u){if(this._checkProtocol(e.resUrl_,d,r,e.admin_)){let s=e.options_;e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,s).then(t,r)}}else g=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),r(g)},o=()=>{const s=e.sinfo_,i=s.owningSystemUrl,o=e.options_;let n,a,h,l;if(o&&(n=o.token,a=o.error,h=o.prompt),l=this._findCredential(i,{token:n,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(D(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new E(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((r=>{t(new E({userId:l?.userId,server:s.server??void 0,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))}),r)}}else{this._busy=null,n&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:n,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)}))}};this._errbackFunc=r;const a=e.sinfo_.owningSystemUrl,l=this._isServerRsrc(e.resUrl_),d=e.sinfo_._restInfoPms;d?d.promise.then((t=>{const r=e.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=((0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("authInfo.tokenServicesUrl",t)||(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("authInfo.tokenServiceUrl",t)||(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("tokenServiceUrl",t))??null,r.shortLivedTokenValidity=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_8__.getDeepValue)("authInfo.shortLivedTokenValidity",t)??null,r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}l&&r.owningSystemUrl?o():s()}),(()=>{e.sinfo_._restInfoPms=null;const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t)})):l&&a?o():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,o,n;return t&&(s=t.user?.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e.sinfo_.currentVersion=n),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e?.token,r.tokenExpiration=e?.expires,r))):!s&&i&&n>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s()})):s()}_generateOAuthInfo(e){let t,r=null,i=e.portalUrl;const o=e.customBaseUrl,n=e.owningTenant,a=!this._defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this._defaultOAuthInfo=new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"]({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this._defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),(0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:this._defaultOAuthInfo.appId,redirect_uri:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.makeAbsolute)(this._defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this._defaultOAuthInfo.clone();e.data.urlKey&&o?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+o:t.portalUrl=i,t.popup=window!==window.top||!((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.hasSameOrigin)(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,r,s){const o=r._oAuthCred,a={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),o.stateUID&&(a.uid=o.stateUID);const h={client_id:r.appId,response_type:o.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!o.codeVerifier)};r.forceLogin&&(h.force_login=!0),r.forceUserId&&r.userId&&(h.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(h.redirectToUserOrgUrl=!0),o.codeVerifier&&(h.code_challenge=s||o.codeVerifier,h.code_challenge_method=s?"S256":"plain");const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",c=l+"?"+(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.objectToQuery)(h);if(r.popup){const e=window.open(c,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove();const e=this._oAuthDfd;if(e){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnPopupHandle=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_6__.on)(window,["arcgis:auth:hash","arcgis:auth:location:search"],(e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)}));else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:h,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=c}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"");if(e.popup)return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.makeAbsolute)(e.popupCallbackUrl);if(t){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.urlToObject)(r);return e.query&&["code","error","error_description","message_code","persist","state"].forEach((t=>{delete e.query[t]})),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__.addQueryParameters)(e.path,e.query)}return r}}j.prototype.declaredClass="esri.identity.IdentityManagerBase";let E=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"].EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e?._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id,t=e.findServerInfo(this.server),s=t?.owningSystemUrl,i=!!s&&"server"===this.scope,o=i&&D(t,e._legacyFed),n=t.webTierAuth,a=n&&e.normalizeWebTierAuth,h=R[this.server],l=h?.[this.userId];let c,d=this.resources&&this.resources[0],u=i?e.findServerInfo(s):null,p={username:this.userId,password:l};if(n&&!a)return;i&&!u&&e.serverInfos.some((t=>(e._isIdProvider(s,t.server)&&(u=t),!!u)));const _=u?e.findCredential(u.server,this.userId):null;if(!i||_){if(!o){if(i)c={serverUrl:d,token:_?.token,ssl:_?.ssl};else if(a)p=null,c={ssl:this.ssl};else{if(!l){let r;return d&&(d=e._sanitizeUrl(d),this._enqueued=1,r=e._enqueue(d,t,null,null,this.isAdmin,this),r.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),r}this.isAdmin&&(c={isAdmin:!0})}return e.generateToken(i?u:t,i?null:p,c).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}_?.refreshToken()}}refreshServerTokens(){if("portal"===this.scope){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id;e.credentials.forEach((t=>{const r=e.findServerInfo(t.server),s=r?.owningSystemUrl;t!==this&&t.userId===this.userId&&s&&"server"===t.scope&&(e._hasSameServerInstance(this.server,s)||e._isIdProvider(s,this.server))&&(D(r,e._legacyFed)?(t.token=this.token,t.expires=this.expires,t.creationTime=this.creationTime,t.validity=this.validity,t.emitTokenChange()):t.refreshToken())}))}}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id,s=this.server?t.findServerInfo(this.server):null,i=s?.owningSystemUrl,o=i?t.findServerInfo(i):null;!1===e||i&&"portal"!==this.scope&&(!o?.webTierAuth||t.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id,t=e.credentials.indexOf(this);t>-1&&e.credentials.splice(t,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.fixJson)({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"creationTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"expires",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"isAdmin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"oAuthState",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"resources",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"scope",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"ssl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"token",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"tokenRefreshBuffer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"userId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__.property)()],E.prototype,"validity",void 0),E=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.identity.Credential")],E);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityModal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityModal.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _intl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../intl.js */ "./node_modules/@arcgis/core/intl.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "./node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/componentsUtils.js */ "./node_modules/@arcgis/core/widgets/support/componentsUtils.js");
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/support/widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/* harmony import */ var _support_themeUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/themeUtils.js */ "./node_modules/@arcgis/core/support/themeUtils.js");
/* harmony import */ var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../intl/substitute.js */ "./node_modules/@arcgis/core/intl/substitute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p="esri-identity-modal",u={base:p,info:`${p}__info`,notice:`${p}__notice`},d="ArcGIS Online";let m=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.error=null,this.oAuthPrompt=!1,this.open=!1,this.signingIn=!1,this.server=null,this.resource=null,this._usernameInputNode=null,this._passwordInputNode=null,document.body.appendChild(this.container)}loadDependencies(){return (0,_widgets_support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_8__.loadCalciteComponents)({button:()=>__webpack_require__.e(/*! import() | @esri-calcite-components-dist-components-calcite-button */ "@esri-calcite-components-dist-components-calcite-button").then(__webpack_require__.bind(__webpack_require__, /*! @esri/calcite-components/dist/components/calcite-button.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-button.js")),dialog:()=>__webpack_require__.e(/*! import() | @esri-calcite-components-dist-components-calcite-dialog */ "@esri-calcite-components-dist-components-calcite-dialog").then(__webpack_require__.bind(__webpack_require__, /*! @esri/calcite-components/dist/components/calcite-dialog.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-dialog.js")),input:()=>__webpack_require__.e(/*! import() | @esri-calcite-components-dist-components-calcite-input */ "@esri-calcite-components-dist-components-calcite-input").then(__webpack_require__.bind(__webpack_require__, /*! @esri/calcite-components/dist/components/calcite-input.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-input.js")),label:()=>__webpack_require__.e(/*! import() | @esri-calcite-components-dist-components-calcite-label */ "@esri-calcite-components-dist-components-calcite-label").then(__webpack_require__.bind(__webpack_require__, /*! @esri/calcite-components/dist/components/calcite-label.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-label.js")),notice:()=>__webpack_require__.e(/*! import() | @esri-calcite-components-dist-components-calcite-notice */ "@esri-calcite-components-dist-components-calcite-notice").then(__webpack_require__.bind(__webpack_require__, /*! @esri/calcite-components/dist/components/calcite-notice.js */ "./node_modules/@esri/calcite-components/dist/components/calcite-notice.js"))})}get title(){return this.commonMessages?.auth.signIn}render(){const{open:t,title:e,messages:s,signingIn:o,oAuthPrompt:i,server:n,resource:r,error:p}=this,{info:m,oAuthInfo:h,lblItem:g,invalidUser:b,noAuthService:f,lblUser:v,lblPwd:_,lblCancel:y,lblSigning:I,lblOk:j}=s;return (0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("div",{class:this.classes(u.base,(0,_support_themeUtils_js__WEBPACK_IMPORTED_MODULE_12__.getCalciteThemeClass)())},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("form",{bind:this,onsubmit:this._submit},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-dialog",{bind:this,heading:e,modal:!0,open:t,outsideCloseDisabled:!0,scale:"s",widthScale:"s",onCalciteDialogClose:this._cancel,onCalciteDialogOpen:this._focusUsernameInput},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("div",{class:u.info},(0,_intl_substitute_js__WEBPACK_IMPORTED_MODULE_13__.substitute)(i?h:m,{server:n&&/\.arcgis\.com/i.test(n)?d:n,resource:`(${r||g})`})),p?(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-notice",{class:u.notice,icon:"exclamation-mark-triangle",kind:"danger",open:!0},(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("div",{slot:"message"},p.details?.httpStatus?b:f)):null,i?null:[(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-label",null,v,(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-input",{afterCreate:t=>this._usernameInputNode=t,autocomplete:"off",bind:this,name:"username",required:!0,spellcheck:!1,type:"text",value:""})),(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-label",null,_,(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-input",{afterCreate:t=>this._passwordInputNode=t,bind:this,name:"password",required:!0,type:"password",value:""}))],(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-button",{appearance:"outline",bind:this,onclick:this._cancel,slot:"footer-end",type:"button"},y),(0,_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__.tsx)("calcite-button",{loading:!!o,slot:"footer-end",type:"submit"},o?I:j))))}_focusUsernameInput(){return (0,_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_9__.setFocus)((()=>this._usernameInputNode))}_cancel(){this._set("signingIn",!1),this.open=!1,this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(t){t.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode?.value,password:this._passwordInputNode?.value};this.emit("submit",e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],m.prototype,"container",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(),(0,_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_10__.messageBundle)("esri/t9n/common")],m.prototype,"commonMessages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"error",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(),(0,_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_10__.messageBundle)("esri/identity/t9n/identity")],m.prototype,"messages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"oAuthPrompt",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"open",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"signingIn",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],m.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"resource",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.identity.IdentityModal")],m);const h=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/OAuthCredential.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthCredential.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class e{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)t=!0;else if(this.expires){const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return!1;const e=this._load(),s=this.oAuthInfo;if(s?.authNamespace&&s.portalUrl){let r=e[s.authNamespace];r||(r=e[s.authNamespace]={}),this.appId||(this.appId=s.appId),r[s.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(e))}catch(i){return console.warn(i),!1}return!0}return!1}destroy(){const e=this._load(),s=this.oAuthInfo;if(s?.appId&&s?.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const t=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;if(e.append("f","json"),e.append("auth_token",this.refreshToken||this.token),e.append("client_id",s.appId),e.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,e);else{const s=new XMLHttpRequest;s.open("POST",t),s.send(e)}}if(s?.authNamespace&&s.portalUrl&&this.storage){const r=e[s.authNamespace];if(r){delete r[s.portalUrl];try{this.storage.setItem(t,JSON.stringify(e))}catch(i){console.log(i)}}}s&&(s._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),e=this.oAuthInfo;if(e?.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId))}}_load(){let e={};if(this.storage){const i=this.storage.getItem(t);if(i)try{e=JSON.parse(i)}catch(s){console.warn(s)}}return e}}e.prototype.declaredClass="esri.identity.OAuthCredential";


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/OAuthInfo.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthInfo.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let s=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return p.fromJSON(this.toJSON())}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"appId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"authNamespace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"expiration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"flowType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"forceLogin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"forceUserId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"locale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"popup",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"portalUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],s.prototype,"userId",void 0),s=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.identity.OAuthInfo")],s);const i=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/ServerInfo.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/ServerInfo.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"adminTokenServiceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"currentVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"hasPortal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"hasServer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"owningSystemUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"owningTenant",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"server",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"shortLivedTokenValidity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"tokenServiceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"webTierAuth",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.identity.ServerInfo")],i);const s=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAdvancedProjectorOptions: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={handleInterceptedEvent:(e,p,t,n)=>(e.scheduleRender(),p.properties[`on${n.type}`].apply(p.properties.bind||t,[n]))};


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAdvancedProjector: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _maquette_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maquette/dom.js */ "./node_modules/@arcgis/core/libs/maquette/dom.js");
/* harmony import */ var _maquette_projector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maquette/projector.js */ "./node_modules/@arcgis/core/libs/maquette/projector.js");
/* harmony import */ var _advanced_projector_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./advanced-projector-options.js */ "./node_modules/@arcgis/core/libs/maquette-advanced-projector/advanced-projector-options.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=(e,r)=>{const t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t},n=(e,r)=>e.find(r),d=(e,r,t=!1)=>{let o=e;return r.forEach(((e,d)=>{const s=o?.children?n(o.children,(r=>r.domNode===e)):void 0;t&&!s&&d!==r.length-1||(o=s)})),o},s=n=>{let s;const c={..._advanced_projector_options_js__WEBPACK_IMPORTED_MODULE_2__.defaultAdvancedProjectorOptions,...n},i=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.applyDefaultProjectionOptions)(c),a=i.performanceLogger;let m,p=!0,l=!1;const f=[],u=[],h=(e,r,t)=>{let n;i.eventHandlerInterceptor=(e,r,t,i)=>function(e){let r;a("domEvent",e);const t=o(e.currentTarget,n.domNode),i=t.some((e=>customElements.get(e?.tagName?.toLowerCase())));if(e.eventPhase===Event.CAPTURING_PHASE||!i)t.reverse(),r=d(n.getLastRender(),t);else{const t=e.composedPath(),o=t.slice(t.indexOf(e.currentTarget),t.indexOf(n.domNode)).reverse();r=d(n.getLastRender(),o,!0)}let m;return r&&(m=c.handleInterceptedEvent(s,r,this,e)),a("domEventProcessed",e),m},c.postProcessProjectionOptions?.(i);const m=t();n=e(r,m,i),i.eventHandlerInterceptor=void 0,f.push(n),u.push(t),c.afterFirstVNodeRendered&&c.afterFirstVNodeRendered(n,m)};let v=()=>{if(m=void 0,p){p=!1,a("renderStart",void 0);for(let r=0;r<f.length;r++){const t=u[r]();a("rendered",void 0);try{f[r].update(t)}catch(e){console.error(e)}a("patched",void 0)}a("renderDone",void 0),p=!0}};return c.modifyDoRenderImplementation&&(v=c.modifyDoRenderImplementation(v,f,u)),s={renderNow:v,scheduleRender:()=>{m||l||(m=requestAnimationFrame(v))},stop:()=>{m&&(cancelAnimationFrame(m),m=void 0),l=!0},resume:()=>{l=!1,p=!0,s.scheduleRender()},append:(r,t)=>{h(_maquette_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.append,r,t)},insertBefore:(r,t)=>{h(_maquette_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.insertBefore,r,t)},merge:(r,t)=>{h(_maquette_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.merge,r,t)},replace:(r,t)=>{h(_maquette_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.replace,r,t)},detach:e=>{for(let r=0;r<u.length;r++)if(u[r]===e)return u.splice(r,1),f.splice(r,1)[0];throw new Error("renderFunction was not found")}},s};


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/maquette-advanced-projector/utils.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDefaultProjectionOptions: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,t)=>{"-"===r.charAt(0)?e.style.setProperty(r,t):e.style[r]=t}},r=r=>({...e,...r});


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/maquette/dom.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/maquette/dom.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDefaultProjectionOptions: function() { return /* binding */ d; },
/* harmony export */   dom: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projection.js */ "./node_modules/@arcgis/core/libs/maquette/projection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p={namespace:void 0,performanceLogger:()=>{},eventHandlerInterceptor:void 0,styleApplyer:(e,r,o)=>{"-"===r.charAt(0)?e.style.setProperty(r,o):e.style[r]=o}};let d=r=>(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.extend)(p,r),n={create:(e,t)=>(t=d(t),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createDom)(e,document.createElement("div"),void 0,t),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createProjection)(e,t)),append:(e,t,p)=>(p=d(p),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createDom)(t,e,void 0,p),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createProjection)(t,p)),insertBefore:(e,t,p)=>(p=d(p),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createDom)(t,e.parentNode,e,p),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createProjection)(t,p)),merge:(e,r,p)=>(p=d(p),r.domNode=e,(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.initPropertiesAndChildren)(e,r,p),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createProjection)(r,p)),replace:(e,t,p)=>(p=d(p),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createDom)(t,e.parentNode,e,p),e.parentNode.removeChild(e),(0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.createProjection)(t,p))};


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/maquette/projection.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/maquette/projection.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDom: function() { return /* binding */ x; },
/* harmony export */   createProjection: function() { return /* binding */ C; },
/* harmony export */   extend: function() { return /* binding */ n; },
/* harmony export */   initPropertiesAndChildren: function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/support/widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t="http://www.w3.org/",r=`${t}2000/svg`,o=`${t}1999/xlink`;let i=[],n=(e,t)=>{let r={};return Object.keys(e).forEach((t=>{r[t]=e[t]})),t&&Object.keys(t).forEach((e=>{r[e]=t[e]})),r},s=(e,t)=>e.vnodeSelector===t.vnodeSelector&&(e.properties&&t.properties?e.properties.key===t.properties.key&&e.properties.bind===t.properties.bind:!e.properties&&!t.properties),l=e=>{if("string"!=typeof e)throw new Error("Style values must be strings")},p=(e,t,r)=>{if(""!==t.vnodeSelector)for(let o=r;o<e.length;o++)if(s(e[o],t))return o;return-1},d=(e,t,r,o)=>{let i=e[t];if(""===i.vnodeSelector)return;let n=i.properties;if(!(n?void 0===n.key?n.bind:n.key:void 0))for(let l=0;l<e.length;l++)if(l!==t){let t=e[l];if(s(t,i))throw new Error(`${r.vnodeSelector} had a ${i.vnodeSelector} child ${"added"===o?o:"removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`)}},a=e=>{if(e.properties){let t=e.properties.enterAnimation;t&&t(e.domNode,e.properties)}},f=[],c=!1,u=e=>{(e.children||[]).forEach(u),e.properties&&e.properties.afterRemoved&&e.properties.afterRemoved.apply(e.properties.bind||e.properties,[e.domNode])},m=()=>{c=!1,f.forEach(u),f.length=0},h=e=>{f.push(e),c||(c=!0,"undefined"!=typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(m,{timeout:16}):setTimeout(m,16))},v=e=>{let t=e.domNode;if(e.properties){let r=e.properties.exitAnimation;if(r){t.style.pointerEvents="none";let o=()=>{t.parentNode&&(t.parentNode.removeChild(t),h(e))};return void r(t,o,e.properties)}}t.parentNode&&(t.parentNode.removeChild(t),h(e))},y=(t,i,n)=>{if(!i)return;let s=n.eventHandlerInterceptor,p=Object.keys(i),d=p.length;for(let a=0;a<d;a++){let d=p[a],f=i[d];if("className"===d)throw new Error('Property "className" is not supported, use "class".');if("class"===d)k(t,f,!0);else if("classes"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o];f[r]&&t.classList.add(r)}}else if("styles"===d){let e=Object.keys(f),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=f[r];i&&(l(i),n.styleApplyer(t,r,i))}}else if("key"!==d&&null!=f){let l=typeof f;"function"===l?(0===d.lastIndexOf("on",0)&&(s&&(f=s(d,f,t,i)),"oninput"===d&&function(){let e=f;f=function(t){e.apply(this,[t]),t.target["oninput-value"]=t.target.value}}()),t[d]=f):n.namespace===r?"href"===d?t.setAttributeNS(o,d,f):t.setAttribute(d,f):"string"===l&&"value"!==d?"innerHTML"===d?t[d]=_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_0__.renderingSanitizer.sanitize(f):g(t)&&d in t?t[d]=f:t.setAttribute(d,f):t[d]=f}}};function g(e){if(!(e instanceof Element&&e.tagName.includes("-")))return!1;const t=window.customElements.get(e.tagName.toLowerCase());return!!t&&e instanceof t}let N,b=(e,t,r)=>{if(t)for(let o of t)x(o,e,void 0,r)},w=(e,t,r)=>{b(e,t.children,r),t.text&&(e.textContent=t.text),y(e,t.properties,r),t.properties&&t.properties.afterCreate&&t.properties.afterCreate.apply(t.properties.bind||t.properties,[e,r,t.vnodeSelector,t.properties,t.children])},x=(e,t,o,i)=>{let s,l=0,p=e.vnodeSelector,d=t.ownerDocument;if(""===p)s=e.domNode=d.createTextNode(e.text),void 0!==o?t.insertBefore(s,o):t.appendChild(s);else{for(let a=0;a<=p.length;++a){let f=p.charAt(a);if(a===p.length||"."===f||"#"===f){let f=p.charAt(l-1),c=p.slice(l,a);"."===f?s.classList.add(c):"#"===f?s.id=c:("svg"===c&&(i=n(i,{namespace:r})),void 0!==i.namespace?s=e.domNode=d.createElementNS(i.namespace,c):(s=e.domNode=e.domNode||d.createElement(c),"input"===c&&e.properties&&void 0!==e.properties.type&&s.setAttribute("type",e.properties.type)),void 0!==o?t.insertBefore(s,o):s.parentNode!==t&&t.appendChild(s)),l=a+1}}w(s,e,i)}},k=(e,t,r)=>{t&&t.split(" ").forEach((t=>{t&&e.classList.toggle(t,r)}))},A=(t,i,n,s)=>{if(!n)return;let p=!1,d=Object.keys(n),a=d.length;for(let f=0;f<a;f++){let a=d[f],c=n[a],u=i[a];if("class"===a)u!==c&&(k(t,u,!1),k(t,c,!0));else if("classes"===a){let e=t.classList,r=Object.keys(c),o=r.length;for(let t=0;t<o;t++){let o=r[t],i=!!c[o];i!==!!u[o]&&(p=!0,i?e.add(o):e.remove(o))}}else if("styles"===a){let e=Object.keys(c),r=e.length;for(let o=0;o<r;o++){let r=e[o],i=c[r];i!==u[r]&&(p=!0,i?(l(i),s.styleApplyer(t,r,i)):s.styleApplyer(t,r,""))}}else if(c||"string"!=typeof u||(c=""),"value"!==a||g(t)){if(c!==u){let i=typeof c;"function"===i&&s.eventHandlerInterceptor||(s.namespace===r?"href"===a?t.setAttributeNS(o,a,c):t.setAttribute(a,c):"string"===i?"innerHTML"===a?t[a]=_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_0__.renderingSanitizer.sanitize(c):"role"===a&&""===c?t.removeAttribute(a):g(t)&&a in t?t[a]=c:t.setAttribute(a,c):t[a]!==c&&(t[a]=c),p=!0)}}else{let e=t[a];e!==c&&(t["oninput-value"]?e===t["oninput-value"]:c!==u)&&(t[a]=c,t["oninput-value"]=void 0),c!==u&&(p=!0)}}return p},S=(e,t,r,o,n)=>{if(r===o)return!1;o=o||i;let l,f=(r=r||i).length,c=o.length,u=0,m=0,h=!1;for(;m<c;){let i=u<f?r[u]:void 0,c=o[m];if(void 0!==i&&s(i,c))h=N(i,c,n)||h,u++;else{let i=p(r,c,u+1);if(i>=0){for(l=u;l<i;l++)v(r[l]),d(r,l,e,"removed");h=N(r[i],c,n)||h,u=i+1}else x(c,t,u<f?r[u].domNode:void 0,n),a(c),d(o,m,e,"added")}m++}if(f>u)for(l=u;l<f;l++)v(r[l]),d(r,l,e,"removed");return h};N=(e,t,o)=>{let i=e.domNode,s=!1;if(e===t)return!1;let l=!1;if(""===t.vnodeSelector){if(t.text!==e.text){let e=i.ownerDocument.createTextNode(t.text);return i.parentNode.replaceChild(e,i),t.domNode=e,s=!0,s}t.domNode=i}else 0===t.vnodeSelector.lastIndexOf("svg",0)&&(o=n(o,{namespace:r})),e.text!==t.text&&(l=!0,void 0===t.text?i.removeChild(i.firstChild):i.textContent=t.text),t.domNode=i,l=S(t,i,e.children,t.children,o)||l,l=A(i,e.properties,t.properties,o)||l,t.properties&&t.properties.afterUpdate&&t.properties.afterUpdate.apply(t.properties.bind||t.properties,[i,o,t.vnodeSelector,t.properties,t.children]);return l&&t.properties&&t.properties.updateAnimation&&t.properties.updateAnimation(i,t.properties,e.properties),s};let C=(e,t)=>({getLastRender:()=>e,update:r=>{if(e.vnodeSelector!==r.vnodeSelector)throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");let o=e;e=r,N(o,r,t)},domNode:e.domNode});


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/maquette/projector.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/maquette/projector.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjector: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@arcgis/core/libs/maquette/dom.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t,n=(e,r)=>{let t=[];for(;e&&e!==r;)t.push(e),e=e.parentNode;return t};t=Array.prototype.find?(e,r)=>e.find(r):(e,r)=>e.filter(r)[0];let o=(e,r)=>{let n=e;return r.forEach((e=>{n=n&&n.children?t(n.children,(r=>r.domNode===e)):void 0})),n},d=(e,r,t)=>{let d=function(d){t("domEvent",d);let i=r(),p=n(d.currentTarget,i.domNode);p.reverse();let l,a=o(i.getLastRender(),p);return e.scheduleRender(),a&&(l=a.properties[`on${d.type}`].apply(a.properties.bind||this,arguments)),t("domEventProcessed",d),l};return(e,r,t,n)=>d},i=t=>{let n,o,i=(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.applyDefaultProjectionOptions)(t),p=i.performanceLogger,l=!0,a=!1,s=[],c=[],u=(e,r,t)=>{let o,l=()=>o;i.eventHandlerInterceptor=d(n,l,p),o=e(r,t(),i),s.push(o),c.push(t)},f=()=>{if(o=void 0,l){l=!1,p("renderStart",void 0);for(let e=0;e<s.length;e++){let r=c[e]();p("rendered",void 0),s[e].update(r),p("patched",void 0)}p("renderDone",void 0),l=!0}};return n={renderNow:f,scheduleRender:()=>{o||a||(o=requestAnimationFrame(f))},stop:()=>{o&&(cancelAnimationFrame(o),o=void 0),a=!0},resume:()=>{a=!1,l=!0,n.scheduleRender()},append:(e,t)=>{u(_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.append,e,t)},insertBefore:(e,t)=>{u(_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.insertBefore,e,t)},merge:(e,t)=>{u(_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.merge,e,t)},replace:(e,t)=>{u(_dom_js__WEBPACK_IMPORTED_MODULE_0__.dom.replace,e,t)},detach:e=>{for(let r=0;r<c.length;r++)if(c[r]===e)return c.splice(r,1),s.splice(r,1)[0];throw new Error("renderFunction was not found")}},n};


/***/ }),

/***/ "./node_modules/@arcgis/core/support/themeUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/themeUtils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCalciteThemeClass: function() { return /* binding */ c; },
/* harmony export */   isDarkTheme: function() { return /* binding */ r; },
/* harmony export */   setCalciteThemeClass: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t="calcite-mode-";function e(){return getComputedStyle(document.body).getPropertyValue("--esri-calcite-mode-name").replaceAll(/\s|'|"/g,"")}function r(){return e().startsWith("dark")}function c(){return`${t}${r()?"dark":"light"}`}function n(t){o(t),t.classList.add(c())}function o(e){Array.from(e.classList).forEach((r=>{r.startsWith(t)&&e.classList.remove(r)}))}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/Widget.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/Widget.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ B; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _intl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../intl.js */ "./node_modules/@arcgis/core/intl.js");
/* harmony import */ var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/deprecate.js */ "./node_modules/@arcgis/core/core/deprecate.js");
/* harmony import */ var _core_domUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/domUtils.js */ "./node_modules/@arcgis/core/core/domUtils.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/Promise.js */ "./node_modules/@arcgis/core/core/Promise.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/accessorSupport/tracking.js */ "./node_modules/@arcgis/core/core/accessorSupport/tracking.js");
/* harmony import */ var _core_accessorSupport_tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/accessorSupport/tracking/SimpleTrackingTarget.js */ "./node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleTrackingTarget.js");
/* harmony import */ var _libs_maquette_advanced_projector_projector_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../libs/maquette-advanced-projector/projector.js */ "./node_modules/@arcgis/core/libs/maquette-advanced-projector/projector.js");
/* harmony import */ var _support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/componentsUtils.js */ "./node_modules/@arcgis/core/widgets/support/componentsUtils.js");
/* harmony import */ var _support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/jsxWidgetSupport.js */ "./node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js");
/* harmony import */ var _support_symbols_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/symbols.js */ "./node_modules/@arcgis/core/widgets/support/symbols.js");
/* harmony import */ var _support_tests_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/tests.js */ "./node_modules/@arcgis/core/widgets/support/tests.js");
/* harmony import */ var _support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/vnodeCache.js */ "./node_modules/@arcgis/core/widgets/support/vnodeCache.js");
/* harmony import */ var _support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../intl/locale.js */ "./node_modules/@arcgis/core/intl/locale.js");
/* harmony import */ var _intl_messages_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../intl/messages.js */ "./node_modules/@arcgis/core/intl/messages.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var $;const U="esri.widgets.Widget";let z=0;function W(e,t){const r=Object.prototype.hasOwnProperty;for(const s in t)r.call(t,s)&&r.call(e,s)&&(null!=e[s]&&null!=t[s]&&"object"==typeof e[s]&&"object"==typeof t[s]?W(e[s],t[s]):e[s]=t[s]);return e}const x=(0,_libs_maquette_advanced_projector_projector_js__WEBPACK_IMPORTED_MODULE_19__.createAdvancedProjector)({postProcessProjectionOptions(e){const t=e.eventHandlerInterceptor,r=/capture$/i;e.eventHandlerInterceptor=(e,s,o,i)=>{const n=t?.(e,s,o,i),a=r.test(e);if(!((e=e.replace(r,"")).toLowerCase()in o)||a){const t=e[2].toLowerCase()+e.slice(3),r=e=>n?.call(o,e);o.addEventListener(t,r,a);const s=()=>o.removeEventListener(t,r,a),d=i.afterRemoved;i.afterRemoved=e=>{d?.(e),s()}}return n}},handleInterceptedEvent(e,t,r,s){const{eventPhase:o,type:i}=s,n=o===Event.CAPTURING_PHASE;let a=`on${i}${n?"capture":""}`;const d=t.properties;(d&&a in d||(a=`on${i[0].toUpperCase()}${i.slice(1)}${n?"Capture":""}`,d&&a in d))&&((0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__.clearVNodeCache)(),e.scheduleRender(),d[a].call(d.bind||r,s))}});let A=!1,O=class extends((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_10__.EsriPromiseMixin)(_core_Evented_js__WEBPACK_IMPORTED_MODULE_4__["default"].EventedAccessor)){constructor(e,t){super(e,t),this._attached=!1,this._projector=x,this._readyForTrueRender=!1,this.key=this,this.autoRenderingEnabled=!0,this._loadLocale=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.debounce)((async()=>{if(this._messageBundleProps?.length){const e=await Promise.allSettled(this._messageBundleProps.map((async({bundlePath:e,propertyName:t})=>{if(this.destroyed)return;let r=await (0,_intl_messages_js__WEBPACK_IMPORTED_MODULE_27__.fetchMessageBundle)(e);this.uiStrings&&Object.keys(this.uiStrings)&&(r=W((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_7__.clone)(r),this.uiStrings)),this[t]=r})));if(this.destroyed)return;for(const t of e)"rejected"===t.status&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].getLogger(this).error("widget-intl:locale-error",this.declaredClass,t.reason)}await this.loadLocale()})),(0,_support_componentsUtils_js__WEBPACK_IMPORTED_MODULE_20__.commitAssetPath)();const r="esri-widget-uid-"+(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_13__.generateUUID)(),s=this.render.bind(this);this._trackingTarget=new _core_accessorSupport_tracking_SimpleTrackingTarget_js__WEBPACK_IMPORTED_MODULE_18__.SimpleTrackingTarget((()=>{this.autoRenderingEnabled&&this.scheduleRender()}));const o=()=>({vnodeSelector:"div",properties:{key:`${r}-hidden`,class:"",styles:{display:"none"}},domNode:null,children:void 0,text:void 0}),i=()=>{if(!this._readyForTrueRender||this.destroyed)return null;const e=s()??o(),t=e.properties??={};if(t.key??=r,(0,_support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_21__.isWidgetConstructor)(e.vnodeSelector)){if(!this.visible)return o()}else this.visible?t.styles||(t.styles={}):(t.class="",t.styles={display:"none"}),t.styles.display??="";let i=0;return e.children?.forEach((e=>{(0,_support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_21__.isWidgetConstructor)(e.vnodeSelector)||(e.properties??={},e.properties.key??=`${this.id}--${i++}`)})),(0,_support_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_21__.processWidgets)(this,e)};this.render=()=>{if(A)return i();let e=(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__.getVNodeCache)(this)??null;if(e)return e;this._trackingTarget.clear(),A=!0;try{e=(0,_core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_17__.runTracked)(this._trackingTarget,i)}catch(t){throw _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].getLogger(this).error(t),t}finally{A=!1}return e&&(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__.setVNodeCache)(this,e),e};const d=this.beforeFirstRender();d?this._resourcesFetch=d.then((()=>{this._readyForTrueRender=!0,this._postInitialize()})):(this._resourcesFetch=Promise.resolve().then((()=>{this._postInitialize()})),this._readyForTrueRender=!0),this.addResolvingPromise(this._resourcesFetch),(0,_support_tests_js__WEBPACK_IMPORTED_MODULE_23__.registerLoading)(this._resourcesFetch)}normalizeCtorArgs(e,t){const r={...e};return t&&(r.container=t),r}postInitialize(){}beforeFirstRender(){const e=this.loadDependencies();return this._messageBundleProps?.length||e?Promise.all([e,this._loadLocale()]).then((()=>{})).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.throwIfNotAbortError):null}loadDependencies(){return null}loadLocale(){return null}destroy(){this.destroyed||((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__.destroyMaybe)(this._trackingTarget),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__.destroyMaybe)(this.viewModel),this._detach(this.container),this._set("container",null),this._emitter.clear(),this.render=()=>null,this._projector=null,(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__.deleteVNodeCache)(this))}set container(e){this._get("container")||this._set("container",e)}castContainer(e){return (0,_core_domUtils_js__WEBPACK_IMPORTED_MODULE_3__.byId)(e)}get domNode(){return this.container}set domNode(e){this.container=e}get icon(){return null}set icon(e){this._overrideIfSome("icon",e)}get id(){return this._get("id")||this.container?.id||Date.now().toString(16)+"-widget-"+z++}set id(e){e&&this._set("id",e)}get label(){return this.declaredClass.split(".").pop()}set label(e){this._overrideIfSome("label",e)}get renderable(){return this._resourcesFetch}get visible(){return this._get("visible")}set visible(e){this._set("visible",e)}get[($=_support_symbols_js__WEBPACK_IMPORTED_MODULE_22__.widgetSymbol,_support_symbols_js__WEBPACK_IMPORTED_MODULE_22__.widgetTestDataSymbol)](){return{projector:this._projector}}render(){throw new Error("not implemented")}scheduleRender(){this.destroyed||((0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__.deleteVNodeCache)(this),this._projector.scheduleRender())}own(e){(0,_core_deprecate_js__WEBPACK_IMPORTED_MODULE_2__.deprecatedFunction)(_core_Logger_js__WEBPACK_IMPORTED_MODULE_8__["default"].getLogger(this),"`Widget.own()` is deprecated in favor of 'Widget.addHandles()'",{replacement:"Widget.addHandles()",version:"4.28"}),this.addHandles(e)}classes(...e){return _support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_25__.classes.apply(this,e)}renderNow(){(0,_support_vnodeCache_js__WEBPACK_IMPORTED_MODULE_24__.deleteVNodeCache)(this),this._projector.renderNow()}_postInitialize(){if(this.destroyed)return;this.scheduleRender(),this._delegatedEventNames?.length&&this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__.watch)((()=>this.viewModel),((e,t)=>{t&&this.removeHandles("delegated-events"),e&&(0,_core_events_js__WEBPACK_IMPORTED_MODULE_5__.isEventedOrEventTarget)(e)&&this.addHandles(this._delegatedEventNames.map((t=>(0,_core_events_js__WEBPACK_IMPORTED_MODULE_5__.on)(e,t,(e=>{this.emit(t,e)})))),"delegated-events")}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__.syncAndInitial)),this.postInitialize();const e=async()=>{await this._loadLocale().catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.throwIfNotAbortError),this.scheduleRender()};this.addHandles([(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_26__.onLocaleChange)(e),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__.watch)((()=>this.uiStrings),e),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__.when)((()=>this.container),(e=>{this.destroyed||this._attach(e)}),{initial:!0,once:!0})])}_attach(e){e&&(this._projector.merge(e,this.render),this._attached=!0)}_detach(e){this._attached&&(this._projector.detach(this.render),this._attached=!1),e?.parentNode?.removeChild(e)}};O[$]=!0,O.vnodeSelector="div",(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"_readyForTrueRender",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({value:null})],O.prototype,"container",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_15__.cast)("container")],O.prototype,"castContainer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"icon",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"id",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"label",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"renderable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"uiStrings",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"viewModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)({value:!0})],O.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"key",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"children",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"afterCreate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"afterUpdate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_14__.property)()],O.prototype,"afterRemoved",void 0),O=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__.subclass)(U)],O);const B=O;


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/componentsUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/componentsUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commitAssetPath: function() { return /* binding */ n; },
/* harmony export */   loadCalciteComponents: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/calcite-components/dist/components/index.js */ "./node_modules/@esri/calcite-components/dist/components/index.js");
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c;function n(){try{(0,_esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__.getAssetPath)(".")}catch{(0,_esri_calcite_components_dist_components_index_js__WEBPACK_IMPORTED_MODULE_0__.setAssetPath)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.makeAbsolute)((0,_assets_js__WEBPACK_IMPORTED_MODULE_1__.getAssetUrl)(c)))}}function r(t){const o=[];for(const s of Object.keys(t))customElements.get(`calcite-${s}`)||o.push(t[s]?.());return o.length>0?Promise.all(o):null}c="components/assets";


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageBundle: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return(s,r)=>{s.hasOwnProperty("_messageBundleProps")||(s._messageBundleProps=s._messageBundleProps?s._messageBundleProps.slice():[]);s._messageBundleProps.push({bundlePath:e,propertyName:r})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/jsxFactory.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tsx: function() { return /* binding */ n; },
/* harmony export */   tsxFragment: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsxWidgetSupport.js */ "./node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e=function(r){return{vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}},o=function(r,t){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?o(d,t):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=e(d)),t.push(d))}},t=function(r,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return{vnodeSelector:r,properties:e||void 0,children:void 0,text:t[0],domNode:null};var i=[];return o(t,i),{vnodeSelector:r,properties:e||void 0,children:i,text:void 0,domNode:null}};function n(e,o,...n){return"function"!=typeof e||(0,_jsxWidgetSupport_js__WEBPACK_IMPORTED_MODULE_0__.isWidgetConstructor)(e)?t(e,o,...n):e(o,...n)}function i(...r){return r}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWidgetConstructor: function() { return /* binding */ f; },
/* harmony export */   processWidgets: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbols.js */ "./node_modules/@arcgis/core/widgets/support/symbols.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=[],n={},i=new WeakMap;function d(e,t){let r=t.children;if(r?.length)for(let o=0;o<r.length;++o)r[o]=d(e,r[o]);else r=o;const i=t.vnodeSelector;if(f(i)){const o=t.properties||n,d=o.key||i,f={key:d,afterCreate:c,afterUpdate:s,afterRemoved:a,parentWidget:e,widgetConstructor:i,widgetProperties:{...o,key:d,children:r}};return{vnodeSelector:i.vnodeSelector,properties:f,children:void 0,text:void 0,domNode:null}}return t}function c(r,o,n,{parentWidget:d,widgetConstructor:c,widgetProperties:s}){const f=new c(s);f.container=r,i.set(r,f),f.afterCreate?.(f,r),d.addHandles((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__.makeHandle)((()=>a(r)))),queueMicrotask((()=>{f[_symbols_js__WEBPACK_IMPORTED_MODULE_1__.widgetTestDataSymbol].projector.renderNow()}))}function s(e,t,r,{widgetProperties:o}){const n=i.get(e);n&&(n.set(o),n.afterUpdate?.(n,e))}function a(e){const t=i.get(e);t&&(t.afterRemoved?.(t,e),t.destroy(),i.delete(e))}function f(e){return"function"==typeof e&&e[_symbols_js__WEBPACK_IMPORTED_MODULE_1__.widgetSymbol]}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/symbols.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/symbols.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   widgetSymbol: function() { return /* binding */ t; },
/* harmony export */   widgetTestDataSymbol: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=Symbol("widget"),e=Symbol("widget-test-data");


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/tests.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/tests.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasPendingLoading: function() { return /* binding */ t; },
/* harmony export */   registerLoading: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=new Set;function n(n){e.add(n),n.finally((()=>e.delete(n)))}function t(){return e.size>0}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/vnodeCache.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/vnodeCache.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearVNodeCache: function() { return /* binding */ t; },
/* harmony export */   deleteVNodeCache: function() { return /* binding */ o; },
/* harmony export */   getVNodeCache: function() { return /* binding */ e; },
/* harmony export */   setVNodeCache: function() { return /* binding */ c; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=new Map;function t(){n.clear()}function e(t){return n.get(t)}function c(t,e){n.set(t,e)}function o(t){n.delete(t)}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/widgetUtils.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   additionalAllowedTags: function() { return /* binding */ d; },
/* harmony export */   classes: function() { return /* binding */ l; },
/* harmony export */   discardNode: function() { return /* binding */ f; },
/* harmony export */   isActivationKey: function() { return /* binding */ v; },
/* harmony export */   isRTL: function() { return /* binding */ u; },
/* harmony export */   onResize: function() { return /* binding */ p; },
/* harmony export */   renderingSanitizer: function() { return /* binding */ y; },
/* harmony export */   safeAttrs: function() { return /* binding */ h; },
/* harmony export */   setFocus: function() { return /* binding */ w; },
/* harmony export */   storeNode: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _esri_arcgis_html_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @esri/arcgis-html-sanitizer */ "./node_modules/@esri/arcgis-html-sanitizer/dist/esm/index.js");
/* harmony import */ var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ArrayPool.js */ "./node_modules/@arcgis/core/core/ArrayPool.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/scheduling.js */ "./node_modules/@arcgis/core/core/scheduling.js");
/* harmony import */ var _vnodeCache_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vnodeCache.js */ "./node_modules/@arcgis/core/widgets/support/vnodeCache.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l(...e){const r=_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_1__["default"].acquire();for(let t=0;t<e.length;t++){const o=e[t],n=typeof o;if("string"===n)r.push(o);else if(Array.isArray(o))r.push.apply(r,o);else if("object"===n)for(const e in o)o[e]&&r.push(e)}const o=r.join(" ");return _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_1__["default"].release(r),o}const p=(()=>{const e=new Map,t=new ResizeObserver((t=>{(0,_vnodeCache_js__WEBPACK_IMPORTED_MODULE_8__.clearVNodeCache)();for(const r of t)e.get(r.target)?.(r)})),n=(r,n,s)=>(e.set(r,n),t.observe(r,s),(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__.makeHandle)((()=>{t.unobserve(r),e.delete(r)})));return(e,t,a)=>{let c=null;return (0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__.handlesGroup)([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>"function"==typeof e?e():e),(e=>{c?.remove(),e&&(c=n(e,t,a))}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.syncAndInitial),(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__.makeHandle)((()=>c?.remove()))])}})();function u(e){const t=e?.closest("[dir]");return null!==t&&t instanceof HTMLElement&&"rtl"===t.dir||"rtl"===document.dir}function f(e){const t="data-node-ref";this[e.getAttribute(t)]=null}function m(e){const t="data-node-ref";this[e.getAttribute(t)]=e}const d=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],g=d.reduce(((e,t)=>(e[t]=[],e)),{}),h=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],y=new _esri_arcgis_html_sanitizer__WEBPACK_IMPORTED_MODULE_0__["default"]({whiteList:g,onTagAttr:(e,t,r)=>{const o=`${t}="${r}"`;if(h.includes(t))return o},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);function v(e){return"Enter"===e||" "===e}async function w(e,t){await (0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_7__.waitAnimationFrame)((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.signalFromSignalOrOptions)(t));const r="function"==typeof e?e():e;r&&("setFocus"in r&&"function"==typeof r.setFocus?await r.setFocus():r instanceof HTMLElement&&r.focus())}


/***/ })

}]);
//# sourceMappingURL=identity-IdentityManager.js.map