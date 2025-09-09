"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["layers-GroupLayerView2D"],{

/***/ "./node_modules/@arcgis/core/layers/effects/EffectView.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/effects/EffectView.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EffectView: function() { return /* binding */ a; },
/* harmony export */   canInterpolateEffectStops: function() { return /* binding */ u; },
/* harmony export */   convertEffectToStops: function() { return /* binding */ h; },
/* harmony export */   normalizeEffectStops: function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parser.js */ "./node_modules/@arcgis/core/layers/effects/parser.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/layers/effects/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const l=-1;let a=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this.duration=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("mapview-transitions-duration"),this.effects=[]}set effect(t){if(this._get("effect")!==(t=t||"")){this._set("effect",t);try{this._transitionTo(h(t))}catch(e){this._transitionTo([]),_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).warn("Invalid Effect",{effect:t,error:e})}}}get final(){return this._final}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(t){this._updateForScale(t)}get transitioning(){return null!==this._to}canTransitionTo(t){try{return this.scale>0&&u(this._current,h(t),this.scale)}catch{return!1}}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}endTransition(){this._applyTimeTransition(this.duration)}_transitionTo(t){this.scale>0&&u(this._current,t,this.scale)?(this._final=t,this._to=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(t),_(this._current,this._to,this.scale),this._from=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._set("effects",this._current[0]?(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this._current[0].effects):[])}_applyTimeTransition(t){if(!(this._to&&this._from&&this._current&&this._final))return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let s=0;s<this._current.length;s++){const t=this._current[s],r=this._from[s],i=this._to[s];t.scale=p(r.scale,i.scale,e);for(let s=0;s<t.effects.length;s++){const n=t.effects[s],c=r.effects[s],o=i.effects[s];n.interpolate(c,o,e)}}1===e&&(this._current=this._final,this._set("effects",this._current[0]?(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this._current[0].effects):[]),this._from=this._to=this._final=null)}_updateForScale(t){if(this._set("scale",t),0===this._current.length)return;const e=this._current,s=this._current.length-1;let r,i,n=1;if(1===e.length||t>=e[0].scale)i=r=e[0].effects;else if(t<=e[s].scale)i=r=e[s].effects;else for(let c=0;c<s;c++){const s=e[c],o=e[c+1];if(s.scale>=t&&o.scale<=t){n=(t-s.scale)/(o.scale-s.scale),r=s.effects,i=o.effects;break}}for(let c=0;c<this.effects.length;c++){this.effects[c].interpolate(r[c],i[c],n)}}};function h(t){const e=(0,_parser_js__WEBPACK_IMPORTED_MODULE_7__.parse)(t)||[];return m(e)?[{scale:l,effects:e}]:e}function u(t,e,s){if(!t[0]?.effects||!e[0]?.effects)return!0;return!((t[0]?.scale===l||e[0]?.scale===l)&&(t.length>1||e.length>1)&&s<=0)&&(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.canInterpolateEffects)(t[0].effects,e[0].effects)}function _(t,e,s){const r=t.length>e.length?t:e,i=t.length>e.length?e:t,n=i[i.length-1],c=n?.scale??s,o=n?.effects??[];for(let f=i.length;f<r.length;f++)i.push({scale:c,effects:[...o]});for(let a=0;a<r.length;a++)i[a].scale=i[a].scale===l?s:i[a].scale,r[a].scale=r[a].scale===l?s:r[a].scale,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.normalizeEffects)(i[a].effects,r[a].effects)}function p(t,e,s){return t+(e-t)*s}function m(t){const e=t[0];return!!e&&"type"in e}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],a.prototype,"_to",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],a.prototype,"duration",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({value:""})],a.prototype,"effect",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],a.prototype,"effects",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],a.prototype,"final",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],a.prototype,"hasEffects",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({value:0})],a.prototype,"scale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],a.prototype,"transitioning",null),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.effects.EffectView")],a);


/***/ }),

