"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfmfp"] = self["webpackChunkfmfp"] || []).push([["im-scale-bar-plugin"],{

/***/ "./node_modules/@defra/interactive-map/plugins/beta/scale-bar/dist/esm/im-scale-bar-plugin.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@defra/interactive-map/plugins/beta/scale-bar/dist/esm/im-scale-bar-plugin.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   manifest: function() { return /* binding */ o; }\n/* harmony export */ });\n/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ \"./node_modules/preact/compat/dist/compat.module.js\");\n/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/jsx-runtime */ \"./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js\");\nvar e={small:1,medium:1.5,large:2},i={metric:[{threshold:1,abbr:\"m\",abbrPlural:\"m\",unit:\"metre\",unitPlural:\"metres\",factor:1},{threshold:1e3,abbr:\"km\",abbrPlural:\"km\",unit:\"kilometre\",unitPlural:\"kilometres\",factor:.001}],imperial:[{threshold:1609.344,abbr:\"mi\",abbrPlural:\"mi\",unit:\"mile\",unitPlural:\"miles\",factor:1/1609.344},{threshold:.9144,abbr:\"yd\",abbrPlural:\"yds\",unit:\"yard\",unitPlural:\"yards\",factor:1/.9144},{threshold:.3048,abbr:\"ft\",abbrPlural:\"ft\",unit:\"foot\",unitPlural:\"feet\",factor:1/.3048}]},b=r=>{var a=Math.pow(10,Math.floor(Math.log10(r))),l=r/a;return(l>=10?10:l>=5?5:l>=3?3:l>=2?2:1)*a};var o={controls:[{id:\"scaleBar\",label:\"Scale bar\",mobile:{slot:\"right-bottom\"},tablet:{slot:\"right-bottom\"},desktop:{slot:\"right-bottom\"},render:function(o){var{mapState:u,pluginConfig:n}=o,{resolution:s,mapSize:m}=u,c=(0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),d=(0,preact_compat__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>s?((r,a,l,t)=>{var o=r/e[t],u=o*a,n=i[l];for(var{abbr:s,abbrPlural:m,unit:c,unitPlural:d,factor:h}of n){var f=b(u*h);if(f>=1&&f<1e3){var p=f/h/o;if(p<=a)return{label:f,abbr:f>1?m:s,width:p,unit:f>1?d:c}}}var P=n[n.length-1],v=u*P.factor,g=b(v),y=g>1?P.abbrPlural:P.abbr,w=g>1?P.abbrPlural:P.abbr;return{label:g,abbr:y,width:g/P.factor/o,unit:w}})(s/1,120,n.units,m):{width:0,label:\"\",abbr:\"\",unit:\"\"},[s,m,n.units]);return (0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\",{className:\"im-c-scale-bar\",ref:c,style:{width:\"\".concat(d.width,\"px\")},children:(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"span\",{className:\"im-c-scale-bar__label\",children:[(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\",{className:\"im-u-visually-hidden\",children:\"Scale bar: \"}),d.label,(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\",{\"aria-hidden\":\"true\",children:d.abbr}),(0,preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\",{className:\"im-u-visually-hidden\",children:d.unit})]})})}}]};\n\n\n//# sourceURL=webpack://fmfp/./node_modules/@defra/interactive-map/plugins/beta/scale-bar/dist/esm/im-scale-bar-plugin.js?\n}");

/***/ })

}]);