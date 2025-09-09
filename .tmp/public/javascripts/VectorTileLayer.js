"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["VectorTileLayer"],{

/***/ "./node_modules/@arcgis/core/core/ByteSizeUnit.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ByteSizeUnit.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteSizeUnit: function() { return /* binding */ E; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var E;!function(E){E[E.KILOBYTES=1024]="KILOBYTES",E[E.MEGABYTES=1048576]="MEGABYTES",E[E.GIGABYTES=1073741824]="GIGABYTES"}(E||(E={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/LRUCache.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LRUCache: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemCache.js */ "./node_modules/@arcgis/core/core/MemCache.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(e,s){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__.MemCacheStorage,this.id="",this.name="",this.size=0,this._storage.maxSize=e,this._storage.register(this),s&&this._storage.registerRemoveFunc("",s)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(t,e,s=1){this._storage.put(this,t,e,s,1)}pop(t){return this._storage.pop(this,t)}get(t){return this._storage.get(this,t)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}resetHitRate(){}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/MemCache.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemCache: function() { return /* binding */ r; },
/* harmony export */   MemCacheStorage: function() { return /* binding */ h; },
/* harmony export */   MinPriority: function() { return /* binding */ e; },
/* harmony export */   NoPriority: function() { return /* binding */ s; },
/* harmony export */   RemoveMode: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=-3,s=e-1;var i;!function(t){t[t.ALL=0]="ALL",t[t.SOME=1]="SOME"}(i||(i={}));class r{constructor(t,e,s){this.name=t,this._storage=e,this.id=o+++":",this.size=0,this.maxSize=-1,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),s&&(this._storage.registerRemoveFunc(this.id,s),this._removeFunc=!0)}destroy(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}get hitRate(){return this._hit/(this._hit+this._miss)}get storageSize(){return this._storage.size}getSize(t){return this._storage.getSize(this,t)}resetHitRate(){this._hit=this._miss=0}put(t,e,s,i=0){this._storage.put(this,t,e,s,i)}pop(t){const e=this._storage.pop(this,t);return void 0===e?++this._miss:++this._hit,e}get(t){const e=this._storage.get(this,t);return void 0===e?++this._miss:++this._hit,e}peek(t){return this._storage.peek(this,t)}updateSize(t,e,s){this._storage.updateSize(this,t,e,s)}clear(){this._storage.clear(this)}clearAll(){this._storage.clearAll()}get performanceInfo(){return this._storage.performanceInfo}resetStats(){this._storage.resetStats()}}class h{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"],this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs.filterInPlace((e=>e[0]!==t))}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,-1),this._checkSize()}getSize(t,e){const s=this._db.get(t.id+e);return s?.size??0}put(t,r,h,o,_){r=t.id+r;const a=this._db.get(r);if(a&&(this._size-=a.size,t.size-=a.size,this._db.delete(r),a.entry!==h&&this._notifyRemove(r,a.entry,a.size,i.ALL)),o>this._maxSize)return void this._notifyRemove(r,h,o,i.ALL);if(void 0===h)return void console.warn("Refusing to cache undefined entry ");if(!o||o<0)return console.warn(`Refusing to cache entry with size ${o} for key ${r}`),void this._notifyRemove(r,h,0,i.ALL);const c=1+Math.max(_,s)-e;this._db.set(r,new n(h,o,c)),this._size+=o,t.size+=o,this._checkSize()}updateSize(t,e,s,r){e=t.id+e;const h=this._db.get(e);if(h&&h.entry===s){for(this._size-=h.size,t.size-=h.size;r>this._maxSize;){const t=this._notifyRemove(e,s,r,i.SOME);if(!(null!=t&&t>0))return void this._db.delete(e);r=t}h.size=r,this._size+=r,t.size+=r,this._checkSize()}}pop(t,e){e=t.id+e;const s=this._db.get(e);if(s)return this._size-=s.size,t.size-=s.size,this._db.delete(e),++this._hit,s.entry;++this._miss}get(t,e){e=t.id+e;const s=this._db.get(e);if(void 0!==s)return this._db.delete(e),s.lives=s.lifetime,this._db.set(e,s),++this._hit,s.entry;++this._miss}peek(t,e){const s=this._db.get(t.id+e);return s?++this._hit:++this._miss,s?.entry}get performanceInfo(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},s={},i=new Array;this._db.forEach(((t,e)=>{const r=t.lifetime;i[r]=(i[r]||0)+t.size,this._users.forAll((i=>{const{id:r,name:h}=i;if(e.startsWith(r)){const e=s[h]||0;s[h]=e+t.size}}))}));const r={};this._users.forAll((t=>{const e=t.name;if("hitRate"in t&&"number"==typeof t.hitRate&&!isNaN(t.hitRate)&&t.hitRate>0){const i=s[e]||0;s[e]=i,r[e]=Math.round(100*t.hitRate)+"%"}else r[e]="0%"}));const h=Object.keys(s);h.sort(((t,e)=>s[e]-s[t])),h.forEach((e=>t[e]=Math.round(s[e]/2**20)+"MB / "+r[e]));for(let o=i.length-1;o>=0;--o){const s=i[o];s&&(t["Priority "+(o+e-1)]=Math.round(s/this._size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){const e=t.id;this._db.forEach(((t,s)=>{s.startsWith(e)&&(this._size-=t.size,this._db.delete(s),this._notifyRemove(s,t.entry,t.size,i.ALL))})),t.size=0}clearAll(){this._db.forEach(((t,e)=>this._notifyRemove(e,t.entry,t.size,i.ALL))),this._users.forAll((t=>t.size=0)),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(t,e,s,i){let r;return this._removeFuncs.some((h=>{if(t.startsWith(h[0])){const t=h[1](e,i,s);return"number"==typeof t&&(r=t),!0}return!1})),r}_checkSize(){this._users.forAll((t=>this._checkSizeLimits(t))),this._checkSizeLimits()}_checkSizeLimits(t){const e=t??this;if(e.maxSize<0||e.size<=e.maxSize)return;const s=t?.id;let i=!0;for(;i;){i=!1;for(const[r,h]of this._db)if(0===h.lifetime&&(!s||r.startsWith(s))){if(this._purgeItem(r,h,t),e.size<=.9*e.maxSize)return;i||=this._db.has(r)}}for(const[r,h]of this._db)if((!s||r.startsWith(s))&&(this._purgeItem(r,h,t),e.size<=.9*e.maxSize))return}_purgeItem(t,e,s=this._users.find((e=>t.startsWith(e.id)))){if(this._db.delete(t),e.lives<=1){this._size-=e.size,s&&(s.size-=e.size);const r=this._notifyRemove(t,e.entry,e.size,i.SOME);null!=r&&r>0&&(this._size+=r,s&&(s.size+=r),e.lives=e.lifetime,e.size=r,this._db.set(t,e))}else--e.lives,this._db.set(t,e)}}let o=0;class n{constructor(t,e,s){this.entry=t,this.size=e,this.lifetime=s,this.lives=s}}


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

/***/ "./node_modules/@arcgis/core/core/colorUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/colorUtils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrightnessThreshold: function() { return /* binding */ L; },
/* harmony export */   colorEquals: function() { return /* binding */ F; },
/* harmony export */   colorVectorEquals: function() { return /* binding */ J; },
/* harmony export */   colorVectorToColorAndOpacity: function() { return /* binding */ K; },
/* harmony export */   createUniqueColors: function() { return /* binding */ O; },
/* harmony export */   darken: function() { return /* binding */ E; },
/* harmony export */   desaturate: function() { return /* binding */ P; },
/* harmony export */   getColorLuminance: function() { return /* binding */ G; },
/* harmony export */   getColorTheme: function() { return /* binding */ U; },
/* harmony export */   getContrast: function() { return /* binding */ R; },
/* harmony export */   isRGB: function() { return /* binding */ c; },
/* harmony export */   multiplyOpacity: function() { return /* binding */ I; },
/* harmony export */   multiplyOpacityToUnitRGBA: function() { return /* binding */ N; },
/* harmony export */   toHSV: function() { return /* binding */ B; },
/* harmony export */   toLAB: function() { return /* binding */ C; },
/* harmony export */   toLCH: function() { return /* binding */ H; },
/* harmony export */   toRGB: function() { return /* binding */ A; },
/* harmony export */   unitRGBAFromColor: function() { return /* binding */ D; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(n){return"r"in n&&"g"in n&&"b"in n}function i(n){return"h"in n&&"s"in n&&"v"in n}function a(n){return"l"in n&&"a"in n&&"b"in n}function s(n){return"l"in n&&"c"in n&&"h"in n}function f(n){return"x"in n&&"y"in n&&"z"in n}const h=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],l=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function g(n,t){const r=[];let o,e;if(n[0].length!==t.length)throw new Error("dimensions do not match");const u=n.length,c=n[0].length;let i=0;for(o=0;o<u;o++){for(i=0,e=0;e<c;e++)i+=n[o][e]*t[e];r.push(i)}return r}function b(n){const t=[n.r/255,n.g/255,n.b/255].map((n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4)),r=g(h,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function M(n){const t=g(l,[n.x/100,n.y/100,n.z/100]).map((n=>{const t=n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function m(n){const t=[n.x/95.047,n.y/100,n.z/108.883].map((n=>n>(6/29)**3?n**(1/3):1/3*(29/6)**2*n+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function d(n){const t=n.l,r=[(t+16)/116+n.a/500,(t+16)/116,(t+16)/116-n.b/200].map((n=>n>6/29?n**3:3*(6/29)**2*(n-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function p(n){const t=n.l,r=n.a,o=n.b,e=Math.sqrt(r*r+o*o);let u=Math.atan2(o,r);return u=u>0?u:u+2*Math.PI,{l:t,c:e,h:u}}function w(n){const t=n.l,r=n.c,o=n.h;return{l:t,a:r*Math.cos(o),b:r*Math.sin(o)}}function x(n){return m(b(n))}function k(n){return M(d(n))}function y(n){return p(m(b(n)))}function v(n){return M(d(w(n)))}function j(n){const t=n.r,r=n.g,o=n.b,e=Math.max(t,r,o),u=e-Math.min(t,r,o);let c=e,i=0===u?0:e===t?(r-o)/u%6:e===r?(o-t)/u+2:(t-r)/u+4,a=0===u?0:u/c;return i<0&&(i+=6),i*=60,a*=100,c*=100/255,{h:i,s:a,v:c}}function z(n){const t=(n.h+360)%360/60,r=n.s/100,o=n.v/100*255,e=o*r,u=e*(1-Math.abs(t%2-1));let c;switch(Math.floor(t)){case 0:c={r:e,g:u,b:0};break;case 1:c={r:u,g:e,b:0};break;case 2:c={r:0,g:e,b:u};break;case 3:c={r:0,g:u,b:e};break;case 4:c={r:u,g:0,b:e};break;case 5:case 6:c={r:e,g:0,b:u};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+o-e),c.g=Math.round(c.g+o-e),c.b=Math.round(c.b+o-e),c}function A(n){return c(n)?n:s(n)?v(n):a(n)?k(n):f(n)?M(n):i(n)?z(n):n}function B(n){if(i(n))return n;return j(A(n))}function C(n){return a(n)?n:x(A(n))}function H(n){return s(n)?n:y(A(n))}function U(n){return q(n).isBright?"light":"dark"}function q(t){let{r,g:o,b:e,a:u}=t;return u<1&&(r=Math.round(u*r+255*(1-u)),o=Math.round(u*o+255*(1-u)),e=Math.round(u*e+255*(1-u))),new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]({r,g:o,b:e})}function G(n,t){const{r,g:o,b:e}=t?.ignoreAlpha?n:q(n);return.2126*r+.7152*o+.0722*e}var L;function R(t,r=L.High){return G(t,{ignoreAlpha:!0})>r?new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0,t.a]):new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255,255,255,t.a])}function E(n,t){const r=C(n);r.l*=1-t;const o=A(r),e=n.clone();return e.setColor(o),e.a=n.a,e}function I(n,t){const r=n.clone();return r.a*=t,r}function P(n,t){const r=B(n);r.s*=t;const o=A(r),e=n.clone();return e.setColor(o),e.a=n.a,e}function D(t){return _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].toUnitRGBA(t)}function F(n,t){return n===t||null!=n&&n.equals(t)}function J(n,t){return n===t||null!=n&&null!=t&&(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__.e)(n,t)}function K(n){return (0,_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(n[0],n[1],n[2],n.length>3?n[3]:1)}function N(t,r){const o=_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].toUnitRGBA(t);return o[3]*=r,o}function O(r,e,u={}){if(0===r.length||e<=0)return[];if(1===(r=r.map((t=>"string"==typeof t?new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](t):t))).length||1===e){const n=[],t=r[0];for(let r=0;r<e;r++)n.push(t.clone());return n}if(u.shuffle&&(r=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)((0,_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(r),u.seed)),r.length>=e){const n=[],t=(r.length-1)/(e-1);for(let o=0;o<e;o++){const e=Math.round(o*t);n.push(r[e].clone())}return n}return Q(r,e,u)}function Q(n,r,o={}){const e=[],u=n.length-1,c=Math.ceil((r-n.length)/u);n:for(let t=0;t<u;t++){const u=n[t],i=n[t+1];for(let t=1;t<=c;t++){const a=t/(c+1);if(e.push(T(u,i,a,o)),e.length+n.length===r)break n}}return[...n.map((n=>n.clone())),...(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)(e,o.seed??1)]}!function(n){n[n.Low=160]="Low",n[n.High=225]="High"}(L||(L={}));const S=(n,t)=>{const r=Math.floor(10*t())-5;return Math.min(255,Math.max(0,n+r))};function T(t,o,e,u={}){const c=t.r,i=t.g,a=t.b,s=o.r,f=o.g,h=o.b,l=Math.round(c+(s-c)*e),g=Math.round(i+(f-i)*e),b=Math.round(a+(h-a)*e);if(!u.offset)return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([l,g,b]);const M=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomNumberGenerator)(u.seed);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([S(l,M),S(g,M),S(b,M)])}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/TileClipper.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/TileClipper.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeometryType: function() { return /* binding */ i; },
/* harmony export */   Point: function() { return /* binding */ h; },
/* harmony export */   SimpleBuilder: function() { return /* binding */ _; },
/* harmony export */   TileClipper: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=512;var i,s;!function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon"}(i||(i={}));class h{constructor(t,i){this.x=t,this.y=i}clone(){return new h(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){return this.x=t,this.y=i,this}normalize(){const t=this.x,i=this.y,s=Math.sqrt(t*t+i*i);return this.x/=s,this.y/=s,this}rightPerpendicular(){const t=this.x;return this.x=this.y,this.y=-t,this}leftPerpendicular(){const t=this.x;return this.x=-this.y,this.y=t,this}move(t,i){return this.x+=t,this.y+=i,this}assign(t){return this.x=t.x,this.y=t.y,this}assignAdd(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}assignSub(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}rotate(t,i){const s=this.x,h=this.y;return this.x=s*t-h*i,this.y=s*i+h*t,this}scale(t){return this.x*=t,this.y*=t,this}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static distance(t,i){const s=i.x-t.x,h=i.y-t.y;return Math.sqrt(s*s+h*h)}static add(t,i){return new h(t.x+i.x,t.y+i.y)}static sub(t,i){return new h(t.x-i.x,t.y-i.y)}}class n{constructor(t,i,s){this.ratio=t,this.x=i,this.y=s}}class e{constructor(i,s,h,n=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=n,this._pixelMargin=e,this._tileSize=t*n,this._dz=i,this._yPos=s,this._xPos=h}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const s=t>>this._dz;i>s&&(i=s),this._margin=i,this._xmin=s*this._xPos-i,this._ymin=s*this._yPos-i,this._xmax=this._xmin+s+2*i,this._ymax=this._ymin+s+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new h(t,i),this._firstPt=new h(t,i),this._dist=0}lineTo(t,i){const s=this._isIn(t,i),e=new h(t,i),_=h.distance(this._prevPt,e);let x,l,y,a,r,o,u,m;if(s)this._prevIsIn?this._lineTo(t,i,!0):(x=this._prevPt,l=e,y=this._intersect(l,x),this._start=this._dist+_*(1-this._r),this._lineTo(y.x,y.y,!0),this._lineTo(l.x,l.y,!0));else if(this._prevIsIn)l=this._prevPt,x=e,y=this._intersect(l,x),this._lineTo(y.x,y.y,!0),this._lineTo(x.x,x.y,!1);else{const t=this._prevPt,i=e;if(t.x<=this._xmin&&i.x<=this._xmin||t.x>=this._xmax&&i.x>=this._xmax||t.y<=this._ymin&&i.y<=this._ymin||t.y>=this._ymax&&i.y>=this._ymax)this._lineTo(i.x,i.y,!1);else{const s=[];if((t.x<this._xmin&&i.x>this._xmin||t.x>this._xmin&&i.x<this._xmin)&&(a=(this._xmin-t.x)/(i.x-t.x),m=t.y+a*(i.y-t.y),m<=this._ymin?o=!1:m>=this._ymax?o=!0:s.push(new n(a,this._xmin,m))),(t.x<this._xmax&&i.x>this._xmax||t.x>this._xmax&&i.x<this._xmax)&&(a=(this._xmax-t.x)/(i.x-t.x),m=t.y+a*(i.y-t.y),m<=this._ymin?o=!1:m>=this._ymax?o=!0:s.push(new n(a,this._xmax,m))),(t.y<this._ymin&&i.y>this._ymin||t.y>this._ymin&&i.y<this._ymin)&&(a=(this._ymin-t.y)/(i.y-t.y),u=t.x+a*(i.x-t.x),u<=this._xmin?r=!1:u>=this._xmax?r=!0:s.push(new n(a,u,this._ymin))),(t.y<this._ymax&&i.y>this._ymax||t.y>this._ymax&&i.y<this._ymax)&&(a=(this._ymax-t.y)/(i.y-t.y),u=t.x+a*(i.x-t.x),u<=this._xmin?r=!1:u>=this._xmax?r=!0:s.push(new n(a,u,this._ymax))),0===s.length)r?o?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):o?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(s.length>1&&s[0].ratio>s[1].ratio)this._start=this._dist+_*s[1].ratio,this._lineTo(s[1].x,s[1].y,!0),this._lineTo(s[0].x,s[0].y,!0);else{this._start=this._dist+_*s[0].ratio;for(let t=0;t<s.length;t++)this._lineTo(s[t].x,s[t].y,!0)}this._lineTo(i.x,i.y,!1)}}this._dist+=_,this._prevIsIn=s,this._prevPt=e}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const s=this._line;let h=s.length;for(;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}}result(t=!0){return this._pushLine(),0===this._lines.length?null:(this._type===i.Polygon&&t&&x.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==i.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,s=t.length;if(0===s)return null;const h=[];for(let i=0;i<s;i++)h.push({line:t[i],start:this._starts[i]||0});return h}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let s,n,e;if(i.x>=this._xmin&&i.x<=this._xmax)n=i.y<=this._ymin?this._ymin:this._ymax,e=(n-t.y)/(i.y-t.y),s=t.x+e*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)s=i.x<=this._xmin?this._xmin:this._xmax,e=(s-t.x)/(i.x-t.x),n=t.y+e*(i.y-t.y);else{n=i.y<=this._ymin?this._ymin:this._ymax,s=i.x<=this._xmin?this._xmin:this._xmax;const h=(s-t.x)/(i.x-t.x),_=(n-t.y)/(i.y-t.y);h<_?(e=h,n=t.y+h*(i.y-t.y)):(e=_,s=t.x+_*(i.x-t.x))}return this._r=e,new h(s,n)}_pushLine(){this._line&&(this._type===i.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===i.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===i.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,s,n){this._type!==i.Polygon?n&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new h(t,s))):(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new h(t,s)),this._isH=!1,this._isV=!1)}_lineTo(t,s,n){let e,_;if(this._type!==i.Polygon)if(n){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(e=this._line[this._line.length-1],e.equals(t,s)))return;this._line.push(new h(t,s))}else this._line&&this._line.length>0&&this._pushLine();else if(n||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){e=this._line[this._line.length-1];const i=e.x===t,n=e.y===s;if(i&&n)return;this._isH&&i||this._isV&&n?(e.x=t,e.y=s,_=this._line[this._line.length-2],_.x===t&&_.y===s?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(_=this._line[this._line.length-2],this._isH=_.x===t,this._isV=_.y===s)):(this._isH=_.x===t,this._isV=_.y===s)):(this._line.push(new h(t,s)),this._isH=i,this._isV=n)}else this._line.push(new h(t,s))}}class _{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const s=this._ratio;this._line.push(new h(t*s,i*s))}lineTo(t,i){const s=this._ratio;this._line.push(new h(t*s,i*s))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(t){t[t.sideLeft=0]="sideLeft",t[t.sideRight=1]="sideRight",t[t.sideTop=2]="sideTop",t[t.sideBottom=3]="sideBottom"}(s||(s={}));class x{static simplify(t,i,h){if(!h)return;const n=-i,e=t+i,_=-i,l=t+i,y=[],a=[],r=h.length;for(let x=0;x<r;++x){const t=h[x];if(!t||t.length<2)continue;let i,r=t[0];const o=t.length;for(let h=1;h<o;++h)i=t[h],r.x===i.x&&(r.x<=n&&(r.y>i.y?(y.push(x),y.push(h),y.push(s.sideLeft),y.push(-1)):(a.push(x),a.push(h),a.push(s.sideLeft),a.push(-1))),r.x>=e&&(r.y<i.y?(y.push(x),y.push(h),y.push(s.sideRight),y.push(-1)):(a.push(x),a.push(h),a.push(s.sideRight),a.push(-1)))),r.y===i.y&&(r.y<=_&&(r.x<i.x?(y.push(x),y.push(h),y.push(s.sideTop),y.push(-1)):(a.push(x),a.push(h),a.push(s.sideTop),a.push(-1))),r.y>=l&&(r.x>i.x?(y.push(x),y.push(h),y.push(s.sideBottom),y.push(-1)):(a.push(x),a.push(h),a.push(s.sideBottom),a.push(-1)))),r=i}if(0===y.length||0===a.length)return;x.fillParent(h,a,y),x.fillParent(h,y,a);const o=[];x.calcDeltas(o,a,y),x.calcDeltas(o,y,a),x.addDeltas(o,h)}static fillParent(t,i,h){const n=h.length,e=i.length;for(let _=0;_<e;_+=4){const e=i[_],x=i[_+1],y=i[_+2],a=t[e][x-1],r=t[e][x];let o=8092,u=-1;for(let i=0;i<n;i+=4){if(h[i+2]!==y)continue;const n=h[i],e=h[i+1],_=t[n][e-1],x=t[n][e];switch(y){case s.sideLeft:case s.sideRight:if(l(a.y,_.y,x.y)&&l(r.y,_.y,x.y)){const t=Math.abs(x.y-_.y);t<o&&(o=t,u=i)}break;case s.sideTop:case s.sideBottom:if(l(a.x,_.x,x.x)&&l(r.x,_.x,x.x)){const t=Math.abs(x.x-_.x);t<o&&(o=t,u=i)}}}i[_+3]=u}}static calcDeltas(t,i,s){const h=i.length;for(let n=0;n<h;n+=4){const h=[],e=x.calcDelta(n,i,s,h);t.push(i[n]),t.push(i[n+1]),t.push(i[n+2]),t.push(e)}}static calcDelta(t,i,s,h){const n=i[t+3];if(-1===n)return 0;const e=h.length;return e>1&&h[e-2]===n?0:(h.push(n),x.calcDelta(n,s,i,h)+1)}static addDeltas(t,i){const h=t.length;let n=0;for(let s=0;s<h;s+=4){const i=t[s+3];i>n&&(n=i)}for(let e=0;e<h;e+=4){const h=i[t[e]],_=t[e+1],x=n-t[e+3];switch(t[e+2]){case s.sideLeft:h[_-1].x-=x,h[_].x-=x,1===_&&(h[h.length-1].x-=x),_===h.length-1&&(h[0].x-=x);break;case s.sideRight:h[_-1].x+=x,h[_].x+=x,1===_&&(h[h.length-1].x+=x),_===h.length-1&&(h[0].x+=x);break;case s.sideTop:h[_-1].y-=x,h[_].y-=x,1===_&&(h[h.length-1].y-=x),_===h.length-1&&(h[0].y-=x);break;case s.sideBottom:h[_-1].y+=x,h[_].y+=x,1===_&&(h[h.length-1].y+=x),_===h.length-1&&(h[0].y+=x)}}}}const l=(t,i,s)=>t>=i&&t<=s||t>=s&&t<=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/UintArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/UintArray.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newUintArray: function() { return /* binding */ n; },
/* harmony export */   uintSubArray: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n,e=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?e?new Array(n).fill(0):new Array(n):new Uint32Array(n)}function e(r,n,e){return Array.isArray(r)?r.slice(n,n+e):r.subarray(n,n+e)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/VectorTileLayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VectorTileLayer.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "./node_modules/@arcgis/core/layers/mixins/ArcGISService.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "./node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/imageUtils.js */ "./node_modules/@arcgis/core/layers/support/imageUtils.js");
/* harmony import */ var _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/SpriteSource.js */ "./node_modules/@arcgis/core/layers/support/SpriteSource.js");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/TilemapCache.js */ "./node_modules/@arcgis/core/layers/support/TilemapCache.js");
/* harmony import */ var _support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/vectorTileLayerLoader.js */ "./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js");
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../portal/support/jsonContext.js */ "./node_modules/@arcgis/core/portal/support/jsonContext.js");
/* harmony import */ var _portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../portal/support/urlUtils.js */ "./node_modules/@arcgis/core/portal/support/urlUtils.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/* harmony import */ var _views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/tileInfoUtils.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js");
/* harmony import */ var _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/style/StyleRepository.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js");
/* harmony import */ var _views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../views/webgl/capabilities.js */ "./node_modules/@arcgis/core/views/webgl/capabilities.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let B=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_20__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__.ScaleRangeLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__.RefreshableLayer)((0,_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_18__.ArcGISCachedService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_19__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_22__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__.PortalLayer)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_21__.CustomParametersMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_17__.APIKeyMixin)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_16__["default"]))))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.path=null,this.refreshInterval=0,this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this.primarySource?.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const r=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError).then((async()=>{if(!this.portalItem?.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},(0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_31__.createForItemRead)(this.portalItem,"portal-item"))})).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError).then((()=>this._loadStyle(e)));return this.addResolvingPromise(r),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e?.serviceUrl&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.urlToObject)(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryParameters)(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get initialExtent(){return this.primarySource?.initialExtent||null}get parsedUrl(){return this.serviceUrl?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.urlToObject)(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo?.serviceUrl||null}get spatialReference(){return this.tileInfo?.spatialReference??null}get styleUrl(){return this.currentStyleInfo?.styleUrl||null}writeStyleUrl(e,t){e&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.isProtocolRelative)(e)&&(e=`https:${e}`);const r=(0,_portal_support_urlUtils_js__WEBPACK_IMPORTED_MODULE_32__.parseKnownArcGISOnlineDomain)(e);t.styleUrl=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_33__.e)(e,r)}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"];if(e.length>1)for(let r=0;r<e.length;r++)(0,_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_34__.areSchemasOverlapping)(t,e[r].tileInfo)&&(t=(0,_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_34__.unionTileInfos)(t,e[r].tileInfo));return t}readTilemapCache(e,t){const r=t.capabilities?.includes("Tilemap");return r?new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_29__.TilemapCache({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=(0,_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_36__.getWebGLCapabilities)().maxTextureSize,i=this.currentStyleInfo?.spriteUrl?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryParameters)(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,o=new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_27__["default"]({type:"url",spriteUrl:i,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await o.load(t),this._spriteSourceMap.set(e,o)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=(0,_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_36__.getWebGLCapabilities)().maxTextureSize,i=e.spriteUrl,o=i?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.addQueryParameters)(i,{...this.customParameters,token:this.apiKey}):null;if(!o&&"url"===e.type)return null;const s=new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_27__["default"](e,r);try{await s.load(t);const r=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(r,s),o&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=o),this.emit("spriteSource-change",{spriteSource:s}),s}catch(a){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError)(a)}return null}async loadStyle(e,t){const i=e||this.style||this.url;return this._loadingTask&&"string"==typeof i&&this.url===i||(this._loadingTask?.abort(),this._loadingTask=(0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__.createTask)((e=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(i,{signal:e}))),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.styleRepository?.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||i})}getStyleLayer(e){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await (0,_support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_30__.loadMetadata)(e,{...t,query:{...this.customParameters,token:this.apiKey}});if("webp"===r.spriteFormat){await (0,_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_26__.checkWebPSupport)("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_35__["default"](r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^/]+)?\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/vectortileserver/i),r=["OpenBasemap_v2","OpenBasemap_GCS_v2","OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2","World_Hillshade_v2"];if(!t)return;const i=t[2]&&t[2].toLowerCase();if(!i)return;const o=t[1]||"";for(const s of r)if(s.toLowerCase().includes(i))return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__.normalize)(`//static.arcgis.com/attribution/Vector${o}/${s}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"attributionDataUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{read:!0,write:!0}})],B.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0,json:{read:!1}})],B.prototype,"capabilities",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"currentStyleInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{read:!1},readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],B.prototype,"fullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{read:!1},readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],B.prototype,"initialExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],B.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:["VectorTileLayer"]})],B.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"parsedUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],B.prototype,"path",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:Number,json:{write:!1,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],B.prototype,"refreshInterval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()],B.prototype,"style",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"serviceUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"],readOnly:!0})],B.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"styleRepository",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"sourceNameToSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"primarySource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],B.prototype,"styleUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__.writer)(["portal-item","web-document"],"styleUrl")],B.prototype,"writeStyleUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"]})],B.prototype,"tileInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()],B.prototype,"tilemapCache",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("service","tilemapCache",["capabilities","tileInfo"])],B.prototype,"readTilemapCache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{read:!1},readOnly:!0,value:"vector-tile"})],B.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],B.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0})],B.prototype,"version",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("version",["version","currentVersion"])],B.prototype,"readVersion",null),B=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.VectorTileLayer")],B);const A=B;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIKeyMixin: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(e){return"portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):s(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISCachedService: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _support_TileInfoTilemapCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/TileInfoTilemapCache.js */ "./node_modules/@arcgis/core/layers/support/TileInfoTilemapCache.js");
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/TilemapCache.js */ "./node_modules/@arcgis/core/layers/support/TilemapCache.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=p=>{let n=class extends p{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,o){return null!=o.minLOD&&null!=o.maxLOD?e:0}readMaxScale(e,o){return null!=o.minLOD&&null!=o.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,o,r){const t=o.capabilities?.includes("Tilemap");let{minLOD:a,maxLOD:p,minScale:n,maxScale:c}=o;if(null==a&&null==p&&0!==n&&0!==c){const e=e=>Math.round(1e4*e)/1e4;n=e(n||o.tileInfo.lods[0].scale),c=e(c||o.tileInfo.lods[o.tileInfo.lods.length-1].scale);for(const r of o.tileInfo.lods){const o=e(r.scale);a=o>=n?r.level:a,p=o>=c?r.level:p}}if(t)return new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_10__.TilemapCache({layer:this,minLOD:a,maxLOD:p});if(o.tileInfo){const e=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"];return e.read(o.tileInfo,r),new _support_TileInfoTilemapCache_js__WEBPACK_IMPORTED_MODULE_9__["default"](e,a,p)}return null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{source:"copyrightText"}}})],n.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],n.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service","minScale")],n.prototype,"readMinScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],n.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service","maxScale")],n.prototype,"readMaxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],n.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],n.prototype,"supportsBlankTile",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]})],n.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],n.prototype,"tilemapCache",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service","tilemapCache",["capabilities","tileInfo"])],n.prototype,"readTilemapCache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],n.prototype,"version",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.mixins.ArcGISCachedService")],n),n};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/ArcGISService.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArcGISService: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__.parse)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__.sanitizeUrl)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomParametersMixin: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:Object,json:{write:{overridePolicy:r=>({enabled:!!(r&&Object.keys(r).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.mixins.CustomParametersMixin")],t),t};


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