/***/ "./node_modules/@arcgis/core/linkChart/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/linkChart/utils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLinkChartView: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return null!=e&&"object"==typeof e&&"2d"===e.type&&"linkchart"===e.view2dType}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/Container.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Container.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/accessorSupport/tracking.js */ "./node_modules/@arcgis/core/core/accessorSupport/tracking.js");
/* harmony import */ var _core_accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/tracking/SimpleObservable.js */ "./node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleObservable.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f32.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f32.js");
/* harmony import */ var _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/effects/EffectView.js */ "./node_modules/@arcgis/core/layers/effects/EffectView.js");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayObject.js */ "./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__.DisplayObject{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new _core_accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__.SimpleObservable,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get children(){return (0,_core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__.trackAccess)(this._childrenObservable),this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_3__.EffectView,this.addTransitionable(this._effectView)),this._effectView.effect=e,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(e){this._highlightGradient=e,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some((e=>e.hasHighlight))}get hasLabels(){return this.children.some((e=>e.hasLabels))}get requiresDedicatedFBO(){return this.children.some((e=>"blendMode"in e&&e.blendMode&&"normal"!==e.blendMode))}get isReady(){return this.children.every((e=>e.isReady))}get sortFunction(){return this._sortFunction}set sortFunction(e){this._sortFunction=e,e&&(this._needsSort=!0)}doRender(e){const t=this.createRenderParams(e),{painter:i}=t;i.beforeRenderLayer(t,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(t),i.afterRenderLayer(t,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),e}contains(t){return (0,_core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__.trackAccess)(this._childrenObservable),this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,this._childrenObservable.notify(),t}beforeRender(e){super.beforeRender(e),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{displayViewScreenMat3:(0,_core_libs_gl_matrix_2_factories_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__.create)()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some((e=>e.transitioning))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/DisplayObject.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayObject: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _transitions_FadeTransition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitions/FadeTransition.js */ "./node_modules/@arcgis/core/views/2d/engine/transitions/FadeTransition.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){return this._fadeTransition?.computedOpacity??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return null!==this._fadeTransition}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new _transitions_FadeTransition_js__WEBPACK_IMPORTED_MODULE_2__.FadeTransition({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){return this._fadeTransition?.transitioning??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const i=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i?.trashDisplayObject(this)}get transforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??=[],this._transitionables.push(t),this.requestRender()}removeTransitionable(i){i.endTransition(),this._transitionables&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(this._transitionables,i),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&(this._fadeTransition?.computedVisible??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){return this._transitionables?.some((t=>t.transitioning))??!1}transitionStep(t,i){if(this._transitionables)for(const s of this._transitionables)s.transitionStep(t,i)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/engine/transitions/FadeTransition.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/transitions/FadeTransition.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeTransition: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let r=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,this._fadeOutResolver?.(),this._fadeOutResolver=null,this._fadeInResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)()),this._fadeOutResolver.promise}transitionStep(t,e){const i=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("mapview-transitions-duration"),s=i?1/i:0;if(0===s)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const o=t*s;this.computedOpacity=i>e?Math.max(e,i-o):Math.min(e,i+o),this.computedVisible=this.computedOpacity>0}}this.transitioning||(this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeOutResolver=this._fadeInResolver=null)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"computedOpacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"computedVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"visible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"transitioning",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"_fadeOutResolver",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],r.prototype,"_fadeInResolver",void 0),r=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.engine.transitions.FadeTransition")],r);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LayerView2D.js */ "./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js");
/* harmony import */ var _layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layers/GroupLayerView.js */ "./node_modules/@arcgis/core/views/layers/GroupLayerView.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_6__.LayerView2DMixin)(_layers_GroupLayerView_js__WEBPACK_IMPORTED_MODULE_7__["default"])){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))}};a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.views.2d.layers.GroupLayerView2D")],a);const o=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerView2DMixin: function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _linkChart_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../linkChart/utils.js */ "./node_modules/@arcgis/core/linkChart/utils.js");
/* harmony import */ var _engine_Container_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../engine/Container.js */ "./node_modules/@arcgis/core/views/2d/engine/Container.js");
/* harmony import */ var _support_util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/util.js */ "./node_modules/@arcgis/core/views/2d/layers/support/util.js");
/* harmony import */ var _support_HighlightGroup_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/HighlightGroup.js */ "./node_modules/@arcgis/core/views/2d/support/HighlightGroup.js");
/* harmony import */ var _support_highlightGroupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/highlightGroupUtils.js */ "./node_modules/@arcgis/core/views/2d/support/highlightGroupUtils.js");
/* harmony import */ var _support_HighlightOptions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/HighlightOptions.js */ "./node_modules/@arcgis/core/views/2d/support/HighlightOptions.js");
/* harmony import */ var _layers_support_ClipRect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layers/support/ClipRect.js */ "./node_modules/@arcgis/core/views/layers/support/ClipRect.js");
/* harmony import */ var _layers_support_Geometry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/support/Geometry.js */ "./node_modules/@arcgis/core/views/layers/support/Geometry.js");
/* harmony import */ var _layers_support_Path_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../layers/support/Path.js */ "./node_modules/@arcgis/core/views/layers/support/Path.js");
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../support/layerViewUtils.js */ "./node_modules/@arcgis/core/views/support/layerViewUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const S=_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType({key:"type",base:null,typeMap:{rect:_layers_support_ClipRect_js__WEBPACK_IMPORTED_MODULE_16__["default"],path:_layers_support_Path_js__WEBPACK_IMPORTED_MODULE_18__["default"],geometry:_layers_support_Geometry_js__WEBPACK_IMPORTED_MODULE_17__["default"]}}),b=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_support_HighlightGroup_js__WEBPACK_IMPORTED_MODULE_13__.HighlightGroup)),j=y=>{let v=class extends y{constructor(){super(...arguments),this.attached=!1,this.clips=new S,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new _engine_Container_js__WEBPACK_IMPORTED_MODULE_11__.Container),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this._mergedHighlights.items.map((e=>({name:e.name,options:{fillColor:e.options.color,haloColor:e.options.haloColor,fillOpacity:e.options.fillOpacity,haloOpacity:e.options.haloOpacity,haloWidth:e.options.haloWidth,haloBlur:e.options.haloBlur}})))),(()=>{this.container.highlightGradient=(0,_support_util_js__WEBPACK_IMPORTED_MODULE_12__.createOrReuseHighlightGradient)(this.container.highlightGradient,this._mergedHighlights.items)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this._mergedHighlights.items.map((e=>e.name))),(()=>{this._updateHighlights()})),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e,scaleRange:t})=>{const i=(0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_19__.isInEffectiveScaleRange)(t,e);i!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=i)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return (0,_support_highlightGroupUtils_js__WEBPACK_IMPORTED_MODULE_14__.getDefaultHighlightOptions)(this)}set highlightOptions(e){(0,_support_highlightGroupUtils_js__WEBPACK_IMPORTED_MODULE_14__.setDefaultHighlightOptions)(this,e)}get _mergedHighlights(){if(!this.view)return b;if(!this.highlights)return this.view.highlights;const e=this.view.highlights.clone();for(const t of this.highlights){const i=e.find((e=>e.name===t.name));i&&(i.options=t.options)}return e}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if((0,_linkChart_utils_js__WEBPACK_IMPORTED_MODULE_10__.isLinkChartView)(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}_getHighlightBits(e){e=new Set(e);let t=1,i=0;if(!this.view)return 0;const s=this._mergedHighlights;for(const{name:r}of s)e.delete(r)&&(i=t),t<<=1;for(const o of e)_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error("#highlights",`${o} was not found. Features in this group will not be highlighted.`);return i}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"attached",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:S,set(e){const t=(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(e,this._get("clips"),S);this._set("clips",t)}})],v.prototype,"clips",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"container",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_support_HighlightOptions_js__WEBPACK_IMPORTED_MODULE_15__["default"]})],v.prototype,"highlightOptions",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].ofType(_support_HighlightGroup_js__WEBPACK_IMPORTED_MODULE_13__.HighlightGroup)})],v.prototype,"highlights",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"_mergedHighlights",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"moving",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],v.prototype,"spatialReferenceSupported",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],v.prototype,"updateParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"updateRequested",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],v.prototype,"_visibleAtCurrentScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],v.prototype,"visibleAtCurrentScale",null),v=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.2d.layers.LayerView2D")],v),v};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/GroupLayerView.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/GroupLayerView.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _LayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerView.js */ "./node_modules/@arcgis/core/views/layers/LayerView.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let h=class extends _LayerView_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(i){super(i),this.type="group",this.layerViews=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"]}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach((e=>{e.visible=i}))}initialize(){this.addHandles([this.layerViews.on("change",(i=>this._layerViewsChangeHandler(i))),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.watch)((()=>this.layer?.visibilityMode),(()=>{this.layer&&this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(null)))}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.sync),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.watch)((()=>this.visible),(i=>{this._applyVisibility((()=>this._allLayerViewVisibility(i)),(()=>{}))}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.sync)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.referenceSetter)(i,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((i,e)=>i+e.updatingProgress),0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some((i=>i.updating))}_hasLayerViewVisibleOverrides(){return this.layerViews.some((i=>i._isOverridden("visible")))}_findLayerViewForLayer(i){return i&&this.layerViews.find((e=>e.layer===i))}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find((i=>{const e=this._findLayerViewForLayer(i);return!!e?.visible}));return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){null==i&&null==(i=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach((e=>{e.visible=e===i}))}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map((i=>(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.watch)((()=>i.visible),(e=>this._applyVisibility((()=>{e!==this.visible&&(i.visible=this.visible)}),(()=>this._applyExclusiveVisibility(e?i:null)))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.sync))).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility((()=>this._allLayerViewVisibility(this.visible)),(()=>this._applyExclusiveVisibility(e?.visible?e:null)))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&("inherited"===this.layer?.visibilityMode?i():"exclusive"===this.layer?.visibilityMode&&e())}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],h.prototype,"creatingLayerViews",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.castForReferenceSetter})],h.prototype,"layerViews",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],h.prototype,"view",void 0),h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.layers.GroupLayerView")],h);const n=h;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/LayerView.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/LayerView.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Identifiable.js */ "./node_modules/@arcgis/core/core/Identifiable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Promise.js */ "./node_modules/@arcgis/core/core/Promise.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/support/UpdatingHandles.js */ "./node_modules/@arcgis/core/core/support/UpdatingHandles.js");
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/layerViewUtils.js */ "./node_modules/@arcgis/core/views/support/layerViewUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__.IdentifiableMixin)((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_6__.EsriPromiseMixin)(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"].EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])))){constructor(e){super(e),this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_11__.UpdatingHandles,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_5__.destroyMaybe)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_12__.validateScaleRange)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{},t=this;t.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return (0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_12__.validateScaleRange)(r)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],u.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],u.prototype,"fullOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],u.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],u.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],u.prototype,"suspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],u.prototype,"updateSuspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],u.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],u.prototype,"visibleAtCurrentScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],u.prototype,"visibleAtCurrentTimeExtent",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.views.layers.LayerView")],u);const y=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/ClipArea.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],t.prototype,"version",null),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.layers.support.ClipArea")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/ClipRect.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/ClipRect.js ***!
  \********************************************************************/
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
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let i=s=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),i=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.views.layers.support.ClipRect")],i);const p=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/Geometry.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/Geometry.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Geometry.js */ "./node_modules/@arcgis/core/geometry/Geometry.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var y;const c={base:_geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["default"],key:"type",typeMap:{extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_10__["default"],polygon:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_11__["default"]}};let n=y=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(o){super(o),this.type="geometry",this.geometry=null}clone(){return new y({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({types:c,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__.fromJSON,write:!0}})],n.prototype,"geometry",void 0),n=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.layers.support.Geometry")],n);const a=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/layers/support/Path.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/Path.js ***!
  \****************************************************************/
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
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ClipArea.js */ "./node_modules/@arcgis/core/views/layers/support/ClipArea.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(r){super(r),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.views.layers.support.Path")],e);const p=e;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/support/layerViewUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/layerViewUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractSafeScaleBounds: function() { return /* binding */ u; },
/* harmony export */   highlightsSupported: function() { return /* binding */ n; },
/* harmony export */   isInEffectiveScaleRange: function() { return /* binding */ r; },
/* harmony export */   isScaleRangeActive: function() { return /* binding */ c; },
/* harmony export */   isSelectableLayerView2D: function() { return /* binding */ l; },
/* harmony export */   occludeesSupported: function() { return /* binding */ t; },
/* harmony export */   scaleBoundsPredicate: function() { return /* binding */ i; },
/* harmony export */   spatialReferenceIncompatibleError: function() { return /* binding */ o; },
/* harmony export */   validateScaleRange: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(e){return e&&"function"==typeof e.highlight}function t(e){return e&&"function"==typeof e.maskOccludee}function i(e,n,t){return null==e||e>=t&&(0===n||e<=n)}function r(e,n){if(n&&e){const{minScale:t,maxScale:r}=e;if(c(t,r))return i(n,t,r)}return!0}function c(e,n){return null!=e&&e>0||null!=n&&n>0}function a(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function u(e){const n=e.effectiveScaleRange;return{minScale:n?.minScale??0,maxScale:n?.maxScale??0}}function l(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function o(n,t,i){return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("layerview:spatial-reference-incompatible",`The spatial reference of this ${n}${t?`(wkid:${t})`:""} is incompatible with the spatial reference of the view${i?`(wkid:${i})`:""}.`,{})}


/***/ })

}]);
//# sourceMappingURL=layers-GroupLayerView2D.js.map