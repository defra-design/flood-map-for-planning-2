"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["graphics-sources-connections-createConnection"],{

/***/ "./node_modules/@arcgis/core/core/pbf.js":
/*!***********************************************!*\
  !*** ./node_modules/@arcgis/core/core/pbf.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectPool.js */ "./node_modules/@arcgis/core/core/ObjectPool.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(e||(e={}));const i=4294967296,s=new TextDecoder("utf-8"),r=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ff")?12:32;class n{constructor(t,i,s=0,r=(t?t.byteLength:0)){this._tag=0,this._dataType=e.unknown,this._init(t,i,s,r)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}asUnsafe(){return this}clone(){return new n(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;if(t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return t;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),s}getSFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const r=this.getMessage(),n=t(r,e,i,s);return r.release(),n}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=n.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){n.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case e.varint:this._decodeVarint();break;case e.fixed64:this._skip(8);break;case e.delimited:this._skip(this._getLength());break;case e.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,!(128&s))break;if(s=t[e++],i|=(127&s)<<7,!(128&s))break;if(s=t[e++],i|=(127&s)<<14,!(128&s))break;if(s=t[e++],i|=(127&s)<<21,!(128&s))break;if(s=t[e++],i+=268435456*(127&s),!(128&s))break;if(s=t[e++],i+=34359738368*(127&s),!(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),!(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),!(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),!(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),!(128&s))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;e!==this._end&&(s=t[e],128&s);)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const r=1&t[this._pos];if(s=t[this._pos++],i|=127&s,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<7,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<14,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<21,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=268435456*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=34359738368*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=4398046511104*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==e.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>r){const r=t.subarray(e,i);return s.decode(r)}let n="",h="";for(let s=e;s<i;++s){const e=t[s];128&e?h+="%"+e.toString(16):(n+=decodeURIComponent(h)+String.fromCharCode(e),h="")}return h.length&&(n+=decodeURIComponent(h)),n}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}}n.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__["default"](n,void 0,(t=>{t._data=null,t._dataView=null}));


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

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizedFeature: function() { return /* binding */ e; },
/* harmony export */   OptimizedFeatureWithGeometry: function() { return /* binding */ o; },
/* harmony export */   hasGeometry: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(t=null,e={},s,o){this.geometry=t,this.attributes=e,this.centroid=s,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(s,o){const h=s.geometry?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(s.geometry):null,i=s.centroid?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(s.centroid):null,r=s.attributes[o];return new e(h,s.attributes,i,r)}weakClone(){const t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}clone(){const t=this.geometry?.clone(),s=new e(t,{...this.attributes},this.centroid?.clone(),this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}}function s(t){return!!t.geometry?.coords?.length}class o extends e{}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=2;class s{constructor(t=[],s=[]){this.lengths=t??[],this.coords=s??[]}static fromJSON(t){return new s(t.lengths,t.coords)}static fromRect(t){const[e,r,h,o]=t,n=h-e,l=o-r;return new s([5],[e,r,n,0,0,l,-n,0,0,-l])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,s)=>t+s))}forEachVertex(s){let e=0;this.lengths.length||s(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const h=this.lengths[r];for(let r=0;r<h;r++){s(this.coords[t*(r+e)],this.coords[t*(r+e)+1])}e+=h}}deltaDecode(){const t=this.clone(),{coords:s,lengths:e}=t;let r=0;for(const h of e){for(let t=1;t<h;t++)s[2*(r+t)]+=s[2*(r+t)-2],s[2*(r+t)+1]+=s[2*(r+t)-1];r+=h}return t}clone(e){if(0===this.lengths.length)return new s([],[this.coords[0],this.coords[1]]);const r=(0===this.lengths.length?1:this.lengths.reduce(((t,s)=>t+s)))*t,h=this.coords.slice(0,r);return e?(e.set(h),new s(this.lengths,e)):new s(Array.from(this.lengths),Array.from(h))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WebSocketConnection.js */ "./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js");
/* harmony import */ var _rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../rest/query/operations/query.js */ "./node_modules/@arcgis/core/rest/query/operations/query.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const h=1e4,d={maxQueryDepth:5,maxRecordCountFactor:3};let g=class extends _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_10__.WebSocketConnection{constructor(e){super({...d,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let o;try{o=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(o.geometry)}catch(t){return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Failed to parse message",t))}this.onFeature(o)}else this.onMessage(e)}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},i=(0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.path,{query:r,responseType:"json"}),o=(await i).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:i,token:o}=r,n=this._inferWebSocketBaseUrl(i);return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryParameters)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(null==s||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createResolver)(),u=()=>{a||(this.destroyed||this._websocket!==s||_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Server timed out when setting filter")),c.reject())},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(s),a=!0,c.resolve())};return s.onmessage=l,s.send(n),setTimeout(u,h),c.promise}_serializeFilter(e,t){const o={};if(null==e&&null==t)return o;if(e?.geometry)try{const t=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__.fromJSON)(e.geometry);if("extent"!==t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](`Expected extent but found type ${t.type}`);o.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(s){_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(o.where=e.where),null!=t&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t],s=this._relatedFeatures.get(o);if(!s)return _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=s;for(const r in n)e.attributes[r]=n[r];return a&&(e.geometry=a),e.geometry||e.centroid||_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),i=this._queryArchive(t);await r;const o=await i;if(!o)return;for(const s of o.features)this.onFeature(this._enrich(s))}catch(e){_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await __webpack_require__.e(/*! import() | FeatureLayer */ "FeatureLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../../../FeatureLayer.js */ "./node_modules/@arcgis/core/layers/FeatureLayer.js"))).default)({url:e}),{capabilities:r}=await t.load(),i=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,s=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,l=i?a*n:a,h=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_12__["default"];if(h.outFields=this._config.outFields??["*"],h.where=this._config.filter?.where??"1=1",h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(this._config.spatialReference),s&&(h.returnCentroid=!0),i&&(h.maxRecordCountFactor=n),o)return h.num=l,t.destroy(),this._queryPages(e,h);const d=await (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_11__.executeQuery)(e,h,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],i=0){t.start=null!=t.num?i*t.num:null;const{data:o}=await (0,_rest_query_operations_query_js__WEBPACK_IMPORTED_MODULE_11__.executeQuery)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&i<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,i+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,i=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[i];t.set(e,o)}this._relatedFeatures=t}};g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.graphics.sources.connections.GeoEventConnection")],g);const y=g;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocketConnection: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/zscale.js */ "./node_modules/@arcgis/core/geometry/support/zscale.js");
/* harmony import */ var _support_StreamConnection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../support/StreamConnection.js */ "./node_modules/@arcgis/core/layers/support/StreamConnection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var h;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(h||(h={}));let d=class extends _support_StreamConnection_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_9__.getGeometryZScaler)(t,s,o),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case h.CONNECTING:case h.OPEN:return"connected";case h.CLOSING:case h.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,r=1e3,i=0){try{if(this.destroyed)return;const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.addQueryParameters)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(c){const n=r/1e3;return this._config.maxReconnectionAttempts&&i>=this._config.maxReconnectionAttempts?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,c)),await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.after)(r),this._tryCreateWebSocket(e,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),i+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(s){return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(e){return new Promise(((t,o)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,o(e)}}))}async _handshake(e=1e4){const s=this._websocket;if(null==s)return;const n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)(),i=s.onmessage,{filter:c,outFields:a,spatialReference:l}=this._config;return n.timeout(e),s.onmessage=e=>{let r=null;try{r=JSON.parse(e.data)}catch(h){}r&&"object"==typeof r||(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),r.spatialReference?.wkid!==l?.wkid&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),n.reject(),this.destroy()),"json"!==r.format&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),c&&r.filter!==c&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection","Tried to set filter, but server doesn't support it")),a&&r.outFields!==a&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("websocket-connection","Tried to set outFields, but server doesn't support it")),s.onmessage=i;for(const t of this._outstandingMessages)s.send(JSON.stringify(t));this._outstandingMessages=[],n.resolve()},s.send(JSON.stringify({filter:c,outFields:a,format:"json",spatialReference:{wkid:l.wkid}})),n.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],d.prototype,"connectionStatus",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],d.prototype,"errorString",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.graphics.sources.connections.WebSocketConnection")],d);


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnection: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _GeoEventConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeoEventConnection.js */ "./node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js");
/* harmony import */ var _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebSocketConnection.js */ "./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js");
/* harmony import */ var _support_ClientSideConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/ClientSideConnection.js */ "./node_modules/@arcgis/core/layers/support/ClientSideConnection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(e,t){if(null==e&&null==t)return null;const n={};return null!=t&&(n.geometry=t),null!=e&&(n.where=e),n}function r(r,i,s,c,l,u,a,m,p){const f={source:r,sourceSpatialReference:i,spatialReference:s,geometryType:c,filter:o(l,u),maxReconnectionAttempts:a,maxReconnectionInterval:m,customParameters:p};if(!r)return new _support_ClientSideConnection_js__WEBPACK_IMPORTED_MODULE_2__.ClientSideConnection(f);return r.path.startsWith("wss://")||r.path.startsWith("ws://")?new _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_1__.WebSocketConnection(f):new _GeoEventConnection_js__WEBPACK_IMPORTED_MODULE_0__["default"](f)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/ClientSideConnection.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ClientSideConnection.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientSideConnection: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/zscale.js */ "./node_modules/@arcgis/core/geometry/support/zscale.js");
/* harmony import */ var _StreamConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StreamConnection.js */ "./node_modules/@arcgis/core/layers/support/StreamConnection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends _StreamConnection_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:r,spatialReference:t,sourceSpatialReference:s}=e;this._featureZScaler=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_6__.getGeometryZScaler)(r,s,t)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const r of e.features)null!=this._featureZScaler&&this._featureZScaler(r.geometry),this.onFeature(r)}this.onMessage(e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],a.prototype,"connectionStatus",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],a.prototype,"errorString",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.ClientSideConnection")],a);


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/StreamConnection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/StreamConnection.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"].EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r)}onMessage(r){this.emit("message-received",r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],c.prototype,"connectionError",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.StreamConnection")],c);const n=c;


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

