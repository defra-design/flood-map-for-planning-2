"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["MediaLayer"],{

/***/ "./node_modules/@arcgis/core/chunks/quickselect.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quickselect.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r,f,n,h){o(t,r,f||0,n||t.length-1,h||a)}function o(t,a,f,n,h){for(;n>f;){if(n-f>600){var M=n-f+1,i=a-f+1,u=Math.log(M),c=.5*Math.exp(2*u/3),e=.5*Math.sqrt(u*c*(M-c)/M)*(i-M/2<0?-1:1);o(t,a,Math.max(f,Math.floor(a-i*c/M+e)),Math.min(n,Math.floor(a+(M-i)*c/M+e)),h)}var l=t[a],v=f,x=n;for(r(t,f,a),h(t[n],l)>0&&r(t,f,n);v<x;){for(r(t,v,x),v++,x--;h(t[v],l)<0;)v++;for(;h(t[x],l)>0;)x--}0===h(t[f],l)?r(t,f,x):r(t,++x,n),x<=a&&(f=x+1),a<=x&&(n=x-1)}}function r(t,o,r){var a=t[o];t[o]=t[r],t[r]=a}function a(t,o){return t<o?-1:t>o?1:0}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiOriginJSONMixin: function() { return /* binding */ S; },
/* harmony export */   MultiOriginJSONSupport: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyMultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js");
/* harmony import */ var _accessorSupport_get_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/get.js */ "./node_modules/@arcgis/core/core/accessorSupport/get.js");
/* harmony import */ var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorSupport/PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/* harmony import */ var _accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessorSupport/write.js */ "./node_modules/@arcgis/core/core/accessorSupport/write.js");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return O(this).delete(r,(0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.nameToId)(t))}write(r,t){return (0,_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_6__.write)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__.getProperties)(this).setAtOrigin(r,t,(0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.nameToId)(s))}removeOrigin(r){const t=O(this),s=(0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.nameToId)(r),e=t.keys(s);for(const o of e)t.originOf(o)===s&&t.set(o,t.get(o,s),_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.OriginId.USER)}updateOrigin(r,t){const s=O(this),i=(0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.nameToId)(t),c=(0,_accessorSupport_get_js__WEBPACK_IMPORTED_MODULE_3__.get)(this,r);for(let e=i+1;e<_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.originIdNum;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function O(r){return (0,_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_5__.getProperties)(r).store}const S=t=>{let e=class extends(l((0,_ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.ReadOnlyMultiOriginJSONMixin)(t))){constructor(...r){super(...r)}};return e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.core.MultiOriginJSONSupport")],e),e};let m=class extends(S(_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){};m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.core.MultiOriginJSONSupport")],m);


/***/ }),

/***/ "./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadOnlyMultiOriginJSONMixin: function() { return /* binding */ u; },
/* harmony export */   ReadOnlyMultiOriginJSONSupport: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _accessorSupport_defaultsStoreUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessorSupport/defaultsStoreUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js");
/* harmony import */ var _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/MultiOriginStore.js */ "./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js");
/* harmony import */ var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorSupport/PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorSupport/read.js */ "./node_modules/@arcgis/core/core/accessorSupport/read.js");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_6__.getProperties)(this),e=t.store,i=new _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_3__["default"];t.store=i,(0,_accessorSupport_defaultsStoreUtils_js__WEBPACK_IMPORTED_MODULE_2__.setupConstructedDefaults)(t,e,i)}read(r,t){(0,_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_5__.read)(this,r,t)}getAtOrigin(r,t){const s=a(this),o=(0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.nameToId)(t);if("string"==typeof r)return s.get(r,o);const i={};return r.forEach((r=>{i[r]=s.get(r,o)})),i}originOf(r){return (0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.idToName)(this.originIdOf(r))}originIdOf(r){return a(this).originOf(r)}revert(r,t){const s=a(this),o=(0,_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__.nameToId)(t),i=(0,_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_6__.getProperties)(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{i.invalidate(r),s.revert(r,o),i.commit(r)}))}};return u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.core.ReadOnlyMultiOriginJSONSupport")],u),u};function a(r){return (0,_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_6__.getProperties)(r).store}let f=class extends(u(_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])){};f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);


/***/ }),

/***/ "./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.originIdNum),this._values=new Map,this.multipleOriginsSupported=!0}clone(i){const o=new r,n=this._originStores[_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.DEFAULTS];n&&n.forEach(((s,r)=>{o.set(r,(0,_lang_js__WEBPACK_IMPORTED_MODULE_0__.clone)(s),_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.DEFAULTS)}));for(let r=_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.SERVICE;r<_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.originIdNum;r++){const s=this._originStores[r];s&&s.forEach(((s,e)=>{i&&i.has(e)||o.set(e,(0,_lang_js__WEBPACK_IMPORTED_MODULE_0__.clone)(s),r)}))}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,s,r=_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,s),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const e=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,r),e!==s}return!1}delete(t,s=_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.USER){const r=this._originStores[s];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e?.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_1__.OriginId.DEFAULTS}forEach(t){this._values.forEach(t)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   excludeTables: function() { return /* binding */ a; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=(a=>a)(["operational-layers","basemap","ground"]);


/***/ }),

