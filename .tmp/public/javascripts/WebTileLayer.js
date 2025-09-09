"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["WebTileLayer"],{

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

/***/ "./node_modules/@arcgis/core/layers/WebTileLayer.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/WebTileLayer.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ I; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/string.js */ "./node_modules/@arcgis/core/core/string.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "./node_modules/@arcgis/core/layers/mixins/BlendLayer.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/PortalLayer.js");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js");
/* harmony import */ var _support_imageBitmapUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/imageBitmapUtils.js */ "./node_modules/@arcgis/core/layers/support/imageBitmapUtils.js");
/* harmony import */ var _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/LOD.js */ "./node_modules/@arcgis/core/layers/support/LOD.js");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/WMTSLayerInfo.js */ "./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var L;let U=L=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__.BlendLayer)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__.RefreshableLayer)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__.ScaleRangeLayer)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__.OperationalLayer)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__.PortalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_14__["default"]))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__["default"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__["default"].WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__["default"].WebMercator,this.subDomains=null,this.tileInfo=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_22__["default"]({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_26__["default"]({x:-20037508.342787,y:20037508.342787,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__["default"].WebMercator}),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__["default"].WebMercator,lods:[new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:0,scale:591657527.591555,resolution:156543.033928}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:8,scale:2311162.217155,resolution:611.49622628138}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:9,scale:1155581.108577,resolution:305.748113140558}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:10,scale:577790.554289,resolution:152.874056570411}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:11,scale:288895.277144,resolution:76.4370282850732}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:12,scale:144447.638572,resolution:38.2185141425366}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:13,scale:72223.819286,resolution:19.1092570712683}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:14,scale:36111.909643,resolution:9.55462853563415}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:15,scale:18055.954822,resolution:4.77731426794937}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:16,scale:9027.977411,resolution:2.38865713397468}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:17,scale:4513.988705,resolution:1.19432856685505}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:18,scale:2256.994353,resolution:.597164283559817}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:19,scale:1128.497176,resolution:.298582141647617}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:20,scale:564.248588,resolution:.14929107082380833}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:21,scale:282.124294,resolution:.07464553541190416}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:22,scale:141.062147,resolution:.03732276770595208}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__["default"]({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.Url(this.urlTemplate);!(!!this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__["default"].fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.Url(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/",a=l.authority;if(a?.includes("{subDomain}")){if(r&&r.length>0&&a.split(".").length>1)for(const s of r)e.push(o+a.replaceAll(/\{subDomain\}/gi,s)+"/")}else e.push(n);return e.map(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.ensureTrailingSlash)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.Url(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.slice(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isProtocolRelative)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.normalize)(e)),t.templateUrl=e}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i,n).then((e=>e.data))}async fetchImageBitmapTile(e,r,l,o={}){const{signal:s}=o;if(this.fetchTile!==L.prototype.fetchTile){const t=await this.fetchTile(e,r,l,o);return (0,_support_imageBitmapUtils_js__WEBPACK_IMPORTED_MODULE_20__.createTileBitmap)(t,e,r,l,s)}const i=this.getTileUrl(e,r,l),n={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i,n);return (0,_support_imageBitmapUtils_js__WEBPACK_IMPORTED_MODULE_20__.createTileBitmap)(a,e,r,l,s)}getTileUrl(e,t,r){const{levelValues:l,tileServers:s,urlPath:i}=this;if(!l||!s||!i)return"";const n=l[e];return s[t%s.length]+(0,_core_string_js__WEBPACK_IMPORTED_MODULE_5__.replace)(i,{level:n,z:n,col:r,x:r,row:t,y:t})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,value:"",json:{write:!0}})],U.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__["default"],json:{write:!0},nonNullable:!0})],U.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["show","hide"]})],U.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!0,write:!0}})],U.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],U.prototype,"levelValues",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],U.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:["WebTiledLayer"],value:"WebTiledLayer"})],U.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0,json:{read:!1,write:!1}})],U.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__["default"]})],U.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("spatialReference",["spatialReference","fullExtent.spatialReference"])],U.prototype,"readSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:[String],json:{write:!0}})],U.prototype,"subDomains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_22__["default"],json:{write:!0}})],U.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],U.prototype,"tileServers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1}})],U.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],U.prototype,"urlPath",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],U.prototype,"urlTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__.reader)("urlTemplate",["urlTemplate","templateUrl"])],U.prototype,"readUrlTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__.writer)("urlTemplate",{templateUrl:{type:String}})],U.prototype,"writeUrlTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_23__.WMTSLayerInfo,json:{write:!0}})],U.prototype,"wmtsInfo",void 0),U=L=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__.subclass)("esri.layers.WebTileLayer")],U);const I=U;


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

/***/ "./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WMTSLayerInfo: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r)}clone(){return new i({customLayerParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.customLayerParameters),customParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.WMTSLayerInfo")],p);


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

/***/ "./node_modules/@arcgis/core/layers/support/imageBitmapUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/imageBitmapUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBitmap: function() { return /* binding */ t; },
/* harmony export */   createTileBitmap: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(t,o,a){let c;try{c=await createImageBitmap(t)}catch(l){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",`Unable to load ${o}`,{url:o,error:l})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(a),c}async function o(t,o,a,c,l){let n;try{n=await createImageBitmap(t)}catch(i){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("request:server",`Unable to load tile ${o}/${a}/${c}`,{error:i,level:o,row:a,col:c})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(l),n}


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
//# sourceMappingURL=WebTileLayer.js.map