"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["rest-support-BinsQuery"],{

/***/ "./node_modules/@arcgis/core/geometry/geometryAdapters/json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jsonAdapter: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:s,exportPoint:n,exportPolygon:o,exportPolyline:a,exportMultipoint:c,exportExtent:m};function s(t,s){return null==s?null:t.convertJSONToGeometry(s)}class i{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}function n(t,s,n){const e=new i(t.getPointX(s),t.getPointY(s),n),o=t.hasZ(s),h=t.hasM(s);return o&&(e.z=t.getPointZ(s)),h&&(e.m=t.getPointM(s)),e}class e{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function o(t,s,i){return new e(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class h{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function a(t,s,i){return new h(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class r{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function c(t,s,i){return new r(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))}class x{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function m(t,s,i){const n=t.hasZ(s),e=t.hasM(s),o=new x(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);o.zmin=i.vmin,o.zmax=i.vmax}if(e){const i=t.getMExtent(s);o.mmin=i.vmin,o.mmax=i.vmax}return o}


/***/ }),

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

/***/ "./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkProjectionSupport: function() { return /* binding */ x; },
/* harmony export */   project: function() { return /* binding */ j; },
/* harmony export */   projectMany: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/geometryAdapters/json.js */ "./node_modules/@arcgis/core/geometry/geometryAdapters/json.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=[0,0];function h(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=s(t.x,t.y,c),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=s(t.xmin,t.ymin,c),[e.xmax,e.ymax]=s(t.xmax,t.ymax,c),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:l(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:l(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:f(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:null}function l(s,t){const e=[];for(const n of s)e.push(f(n,t));return e}function f(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3])}return e}async function x(t,n){if(!t||!n)return;const r=Array.isArray(t)?t.map((s=>null!=s.geometry?s.geometry.spatialReference:null)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.isSome):[t];await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__.initializeProjection)(r.map((s=>({source:s,dest:n}))))}const y=h.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.lngLatToXY),g=h.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.xyToLngLat);function j(s,t,e,m){if(!s)return s;if(e||(e=t,t=s.spatialReference),!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.isValid)(t)||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.isValid)(e)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.equals)(t,e))return s;if((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.canProject)(t,e)){const t=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.isWebMercator)(e)?y(s):g(s);return t.spatialReference=e,t}return (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__.jsonAdapter,[s],t,e,null,m)[0]}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,e,n,r){if(!s?.length||!e||!n||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.equals)(e,n))return s;const i={geometries:s,inSpatialReference:e,outSpatialReference:n,geographicTransformation:r,resolve:(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.createResolver)()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:o,geographicTransformation:m}=s;(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.canProject)(e,i)?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.isWebMercator)(i)?o(t.map(y)):o(t.map(g)):o((0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__.jsonAdapter,t,e,i,m,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const M=new _;function b(s,t,e,n){return M.push(s,t,e,n)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/data/queryUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/queryUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeQuery: function() { return /* binding */ S; },
/* harmony export */   normalizeQueryLike: function() { return /* binding */ j; },
/* harmony export */   queryEngineEmptyResult: function() { return /* binding */ g; },
/* harmony export */   unitsKebabDict: function() { return /* binding */ R; }
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/extentUtils.js */ "./node_modules/@arcgis/core/geometry/support/extentUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectionSupport.js */ "./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const R=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g=Object.freeze({});async function S(e,t,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:o,outStatistics:s}=e;if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(o)for(let a=0;a<o.length;a++)o[a]=o[a].trim();if(s)for(let a=0;a<s.length;a++)s[a].onStatisticField&&(s[a].onStatisticField=s[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),j(e,t,i)}async function j(e,t,i){if(!e)return null;let{where:o}=e;if(e.where=o=o?.trim(),(!o||/^1 *= *1$/.test(o)||t&&t===o)&&(e.where=null),!e.geometry)return e;let s=await d(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;s=(0,_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__.getGeometryExtent)(s),s.spatialReference=t}if(s){await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.checkProjectionSupport)(s.spatialReference,i),s=x(s,i);const t=(await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__.normalizeCentralMeridian)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.fromJSON)(s)))[0];if(null==t)throw g;const r="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=r&&w(s,i)?{densificationStep:8*r}:void 0,a=t.toJSON(),m=(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.project)(a,a.spatialReference,i,o);if(!m)throw g;m.spatialReference=i,e.geometry=m}return e}function w(e,t){if(!e)return!1;const r=e.spatialReference;return((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(e)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolygon)(e)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolyline)(e))&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.equals)(r,t)&&!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__.canProjectWithoutEngine)(r,t)}function x(e,t){const i=e.spatialReference;return w(e,t)&&(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function d(e){const{distance:i,units:r}=e,n=e.geometry;if(null==i||"vertexAttributes"in n)return n;const o=n.spatialReference,s=r?R.fromJSON(r):(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getUnitString)(o),a=o&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.isGeographic)(o)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.isWebMercator)(o))?n:await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.checkProjectionSupport)(o,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.wgs84).then((()=>(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__.project)(n,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.wgs84)));return(await U())(a.spatialReference,a,i,s)}async function U(){return(await __webpack_require__.e(/*! import() | geometry-geometryEngineJSON */ "geometry-geometryEngineJSON").then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/geometryEngineJSON.js */ "./node_modules/@arcgis/core/geometry/geometryEngineJSON.js"))).geodesicBuffer}


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