/***/ "./node_modules/@arcgis/core/core/imageUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/imageUtils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyImageData: function() { return /* binding */ s; },
/* harmony export */   getImageData: function() { return /* binding */ p; },
/* harmony export */   wrapImageData: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_base64Utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/base64Utils.js */ "./node_modules/@arcgis/core/support/base64Utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=null,o=!0;function s(t,e,r){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e)}catch(a){o=!1}return m(t,e,r)}function c(t,e,r,a){if(!e||!r)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e,r)}catch(i){o=!1}const n=m(e,r,a);return n.data.set(t,0),n}function f(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function m(t,e,r){return r||(r=f()),r.getContext("2d").createImageData(t,e)}async function u(a,n){const i=window.URL.createObjectURL(a);try{const{data:e}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i,{...n,responseType:"image"});return e}catch(o){if(!(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(o))throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("invalid-image",`Could not fetch requested image at ${i}`);throw o}finally{window.URL.revokeObjectURL(i)}}async function p(t,e){const{arrayBuffer:r,mediaType:a}=await d(t,e),n="image/png"===a;if("image/gif"===a){const{isAnimatedGIF:t,parseGif:a}=await __webpack_require__.e(/*! import() | image-gif */ "image-gif").then(__webpack_require__.bind(__webpack_require__, /*! ./image/gif.js */ "./node_modules/@arcgis/core/core/image/gif.js"));if(t(r))return a(r,e)}if(n){const{isAnimatedPNG:t,parseApng:a}=await __webpack_require__.e(/*! import() | image-apng */ "image-apng").then(__webpack_require__.bind(__webpack_require__, /*! ./image/apng.js */ "./node_modules/@arcgis/core/core/image/apng.js"));if(t(r))return a(r,e)}return u(new Blob([r],{type:a}),e)}async function d(e,r){const i=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.dataComponents)(e);if(i?.isBase64)return{arrayBuffer:(0,_support_base64Utils_js__WEBPACK_IMPORTED_MODULE_4__.base64ToArrayBuffer)(i.data),mediaType:i.mediaType};const o=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e,{responseType:"array-buffer",...r});return{arrayBuffer:o.data,mediaType:o.getHeader?.("Content-Type")??""}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDENTITY: function() { return /* binding */ o; },
/* harmony export */   clone: function() { return /* binding */ r; },
/* harmony export */   create: function() { return /* binding */ e; },
/* harmony export */   createView: function() { return /* binding */ n; },
/* harmony export */   fromValues: function() { return /* binding */ t; },
/* harmony export */   m: function() { return /* binding */ u; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function t(e,r,t,n,o,u,c,a,l){return[e,r,t,n,o,u,c,a,l]}function n(e,r){return new Float64Array(e,r,9)}const o=e(),u=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BBox: function() { return /* binding */ E; },
/* harmony export */   PooledRBush: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/quickselect.js */ "./node_modules/@arcgis/core/chunks/quickselect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this._compareMinX=m,this._compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),X.prune(),Y.prune(),B.prune(),w.prune()}all(t){a(this._data,t)}search(t,i){let n=this._data;const e=this._toBBox;if(g(t,n))for(X.clear();n;){for(let h=0,s=n.children.length;h<s;h++){const s=n.children[h],r=n.leaf?e(s):s;g(t,r)&&(n.leaf?i(s):p(t,r)?a(s,i):X.push(s))}n=X.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!g(t,i))return!1;for(X.clear();i;){for(let e=0,h=i.children.length;e<h;e++){const h=i.children[e],s=i.leaf?n(h):h;if(g(t,s)){if(i.leaf||p(t,s))return!0;X.push(h)}}i=X.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new j([]),this}remove(i){if(!i)return this;let n,e=this._data,h=null,s=0,a=!1;const r=this._toBBox(i);for(B.clear(),w.clear();e||B.length>0;){if(e||(e=B.pop(),h=B.data[B.length-1],s=w.pop()??0,a=!0),e.leaf&&(n=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(e.children,i,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),B.push(e),this._condense(B),this;a||e.leaf||!p(e,r)?h?(s++,e=h.children[s],a=!1):e=null:(B.push(e),w.push(s),s=0,h=e,e=e.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,e){const h=n-i+1;let s=this._maxEntries;if(h<=s){const e=new j(t.slice(i,n+1));return o(e,this._toBBox),e}e||(e=Math.ceil(Math.log(h)/Math.log(s)),s=Math.ceil(h/s**(e-1)));const a=new S([]);a.height=e;const r=Math.ceil(h/s),l=r*Math.ceil(Math.sqrt(s));M(t,i,n,l,this._compareMinX);for(let o=i;o<=n;o+=l){const i=Math.min(o+l-1,n);M(t,o,i,r,this._compareMinY);for(let n=o;n<=i;n+=r){const h=Math.min(n+r-1,i);a.children.push(this._build(t,n,h,e-1))}}return o(a,this._toBBox),a}_insert(t,i,n){const e=this._toBBox,h=n?t:e(t);B.clear();const a=s(h,this._data,i,B);for(a.children.push(t),c(a,h);i>=0&&B.data[i].children.length>this._maxEntries;)this._split(B,i),i--;r(h,B,i)}_split(t,i){const n=t.data[i],e=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,e);const s=this._chooseSplitIndex(n,h,e);if(!s)return;const a=n.children.splice(s,n.children.length-s),r=n.leaf?new j(a):new S(a);r.height=n.height,o(n,this._toBBox),o(r,this._toBBox),i?t.data[i-1].children.push(r):this._splitRoot(n,r)}_splitRoot(t,i){this._data=new S([t,i]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,h,s;e=h=1/0;for(let a=i;a<=n-i;a++){const i=l(t,0,a,this._toBBox),r=l(t,a,n,this._toBBox),o=_(i,r),c=d(i)+d(r);o<e?(e=o,s=a,h=c<h?c:h):o===e&&c<h&&(h=c,s=a)}return s}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:m,h=t.leaf?this._compareMinY:u;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,h)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const h=this._toBBox,s=l(t,0,i,h),a=l(t,n-i,n,h);let r=f(s)+f(a);for(let o=i;o<n-i;o++){const i=t.children[o];c(s,t.leaf?h(i):i),r+=f(s)}for(let o=n-i-1;o>=i;o--){const i=t.children[o];c(a,t.leaf?h(i):i),r+=f(a)}return r}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const h=i.data[n-1],s=h.children;s.splice((0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.indexOf)(s,e,s.length,h.indexHint),1)}else this.clear();else o(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function s(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,h=1/0;for(let s=0,a=i.children.length;s<a;s++){const a=i.children[s],r=d(a),o=x(t,a)-r;o<h?(h=o,e=r<e?r:e,n=a):o===h&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}function a(t,i){let n=t;for(Y.clear();n;){if(!0===n.leaf)for(const t of n.children)i(t);else Y.pushArray(n.children);n=Y.pop()??null}}function r(t,i,n){for(let e=n;e>=0;e--)c(i.data[e],t)}function o(t,i){l(t,0,t.children.length,i,t)}function l(t,i,n,e,h){h||(h=new j([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=i;a<n;a++)s=t.children[a],c(h,t.leaf?e(s):s);return h}function c(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function m(t,i){return t.minX-i.minX}function u(t,i){return t.minY-i.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function _(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),h=Math.min(t.maxX,i.maxX),s=Math.min(t.maxY,i.maxY);return Math.max(0,h-n)*Math.max(0,s-e)}function p(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function g(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function M(t,i,n,h,s){const a=[i,n];for(;a.length;){const i=a.pop(),n=a.pop();if(i-n<=h)continue;const r=n+Math.ceil((i-n)/h/2)*h;(0,_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__.q)(t,r,n,i,s),a.push(n,r,r,i)}}const X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],w=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({deallocator:void 0});class E{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends E{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.PositionHint}}class j extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends b{constructor(t){super(),this.children=t,this.leaf=!1}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/perspectiveUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/perspectiveUtils.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectiveTransform: function() { return /* binding */ j; },
/* harmony export */   transformProjective: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const f=(0,_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),n=(0,_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),l=(0,_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),u=(0,_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function p(r,s,i){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(f,s[0],s[1],1),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.q)(f,f,(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.transpose)(n,i)),0===f[2]?(0,_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_2__.set)(r,f[0],f[1]):(0,_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_2__.set)(r,f[0]/f[2],f[1]/f[2])}function j(t,i,m){return x(l,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),x(u,m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7]),(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(t,(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.adjoint)(l,l),u),0!==t[8]&&(t[0]/=t[8],t[1]/=t[8],t[2]/=t[8],t[3]/=t[8],t[4]/=t[8],t[5]/=t[8],t[6]/=t[8],t[7]/=t[8],t[8]/=t[8]),t}function x(m,o,c,l,u,p,j,x,b){(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.set)(m,o,l,p,c,u,j,1,1,1),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(f,x,b,1),(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.adjoint)(n,m);const[g,h,v]=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.q)(f,f,(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.transpose)(n,n));return (0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.set)(n,g,0,0,0,h,0,0,0,v),(0,_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(m,n,m)}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/uuid.js":
/*!************************************************!*\
  !*** ./node_modules/@arcgis/core/core/uuid.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CutVertical: function() { return /* binding */ T; },
