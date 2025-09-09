"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["VoxelLayer"],{

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

/***/ "./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   persistable: function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _MD5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MD5.js */ "./node_modules/@arcgis/core/core/MD5.js");
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../multiOriginJSONSupportUtils.js */ "./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metadata.js */ "./node_modules/@arcgis/core/core/accessorSupport/metadata.js");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "./node_modules/@arcgis/core/portal/support/resourceExtension.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function j(t){const r=t?.origins??[void 0];return(e,o)=>{const s=U(t,e,o);for(const t of r){const r=(0,_property_js__WEBPACK_IMPORTED_MODULE_7__.propertyJSONMeta)(e,t,o);for(const t in s)r[t]=s[t]}}}function U(t,r,e){if("resource"===t?.type)return w(t,r,e);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.b;return{read:t,write:r}}}}function w(t,r,n){const i=(0,_metadata_js__WEBPACK_IMPORTED_MODULE_5__.getPropertyMetadata)(r,n);return{type:String,read:(t,r,e)=>{const o=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.r)(t,r,e);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(r,p,c,u){if(!u?.resources)return"string"==typeof r?void(p[c]=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(r,u)):void(p[c]=r.write({},u));const l=x(r),m=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(l,{...u,verifyItemRelativeUrls:u?.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.M.NO),d=i.type!==String&&(!(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_2__.isMultiOriginJSONMixin)(this)||u?.origin&&this.originIdOf(n)>(0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__.nameToId)(u.origin)),h={object:this,propertyName:n,value:r,targetUrl:m,dest:p,targetPropertyName:c,context:u,params:t};u?.portalItem&&m&&!(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbsolute)(m)?d&&t?.contentAddressed?I(h):d?N(h):P(h):u?.portalItem&&(null==m||null!=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.i)(m)||(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isBlobProtocol)(m)||d)?I(h):p[c]=m}}}}function I(e){const{targetUrl:o,params:p,value:u,context:a,dest:l,targetPropertyName:d}=e;if(!a.portalItem)return;const f=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.p)(o),y=S(u,o,a);if(p?.contentAddressed&&"json"!==y.type)return void a.messages?.push(new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`,{content:y}));const g=p?.contentAddressed&&"json"===y.type?(0,_MD5_js__WEBPACK_IMPORTED_MODULE_1__.createMD5Hash)(y.jsonString):f?.filename??(0,_uuid_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)(),v=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.join)(p?.prefix??f?.prefix,g),j=`${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(y)}`;if(p?.contentAddressed&&a.resources&&"json"===y.type){const t=a.resources.toKeep.find((({resource:t})=>t.path===j))??a.resources.toAdd.find((({resource:t})=>t.path===j));if(t)return void(l[d]=t.resource.itemRelativeUrl)}const U=a.portalItem.resourceFromPath(j);(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isBlobProtocol)(o)&&a.resources&&a.resources.pendingOperations.push((0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.blobUrlToBlob)(o).then((t=>{U.path=`${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)({type:"blob",blob:t})}`,l[d]=U.itemRelativeUrl})).catch((()=>{})));const w=p?.compress??!1;a.resources&&b({...e,resource:U,content:y,compress:w,updates:a.resources.toAdd}),l[d]=U.itemRelativeUrl}function N(t){const{context:r,targetUrl:e,params:o,value:s,dest:n,targetPropertyName:i}=t;if(!r.portalItem)return;const c=r.portalItem.resourceFromPath(e),u=S(s,e,r),a=(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(u),l=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.getPathExtension)(c.path),d=o?.compress??!1;a===l?(r.resources&&b({...t,resource:c,content:u,compress:d,updates:r.resources.toUpdate}),n[i]=e):I(t)}function P({context:t,targetUrl:r,dest:e,targetPropertyName:o}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),e[o]=r)}function b({object:t,propertyName:r,updates:e,resource:o,content:s,compress:n}){const i=e=>{O(t,r,e)};e.push({resource:o,content:s,compress:n,finish:i})}function S(t,r,e){return"string"==typeof t?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(t.toJSON(e))}}function x(t){return null==t?null:"string"==typeof t?t:t.url}function O(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}


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

/***/ "./node_modules/@arcgis/core/core/accessorSupport/originUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateOrigins: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiOriginJSONSupportUtils.js */ "./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__.isMultiOriginJSONMixin)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


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

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IDENTITY: function() { return /* binding */ r; },
/* harmony export */   clone: function() { return /* binding */ t; },
/* harmony export */   create: function() { return /* binding */ e; },
/* harmony export */   fromValues: function() { return /* binding */ n; },
/* harmony export */   q: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3]]}function n(e,t,n,r){return[e,t,n,r]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: function() { return /* binding */ Y; },
/* harmony export */   calculateW: function() { return /* binding */ k; },
/* harmony export */   conjugate: function() { return /* binding */ O; },
/* harmony export */   copy: function() { return /* binding */ W; },
/* harmony export */   dot: function() { return /* binding */ B; },
/* harmony export */   equals: function() { return /* binding */ Q; },
/* harmony export */   exactEquals: function() { return /* binding */ N; },
/* harmony export */   fromEuler: function() { return /* binding */ T; },
/* harmony export */   fromMat3: function() { return /* binding */ S; },
/* harmony export */   getAxisAngle: function() { return /* binding */ v; },
/* harmony export */   identity: function() { return /* binding */ I; },
/* harmony export */   invert: function() { return /* binding */ L; },
/* harmony export */   len: function() { return /* binding */ F; },
/* harmony export */   length: function() { return /* binding */ D; },
/* harmony export */   lerp: function() { return /* binding */ C; },
/* harmony export */   mul: function() { return /* binding */ Z; },
/* harmony export */   multiply: function() { return /* binding */ x; },
/* harmony export */   normalize: function() { return /* binding */ K; },
/* harmony export */   q: function() { return /* binding */ rt; },
/* harmony export */   random: function() { return /* binding */ E; },
/* harmony export */   rotateX: function() { return /* binding */ y; },
/* harmony export */   rotateY: function() { return /* binding */ A; },
/* harmony export */   rotateZ: function() { return /* binding */ _; },
/* harmony export */   rotationTo: function() { return /* binding */ R; },
/* harmony export */   scale: function() { return /* binding */ w; },
/* harmony export */   set: function() { return /* binding */ X; },
/* harmony export */   setAxes: function() { return /* binding */ ot; },
/* harmony export */   setAxisAngle: function() { return /* binding */ b; },
/* harmony export */   slerp: function() { return /* binding */ z; },
/* harmony export */   sqlerp: function() { return /* binding */ tt; },
/* harmony export */   sqrLen: function() { return /* binding */ J; },
/* harmony export */   squaredLength: function() { return /* binding */ H; },
/* harmony export */   str: function() { return /* binding */ G; }
/* harmony export */ });
/* harmony import */ var _factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function I(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function b(t,n,s){s*=.5;const o=Math.sin(s);return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=Math.cos(s),t}function v(t,n){const s=2*Math.acos(n[3]),o=Math.sin(s/2);return o>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.getEpsilon)()?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),s}function x(t,n,s){const o=n[0],a=n[1],r=n[2],e=n[3],c=s[0],i=s[1],u=s[2],h=s[3];return t[0]=o*h+e*c+a*u-r*i,t[1]=a*h+e*i+r*c-o*u,t[2]=r*h+e*u+o*i-a*c,t[3]=e*h-o*c-a*i-r*u,t}function y(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+e*c,t[1]=a*i+r*c,t[2]=r*i-a*c,t[3]=e*i-o*c,t}function A(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i-r*c,t[1]=a*i+e*c,t[2]=r*i+o*c,t[3]=e*i-a*c,t}function _(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+a*c,t[1]=a*i-o*c,t[2]=r*i+e*c,t[3]=e*i-r*c,t}function k(t,n){const s=n[0],o=n[1],a=n[2];return t[0]=s,t[1]=o,t[2]=a,t[3]=Math.sqrt(Math.abs(1-s*s-o*o-a*a)),t}function z(t,n,s,o){const r=n[0],e=n[1],c=n[2],i=n[3];let u,h,M,f,l,m=s[0],p=s[1],q=s[2],j=s[3];return h=r*m+e*p+c*q+i*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.getEpsilon)()?(u=Math.acos(h),M=Math.sin(u),f=Math.sin((1-o)*u)/M,l=Math.sin(o*u)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*i+l*j,t}function E(t){const n=_common_js__WEBPACK_IMPORTED_MODULE_3__.RANDOM,s=n(),o=n(),a=n(),e=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=e*Math.sin(2*Math.PI*o),t[1]=e*Math.cos(2*Math.PI*o),t[2]=c*Math.sin(2*Math.PI*a),t[3]=c*Math.cos(2*Math.PI*a),t}function L(t,n){const s=n[0],o=n[1],a=n[2],r=n[3],e=s*s+o*o+a*a+r*r,c=e?1/e:0;return t[0]=-s*c,t[1]=-o*c,t[2]=-a*c,t[3]=r*c,t}function O(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function S(t,n){const s=n[0]+n[4]+n[8];let o;if(s>0)o=Math.sqrt(s+1),t[3]=.5*o,o=.5/o,t[0]=(n[5]-n[7])*o,t[1]=(n[6]-n[2])*o,t[2]=(n[1]-n[3])*o;else{let s=0;n[4]>n[0]&&(s=1),n[8]>n[3*s+s]&&(s=2);const a=(s+1)%3,r=(s+2)%3;o=Math.sqrt(n[3*s+s]-n[3*a+a]-n[3*r+r]+1),t[s]=.5*o,o=.5/o,t[3]=(n[3*a+r]-n[3*r+a])*o,t[a]=(n[3*a+s]+n[3*s+a])*o,t[r]=(n[3*r+s]+n[3*s+r])*o}return t}function T(t,n,s,o){const a=.5*Math.PI/180;n*=a,s*=a,o*=a;const r=Math.sin(n),e=Math.cos(n),c=Math.sin(s),i=Math.cos(s),u=Math.sin(o),h=Math.cos(o);return t[0]=r*i*h-e*c*u,t[1]=e*c*h+r*i*u,t[2]=e*i*u-r*c*h,t[3]=e*i*h+r*c*u,t}function G(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const W=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.c,X=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.s,Y=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.g,Z=x,w=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.d,B=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.h,C=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.l,D=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.j,F=D,H=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.b,J=H,K=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.n,N=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.a,Q=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.e;function R(t,n,s){const o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)(n,s);return o<-.999999?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(U,V,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.G)(U)<1e-6&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(U,$,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),b(t,U,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(U,n,s),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+o,K(t,t))}const U=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),V=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(1,0,0),$=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(0,1,0);function tt(t,n,s,o,a,r){return z(nt,n,a,r),z(st,s,o,r),z(t,nt,st,2*r*(1-r)),t}const nt=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),st=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function ot(t,n,s,o){const a=at;return a[0]=s[0],a[3]=s[1],a[6]=s[2],a[1]=o[0],a[4]=o[1],a[7]=o[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],K(t,S(t,a))}const at=(0,_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:Y,calculateW:k,conjugate:O,copy:W,dot:B,equals:Q,exactEquals:N,fromEuler:T,fromMat3:S,getAxisAngle:v,identity:I,invert:L,len:F,length:D,lerp:C,mul:Z,multiply:x,normalize:K,random:E,rotateX:y,rotateY:A,rotateZ:_,rotationTo:R,scale:w,set:X,setAxes:ot,setAxisAngle:b,slerp:z,sqlerp:tt,sqrLen:J,squaredLength:H,str:G},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMultiOriginJSONMixin: function() { return /* binding */ i; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


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

/***/ "./node_modules/@arcgis/core/layers/VoxelLayer.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VoxelLayer.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PopupTemplate.js */ "./node_modules/@arcgis/core/PopupTemplate.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/APIKeyMixin.js */ "./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "./node_modules/@arcgis/core/layers/mixins/ArcGISService.js");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/SceneService.js */ "./node_modules/@arcgis/core/layers/mixins/SceneService.js");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/Field.js */ "./node_modules/@arcgis/core/layers/support/Field.js");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/FieldsIndex.js */ "./node_modules/@arcgis/core/layers/support/FieldsIndex.js");
/* harmony import */ var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/TimeInfo.js */ "./node_modules/@arcgis/core/layers/support/TimeInfo.js");
/* harmony import */ var _voxel_VoxelSection_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./voxel/VoxelSection.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelSection.js");
/* harmony import */ var _voxel_VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./voxel/VoxelSimpleShading.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelSimpleShading.js");
/* harmony import */ var _voxel_VoxelVariable_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./voxel/VoxelVariable.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelVariable.js");
/* harmony import */ var _voxel_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./voxel/VoxelVariableStyle.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelVariableStyle.js");
/* harmony import */ var _voxel_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./voxel/VoxelVolume.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelVolume.js");
/* harmony import */ var _voxel_VoxelVolumeIndex_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./voxel/VoxelVolumeIndex.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelVolumeIndex.js");
/* harmony import */ var _voxel_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./voxel/VoxelVolumeStyle.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelVolumeStyle.js");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../support/popupUtils.js */ "./node_modules/@arcgis/core/support/popupUtils.js");
/* harmony import */ var _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../time/TimeExtent.js */ "./node_modules/@arcgis/core/time/TimeExtent.js");
/* harmony import */ var _time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../time/TimeInterval.js */ "./node_modules/@arcgis/core/time/TimeInterval.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let z=class extends((0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_23__.SceneService)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_18__.ArcGISService)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_21__.PortalLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_22__.ScaleRangeLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.MultiOriginJSONMixin)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_19__.CustomParametersMixin)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_17__.APIKeyMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_16__["default"]))))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new _voxel_VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_30__["default"],this.opacity=1,this.variables=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.volumes=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_35__["default"])),this.variableStyles=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_32__["default"])),this.sections=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelSection_js__WEBPACK_IMPORTED_MODULE_29__["default"]))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_24__.sanitizeUrl)(e,_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this)))}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,t){super.read(e,t),"service"===t?.origin&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const i of this.volumes)i.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,i){if(null!=e&&"object"==typeof e){const o=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(e,i);if(0===o.zmin&&0===o.zmax&&Array.isArray(t.volumes)){const e=_voxel_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_33__["default"].fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,i=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>i){const t=e;e=i,i=t}o.zmin=e,o.zmax=i}}}return o}return null}get fields(){const e=[new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const i of this.variables){const t=new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:i.name,alias:i.description,domain:null,editable:!1,length:128,type:"discrete"===i.renderingFormat.continuity?"string":"double"});e.push(t)}const t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(t);const i=new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(i)}if("xyt"!==t.volumeType){const t=new _support_Field_js__WEBPACK_IMPORTED_MODULE_26__["default"]({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(t)}}return e}get fieldsIndex(){return this.loaded?new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_27__["default"](this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.fields;return (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_36__.createPopupTemplate)({fields:t,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;t=null!=e?e:this.currentVariableId;if(!this.variableStyles||-1===t)return null;const i=this.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.variableStyles.at(i)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.at(i)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((({id:e})=>e===t.volumeId)):null}get timeInfo(){const e=this.getVolume(null);if("xyzt"!==e?.volumeType)return null;const t=e.timeStops;if(!t?.length)return null;const i=new _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_37__["default"]({start:t[0],end:t.at(-1)});return new _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"]({fullTimeExtent:i,stops:t})}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}getColorForContinuousDataValue(e,t,i){const o=this.getVariable(e);if(null==o||"continuous"!==o.renderingFormat?.continuity)return null;if(!this.variableStyles)return null;const r=this.variableStyles.findIndex((t=>t.variableId===e));if(r<0)return null;const s=this.variableStyles.at(r);return s?.transferFunction?s.transferFunction.getColorForContinuousDataValue(t,i):null}getSections(){const e=[];for(const t of this.sections)e.push(new _voxel_VoxelSection_js__WEBPACK_IMPORTED_MODULE_29__["default"]({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const i=this._getVariable(t);if(null!=i){const o=t.clone();o.isosurfaces.length>4&&(o.isosurfaces=o.isosurfaces.slice(0,3),_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of o.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(o.variableId,e.value,!1);null===t||t.equals(e.color)||(e.color=t)}if("continuous"===i.renderingFormat.continuity)(null===o.transferFunction||o.transferFunction.colorStops.length<2)&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==o.transferFunction&&(Array.isArray(o.transferFunction.stretchRange)&&2===o.transferFunction.stretchRange.length||(_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),o.transferFunction.stretchRange=[0,1],o.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===t.uniqueValues.length)_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(o)}else _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const i=this._getVolumeFromVolumeId(t.volumeId);if(null!=i){const o=t.clone();for(const e of o.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of o.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(o)}else _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const i of this.variables)if(i.id===t)return i;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,i){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;const o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_14__.fromValues)(e.normal[0],e.normal[1],e.normal[2]);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_13__.n)(o,o);const r=1e-6;return!(Math.abs(o[0])+Math.abs(o[1])+Math.abs(o[2])<r)&&(e.normal[0]=o[0],e.normal[1]=o[1],e.normal[2]=o[2],!0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["Voxel"]})],z.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.legendEnabled)],z.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{write:!0}})],z.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_25__.url)],z.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelSection_js__WEBPACK_IMPORTED_MODULE_29__["default"]),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],z.prototype,"sections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__.Integer,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],z.prototype,"currentVariableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelVolumeStyle_js__WEBPACK_IMPORTED_MODULE_35__["default"]),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],z.prototype,"volumeStyles",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],z.prototype,"renderMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelVariableStyle_js__WEBPACK_IMPORTED_MODULE_32__["default"]),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],z.prototype,"variableStyles",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],z.prototype,"enableSlices",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],z.prototype,"enableSections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],z.prototype,"enableDynamicSections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],z.prototype,"enableIsosurfaces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_voxel_VoxelSimpleShading_js__WEBPACK_IMPORTED_MODULE_30__["default"],json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],z.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["show","hide"]})],z.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],z.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelVariable_js__WEBPACK_IMPORTED_MODULE_31__["default"])})],z.prototype,"variables",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"].ofType(_voxel_VoxelVolume_js__WEBPACK_IMPORTED_MODULE_33__["default"])})],z.prototype,"volumes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_voxel_VoxelVolumeIndex_js__WEBPACK_IMPORTED_MODULE_34__["default"]})],z.prototype,"index",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],z.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],z.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1},readOnly:!0})],z.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{name:"serviceVersion"}})],z.prototype,"version",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("service","version")],z.prototype,"readVersion",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"]})],z.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("service","fullExtent",["fullExtent"])],z.prototype,"readFullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,clonable:!1,json:{read:!1}})],z.prototype,"fields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],z.prototype,"fieldsIndex",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,i){t[i]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],z.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{name:"popupInfo",write:!0}})],z.prototype,"popupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{read:!1}})],z.prototype,"defaultPopupTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"],readOnly:!0,json:{read:!1}})],z.prototype,"timeInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_37__["default"],json:{read:!1}})],z.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_time_TimeInterval_js__WEBPACK_IMPORTED_MODULE_38__["default"],json:{read:!1}})],z.prototype,"timeOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],z.prototype,"useViewTime",void 0),z=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.VoxelLayer")],z);const _=z;


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

/***/ "./node_modules/@arcgis/core/layers/mixins/SceneService.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/SceneService.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveOperationType: function() { return /* binding */ V; },
/* harmony export */   SceneService: function() { return /* binding */ R; },
/* harmony export */   sceneServiceItemType: function() { return /* binding */ P; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/originUtils.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/HeightModelInfo.js */ "./node_modules/@arcgis/core/geometry/HeightModelInfo.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/commonProperties.js */ "./node_modules/@arcgis/core/layers/support/commonProperties.js");
/* harmony import */ var _support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/I3SIndexInfo.js */ "./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js");
/* harmony import */ var _support_schemaValidatorLoader_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../support/schemaValidatorLoader.js */ "./node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../portal/support/jsonContext.js */ "./node_modules/@arcgis/core/portal/support/jsonContext.js");
/* harmony import */ var _webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../webdoc/support/resourceUtils.js */ "./node_modules/@arcgis/core/webdoc/support/resourceUtils.js");
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../webdoc/support/saveUtils.js */ "./node_modules/@arcgis/core/webdoc/support/saveUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const R=R=>{let C=class extends R{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.debounce)((async(e,t,r)=>{switch(e){case V.SAVE:return this._save(t);case V.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return U(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:U(t)}:e;return _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(o,r)}const o=t.store,i=U(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<L))?null:new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"]({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__.titleFromUrlAndName)(this.url,t.name):t.name;let o=t.name;if(!o&&this.url){const e=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__.parse)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__.cleanTitle)(o)}set url(e){if(null==e)return void this._set("url",e);const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__.sanitizeUrlWithLayerId)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_16__.writeUrlWithLayerId)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.urlToObject)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,_support_I3SIndexInfo_js__WEBPACK_IMPORTED_MODULE_18__.fetchIndexInfo)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<L||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<L)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});r.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const o={...K,...t};let i=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_21__["default"].from(e);if(!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");i.id&&(i=i.clone(),i.id=null);const s=i.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_20__["default"].getDefault();await this._ensureLoadBeforeSave(),i.type=P,i.portal=s;const a=(0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_22__.createForItemWrite)(i,"portal-item",!0),n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),this.url&&(i.url=this.url),i.title||(i.title=this.title),T(i,o,O.newItem),await s.signIn(),await s.user.addItem({item:i,folder:o?.folder,data:n}),await (0,_webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_23__.saveResources)(this.resourceReferences,a),this.portalItem=i,(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_12__.updateOrigins)(a),a.portalItem=i,i}async _save(e){const t={...K,...e};if(!this.portalItem)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==P)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${P}"`);await this._ensureLoadBeforeSave();const o=(0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_22__.createForItemWrite)(this.portalItem,"portal-item",!0),i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),T(this.portalItem,t,O.existingItem),await (0,_webdoc_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_23__.updateItemWithResources)(this.portalItem,i,this.resourceReferences,o),(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_12__.updateOrigins)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const s=i?.validationOptions;(0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_24__.evaluateWriteErrors)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:s?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=s?.enabled,n=(0,_support_schemaValidatorLoader_js__WEBPACK_IMPORTED_MODULE_19__.getLoader)();if(a&&n){const t=(await n()).validate(e,i.portalItemLayerType);if(!t.length)return;const a=`Layer item did not validate:\n${t.join("\n")}`;if(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error(`_validateAgainstJSONSchema(): ${a}`),"throw"===s.failPolicy){const e=t.map((e=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice:schema-validation",e)));throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__.id)],C.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"]})],C.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"]})],C.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readFullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],C.prototype,"heightModelInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],C.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],C.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],C.prototype,"version",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("version",["store.version"])],C.prototype,"readVersion",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{read:{source:"copyrightText"}}})],C.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{read:!1}})],C.prototype,"sublayerTitleMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String})],C.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("portal-item","title")],C.prototype,"readTitlePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("service","title",["name"])],C.prototype,"readTitleService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],C.prototype,"layerId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_17__.url)],C.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("url")],C.prototype,"writeUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],C.prototype,"parsedUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],C.prototype,"store",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],C.prototype,"rootNode",void 0),C=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.mixins.SceneService")],C),C},L=-1e38;function U(e){if(null!=e.spatialReference)return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"](o):null}function T(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const P="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var V;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(V||(V={}));


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

/***/ "./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchIndexInfo: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i,l){let d=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(g){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,g),d=g}}if(!n)return null;const p=n?.split("/").pop(),c=`${r}/nodes/`,u=c+p;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(u,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,urlPrefix:c}}catch(g){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:g,url:u})}}


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

/***/ "./node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoader: function() { return /* binding */ u; },
/* harmony export */   registerLoader: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/NCTimeParser.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/NCTimeParser.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseTimeDimensionUnit: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(r){const e=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(r);if(null==e)return{didParse:!1};const[,t,s,a,d,n,i,u,N,o,c,f,p]=e;let $="seconds";const P=t.charAt(0).toLowerCase();"d"===P?$="days":"h"===P?$="hours":"m"===P&&($="minutes");const m=parseInt(s,10);if(Number.isNaN(m))return{didParse:!1};const b=parseInt(a,10);if(Number.isNaN(b)||b<1||b>12)return{didParse:!1};const I=parseInt(d,10);if(Number.isNaN(I)||I<1||I>31)return{didParse:!1};if(2===b){const r=m%4==0&&(m%100!=0||m%400==0);if(r&&I>29||!r&&I>28)return{didParse:!1}}else if((4===b||6===b||9===b||11===b)&&I>30)return{didParse:!1};const S=parseInt(n,10);if(Number.isNaN(S)||S<0||S>23)return{didParse:!1};const l=parseInt(i,10);if(Number.isNaN(l)||l<0||l>59)return{didParse:!1};const h=parseInt(u,10);if(Number.isNaN(h)||h<0||h>59)return{didParse:!1};let w=1,x=0,y=0;if(c&&(w="-"===c?-1:1),f){if(x=parseInt(f,10),Number.isNaN(x)||x<0)return{didParse:!1};if(0!==x){const r=w*x;if(r<-12||r>14)return{didParse:!1}}}if(p&&(y=parseInt(p,10),Number.isNaN(y)||y<0||y>59))return{didParse:!1};const T=`${m}`.padStart(4,"0"),Z=`${b}`.padStart(2,"0"),A=`${I}`.padStart(2,"0"),C=`${S}`.padStart(2,"0"),D=`${l}`.padStart(2,"0"),L=`${h}`.padStart(2,"0");let g="Z";0===x&&0===y||(g=""+(w>0?"+":"-"),g+=`${x}`.padStart(2,"0"),g+=":",g+=`${y}`.padStart(2,"0"));return{didParse:!0,unit:$,reference:new Date(`${T}-${Z}-${A}T${C}:${D}:${L}.000${g}`)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelColorStop.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelColorStop.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(){super(...arguments),this.color=null,this.position=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],write:{enabled:!0,isRequired:!0}}})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"position",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.voxel.VoxelColorStop")],c);const l=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelDimension.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelDimension.js ***!
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
/* harmony import */ var _VoxelIrregularSpacing_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelIrregularSpacing.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelIrregularSpacing.js");
/* harmony import */ var _VoxelRegularSpacing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelRegularSpacing.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelRegularSpacing.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelIrregularSpacing_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],a.prototype,"irregularSpacing",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],a.prototype,"isPositiveUp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],a.prototype,"isWrappedDateLine",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],a.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],a.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],a.prototype,"quantity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelRegularSpacing_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],a.prototype,"regularSpacing",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],a.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],a.prototype,"unit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{read:!1}})],a.prototype,"isRegular",null),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelDimension")],a);const p=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelDynamicSection.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelDynamicSection.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Cyclical.js */ "./node_modules/@arcgis/core/core/Cyclical.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voxelPlaneUtils.js */ "./node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(o){super(o),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeOrientationTiltFromNormal)(this.normal);return _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(o),0,!0)}set orientation(o){const t=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeNormalFromOrientationTilt)(o,this.tilt);this._set("normal",t),this._set("orientation",o)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeOrientationTiltFromNormal)(this.normal);return _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(t),0,!0)}set tilt(o){const t=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeNormalFromOrientationTilt)(this.orientation,o);this._set("normal",t),this._set("tilt",o)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{default:!0,write:!0}})],m.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)((o=>_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(o),0,!0)))],m.prototype,"orientation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)((o=>_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(o),0,!0)))],m.prototype,"tilt",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:!0}})],m.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:!0}})],m.prototype,"point",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.voxel.VoxelDynamicSection")],m);const c=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelFormat.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelFormat.js ***!
  \***************************************************************/
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
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["discrete","continuous"],json:{write:!0}})],s.prototype,"continuity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],s.prototype,"hasNoData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"noData",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"type",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelFormat")],s);const p=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelIrregularSpacing.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelIrregularSpacing.js ***!
  \*************************************************************************/
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
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.values=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:!0}})],t.prototype,"values",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelIrregularSpacing")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelIsosurface.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelIsosurface.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(){super(...arguments),this.color=_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],write:{enabled:!0,isRequired:!0}}})],l.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],l.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{default:!1,write:!0}})],l.prototype,"colorLocked",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.voxel.VoxelIsosurface")],l);const a=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelOpacityStop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelOpacityStop.js ***!
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
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(){super(...arguments),this.opacity=1,this.position=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],p.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"position",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.voxel.VoxelOpacityStop")],p);const i=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelRangeFilter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelRangeFilter.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
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
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(){super(...arguments),this.enabled=!1,this.range=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Boolean,json:{default:!1,write:!0}})],p.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],json:{write:!0}})],p.prototype,"range",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.voxel.VoxelRangeFilter")],p);const a=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelRegularSpacing.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelRegularSpacing.js ***!
  \***********************************************************************/
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
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.scale=1,this.offset=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],t.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],t.prototype,"offset",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelRegularSpacing")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelSection.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelSection.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Cyclical.js */ "./node_modules/@arcgis/core/core/Cyclical.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/persistable.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js");
/* harmony import */ var _voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voxelPlaneUtils.js */ "./node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js");
/* harmony import */ var _VoxelSlice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VoxelSlice.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelSlice.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let d=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeOrientationTiltFromNormal)(this.normal);return _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureNumber)(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeOrientationTiltFromNormal)(this.normal);return _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureNumber)(r),0,!0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{default:!0,write:!0}})],d.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{origins:{service:{read:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_12__.r}},write:{enabled:!0,isRequired:!0}}}),(0,_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_9__.persistable)({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],d.prototype,"href",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d.prototype,"orientation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d.prototype,"tilt",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"point",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"sizeInPixel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_11__["default"]],json:{write:!0}})],d.prototype,"slices",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{default:0,write:!0}})],d.prototype,"timeId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"variableId",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.voxel.VoxelSection")],d);const u=d;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelSimpleShading.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelSimpleShading.js ***!
  \**********************************************************************/
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
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"diffuseFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t.prototype,"specularFactor",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelSimpleShading")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelSlice.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelSlice.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Cyclical.js */ "./node_modules/@arcgis/core/core/Cyclical.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voxelPlaneUtils.js */ "./node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let m=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(o){super(o),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeOrientationTiltFromNormal)(this.normal);return _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(o),0,!0)}set orientation(o){const t=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeNormalFromOrientationTilt)(o,this.tilt);this._set("normal",t),this._set("orientation",o)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeOrientationTiltFromNormal)(this.normal);return _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(t),0,!0)}set tilt(o){const t=(0,_voxelPlaneUtils_js__WEBPACK_IMPORTED_MODULE_10__.computeNormalFromOrientationTilt)(this.orientation,o);this._set("normal",t),this._set("tilt",o)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:!0}})],m.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],m.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)((o=>_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(o),0,!0)))],m.prototype,"orientation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)((o=>_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_2__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__.ensureNumber)(o),0,!0)))],m.prototype,"tilt",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:!0}})],m.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{write:!0}})],m.prototype,"point",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.voxel.VoxelSlice")],m);const c=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelTransferFunctionStyle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelTransferFunctionStyle.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./VoxelColorStop.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelColorStop.js");
/* harmony import */ var _VoxelOpacityStop_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./VoxelOpacityStop.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelOpacityStop.js");
/* harmony import */ var _VoxelRangeFilter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VoxelRangeFilter.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelRangeFilter.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var u;!function(o){o[o.Color=1]="Color",o[o.Alpha=2]="Alpha",o[o.Both=3]="Both"}(u||(u={}));let y=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.JSONSupport)){constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_12__["default"])),this.opacityStops=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_VoxelOpacityStop_js__WEBPACK_IMPORTED_MODULE_13__["default"]))}set colorStops(o){this._set("colorStops",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.referenceSetter)(o,this._get("colorStops"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_12__["default"])))}set opacityStops(o){this._set("opacityStops",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.referenceSetter)(o,this._get("opacityStops"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_VoxelOpacityStop_js__WEBPACK_IMPORTED_MODULE_13__["default"])))}getPreviousNext(o,t,r){let e=o;for(;--e>0&&t[e].type!==r&&t[e].type!==u.Both;);let s=o;const i=t.length;for(;++s<i&&t[s].type!==r&&t[s].type!==u.Both;);return[e,s]}get rasterizedTransferFunction(){const o=[];if(this.colorStops.length<2)return o;const r=[],e=[],s=1e-5;for(const t of this.colorStops){if(!t.color)return o;e.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:u.Color})}if(0===this.opacityStops.length)for(const t of e)r.push({color:t.color,position:t.position});else{for(const t of this.opacityStops){const o=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.clamp)(t.position,0,1),r=Math.round(255*(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.clamp)(1-t.opacity,0,1));let i=!1;for(const t of e)if(t.type===u.Color&&Math.abs(t.position-o)<s){t.color.a=r,t.type=u.Both,i=!0;break}i||e.push({color:{r:0,g:0,b:0,a:r},position:t.position,type:u.Alpha})}e.sort(((o,t)=>o.position<t.position?-1:1));const o=e.length;for(let t=0;t<o;++t){const r=e[t];if(r.type!==u.Both)if(r.type===u.Color){const[s,i]=this.getPreviousNext(t,e,u.Alpha);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position);r.color.a=Math.round((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.lerp)(e[s].color.a,e[i].color.a,o))}else r.color.a=-1!==s?e[s].color.a:e[i].color.a}else{const[s,i]=this.getPreviousNext(t,e,u.Color);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position),t=e[s].color,p=e[i].color;S.forEach((e=>{r.color[e]=Math.round((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.lerp)(t[e],p[e],o))}))}else-1!==s?S.forEach((o=>{r.color[o]=e[s].color[o]})):S.forEach((o=>{r.color[o]=e[i].color[o]}))}}for(const t of e)r.push({color:t.color,position:t.position})}r[0].position=0,r[r.length-1].position=1;let i=0,l=1;for(let c=0;c<this._colorMapSize;++c){const e=c/this._colorMapSize;for(;e>r[l].position;)i=l++;const s=(e-r[i].position)/(r[l].position-r[i].position),a=r[i].color,h=r[l].color,f=new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"];S.forEach((o=>{f[o]=Math.round((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.lerp)(a[o],h[o],s))})),f.a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.clamp)(1-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.lerp)(a.a,h.a,s)/255,0,1),o.push(f)}return o}getColorForContinuousDataValue(o,t){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let e=this.stretchRange[0],s=this.stretchRange[1];if(e>s){const o=e;e=s,s=o}o=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.clamp)(o,e,s);const i=r[Math.round((o-e)/(s-e)*(this._colorMapSize-1))].clone();return t||(i.a=1),i}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["linear","nearest"],json:{write:!0}})],y.prototype,"interpolation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"stretchRange",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_VoxelColorStop_js__WEBPACK_IMPORTED_MODULE_12__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],y.prototype,"colorStops",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_VoxelOpacityStop_js__WEBPACK_IMPORTED_MODULE_13__["default"]),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],y.prototype,"opacityStops",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_VoxelRangeFilter_js__WEBPACK_IMPORTED_MODULE_14__["default"],json:{write:!0}})],y.prototype,"rangeFilter",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]],clonable:!1,json:{read:!1}})],y.prototype,"rasterizedTransferFunction",null),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.layers.voxel.VoxelTransferFunctionStyle")],y);const g=y,S=["r","g","b"];


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelUniqueValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelUniqueValue.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_2__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(){super(...arguments),this.color=_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],write:{enabled:!0,isRequired:!0}}})],a.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{default:!0,write:!0}})],a.prototype,"enabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],a.prototype,"label",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.layers.voxel.VoxelUniqueValue")],a);const l=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelVariable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelVariable.js ***!
  \*****************************************************************/
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
/* harmony import */ var _VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelFormat.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelFormat.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],s.prototype,"originalFormat",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_VoxelFormat_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"renderingFormat",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"unit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],s.prototype,"volumeId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],s.prototype,"type",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelVariable")],s);const p=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelVariableStyle.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelVariableStyle.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoxelIsosurface.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelIsosurface.js");
/* harmony import */ var _VoxelTransferFunctionStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelTransferFunctionStyle.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelTransferFunctionStyle.js");
/* harmony import */ var _VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelUniqueValue.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelUniqueValue.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let c=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"])),this.isosurfaces=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_7__["default"]))}clone(){return new p({variableId:this.variableId,label:this.label,transferFunction:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.transferFunction),uniqueValues:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.uniqueValues),isosurfaces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.isosurfaces)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"variableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_VoxelTransferFunctionStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],c.prototype,"transferFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelUniqueValue_js__WEBPACK_IMPORTED_MODULE_9__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],c.prototype,"uniqueValues",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelIsosurface_js__WEBPACK_IMPORTED_MODULE_7__["default"]),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&s}}}}})],c.prototype,"isosurfaces",void 0),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelVariableStyle")],c);const f=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelVolume.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelVolume.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ S; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/timeUtils.js */ "./node_modules/@arcgis/core/core/timeUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _NCTimeParser_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NCTimeParser.js */ "./node_modules/@arcgis/core/layers/voxel/NCTimeParser.js");
/* harmony import */ var _VoxelDimension_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VoxelDimension.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelDimension.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"].WGS84}get zDimension(){if(!this.dimensions)return-1;if(!Array.isArray(this.dimensions))return-1;if(4!==this.dimensions.length)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)t[n]<2?t[n]=1:t[n]-=1;return s.isRegular&&!s.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(i[1]-i[0])/t[1],(r[1]-r[0])/t[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const e=this.dimensions[3];if(i="time"===e.quantity,i&&null!==e.unit){i=(0,_NCTimeParser_js__WEBPACK_IMPORTED_MODULE_13__.parseTimeDimensionUnit)(e.unit).didParse}}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if("xyzt"!==this.volumeType)return[];const e=this.dimensions[3],i=[],s=(0,_NCTimeParser_js__WEBPACK_IMPORTED_MODULE_13__.parseTimeDimensionUnit)(e.unit);if(s.didParse)if(e.isRegular){const t=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let o=0;o<e.size;++o){const e=t+n*o;i.push((0,_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__.offsetDateUTC)(s.reference,e,s.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let t=0;t<e.irregularSpacing.values.length;++t){const n=e.irregularSpacing.values[t];i.push((0,_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_3__.offsetDateUTC)(s.reference,n,s.unit))}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if("xyt"===this.volumeType)return _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_12__.equals)(this.spatialReference,e.spatialReference))return _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.fromValues)(e.x,e.y,e.z??0);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.d)(i,i,this.originInLayerSpace3D),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.E)(i,i,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray(r.irregularSpacing?.values)&&r.irregularSpacing.values.length>1){const s=e.z??0,t=r.irregularSpacing.values,n=r.isPositiveUp?1:-1,o=t.reduce(((e,i)=>Math.abs(n*i-s)<Math.abs(n*e-s)?i:e));for(let e=0;e<t.length;++e)if(t[e]===o){i[2]=e;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]({x:0,y:0,spatialReference:this.spatialReference});const i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.fromArray)(e);if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.C)(i,i,this.voxelSizeInLayerSpaceSigned),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.g)(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_VoxelDimension_js__WEBPACK_IMPORTED_MODULE_14__["default"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"dimensions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{read:{enabled:!1}}})],f.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:!1}})],f.prototype,"zDimension",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Boolean],json:{read:!1}})],f.prototype,"isValid",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{read:!1}})],f.prototype,"originInLayerSpace3D",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{read:!1}})],f.prototype,"voxelSizeInLayerSpaceSigned",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],f.prototype,"volumeType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Number],json:{read:!1}})],f.prototype,"sizeInVoxels",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[Date],json:{read:!1,write:!1}})],f.prototype,"timeStops",null),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.voxel.VoxelVolume")],f);const S=f;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelVolumeIndex.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelVolumeIndex.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
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
var t;let s=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.voxel.VoxelVolumeIndex")],s);const d=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/VoxelVolumeStyle.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/VoxelVolumeStyle.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VoxelDynamicSection.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelDynamicSection.js");
/* harmony import */ var _VoxelSlice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./VoxelSlice.js */ "./node_modules/@arcgis/core/layers/voxel/VoxelSlice.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let m=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_9__["default"])),this.dynamicSections=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_8__["default"]))}set slices(e){this._set("slices",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("slices"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_9__["default"])))}set dynamicSections(e){this._set("dynamicSections",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("dynamicSections"),_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_8__["default"])))}clone(){return new p({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.slices),dynamicSections:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(this.dynamicSections)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__.Integer,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"volumeId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{default:1,write:!0}})],m.prototype,"verticalExaggeration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],m.prototype,"exaggerationMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:Number,json:{default:0,write:!0}})],m.prototype,"verticalOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelSlice_js__WEBPACK_IMPORTED_MODULE_9__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],m.prototype,"slices",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_VoxelDynamicSection_js__WEBPACK_IMPORTED_MODULE_8__["default"]),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],m.prototype,"dynamicSections",null),m=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.voxel.VoxelVolumeStyle")],m);const d=m;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/voxel/voxelPlaneUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeNormalFromOrientationTilt: function() { return /* binding */ g; },
/* harmony export */   computeOrientationTiltFromNormal: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/common.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),l=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),u=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),p=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(0,0,1),j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(0,1,0),x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(1,0,0);function b(r){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(f,r),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(f,f);const a=Math.atan2(f[1],f[0]),s=(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_0__.setAxisAngle)((0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),h,-a);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.w)(f,f,s);const c=-1*Math.atan2(f[2],f[0]);return[(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_3__.toDegree)(a)+270,(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_3__.toDegree)(c)+90]}function g(o,a){return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_0__.setAxisAngle)(u,h,(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_3__.toRadian)(o-270)),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_0__.setAxisAngle)(p,j,(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_3__.toRadian)(a-90)),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_0__.multiply)(l,u,p),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(f,x),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.w)(f,f,l),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(f,f),[f[0],f[1],f[2]]}


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