/***/ "./node_modules/@arcgis/core/rest/support/AutoIntervalBinParameters.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/AutoIntervalBinParameters.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BinParametersBase.js */ "./node_modules/@arcgis/core/rest/support/BinParametersBase.js");
/* harmony import */ var _NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NormalizationBinParametersMixin.js */ "./node_modules/@arcgis/core/rest/support/NormalizationBinParametersMixin.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p(r,e,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__.setDeepValue)(o,r instanceof Date?r.getTime():r,e)}let m=class extends((0,_NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__.NormalizationBinParametersMixin)(_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(r){super(r),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],m.prototype,"bins",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{name:"parameters.end",write:{writer:p}}})],m.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{name:"parameters.start",write:{writer:p}}})],m.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({autoIntervalBin:"auto-interval"},{readOnly:!0})],m.prototype,"type",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.AutoIntervalBinParameters")],m);const c=m;m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.ensureType)(m);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/BinParametersAttributes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/BinParametersAttributes.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(r){super(r),this.alias=null,this.expression=null,this.field=null,this.responseType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"expression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"responseType",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.BinParametersAttributes")],i);const n=i;i.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.ensureType)(i);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/BinParametersBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/BinParametersBase.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _BinParametersAttributes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BinParametersAttributes.js */ "./node_modules/@arcgis/core/rest/support/BinParametersAttributes.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({naturalLog:"natural-log",squareRoot:"square-root"});let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(t){super(t),this.expression=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitByAttributes=null,this.stackByAttributes=null,this.transformation=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"expression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{name:"onField",write:!0}})],n.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"firstDayOfWeek",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"hideUpperBound",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_BinParametersAttributes_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:{target:{splitBy:{type:String},splitByField:{type:String},splitByAlias:{type:String}},writer:(t,e)=>{null!=t.field&&(e.splitByField=t.field),null!=t.expression&&(e.splitBy=t.expression),null!=t.alias&&(e.splitByAlias=t.alias)}},read:{source:["splitBy","splitByField","splitByAlias"],reader:(t,e)=>new _BinParametersAttributes_js__WEBPACK_IMPORTED_MODULE_10__["default"]({field:e.splitByField,expression:e.splitBy,alias:e.splitByAlias})}}})],n.prototype,"splitByAttributes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_BinParametersAttributes_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:{target:{stackBy:{type:String},stackByField:{type:String},stackByAlias:{type:String},jsonStyle:{type:String}},writer:(t,e)=>{null!=t.field&&(e.stackByField=t.field),null!=t.expression&&(e.stackBy=t.expression),null!=t.alias&&(e.stackByAlias=t.alias),null!=t.responseType&&(e.jsonStyle=t.responseType)},overridePolicy(){return{enabled:null!=this.stackByAttributes?.field||null!=this.stackByAttributes?.expression}}},read:{source:["stackBy","stackByField","stackByAlias","jsonStyle"],reader:(t,e)=>new _BinParametersAttributes_js__WEBPACK_IMPORTED_MODULE_10__["default"]({field:e.stackByField,expression:e.stackBy,alias:e.stackByAlias,responseType:e.jsonStyle})}}})],n.prototype,"stackByAttributes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)(a)],n.prototype,"transformation",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.rest.support.BinParametersBase")],n);const y=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/BinsQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/BinsQuery.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ R; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _layers_graphics_data_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/graphics/data/queryUtils.js */ "./node_modules/@arcgis/core/layers/graphics/data/queryUtils.js");
/* harmony import */ var _AutoIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AutoIntervalBinParameters.js */ "./node_modules/@arcgis/core/rest/support/AutoIntervalBinParameters.js");
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BinParametersBase.js */ "./node_modules/@arcgis/core/rest/support/BinParametersBase.js");
/* harmony import */ var _DateBinParameters_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DateBinParameters.js */ "./node_modules/@arcgis/core/rest/support/DateBinParameters.js");
/* harmony import */ var _FixedBoundariesBinParameters_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FixedBoundariesBinParameters.js */ "./node_modules/@arcgis/core/rest/support/FixedBoundariesBinParameters.js");
/* harmony import */ var _FixedIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./FixedIntervalBinParameters.js */ "./node_modules/@arcgis/core/rest/support/FixedIntervalBinParameters.js");
/* harmony import */ var _QuantizationParameters_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./QuantizationParameters.js */ "./node_modules/@arcgis/core/rest/support/QuantizationParameters.js");
/* harmony import */ var _spatialRelationships_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./spatialRelationships.js */ "./node_modules/@arcgis/core/rest/support/spatialRelationships.js");
/* harmony import */ var _StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./StatisticDefinition.js */ "./node_modules/@arcgis/core/rest/support/StatisticDefinition.js");
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../time/timeZoneUtils.js */ "./node_modules/@arcgis/core/time/timeZoneUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const b=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__.JSONMap({asc:"ascending",desc:"descending"}),B={base:_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_15__["default"],key:"type",typeMap:{"auto-interval":_AutoIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_14__["default"],date:_DateBinParameters_js__WEBPACK_IMPORTED_MODULE_16__["default"],"fixed-boundaries":_FixedBoundariesBinParameters_js__WEBPACK_IMPORTED_MODULE_17__["default"],"fixed-interval":_FixedIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_18__["default"]}};let P=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.JSONSupport)){constructor(e){super(e),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(e){this._set("outTimeZone",e),e&&!(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_22__.isTimeZoneValid)(e)&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger(this).warn("#outTimeZone",`the parsed value '${e}' may not be a valid IANA time zone`)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({types:B,json:{name:"bin",write:!0}})],P.prototype,"binParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_10__.enumeration)(b)],P.prototype,"binOrder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:!0}})],P.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],P.prototype,"datumTransformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_23__["default"],json:{name:"defaultSR",write:!0}})],P.prototype,"defaultSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],P.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__.geometryTypes,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__.fromJSON,write:!0}})],P.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{write:!0}})],P.prototype,"lowerBoundaryAlias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_23__["default"],json:{name:"outSR",write:!0}})],P.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:[_StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_21__["default"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],P.prototype,"outStatistics",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({value:null,json:{name:"outTimeReference",read:{reader:e=>e.ianaTimeZone},write:{writer:(e,t,o)=>{e&&(t[o]={ianaTimeZone:e})}}}})],P.prototype,"outTimeZone",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_QuantizationParameters_js__WEBPACK_IMPORTED_MODULE_19__["default"],json:{write:!0}})],P.prototype,"quantizationParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:!0}})],P.prototype,"returnDistinctValues",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_10__.enumeration)(_spatialRelationships_js__WEBPACK_IMPORTED_MODULE_20__.spatialRelKebabDict,{name:"spatialRel"})],P.prototype,"spatialRelationship",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{write:!0}})],P.prototype,"upperBoundaryAlias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{read:_layers_graphics_data_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__.unitsKebabDict.read,write:{writer:_layers_graphics_data_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__.unitsKebabDict.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance&&this.distance>0}}}}})],P.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{write:!0}})],P.prototype,"where",void 0),P=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.rest.support.BinsQuery")],P);const R=P;P.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.ensureType)(P);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/DateBinParameters.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DateBinParameters.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BinParametersBase.js */ "./node_modules/@arcgis/core/rest/support/BinParametersBase.js");
/* harmony import */ var _DateBinTimeInterval_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DateBinTimeInterval.js */ "./node_modules/@arcgis/core/rest/support/DateBinTimeInterval.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(e,r,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__.setDeepValue)(o,"string"==typeof e?e:e?.getTime(),r)}function m(e,t){const r=e.parameters[t];return r?"string"==typeof r?r:new Date(r):null}let c=class extends _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(e){super(e),this.end=null,this.interval=null,this.offset=null,this.start=null,this.type="date"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({cast:e=>e?"string"==typeof e?e:new Date(e):null,json:{name:"parameters.end",read:{reader:(e,t)=>m(t,"end")},write:{writer:i}}})],c.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_DateBinTimeInterval_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{name:"parameters",write:!0}})],c.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_DateBinTimeInterval_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{name:"parameters.offset",write:!0}})],c.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({cast:e=>e?"string"==typeof e?e:new Date(e):null,json:{name:"parameters.start",read:{reader:(e,t)=>m(t,"start")},write:{writer:i}}})],c.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({dateBin:"date"},{readOnly:!0})],c.prototype,"type",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.DateBinParameters")],c);const d=c;c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.ensureType)(c);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/DateBinTimeInterval.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/DateBinTimeInterval.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.strict)()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(r){super(r),this.value=null,this.units=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{name:"number",write:!0}})],n.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)(c,{name:"unit"})],n.prototype,"units",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.rest.support.DateBinTimeInterval")],n);const u=n;n.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureType)(n);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/FixedBoundariesBinParameters.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/FixedBoundariesBinParameters.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BinParametersBase.js */ "./node_modules/@arcgis/core/rest/support/BinParametersBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p(r){return r[0]instanceof Date}function n(r,e,s){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__.setDeepValue)(s,r&&p(r)?r.map((r=>r.getTime())):r,e)}let c=class extends _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(r){super(r),this.boundaries=null,this.type="fixed-boundaries"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{name:"parameters.boundaries",write:{writer:n}}})],c.prototype,"boundaries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],c.prototype,"type",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.FixedBoundariesBinParameters")],c);const m=c;c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.ensureType)(c);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/FixedIntervalBinParameters.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/FixedIntervalBinParameters.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BinParametersBase.js */ "./node_modules/@arcgis/core/rest/support/BinParametersBase.js");
/* harmony import */ var _NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NormalizationBinParametersMixin.js */ "./node_modules/@arcgis/core/rest/support/NormalizationBinParametersMixin.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(r,t,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__.setDeepValue)(o,r instanceof Date?r.getTime():r,t)}let m=class extends((0,_NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__.NormalizationBinParametersMixin)(_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(r){super(r),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{name:"parameters.end",write:{writer:n}}})],m.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{name:"parameters.interval",write:!0}})],m.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{name:"parameters.start",write:{writer:n}}})],m.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],m.prototype,"type",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.FixedIntervalBinParameters")],m);const c=m;m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.ensureType)(m);


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/NormalizationBinParametersMixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/NormalizationBinParametersMixin.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalizationBinParametersMixin: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.strict)()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),l="percent-of-total",s="field",m=t=>{let m=class extends t{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let o=this._get("normalizationType");const t=!!this.normalizationField,a=null!=this.normalizationTotal;return t||a?(o=t&&s||a&&l||null,t&&a&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):o!==s&&o!==l||(o=null),o}set normalizationType(o){this._set("normalizationType",o)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{name:"parameters.normalizationField",write:!0}})],m.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],m.prototype,"normalizationMaxValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],m.prototype,"normalizationMinValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],m.prototype,"normalizationTotal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)(n,{name:"parameters.normalizationType"})],m.prototype,"normalizationType",null),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.rest.support.NormalizationBinParametersMixin")],m),m};


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


/***/ })

}]);
//# sourceMappingURL=rest-support-BinsQuery.js.map