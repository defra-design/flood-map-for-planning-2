"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["rest-versionManagement-gdbVersion-deleteForwardEdits"],{

/***/ "./node_modules/@arcgis/core/rest/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/utils.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asValidOptions: function() { return /* binding */ i; },
/* harmony export */   encode: function() { return /* binding */ s; },
/* harmony export */   getToken: function() { return /* binding */ u; },
/* harmony export */   parseUrl: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/apiKeyUtils.js */ "./node_modules/@arcgis/core/support/apiKeyUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(r,t){return t?{...t,query:{...r??{},...t.query}}:{query:r}}function f(r){return"string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)(r):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(r)}function s(r,t,o){const n={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[e]=i.map((r=>s(r)));else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(o?.[e]);n[e]=t?r:JSON.stringify(r)}else n[e]=t?i:JSON.stringify(i);else n[e]=i}return n}function u(o,n){return o?(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__.isApiKeyApplicable)(o,n)?n||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey:_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(o)?.token:null}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteForwardEdits: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function e(e,n,m,a){if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("post:missing-guid","guid for version is missing");const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(e),d=m.toJSON(),f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.asValidOptions)(u.query,{query:(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.encode)({...d,f:"json"}),...a,method:"post"});n.startsWith("{")&&(n=n.slice(1,-1));const p=`${u.path}/versions/${n}/deleteForwardEdits`,{data:c}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(p,f);return c}


/***/ })

}]);
//# sourceMappingURL=rest-versionManagement-gdbVersion-deleteForwardEdits.js.map