"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["layers-ElevationLayer"],{

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

/***/ "./node_modules/@arcgis/core/core/workers/Connection.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/Connection.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _Queue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Queue.js */ "./node_modules/@arcgis/core/core/Queue.js");
/* harmony import */ var _connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectionRegistry.js */ "./node_modules/@arcgis/core/core/workers/connectionRegistry.js");
/* harmony import */ var _InvokeHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InvokeHandler.js */ "./node_modules/@arcgis/core/core/workers/InvokeHandler.js");
/* harmony import */ var _RemoteClient_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RemoteClient.js */ "./node_modules/@arcgis/core/core/workers/RemoteClient.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new _Queue_js__WEBPACK_IMPORTED_MODULE_3__["default"]}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,s){return new Promise(((i,o)=>{let r=!0;const l=e=>{(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(s.signal),r&&(r=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let n=0;n<e.length;++n){const r=e[n];(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPromiseLike)(r)?this._clientPromises[n]=r.then((e=>(this._clients[n]=new _RemoteClient_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,s,this._ongoingJobsQueue),l(i),this._clients[n])),(()=>(l(o),null))):(this._clients[n]=new _RemoteClient_js__WEBPACK_IMPORTED_MODULE_6__["default"](r,s,this._ongoingJobsQueue),this._clientPromises[n]=Promise.resolve(this._clients[n]),l(i))}}))}broadcast(e,t,s){const i=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const o=this._clientPromises[n];i[n]=o.then((i=>i?.invoke(e,t,s)))}return i}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.createAbortError)(`Worker closing, aborting job calling '${e.methodName}'`));for(const t of this._clientPromises)t.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,(0,_connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__.unregister)(this)}invoke(e,t,s){return this.apply(e,[t],s)}apply(e,t,s){const n=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.createResolver)();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:s,resolver:n});for(let i=0;i<this._clientPromises.length;i++){const e=this._clients[i];e?e.jobAdded():this._clientPromises[i].then((e=>e?.jobAdded()))}return n.promise}createInvokeProxy(e){return (0,_InvokeHandler_js__WEBPACK_IMPORTED_MODULE_5__.createInvokeProxy)(this,e)}on(t,s){return Promise.all(this._clientPromises).then((()=>(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__.handlesGroup)(this._clients.map((e=>e.on(t,s))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let s=t.length;for(let i=0;i<this._clientPromises.length;++i){this._clientPromises[i].then((n=>{n&&(t[i]=n.openPort()),0==--s&&e(t)}))}}))}get test(){}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/InvokeHandler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/InvokeHandler.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvokeProxy: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r){return new Proxy({},{get:(e,i,s)=>(...e)=>{let s,o;const a=e[e.length-1];n(a)&&(s=a.signal,o=a.transferList,e.pop());return t.apply(r?`${r}.${i.toString()}`:i.toString(),e,{transferList:o,signal:s})}})}function n(t){return"object"==typeof t&&!Array.isArray(t)&&null!=t&&("signal"in t||"transferList"in t||0===Object.keys(t).length)}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/RemoteClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/RemoteClient.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ E; }
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _InvokeHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InvokeHandler.js */ "./node_modules/@arcgis/core/core/workers/InvokeHandler.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registry.js */ "./node_modules/@arcgis/core/core/workers/registry.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/* harmony import */ var _support_revision_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/revision.js */ "./node_modules/@arcgis/core/support/revision.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const{CLOSE:M,ABORT:k,INVOKE:j,RESPONSE:y,OPEN_PORT:I,ON:J}=_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType,w=2;class O{constructor(e){this._invoke=e,this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._timer=null,this._process=this._process.bind(this)}push(e){e.type===_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class E{static connect(e,s){const t=new MessageChannel;let o;o="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const n=new E(t.port1,{channel:t,client:o,schedule:s});return"object"==typeof o&&"remoteClient"in o&&(o.remoteClient=n),E.clients.set(n,o),t.port2}static loadWorker(e){const s=_registry_js__WEBPACK_IMPORTED_MODULE_7__.registry[e];return s?s():Promise.resolve(null)}constructor(e,s,t){this._port=e,this._jobQueue=t,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new O((e=>this._onInvokeMessage(e))),this._client=s.client,this._onMessage=this._onMessage.bind(this),this._channel=s.channel,this._schedule=s.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:M}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,s,t){return this.apply(e,[s],t)}apply(e,t,o){const a=o?.signal,h=o?.transferList;if(!this._port)return Promise.reject(new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_js__WEBPACK_IMPORTED_MODULE_8__.portClosedErrorName,`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const c=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.newJobId)();return new Promise(((s,o)=>{if((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAborted)(a))return this._processWork(),void o((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)());const p=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.onAbort)(a,(()=>{const e=this._outJobs.get(c);e&&(this._outJobs.delete(c),this._processWork(),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__.removeMaybe)(e.abortHandle),this._post({type:k,jobId:c}),o((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)()))})),_={resolve:s,reject:o,abortHandle:p,debugInfo:e};this._outJobs.set(c,_),this._post({type:j,jobId:c,methodName:e,abortable:null!=a},t,h)}))}createInvokeProxy(e){return (0,_InvokeHandler_js__WEBPACK_IMPORTED_MODULE_6__.createInvokeProxy)(this,e)}on(e,s){const t=new MessageChannel;function n(e){s(e.data)}return this._port.postMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.ON,eventType:e,port:t.port2},[t.port2]),t.port1.addEventListener("message",n),t.port1.start(),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__.makeHandle)((()=>{t.port1.postMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.CLOSE}),t.port1.close(),t.port1.removeEventListener("message",n)}))}jobAdded(){this._processWork()}openPort(){const e=new MessageChannel;return this._post({type:I,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=w)return;const e=this._jobQueue?.pop();if(!e)return;const{methodName:s,data:t,invokeOptions:o,resolver:n}=e;this.apply(s,t,o).then((e=>n.resolve(e))).catch((e=>n.reject(e)))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{(0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__.removeMaybe)(e.abortHandle),e.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){null!=this._schedule?this._schedule((()=>this._processMessage(e,!0))):this._processMessage(e,!1)}_processMessage(e,s){const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.receiveMessage)(e);if(t)switch(t.type){case y:this._onResponseMessage(t);break;case j:s?this._onInvokeMessage(t):this._invokeQueue.push(t);break;case k:this._onAbortMessage(t);break;case M:this._onCloseMessage();break;case I:this._onOpenPortMessage(t);break;case J:this._onOnMessage(t)}}_onAbortMessage(e){const s=this._inJobs,t=e.jobId,o=s.get(t);this._invokeQueue.push(e),o&&(o.controller&&o.controller.abort(),s.delete(t))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&E.clients.get(this)===e&&e.destroy(),E.clients.delete(this),e?.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:s,jobId:t,data:o=[],abortable:n}=e,r=n?new AbortController:null,i=this._inJobs;let l,c=this._client,p=c[s];try{if(!p&&s&&s.includes(".")){const e=s.split(".");for(let s=0;s<e.length-1;s++)c=c[e[s]],p=c[e[s+1]]}if("function"!=typeof p)throw new TypeError(`${s} is not a function`);o.push({client:this,signal:r?r.signal:null}),l=p.apply(c,o)}catch(_){return void this._post({type:y,jobId:t,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.toInvokeError)(_)})}(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isPromiseLike)(l)?(i.set(t,{controller:r,promise:l}),l.then((e=>{i.has(t)&&(i.delete(t),this._post({type:y,jobId:t},e))}),(e=>{i.has(t)&&(i.delete(t),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAbortError)(e)||this._post({type:y,jobId:t,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.toInvokeError)(e||{message:`Error encountered at method ${s}`})}))}))):this._post({type:y,jobId:t},l)}_onOpenPortMessage(e){new E(e.port,{client:this._client})}_onOnMessage(e){const{port:s}=e,o=this._client.on(e.eventType,(e=>{s.postMessage(e)})),n=(0,_events_js__WEBPACK_IMPORTED_MODULE_2__.on)(e.port,"message",(e=>{const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.receiveMessage)(e);t?.type===_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.CLOSE&&(n.remove(),o.remove(),s.close())}))}_onResponseMessage(e){const{jobId:t,error:o,data:r}=e,i=this._outJobs;if(!i.has(t))return;const l=i.get(t);i.delete(t),this._processWork(),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__.removeMaybe)(l.abortHandle),o?l.reject(_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(JSON.parse(o))):l.resolve(r)}_post(e,s,t){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.postMessage)(this._port,e,s,t)}}E.kernelInfo={buildDate:_support_revision_js__WEBPACK_IMPORTED_MODULE_9__.buildDate,fullVersion:_kernel_js__WEBPACK_IMPORTED_MODULE_0__.fullVersion,revision:_support_revision_js__WEBPACK_IMPORTED_MODULE_9__.commitHash},E.clients=new Map;


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/WorkerFallback.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerFallback.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nextTick.js */ "./node_modules/@arcgis/core/core/nextTick.js");
/* harmony import */ var _RemoteClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteClient.js */ "./node_modules/@arcgis/core/core/workers/RemoteClient.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((s=>{this[s]=(...r)=>e[s](...r)}))}}class a{constructor(){this._dispatcher=new n,this._workerPostMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageType.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(s){(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:s}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,s,r){this._dispatcher.addEventListener(e,s,r)}removeEventListener(e,s,r){this._dispatcher.removeEventListener(e,s,r)}_workerPostMessage(s){(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>{this.dispatchEvent(new MessageEvent("message",{data:s}))}))}async _workerMessageHandler(e){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.receiveMessage)(e);if(n&&n.type===_utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageType.OPEN){const{modulePath:e,jobId:t}=n;let a=await _RemoteClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadWorker(e);a||(a=await import(/* @vite-ignore */ /* webpackIgnore: true */e));const o=_RemoteClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].connect(a);this._workerPostMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageType.OPENED,jobId:t,data:o})}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerHandle.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerHandle: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workers.js */ "./node_modules/@arcgis/core/core/workers/workers.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_4__.open)(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeHandle)((()=>{i.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:s})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/WorkerOwner.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerOwner.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _staticWorkerMessages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticWorkerMessages.js */ "./node_modules/@arcgis/core/core/workers/staticWorkerMessages.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/* harmony import */ var _workerFactory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workerFactory.js */ "./node_modules/@arcgis/core/core/workers/workerFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const{ABORT:b,INVOKE:m,OPEN:_,OPENED:g,RESPONSE:u}=_utils_js__WEBPACK_IMPORTED_MODULE_5__.MessageType;class j{static async create(e){const t=await (0,_workerFactory_js__WEBPACK_IMPORTED_MODULE_6__.createWorker)();return new j(t,e)}constructor(e,o){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=o,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:o}=t,r=(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.newJobId)();return new Promise(((t,n)=>{const a={resolve:t,reject:n,abortHandle:(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.onAbortOrThrow)(o,(()=>{this._outJobs.delete(r),this._post({type:b,jobId:r})}))};this._outJobs.set(r,a),this._post({type:_,jobId:r,modulePath:e})}))}_onMessage(e){const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.receiveMessage)(e);if(t)switch(t.type){case g:this._onOpenedMessage(t);break;case u:this._onResponseMessage(t);break;case b:this._onAbortMessage(t);break;case m:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,o=e.jobId,s=t.get(o);s&&(s.controller&&s.controller.abort(),t.delete(o))}_onInvokeMessage(e){const{methodName:t,jobId:o,data:s,abortable:i}=e,l=i?new AbortController:null,c=this._inJobs,h=_staticWorkerMessages_js__WEBPACK_IMPORTED_MODULE_4__.staticWorkerMessages[t];let p;try{if("function"!=typeof h)throw new TypeError(`${t} is not a function`);p=h.call(null,s,{signal:l?l.signal:null})}catch(b){return void this._post({type:u,jobId:o,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.toInvokeError)(b)})}(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPromiseLike)(p)?(c.set(o,{controller:l,promise:p}),p.then((e=>{c.has(o)&&(c.delete(o),this._post({type:u,jobId:o},e))}),(e=>{c.has(o)&&(c.delete(o),e||(e={message:"Error encountered at method"+t}),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(e)||this._post({type:u,jobId:o,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.toInvokeError)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:u,jobId:o},p)}_onOpenedMessage(e){const{jobId:t,data:s}=e,r=this._outJobs.get(t);r&&(this._outJobs.delete(t),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(r.abortHandle),r.resolve(s))}_onResponseMessage(t){const{jobId:s,error:r,data:n}=t,a=this._outJobs.get(s);a&&(this._outJobs.delete(s),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(a.abortHandle),r?a.reject(_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(JSON.parse(r))):a.resolve(n))}_post(e,t,o){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.postMessage)(this.worker,e,t,o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/connectionRegistry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/connectionRegistry.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   register: function() { return /* binding */ e; },
/* harmony export */   unregister: function() { return /* binding */ i; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=new FinalizationRegistry((n=>{n.close()}));function e(e,i){n.register(e,i,i)}function i(e){n.unregister(e)}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/loaderConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/loaderConfig.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLoaderUrl: function() { return /* binding */ s; },
/* harmony export */   loaderConfig: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s=null;const a={};function r(s){const r={async:s.async,isDebug:s.isDebug,locale:s.locale,baseUrl:s.baseUrl,has:{...s.has},map:{...s.map},packages:s.packages?.slice()||[],paths:{...a.paths,...s.paths}};return s.hasOwnProperty("async")||(r.async=!0),s.hasOwnProperty("isDebug")||(r.isDebug=!1),s.baseUrl||(r.baseUrl=a.baseUrl),r}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/registry.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/registry.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registry: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={statsWorker:()=>__webpack_require__.e(/*! import() | smartMapping-statistics-support-statsWorker */ "smartMapping-statistics-support-statsWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../smartMapping/statistics/support/statsWorker.js */ "./node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js")),geometryEngineWorker:()=>__webpack_require__.e(/*! import() | geometry-geometryEngineWorker */ "geometry-geometryEngineWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../geometry/geometryEngineWorker.js */ "./node_modules/@arcgis/core/geometry/geometryEngineWorker.js")),CSVSourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-support-CSVSourceWorker */ "layers-graphics-sources-support-CSVSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/support/CSVSourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js")),EdgeProcessingWorker:()=>__webpack_require__.e(/*! import() | views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker */ "views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js")),ElevationSamplerWorker:()=>__webpack_require__.e(/*! import() | geometry-support-meshUtils-ElevationSamplerWorker */ "geometry-support-meshUtils-ElevationSamplerWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../geometry/support/meshUtils/ElevationSamplerWorker.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js")),FeatureServiceSnappingSourceWorker:()=>__webpack_require__.e(/*! import() | views-interactive-snapping-featureSources-featureServiceSource-FeatureServiceSnappingSourceWorker */ "views-interactive-snapping-featureSources-featureServiceSource-FeatureServiceSnappingSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker.js")),GeoJSONSourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-geojson-GeoJSONSourceWorker */ "layers-graphics-sources-geojson-GeoJSONSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/geojson/GeoJSONSourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/geojson/GeoJSONSourceWorker.js")),LercWorker:()=>__webpack_require__.e(/*! import() | layers-support-LercWorker */ "layers-support-LercWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/support/LercWorker.js */ "./node_modules/@arcgis/core/layers/support/LercWorker.js")),MemorySourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-support-MemorySourceWorker */ "layers-graphics-sources-support-MemorySourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/support/MemorySourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/MemorySourceWorker.js")),PBFDecoderWorker:()=>__webpack_require__.e(/*! import() | views-3d-support-PBFDecoderWorker */ "views-3d-support-PBFDecoderWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/support/PBFDecoderWorker.js */ "./node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js")),FeaturePipelineWorker:()=>__webpack_require__.e(/*! import() | views-2d-layers-features-FeaturePipelineWorker */ "views-2d-layers-features-FeaturePipelineWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/2d/layers/features/FeaturePipelineWorker.js */ "./node_modules/@arcgis/core/views/2d/layers/features/FeaturePipelineWorker.js")),PointCloudWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-PointCloudWorker */ "views-3d-layers-PointCloudWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/PointCloudWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js")),RasterWorker:()=>__webpack_require__.e(/*! import() | layers-support-RasterWorker */ "layers-support-RasterWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/support/RasterWorker.js */ "./node_modules/@arcgis/core/layers/support/RasterWorker.js")),SceneLayerSnappingSourceWorker:()=>__webpack_require__.e(/*! import() | views-interactive-snapping-featureSources-sceneLayerSource-SceneLayerSnappingSourceWorker */ "views-interactive-snapping-featureSources-sceneLayerSource-SceneLayerSnappingSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js")),SceneLayerWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-SceneLayerWorker */ "views-3d-layers-SceneLayerWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/SceneLayerWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js")),WFSSourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-WFSSourceWorker */ "layers-graphics-sources-WFSSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/WFSSourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js")),WorkerTileHandler:()=>__webpack_require__.e(/*! import() | views-2d-engine-vectorTiles-WorkerTileHandler */ "views-2d-engine-vectorTiles-WorkerTileHandler").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/2d/engine/vectorTiles/WorkerTileHandler.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTileHandler.js")),Lyr3DWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-Lyr3DWorker */ "views-3d-layers-Lyr3DWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/Lyr3DWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js")),Feature3DPipelineWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-graphics-pipeline-Feature3DPipelineWorker */ "views-3d-layers-graphics-pipeline-Feature3DPipelineWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/graphics/pipeline/Feature3DPipelineWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/Feature3DPipelineWorker.js"))};


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/staticWorkerMessages.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/staticWorkerMessages.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   staticWorkerMessages: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a={async request(a,s){const r=a.options,n=r.responseType;r.signal=s?.signal,r.responseType="native"===n||"native-request-init"===n?"native-request-init":n&&["blob","json","text"].includes(n)&&(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.getInterceptor)(a.url)?.after?n:"array-buffer";const i=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.url,r),o={data:i.data,httpStatus:i.httpStatus,ssl:i.ssl};switch(i.requestOptions?.responseType){case"native-request-init":return delete o.data.signal,o;case"blob":o.data=await o.data.arrayBuffer();break;case"json":o.data=(new TextEncoder).encode(JSON.stringify(o.data)).buffer;break;case"text":o.data=(new TextEncoder).encode(o.data).buffer}return{result:o,transferList:[o.data]}}};


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageType: function() { return /* binding */ e; },
/* harmony export */   ignoreConnectionErrors: function() { return /* binding */ O; },
/* harmony export */   isTransferrableResult: function() { return /* binding */ o; },
/* harmony export */   newJobId: function() { return /* binding */ s; },
/* harmony export */   portClosedErrorName: function() { return /* binding */ r; },
/* harmony export */   postMessage: function() { return /* binding */ a; },
/* harmony export */   receiveMessage: function() { return /* binding */ f; },
/* harmony export */   toInvokeError: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r="worker:port-closed";var e;!function(t){t[t.HANDSHAKE=0]="HANDSHAKE",t[t.OPEN=1]="OPEN",t[t.OPENED=2]="OPENED",t[t.RESPONSE=3]="RESPONSE",t[t.INVOKE=4]="INVOKE",t[t.ABORT=5]="ABORT",t[t.CLOSE=6]="CLOSE",t[t.OPEN_PORT=7]="OPEN_PORT",t[t.ON=8]="ON"}(e||(e={}));let n=0;function s(){return n++}function o(t){return t&&"object"==typeof t&&("result"in t||"transferList"in t)}function i(t){return t?"string"==typeof t?JSON.stringify({name:"message",message:t}):t.toJSON?JSON.stringify(t):JSON.stringify({name:t.name,message:t.message,details:t.details||{stack:t.stack}}):null}function a(t,r,n,s){if(r.type===e.OPEN_PORT)return void t.postMessage(r,[r.port]);if(r.type!==e.INVOKE&&r.type!==e.RESPONSE)return void t.postMessage(r);let f;if(o(n)?(f=u(n.transferList),r.data=n.result):(f=u(s),r.data=n),f){if((0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ff"))for(const n of f)if("byteLength"in n&&n.byteLength>267386880){const n="Worker call with large ArrayBuffer would crash Firefox";switch(r.type){case e.INVOKE:throw n;case e.RESPONSE:return void a(t,{type:e.RESPONSE,jobId:r.jobId,error:i(n)})}}t.postMessage(r,f)}else t.postMessage(r)}function f(t){if(!t)return null;const r=t.data;return r?"string"==typeof r?JSON.parse(r):r:null}function u(t){if(!t?.length)return null;if((0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-workers-arraybuffer-transfer"))return t;const r=t.filter((t=>!c(t)));return r.length?r:null}function c(t){return t instanceof ArrayBuffer||"ArrayBuffer"===t?.constructor?.name}async function O(e){try{return await e}catch(n){const e=n?.name===r;if(!((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.isAbortError)(n)||e))throw n;return}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/workerFactory.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/workerFactory.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorker: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _intl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../intl.js */ "./node_modules/@arcgis/core/intl.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _loaderConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loaderConfig.js */ "./node_modules/@arcgis/core/core/workers/loaderConfig.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/* harmony import */ var _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorkerFallback.js */ "./node_modules/@arcgis/core/core/workers/WorkerFallback.js");
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../intl/locale.js */ "./node_modules/@arcgis/core/intl/locale.js");
/* harmony import */ var _support_revision_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/revision.js */ "./node_modules/@arcgis/core/support/revision.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=()=>_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:m}=_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType,p='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let g,h;const k="Failed to create Worker. Fallback to execute module in main thread";async function y(){if(!(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-workers"))return w(new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"]);if(!g&&!h)try{const e=p.split("{CONFIGURATION}").join(b());g=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(r){h=r||{}}let e;if(g)try{e=new Worker(g,{name:"esri-worker-"+v++})}catch(r){d().warn(k,h),e=new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"]}else d().warn(k,h),e=new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"];return w(e)}async function w(e){return new Promise((r=>{function t(s){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.receiveMessage)(s);n&&n.type===m&&(e.removeEventListener("message",t),e.removeEventListener("error",o),r(e))}function o(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",o),d().warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"]).addEventListener("message",t),e.addEventListener("error",o)}e.addEventListener("message",t),e.addEventListener("error",o)}))}function b(){let o;if(null!=_config_js__WEBPACK_IMPORTED_MODULE_1__["default"]["default"]){const e={..._config_js__WEBPACK_IMPORTED_MODULE_1__["default"]};delete e.default,o=JSON.parse(JSON.stringify(e))}else o=JSON.parse(JSON.stringify(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"]));o.assetsPath=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.assetsPath),o.defaultAssetsPath=o.defaultAssetsPath?(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.defaultAssetsPath):void 0,o.request.interceptors=[],o.log.interceptors=[],o.locale=(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_10__.getLocale)(),o.has={"esri-csp-restrictions":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-2d-update-debug"),"esri-2d-log-updating":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-2d-log-updating"),"featurelayer-pbf":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-snapshot-enabled"),"esri-atomics":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-atomics"),"esri-shared-array-buffer":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-shared-array-buffer"),"esri-tiles-debug":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("feature-polyline-generalization-factor"),"host-webworker":1},o.workers.loaderUrl&&(o.workers.loaderUrl=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.workers.loaderUrl)),o.workers.workerPath?o.workers.workerPath=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.workers.workerPath):o.workers.workerPath=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)((0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)("esri/core/workers/RemoteClient.js")),o.workers.useDynamicImport=!1;const a=_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].workers.loaderConfig,i=(0,_loaderConfig_js__WEBPACK_IMPORTED_MODULE_7__.loaderConfig)({baseUrl:a?.baseUrl,locale:(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_10__.getLocale)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...a?.has},map:{...a?.map},paths:{...a?.paths},packages:a?.packages||[]}),l={buildDate:_support_revision_js__WEBPACK_IMPORTED_MODULE_11__.buildDate,fullVersion:_kernel_js__WEBPACK_IMPORTED_MODULE_3__.fullVersion,revision:_support_revision_js__WEBPACK_IMPORTED_MODULE_11__.commitHash};return JSON.stringify({esriConfig:o,loaderConfig:i,kernelInfo:l})}let v=0;


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/workers.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/workers.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connection: function() { return /* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   RemoteClient: function() { return /* reexport safe */ _RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   initialize: function() { return /* binding */ m; },
/* harmony export */   open: function() { return /* binding */ p; },
/* harmony export */   openWithPorts: function() { return /* binding */ u; },
/* harmony export */   terminate: function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Connection.js */ "./node_modules/@arcgis/core/core/workers/Connection.js");
/* harmony import */ var _connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectionRegistry.js */ "./node_modules/@arcgis/core/core/workers/connectionRegistry.js");
/* harmony import */ var _RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemoteClient.js */ "./node_modules/@arcgis/core/core/workers/RemoteClient.js");
/* harmony import */ var _WorkerOwner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkerOwner.js */ "./node_modules/@arcgis/core/core/workers/WorkerOwner.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s=(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("workers-pool-size")??8):0;let a=(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-mobile")?Math.min(s,3):s;a||(a=(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("safari")&&(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("mac")?7:2);let c=0;const l=[];function m(){g()}function u(r,t){return f(r,{client:t})}async function f(r,t){const n=new _Connection_js__WEBPACK_IMPORTED_MODULE_3__["default"],{registryTarget:i,...s}=t;return await n.open(r,s),i&&(0,_connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__.register)(i,n),n}async function p(e,o={}){if("string"!=typeof e)throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("workers:undefined-module","modulePath is missing");let i=o.strategy||"distributed";if((0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("host-webworker")&&!(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-workers")&&(i="local"),"local"===i){let r=await _RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadWorker(e);r||(r=await import(/* @vite-ignore */ /* webpackIgnore: true */e)),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(o.signal);const i=o.client||r;return f([_RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].connect(r,o.schedule)],{...o,client:i})}if(await g(),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(o.signal),"dedicated"===i){const r=c++%a;return f([await l[r].open(e,o)],o)}if(o.maxNumWorkers&&o.maxNumWorkers>0){const r=Math.min(o.maxNumWorkers,a);if(r<a){const t=new Array(r);for(let n=0;n<r;++n){const r=c++%a;t[n]=l[r].open(e,o)}return f(t,o)}}return f(l.map((r=>r.open(e,o))),o)}function w(){d&&(h.abort(),d=null);for(let r=0;r<l.length;r++)l[r]&&l[r].terminate();l.length=0}let h,d=null;async function g(){if(d)return d;h=new AbortController;const r=[];for(let t=0;t<a;t++){const e=_WorkerOwner_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(t).then((r=>(l[t]=r,r)));r.push(e)}return d=Promise.all(r),d}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/HeightModelInfo.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/HeightModelInfo.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Warning.js */ "./node_modules/@arcgis/core/core/Warning.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d;const p=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.strict)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.removeUnordered)(u,"orthometric");const g=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.strict)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const o=p.read(e);return o||(r?.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const o=g.read(e);return o||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.unitFromRESTJSON)(e)||g.read(e);return o||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.getVerticalUnitStringForSR)(t);return new d({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__["default"]("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__["default"]("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal"}}}})],m.prototype,"heightModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],m.prototype,"heightUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.geometry.HeightModelInfo")],m);const v=m;


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

/***/ "./node_modules/@arcgis/core/layers/ElevationLayer.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ElevationLayer.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/HeightModelInfo.js */ "./node_modules/@arcgis/core/geometry/HeightModelInfo.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "./node_modules/@arcgis/core/layers/mixins/ArcGISService.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _support_ElevationTileData_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/ElevationTileData.js */ "./node_modules/@arcgis/core/layers/support/ElevationTileData.js");
/* harmony import */ var _support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/LercDecoder.js */ "./node_modules/@arcgis/core/layers/support/LercDecoder.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let w=class extends((0,_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_15__.ArcGISCachedService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_16__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_17__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"])))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=(0,_support_LercDecoder_js__WEBPACK_IMPORTED_MODULE_21__.acquireDecoder)()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.releaseMaybe)(this._lercDecoder)}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return{operations:{supportsTileMap:!1}};return{operations:{supportsTileMap:t.includes("tilemap")}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAbortError).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,i,o){const s=null!=(o=o||{signal:null}).signal?o.signal:o.signal=(new AbortController).signal,a={responseType:"array-buffer",signal:s},p={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,o))).then((()=>(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.getTileUrl(e,t,i),a))).then((e=>this._lercDecoder.decode(e.data,p,s))).then((e=>new _support_ElevationTileData_js__WEBPACK_IMPORTED_MODULE_20__.ElevationTileData(e)))}getTileUrl(e,r,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.objectToQuery)({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/*! import() | support-ElevationQuery */ "support-ElevationQuery").then(__webpack_require__.bind(__webpack_require__, /*! ./support/ElevationQuery.js */ "./node_modules/@arcgis/core/layers/support/ElevationQuery.js"));(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(r);return(new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/*! import() | support-ElevationQuery */ "support-ElevationQuery").then(__webpack_require__.bind(__webpack_require__, /*! ./support/ElevationQuery.js */ "./node_modules/@arcgis/core/layers/support/ElevationQuery.js"));(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(r);return(new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[S]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],w.prototype,"capabilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("service","capabilities",["capabilities"])],w.prototype,"readCapabilities",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:{source:"copyrightText"}}})],w.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"]})],w.prototype,"heightModelInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],w.prototype,"path",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["show","hide"]})],w.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],w.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],w.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],w.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["ArcGISTiledElevationServiceLayer"]})],w.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],w.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1},value:"elevation",readOnly:!0})],w.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__.url)],w.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],w.prototype,"version",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("version",["currentVersion"])],w.prototype,"readVersion",null),w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.ElevationLayer")],w);const S=Symbol("default-fetch-tile");w.prototype.fetchTile[S]=!0;const T=w;


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

/***/ "./node_modules/@arcgis/core/layers/support/ElevationTileData.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ElevationTileData.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElevationTileData: function() { return /* binding */ a; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a{constructor(a,t,s,e){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in a?(this.values=a.pixelData,this.width=a.width,this.height=a.height,this.noDataValue=a.noDataValue):(this.values=a,this.width=t,this.height=s,this.noDataValue=e)}get hasNoDataValues(){if(null==this._hasNoDataValues){const a=this.noDataValue;this._hasNoDataValues=this.values.includes(a)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:a,values:t}=this;let s=1/0,e=-1/0,i=!0;for(const u of t)u===a?this._hasNoDataValues=!0:(s=u<s?u:s,e=u>e?u:e,i=!1);i?(this._minValue=0,this._maxValue=0):(this._minValue=s,this._maxValue=e>-3e38?e:0)}}


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

/***/ "./node_modules/@arcgis/core/layers/support/LercDecoder.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LercDecoder.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   acquireDecoder: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/workers/WorkerHandle.js */ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_0__.WorkerHandle{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}release(){--this.ref<=0&&(t.forEach(((e,r)=>{e===this&&t.delete(r)})),this.destroy())}}const t=new Map;function s(e=null){let s=t.get(e);return s||(null!=e?(s=new r((r=>e.immediate.schedule(r))),t.set(e,s)):(s=new r,t.set(null,s))),++s.ref,s}


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

/***/ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanTitle: function() { return /* binding */ m; },
/* harmony export */   isArcGISUrl: function() { return /* binding */ p; },
/* harmony export */   isHostedAgolService: function() { return /* binding */ g; },
/* harmony export */   isServerOrServicesAGOLUrl: function() { return /* binding */ I; },
/* harmony export */   isWmsServer: function() { return /* binding */ b; },
/* harmony export */   parse: function() { return /* binding */ d; },
/* harmony export */   parseNonStandardSublayerUrl: function() { return /* binding */ h; },
/* harmony export */   sanitizeUrl: function() { return /* binding */ y; },
/* harmony export */   sanitizeUrlWithLayerId: function() { return /* binding */ S; },
/* harmony export */   serverTypes: function() { return /* binding */ a; },
/* harmony export */   titleFromUrlAndName: function() { return /* binding */ w; },
/* harmony export */   writeUrlWithLayerId: function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",knowledgegraphserver:"KnowledgeGraphServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer","3dtilesserver":"3DTilesServer",videoserver:"VideoServer"},a=Object.values(o),c=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),v=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),f=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function p(e){return c.test(e)}function d(r){if(null==r)return null;const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(r),s=t?.path.match(c)||t?.path.match(v);if(!s)return null;const[,n,l,i,u]=s,a=l.indexOf("/");return{title:m(-1!==a?l.slice(a+1):l),serverType:o[i.toLowerCase()],sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:n}}}function h(r){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(r).path.match(f);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function m(e){return(e=e.replaceAll(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function w(e,r){const t=[];if(e){const r=d(e);null!=r&&r.title&&t.push(r.title)}if(r){const e=m(r);t.push(e)}if(2===t.length){if(t[0].toLowerCase().includes(t[1].toLowerCase()))return t[0];if(t[1].toLowerCase().includes(t[0].toLowerCase()))return t[1]}return t.join(" - ")}function g(e){let t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.getOrigin)(e,!0);return!!t&&(t=t.toLowerCase(),t.endsWith(".arcgis.com")&&(t.startsWith("services")||t.startsWith("tiles")||t.startsWith("features")))}function y(e,r){return e?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeTrailingSlash)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQueryParameters)(e,r)):e}function S(r){let{url:n}=r;if(!n)return{url:n};n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeQueryParameters)(n,r.logger);const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(n),i=d(l.path);let u;if(null!=i)null!=i.sublayer&&null==r.layer.layerId&&(u=i.sublayer),n=i.url.path;else if(r.nonStandardUrlAllowed){const e=h(l.path);null!=e&&(n=e.serviceUrl,u=e.sublayerId)}return{url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.removeTrailingSlash)(n),layerId:u}}function C(e,r,t,s,l){(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__.w)(r,s,"url",l),s.url&&null!=e.layerId&&(s.url=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.join)(s.url,t,e.layerId.toString()))}function b(e){if(!e)return!1;const r=e.toLowerCase(),t=r.includes("/services/"),s=r.includes("/mapserver/wmsserver"),n=r.includes("/imageserver/wmsserver"),l=r.includes("/wmsserver");return t&&(s||n||l)}function I(e){if(!e)return!1;const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.Url((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.makeAbsolute)(e)),t=r.authority?.toLowerCase();return"server.arcgisonline.com"===t||"services.arcgisonline.com"===t}


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

/***/ "./node_modules/@arcgis/core/portal/PortalItem.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/PortalItem.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ S; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets.js */ "./node_modules/@arcgis/core/assets.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _PortalItemResource_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PortalItemResource.js */ "./node_modules/@arcgis/core/portal/PortalItemResource.js");
/* harmony import */ var _PortalRating_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PortalRating.js */ "./node_modules/@arcgis/core/portal/PortalRating.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var v;const f=new Set(["3DTiles Service","CSV","Feature Collection","Feature Service","Feed","GeoJson","Group Layer","Image Service","KML","Map Service","Media Layer","Scene Service","Stream Service","Vector Tile Service","WFS","WMS","WMTS"]),b=new Set(["KML","GeoJson","CSV"]);let k=v=class extends((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupportMixin)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_5__["default"])){static from(e){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__.ensureClass)(v,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.classification=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let i=e;return"Feature Service"===e||"Feature Collection"===e?i=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?i=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?i="Scene Layer":"Video Service"===e?i="Video Layer":"Scene Package"===e?i="Scene Layer Package":"Stream Service"===e?i="Feature Layer":"Geoprocessing Service"===e?i=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geoenrichment Service"===e?i="GeoEnrichment Service":"Geocoding Service"===e?i="Locator":"Microsoft Powerpoint"===e?i="Microsoft PowerPoint":"GeoJson"===e?i="GeoJSON":"Globe Service"===e?i="Globe Layer":"Vector Tile Service"===e?i="Tile Layer":"netCDF"===e?i="NetCDF":"Map Service"===e?i=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e?.toLowerCase().includes("add in")?i=e.replaceAll(/(add in)/gi,"Add-In"):"datastore catalog service"===e?i="Big Data File Share":"Compact Tile Package"===e?i="Tile Package (tpkx)":"Raster function template"===e?i="Raster Function Template":"OGCFeatureServer"===e?i="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")?i="Instant App":"Insights Page"===e?i="Insights Report":"Excalibur Imagery Project"===e?i="Excalibur Project":"3DTiles Service"===e?i="3D tiles layer":"3DTiles Package"===e&&(i="3D tiles package"),i}readExtent(e){return e&&e.length?new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"](e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type?.toLowerCase()||"",i=this.typeKeywords||[],r="esri/images/portal/",o="16";let s,a=!1,n=!1,l=!1,p=!1,c=!1,d=!1,u=!1,m=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(a=i.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=i.includes("Table"),l=i.includes("Route Layer"),p=i.includes("Markup"),c=i.includes("Spatiotemporal"),d=i.includes("UtilityNetwork"),s=c&&n?"spatiotemporaltable":n?"table":l?"routelayer":p?"markup":c?"spatiotemporal":d?"utilitynetwork":a?"featureshosted":"features"):"map service"===e||"wms"===e||"wmts"===e?(c=i.includes("Spatiotemporal"),u=i.includes("Relational"),s=c||u?"mapimages":a||i.includes("Tiled")||"wmts"===e?"maptiles":"mapimages"):s="scene service"===e?i.includes("Line")?"sceneweblayerline":i.includes("3DObject")?"sceneweblayermultipatch":i.includes("Point")?"sceneweblayerpoint":i.includes("IntegratedMesh")?"sceneweblayermesh":i.includes("PointCloud")?"sceneweblayerpointcloud":i.includes("Polygon")?"sceneweblayerpolygon":i.includes("Building")?"sceneweblayerbuilding":i.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?i.includes("Elevation 3D Layer")?"elevationlayer":i.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"video service"===e?i.includes("Live Stream")?"livestreamvideolayer":"videolayer":"geoprocessing service"===e?i.includes("Web Tool")?"tool":"layers":"geodata service"===e?"geodataservice":"3dtiles service"===e?i.includes("3DObject")?"3dobjecttileslayer":i.includes("IntegratedMesh")?"integratedmeshtileslayer":"3dtileslayer":"layers"):"web map"===e||"cityengine web scene"===e?s="maps":"web scene"===e?s=i.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&i.includes("configurableApp")?s="instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?s="apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&i.includes("ArcGIS Pro")||"explorer map"===e&&i.indexOf("Explorer Document")?s="mapsgray":"service definition"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"netcdf"===e||"administrative report"===e?s="datafiles":"360 vr experience"===e?s="360vr":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?s="appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?s="addindesktop":"pdf"===e?s="pdf":"microsoft word"===e?s="word":"microsoft excel"===e?s="excel":"microsoft powerpoint"===e?s="ppt":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"workflow manager package"===e||"explorer map"===e&&i.includes("Explorer Mapping Application")||i.includes("Document")?s="datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?s="toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?s="layersgray":"analysis model"===e?s="analysismodel":"scene package"===e?s="scenepackage":"3dtiles package"===e?s="3dtileslayerpackage":"3dtiles service"===e?s="3dtileslayer":"mobile scene package"===e?s="mobilescenepackage":"tile package"===e||"compact tile package"===e?s="tilepackage":"task file"===e?s="taskfile":"report template"===e?s="report-template":"statistical data collection"===e?s="statisticaldatacollection":"insights workbook"===e?s="workbook":"insights model"===e?s="insightsmodel":"insights page"===e?s="insightspage":"insights theme"===e?s="insightstheme":"hub initiative"===e?s="hubinitiative":"hub page"===e?s="hubpage":"hub site application"===e?s="hubsite":"hub event"===e?s="hubevent":"hub project"===e?s="hubproject":"relational database connection"===e?s="relationaldatabaseconnection":"big data file share"===e?s="datastorecollection":"image collection"===e?s="imagecollection":"desktop style"===e?s="desktopstyle":"style"===e?s=i.includes("Dictionary")?"dictionarystyle":"style":"dashboard"===e?s="dashboard":"raster function template"===e?s="rasterprocessingtemplate":"vector tile package"===e?s="vectortilepackage":"ortho mapping project"===e?s="orthomappingproject":"ortho mapping template"===e?s="orthomappingtemplate":"solution"===e?s="solutions":"geopackage"===e?s="geopackage":"deep learning package"===e?s="deeplearningpackage":"real time analytic"===e?s="realtimeanalytics":"reality mapping project"===e?s="realitymappingproject":"big data analytic"===e?s="bigdataanalytics":"feed"===e?s="feed":"excalibur imagery project"===e?s="excaliburimageryproject":"notebook"===e?s="notebook":"storymap"===e?s="storymap":"survey123 add in"===e?s="survey123addin":"mission"===e?s="mission":"mission report"===e?s="missionreport":"mission template"===e?s="missiontemplate":"quickcapture project"===e?s="quickcaptureproject":"pro report"===e?s="proreport":"pro report template"===e?s="proreporttemplate":"urban model"===e?s="urbanmodel":"urban project"===e?s="urbanproject":"web experience"===e?s="experiencebuilder":"web experience template"===e?s="webexperiencetemplate":"experience builder widget"===e?s="experiencebuilderwidget":"experience builder widget package"===e?s="experiencebuilderwidgetpackage":"workflow"===e?s="workflow":"kernel gateway connection"===e?s="kernelgatewayconnection":"insights script"===e?s="insightsscript":"hub initiative template"===e?s="hubinitiativetemplate":"storymap theme"===e?s="storymaptheme":"knowledge graph"===e?s="knowledgegraph":"knowledge graph layer"===e?s="knowledgegraphlayer":"knowledge studio project"===e?s="knowledgestudio":"native application"===e?s="nativeapp":"native application installer"===e?s="nativeappinstaller":"web link chart"===e?s="linkchart":"knowledge graph web investigation"===e?s="investigation":"ogcfeatureserver"===e?s="features":"pro presentation"===e?s="propresentation":"pro project"===e?s="proproject":"insights workbook package"===e?s="insightsworkbookpackage":"apache parquet"===e?s="apacheparquet":"notebook code snippet library"===e?s="notebookcodesnippets":"suitability model"===e?s="suitabilitymodel":"esri classifier definition"===e?s="classifierdefinition":"esri classification schema"===e?s="classificationschema":"insights data engineering workbook"===e?s="dataengineeringworkbook":"insights data engineering model"===e?s="dataengineeringmodel":"deep learning studio project"===e?s="deeplearningproject":"discussion"===e?s="discussion":"allsource project"===e?s="allsourceproject":"api key"===e?s="apikey":"data pipeline"===e?s="datapipelines":"group layer"===e?(m=i.includes("Map"),s=m?"layergroup2d":"layergroup"):s="media layer"===e?"onlinemedialayer":"form"===e?i.includes("Survey123")?"survey":"datafilesgray":"csv"===e?"csv":"image"===e?"image":"maps",s?(0,_assets_js__WEBPACK_IMPORTED_MODULE_1__.getAssetUrl)(r+s+o+".png"):null}get isLayer(){return null!=this.type&&f.has(this.type)}get itemCdnUrl(){return (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_15__.a)(this.itemUrl)}get itemPageUrl(){const e=this.portal?.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){const e=this.portal?.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal?.normalizeUrl(`${e}/info/${t}?f=json`)??null:null}get userItemUrl(){const e=this.portal?.restUrl;if(!e)return null;const t=this.owner||this.portal?.user?.username;if(!t)return null;return`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`}load(e){const t=this.portal??(this.portal=_Portal_js__WEBPACK_IMPORTED_MODULE_12__["default"].getDefault()),i=t.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t.request(this.itemUrl,{signal:null!=e?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(i),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}};return e instanceof _PortalRating_js__WEBPACK_IMPORTED_MODULE_14__["default"]&&(e=e.rating),null==e||isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new _PortalRating_js__WEBPACK_IMPORTED_MODULE_14__["default"]({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.applicationProxies),avgRating:this.avgRating,categories:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.categories),classification:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.classification),created:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.created),culture:this.culture,description:this.description,extent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.extent),groupCategories:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.typeKeywords),url:this.url};this.loaded&&(e.loadStatus="loaded");const t=new v({sourceJSON:this.sourceJSON}).set(e);return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON();for(const t of["tags","typeKeywords","categories"])e[t]=e[t]?.join(", ");for(const t of["extent","classification"]){const i=e[t];i&&(e[t]=JSON.stringify(i))}return e}async deleteRating(){await this.portal.request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return this.portal.request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await this.portal.request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return null!=t.rating?(t.created=new Date(t.created),new _PortalRating_js__WEBPACK_IMPORTED_MODULE_14__["default"](t)):null}fetchRelatedItems(e,t){return this.portal.requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},v)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal.request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.applicationProxies&&!Object.hasOwn(e,"appProxies")&&(this.applicationProxies=null),this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal.signIn())).then((()=>{const t=e?.data,i={method:"post"};i.query=this.createPostQuery();for(const e in i.query)null===i.query[e]&&(i.query[e]="");return i.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?i.query.text=t:"object"==typeof t&&(i.query.text=JSON.stringify(t))),this.portal.request(`${this.userItemUrl}/update`,i).then((()=>this.reload()))})):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("portal:item-does-not-exist","The item does not exist yet");await this.load();const{portal:t,itemUrl:r}=this;await t.signIn();const{copyResources:o,folder:s,tags:a,title:n}=e||{},l={method:"post",query:{copyPrivateResources:"all"===o,folder:"string"==typeof s?s:s?.id,includeResources:!!o,tags:a?.join(","),title:n}},{itemId:p}=await t.request(`${r}/copy`,l);return new v({id:p,portal:t})}updateThumbnail(e){return this.id?this.load().then((()=>this.portal.signIn())).then((()=>{const t=e.thumbnail,i=e.filename,r={method:"post"};if("string"==typeof t)(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isDataProtocol)(t)?r.query={data:t}:r.query={url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(t)},null!=i&&(r.query.filename=i);else{const e=new FormData;null!=i?e.append("file",t,i):e.append("file",t),r.body=e}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,r).then((()=>this.reload()))})):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){const{fetchResources:i}=await __webpack_require__.e(/*! import() | support-resourceUtils */ "support-resourceUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js"));return i(this,e,t)}async addResource(e,t,i){const{addOrUpdateResources:r}=await __webpack_require__.e(/*! import() | support-resourceUtils */ "support-resourceUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js"));return e.portalItem=this,await r(this,[{resource:e,content:t,compress:i?.compress,access:i?.access}],"add",i),e}async removeResource(e,t){const{removeResource:r}=await __webpack_require__.e(/*! import() | support-resourceUtils */ "support-resourceUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js"));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r(this,e,t)}async removeAllResources(e){const{removeAllResources:t}=await __webpack_require__.e(/*! import() | support-resourceUtils */ "support-resourceUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js"));return t(this,e)}resourceFromPath(e){return new _PortalItemResource_js__WEBPACK_IMPORTED_MODULE_13__["default"]({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.categories),classification:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.classification),created:this.created?.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified?.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.typeKeywords),url:this.url};return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.fixJson)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new v({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["private","shared","org","public"]})],k.prototype,"access",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"accessInformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String})],k.prototype,"apiKey",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:{source:"appProxies"}}})],k.prototype,"applicationProxies",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"avgRating",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"categories",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"classification",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Date})],k.prototype,"created",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"culture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"displayName",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__["default"]})],k.prototype,"extent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("extent")],k.prototype,"readExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"groupCategories",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"iconUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"isLayer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,readOnly:!0})],k.prototype,"isOrgItem",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"itemControl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"itemPageUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"itemUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"licenseInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Date})],k.prototype,"modified",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"numComments",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"numRatings",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"numViews",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"owner",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"ownerFolder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_Portal_js__WEBPACK_IMPORTED_MODULE_12__["default"]})],k.prototype,"portal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"screenshots",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"snippet",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String})],k.prototype,"sourceUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String})],k.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"tags",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"thumbnail",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"thumbnailUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],k.prototype,"typeKeywords",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{read(e,t){if(b.has(t.type)){const t=this.portal?.restUrl;e||=t&&this.id?`${t}/content/items/${this.id}/data`:null}return e}}})],k.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"userItemUrl",null),k=v=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.portal.PortalItem")],k);const S=k;


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/PortalItemResource.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/PortalItemResource.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this.portalItem=null}normalizeCtorArgs(t){return t?.portalItem&&t.path?{...t,path:n(t.path,t.portalItem)}:t}set path(t){null!=t&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbsolute)(t)?_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",t)}_castPath(t){return n(t,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get cdnUrl(){return this.portalItem&&this.path?`${this.portalItem.itemCdnUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(t="json",r){const o=this.cdnUrl;if(null==o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(o,{responseType:t,query:{token:this.portalItem.apiKey,_ts:r?.cacheBust?Date.now():null},signal:r?.signal})}async update(t,r){const{addOrUpdateResources:e}=await __webpack_require__.e(/*! import() | support-resourceUtils */ "support-resourceUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js"));return await e(this.portalItem,[{resource:this,content:t,compress:r?.compress,access:r?.access}],"update",r),this}hasPath(){return null!=this.path}};function n(t,r){return null==t?t:(t=t.replace(/^\/+/,""),null!=r&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbsolute)(t)&&(t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.makeRelative)(t,r.itemUrl)),t?.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],c.prototype,"portalItem",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,value:null})],c.prototype,"path",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__.cast)("path")],c.prototype,"_castPath",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,readOnly:!0})],c.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,readOnly:!0})],c.prototype,"cdnUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,readOnly:!0})],c.prototype,"itemRelativeUrl",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.portal.PortalItemResource")],c);const u=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/PortalRating.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/PortalRating.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(r){super(r),this.created=null,this.rating=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"created",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"rating",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.portal.PortalRating")],e);const c=e;


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


/***/ })

}]);
//# sourceMappingURL=layers-ElevationLayer.js.map