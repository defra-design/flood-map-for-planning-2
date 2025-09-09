"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["featureSources-FeatureCollectionSnappingSource"],{

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

/***/ "./node_modules/@arcgis/core/core/memoize.js":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/core/memoize.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoize: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){let r,e,i=[],u=!1;function f(...f){return u&&r===this&&n(f,i)||(e=t.apply(this,f),r=this,i=f,u=!0),e}return f}function n(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexSnappingCandidate: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/constraints.js */ "./node_modules/@arcgis/core/views/interactive/sketch/constraints.js");
/* harmony import */ var _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/FeatureSnappingCandidate.js");
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hints/PointSnappingHint.js */ "./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__.FeatureSnappingCandidate{constructor(n){super({...n,constraint:new _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__.PointConstraint(n.targetPoint)})}get hints(){return[new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__.PointSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureCollectionSnappingSource: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_memoize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/memoize.js */ "./node_modules/@arcgis/core/core/memoize.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../support/elevationInfoUtils.js */ "./node_modules/@arcgis/core/support/elevationInfoUtils.js");
/* harmony import */ var _snappingUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../snappingUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js");
/* harmony import */ var _queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./queryEngineUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js");
/* harmony import */ var _snappingCandidateElevationAlignment_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./snappingCandidateElevationAlignment.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js");
/* harmony import */ var _snappingCandidateElevationFilter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./snappingCandidateElevationFilter.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js");
/* harmony import */ var _symbologySnappingCandidates_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbologySnappingCandidates.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let f=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=null!=e&&"3d"===e.type;if(!i||"subtype-group"===t.type)return (0,_snappingCandidateElevationAlignment_js__WEBPACK_IMPORTED_MODULE_13__.getSnappingCandidateElevationAligner)();const n=async(i,n)=>(await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.whenOrAbort)(e.whenLayerView(t),n)).elevationAlignPointsInFeatures(i,n);return (0,_snappingCandidateElevationAlignment_js__WEBPACK_IMPORTED_MODULE_13__.getSnappingCandidateElevationAligner)(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){const{view:e}=this,t=null!=e&&"3d"===e.type&&"subtype-group"!==this.layerSource.layer.type;return (0,_snappingCandidateElevationFilter_js__WEBPACK_IMPORTED_MODULE_14__.getSnappingCandidateElevationFilter)(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return null!=e&&"3d"===e.type&&"subtype-group"!==t.type?(0,_symbologySnappingCandidates_js__WEBPACK_IMPORTED_MODULE_15__.getSymbologySnappingCandidatesFetcher)(this._symbologySnappingSupported,(async(i,o)=>{const r=await e.whenLayerView(t);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(o),r.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},o)})):(0,_symbologySnappingCandidates_js__WEBPACK_IMPORTED_MODULE_15__.getSymbologySnappingCandidatesFetcher)()}get _layerView3D(){const{view:e}=this;if(null==e||"2d"===e.type)return null;const{layer:t}=this.layerSource;return e.allLayerViews.find((e=>e.layer===t))}get _symbologySnappingSupported(){return null!=this._layerView3D&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;null!=e&&"3d"===e.type&&"subtype-group"!==t.type&&this.addHandles([e.elevationProvider.on("elevation-change",(({context:e})=>{const{elevationInfo:i}=t;(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_10__.elevationContextAffectsAlignment)(e,i)&&this._snappingElevationAligner.notifyElevationSourceChange()})),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.watch)((()=>t.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.initial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.watch)((()=>null!=this._layerView3D?this._layerView3D.layer?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.initial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_4__.on)((()=>this._layerView3D?.layer),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=(0,_core_memoize_js__WEBPACK_IMPORTED_MODULE_2__.memoize)(_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_12__.makeGetGroundElevation)}refresh(){}async fetchCandidates(e,t){const{layer:i}=this.layerSource,o=i.source;if(!o?.querySnapping)return[];const r=(0,_snappingUtils_js__WEBPACK_IMPORTED_MODULE_11__.makeFilter)(i),a=(0,_snappingUtils_js__WEBPACK_IMPORTED_MODULE_11__.makeSnappingQuery)(e,this.view?.type??"2d",r),s=await o.querySnapping(a,{signal:t});(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(t);const p=e.coordinateHelper.spatialReference,l=await this._snappingElevationAligner.alignCandidates(s.candidates,p,t);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(t);const y=await this._symbologySnappingFetcher.fetch(l,t);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(t);const m=0===y.length?l:[...l,...y],h=this._snappingElevationFilter.filter(a,m),d=this._memoizedMakeGetGroundElevation(this.view,p);return h.map((e=>(0,_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_12__.convertSnappingCandidate)(e,d)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],f.prototype,"layerSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],f.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],f.prototype,"_snappingElevationAligner",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],f.prototype,"_snappingElevationFilter",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],f.prototype,"_symbologySnappingFetcher",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],f.prototype,"_layerView3D",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],f.prototype,"_symbologySnappingSupported",null),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],f);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSnappingCandidate: function() { return /* binding */ o; },
/* harmony export */   makeGetGroundElevation: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/normalizedPoint.js */ "./node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js");
/* harmony import */ var _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidates/DrapedEdgeSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js");
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidates/EdgeSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js");
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidates/VertexSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a({x:e,y:n,z:d}){return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(e,n,d??0)}function o(t,o){switch(t.type){case"edge":return t.draped?new _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__.DrapedEdgeSnappingCandidate({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.markAsTarget)(a(t.target)),objectId:t.objectId,getGroundElevation:o}):new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__.EdgeSnappingCandidate({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.markAsTarget)(a(t.target)),objectId:t.objectId,isDraped:!1});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__.VertexSnappingCandidate({targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.markAsTarget)(a(t.target)),objectId:t.objectId,isDraped:!1})}}function i(e,t){return null!=e&&"3d"===e.type?(n,d)=>e.elevationProvider.getElevation(n,d,0,t,"ground"):()=>null}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSnappingCandidateElevationAligner: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/LRUCache.js */ "./node_modules/@arcgis/core/core/LRUCache.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../symbols/support/unitConversionUtils.js */ "./node_modules/@arcgis/core/symbols/support/unitConversionUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(e=!1,t){if(e){const{elevationInfo:e,alignPointsInFeatures:s}=t;return new c(e,s)}return new a}class a{async alignCandidates(e,t,s){return e}notifyElevationSourceChange(){}}const r=1024;class c{constructor(t,s){this._elevationInfo=t,this._alignPointsInFeatures=s,this._alignmentsCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_1__.LRUCache(r),this._cacheVersion=0}async alignCandidates(e,t,s){const n=this._elevationInfo;return null==n||"absolute-height"!==n.mode||n.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,s):(l(e,t,n),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,n,o){const i=new Map;for(const s of e)(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(i,s.objectId,d).push(s);const[a,r,c]=this._prepareQuery(i,n),h=await this._alignPointsInFeatures(a,o);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(o);if(c!==this._cacheVersion)return this._alignComputedElevationCandidates(e,n,o);this._applyCacheAndResponse(a,h,r);const{drapedObjectIds:u,failedObjectIds:l}=h,p=[];for(const t of e){const{objectId:e}=t;u.has(e)&&"edge"===t.type&&(t.draped=!0),l.has(e)||p.push(t)}return p}_prepareQuery(e,t){const s=[],n=[];for(const[o,i]of e){const e=[];for(const t of i)this._addToQueriesOrCachedResult(o,t.target,e,n),"edge"===t.type&&(this._addToQueriesOrCachedResult(o,t.start,e,n),this._addToQueriesOrCachedResult(o,t.end,e,n));0!==e.length&&s.push({objectId:o,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:s},n,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,s,n){const o=u(e,t),i=this._alignmentsCache.get(o);null==i?s.push(t):n.push(new h(t,i))}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:s,failedObjectIds:n},o){for(const r of o)r.apply();let i=0;const a=this._alignmentsCache;for(const{objectId:r,points:c}of e.pointsInFeatures){if(n.has(r)){i+=c.length;continue}const e=!s.has(r);for(const s of c){const n=u(r,s),o=t[i++];s.z=o,e&&a.put(n,o,1)}}}}class h{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function u(e,{x:t,y:s,z:n,spatialReference:o}){return`${e}-${t}-${s}-${n??0}}-wkid:${o?.wkid}`}function l(e,t,s){const{offset:i,unit:a}=s;if(null==i)return;const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__.getMetersPerVerticalUnitForSR)(t),c=i*((0,_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerUnit)(a??"meters")/r);for(const n of e)switch(n.type){case"edge":n.start.z+=c,n.end.z+=c;continue;case"vertex":n.target.z+=c;continue}}function d(){return[]}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSnappingCandidateElevationFilter: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{filter(t,n){return n}notifyElevationSourceChange(){}}class n{filter(t,n){const{point:r,distance:c}=t,{z:i}=r;if(!(null!=i))return n;if(0===n.length)return n;const o=s(c),u=this._updateCandidatesTo3D(n,r,o).filter(e);return u.sort(a),u}_updateCandidatesTo3D(t,n,e){for(const r of t)switch(r.type){case"edge":c(r,n,e);continue;case"vertex":o(r,n,e);continue}return t}}function e(t){return t.distance<=1}function r(e=!1){return e?new n:new t}function c(t,n,{x:e,y:r,z:c}){const{start:o,end:s,target:a}=t;t.draped||i(a,n,o,s);const u=(n.x-a.x)/e,d=(n.y-a.y)/r,f=(n.z-a.z)/c;t.distance=Math.sqrt(u*u+d*d+f*f)}function i(t,n,e,r){const c=r.x-e.x,i=r.y-e.y,o=r.z-e.z,s=c*c+i*i+o*o,a=(n.x-e.x)*c+(n.y-e.y)*i+o*(n.z-e.z),u=Math.min(1,Math.max(0,a/s)),d=e.x+c*u,f=e.y+i*u,x=e.z+o*u;t.x=d,t.y=f,t.z=x}function o(t,n,{x:e,y:r,z:c}){const{target:i}=t,o=(n.x-i.x)/e,s=(n.y-i.y)/r,a=(n.z-i.z)/c,u=Math.sqrt(o*o+s*s+a*a);t.distance=u}function s(t){return"number"==typeof t?{x:t,y:t,z:t}:t}function a(t,n){return t.distance-n.distance}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbologySnappingCandidatesFetcher: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/LRUCache.js */ "./node_modules/@arcgis/core/core/LRUCache.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/string.js */ "./node_modules/@arcgis/core/core/string.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(t=!1,e){return t?new i(e):new c}class c{async fetch(){return[]}notifySymbologyChange(){}}const r=1024;class i{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__.LRUCache(r),this._cacheVersion=0}async fetch(e,o){if(0===e.length)return[];const n=[],c=[],r=this._candidatesCache;for(const s of e){const e=a(s),o=r.get(e);if(o)for(const s of o)c.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(s));else n.push(s),r.put(e,[],1)}if(0===n.length)return c;const i=this._cacheVersion,{candidates:h,sourceCandidateIndices:d}=await this._getSymbologyCandidates(n,o);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(o);if(i!==this._cacheVersion)return this.fetch(e,o);const f=[],{length:g}=h;for(let s=0;s<g;++s){const e=h[s],o=a(n[d[s]]),c=r.get(o);c.push(e),r.put(o,c,c.length),f.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(e))}return c.concat(f)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function a(t){switch(t.type){case"vertex":{const{objectId:e,target:s}=t,n=`${e}-vertex-${s.x}-${s.y}-${s.z??0}`;return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_4__.numericHash)(n).toString()}case"edge":{const{objectId:e,start:s,end:n}=t,c=`${e}-edge-${s.x}-${s.y}-${s.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_4__.numericHash)(c).toString()}default:return""}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointSnappingHint: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SnappingHint.js */ "./node_modules/@arcgis/core/views/interactive/snapping/hints/SnappingHint.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__.SnappingHint{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.point,s.point)}}


/***/ })

}]);
//# sourceMappingURL=featureSources-FeatureCollectionSnappingSource.js.map