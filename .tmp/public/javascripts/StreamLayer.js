"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["StreamLayer"],{

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

/***/ "./node_modules/@arcgis/core/core/MD5.js":
/*!***********************************************!*\
  !*** ./node_modules/@arcgis/core/core/MD5.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMD5Hash: function() { return /* binding */ x; },
/* harmony export */   outputTypes: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3},t=8,r=(1<<t)-1;function e(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n){const e=[];for(let o=0,u=n.length*t;o<u;o+=t)e[o>>5]|=(n.charCodeAt(o/t)&r)<<o%32;return e}function u(n){const e=[];for(let o=0,u=32*n.length;o<u;o+=t)e.push(String.fromCharCode(n[o>>5]>>>o%32&r));return e.join("")}function c(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}function f(n){const t="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[];for(let o=0,u=4*n.length;o<u;o+=3){const u=(n[o>>2]>>o%4*8&255)<<16|(n[o+1>>2]>>(o+1)%4*8&255)<<8|n[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*n.length?e.push(t):e.push(r.charAt(u>>6*(3-c)&63))}return e.join("")}function s(n,t){return n<<t|n>>>32-t}function i(n,t,r,o,u,c){return e(s(e(e(t,n),e(o,c)),u),r)}function h(n,t,r,e,o,u,c){return i(t&r|~t&e,n,t,o,u,c)}function a(n,t,r,e,o,u,c){return i(t&e|r&~e,n,t,o,u,c)}function l(n,t,r,e,o,u,c){return i(t^r^e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return i(r^(t|~e),n,t,o,u,c)}function p(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;let r=1732584193,o=-271733879,u=-1732584194,c=271733878;for(let f=0;f<n.length;f+=16){const t=r,s=o,i=u,p=c;r=h(r,o,u,c,n[f],7,-680876936),c=h(c,r,o,u,n[f+1],12,-389564586),u=h(u,c,r,o,n[f+2],17,606105819),o=h(o,u,c,r,n[f+3],22,-1044525330),r=h(r,o,u,c,n[f+4],7,-176418897),c=h(c,r,o,u,n[f+5],12,1200080426),u=h(u,c,r,o,n[f+6],17,-1473231341),o=h(o,u,c,r,n[f+7],22,-45705983),r=h(r,o,u,c,n[f+8],7,1770035416),c=h(c,r,o,u,n[f+9],12,-1958414417),u=h(u,c,r,o,n[f+10],17,-42063),o=h(o,u,c,r,n[f+11],22,-1990404162),r=h(r,o,u,c,n[f+12],7,1804603682),c=h(c,r,o,u,n[f+13],12,-40341101),u=h(u,c,r,o,n[f+14],17,-1502002290),o=h(o,u,c,r,n[f+15],22,1236535329),r=a(r,o,u,c,n[f+1],5,-165796510),c=a(c,r,o,u,n[f+6],9,-1069501632),u=a(u,c,r,o,n[f+11],14,643717713),o=a(o,u,c,r,n[f],20,-373897302),r=a(r,o,u,c,n[f+5],5,-701558691),c=a(c,r,o,u,n[f+10],9,38016083),u=a(u,c,r,o,n[f+15],14,-660478335),o=a(o,u,c,r,n[f+4],20,-405537848),r=a(r,o,u,c,n[f+9],5,568446438),c=a(c,r,o,u,n[f+14],9,-1019803690),u=a(u,c,r,o,n[f+3],14,-187363961),o=a(o,u,c,r,n[f+8],20,1163531501),r=a(r,o,u,c,n[f+13],5,-1444681467),c=a(c,r,o,u,n[f+2],9,-51403784),u=a(u,c,r,o,n[f+7],14,1735328473),o=a(o,u,c,r,n[f+12],20,-1926607734),r=l(r,o,u,c,n[f+5],4,-378558),c=l(c,r,o,u,n[f+8],11,-2022574463),u=l(u,c,r,o,n[f+11],16,1839030562),o=l(o,u,c,r,n[f+14],23,-35309556),r=l(r,o,u,c,n[f+1],4,-1530992060),c=l(c,r,o,u,n[f+4],11,1272893353),u=l(u,c,r,o,n[f+7],16,-155497632),o=l(o,u,c,r,n[f+10],23,-1094730640),r=l(r,o,u,c,n[f+13],4,681279174),c=l(c,r,o,u,n[f],11,-358537222),u=l(u,c,r,o,n[f+3],16,-722521979),o=l(o,u,c,r,n[f+6],23,76029189),r=l(r,o,u,c,n[f+9],4,-640364487),c=l(c,r,o,u,n[f+12],11,-421815835),u=l(u,c,r,o,n[f+15],16,530742520),o=l(o,u,c,r,n[f+2],23,-995338651),r=g(r,o,u,c,n[f],6,-198630844),c=g(c,r,o,u,n[f+7],10,1126891415),u=g(u,c,r,o,n[f+14],15,-1416354905),o=g(o,u,c,r,n[f+5],21,-57434055),r=g(r,o,u,c,n[f+12],6,1700485571),c=g(c,r,o,u,n[f+3],10,-1894986606),u=g(u,c,r,o,n[f+10],15,-1051523),o=g(o,u,c,r,n[f+1],21,-2054922799),r=g(r,o,u,c,n[f+8],6,1873313359),c=g(c,r,o,u,n[f+15],10,-30611744),u=g(u,c,r,o,n[f+6],15,-1560198380),o=g(o,u,c,r,n[f+13],21,1309151649),r=g(r,o,u,c,n[f+4],6,-145523070),c=g(c,r,o,u,n[f+11],10,-1120210379),u=g(u,c,r,o,n[f+2],15,718787259),o=g(o,u,c,r,n[f+9],21,-343485551),r=e(r,t),o=e(o,s),u=e(u,i),c=e(c,p)}return[r,o,u,c]}function x(r,e=n.Hex){const s=e||n.Base64,i=p(o(r),r.length*t);switch(s){case n.Raw:return i;case n.Hex:return c(i);case n.String:return u(i);case n.Base64:return f(i)}}


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

/***/ "./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diff: function() { return /* binding */ d; },
/* harmony export */   hasDiff: function() { return /* binding */ p; },
/* harmony export */   hasDiffAny: function() { return /* binding */ a; },
/* harmony export */   hasRootDiff: function() { return /* binding */ s; },
/* harmony export */   hasRootDiffOnly: function() { return /* binding */ y; },
/* harmony export */   isEmpty: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function r(e){return e instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_0__["default"]}function f(t){return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]?Object.keys(t.items):r(t)?(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getProperties)(t).keys():t?Object.keys(t):[]}function i(t,n){return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]?t.items[n]:t[n]}function l(t,e){return!(!Array.isArray(t)||!Array.isArray(e))&&t.length!==e.length}function u(t){return t?t.declaredClass:null}function c(t,e){const n=t.diff;if(n&&"function"==typeof n)return n(t,e);const s=f(t),p=f(e);if(0===s.length&&0===p.length)return;if(!s.length||!p.length||l(t,e))return{type:"complete",oldValue:t,newValue:e};const a=p.filter((t=>!s.includes(t))),y=s.filter((t=>!p.includes(t))),d=s.filter((n=>p.includes(n)&&i(t,n)!==i(e,n))).concat(a,y).sort(),m=u(t);if(m&&o.has(m)&&d.length)return{type:"complete",oldValue:t,newValue:e};let h;const b=r(t)&&r(e);for(const o of d){const r=i(t,o),f=i(e,o);let l;if((b||"function"!=typeof r&&"function"!=typeof f)&&(r!==f&&(null!=r||null!=f))){if(n&&n[o]&&"function"==typeof n[o])l=n[o]?.(r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;l={type:"complete",oldValue:r,newValue:f}}else l="object"==typeof r&&"object"==typeof f&&u(r)===u(f)?c(r,f):{type:"complete",oldValue:r,newValue:f};null!=l&&(null!=h?h.diff[o]=l:h={type:"partial",diff:{[o]:l}})}}return h}function s(t,e){return p(t,e)}function p(t,e){if(null==t)return!1;const n=e.split(".");let o=t;for(const r of n){if("complete"===o.type)return!0;if("partial"!==o.type)return!1;{const t=o.diff[r];if(!t)return!1;o=t}}return!0}function a(t,e){for(const n of e)if(p(t,n))return!0;return!1}function y(t,e){if(!t)return!1;if("partial"===t.type){const n=Object.keys(t.diff);return 1===n.length&&n[0]===e}return!1}function d(t,e){if("function"!=typeof t&&"function"!=typeof e&&(null!=t||null!=e))return null==t||null==e||"object"==typeof t&&"object"==typeof e&&u(t)!==u(e)?{type:"complete",oldValue:t,newValue:e}:c(t,e)}function m(t){if(null==t)return!0;switch(t.type){case"complete":return!1;case"collection":{const e=t;for(const t of e.added)if(!m(t))return!1;for(const t of e.removed)if(!m(t))return!1;for(const t of e.changed)if(!m(t))return!1;return!0}case"partial":for(const e in t.diff){if(!m(t.diff[e]))return!1}return!0}}


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

/***/ "./node_modules/@arcgis/core/core/sql/UnknownTimeZone.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/sql/UnknownTimeZone.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnknownTimeZone: function() { return /* binding */ t; },
/* harmony export */   adoptTimeZone: function() { return /* binding */ c; },
/* harmony export */   isUnknownTimeZone: function() { return /* binding */ r; },
/* harmony export */   substituteUnknownTimezone: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/src/luxon.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{}function r(n){return n instanceof luxon__WEBPACK_IMPORTED_MODULE_0__.Zone?n===t.instance:"unknown"===n?.toString().toLowerCase()}function i(n){return r(n)?t.instance:n}function c(n,o){return luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromObject({day:n.day,year:n.year,month:n.month,hour:n.hour,minute:n.minute,second:n.second,millisecond:n.millisecond},{zone:o})}t.instance=new luxon__WEBPACK_IMPORTED_MODULE_0__.IANAZone("Etc/UTC");


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

/***/ "./node_modules/@arcgis/core/geometry/support/quantizationUtils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuantizedBoundsCoordsArray: function() { return /* binding */ V; },
/* harmony export */   getQuantizedBoundsCoordsArrayArray: function() { return /* binding */ Y; },
/* harmony export */   getQuantizedBoundsPaths: function() { return /* binding */ d; },
/* harmony export */   getQuantizedBoundsPoints: function() { return /* binding */ _; },
/* harmony export */   getQuantizedBoundsRings: function() { return /* binding */ G; },
/* harmony export */   normalizeTransform: function() { return /* binding */ u; },
/* harmony export */   quantizeBounds: function() { return /* binding */ I; },
/* harmony export */   quantizeCoordsArrayXY: function() { return /* binding */ m; },
/* harmony export */   quantizeCoordsArrayXYM: function() { return /* binding */ x; },
/* harmony export */   quantizeCoordsArrayXYZ: function() { return /* binding */ g; },
/* harmony export */   quantizeCoordsArrayXYZM: function() { return /* binding */ M; },
/* harmony export */   quantizeExtent: function() { return /* binding */ O; },
/* harmony export */   quantizeGeometry: function() { return /* binding */ q; },
/* harmony export */   quantizeM: function() { return /* binding */ h; },
/* harmony export */   quantizeMultipoint: function() { return /* binding */ S; },
/* harmony export */   quantizePoint: function() { return /* binding */ j; },
/* harmony export */   quantizePolygon: function() { return /* binding */ U; },
/* harmony export */   quantizePolyline: function() { return /* binding */ k; },
/* harmony export */   quantizeX: function() { return /* binding */ i; },
/* harmony export */   quantizeY: function() { return /* binding */ a; },
/* harmony export */   quantizeZ: function() { return /* binding */ c; },
/* harmony export */   toQuantizationTransform: function() { return /* binding */ s; },
/* harmony export */   unquantizeBounds: function() { return /* binding */ F; },
/* harmony export */   unquantizeCoordsArrayArray: function() { return /* binding */ b; },
/* harmony export */   unquantizeCoordsArrayXY: function() { return /* binding */ T; },
/* harmony export */   unquantizeCoordsArrayXYM: function() { return /* binding */ L; },
/* harmony export */   unquantizeCoordsArrayXYZ: function() { return /* binding */ E; },
/* harmony export */   unquantizeCoordsArrayXYZM: function() { return /* binding */ A; },
/* harmony export */   unquantizeExtent: function() { return /* binding */ v; },
/* harmony export */   unquantizeM: function() { return /* binding */ w; },
/* harmony export */   unquantizeMultipoint: function() { return /* binding */ B; },
/* harmony export */   unquantizePoint: function() { return /* binding */ C; },
/* harmony export */   unquantizePolygon: function() { return /* binding */ D; },
/* harmony export */   unquantizePolyline: function() { return /* binding */ H; },
/* harmony export */   unquantizeX: function() { return /* binding */ Z; },
/* harmony export */   unquantizeY: function() { return /* binding */ y; },
/* harmony export */   unquantizeZ: function() { return /* binding */ z; }
/* harmony export */ });
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance,1,1]:[1,1,1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax,n.extent.zmin??0,n.extent.mmin??0]:[0,0,0,0]}}function l(n){return"lowerLeft"===n.originPosition&&4===n.scale.length&&4===n.translate.length}function u(n){if(l(n))return n;const{originPosition:t,scale:e,translate:r}=n,o=e[0]??1,s=e[1]??1;return{originPosition:"lowerLeft",scale:[o,"lowerLeft"===t?s:-s,e[2]??1,e[3]??1],translate:[r[0]??0,r[1]??0,r[2]??0,r[3]??0]}}function i({scale:n,translate:t},e){return Math.round((e-t[0])/n[0])}function a({scale:n,translate:t},e){return Math.round((e-t[1])/n[1])}function c({scale:n,translate:t},e){return Math.round(((e??0)-t[2])/n[2])}function h({scale:n,translate:t},e){return e?Math.round((e-t[3])/n[3]):0}function f(n,t){return n&&t?M:n&&!t?g:!n&&t?x:m}const m=(n,t)=>{const e=[];if(!t.length)return null;const r=t[0];let o=i(n,r[0]),s=a(n,r[1]);e.push([o,s]);for(let l=1;l<t.length;l++){const[r,u]=t[l],c=i(n,r),h=a(n,u);c===o&&h===s||e.push([c-o,h-s]),o=c,s=h}return e},g=(n,t)=>{const e=[];if(!t.length)return null;const r=t[0];let o=i(n,r[0]),s=a(n,r[1]),l=c(n,r[2]);e.push([o,s,l]);for(let u=1;u<t.length;u++){const[r,h,f]=t[u],m=i(n,r),g=a(n,h),x=c(n,f);m===o&&g===s&&x===l||e.push([m-o,g-s,x]),o=m,s=g,l=x}return e},x=(n,t)=>{const e=[];if(!t.length)return null;const r=t[0];let o=i(n,r[0]),s=a(n,r[1]),l=h(n,r[2]);e.push([o,s,l]);for(let u=1;u<t.length;u++){const[r,c,f]=t[u],m=i(n,r),g=a(n,c),x=h(n,f);m===o&&g===s&&x===l||e.push([m-o,g-s,x]),o=m,s=g,l=x}return e},M=(n,t)=>{const e=[];if(!t.length)return null;const r=t[0];let o=i(n,r[0]),s=a(n,r[1]),l=c(n,r[2]),u=h(n,r[3]);e.push([o,s,l,u]);for(let f=1;f<t.length;f++){const[r,m,g,x]=t[f],M=i(n,r),I=a(n,m),p=c(n,g),N=h(n,x);M===o&&I===s&&p===l&&N===u||e.push([M-o,I-s,p,N]),o=M,s=I,l=p,u=N}return e};function I(n,t,e){const r=u(n);return t[0]=i(r,e[0]),t[3]=a(r,e[1]),t[2]=i(r,e[2]),t[1]=a(r,e[3]),t}function p(n,t,e,r){const o=[],s=f(e,r);for(let l=0;l<t.length;l++){const e=s(n,t[l]);e&&e.length>=3&&o.push(e)}return o.length?o:null}function N(n,t,e,r){const o=[],s=f(e,r);for(let l=0;l<t.length;l++){const e=s(n,t[l]);e&&e.length>=2&&o.push(e)}return o.length?o:null}function Z({scale:n,translate:t},e){return e*n[0]+t[0]}function y({scale:n,translate:t},e){return e*n[1]+t[1]}function z({scale:n,translate:t},e){return(e??0)*n[2]+t[2]}function w({scale:n,translate:t},e){return e?e*n[3]+t[3]:0}function P(n,t){return n&&t?A:n&&!t?E:!n&&t?L:T}const T=(n,t)=>{const e=new Array(t.length);if(!t.length)return e;const r=t[0];let o=Z(n,r[0]),s=y(n,r[1]);e[0]=[o,s];const{scale:l,originPosition:u}=n,i=l[0],a="lowerLeft"===u?l[1]:-l[1];for(let c=1;c<t.length;c++){const[n,r]=t[c];o+=i*n,s+=a*r,e[c]=[o,s]}return e},E=(n,t)=>{const e=new Array(t.length);if(!t.length)return e;const r=t[0];let o=Z(n,r[0]),s=y(n,r[1]);e[0]=[o,s,z(n,r[2])];const{scale:l,originPosition:u}=n,i=l[0],a="lowerLeft"===u?l[1]:-l[1];for(let c=1;c<t.length;c++){const[r,l,u]=t[c];o+=i*r,s+=a*l,e[c]=[o,s,z(n,u)]}return e},L=(n,t)=>{const e=new Array(t.length);if(!t.length)return e;const r=t[0];let o=Z(n,r[0]),s=y(n,r[1]);e[0]=[o,s,w(n,r[2])];const{scale:l,originPosition:u}=n,i=l[0],a="lowerLeft"===u?l[1]:-l[1];for(let c=1;c<t.length;c++){const[r,l,u]=t[c];o+=i*r,s+=a*l,e[c]=[o,s,w(n,u)]}return e},A=(n,t)=>{const e=new Array(t.length);if(!t.length)return e;const r=t[0];let o=Z(n,r[0]),s=y(n,r[1]);e[0]=[o,s,z(n,r[2]),w(n,r[3])];const{scale:l,originPosition:u}=n,i=l[0],a="lowerLeft"===u?l[1]:-l[1];for(let c=1;c<t.length;c++){const[r,l,u,h]=t[c];o+=i*r,s+=a*l,e[c]=[o,s,z(n,u),w(n,h)]}return e};function b(n,t,e){const r=new Array(e.length);for(let o=0;o<e.length;o++)r[o]=t(n,e[o]);return r}function F(n,t,e){const r=u(n);return e?(t[0]=Z(r,e[0]),t[1]=y(r,e[3]),t[2]=Z(r,e[2]),t[3]=y(r,e[1]),t):[Z(r,t[0]),y(r,t[3]),Z(r,t[2]),y(r,t[1])]}function V(n,t,e){let[r,o]=e[0],s=Math.min(r,t[0]),l=Math.min(o,t[1]),u=Math.max(r,t[2]),i=Math.max(o,t[3]);for(let a=1;a<e.length;a++){const[n,t]=e[a];r+=n,o+=t,n<0&&(s=Math.min(s,r)),n>0&&(u=Math.max(u,r)),t<0?l=Math.min(l,o):t>0&&(i=Math.max(i,o))}return n[0]=s,n[1]=l,n[2]=u,n[3]=i,n}function Y(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let e=0;e<t.length;e++)V(n,n,t[e]);return n}function _(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return V(t,t,n)}function d(n){return Y([0,0,0,0],n)}function G(n){return Y([0,0,0,0],n)}function O(n,t,e){const r=u(n);return t.xmin=i(r,e.xmin),t.ymin=a(r,e.ymin),t.xmax=i(r,e.xmax),t.ymax=a(r,e.ymax),e.hasZ&&(t.zmin=c(r,e.zmin),t.zmax=c(r,e.zmax)),e.hasM&&(t.mmin=h(r,e.mmin),t.mmax=h(r,e.mmax)),t.hasZ=e.hasZ??!1,t.hasM=e.hasM??!1,t}function S(n,t,e){const r=u(n);return t.points=f(e.hasZ,e.hasM)(r,e.points)??[],t.hasZ=e.hasZ??!1,t.hasM=e.hasM??!1,t}function j(n,t,e){const r=u(n);return t.x=i(r,e.x),t.y=a(r,e.y),null!=e.z&&(t.z=c(r,e.z)),null!=e.m&&(t.m=h(r,e.m)),t}function U(n,t,e){const r=p(u(n),e.rings,e.hasZ,e.hasM);return r?(t.rings=r,t.hasZ=e.hasZ??!1,t.hasM=e.hasM??!1,t):null}function k(n,t,e){const r=N(u(n),e.paths,e.hasZ,e.hasM);return r?(t.paths=r,t.hasZ=e.hasZ??!1,t.hasM=e.hasM??!1,t):null}function q(s,l){return s&&l?(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.isPoint)(l)?j(s,{},l):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.isPolyline)(l)?k(s,{},l):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.isPolygon)(l)?U(s,{},l):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.isMultipoint)(l)?S(s,{},l):(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.isExtent)(l)?O(s,{},l):null:null}function v(n,t,e,r=e.hasZ??!1,o=e.hasM??!1){const s=u(n);return t.xmin=Z(s,e.xmin),t.xmax=Z(s,e.xmax),t.ymin=y(s,e.ymin),t.ymax=y(s,e.ymax),r&&(t.zmin=z(s,e.zmin),t.zmax=z(s,e.zmax)),o&&(t.mmin=w(s,e.mmin),t.mmax=w(s,e.mmax)),t.hasZ=r,t.hasM=o,t}function B(n,t,e,r=e?.hasZ??!1,o=e?.hasM??!1){if(null!=e){const s=u(n);t.points=P(r,o)(s,e.points),t.hasZ=r,t.hasM=o}return t}function C(n,t,e,r=null!=e?.z,o=null!=e?.m){if(null==e)return t;const s=u(n);return t.x=Z(s,e.x),t.y=y(s,e.y),r&&(t.z=z(s,e.z)),o&&(t.m=w(s,e.m)),t}function D(n,t,e,r=e?.hasZ??!1,o=e?.hasM??!1){if(null!=e){const s=u(n);t.rings=b(s,P(r,o),e.rings),t.hasZ=r,t.hasM=o}return t}function H(n,t,e,r=e?.hasZ??!1,o=e?.hasM??!1){if(null!=e){const s=u(n);t.paths=b(s,P(r,o),e.paths),t.hasZ=r,t.hasM=o}return t}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/StreamLayer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/StreamLayer.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ te; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PopupTemplate.js */ "./node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _renderers_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderers/PieChartRenderer.js */ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderers/Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../renderers/support/types.js */ "./node_modules/@arcgis/core/renderers/support/types.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../geometry/support/typeUtils.js */ "./node_modules/@arcgis/core/geometry/support/typeUtils.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "./node_modules/@arcgis/core/layers/mixins/ArcGISService.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "./node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js");
/* harmony import */ var _mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/FeatureEffectLayer.js */ "./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js");
/* harmony import */ var _mixins_FeatureReductionLayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./mixins/FeatureReductionLayer.js */ "./node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/featureLayerUtils.js */ "./node_modules/@arcgis/core/layers/support/featureLayerUtils.js");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/Field.js */ "./node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/fieldProperties.js */ "./node_modules/@arcgis/core/layers/support/fieldProperties.js");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./support/LabelClass.js */ "./node_modules/@arcgis/core/layers/support/LabelClass.js");
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./support/labelingInfo.js */ "./node_modules/@arcgis/core/layers/support/labelingInfo.js");
/* harmony import */ var _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./support/PurgeOptions.js */ "./node_modules/@arcgis/core/layers/support/PurgeOptions.js");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../renderers/support/styleUtils.js */ "./node_modules/@arcgis/core/renderers/support/styleUtils.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../support/popupUtils.js */ "./node_modules/@arcgis/core/support/popupUtils.js");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../symbols/support/ElevationInfo.js */ "./node_modules/@arcgis/core/symbols/support/ElevationInfo.js");
/* harmony import */ var _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../webdoc/interfaces.js */ "./node_modules/@arcgis/core/webdoc/interfaces.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const Y=(0,_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_40__.defineFieldProperties)();function Z(e,t){return new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__["default"]("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let ee=class extends((0,_mixins_FeatureReductionLayer_js__WEBPACK_IMPORTED_MODULE_31__.FeatureReductionLayer)((0,_mixins_FeatureEffectLayer_js__WEBPACK_IMPORTED_MODULE_30__.FeatureEffectLayer)((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_28__.BlendLayer)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_36__.TemporalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_35__.ScaleRangeLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_34__.RefreshableLayer)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_27__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_32__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_33__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__.MultiOriginJSONMixin)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_29__.CustomParametersMixin)((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_14__.ClonableMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_26__["default"]))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_44__["default"],this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_50__["default"].WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_20__.debounce)((async(e,t,r)=>{const{save:i,saveAs:o}=await __webpack_require__.e(/*! import() | save-streamLayerUtils */ "save-streamLayerUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./save/streamLayerUtils.js */ "./node_modules/@arcgis/core/layers/save/streamLayerUtils.js"));switch(e){case _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_49__.SaveOperationType.SAVE:return i(this,t);case _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_49__.SaveOperationType.SAVE_AS:return o(this,r,t)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__["default"]("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_20__.throwIfAbortError).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixRendererFields)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){t=t.layerDefinition||t;const o=t.drawingInfo?.renderer;if(o){const e=(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_11__.read)(o,t,i)||void 0;return e||_core_Logger_js__WEBPACK_IMPORTED_MODULE_18__["default"].getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return (0,_support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_38__.createDefaultRenderer)(t,i)}async connect(e){const[{createConnection:t}]=await Promise.all([__webpack_require__.e(/*! import() | graphics-sources-connections-createConnection */ "graphics-sources-connections-createConnection").then(__webpack_require__.bind(__webpack_require__, /*! ./graphics/sources/connections/createConnection.js */ "./node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js")),this.load()]),r=this.geometryType?_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_25__.featureGeometryTypeKebabDictionary.toJSON(this.geometryType):null,{customParameters:i=null,definitionExpression:o=null,geometryDefinition:s=null,maxReconnectionAttempts:n=0,maxReconnectionInterval:a=20,spatialReference:l=this.spatialReference}=e||this.createConnectionParameters(),d=t(this.parsedUrl,this.spatialReference,l,r,o,s,n,a,i??void 0),m=(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_16__.handlesGroup)([this.on("send-message-to-socket",(e=>d.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>d.sendMessageToClient(e)))]);return d.once("destroy",m.remove),d}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_47__.createPopupTemplate)(this,e)}createQuery(){const e=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_46__["default"];return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(_webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_49__.SaveOperationType.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(_webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_49__.SaveOperationType.SAVE_AS,t,e)}write(e,t){const r=t?.messages;return this.webSocketUrl?(r?.push(Z(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(r?.push(Z(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!!!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__["default"]("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__["default"]("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__["default"]("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_39__["default"]({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_15__["default"]("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixRendererFields)(this.renderer,this.fieldsIndex),(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_41__.fixTimeInfoFields)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_45__.loadStyleRenderer)(this,{origin:"service"})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:String})],ee.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({readOnly:!0})],ee.prototype,"defaultPopupTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ee.prototype,"definitionExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:String})],ee.prototype,"displayField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_48__["default"]})],ee.prototype,"elevationInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],ee.prototype,"featureReduction",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(Y.fields)],ee.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(Y.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_51__["default"],json:{name:"layerDefinition.definitionGeometry",write:!0}})],ee.prototype,"geometryDefinition",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_25__.featureGeometryTypeKebabDictionary.apiValues,json:{read:{reader:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_25__.featureGeometryTypeKebabDictionary.read}}})],ee.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.labelsVisible)],ee.prototype,"labelsVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:[_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_42__["default"]],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_43__.reader},write:!0}})],ee.prototype,"labelingInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.legendEnabled)],ee.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ee.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_22__.Integer})],ee.prototype,"maxReconnectionAttempts",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_22__.Integer})],ee.prototype,"maxReconnectionInterval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.maxScale)],ee.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.minScale)],ee.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:String})],ee.prototype,"objectIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({readOnly:!0})],ee.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.popupEnabled)],ee.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"],json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_44__["default"]})],ee.prototype,"purgeOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({json:{read:!1,write:!1}})],ee.prototype,"refreshInterval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_12__.webSceneRendererTypes,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ee.prototype,"renderer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_23__.reader)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_23__.reader)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ee.prototype,"readRenderer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)((()=>{const e=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_17__.clone)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.screenSizePerspectiveEnabled);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],ee.prototype,"screenSizePerspectiveEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)()],ee.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_50__["default"],json:{origins:{service:{read:{source:"spatialReference"}}}}})],ee.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({json:{read:!1}})],ee.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_37__.url)],ee.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:Number})],ee.prototype,"updateInterval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({json:{read:!1,write:!1}})],ee.prototype,"useViewTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_21__.property)({type:String})],ee.prototype,"webSocketUrl",void 0),ee=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_24__.subclass)("esri.layers.StreamLayer")],ee);const te=ee;


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

