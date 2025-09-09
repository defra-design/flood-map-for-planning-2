"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["GroupLayer"],{

/***/ "./node_modules/@arcgis/core/core/CollectionFlattener.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/CollectionFlattener.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorSupport/trackingUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends _Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles((0,_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__.autorun)((()=>this._refresh()),_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.sync))}destroy(){this.getCollections=null}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let o=0;for(const e of t)null!=e&&(o=this._processCollection(o,e));this.splice(o,this.length)}_createNewInstance(t){return new _Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"](t)}_processCollection(t,o){if(!o)return t;const e=this.itemFilterFunction??(t=>!!t);for(const s of o)if(s){if(e(s)){const o=this.indexOf(s,t);o>=0?o!==t&&this.reorder(s,t):this.add(s,t),++t}if(this.getChildrenFunction){const o=this.getChildrenFunction(s);if(Array.isArray(o))for(const e of o)t=this._processCollection(t,e);else t=this._processCollection(t,o)}}return t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],l.prototype,"getCollections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],l.prototype,"getChildrenFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],l.prototype,"itemFilterFunction",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__.subclass)("esri.core.CollectionFlattener")],l);const n=l;


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

/***/ "./node_modules/@arcgis/core/core/loadAll.js":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/core/loadAll.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadAll: function() { return /* binding */ t; },
/* harmony export */   loadAllChildren: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _Loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(o,l){return await o.load(),a(o,l)}async function a(t,a){const s=[],c=(...o)=>{for(const l of o)null!=l&&(Array.isArray(l)?c(...l):_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].isCollection(l)?l.forEach((o=>c(o))):_Loadable_js__WEBPACK_IMPORTED_MODULE_2__["default"].isLoadable(l)&&s.push(l))};a(c);let f=null;if(await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__.map)(s,(async o=>{const n=await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__.result)(i(o)?o.loadAll():o.load());!1!==n.ok||f||(f=n)})),f)throw f.error;return t}function i(o){return"loadAll"in o&&"function"==typeof o.loadAll}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/GroupLayer.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/GroupLayer.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ "./node_modules/@arcgis/core/core/CollectionFlattener.js");
/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/loadAll.js */ "./node_modules/@arcgis/core/core/loadAll.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/utils.js */ "./node_modules/@arcgis/core/core/accessorSupport/utils.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/accessorSupport/PropertyOrigin.js */ "./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "./node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/lazyLayerLoader.js */ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../portal/PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _support_collectionUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../support/collectionUtils.js */ "./node_modules/@arcgis/core/support/collectionUtils.js");
/* harmony import */ var _support_LayersMixin_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../support/LayersMixin.js */ "./node_modules/@arcgis/core/support/LayersMixin.js");
/* harmony import */ var _support_TablesMixin_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../support/TablesMixin.js */ "./node_modules/@arcgis/core/support/TablesMixin.js");
/* harmony import */ var _support_tagSymbols_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../support/tagSymbols.js */ "./node_modules/@arcgis/core/support/tagSymbols.js");
/* harmony import */ var _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../webdoc/interfaces.js */ "./node_modules/@arcgis/core/webdoc/interfaces.js");
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../webdoc/support/saveUtils.js */ "./node_modules/@arcgis/core/webdoc/support/saveUtils.js");
/* harmony import */ var _webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../webdoc/support/writeUtils.js */ "./node_modules/@arcgis/core/webdoc/support/writeUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let V=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_16__.BlendLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_17__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_18__.PortalLayer)((0,_support_TablesMixin_js__WEBPACK_IMPORTED_MODULE_24__.TablesMixin)((0,_support_LayersMixin_js__WEBPACK_IMPORTED_MODULE_23__.LayersMixin)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_15__["default"])))))))){constructor(e){super(e),this.allLayers=new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_1__["default"]({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,_support_collectionUtils_js__WEBPACK_IMPORTED_MODULE_22__.createFlattenedTablesCollection)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.debounce)((async(e,i,t)=>{const{save:r,saveAs:s}=await __webpack_require__.e(/*! import() | save-groupLayerUtils */ "save-groupLayerUtils").then(__webpack_require__.bind(__webpack_require__, /*! ./save/groupLayerUtils.js */ "./node_modules/@arcgis/core/layers/save/groupLayerUtils.js"));switch(e){case _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_26__.SaveOperationType.SAVE:return r(this,i);case _webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_26__.SaveOperationType.SAVE_AS:return s(this,t,i)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&_support_tagSymbols_js__WEBPACK_IMPORTED_MODULE_25__.WebSceneTag in e}),(e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),i))}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this.visible),this._onVisibilityChange.bind(this),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.sync)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__.OriginId.USER}_writeLayers(e,i,t,r){const s=[];if(!e)return s;e.forEach((e=>{const i=(0,_webdoc_support_writeUtils_js__WEBPACK_IMPORTED_MODULE_28__.getLayerJSON)(e,r.webmap?r.webmap.getLayerJSONFromResourceInfo(e):null,r);i?.layerType&&s.push(i)})),i.layers=s}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:r,layerType:s}=i;if("GroupLayer"===s&&r)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_21__["default"]({id:r,portal:t?.portal})}writePortalItem(e,i){e?.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return (0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_27__.beforeSave)(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_20__.layerLookupMap},e).catch((e=>{if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAbortError)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_2__.loadAll)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(_webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_26__.SaveOperationType.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(_webdoc_interfaces_js__WEBPACK_IMPORTED_MODULE_26__.SaveOperationType.SAVE_AS,i,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>e.visible),(i=>this._onChildVisibilityChange(e,i)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.sync),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((i=>{i!==e&&(i.visible=!1)}))}_enforceVisibility(e,i){if(!(0,_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_10__.getProperties)(this).initialized)return;const t=this.layers;let r=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!r&&(r=t.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach((e=>{e.visible=i}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((i=>{i.visible=e}))}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],V.prototype,"allTables",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!0,write:!0}})],V.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],V.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],V.prototype,"sourceIsPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1,write:{ignoreOrigin:!0}}})],V.prototype,"layers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__.writer)("layers")],V.prototype,"_writeLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["GroupLayer"]})],V.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:"Group Layer"===e?.type&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],V.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("web-map","portalItem",["itemId"])],V.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__.writer)("web-map","portalItem",{itemId:{type:String}})],V.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],V.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1},readOnly:!0,value:"group"})],V.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{"inherited"!==e&&(i[t]=e)}}}}})],V.prototype,"visibilityMode",null),V=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.GroupLayer")],V);const C=V;


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

