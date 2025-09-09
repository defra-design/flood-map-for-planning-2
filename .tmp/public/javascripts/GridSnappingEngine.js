"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["GridSnappingEngine"],{

/***/ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClosestDenormalizedXToReference: function() { return /* binding */ P; },
/* harmony export */   getDenormalizedExtent: function() { return /* binding */ v; },
/* harmony export */   normalizeCentralMeridian: function() { return /* binding */ R; },
/* harmony export */   normalizeMapX: function() { return /* binding */ L; },
/* harmony export */   straightLineDensify: function() { return /* binding */ M; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalizeUtilsCommon.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../rest/geometryService/cut.js */ "./node_modules/@arcgis/core/rest/geometryService/cut.js");
/* harmony import */ var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../rest/geometryService/simplify.js */ "./node_modules/@arcgis/core/rest/geometryService/simplify.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.geometry.support.normalizeUtils");function g(t){return"polygon"===t.type}function y(t){return"polygon"===t[0].type}function x(t){return"polyline"===t[0].type}function d(t){const e=[];let n=0,o=0;for(let s=0;s<t.length;s++){const r=t[s];let i=null;for(let t=0;t<r.length;t++)i=r[t],e.push(i),0===t?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&e.push([(n+o)/2,0])}return e}function M(t,n){if(!(t instanceof _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]||t instanceof _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"])){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](t)}const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(t),l=[];for(const e of i){const t=[];l.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],c=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),f=(l-r)/c,u=(i-s)/c,p=c/n;if(p>1){for(let l=1;l<=p-1;l++){const e=l*n,o=u*e+s,i=f*e+r;t.push([o,i])}const e=(c+Math.floor(p-1)*n)/2,o=u*e+s,i=f*e+r;t.push([o,i])}t.push([i,l])}}return g(t)?new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:l,spatialReference:t.spatialReference}):new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:l,spatialReference:t.spatialReference})}function w(t,e,n){if(e){const e=M(t,1e6);t=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.webMercatorToGeographic)(e,!0)}return n&&(t=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,e);t[0]=o+n*(-2*e)}else if(o<n){const e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,n);t[0]=o+e*(-2*n)}}else{const o=t.x;if(o>e){const n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,e);t=t.clone().offset(n*(-2*e),0)}else if(o<n){const e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,n);t=t.clone().offset(e*(-2*n),0)}}return t}function j(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],i=e.geometries[o],c=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i);for(let t=0;t<c.length;t++){const e=c[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,180);for(let s=0;s<e.length;s++){const e=i.getPoint(t,s);i.setPoint(t,s,e.clone().offset(o,0))}return!0}}))}if(s===n){if(y(t))for(const e of (0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i))t[s]=t[s].addRing(e);else if(x(t))for(const e of (0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i))t[s]=t[s].addPath(e)}else n=s,t[s]=i}return t}async function R(e,n,r){if(!Array.isArray(e))return R([e],n);n&&"string"!=typeof n&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const p="string"==typeof n?n:n?.url??_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;let g,y,x,d,M,v,P,L,U=0;const z=[],A=[];for(const t of e)if(null!=t)if(g||(g=t.spatialReference,y=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(g),x=g.isWebMercator,v=x?102100:4326,d=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].maxX,M=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].minX,P=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].plus180Line,L=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].minus180Line),y)if("mesh"===t.type)A.push(t);else if("point"===t.type)A.push(b(t.clone(),d,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,d,M))),A.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);A.push(e.rings?new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"](e):e)}else if(t.extent){const e=t.extent,n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(e.xmin,M)*(2*d);let o=0===n?t.clone():(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(t.clone(),n);e.offset(n,0);let{xmin:s,xmax:r}=e;s=Number(s.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(P)&&r!==d?(U=r>U?r:U,o=w(o,x),z.push(o),A.push("cut")):e.intersects(L)&&s!==M?(U=r*(2*d)>U?r*(2*d):U,o=w(o,x,360),z.push(o),A.push("cut")):A.push(o)}else A.push(t.clone());else A.push(t);else A.push(t);let F=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(U,d),N=-90;const S=F,k=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"];for(;F>0;){const t=360*F-180;k.addPath([[t,N],[t,-1*N]]),N*=-1,F--}if(z.length>0&&S>0){const t=j(z,await (0,_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_8__.cut)(p,z,k,r)),n=[],o=[];for(let r=0;r<A.length;r++){const s=A[r];if("cut"!==s)o.push(s);else{const s=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&s.rings.length>=i.rings.length?(n.push(s),o.push("simplify")):o.push(x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(s):s)}}if(!n.length)return o;const s=await (0,_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_9__.simplify)(p,n,r),i=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?i.push(t):i.push(x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(s.shift()):s.shift())}return i}const C=[];for(let t=0;t<A.length;t++){const e=A[t];if("cut"!==e)C.push(e);else{const t=z.shift();C.push(!0===x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(t):t)}}return C}function v(t){if(!t)return null;const e=t.extent;if(!e)return null;const n=t.spatialReference&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(t.spatialReference);if(!n)return e;const[o,s]=n.valid,r=2*s,{width:i}=e;let l,{xmin:c,xmax:u}=e;if([c,u]=[u,c],"extent"===t.type||0===i||i<=s||i>r||c<o||u>s)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;l=d(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;l=d(t.paths);break;case"multipoint":l=t.points}const p=e.clone();for(let f=0;f<l.length;f++){let t=l[f][0];t<0?(t+=s,u=Math.max(t,u)):(t-=s,c=Math.min(t,c))}return p.xmin=c,p.xmax=u,p.width<i?(p.xmin-=s,p.xmax-=s,p):e}function P(t,e,n){const o=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(n);if(null==o)return t;const[s,r]=o.valid,i=2*r;let l=0,c=0;e>r?l=Math.ceil(Math.abs(e-r)/i):e<s&&(l=-Math.ceil(Math.abs(e-s)/i)),t>r?c=Math.ceil(Math.abs(t-r)/i):t<s&&(c=-Math.ceil(Math.abs(t-s)/i));let u=t+(l-c)*i;const p=u-e;return p>r?u-=i:p<s&&(u+=i),u}function L(t,e){const n=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s}return t}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cutParams: function() { return /* binding */ r; },
/* harmony export */   getGeometryParts: function() { return /* binding */ o; },
/* harmony export */   offsetMagnitude: function() { return /* binding */ i; },
/* harmony export */   updatePolyGeometry: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WebMercator}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[180,-180],[180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WGS84}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[-180,-180],[-180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WGS84})}};function i(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const r of t)for(const e of r)e[0]+=n;return e}function o(e){return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPolygon)(e)?e.rings:e.paths}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/scaleUtils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/scaleUtils.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getExtentForScale: function() { return /* binding */ f; },
/* harmony export */   getResolutionForScale: function() { return /* binding */ o; },
/* harmony export */   getResolutionInMetersForScale: function() { return /* binding */ u; },
/* harmony export */   getScale: function() { return /* binding */ i; },
/* harmony export */   getScaleForResolution: function() { return /* binding */ c; },
/* harmony export */   isInScaleRange: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r=96;function i(t,i){const o=i||t.extent,u=t.width,c=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnitForSR)(o?.spatialReference);return o&&u?o.width/u*c*_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.inchesPerMeter*r:0}function o(t,i){return t/((0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnitForSR)(i)*_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.inchesPerMeter*r)}function u(t){return t/(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.inchesPerMeter*r)}function c(t,i){return t*((0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnitForSR)(i)*_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.inchesPerMeter*r)}function f(t,n){const e=t.extent,r=t.width-(t.padding?t.padding.left+t.padding.right:0),i=o(n,e.spatialReference);return e.clone().expand(i*r/e.width)}function d(t,n,e){return a(t,n)&&p(t,e)}function a(n,e){return 0===e||(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.floatEqualAbsolute)(n,e)||n<e}function p(n,e){return 0===e||(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.floatEqualAbsolute)(n,e)||n>e}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/cut.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/cut.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cut: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function i(i,n,p,m){const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.parseUrl)(i),u=n[0].spatialReference,c={...m,responseType:"json",query:{...a.query,f:"json",sr:(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.srToRESTValue)(u),target:JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n[0]),geometries:n}),cutter:JSON.stringify(p)}},f=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a.path+"/cut",c),{cutIndexes:y,geometries:g=[]}=f.data;return{cutIndexes:y,geometries:g.map((e=>{const t=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e);return t.spatialReference=u,t}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/simplify.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/simplify.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simplify: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/rest/geometryService/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function m(m,p,f){const n="string"==typeof m?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(m):m,a=p[0].spatialReference,u=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(p[0]),l={...f,query:{...n.query,f:"json",sr:(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.srToRESTValue)(a),geometries:JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(p))}},{data:y}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n.path+"/simplify",l);return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.decodeGeometries)(y.geometries,u,a)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/utils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeGeometries: function() { return /* binding */ o; },
/* harmony export */   encodeGeometries: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(t){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJsonType)(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryType)(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

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

/***/ "./node_modules/@arcgis/core/views/2d/grid/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/grid/constants.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   minimumPixelsPerStrideForDisplayWhenScalingOff: function() { return /* binding */ t; },
/* harmony export */   pixelsPerCell: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=50,t=5;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/grid/gridUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/grid/gridUtils.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getScaleFactor: function() { return /* binding */ l; },
/* harmony export */   measureMetersPerUnitAtReferencePoint: function() { return /* binding */ u; },
/* harmony export */   shouldUsePlanar: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_geodesicUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/geodesicUtils.js */ "./node_modules/@arcgis/core/geometry/support/geodesicUtils.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.js */ "./node_modules/@arcgis/core/views/2d/grid/constants.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geometry/Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(e,t){return Math.log(e)/Math.log(t)}function l(e,t,r){const o=1===e?10:e;return o**(r?Math.round(a(_constants_js__WEBPACK_IMPORTED_MODULE_6__.pixelsPerCell/t,o)):0)}function f(e){const{isGeographic:t,isWebMercator:r}=e;return!t&&!r}function u(i,a,l){const u="number"==typeof i?null:i,y=l??u?.spatialReference;if(null==y||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.isValid)(y)||f(y))return (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnitForSR)(y);let g=u?.x??i,j=u?.y??a;const h=1/Math.sqrt(2);let M=g+h,x=j+h;const{isWebMercator:R,isGeographic:U}=y;let b=U&&!(0,_geometry_support_geodesicUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSupported)(y)?_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__["default"].WGS84:y;if(R){let e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]({x:g,y:j,spatialReference:y});(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.webMercatorToGeographic)(e,!0,e),g=e.x,j=e.y,e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_8__["default"]({x:M,y:x,spatialReference:y}),(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.webMercatorToGeographic)(e,!0,e),M=e.x,x=e.y,b=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__["default"].WGS84}const w=new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_9__["default"]({paths:[[[g,j],[M,x]]],spatialReference:b}),G=(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.straightLineDensify)(w,10);let W;try{[W]=(0,_geometry_support_geodesicUtils_js__WEBPACK_IMPORTED_MODULE_2__.geodesicLengths)([G],"meters")}catch{return (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnitForSR)(y)}return W}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridSnappingEngine: function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/support/scaleUtils.js */ "./node_modules/@arcgis/core/geometry/support/scaleUtils.js");
/* harmony import */ var _2d_grid_constants_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../2d/grid/constants.js */ "./node_modules/@arcgis/core/views/2d/grid/constants.js");
/* harmony import */ var _2d_grid_gridUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../2d/grid/gridUtils.js */ "./node_modules/@arcgis/core/views/2d/grid/gridUtils.js");
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sketch/normalizedPoint.js */ "./node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js");
/* harmony import */ var _snappingUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./snappingUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js");
/* harmony import */ var _candidates_IntersectionSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./candidates/IntersectionSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/IntersectionSnappingCandidate.js");
/* harmony import */ var _candidates_LineSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./candidates/LineSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/LineSnappingCandidate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let w=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__.deg2rad)(this.view.rotation??0)}get gridRotation(){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__.deg2rad)(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:e,grid:t}=this;if(!t||!e||!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.isLoadedOrLoadFor)(t.center.spatialReference,e))return null;try{const r=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.project)(t.center,e),i=e.isWrappable&&null!=this.view?.center?(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__.getClosestDenormalizedXToReference)(r.x,this.view.center.x,e):r.x;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.create)(i,r.y,r.z)}catch(i){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",i),null}}get offsetScaleFactor(){const{pixelsPerStride:e,grid:t}=this;if(!t||!e)return 1;const{majorLineInterval:r,dynamicScaling:i}=t;return r<1?null:(0,_2d_grid_gridUtils_js__WEBPACK_IMPORTED_MODULE_14__.getScaleFactor)(r,e,i)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:e}=this;return e?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertUnit)(e.spacing,e.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:e}=this;return null==e?null:e*(0,_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_12__.getResolutionForScale)(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:e}=this.view;return this.gridCenter?(0,_2d_grid_gridUtils_js__WEBPACK_IMPORTED_MODULE_14__.measureMetersPerUnitAtReferencePoint)(this.gridCenter[0],this.gridCenter[1],e):null}get pixelsPerStride(){const{gridMetersPerStride:e,viewMetersPerPixel:t}=this;return t&&e?e/t:null}get updating(){return null!=this.grid&&null!=this.spatialReference&&null==this.viewMetersPerSRUnit}async fetchCandidates(e,t,r){const{options:i,view:n}=this;if(!i?.effectiveGridEnabled||!n.grid||r.feature?.attributes&&_snappingUtils_js__WEBPACK_IMPORTED_MODULE_16__.gridPlacementGraphicSymbol in r.feature.attributes)return[];const o=r.coordinateHelper.arrayToPoint(e),s=i.distance*("touch"===r.pointer?i.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(o,s)}fetchCandidatesSync(e,t){const r=[],{grid:i,effectiveViewRotation:n,gridRotation:o,gridCenter:s,viewMetersPerPixel:a,viewMetersPerSRUnit:c,offsetScaleFactor:u,spatialReference:g,gridMetersPerStride:f,pixelsPerStride:m}=this;if(!(i&&a&&c&&s&&g&&u&&f&&m))return r;if(!i.dynamicScaling&&m<_2d_grid_constants_js__WEBPACK_IMPORTED_MODULE_13__.minimumPixelsPerStrideForDisplayWhenScalingOff)return r;if(!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.isLoadedOrLoadFor)(e.spatialReference,g))return r;const S=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.project)(e,g),w=(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.create)(S.x,S.y,S.z),x=P(w,-o,s,-n),C=f/c*u,U=j(x,C,s),{shouldSnapX:b,shouldSnapY:L}=R(U,x,t,a,c);if(!b&&!L)return[];const z=(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.create)((b?U:x)[0],(L?U:x)[1]),E=P(z,o,s,n),F=P(U,o,s,n);if(L){const e=M(U,x,C,"y"),t=P(e,o,s,n);r.push(new _candidates_LineSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_18__.LineSnappingCandidate({lineStart:F,lineEnd:t,targetPoint:E,isDraped:!1}))}if(b){const e=M(U,x,C,"x"),t=P(e,o,s,n);r.push(new _candidates_LineSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_18__.LineSnappingCandidate({lineStart:F,lineEnd:t,targetPoint:E,isDraped:!1}))}return b&&L&&r.push(new _candidates_IntersectionSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_17__.IntersectionSnappingCandidate(E,r[0],r[1],!1)),r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],w.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"options",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"grid",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"effectiveViewRotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"gridRotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"gridCenter",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"offsetScaleFactor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"gridMetersPerStride",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"viewMetersPerPixel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"viewMetersPerSRUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"pixelsPerStride",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],w.prototype,"updating",null),w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.interactive.snapping.GridSnappingEngine")],w);const P=(e,t,r,i)=>{const n=(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.createWritable)(e[0],e[1],e[2]);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__.K)(n,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__.K)(n,n,r,t),r,i)},j=(e,t,r)=>{const i=(e[0]-r[0])/t,n=(e[1]-r[1])/t,o=Math.trunc(i),s=Math.trunc(n),a=Math.round(i%1),p=Math.round(n%1),l=r[0]+(o+a)*t,c=r[1]+(s+p)*t;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.create)(l,c)},R=(e,t,r,i,n)=>{if(i<=0)return{shouldSnapX:!1,shouldSnapY:!1};const o=(e[0]-t[0])/i,s=(e[1]-t[1])/i;return{shouldSnapX:Math.abs(o*n)<r,shouldSnapY:Math.abs(s*n)<r}},M=(e,t,r,i)=>{if("y"===i){const i=t[0]>e[0]?1:-1;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.create)(e[0]+r*i,e[1])}const n=t[1]>e[1]?1:-1;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_15__.create)(e[0],e[1]+r*n)};


/***/ })

}]);
//# sourceMappingURL=GridSnappingEngine.js.map