/***/ "./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshableLayer: function() { return /* binding */ f; },
/* harmony export */   isRefreshableLayer: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/layerContainerType.js */ "./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js");
/* harmony import */ var _refresh_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./refresh.js */ "./node_modules/@arcgis/core/layers/mixins/refresh.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function m(e){return null!=e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}const c=.1,f=m=>{let f=class extends m{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.debounce)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||(0,_refresh_js__WEBPACK_IMPORTED_MODULE_9__.registerLayer)(this)}),(()=>{}))}destroy(){(0,_refresh_js__WEBPACK_IMPORTED_MODULE_9__.unregisterLayer)(this)}castRefreshInterval(e){return e>=c?e:e<=0?0:c}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.ignoreAbortErrors)(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r})}),(e=>{_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_8__.excludeTables}}}}})],f.prototype,"refreshInterval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("refreshInterval")],f.prototype,"castRefreshInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],f.prototype,"refreshTimestamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],f.prototype,"refreshParameters",null),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.mixins.RefreshableLayer")],f),f};


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

/***/ "./node_modules/@arcgis/core/layers/mixins/refresh.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/refresh.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerLayer: function() { return /* binding */ f; },
/* harmony export */   test: function() { return /* binding */ h; },
/* harmony export */   unregisterLayer: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/trackingUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__["default"],o=new WeakMap;function f(e){i(e)&&n.push(new WeakRef(e))}function s(e){const r=n.find((r=>r.deref()===e));r&&n.remove(r)}function i(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function c(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:c(r,e%r):0}let l=0,a=0;function u(){const e=Date.now();let r=!1;for(const t of n){const n=t.deref();if(n){if(n.refreshInterval){e-(o.get(n)??0)+5>=6e4*n.refreshInterval&&(o.set(n,e),n.refresh(e))}}else r=!0}if(r)for(let t=n.length-1;t>=0;t--){n.at(t).deref()||n.removeAt(t)}}(0,_core_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_2__.autorun)((()=>{const e=Date.now();let r=0;for(const t of n){const n=t.deref();n&&(r=c(Math.round(6e4*n.refreshInterval),r),n.refreshInterval?o.get(n)||o.set(n,e):o.delete(n))}if(r!==a){if(a=r,clearInterval(l),0===a)return void(l=0);l=setInterval(u,a)}}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_1__.sync);const h={get hasRefreshTimer(){return l>0},get tickInterval(){return a},forceRefresh(){u()},hasLayer:e=>i(e)&&n.some((r=>r.deref()===e)),clear(){for(const e of n){const r=e.deref();r&&o.delete(r)}n.removeAll()}};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/LOD.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LOD.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new i({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"cols",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.Integer,json:{write:!0}})],l.prototype,"level",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],l.prototype,"levelValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],l.prototype,"resolution",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"rows",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],l.prototype,"scale",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.LOD")],l);const p=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/SpriteSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SpriteSource.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const h=1.15;class n{constructor(t,e){this._spriteSource=t,this._maxTextureSize=e,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded","url"===t.type&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>h;const{width:s,height:r,data:a,json:o}=await this._getSpriteData(this._spriteSource,t),n=Object.keys(o);if(!n||0===n.length||!a)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=s,this.height=r;const d=Math.max(this._maxTextureSize,4096);if(s>d||r>d){const t=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${d} pixels}`;throw _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.SpriteSource").error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource",t)}let p;for(let e=0;e<a.length;e+=4)p=a[e+3]/255,a[e]=a[e]*p,a[e+1]=a[e+1]*p,a[e+2]=a[e+2]*p;this.image=a}async _getSpriteData(i,n){if("image"===i.type){let t,a;if(this.devicePixelRatio<h){if(!i.spriteSource1x)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource","no image data provided for low resolution sprites!");t=i.spriteSource1x.image,a=i.spriteSource1x.json}else{if(!i.spriteSource2x)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource","no image data provided for high resolution sprites!");t=i.spriteSource2x.image,a=i.spriteSource2x.json}return"width"in t&&"height"in t&&"data"in t&&((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isArrayBuffer)(t.data)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isUint8ClampedArray)(t.data))?{width:t.width,height:t.height,data:new Uint8Array(t.data),json:a}:{...d(t),json:a}}const p=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(this.baseURL),l=p.query?"?"+(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.objectToQuery)(p.query):"",g=this._isRetina?"@2x":"",u=`${p.path}${g}.${this._spriteImageFormat}${l}`,c=`${p.path}${g}.json${l}`,[m,S]=await Promise.all([(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(c,n),(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(u,{responseType:"image",...n})]);return{...d(S.data),json:m.data}}}function d(t){const e=document.createElement("canvas"),i=e.getContext("2d");e.width=t.width,e.height=t.height,i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height);return{width:t.width,height:t.height,data:new Uint8Array(s.data)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TileInfo.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TileInfo.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ z; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _LOD_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LOD.js */ "./node_modules/@arcgis/core/layers/support/LOD.js");
/* harmony import */ var _TileKey_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TileKey.js */ "./node_modules/@arcgis/core/layers/support/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var w;const x=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let j=w=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{static create(e={}){const{resolutionFactor:t=1,scales:o,size:r=256,spatialReference:i=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].WebMercator,numLODs:l=24}=e;if(!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.isValid)(i)){const e=[];if(o)for(let t=0;t<o.length;t++){const s=o[t];e.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:t,scale:s,resolution:s}))}else{let t=5e-4;for(let o=l-1;o>=0;o--)e.unshift(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:o,scale:t,resolution:t})),t*=2}return new w({dpi:96,lods:e,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](0,0,i),size:[r,r],spatialReference:i})}const n=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.getInfo)(i),p=e.origin?new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:e.origin.x,y:e.origin.y,spatialReference:i}):new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](n?{x:n.origin[0],y:n.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),u=96,d=1/((0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.getMetersPerUnitForSR)(i)*39.37*u),g=[];if(o)for(let s=0;s<o.length;s++){const e=o[s],t=e*d;g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:s,scale:e,resolution:t}))}else{let e=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.isGeographic)(i)?512/r*591657527.5917094:256/r*591657527.591555;const o=Math.ceil(l/t);g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:0,scale:e,resolution:e*d}));for(let s=1;s<o;s++){const o=e/2**t,r=o*d;g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:s,scale:o,resolution:r})),e=o}}return new w({dpi:u,lods:g,origin:p,size:[r,r],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.getInfo)(e);return e.isWrappable&&!!o&&Math.abs(o.origin[0]-t.x)<=o.dx}return!1}readOrigin(e,t){return _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const s=[],r=this._levelToLOD={};e&&(t=-1/0,o=1/0,e.forEach((e=>{s.push(e.scale),t=e.scale>t?e.scale:t,o=e.scale<o?e.scale:o,r[e.level]=e}))),this._set("scales",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const o=Math.floor(e),s=o+1;return t[o]/(t[o]/t[s])**(e-o)}scaleToZoom(e){const t=this.scales,o=t.length-1;let s=0;for(;s<o;s++){const o=t[s],r=t[s+1];if(o<=e)return s;if(r===e)return s+1;if(o>e&&r<e)return s+Math.log(o/e)/Math.log(o/r)}return s}tileAt(e,t,o,s){const r=this.lodAt(e);if(!r)return null;let i,l;if("number"==typeof t)i=t,l=o;else if((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.equals)(t.spatialReference,this.spatialReference))i=t.x,l=t.y,s=o;else{const e=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_15__.project)(t,this.spatialReference);if(null==e)return null;i=e.x,l=e.y,s=o}const n=r.resolution*this.size[0],p=r.resolution*this.size[1];return s||(s=new _TileKey_js__WEBPACK_IMPORTED_MODULE_17__.TileKey(null,0,0,0,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.create)())),s.level=e,s.row=Math.floor((this.origin.y-l)/p+.001),s.col=Math.floor((i-this.origin.x)/n+.001),this.updateTileInfo(s),s}updateTileInfo(e,t=w.ExtrapolateOptions.NONE){let o=this.lodAt(e.level);if(!o&&t===w.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(o=t)}if(!o)return;const s=e.level-o.level,r=o.resolution*this.size[0]/2**s,i=o.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.create)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const o=this.lodAt(t.level);if(null==o)return null;const{resolution:s}=o,r=s*this.size[0],i=s*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+r,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return w.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const o=[],s=this.lods.length-t;for(let r=0;r<s;r++){const e=r+t,{scale:s,resolution:i}=e>=0?this.lods[e]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};o.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:r,scale:s,resolution:i}))}return new w({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:o})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const s=e[o];this._upsampleLevels[s.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/s.resolution:0},t=s}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],j.prototype,"compressionQuality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],j.prototype,"dpi",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{read:x.read,write:x.write,origins:{"web-scene":{read:!1,write:!1}}}})],j.prototype,"format",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],j.prototype,"isWrappable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:!0}})],j.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("origin")],j.prototype,"readOrigin",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]],value:null,json:{write:!0}})],j.prototype,"lods",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],j.prototype,"scales",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],j.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("size",["rows","cols"])],j.prototype,"readSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("size",{cols:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer},rows:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer}})],j.prototype,"writeSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:!0}})],j.prototype,"spatialReference",void 0),j=w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.TileInfo")],j),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(j||(j={}));const z=j;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TileInfoTilemapCache.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TileInfoTilemapCache.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(l,t=0,i=l.lods[l.lods.length-1].level){this.tileInfo=l,this.minLOD=t,this.maxLOD=i,l.lodAt(t)||(this.minLOD=l.lods[0].level),l.lodAt(i)||(this.maxLOD=l.lods[l.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(l,t,i){const e=this.tileInfo?.lodAt(l);return!e||l<this.minLOD||l>this.maxLOD?"unavailable":e.cols&&e.rows?i>=e.cols[0]&&i<=e.cols[1]&&t>=e.rows[0]&&t<=e.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(i,e,o,s){await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.waitTick)(s);const a=this.getAvailability(i,e,o);if("unavailable"===a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("tile-map:tile-unavailable","Tile is not available",{level:i,row:e,col:o});return a}async fetchAvailabilityUpsample(l,e,o,s,a){await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.waitTick)(a),s.level=l,s.row=e,s.col=o;const n=this.tileInfo;return n.updateTileInfo(s),this.fetchAvailability(l,e,o,a).catch((l=>{if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.isAbortError)(l))throw l;if(n.upsampleTile(s))return this.fetchAvailabilityUpsample(s.level,s.row,s.col,s,a);throw l}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TileKey.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TileKey.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileKey: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,o,e=void 0){this.id=t,this.level=s,this.row=i,this.col=o,this.extent=e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/Tilemap.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/Tilemap.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tilemap: function() { return /* binding */ l; },
/* harmony export */   tilemapDefinitionId: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _geometry_support_UintArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/UintArray.js */ "./node_modules/@arcgis/core/geometry/support/UintArray.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l{constructor(t){s(t);const{location:i,data:l}=t;this.location=Object.freeze((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(i));const r=this.location.width,n=this.location.height;let h=!0,c=!0;const m=Math.ceil(r*n/32),f=(0,_geometry_support_UintArray_js__WEBPACK_IMPORTED_MODULE_4__.newUintArray)(m);let w=0;for(let e=0;e<l.length;e++){const t=e%32;l[e]?(c=!1,f[w]|=1<<t):h=!1,31===t&&++w}c?(this._availability="unavailable",this.byteSize=40):h?(this._availability="available",this.byteSize=40):(this._availability=f,this.byteSize=40+(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.estimateSize)(f))}getAvailability(t,i){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%32,o=e>>5,l=this._availability;return o<0||o>l.length?"unknown":l[o]&1<<a?"available":"unavailable"}static fromDefinition(e,a){const o=e.service.request||_request_js__WEBPACK_IMPORTED_MODULE_0__["default"],{row:r,col:s,width:h,height:c}=e,m={query:{f:"json"}};return a=a?{...m,...a}:m,o(n(e),a).then((t=>t.data)).catch((t=>{if(422===t?.details?.httpStatus)return{location:{top:r,left:s,width:h,height:c},valid:!0,data:new Array(h*c).fill(0)};throw t})).then((t=>{if(t.location&&(t.location.top!==r||t.location.left!==s||t.location.width!==h||t.location.height!==c))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:r,left:s,width:h,height:c}});return l.fromJSON(t)}))}static fromJSON(t){return Object.freeze(new l(t))}}function r(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if(t.service.tileServers?.length){const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}else i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;const e=t.service.query;return e&&(i=`${i}?${e}`),i}function s(t){if(!t?.location)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TilemapCache.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TilemapCache.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TilemapCache: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_ByteSizeUnit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/ByteSizeUnit.js */ "./node_modules/@arcgis/core/core/ByteSizeUnit.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/LRUCache.js */ "./node_modules/@arcgis/core/core/LRUCache.js");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/scheduling.js */ "./node_modules/@arcgis/core/core/scheduling.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _TileKey_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TileKey.js */ "./node_modules/@arcgis/core/layers/support/TileKey.js");
/* harmony import */ var _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Tilemap.js */ "./node_modules/@arcgis/core/layers/support/Tilemap.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var j;function w(e,t,i){return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})}let T=j=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(e),this._pendingTilemapRequests={},this.request=_request_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_7__.LRUCache(2*_core_ByteSizeUnit_js__WEBPACK_IMPORTED_MODULE_3__.ByteSizeUnit.MEGABYTES),this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__.watch)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_10__.initial))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(w(e,t,i)):this._fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.Tilemap){const s=r.getAvailability(t,i);if("unavailable"===s)throw w(e,t,i);return s}if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAbortError)(r))throw r;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,r,s){r.level=e,r.row=t,r.col=i;const l=this.layer.tileInfo;l.updateTileInfo(r);const o=this.fetchAvailability(e,t,i,s).catch((e=>{if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAbortError)(e))throw e;if(l.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,s);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,s,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,i,r,s,o){if(!this._prefetchingEnabled||null==e)return;const a=`prefetch-${e}`;if(this.hasHandles(a))return;const n=new AbortController;o.then((()=>n.abort()),(()=>n.abort()));let h=!1;const p=(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_5__.makeHandle)((()=>{h||(h=!0,n.abort())}));if(this.addHandles(p,a),await (0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_11__.waitTicks)(10,n.signal).catch((()=>{})),h||(h=!0,this.removeHandles(a)),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.isAborted)(n))return;const m=new _TileKey_js__WEBPACK_IMPORTED_MODULE_17__.TileKey(e,t,i,r),f={...s,signal:n.signal},v=this.layer.tileInfo;for(let l=0;j._prefetches.length<j._maxPrefetch&&v.upsampleTile(m);++l){const e=this.fetchAvailability(m.level,m.row,m.col,f);j._prefetches.push(e);const t=()=>{j._prefetches.removeUnordered(e)};e.then(t,t)}}_fetchTilemap(e,t,i,r){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,i,l);if(o)return Promise.resolve(o);const a=r?.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.onAbort)(a,(()=>t((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__.createAbortError)())));const i=(0,_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.tilemapDefinitionId)(l);let s=this._pendingTilemapRequests[i];if(!s){s=_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.Tilemap.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_12__.objectToQuery)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const s=(0,_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__.tilemapDefinitionId)(r);return this._tilemapCache.get(s)}get test(){}};T._maxPrefetch=4,T._prefetches=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]({initialSize:j._maxPrefetch}),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({constructOnly:!0})],T.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({constructOnly:!0})],T.prototype,"minLOD",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({constructOnly:!0})],T.prototype,"maxLOD",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({constructOnly:!0})],T.prototype,"request",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_13__.property)({constructOnly:!0})],T.prototype,"size",void 0),T=j=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__.subclass)("esri.layers.support.TilemapCache")],T);


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

/***/ "./node_modules/@arcgis/core/layers/support/imageUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/imageUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkWebPSupport: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let A=null;function o(o){if(A)return A;const l={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return A=new Promise((A=>{const n=new Image;n.onload=()=>{n.onload=n.onerror=null,A(n.width>0&&n.height>0)},n.onerror=()=>{n.onload=n.onerror=null,A(!1)},n.src="data:image/webp;base64,"+l[o]})),A}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMetadata: function() { return /* binding */ x; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/2d/engine/vectorTiles/style/VectorTileSource.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function x(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[o,s]="string"==typeof e?[e,null]:[null,e.jsonUrl];await S(r,"esri",e,s,t);return{layerDefinition:r.validatedSource,url:o,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&d(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&d(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function d(...e){let t;for(const r of e)if(null!=r)if((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isProtocolRelative)(r)){if(t){const e=t.split("://")[0];t=e+":"+r.trim()}}else t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbsolute)(r)?r:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.join)(t,r);return t?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeTrailingSlash)(t):void 0}async function S(t,o,s,l,n){let u,c,a;if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(n),"string"==typeof s){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalize)(s);a=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{...n,responseType:"json",query:{f:"json",...n?.query}}),a.ssl&&(u&&(u=u.replace(/^http:/i,"https:")),c&&(c=c.replace(/^http:/i,"https:"))),u=t,c=t}else null!=s&&(a={data:s},u=s.jsonUrl||null,c=l);const f=a?.data;if(w(f))return t.styleUrl=u||null,j(t,f,c,n);if(U(f))return t.sourceUrl?g(t,f,c,!1,o,n):(t.sourceUrl=u||null,g(t,f,c,!0,o,n));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function h(e){return"object"==typeof e&&!!e&&"tilejson"in e&&null!=e.tilejson}function w(e){return!!e&&"sources"in e&&!!e.sources}function U(e){return!w(e)}async function j(e,t,r,o){const s=r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeFile)(r):(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.getAppBaseUrl)();e.styleBase=s,e.style=t,t["sprite-format"]&&"webp"===t["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(t.sources&&t.sources.esri){const r=t.sources.esri;r.url?await S(e,"esri",d(s,r.url),void 0,o):l.push(S(e,"esri",r,s,o))}for(const n of Object.keys(t.sources))"esri"!==n&&"vector"===t.sources[n].type&&(t.sources[n].url?l.push(S(e,n,d(s,t.sources[n].url),void 0,o)):t.sources[n].tiles&&l.push(S(e,n,t.sources[n],s,o)));await Promise.all(l)}async function g(e,t,r,o,s,l){const i=r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeTrailingSlash)(r)+"/":(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.getAppBaseUrl)(),u=v(t),f=new _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_6__["default"](s,(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.addQueryParameters)(i,l?.query??{}),u);if(!o&&e.primarySourceName in e.sourceNameToSource){const t=e.sourceNameToSource[e.primarySourceName];if(!t.isCompatibleWith(f))return;null!=f.fullExtent&&(null!=t.fullExtent?t.fullExtent.union(f.fullExtent):t.fullExtent=f.fullExtent.clone()),t.tileInfo&&f.tileInfo&&t.tileInfo.lods.length<f.tileInfo.lods.length&&(t.tileInfo=f.tileInfo)}if(o&&(e.sourceBase=i,e.source=t,e.validatedSource=u,e.primarySourceName=s),e.sourceNameToSource[s]=f,!h(e)&&"defaultStyles"in t&&!e.style){if(null==t.defaultStyles)throw new Error;return"string"==typeof t.defaultStyles?S(e,"",d(i,t.defaultStyles,"root.json"),void 0,l):S(e,"",t.defaultStyles,d(i,"root.json"),l)}}function v(e){const r=512;if(N(e)){const t=e?.tileInfo;return null!=t&&(null==t.rows&&(t.rows=r),null==t.cols&&(t.cols=r)),e}const o={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100,latestWkid:3857}};let s=null;if(h(e)){const{bounds:r}=e;if(r){const e=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.geographicToWebMercator)({x:r[0],y:r[1],spatialReference:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.wgs84)}),o=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__.geographicToWebMercator)({x:r[2],y:r[3],spatialReference:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.wgs84)});s={xmin:e.x,ymin:e.y,xmax:o.x,ymax:o.y,spatialReference:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.webMercator)}}}null===s&&(s=o);let l=78271.51696400007,n=295828763.7957775;const i=[],u=e.hasOwnProperty("maxzoom")&&null!=e.maxzoom?+e.maxzoom:22,c=0,a=0;for(let t=0;t<=u;t++)i.push({level:t,scale:n,resolution:l}),l/=2,n/=2;return{capabilities:"TilesOnly",initialExtent:s,fullExtent:o,minScale:c,maxScale:a,tiles:e.tiles,tileInfo:{rows:r,cols:r,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:i,spatialReference:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.webMercator)}}}function N(e){return e.hasOwnProperty("tileInfo")}


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/jsonContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForItemRead: function() { return /* binding */ e; },
/* harmony export */   createForItemWrite: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),portalItem:e}}


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