/***/ "./node_modules/@arcgis/core/support/LayersMixin.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/LayersMixin.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayersMixin: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_Layer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layers/Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function d(e,r,t){let s,o;if(e)for(let a=0,i=e.length;a<i;a++){if(s=e.at(a),s?.[r]===t)return s;if("group"===s?.type&&(o=d(s.layers,r,t),o))return o}}const l=l=>{let y=class extends l{constructor(...e){super(...e),this.layers=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"];const t=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e)},o=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},a=e=>{e.parent=null,this.layerRemoved(e)};this.addHandles([this.layers.on("before-add",(e=>{if(e.item===this)return e.preventDefault(),void _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error("#add()","Cannot add layer to itself.");t(e.item)})),this.layers.on("after-add",(e=>o(e.item))),this.layers.on("after-remove",(e=>a(e.item)))])}destroy(){const e=this.layers.toArray();for(const r of e)r.destroy();this.layers.destroy()}set layers(e){this._set("layers",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("layers")))}add(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof _layers_Layer_js__WEBPACK_IMPORTED_MODULE_9__["default"]){const s=e;s.parent===this?this.reorder(s,r):t.add(s,r)}else (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isPromiseLike)(e)?e.then((e=>{this.destroyed||this.add(e,r)})):_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,r){const t=this.layers;let s=t.getNextIndex(r);e.slice().forEach((e=>{e.parent!==this?(t.add(e,s),s+=1):this.reorder(e,s)}))}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],y.prototype,"layers",null),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.support.LayersMixin")],y),y};