/***/ "./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureEffectLayer: function() { return /* binding */ c; },
/* harmony export */   featureEffectProperty: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../support/FeatureEffect.js */ "./node_modules/@arcgis/core/layers/support/FeatureEffect.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s={write:{allowNull:!0}},p={type:_support_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_6__["default"],json:{origins:{"web-map":s,"portal-item":s}}},c=t=>{let s=class extends t{constructor(){super(...arguments),this.featureEffect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)(p)],s.prototype,"featureEffect",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.mixins.FeatureEffectLayer")],s),s};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureReductionLayer: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../renderers/ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderers/DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _renderers_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/PieChartRenderer.js */ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderers/Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_AggregateField_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../support/AggregateField.js */ "./node_modules/@arcgis/core/layers/support/AggregateField.js");
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/featureReductionUtils.js */ "./node_modules/@arcgis/core/layers/support/featureReductionUtils.js");
/* harmony import */ var _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../renderers/visualVariables/SizeVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js");
/* harmony import */ var _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../renderers/visualVariables/support/SizeStop.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js");
/* harmony import */ var _views_2d_layers_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../views/2d/layers/support/clusterUtils.js */ "./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=c=>{let p=class extends c{constructor(...e){super(...e),this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_11__.watch)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_11__.sync))}set featureReduction(e){const r=this._normalizeFeatureReduction(e);this._set("featureReduction",r)}set renderer(e){}_withClusterVariable(e,r,s){const t=e.clone();if("visualVariables"in t){t.visualVariables||(t.visualVariables=[]);t.visualVariables.some((e=>"size"===e.type))||t.visualVariables.push(new _renderers_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_18__["default"]({field:"cluster_count",stops:[new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_19__["default"]({value:1}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_19__["default"]({useMinValue:!0,size:r}),new _renderers_visualVariables_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_19__["default"]({useMaxValue:!0,size:s})]}))}return t}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const s=e.clone(),t=[new _support_AggregateField_js__WEBPACK_IMPORTED_MODULE_16__["default"]({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],i=(s.fields??[]).filter((e=>!e.isAutoGenerated)),n=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:a,clusterMaxSize:u}=s;if(n){s.fields=[...t,...i];const e=this._withClusterVariable(s.renderer,a,u);return s.effectiveFeatureRenderer=e,s.effectiveClusterRenderer=e,s}if(e.symbol){if(s.fields=[...t,...i],s.renderer=null,!this.renderer)return s.effectiveFeatureRenderer=null,s.effectiveClusterRenderer=null,s;const n=(0,_views_2d_layers_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_20__.createInferredClusterRenderer)(t,this.renderer),o=this._withClusterVariable(n,a,u),l="visualVariables"in o&&o.visualVariables?o.visualVariables:[],c=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"]({symbol:e.symbol,visualVariables:l});return s.fields=[...t,...i],s.effectiveFeatureRenderer=o,s.effectiveClusterRenderer=c,s}if(!this.renderer)return e;const l=(0,_views_2d_layers_support_clusterUtils_js__WEBPACK_IMPORTED_MODULE_20__.createInferredClusterRenderer)(t,this.renderer);s.fields=[...t,...i],s.renderer=l;const c=this._withClusterVariable(l,a,u);return s.effectiveFeatureRenderer=c,s.effectiveClusterRenderer=c,s}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__.property)(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_17__.featureReductionProperty)],p.prototype,"featureReduction",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_15__.subclass)("esri.layers.mixins.FeatureReductionLayer")],p),p};


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

/***/ "./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemporalLayer: function() { return /* binding */ l; },
/* harmony export */   useViewTimeProperty: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/layerContainerType.js */ "./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/TimeInfo.js */ "./node_modules/@arcgis/core/layers/support/TimeInfo.js");
/* harmony import */ var _portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/timeUnitKebabDictionary.js */ "./node_modules/@arcgis/core/portal/timeUnitKebabDictionary.js");
/* harmony import */ var _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../time/TimeExtent.js */ "./node_modules/@arcgis/core/time/TimeExtent.js");
/* harmony import */ var _time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../time/TimeInterval.js */ "./node_modules/@arcgis/core/time/TimeInterval.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const f={type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation",layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_7__.excludeTables}}},l=i=>{let l=class extends i{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const o=t.timeInfo.exportOptions;if(!o)return null;const r=o.timeOffset,i=_portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__.timeUnitKebabDictionary.fromJSON(o.timeOffsetUnits);return r&&i?new _time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_12__["default"]({value:r,unit:i}):null}set timeInfo(e){(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.fixTimeInfoFields)(e,this.fieldsIndex),this._set("timeInfo",e)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:!1}})],l.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:_time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_12__["default"]})],l.prototype,"timeOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__.reader)("service","timeOffset",["timeInfo.exportOptions"])],l.prototype,"readOffset",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({value:null,type:_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"timeInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)(f)],l.prototype,"useViewTime",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.mixins.TemporalLayer")],l),l};


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

/***/ "./node_modules/@arcgis/core/layers/support/AggregateField.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/AggregateField.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExpressionInfo.js */ "./node_modules/@arcgis/core/layers/support/ExpressionInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let n=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new p({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],n.prototype,"isAutoGenerated",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],n.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],n.prototype,"onStatisticExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],n.prototype,"statisticType",void 0),n=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.AggregateField")],n);const a=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/ExpressionInfo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExpressionInfo.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(r){super(r),this.expression=null,this.title=null,this.returnType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"returnType",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.ExpressionInfo")],p);const i=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FeatureEffect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureEffect.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../effects/jsonUtils.js */ "./node_modules/@arcgis/core/layers/effects/jsonUtils.js");
/* harmony import */ var _FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FeatureFilter.js */ "./node_modules/@arcgis/core/layers/support/FeatureFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d;const f={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.read},write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.write,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},n={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.read},write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.write,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},a={name:"showExcludedLabels",default:!0};let p=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const l=super.write(e,t);if(t?.origin){if(l.filter){const e=Object.keys(l.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in l)return t.messages?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return l}clone(){return new d({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_FeatureFilter_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:{allowNull:!0,writer(e,r,t,i){const o=e?.write({},i);o&&0!==Object.keys(o).length?(0,_core_object_js__WEBPACK_IMPORTED_MODULE_3__.setDeepValue)(t,o,r):(0,_core_object_js__WEBPACK_IMPORTED_MODULE_3__.setDeepValue)(t,null,r)}}}})],p.prototype,"filter",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{read:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.read,write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.write,allowNull:!0},origins:{"web-map":f,"portal-item":f}}})],p.prototype,"includedEffect",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{read:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.read,write:{writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.write,allowNull:!0},origins:{"web-map":n,"portal-item":n}}})],p.prototype,"excludedEffect",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":a,"portal-item":a}}})],p.prototype,"excludedLabelsVisible",void 0),p=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.FeatureEffect")],p);const w=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FeatureFilter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureFilter.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../time/TimeExtent.js */ "./node_modules/@arcgis/core/time/TimeExtent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;const c=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let u=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:r,timeExtent:o,objectIds:n,units:a,distance:p}=this;return new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_9__["default"]({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(i),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(n),spatialRelationship:r,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(o),where:t,units:a,distance:p,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,timeExtent:r,objectIds:o,units:n,distance:l}=this;return new p({geometry:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(t),objectIds:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(o),spatialRelationship:i,timeExtent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(r),where:e,units:n,distance:l})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],u.prototype,"where",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__.geometryTypes,json:{write:!0}})],u.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:c.apiValues,json:{name:"spatialRel",read:{reader:c.read},write:{allowNull:!1,writer:c.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],u.prototype,"spatialRelationship",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],u.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[Number],json:{write:!0}})],u.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:m.apiValues,json:{read:m.read,write:{writer:m.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],u.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:!0}})],u.prototype,"timeExtent",void 0),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.FeatureFilter")],u);const d=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FeatureReduction.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReduction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureReduction: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.FeatureReduction")],t);


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FeatureReductionBinning.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionBinning.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PopupTemplate.js */ "./node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderers/ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _renderers_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderers/PieChartRenderer.js */ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../renderers/support/types.js */ "./node_modules/@arcgis/core/renderers/support/types.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _AggregateField_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AggregateField.js */ "./node_modules/@arcgis/core/layers/support/AggregateField.js");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./featureLayerUtils.js */ "./node_modules/@arcgis/core/layers/support/featureLayerUtils.js");
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./FeatureReduction.js */ "./node_modules/@arcgis/core/layers/support/FeatureReduction.js");
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LabelClass.js */ "./node_modules/@arcgis/core/layers/support/LabelClass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var g;let v=g=class extends _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_24__.FeatureReduction{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__.toPt)("12px"),this.fields=[],this.renderer=null}writeFields(e,r,o){const t=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,_core_object_js__WEBPACK_IMPORTED_MODULE_13__.setDeepValue)(o,t,r)}readRenderer(e,r,t){const s=r.drawingInfo?.renderer;return s?(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__.read)(s,r,t)??void 0:(0,_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_23__.createDefaultRenderer)(r,t)}clone(){return new g({fields:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_12__.clone)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_12__.clone)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_12__.clone)(this.popupTemplate),renderer:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_12__.clone)(this.renderer),binType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_12__.clone)(this.binType),size:this.size})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_17__.enumeration)({binning:"binning"})],v.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_17__.enumeration)({geohash:"geohash",square:"square"}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({type:["geohash","square"]})],v.prototype,"binType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({type:Number,json:{write:!0}})],v.prototype,"fixedBinLevel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({type:[_LabelClass_js__WEBPACK_IMPORTED_MODULE_25__["default"]],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],v.prototype,"labelingInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__.labelsVisible)],v.prototype,"labelsVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],v.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_22__.popupEnabled)],v.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{name:"popupInfo",write:!0}})],v.prototype,"popupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({cast:e=>"auto"===e?e:(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_16__.ensureNumber)((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__.toPt)(e))})],v.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({type:[_AggregateField_js__WEBPACK_IMPORTED_MODULE_21__["default"]],json:{write:!0}})],v.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_20__.writer)("fields")],v.prototype,"writeFields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__.rendererTypes,json:{write:{target:"drawingInfo.renderer"}}})],v.prototype,"renderer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_18__.reader)("renderer",["drawingInfo.renderer"])],v.prototype,"readRenderer",null),v=g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_19__.subclass)("esri.layers.support.FeatureReductionBinning")],v);const w=v;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../PopupTemplate.js */ "./node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../renderers/ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../renderers/DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../renderers/HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _renderers_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderers/PieChartRenderer.js */ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../renderers/support/types.js */ "./node_modules/@arcgis/core/renderers/support/types.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _AggregateField_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AggregateField.js */ "./node_modules/@arcgis/core/layers/support/AggregateField.js");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./featureLayerUtils.js */ "./node_modules/@arcgis/core/layers/support/featureLayerUtils.js");
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LabelClass.js */ "./node_modules/@arcgis/core/layers/support/LabelClass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var S;function w(e){return"simple"===e.type&&!e.visualVariables?.length}let I=S=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__.JSONSupport{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__.toPt)("80px"),this.clusterMinSize=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__.toPt)("12px"),this.clusterMaxSize=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__.toPt)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(e,r,t){const s=r.drawingInfo?.renderer;return s?.authoringInfo?.isAutoGenerated?null:s?w(s)?null:(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__.read)(s,r,t)??void 0:(0,_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_24__.createDefaultRenderer)(r,t)}readSymbol(e,r,t){const s=r.drawingInfo?.renderer;if(s?.authoringInfo?.isAutoGenerated)return null;if(s&&w(s)){const e=(0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__.read)(s,r,t);return e?.symbol}return null}writeSymbol(e,r,o,s){const i=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||i){const o=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_8__["default"]({symbol:e});r.drawingInfo={renderer:o.write({},s)}}}writeFields(e,r,t){const o=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,_core_object_js__WEBPACK_IMPORTED_MODULE_15__.setDeepValue)(t,o,r)}readFields(e,r,t){return e.filter((e=>!e.isAutoGenerated)).map((e=>_AggregateField_js__WEBPACK_IMPORTED_MODULE_22__["default"].fromJSON(e)))}clone(){return new S({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_14__.clone)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_14__.clone)(this.fields),maxScale:this.maxScale,renderer:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_14__.clone)(this.renderer),symbol:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_14__.clone)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_14__.clone)(this.popupTemplate)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:["cluster"],readOnly:!0,json:{write:!0}})],I.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({cast:e=>"auto"===e?e:(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_18__.ensureNumber)((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__.toPt)(e)),json:{write:!0}})],I.prototype,"clusterRadius",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__.toPt,json:{write:!0}})],I.prototype,"clusterMinSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__.toPt,json:{write:!0}})],I.prototype,"clusterMaxSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],I.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__.popupEnabled)],I.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],I.prototype,"popupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_11__.rendererTypes,json:{write:{target:"drawingInfo.renderer"}}})],I.prototype,"renderer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_19__.reader)("renderer",["drawingInfo.renderer"])],I.prototype,"readRenderer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_12__.symbolTypesCluster})],I.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_19__.reader)("symbol",["drawingInfo.renderer"])],I.prototype,"readSymbol",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_21__.writer)("symbol")],I.prototype,"writeSymbol",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:[_LabelClass_js__WEBPACK_IMPORTED_MODULE_25__["default"]],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],I.prototype,"labelingInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_23__.labelsVisible)],I.prototype,"labelsVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_17__.property)({type:[_AggregateField_js__WEBPACK_IMPORTED_MODULE_22__["default"]],json:{write:!0}})],I.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_21__.writer)("fields")],I.prototype,"writeFields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_19__.reader)("fields")],I.prototype,"readFields",null),I=S=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_20__.subclass)("esri.layers.support.FeatureReductionCluster")],I);const v=I;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeatureReduction.js */ "./node_modules/@arcgis/core/layers/support/FeatureReduction.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let c=s=class extends _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_6__.FeatureReduction{constructor(o){super(o),this.type="selection"}clone(){return new s}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["selection"]})],c.prototype,"type",void 0),c=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.layers.support.FeatureReductionSelection")],c);const p=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/FieldsIndex.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FieldsIndex.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Z; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sql/UnknownTimeZone.js */ "./node_modules/@arcgis/core/core/sql/UnknownTimeZone.js");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../time/timeZoneUtils.js */ "./node_modules/@arcgis/core/time/timeZoneUtils.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/src/luxon.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function y(e){return"timeZone"in e}function _(e){return"timeZone"in e}function g(e){return"dateFieldsTimeZone"in e}const T=new Map;class Z{static fromJSON(e){return new Z(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new Z(e.fields??[],S(e))}static fromLayerJSON(e){return new Z(e.fields??[],S(e))}constructor(e=[],i){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=i?new Map(i):null;const t=[];for(const s of this.fields){const e=s?.name,i=M(e);if(e&&i){const n=w(e);this._fieldsMap.set(e,s),this._fieldsMap.set(n,s),this._normalizedFieldsMap.set(i,s),t.push(`${n}:${s.type}:${this._timeZoneByFieldName?.get(e)}`),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isDateField)(s)?(this.dateFields.push(s),this._dateFieldsSet.add(s)):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isNumericField)(s)&&(this._numericFieldsSet.add(s),this.numericFields.push(s)),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isObjectIDField)(s)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isGlobalIDField)(s)||(s.editable=null==s.editable||!!s.editable,s.nullable=null==s.nullable||!!s.nullable)}}t.sort(),this.uid=t.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isObjectIDField)(e)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isGlobalIDField)(e)||e.nullable||void 0!==(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.getFieldDefaultValue)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let i=this._fieldsMap.get(e);return i||(i=this._fieldsMap.get(w(e))??this._normalizedFieldsMap.get(M(e)),i&&this._fieldsMap.set(e,i),i)}getTimeZone(i){const s=this.get(i&&"string"!=typeof i?i.name:i);return s?this._timeZoneByFieldName?this._timeZoneByFieldName.get(s.name):"date"===s.type||"esriFieldTypeDate"===s.type?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.FieldsIndex").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("getTimeZone:no-timezone-information",`no time zone information for field '${s.name}'`)),_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.utc):N.has(s.type)?_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.unknown:null:null}getLuxonTimeZone(e){const i=this.getTimeZone(e);return i?i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.unknown?_core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_4__.UnknownTimeZone.instance:i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.utc?luxon__WEBPACK_IMPORTED_MODULE_7__.FixedOffsetZone.utcInstance:(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__.getOrCreateMapValue)(T,i,(()=>luxon__WEBPACK_IMPORTED_MODULE_7__.IANAZone.create(i))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.isTimeOnlyField)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.isSerializable)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function w(e){return e.trim().toLowerCase()}function M(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__.normalizeFieldName)(e)?.toLowerCase()??""}const N=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function S(e){const i=new Map;if(!e.fields)return i;const t=!0===e.datesInUnknownTimezone,{timeInfo:s,editFieldsInfo:n}=e,r=(s?"startField"in s?s.startField:s.startTimeField:"")??"",l=(s?"endField"in s?s.endField:s.endTimeField:"")??"",o=g(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromTimeReference)(e.dateFieldsTimeReference):null,d=n?y(n)?n.timeZone??o:n.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromTimeReference)(n.dateFieldsTimeReference):o??_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.utc:null,a=s?_(s)?s.timeZone??o:s.timeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromTimeReference)(s.timeReference):o:null,m=new Map([[w(n?.creationDateField??""),d],[w(n?.editDateField??""),d],[w(r),a],[w(l),a]]);for(const{name:u,type:f}of e.fields)if(N.has(f))i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.unknown);else if("date"!==f&&"esriFieldTypeDate"!==f)i.set(u,null);else if(t)i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_6__.unknown);else{const e=m.get(w(u??""))??o;i.set(u,e)}return i}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/LabelClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LabelClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LabelExpressionInfo.js */ "./node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./labelUtils.js */ "./node_modules/@arcgis/core/layers/support/labelUtils.js");
/* harmony import */ var _layerUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../symbols/support/defaults.js */ "./node_modules/@arcgis/core/symbols/support/defaults.js");
/* harmony import */ var _symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../symbols/support/jsonUtils.js */ "./node_modules/@arcgis/core/symbols/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var S;const L=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__.JSONMap({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function P(e,r,t){return{enabled:!(0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_14__.isSceneServiceLayer)(t?.layer)}}function x(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function g(e){return"map-image"===e?.type}function E(e){return!!g(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function j(e){return x(e)||E(e?.layer)}let A=S=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.JSONSupport{static evaluateWhere(e,r){const t=(e,r,t)=>{switch(r){case"=":return e==t;case"<>":return e!=t;case">":return e>t;case">=":return e>=t;case"<":return e<t;case"<=":return e<=t}return!1};try{if(null==e)return!0;const o=e.split(" ");if(3===o.length)return t(r[o[0]],o[1],o[2]);if(7===o.length){const e=t(r[o[0]],o[1],o[2]),i=o[3],l=t(r[o[4]],o[5],o[6]);switch(i){case"AND":return e&&l;case"OR":return e||l}}return!1}catch(o){}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=_symbols_support_defaults_js__WEBPACK_IMPORTED_MODULE_15__.defaultTextSymbol2D,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_13__.templateStringToSql)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const r=(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_13__.getSingleFieldArcadeExpression)(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}null!=e&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,o){if(null==e&&null!=this.labelExpression&&x(o))e=new _LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_12__["default"]({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(o);i.expression&&(r[t]=i)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return (0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_13__.getLabelExpression)(this)}getLabelExpressionArcade(){return (0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_13__.getLabelExpressionArcade)(this)}getLabelExpressionSingleField(){return (0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_13__.getLabelExpressionSingleField)(this)}hash(){return JSON.stringify(this)}clone(){return new S({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{write:!0}})],A.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:P}}}}})],A.prototype,"allowOverrun",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:P}}}}})],A.prototype,"deconflictionStrategy",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&"service"===t?.origin&&E(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],A.prototype,"labelExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("labelExpression")],A.prototype,"readLabelExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("labelExpression")],A.prototype,"writeLabelExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_LabelExpressionInfo_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:{overridePolicy:(e,r,t)=>j(t)?{allowNull:!0}:{enabled:!1}}}})],A.prototype,"labelExpressionInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("labelExpressionInfo")],A.prototype,"writeLabelExpressionInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:L.apiValues,json:{type:L.jsonValues,read:L.read,write:L.write}})],A.prototype,"labelPlacement",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],A.prototype,"labelPosition",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number})],A.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("maxScale")],A.prototype,"writeMaxScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number})],A.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("minScale")],A.prototype,"writeMinScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:P}}}}})],A.prototype,"repeatLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_6__.toPt,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:P}}}}})],A.prototype,"repeatLabelDistance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_1__.symbolTypesLabel,json:{origins:{"web-scene":{types:_symbols_js__WEBPACK_IMPORTED_MODULE_1__.symbolTypesLabel3D,write:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__.writeLabelSymbol,default:null}},write:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__.writeLabelSymbol,default:null}})],A.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{write:!0}})],A.prototype,"useCodedValues",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{write:!0}})],A.prototype,"where",void 0),A=S=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.support.LabelClass")],A);const C=A;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LabelExpressionInfo.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./labelUtils.js */ "./node_modules/@arcgis/core/layers/support/labelUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let n=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(r,e){return e.value?(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertTemplatedStringToArcade)(e.value):r}writeExpression(r,e,o){null!=this.value&&(r=(0,_labelUtils_js__WEBPACK_IMPORTED_MODULE_9__.convertTemplatedStringToArcade)(this.value)),null!=r&&(e[o]=r)}clone(){return new l({expression:this.expression,title:this.title,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],n.prototype,"expression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("expression",["expression","value"])],n.prototype,"readExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("expression")],n.prototype,"writeExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],n.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:!1,write:!1}})],n.prototype,"value",void 0),n=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.support.LabelExpressionInfo")],n);const a=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/PurgeOptions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/PurgeOptions.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var t;let i=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"age",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.PurgeOptions")],i);const p=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TimeInfo.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TimeInfo.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../time/TimeExtent.js */ "./node_modules/@arcgis/core/time/TimeExtent.js");
/* harmony import */ var _time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../time/TimeInterval.js */ "./node_modules/@arcgis/core/time/TimeInterval.js");
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../time/timeZoneUtils.js */ "./node_modules/@arcgis/core/time/timeZoneUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p(t,e){return _time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON({value:t,unit:e})}let u=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(t,e){return e.timeExtent&&Array.isArray(e.timeExtent)&&2===e.timeExtent.length?_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromArray(e.timeExtent):null}writeFullTimeExtent(t,e){null!=t?.start&&null!=t.end?e.timeExtent=t.toArray():e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?p(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?p(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(t,e){e.timeInterval=t?.toJSON().value??null,e.timeIntervalUnits=t?.toJSON().unit??null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],u.prototype,"cumulative",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"endField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"fullTimeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("fullTimeExtent",["timeExtent"])],u.prototype,"readFullTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("fullTimeExtent")],u.prototype,"writeFullTimeExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],u.prototype,"hasLiveData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],u.prototype,"readInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("interval")],u.prototype,"writeInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"startField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)((0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_12__.timeZoneProperty)("timeReference",!0))],u.prototype,"timeZone",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"trackIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],u.prototype,"useTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Date],json:{read:!1}})],u.prototype,"stops",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.support.TimeInfo")],u);const d=u;


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