/***/ "./node_modules/@arcgis/core/portal/support/resourceUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResources: function() { return /* binding */ a; },
/* harmony export */   contentToBlob: function() { return /* binding */ p; },
/* harmony export */   fetchResources: function() { return /* binding */ o; },
/* harmony export */   getSiblingOfSameType: function() { return /* binding */ f; },
/* harmony export */   getSiblingOfSameTypeI: function() { return /* binding */ m; },
/* harmony export */   removeAllResources: function() { return /* binding */ c; },
/* harmony export */   removeResource: function() { return /* binding */ n; },
/* harmony export */   splitPrefixFileNameAndExtension: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function o(e,t={},s){await e.load(s);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,i={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},u=await e.portal.request(o,i);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s,o,a){const n=new Map;for(const{resource:r,content:i,compress:u,access:p}of s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[e,s]=l(r.path),a=`${e}/${u??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:u,access:p,files:[]});n.get(a).files.push({fileName:s,content:i})}await e.load(a);const c=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:l,files:i}of n.values()){const s=25;for(let o=0;o<i.length;o+=s){const n=i.slice(o,o+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(c,{method:"post",body:u,signal:a?.signal})}}}async function n(e,s,o){if(!s.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s.path},signal:o?.signal}),s.portalItem=null}async function c(e,t){await e.load(t);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,r]=u(e),[s,o]=l(t);return[s,o,r]}function u(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.getPathExtension)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(s,t+o))}function m(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(s,t+o))}


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

/***/ "./node_modules/@arcgis/core/webdoc/support/resourceUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/support/resourceUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   saveResources: function() { return /* binding */ p; },
/* harmony export */   updateItemWithResources: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../portal/support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function p(e,t,r){const o=await u(e,t,r);await h(o,t,r)}async function n(e,t,r,o,s){const a=await u(r,o,s);await e.update({data:t}),await h(a,o,s)}async function u(o,p,n){if(!p?.resources)return;const u=p.portalItem===o.portalItem?new Set(o.paths):new Set;o.paths.length=0,o.portalItem=p.portalItem;const h=new Set(p.resources.toKeep.map((e=>e.resource.path))),i=new Set,m=[];h.forEach((e=>{u.delete(e),o.paths.push(e)}));const f=[],l=[],w=[];for(const e of p.resources.toUpdate)if(u.delete(e.resource.path),h.has(e.resource.path)||i.has(e.resource.path)){const{resource:t,content:r,finish:p}=e,n=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__.getSiblingOfSameTypeI)(t,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_2__.generateUUID)());o.paths.push(n.path),f.push({resource:n,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__.contentToBlob)(r),compress:e.compress}),p&&w.push((()=>p(n)))}else{o.paths.push(e.resource.path),l.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__.contentToBlob)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource))),i.add(e.resource.path)}for(const e of p.resources.toAdd)if(o.paths.push(e.resource.path),u.has(e.resource.path))u.delete(e.resource.path);else{f.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__.contentToBlob)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource)))}if(f.length||l.length){const{addOrUpdateResources:e}=await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../portal/support/resourceUtils.js */ "./node_modules/@arcgis/core/portal/support/resourceUtils.js"));await e(p.portalItem,f,"add",n),await e(p.portalItem,l,"update",n)}if(w.forEach((e=>e())),0===m.length)return u;const d=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.allSettledErrors)(m);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(n),d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("save:resources","Failed to save one or more resources",{errors:d});return u}async function h(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.eachAlways)(s)}


/***/ }),

/***/ "./node_modules/@arcgis/core/webdoc/support/saveUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/support/saveUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   beforeSave: function() { return /* binding */ r; },
/* harmony export */   evaluateWriteErrors: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function r(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function t(r,t,n){let s=(r.messages??[]).filter((({type:e})=>"error"===e)).map((({name:r,message:o,details:t})=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](r,o,t)));if(r.blockedRelativeUrls&&(s=s.concat(r.blockedRelativeUrls.map((r=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("url:unsupported",`Relative url '${r}' is not supported`))))),n){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:t}=n;e&&(s=s.filter((({name:e})=>!(o.has(e)||r.includes(e))))),t&&(s=s.filter((e=>"web-document-write:property-required"!==e.name)))}if(s.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s})}


/***/ })

}]);
//# sourceMappingURL=VoxelLayer.js.map