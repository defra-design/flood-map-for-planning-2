"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["previewWebStyleSymbol"],{

/***/ "./node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewWebStyleSymbol: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./previewUtils.js */ "./node_modules/@arcgis/core/symbols/support/previewUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/symbols/support/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(e,i,r){const h=e.thumbnail?.url;return h?(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(h,{responseType:"image"}).then((t=>{const e=s(t.data,r);return r?.node?(r.node.appendChild(e),r.node):e})):(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.fetchWebStyleSymbol)(e).then((t=>t?i(t,r):null))}function s(t,n){const r=!/\\.svg$/i.test(t.src)&&n?.disableUpsampling,s=Math.max(t.width,t.height);let h=null!=n?.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(n.maxSize):_previewUtils_js__WEBPACK_IMPORTED_MODULE_2__.SymbolSizeDefaults.maxSize;r&&(h=Math.min(s,h));const o="number"==typeof n?.size?n?.size:null,m=Math.min(h,null!=o?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(o):s);if(m!==s){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=m,t.height=m/e):(t.width=m*e,t.height=m)}return t}


/***/ })

}]);
//# sourceMappingURL=previewWebStyleSymbol.js.map