/***/ "./node_modules/@arcgis/core/layers/support/featureLayerUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAttachment: function() { return /* binding */ I; },
/* harmony export */   applyEdits: function() { return /* binding */ q; },
/* harmony export */   computeDomainFromSubtypes: function() { return /* binding */ T; },
/* harmony export */   computeDomainFromTypes: function() { return /* binding */ U; },
/* harmony export */   computeEffectiveEditingEnabled: function() { return /* binding */ Z; },
/* harmony export */   createDefaultRenderer: function() { return /* binding */ z; },
/* harmony export */   createQuery: function() { return /* binding */ M; },
/* harmony export */   deleteAttachments: function() { return /* binding */ A; },
/* harmony export */   ensureCredentialIfSignedIn: function() { return /* binding */ $; },
/* harmony export */   ensureLayerCredential: function() { return /* binding */ J; },
/* harmony export */   fetchRecomputedExtents: function() { return /* binding */ v; },
/* harmony export */   geometryTypeKebabDict: function() { return /* binding */ g; },
/* harmony export */   getFeatureSubtype: function() { return /* binding */ Q; },
/* harmony export */   getFeatureType: function() { return /* binding */ W; },
/* harmony export */   getGlobalIdToObjectIdMap: function() { return /* binding */ K; },
/* harmony export */   hasDataChanged: function() { return /* binding */ R; },
/* harmony export */   isLayerCacheStale: function() { return /* binding */ B; },
/* harmony export */   queryAttachments: function() { return /* binding */ S; },
/* harmony export */   queryExtent: function() { return /* binding */ E; },
/* harmony export */   queryFeatureCount: function() { return /* binding */ P; },
/* harmony export */   queryObjectIds: function() { return /* binding */ O; },
/* harmony export */   queryRelatedFeatures: function() { return /* binding */ L; },
/* harmony export */   queryRelatedFeaturesCount: function() { return /* binding */ C; },
/* harmony export */   readGlobalIdField: function() { return /* binding */ V; },
/* harmony export */   readObjectIdField: function() { return /* binding */ D; },
/* harmony export */   readVersion: function() { return /* binding */ G; },
/* harmony export */   supportsQueryOnly: function() { return /* binding */ X; },
/* harmony export */   updateAttachment: function() { return /* binding */ F; },
/* harmony export */   uploadAssets: function() { return /* binding */ x; },
/* harmony export */   validateBinsQuery: function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_sql_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sql.js */ "./node_modules/@arcgis/core/core/sql.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/extensions/serializableProperty/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js");
/* harmony import */ var _CodedValue_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CodedValue.js */ "./node_modules/@arcgis/core/layers/support/CodedValue.js");
/* harmony import */ var _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CodedValueDomain.js */ "./node_modules/@arcgis/core/layers/support/CodedValueDomain.js");
/* harmony import */ var _featureQueryAll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./featureQueryAll.js */ "./node_modules/@arcgis/core/layers/support/featureQueryAll.js");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _layerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _rest_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../rest/support/AttachmentQuery.js */ "./node_modules/@arcgis/core/rest/support/AttachmentQuery.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _rest_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../rest/support/RelationshipQuery.js */ "./node_modules/@arcgis/core/rest/support/RelationshipQuery.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const g=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_4__.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});async function I(e,t,r,o){const s=await N(e);if(await j(e,t,o),!s.addAttachment)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support addAttachment capability");return s.addAttachment(t,r)}function j(e,t,r){const{attributes:o}=t,{objectIdField:s}=e;return e.capabilities?.data?.supportsAttachment?t?o?s&&o[s]?Promise.resolve():Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,`feature is missing the identifying attribute ${s}`)):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"'attributes' are required on a feature to query attachments")):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"A feature is required to add/delete/update attachments")):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"this layer doesn't support attachments"))}async function F(e,t,r,o,s){const i=await N(e);if(await j(e,t,s),!i.updateAttachment)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](s,"Layer source does not support updateAttachment capability");return i.updateAttachment(t,r,o)}async function q(e,t,r){const{applyEdits:n}=await __webpack_require__.e(/*! import() | graphics-editingSupport */ "graphics-editingSupport").then(__webpack_require__.bind(__webpack_require__, /*! ../graphics/editingSupport.js */ "./node_modules/@arcgis/core/layers/graphics/editingSupport.js")),o=await e.load();let s=r;return"feature"===o.type&&o.infoFor3D&&null!=t.deleteFeatures&&null!=o.globalIdField&&(s={...s,globalIdToObjectId:await K(o,t.deleteFeatures,o.globalIdField)}),n(o,o.source,t,r)}async function x(e,t,r){const{uploadAssets:n}=await __webpack_require__.e(/*! import() | graphics-editingSupport */ "graphics-editingSupport").then(__webpack_require__.bind(__webpack_require__, /*! ../graphics/editingSupport.js */ "./node_modules/@arcgis/core/layers/graphics/editingSupport.js")),o=await e.load();return n(o,o.source,t,r)}async function A(e,t,r,o){const s=await N(e);if(await j(e,t,o),!s.deleteAttachments)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support deleteAttachments capability");return s.deleteAttachments(t,r)}async function v(e,t,r){const o=(await e.load({signal:t?.signal})).source;if(!o.fetchRecomputedExtents)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"Layer source does not support fetchUpdates capability");return o.fetchRecomputedExtents(t)}async function S(e,t,r,o){t=_rest_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_15__["default"].from(t),await e.load();const s=e.source,i=e.capabilities;if(!i?.data?.supportsAttachment)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"this layer doesn't support attachments");const{attachmentTypes:a,objectIds:u,globalIds:c,num:l,size:p,start:d,where:f}=t;if(!i?.operations?.supportsQueryAttachments){if(a?.length>0||c?.length>0||p?.length>0||l||d||f)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t)}if(!(u?.length||c?.length||f))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);if(!s.queryAttachments)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support queryAttachments capability",t);return s.queryAttachments(t)}async function O(e,t,r,o){const s=await N(e);if(!s.queryObjectIds)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support queryObjectIds capability");return s.queryObjectIds(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"].from(t)??e.createQuery(),r)}async function P(e,t,r,o){const s=await N(e);if(!s.queryFeatureCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support queryFeatureCount capability");return s.queryFeatureCount(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"].from(t)??e.createQuery(),r)}async function E(e,t,r,o){const s=await N(e);if(!s.queryExtent)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support queryExtent capability");return s.queryExtent(_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"].from(t)??e.createQuery(),r)}async function L(e,t,r,o){const s=await N(e);if(!s.queryRelatedFeatures)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support queryRelatedFeatures capability");return s.queryRelatedFeatures(_rest_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_17__["default"].from(t),r)}async function C(e,t,r,o){const s=await N(e);if(!s.queryRelatedFeaturesCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](o,"Layer source does not support queryRelatedFeaturesCount capability");return s.queryRelatedFeaturesCount(_rest_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_17__["default"].from(t),r)}async function R(e){const t=e.source;if(t?.refresh)try{const{dataChanged:r,updates:n}=await t.refresh();if(null!=n&&(e.sourceJSON={...e.sourceJSON,...n},e.read(n,{origin:"service",url:e.parsedUrl})),r)return!0}catch{}if(e.definitionExpression)try{return(await (0,_core_sql_js__WEBPACK_IMPORTED_MODULE_5__.parseWhereClause)(e.definitionExpression,e.fieldsIndex)).hasDateFunctions}catch{}return!1}function M(e){const t=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"],r=e.capabilities?.data,n=e.capabilities?.query;t.historicMoment=e.historicMoment,t.gdbVersion=e.gdbVersion,t.returnGeometry=!0,n&&(t.compactGeometryEnabled=n.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=n.supportsDefaultSpatialReference),r&&(r.supportsZ&&null!=e.returnZ&&(t.returnZ=e.returnZ),r.supportsM&&null!=e.returnM&&(t.returnM=e.returnM)),t.outFields=["*"];const{timeOffset:o,timeExtent:s}=e;return t.timeExtent=null!=o&&null!=s?s.offset(-o.value,o.unit):s||null,t.multipatchOption="multipatch"===e.geometryType?"xyFootprint":null,t}function V(e){const{globalIdField:t,fields:r}=e;if(t)return t;if(r)for(const n of r)if("esriFieldTypeGlobalID"===n.type)return n.name}function D(e){const{objectIdField:t,fields:r}=e;if(t)return t;if(r)for(const n of r)if("esriFieldTypeOID"===n.type)return n.name}function G(e){return e.currentVersion?e.currentVersion:e.hasOwnProperty("capabilities")||e.hasOwnProperty("drawingInfo")||e.hasOwnProperty("hasAttachments")||e.hasOwnProperty("htmlPopupType")||e.hasOwnProperty("relationships")||e.hasOwnProperty("timeInfo")||e.hasOwnProperty("typeIdField")||e.hasOwnProperty("types")?10:9.3}function Q(e,t){const{subtypes:r,subtypeField:n}=e;if(!t?.attributes||!r?.length||!n)return null;const o=t.attributes[n];return null==o?null:r.find((e=>e.code===o))}function T(e,t){const{fieldsIndex:r,subtypeField:n}=e,{name:o,type:s}=r.get(t)??{};if(!o)return null;if((n&&r.get(n)?.name)===o&&e.subtypes?.length){const t=e.subtypes.map((e=>new _CodedValue_js__WEBPACK_IMPORTED_MODULE_8__.CodedValue({code:k(e.code,s),name:e.name})));if(t?.length)return new _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_9__["default"]({codedValues:t})}return null}function U(e,t){const{fieldsIndex:r}=e,{name:n,type:o}=r.get(t)??{};if(!n)return null;if(("typeIdField"in e?r.get(e.typeIdField)?.name:null)===n&&"types"in e&&e.types?.length){const t=e.types.map((e=>new _CodedValue_js__WEBPACK_IMPORTED_MODULE_8__.CodedValue({code:k(e.id,o),name:e.name})));return new _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_9__["default"]({codedValues:t})}return null}function k(e,t){return t?(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__.isStringField)({type:t})&&"number"==typeof e?`${e}`:(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__.isIntegerField)({type:t})&&"string"==typeof e?Number.parseInt(e,10):e:e}async function N(e){return(await e.load()).source}async function $(t,r){if(!_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id)return;if(_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id.findCredential(t))return;let n;try{const o=await (0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__.getOwningPortalUrl)(t,r);o&&(n=await _kernel_js__WEBPACK_IMPORTED_MODULE_0__.id.checkSignInStatus(`${o}/sharing`))}catch(o){}if(n)try{const n=null!=r?r.signal:null;await _kernel_js__WEBPACK_IMPORTED_MODULE_0__.id.getCredential(t,{signal:n})}catch(o){}}async function J(e,t,r){const n=e.parsedUrl?.path;n&&e.authenticationTriggerEvent===t&&await $(n,r)}function Z(e){return!X(e)&&(e.userHasUpdateItemPrivileges||e.editingEnabled)}const H=(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_7__.createTypeReader)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_1__.symbolTypesRenderer});function z(e,t){if(e.defaultSymbol)return e.types?.length?new _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({defaultSymbol:H(e.defaultSymbol,e,t),field:e.typeIdField,uniqueValueInfos:e.types.map((e=>({id:e.id,symbol:H(e.symbol,e,t)})))}):new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_13__["default"]({symbol:H(e.defaultSymbol,e,t)})}function B(e){let t=e.sourceJSON?.cacheMaxAge;if(!t)return!1;const r=e.editingInfo?.lastEditDate?.getTime();return null==r||(t*=1e3,Date.now()-r<t)}async function K(e,t,n){if(null==t)return null;const o=[],{objectIdField:s}=e;if(t.forEach((e=>{let t=null;if("attributes"in e){const{attributes:r}=e;t={globalId:r[n],objectId:null!=r[s]&&-1!==r[s]?r[s]:null}}else t={globalId:e.globalId,objectId:null!=e.objectId&&-1!==e.objectId?e.objectId:null};null!=t.globalId&&(null!=t.objectId&&-1!==t.objectId||o.push(t.globalId))})),0===o.length)return null;const a=e.createQuery();a.where=o.map((e=>`${n}='${e}'`)).join(" OR "),a.returnGeometry=!1,a.outFields=[s,n],a.cacheHint=!1;const u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__.resultOrAbort)((0,_featureQueryAll_js__WEBPACK_IMPORTED_MODULE_10__.queryAllJSON)(e,a));if(!u.ok)return null;const c=new Map,p=u.value.features;for(const r of p){const e=r.attributes[n],t=r.attributes[s];null!=e&&null!=t&&-1!==t&&c.set((0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_6__.normalizeGlobalID)(e),t)}return c}function W(e,t,r){if(!t||!r||!e)return null;const n=r.getAttribute(t);return null==n?null:e.find((e=>{const{id:t}=e;return null!=t&&t.toString()===n.toString()}))??null}function X(e){return e.sourceJSON?.isMultiServicesView||Y(e)}function Y(e){return!!e.sourceJSON?.capabilities?.toLowerCase().split(",").map((e=>e.trim())).includes("map")}function _(e,t,r){const o=t?.queryBins;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"Layer source does not support binning");switch(e.binParameters.type){case"auto-interval":if(!o.supportsAutoInterval)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"Layer source does not support auto-interval binning");break;case"date":if(!o.supportsDate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"Layer source does not support date binning");break;case"fixed-boundaries":if(!o.supportsFixedBoundaries)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"Layer source does not support fixed-boundaries binning");break;case"fixed-interval":if(!o.supportsFixedInterval)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,"Layer source does not support fixed-interval binning")}const s=o?.supportedStatistics;if(e.outStatistics&&s){const t=new Map([["count","count"],["sum","sum"],["min","min"],["max","max"],["avg","avg"],["stddev","stddev"],["var","var"],["percentile-continuous","percentileContinuous"],["percentile-discrete","percentileDiscrete"],["centroid-aggregate","centroid"],["convex-hull-aggregate","convexHull"],["envelope-aggregate","envelope"]]);for(const{statisticType:o}of e.outStatistics){const e=t.get(o);if(e&&!s[e])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,`Layer source does not support ${o} statistic type`)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/featureQueryAll.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/featureQueryAll.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMaxRecordCountFactor: function() { return /* binding */ u; },
/* harmony export */   getMaximumQuerySize: function() { return /* binding */ t; },
/* harmony export */   getMaximumRecordCount: function() { return /* binding */ a; },
/* harmony export */   queryAllJSON: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function r(e,r,a){r=r.clone(),e.capabilities.query.supportsMaxRecordCountFactor&&(r.maxRecordCountFactor=u(e));const n=t(e),o=e.capabilities.query.supportsPagination;r.start=0,r.num=n;let i=null;for(;;){const t=await e.source.queryFeaturesJSON(r,a);if(null==i?i=t:i.features=i.features.concat(t.features),i.exceededTransferLimit=t.exceededTransferLimit,!o||!t.exceededTransferLimit)break;r.start+=n}return i}function t(e){return u(e)*a(e)}function a(e){return e.capabilities.query.maxRecordCount||2e3}function u(r){return r.capabilities.query.supportsMaxRecordCountFactor?_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX_MAX_RECORD_COUNT_FACTOR:1}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/featureReductionUtils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/featureReductionUtils.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureReductionProperty: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/accessorSupport/layerContainerType.js */ "./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js");
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureReduction.js */ "./node_modules/@arcgis/core/layers/support/FeatureReduction.js");
/* harmony import */ var _FeatureReductionBinning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeatureReductionBinning.js */ "./node_modules/@arcgis/core/layers/support/FeatureReductionBinning.js");
/* harmony import */ var _FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureReductionCluster.js */ "./node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js");
/* harmony import */ var _FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeatureReductionSelection.js */ "./node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o={key:"type",base:_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_1__.FeatureReduction,typeMap:{cluster:_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__["default"],binning:_FeatureReductionBinning_js__WEBPACK_IMPORTED_MODULE_2__["default"]}},p={types:{key:"type",base:_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_1__.FeatureReduction,typeMap:{selection:_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__["default"],cluster:_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__["default"],binning:_FeatureReductionBinning_js__WEBPACK_IMPORTED_MODULE_2__["default"]}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:o},"portal-item":{types:o},"web-scene":{types:{key:"type",base:_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_1__.FeatureReduction,typeMap:{selection:_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__["default"]}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:_core_accessorSupport_layerContainerType_js__WEBPACK_IMPORTED_MODULE_0__.excludeTables}}}}};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/fieldProperties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/fieldProperties.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineFieldProperties: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field.js */ "./node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldsIndex.js */ "./node_modules/@arcgis/core/layers/support/FieldsIndex.js");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(){return{fields:{type:[_Field_js__WEBPACK_IMPORTED_MODULE_2__["default"]],value:null,set:function(i){if(i&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("big-integer-warning-enabled")){const t=i.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const i=t.map((e=>`'${e.name}'`)).join(", ");_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${i}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",i)}},fieldsIndex:{readOnly:!0,get(){return _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const i=this._userOutFields;if(!i?.length)return null;if(i.includes("*"))return["*"];if(!this.fields)return i;for(const t of i){const r=this.fieldsIndex?.has(t);r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:i})}return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__.fixFields)(this.fieldsIndex,i)}}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/labelUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTemplatedStringToArcade: function() { return /* binding */ E; },
/* harmony export */   getLabelExpression: function() { return /* binding */ x; },
/* harmony export */   getLabelExpressionArcade: function() { return /* binding */ f; },
/* harmony export */   getLabelExpressionSingleField: function() { return /* binding */ g; },
/* harmony export */   getSingleFieldArcadeExpression: function() { return /* binding */ _; },
/* harmony export */   getSingleFieldTemplatedString: function() { return /* binding */ $; },
/* harmony export */   sqlToTemplateString: function() { return /* binding */ p; },
/* harmony export */   templateStringToSql: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/string.js */ "./node_modules/@arcgis/core/core/string.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n="__begin__",r="__end__",s=new RegExp(n,"ig"),t=new RegExp(r,"ig"),l=new RegExp("^"+n,"i"),o=new RegExp(r+"$","i"),i='"',a=i+" + ",c=" + "+i;function p(e){return e.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function u(e){return e.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function x(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=p(e.labelExpression),n.type="conventional"),n}function f(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return E(n.expression);case"arcade":return n.expression}return null}function g(e){const n=x(e);if(!n)return null;switch(n.type){case"conventional":return $(n.expression);case"arcade":return _(n.expression)}return null}function E(p){let u;return p?(u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_0__.replace)(p,(e=>n+'$feature["'+e+'"]'+r)),u=l.test(u)?u.replace(l,""):i+u,u=o.test(u)?u.replace(o,""):u+i,u=u.replaceAll(s,a).replaceAll(t,c)):u='""',u}const w=/^\s*\{([^}]+)\}\s*$/i;function $(e){const n=e?.match(w);return n?.[1].trim()||null}const b=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,m=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,R=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function _(e){if(!e)return null;let n=b.exec(e)||m.exec(e);return n?n[1]||n[3]:(n=R.exec(e),n?n[2]:null)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/labelingInfo.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelingInfo.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reader: function() { return /* binding */ n; },
/* harmony export */   validateLabelingInfo: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LabelClass.js */ "./node_modules/@arcgis/core/layers/support/LabelClass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.support.labelingInfo"),l=/\[([^[\]]+)\]/gi;function n(e,o,t){return e?e.map((e=>{const n=new _LabelClass_js__WEBPACK_IMPORTED_MODULE_2__["default"];if(n.read(e,t),n.labelExpression){const e=o.fields||o.layerDefinition?.fields||this.fields;n.labelExpression=n.labelExpression.replaceAll(l,((o,r)=>`[${s(r,e)}]`))}return n})):null}function s(e,o){if(!o)return e;const r=e.toLowerCase();for(let t=0;t<o.length;t++){const e=o[t].name;if(e.toLowerCase()===r)return e}return e}const i={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function a(o,r){const l=[];for(const n of o){const o=n.labelPlacement,s=i[r];if(!n.symbol)return t().warn("No ILabelClass symbol specified."),[];if(!s)return t().error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${r}' is not supported`)),[];if(s.includes(o))l.push(n);else{const e=s[0];o&&t().warn(`Found invalid label placement type ${o} for ${r}. Defaulting to ${e}`);const i=n.clone();i.labelPlacement=e,l.push(i)}}return l}


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

/***/ "./node_modules/@arcgis/core/portal/timeUnitKebabDictionary.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/timeUnitKebabDictionary.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeUnitKebabDictionary: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__.strict)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0});


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ z; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js");
/* harmony import */ var _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/ClassBreakInfo.js */ "./node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/RendererLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/arcadeOnDemand.js */ "./node_modules/@arcgis/core/support/arcadeOnDemand.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var v;const B="log",F="percent-of-total",S="field",V=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({esriNormalizeByLog:B,esriNormalizeByPercentOfTotal:F,esriNormalizeByField:S}),E=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__.ensureType)(_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"]);let j=v=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_14__.VisualVariablesMixin)(_Renderer_js__WEBPACK_IMPORTED_MODULE_13__["default"])){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let o=s.minValue;return e.map((e=>{const s=new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"];return s.read(e,t),null==s.minValue&&(s.minValue=o),null==s.maxValue&&(s.maxValue=s.minValue),o=s.maxValue,s}))}writeClassBreakInfos(e,s,t,o){const i=e.map((e=>e.write({},o)));this._areClassBreaksConsecutive()&&i.forEach((e=>delete e.classMinValue)),s[t]=i}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_11__.ensureString)(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const s=!!this.normalizationField,t=null!=this.normalizationTotal;return s||t?(e=s&&S||t&&F||null,s&&t&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==S&&e!==F||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,t,i){let r=null;r="number"==typeof e?new _support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"]({minValue:e,maxValue:t,symbol:(0,_symbols_js__WEBPACK_IMPORTED_MODULE_1__.ensureType)(i)}):E((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(e)),this.classBreakInfos.push(r),1===this.classBreakInfos.length&&this.notifyChange("minValue")}removeClassBreakInfo(e,s){const t=this.classBreakInfos.length;for(let o=0;o<t;o++){const t=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(t[0]===e&&t[1]===s){this.classBreakInfos.splice(o,1);break}}}getBreakIndex(e,s){return this.valueExpression&&null==s?.arcade&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}async getClassBreakInfo(e,s){let t=s;this.valueExpression&&null==s?.arcade&&(t={...t,arcade:await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__.loadArcade)()});const o=this.getBreakIndex(e,t);return-1!==o?this.classBreakInfos[o]:null}getSymbol(e,s){if(this.valueExpression&&null==s?.arcade)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const t=this.getBreakIndex(e,s);return t>-1?this.classBreakInfos[t].symbol:this.defaultSymbol}async getSymbolAsync(e,s){let t=s;if(this.valueExpression&&null==s?.arcade){const e=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_18__.loadArcade)(),{arcadeUtils:s}=e;s.hasGeometryOperations(this.valueExpression)&&await s.enableGeometryOperations(),t={...t,arcade:e}}const o=this.getBreakIndex(e,t);return o>-1?this.classBreakInfos[o].symbol:this.defaultSymbol}getSymbols(){const e=[];return this.classBreakInfos.forEach((s=>{s.symbol&&e.push(s.symbol)})),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables?.reduce(((e,s)=>e+s.getAttributeHash()),"")??""}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${s}.${this.classBreakInfos.reduce(((e,s)=>e+s.getMeshHash()),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new v({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.visualVariables),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.legendOptions),authoringInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.authoringInfo)})}async collectRequiredFields(e,s){const t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];await Promise.all(t)}async collectSymbolFields(e,s){const t=[...this.getSymbols().map((t=>t.collectRequiredFields(e,s))),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__.collectArcadeFieldNames)(e,s,this.valueExpression)];(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__.collectField)(e,s,this.field),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__.collectField)(e,s,this.normalizationField),await Promise.all(t)}_getBreakIndexForExpression(e,s){const{viewingMode:t,scale:o,spatialReference:i,arcade:r,timeZone:a}=s??{},{valueExpression:l}=this;let n=this._compiledValueExpression.valueExpression===l?this._compiledValueExpression.compiledFunction:null;const u=r.arcadeUtils;if(!n){const e=u.createSyntaxTree(l);n=u.createFunction(e),this._compiledValueExpression.compiledFunction=n}this._compiledValueExpression.valueExpression=l;const c=u.executeFunction(n,u.createExecContext(e,u.getViewInfo({viewingMode:t,scale:o,spatialReference:i}),a));return this._getBreakIndexfromInfos(c)}_getBreakIndexForField(e){const s=this.field,t=e.attributes,o=this.normalizationType;let i=parseFloat(t[s]);if(o){const e=this.normalizationTotal,s=parseFloat(this.normalizationField?t[this.normalizationField]:void 0);if(o===B)i=Math.log(i)*Math.LOG10E;else if(o!==F||null==e||isNaN(e)){if(o===S&&!isNaN(s)){if(isNaN(i)||isNaN(s))return-1;i/=s}}else i=i/e*100}return this._getBreakIndexfromInfos(i)}_getBreakIndexfromInfos(e){const s=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){const o=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(o[0]<=e&&(s?e<=o[1]:e<o[1]))return t}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return!1;return!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__.rendererBackgroundFillSymbolProperty)],j.prototype,"backgroundFillSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_support_ClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"]]})],j.prototype,"classBreakInfos",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("classBreakInfos")],j.prototype,"readClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("classBreakInfos")],j.prototype,"writeClassBreakInfos",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],j.prototype,"defaultLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_16__.rendererSymbolProperty)],j.prototype,"defaultSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],j.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__.cast)("field")],j.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Boolean})],j.prototype,"isMaxInclusive",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_17__["default"],json:{write:!0}})],j.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],j.prototype,"minValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],j.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],j.prototype,"normalizationTotal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:V.apiValues,value:null,json:{type:V.jsonValues,read:V.read,write:V.write}})],j.prototype,"normalizationType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__.enumeration)({classBreaks:"class-breaks"})],j.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],j.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],j.prototype,"valueExpressionTitle",void 0),j=v=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.renderers.ClassBreaksRenderer")],j);const z=j;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/DictionaryRenderer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js");
/* harmony import */ var _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/DictionaryLoader.js */ "./node_modules/@arcgis/core/renderers/support/DictionaryLoader.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let c=p=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_9__.VisualVariablesMixin)(_Renderer_js__WEBPACK_IMPORTED_MODULE_8__["default"])){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new _support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_10__.DictionaryLoader(this.url,this.config,this.fieldMap)}writeData(e,r){e&&(r.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,r,s,i){i?.origin||super.writeVisualVariables(e,r,s,i)}clone(){return new p({config:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.fieldMap),url:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.url),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.visualVariables)})}async getSymbolAsync(e,r){return this._loader.getSymbolAsync(e,r)}async collectRequiredFields(e,r){await this.collectVVRequiredFields(e,r),this.scaleExpression&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_7__.collectArcadeFieldNames)(e,r,this.scaleExpression);for(const s in this.fieldMap){const i=this.fieldMap[s];r.has(i)&&e.add(i)}}get arcadeRequired(){return!0}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables?.reduce(((e,r)=>e+r.getAttributeHash()),"")??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_support_DictionaryLoader_js__WEBPACK_IMPORTED_MODULE_10__.DictionaryLoader})],c.prototype,"_loader",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],c.prototype,"config",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Object,json:{write:!0}})],c.prototype,"fieldMap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],c.prototype,"scaleExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__.writer)("scaleExpression")],c.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],c.prototype,"scaleExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],c.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__.writer)("visualVariables")],c.prototype,"writeVisualVariables",null),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.renderers.DictionaryRenderer")],c);const u=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/DotDensityRenderer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js");
/* harmony import */ var _support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/AttributeColorInfo.js */ "./node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js");
/* harmony import */ var _support_DotDensityLegendOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/DotDensityLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js");
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../symbols/SimpleFillSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js");
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var h;let m=h=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_10__.VisualVariablesMixin)(_Renderer_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(t){super(t),this.attributes=null,this.backgroundColor=new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"],this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(t){if(null==this.referenceScale)return this.dotValue;const e=t/this.referenceScale*this.dotValue;return e<1?1:e}getSymbol(){return new _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_13__["default"]({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes?.reduce(((t,e)=>t+e.getAttributeHash()),"")??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new h({attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.attributes),backgroundColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.backgroundColor),dotBlendingEnabled:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.dotBlendingEnabled),dotShape:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.dotShape),dotSize:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.dotSize),dotValue:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.dotValue),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.legendOptions),outline:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.outline),referenceScale:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.referenceScale),seed:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.seed),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.visualVariables),authoringInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.authoringInfo)})}getControllerHash(){const t=this.attributes?.map((t=>t.field||t.valueExpression||""));return`${t}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(t,e){await this.collectVVRequiredFields(t,e);for(const o of this.attributes??[])o.valueExpression&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.collectArcadeFieldNames)(t,e,o.valueExpression),o.field&&t.add(o.field)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[_support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]],json:{write:!0}})],m.prototype,"attributes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],m.prototype,"backgroundColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],m.prototype,"dotBlendingEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!1}})],m.prototype,"dotShape",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],m.prototype,"dotSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_support_DotDensityLegendOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"],json:{default:null,write:!0}})],m.prototype,"outline",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],m.prototype,"dotValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],m.prototype,"referenceScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],m.prototype,"seed",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__.enumeration)({dotDensity:"dot-density"})],m.prototype,"type",void 0),m=h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.DotDensityRenderer")],m);const y=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/HeatmapRenderer.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/AuthoringInfo.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfo.js");
/* harmony import */ var _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/HeatmapColorStop.js */ "./node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js");
/* harmony import */ var _support_HeatmapLegendOptions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/HeatmapLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js");
/* harmony import */ var _support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/heatmapUtils.js */ "./node_modules/@arcgis/core/renderers/support/heatmapUtils.js");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var g;function f(t){if(null!=t){const{maxDensity:e,minDensity:i,radius:s}=t;if(null!=e||null!=i||null!=s){const{blurRadius:e,maxPixelIntensity:i,minPixelIntensity:s,...r}=t;return r}}return t}let b=g=class extends _Renderer_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(t){super(t),this.authoringInfo=null,this.colorStops=[new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_13__["default"]({ratio:0,color:new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rgba(255, 140, 0, 0)")}),new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_13__["default"]({ratio:.75,color:new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rgba(255, 140, 0, 1)")}),new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_13__["default"]({ratio:.9,color:new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(t){return f(t)}get blurRadius(){return (0,_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_15__.kernelDensityRadiusPtToGaussianBlurRadiusPx)(this.radius)}set blurRadius(t){const e=this.maxPixelIntensity,i=this.minPixelIntensity;this._set("radius",(0,_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_15__.gaussianBlurRadiusPxToKernelDensityRadiusPt)(t)),this._set("maxDensity",e*this._pixelIntensityToDensity),this._set("minDensity",i*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(t){this._set("maxDensity",t*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(t){this._set("minDensity",t*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_15__.magicKernelDensityRadiusInflationFactor**2*this.blurRadius**4)}read(t,e){t=f(t),super.read(t,e)}getSymbol(){return new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_16__["default"]}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}async collectRequiredFields(t,e){const i=this.field,s=this.valueExpression;i&&"string"==typeof i&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__.collectField)(t,e,i),s&&"string"==typeof s&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__.collectArcadeFieldNames)(t,e,s)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new g({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.colorStops),field:this.field,legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],b.prototype,"authoringInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],b.prototype,"blurRadius",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:[_support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_13__["default"]],json:{write:!0}})],b.prototype,"colorStops",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0}})],b.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_support_HeatmapLegendOptions_js__WEBPACK_IMPORTED_MODULE_14__.HeatmapLegendOptions,json:{write:!0}})],b.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],b.prototype,"maxDensity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],b.prototype,"maxPixelIntensity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{write:!0}})],b.prototype,"minDensity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],b.prototype,"minPixelIntensity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.toPt,json:{write:!0}})],b.prototype,"radius",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,range:{min:0},json:{default:0,write:!0}})],b.prototype,"referenceScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)({heatmap:"heatmap"})],b.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],b.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:String})],b.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],b.prototype,"_pixelIntensityToDensity",null),b=g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.renderers.HeatmapRenderer")],b);const w=b;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PieChartRenderer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js");
/* harmony import */ var _support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/AttributeColorInfo.js */ "./node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/* harmony import */ var _support_OthersCategory_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/OthersCategory.js */ "./node_modules/@arcgis/core/renderers/support/OthersCategory.js");
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/RendererLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js");
/* harmony import */ var _visualVariables_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./visualVariables/OpacityVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js");
/* harmony import */ var _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./visualVariables/SizeVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js");
/* harmony import */ var _visualVariables_VisualVariable_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./visualVariables/VisualVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../symbols/SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const v={base:_visualVariables_VisualVariable_js__WEBPACK_IMPORTED_MODULE_20__["default"],key:"type",typeMap:{size:_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_19__["default"],opacity:_visualVariables_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_18__["default"]}};let S=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_13__.VisualVariablesMixin)((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_4__.ClonableMixin)(_Renderer_js__WEBPACK_IMPORTED_MODULE_12__["default"]))){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new _support_OthersCategory_js__WEBPACK_IMPORTED_MODULE_16__.OthersCategory,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){return new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_21__["default"]({size:this.size?this.size/2+(this.outline?.width||0):0})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__.isSome)}getAttributeHash(){return this.visualVariables?.reduce(((e,t)=>e+t.getAttributeHash()),"")??""}getMeshHash(){return this.getSymbols().reduce(((e,t)=>e+JSON.stringify(t)),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const r of this.attributes)r.valueExpression&&await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__.collectArcadeFieldNames)(e,t,r.valueExpression),r.field&&e.add(r.field)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:[_support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"]],json:{write:!0}})],S.prototype,"attributes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_15__.rendererBackgroundFillSymbolProperty)],S.prototype,"backgroundFillSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],S.prototype,"defaultColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{write:!0}})],S.prototype,"defaultLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number,range:{min:0,max:1},json:{write:!0}})],S.prototype,"holePercentage",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_support_OthersCategory_js__WEBPACK_IMPORTED_MODULE_16__.OthersCategory,json:{write:!0}})],S.prototype,"othersCategory",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_17__["default"],json:{write:!0}})],S.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_22__["default"],json:{default:null,write:!0}})],S.prototype,"outline",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__.toPt,json:{write:!0}})],S.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__.enumeration)({pieChart:"pie-chart"})],S.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({types:[v]})],S.prototype,"visualVariables",void 0),S=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.renderers.PieChartRenderer")],S);const w=S;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/Renderer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/Renderer.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/AuthoringInfo.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(r){super(r),this.authoringInfo=null,this.type=null}async getRequiredFields(r){if(!this.collectRequiredFields)return[];const e=new Set;return await this.collectRequiredFields(e,r),Array.from(e).sort()}getSymbol(r,e){}async getSymbolAsync(r,e){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],a.prototype,"authoringInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:n.apiValues,readOnly:!0,json:{type:n.jsonValues,read:!1,write:{writer:n.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.Renderer")],a);const p=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/SimpleRenderer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c;let m=c=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_8__.VisualVariablesMixin)(_Renderer_js__WEBPACK_IMPORTED_MODULE_7__["default"])){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,r){await Promise.all([this.collectSymbolFields(e,r),this.collectVVRequiredFields(e,r)])}async collectSymbolFields(e,r){await Promise.all(this.getSymbols().map((s=>s.collectRequiredFields(e,r))))}getSymbol(e,r){return this.symbol}async getSymbolAsync(e,r){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables?.reduce(((e,r)=>e+r.getAttributeHash()),"")??""}getMeshHash(){return this.getSymbols().reduce(((e,r)=>e+JSON.stringify(r)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.symbol),visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.visualVariables),authoringInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.authoringInfo)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_9__.requiredRendererSymbolProperty)],m.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({simple:"simple"})],m.prototype,"type",void 0),m=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.SimpleRenderer")],m);const p=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/diffUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/RendererLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js");
/* harmony import */ var _support_UniqueValue_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/UniqueValue.js */ "./node_modules/@arcgis/core/renderers/support/UniqueValue.js");
/* harmony import */ var _support_UniqueValueClass_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/UniqueValueClass.js */ "./node_modules/@arcgis/core/renderers/support/UniqueValueClass.js");
/* harmony import */ var _support_UniqueValueGroup_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/UniqueValueGroup.js */ "./node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js");
/* harmony import */ var _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/UniqueValueInfo.js */ "./node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../support/arcadeOnDemand.js */ "./node_modules/@arcgis/core/support/arcadeOnDemand.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/* harmony import */ var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../symbols/support/styleUtils.js */ "./node_modules/@arcgis/core/symbols/support/styleUtils.js");
/* harmony import */ var _symbols_WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../symbols/WebStyleSymbol.js */ "./node_modules/@arcgis/core/symbols/WebStyleSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var E;const M="esri.renderers.UniqueValueRenderer",N=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(M),R="uvInfos-watcher",P="uvGroups-watcher",C=",",$=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureType)(_support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"]);function z(e){const{field1:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueInfos:l,valueExpression:r}=e,u=!(!t||!s);return[{classes:(l??[]).map((e=>{const{symbol:l,label:n,value:a,description:p}=e,[f,d,c]=u?a?.toString()?.split(o||"")||[]:[a],h=[];return(t||r)&&h.push(f),s&&h.push(d),i&&h.push(c),{symbol:l,label:n,values:[h],description:p}}))}]}function L(e){return null!=e&&""!==e&&("string"!=typeof e||""!==e.trim()&&"<null>"!==e.toLowerCase())||(e=null),e+""}let k=E=class extends((0,_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_18__.VisualVariablesMixin)(_Renderer_js__WEBPACK_IMPORTED_MODULE_17__["default"])){constructor(e){super(e),this._valueInfoMap={},this._isDefaultSymbolDerived=!1,this._isInfosSource=null,this.type="unique-value",this.backgroundFillSymbol=null,this.orderByClassesEnabled=!1,this.valueExpressionTitle=null,this.legendOptions=null,this.defaultLabel=null,this.portal=null,this.styleOrigin=null,this.diff={uniqueValueInfos(e,t){if(!e&&!t)return;if(!e||!t)return{type:"complete",oldValue:e,newValue:t};let s=!1;const i={type:"collection",added:[],removed:[],changed:[],unchanged:[]};for(let o=0;o<t.length;o++){const l=e.find((e=>e.value===t[o].value));l?(0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__.diff)(l,t[o])?(i.changed.push({type:"complete",oldValue:l,newValue:t[o]}),s=!0):i.unchanged.push({oldValue:l,newValue:t[o]}):(i.added.push(t[o]),s=!0)}for(let o=0;o<e.length;o++){t.find((t=>t.value===e[o].value))||(i.removed.push(e[o]),s=!0)}return s?i:void 0}},this._set("uniqueValueInfos",[]),this._set("uniqueValueGroups",[])}get _cache(){return{compiledFunc:null}}set field(e){this._set("field",e),this._updateFieldDelimiter(),this._updateUniqueValues()}castField(e){return null==e||"function"==typeof e?e:(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_14__.ensureString)(e)}writeField(e,t,i,o){"string"==typeof e?t[i]=e:o?.messages?o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):N().error(".field: cannot write field to JSON since it's not a string value")}set field2(e){this._set("field2",e),this._updateFieldDelimiter(),this._updateUniqueValues()}set field3(e){this._set("field3",e),this._updateUniqueValues()}set valueExpression(e){this._set("valueExpression",e),this._updateUniqueValues()}set defaultSymbol(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)}set fieldDelimiter(e){this._set("fieldDelimiter",e),this._updateUniqueValues()}readPortal(e,t,s){return s.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_16__["default"].getDefault()}readStyleOrigin(e,t,s){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){const e=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_26__.f)(t.styleUrl,s);return Object.freeze({styleUrl:e})}}writeStyleOrigin(e,t,s,i){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_26__.t)(e.styleUrl,i))}set uniqueValueGroups(e){this.styleOrigin?N().error("#uniqueValueGroups=","Cannot modify unique value groups of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueGroups",e),this._updateInfosFromGroups(),this._isInfosSource=!1,this._watchUniqueValueGroups())}set uniqueValueInfos(e){this.styleOrigin?N().error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos())}addUniqueValueInfo(e,s){if(this.styleOrigin)return void N().error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");let i;i="object"==typeof e?$(e):new _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"]({value:e,symbol:(0,_symbols_js__WEBPACK_IMPORTED_MODULE_1__.ensureType)(s)}),this.uniqueValueInfos?.push(i),this._valueInfoMap[L(i.value)]=i,this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}removeUniqueValueInfo(e){if(this.styleOrigin)return void N().error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");const t=this.uniqueValueInfos;if(t)for(let s=0;s<t.length;s++){const i=t[s];if(String(i.value)===String(e)){delete this._valueInfoMap[L(e)],t.splice(s,1);break}}this._updateGroupsFromInfos(),this._isInfosSource=!0,this._watchUniqueValueInfos()}async getUniqueValueInfo(e,t){let s=t;return this.valueExpression&&null==t?.arcade&&(s={...s,arcade:await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_25__.loadArcade)()}),this._getUniqueValueInfo(e,s)}getSymbol(e,t){if(this.valueExpression&&null==t?.arcade)return void N().error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const s=this._getUniqueValueInfo(e,t);return s?.symbol||this.defaultSymbol}async getSymbolAsync(e,t){let s=t;if(this.valueExpression&&null==s?.arcade){const e=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_25__.loadArcade)(),{arcadeUtils:t}=e;t.hasGeometryOperations(this.valueExpression)&&await t.enableGeometryOperations(),s={...s,arcade:e}}const i=this._getUniqueValueInfo(e,s);return i?.symbol||this.defaultSymbol}getSymbols(){const e=[];for(const t of this.uniqueValueInfos??[])t.symbol&&e.push(t.symbol);return this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables?.reduce(((e,t)=>e+t.getAttributeHash()),"")??""}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),s=this.uniqueValueInfos?.reduce(((e,t)=>e+t.getMeshHash()),"");return`${e}.${t}.${s}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`}clone(){const e=new E({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.defaultSymbol),orderByClassesEnabled:this.orderByClassesEnabled,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.visualVariables),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.legendOptions),authoringInfo:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.authoringInfo),backgroundFillSymbol:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);const t=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.uniqueValueInfos),s=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.uniqueValueGroups);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.styleOrigin))),Object.freeze(t),Object.freeze(s)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e._set("uniqueValueGroups",s),e._isInfosSource=this._isInfosSource,e._watchUniqueValueInfosAndGroups(),e}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}async collectRequiredFields(e,t){const s=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)];await Promise.all(s)}async collectSymbolFields(e,t){const s=[...this.getSymbols().map((s=>s.collectRequiredFields(e,t))),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.collectArcadeFieldNames)(e,t,this.valueExpression)];(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.collectField)(e,t,this.field),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.collectField)(e,t,this.field2),(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_15__.collectField)(e,t,this.field3),await Promise.all(s)}populateFromStyle(){return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_27__.fetchStyle)(this.styleOrigin,{portal:this.portal}).then((e=>{const t=[];return this._valueInfoMap={},e?.data&&Array.isArray(e.data.items)&&e.data.items.forEach((s=>{const i=new _symbols_WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_28__["default"]({styleUrl:e.styleUrl,styleName:e.styleName,portal:this.portal,name:s.name});this.defaultSymbol||s.name!==e.data.defaultItem||(this.defaultSymbol=i,this._isDefaultSymbolDerived=!0);const o=new _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"]({value:s.name,symbol:i});t.push(o),this._valueInfoMap[L(s.name)]=o})),this._set("uniqueValueInfos",Object.freeze(t)),this._updateGroupsFromInfos(!0),this._isInfosSource=null,this._watchUniqueValueInfos(),!this.defaultSymbol&&this.uniqueValueInfos?.length&&(this.defaultSymbol=this.uniqueValueInfos[0].symbol,this._isDefaultSymbolDerived=!0),this}))}_updateFieldDelimiter(){this.field&&this.field2&&!this.fieldDelimiter&&this._set("fieldDelimiter",C)}_updateUniqueValues(){null!=this._isInfosSource&&(this._isInfosSource?this._updateGroupsFromInfos():this._updateInfosFromGroups())}_updateValueInfoMap(){this._valueInfoMap={};const{uniqueValueInfos:e}=this;if(e)for(const t of e)this._valueInfoMap[L(t.value)]=t}_watchUniqueValueInfosAndGroups(){this._watchUniqueValueInfos(),this._watchUniqueValueGroups()}_watchUniqueValueInfos(){this.removeHandles(R);const{uniqueValueInfos:e}=this;if(e){const t=[];for(const s of e)t.push((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>({symbol:s.symbol,value:s.value,label:s.label,description:s.description})),((e,t)=>{e!==t&&(this._updateGroupsFromInfos(),this._isInfosSource=!0)}),{sync:!0}));this.addHandles(t,R)}}_watchUniqueValueGroups(){this.removeHandles(P);const{uniqueValueGroups:e}=this;if(e){const t=[];for(const s of e){t.push((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>({classes:s.classes})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}));for(const e of s.classes??[])t.push((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>({symbol:e.symbol,values:e.values,label:e.label,description:e.description})),((e,t)=>{e!==t&&(this._updateInfosFromGroups(),this._isInfosSource=!1)}),{sync:!0}))}this.addHandles(t,P)}}_updateInfosFromGroups(){if(!this.uniqueValueGroups)return this._set("uniqueValueInfos",null),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const e=[],{field:t,field2:s,field3:i,fieldDelimiter:o,uniqueValueGroups:l,valueExpression:r}=this;if(!t&&!r)return this._set("uniqueValueInfos",e),this._updateValueInfoMap(),void this._watchUniqueValueInfos();const u=!(!t||!s);for(const n of l)for(const t of n.classes??[]){const{symbol:l,label:r,values:n,description:a}=t;for(const t of n??[]){const{value:n,value2:p,value3:f}=t,d=[n];s&&d.push(p),i&&d.push(f);const c=u?d.join(o||""):d[0]??void 0;e.push(new _support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"]({symbol:l,label:r,value:c,description:a}))}}this._set("uniqueValueInfos",e),this._updateValueInfoMap(),this._watchUniqueValueInfos()}_updateGroupsFromInfos(e=!1){if(!this.uniqueValueInfos)return this._set("uniqueValueGroups",null),void this._watchUniqueValueGroups();const{field:t,field2:s,valueExpression:i,fieldDelimiter:o,uniqueValueInfos:l}=this;if(!t&&!i||!l.length)return this._set("uniqueValueGroups",[]),void this._watchUniqueValueGroups();const r=!(!t||!s),u=l.map((e=>{const{symbol:t,label:s,value:i,description:l}=e,[u,n,a]=r?i?.toString()?.split(o||"")||[]:[i];return new _support_UniqueValueClass_js__WEBPACK_IMPORTED_MODULE_22__["default"]({symbol:t,label:s,description:l,values:[new _support_UniqueValue_js__WEBPACK_IMPORTED_MODULE_21__["default"]({value:u,value2:n,value3:a})]})})),n=[new _support_UniqueValueGroup_js__WEBPACK_IMPORTED_MODULE_23__["default"]({classes:u})];e&&Object.freeze(n),this._set("uniqueValueGroups",n),this._watchUniqueValueGroups()}_getUniqueValueInfo(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)}_getUnqiueValueInfoForExpression(e,t){const{viewingMode:s,scale:i,spatialReference:o,arcade:l,timeZone:r}=t??{};let u=this._cache.compiledFunc;const n=l.arcadeUtils;if(!u){const e=n.createSyntaxTree(this.valueExpression);u=n.createFunction(e),this._cache.compiledFunc=u}const a=n.executeFunction(u,n.createExecContext(e,n.getViewInfo({viewingMode:s,scale:i,spatialReference:o}),r));return this._valueInfoMap[L(a)]}_getUnqiueValueInfoForFields(e){const t=this.field,s=e.attributes;let i;if(this.field2){const e=this.field2,o=this.field3,l=[];t&&l.push(s[t]),e&&l.push(s[e]),o&&l.push(s[o]),i=l.join(this.fieldDelimiter||"")}else t&&(i=s[t]);return this._valueInfoMap[L(i)]}static fromPortalStyle(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleName:e})),s._set("portal",t?.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_16__["default"].getDefault());const i=s.populateFromStyle();return i.catch((t=>{N().error(`#fromPortalStyle('${e}'[, ...])`,"Failed to create unique value renderer from style name",t)})),i}static fromStyleUrl(e,t){const s=new E(t?.properties);s._set("styleOrigin",Object.freeze({styleUrl:e}));const i=s.populateFromStyle();return i.catch((t=>{N().error(`#fromStyleUrl('${e}'[, ...])`,"Failed to create unique value renderer from style URL",t)})),i}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],k.prototype,"_cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__.enumeration)({uniqueValue:"unique-value"})],k.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__.rendererBackgroundFillSymbolProperty)],k.prototype,"backgroundFillSymbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({value:null,json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],k.prototype,"field",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__.cast)("field")],k.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__.writer)("field")],k.prototype,"writeField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,value:null,json:{write:!0}})],k.prototype,"field2",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,value:null,json:{write:!0}})],k.prototype,"field3",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{name:"drawInClassOrder",default:!1,write:!0,origins:{"web-scene":{write:!1}}}})],k.prototype,"orderByClassesEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,value:null,json:{write:!0}})],k.prototype,"valueExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{write:!0}})],k.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_20__["default"],json:{write:!0}})],k.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{write:!0}})],k.prototype,"defaultLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)((0,_core_object_js__WEBPACK_IMPORTED_MODULE_5__.deepMerge)({..._support_commonProperties_js__WEBPACK_IMPORTED_MODULE_19__.rendererSymbolProperty},{json:{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}},origins:{"web-scene":{write:{overridePolicy(){return{enabled:!this._isDefaultSymbolDerived}}}}}}}))],k.prototype,"defaultSymbol",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,value:null,json:{write:!0}})],k.prototype,"fieldDelimiter",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_16__["default"],readOnly:!0})],k.prototype,"portal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("portal",["styleName"])],k.prototype,"readPortal",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{write:{enabled:!1,overridePolicy:()=>({enabled:!0})}}})],k.prototype,"styleOrigin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__.reader)("styleOrigin",["styleName","styleUrl"])],k.prototype,"readStyleOrigin",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__.writer)("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],k.prototype,"writeStyleOrigin",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[_support_UniqueValueGroup_js__WEBPACK_IMPORTED_MODULE_23__["default"]],json:{read:{source:["uniqueValueGroups","uniqueValueInfos"],reader:(e,t,s)=>(t.uniqueValueGroups||z(t)).map((e=>_support_UniqueValueGroup_js__WEBPACK_IMPORTED_MODULE_23__["default"].fromJSON(e,s)))},write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueGroups",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[_support_UniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_24__["default"]],json:{read:!1,write:{overridePolicy(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],k.prototype,"uniqueValueInfos",null),k=E=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)(M)],k);const A=k;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualVariablesMixin: function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _support_randomRotationExpression_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/randomRotationExpression.js */ "./node_modules/@arcgis/core/renderers/support/randomRotationExpression.js");
/* harmony import */ var _visualVariables_ColorVariable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../visualVariables/ColorVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js");
/* harmony import */ var _visualVariables_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../visualVariables/OpacityVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js");
/* harmony import */ var _visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../visualVariables/RotationVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js");
/* harmony import */ var _visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../visualVariables/SizeVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js");
/* harmony import */ var _visualVariables_VisualVariable_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../visualVariables/VisualVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js");
/* harmony import */ var _visualVariables_VisualVariableFactory_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../visualVariables/VisualVariableFactory.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m={base:_visualVariables_VisualVariable_js__WEBPACK_IMPORTED_MODULE_14__["default"],key:"type",typeMap:{opacity:_visualVariables_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_11__["default"],color:_visualVariables_ColorVariable_js__WEBPACK_IMPORTED_MODULE_10__["default"],rotation:_visualVariables_RotationVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"],size:_visualVariables_SizeVariable_js__WEBPACK_IMPORTED_MODULE_13__["default"]}},v=l=>{let u=class extends l{constructor(){super(...arguments),this._vvFactory=new _visualVariables_VisualVariableFactory_js__WEBPACK_IMPORTED_MODULE_15__["default"]}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,s){return this._vvFactory.readVariables(r,a,s)}writeVisualVariables(r,a,s,i){a[s]=this._vvFactory.writeVariables(r,i)}get arcadeRequiredForVisualVariables(){if(!this.visualVariables)return!1;for(const r of this.visualVariables)if(r.arcadeRequired)return!0;return!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){const s=this.visualVariables;return s?s.filter((s=>s.type===r&&("string"==typeof a?s.target===a:!1!==a||!s.target))):[]}async collectVVRequiredFields(r,a){let s=[];this.visualVariables&&(s=s.concat(this.visualVariables));for(const i of s)i&&(i.field&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.collectField)(r,a,i.field),i.normalizationField&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.collectField)(r,a,i.normalizationField),i.valueExpression&&(y(i.valueExpression,r,a)||await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.collectArcadeFieldNames)(r,a,i.valueExpression)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({types:[m],value:null,json:{write:!0}})],u.prototype,"visualVariables",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__.reader)("visualVariables",["visualVariables","rotationType","rotationExpression"])],u.prototype,"readVisualVariables",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__.writer)("visualVariables")],u.prototype,"writeVisualVariables",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.mixins.VisualVariablesMixin")],u),u};function y(r,a,s){const i=(0,_support_randomRotationExpression_js__WEBPACK_IMPORTED_MODULE_9__.matchRandomRotationExpression)(r);return null!=i&&((0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_8__.collectField)(a,s,i),!0)}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureString)(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[Number],write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.renderers.support.AttributeColorInfo")],u);const c=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/AuthoringInfo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfo.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AuthoringInfoFieldInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AuthoringInfoFieldInfo.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js");
/* harmony import */ var _AuthoringInfoVisualVariable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthoringInfoVisualVariable.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js");
/* harmony import */ var _rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../rest/support/colorRamps.js */ "./node_modules/@arcgis/core/rest/support/colorRamps.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c;const h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),y=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),m=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),f=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers"],v=["high-to-low","above-and-below","above","below"],w=["flow-line","wave-front"],b=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let g=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?(0,_rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_10__.fromJSON)(e):void 0}get fields(){return this.type&&"predominance"!==this.type?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&"relationship"!==this.type?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&"relationship"!==this.type?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return"flow"===this.type?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&"relationship"!==this.type?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e||this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)}get univariateSymbolStyle(){return"univariate-color-size"===this.type&&"above-and-below"===this.univariateTheme?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return"univariate-color-size"===this.type?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){return new c({classificationMethod:this.classificationMethod,colorRamp:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.colorRamp),fadeRatio:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.fadeRatio),fields:this.fields?.slice(),field1:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.field1),field2:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map((e=>e.clone())),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:h.apiValues,value:null,json:{type:h.jsonValues,read:h.read,write:h.write,origins:{"web-document":{default:"manual",type:h.jsonValues,read:h.read,write:h.write}}}})],g.prototype,"classificationMethod",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({types:_rest_support_colorRamps_js__WEBPACK_IMPORTED_MODULE_10__.types,json:{write:!0}})],g.prototype,"colorRamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("colorRamp")],g.prototype,"readColorRamp",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"fadeRatio",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[String],value:null,json:{write:!0}})],g.prototype,"fields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_AuthoringInfoFieldInfo_js__WEBPACK_IMPORTED_MODULE_8__.AuthoringInfoFieldInfo,value:null,json:{write:!0}})],g.prototype,"field1",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_AuthoringInfoFieldInfo_js__WEBPACK_IMPORTED_MODULE_8__.AuthoringInfoFieldInfo,value:null,json:{write:!0}})],g.prototype,"field2",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:w,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"flowTheme",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],g.prototype,"focus",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],g.prototype,"isAutoGenerated",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,value:null,json:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,write:!0}})],g.prototype,"numClasses",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:f,json:{type:f,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],g.prototype,"lengthUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"maxSliderValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"minSliderValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],g.prototype,"statistics",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],g.prototype,"standardDeviationInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:y.apiValues,value:null,json:{type:y.jsonValues,read:y.read,write:y.write,origins:{"web-scene":{type:m.jsonValues,write:{writer:m.write,overridePolicy:e=>({enabled:"flow"!==e})}}}}})],g.prototype,"type",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_AuthoringInfoVisualVariable_js__WEBPACK_IMPORTED_MODULE_9__["default"]],json:{write:!0}})],g.prototype,"visualVariables",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:b,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateSymbolStyle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:v,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],g.prototype,"univariateTheme",null),g=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.AuthoringInfo")],g);const j=g;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthoringInfoClassBreakInfo: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var t;let p=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.minValue=0,this.maxValue=0}clone(){return new t({minValue:this.minValue,maxValue:this.maxValue})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"maxValue",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.AuthoringInfoClassBreakInfo")],p);


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthoringInfoFieldInfo: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AuthoringInfoClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthoringInfoClassBreakInfo.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;let a=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=new Array}clone(){return new n({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.classBreakInfos)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],a.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],a.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],a.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[_AuthoringInfoClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_7__.AuthoringInfoClassBreakInfo],json:{write:!0}})],a.prototype,"classBreakInfos",void 0),a=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.AuthoringInfoFieldInfo")],a);


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoSizeStop.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoSizeStop.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var t;let p=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.label=null,this.size=null,this.value=null}clone(){return new t({label:this.label,value:this.value,size:this.size})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"value",void 0),p=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.AuthoringInfoSizeStop")],p);const i=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AuthoringInfoSizeStop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthoringInfoSizeStop.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfoSizeStop.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var a;const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),m={key:e=>"number"==typeof e?"number":"string",typeMap:{number:Number,string:String},base:null},c=["high-to-low","above-and-below","centered-on","extremes"],y=[...new Set([...["high-to-low","above-and-below","centered-on","extremes","above","below"],...["high-to-low","above-and-below","above","below","reference-size"]])],h=["seconds","minutes","hours","days","months","years"],S=["circle","diamond","hexagon-flat","hexagon-pointy","square"];let d=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return"string"==typeof e||"number"==typeof e?e:null}get normalizationField(){return"reference-size"===this.theme?this._get("normalizationField"):null}set normalizationField(e){this._set("normalizationField",e)}get referenceSizeScale(){return"reference-size"===this.theme?this._get("referenceSizeScale"):null}set referenceSizeScale(e){this._set("referenceSizeScale",e)}get referenceSizeSymbolStyle(){return"reference-size"===this.theme?this._get("referenceSizeSymbolStyle"):null}set referenceSizeSymbolStyle(e){this._set("referenceSizeSymbolStyle",e)}castStartTime(e){return"string"==typeof e||"number"==typeof e?e:null}get sizeStops(){return"reference-size"===this.theme?this._get("sizeStops"):null}set sizeStops(e){this._set("sizeStops",e)}get style(){return"color"===this.type?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return"color"===this.type||"size"===this.type?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new a({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,normalizationField:this.normalizationField,referenceSizeScale:this.referenceSizeScale,referenceSizeSymbolStyle:this.referenceSizeSymbolStyle,sizeStops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.sizeStops),startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({types:m,json:{write:!0}})],d.prototype,"endTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("endTime")],d.prototype,"castEndTime",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],d.prototype,"maxSliderValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],d.prototype,"minSliderValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{origins:{"web-scene":{write:!1}},write:!0}})],d.prototype,"normalizationField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],d.prototype,"referenceSizeScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:S,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],d.prototype,"referenceSizeSymbolStyle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({types:m,json:{write:!0}})],d.prototype,"startTime",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("startTime")],d.prototype,"castStartTime",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_AuthoringInfoSizeStop_js__WEBPACK_IMPORTED_MODULE_7__["default"]],json:{origins:{"web-scene":{write:!1}},write:!0}})],d.prototype,"sizeStops",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:p.apiValues,value:null,json:{type:p.jsonValues,read:p.read,write:p.write}})],d.prototype,"style",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:y,value:null,json:{type:y,origins:{"web-scene":{type:c,write:{writer:(e,t)=>{c.includes(e)&&(t.theme=e)}}}},write:!0}})],d.prototype,"theme",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:h,json:{type:h,write:!0}})],d.prototype,"units",void 0),d=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.AuthoringInfoVisualVariable")],d);const f=d;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?.clone()??null})}getMeshHash(){const e=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${e}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],l.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],l.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],l.prototype,"maxValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__.requiredRendererSymbolProperty)],l.prototype,"symbol",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.ClassBreakInfo")],l);const a=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/DictionaryLoader.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/DictionaryLoader.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DictionaryLoader: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/LRUCache.js */ "./node_modules/@arcgis/core/core/LRUCache.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Version.js */ "./node_modules/@arcgis/core/core/Version.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/FieldsIndex.js */ "./node_modules/@arcgis/core/layers/support/FieldsIndex.js");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "./node_modules/@arcgis/core/support/arcadeOnDemand.js");
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../symbols/CIMSymbol.js */ "./node_modules/@arcgis/core/symbols/CIMSymbol.js");
/* harmony import */ var _symbols_cim_OverrideHelper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../symbols/cim/OverrideHelper.js */ "./node_modules/@arcgis/core/symbols/cim/OverrideHelper.js");
/* harmony import */ var _symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../symbols/cim/utils.js */ "./node_modules/@arcgis/core/symbols/cim/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const g="esri.renderers.support.DictionaryLoader",_={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class b{constructor(e,t,i){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_6__.LRUCache(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=e,this.config=t,this.fieldMap=i}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,i){let s;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(i));try{s=await this._dictionaryPromise}catch(y){if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__.isAbortError)(y))return this._dictionaryPromise=null,null}const r=this._dictionaryVersion?.greaterEqual(4,0),o={};if(this.fieldMap)for(const e of this._symbolFields){const i=(0,_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_14__.getFieldName)(this.fieldMap[e],this._fieldIndex);if(i){const s=t.attributes[i];o[e]=r?s:null!=s?""+t.attributes[i]:""}else o[e]=""}let l=null;try{l=s?.(o,i)}catch(d){return null}if(!l||"string"!=typeof l||"invalid"===l)return null;const f=l.split(";"),m=[],u=[];for(let n=0;n<f.length;n++){const i=f[n];if(i)if(i.includes("po:")){const s=i.slice(3).split("|");if(3===s.length){const i=s[0],r=s[1];let o=s[2];const n="countrylabel";if(i===n&&"TextString"===r){if(null!=this.fieldMap){let e=this.fieldMap[n];null==e&&(e=n,this.fieldMap[e]=e),t.attributes[e]=o}continue}if("DashTemplate"===r)o=o.split(" ").map((e=>Number(e)));else if("Color"===r){const t=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](o).toRgba();o=[t[0],t[1],t[2],255*t[3]]}else o=Number(o);u.push({primitiveName:i,propertyName:r,value:o,defaultValue:null})}}else if(i.includes("|")){for(const e of i.split("|"))if(this._itemNames.has(e)){m.push(e);break}}else if(this._itemNames.has(i))m.push(i);else if(0===n){m.length=0;let e="Invalid_P";null!=t.geometry&&((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.isPolygon)(t.geometry)?e="Invalid_A":(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__.isPolyline)(t.geometry)&&(e="Invalid_L")),m.push(e);break}}const h=null==t.geometry||!t.geometry.hasZ&&"point"===t.geometry.type;return this._cimPartsToCIMSymbol(t,m,u,h,i)}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger(g).error("no valid URL!");const s=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:null!=e?e.signal:null}),[{data:o}]=await Promise.all([s,(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_11__.loadArcade)()]);if(!o)throw this._dictionaryPromise=null,new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:n,dictionary_version:a,expression:c,itemsNames:h}=o,y=c;let p=!1;a&&(this._dictionaryVersion=_core_Version_js__WEBPACK_IMPORTED_MODULE_8__.Version.parse(a),p=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(h),this._symbolFields=n.symbol;const d={};if(this.config){const e=this.config;for(const t in e)d[t]=e[t]}if(n.configuration)for(const t of n.configuration)d.hasOwnProperty(t.name)||(d[t.name]=t.value);const _=[];if(e?.fields&&this.fieldMap)for(const t in this.fieldMap){const i=this.fieldMap[t],s=e.fields.filter((e=>e.name.toLowerCase()===i?.toLowerCase()));s.length>0&&_.push({...s[0],type:p?s[0].type:"esriFieldTypeString"})}_.length>0&&(this._fieldIndex=new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_10__["default"](_));const b=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_11__.createDictionaryExpression)(y,null!=e?e.spatialReference:null,_,d).then((e=>{const t={scale:0};return(i,s)=>{if(null==e)return null;const r=e.repurposeFeature({geometry:null,attributes:i});return t.scale=null!=s?s.scale??void 0:void 0,e.evaluate({$feature:r,$view:t},e.services)}})).catch((e=>(_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger(g).error("Creating dictionary expression failed:",e),null)));return this._dictionaryPromise=b,b}async _cimPartsToCIMSymbol(e,t,i,r,o){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=this._getSymbolPart(t[s],o);let l=await Promise.all(n);const a=this.fieldMap;if(a){l=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(l);for(const t of l)_symbols_cim_OverrideHelper_js__WEBPACK_IMPORTED_MODULE_13__.OverrideHelper.applyDictionaryTextOverrides(t,e,a,this._fieldIndex,(0,_symbols_cim_utils_js__WEBPACK_IMPORTED_MODULE_14__.getTextCasing)(t))}return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]({data:j(l,i,r)})}async _getSymbolPart(e,i){const s=this._symbolCache.get(e);if(s)return s;if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const r=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,e),o=(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r,{responseType:"json",query:{f:"json"},...i});this._ongoingRequests.set(e,o),o.finally((()=>this._ongoingRequests.delete(e)));try{const t=await o;return this._symbolCache.put(e,t.data),t.data}catch(n){throw n}}}function j(e,t,i){if(!e||0===e.length)return null;const s={...e[0]};if(e.length>1){s.effects=null,s.symbolLayers=[];for(const t of e){const e=t;if(null!=e.effects)for(const t of e.symbolLayers)null==t.effects?t.effects=e.effects:t.effects.unshift(...e.effects);s.symbolLayers.unshift(...e.symbolLayers)}}return i&&(s.callout=_),{type:"CIMSymbolReference",symbol:s,primitiveOverrides:t}}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;let p=e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.unit=null}clone(){return new e({unit:this.unit})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.DotDensityLegendOptions")],p);const i=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
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
var c;let i=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.color=null,this.ratio=null}clone(){return new c({color:this.color&&this.color.clone(),ratio:this.ratio})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Integer],default:null,write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],i.prototype,"ratio",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.HeatmapColorStop")],i);const l=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeatmapLegendOptions: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"minLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"maxLabel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.HeatmapLegendOptions")],p);


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/OthersCategory.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/OthersCategory.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OthersCategory: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(){super(...arguments),this.color=new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0,0,0,0]),this.label=null,this.threshold=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,range:{min:0,max:1},json:{write:!0}})],i.prototype,"threshold",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.renderers.support.OthersCategory")],i);


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
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
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.strict)()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(r){super(r),this.title=null,this.order=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)(i)],n.prototype,"order",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.renderers.support.RendererLegendOptions")],n);const a=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/UniqueValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/UniqueValue.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(o){super(o),this.value=null,this.value2=null,this.value3=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__.uniqueValueProperty)],c.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__.uniqueValueProperty)],c.prototype,"value2",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__.uniqueValueProperty)],c.prototype,"value3",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.UniqueValue")],c);const l=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/UniqueValueClass.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/UniqueValueClass.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/* harmony import */ var _UniqueValue_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UniqueValue.js */ "./node_modules/@arcgis/core/renderers/support/UniqueValue.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(r){super(r),this.description=null,this.label=null,this.symbol=null,this.values=null}castValues(r){if(null==r)return null;const o=typeof(r=Array.isArray(r)?r:[r])[0];return"string"===o||"number"===o?r.map((r=>new _UniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"]({value:r}))):"object"===o?r[0]instanceof _UniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"]?r:r.map((r=>new _UniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"](r))):null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_8__.rendererSymbolProperty)],n.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_UniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"]],json:{type:[[String]],read:{reader:r=>r?r.map((r=>new _UniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"]({value:r[0],value2:r[1],value3:r[2]}))):null},write:{writer:(r,e)=>{const t=[];for(const s of r){const r=[s.value,s.value2,s.value3].filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.isSome).map((r=>r.toString()));t.push(r)}e.values=t}}}})],n.prototype,"values",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("values")],n.prototype,"castValues",null),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.UniqueValueClass")],n);const u=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _UniqueValueClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UniqueValueClass.js */ "./node_modules/@arcgis/core/renderers/support/UniqueValueClass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(o){super(o),this.heading=null,this.classes=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"heading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[_UniqueValueClass_js__WEBPACK_IMPORTED_MODULE_8__["default"]],json:{write:!0}})],i.prototype,"classes",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.UniqueValueGroup")],i);const c=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commonProperties.js */ "./node_modules/@arcgis/core/renderers/support/commonProperties.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let p=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.description=null,this.label=null,this.symbol=null,this.value=null}clone(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})}getMeshHash(){const o=JSON.stringify(this.symbol?.toJSON());return`${this.value}.${o}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__.requiredRendererSymbolProperty)],p.prototype,"symbol",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__.uniqueValueProperty)],p.prototype,"value",void 0),p=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.UniqueValueInfo")],p);const n=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/commonProperties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/commonProperties.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rendererBackgroundFillSymbolProperty: function() { return /* binding */ n; },
/* harmony export */   rendererSymbolProperty: function() { return /* binding */ y; },
/* harmony export */   requiredRendererSymbolProperty: function() { return /* binding */ m; },
/* harmony export */   uniqueValueProperty: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/extensions/serializableProperty/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js");
/* harmony import */ var _symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../symbols/support/jsonUtils.js */ "./node_modules/@arcgis/core/symbols/support/jsonUtils.js");
/* harmony import */ var _symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../symbols/Symbol.js */ "./node_modules/@arcgis/core/symbols/Symbol.js");
/* harmony import */ var _symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../symbols/PolygonSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PolygonSymbol3D.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const y={types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypesRenderer,json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.write},origins:{"web-scene":{types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypesRenderer3D,write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.write},read:{reader:(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_2__.createTypeReader)({types:_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypesRenderer3D})}}}}},m=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__.deepMerge)({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},y),n={types:{base:_symbols_Symbol_js__WEBPACK_IMPORTED_MODULE_4__["default"],key:"type",typeMap:{"simple-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypes.typeMap["simple-fill"],"picture-fill":_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypes.typeMap["picture-fill"],"polygon-3d":_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypes.typeMap["polygon-3d"],cim:_symbols_js__WEBPACK_IMPORTED_MODULE_0__.symbolTypes.typeMap.cim}},json:{write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.write},origins:{"web-scene":{type:_symbols_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_5__["default"],write:{writer:_symbols_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.write}}}}},a={cast:e=>null==e||"string"==typeof e||"number"==typeof e?e:`${e}`,json:{type:String,write:{writer:(e,r)=>{r.value=e?.toString()}}}};


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/heatmapUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createValueFunction: function() { return /* binding */ u; },
/* harmony export */   evaluateDensityKernel: function() { return /* binding */ l; },
/* harmony export */   gaussianBlurRadiusPxToKernelDensityRadiusPt: function() { return /* binding */ e; },
/* harmony export */   generateGradient: function() { return /* binding */ f; },
/* harmony export */   kernelDensityRadiusPtToGaussianBlurRadiusPx: function() { return /* binding */ a; },
/* harmony export */   magicKernelDensityRadiusInflationFactor: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=2.4;function e(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.px2pt)(t*c)}function a(t){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__.pt2px)(t)/c}function s(r,o,i,c){let{color:e,ratio:a}=o,{color:s,ratio:f}=i;if(f===a){const t=1e-6;1===f?a-=t:f+=t}const l=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)((c-a)/(f-a),0,1);(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.l)(r,e.toArray(),s.toArray(),l)}function f(t){const r=512,o=new Uint8ClampedArray(4*r);if(t=t.filter((({ratio:t})=>t>=0&&t<=1)).sort(((t,r)=>t.ratio-r.ratio)).map((({color:t,ratio:r})=>({color:t,ratio:Math.max(r,.001)}))),t.length<1)return o;let n=t[0],c=t[0],e=1;const a=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.create)();for(let i=0;i<r;i++){const f=(i+.5)/r;for(;f>c.ratio&&e<t.length;)n=c,c=t[e++];s(a,n,c,f),o.set(a,4*i)}return o}function l(t,r,o){const n=Math.sqrt(t**2+r**2)/o;return n>1?0:3/(Math.PI*o**2)*(1-n**2)**2}function u(t){return"function"==typeof t?t:t?r=>+r[t]:()=>1}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/jsonUtils.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromJSON: function() { return /* binding */ t; },
/* harmony export */   read: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Warning.js */ "./node_modules/@arcgis/core/core/Warning.js");
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/extensions/serializableProperty/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/@arcgis/core/renderers/support/types.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(e,r){return o(e,null,r)}const s=(0,_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_1__.createTypeReader)({types:_types_js__WEBPACK_IMPORTED_MODULE_2__.rendererTypes});function o(r,n,t){return r?r&&(r.styleName||r.styleUrl)&&"uniqueValue"!==r.type?(t?.messages&&t.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+r.type+"'",{definition:r,context:t})),null):s(r,n,t):null}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/randomRotationExpression.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/randomRotationExpression.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchRandomRotationExpression: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return e.match(t)?.[1]?.replace(/\\'/g,"'")??null}const t=/^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/styleUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/styleUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStyleRenderer: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Warning.js */ "./node_modules/@arcgis/core/core/Warning.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__.result)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__["default"]("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/types.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/types.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rendererTypes: function() { return /* binding */ m; },
/* harmony export */   webSceneRendererTypes: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PieChartRenderer.js */ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],typeMap:{heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"],"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__["default"],"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],"dot-density":_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"],dictionary:_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],"pie-chart":_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"]},errorContext:"renderer"},u={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],typeMap:{simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"],"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_8__["default"],"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"]},errorContext:"renderer",validate:p};function p(e){switch(e.type){case"simple":return c(e);case"unique-value":return f(e);case"class-breaks":return d(e);case"heatmap":return e}}function c(r){if(r.symbol)return r;_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function f(r){const s=r.uniqueValueInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.uniqueValueInfos=t),r}function d(r){const s=r.classBreakInfos,t=s?.filter((({symbol:r,label:s},t)=>(r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${t}] ${s}) without a symbol from web scene.`),!!r)));return t?.length!==s?.length&&(r.classBreakInfos=t),r}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js ***!
  \******************************************************************************/
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
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VisualVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js");
/* harmony import */ var _support_ColorStop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/ColorStop.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let a=i=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(t){super(t),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,o)=>t.value-o.value)),this._set("stops",t)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({readOnly:!0})],a.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["color"],json:{type:["colorInfo"]}})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:String,json:{write:!0}})],a.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_7__["default"]],json:{write:!0}})],a.prototype,"stops",null),a=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.renderers.visualVariables.ColorVariable")],a);const p=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js ***!
  \********************************************************************************/
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
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VisualVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js");
/* harmony import */ var _support_OpacityStop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/OpacityStop.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let a=i=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(t){super(t),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(t){t&&Array.isArray(t)&&(t=t.filter((t=>!!t))).sort(((t,s)=>t.value-s.value)),this._set("stops",t)}clone(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map((t=>t.clone())),legendOptions:this.legendOptions?.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map((t=>t.value||0))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({readOnly:!0})],a.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["opacity"],json:{type:["transparencyInfo"]}})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:String,json:{write:!0}})],a.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[_support_OpacityStop_js__WEBPACK_IMPORTED_MODULE_7__["default"]],json:{write:!0}})],a.prototype,"stops",null),a=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.renderers.visualVariables.OpacityVariable")],a);const p=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VisualVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let i=s=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic"}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}clone(){return new s({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions?.clone()})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({readOnly:!0})],i.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],i.prototype,"axis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["rotation"],json:{type:["rotationInfo"]}})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],i.prototype,"rotationType",void 0),i=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.renderers.visualVariables.RotationVariable")],i);const a=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _VisualVariable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VisualVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js");
/* harmony import */ var _support_castSizeVariable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/castSizeVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/castSizeVariable.js");
/* harmony import */ var _support_SizeStop_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/SizeStop.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js");
/* harmony import */ var _support_SizeVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/SizeVariableLegendOptions.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js");
/* harmony import */ var _support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/sizeVariableUtils.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js");
/* harmony import */ var _support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/visualVariableUtils.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var z;const v=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),w=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers"});function g(e){if(null!=e)return"string"==typeof e||"number"==typeof e?(0,_support_castSizeVariable_js__WEBPACK_IMPORTED_MODULE_10__.castSizeFromStringOrNumber)(e):"size"===e.type?(0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSizeVariable)(e)?e:(delete(e={...e}).type,new f(e)):void 0}function V(e,t,i){if("object"!=typeof e)return e;const s=new f;return s.read(e,i),s}let f=z=class extends _VisualVariable_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:null!=this.valueExpression&&_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_14__.viewScaleRE.test(this.valueExpression)}}set index(e){(0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSizeVariable)(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),(0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSizeVariable)(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return (0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.getInputValueType)(this)}set maxDataValue(e){e&&this.stops&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return g(e)}readMaxSize(e,t,i){return V(e,t,i)}set minDataValue(e){e&&this.stops&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return g(e)}readMinSize(e,t,i){return V(e,t,i)}get arcadeRequired(){return!!this.valueExpression||(null!=this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||null!=this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired)}set stops(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter((e=>!!e))).sort(((e,t)=>e.value-t.value)):e&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return (0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.getTransformationType)(this,this.inputValueType)}readValueExpression(e,t){return e||t.expression&&"$view.scale"}writeValueExpressionWebScene(e,i,s,r){if("$view.scale"===e){if(r?.messages){const e=this.index,i="string"==typeof e?e:`visualVariables[${e}]`;r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:i+".valueExpression",context:r}))}}else i[s]=e}readValueUnit(e){return e?w.read(e):null}clone(){return new z({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSizeVariable)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSizeVariable)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops?.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions?.clone()})}flipSizes(){if(this.transformationType===_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.TransformationType.ClampedLinear){const{minSize:e,maxSize:t}=this;return this.minSize=t,this.maxSize=e,this}if(this.transformationType===_support_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_13__.TransformationType.Stops){const e=this.stops;if(!e)return this;const t=e.map((e=>e.size)).reverse(),i=e.length;for(let s=0;s<i;s++)e[s].size=t[s];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){return this.stops?.map((e=>e.value||0))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],f.prototype,"cache",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:v.apiValues,json:{type:v.jsonValues,origins:{"web-map":{read:!1}},read:v.read,write:v.write}})],f.prototype,"axis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],f.prototype,"index",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,readOnly:!0})],f.prototype,"inputValueType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_support_SizeVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:!0}})],f.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,value:null,json:{write:!0}})],f.prototype,"maxDataValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,value:null,json:{write:!0}})],f.prototype,"maxSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("maxSize")],f.prototype,"castMaxSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("maxSize")],f.prototype,"readMaxSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,value:null,json:{write:!0}})],f.prototype,"minDataValue",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,value:null,json:{write:!0}})],f.prototype,"minSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("minSize")],f.prototype,"castMinSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("minSize")],f.prototype,"readMinSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],f.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],f.prototype,"arcadeRequired",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String})],f.prototype,"scaleBy",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_support_SizeStop_js__WEBPACK_IMPORTED_MODULE_11__["default"]],value:null,json:{write:!0}})],f.prototype,"stops",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["outline"],json:{write:!0}})],f.prototype,"target",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,readOnly:!0})],f.prototype,"transformationType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["size"],json:{type:["sizeInfo"]}})],f.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],f.prototype,"useSymbolValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],f.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("valueExpression",["valueExpression","expression"])],f.prototype,"readValueExpression",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("web-scene","valueExpression")],f.prototype,"writeValueExpressionWebScene",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["radius","diameter","area","width","distance"],json:{write:!0}})],f.prototype,"valueRepresentation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:w.apiValues,json:{write:w.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],f.prototype,"valueUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("valueUnit")],f.prototype,"readValueUnit",null),f=z=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.visualVariables.SizeVariable")],f);const b=f;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/VisualVariableLegendOptions.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(e){return null==e?e:"function"==typeof e?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error(".field: field must be a string value"),null):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.ensureString)(e)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],u.prototype,"index",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:a.apiValues,readOnly:!0,json:{read:a.read,write:a.write}})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("field")],u.prototype,"castField",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"valueExpression",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],u.prototype,"valueExpressionTitle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],u.prototype,"arcadeRequired",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_support_VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"legendOptions",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.visualVariables.VisualVariable")],u);const c=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ V; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Warning.js */ "./node_modules/@arcgis/core/core/Warning.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _ColorVariable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ColorVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js");
/* harmony import */ var _OpacityVariable_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OpacityVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js");
/* harmony import */ var _RotationVariable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RotationVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js");
/* harmony import */ var _SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SizeVariable.js */ "./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const b={color:_ColorVariable_js__WEBPACK_IMPORTED_MODULE_9__["default"],size:_SizeVariable_js__WEBPACK_IMPORTED_MODULE_12__["default"],opacity:_OpacityVariable_js__WEBPACK_IMPORTED_MODULE_10__["default"],rotation:_RotationVariable_js__WEBPACK_IMPORTED_MODULE_11__["default"]},u=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.JSONMap({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),h=/^\[([^\]]+)\]$/i;let m=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(r){if(this._resetVariables(),r=r?.filter((r=>!!r)),r?.length){for(const s of r)switch(s.type){case"color":this.colorVariables.push(s);break;case"opacity":this.opacityVariables.push(s);break;case"rotation":this.rotationVariables.push(s);break;case"size":this.sizeVariables.push(s)}if(this.sizeVariables.length){this.sizeVariables.some((r=>!!r.target))&&r.sort(((r,s)=>{let o=null;return o=r.target===s.target?0:r.target?1:-1,o}))}for(let s=0;s<r.length;s++){r[s].index=s}this._set("visualVariables",r)}else this._set("visualVariables",r)}readVariables(r,s,o){const{rotationExpression:a,rotationType:i}=s,l=a?.match(h),n=l?.[1];if(n&&(r||(r=[]),r.push({type:"rotationInfo",rotationType:i,field:n})),r)return r.map((r=>{const s=u.read(r.type),a=b[s];a||(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn(`Unknown variable type: ${s}`),o?.messages&&o.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_4__["default"]("visual-variable:unsupported",`visualVariable of type '${s}' is not supported`,{definition:r,context:o})));const i=new a;return i.read(r,o),i}))}writeVariables(r,s){const o=[];for(const e of r){const r=e.toJSON(s);r&&o.push(r)}return o}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],m.prototype,"visualVariables",null),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.renderers.visualVariables.VisualVariableFactory")],m);const V=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c;let i=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.color=null,this.label=null,this.value=null}writeValue(o,r,e){r[e]=o??0}clone(){return new c({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Integer],write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],i.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("value")],i.prototype,"writeValue",null),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.visualVariables.support.ColorStop")],i);const a=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webdoc/support/opacityUtils.js */ "./node_modules/@arcgis/core/webdoc/support/opacityUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let u=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.label=null,this.opacity=null,this.value=null}readOpacity(r,o){return (0,_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_9__.transparencyToOpacity)(o.transparency)}writeOpacity(r,o,t){o[t]=(0,_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_9__.opacityToTransparency)(r)}clone(){return new l({label:this.label,opacity:this.opacity,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],u.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.Integer,write:{target:"transparency"}}})],u.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("opacity",["transparency"])],u.prototype,"readOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("opacity")],u.prototype,"writeOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],u.prototype,"value",void 0),u=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.visualVariables.support.OpacityStop")],u);const n=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.label=null,this.size=null,this.value=null,this.useMinValue=null,this.useMaxValue=null}clone(){return new i({label:this.label,size:this.size,value:this.value,useMaxValue:this.useMaxValue,useMinValue:this.useMinValue})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__.toPt,json:{write:!0}})],l.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:!0}})],l.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!1}})],l.prototype,"useMinValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!1}})],l.prototype,"useMaxValue",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.visualVariables.support.SizeStop")],l);const a=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VisualVariableLegendOptions.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _VisualVariableLegendOptions_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(){super(...arguments),this.customValues=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[Number],json:{write:!0}})],t.prototype,"customValues",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(){super(...arguments),this.showLegend=null,this.title=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],p.prototype,"showLegend",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],p);const i=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/castSizeVariable.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/castSizeVariable.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   castSizeFromStringOrNumber: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_0__.toPt)(e)}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputValueType: function() { return /* binding */ n; },
/* harmony export */   TransformationType: function() { return /* binding */ i; },
/* harmony export */   getInputValueType: function() { return /* binding */ t; },
/* harmony export */   getTransformationType: function() { return /* binding */ a; },
/* harmony export */   isSizeVariable: function() { return /* binding */ e; },
/* harmony export */   isValidNumber: function() { return /* binding */ l; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n,i;function e(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function l(n){return null!=n&&!isNaN(n)&&isFinite(n)}function t(i){return i.valueExpression?n.Expression:i.field&&"string"==typeof i.field?n.Field:n.Unknown}function a(e,l){const a=l||t(e),o=e.valueUnit||"unknown";return a===n.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}!function(n){n.Unknown="unknown",n.Expression="expression",n.Field="field"}(n||(n={})),function(n){n.Unknown="unknown",n.Stops="stops",n.ClampedLinear="clamped-linear",n.Proportional="proportional",n.Additive="additive",n.Constant="constant",n.Identity="identity",n.RealWorldSize="real-world-size"}(i||(i={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllSizes: function() { return /* binding */ T; },
/* harmony export */   getColor: function() { return /* binding */ m; },
/* harmony export */   getOpacity: function() { return /* binding */ b; },
/* harmony export */   getRotationAngle: function() { return /* binding */ h; },
/* harmony export */   getSize: function() { return /* binding */ y; },
/* harmony export */   getSizeForValue: function() { return /* binding */ k; },
/* harmony export */   getSizeFromNumberOrVariable: function() { return /* binding */ g; },
/* harmony export */   getSizeRangeAtScale: function() { return /* binding */ N; },
/* harmony export */   getVisualVariableValues: function() { return /* binding */ R; },
/* harmony export */   viewScaleRE: function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../support/lengthUtils.js */ "./node_modules/@arcgis/core/renderers/support/lengthUtils.js");
/* harmony import */ var _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sizeVariableUtils.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=e=>c().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e}`),f=()=>c().error("Use of arcade expressions requires an arcade context"),p=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__["default"],d=Math.PI,v=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function m(a,i,n){const t="visualVariables"in a&&a.visualVariables?a.visualVariables.find((e=>"color"===e.type)):a;if(!t)return;if("esri.renderers.visualVariables.ColorVariable"!==t.declaredClass)return void u("ColorVariable");const r="number"==typeof i,s=r?null:i,l=s?.attributes;let o=r?i:null;const c=t.field,{ipData:p,hasExpression:d}=t.cache;let v=t.cache.compiledFunc;if(!c&&!d){const e=t.stops;return e&&e[0]&&e[0].color}if("number"!=typeof o)if(d){if(null==n?.arcade)return void f();const e={viewingMode:n.viewingMode,scale:n.scale,spatialReference:n.spatialReference},a=n.arcade.arcadeUtils,i=a.getViewInfo(e),r=a.createExecContext(s,i,n.timeZone);if(!v){const e=a.createSyntaxTree(t.valueExpression);v=a.createFunction(e),t.cache.compiledFunc=v}o=a.executeFunction(v,r)}else l&&(o=l[c]);const m=t.normalizationField,b=null!=l&&null!=m?parseFloat(l[m]):void 0;if(null!=o&&(!m||r||!isNaN(b)&&0!==b)){isNaN(b)||r||(o/=b);const a=U(o,p);if(a){const i=a[0],r=a[1],s=i===r?t.stops[i].color:_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].blendColors(t.stops[i].color,t.stops[r].color,a[2],null!=n?n.color:void 0);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](s)}}}function b(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"opacity"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.OpacityVariable"!==n.declaredClass)return void u("OpacityVariable");const t="number"==typeof a,r=t?null:a,s=r?.attributes;let l=t?a:null;const o=n.field,{ipData:c,hasExpression:p}=n.cache;let d=n.cache.compiledFunc;if(!o&&!p){const e=n.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(p){if(null==i?.arcade)return void f();const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,t=a.getViewInfo(e),s=a.createExecContext(r,t,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}l=a.executeFunction(d,s)}else s&&(l=s[o]);const v=n.normalizationField,m=null!=s&&null!=v?parseFloat(s[v]):void 0;if(null!=l&&(!v||t||!isNaN(m)&&0!==m)){isNaN(m)||t||(l/=m);const e=U(l,c);if(e){const a=e[0],i=e[1];if(a===i)return n.stops[a].opacity;{const t=n.stops[a].opacity;return t+(n.stops[i].opacity-t)*e[2]}}}}function h(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"rotation"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.RotationVariable"!==n.declaredClass)return void u("RotationVariable");const t=n.axis||"heading",r="heading"===t&&"arithmetic"===n.rotationType?90:0,s="heading"===t&&"arithmetic"===n.rotationType?-1:1,l="number"==typeof a?null:a,o=l?.attributes,c=n.field,{hasExpression:p}=n.cache;let d=n.cache.compiledFunc,v=0;if(!c&&!p)return v;if(p){if(null==i?.arcade)return void f();const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,t=a.getViewInfo(e),r=a.createExecContext(l,t,i.timeZone);if(!d){const e=a.createSyntaxTree(n.valueExpression);d=a.createFunction(e),n.cache.compiledFunc=d}v=a.executeFunction(d,r)}else o&&(v=o[c]||0);return v="number"!=typeof v||isNaN(v)?null:r+s*v,v}function V(e,a,i){const n="number"==typeof a,t=n?null:a,r=t?.attributes;let l=n?a:null;const{isScaleDriven:c}=e.cache;let u=e.cache.compiledFunc;if(c){const a=null!=i?i.scale:void 0,n=null!=i?i.view:void 0;l=null==a||"3d"===n?x(e):a}else if(!n)switch(e.inputValueType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.InputValueType.Expression:{if(null==i?.arcade)return void f();const a={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},n=i.arcade.arcadeUtils,r=n.getViewInfo(a),s=n.createExecContext(t,r,i.timeZone);if(!u){const a=n.createSyntaxTree(e.valueExpression);u=n.createFunction(a),e.cache.compiledFunc=u}l=n.executeFunction(u,s);break}case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.InputValueType.Field:r&&(l=r[e.field]);break;case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.InputValueType.Unknown:l=null}if(!(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidNumber)(l))return null;if(n||!e.normalizationField)return l;const p=r?parseFloat(r[e.normalizationField]):null;return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidNumber)(p)&&0!==p?l/p:null}function x(e){let a=null,i=null;const n=e.stops;return n?(a=n[0].value,i=n[n.length-1].value):(a=e.minDataValue||0,i=e.maxDataValue||0),(a+i)/2}function y(e,a,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.find((e=>"size"===e.type)):e;if(!n)return;if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void u("SizeVariable");const t=k(V(n,a,i),n,a,i,n.cache.ipData);return null==t||isNaN(t)?0:t}function g(e,a,i){return null==e?null:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.isSizeVariable)(e)?y(e,a,i):(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidNumber)(e)?e:null}function w(e,a,i){return (0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidNumber)(i)&&e>i?i:(0,_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.isValidNumber)(a)&&e<a?a:e}function z(e,a,i,n){return e+((g(a.minSize,i,n)||a.minDataValue)??0)}function F(e,a,i){const n=e.stops;let t=n?.length&&n[0].size;return null==t&&(t=e.minSize),g(t,a,i)}function S(e,a,i,n){const t=(e-a.minDataValue)/(a.maxDataValue-a.minDataValue),r=g(a.minSize,i,n),s=g(a.maxSize,i,n),l=null!=n?n.shape:void 0;if(e<=a.minDataValue)return r;if(e>=a.maxDataValue)return s;if(null==r||null==s)return null;if("area"===a.scaleBy&&l){const e="circle"===l,a=e?d*(r/2)**2:r*r,i=a+t*((e?d*(s/2)**2:s*s)-a);return e?2*Math.sqrt(i/d):Math.sqrt(i)}return r+t*(s-r)}function E(e,a,i,n){const t=null!=n?n.shape:void 0,r=e/a.minDataValue,s=g(a.minSize,i,n),l=g(a.maxSize,i,n);let o=null;return o="circle"===t?2*Math.sqrt(r*(s/2)**2):"square"===t||"diamond"===t||"image"===t?Math.sqrt(r*s**2):r*s,w(o,s,l)}function C(e,a,i,n,t){const[r,s,l]=U(e,t);if(r===s)return g(a.stops?.[r].size,i,n);{const e=g(a.stops?.[r].size,i,n);return e+(g(a.stops?.[s].size,i,n)-e)*l}}function D(e,a,i,n){const r=(n?.resolution??1)*_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__.meterIn[a.valueUnit],s=g(a.minSize,i,n),l=g(a.maxSize,i,n),{valueRepresentation:o}=a;let c=null;return c="area"===o?2*Math.sqrt(e/d)/r:"radius"===o||"distance"===o?2*e/r:e/r,w(c,s,l)}function M(e){return e}function k(e,a,i,n,t){switch(a.transformationType){case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.Additive:return z(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.Constant:return F(a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.ClampedLinear:return S(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.Proportional:return E(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.Stops:return C(e,a,i,n,t);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.RealWorldSize:return D(e,a,i,n);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.Identity:return M(e);case _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_5__.TransformationType.Unknown:return null}}function N(e,a,i){const{isScaleDriven:n}=e.cache;if(!(n&&"3d"===i||a))return null;const t={scale:a,view:i};let r=g(e.minSize,p,t),s=g(e.maxSize,p,t);if(null!=r||null!=s){if(r>s){const e=s;s=r,r=e}return{minSize:r,maxSize:s}}}function R(e,a,i){if(!e.visualVariables)return;const n=[],t=[],r=[],s=[],l=[];for(const o of e.visualVariables)switch(o.type){case"color":t.push(o);break;case"opacity":r.push(o);break;case"rotation":l.push(o);break;case"size":s.push(o)}return t.forEach((e=>{const t=m(e,a,i);n.push({variable:e,value:t})})),r.forEach((e=>{const t=b(e,a,i);n.push({variable:e,value:t})})),l.forEach((e=>{const t=h(e,a,i);n.push({variable:e,value:t})})),s.forEach((e=>{const t=y(e,a,i);n.push({variable:e,value:t})})),n.filter((e=>null!=e.value))}function U(e,a){if(!a)return;let i=0,n=a.length-1;return a.some(((a,t)=>e<a?(n=t,!0):(i=t,!1))),[i,n,(e-a[i])/(a[n]-a[i])]}function T(e,a,n){const t=["proportional","proportional","proportional"];for(const r of e){const e=r.useSymbolValue?"symbol-value":y(r,a,n);switch(r.axis){case"width":t[0]=e;break;case"depth":t[1]=e;break;case"height":t[2]=e;break;case"width-and-depth":t[0]=e,t[1]=e;break;case"all":case void 0:case null:t[0]=e,t[1]=e,t[2]=e;break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_2__.neverReached)(r.axis)}}return t}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/AlgorithmicColorRamp.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/AlgorithmicColorRamp.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColorRamp.js */ "./node_modules/@arcgis/core/rest/support/ColorRamp.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var m;let c=m=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new m({fromColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.fromColor),toColor:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.toColor),algorithm:this.algorithm})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],c.prototype,"algorithm",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Integer],write:!0}})],c.prototype,"fromColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Integer],write:!0}})],c.prototype,"toColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:["algorithmic"]})],c.prototype,"type",void 0),c=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.AlgorithmicColorRamp")],c);const a=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/AttachmentQuery.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/AttachmentQuery.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var a;let p=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10}clone(){return new a((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[String],json:{write:!0}})],p.prototype,"attachmentTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],p.prototype,"attachmentsWhere",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{write:!0}})],p.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[String],json:{write:!0}})],p.prototype,"keywords",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[String],json:{write:!0}})],p.prototype,"globalIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{write:!0}})],p.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{read:{source:"resultRecordCount"}}})],p.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],json:{write:!0}})],p.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"returnMetadata",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{read:{source:"resultOffset"}}})],p.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__.writer)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__.writer)("num")],p.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],p.prototype,"where",void 0),p=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.rest.support.AttachmentQuery")],p),p.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.ensureType)(p);const c=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/ColorRamp.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ColorRamp.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ColorRamp")],e);const p=e;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/MultipartColorRamp.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/MultipartColorRamp.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AlgorithmicColorRamp.js */ "./node_modules/@arcgis/core/rest/support/AlgorithmicColorRamp.js");
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColorRamp.js */ "./node_modules/@arcgis/core/rest/support/ColorRamp.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var m;let c=m=class extends _ColorRamp_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new m({colorRamps:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.colorRamps)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_6__["default"]],json:{write:!0}})],c.prototype,"colorRamps",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["multipart"]})],c.prototype,"type",void 0),c=m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.rest.support.MultipartColorRamp")],c);const a=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/RelationshipQuery.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/RelationshipQuery.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layers/support/source/DataLayerSource.js */ "./node_modules/@arcgis/core/layers/support/source/DataLayerSource.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new u((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],c.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__.DataLayerSource,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Date})],c.prototype,"historicMoment",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__.writer)("historicMoment")],c.prototype,"_writeHistoricMoment",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0}})],c.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0}})],c.prototype,"relationshipId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__.writer)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__.writer)("num")],c.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.RelationshipQuery")],c),c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureType)(c);const d=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/colorRamps.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/colorRamps.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromJSON: function() { return /* binding */ p; },
/* harmony export */   types: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlgorithmicColorRamp.js */ "./node_modules/@arcgis/core/rest/support/AlgorithmicColorRamp.js");
/* harmony import */ var _ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorRamp.js */ "./node_modules/@arcgis/core/rest/support/ColorRamp.js");
/* harmony import */ var _MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultipartColorRamp.js */ "./node_modules/@arcgis/core/rest/support/MultipartColorRamp.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m={key:"type",base:_ColorRamp_js__WEBPACK_IMPORTED_MODULE_1__["default"],typeMap:{algorithmic:_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__["default"],multipart:_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__["default"]}};function p(o){return o?.type?"algorithmic"===o.type?_AlgorithmicColorRamp_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(o):"multipart"===o.type?_MultipartColorRamp_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(o):null:null}


/***/ }),

/***/ "./node_modules/@arcgis/core/support/popupUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/popupUtils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFieldInfos: function() { return /* binding */ F; },
/* harmony export */   createFieldsContent: function() { return /* binding */ b; },
/* harmony export */   createPopupTemplate: function() { return /* binding */ p; },
/* harmony export */   createPopupTemplateForFeatureReduction: function() { return /* binding */ u; },
/* harmony export */   getFeaturePopupTitle: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PopupTemplate.js */ "./node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/content/AttachmentsContent.js */ "./node_modules/@arcgis/core/popup/content/AttachmentsContent.js");
/* harmony import */ var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/content/Content.js */ "./node_modules/@arcgis/core/popup/content/Content.js");
/* harmony import */ var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup/content/CustomContent.js */ "./node_modules/@arcgis/core/popup/content/CustomContent.js");
/* harmony import */ var _popup_content_ExpressionContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup/content/ExpressionContent.js */ "./node_modules/@arcgis/core/popup/content/ExpressionContent.js");
/* harmony import */ var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup/content/FieldsContent.js */ "./node_modules/@arcgis/core/popup/content/FieldsContent.js");
/* harmony import */ var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup/content/MediaContent.js */ "./node_modules/@arcgis/core/popup/content/MediaContent.js");
/* harmony import */ var _popup_content_RelationshipContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popup/content/RelationshipContent.js */ "./node_modules/@arcgis/core/popup/content/RelationshipContent.js");
/* harmony import */ var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popup/content/TextContent.js */ "./node_modules/@arcgis/core/popup/content/TextContent.js");
/* harmony import */ var _popup_content_UtilityNetworkAssociationsContent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popup/content/UtilityNetworkAssociationsContent.js */ "./node_modules/@arcgis/core/popup/content/UtilityNetworkAssociationsContent.js");
/* harmony import */ var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../popup/FieldInfo.js */ "./node_modules/@arcgis/core/popup/FieldInfo.js");
/* harmony import */ var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../popup/support/FieldInfoFormat.js */ "./node_modules/@arcgis/core/popup/support/FieldInfoFormat.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p({displayField:t,editFieldsInfo:n,fields:i,objectIdField:o,title:s},r){if(!i)return null;const l=F({editFieldsInfo:n,fields:i,objectIdField:o},r);if(!l.length)return null;const a=I({titleBase:s,fields:i,displayField:t}),p=j();return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__["default"]({title:a,content:p,fieldInfos:l})}function u(t){const{fields:n,featureReduction:i,title:o}=t,s=i.fields;if(!s)return null;const r=g(s,n??[]);if(!r.length)return null;const l=C();return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__["default"]({title:o,content:l,fieldInfos:r})}function c(e){const{title:t,graphic:n}=e??{},{attributes:i,sourceLayer:o}=n??{},s=o&&"displayField"in o?o.displayField:null,r=s?i?.[s]:null,l=n?.getObjectId()?.toString();return t||r||l||""}const d=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.isFieldVisibleByDefault)(e,t);function f({fields:e,ignoreFieldTypes:t,sortDisabled:n}){const i=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===i&&(e=e.slice()),!0!==n&&e.sort(m),e}function m(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function b(e,t){return new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"]({fieldInfos:F(e,t).filter((e=>e.visible))})}function F(e,n){const i=n?.visibleFieldNames;return f({fields:e.fields??[],ignoreFieldTypes:n?.ignoreFieldTypes||S,sortDisabled:n?.sortDisabled}).map((n=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({fieldName:n.name,isEditable:(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.isFieldEditable)(n,e),label:n.alias,format:y(n),visible:d(n,{...e,visibleFieldNames:i})})))}function g(e,t){return e.map((e=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"]({fieldName:e.name,isEditable:!1,label:e.alias,format:w(e,t),visible:!0})))}function w(e,t){const{onStatisticField:n,onStatisticExpression:i,statisticType:o}=e;if(n){const e=t.find((e=>n===e.name));if(e)return y(e)}return"number"===i?.returnType?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_12__["default"]({digitSeparator:!0,places:2}):"count"===o?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_12__["default"]({digitSeparator:!0,places:0}):void 0}function y(e){switch(e.type){case"small-integer":case"integer":case"single":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_12__["default"]({digitSeparator:!0,places:0});case"double":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_12__["default"]({digitSeparator:!0,places:2});case"string":return (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.isRasterPixelValueField)(e.name)?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_12__["default"]({digitSeparator:!0,places:0}):void 0;default:return}}function j(){return[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"],new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__["default"]]}function C(){return[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__["default"]]}function I(e){const t=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__.getDisplayFieldName)(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n??""}function v(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;const t=e.alias?.toLowerCase();return"name"===t}const S=["geometry","blob","raster","guid","xml"];


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/cim/OverrideHelper.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/OverrideHelper.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverrideHelper: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/colorUtils.js */ "./node_modules/@arcgis/core/core/colorUtils.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "./node_modules/@arcgis/core/support/arcadeOnDemand.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/symbols/cim/utils.js");
/* harmony import */ var _views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../views/2d/arcade/callExpressionWithFeature.js */ "./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=e=>{if(!e)return[0,0,0,0];const{r,g:i,b:t,a:s}=e;return[r,i,t,255*s]};class y{static findApplicableOverrides(e,r,i){if(e&&r){if(e.primitiveName){let t=!1;for(const r of i)if(r.primitiveName===e.primitiveName){t=!0;break}if(!t)for(const s of r)s.primitiveName===e.primitiveName&&i.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)y.findApplicableOverrides(t,r,i);if(e.symbolLayers)for(const t of e.symbolLayers)y.findApplicableOverrides(t,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const t of e.effects)y.findApplicableOverrides(t,r,i);if(e.markerPlacement&&y.findApplicableOverrides(e.markerPlacement,r,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const t of e.markerGraphics)y.findApplicableOverrides(t,r,i),y.findApplicableOverrides(t.symbol,r,i)}else"CIMCharacterMarker"===e.type?y.findApplicableOverrides(e.symbol,r,i):"CIMHatchFill"===e.type?y.findApplicableOverrides(e.lineSymbol,r,i):"CIMPictureMarker"===e.type&&y.findApplicableOverrides(e.animatedSymbolProperties,r,i)}}}static findEffectOverrides(e,r){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.normalizeDashEffectTemplate)(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toLowerCaseProps)(e),t=e.primitiveName,c=[];for(const s of r)s.primitiveName===t&&c.push((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.toLowerCaseProps)(s));return{type:"cim-effect-param",effect:i,overrides:(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.normalizePrimitiveOverrideProps)(c)}}static async resolveSymbolOverrides(e,r,t,s,o,a,l){if(!e?.symbol)return null;let{symbol:n,primitiveOverrides:p}=e;const f=!!p;if(!f&&!s)return n;n=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(n),p=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(p);let m=!0;if(r||(r={attributes:{}},m=!1),f){if(m||(p=p.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),l||(p=p.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),p.length>0){const e={spatialReference:t,fields:(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.attributesToFields)(r.attributes),geometryType:o};await y.createRenderExpressions(p,e),y.evaluateOverrides(p,r,o??"esriGeometryPoint",a,l)}y.applyOverrides(n,p)}return s&&y.applyDictionaryTextOverrides(n,r,s,null),n}static async createRenderExpressions(e,r){const i=[];for(const s of e){const e=s.valueExpressionInfo;if(!e||y._expressionToRenderExpression.has(e.expression))continue;const o=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__.createRendererExpression)(e.expression,r.spatialReference,r.fields);i.push(o),o.then((r=>y._expressionToRenderExpression.set(e.expression,r)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,i,t,s,o){const a={$view:{scale:o?.scale}};for(const c of e){c.value&&"object"==typeof c.value&&(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.isRGB)(c.value)&&("Color"===c.propertyName||"StrokeColor"===c.propertyName)&&(c.value=m(c.value));const e=c.valueExpressionInfo;if(!e)continue;const o=y._expressionToRenderExpression.get(e.expression);o&&(c.value=(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_5__["default"])(o,i,a,t,s))}}static applyDictionaryTextOverrides(e,r,i,t,s="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&"CIMVectorMarker"===a.type&&y.applyDictionaryTextOverrides(a,r,i,t,"CIMTextSymbol"===e.type?e.textCase:s)}break;case"CIMVectorMarker":{const s=e.markerGraphics;if(!s)return;for(const e of s)e&&y.applyDictionaryTextOverrides(e,r,i,t)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.analyzeTextParts)(o,i);e.textString=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.assignTextValuesFromFeature)(r,a,t,s)}}}}static applyOverrides(e,r,i,t){if(e.primitiveName)for(const s of r)if(s.primitiveName===e.primitiveName){const r=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.uncapitalize)(s.propertyName);if(t&&t.push({cim:e,nocapPropertyName:r,value:e[r]}),i){let r=!1;for(const t of i)t.primitiveName===e.primitiveName&&(r=!0);r||i.push(s)}null!=s.value&&(e[r]=s.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)y.applyOverrides(s,r,i,t);if(e.symbolLayers)for(const s of e.symbolLayers)y.applyOverrides(s,r,i,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)y.applyOverrides(s,r,i,t);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)y.applyOverrides(s,r,i,t),y.applyOverrides(s.symbol,r,i,t)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const i of e)void 0!==i.value&&(r+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return r}static toValue(r,i){if("DashTemplate"===r)return i.split(" ").map((e=>Number(e)));if("Color"===r){const r=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](i).toRgba();return r[3]*=255,r}return i}}y._expressionToRenderExpression=new Map;


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/cim/defaultCIMValues.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/defaultCIMValues.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCIMColor: function() { return /* binding */ o; },
/* harmony export */   defaultCIMValues: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/symbols/cim/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o={color:[128,128,128,1],outlinecolor:[0,0,0,1],backgroundcolor:[128,128,128,1],borderlinecolor:[0,0,0,1],tintcolor:[255,255,255,1]},i={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMSolidFill:{enable:!0,colorlocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:_enums_js__WEBPACK_IMPORTED_MODULE_0__.AnimatedSymbolRepeatType.Loop,repeatdelay:0,easing:_enums_js__WEBPACK_IMPORTED_MODULE_0__.AnimatedSymbolEasingType.Linear},CIMSymbolAnimationSize:{tosize:10},CIMSymbolAnimationScale:{scalefactor:1},CIMSymbolAnimationColor:{tocolor:[255,255,255,1]},CIMSymbolAnimationTransparency:{totransparency:0},CIMSymbolAnimationRotation:{torotation:0},CIMSymbolAnimationOffset:{offsetx:0,offsety:0}};


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

/***/ "./node_modules/@arcgis/core/symbols/cim/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/utils.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustTextCase: function() { return /* binding */ s; },
/* harmony export */   analyzeTextParts: function() { return /* binding */ a; },
/* harmony export */   applyParentTransform: function() { return /* binding */ E; },
/* harmony export */   assignTextValuesFromFeature: function() { return /* binding */ c; },
/* harmony export */   attributesToFields: function() { return /* binding */ v; },
/* harmony export */   colorToArray: function() { return /* binding */ o; },
/* harmony export */   evaluateValueOrFunction: function() { return /* binding */ n; },
/* harmony export */   fromCIMFontDecoration: function() { return /* binding */ L; },
/* harmony export */   fromCIMFontStyle: function() { return /* binding */ w; },
/* harmony export */   fromCIMHorizontalAlignment: function() { return /* binding */ x; },
/* harmony export */   fromCIMVerticalAlignment: function() { return /* binding */ F; },
/* harmony export */   getDefaultCIMValue: function() { return /* binding */ D; },
/* harmony export */   getEnum: function() { return /* binding */ b; },
/* harmony export */   getFieldName: function() { return /* binding */ J; },
/* harmony export */   getFillColor: function() { return /* binding */ T; },
/* harmony export */   getFontStyle: function() { return /* binding */ g; },
/* harmony export */   getFontWeight: function() { return /* binding */ P; },
/* harmony export */   getNumericValue: function() { return /* binding */ p; },
/* harmony export */   getProcessParam: function() { return /* binding */ K; },
/* harmony export */   getSize: function() { return /* binding */ H; },
/* harmony export */   getStrokeColor: function() { return /* binding */ A; },
/* harmony export */   getStrokeWidth: function() { return /* binding */ N; },
/* harmony export */   getTextCasing: function() { return /* binding */ R; },
/* harmony export */   getTintColor: function() { return /* binding */ d; },
/* harmony export */   getValue: function() { return /* binding */ h; },
/* harmony export */   importGeometryEngine: function() { return /* binding */ S; },
/* harmony export */   isCIMFill: function() { return /* binding */ C; },
/* harmony export */   isCIMMarker: function() { return /* binding */ M; },
/* harmony export */   isCIMMarkerStrokePlacement: function() { return /* binding */ I; },
/* harmony export */   isCIMStroke: function() { return /* binding */ m; },
/* harmony export */   isFeatureValueFn: function() { return /* binding */ r; },
/* harmony export */   isGeometryEngineRequired: function() { return /* binding */ k; },
/* harmony export */   isSVGImage: function() { return /* binding */ G; },
/* harmony export */   isValidCIMValue: function() { return /* binding */ O; },
/* harmony export */   mapCIMSymbolToGeometryType: function() { return /* binding */ V; },
/* harmony export */   normalizeAlpha: function() { return /* binding */ f; },
/* harmony export */   normalizeDashEffectTemplate: function() { return /* binding */ B; },
/* harmony export */   normalizeDashTemplate: function() { return /* binding */ q; },
/* harmony export */   normalizePrimitiveOverrideProps: function() { return /* binding */ U; },
/* harmony export */   parseDashTemplate: function() { return /* binding */ j; },
/* harmony export */   resampleHermite: function() { return /* binding */ u; },
/* harmony export */   toCIMSymbolJSON: function() { return /* binding */ y; },
/* harmony export */   toLowerCaseProps: function() { return /* binding */ W; },
/* harmony export */   uncapitalize: function() { return /* binding */ z; }
/* harmony export */ });
/* harmony import */ var _defaultCIMValues_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultCIMValues.js */ "./node_modules/@arcgis/core/symbols/cim/defaultCIMValues.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(e){return"function"==typeof e}function n(e,t,n,o){return r(e)?e(t,n,o):e}function o(e){return[e.r,e.g,e.b,e.a]}const l=" /-,\n";function i(e){let t=e.length;for(;t--;)if(!l.includes(e.charAt(t)))return!1;return!0}function a(e,t){const r=[];let n=0,o=-1;do{if(o=e.indexOf("[",n),o>=n){if(o>n){const t=e.slice(n,o);r.push([t,null,i(t)])}if(n=o+1,o=e.indexOf("]",n),o>=n){if(o>n){const l=t[e.slice(n,o)];l&&r.push([null,l,!1])}n=o+1}}}while(-1!==o);if(n<e.length){const t=e.slice(n);r.push([t,null,i(t)])}return r}function c(e,t,r,n){let o="",l=null;for(const i of t){const[t,n,a]=i;if(t)a?l=t:(l&&(o+=l,l=null),o+=t);else{let t=n;null!=r&&(t=J(n,r));const i=e.attributes[t];i&&(l&&(o+=l,l=null),o+=i)}}return s(o,n)}function s(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function u(e,t,r,n,o,l,i=!0){const a=t/o,c=r/l,s=Math.ceil(a/2),u=Math.ceil(c/2);for(let f=0;f<l;f++)for(let r=0;r<o;r++){const y=4*(r+(i?l-f-1:f)*o);let M=0,m=0,C=0,I=0,p=0,h=0,b=0;const d=(f+.5)*c;for(let n=Math.floor(f*c);n<(f+1)*c;n++){const o=Math.abs(d-(n+.5))/u,l=(r+.5)*a,i=o*o;for(let c=Math.floor(r*a);c<(r+1)*a;c++){let r=Math.abs(l-(c+.5))/s;const o=Math.sqrt(i+r*r);o>=-1&&o<=1&&(M=2*o*o*o-3*o*o+1,M>0&&(r=4*(c+n*t),b+=M*e[r+3],C+=M,e[r+3]<255&&(M=M*e[r+3]/250),I+=M*e[r],p+=M*e[r+1],h+=M*e[r+2],m+=M))}}n[y]=I/m,n[y+1]=p/m,n[y+2]=h/m,n[y+3]=b/C}}function f(e){return e?[e[0],e[1],e[2],e[3]/255]:[0,0,0,0]}function y(e){return e.data?.symbol??null}function M(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function m(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function C(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function I(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const p=(e,t=0)=>null==e||isNaN(e)?t:e,h=(e,t)=>null!=e?e:t,b=(e,t)=>e??t,d=e=>e.tintColor?f(e.tintColor):[255,255,255,1],k=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function S(){return __webpack_require__.e(/*! import() | geometry-geometryEngineJSON */ "geometry-geometryEngineJSON").then(__webpack_require__.bind(__webpack_require__, /*! ../../geometry/geometryEngineJSON.js */ "./node_modules/@arcgis/core/geometry/geometryEngineJSON.js"))}function g(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function P(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function w(e){let t="normal",r="normal";if(e){const n=e.toLowerCase();n.includes("italic")?t="italic":n.includes("oblique")&&(t="oblique"),n.includes("bold")?r="bold":n.includes("light")&&(r="lighter")}return{style:t,weight:r}}function L(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function T(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=T(t);if(null!=e)return e}break;case"CIMTextSymbol":return T(e.symbol);case"CIMSolidFill":return e.color}return null}function A(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const e of t){const t=A(e);if(null!=t)return t}break}case"CIMTextSymbol":return A(e.symbol);case"CIMSolidStroke":return e.color}}function N(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=N(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return N(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function x(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function F(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function v(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}const G=e=>e.includes("data:image/svg+xml");function V(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function z(e){return e?e.charAt(0).toLowerCase()+e.slice(1):e}function E(e,t,r,n,o,l,i=!0){const{infos:a}=l;let c=1,s=0,u=0,f=0,y=1;for(const{absoluteAnchorPoint:C,offsetX:I,offsetY:p,rotation:h,size:b,frameHeight:d,rotateClockWise:k,scaleSymbolsProportionally:S}of a){y=C?1:c;u=Y(I,p,s,y,u),f=X(I,p,s,y,f),d&&(S||i)&&(c*=b/d),s=$(h,k,s)}const M=Y(n,o,s,y,u),m=X(n,o,s,y,f);return{size:e*c,rotation:$(t,r,s),offsetX:M,offsetY:m}}function O(e){if(null==e)return!1;if(Array.isArray(e))return e.every((e=>O(e)));switch(typeof e){case"string":return!!e;case"number":return!isNaN(e)}}function D(r,n){if("color"===n||"outlinecolor"===n||"backgroundcolor"===n||"borderlinecolor"===n||"tintcolor"===n)return[..._defaultCIMValues_js__WEBPACK_IMPORTED_MODULE_0__.defaultCIMColor[n]];const o=_defaultCIMValues_js__WEBPACK_IMPORTED_MODULE_0__.defaultCIMValues[r];if(!o)throw new Error(`InternalError: default value for type ${r}.`);return o[n]}function j(e){return e.split(" ").map((e=>Number(e)))}function q(e){return"string"==typeof e?j(e):e}function B(e){return e?.dashTemplate&&(e.dashTemplate=q(e.dashTemplate)),e}function R(e){if(null==e)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const t=e.symbolLayers;if(!t)return"Normal";for(const e of t)if("CIMVectorMarker"===e.type)return R(e)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return"Normal";for(const e of t)if(e.symbol)return R(e.symbol)}}return"Normal"}function H(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let r=0;if(e.symbolLayers)for(const n of e.symbolLayers)if(n)switch(n.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const e=n.size??_defaultCIMValues_js__WEBPACK_IMPORTED_MODULE_0__.defaultCIMValues.CIMVectorMarker.size;e>r&&(r=e);break}}return r}case"CIMLineSymbol":case"CIMPolygonSymbol":{let r=0;if(e.symbolLayers)for(const n of e.symbolLayers)if(n)switch(n.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const e=n.width;null!=e&&e>r&&(r=e);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(n.markerPlacement&&I(n.markerPlacement)){const e=n.size??_defaultCIMValues_js__WEBPACK_IMPORTED_MODULE_0__.defaultCIMValues.CIMVectorMarker.size;e>r&&(r=e)}break;case"CIMPictureFill":{const e=n.height;null!=e&&e>r&&(r=e)}}return r}}}function J(e,t){if(null!==t){const r=t.get(e);return r?r.name:e}return e}function U(e){return e.map((e=>({...e,propertyName:z(e.propertyName)})))}function W(e){const t={};for(const r in e){const n=e[r];t[z(r)]=n}return t}function X(e,t,r,n,o){const l=r*Math.PI/180;if(l){const r=Math.cos(l);return(Math.sin(l)*e+r*t)*n+o}return t*n+o}function Y(e,t,r,n,o){const l=r*Math.PI/180;if(l){return(Math.cos(l)*e-Math.sin(l)*t)*n+o}return e*n+o}function $(e,t,r){return t?r-e:r+e}function K(e,t,r){const n="Color"===r||"TintColor"===r||"ToColor"===r,o="Rotation"===r||"Angle"===r||"ToRotation"===r;let l=t[z(r)];if(null!=l&&(n?l=[l[0]/255,l[1]/255,l[2]/255,l[3]/255]:o&&(l*=Math.PI/180)),null==l&&(l=D(t.type,r.toLowerCase()),null!=l&&(n?l=[l[0]/255,l[1]/255,l[2]/255,l[3]]:o&&(l*=Math.PI/180))),null!=t.primitiveName){const i=e[t.primitiveName];if(null!=i){const e=i[r];null==e||("string"==typeof e||"number"==typeof e||Array.isArray(e)?(l=e,null!=l&&(n?l=[l[0]/255,l[1]/255,l[2]/255,l[3]/255]:o&&(l*=Math.PI/180))):(l={valueExpressionInfo:e,defaultValue:l},null!=l&&(n?l={type:"Process",op:"ArcadeColor",value:l}:o&&(l={type:"Process",op:"Divide",left:l,right:180/Math.PI}))))}}if(null==l)throw new Error(`Failed to derive a value or an expression for "${r}".`);return l}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/defaults.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaults.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPointSymbol2D: function() { return /* binding */ S; },
/* harmony export */   defaultPolygonSymbol2D: function() { return /* binding */ c; },
/* harmony export */   defaultPolylineSymbol2D: function() { return /* binding */ u; },
/* harmony export */   defaultTextSymbol2D: function() { return /* binding */ a; },
/* harmony export */   errorPointSymbol2D: function() { return /* binding */ N; },
/* harmony export */   errorPolygonSymbol2D: function() { return /* binding */ y; },
/* harmony export */   errorPolylineSymbol2D: function() { return /* binding */ O; },
/* harmony export */   getDefaultSymbol2D: function() { return /* binding */ J; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleFillSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js");
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleLineSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js");
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TextSymbol.js */ "./node_modules/@arcgis/core/symbols/TextSymbol.js");
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultsJSON.js */ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const S=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultPointSymbolJSON),u=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultPolylineSymbolJSON),c=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultPolygonSymbolJSON),a=_TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultTextSymbolJSON);function J(r){if(null==r)return null;switch(r.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return u;case"polygon":case"extent":return c}return null}const N=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.errorPointSymbolJSON),O=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.errorPolylineSymbolJSON),y=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.errorPolygonSymbolJSON);


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/defaults3D.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaults3D.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRendererPolygonSymbol3D: function() { return /* binding */ D; },
/* harmony export */   defaultRendererPolylineSymbol3D: function() { return /* binding */ L; },
/* harmony export */   getDefaultSymbol3D: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _FillSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FillSymbol3DLayer.js */ "./node_modules/@arcgis/core/symbols/FillSymbol3DLayer.js");
/* harmony import */ var _LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LineSymbol3D.js */ "./node_modules/@arcgis/core/symbols/LineSymbol3D.js");
/* harmony import */ var _MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MeshSymbol3D.js */ "./node_modules/@arcgis/core/symbols/MeshSymbol3D.js");
/* harmony import */ var _PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PointSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PointSymbol3D.js");
/* harmony import */ var _PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PolygonSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PolygonSymbol3D.js");
/* harmony import */ var _edges_SolidEdges3D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edges/SolidEdges3D.js */ "./node_modules/@arcgis/core/symbols/edges/SolidEdges3D.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/@arcgis/core/symbols/support/defaults.js");
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultsJSON.js */ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js");
/* harmony import */ var _LineSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../LineSymbol3DLayer.js */ "./node_modules/@arcgis/core/symbols/LineSymbol3DLayer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromSimpleMarkerSymbol(_defaults_js__WEBPACK_IMPORTED_MODULE_11__.defaultPointSymbol2D),w=_LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromSimpleLineSymbol(_defaults_js__WEBPACK_IMPORTED_MODULE_11__.defaultPolylineSymbol2D),S=_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromSimpleFillSymbol(_defaults_js__WEBPACK_IMPORTED_MODULE_11__.defaultPolygonSymbol2D),b=new _MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_7__["default"]({symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]([new _FillSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_5__["default"]({material:{color:_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_12__.defaultColor},edges:new _edges_SolidEdges3D_js__WEBPACK_IMPORTED_MODULE_10__["default"]({size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.px2pt)(1),color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_12__.defaultOutlineColor)})})])}),L=new _LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__["default"]({symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]([new _LineSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_13__["default"]({material:{color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0])},size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.px2pt)(1)})])}),D=new _PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_9__["default"]({symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]([new _FillSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_5__["default"]({outline:{color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0]),size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.px2pt)(1)}})])});function d(o){if(null==o)return null;switch(o.type){case"mesh":return b;case"point":case"multipoint":return u;case"polyline":return w;case"polygon":case"extent":return S}return null}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaultsJSON.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultColor: function() { return /* binding */ e; },
/* harmony export */   defaultOutlineColor: function() { return /* binding */ i; },
/* harmony export */   defaultPointSymbolJSON: function() { return /* binding */ l; },
/* harmony export */   defaultPolygonSymbolJSON: function() { return /* binding */ S; },
/* harmony export */   defaultPolylineSymbolJSON: function() { return /* binding */ o; },
/* harmony export */   defaultTextSymbolJSON: function() { return /* binding */ t; },
/* harmony export */   errorPointSymbolJSON: function() { return /* binding */ r; },
/* harmony export */   errorPolygonSymbolJSON: function() { return /* binding */ y; },
/* harmony export */   errorPolylineSymbolJSON: function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=[252,146,31,255],i=[153,153,153,255],l={type:"esriSMS",style:"esriSMSCircle",size:6,color:e,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e},S={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null};


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/jsonUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/jsonUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromJSON: function() { return /* binding */ p; },
/* harmony export */   write: function() { return /* binding */ l; },
/* harmony export */   writeLabelSymbol: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _Symbol3D_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Symbol3D.js */ "./node_modules/@arcgis/core/symbols/Symbol3D.js");
/* harmony import */ var _symbolConversion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbolConversion.js */ "./node_modules/@arcgis/core/symbols/support/symbolConversion.js");
/* harmony import */ var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../WebStyleSymbol.js */ "./node_modules/@arcgis/core/symbols/WebStyleSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l(e,o,n,t){const s=y(e,{},{context:t,isLabelSymbol:!1});null!=s&&(o[n]=s)}function i(e,o,n,t){const s=y(e,{},{context:t,isLabelSymbol:!0});null!=s&&(o[n]=s)}function m(e){return e instanceof _Symbol3D_js__WEBPACK_IMPORTED_MODULE_3__["default"]||e instanceof _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"]}function a(e){return e instanceof _Symbol3D_js__WEBPACK_IMPORTED_MODULE_3__["default"]&&("polygon-3d"===e.type||"line-3d"===e.type)}function y(e,t,r){if(null==e)return null;const{context:l,isLabelSymbol:i}=r,y=l?.origin,p=l?.messages;if("web-scene"===y&&!m(e)){const n=(0,_symbolConversion_js__WEBPACK_IMPORTED_MODULE_4__.to3D)(e,{retainCIM:!0,hasLabelingContext:i});return null!=n.symbol?n.symbol.write(t,l):(p?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:l,error:n.error})),null)}return (0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSceneServiceLayer)(l?.layer)&&a(e)?(p?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported on layers of type '${l?.layer?.declaredClass}'.`,{symbol:e,context:l})),null):("web-map"===y||"portal-item"===y&&!(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSceneServiceLayer)(l?.layer))&&m(e)?(p?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:l})),null):e.write(t,l)}function p(o,n){return (0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.readSymbol)(o,null,n)}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/styleCache.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/styleCache.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cachedStyles: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=new Map;


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/styleUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/styleUtils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style2DUrlTemplate: function() { return /* binding */ h; },
/* harmony export */   fetchStyle: function() { return /* binding */ i; },
/* harmony export */   makeCIMSymbolRef: function() { return /* binding */ m; },
/* harmony export */   requestJSON: function() { return /* binding */ p; },
/* harmony export */   symbolUrlFromStyleItem: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/PortalQueryParams.js */ "./node_modules/@arcgis/core/portal/PortalQueryParams.js");
/* harmony import */ var _styleCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styleCache.js */ "./node_modules/@arcgis/core/symbols/support/styleCache.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function f(e,t){try{return{data:(await p(e,t)).data,baseUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeFile)(e),styleUrl:e}}catch(o){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAbortError)(o),null}}function u(e,t,r){const o=null!=t.portal?t.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__["default"].getDefault();let s;const l=`${o.url} - ${o.user?.username} - ${e}`,f=_styleCache_js__WEBPACK_IMPORTED_MODULE_7__.cachedStyles.get(l);if(f)return f;const u=c(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl??"",styleName:e})));return _styleCache_js__WEBPACK_IMPORTED_MODULE_7__.cachedStyles.set(l,u),u}function c(e,r,o){return r.load(o).then((()=>{const t=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_6__["default"]({disableExtraQuery:!0,query:`owner:${d} AND type:${b} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===b&&e.owner===d){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function i(e,r,o){return null!=e?.styleUrl?f(e.styleUrl,o):null!=e?.styleName?u(e.styleName,r,o):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function m(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function y(e,t,r=["gltf"]){if("cimRef"===t)return encodeURI(e.cimRef);if(e.formatInfos&&!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("enable-feature:force-wosr"))for(const o of r){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return encodeURI(e.webRef)}function p(t,r){const s={responseType:"json",query:{f:"json"},...r};return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalize)(t),s)}const d="esri_en",b="Style",h="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/symbolConversion.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/symbolConversion.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTo3DOptions: function() { return /* binding */ g; },
/* harmony export */   to3D: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _defaults3D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults3D.js */ "./node_modules/@arcgis/core/symbols/support/defaults3D.js");
/* harmony import */ var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WebStyleSymbol.js */ "./node_modules/@arcgis/core/symbols/WebStyleSymbol.js");
/* harmony import */ var _PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PointSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PointSymbol3D.js");
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SimpleLineSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js");
/* harmony import */ var _LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LineSymbol3D.js */ "./node_modules/@arcgis/core/symbols/LineSymbol3D.js");
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/* harmony import */ var _PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PictureMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js");
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SimpleFillSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js");
/* harmony import */ var _MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MeshSymbol3D.js */ "./node_modules/@arcgis/core/symbols/MeshSymbol3D.js");
/* harmony import */ var _PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../PolygonSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PolygonSymbol3D.js");
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TextSymbol.js */ "./node_modules/@arcgis/core/symbols/TextSymbol.js");
/* harmony import */ var _LabelSymbol3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../LabelSymbol3D.js */ "./node_modules/@arcgis/core/symbols/LabelSymbol3D.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const S="#useCIMFallbackSymbology()",g={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function u(u,d=g){if(!u)return{symbol:null};const{retainId:D=g.retainId,ignoreDrivers:M=g.ignoreDrivers,hasLabelingContext:j=g.hasLabelingContext,retainCIM:C=g.retainCIM,cimFallbackEnabled:I=g.cimFallbackEnabled}=d;let k=null;if((0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol3D)(u)||u instanceof _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])k=u.clone();else if("cim"===u.type){const o=u.data?.symbol?.type;switch(o){case"CIMPointSymbol":k=C?u.clone():_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromCIMSymbol(u);break;case"CIMLineSymbol":I&&(k=_defaults3D_js__WEBPACK_IMPORTED_MODULE_2__.defaultRendererPolylineSymbol3D.clone(),d?.logWarning?.(S,"Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case"CIMPolygonSymbol":I&&(k=_defaults3D_js__WEBPACK_IMPORTED_MODULE_2__.defaultRendererPolygonSymbol3D.clone(),d?.logWarning?.(S,"Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!k)return{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:u})}}else if(u instanceof _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"])k=_LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromSimpleLineSymbol(u);else if(u instanceof _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_7__["default"])k=_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromSimpleMarkerSymbol(u);else if(u instanceof _PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_8__["default"])k=_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromPictureMarkerSymbol(u);else if(u instanceof _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_9__["default"])k=d.geometryType&&"mesh"===d.geometryType?_MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromSimpleFillSymbol(u):_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromSimpleFillSymbol(u);else{if(!(u instanceof _TextSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]))return{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${u.type||u.declaredClass}' is unsupported in 3D`,{symbol:u})};k=j?_LabelSymbol3D_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromTextSymbol(u):_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromTextSymbol(u)}return D&&k&&"cim"!==k.type&&(k.id=u.id),M&&(0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol3D)(k)&&k.symbolLayers.forEach((o=>o.ignoreDrivers=!0)),{symbol:k}}


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