/***/ "./node_modules/@arcgis/core/symbols/cim/enums.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/enums.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alignment: function() { return /* binding */ i; },
/* harmony export */   AngleAlignment: function() { return /* binding */ c; },
/* harmony export */   AnimatedSymbolEasingType: function() { return /* binding */ s; },
/* harmony export */   AnimatedSymbolRepeatType: function() { return /* binding */ d; },
/* harmony export */   BalloonCalloutStyle: function() { return /* binding */ p; },
/* harmony export */   BillBoardMode: function() { return /* binding */ m; },
/* harmony export */   BlendingMode: function() { return /* binding */ C; },
/* harmony export */   BlockProgression: function() { return /* binding */ T; },
/* harmony export */   CGAAttributeType: function() { return /* binding */ S; },
/* harmony export */   CapType: function() { return /* binding */ e; },
/* harmony export */   ClippingType: function() { return /* binding */ h; },
/* harmony export */   DominantSizeAxis: function() { return /* binding */ f; },
/* harmony export */   ExpressionReturnType: function() { return /* binding */ G; },
/* harmony export */   ExternalColorMixMode: function() { return /* binding */ t; },
/* harmony export */   ExtremityPlacement: function() { return /* binding */ r; },
/* harmony export */   FillMode: function() { return /* binding */ o; },
/* harmony export */   FontEffects: function() { return /* binding */ l; },
/* harmony export */   FontEncoding: function() { return /* binding */ a; },
/* harmony export */   FontType: function() { return /* binding */ u; },
/* harmony export */   GeometricEffectArrowType: function() { return /* binding */ P; },
/* harmony export */   GeometricEffectControlMeasureLineRule: function() { return /* binding */ R; },
/* harmony export */   GeometricEffectDonutMethod: function() { return /* binding */ B; },
/* harmony export */   GeometricEffectEnclosingPolygonMethod: function() { return /* binding */ L; },
/* harmony export */   GeometricEffectExtensionOrigin: function() { return /* binding */ O; },
/* harmony export */   GeometricEffectOffsetMethod: function() { return /* binding */ N; },
/* harmony export */   GeometricEffectOffsetOption: function() { return /* binding */ M; },
/* harmony export */   GeometricEffectOffsetTangentMethod: function() { return /* binding */ A; },
/* harmony export */   GeometricEffectWaveform: function() { return /* binding */ E; },
/* harmony export */   GlyphHinting: function() { return /* binding */ y; },
/* harmony export */   GradientAlignment: function() { return /* binding */ D; },
/* harmony export */   GradientFillMethod: function() { return /* binding */ F; },
/* harmony export */   GradientStrokeMethod: function() { return /* binding */ v; },
/* harmony export */   GradientStrokeType: function() { return /* binding */ W; },
/* harmony export */   HorizontalAlignment: function() { return /* binding */ x; },
/* harmony export */   JoinType: function() { return /* binding */ n; },
/* harmony export */   LeaderLineStyle: function() { return /* binding */ k; },
/* harmony export */   LineCapStyle: function() { return /* binding */ U; },
/* harmony export */   LineDashEnding: function() { return /* binding */ b; },
/* harmony export */   LineDecorationStyle: function() { return /* binding */ H; },
/* harmony export */   LineGapType: function() { return /* binding */ I; },
/* harmony export */   LineJoinStyle: function() { return /* binding */ w; },
/* harmony export */   MarkerPlacementType: function() { return /* binding */ J; },
/* harmony export */   MaterialMode: function() { return /* binding */ q; },
/* harmony export */   PlacementClip: function() { return /* binding */ X; },
/* harmony export */   PlacementEndings: function() { return /* binding */ Y; },
/* harmony export */   PlacementGridType: function() { return /* binding */ Z; },
/* harmony export */   PlacementOnLineRelativeTo: function() { return /* binding */ K; },
/* harmony export */   PlacementPolygonCenterMethod: function() { return /* binding */ Q; },
/* harmony export */   PlacementRandomlyAlongLineRandomization: function() { return /* binding */ V; },
/* harmony export */   PlacementStepPosition: function() { return /* binding */ j; },
/* harmony export */   PointSymbolCalloutScale: function() { return /* binding */ z; },
/* harmony export */   RotationOrder: function() { return /* binding */ g; },
/* harmony export */   Simple3DLineStyle: function() { return /* binding */ $; },
/* harmony export */   SizeVariationMethod: function() { return /* binding */ _; },
/* harmony export */   SymbolUnits: function() { return /* binding */ ee; },
/* harmony export */   TextCase: function() { return /* binding */ ne; },
/* harmony export */   TextReadingDirection: function() { return /* binding */ ie; },
/* harmony export */   TextureFilter: function() { return /* binding */ te; },
/* harmony export */   VerticalAlignment: function() { return /* binding */ re; },
/* harmony export */   VerticalGlyphOrientation: function() { return /* binding */ oe; },
/* harmony export */   WaterbodySize: function() { return /* binding */ le; },
/* harmony export */   WaveStrength: function() { return /* binding */ ae; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e,n,i,t,r,o,l,a,u,c,d,s,f,g,p,C,T,m,S,h,P,R,B,L,O,N,M,A,E,y,D,F,W,v,x,k,U,b,H,I,w,G,J,q,X,Y,Z,K,Q,V,j,z,$,_,ee,ne,ie,te,re,oe,le,ae;!function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(e||(e={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(n||(n={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(i||(i={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(t||(t={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(r||(r={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(o||(o={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(a||(a={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(u||(u={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(c||(c={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(d||(d={})),function(e){e.Linear="Linear",e.EaseIn="EaseIn",e.EaseOut="EaseOut",e.EaseInOut="EaseInOut"}(s||(s={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(f||(f={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(g||(g={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(C||(C={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(T||(T={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(m||(m={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(S||(S={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(h||(h={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(P||(P={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees",e.TipWithPerpendicularAndTicks="TipWithPerpendicularAndTicks",e.ConcentricCircles="ConcentricCircles",e.DoubleJogArrow="DoubleJogArrow",e.LinkedChevrons="LinkedChevrons",e.SegmentThenHalfCircle="SegmentThenHalfCircle",e.LineWithStraightTicks="LineWithStraightTicks",e.DoubleCurve="DoubleCurve",e.ParallelWithTicksByWidth="ParallelWithTicksByWidth",e.EnclosingRoundedRectangle="EnclosingRoundedRectangle"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(B||(B={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(L||(L={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(O||(O={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(N||(N={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(M||(M={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(A||(A={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(E||(E={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(y||(y={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(D||(D={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(F||(F={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(W||(W={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(v||(v={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(x||(x={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(k||(k={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(U||(U={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(b||(b={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(H||(H={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(I||(I={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(w||(w={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(G||(G={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(J||(J={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(q||(q={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(X||(X={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(Y||(Y={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(Z||(Z={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(K||(K={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(Q||(Q={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(V||(V={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(j||(j={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(z||(z={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}($||($={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(_||(_={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ee||(ee={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ne||(ne={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ie||(ie={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(te||(te={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(re||(re={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(oe||(oe={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(le||(le={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ae||(ae={}));


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

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   between: function() { return /* binding */ g; },
/* harmony export */   c2pi: function() { return /* binding */ e; },
/* harmony export */   cDegTo256: function() { return /* binding */ u; },
/* harmony export */   cDegToRad: function() { return /* binding */ s; },
/* harmony export */   cInfinity: function() { return /* binding */ r; },
/* harmony export */   cPi: function() { return /* binding */ o; },
/* harmony export */   cRadTo256: function() { return /* binding */ i; },
/* harmony export */   degToByte: function() { return /* binding */ l; },
/* harmony export */   distanceFromToPolylineWithinThreshold: function() { return /* binding */ N; },
/* harmony export */   getTileMargins: function() { return /* binding */ d; },
/* harmony export */   interpolate: function() { return /* binding */ p; },
/* harmony export */   isCircleOverlapingRect: function() { return /* binding */ w; },
/* harmony export */   log2: function() { return /* binding */ h; },
/* harmony export */   offsetLine: function() { return /* binding */ P; },
/* harmony export */   pointInPolygon: function() { return /* binding */ I; },
/* harmony export */   positiveMod: function() { return /* binding */ a; },
/* harmony export */   radToByte: function() { return /* binding */ f; },
/* harmony export */   sqr: function() { return /* binding */ m; },
/* harmony export */   translateAnchor: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/coordsUtils.js */ "./node_modules/@arcgis/core/geometry/support/coordsUtils.js");
/* harmony import */ var _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/TileClipper.js */ "./node_modules/@arcgis/core/geometry/support/TileClipper.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r=Number.POSITIVE_INFINITY,o=Math.PI,e=2*o,i=128/o,u=256/360,s=o/180,c=1/Math.LN2;function a(t,n){return(t%=n)>=0?t:t+n}function f(t){return a(t*i,256)}function l(t){return a(t*u,256)}function h(t){return Math.log(t)*c}function m(t){return t*t}function p(t,n,r){return t*(1-r)+n*r}function g(t,n,r){return t>=n&&t<=r||t>=r&&t<=n}const x=8,y=14,M=16;function d(t){return x+Math.max((t-y)*M,0)}function I(t,n,r){let o,e,i,u=0;for(const s of r){o=s.length;for(let r=1;r<o;++r){if(e=s[r-1],i=s[r],e.y>n==i.y>n)continue;(i.x-e.x)*(n-e.y)-(i.y-e.y)*(t-e.x)>0?u++:u--}}return 0!==u}function N(n,r,o,e){let i,u,s,c;const a=e*e;for(const f of o){const o=f.length;if(!(o<2)){i=f[0].x,u=f[0].y;for(let e=1;e<o;++e){if(s=f[e].x,c=f[e].y,(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_0__.distanceToSegmentSquared)(n,r,i,u,s,c)<a)return!0;i=s,u=c}}}return!1}function w(t,n,r,o,e,i,u){const s=Math.max(o,Math.min(n,i))-n,c=Math.max(e,Math.min(r,u))-r;return s*s+c*c<=t*t}function P(t,r){if(0===r||Number.isNaN(r))return t;const o=[],e=new _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_1__.Point(0,0),i=new _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_1__.Point(0,0),u=new _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_1__.Point(0,0);for(let s=0;s<t.length;s++){const c=t[s],a=[];for(let t=0;t<c.length;t++){const o=c[t-1],s=c[t],f=c[t+1];0===t?e.setCoords(0,0):e.assignSub(s,o).normalize().rightPerpendicular(),t===c.length-1?i.setCoords(0,0):i.assignSub(f,s).normalize().rightPerpendicular(),u.assignAdd(e,i).normalize();const l=u.x*i.x+u.y*i.y;0!==l&&u.scale(1/l),a.push(_geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_1__.Point.add(s,u.scale(r)))}o.push(a)}return o}function b(t,r,o,e){const i=new _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_1__.Point(t[0],t[1]);if(i.scale(e),"viewport"===r){const t=-o*(Math.PI/180),n=Math.cos(t),r=Math.sin(t);i.rotate(n,r)}return i}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/MemoryBuffer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/MemoryBuffer.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t){this._array=[],this._stride=t}get array(){return this._array}get index(){return 4*this._array.length/this._stride}get itemSize(){return this._stride}get sizeInBytes(){return 4*this._array.length}reset(){this.array.length=0}toBuffer(){return new Uint32Array(this._array).buffer}static i1616to32(t,r){return 65535&t|r<<16}static i8888to32(t,r,e,i){return 255&t|(255&r)<<8|(255&e)<<16|i<<24}static i8816to32(t,r,e){return 255&t|(255&r)<<8|e<<16}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapIndex.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapIndex.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "./node_modules/@arcgis/core/views/2d/tiling/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l{constructor(e){this.url=e}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,r){const l=await this.fetchTileIndex();return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(r),this._getIndexedDataKey(l,e)}_getIndexedDataKey(e,t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;0!==i.level;)i=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](i.level-1,i.row>>1,i.col>>1,i.world),l.push(i);let o,s,n=e,a=l.pop();if(1===n)return a;for(;l.length;)if(o=l.pop(),s=(1&o.col)+((1&o.row)<<1),n){if(0===n[s]){a=null;break}if(1===n[s]){a=o;break}a=o,n=n[s]}return a}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapRequest.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapRequest.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "./node_modules/@arcgis/core/views/2d/tiling/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}destroy(){this._tilemap=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.destroyMaybe)(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=(0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this._tileIndexUrl,{query:{...t?.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,t){const{level:l,row:s,col:o}=e,n=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_3__["default"](e);return this._tilemap.fetchAvailabilityUpsample(l,s,o,n,t).then((()=>(n.world=e.world,n))).catch((e=>{if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(e))throw e;return null}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/enums.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/enums.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BucketType: function() { return /* binding */ E; },
/* harmony export */   ShaderProgramType: function() { return /* binding */ L; },
/* harmony export */   StyleUpdateType: function() { return /* binding */ I; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var E,L,I;!function(E){E[E.FILL=1]="FILL",E[E.LINE=2]="LINE",E[E.SYMBOL=3]="SYMBOL",E[E.CIRCLE=4]="CIRCLE"}(E||(E={})),function(E){E[E.BACKGROUND=0]="BACKGROUND",E[E.FILL=1]="FILL",E[E.OUTLINE=2]="OUTLINE",E[E.LINE=3]="LINE",E[E.ICON=4]="ICON",E[E.CIRCLE=5]="CIRCLE",E[E.TEXT=6]="TEXT",E[E.TILEINFO=7]="TILEINFO"}(L||(L={})),function(E){E[E.PAINTER_CHANGED=0]="PAINTER_CHANGED",E[E.LAYOUT_CHANGED=1]="LAYOUT_CHANGED",E[E.LAYER_CHANGED=2]="LAYER_CHANGED",E[E.LAYER_REMOVED=3]="LAYER_REMOVED",E[E.SPRITES_CHANGED=4]="SPRITES_CHANGED"}(I||(I={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/expression.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/expression.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL: function() { return /* binding */ C; },
/* harmony export */   ANY: function() { return /* binding */ R; },
/* harmony export */   Add: function() { return /* binding */ et; },
/* harmony export */   Assert: function() { return /* binding */ lt; },
/* harmony export */   At: function() { return /* binding */ O; },
/* harmony export */   Calculate: function() { return /* binding */ rt; },
/* harmony export */   Case: function() { return /* binding */ I; },
/* harmony export */   Coalesce: function() { return /* binding */ L; },
/* harmony export */   Coerce: function() { return /* binding */ ut; },
/* harmony export */   Concat: function() { return /* binding */ st; },
/* harmony export */   Div: function() { return /* binding */ Y; },
/* harmony export */   EQ: function() { return /* binding */ $; },
/* harmony export */   GE: function() { return /* binding */ q; },
/* harmony export */   GT: function() { return /* binding */ j; },
/* harmony export */   GeomType: function() { return /* binding */ b; },
/* harmony export */   Get: function() { return /* binding */ F; },
/* harmony export */   Has: function() { return /* binding */ G; },
/* harmony export */   HasID: function() { return /* binding */ K; },
/* harmony export */   ID: function() { return /* binding */ v; },
/* harmony export */   In: function() { return /* binding */ V; },
/* harmony export */   IndexOf: function() { return /* binding */ D; },
/* harmony export */   Interpolate: function() { return /* binding */ P; },
/* harmony export */   LE: function() { return /* binding */ A; },
/* harmony export */   LT: function() { return /* binding */ k; },
/* harmony export */   Length: function() { return /* binding */ H; },
/* harmony export */   Let: function() { return /* binding */ B; },
/* harmony export */   Literal: function() { return /* binding */ ct; },
/* harmony export */   Match: function() { return /* binding */ U; },
/* harmony export */   Mod: function() { return /* binding */ Z; },
/* harmony export */   Mul: function() { return /* binding */ X; },
/* harmony export */   NE: function() { return /* binding */ M; },
/* harmony export */   NONE: function() { return /* binding */ z; },
/* harmony export */   NOT: function() { return /* binding */ N; },
/* harmony export */   Pow: function() { return /* binding */ tt; },
/* harmony export */   Properties: function() { return /* binding */ d; },
/* harmony export */   Rgb: function() { return /* binding */ at; },
/* harmony export */   Rgba: function() { return /* binding */ ot; },
/* harmony export */   Slice: function() { return /* binding */ J; },
/* harmony export */   Step: function() { return /* binding */ S; },
/* harmony export */   String: function() { return /* binding */ nt; },
/* harmony export */   Sub: function() { return /* binding */ W; },
/* harmony export */   ToRgba: function() { return /* binding */ it; },
/* harmony export */   TypeOf: function() { return /* binding */ ht; },
/* harmony export */   Var: function() { return /* binding */ T; },
/* harmony export */   Zoom: function() { return /* binding */ x; },
/* harmony export */   createExpression: function() { return /* binding */ pt; },
/* harmony export */   ops: function() { return /* binding */ gt; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/colorUtils.js */ "./node_modules/@arcgis/core/core/colorUtils.js");
/* harmony import */ var _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../geometry/support/TileClipper.js */ "./node_modules/@arcgis/core/geometry/support/TileClipper.js");
/* harmony import */ var _unitBezier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../unitBezier.js */ "./node_modules/@arcgis/core/views/2d/unitBezier.js");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GeometryUtils.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class _{constructor(t){this._parent=t,this._vars={}}add(t,e){this._vars[t]=e}get(t){return this._vars[t]?this._vars[t]:this._parent?this._parent.get(t):null}}class v{constructor(){this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.valueType}static parse(t){if(t.length>1)throw new Error('"id" does not expect arguments');return new v}evaluate(t,e){return t?.id}}class b{constructor(){this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType}static parse(t){if(t.length>1)throw new Error('"geometry-type" does not expect arguments');return new b}evaluate(t,e){if(!t)return null;switch(t.type){case _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__.GeometryType.Point:return"Point";case _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__.GeometryType.LineString:return"LineString";case _geometry_support_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__.GeometryType.Polygon:return"Polygon";default:return null}}}class d{constructor(){this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.objectType}static parse(t){if(t.length>1)throw new Error('"properties" does not expect arguments');return new d}evaluate(t,e){return t?.values}}class x{constructor(){this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType}static parse(t){if(t.length>1)throw new Error('"zoom" does not expect arguments');return new x}evaluate(t,e){return e}}class E{constructor(t,e,r){this._lhs=t,this._rhs=e,this._compare=r,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e,r){if(3!==t.length&&4!==t.length)throw new Error(`"${t[0]}" expects 2 or 3 arguments`);if(4===t.length)throw new Error(`"${t[0]}" collator not supported`);return new E(pt(t[1],e),pt(t[2],e),r)}evaluate(t,e){return this._compare(this._lhs.evaluate(t,e),this._rhs.evaluate(t,e))}}class $ extends E{static parse(t,e){return E.parse(t,e,((t,e)=>t===e))}}class M extends E{static parse(t,e){return E.parse(t,e,((t,e)=>t!==e))}}class k extends E{static parse(t,e){return E.parse(t,e,((t,e)=>t<e))}}class A extends E{static parse(t,e){return E.parse(t,e,((t,e)=>t<=e))}}class j extends E{static parse(t,e){return E.parse(t,e,((t,e)=>t>e))}}class q extends E{static parse(t,e){return E.parse(t,e,((t,e)=>t>=e))}}class N{constructor(t){this._arg=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e){if(2!==t.length)throw new Error('"!" expects 1 argument');return new N(pt(t[1],e))}evaluate(t,e){return!this._arg.evaluate(t,e)}}class C{constructor(t){this._args=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e){const r=[];for(let s=1;s<t.length;s++)r.push(pt(t[s],e));return new C(r)}evaluate(t,e){for(const r of this._args)if(!r.evaluate(t,e))return!1;return!0}}class R{constructor(t){this._args=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e){const r=[];for(let s=1;s<t.length;s++)r.push(pt(t[s],e));return new R(r)}evaluate(t,e){for(const r of this._args)if(r.evaluate(t,e))return!0;return!1}}class z{constructor(t){this._args=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e){const r=[];for(let s=1;s<t.length;s++)r.push(pt(t[s],e));return new z(r)}evaluate(t,e){for(const r of this._args)if(r.evaluate(t,e))return!1;return!0}}class I{constructor(t,e,r){this.type=t,this._args=e,this._fallback=r}static parse(t,e,r){if(t.length<4)throw new Error('"case" expects at least 3 arguments');if(t.length%2==1)throw new Error('"case" expects an odd number of arguments');let s;const n=[];for(let o=1;o<t.length-1;o+=2){const a=pt(t[o],e),i=pt(t[o+1],e,r);s||(s=i.type),n.push({condition:a,output:i})}const a=pt(t[t.length-1],e,r);return s||(s=a.type),new I(s,n,a)}evaluate(t,e){for(const r of this._args)if(r.condition.evaluate(t,e))return r.output.evaluate(t,e);return this._fallback.evaluate(t,e)}}class L{constructor(t,e){this.type=t,this._args=e}static parse(t,e){if(t.length<2)throw new Error('"coalesce" expects at least 1 argument');let r;const s=[];for(let n=1;n<t.length;n++){const a=pt(t[n],e);r||(r=a.type),s.push(a)}return new L(r,s)}evaluate(t,e){for(const r of this._args){const s=r.evaluate(t,e);if(null!==s)return s}return null}}class U{constructor(t,e,r,s,n){this.type=t,this._input=e,this._labels=r,this._outputs=s,this._fallback=n}static parse(t,e){if(t.length<3)throw new Error('"match" expects at least 3 arguments');if(t.length%2==0)throw new Error('"case" expects an even number of arguments');let r;const s=pt(t[1],e),n=[],a={};let o;for(let i=2;i<t.length-1;i+=2){let s=t[i];Array.isArray(s)||(s=[s]);for(const t of s){const e=typeof t;if("string"!==e&&"number"!==e)throw new Error('"match" requires string or number literal as labels');if(o){if(e!==o)throw new Error('"match" requires labels to have the same type')}else o=e;a[t]=n.length}const l=pt(t[i+1],e);r||(r=l.type),n.push(l)}return new U(r,s,a,n,pt(t[t.length-1],e))}evaluate(t,e){const r=this._input.evaluate(t,e);return(this._outputs[this._labels[r]]||this._fallback).evaluate(t,e)}}class P{constructor(t,e,r,s,n){this._operator=t,this.type=e,this.interpolation=r,this.input=s,this._stops=n}static parse(t,e,r){const s=t[0];if(t.length<5)throw new Error(`"${s}" expects at least 4 arguments`);const n=t[1];if(!Array.isArray(n)||0===n.length)throw new Error(`"${n}" is not a valid interpolation`);switch(n[0]){case"linear":if(1!==n.length)throw new Error("Linear interpolation cannot have parameters");break;case"exponential":if(2!==n.length||"number"!=typeof n[1])throw new Error("Exponential interpolation requires one numeric argument");break;case"cubic-bezier":if(5!==n.length)throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");for(let t=1;t<5;t++){const e=n[t];if("number"!=typeof e||e<0||e>1)throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1")}break;default:throw new Error(`"${t[0]}" unknown interpolation type "${n[0]}"`)}if(t.length%2!=1)throw new Error(`"${s}" expects an even number of arguments`);const a=pt(t[2],e,_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType);let o;"interpolate-hcl"===s||"interpolate-lab"===s?o=_types_js__WEBPACK_IMPORTED_MODULE_5__.colorType:r&&"value"!==r.kind&&(o=r);const i=[];for(let l=3;l<t.length;l+=2){const r=t[l];if("number"!=typeof r)throw new Error(`"${s}" requires stop inputs as literal numbers`);if(i.length&&i[i.length-1][0]>=r)throw new Error(`"${s}" requires strictly ascending stop inputs`);const n=pt(t[l+1],e,o);o||(o=n.type),i.push([r,n])}if(o&&o!==_types_js__WEBPACK_IMPORTED_MODULE_5__.colorType&&o!==_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType&&("array"!==o.kind||o.itemType!==_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType))throw new Error(`"${s}" cannot interpolate type ${(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.typeToString)(o)}`);return new P(s,o,n,a,i)}evaluate(n,a){const i=this._stops;if(1===i.length)return i[0][1].evaluate(n,a);const l=this.input.evaluate(n,a);if(l<=i[0][0])return i[0][1].evaluate(n,a);if(l>=i[i.length-1][0])return i[i.length-1][1].evaluate(n,a);let u=0;for(;++u<i.length&&!(l<i[u][0]););const c=i[u-1][0],h=i[u][0],p=P.interpolationRatio(this.interpolation,l,c,h),f=i[u-1][1].evaluate(n,a),w=i[u][1].evaluate(n,a);if("interpolate"===this._operator){if("array"===this.type.kind&&Array.isArray(f)&&Array.isArray(w))return f.map(((t,e)=>(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(t,w[e],p)));if("color"===this.type.kind&&f instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]&&w instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]){const e=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](f),r=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](w);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.r,r.r,p),(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.g,r.g,p),(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.b,r.b,p),(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.a,r.a,p)])}if("number"===this.type.kind&&"number"==typeof f&&"number"==typeof w)return (0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(f,w,p);throw new Error(`"${this._operator}" cannot interpolate type ${(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.typeToString)(this.type)}`)}if("interpolate-hcl"===this._operator){const s=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.toLCH)(f),n=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.toLCH)(w),a=n.h-s.h,i=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.toRGB)({h:s.h+p*(a>180||a<-180?a-360*Math.round(a/360):a),c:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(s.c,n.c,p),l:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(s.l,n.l,p)});return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]({a:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(f.a,w.a,p),...i})}if("interpolate-lab"===this._operator){const e=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.toLAB)(f),n=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.toLAB)(w),a=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.toRGB)({l:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.l,n.l,p),a:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.a,n.a,p),b:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(e.b,n.b,p)});return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]({a:(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_4__.interpolate)(f.a,w.a,p),...a})}throw new Error(`Unexpected operator "${this._operator}"`)}interpolationUniformValue(t,e){const r=this._stops;if(1===r.length)return 0;if(t>=r[r.length-1][0])return 0;let s=0;for(;++s<r.length&&!(t<r[s][0]););const n=r[s-1][0],a=r[s][0];return P.interpolationRatio(this.interpolation,e,n,a)}getInterpolationRange(t){const e=this._stops;if(1===e.length){const t=e[0][0];return[t,t]}const r=e[e.length-1][0];if(t>=r)return[r,r];let s=0;for(;++s<e.length&&!(t<e[s][0]););return[e[s-1][0],e[s][0]]}static interpolationRatio(t,e,r,s){let n=0;if("linear"===t[0])n=P._exponentialInterpolationRatio(e,1,r,s);else if("exponential"===t[0])n=P._exponentialInterpolationRatio(e,t[1],r,s);else if("cubic-bezier"===t[0]){n=(0,_unitBezier_js__WEBPACK_IMPORTED_MODULE_3__.unitBezier)(t[1],t[2],t[3],t[4])(P._exponentialInterpolationRatio(e,1,r,s),1e-5)}return n<0?n=0:n>1&&(n=1),n}static _exponentialInterpolationRatio(t,e,r,s){const n=s-r;if(0===n)return 0;const a=t-r;return 1===e?a/n:(e**a-1)/(e**n-1)}}class S{constructor(t,e,r){this.type=t,this._input=e,this._stops=r}static parse(t,e){if(t.length<5)throw new Error('"step" expects at least 4 arguments');if(t.length%2!=1)throw new Error('"step" expects an even number of arguments');const r=pt(t[1],e,_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType);let s;const n=[];n.push([-1/0,pt(t[2],e)]);for(let a=3;a<t.length;a+=2){const r=t[a];if("number"!=typeof r)throw new Error('"step" requires stop inputs as literal numbers');if(n.length&&n[n.length-1][0]>=r)throw new Error('"step" requires strictly ascending stop inputs');const o=pt(t[a+1],e);s||(s=o.type),n.push([r,o])}return new S(s,r,n)}evaluate(t,e){const r=this._stops;if(1===r.length)return r[0][1].evaluate(t,e);const s=this._input.evaluate(t,e);let n=0;for(;++n<r.length&&!(s<r[n][0]););return this._stops[n-1][1].evaluate(t,e)}}class B{constructor(t,e){this.type=t,this._output=e}static parse(t,e,r){if(t.length<4)throw new Error('"let" expects at least 3 arguments');if(t.length%2==1)throw new Error('"let" expects an odd number of arguments');const s=new _(e);for(let a=1;a<t.length-1;a+=2){const r=t[a];if("string"!=typeof r)throw new Error(`"let" requires a string to define variable names - found ${r}`);s.add(r,pt(t[a+1],e))}const n=pt(t[t.length-1],s,r);return new B(n.type,n)}evaluate(t,e){return this._output.evaluate(t,e)}}class T{constructor(t,e){this.type=t,this.output=e}static parse(t,e,r){if(2!==t.length||"string"!=typeof t[1])throw new Error('"var" requires just one literal string argument');const s=e.get(t[1]);if(!s)throw new Error(`${t[1]} must be defined before being used in a "var" expression`);return new T(r||_types_js__WEBPACK_IMPORTED_MODULE_5__.valueType,s)}evaluate(t,e){return this.output.evaluate(t,e)}}class O{constructor(t,e,r){this.type=t,this._index=e,this._array=r}static parse(t,e){if(3!==t.length)throw new Error('"at" expects 2 arguments');const r=pt(t[1],e,_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType),s=pt(t[2],e);return new O(s.type.itemType,r,s)}evaluate(t,e){const r=this._index.evaluate(t,e),s=this._array.evaluate(t,e);if(r<0||r>=s.length)throw new Error('"at" index out of bounds');if(r!==Math.floor(r))throw new Error('"at" index must be an integer');return s[r]}}class F{constructor(t,e){this._key=t,this._obj=e,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.valueType}static parse(t,e){let r,s;switch(t.length){case 2:return r=pt(t[1],e),new F(r);case 3:return r=pt(t[1],e),s=pt(t[2],e),new F(r,s);default:throw new Error('"get" expects 1 or 2 arguments')}}evaluate(t,e){const r=this._key.evaluate(t,e);if(this._obj){return this._obj.evaluate(t,e)[r]}return t?.values[r]}}class G{constructor(t,e){this._key=t,this._obj=e,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e){let r,s;switch(t.length){case 2:return r=pt(t[1],e),new G(r);case 3:return r=pt(t[1],e),s=pt(t[2],e),new G(r,s);default:throw new Error('"has" expects 1 or 2 arguments')}}evaluate(t,e){const r=this._key.evaluate(t,e);if(this._obj){return r in this._obj.evaluate(t,e)}return!!t?.values[r]}}class V{constructor(t,e){this._key=t,this._vals=e,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t,e){if(3!==t.length)throw new Error('"in" expects 2 arguments');return new V(pt(t[1],e),pt(t[2],e))}evaluate(t,e){const r=this._key.evaluate(t,e);return this._vals.evaluate(t,e).includes(r)}}class D{constructor(t,e,r){this._item=t,this._array=e,this._from=r,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType}static parse(t,e){if(t.length<3||t.length>4)throw new Error('"index-of" expects 3 or 4 arguments');const r=pt(t[1],e),s=pt(t[2],e);if(4===t.length){const n=pt(t[3],e,_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType);return new D(r,s,n)}return new D(r,s)}evaluate(t,e){const r=this._item.evaluate(t,e),s=this._array.evaluate(t,e);if(this._from){const n=this._from.evaluate(t,e);if(n!==Math.floor(n))throw new Error('"index-of" index must be an integer');return s.indexOf(r,n)}return s.indexOf(r)}}class H{constructor(t){this._arg=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType}static parse(t,e){if(2!==t.length)throw new Error('"length" expects 2 arguments');const r=pt(t[1],e);return new H(r)}evaluate(t,e){const r=this._arg.evaluate(t,e);if("string"==typeof r)return r.length;if(Array.isArray(r))return r.length;throw new Error('"length" expects string or array')}}class J{constructor(t,e,r,s){this.type=t,this._array=e,this._from=r,this._to=s}static parse(t,e){if(t.length<3||t.length>4)throw new Error('"slice" expects 2 or 3 arguments');const r=pt(t[1],e),s=pt(t[2],e,_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType);if(s.type!==_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType)throw new Error('"slice" index must return a number');if(4===t.length){const n=pt(t[3],e,_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType);if(n.type!==_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType)throw new Error('"slice" index must return a number');return new J(r.type,r,s,n)}return new J(r.type,r,s)}evaluate(t,e){const r=this._array.evaluate(t,e);if(!Array.isArray(r)&&"string"!=typeof r)throw new Error('"slice" input must be an array or a string');const s=this._from.evaluate(t,e);if(s<0||s>=r.length)throw new Error('"slice" index out of bounds');if(s!==Math.floor(s))throw new Error('"slice" index must be an integer');if(this._to){const n=this._to.evaluate(t,e);if(n<0||n>=r.length)throw new Error('"slice" index out of bounds');if(n!==Math.floor(n))throw new Error('"slice" index must be an integer');return r.slice(s,n)}return r.slice(s)}}class K{constructor(){this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType}static parse(t){if(1!==t.length)throw new Error('"has-id" expects no arguments');return new K}evaluate(t,e){return void 0!==t?.id}}class Q{constructor(t,e){this._args=t,this._calculate=e,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType}static parse(t,e,r){const s=t.slice(1).map((t=>pt(t,e)));return new Q(s,r)}evaluate(t,e){let r;return this._args&&(r=this._args.map((r=>r.evaluate(t,e)))),this._calculate(r)}}class W extends Q{static parse(t,e){switch(t.length){case 2:return Q.parse(t,e,(t=>-t[0]));case 3:return Q.parse(t,e,(t=>t[0]-t[1]));default:throw new Error('"-" expects 1 or 2 arguments')}}}class X extends Q{static parse(t,e){return Q.parse(t,e,(t=>{let e=1;for(const r of t)e*=r;return e}))}}class Y extends Q{static parse(t,e){if(3===t.length)return Q.parse(t,e,(t=>t[0]/t[1]));throw new Error('"/" expects 2 arguments')}}class Z extends Q{static parse(t,e){if(3===t.length)return Q.parse(t,e,(t=>t[0]%t[1]));throw new Error('"%" expects 2 arguments')}}class tt extends Q{static parse(t,e){if(3===t.length)return Q.parse(t,e,(t=>t[0]**t[1]));throw new Error('"^" expects 1 or 2 arguments')}}class et extends Q{static parse(t,e){return Q.parse(t,e,(t=>{let e=0;for(const r of t)e+=r;return e}))}}class rt{constructor(t,e){this._args=t,this._calculate=e,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType}static parse(t,e){const r=t.slice(1).map((t=>pt(t,e)));return new rt(r,rt.ops[t[0]])}evaluate(t,e){let r;return this._args&&(r=this._args.map((r=>r.evaluate(t,e)))),this._calculate(r)}}rt.ops={abs:t=>Math.abs(t[0]),acos:t=>Math.acos(t[0]),asin:t=>Math.asin(t[0]),atan:t=>Math.atan(t[0]),ceil:t=>Math.ceil(t[0]),cos:t=>Math.cos(t[0]),e:()=>Math.E,floor:t=>Math.floor(t[0]),ln:t=>Math.log(t[0]),ln2:()=>Math.LN2,log10:t=>Math.log(t[0])/Math.LN10,log2:t=>Math.log(t[0])/Math.LN2,max:t=>Math.max(...t),min:t=>Math.min(...t),pi:()=>Math.PI,round:t=>Math.round(t[0]),sin:t=>Math.sin(t[0]),sqrt:t=>Math.sqrt(t[0]),tan:t=>Math.tan(t[0])};class st{constructor(t){this._args=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType}static parse(t,e){return new st(t.slice(1).map((t=>pt(t,e))))}evaluate(t,e){return this._args.map((r=>r.evaluate(t,e))).join("")}}class nt{constructor(t,e){this._arg=t,this._calculate=e,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType}static parse(t,e){if(2!==t.length)throw new Error(`${t[0]} expects 1 argument`);const r=pt(t[1],e);return new nt(r,nt.ops[t[0]])}evaluate(t,e){return this._calculate(this._arg.evaluate(t,e))}}nt.ops={downcase:t=>t.toLowerCase(),upcase:t=>t.toUpperCase()};class at{constructor(t){this._args=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.colorType}static parse(t,e){if(4!==t.length)throw new Error('"rgb" expects 3 arguments');const r=t.slice(1).map((t=>pt(t,e)));return new at(r)}evaluate(e,r){const s=this._validate(this._args[0].evaluate(e,r)),n=this._validate(this._args[1].evaluate(e,r)),a=this._validate(this._args[2].evaluate(e,r));return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]({r:s,g:n,b:a})}_validate(t){if("number"!=typeof t||t<0||t>255)throw new Error(`${t}: invalid color component`);return Math.round(t)}}class ot{constructor(t){this._args=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.colorType}static parse(t,e){if(5!==t.length)throw new Error('"rgba" expects 4 arguments');const r=t.slice(1).map((t=>pt(t,e)));return new ot(r)}evaluate(e,r){const s=this._validate(this._args[0].evaluate(e,r)),n=this._validate(this._args[1].evaluate(e,r)),a=this._validate(this._args[2].evaluate(e,r)),o=this._validateAlpha(this._args[3].evaluate(e,r));return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]({r:s,g:n,b:a,a:o})}_validate(t){if("number"!=typeof t||t<0||t>255)throw new Error(`${t}: invalid color component`);return Math.round(t)}_validateAlpha(t){if("number"!=typeof t||t<0||t>1)throw new Error(`${t}: invalid alpha color component`);return t}}class it{constructor(t){this._color=t,this.type=(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.arrayType)(_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType,4)}static parse(t,e){if(2!==t.length)throw new Error('"to-rgba" expects 1 argument');const r=pt(t[1],e);return new it(r)}evaluate(e,r){return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._color.evaluate(e,r)).toRgba()}}class lt{constructor(t,e){this.type=t,this._args=e}static parse(t,e){const r=t[0];if(t.length<2)throw new Error(`${r} expects at least one argument`);let s,n=1;if("array"===r){if(t.length>2){switch(t[1]){case"string":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType;break;case"number":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType;break;case"boolean":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType;break;default:throw new Error('"array" type argument must be string, number or boolean')}n++}else s=_types_js__WEBPACK_IMPORTED_MODULE_5__.valueType;let e;if(t.length>3){if(e=t[2],null!==e&&("number"!=typeof e||e<0||e!==Math.floor(e)))throw new Error('"array" length argument must be a positive integer literal');n++}s=(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.arrayType)(s,e)}else switch(r){case"string":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType;break;case"number":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType;break;case"boolean":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType;break;case"object":s=_types_js__WEBPACK_IMPORTED_MODULE_5__.objectType}const a=[];for(;n<t.length;n++){const r=pt(t[n],e);a.push(r)}return new lt(s,a)}evaluate(t,e){let r;for(const s of this._args){const n=s.evaluate(t,e);if(r=(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.getType)(n),(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.matchType)(r,this.type))return n}throw new Error(`Expected ${(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.typeToString)(this.type)} but got ${(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.typeToString)(r)}`)}}class ut{constructor(t,e){this.type=t,this._args=e}static parse(t,e){const r=t[0],s=ut.types[r];if(s===_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType||s===_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType){if(2!==t.length)throw new Error(`${r} expects one argument`)}else if(t.length<2)throw new Error(`${r} expects at least one argument`);const n=[];for(let a=1;a<t.length;a++){const r=pt(t[a],e);n.push(r)}return new ut(s,n)}evaluate(e,r){if(this.type===_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType)return Boolean(this._args[0].evaluate(e,r));if(this.type===_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType)return (0,_types_js__WEBPACK_IMPORTED_MODULE_5__.valueToString)(this._args[0].evaluate(e,r));if(this.type===_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType){for(const t of this._args){const s=Number(t.evaluate(e,r));if(!isNaN(s))return s}return null}if(this.type===_types_js__WEBPACK_IMPORTED_MODULE_5__.colorType){for(const s of this._args)try{const n=ut.toColor(s.evaluate(e,r));if(n instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"])return n}catch{}return null}}static toBoolean(t){return Boolean(t)}static toString(t){return (0,_types_js__WEBPACK_IMPORTED_MODULE_5__.valueToString)(t)}static toNumber(t){const e=Number(t);if(isNaN(e))throw new Error(`"${t}" is not a number`);return e}static toColor(e){if(e instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"])return e;if("string"==typeof e){const r=_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromString(e);if(r)return r;throw new Error(`"${e}" is not a color`)}if(Array.isArray(e))return _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromArray(e);throw new Error(`"${e}" is not a color`)}}ut.types={"to-boolean":_types_js__WEBPACK_IMPORTED_MODULE_5__.booleanType,"to-color":_types_js__WEBPACK_IMPORTED_MODULE_5__.colorType,"to-number":_types_js__WEBPACK_IMPORTED_MODULE_5__.numberType,"to-string":_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType};class ct{constructor(t){this._val=t,this.type=(0,_types_js__WEBPACK_IMPORTED_MODULE_5__.getType)(t)}static parse(t){if(2!==t.length)throw new Error('"literal" expects 1 argument');return new ct(t[1])}evaluate(t,e){return this._val}}class ht{constructor(t){this._arg=t,this.type=_types_js__WEBPACK_IMPORTED_MODULE_5__.stringType}static parse(t,e){if(2!==t.length)throw new Error('"typeof" expects 1 argument');return new ht(pt(t[1],e))}evaluate(t,e){return (0,_types_js__WEBPACK_IMPORTED_MODULE_5__.typeToString)((0,_types_js__WEBPACK_IMPORTED_MODULE_5__.getType)(this._arg.evaluate(t,e)))}}function pt(t,e,r){const s=typeof t;if("string"===s||"boolean"===s||"number"===s||null===t){if(r)switch(r.kind){case"string":"string"!==s&&(t=ut.toString(t));break;case"number":"number"!==s&&(t=ut.toNumber(t));break;case"color":t=ut.toColor(t)}t=["literal",t]}if(!Array.isArray(t)||0===t.length)throw new Error("Expression must be a non empty array");const n=t[0];if("string"!=typeof n)throw new Error("First element of expression must be a string");const a=gt[n];if(void 0===a)throw new Error(`Invalid expression operator "${n}"`);if(!a)throw new Error(`Unimplemented expression operator "${n}"`);return a.parse(t,e,r)}const gt={array:lt,boolean:lt,collator:null,format:null,image:null,literal:ct,number:lt,"number-format":null,object:lt,string:lt,"to-boolean":ut,"to-color":ut,"to-number":ut,"to-string":ut,typeof:ht,accumulated:null,"feature-state":null,"geometry-type":b,id:v,"line-progress":null,properties:d,at:O,get:F,has:G,in:V,"index-of":D,length:H,slice:J,"!":N,"!=":M,"<":k,"<=":A,"==":$,">":j,">=":q,all:C,any:R,case:I,coalesce:L,match:U,within:null,interpolate:P,"interpolate-hcl":P,"interpolate-lab":P,step:S,let:B,var:T,concat:st,downcase:nt,"is-supported-script":null,"resolved-locale":null,upcase:nt,rgb:at,rgba:ot,"to-rgba":it,"-":W,"*":X,"/":Y,"%":Z,"^":tt,"+":et,abs:rt,acos:rt,asin:rt,atan:rt,ceil:rt,cos:rt,e:rt,floor:rt,ln:rt,ln2:rt,log10:rt,log2:rt,max:rt,min:rt,pi:rt,round:rt,sin:rt,sqrt:rt,tan:rt,zoom:x,"heatmap-density":null,"has-id":K,none:z};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayType: function() { return /* binding */ a; },
/* harmony export */   booleanType: function() { return /* binding */ i; },
/* harmony export */   colorType: function() { return /* binding */ o; },
/* harmony export */   getType: function() { return /* binding */ l; },
/* harmony export */   matchType: function() { return /* binding */ c; },
/* harmony export */   nullType: function() { return /* binding */ r; },
/* harmony export */   numberType: function() { return /* binding */ e; },
/* harmony export */   objectType: function() { return /* binding */ f; },
/* harmony export */   stringType: function() { return /* binding */ t; },
/* harmony export */   typeToString: function() { return /* binding */ k; },
/* harmony export */   valueToString: function() { return /* binding */ d; },
/* harmony export */   valueType: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r={kind:"null"},e={kind:"number"},t={kind:"string"},i={kind:"boolean"},o={kind:"color"},f={kind:"object"},u={kind:"value"};function a(n,r){return{kind:"array",itemType:n,n:r}}const y=[r,e,t,i,o,f,a(u)];function k(n){if("array"===n.kind){const r=k(n.itemType);return"number"==typeof n.n?`array<${r}, ${n.n}>`:"value"===n.itemType.kind?"array":`array<${r}>`}return n.kind}function l(y){if(null===y)return r;if("string"==typeof y)return t;if("boolean"==typeof y)return i;if("number"==typeof y)return e;if(y instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"])return o;if(Array.isArray(y)){let n;for(const r of y){const e=l(r);if(n){if(n!==e){n=u;break}}else n=e}return a(n||u,y.length)}return"object"==typeof y?f:u}function c(n,r){if("array"===r.kind)return"array"===n.kind&&(0===n.n&&"value"===n.itemType.kind||c(n.itemType,r.itemType))&&("number"!=typeof r.n||r.n===n.n);if("value"===r.kind)for(const e of y)if(c(n,e))return!0;return r.kind===n.kind}function d(r){if(null===r)return"";const e=typeof r;return"string"===e?r:"number"===e||"boolean"===e?String(r):r instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]?r.toString():JSON.stringify(r)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLBackgroundMaterial.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLBackgroundMaterial.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTLBackgroundMaterial: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VTLMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class T extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_0__.VTLMaterial{constructor(r){super(r)}geometryInfo(){return T.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return T.ATTRIBUTES}attributesInfo(){return T.ATTRIBUTES_INFO}}T.ATTRIBUTES=[],T.GEOMETRY_LAYOUT=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.VertexElementDescriptor("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.DataType.BYTE,0,2)],T.ATTRIBUTES_INFO={};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLCircleMaterial.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLCircleMaterial.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTLCircleMaterial: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js");
/* harmony import */ var _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VTLMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__.VTLMaterial{constructor(r){super(r)}geometryInfo(){return t.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return t.ATTRIBUTES}attributesInfo(){return t.ATTRIBUTES_INFO}}t.ATTRIBUTES=["circle-radius","circle-color","circle-opacity","circle-stroke-width","circle-stroke-color","circle-stroke-opacity","circle-blur"],t.GEOMETRY_LAYOUT=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,0,4)],t.ATTRIBUTES_INFO={"circle-radius":{name:"radius",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED},"circle-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"circle-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100},"circle-stroke-width":{name:"stroke_width",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:4},"circle-stroke-color":{name:"stroke_color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"circle-stroke-opacity":{name:"stroke_opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100},"circle-blur":{name:"blur",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:32}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLFillMaterial.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLFillMaterial.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTLFillMaterial: function() { return /* binding */ l; },
/* harmony export */   VTLOutlineMaterial: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js");
/* harmony import */ var _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VTLMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__.VTLMaterial{constructor(o){super(o)}geometryInfo(){return l.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return l.ATTRIBUTES}attributesInfo(){return l.ATTRIBUTES_INFO}}l.ATTRIBUTES=["fill-color","fill-opacity","fill-pattern"],l.GEOMETRY_LAYOUT=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,0,4)],l.ATTRIBUTES_INFO={"fill-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100},"fill-pattern":{name:"tlbr",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R16G16B16A16_PATTERN,isOptional:!0}};class T extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__.VTLMaterial{constructor(o,t){super(o),this._usefillColor=t}geometryInfo(){return T.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return this._usefillColor?T.ATTRIBUTES_FILL:T.ATTRIBUTES_OUTLINE}attributesInfo(){return this._usefillColor?T.ATTRIBUTES_INFO_FILL:T.ATTRIBUTES_INFO_OUTLINE}}T.ATTRIBUTES_OUTLINE=["fill-outline-color","fill-opacity"],T.ATTRIBUTES_FILL=["fill-color","fill-opacity"],T.GEOMETRY_LAYOUT=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,0,8),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_offset",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,4,8),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_xnormal",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,6,8)],T.ATTRIBUTES_INFO_OUTLINE={"fill-outline-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100}},T.ATTRIBUTES_INFO_FILL={"fill-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"fill-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLLineMaterial.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLLineMaterial.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTLLineMaterial: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js");
/* harmony import */ var _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VTLMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class i extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__.VTLMaterial{constructor(e){super(e)}geometryInfo(){return i.GEOMETRY_LAYOUT}opacityInfo(){return null}attributes(){return i.ATTRIBUTES}attributesInfo(){return i.ATTRIBUTES_INFO}}i.ATTRIBUTES=["line-blur","line-color","line-gap-width","line-offset","line-opacity","line-width","line-pattern","line-dasharray"],i.GEOMETRY_LAYOUT=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,0,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_extrude_offset",4,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,4,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_dir_normal",4,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,8,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_accumulatedDistance",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT,12,16)],i.ATTRIBUTES_INFO={"line-width":{name:"width",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:2},"line-gap-width":{name:"gap_width",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:2},"line-offset":{name:"offset",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_SIGNED,precisionFactor:2},"line-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"line-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100},"line-blur":{name:"blur",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:4},"line-pattern":{name:"tlbr",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R16G16B16A16_PATTERN,isOptional:!0},"line-dasharray":{name:"tlbr",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R16G16B16A16_DASHARRAY,isOptional:!0}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTLMaterial: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MemoryBuffer.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/MemoryBuffer.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r{constructor(t){this._locations=new Map,this._key=t}get key(){return this._key}get type(){return 7&this._key}defines(){return[]}getStride(){return this._layout||this._buildAttributesInfo(),this._stride}getAttributeLocations(){return 0===this._locations.size&&this._buildAttributesInfo(),this._locations}getLayoutInfo(){return this._layout||this._buildAttributesInfo(),this._layout}getEncodingInfos(){return this._propertyEncodingInfo||this._buildAttributesInfo(),this._propertyEncodingInfo}getUniforms(){return this._uniforms||this._buildAttributesInfo(),this._uniforms}getShaderHeader(){return this._shaderHeader||this._buildAttributesInfo(),this._shaderHeader}getShaderMain(){return this._shaderMain||this._buildAttributesInfo(),this._shaderMain}setDataUniforms(t,e,n,o,s){const r=this.getUniforms();for(const i of r){const{name:r,type:a,getValue:c}=i,u=c(n,e,o,s);if(null!==u)switch(a){case"float":t.setUniform1f(r,u);break;case"vec2":t.setUniform2fv(r,u);break;case"vec4":t.setUniform4fv(r,u)}}}encodeAttributes(t,n,o,s){const r=this.attributesInfo(),i=this.getEncodingInfos(),a=[];let c=0,u=0;for(const _ of Object.keys(i)){const l=i[_],{type:f,precisionFactor:h,isLayout:d}=r[_],y=d?o.getLayoutProperty(_):o.getPaintProperty(_),m=y.interpolator?.getInterpolationRange(n);let E=0;for(const o of l){const{offset:r,bufferElementsToAdd:i}=o;if(i>0){for(let t=0;t<i;t++)a.push(0);c+=u,u=o.bufferElementsToAdd}const _=s??y.getValue(m?m[E]:n,t);switch(f){case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8_SIGNED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8_UNSIGNED:a[c]|=this._encodeByte(_*(h||1),8*r);break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16_SIGNED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16_UNSIGNED:a[c]|=this._encodeShort(_*(h||1),8*r);break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8_SIGNED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8_UNSIGNED:a[c]|=this._encodeByte(_*(h||1),8*r),a[c]|=this._encodeByte(_*(h||1),8*r+8);break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16_SIGNED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16_UNSIGNED:a[c]|=this._encodeShort(_*(h||1),8*r),a[c]|=this._encodeShort(_*(h||1),8*r+16);break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_SIGNED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_UNSIGNED:a[c]|=this._encodeByte(_*(h||1),8*r),a[c]|=this._encodeByte(_*(h||1),8*r+8),a[c]|=this._encodeByte(_*(h||1),8*r+16),a[c]|=this._encodeByte(_*(h||1),8*r+24);break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_COLOR:a[c]=this._encodeColor(_);break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16B16A16_DASHARRAY:case _enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16B16A16_PATTERN:this._encodePattern(c,a,_);break;default:throw new Error("Unsupported encoding type")}E++}}return a}getAtributeState(t){let e=0;const n=3+2*t;return e|=this._bit(n),e|=this._bit(n+1)<<1,e}_buildAttributesInfo(){const t=[],e={},s={};let i=-1;const a=this.attributesInfo(),c=this.attributes();let u=-1;for(const o of c){u++;const c=this.getAtributeState(u);if(c===_enums_js__WEBPACK_IMPORTED_MODULE_1__.AttributeStatus.UNIFORM||c===_enums_js__WEBPACK_IMPORTED_MODULE_1__.AttributeStatus.UNUSED)continue;const _=a[o],l=[];e[o]=l;const f=_.type;for(let e=0;e<c;e++){const{dataType:e,bytesPerElement:n,count:o,normalized:a}=r._encodingInfo[f],c=n*o,u=`${e}-${!0===a}`;let _=s[u],h=0;if(!_||_.count+o>4)i++,_={dataIndex:i,count:0,offset:0},4!==o&&(s[u]=_),t.push({location:-1,name:"a_data_"+i,count:o,type:e,normalized:a}),h=Math.ceil(Math.max(c/4,1));else{const e=t[_.dataIndex];e.count+=o;h=Math.ceil(Math.max(e.count*n/4,1))-Math.ceil(Math.max(_.offset/4,1))}l.push({dataIndex:_.dataIndex,offset:_.offset,bufferElementsToAdd:h}),_.offset+=c,_.count+=o}}for(const n of t)switch(n.type){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE:n.count=4;break;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT:n.count+=n.count%2}this._buildVertexBufferLayout(t);let _=0;const l=this._layout.get("geometry");for(const n of l)this._locations.set(n.name,_++);const f=this._layout.get("opacity");if(f)for(const n of f)this._locations.set(n.name,_++);this._buildShaderInfo(t,e),this._propertyEncodingInfo=e}_buildVertexBufferLayout(t){const e=new Map,n=this.geometryInfo();let o=n[0].stride;if(0===t.length)e.set("geometry",n);else{const r=[];let a=o;for(const e of t)o+=i(e.type)*e.count;for(const t of n)r.push(new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor(t.name,t.count,t.type,t.offset,o,t.normalized));for(const e of t)r.push(new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor(e.name,e.count,e.type,a,o,e.normalized)),a+=i(e.type)*e.count;e.set("geometry",r)}const r=this.opacityInfo();r&&e.set("opacity",r),this._layout=e,this._stride=o}_buildShaderInfo(t,o){let s="\n",i="\n";const c=[];for(const e of t)s+=`attribute ${this._getType(e.count)} ${e.name};\n`;const u=this.attributes(),_=this.attributesInfo();let l=-1;for(const f of u){l++;const{name:t,type:u,precisionFactor:h,isLayout:d}=_[f],y=h&&1!==h?" * "+1/h:"",{bytesPerElement:m,count:E}=r._encodingInfo[u],I=t=>`a_data_${t.dataIndex}${a(E,t.offset,m)}`;switch(this.getAtributeState(l)){case _enums_js__WEBPACK_IMPORTED_MODULE_1__.AttributeStatus.UNIFORM:{const n=this._getType(E),o=`u_${t}`;c.push({name:o,type:n,getValue:(t,n,o,s)=>{const r=d?t.getLayoutValue(f,n):t.getPaintValue(f,n);if(u===_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16B16A16_DASHARRAY){const e=t.getDashKey(r,t.getLayoutValue("line-cap",n)),o=s.getMosaicItemPosition(e,!1);if(null==o)return null;const{tl:i,br:a}=o;return[i[0],a[1],a[0],i[1]]}if(u===_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16B16A16_PATTERN){const t=s.getMosaicItemPosition(r,!f.includes("line-"));if(null==t)return null;const{tl:e,br:n}=t;return[e[0],n[1],n[0],e[1]]}if(u===_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_COLOR){const t=r[3];return[t*r[0],t*r[1],t*r[2],t]}return r}}),s+=`uniform ${n} ${o};\n`,i+=`${n} ${t} = ${o};\n`}break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.AttributeStatus.DATA_DRIVEN:{const e=I(o[f][0]);i+=`${this._getType(E)} ${t} = ${e}${y};\n`}break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__.AttributeStatus.INTERPOLATED_DATA_DRIVEN:{const e=`u_t_${t}`;c.push({name:e,type:"float",getValue:(t,e,n,o)=>(d?t.getLayoutProperty(f):t.getPaintProperty(f)).interpolator.interpolationUniformValue(n,e)}),s+=`uniform float ${e};\n`;const n=I(o[f][0]),r=I(o[f][1]);i+=`${this._getType(E)} ${t} = mix(${n}${y}, ${r}${y}, ${e});\n`}}}this._shaderHeader=s,this._shaderMain=i,this._uniforms=c}_bit(t){return(this._key&1<<t)>>t}_getType(t){switch(t){case 1:return"float";case 2:return"vec2";case 3:return"vec3";case 4:return"vec4"}throw new Error("Invalid count")}_encodeColor(e){const n=255*e[3];return _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"].i8888to32(e[0]*n,e[1]*n,e[2]*n,n)}_encodePattern(t,e,n){if(!n?.rect)return;const o=2,s=n.rect,r=n.width,i=n.height;e[t]=this._encodeShort(s.x+o,0),e[t]|=this._encodeShort(s.y+o+i,16),e[t+1]=this._encodeShort(s.x+o+r,0),e[t+1]|=this._encodeShort(s.y+o,16)}_encodeByte(t,e){return(255&t)<<e}_encodeShort(t,e){return(65535&t)<<e}}r._encodingInfo={[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8_SIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,bytesPerElement:1,count:1,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8_UNSIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,bytesPerElement:1,count:1,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16_SIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,bytesPerElement:2,count:1,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16_UNSIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT,bytesPerElement:2,count:1,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8_SIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,bytesPerElement:1,count:2,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8_UNSIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,bytesPerElement:1,count:2,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16_SIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,bytesPerElement:2,count:2,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16_UNSIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT,bytesPerElement:2,count:2,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_SIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE,bytesPerElement:1,count:4,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_UNSIGNED]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,bytesPerElement:1,count:4,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R8G8B8A8_COLOR]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,bytesPerElement:1,count:4,normalized:!0},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16B16A16_DASHARRAY]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT,bytesPerElement:2,count:4,normalized:!1},[_enums_js__WEBPACK_IMPORTED_MODULE_1__.EncodingType.R16G16B16A16_PATTERN]:{dataType:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT,bytesPerElement:2,count:4,normalized:!1}};const i=t=>{switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.FLOAT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.INT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_INT:return 4;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_SHORT:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.HALF_FLOAT:return 2;case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.BYTE:case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE:return 1}},a=(t,e,n)=>{const o=e/n;if(1===t)switch(o){case 0:return".x";case 1:return".y";case 2:return".z";case 3:return".w"}else if(2===t)switch(o){case 0:return".xy";case 1:return".yz";case 2:return".zw"}else if(3===t)switch(o){case 0:return".xyz";case 1:return".yzw"}return""};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLSymbolMaterial.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLSymbolMaterial.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VTLIconMaterial: function() { return /* binding */ i; },
/* harmony export */   VTLTextMaterial: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js");
/* harmony import */ var _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VTLMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_pos",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,0,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_vertexOffset",2,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.SHORT,4,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_texAngleRange",4,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,8,16),new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_levelInfo",4,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,12,16)],n=[new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_3__.VertexElementDescriptor("a_opacityInfo",1,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.DataType.UNSIGNED_BYTE,0,1)];class i extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__.VTLMaterial{constructor(o){super(o)}geometryInfo(){return a}opacityInfo(){return n}attributes(){return i.ATTRIBUTES}attributesInfo(){return i.ATTRIBUTES_INFO}}i.ATTRIBUTES=["icon-color","icon-opacity","icon-halo-blur","icon-halo-color","icon-halo-width","icon-size"],i.ATTRIBUTES_INFO={"icon-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"icon-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100},"icon-halo-color":{name:"halo_color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"icon-halo-width":{name:"halo_width",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:4},"icon-halo-blur":{name:"halo_blur",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:4},"icon-size":{name:"size",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:32,isLayout:!0}};class c extends _VTLMaterial_js__WEBPACK_IMPORTED_MODULE_1__.VTLMaterial{constructor(o){super(o)}geometryInfo(){return a}opacityInfo(){return n}attributes(){return c.ATTRIBUTES}attributesInfo(){return c.ATTRIBUTES_INFO}}c.ATTRIBUTES=["text-color","text-opacity","text-halo-blur","text-halo-color","text-halo-width","text-size"],c.ATTRIBUTES_INFO={"text-color":{name:"color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"text-opacity":{name:"opacity",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:100},"text-halo-color":{name:"halo_color",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8G8B8A8_COLOR},"text-halo-width":{name:"halo_width",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:4},"text-halo-blur":{name:"halo_blur",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,precisionFactor:4},"text-size":{name:"size",type:_enums_js__WEBPACK_IMPORTED_MODULE_0__.EncodingType.R8_UNSIGNED,isLayout:!0}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeStatus: function() { return /* binding */ R; },
/* harmony export */   EncodingType: function() { return /* binding */ N; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var N,R;!function(N){N[N.R8_SIGNED=0]="R8_SIGNED",N[N.R8_UNSIGNED=1]="R8_UNSIGNED",N[N.R16_SIGNED=2]="R16_SIGNED",N[N.R16_UNSIGNED=3]="R16_UNSIGNED",N[N.R8G8_SIGNED=4]="R8G8_SIGNED",N[N.R8G8_UNSIGNED=5]="R8G8_UNSIGNED",N[N.R16G16_SIGNED=6]="R16G16_SIGNED",N[N.R16G16_UNSIGNED=7]="R16G16_UNSIGNED",N[N.R8G8B8A8_SIGNED=8]="R8G8B8A8_SIGNED",N[N.R8G8B8A8_UNSIGNED=9]="R8G8B8A8_UNSIGNED",N[N.R8G8B8A8_COLOR=10]="R8G8B8A8_COLOR",N[N.R16G16B16A16_DASHARRAY=11]="R16G16B16A16_DASHARRAY",N[N.R16G16B16A16_PATTERN=12]="R16G16B16A16_PATTERN"}(N||(N={})),function(N){N[N.UNIFORM=0]="UNIFORM",N[N.DATA_DRIVEN=1]="DATA_DRIVEN",N[N.INTERPOLATED_DATA_DRIVEN=2]="INTERPOLATED_DATA_DRIVEN",N[N.UNUSED=3]="UNUSED"}(R||(R={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/Filter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/Filter.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _expression_expression_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expression/expression.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/expression.js");
/* harmony import */ var _expression_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expression/types.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(e){this._expression=e}filter(e,r){if(!this._expression)return!0;try{return this._expression.evaluate(e,r)}catch(t){return console.log(t.message),!0}}static createFilter(n){if(!n)return null;this.isLegacyFilter(n)&&(n=this.convertLegacyFilter(n));try{const s=(0,_expression_expression_js__WEBPACK_IMPORTED_MODULE_0__.createExpression)(n,null,_expression_types_js__WEBPACK_IMPORTED_MODULE_1__.booleanType);return new t(s)}catch(s){return console.log(s.message),null}}static isLegacyFilter(e){if(!Array.isArray(e))return!0;if(0===e.length)return!0;switch(e[0]){case"==":case"!=":case">":case"<":case">=":case"<=":return 3===e.length&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"in":return e.length>=3&&"string"==typeof e[1]&&!Array.isArray(e[2]);case"!in":case"none":case"!has":return!0;case"any":case"all":for(let r=1;r<e.length;r++)if(this.isLegacyFilter(e[r]))return!0;return!1;case"has":return 2===e.length&&("$id"===e[1]||"$type"===e[1]);default:return!1}}static convertLegacyFilter(e){if(!Array.isArray(e)||0===e.length)return!0;const r=e[0];if(1===e.length)return"any"!==r;switch(r){case"==":return t.convertComparison("==",e[1],e[2]);case"!=":return t.negate(t.convertComparison("==",e[1],e[2]));case">":case"<":case">=":case"<=":return t.convertComparison(r,e[1],e[2]);case"in":return t.convertIn(e[1],e.slice(2));case"!in":return t.negate(t.convertIn(e[1],e.slice(2)));case"any":case"all":case"none":return t.convertCombining(r,e.slice(1));case"has":return t.convertHas(e[1]);case"!has":return t.negate(t.convertHas(e[1]));default:throw new Error("Unexpected legacy filter.")}}static convertComparison(e,r,t){switch(r){case"$type":return[e,["geometry-type"],t];case"$id":return[e,["id"],t];default:return[e,["get",r],t]}}static convertIn(e,r){switch(e){case"$type":return["in",["geometry-type"],["literal",r]];case"$id":return["in",["id"],["literal",r]];default:return["in",["get",e],["literal",r]]}}static convertHas(e){switch(e){case"$type":return!0;case"$id":return["has-id"];default:return["has",e]}}static convertCombining(e,r){return[e].concat(r.map(this.convertLegacyFilter))}static negate(e){return["!",e]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RotationAlignment: function() { return /* binding */ l; },
/* harmony export */   StyleDefinition: function() { return /* binding */ f; },
/* harmony export */   StyleLayerType: function() { return /* binding */ a; },
/* harmony export */   SymbolAnchor: function() { return /* binding */ m; },
/* harmony export */   SymbolPlacement: function() { return /* binding */ n; },
/* harmony export */   TextJustification: function() { return /* binding */ u; },
/* harmony export */   TextTransform: function() { return /* binding */ o; },
/* harmony export */   TextWritingMode: function() { return /* binding */ p; },
/* harmony export */   TranslateAnchor: function() { return /* binding */ r; },
/* harmony export */   Visibility: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../symbols/cim/enums.js */ "./node_modules/@arcgis/core/symbols/cim/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var a,i,n,l,u,m,o,r,p;!function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.FILL=1]="FILL",e[e.LINE=2]="LINE",e[e.SYMBOL=3]="SYMBOL",e[e.CIRCLE=4]="CIRCLE"}(a||(a={})),function(e){e[e.VISIBLE=0]="VISIBLE",e[e.NONE=1]="NONE"}(i||(i={})),function(e){e[e.POINT=0]="POINT",e[e.LINE=1]="LINE",e[e.LINE_CENTER=2]="LINE_CENTER"}(n||(n={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT",e[e.AUTO=2]="AUTO"}(l||(l={})),function(e){e[e.AUTO=0]="AUTO",e[e.LEFT=1]="LEFT",e[e.CENTER=2]="CENTER",e[e.RIGHT=3]="RIGHT"}(u||(u={})),function(e){e[e.CENTER=0]="CENTER",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT",e[e.TOP=3]="TOP",e[e.BOTTOM=4]="BOTTOM",e[e.TOP_LEFT=5]="TOP_LEFT",e[e.TOP_RIGHT=6]="TOP_RIGHT",e[e.BOTTOM_LEFT=7]="BOTTOM_LEFT",e[e.BOTTOM_RIGHT=8]="BOTTOM_RIGHT"}(m||(m={})),function(e){e[e.NONE=0]="NONE",e[e.UPPERCASE=1]="UPPERCASE",e[e.LOWERCASE=2]="LOWERCASE"}(o||(o={})),function(e){e[e.MAP=0]="MAP",e[e.VIEWPORT=1]="VIEWPORT"}(r||(r={})),function(e){e[e.HORIZONTAL=0]="HORIZONTAL",e[e.VERTICAL=1]="VERTICAL"}(p||(p={}));class f{}f.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},f.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},f.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE},"line-cap":{type:"enum",values:["butt","round","square"],default:_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_0__.CapType.BUTT},"line-join":{type:"enum",values:["bevel","round","miter"],default:_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_0__.JoinType.MITER},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},f.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE},"symbol-avoid-edges":{type:"boolean",default:!1},"symbol-placement":{type:"enum",values:["point","line","line-center"],default:n.POINT},"symbol-sort-key":{type:"number",default:-1},"symbol-spacing":{type:"number",minimum:1,default:250},"icon-allow-overlap":{type:"boolean",default:!1},"icon-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:m.CENTER},"icon-ignore-placement":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"icon-optional":{type:"boolean",default:!1},"icon-padding":{type:"number",minimum:0,default:2},"icon-rotate":{type:"number",default:0},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:l.AUTO},"icon-size":{type:"number",minimum:0,default:1},"text-allow-overlap":{type:"boolean",default:!1},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:m.CENTER},"text-field":{type:"string"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-ignore-placement":{type:"boolean",default:!1},"text-justify":{type:"enum",values:["auto","left","center","right"],default:u.CENTER},"text-keep-upright":{type:"boolean",default:!0},"text-letter-spacing":{type:"number",default:0},"text-line-height":{type:"number",default:1.2},"text-max-angle":{type:"number",minimum:0,default:45},"text-max-width":{type:"number",minimum:0,default:10},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-optional":{type:"boolean",default:!1},"text-padding":{type:"number",minimum:0,default:2},"text-rotate":{type:"number",default:0},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:l.AUTO},"text-size":{type:"number",minimum:0,default:16},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:o.NONE},"text-writing-mode":{type:"array",value:"enum",values:["horizontal","vertical"],default:[p.HORIZONTAL]}},f.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:i.VISIBLE}},f.backgroundPaintDefinition={"background-color":{type:"color",default:[0,0,0,1]},"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-pattern":{type:"string"}},f.fillPaintDefinition={"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-pattern":{type:"string"},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:r.MAP}},f.linePaintDefinition={"line-blur":{type:"number",minimum:0,default:0},"line-color":{type:"color",default:[0,0,0,1]},"line-dasharray":{type:"array",value:"number",default:[]},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-pattern":{type:"string"},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:r.MAP},"line-width":{type:"number",minimum:0,default:1}},f.symbolPaintDefinition={"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:r.MAP},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-blur":{type:"number",minimum:0,default:0},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:r.MAP}},f.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},f.circlePaintDefinition={"circle-blur":{type:"number",minimum:0,default:0},"circle-color":{type:"color",default:[0,0,0,1]},"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:r.MAP}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleLayer.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleLayer.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundStyleLayer: function() { return /* binding */ V; },
/* harmony export */   CapType: function() { return /* binding */ _; },
/* harmony export */   CircleStyleLayer: function() { return /* binding */ A; },
/* harmony export */   FillStyleLayer: function() { return /* binding */ v; },
/* harmony export */   IconLayout: function() { return /* binding */ U; },
/* harmony export */   IndexItem: function() { return /* binding */ L; },
/* harmony export */   LineStyleLayer: function() { return /* binding */ x; },
/* harmony export */   StyleLayer: function() { return /* binding */ T; },
/* harmony export */   SymbolStyleLayer: function() { return /* binding */ I; },
/* harmony export */   TextLayout: function() { return /* binding */ O; }
/* harmony export */ });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/enums.js");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GeometryUtils.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js");
/* harmony import */ var _shaders_VTLBackgroundMaterial_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaders/VTLBackgroundMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLBackgroundMaterial.js");
/* harmony import */ var _shaders_VTLCircleMaterial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaders/VTLCircleMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLCircleMaterial.js");
/* harmony import */ var _shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaders/VTLFillMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLFillMaterial.js");
/* harmony import */ var _shaders_VTLLineMaterial_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaders/VTLLineMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLLineMaterial.js");
/* harmony import */ var _shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shaders/VTLSymbolMaterial.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLSymbolMaterial.js");
/* harmony import */ var _Filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Filter.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/Filter.js");
/* harmony import */ var _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StyleDefinition.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js");
/* harmony import */ var _StyleProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StyleProperty.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleProperty.js");
/* harmony import */ var _webgl_definitions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl/definitions.js */ "./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=8;var _;!function(t){t[t.BUTT=0]="BUTT",t[t.ROUND=1]="ROUND",t[t.SQUARE=2]="SQUARE",t[t.UNKNOWN=4]="UNKNOWN"}(_||(_={}));class L{constructor(t,i,e,a,o,r){this.layer=t,this.feature=i,this.bounds=e,this.normalizationRatio=a,this.normalizationOffsetX=o,this.normalizationOffsetY=r}}class T{constructor(t,i,e,a){switch(this.type=t,this.typeName=i.type,this.id=i.id,this.source=i.source,this.sourceLayer=i["source-layer"],this.minzoom=i.minzoom,this.maxzoom=i.maxzoom,this.filter=i.filter,this.layout=i.layout,this.paint=i.paint,this.z=e,this.uid=a,t){case _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleLayerType.BACKGROUND:this._layoutDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.backgroundLayoutDefinition,this._paintDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.backgroundPaintDefinition;break;case _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleLayerType.FILL:this._layoutDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.fillLayoutDefinition,this._paintDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.fillPaintDefinition;break;case _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleLayerType.LINE:this._layoutDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.lineLayoutDefinition,this._paintDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.linePaintDefinition;break;case _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleLayerType.SYMBOL:this._layoutDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.symbolPaintDefinition;break;case _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleLayerType.CIRCLE:this._layoutDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.circleLayoutDefinition,this._paintDefinition=_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.StyleDefinition.circlePaintDefinition}this._layoutProperties=this._parseLayout(this.layout),this._paintProperties=this._parsePaint(this.paint)}getFeatureFilter(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=_Filter_js__WEBPACK_IMPORTED_MODULE_8__["default"].createFilter(this.filter)}getLayoutProperty(t){return this._layoutProperties[t]}getPaintProperty(t){return this._paintProperties[t]}getLayoutValue(t,i,e){let a;const o=this._layoutProperties[t];return o&&(a=o.getValue(i,e)),void 0===a&&(a=this._layoutDefinition[t].default),a}getPaintValue(t,i,e){let a;const o=this._paintProperties[t];return o&&(a=o.getValue(i,e)),void 0===a&&(a=this._paintDefinition[t].default),a}isPainterDataDriven(){const t=this._paintProperties;if(t)for(const i in t)if(t[i].isDataDriven)return!0;return!1}isIntersectingFeature(t,i,e,a,o,r,n){return!1}getFeatureInflatedBounds(t,i,e,a){return null}_parseLayout(t){const i={};for(const e in t){const a=this._layoutDefinition[e];a&&(i[e]=new _StyleProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"](a,t[e]))}return i}_parsePaint(t){const i={};for(const e in t){const a=this._paintDefinition[e];a&&(i[e]=new _StyleProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"](a,t[e]))}return i}computeAttributesKey(t,i,e,a){let o=0,r=0;for(const n of i){let t=3;if(!n||n!==a){const i=e[n],{isLayout:a,isOptional:o}=i,r=a?this.getLayoutProperty(n):this.getPaintProperty(n);t=r?.interpolator?2:r?.isDataDriven?1:o&&!r?3:0}r|=t<<o,o+=2}return r<<3|t}}class V extends T{constructor(t,e,a,o){super(t,e,a,o),this.backgroundMaterial=new _shaders_VTLBackgroundMaterial_js__WEBPACK_IMPORTED_MODULE_3__.VTLBackgroundMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.BACKGROUND,_shaders_VTLBackgroundMaterial_js__WEBPACK_IMPORTED_MODULE_3__.VTLBackgroundMaterial.ATTRIBUTES,_shaders_VTLBackgroundMaterial_js__WEBPACK_IMPORTED_MODULE_3__.VTLBackgroundMaterial.ATTRIBUTES_INFO))}}class v extends T{constructor(t,e,a,o){super(t,e,a,o);const r=this.getPaintProperty("fill-color"),n=this.getPaintProperty("fill-opacity"),s=this.getPaintProperty("fill-pattern");this.hasDataDrivenColor=r?.isDataDriven,this.hasDataDrivenOpacity=n?.isDataDriven,this.hasDataDrivenFill=this.hasDataDrivenColor||this.hasDataDrivenOpacity||s?.isDataDriven;const u=this.getPaintProperty("fill-outline-color");this.outlineUsesFillColor=!u,this.hasDataDrivenOutlineColor=u?.isDataDriven,this.hasDataDrivenOutline=u?u.isDataDriven:!!r&&r.isDataDriven,this.hasDataDrivenOutline=(u?this.hasDataDrivenOutlineColor:this.hasDataDrivenColor)||this.hasDataDrivenOpacity,this.fillMaterial=new _shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLFillMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.FILL,_shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLFillMaterial.ATTRIBUTES,_shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLFillMaterial.ATTRIBUTES_INFO)),this.outlineMaterial=new _shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLOutlineMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.OUTLINE,this.outlineUsesFillColor?_shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLOutlineMaterial.ATTRIBUTES_FILL:_shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLOutlineMaterial.ATTRIBUTES_OUTLINE,this.outlineUsesFillColor?_shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLOutlineMaterial.ATTRIBUTES_INFO_FILL:_shaders_VTLFillMaterial_js__WEBPACK_IMPORTED_MODULE_5__.VTLOutlineMaterial.ATTRIBUTES_INFO_OUTLINE),this.outlineUsesFillColor)}getFeatureInflatedBounds(t,i,e,a){const o=R(t);if(!o)return null;const r=this.getPaintValue("fill-translate",i,t),n=a*Math.max(r[0],r[1]);return o[0]-=n,o[2]-=n,o[1]+=n,o[3]+=n,o}isIntersectingFeature(t,i,r,n,s,l,h){const u=n.getGeometry();if(!u)return!1;const p=d/h.normalizationRatio;t=t/h.normalizationRatio+h.normalizationOffsetX,i=i/h.normalizationRatio+h.normalizationOffsetY;const g=(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.translateAnchor)(this.getPaintValue("fill-translate",s,n),this.getPaintValue("fill-translate-anchor",s,n),l,d);t-=p*g.x,i-=p*g.y;return!!(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.pointInPolygon)(t,i,u)||(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.distanceFromToPolylineWithinThreshold)(t,i,u,p*r)}}class x extends T{constructor(t,e,a,o){super(t,e,a,o);const r=this.getPaintProperty("line-pattern");if(this.lineMaterial=new _shaders_VTLLineMaterial_js__WEBPACK_IMPORTED_MODULE_6__.VTLLineMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.LINE,_shaders_VTLLineMaterial_js__WEBPACK_IMPORTED_MODULE_6__.VTLLineMaterial.ATTRIBUTES,_shaders_VTLLineMaterial_js__WEBPACK_IMPORTED_MODULE_6__.VTLLineMaterial.ATTRIBUTES_INFO,r?"line-dasharray":"")),this.hasDataDrivenLine=this.getPaintProperty("line-blur")?.isDataDriven||this.getPaintProperty("line-color")?.isDataDriven||this.getPaintProperty("line-gap-width")?.isDataDriven||this.getPaintProperty("line-offset")?.isDataDriven||this.getPaintProperty("line-opacity")?.isDataDriven||this.getPaintProperty("line-pattern")?.isDataDriven||this.getPaintProperty("line-dasharray")?.isDataDriven||this.getLayoutProperty("line-cap")?.isDataDriven||this.getPaintProperty("line-width")?.isDataDriven,this.canUseThinTessellation=!1,!this.hasDataDrivenLine){const t=this.getPaintProperty("line-width");if(!t||"number"==typeof t&&.5*t<_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_11__.thinLineHalfWidthThreshold){const t=this.getPaintProperty("line-offset");(!t||"number"==typeof t&&0===t)&&(this.canUseThinTessellation=!0)}}}getDashKey(t,i){let e;switch(i){case _.BUTT:e="Butt";break;case _.ROUND:e="Round";break;case _.SQUARE:e="Square";break;default:e="Butt"}return`dasharray-[${t.toString()}]-${e}`}getFeatureInflatedBounds(t,i,e,a){const o=R(t);if(!o)return null;const r=this.getPaintValue("line-translate",i,t),n=a*Math.max(r[0],r[1]);o[0]-=n,o[2]-=n,o[1]+=n,o[3]+=n;const s=a*Math.abs(this.getPaintValue("line-offset",i,t)||0),l=a*(this.getPaintValue("line-width",i,t)/2);return o[0]-=s+l,o[1]-=s+l,o[2]+=s+l,o[3]+=s+l,o}isIntersectingFeature(t,i,a,n,s,l,h){let u=n.getGeometry();if(!u)return!1;const p=d/h.normalizationRatio;t=t/h.normalizationRatio+h.normalizationOffsetX,i=i/h.normalizationRatio+h.normalizationOffsetY;const g=(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.translateAnchor)(this.getPaintValue("line-translate",s,n),this.getPaintValue("line-translate-anchor",s,n),l,d);t-=p*g.x,i-=p*g.y;const c=p*this.getPaintValue("line-offset",s,n)||0;0!==c&&(u=(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.offsetLine)(u,-c));const y=this.getPaintValue("line-width",s,n);return (0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.distanceFromToPolylineWithinThreshold)(t,i,u,p*(a+y/2))}}class I extends T{constructor(t,e,a,o){super(t,e,a,o),this.iconMaterial=new _shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__.VTLIconMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.ICON,_shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__.VTLIconMaterial.ATTRIBUTES,_shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__.VTLIconMaterial.ATTRIBUTES_INFO)),this.textMaterial=new _shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__.VTLTextMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.TEXT,_shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__.VTLTextMaterial.ATTRIBUTES,_shaders_VTLSymbolMaterial_js__WEBPACK_IMPORTED_MODULE_7__.VTLTextMaterial.ATTRIBUTES_INFO)),this.hasDataDrivenIcon=this.getPaintProperty("icon-color")?.isDataDriven||this.getPaintProperty("icon-halo-blur")?.isDataDriven||this.getPaintProperty("icon-halo-color")?.isDataDriven||this.getPaintProperty("icon-halo-width")?.isDataDriven||this.getPaintProperty("icon-opacity")?.isDataDriven||this.getLayoutProperty("icon-size")?.isDataDriven,this.hasDataDrivenText=this.getPaintProperty("text-color")?.isDataDriven||this.getPaintProperty("text-halo-blur")?.isDataDriven||this.getPaintProperty("text-halo-color")?.isDataDriven||this.getPaintProperty("text-halo-width")?.isDataDriven||this.getPaintProperty("text-opacity")?.isDataDriven||this.getLayoutProperty("text-size")?.isDataDriven}}class A extends T{constructor(t,e,a,o){super(t,e,a,o),this.circleMaterial=new _shaders_VTLCircleMaterial_js__WEBPACK_IMPORTED_MODULE_4__.VTLCircleMaterial(this.computeAttributesKey(_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderProgramType.CIRCLE,_shaders_VTLCircleMaterial_js__WEBPACK_IMPORTED_MODULE_4__.VTLCircleMaterial.ATTRIBUTES,_shaders_VTLCircleMaterial_js__WEBPACK_IMPORTED_MODULE_4__.VTLCircleMaterial.ATTRIBUTES_INFO))}getFeatureInflatedBounds(t,i,e,a){const o=R(t);if(!o)return null;const r=this.getPaintValue("circle-translate",i,t),n=Math.max(r[0],r[1]);o[0]-=n,o[2]-=n,o[1]+=n,o[3]+=n;const s=a*(d*(this.getPaintValue("circle-radius",i,t)+this.getPaintValue("circle-stroke-width",i,t))/2);return o[0]-=s,o[1]-=s,o[2]+=s,o[3]+=s,o}isIntersectingFeature(t,i,a,o,r,n,s){const l=o.getGeometry();if(!l)return!1;const h=d/s.normalizationRatio;t=t/s.normalizationRatio+s.normalizationOffsetX,i=i/s.normalizationRatio+s.normalizationOffsetY,a*=h;const u=(0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__.translateAnchor)(this.getPaintValue("circle-translate",r,o),this.getPaintValue("circle-translate-anchor",r,o),n,h),p=h*(this.getPaintValue("circle-radius",r,o)+this.getPaintValue("circle-stroke-width",r,o));let g,c;for(const e of l)if(e)for(const o of e){g=o.x+u.x,c=o.y+u.y;if(Math.sqrt((t-g)*(t-g)+(i-c)*(i-c))-a<=p)return!0}return!1}}class U{constructor(t,i,e){let a;this.allowOverlap=t.getLayoutValue("icon-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("icon-ignore-placement",i),this.keepUpright=t.getLayoutValue("icon-keep-upright",i),this.optional=t.getLayoutValue("icon-optional",i),this.rotationAlignment=t.getLayoutValue("icon-rotation-alignment",i),this.rotationAlignment===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.RotationAlignment.AUTO&&(this.rotationAlignment=e?_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.RotationAlignment.MAP:_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.RotationAlignment.VIEWPORT),a=t.getLayoutProperty("icon-anchor"),a?.isDataDriven?this._anchorProp=a:this.anchor=t.getLayoutValue("icon-anchor",i),a=t.getLayoutProperty("icon-offset"),a?.isDataDriven?this._offsetProp=a:this.offset=t.getLayoutValue("icon-offset",i),a=t.getLayoutProperty("icon-padding"),a?.isDataDriven?this._paddingProp=a:this.padding=t.getLayoutValue("icon-padding",i),a=t.getLayoutProperty("icon-rotate"),a?.isDataDriven?this._rotateProp=a:this.rotate=t.getLayoutValue("icon-rotate",i),a=t.getLayoutProperty("icon-size"),a?.isDataDriven?this._sizeProp=a:this.size=t.getLayoutValue("icon-size",i)}update(t,i){this._anchorProp&&(this.anchor=this._anchorProp.getValue(t,i)),this._offsetProp&&(this.offset=this._offsetProp.getValue(t,i)),this._paddingProp&&(this.padding=this._paddingProp.getValue(t,i)),this._rotateProp&&(this.rotate=this._rotateProp.getValue(t,i)),this._sizeProp&&(this.size=this._sizeProp.getValue(t,i))}}class O{constructor(t,i,e){let a;this.allowOverlap=t.getLayoutValue("text-allow-overlap",i),this.ignorePlacement=t.getLayoutValue("text-ignore-placement",i),this.keepUpright=t.getLayoutValue("text-keep-upright",i),this.optional=t.getLayoutValue("text-optional",i),this.rotationAlignment=t.getLayoutValue("text-rotation-alignment",i),this.rotationAlignment===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.RotationAlignment.AUTO&&(this.rotationAlignment=e?_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.RotationAlignment.MAP:_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_9__.RotationAlignment.VIEWPORT),a=t.getLayoutProperty("text-anchor"),a?.isDataDriven?this._anchorProp=a:this.anchor=t.getLayoutValue("text-anchor",i),a=t.getLayoutProperty("text-justify"),a?.isDataDriven?this._justifyProp=a:this.justify=t.getLayoutValue("text-justify",i),a=t.getLayoutProperty("text-letter-spacing"),a?.isDataDriven?this._letterSpacingProp=a:this.letterSpacing=t.getLayoutValue("text-letter-spacing",i),a=t.getLayoutProperty("text-line-height"),a?.isDataDriven?this._lineHeightProp=a:this.lineHeight=t.getLayoutValue("text-line-height",i),a=t.getLayoutProperty("text-max-angle"),a?.isDataDriven?this._maxAngleProp=a:this.maxAngle=t.getLayoutValue("text-max-angle",i),a=t.getLayoutProperty("text-max-width"),a?.isDataDriven?this._maxWidthProp=a:this.maxWidth=t.getLayoutValue("text-max-width",i),a=t.getLayoutProperty("text-offset"),a?.isDataDriven?this._offsetProp=a:this.offset=t.getLayoutValue("text-offset",i),a=t.getLayoutProperty("text-padding"),a?.isDataDriven?this._paddingProp=a:this.padding=t.getLayoutValue("text-padding",i),a=t.getLayoutProperty("text-rotate"),a?.isDataDriven?this._rotateProp=a:this.rotate=t.getLayoutValue("text-rotate",i),a=t.getLayoutProperty("text-size"),a?.isDataDriven?this._sizeProp=a:this.size=t.getLayoutValue("text-size",i),a=t.getLayoutProperty("text-writing-mode"),a?.isDataDriven?this._writingModeProp=a:this.writingMode=t.getLayoutValue("text-writing-mode",i)}update(t,i){this._anchorProp&&(this.anchor=this._anchorProp.getValue(t,i)),this._justifyProp&&(this.justify=this._justifyProp.getValue(t,i)),this._letterSpacingProp&&(this.letterSpacing=this._letterSpacingProp.getValue(t,i)),this._lineHeightProp&&(this.lineHeight=this._lineHeightProp.getValue(t,i)),this._maxAngleProp&&(this.maxAngle=this._maxAngleProp.getValue(t,i)),this._maxWidthProp&&(this.maxWidth=this._maxWidthProp.getValue(t,i)),this._offsetProp&&(this.offset=this._offsetProp.getValue(t,i)),this._paddingProp&&(this.padding=this._paddingProp.getValue(t,i)),this._rotateProp&&(this.rotate=this._rotateProp.getValue(t,i)),this._sizeProp&&(this.size=this._sizeProp.getValue(t,i)),this._writingModeProp&&(this.writingMode=this._writingModeProp.getValue(t,i))}}function R(i){const e=i?.getGeometry();if(null==e)return null;let a=1/0,o=1/0,r=-1/0,n=-1/0;for(const t of e)if(t)for(const i of t)a=Math.min(a,i.x),o=Math.min(o,i.y),r=Math.max(r,i.x),n=Math.max(n,i.y);return (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(a,o,r,n)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleProperty.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleProperty.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GeometryUtils.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js");
/* harmony import */ var _expression_expression_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expression/expression.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/expression.js");
/* harmony import */ var _expression_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expression/types.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class h{constructor(t,e){let o;switch(this.isDataDriven=!1,this.interpolator=null,t.type){case"number":case"color":o=!0;break;case"array":o="number"===t.value;break;default:o=!1}if(null==e&&(e=t.default),Array.isArray(e)&&e.length>0&&_expression_expression_js__WEBPACK_IMPORTED_MODULE_2__.ops[e[0]]){const r={number:_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.numberType,color:_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.colorType,string:_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.stringType,boolean:_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.booleanType,enum:_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.stringType};try{const o="array"===t.type?(0,_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.arrayType)(r[t.value]||_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.valueType,t.length):r[t.type],u=(0,_expression_expression_js__WEBPACK_IMPORTED_MODULE_2__.createExpression)(e,null,o);this.getValue=this._buildExpression(u,t),this.isDataDriven=!0,u instanceof _expression_expression_js__WEBPACK_IMPORTED_MODULE_2__.Interpolate&&u.input instanceof _expression_expression_js__WEBPACK_IMPORTED_MODULE_2__.Zoom&&(this.interpolator=u)}catch(m){console.log(m.message),this.getValue=this._buildSimple(t.default)}return}o&&"interval"===e.type&&(o=!1);const h=e?.stops&&e.stops.length>0;if(h)for(const r of e.stops)r[1]=this._validate(r[1],t);if(this.isDataDriven=!!e&&!!e.property,this.isDataDriven)if(void 0!==e.default&&(e.default=this._validate(e.default,t)),h)switch(e.type){case"identity":this.getValue=this._buildIdentity(e,t);break;case"categorical":this.getValue=this._buildCategorical(e,t);break;default:this.getValue=o?this._buildInterpolate(e,t):this._buildInterval(e,t)}else this.getValue=this._buildIdentity(e,t);else h?this.getValue=o?this._buildZoomInterpolate(e):this._buildZoomInterval(e):(e=this._validate(e,t),this.getValue=this._buildSimple(e))}_validate(t,e){if("number"===e.type){if(null!=e.minimum&&t<e.minimum)return e.minimum;if(null!=e.maximum&&t>e.maximum)return e.maximum}else"color"===e.type?t=h._parseColor(t):"enum"===e.type?"string"==typeof t&&(t=e.values.indexOf(t)):"array"===e.type&&"enum"===e.value?t=t.map((t=>"string"==typeof t?e.values.indexOf(t):t)):"string"===e.type&&(t=(0,_expression_types_js__WEBPACK_IMPORTED_MODULE_3__.valueToString)(t));return t}_buildSimple(t){return()=>t}_buildExpression(t,e){return(r,i)=>{try{const l=t.evaluate(i,r);return void 0===l?e.default:this._validate(l,e)}catch(l){return console.log(l.message),e.default}}}_buildIdentity(t,e){return(r,i)=>{let l;return i&&(l=i.values[t.property]),void 0!==l&&(l=this._validate(l,e)),null!=l?l:void 0!==t.default?t.default:e.default}}_buildCategorical(t,e){return(r,i)=>{let l;return i&&(l=i.values[t.property]),l=this._categorical(l,t.stops),void 0!==l?l:void 0!==t.default?t.default:e.default}}_buildInterval(t,e){return(r,i)=>{let l;return i&&(l=i.values[t.property]),"number"==typeof l?this._interval(l,t.stops):void 0!==t.default?t.default:e.default}}_buildInterpolate(t,e){return(r,i)=>{let l;return i&&(l=i.values[t.property]),"number"==typeof l?this._interpolate(l,t.stops,t.base||1):void 0!==t.default?t.default:e.default}}_buildZoomInterpolate(t){return e=>this._interpolate(e,t.stops,t.base||1)}_buildZoomInterval(t){return e=>this._interval(e,t.stops)}_categorical(t,e){const r=e.length;for(let i=0;i<r;i++)if(e[i][0]===t)return e[i][1]}_interval(t,e){const r=e.length;let i=0;for(let l=0;l<r&&e[l][0]<=t;l++)i=l;return e[i][1]}_interpolate(t,r,i){let l,a;const s=r.length;for(let e=0;e<s;e++){const i=r[e];if(!(i[0]<=t)){a=i;break}l=i}if(l&&a){const r=a[0]-l[0],s=t-l[0],n=1===i?s/r:(i**s-1)/(i**r-1);if(Array.isArray(l[1])){const t=l[1],r=a[1],i=[];for(let l=0;l<t.length;l++)i.push((0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__.interpolate)(t[l],r[l],n));return i}return (0,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_1__.interpolate)(l[1],a[1],n)}return l?l[1]:a?a[1]:void 0}static _isEmpty(t){for(const e in t)if(t.hasOwnProperty(e))return!1;return!0}static _parseColor(e){return Array.isArray(e)?e:("string"==typeof e&&(e=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](e)),e instanceof _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]&&!this._isEmpty(e)?_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].toUnitRGBA(e):void 0)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleDefinition.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js");
/* harmony import */ var _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleLayer.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleLayer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l{constructor(t){if(this._style=t,this.backgroundBucketIds=[],this._uidToLayer=new Map,this._layerByName={},this._runningId=0,t.layers||(t.layers=[]),this.version=parseFloat(t.version),this.layers=t.layers.map(((e,t,r)=>this._create(e,t,r))).filter((e=>!!e)),this.layers)for(let r=0;r<this.layers.length;r++){const t=this.layers[r];this._layerByName[t.id]=t,this._uidToLayer.set(t.uid,t),t.type===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.BACKGROUND&&this.backgroundBucketIds.push(t.id)}this._identifyRefLayers()}isPainterDataDriven(e){const t=this._layerByName[e];return!!t&&t.isPainterDataDriven()}getStyleLayerId(e){return e>=this.layers.length?null:this.layers[e].id}getStyleLayerByUID(e){return this._uidToLayer.get(e)??null}getStyleLayerIndex(e){const t=this._layerByName[e];return t?this.layers.indexOf(t):-1}setStyleLayer(e,t){if(!e?.id)return;const r=this._style;null!=t&&t>=this.layers.length&&(t=this.layers.length-1);let s,i=!0;const a=this._layerByName[e.id];if(a){const y=this.layers.indexOf(a);t||(t=y),t===y?(i=!1,s=l._recreateLayer(e,a),this.layers[t]=s,r.layers[t]=e):(this.layers.splice(y,1),r.layers.splice(y,1),s=this._create(e,t,this.layers),this.layers.splice(t,0,s),r.layers.splice(t,0,e))}else s=this._create(e,t,this.layers),!t||t>=this.layers.length?(this.layers.push(s),r.layers.push(e)):(this.layers.splice(t,0,s),r.layers.splice(t,0,e));this._layerByName[e.id]=s,this._uidToLayer.set(s.uid,s),i&&this._recomputeZValues(),this._identifyRefLayers()}getStyleLayer(e){const t=this._layerByName[e];return t?{type:t.typeName,id:t.id,source:t.source,"source-layer":t.sourceLayer,minzoom:t.minzoom,maxzoom:t.maxzoom,filter:t.filter,layout:t.layout,paint:t.paint}:null}deleteStyleLayer(e){const t=this._layerByName[e];if(t){delete this._layerByName[e],this._uidToLayer.delete(t.uid);const r=this.layers.indexOf(t);this.layers.splice(r,1),this._style.layers.splice(r,1),this._recomputeZValues(),this._identifyRefLayers()}}getLayerById(e){return this._layerByName[e]}getLayoutProperties(e){const t=this._layerByName[e];return t?t.layout:null}getPaintProperties(e){const t=this._layerByName[e];return t?t.paint:null}setPaintProperties(e,t){const r=this._layerByName[e];if(!r)return;const s={type:r.typeName,id:r.id,source:r.source,"source-layer":r.sourceLayer,minzoom:r.minzoom,maxzoom:r.maxzoom,filter:r.filter,layout:r.layout,paint:t},i=l._recreateLayer(s,r),a=this.layers.indexOf(r);this.layers[a]=i,this._style.layers[a].paint=t,this._layerByName[r.id]=i,this._uidToLayer.set(r.uid,i)}setLayoutProperties(e,t){const r=this._layerByName[e];if(!r)return;const s={type:r.typeName,id:r.id,source:r.source,"source-layer":r.sourceLayer,minzoom:r.minzoom,maxzoom:r.maxzoom,filter:r.filter,layout:t,paint:r.paint},i=l._recreateLayer(s,r),a=this.layers.indexOf(r);this.layers[a]=i,this._style.layers[a].layout=t,this._layerByName[r.id]=i,this._uidToLayer.set(r.uid,i)}setStyleLayerVisibility(e,t){const r=this._layerByName[e];if(!r)return;const s=r.layout||{};s.visibility=t;const i={type:r.typeName,id:r.id,source:r.source,"source-layer":r.sourceLayer,minzoom:r.minzoom,maxzoom:r.maxzoom,filter:r.filter,layout:s,paint:r.paint},a=l._recreateLayer(i,r),y=this.layers.indexOf(r);this.layers[y]=a,this._style.layers[y].layout=s,this._layerByName[r.id]=a,this._uidToLayer.set(r.uid,a)}getStyleLayerVisibility(e){const t=this._layerByName[e];if(!t)return"none";const r=t.layout;return r?.visibility??"visible"}_recomputeZValues(){const e=this.layers,t=1/(e.length+1);for(let r=0;r<e.length;r++)e[r].z=1-(1+r)*t}_identifyRefLayers(){const t=[],r=[];let s=0;for(const i of this.layers){const a=i.layout;if(i.type===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.FILL){const e=i;let r=i.source+"|"+i.sourceLayer;r+="|"+(a?.visibility??""),r+="|"+i.minzoom,r+="|"+i.maxzoom,r+="|"+JSON.stringify(i.filter),(e.hasDataDrivenFill||e.hasDataDrivenOutline)&&(r+="|"+s),t.push({key:r,layer:i})}else if(i.type===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.LINE){const e=i,t=i.paint,l=null!=t&&(null!=t["line-pattern"]||null!=t["line-dasharray"]);let y=i.source+"|"+i.sourceLayer;y+="|"+(a?.visibility??""),y+="|"+i.minzoom,y+="|"+i.maxzoom,y+="|"+JSON.stringify(i.filter),y+="|"+(void 0!==a?a["line-cap"]:""),y+="|"+(void 0!==a?a["line-join"]:""),(e.hasDataDrivenLine||l)&&(y+="|"+s),r.push({key:y,layer:i})}++s}this._assignRefLayers(t),this._assignRefLayers(r)}_assignRefLayers(t){let r,s;t.sort(((e,t)=>e.key<t.key?-1:e.key>t.key?1:0));const i=t.length;for(let a=0;a<i;a++){const l=t[a];if(l.key===r)l.layer.refLayerId=s;else if(r=l.key,s=l.layer.id,l.layer.type===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.FILL){if(!l.layer.getPaintProperty("fill-outline-color"))for(let e=a+1;e<i;e++){const i=t[e];if(i.key!==r)break;if(i.layer.getPaintProperty("fill-outline-color")){t[a]=i,t[e]=l,s=i.layer.id;break}}}else if(l.layer.type===_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.LINE){let e=l.layer;for(let y=a+1;y<i;y++){const i=t[y];if(i.key!==r)break;const n=i.layer;(e.canUseThinTessellation&&!n.canUseThinTessellation||!e.canUseThinTessellation&&(n.getPaintProperty("line-pattern")||n.getPaintProperty("line-dasharray")))&&(e=n,t[a]=i,t[y]=l,s=i.layer.id)}}}}_create(l,y,n){const o=1-(1+y)*(1/(n.length+1)),u=this._runningId++;switch(l.type){case"background":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.BACKGROUND,l,o,u);case"fill":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.FillStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.FILL,l,o,u);case"line":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.LineStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.LINE,l,o,u);case"symbol":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.SymbolStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.SYMBOL,l,o,u);case"raster":return console.warn(`Unsupported vector tile raster layer ${l.id}`),null;case"circle":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.CircleStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.CIRCLE,l,o,u)}return null}static _recreateLayer(l,y){switch(l.type){case"background":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.BackgroundStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.BACKGROUND,l,y.z,y.uid);case"fill":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.FillStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.FILL,l,y.z,y.uid);case"line":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.LineStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.LINE,l,y.z,y.uid);case"symbol":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.SymbolStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.SYMBOL,l,y.z,y.uid);case"raster":return console.warn(`Unsupported vector tile raster layer ${l.id}`),null;case"circle":return new _StyleLayer_js__WEBPACK_IMPORTED_MODULE_1__.CircleStyleLayer(_StyleDefinition_js__WEBPACK_IMPORTED_MODULE_0__.StyleLayerType.CIRCLE,l,y.z,y.uid)}return null}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../layers/support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/support/TilemapCache.js */ "./node_modules/@arcgis/core/layers/support/TilemapCache.js");
/* harmony import */ var _TilemapIndex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TilemapIndex.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapIndex.js");
/* harmony import */ var _TilemapRequest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TilemapRequest.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TilemapRequest.js");
/* harmony import */ var _VectorTilesRequestManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VectorTilesRequestManager.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTilesRequestManager.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class m{constructor(h,m,u){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=h,this.sourceUrl=m;const f=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(this.sourceUrl),c=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__.clone)(u),x=c.tiles;if(f)for(let t=0;t<x.length;t++){const r=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(x[t]);r&&((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.isAbsolute)(r.path)||(r.path=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.join)(f.path,r.path)),x[t]=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.addQueryParameters)(r.path,{...f.query,...r.query}))}this.tileServers=x;const d=u.capabilities&&u.capabilities.split(",").map((t=>t.toLowerCase().trim())),y=!0===u?.exportTilesAllowed,T=!0===d?.includes("tilemap"),I=y&&u.hasOwnProperty("maxExportTilesCount")?u.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:y,supportsTileMap:T},exportTiles:y?{maxExportTilesCount:+I}:null},this.tileInfo=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(c.tileInfo);const g=u.tileMap?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.addQueryParameters)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.join)(f.path,u.tileMap),f.query??{}):null;T?(this.type="vector-tile",this.tilemap=new _TilemapRequest_js__WEBPACK_IMPORTED_MODULE_6__["default"](new _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_4__.TilemapCache({layer:{parsedUrl:f,tileInfo:this.tileInfo},minLOD:c.minLOD??this.tileInfo.lods[0].level,maxLOD:c.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),g)):g&&(this.tilemap=new _TilemapIndex_js__WEBPACK_IMPORTED_MODULE_5__["default"](g)),this.fullExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(u.fullExtent),this.initialExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(u.initialExtent)}destroy(){this.tilemap?.destroy()}async getRefKey(t,e){return this.tilemap?this.tilemap.dataKey(t,e):t}requestTile(t,e,i,l){const s=this.tileServers[e%this.tileServers.length];return (0,_VectorTilesRequestManager_js__WEBPACK_IMPORTED_MODULE_7__.request)(s,t,e,i,l)}isCompatibleWith(t){const e=this.tileInfo,i=t.tileInfo;if(!e.spatialReference.equals(i.spatialReference))return!1;if(!e.origin.equals(i.origin))return!1;if(Math.round(e.dpi)!==Math.round(i.dpi))return!1;const l=e.lods,s=i.lods,r=Math.min(l.length,s.length);for(let o=0;o<r;o++){const t=l[o],e=s[o];if(t.level!==e.level||Math.round(t.scale)!==Math.round(e.scale))return!1}return!0}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTilesRequestManager.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTilesRequestManager.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){(null==this._promise||(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAborted)(this._abortController?.signal))&&(this._promise=this._makeRequest(this._tileUrl));const o=this._abortOptions;return o.push(t),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.onAbort)(t,(()=>{o.every((t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAborted)(t)))&&this._abortController.abort()})),this._promise.then((t=>(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(t)))}async _makeRequest(r){this._abortController=new AbortController;const{data:o}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,{responseType:"array-buffer",signal:this._abortController.signal});return o}}const a=new Map;function c(t,r,o,e,s){const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.urlToObject)(t),a=l.query;if(a)for(const[i,n]of Object.entries(a))switch(n){case"{x}":a[i]=e.toString();break;case"{y}":a[i]=o.toString();break;case"{z}":a[i]=r.toString()}const c=l.path;return p((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.addQueryParameters)(c.replaceAll(/\{z\}/gi,r.toString()).replaceAll(/\{y\}/gi,o.toString()).replaceAll(/\{x\}/gi,e.toString()),{...l.query}),s)}function p(t,r){return (0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(a,t,(()=>new l(t))).getData(r).finally((()=>a.delete(t)))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areSchemasOverlapping: function() { return /* binding */ r; },
/* harmony export */   unionTileInfos: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/LOD.js */ "./node_modules/@arcgis/core/layers/support/LOD.js");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s=1e-6;function r(l,e){if(l===e)return!0;if(null==l&&null!=e)return!1;if(null!=l&&null==e)return!1;if(null==l||null==e)return!1;if(!l.spatialReference.equals(e.spatialReference)||l.dpi!==e.dpi)return!1;const n=l.origin,r=e.origin;if(Math.abs(n.x-r.x)>=s||Math.abs(n.y-r.y)>=s)return!1;let o,t;l.lods[0].scale>e.lods[0].scale?(o=l,t=e):(t=l,o=e);for(let i=o.lods[0].scale;i>=t.lods[t.lods.length-1].scale-s;i/=2)if(Math.abs(i-t.lods[0].scale)<s)return!0;return!1}function o(s,r){if(s===r)return s;if(null==s&&null!=r)return r;if(null!=s&&null==r)return s;if(null==s||null==r)return null;const o=s.size[0],t=s.format,i=s.dpi,u=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]({x:s.origin.x,y:s.origin.y}),a=s.spatialReference,f=s.lods[0].scale>r.lods[0].scale?s.lods[0]:r.lods[0],d=s.lods[s.lods.length-1].scale<=r.lods[r.lods.length-1].scale?s.lods[s.lods.length-1]:r.lods[r.lods.length-1],c=f.scale,p=f.resolution,g=d.scale,h=[];let m=c,y=p,x=0;for(;m>g;)h.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_1__["default"]({level:x,resolution:y,scale:m})),x++,m/=2,y/=2;return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"]({size:[o,o],dpi:i,format:t||"pbf",origin:u,lods:h,spatialReference:a})}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeDataType: function() { return /* binding */ J; },
/* harmony export */   MAX_TILE_RESHUFFLES_PER_FRAME: function() { return /* binding */ ui; },
/* harmony export */   RESHUFFLING_EXEMPT_DRAW_CALLS: function() { return /* binding */ bi; },
/* harmony export */   RESHUFFLING_EXEMPT_MEMORY_BYTES: function() { return /* binding */ wi; },
/* harmony export */   RESHUFFLING_TARGET_DRAW_EFFICIENCY: function() { return /* binding */ ji; },
/* harmony export */   RESHUFFLING_TARGET_MEMORY_EFFICIENCY: function() { return /* binding */ xi; },
/* harmony export */   angleFactor256: function() { return /* binding */ c; },
/* harmony export */   animationUnit: function() { return /* binding */ b; },
/* harmony export */   attributeStoreInitialSize: function() { return /* binding */ qi; },
/* harmony export */   attributeStoreTextureSize: function() { return /* binding */ T; },
/* harmony export */   averageGlyphMosaicItem: function() { return /* binding */ O; },
/* harmony export */   backbufferStencilClipped: function() { return /* binding */ Ci; },
/* harmony export */   backbufferStencilVisible: function() { return /* binding */ Bi; },
/* harmony export */   bitsetFillHasPatternHeightPrecisionFactor: function() { return /* binding */ Li; },
/* harmony export */   bitsetFillHasPatternWidthPrecisionFactor: function() { return /* binding */ Oi; },
/* harmony export */   bitsetFillHasUnresolvedReplacementColor: function() { return /* binding */ Ai; },
/* harmony export */   bitsetFillRandomPatternOffset: function() { return /* binding */ vi; },
/* harmony export */   bitsetGenericConsiderAlphaOnly: function() { return /* binding */ di; },
/* harmony export */   bitsetGenericLockColor: function() { return /* binding */ Fi; },
/* harmony export */   bitsetLineScaleDash: function() { return /* binding */ fi; },
/* harmony export */   bitsetMarkerAlignmentMap: function() { return /* binding */ Pi; },
/* harmony export */   bitsetMarkerAlignmentScreen: function() { return /* binding */ Gi; },
/* harmony export */   bitsetMarkerOutlineAllowColorOverride: function() { return /* binding */ Vi; },
/* harmony export */   bitsetMarkerScaleSymbolsProportionally: function() { return /* binding */ hi; },
/* harmony export */   bitsetTypeFillOutline: function() { return /* binding */ pi; },
/* harmony export */   bufferDataMinimumSize: function() { return /* binding */ gi; },
/* harmony export */   bufferDataPoolSize: function() { return /* binding */ ri; },
/* harmony export */   chartMaxFields: function() { return /* binding */ F; },
/* harmony export */   collisionBoxPadding: function() { return /* binding */ h; },
/* harmony export */   collisionBucketSize: function() { return /* binding */ m; },
/* harmony export */   collisionEarlyRejectBucketSize: function() { return /* binding */ V; },
/* harmony export */   collisionMaxZoomDelta: function() { return /* binding */ P; },
/* harmony export */   collisionPlacementPadding: function() { return /* binding */ f; },
/* harmony export */   collisionTileBoxSize: function() { return /* binding */ d; },
/* harmony export */   compressionFactorForU16: function() { return /* binding */ l; },
/* harmony export */   dataDrivenUnit0: function() { return /* binding */ k; },
/* harmony export */   dataDrivenUnit1: function() { return /* binding */ q; },
/* harmony export */   dataDrivenUnit2: function() { return /* binding */ y; },
/* harmony export */   debugLabels: function() { return /* binding */ g; },
/* harmony export */   defaultSdfTextureSize: function() { return /* binding */ Di; },
/* harmony export */   displayRecordIntPerElement: function() { return /* binding */ ci; },
/* harmony export */   dotDensityMaxFields: function() { return /* binding */ s; },
/* harmony export */   effectFlag0: function() { return /* binding */ N; },
/* harmony export */   enableEarlyLabelDiscard: function() { return /* binding */ Q; },
/* harmony export */   extrudeScale: function() { return /* binding */ n; },
/* harmony export */   filterFlag0: function() { return /* binding */ M; },
/* harmony export */   filterFlagsUnit: function() { return /* binding */ x; },
/* harmony export */   glyphSize: function() { return /* binding */ A; },
/* harmony export */   gpgpuUnit: function() { return /* binding */ z; },
/* harmony export */   heuristicGlyphsPerFeature: function() { return /* binding */ v; },
/* harmony export */   heuristicGlyphsPerLine: function() { return /* binding */ p; },
/* harmony export */   hittestSmallSymbolThreshold: function() { return /* binding */ Y; },
/* harmony export */   hittestToleranceDesktop: function() { return /* binding */ W; },
/* harmony export */   hittestToleranceMobile: function() { return /* binding */ S; },
/* harmony export */   hittestToleranceSmallSymbol: function() { return /* binding */ X; },
/* harmony export */   labelPlacementOffsetPadding: function() { return /* binding */ L; },
/* harmony export */   localTimeOriginUnit: function() { return /* binding */ B; },
/* harmony export */   magicLabelLineHeight: function() { return /* binding */ G; },
/* harmony export */   maxGeohashLevel: function() { return /* binding */ ki; },
/* harmony export */   maxGpuUploadsPerFrame: function() { return /* binding */ ii; },
/* harmony export */   maxHighlightReasons: function() { return /* binding */ K; },
/* harmony export */   maxRepresentableInt: function() { return /* binding */ r; },
/* harmony export */   maxTextLineWidth: function() { return /* binding */ zi; },
/* harmony export */   minMaxZoomPrecisionFactor: function() { return /* binding */ mi; },
/* harmony export */   minTextLineWidth: function() { return /* binding */ yi; },
/* harmony export */   nanMagicNumber: function() { return /* binding */ D; },
/* harmony export */   patchPixelBufferAllocSize: function() { return /* binding */ li; },
/* harmony export */   patternFillRasterizationScale: function() { return /* binding */ ai; },
/* harmony export */   pictureFillColor: function() { return /* binding */ e; },
/* harmony export */   randomInsidePolygonTextureSize: function() { return /* binding */ si; },
/* harmony export */   rasterTileSize: function() { return /* binding */ o; },
/* harmony export */   rasterizedVectorMarkerMinSize: function() { return /* binding */ oi; },
/* harmony export */   spritePadding: function() { return /* binding */ ti; },
/* harmony export */   svgSdfTextureInnerSize: function() { return /* binding */ ei; },
/* harmony export */   svgSdfTextureSize: function() { return /* binding */ ni; },
/* harmony export */   textureBindingBitmap: function() { return /* binding */ w; },
/* harmony export */   textureBindingGlyphAtlas: function() { return /* binding */ u; },
/* harmony export */   textureBindingHighlight0: function() { return /* binding */ C; },
/* harmony export */   textureBindingHighlight1: function() { return /* binding */ E; },
/* harmony export */   textureBindingRenderer0: function() { return /* binding */ H; },
/* harmony export */   textureBindingRenderer1: function() { return /* binding */ I; },
/* harmony export */   textureBindingSpriteAtlas: function() { return /* binding */ U; },
/* harmony export */   textureUploadManagerBudget: function() { return /* binding */ Ui; },
/* harmony export */   textureUploadManagerChunkSize: function() { return /* binding */ Ti; },
/* harmony export */   thinLineHalfWidthThreshold: function() { return /* binding */ R; },
/* harmony export */   tileSize: function() { return /* binding */ a; },
/* harmony export */   visualVariableUnit: function() { return /* binding */ j; },
/* harmony export */   vtlHighResCutoff: function() { return /* binding */ _; },
/* harmony export */   vtlTextureBindingUnitGlyphs: function() { return /* binding */ $; },
/* harmony export */   vtlTextureBindingUnitSprites: function() { return /* binding */ Z; },
/* harmony export */   webglMaxInnerStops: function() { return /* binding */ t; },
/* harmony export */   webglMaxStops: function() { return /* binding */ i; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=8,t=i-2,D=1e-30,n=64,e=4294967295,a=512,o=256,c=256/360,l=128,r=16777216,g=!1,m=128,s=8,F=10,G=29,P=1,V=16,h=16,d=a/m,f=8,p=50,v=10,A=24,L=4,O={metrics:{width:15,height:17,left:0,top:-7,advance:14}},T=1024,U=0,u=0,w=0,x=1,b=2,j=3,k=4,q=5,y=6,z=12,B=13,C=5,E=6,H=5,I=6;var J;!function(i){i[i.FilterFlags=0]="FilterFlags",i[i.Animation=1]="Animation",i[i.GPGPU=2]="GPGPU",i[i.VV=3]="VV",i[i.DD0=4]="DD0",i[i.DD1=5]="DD1",i[i.DD2=6]="DD2",i[i.LocalTimeOrigin=7]="LocalTimeOrigin"}(J||(J={}));const K=6,M=1<<K,N=M<<1,Q=!1,R=1.05,S=3,W=1,X=3,Y=3,Z=5,$=6,_=1.15,ii=2,ti=2,Di=128,ni=256,ei=ni-2*ti,ai=2,oi=128,ci=8,li=500,ri=4,gi=128,mi=10,si=1024,Fi=2,Gi=0,Pi=1,Vi=4,hi=8,di=16,fi=4,pi=1,vi=4,Ai=8,Li=32,Oi=64,Ti=128,Ui=4,ui=1,wi=1<<20,xi=.75,bi=10,ji=.75,ki=12,qi=256,yi=32,zi=512,Bi=0,Ci=1;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/tiling/TileKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/tiling/TileKey.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/ObjectPool.js */ "./node_modules/@arcgis/core/core/ObjectPool.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{static getId(t,e,l,o){return"object"==typeof t?`${t.level}/${t.row}/${t.col}/${t.world}`:`${t}/${e}/${l}/${o}`}constructor(t,e,l,o){this.set(t,e,l,o)}get key(){return this}get id(){return this.toString()}get normalizedId(){return`${this.level}/${this.row}/${this.col}`}set id(t){this.set(t)}get hash(){const t=4095&this.row,e=4095&this.col,l=63&this.level;return(3&this.world)<<30|e<<22|t<<8|l}acquire(t,e,l,o){this.set(t,e,l,o)}contains(t){const e=t.level-this.level;return e>=0&&this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world}containsChild(t){const e=t.level-this.level;return e>0&&this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world}equals(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world}clone(){return new e(this)}release(){this.level=0,this.row=0,this.col=0,this.world=0}set(t,e,l,o){if(null==t)this.level=0,this.row=0,this.col=0,this.world=0;else if("object"==typeof t)this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if("string"==typeof t){const[e,l,o,s]=t.split("/");this.level=parseFloat(e),this.row=parseFloat(l),this.col=parseFloat(o),this.world=parseFloat(s)}else this.level=+t,this.row=+e,this.col=+l,this.world=+o||0;return this}toString(){return`${this.level}/${this.row}/${this.col}/${this.world}`}getParentKey(){return this.level<=0?null:new e(this.level-1,this.row>>1,this.col>>1,this.world)}getNormalizedNeighbor(t,e,l){const o=this.clone();return o.col+=t,o.row+=e,l.normalizeKey(o),o}getChildKeys(){const t=this.level+1,l=this.row<<1,o=this.col<<1,s=this.world;return[new e(t,l,o,s),new e(t,l,o+1,s),new e(t,l+1,o,s),new e(t,l+1,o+1,s)]}compareRowMajor(t){return this.row<t.row?-1:this.row>t.row?1:this.col<t.col?-1:this.col>t.col?1:0}}e.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](e,null,null,25,50);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/unitBezier.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/unitBezier.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   easingFunctions: function() { return /* binding */ t; },
/* harmony export */   parse: function() { return /* binding */ r; },
/* harmony export */   unitBezier: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,n,t,r){const u=3*e,i=3*(t-e)-u,a=1-u-i,o=3*n,s=3*(r-n)-o,f=1-o-s;function c(e){return((a*e+i)*e+u)*e}function l(e){return((f*e+s)*e+o)*e}function b(e){return(3*a*e+2*i)*e+u}function p(e,n){let t,r,u,i,a,o;for(u=e,o=0;o<8;o++){if(i=c(u)-e,Math.abs(i)<n)return u;if(a=b(u),Math.abs(a)<1e-6)break;u-=i/a}if(t=0,r=1,u=e,u<t)return t;if(u>r)return r;for(;t<r;){if(i=c(u),Math.abs(i-e)<n)return u;e>i?t=u:r=u,u=.5*(r-t)+t}return u}return function(e,n=1e-6){return l(p(e,n))}}const n=/^cubic-bezier\((.*)\)/,t={};function r(r){let u=t[r]||null;if(!u){const t=n.exec(r);if(t){const n=t[1].split(",").map((e=>parseFloat(e.trim())));4!==n.length||n.some((e=>isNaN(e)))||(u=e.apply(e,n))}}return u}t.ease=e(.25,.1,.25,1),t.linear=e(0,0,1,1),t.easeIn=t["ease-in"]=e(.42,0,1,1),t.easeOut=t["ease-out"]=e(0,0,.58,1),t.easeInOut=t["ease-in-out"]=e(.42,0,.58,1);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexElementDescriptor: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,h,o,e=!1,r=0){this.name=t,this.count=s,this.type=i,this.offset=h,this.stride=o,this.normalized=e,this.divisor=r}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/capabilities.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/capabilities.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWebGLCapabilities: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e;function t(){return e||(e=l()),e}class r{constructor(){this.available=!1,this.majorPerformanceCaveat=!1,this.maxTextureSize=0,this.supportsVertexShaderSamplers=!1,this.supportsHighPrecisionFragment=!1,this.supportsColorBufferFloat=!1,this.supportsColorBufferFloatBlend=!1,this.supportsColorBufferHalfFloat=!1}}function o(e){if("undefined"==typeof WebGL2RenderingContext)return null;const t=document.createElement("canvas");if(!t)return null;let r=t.getContext("webgl2",{failIfMajorPerformanceCaveat:!0});if(null==r&&(r=t.getContext("webgl2"),null!=r&&(e.majorPerformanceCaveat=!0)),null==r)return r;e.available=!0,e.maxTextureSize=r.getParameter(r.MAX_TEXTURE_SIZE),e.supportsVertexShaderSamplers=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;const o=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);return o&&(e.supportsHighPrecisionFragment=o.precision>0),r}function l(){const e=new r,t=o(e);return null==t||(e.supportsColorBufferFloat=null!==t.getExtension("EXT_color_buffer_float"),e.supportsColorBufferFloatBlend=null!==t.getExtension("EXT_float_blend"),e.supportsColorBufferHalfFloat=e.supportsColorBufferFloat||null!==t.getExtension("EXT_color_buffer_half_float")),e}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/enums.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendFactor: function() { return /* binding */ R; },
/* harmony export */   BlendOperation: function() { return /* binding */ T; },
/* harmony export */   BufferType: function() { return /* binding */ A; },
/* harmony export */   ClientWaitSyncStatus: function() { return /* binding */ i; },
/* harmony export */   ColorAttachment: function() { return /* binding */ X; },
/* harmony export */   CompareFunction: function() { return /* binding */ O; },
/* harmony export */   CompressedTextureFormat: function() { return /* binding */ c; },
/* harmony export */   CullMode: function() { return /* binding */ S; },
/* harmony export */   DataType: function() { return /* binding */ C; },
/* harmony export */   DepthStencilAttachment: function() { return /* binding */ t; },
/* harmony export */   Face: function() { return /* binding */ N; },
/* harmony export */   FramebufferBit: function() { return /* binding */ _; },
/* harmony export */   FramebufferTarget: function() { return /* binding */ n; },
/* harmony export */   PixelFormat: function() { return /* binding */ G; },
/* harmony export */   PixelType: function() { return /* binding */ U; },
/* harmony export */   PrimitiveType: function() { return /* binding */ E; },
/* harmony export */   RenderbufferFormat: function() { return /* binding */ B; },
/* harmony export */   ResourceType: function() { return /* binding */ V; },
/* harmony export */   ShaderType: function() { return /* binding */ H; },
/* harmony export */   SizedPixelFormat: function() { return /* binding */ P; },
/* harmony export */   SpecialDrawBuffers: function() { return /* binding */ f; },
/* harmony export */   StencilOperation: function() { return /* binding */ I; },
/* harmony export */   SyncCondition: function() { return /* binding */ r; },
/* harmony export */   SyncFlag: function() { return /* binding */ W; },
/* harmony export */   SyncParameter: function() { return /* binding */ u; },
/* harmony export */   SyncStatus: function() { return /* binding */ e; },
/* harmony export */   TextureSamplingMode: function() { return /* binding */ L; },
/* harmony export */   TextureType: function() { return /* binding */ M; },
/* harmony export */   TextureWrapMode: function() { return /* binding */ D; },
/* harmony export */   UniformType: function() { return /* binding */ o; },
/* harmony export */   Usage: function() { return /* binding */ F; },
/* harmony export */   baseTextureUnit: function() { return /* binding */ Y; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var _,E,R,T,A,N,S,C,O,I,L,D,M,G,P,U,B,F,H,n;!function(_){_[_.DEPTH=256]="DEPTH",_[_.STENCIL=1024]="STENCIL",_[_.COLOR=16384]="COLOR"}(_||(_={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_[_.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(A||(A={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(N||(N={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(S||(S={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT",_[_.HALF_FLOAT=5131]="HALF_FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(O||(O={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(I||(I={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(L||(L={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(D||(D={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(G||(G={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(P||(P={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(U||(U={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(B||(B={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(F||(F={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(H||(H={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(n||(n={}));const Y=33984;var V,X,f;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.TransformFeedback=7]="TransformFeedback",_[_.Sync=8]="Sync",_[_.UNCOUNTED=9]="UNCOUNTED",_[_.LinesOfCode=9]="LinesOfCode",_[_.Uniform=10]="Uniform",_[_.COUNT=11]="COUNT"}(V||(V={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(X||(X={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(f||(f={}));const t=33306;var c,o,u,e,i,r,W;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(c||(c={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(o||(o={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(u||(u={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(e||(e={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(i||(i={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(r||(r={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(W||(W={}));


/***/ })

}]);
//# sourceMappingURL=VectorTileLayer.js.map