/***/ "./node_modules/@arcgis/core/rest/operations/urlUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/operations/urlUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapParameters: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseFeatureQuery: function() { return /* binding */ S; },
/* harmony export */   parseField: function() { return /* binding */ b; },
/* harmony export */   parseFieldType: function() { return /* binding */ o; },
/* harmony export */   parseTransform: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/pbf.js */ "./node_modules/@arcgis/core/core/pbf.js");
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pbfOptimizedFeatureSet.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],n=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function o(e){return e>=a.length?null:a[e]}function c(e){return e>=n.length?null:n[e]}function l(e){return e>=i.length?null:i[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,s){const r=3,a=e.asUnsafe(),n=t.createPointGeometry(s);for(;a.next();)switch(a.tag()){case r:{const e=a.getUInt32(),s=a.pos()+e;let r=0;for(;a.pos()<s;)t.addCoordinatePoint(n,a.getSInt64(),r++);break}default:a.skip()}return n}function u(e,t,s){const r=2,a=3,n=e.asUnsafe(),i=t.createGeometry(s),o=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case r:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(;n.pos()<s;)t.addLength(i,n.getUInt32(),r++);break}case a:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(t.allocateCoordinates(i);n.pos()<s;)t.addCoordinate(i,n.getSInt64(),r),r++,r===o&&(r=0);break}default:n.skip()}return i}function f(e){const t=1,a=2,n=3,i=e.asUnsafe(),o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"];let c="esriGeometryPoint";for(;i.next();)switch(i.tag()){case a:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.lengths.push(i.getUInt32());break}case n:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.coords.push(i.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__.optimizedGeometryTypes[i.getEnum()];break;default:i.skip()}return{queryGeometry:o,queryGeometryType:c}}function y(e){const t=1,s=2,r=3,a=4,n=5,i=6,o=7,c=8,l=9,g=e.asUnsafe();for(;g.next();)switch(g.tag()){case t:return g.getString();case s:return g.getFloat();case r:return g.getDouble();case a:return g.getSInt32();case n:return g.getUInt32();case i:return g.getInt64();case o:return g.getUInt64();case c:return g.getSInt64();case l:return g.getBool();default:return g.skip(),null}return null}function b(e){const t=1,s=2,r=3,a=4,n=5,i=6,l=e.asUnsafe(),g={type:o(0)};for(;l.next();)switch(l.tag()){case t:g.name=l.getString();break;case s:g.type=o(l.getEnum());break;case r:g.alias=l.getString();break;case a:g.sqlType=c(l.getEnum());break;case n:l.skip();break;case i:g.defaultValue=l.getString();break;default:l.skip()}return g}function k(e){const t=1,s=2,r={},a=e.asUnsafe();for(;a.next();)switch(a.tag()){case t:r.name=a.getString();break;case s:r.isSystemMaintained=a.getBool();break;default:a.skip()}return r}function d(e,t,s,r){const a=1,n=2,i=4,o=t.createFeature(s);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=r[c++].name;o.attributes[t]=e.processMessage(y);break}case n:o.geometry=e.processMessageWithArgs(u,t,s);break;case i:o.centroid=e.processMessageWithArgs(p,t,s);break;default:e.skip()}return o}function T(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function m(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function h(e){const t=1,s=2,r=3,a={originPosition:l(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.originPosition=l(n.getEnum());break;case s:a.scale=n.processMessage(T);break;case r:a.translate=n.processMessage(m);break;default:n.skip()}return a}function F(e){const t=1,s=2,r=3,a={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.shapeAreaFieldName=n.getString();break;case s:a.shapeLengthFieldName=n.getString();break;case r:a.units=n.getString();break;default:n.skip()}return a}function q(e,t){const s=1,r=2,a=3,n=4,i=5,o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:o.wkid=e.getUInt32();break;case i:o.wkt=e.getString();break;case r:o.latestWkid=e.getUInt32();break;case a:o.vcsWkid=e.getUInt32();break;case n:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function I(e,t){const s=1,r=2,a=3,n=4,i=5,o=7,c=8,l=9,p=10,u=11,f=12,y=13,T=15,m=t.createFeatureResult(),I=e.asUnsafe();m.geometryType=g(t,0);let U=!1;for(;I.next();)switch(I.tag()){case s:m.objectIdFieldName=I.getString();break;case a:m.globalIdFieldName=I.getString();break;case n:m.geohashFieldName=I.getString();break;case i:m.geometryProperties=I.processMessage(F);break;case o:m.geometryType=g(t,I.getEnum());break;case c:m.spatialReference=I.processMessageWithArgs(q,t);break;case p:m.hasZ=I.getBool();break;case u:m.hasM=I.getBool();break;case f:m.transform=I.processMessage(h);break;case l:m.exceededTransferLimit=I.getBool();break;case y:t.addField(m,I.processMessage(b));break;case T:U||(t.prepareFeatures(m),U=!0),t.addFeature(m,I.processMessageWithArgs(d,t,m,m.fields));break;case r:m.uniqueIdField=I.processMessage(k);break;default:I.skip()}return t.finishFeatureResult(m),m}function U(e,t){const s=1,r=4,a={};let n=null;for(;e.next();)switch(e.tag()){case r:n=e.processMessageWithArgs(f);break;case s:a.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=n&&a.featureResult&&t.addQueryGeometry(a,n),a}function S(s,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(s),new DataView(s)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(U,r);else a.skip();return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizedFeatureSetParserContext: function() { return /* binding */ a; },
/* harmony export */   optimizedGeometryTypes: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedFeature.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js");
/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedFeatureSet.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js");
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this._options=e,this.geometryTypes=n,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(o){if(!o?.features||!o.hasZ||!this._options.sourceSpatialReference||!o.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.equals)(o.spatialReference,this._options.sourceSpatialReference)||o.spatialReference.vcsWkid)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(this._options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(o.spatialReference);if(1!==i)for(const e of o.features){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.OptimizedFeature}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"]}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsePBFFeatureQuery: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pbfFeatureServiceParser.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__.parseFeatureQuery)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/query.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/query.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeGeometry: function() { return /* binding */ m; },
/* harmony export */   executeQuery: function() { return /* binding */ c; },
/* harmony export */   executeQueryForCount: function() { return /* binding */ S; },
/* harmony export */   executeQueryForExtent: function() { return /* binding */ x; },
/* harmony export */   executeQueryForIds: function() { return /* binding */ p; },
/* harmony export */   executeQueryPBF: function() { return /* binding */ f; },
/* harmony export */   executeQueryPBFBuffer: function() { return /* binding */ d; },
/* harmony export */   queryToQueryStringParameters: function() { return /* binding */ y; },
/* harmony export */   runQuery: function() { return /* binding */ E; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../operations/urlUtils.js */ "./node_modules/@arcgis/core/rest/operations/urlUtils.js");
/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pbfQueryUtils.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js");
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queryZScale.js */ "./node_modules/@arcgis/core/rest/query/operations/queryZScale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s="Layer does not support extent calculation.";function m(t,e){if(e&&"extent"===t.type)return`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`;if(e&&"point"===t.type)return`${t.x},${t.y}`;const n=t.toJSON();return delete n.spatialReference,JSON.stringify(n)}function y(t,e){const n=t.geometry,i=t.toJSON();delete i.compactGeometryEnabled,delete i.defaultSpatialReferenceEnabled;const o=i;let u,l,s;if(null!=n&&(l=n.spatialReference,s=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.srToRESTValue)(l),o.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n),o.geometry=m(n,t.compactGeometryEnabled),o.inSR=s),i.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=i.groupByFieldsForStatistics.join(",")),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),!i.outFields||!i.returnDistinctValues&&(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?delete o.outFields:i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","),i.outSR?(o.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.srToRESTValue)(i.outSR),u=t.outSpatialReference):n&&(i.returnGeometry||i.returnCentroid)&&(o.outSR=o.inSR,u=l),i.returnGeometry&&delete i.returnGeometry,i.outStatistics&&(o.outStatistics=JSON.stringify(i.outStatistics)),i.fullText&&(o.fullText=JSON.stringify(i.fullText)),i.pixelSize&&(o.pixelSize=JSON.stringify(i.pixelSize)),i.quantizationParameters&&(t.defaultSpatialReferenceEnabled&&null!=l&&null!=t.quantizationParameters?.extent&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete i.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(i.quantizationParameters)),i.parameterValues&&(o.parameterValues=JSON.stringify(i.parameterValues)),i.rangeValues&&(o.rangeValues=JSON.stringify(i.rangeValues)),i.dynamicDataSource&&(o.layer=JSON.stringify({source:i.dynamicDataSource}),delete i.dynamicDataSource),i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete i.timeExtent}return t.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function c(t,e,n,r){const i=null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await E(t,e,"json",r);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_7__.applyFeatureSetZUnitScaling)(e,n,i.data),i}async function f(t,e,n,r){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:n.createFeatureResult()};const i=await d(t,e,r),a=i;return a.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_6__.parsePBFFeatureQuery)(i.data,n),a}function d(t,e,n){return E(t,e,"pbf",n)}function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):E(t,e,"json",n,{returnIdsOnly:!0})}function S(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}async function x(t,e,n){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await E(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}),i=r.data;if(i.hasOwnProperty("extent"))return r;if(i.features)throw new Error(s);if(i.hasOwnProperty("count"))throw new Error(s);return r}async function E(r,a,u,l={},s={}){const m="string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(r):r,c=a.geometry?[a.geometry]:[],f=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCentralMeridian)(c,null,{signal:l.signal}),d=f?.[0];null!=d&&((a=a.clone()).geometry=d);const p=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.mapParameters)({...m.query,f:u,...s,...y(a,s)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.join)(m.path,g(a,s)?"query3d":"query"),{...l,responseType:"pbf"===u?"array-buffer":"json",query:{...p,...l.query}})}function g(t,e){return null!=t.formatOf3DObjects&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/queryZScale.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/queryZScale.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFeatureSetZUnitScaling: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/zscale.js */ "./node_modules/@arcgis/core/geometry/support/zscale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryZScaler)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


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
//# sourceMappingURL=graphics-sources-connections-createConnection.js.map