/***/ "./node_modules/@arcgis/core/time/TimeInterval.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/time/TimeInterval.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/timeUtils.js */ "./node_modules/@arcgis/core/core/timeUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../portal/timeUnitKebabDictionary.js */ "./node_modules/@arcgis/core/portal/timeUnitKebabDictionary.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(o){super(o),this.unit="milliseconds",this.value=0}toMilliseconds(){return (0,_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__.convertTime)(this.value,this.unit,"milliseconds")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)(_portal_timeUnitKebabDictionary_js__WEBPACK_IMPORTED_MODULE_10__.timeUnitKebabDictionary,{nonNullable:!0})],m.prototype,"unit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0},nonNullable:!0})],m.prototype,"value",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.time.TimeInterval")],m);const l=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/quantizationUtils.js */ "./node_modules/@arcgis/core/geometry/support/quantizationUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(e,t,o,n,a){if(null==e)return null;const s=e.referencesGeometry()&&a?i(t,n,a):t,u=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:u},e.services)}catch(c){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const u=new Map;function i(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;u.has(r)||u.set(r,c(r));const s=u.get(r)(e.geometry,o,n,a);return{...e,geometry:s}}function c(s){const u={};switch(s){case"esriGeometryPoint":return(e,r,t,o)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__.unquantizePoint)(r,u,e,t,o);case"esriGeometryPolygon":return(e,r,t,o)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__.unquantizePolygon)(r,u,e,t,o);case"esriGeometryPolyline":return(e,r,t,n)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__.unquantizePolyline)(r,u,e,t,n);case"esriGeometryMultipoint":return(e,r,o,n)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__.unquantizeMultipoint)(r,u,e,o,n);default:return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInferredClusterRenderer: function() { return /* binding */ d; },
/* harmony export */   findSizeVV: function() { return /* binding */ m; },
/* harmony export */   hasClusterCountVV: function() { return /* binding */ c; },
/* harmony export */   isClusterCompatibleRenderer: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../renderers/ClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../renderers/DictionaryRenderer.js */ "./node_modules/@arcgis/core/renderers/DictionaryRenderer.js");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../renderers/DotDensityRenderer.js */ "./node_modules/@arcgis/core/renderers/DotDensityRenderer.js");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../renderers/HeatmapRenderer.js */ "./node_modules/@arcgis/core/renderers/HeatmapRenderer.js");
/* harmony import */ var _renderers_PieChartRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../renderers/PieChartRenderer.js */ "./node_modules/@arcgis/core/renderers/PieChartRenderer.js");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../renderers/Renderer.js */ "./node_modules/@arcgis/core/renderers/Renderer.js");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../renderers/SimpleRenderer.js */ "./node_modules/@arcgis/core/renderers/SimpleRenderer.js");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../renderers/UniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../renderers/support/jsonUtils.js */ "./node_modules/@arcgis/core/renderers/support/jsonUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_MD5_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../core/MD5.js */ "./node_modules/@arcgis/core/core/MD5.js");
/* harmony import */ var _layers_support_AggregateField_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layers/support/AggregateField.js */ "./node_modules/@arcgis/core/layers/support/AggregateField.js");
/* harmony import */ var _layers_support_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layers/support/ExpressionInfo.js */ "./node_modules/@arcgis/core/layers/support/ExpressionInfo.js");
/* harmony import */ var _renderers_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../renderers/support/AuthoringInfo.js */ "./node_modules/@arcgis/core/renderers/support/AuthoringInfo.js");
/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../symbols/SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].getLogger("esri.views.2d.layers.support.clusterUtils");_core_has_js__WEBPACK_IMPORTED_MODULE_12__["default"].add("esri-cluster-arcade-enabled",!0);const u=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_12__["default"])("esri-cluster-arcade-enabled"),p=new Set(["simple-line","simple-fill","picture-fill"]);function d(r,s){let i=s.clone();if(!f(i))return i;if(s.getSymbols().some((e=>p.has(e.type)))&&(i=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"]({symbol:new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_17__["default"]})),i.authoringInfo||(i.authoringInfo=new _renderers_support_AuthoringInfo_js__WEBPACK_IMPORTED_MODULE_16__["default"]),i.authoringInfo.isAutoGenerated=!0,"visualVariables"in i){const e=(i.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression));e.forEach((e=>{"rotation"===e.type?e.field?e.field=g(r,e.field,"avg_angle","number"):e.valueExpression&&(e.field=b(r,e.valueExpression,"avg_angle","number"),e.valueExpression=null):e.normalizationField?(e.field=g(r,e.field,"avg_norm","number",e.normalizationField),e.normalizationField=null):e.field?e.field=g(r,e.field,"avg","number"):e.valueExpression&&(e.field=b(r,e.valueExpression,"avg","number"),e.valueExpression=null)})),i.visualVariables=e}switch(i.type){case"simple":break;case"pie-chart":for(const e of i.attributes)e.field?e.field=g(r,e.field,"sum","number"):e.valueExpression&&(e.field=b(r,e.valueExpression,"sum","number"),e.valueExpression=null);break;case"unique-value":i.field?i.field=g(r,i.field,"mode","string"):i.valueExpression&&(i.field=b(r,i.valueExpression,"mode","string"),i.valueExpression=null);break;case"class-breaks":i.normalizationField?(i.field=g(r,i.field,"avg_norm","number",i.normalizationField),i.normalizationField=null):i.field?i.field=g(r,i.field,"avg","number"):i.valueExpression&&(i.field=b(r,i.valueExpression,"avg","number"),i.valueExpression=null)}return i}const m=e=>e?.find((({type:e})=>"size"===e))??null,c=e=>!!e?.some((({field:e})=>"cluster_count"===e)),f=e=>{const r=r=>l().error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_11__["default"]("Unsupported-renderer",r,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return r("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const s=e.normalizationType;if("field"!==s)return r(`FeatureReductionCluster does not support a normalizationType of ${s}`),!1}break;case"simple":case"pie-chart":break;default:return r(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!u){if("valueExpression"in e&&e.valueExpression)return r("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return r("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function v(e,r,s){switch(e){case"sum":return`cluster_sum_${r}`;case"avg":case"avg_angle":return`cluster_avg_${r}`;case"mode":return`cluster_type_${r}`;case"avg_norm":{const e=s,n="field",t=r.toLowerCase()+",norm:"+n+","+e.toLowerCase();return"cluster_avg_"+(0,_core_MD5_js__WEBPACK_IMPORTED_MODULE_13__.createMD5Hash)(t)}}}function b(e,r,s,o){const a=(0,_core_MD5_js__WEBPACK_IMPORTED_MODULE_13__.createMD5Hash)(r),l="mode"===s?`cluster_type_${a}`:"sum"===s?`cluster_sum_${a}`:`cluster_avg_${a}`;return e.some((e=>e.name===l))||e.push(new _layers_support_AggregateField_js__WEBPACK_IMPORTED_MODULE_14__["default"]({name:l,isAutoGenerated:!0,onStatisticExpression:new _layers_support_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"]({expression:r,returnType:o}),statisticType:s})),l}function g(e,r,s,i,o){if("cluster_count"===r||e.some((e=>e.name===r)))return r;const a=v(s,r,o);return e.some((e=>e.name===a))||("avg_norm"===s?e.push(new _layers_support_AggregateField_js__WEBPACK_IMPORTED_MODULE_14__["default"]({name:a,isAutoGenerated:!0,onStatisticExpression:new _layers_support_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_15__["default"]({expression:`$feature.${r} / $feature.${o}`,returnType:i}),statisticType:"avg"})):e.push(new _layers_support_AggregateField_js__WEBPACK_IMPORTED_MODULE_14__["default"]({name:a,isAutoGenerated:!0,onStatisticField:r,statisticType:s}))),a}


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
//# sourceMappingURL=StreamLayer.js.map