/***/ }),

/***/ "./node_modules/@arcgis/core/support/TablesMixin.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/TablesMixin.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TablesMixin: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(t,e,r){if(t)for(let s=0,o=t.length;s<o;s++){const o=t.at(s);if(o[e]===r)return o;if("group"===o?.type){const t=a(o.tables,e,r);if(t)return t}}}const n=n=>{let l=class extends n{constructor(...t){super(...t),this.tables=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"],this.addHandles([this.tables.on("after-add",(t=>{const e=t.item;e.parent&&e.parent!==this&&"tables"in e.parent&&e.parent.tables.remove(e),e.parent=this,"feature"!==e.type&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`)})),this.tables.on("after-remove",(t=>{t.item.parent=null}))])}destroy(){const t=this.tables.toArray();for(const e of t)e.destroy();this.tables.destroy()}set tables(t){this._set("tables",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(t,this._get("tables")))}findTableById(t){return a(this.tables,"id",t)}findTableByUid(t){return a(this.tables,"uid",t)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],l.prototype,"tables",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.support.TablesMixin")],l),l};


/***/ }),

/***/ "./node_modules/@arcgis/core/support/collectionUtils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/collectionUtils.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFlattenedTablesCollection: function() { return /* binding */ t; },
/* harmony export */   destroyMap: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ "./node_modules/@arcgis/core/core/CollectionFlattener.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){return new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_0__["default"]({getCollections:()=>[t.tables,t.layers],getChildrenFunction:e=>{const t=[];return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return!!t&&"tables"in t&&t.tables.includes(e)}})}function n(e){for(const t of e.values())t?.destroy();e.clear()}


/***/ }),

/***/ "./node_modules/@arcgis/core/support/tagSymbols.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/tagSymbols.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSceneTag: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=Symbol("WebScene");


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


/***/ }),

/***/ "./node_modules/@arcgis/core/webdoc/support/writeUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/webdoc/support/writeUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableRestrictedWriting: function() { return /* binding */ s; },
/* harmony export */   enableRestrictedWriting: function() { return /* binding */ a; },
/* harmony export */   getLayerJSON: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/extensions/serializableProperty/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js");
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),l=new Set(["catalog","csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","knowledge-graph","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function a(e){o.delete(e),l.delete(e)}function s(e){o.add(e),l.add(e)}function d(e){return"basemap"===e.layerContainerType?o:"operational-layers"===e.layerContainerType?l:null}function p(e,t){if(t.restrictedWebMapWriting){const n=d(t);return null==n||n.has(e.type)&&!(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.isFeatureCollectionLayer)(e)}return!0}function u(e,t){if(t)if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.isFeatureCollectionLayer)(e)){const r=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_2__.getDeepValue)("featureCollection.layers",t),i=r?.[0]?.layerDefinition;i&&c(e,i)}else"group"!==e.type&&c(e,t)}function c(e,t){"maxScale"in e&&(t.maxScale=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__.numberToJSON)(e.maxScale)??void 0),"minScale"in e&&(t.minScale=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__.numberToJSON)(e.minScale)??void 0)}function m(e,t){if(u(e,t),t&&(t.id=e.id,"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__.numberToJSON)(e.opacity)??void 0,t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type))if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.isFeatureCollectionLayer)(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}function f(n,r,o){if(!n.persistenceEnabled)return null;if(!("write"in n)||!n.write)return o?.messages&&o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("layer:unsupported",`Layers (${n.title}, ${n.id}) of type '${n.declaredClass}' cannot be persisted`,{layer:n})),null;if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.isFeatureCollectionLayer)(n)&&!n.isTable)r=n.resourceInfo;else if(p(n,o)){const e={};return n.write(e,o)?e:null}return null!=r&&m(n,r=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(r)),r}


/***/ })

}]);
//# sourceMappingURL=GroupLayer.js.map