/* harmony export */   normalizeCentralMeridianForDisplay: function() { return /* binding */ a; },
/* harmony export */   normalizeCentralMeridianSync: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boundsUtils.js */ "./node_modules/@arcgis/core/geometry/support/boundsUtils.js");
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coordsUtils.js */ "./node_modules/@arcgis/core/geometry/support/coordsUtils.js");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalizeUtilsCommon.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p(t){return f(t,!0)}function a(t){return f(t,!1)}function f(i,n){if(null==i)return null;const p=i.spatialReference,a=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(p),f=(0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_0__.isSerializable)(i)?i.toJSON():i;if(!a)return f;const I=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.isWebMercator)(p)?102100:4326,g=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[I].maxX,v=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[I].minX;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPoint)(f))return y(f,g,v);if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isMultipoint)(f))return f.points=f.points.map((t=>y(t,g,v))),f;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtent)(f))return d(f,a);if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolygon)(f)||(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolyline)(f)){const t=(0,_boundsUtils_js__WEBPACK_IMPORTED_MODULE_2__.getBoundsXY)(S,f),i={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(i.xmin,v)*(2*g),h=0===e?f:(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(f,e);return i.xmin+=e,i.xmax+=e,i.xmax>g?C(h,g,n):i.xmin<v?C(h,v,n):h}return f}function d(t,i){if(!i)return t;const s=I(t,i).map((t=>t.extent));return s.length<2?s[0]||t:s.length>2?(t.xmin=i.valid[0],t.xmax=i.valid[1],t):{rings:s.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function y(t,i,s){if(Array.isArray(t)){const n=t[0];if(n>i){const s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,i);t[0]=n+s*(-2*i)}else if(n<s){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,s);t[0]=n+i*(-2*s)}}else{const n=t.x;if(n>i){const s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,i);t.x+=s*(-2*i)}else if(n<s){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,s);t.x+=i*(-2*s)}}return t}function I(t,i){const s=[],{ymin:n,ymax:e,xmin:h,xmax:o}=t,u=t.xmax-t.xmin,[r,m]=i.valid,{x,frameId:_}=g(t.xmin,i),{x:l,frameId:c}=g(t.xmax,i),p=x===l&&u>0;if(u>2*m){const t={xmin:h<o?x:l,ymin:n,xmax:m,ymax:e},i={xmin:r,ymin:n,xmax:h<o?l:x,ymax:e},u={xmin:0,ymin:n,xmax:m,ymax:e},p={xmin:r,ymin:n,xmax:0,ymax:e},a=[],f=[];v(t,u)&&a.push(_),v(t,p)&&f.push(_),v(i,u)&&a.push(c),v(i,p)&&f.push(c);for(let s=_+1;s<c;s++)a.push(s),f.push(s);s.push(new P(t,[_]),new P(i,[c]),new P(u,a),new P(p,f))}else x>l||p?s.push(new P({xmin:x,ymin:n,xmax:m,ymax:e},[_]),new P({xmin:r,ymin:n,xmax:l,ymax:e},[c])):s.push(new P({xmin:x,ymin:n,xmax:l,ymax:e},[_]));return s}function g(t,i){const[s,n]=i.valid,e=2*n;let h,o=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,o=h):t<s&&(h=Math.ceil(Math.abs(t-s)/e),t+=h*e,o=-h),{x:t,frameId:o}}function v(t,i){const{xmin:s,ymin:n,xmax:e,ymax:h}=i;return O(t,s,n)&&O(t,s,h)&&O(t,e,h)&&O(t,e,n)}function O(t,i,s){return i>=t.xmin&&i<=t.xmax&&s>=t.ymin&&s<=t.ymax}function C(t,i,s=!0){const e=!(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPolyline)(t);if(e&&(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__.closeRings)(t),s){return(new T).cut(t,i)}const h=e?t.rings:t.paths,o=e?4:2,u=h.length,m=-2*i;for(let n=0;n<u;n++){const t=h[n];if(t&&t.length>=o){const i=[];for(const s of t)i.push([s[0]+m,s[1]]);h.push(i)}}return e?t.rings=h:t.paths=h,t}class P{constructor(t,i){this.extent=t,this.frameIds=i}}const S=(0,_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__.create)();class T{constructor(){this._linesIn=[],this._linesOut=[]}cut(t,i){let s;if(this._xCut=i,t.rings)this._closed=!0,s=t.rings,this._minPts=4;else{if(!t.paths)return null;this._closed=!1,s=t.paths,this._minPts=2}for(const e of s){if(!e||e.length<this._minPts)continue;let t=!0;for(const i of e)t?(this.moveTo(i),t=!1):this.lineTo(i);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(const e of this._linesIn)e&&e.length>=this._minPts&&s.push(e);const n=-2*this._xCut;for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const t of e)t[0]+=n;s.push(e)}return this._closed?t.rings=s:t.paths=s,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const i=this._side(t[0]);if(i*this._prevSide==-1){const s=this._intersect(this._prevPt,t);this._lineTo(this._xCut,s,0),this._prevSide=0,this._lineTo(t[0],t[1],i)}else this._lineTo(t[0],t[1],i);this._prevSide=i,this._prevPt=t}close(){const t=this._firstPt,i=this._prevPt;t[0]===i[0]&&t[1]===i[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(t,i,s){this._closed?(this._lineIn.push([s<=0?t:this._xCut,i]),this._lineOut.push([s>=0?t:this._xCut,i])):(s<=0&&this._lineIn.push([t,i]),s>=0&&this._lineOut.push([t,i]))}_lineTo(t,i,s){this._closed?(j(this._lineIn,s<=0?t:this._xCut,i),j(this._lineOut,s>=0?t:this._xCut,i)):s<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([t,i])):s>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([t,i])):this._prevSide<0?(this._lineIn.push([t,i]),this._lineOut.push([t,i])):this._prevSide>0&&(this._lineOut.push([t,i]),this._lineIn.push([t,i]))}_checkClosingPt(t){const i=t.length;i>3&&t[0][0]===this._xCut&&t[i-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[i-2][1],t.pop())}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,i){const s=(this._xCut-t[0])/(i[0]-t[0]);return t[1]+s*(i[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function j(t,i,s){const n=t.length;n>1&&t[n-1][0]===i&&t[n-2][0]===i?t[n-1][1]=s:t.push([i,s])}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/MediaLayer.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/MediaLayer.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "./node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _support_ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/ControlPointsGeoreference.js */ "./node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js");
/* harmony import */ var _support_ImageElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/ImageElement.js */ "./node_modules/@arcgis/core/layers/support/ImageElement.js");
/* harmony import */ var _support_LocalMediaElementSource_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/LocalMediaElementSource.js */ "./node_modules/@arcgis/core/layers/support/LocalMediaElementSource.js");
/* harmony import */ var _support_mediaUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/mediaUtils.js */ "./node_modules/@arcgis/core/layers/support/mediaUtils.js");
/* harmony import */ var _support_VideoElement_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/VideoElement.js */ "./node_modules/@arcgis/core/layers/support/VideoElement.js");
/* harmony import */ var _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../webdoc/interfaces.js */ "./node_modules/@arcgis/core/webdoc/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function b(e){return"object"==typeof e&&null!=e&&"type"in e}function L(e){return b(e)&&("image"===e.type||"video"===e.type)}let E=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_18__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"])))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.debounce)((async(e,r,o)=>{const{save:t,saveAs:s}=await __webpack_require__.e(/*! import() | save-mediaLayerUtils */ "save-mediaLayerUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./save/mediaLayerUtils.js */ "./node_modules/@arcgis/core/layers/save/mediaLayerUtils.js"));switch(e){case _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_24__.SaveOperationType.SAVE:return t(this,r);case _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_24__.SaveOperationType.SAVE_AS:return s(this,o,r)}})),this.source=new _support_LocalMediaElementSource_js__WEBPACK_IMPORTED_MODULE_21__["default"]}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const s=this._getSourceOverride(t,this.georeference);s&&(this.setAtOrigin("source",s,"web-map"),this.setAtOrigin("source",s,"web-scene"),t=s);const i=b(t)?new _support_LocalMediaElementSource_js__WEBPACK_IMPORTED_MODULE_21__["default"]({elements:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]([t])}):t;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,r){return e&&"itemId"in r&&r.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new _support_LocalMediaElementSource_js__WEBPACK_IMPORTED_MODULE_21__["default"]({elements:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"](e)}):e instanceof _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]?new _support_LocalMediaElementSource_js__WEBPACK_IMPORTED_MODULE_21__["default"]({elements:e}):e:null}readSource(e,r,o){if("itemId"in r&&r.itemId)return;const t=this._createSource(r);return t?.read(r,o),t}writeSource(e,r,t,s){if(e&&e instanceof _support_LocalMediaElementSource_js__WEBPACK_IMPORTED_MODULE_21__["default"]){const r=e.elements.length;if(1!==r)return void(s?.messages&&s.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}L(e)?e.write(r,s):s?.messages&&(e?s.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):s.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(_webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_24__.SaveOperationType.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(_webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_24__.SaveOperationType.SAVE_AS,r,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new _support_ImageElement_js__WEBPACK_IMPORTED_MODULE_20__["default"];case"video":return new _support_VideoElement_js__WEBPACK_IMPORTED_MODULE_23__["default"]}return null}_getSourceOverride(e,r){if(b(e)&&this.originIdOf("source")===_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_13__.OriginId.PORTAL_ITEM&&r&&(this.originIdOf("georeference")===_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_13__.OriginId.WEB_MAP||this.originIdOf("georeference")===_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_13__.OriginId.WEB_SCENE)){const o=e.toJSON(),t=this._createSource(o);return t.read({...o},{origin:"portal-item"}),t.read({georeference:r},{origin:"web-map"}),t.read({georeference:r},{origin:"web-scene"}),t}return null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],E.prototype,"effectiveSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],E.prototype,"georeference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("web-document","georeference")],E.prototype,"readGeoreference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String})],E.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],E.prototype,"fullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:["MediaLayer"]})],E.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:["show","hide"]})],E.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:_support_ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_19__["default"]}},overridePolicy(e,r,o){return{enabled:!0,allowNull:!1,ignoreOrigin:(0,_support_mediaUtils_js__WEBPACK_IMPORTED_MODULE_22__.isWritingLayerFromItemToWebDocument)(this,o?.origin)&&L(e)&&!!e.georeference&&e.originIdOf("georeference")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_13__.OriginId.PORTAL_ITEM}}}}})],E.prototype,"source",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_7__.cast)("source")],E.prototype,"castSource",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("source",["url"])],E.prototype,"readSource",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__.writer)("source")],E.prototype,"writeSource",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],E.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],E.prototype,"type",void 0),E=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.MediaLayer")],E);const _=E;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoundsStore: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/rbush/PooledRBush.js */ "./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i){n.minX=i[0],n.minY=i[1],n.maxX=i[2],n.maxY=i[3]}function e(i,s,d){t(s),i.search(n,d)}class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__.PooledRBush(9,(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const i=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__.empty)();for(const s of this._boundsById.values())s&&(i[0]=Math.min(s[0],i[0]),i[1]=Math.min(s[1],i[1]),i[2]=Math.max(s[2],i[2]),i[3]=Math.max(s[3],i[3]));return i}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),e(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperationalLayer: function() { return /* binding */ b; },
/* harmony export */   isOperationalLayer: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/layerContainerType.js */ "./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js");
/* harmony import */ var _core_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/read.js */ "./node_modules/@arcgis/core/core/accessorSupport/read.js");
/* harmony import */ var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/write.js */ "./node_modules/@arcgis/core/core/accessorSupport/write.js");
/* harmony import */ var _operationalLayers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operationalLayers.js */ "./node_modules/@arcgis/core/layers/mixins/operationalLayers.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../time/TimeExtent.js */ "./node_modules/@arcgis/core/time/TimeExtent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const b=b=>{let T=class extends b{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){return"Group Layer"===t?.portalItem?.type?void 0:e}writeListMode(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&(0,_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_12__.willPropertyWrite)(this,t,{},i))&&(r[t]=e)}writeOperationalLayerType(e,r,t,i){e&&"tables"!==i?.layerContainerType&&(r.layerType=e)}writeTitle(e,r){r.title=e??"Layer"}readTimeExtent(e){return e?_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromArray(e):null}writeTimeExtent(e,t,i,o){e&&"tables"!==o.layerContainerType&&(e.isEmpty?o?.messages&&o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):t[i]=e.toArray())}read(e,r){r&&(r.layer=this),(0,_core_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_11__.readLoadable)(this,e,(r=>super.read(e,r)),r)}write(e,i){if(!this.persistenceEnabled&&!i?.ignorePersistenceEnabled)return null;if(i?.origin){const e=`${i.origin}/${i.layerContainerType||"operational-layers"}`,t=_operationalLayers_js__WEBPACK_IMPORTED_MODULE_13__.supportedTypes[e];let o=!!t?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(o=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(o=!1),!o)return i.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const o=super.write(e,{...i,layer:this}),s=!!i&&!!i.messages&&!!i.messages.filter((e=>e instanceof _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]&&"web-document-write:property-required"===e.name)).length;return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.isBlobProtocol)(o?.url)?(i?.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:o}beforeSave(){}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],T.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("id",["id"])],T.prototype,"readId",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__.listMode)],T.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("listMode")],T.prototype,"writeListMode",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_10__.excludeTables}}}}})],T.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("operationalLayerType")],T.prototype,"writeOperationalLayerType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__.opacity)],T.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,readOnly:!1})],T.prototype,"persistenceEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],T.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("title"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)(["web-scene"],"title")],T.prototype,"writeTitle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_15__["default"],json:{origins:{"web-scene":{write:{layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_10__.excludeTables}}}}})],T.prototype,"visibilityTimeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("visibilityTimeExtent")],T.prototype,"readTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Integer,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Null]]}})],T.prototype,"writeTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_10__.excludeTables}}},name:"visibility",write:!0}})],T.prototype,"visible",void 0),T=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.mixins.OperationalLayer")],T),T};function T(e){return"operationalLayerType"in e}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortalLayer: function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../portal/PortalUser.js */ "./node_modules/@arcgis/core/portal/PortalUser.js");
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../portal/support/portalItemUtils.js */ "./node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const j=j=>{let _=class extends j{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__.destroyMaybe)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:e.itemId,portal:r?.portal})}writePortalItem(t,e){t?.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem?.id)try{const{load:r}=await __webpack_require__.e(/*! import() | portal-support-layersLoader */ "portal-support-layersLoader").then(__webpack_require__.bind(__webpack_require__, /*! ../../portal/support/layersLoader.js */ "./node_modules/@arcgis/core/portal/support/layersLoader.js"));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAborted)(e),await r({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData,layerModuleTypeMap:t.layerModuleTypeMap},e)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.isAbortError)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(t).catch((t=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(t),!0))))}async setUserPrivileges(t,r){if(!_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:e,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(t,r);this._set("userHasEditingPrivileges",e),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(s)}}async _fetchUserPrivileges(t,e){let s=this.portalItem;if(!t||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(e);const i=t===s.id;if(i&&s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__.getUserPrivileges)(s);let o,a;if(i)o=s.portal.url;else try{o=await (0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__.getOwningPortalUrl)(this.url,e)}catch(d){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(d)}if(!o||!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__.hasSameCanonicalPortal)(o,s.portal.url))return this._fetchFallbackUserPrivileges(e);try{const t=null!=e?e.signal:null;a=await(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:t}))}catch(d){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(d)}const l=!0,n=!1,p=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:p}};try{if(i?await s.reload():(s=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:t,portal:{url:o}}),await s.load(e)),s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__.getUserPrivileges)(s)}catch(d){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(d)}return{features:{edit:l,fullEdit:n},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(t){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(t)}catch(r){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAbortError)(r)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(t){const e=this.url?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(this.url):null;if(!e)return!0;const s=E.credential===e?E.user:await this._fetchEditingUser(t);return E.credential=e,E.user=s,null==s?.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(t){const e=this.portalItem?.portal?.user;if(e)return e;const o=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__["default"].getDefault();if(l&&l.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__.normalize)(l.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__.normalize)(a))return l.user;const n=`${a}/community/self`,p=null!=t?t.signal:null,u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__.result)((0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(n,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(u.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e?.portal,s=this.portalItem?.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__["default"].getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__.hasSamePortal)(s.restUrl,r.restUrl)?(e.messages&&e.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],_.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__.reader)("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__.writer)("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({clonable:!1})],_.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__.subclass)("esri.layers.mixins.PortalLayer")],_),_},E={credential:null,user:null};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/operationalLayers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/operationalLayers.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportedTypes: function() { return /* binding */ i; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},r={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},a={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},i={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":e,"web-map/basemap":r,"web-map/tables":a,"link-chart/operational-layers":{...e,LinkChartLayer:!0},"link-chart/basemap":r,"link-chart/tables":a,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ X; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/perspectiveUtils.js */ "./node_modules/@arcgis/core/core/perspectiveUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./GeoreferenceBase.js */ "./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const S=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_14__.create)(),N=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)();let T=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,json:{write:!0}})],T.prototype,"x",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,json:{write:!0}})],T.prototype,"y",void 0),T=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],T);let _=class extends _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.Clonable{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],_.prototype,"sourcePoint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]})],_.prototype,"mapPoint",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.support.ControlPointsGeoreference.ControlPoint")],_);let O=class extends((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupportMixin)(_GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_21__["default"])){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,o){const e=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_20__["default"].fromJSON(o.spatialReference),r=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_14__.fromValues)(...o.coefficients,1);return t.map((t=>((0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.set)(N,t.x,t.y),(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(N,N,r),{sourcePoint:t,mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:N[0],y:N[1],spatialReference:e})})))}writeControlPoints(t,o,r,n){if(null!=this.transform)null!=t&&M(t[0])&&(o.controlPoints=t.map((t=>{const o=t.sourcePoint;return{x:o.x,y:o.y}})),o.spatialReference=t[0].mapPoint.spatialReference.toJSON(),o.coefficients=this.transform.slice(0,8));else{const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:n?.layer,georeference:this});n?.messages?n.messages.push(t):_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(t.name,t.message)}}get coords(){if(null==this.controlPoints)return null;const t=this._updateTransform(S);if(null==t||!M(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return Q(t,this.width,this.height,o)}set coords(t){if(null==this.controlPoints||!M(this.controlPoints[0]))return;const o=this.controlPoints[0].mapPoint.spatialReference;if(null==(t=this.projectOrWarn(t,o)))return;const{width:e,height:r}=this,{rings:[[n,i,l,a]]}=t,p={sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__.createScreenPoint)(0,r),mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:n[0],y:n[1],spatialReference:o})},u={sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__.createScreenPoint)(0,0),mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:i[0],y:i[1],spatialReference:o})},m={sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__.createScreenPoint)(e,0),mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:l[0],y:l[1],spatialReference:o})},f={sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__.createScreenPoint)(e,r),mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:a[0],y:a[1],spatialReference:o})};M(p)&&M(u)&&M(m)&&M(f)&&(W(S,p,u,m,f),this.controlPoints=this.controlPoints.map((({sourcePoint:t})=>((0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.set)(N,t.x,t.y),(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(N,N,S),{sourcePoint:t,mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:N[0],y:N[1],spatialReference:o})}))))}get inverseTransform(){return null==this.transform?null:(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_13__.invert)((0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_14__.create)(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(null==t||null==this.transform||null==this.controlPoints||!M(this.controlPoints[0]))return null;(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.set)(N,t.x,t.y);const o=this.controlPoints[0].mapPoint.spatialReference;return (0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(N,N,this.transform),new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_17__["default"]({x:N[0],y:N[1],spatialReference:o})}toSource(t){if(null==t||null==this.inverseTransform||null==this.controlPoints||!M(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),null==(t=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_19__.projectOrLoad)(t,o).geometry)?null:((0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.set)(N,t.x,t.y),(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(N,N,this.inverseTransform),(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__.createScreenPoint)(N[0],N[1]))}toSourceNormalized(t){const o=this.toSource(t);return null!=o&&(o.x/=this.width,o.y/=this.height),o}_updateTransform(t){const{controlPoints:o,width:e,height:r}=this;if(!(null!=o&&e>0&&r>0))return null;const[n,i,s,l]=o;if(!M(n))return null;const c=n.mapPoint.spatialReference,a=this._projectControlPoint(i,c),p=this._projectControlPoint(s,c),u=this._projectControlPoint(l,c);if(!a.valid||!p.valid||!u.valid)return null;if(!M(a.controlPoint))return null;null==t&&(t=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_14__.create)());let m=null;return m=M(p.controlPoint)&&M(u.controlPoint)?W(t,n,a.controlPoint,p.controlPoint,u.controlPoint):M(p.controlPoint)?B(t,n,a.controlPoint,p.controlPoint):q(t,n,a.controlPoint),m.every((t=>0===t))?null:m}_projectControlPoint(t,o){if(!M(t))return{valid:!0,controlPoint:t};const{sourcePoint:e,mapPoint:r}=t,{geometry:n,pending:s}=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_19__.projectOrLoad)(r,o);return s?{valid:!1,controlPoint:null}:s||n?{valid:!0,controlPoint:{sourcePoint:e,mapPoint:n}}:(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:r.spatialReference,targetSpatialReference:o}),{valid:!1,controlPoint:null})}};function M(t){return null!=t?.sourcePoint&&null!=t.mapPoint}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[_],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[T]},coefficients:{type:[Number]},spatialReference:{type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_20__["default"]}}}}})],O.prototype,"controlPoints",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("controlPoints")],O.prototype,"readControlPoints",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__.writer)("controlPoints")],O.prototype,"writeControlPoints",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({clonable:!1})],O.prototype,"coords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"height",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],O.prototype,"inverseTransform",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],O.prototype,"transform",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"width",void 0),O=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.support.ControlPointsGeoreference")],O);const G=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),I=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),L=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),J=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),E=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),k=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),z=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),A=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.create)(),U=Math.PI/2;function V(t,o,e){(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.set)(t,e.sourcePoint.x,e.sourcePoint.y),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.set)(o,e.mapPoint.x,e.mapPoint.y)}function q(t,o,e){return V(G,E,o),V(I,k,e),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.rotate)(L,I,G,U),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.rotate)(J,G,I,U),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.rotate)(z,k,E,-U),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.rotate)(A,E,k,-U),K(t,G,I,L,J,E,k,z,A)}function B(t,o,e,r){return V(G,E,o),V(I,k,e),V(L,z,r),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.lerp)(J,G,I,.5),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.rotate)(J,L,J,Math.PI),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.lerp)(A,E,k,.5),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_15__.rotate)(A,z,A,Math.PI),K(t,G,I,L,J,E,k,z,A)}function W(t,o,e,r,n){return V(G,E,o),V(I,k,e),V(L,z,r),V(J,A,n),K(t,G,I,L,J,E,k,z,A)}const D=new Array(8).fill(0),F=new Array(8).fill(0);function H(t,o,e,r,n){return t[0]=o[0],t[1]=o[1],t[2]=e[0],t[3]=e[1],t[4]=r[0],t[5]=r[1],t[6]=n[0],t[7]=n[1],t}function K(t,o,e,r,n,i,s,c,a){return (0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.getProjectiveTransform)(t,H(D,o,e,r,n),H(F,i,s,c,a))}function Q(t,o,e,r){const n=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.fromValues)(0,e),i=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.fromValues)(0,0),l=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.fromValues)(o,0),c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_16__.fromValues)(o,e);return (0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(n,n,t),(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(i,i,t),(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(l,l,t),(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.transformProjective)(c,c,t),new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_18__["default"]({rings:[[n,i,l,c,n]],spatialReference:r})}const X=O;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/CornersGeoreference.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/CornersGeoreference.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/perspectiveUtils.js */ "./node_modules/@arcgis/core/core/perspectiveUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GeoreferenceBase.js */ "./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_10__.create)();let y=class extends _GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_14__["default"]{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:e,bottomRight:r}=this;if(null==t||null==o||null==e||null==r)return null;const s=t.spatialReference;return o=this.projectOrWarn(o,s),e=this.projectOrWarn(e,s),r=this.projectOrWarn(r,s),null==o||null==e||null==r?null:new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_12__["default"]({rings:[[[e.x,e.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[e.x,e.y]]],spatialReference:s})}set coords(t){const{topLeft:o}=this;if(null==o)return;const e=o.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{rings:[[r,s,i,l]]}=t;this.bottomLeft=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:r[0],y:r[1],spatialReference:e}),this.topLeft=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:s[0],y:s[1],spatialReference:e}),this.topRight=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:i[0],y:i[1],spatialReference:e}),this.bottomRight=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:l[0],y:l[1],spatialReference:e})}toSourceNormalized(t){const{topLeft:s,topRight:i,bottomRight:p,bottomLeft:c}=this;if(null==t||null==s||null==i||null==p||null==c)return null;const m=s.spatialReference;t=t.normalize();const f=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectOrLoad)(t,m).geometry;if(null==f)return null;(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_9__.set)(u,f.x,f.y);const y=(0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_1__.getProjectiveTransform)((0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),[s.x,s.y,c.x,c.y,i.x,i.y,p.x,p.y],[0,0,0,1,1,0,1,1]);return (0,_core_perspectiveUtils_js__WEBPACK_IMPORTED_MODULE_1__.transformProjective)(u,u,y),(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__.createScreenPoint)(u[0],u[1])}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({clonable:!1})],y.prototype,"coords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],y.prototype,"bottomLeft",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],y.prototype,"bottomRight",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],y.prototype,"topLeft",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],y.prototype,"topRight",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.CornersGeoreference")],y);const h=y;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/ExtentAndRotationGeoreference.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExtentAndRotationGeoreference.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/common.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GeoreferenceBase.js */ "./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends _GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_12__["default"]{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:n}=this.extent;let s;if(this.rotation){const{x:n,y:i}=this.extent.center,a=x(n,i,this.rotation);s=[a(t,e),a(t,o),a(r,o),a(r,e)],s.push(s[0])}else s=[[t,e],[t,o],[r,o],[r,e],[t,e]];return new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__["default"]({rings:[s],spatialReference:n})}set coords(t){if(null==t||null==this.extent)return;const r=this.extent.spatialReference;if(t=this.projectOrWarn(t,r),null==t?.extent)return;const{rings:[[o,n,s]],extent:{center:{x:i,y:c}}}=t,m=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.rad2deg)(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),l=x(i,c,-m),[p,u]=l(o[0],o[1]),[f,h]=l(s[0],s[1]);this.extent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__["default"]({xmin:p,ymin:u,xmax:f,ymax:h,spatialReference:r}),this.rotation=m}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(null==t||null==e)return null;const{xmin:s,ymin:i,xmax:a,ymax:c,center:l,spatialReference:p}=e;t=t.normalize();const u=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_11__.projectOrLoad)(t,p).geometry;if(null==u)return null;let f=u.x,h=u.y;return n&&([f,h]=x(l.x,l.y,-n)(f,h)),(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__.createScreenPoint)((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.scale)(f,s,a,0,1),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.scale)(h,c,i,0,1))}};function x(t,e,r){const o=(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_8__.toRadian)(r),n=Math.cos(o),s=Math.sin(o);return(r,o)=>[n*(r-t)+s*(o-e)+t,n*(o-e)-s*(r-t)+e]}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({clonable:!1})],p.prototype,"coords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_9__["default"]})],p.prototype,"extent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number})],p.prototype,"rotation",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.ExtentAndRotationGeoreference")],p);const u=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.Clonable{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:c}=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__.projectOrLoad)(e,r);return c?null:c||t?t:(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.GeoreferenceBase")],c);const a=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/ImageElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ImageElement.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ E; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/imageUtils.js */ "./node_modules/@arcgis/core/core/imageUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _MediaElementBase_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MediaElementBase.js */ "./node_modules/@arcgis/core/layers/support/MediaElementBase.js");
/* harmony import */ var _mediaUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mediaUtils.js */ "./node_modules/@arcgis/core/layers/support/mediaUtils.js");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "./node_modules/@arcgis/core/portal/support/resourceExtension.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let w=class extends _MediaElementBase_js__WEBPACK_IMPORTED_MODULE_13__["default"]{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if("string"==typeof t){const e=(0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_3__.getImageData)(t).then((t=>{this._set("content",t)}));this.addResolvingPromise(e)}else if(t instanceof HTMLImageElement){const e=t.decode().then((()=>{this._set("content",t)}));this.addResolvingPromise(e)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,e,o){return (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_16__.f)(e.url,o)}writeImage(t,e,o,r){if(null==t)return;const i=r?.portalItem,s=r?.resources;if(!i||!s)return void("string"==typeof t&&(e[o]=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_16__.t)(t,r)));const a=H(t)?t:null;if(a){if(null==(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_16__.i)(a))return void(e[o]=a);const t=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_16__.t)(a,{...r,verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_16__.M.NO);if(i&&t&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbsolute)(t))return s.toKeep.push({resource:i.resourceFromPath(t),compress:!1}),void(e[o]=t)}e[o]="<pending>",s.pendingOperations.push(U(t).then((t=>{const r=M(t,i);e[o]=r.itemRelativeUrl,s.toAdd.push({resource:r,content:{type:"blob",blob:t},compress:!1,finish:t=>{this.image=t.url}})})))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],w.prototype,"animationOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],w.prototype,"content",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],w.prototype,"contentWidth",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],w.prototype,"contentHeight",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_mediaUtils_js__WEBPACK_IMPORTED_MODULE_14__.mediaElementUrlProperty)],w.prototype,"image",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("image",["url"])],w.prototype,"readImage",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__.writer)("image")],w.prototype,"writeImage",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_mediaUtils_js__WEBPACK_IMPORTED_MODULE_14__.mediaTypeProperty)],w.prototype,"type",void 0),w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.support.ImageElement")],w);const E=w;function H(t){return"string"==typeof t&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isDataProtocol)(t)&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isBlobProtocol)(t)}async function U(t){if("string"==typeof t){if((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isDataProtocol)(t))return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.dataToBlob)(t);return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t,{responseType:"blob"})).data}return new Promise((e=>L(t).toBlob(e)))}function L(t){if(t instanceof HTMLCanvasElement)return t;const e=t instanceof HTMLImageElement?t.naturalWidth:t.width,o=t instanceof HTMLImageElement?t.naturalHeight:t.height,r=document.createElement("canvas"),n=r.getContext("2d");return r.width=e,r.height=o,t instanceof HTMLImageElement?n.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&n.putImageData(t,0,0),r}function M(t,e){const o=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_5__.generateUUID)(),r=`${(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.join)("media",o)}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_15__.getResourceContentExtension)({type:"blob",blob:t})}`;return e.resourceFromPath(r)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/LocalMediaElementSource.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LocalMediaElementSource.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ V; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Promise.js */ "./node_modules/@arcgis/core/core/Promise.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_intersectsBase_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry/support/intersectsBase.js */ "./node_modules/@arcgis/core/geometry/support/intersectsBase.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _graphics_data_BoundsStore_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../graphics/data/BoundsStore.js */ "./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js");
/* harmony import */ var _ImageElement_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ImageElement.js */ "./node_modules/@arcgis/core/layers/support/ImageElement.js");
/* harmony import */ var _MediaElementBase_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./MediaElementBase.js */ "./node_modules/@arcgis/core/layers/support/MediaElementBase.js");
/* harmony import */ var _MediaElementView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./MediaElementView.js */ "./node_modules/@arcgis/core/layers/support/MediaElementView.js");
/* harmony import */ var _VideoElement_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./VideoElement.js */ "./node_modules/@arcgis/core/layers/support/VideoElement.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const w={key:"type",defaultKeyValue:"image",base:_MediaElementBase_js__WEBPACK_IMPORTED_MODULE_21__["default"],typeMap:{image:_ImageElement_js__WEBPACK_IMPORTED_MODULE_20__["default"],video:_VideoElement_js__WEBPACK_IMPORTED_MODULE_23__["default"]}},M=_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(w);let I=class extends(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__["default"].LoadableMixin((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_7__.EsriPromiseMixin)(_core_Evented_js__WEBPACK_IMPORTED_MODULE_4__["default"].EventedAccessor))){constructor(e){super(e),this._index=new _graphics_data_BoundsStore_js__WEBPACK_IMPORTED_MODULE_19__.BoundsStore,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new _MediaElementView_js__WEBPACK_IMPORTED_MODULE_22__.MediaElementView({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const r=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_9__.watch)((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(r,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh")},this.elements=new M}async load(e){if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__.throwIfAborted)(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_24__["default"].WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_3__.referenceSetter)(e,this._get("elements"),M))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__["default"].getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_15__.initializeProjection)(e.spatialReference,this.spatialReference,null,t);const s=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_18__.equals)(e.spatialReference,this.spatialReference)?e:(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_15__.project)(e,this.spatialReference);if(!s)return[];const r=s.normalize(),o=[];for(const n of r)this._index.forEachInBounds((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_16__.fromExtent)(n),(({normalizedCoords:e,element:t})=>{null!=e&&(0,_geometry_support_intersectsBase_js__WEBPACK_IMPORTED_MODULE_17__.extentIntersectsPolygon)(n,e)&&o.push(t)}));return o.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),o}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const s=e.normalizedBounds,r=this._index.has(e),o=null!=s;this._index.delete(e),o&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()],I.prototype,"elements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)({readOnly:!0})],I.prototype,"fullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__.property)()],I.prototype,"spatialReference",null),I=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.layers.support.LocalMediaElementSource")],I);const V=I;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/MediaElementBase.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MediaElementBase.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Identifiable.js */ "./node_modules/@arcgis/core/core/Identifiable.js");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ControlPointsGeoreference.js */ "./node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js");
/* harmony import */ var _mediaUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mediaUtils.js */ "./node_modules/@arcgis/core/layers/support/mediaUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_2__.NumericIdentifiableMixin)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.MultiOriginJSONMixin)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_3__["default"]))){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return _ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(e)}writeGeoreference(e,o,t,n){const i=n?.resources?.pendingOperations,c=()=>{const i=(0,_mediaUtils_js__WEBPACK_IMPORTED_MODULE_13__.toControlPointsGeoreference)(this.georeference,this.contentWidth,this.contentHeight);if(i){if("control-points"!==e.type&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),4!==i.controlPoints?.length&&n?.messages)return void n.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));o[t]=i.write({},n)}};if("control-points"!==e.type&&!this.loaded&&i)return o[t]={},void i.push(this.load().then(c));c()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:r,contentWidth:o,contentHeight:t}=this;if(null==e||null==r||0===o||0===t)return null;const s=r.toSourceNormalized(e);return null==s?null:(s.x*=o,s.y*=t,s)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_mediaUtils_js__WEBPACK_IMPORTED_MODULE_13__.mediaGeoreferenceProperty)],u.prototype,"georeference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("georeference")],u.prototype,"readGeoreference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("georeference")],u.prototype,"writeGeoreference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{read:!1,write:!1}})],u.prototype,"opacity",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.support.MediaElementBase")],u);const d=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/MediaElementView.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MediaElementView.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaElementView: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/normalizeUtilsSync.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(o){super(o)}get bounds(){const o=this.coords;return null==o?.extent?null:(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__.fromExtent)(o.extent)}get coords(){const o=this.element.georeference?.coords;return (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectOrLoad)(o,this.spatialReference).geometry}get normalizedCoords(){return _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON((0,_geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_10__.normalizeCentralMeridianSync)(this.coords))}get normalizedBounds(){const o=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=o?(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__.fromExtent)(o):null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"element",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"bounds",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"coords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"normalizedCoords",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],m.prototype,"normalizedBounds",null),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.MediaElementView")],m);


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/VideoElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/VideoElement.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _MediaElementBase_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MediaElementBase.js */ "./node_modules/@arcgis/core/layers/support/MediaElementBase.js");
/* harmony import */ var _mediaUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mediaUtils.js */ "./node_modules/@arcgis/core/layers/support/mediaUtils.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let f=class extends _MediaElementBase_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;return"string"==typeof e?this.addResolvingPromise(this._preProcessVideoUrl(e).then((e=>{const o=document.createElement("video");return o.src=e,o.crossOrigin="anonymous",o.autoplay=!0,o.muted=!0,o.loop=!0,o.playsInline=!0,this._loadVideo(o).then((()=>{this._set("content",o)}))}))):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e)}))):this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,o,s,r){if(!e)return void(r?.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("video-element:unsupported-video","video source is missing")));const d=b(e)?e:null;if(!d)return void(r?.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("video-element:unsupported-video","video source must be an absolute url")));!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAbsolute)(d)&&r?.blockedRelativeUrls&&r.blockedRelativeUrls.push(d);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.makeAbsolute)(d);!(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_13__.i)(a)?o[s]=a:r?.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("video-element:unsupported-video","video source cannot be an item resource"))}async _preProcessVideoUrl(e){if((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.getProxyRule)(e))return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.addProxy)(e);try{return await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e,{method:"head"}),e}catch{return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.addProxy)(e,!0)}}_loadVideo(e){return new Promise(((o,t)=>{const r=(0,_core_events_js__WEBPACK_IMPORTED_MODULE_3__.once)(e,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(o,t):o()}));this.addHandles(r,"canplay"),"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.isBlobProtocol)(e.src)||(e.src=e.src))}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],f.prototype,"autoplay",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],f.prototype,"content",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],f.prototype,"contentWidth",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],f.prototype,"contentHeight",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_mediaUtils_js__WEBPACK_IMPORTED_MODULE_12__.mediaElementUrlProperty)],f.prototype,"video",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("video")],f.prototype,"writeVideo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_mediaUtils_js__WEBPACK_IMPORTED_MODULE_12__.mediaTypeProperty)],f.prototype,"type",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.VideoElement")],f);const j=f;function b(e){return"string"==typeof e&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.isDataProtocol)(e)&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.isBlobProtocol)(e)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/commonProperties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/commonProperties.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attributeTableTemplate: function() { return /* binding */ T; },
/* harmony export */   elevationInfo: function() { return /* binding */ c; },
/* harmony export */   id: function() { return /* binding */ u; },
/* harmony export */   labelsVisible: function() { return /* binding */ p; },
/* harmony export */   legendEnabled: function() { return /* binding */ d; },
/* harmony export */   listMode: function() { return /* binding */ I; },
/* harmony export */   maxScale: function() { return /* binding */ v; },
/* harmony export */   minScale: function() { return /* binding */ j; },
/* harmony export */   opacity: function() { return /* binding */ f; },
/* harmony export */   opacityDrawingInfo: function() { return /* binding */ b; },
/* harmony export */   popupEnabled: function() { return /* binding */ l; },
/* harmony export */   readOnlyService: function() { return /* binding */ m; },
/* harmony export */   sceneLayerFullExtent: function() { return /* binding */ g; },
/* harmony export */   screenSizePerspectiveEnabled: function() { return /* binding */ s; },
/* harmony export */   url: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/accessorSupport/layerContainerType.js */ "./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../symbols/support/ElevationInfo.js */ "./node_modules/@arcgis/core/symbols/support/ElevationInfo.js");
/* harmony import */ var _tables_AttributeTableTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tables/AttributeTableTemplate.js */ "./node_modules/@arcgis/core/tables/AttributeTableTemplate.js");
/* harmony import */ var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webdoc/support/opacityUtils.js */ "./node_modules/@arcgis/core/webdoc/support/opacityUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}},l={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,n){r[n]=!e}}}},p={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}},y={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_3__.w}}},d={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}},c={value:null,type:_symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"],json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}};function m(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const w={write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables},read:!0},f={type:Number,json:{origins:{"web-document":w,"portal-item":{write:!0}}}},b={...f,json:{...f.json,origins:{"web-document":{...w,write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,n)=>n&&"service"!==n.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition?.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_6__.transparencyToOpacity)(r.layerDefinition.drawingInfo.transparency):void 0:(0,_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_6__.transparencyToOpacity)(r.drawingInfo.transparency)}}},g={type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"],readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,i)=>{const a=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(e);return null!=i.spatialReference&&"object"==typeof i.spatialReference&&(a.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(i.spatialReference)),a}}}},read:!1}},u={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},j={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}},name:"layerDefinition.minScale",write:!0}},v={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}},name:"layerDefinition.maxScale",write:!0}},I={json:{write:{ignoreOrigin:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables},origins:{"web-map":{read:!1,write:!1}}}},T={type:_tables_AttributeTableTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"],json:{name:"attributeTableInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/mediaUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/mediaUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDefaultControlPointsGeoreference: function() { return /* binding */ m; },
/* harmony export */   createLocalModeControlPointsGeoreference: function() { return /* binding */ f; },
/* harmony export */   isWritingLayerFromItemToWebDocument: function() { return /* binding */ P; },
/* harmony export */   mediaElementUrlProperty: function() { return /* binding */ w; },
/* harmony export */   mediaGeoreferenceProperty: function() { return /* binding */ h; },
/* harmony export */   mediaTypeProperty: function() { return /* binding */ g; },
/* harmony export */   toControlPointsGeoreference: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ControlPointsGeoreference.js */ "./node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js");
/* harmony import */ var _CornersGeoreference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CornersGeoreference.js */ "./node_modules/@arcgis/core/layers/support/CornersGeoreference.js");
/* harmony import */ var _ExtentAndRotationGeoreference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExtentAndRotationGeoreference.js */ "./node_modules/@arcgis/core/layers/support/ExtentAndRotationGeoreference.js");
/* harmony import */ var _GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GeoreferenceBase.js */ "./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l=100,y=.5;async function m(e,t){e.loaded||await e.load();const{contentWidth:n,contentHeight:i}=e,{spatialReference:s}=t,a=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.getInfo)(s);let m=!1;if(a){const e=a.valid[1]-a.valid[0];t.width>e&&(t=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_8__["default"]({xmin:a.valid[0],ymin:t.ymin,xmax:a.valid[1],ymax:t.ymax,spatialReference:t.spatialReference}),m=!0)}const f=t.expand(y),{center:u,width:P,height:d}=f,x=n/i,w=m||x>1,g=w?l:l*x,h=w?l/x:l,R=w?P:d*x,j=w?P/x:d,v=u.x-R/2,O=u.x+R/2,b=u.y+j/2,G=u.y-j/2;return new _ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_4__["default"]({controlPoints:[{sourcePoint:{x:g,y:i-h},mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:v,y:G,spatialReference:s})},{sourcePoint:{x:g,y:h},mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:v,y:b,spatialReference:s})},{sourcePoint:{x:n-g,y:h},mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:O,y:b,spatialReference:s})},{sourcePoint:{x:n-g,y:i-h},mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:O,y:G,spatialReference:s})}],width:n,height:i})}function f(e){const t=e.georeference;if("control-points"!==t.type)return null;const n={wkid:0},{width:o,height:i}=t,s=t.controlPoints;return new _ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_4__["default"]({controlPoints:s.map((e=>{const{x:t,y:o}=e.sourcePoint;return{sourcePoint:{x:t,y:o},mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:t,y:i-o,spatialReference:n})}})),width:o,height:i})}function u(e){return"media"===e?.type}function P(e,o){const r=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__.nameToId)(o);return u(e)&&!!e.portalItem&&null!=r&&r>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__.OriginId.PORTAL_ITEM}function d(t,n,o){if(!t||"control-points"===t.type)return t;const{coords:i}=t;if(5!==i?.rings[0]?.length)return null;const[s,a,c,l]=i.rings[0],{spatialReference:y}=i;return new _ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_4__["default"]({controlPoints:[{mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:s[0],y:s[1],spatialReference:y}),sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.createScreenPoint)(0,o)},{mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:a[0],y:a[1],spatialReference:y}),sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.createScreenPoint)(0,0)},{mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:c[0],y:c[1],spatialReference:y}),sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.createScreenPoint)(n,0)},{mapPoint:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:l[0],y:l[1],spatialReference:y}),sourcePoint:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.createScreenPoint)(n,o)}],width:n,height:o})}function x(e,t,n){return{enabled:!P(n?.layer,n?.origin),ignoreOrigin:!0}}const w={json:{name:"url",type:String,write:{overridePolicy:x}}},g={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:x}}},h={types:{key:"type",base:_GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_7__["default"],typeMap:{"control-points":_ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_4__["default"],corners:_CornersGeoreference_js__WEBPACK_IMPORTED_MODULE_5__["default"],"extent-and-rotation":_ExtentAndRotationGeoreference_js__WEBPACK_IMPORTED_MODULE_6__["default"]}},json:{types:{key:"type",base:_GeoreferenceBase_js__WEBPACK_IMPORTED_MODULE_7__["default"],typeMap:{"control-points":_ControlPointsGeoreference_js__WEBPACK_IMPORTED_MODULE_4__["default"]}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/portalItemUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalItemUtils.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTypeKeyword: function() { return /* binding */ i; },
/* harmony export */   getUserPrivileges: function() { return /* binding */ E; },
/* harmony export */   getWGS84ExtentForItem: function() { return /* binding */ l; },
/* harmony export */   hasTypeKeyword: function() { return /* binding */ s; },
/* harmony export */   isHostedLayer: function() { return /* binding */ c; },
/* harmony export */   removeTypeKeyword: function() { return /* binding */ a; },
/* harmony export */   toggleTypeKeyword: function() { return /* binding */ u; },
/* harmony export */   typeKeyword: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function o(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__.webMercatorToGeographic)(o);const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WGS84;return await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(i,s),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.project)(o,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function s(e,t){return!!e.typeKeywords?.includes(t)}function c(e){return s(e,f.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function u(e,t,r){r?i(e,t):a(e,t)}async function l(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return o(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer"};function E(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const c="update"===n||"admin"===n;return c?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:c}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/resourceExtension.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceExtension.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResourceContentExtension: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p(i){return o[t(i)]||e}function t(i){return"json"===i.type?"application/json":"blob"===i.type?i.blob.type:n(i.url)}function n(p){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathExtension)(p);return g[t]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in g)o[g[l]]=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/AttributeTableTemplate.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/AttributeTableTemplate.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _elements_AttributeTableGroupElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/AttributeTableGroupElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableGroupElement.js");
/* harmony import */ var _support_elements_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/elements.js */ "./node_modules/@arcgis/core/tables/support/elements.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d;const b=(0,_support_elements_js__WEBPACK_IMPORTED_MODULE_9__.buildTypeMaps)(_elements_AttributeTableGroupElement_js__WEBPACK_IMPORTED_MODULE_8__["default"]);let j=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.elements=null,this.orderByFields=null}castElements(e){return (0,_support_elements_js__WEBPACK_IMPORTED_MODULE_9__.ensureType)(e,b)}readElements(e,t){return (0,_support_elements_js__WEBPACK_IMPORTED_MODULE_9__.fromJSON)(t.attributeTableElements,b)}writeElements(e,t){t.attributeTableElements=(0,_support_elements_js__WEBPACK_IMPORTED_MODULE_9__.toJSON)(e,b)}clone(){return new d({elements:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.elements),orderByFields:this.orderByFields})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{write:!0}})],j.prototype,"elements",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__.cast)("elements")],j.prototype,"castElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__.reader)("elements",["attributeTableElements"])],j.prototype,"readElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__.writer)("elements")],j.prototype,"writeElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Object],json:{write:!0}})],j.prototype,"orderByFields",void 0),j=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.tables.AttributeTableTemplate")],j);const f=j;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/elements/AttributeTableAttachmentElement.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/elements/AttributeTableAttachmentElement.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AttributeTableElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let p=s=class extends _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(t){super(t),this.displayType="auto",this.type="attachment"}clone(){return new s({description:this.description,displayType:this.displayType,label:this.label})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["auto"],json:{write:!0}})],p.prototype,"displayType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tables.elements.AttributeTableAttachmentElement")],p);const a=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.description=null,this.label=null,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],s.prototype,"type",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.tables.elements.AttributeTableElement")],s);const p=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/elements/AttributeTableFieldElement.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/elements/AttributeTableFieldElement.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AttributeTableElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let i=s=class extends _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(e){super(e),this.fieldName=null,this.type="field"}clone(){return new s({description:this.description,fieldName:this.fieldName,label:this.label})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:String,json:{write:!0}})],i.prototype,"fieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:String,json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tables.elements.AttributeTableFieldElement")],i);const p=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/elements/AttributeTableGroupElement.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/elements/AttributeTableGroupElement.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AttributeTableElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js");
/* harmony import */ var _support_elements_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/elements.js */ "./node_modules/@arcgis/core/tables/support/elements.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var u;let b=u=class extends _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e){super(e),this.elements=null,this.type="group"}castElements(e){return (0,_support_elements_js__WEBPACK_IMPORTED_MODULE_8__.ensureType)(e,d,!1)}readElements(e,t){return (0,_support_elements_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON)(t.attributeTableElements,d,!1)}writeElements(e,t){t.attributeTableElements=(0,_support_elements_js__WEBPACK_IMPORTED_MODULE_8__.toJSON)(e,d,!1)}clone(){return new u({description:this.description,elements:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.elements),label:this.label})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],b.prototype,"elements",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_3__.cast)("elements")],b.prototype,"castElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_4__.reader)("elements",["attributeTableElements"])],b.prototype,"readElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__.writer)("elements")],b.prototype,"writeElements",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tables.elements.AttributeTableGroupElement")],b);const d=(0,_support_elements_js__WEBPACK_IMPORTED_MODULE_8__.buildTypeMaps)(b),j=b;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/elements/AttributeTableRelationshipElement.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/elements/AttributeTableRelationshipElement.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AttributeTableElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let i=s=class extends _AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(e){super(e),this.relationshipId=null,this.type="relationship"}clone(){return new s({description:this.description,label:this.label,relationshipId:this.relationshipId})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:Number,json:{write:!0}})],i.prototype,"relationshipId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["relationship"],json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.tables.elements.AttributeTableRelationshipElement")],i);const p=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/tables/support/elements.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/tables/support/elements.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTypeMaps: function() { return /* binding */ i; },
/* harmony export */   ensureType: function() { return /* binding */ s; },
/* harmony export */   fromJSON: function() { return /* binding */ n; },
/* harmony export */   toJSON: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _elements_AttributeTableAttachmentElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/AttributeTableAttachmentElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableAttachmentElement.js");
/* harmony import */ var _elements_AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/AttributeTableElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableElement.js");
/* harmony import */ var _elements_AttributeTableFieldElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/AttributeTableFieldElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableFieldElement.js");
/* harmony import */ var _elements_AttributeTableRelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/AttributeTableRelationshipElement.js */ "./node_modules/@arcgis/core/tables/elements/AttributeTableRelationshipElement.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(t){return{typesWithGroup:{base:_elements_AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_2__["default"],key:"type",typeMap:{attachment:_elements_AttributeTableAttachmentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"],field:_elements_AttributeTableFieldElement_js__WEBPACK_IMPORTED_MODULE_3__["default"],group:t,relationship:_elements_AttributeTableRelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]}},typesWithoutGroup:{base:_elements_AttributeTableElement_js__WEBPACK_IMPORTED_MODULE_2__["default"],key:"type",typeMap:{attachment:_elements_AttributeTableAttachmentElement_js__WEBPACK_IMPORTED_MODULE_1__["default"],field:_elements_AttributeTableFieldElement_js__WEBPACK_IMPORTED_MODULE_3__["default"],relationship:_elements_AttributeTableRelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]}}}}function n(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>r[t.type].fromJSON(t)))}function u(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>t.toJSON()))}function s(e,p,r=!0){return e?e.map((e=>(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__.ensureOneOfType)(r?p.typesWithGroup:p.typesWithoutGroup,e))):null}


/***/ }),

/***/ "./node_modules/@arcgis/core/webdoc/interfaces.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/interfaces.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveOperationType: function() { return /* binding */ A; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ })

}]);
//# sourceMappingURL=MediaLayer.js.map