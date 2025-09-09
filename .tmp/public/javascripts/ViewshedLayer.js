"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["ViewshedLayer"],{

/***/ "./node_modules/@arcgis/core/analysis/Analysis.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/analysis/Analysis.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Identifiable.js */ "./node_modules/@arcgis/core/core/Identifiable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=0,p=class extends((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.JSONSupportMixin)((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__.ClonableMixin)((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_4__.IdentifiableMixin)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"])))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${l++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSome)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String})],p.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({clonable:!1,value:null})],p.prototype,"parent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],p.prototype,"isEditable",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.analysis.Analysis")],p);const c=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/analysis/Viewshed.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/analysis/Viewshed.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _featureReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./featureReferenceUtils.js */ "./node_modules/@arcgis/core/analysis/featureReferenceUtils.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Cyclical.js */ "./node_modules/@arcgis/core/core/Cyclical.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__.JSONSupportMixin)(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__.Clonable)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return null!=this.observer&&this.farDistance>0}equals(e){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_6__.equalsMaybe)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&(0,_featureReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.featureReferenceEquals)(this.feature,e.feature)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"],json:{write:!0}})],u.prototype,"observer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],u.prototype,"farDistance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_8__.cast)((e=>_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_4__.cyclicalDegrees.normalize((0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__.ensureNumber)(e),void 0,!0)))],u.prototype,"heading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],u.prototype,"tilt",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],u.prototype,"horizontalFieldOfView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],u.prototype,"verticalFieldOfView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)(_featureReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.featureReferenceProperty)],u.prototype,"feature",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({json:{read:!1}})],u.prototype,"isValid",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.analysis.Viewshed")],u);const d=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/analysis/ViewshedAnalysis.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/analysis/ViewshedAnalysis.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Analysis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Analysis.js */ "./node_modules/@arcgis/core/analysis/Analysis.js");
/* harmony import */ var _Viewshed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Viewshed.js */ "./node_modules/@arcgis/core/analysis/Viewshed.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/collectionUtils.js */ "./node_modules/@arcgis/core/core/collectionUtils.js");
/* harmony import */ var _core_Cyclical_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Cyclical.js */ "./node_modules/@arcgis/core/core/Cyclical.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const f=_core_Collection_js__WEBPACK_IMPORTED_MODULE_4__["default"].ofType(_Viewshed_js__WEBPACK_IMPORTED_MODULE_3__["default"]);let y=class extends _Analysis_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__.watch)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_8__.syncAndInitial))}get viewsheds(){return this._get("viewsheds")||new f}set viewsheds(e){this._set("viewsheds",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_5__.referenceSetter)(e,this.viewsheds,f))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map((({observer:e})=>e))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=this.viewsheds.filter((e=>null!=e.observer)),r=t.map((e=>e.observer)).toArray(),n=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_14__.projectOrLoadMany)(r,e);if(null!=n.pending)return{pending:n.pending,extent:null};return{pending:null,extent:n.geometries.map(((e,r)=>{const n=t.at(r);return null!=e&&null!=n?this._computeViewshedExtent(this.viewsheds.at(r),e):null})).filter((e=>null!=e)).reduce(((e,t)=>x(e,t)),null)}}_computeViewshedExtent(e,t){const{farDistance:r,heading:n,tilt:s,horizontalFieldOfView:i,verticalFieldOfView:p}=e,{spatialReference:c}=t,u=i/2,m=p/2,d=r/c.metersPerUnit,f=[_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_6__.cyclicalDegrees.normalize(n-u),n,_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_6__.cyclicalDegrees.normalize(n+u)],y=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromPoint(t),x=e=>{const t=f.map((t=>_core_Cyclical_js__WEBPACK_IMPORTED_MODULE_6__.cyclicalDegrees.normalize(t-e)));if(t[0]>t[2]||360===i)return d;const r=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return r>90?0:d*Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__.deg2rad)(r))};y.xmax+=x(90),y.xmin-=x(-90),y.ymax+=x(0),y.ymin-=x(180);const w=t.z;if(null!=w){let e=w,t=w;const n=s-90,i=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__.clamp)(n+m,-90,90),o=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__.clamp)(n-m,-90,90),l=c?.isGeographic?r:d;e+=l*v(i),t+=l*v(o);const p=g(m)*l,h=v(n)*p*(1-g(u));s<90&&(e-=h),s>90&&(t-=h),y.zmax=Math.max(e,w),y.zmin=Math.min(t,w)}return y}clear(){this.viewsheds.removeAll()}};function x(e,t){return null==e?t:null==t?e:e.union(t)}function g(e){return Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__.deg2rad)(e))}function v(e){return Math.sin((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__.deg2rad)(e))}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({type:["viewshed"]})],y.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_5__.castForReferenceSetter,type:f,nonNullable:!0})],y.prototype,"viewsheds",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({readOnly:!0})],y.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)()],y.prototype,"_extent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({readOnly:!0})],y.prototype,"extent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__.property)({readOnly:!0})],y.prototype,"requiredPropertiesForEditing",null),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__.subclass)("esri.analysis.ViewshedAnalysis")],y);const w=y;


/***/ }),

/***/ "./node_modules/@arcgis/core/analysis/featureReferenceUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/analysis/featureReferenceUtils.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureReferenceEquals: function() { return /* binding */ c; },
/* harmony export */   featureReferenceProperty: function() { return /* binding */ b; },
/* harmony export */   getFeatureId: function() { return /* binding */ d; },
/* harmony export */   updatePointsFromFeatureReference: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/support/ray.js */ "./node_modules/@arcgis/core/geometry/support/ray.js");
/* harmony import */ var _views_3d_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/IntersectorInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js");
/* harmony import */ var _views_3d_webgl_engine_lib_intersectorUtilsConversions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/intersectorUtilsConversions.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(e,t){return d(e)===d(t)}function d(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}const b={json:{write:{writer:f,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:I}}}};function f(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function I(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}function m(l,a,s,c){const{sceneIntersectionHelper:b}=l,{observer:f,observerFeatureId:I,targetFeatureId:m,target:g}=s;if(null==I&&null==m)return;c||(c=e=>e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(p,f,g);const v=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.l)(p),S=1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.b)(p,f,p,S/v);const F=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__.fromPoints)(p,g,y);a.options.store=_views_3d_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.StoreResults.ALL,b.intersectToolIntersectorRay(F,a);let N=null,w=null,R=null,A=null;for(const e of a.results.all){const t=(0,_views_3d_webgl_engine_lib_intersectorUtilsConversions_js__WEBPACK_IMPORTED_MODULE_4__.toGraphic)(e,l);if(null==t||null==e.distanceInRenderSpace)continue;const r=d(t);null!=r&&(null!=I&&r===I&&(N??=c(j(e,l,v)),e.distanceInRenderSpace-S<N&&(R=e)),null!=m&&r===m&&(w??=c(j(e,l,v)),null==A&&e.distanceInRenderSpace-S<v&&v-e.distanceInRenderSpace+S<w&&(A=e)))}const{observerAdjusted:T,targetAdjusted:h}=s;R?.getIntersectionPoint(T)?s.observerSurfaceNormal=R.getTransformedNormal((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()):s.observerSurfaceNormal=null,A?.getIntersectionPoint(h)?s.targetSurfaceNormal=A.getTransformedNormal((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()):s.targetSurfaceNormal=null}function j(e,t,r){if((0,_views_3d_webgl_engine_lib_intersectorUtilsConversions_js__WEBPACK_IMPORTED_MODULE_4__.hasLod)(e)){const n=(0,_views_3d_webgl_engine_lib_intersectorUtilsConversions_js__WEBPACK_IMPORTED_MODULE_4__.getIntersectedFeatureBSRadius)(e,t);if(null!=n)return Math.min(n*g,r)}return 1e-5*r}const g=.05,y=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__.create)(),p=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/boundedPlane.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/boundedPlane.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ ls; },
/* harmony export */   B: function() { return /* binding */ G; },
/* harmony export */   C: function() { return /* binding */ ms; },
/* harmony export */   D: function() { return /* binding */ ds; },
/* harmony export */   E: function() { return /* binding */ Ms; },
/* harmony export */   a: function() { return /* binding */ W; },
/* harmony export */   b: function() { return /* binding */ ks; },
/* harmony export */   c: function() { return /* binding */ Z; },
/* harmony export */   d: function() { return /* binding */ os; },
/* harmony export */   e: function() { return /* binding */ fs; },
/* harmony export */   f: function() { return /* binding */ J; },
/* harmony export */   g: function() { return /* binding */ ts; },
/* harmony export */   h: function() { return /* binding */ gs; },
/* harmony export */   i: function() { return /* binding */ is; },
/* harmony export */   j: function() { return /* binding */ H; },
/* harmony export */   k: function() { return /* binding */ Q; },
/* harmony export */   l: function() { return /* binding */ ss; },
/* harmony export */   m: function() { return /* binding */ ns; },
/* harmony export */   n: function() { return /* binding */ ys; },
/* harmony export */   o: function() { return /* binding */ rs; },
/* harmony export */   p: function() { return /* binding */ es; },
/* harmony export */   q: function() { return /* binding */ as; },
/* harmony export */   r: function() { return /* binding */ js; },
/* harmony export */   s: function() { return /* binding */ $; },
/* harmony export */   t: function() { return /* binding */ hs; },
/* harmony export */   u: function() { return /* binding */ K; },
/* harmony export */   v: function() { return /* binding */ cs; },
/* harmony export */   w: function() { return /* binding */ X; },
/* harmony export */   x: function() { return /* binding */ us; },
/* harmony export */   y: function() { return /* binding */ bs; },
/* harmony export */   z: function() { return /* binding */ ps; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _vec32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/support/Axis.js */ "./node_modules/@arcgis/core/geometry/support/Axis.js");
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/lineSegment.js */ "./node_modules/@arcgis/core/geometry/support/lineSegment.js");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/support/plane.js */ "./node_modules/@arcgis/core/geometry/support/plane.js");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/support/ray.js */ "./node_modules/@arcgis/core/geometry/support/ray.js");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/support/vector.js */ "./node_modules/@arcgis/core/geometry/support/vector.js");
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/support/vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const z=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class D{constructor(){this.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.create)(),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)(),this.basis1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)(),this.basis2=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)()}}const G=D;function W(s=Ms){return{plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.create)(s.plane),origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.clone)(s.origin),basis1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.clone)(s.basis1),basis2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.clone)(s.basis2)}}function X(s,t,i){const n=As.get();return n.origin=s,n.basis1=t,n.basis2=i,n.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.wrap)(0,0,0,0),K(n),n}function Z(s,t=W()){return J(s.origin,s.basis1,s.basis2,t)}function H(s,t){(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(t.origin,s.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(t.basis1,s.basis1),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(t.basis2,s.basis2),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.copy)(t.plane,s.plane)}function J(s,t,i,n=W()){return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(n.origin,s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(n.basis1,t),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(n.basis2,i),K(n),ws(n,"fromValues()"),n}function K(s){(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.fromVectorsAndPoint)(s.basis2,s.basis1,s.origin,s.plane)}function Q(s,t,i){s!==i&&Z(s,i);const n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),ys(s),t);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(i.origin,i.origin,n),i.plane[3]-=t,i}function $(s,t,i){return ts(t,i),Q(i,ls(s,s.origin),i),i}function ss(s,t){const i=s.basis1[0],n=s.basis2[1],[r,o]=s.origin;return (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__.fromValues)(r-i,o-n,r+i,o+n,t)}function ts(s,t=W()){const i=(s[2]-s[0])/2,n=(s[3]-s[1])/2;return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.i)(t.origin,s[0]+i,s[1]+n,0),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.i)(t.basis1,i,0,0),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.i)(t.basis2,0,n,0),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.fromValues)(0,0,1,0,t.plane),t}function is(s,t,i){return!!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.intersectRay)(s.plane,t,i)&&Ps(s,i)}function ns(s,t,i){if(is(s,t,i))return i;const n=rs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(i,t.origin,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),t.direction,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.j)(t.origin,n)/(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.l)(t.direction))),i}function rs(s,i,n){const r=Ss.get();xs(s,i,r,Ss.get());let o=Number.POSITIVE_INFINITY;for(const e of Es){const c=Ns(s,e,Ts.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.intersectLineSegment)(r,c,u)){const s=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.o)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),i.origin,u),r=Math.abs((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.acosClamped)((0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.f)(i.direction,s)));r<o&&(o=r,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(n,u))}}return o===Number.POSITIVE_INFINITY?es(s,i,n):n}function os(s,t){return(t-s)/t}function es(s,t,i){if(is(s,t,i))return i;const n=Ss.get(),r=Ss.get();xs(s,t,n,r);let o=Number.POSITIVE_INFINITY;for(const e of Es){const c=Ns(s,e,Ts.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.intersectLineSegmentClamp)(n,c,u)){const s=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_12__.distance2)(t,u);if(!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.isPointInside)(r,u))continue;s<o&&(o=s,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(i,u))}}return us(s,t.origin)<o&&as(s,t.origin,i),i}function as(s,t,i){const n=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.projectPoint)(s.plane,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get()),r=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_10__.projectPointClamp)(vs(s,s.basis1),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_10__.projectPointClamp)(vs(s,s.basis2),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.d)(i,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),r,o),s.origin),i}function cs(s,t,i){const{origin:n,basis1:r,basis2:o}=s,e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),t,n),a=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_13__.projectPointSignedLength)(r,e),c=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_13__.projectPointSignedLength)(o,e),u=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_13__.projectPointSignedLength)(ys(s),e);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.i)(i,a,c,u)}function us(s,t){const i=cs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get()),{basis1:n,basis2:r}=s,o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.l)(n),e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.l)(r),a=Math.max(Math.abs(i[0])-o,0),c=Math.max(Math.abs(i[1])-e,0),u=i[2];return a*a+c*c+u*u}function gs(s,t){return Math.sqrt(us(s,t))}function bs(s,t){let i=Number.NEGATIVE_INFINITY;for(const n of Es){const r=Ns(s,n,Ts.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_10__.distance2)(r,t);o>i&&(i=o)}return Math.sqrt(i)}function fs(s,t){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.isPointInside)(s.plane,t)&&Ps(s,t)}function ps(s,t,i,n){return Is(s,i,n)}function ls(s,t){const i=-s.plane[3];return (0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_13__.projectPointSignedLength)(ys(s),t)-i}function ms(s,t,i,n){const r=ls(s,t),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(Vs,ys(s),i-r);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(n,t,o),n}function ds(s,t){return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.p)(s.basis1,t.basis1)&&(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.p)(s.basis2,t.basis2)&&(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.p)(s.origin,t.origin)}function hs(s,t,i){return s!==i&&Z(s,i),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.invert)(_s,t),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.transpose)(_s,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.t)(i.basis1,s.basis1,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.t)(i.basis2,s.basis2,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.t)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.getNormal)(i.plane),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.getNormal)(s.plane),_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.t)(i.origin,s.origin,t),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.setOffsetFromPoint)(i.plane,i.plane,i.origin),i}function js(s,t,i,n){return s!==n&&Z(s,n),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.fromRotation)(Os,t,i),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.t)(n.basis1,s.basis1,Os),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.t)(n.basis2,s.basis2,Os),K(n),n}function ys(s){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.getNormal)(s.plane)}function Is(s,t,i){switch(t){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.X:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(i,s.basis1),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.Y:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(i,s.basis2),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.Z:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(i,ys(s))}return i}function Ps(s,t){const i=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),t,s.origin),n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.k)(s.basis1),r=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.k)(s.basis2),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.f)(s.basis1,i),e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.f)(s.basis2,i);return-o-n<0&&o-n<0&&-e-r<0&&e-r<0}function vs(s,t){const i=Ts.get();return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(i.origin,s.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(i.vector,t),i}function Ns(s,t,i){const{basis1:n,basis2:r,origin:o}=s,e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),n,t.origin[0]),a=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),r,t.origin[1]);(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(i.origin,e,a),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(i.origin,i.origin,o);const g=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),n,t.direction[0]),b=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_14__.sv3d.get(),r,t.direction[1]);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.h)(i.vector,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.g)(g,g,b),2),i}function ws(s,t){Math.abs((0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.f)(s.basis1,s.basis2)/((0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.l)(s.basis1)*(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.l)(s.basis2)))>1e-6&&z().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.f)(s.basis1,ys(s)))>1e-6&&z().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,_vec32_js__WEBPACK_IMPORTED_MODULE_6__.f)(ys(s),s.origin)-s.plane[3])>1e-6&&z().warn(t,"Plane offset is not consistent with plane origin")}function xs(s,t,i,n){const r=ys(s);(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.fromVectorsAndPoint)(r,t.direction,t.origin,i),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.fromVectorsAndPoint)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.getNormal)(i),r,t.origin,n)}const Ms={plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.create)(),origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(0,0,0),basis1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(1,0,0),basis2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(0,1,0)},Ss=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__.ObjectStack(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_11__.create),Ts=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__.ObjectStack(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_10__.create),Vs=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)(),As=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__.ObjectStack((()=>W())),Es=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],_s=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),Os=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),ks=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:G,altitudeAt:ls,axisAt:ps,cameraFrustumCoverage:os,closestPoint:es,closestPointOnSilhouette:rs,copy:Z,copyWithoutVerify:H,create:W,distance:gs,distance2:us,distanceToSilhouette:bs,elevate:Q,equals:ds,extrusionContainsPoint:fs,fromAABoundingRect:ts,fromValues:J,getExtent:ss,intersectRay:is,intersectRayClosestSilhouette:ns,normal:ys,projectPoint:as,projectPointLocal:cs,rotate:js,setAltitudeAt:ms,setExtent:$,transform:hs,up:Ms,updateUnboundedPlane:K,wrap:X},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/sphere.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/sphere.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ W; },
/* harmony export */   B: function() { return /* binding */ rt; },
/* harmony export */   C: function() { return /* binding */ st; },
/* harmony export */   D: function() { return /* binding */ ot; },
/* harmony export */   E: function() { return /* binding */ et; },
/* harmony export */   N: function() { return /* binding */ C; },
/* harmony export */   a: function() { return /* binding */ U; },
/* harmony export */   b: function() { return /* binding */ L; },
/* harmony export */   c: function() { return /* binding */ E; },
/* harmony export */   d: function() { return /* binding */ Q; },
/* harmony export */   e: function() { return /* binding */ w; },
/* harmony export */   f: function() { return /* binding */ V; },
/* harmony export */   g: function() { return /* binding */ N; },
/* harmony export */   h: function() { return /* binding */ tt; },
/* harmony export */   i: function() { return /* binding */ F; },
/* harmony export */   j: function() { return /* binding */ K; },
/* harmony export */   k: function() { return /* binding */ H; },
/* harmony export */   l: function() { return /* binding */ O; },
/* harmony export */   m: function() { return /* binding */ _; },
/* harmony export */   n: function() { return /* binding */ I; },
/* harmony export */   o: function() { return /* binding */ it; },
/* harmony export */   p: function() { return /* binding */ $; },
/* harmony export */   q: function() { return /* binding */ k; },
/* harmony export */   r: function() { return /* binding */ z; },
/* harmony export */   s: function() { return /* binding */ ft; },
/* harmony export */   t: function() { return /* binding */ ut; },
/* harmony export */   u: function() { return /* binding */ at; },
/* harmony export */   v: function() { return /* binding */ Z; },
/* harmony export */   w: function() { return /* binding */ T; },
/* harmony export */   x: function() { return /* binding */ B; },
/* harmony export */   y: function() { return /* binding */ D; },
/* harmony export */   z: function() { return /* binding */ J; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _vec42_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/math/common.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js");
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../geometry/support/Axis.js */ "./node_modules/@arcgis/core/geometry/support/Axis.js");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/ray.js */ "./node_modules/@arcgis/core/geometry/support/ray.js");
/* harmony import */ var _geometry_support_sphereUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/support/sphereUtils.js */ "./node_modules/@arcgis/core/geometry/support/sphereUtils.js");
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../geometry/support/vector.js */ "./node_modules/@arcgis/core/geometry/support/vector.js");
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/support/vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const C=E();function E(){return (0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.create)()}const _=_vec42_js__WEBPACK_IMPORTED_MODULE_6__.e,k=_vec42_js__WEBPACK_IMPORTED_MODULE_6__.e;function w(t,r){return (0,_vec42_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,t)}function O(t,r){return (0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(t[0],t[1],t[2],r)}function T(t){return t}function z(t){t[0]=t[1]=t[2]=t[3]=0}function L(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function N(t){return t[3]}function U(t){return t}function V(t,r,n,s){return (0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(t,r,n,s)}function Z(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function B(t,r,n){return t!==n&&w(t,n),n}function D(t,r){return r}function F(t,r,n){if(null==r)return!1;if(!Y(t,r,X))return!1;let{t0:s,t1:o}=X;if((s<0||o<s&&o>0)&&(s=o),s<0)return!1;if(n){const{origin:t,direction:o}=r;n[0]=t[0]+o[0]*s,n[1]=t[1]+o[1]*s,n[2]=t[2]+o[2]*s}return!0}function I(t,r,n){const s=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__.fromPoints)(r,n);if(!Y(t,s,X))return[];const{origin:o,direction:e}=s,{t0:i,t1:a}=X,c=r=>{const n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)();return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(n,o,e,r),$(t,n,n)};return Math.abs(i-a)<(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_8__.getEpsilon)()?[c(i)]:[c(i),c(a)]}const X={t0:0,t1:0};function Y(t,r,n){const{origin:s,direction:o}=r,e=G;e[0]=s[0]-t[0],e[1]=s[1]-t[1],e[2]=s[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return!1;const a=2*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]),c=a*a-4*i*(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]-t[3]*t[3]);if(c<0)return!1;const u=Math.sqrt(c);return n.t0=(-a-u)/(2*i),n.t1=(-a+u)/(2*i),!0}const G=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)();function H(t,r){return F(t,r,null)}function J(t,r,i){if(F(t,r,i))return i;const a=K(t,r,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(i,r.origin,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get(),r.direction,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.j)(r.origin,a)/(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(r.direction))),i}function K(t,n,o){const c=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get(),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sm4d.get();(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(c,n.origin,n.direction);const f=N(t);(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(o,c,n.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(o,o,1/(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(o)*f);const m=rt(t,n.origin),l=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__.angle)(n.origin,o);return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.fromRotation)(u,l+m,c),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.t)(o,o,u),o}function Q(t,r,n,s){const o=N(t),e=o*o,i=r+.5*Math.PI,a=n*n+e-2*Math.cos(i)*n*o,c=Math.sqrt(a),u=a-e;if(u<=0)return.5;const f=Math.sqrt(u),m=Math.acos(f/c)-Math.asin(o/(c/Math.sin(i)));return Math.min(1,(m+.5*s)/s)}function W(t,r,n){return F(t,r,n)?n:((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__.closestPoint)(r,U(t),n),$(t,n,n))}function $(t,r,o){const i=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get(),r,U(t)),a=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get(),i,t[3]/(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(i));return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(o,a,U(t))}function tt(t,r){const n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get(),r,U(t)),s=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.k)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(s-o))}function rt(r,n){const s=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__.sv3d.get(),n,U(r)),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(s),i=N(r),a=i+Math.abs(i-o);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__.acosClamped)(i/a)}const nt=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)();function st(t,r,n,s){const o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(nt,r,U(t));switch(n){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.X:{const t=(0,_geometry_support_sphereUtils_js__WEBPACK_IMPORTED_MODULE_11__.cartesianToSpherical)(o,nt)[2];return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(s,-Math.sin(t),Math.cos(t),0)}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.Y:{const t=(0,_geometry_support_sphereUtils_js__WEBPACK_IMPORTED_MODULE_11__.cartesianToSpherical)(o,nt),r=t[1],n=t[2],e=Math.sin(r);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(s,-e*Math.cos(n),-e*Math.sin(n),Math.cos(r))}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.Z:return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(s,o);default:return}}function ot(t,r){const n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(ct,r,U(t));return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(n)-t[3]}function et(t,r,o,e){const i=ot(t,r),a=st(t,r,_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__.Axis.Z,ct),c=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(ct,a,o-i);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(e,r,c)}function it(t,r){const n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.s)(U(t),r),s=N(t);return n<=s*s}function at(t,r,n=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.create)()){const s=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.j)(U(t),U(r)),e=t[3],i=r[3];return s+i<e?((0,_vec42_js__WEBPACK_IMPORTED_MODULE_6__.c)(n,t),n):s+e<i?((0,_vec42_js__WEBPACK_IMPORTED_MODULE_6__.c)(n,r),n):((0,_vec32_js__WEBPACK_IMPORTED_MODULE_4__.m)(n,U(t),U(r),(s+i-e)/(2*s)),n[3]=(s+e+i)/2,n)}const ct=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:C,altitudeAt:ot,angleToSilhouette:rt,axisAt:st,cameraFrustumCoverage:Q,clear:z,closestPoint:W,closestPointOnSilhouette:K,containsPoint:it,copy:w,create:E,distanceToSilhouette:tt,elevate:Z,equals:k,exactEquals:_,fromCenterAndRadius:O,fromRadius:L,fromValues:V,getCenter:U,getExtent:D,getRadius:N,intersectLine:I,intersectRay:F,intersectRayClosestSilhouette:J,intersectsRay:H,projectPoint:$,setAltitudeAt:et,setExtent:B,tmpSphere:ut,union:at,wrap:T},Symbol.toStringTag,{value:"Module"}));


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

/***/ "./node_modules/@arcgis/core/core/ObjectStack.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectStack: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nextTick.js */ "./node_modules/@arcgis/core/core/nextTick.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024;


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

/***/ "./node_modules/@arcgis/core/core/VectorStack.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorStack: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextTick.js */ "./node_modules/@arcgis/core/core/nextTick.js");
/* harmony import */ var _libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class m{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_1__.nextTick)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new m(_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__.create)}static createVec3f64(){return new m(_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)}static createVec4f64(){return new m(_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.create)}static createMat3f64(){return new m(_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)}static createMat4f64(){return new m(_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.create)}static createQuatf64(){return new m(_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__.create)}get test(){}}


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

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js ***!
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
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function t(e,r,t,n,o,u,c,a,l,f,i,_,b,m,p,s){return[e,r,t,n,o,u,c,a,l,f,i,_,b,m,p,s]}function n(e,r){return new Float64Array(e,r,16)}const o=e(),u=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


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

/***/ "./node_modules/@arcgis/core/geometry/support/lineSegment.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/lineSegment.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closestLineSegmentPoint: function() { return /* binding */ B; },
/* harmony export */   closestRayDistance2: function() { return /* binding */ d; },
/* harmony export */   copy: function() { return /* binding */ p; },
/* harmony export */   create: function() { return /* binding */ v; },
/* harmony export */   distance2: function() { return /* binding */ M; },
/* harmony export */   fromPoints: function() { return /* binding */ b; },
/* harmony export */   fromValues: function() { return /* binding */ h; },
/* harmony export */   pointAt: function() { return /* binding */ l; },
/* harmony export */   projectPoint: function() { return /* binding */ j; },
/* harmony export */   projectPointClamp: function() { return /* binding */ A; },
/* harmony export */   wrap: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.clone)(t.origin),vector:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.clone)(t.vector)}:{origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),vector:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)()}}function m(t,r){const n=S.get();return n.origin=t,n.vector=r,n}function p(t,r=v()){return h(t.origin,t.vector,r)}function h(t,r,o=v()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(o.origin,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(o.vector,r),o}function b(t,r,e=v()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(e.origin,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(e.vector,r,t),e}function M(r,n){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,r.origin),s=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(r.vector,c),u=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(r.vector,r.vector),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(s/u,0,1),g=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.h)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),r.vector,a),c);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(g,g)}function j(t,r,n){return A(t,r,0,1,n)}function l(t,r,n){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(n,t.origin,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.h)(n,t.vector,r))}function A(r,n,u,a,g){const{vector:v,origin:m}=r,p=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),n,m),h=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(v,p)/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.k)(v);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.h)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(h,u,a)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(g,g,r.origin)}function d(t,r){if(k(t,m(r.origin,r.direction),!1,x)){const{tA:r,pB:n,distance2:o}=x;if(r>=0&&r<=1)return o;if(r<0)return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)(t.origin,n);if(r>1)return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),t.origin,t.vector),n)}return null}function B(t,r,o){return!!k(t,r,!0,x)&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(o,x.pA),!0)}function k(r,n,o,e){const i=1e-6,s=r.origin,a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),s,r.vector),g=n.origin,v=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),g,n.vector),m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();if(m[0]=s[0]-g[0],m[1]=s[1]-g[1],m[2]=s[2]-g[2],p[0]=v[0]-g[0],p[1]=v[1]-g[1],p[2]=v[2]-g[2],Math.abs(p[0])<i&&Math.abs(p[1])<i&&Math.abs(p[2])<i)return!1;const h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();if(h[0]=a[0]-s[0],h[1]=a[1]-s[1],h[2]=a[2]-s[2],Math.abs(h[0])<i&&Math.abs(h[1])<i&&Math.abs(h[2])<i)return!1;const b=m[0]*p[0]+m[1]*p[1]+m[2]*p[2],M=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],j=m[0]*h[0]+m[1]*h[1]+m[2]*h[2],l=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],A=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*l-M*M;if(Math.abs(A)<i)return!1;let d=(b*M-j*l)/A,B=(b+M*d)/l;o&&(d=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(d,0,1),B=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),x=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get();return k[0]=s[0]+d*h[0],k[1]=s[1]+d*h[1],k[2]=s[2]+d*h[2],x[0]=g[0]+B*p[0],x[1]=g[1]+B*p[1],x[2]=g[2]+B*p[2],e.tA=d,e.tB=B,e.pA=k,e.pB=x,e.distance2=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)(k,x),!0}const x={tA:0,tB:0,pA:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),pB:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),distance2:0},S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__.ObjectStack((()=>v()));


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/plane.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/plane.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntersectFlags: function() { return /* binding */ tt; },
/* harmony export */   IntersectResult: function() { return /* binding */ W; },
/* harmony export */   clip: function() { return /* binding */ B; },
/* harmony export */   clipInfinite: function() { return /* binding */ G; },
/* harmony export */   copy: function() { return /* binding */ h; },
/* harmony export */   create: function() { return /* binding */ M; },
/* harmony export */   distance: function() { return /* binding */ Q; },
/* harmony export */   equals: function() { return /* binding */ g; },
/* harmony export */   exactEquals: function() { return /* binding */ m; },
/* harmony export */   fromArray: function() { return /* binding */ A; },
/* harmony export */   fromManyPoints: function() { return /* binding */ v; },
/* harmony export */   fromNormalAndOffset: function() { return /* binding */ C; },
/* harmony export */   fromPoints: function() { return /* binding */ p; },
/* harmony export */   fromPositionAndNormal: function() { return /* binding */ l; },
/* harmony export */   fromValues: function() { return /* binding */ U; },
/* harmony export */   fromVectorsAndPoint: function() { return /* binding */ P; },
/* harmony export */   getNormal: function() { return /* binding */ O; },
/* harmony export */   intersectLine: function() { return /* binding */ k; },
/* harmony export */   intersectLineOrRay: function() { return /* binding */ Z; },
/* harmony export */   intersectLineSegment: function() { return /* binding */ q; },
/* harmony export */   intersectLineSegmentClamp: function() { return /* binding */ w; },
/* harmony export */   intersectRay: function() { return /* binding */ x; },
/* harmony export */   isPointInside: function() { return /* binding */ z; },
/* harmony export */   negate: function() { return /* binding */ L; },
/* harmony export */   projectPoint: function() { return /* binding */ H; },
/* harmony export */   projectPointLocal: function() { return /* binding */ J; },
/* harmony export */   projectVector: function() { return /* binding */ K; },
/* harmony export */   setOffsetFromPoint: function() { return /* binding */ y; },
/* harmony export */   signedDistance: function() { return /* binding */ V; },
/* harmony export */   up: function() { return /* binding */ $; },
/* harmony export */   wrap: function() { return /* binding */ D; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vector.js */ "./node_modules/@arcgis/core/geometry/support/vector.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/* harmony import */ var _views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../views/3d/support/mathUtils.js */ "./node_modules/@arcgis/core/views/3d/support/mathUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function M(t=$){return[t[0],t[1],t[2],t[3]]}const m=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__.a,g=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__.e;function D(t=$[0],n=$[1],r=$[2],o=$[3]){return U(t,n,r,o,_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv4d.get())}function h(t,n){return U(n[0],n[1],n[2],n[3],t)}function O(t){return t}function U(t,n,r,o,c=M()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function C(t,r,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(o,t),o[3]=r,o}function l(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function p(t,n,r,o=M()){const c=r[0]-n[0],e=r[1]-n[1],u=r[2]-n[2],I=t[0]-n[0],i=t[1]-n[1],f=t[2]-n[2],s=e*f-u*i,N=u*I-c*f,E=c*i-e*I,a=s*s+N*N+E*E,T=Math.abs(a-1)>1e-5&&a>1e-12?1/Math.sqrt(a):1;return o[0]=s*T,o[1]=N*T,o[2]=E*T,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function v(t,n,u,I=0,i=Math.floor(u*(1/3)),f=Math.floor(u*(2/3))){if(u<3)return!1;n(R,I);let s=i,N=!1;for(;s<u-1&&!N;)n(j,s),s++,N=!(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.p)(R,j);if(!N)return!1;for(s=Math.max(s,f),N=!1;s<u&&!N;)n(b,s),s++,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(d,R,j),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(d,d),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(X,j,b),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(X,X),N=!(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.p)(R,b)&&!(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.p)(j,b)&&Math.abs((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(d,X))<F;return N?(p(R,j,b,t),!0):(0!==I||1!==i||2!==f)&&v(t,n,u,0,1,2)}function A(t,n,r=!0){const o=n.length/3;return v(t,((t,r)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(t,n[3*r+0],n[3*r+1],n[3*r+2])),r?o-1:o)}const F=.99619469809,R=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),d=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),X=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();function y(t,n,r){return n!==t&&h(t,n),t[3]=-(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(O(t),r),t}function L(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function P(t,n,r,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(b,n,t),l(r,b,o)}function k(t,n,r,c){return Y(Z(t,n,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),r,n),nt,c))}function x(t,n,r){return null!=n&&Y(Z(t,n.origin,n.direction,rt,r))}function q(t,n,r){return Y(Z(t,n.origin,n.vector,tt.NONE,r))}function w(t,n,r){return Y(Z(t,n.origin,n.vector,tt.CLAMP,r))}function z(t,n){return V(t,n)>=0}function B(t,n){const r=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(O(t),n.ray.direction),o=-V(t,n.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function G(t,n){const r=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(O(t),n.ray.direction),o=-V(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function H(t,n,r){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),O(t),-t[3]),e=K(t,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),n,c),_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get());return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(r,e,c),r}function J(t,n,r,c){const e=O(t),I=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),i=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get();(0,_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.tangentFrame)(e,I,i);const f=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),r,n),s=(0,_vector_js__WEBPACK_IMPORTED_MODULE_4__.projectPointSignedLength)(I,f),N=(0,_vector_js__WEBPACK_IMPORTED_MODULE_4__.projectPointSignedLength)(i,f),E=(0,_vector_js__WEBPACK_IMPORTED_MODULE_4__.projectPointSignedLength)(e,f);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(c,s,N,E)}function K(t,n,r){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__.sv3d.get(),O(t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(O(t),n));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(r,n,c),r}function Q(t,n){return Math.abs(V(t,n))}function V(t,n){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(O(t),n)+t[3]}var W;function Y(t){return t===W.INTERSECTS_INSIDE_OUT||t===W.INTERSECTS_OUTSIDE_IN}function Z(n,r,o,c,u){const I=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(O(n),o),s=V(n,r);if(0===I)return s>=0?W.INSIDE:W.OUTSIDE;let N=-s/I;return c&tt.CLAMP&&(N=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(N,0,1)),!(c&tt.INFINITE_MIN)&&N<0||!(c&tt.INFINITE_MAX)&&N>1?s>=0?W.INSIDE:W.OUTSIDE:((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(u,r,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(u,o,N)),s>=0?W.INTERSECTS_INSIDE_OUT:W.INTERSECTS_OUTSIDE_IN)}!function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"}(W||(W={}));const $=[0,0,1,0];var tt;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(tt||(tt={}));const nt=tt.INFINITE_MIN|tt.INFINITE_MAX,rt=tt.INFINITE_MAX;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/ray.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/ray.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closestPoint: function() { return /* binding */ y; },
/* harmony export */   closestPoints: function() { return /* binding */ M; },
/* harmony export */   copy: function() { return /* binding */ v; },
/* harmony export */   create: function() { return /* binding */ b; },
/* harmony export */   distance2: function() { return /* binding */ w; },
/* harmony export */   equals: function() { return /* binding */ x; },
/* harmony export */   fromPoints: function() { return /* binding */ S; },
/* harmony export */   fromValues: function() { return /* binding */ q; },
/* harmony export */   wrap: function() { return /* binding */ k; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function b(i){return i?h((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.clone)(i.origin),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.clone)(i.direction)):h((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)())}function h(i,r){return{origin:i,direction:r}}function x(r,n){return (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.equals)(r.origin,n.origin)&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.equals)(r.direction,n.direction)}function k(i,r){const n=O.get();return n.origin=i,n.direction=r,n}function v(i,r=b()){return q(i.origin,i.direction,r)}function S(i,r,n=b()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(n.origin,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(n.direction,r,i),n}function q(i,r,n=b()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(n.origin,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(n.direction,r),n}function w(i,r){const n=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_6__.sv3d.get(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_6__.sv3d.get(),i.direction),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_6__.sv3d.get(),r,i.origin));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)(n,n)}function y(i,r,n){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)(i.direction,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.d)(n,r,i.origin));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(n,i.origin,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(n,i.direction,t)),n}function M(i,r,o,e){const c=i.origin,l=r.origin,j=i.direction,p=r.direction,b=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(z,j),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(A,p));if(Math.abs(b)>=1)return null;const h=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(z,j,p),x=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.a)(U,l,c),k=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.set)(B,j[0],j[1],j[2],-p[0],-p[1],-p[2],h[0],h[1],h[2]),v=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.invert)(B,k);if(null==v)return[o,e];const S=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(z,v[0],v[3],v[6]),x),q=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(A,v[1],v[4],v[7]),x);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(o,c,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,j,S)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(e,l,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,p,q)),[o,e]}const O=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__.ObjectStack((()=>b())),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),B=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/sphereUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/sphereUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cartesianToSpherical: function() { return /* binding */ n; },
/* harmony export */   sphericalToCartesian: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n,a){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(n),i=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.asinClamped)(n[2]/c),r=Math.atan2(n[1]/c,n[0]/c);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(a,c,i,r),a}function a(t,o){const n=t[0],a=t[1],c=t[2],i=Math.cos(a);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(o,n*i*Math.cos(c),n*i*Math.sin(c),n*Math.sin(a))}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/vector.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vector.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angle: function() { return /* binding */ a; },
/* harmony export */   angleAroundAxis: function() { return /* binding */ u; },
/* harmony export */   projectPoint: function() { return /* binding */ i; },
/* harmony export */   projectPointSignedLength: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(t,o,s){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,o)/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,t);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(s,t,c)}function f(t,n){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,n)/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(t)}function a(n,s){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(n,s)/((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(n)*(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(s));return-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.acosClamped)(c)}function u(n,o,e){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(m,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(h,o);const i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(m,h),f=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.acosClamped)(i),a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(m,m,h);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(a,e)<0?2*Math.PI-f:f}const m=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/vectorStacks.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sm3d: function() { return /* binding */ a; },
/* harmony export */   sm4d: function() { return /* binding */ f; },
/* harmony export */   sq4d: function() { return /* binding */ o; },
/* harmony export */   sv2d: function() { return /* binding */ t; },
/* harmony export */   sv3d: function() { return /* binding */ c; },
/* harmony export */   sv4d: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/VectorStack.js */ "./node_modules/@arcgis/core/core/VectorStack.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createVec2f64(),c=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createVec3f64(),r=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createVec4f64(),a=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createMat3f64(),f=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createMat4f64(),o=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__.VectorStack.createQuatf64();


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/ViewshedLayer.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ViewshedLayer.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _analysis_Viewshed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../analysis/Viewshed.js */ "./node_modules/@arcgis/core/analysis/Viewshed.js");
/* harmony import */ var _analysis_ViewshedAnalysis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../analysis/ViewshedAnalysis.js */ "./node_modules/@arcgis/core/analysis/ViewshedAnalysis.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Layer.js */ "./node_modules/@arcgis/core/layers/Layer.js");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_13__.OperationalLayer)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.MultiOriginJSONMixin)(_Layer_js__WEBPACK_IMPORTED_MODULE_12__["default"]))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new _analysis_ViewshedAnalysis_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.opacity=1}initialize(){this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.source),((e,r)=>{null!=r&&r.parent===this&&(r.parent=null),null!=e&&(e.parent=this)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.syncAndInitial))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new _analysis_ViewshedAnalysis_js__WEBPACK_IMPORTED_MODULE_2__["default"])}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,s,t){r.viewsheds=e.filter((e=>e.isValid())).map((e=>e.toJSON(t))).toJSON()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:["ViewshedLayer"]})],u.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({nonNullable:!0})],u.prototype,"source",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],u.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],u.prototype,"fullExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"].ofType(_analysis_Viewshed_js__WEBPACK_IMPORTED_MODULE_1__["default"]),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],u.prototype,"viewsheds",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("web-scene","viewsheds")],u.prototype,"writeViewsheds",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.ViewshedLayer")],u);const y=u;


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

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/Intersector.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/Intersector.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I3sTarget: function() { return /* binding */ o; },
/* harmony export */   PclTarget: function() { return /* binding */ s; },
/* harmony export */   Tiles3DTarget: function() { return /* binding */ l; },
/* harmony export */   VoxelTarget: function() { return /* binding */ c; },
/* harmony export */   isI3sIntersectorResult: function() { return /* binding */ a; },
/* harmony export */   isPclIntersectorResult: function() { return /* binding */ i; },
/* harmony export */   isTiles3DIntersectorResult: function() { return /* binding */ p; },
/* harmony export */   isVoxelIntersectorResult: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../webgl-engine/lib/IntersectorInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js");
/* harmony import */ var _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl-engine/lib/IntersectorTarget.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js");
/* harmony import */ var _webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webgl-engine/lib/intersectorUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__.Graphic3DTarget{constructor(t,e,r,n){super(e,r),this.point=t,this.createGraphic=n}}function i(e){return (0,_webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(e)&&e.intersector===_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.PCL&&!!e.target}class o extends _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__.LayerTarget{constructor(t,e,r,n,s){super(t),this.layerUid=t,this.sublayerUid=e,this.nodeIndex=r,this.componentIndex=n,this.triangleNr=s}}class c extends _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__.Graphic3DTarget{constructor(t,e,r){super(e,null),this.point=t,this.createVoxelGraphic=r}}class l extends _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__.Graphic3DTarget{constructor(t,e){super(t,null),this.createTiles3DGraphic=e}}function a(e){return (0,_webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(e)&&e.intersector===_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.I3S&&!!e.target}function u(e){return (0,_webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(e)&&e.intersector===_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.VOXEL&&!!e.target}function p(e){return (0,_webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(e)&&e.intersector===_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.TILES3D&&!!e.target}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/mathUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/mathUtils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angle: function() { return /* binding */ v; },
/* harmony export */   bilerp: function() { return /* binding */ b; },
/* harmony export */   cosCapped: function() { return /* binding */ f; },
/* harmony export */   fovx2fovy: function() { return /* binding */ M; },
/* harmony export */   fovy2fovx: function() { return /* binding */ l; },
/* harmony export */   makeOrthonormal: function() { return /* binding */ p; },
/* harmony export */   makePiecewiseLinearFunction: function() { return /* binding */ d; },
/* harmony export */   maxScale: function() { return /* binding */ m; },
/* harmony export */   midpoint3d: function() { return /* binding */ U; },
/* harmony export */   planeFromPoints: function() { return /* binding */ k; },
/* harmony export */   scaleFromMatrix: function() { return /* binding */ g; },
/* harmony export */   slerp: function() { return /* binding */ j; },
/* harmony export */   slerpTangent: function() { return /* binding */ x; },
/* harmony export */   tangentFrame: function() { return /* binding */ q; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(t,n){return t>n?Math.cos(n):Math.cos(t)}function M(t,n,s){return 2*Math.atan(s*Math.tan(.5*t)/n)}function l(t,n,s){return 2*Math.atan(n*Math.tan(.5*t)/s)}function m(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,r))}function g(t,s){const r=Math.sqrt(s[0]*s[0]+s[4]*s[4]+s[8]*s[8]),o=Math.sqrt(s[1]*s[1]+s[5]*s[5]+s[9]*s[9]),a=Math.sqrt(s[2]*s[2]+s[6]*s[6]+s[10]*s[10]);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(t,r,o,a),t}function p(t,o,a){a=a||t;const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,o);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(a,t[0]-c*o[0],t[1]-c*o[1],t[2]-c*o[2]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(a,a)}function q(t,s,a){Math.abs(t[0])>Math.abs(t[1])?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(s,0,1,0):(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(s,1,0,0),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(a,t,s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(s,a,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(a,a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(s,s)}function b(t,n,s,r,o,a){const c=t+(n-t)*o;return c+(s+(r-s)*o-c)*a}function j(t,n,r,o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)()){const h=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(t),f=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(n),M=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,n)/(h*f);if(M<.9999999999999999){const s=Math.acos(M),a=((1-r)*h+r*f)/Math.sin(s),u=a/h*Math.sin((1-r)*s),e=a/f*Math.sin(r*s);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(A,t,u),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(B,n,e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(o,A,B)}return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)(o,t,n,r)}function x(t,n,o,f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),M=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)()){const l=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(t),m=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(n),g=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,n)/(l*m);if(g<.9999999999999999){const s=Math.acos(g),r=Math.sin(s),a=Math.sin(o*s),u=Math.sin((1-o)*s),h=(1-o)*l+o*m;{const s=h/r,o=s/m*a;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(A,t,s/l*u),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(B,n,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(f,A,B)}{const e=1/l*(-Math.cos((1-o)*s)*s*h+u*(-l+m));(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(A,t,e);const f=1/m*(Math.cos(o*s)*s*h+a*(-l+m));(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(B,n,f),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(M,A,B),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(M,M,1/r)}return M}return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)(f,t,n,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(M,n,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(M,M),M}function v(n,a,c){n=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(A,n),a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(B,a);const i=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.acosClamped)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(n,a));if(c){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(z,n,a);if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,c)<0)return-i}return i}function d(t){const n=t.length;return s=>{if(s<=t[0][0])return t[0][1];if(s>=t[n-1][0])return t[n-1][1];let r=1;for(;s>t[r][0];)r++;const o=t[r-1][0],a=t[r][0],c=(a-s)/(a-o);return c*t[r-1][1]+(1-c)*t[r][1]}}function k(t,n,a,c){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(w,n,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(y,a,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(c,w,y),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(c,c),c[3]=-(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(t,c)}function U(t,s){if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(s,0,0,0),t.length>0){for(let n=0;n<t.length;++n)(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(s,s,t[n]);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(s,s,1/t.length)}}const w=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),y=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/terrain/Intersector.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/terrain/Intersector.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlayTarget: function() { return /* binding */ i; },
/* harmony export */   isOverlayIntersectorResult: function() { return /* binding */ o; },
/* harmony export */   isTerrainIntersectorResult: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl-engine/lib/IntersectorInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js");
/* harmony import */ var _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl-engine/lib/IntersectorTarget.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js");
/* harmony import */ var _webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl-engine/lib/intersectorUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(r){return (0,_webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(r)&&r.intersector===_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.TERRAIN&&!!r.target}class i extends _webgl_engine_lib_IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__.Graphic3DTarget{constructor(e,r,t){super(e,r),this.triangleNr=t}}function o(r){return (0,_webgl_engine_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(r)&&r.intersector===_webgl_engine_lib_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.OVERLAY&&!!r.target}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntersectorOptions: function() { return /* binding */ s; },
/* harmony export */   IntersectorType: function() { return /* binding */ i; },
/* harmony export */   StoreResults: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i,e;!function(i){i[i.OBJECT=0]="OBJECT",i[i.HUD=1]="HUD",i[i.TERRAIN=2]="TERRAIN",i[i.OVERLAY=3]="OVERLAY",i[i.I3S=4]="I3S",i[i.PCL=5]="PCL",i[i.LOD=6]="LOD",i[i.VOXEL=7]="VOXEL",i[i.TILES3D=8]="TILES3D"}(i||(i={}));class s{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=e.ALL,this.normalRequired=!0,this.excludeLabels=!1}}!function(i){i[i.MIN=0]="MIN",i[i.MINMAX=1]="MINMAX",i[i.ALL=2]="ALL"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graphic3DTarget: function() { return /* binding */ o; },
/* harmony export */   HudTarget: function() { return /* binding */ r; },
/* harmony export */   LayerTarget: function() { return /* binding */ e; },
/* harmony export */   ObjectTarget: function() { return /* binding */ t; },
/* harmony export */   ValidHudTarget: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(s,t,r){this.object=s,this.geometryId=t,this.triangleNr=r}}class r extends t{constructor(t,r,c,e){super(t,r,c),this.center=null!=e?(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.clone)(e):null}}class c extends r{}class e{constructor(s){this.layerUid=s}}class o extends e{constructor(s,t){super(s),this.graphicUid=t}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isHudIntersectorResult: function() { return /* binding */ i; },
/* harmony export */   isObjectIntersectorResult: function() { return /* binding */ s; },
/* harmony export */   isValidIntersectorResult: function() { return /* binding */ o; },
/* harmony export */   sliceFilterPredicate: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/boundedPlane.js */ "./node_modules/@arcgis/core/chunks/boundedPlane.js");
/* harmony import */ var _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IntersectorInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(t){return null!=t?.dist}function c(r){return(n,o,c)=>((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.m)(u,n,o,c),!(0,_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_2__.e)(r,u))}function s(t){return o(t)&&t.intersector===_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.IntersectorType.OBJECT&&!!t.target}function i(t){return o(t)&&t.intersector===_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.IntersectorType.HUD&&!!t.target&&"center"in t.target&&null!=t.target.center}const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIntersectedFeatureBSRadius: function() { return /* binding */ V; },
/* harmony export */   hasLod: function() { return /* binding */ w; },
/* harmony export */   toGraphic: function() { return /* binding */ m; },
/* harmony export */   toHit: function() { return /* binding */ h; },
/* harmony export */   toOwner: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/i3s/Intersector.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/Intersector.js");
/* harmony import */ var _terrain_Intersector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../terrain/Intersector.js */ "./node_modules/@arcgis/core/views/3d/terrain/Intersector.js");
/* harmony import */ var _intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intersectorUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js");
/* harmony import */ var _lodRendering_Intersector_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lodRendering/Intersector.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/Intersector.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(r,e){return (0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isObjectIntersectorResult)(r)||(0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isHudIntersectorResult)(r)?U(r.target?.object,e):(0,_terrain_Intersector_js__WEBPACK_IMPORTED_MODULE_5__.isTerrainIntersectorResult)(r)?e.map?.ground:(0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isPclIntersectorResult)(r)||(0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isI3sIntersectorResult)(r)||(0,_terrain_Intersector_js__WEBPACK_IMPORTED_MODULE_5__.isOverlayIntersectorResult)(r)||(0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isVoxelIntersectorResult)(r)?U(r.target,e):null}function m(r,e){const t=h(r,e);return null!=t&&"graphic"===t.type?t.graphic:null}function h(r,e){if(null==r)return null;if((0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isObjectIntersectorResult)(r)||(0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isHudIntersectorResult)(r))return d(r.target?.object,e);if((0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isPclIntersectorResult)(r)){const e=r.target.createGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if((0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isVoxelIntersectorResult)(r)){const e=r.target.createVoxelGraphic();return{type:"graphic",graphic:e,layer:e.layer}}if((0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isTiles3DIntersectorResult)(r)){const e=r.target.createTiles3DGraphic();return{type:"graphic",graphic:e,layer:e.layer}}return (0,_terrain_Intersector_js__WEBPACK_IMPORTED_MODULE_5__.isOverlayIntersectorResult)(r)||(0,_lodRendering_Intersector_js__WEBPACK_IMPORTED_MODULE_7__.isLodIntersectorResult)(r)?d(r.target,e):(0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isI3sIntersectorResult)(r)?y(r.target,e):null}function d(r,e){if(null==r?.graphicUid)return null;const t=U(r,e);if(null==t)return null;if(t===e.graphics)return null==e.graphicsView||"number"!=typeof r.graphicUid?null:e.graphicsView.getHit(r.graphicUid);const n=e.allLayerViews.find((r=>r.layer===t));return!n||n.suspended||null==r.graphicUid?null:"getHit"in n?n.getHit(r.graphicUid):null}function y(r,e){const t=U(r,e);if(null==t)return null;const n=e.allLayerViews.find((r=>r.layer===t));return n&&!n.suspended&&"getGraphicFromIntersectorTarget"in n?b(n.getGraphicFromIntersectorTarget(r)):null}function j(r,e){const t=U(r,e);if(null==t)return null;const n=e.allLayerViews.find((r=>r.layer===t));return n&&!n.suspended&&"getAABBFromIntersectorTarget"in n?n.getAABBFromIntersectorTarget(r):null}function b(r){return null!=r?{type:"graphic",graphic:r,layer:r.layer}:null}function U(r,e){return null==r?.layerUid?null:null!=e.graphicsView&&r.layerUid===e.graphicsView.processor.layer.id?e.graphics:e.map.allLayers.find((e=>e.uid===r.layerUid))}function V(e,i){if((0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isObjectIntersectorResult)(e)||(0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isHudIntersectorResult)(e))return (0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__.g)(e.target.object.boundingVolumeWorldSpace.bounds);if((0,_lodRendering_Intersector_js__WEBPACK_IMPORTED_MODULE_7__.isLodIntersectorResult)(e)){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.getScaling)(B,e.transformation);const t=Math.max(B[0],B[1],B[2]);return e.target.baseBoundingSphere.radius*t}if((0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isI3sIntersectorResult)(e)){const r=j(e.target,i);return r?.5*(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.diameter)(r):null}return null}function w(r){return!(0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isObjectIntersectorResult)(r)&&!(0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_6__.isHudIntersectorResult)(r)&&((0,_lodRendering_Intersector_js__WEBPACK_IMPORTED_MODULE_7__.isLodIntersectorResult)(r)?r.target.numLodLevels>1:!!(0,_layers_i3s_Intersector_js__WEBPACK_IMPORTED_MODULE_4__.isI3sIntersectorResult)(r))}const B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/Intersector.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/Intersector.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LodTarget: function() { return /* binding */ s; },
/* harmony export */   isLodIntersectorResult: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IntersectorInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js");
/* harmony import */ var _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IntersectorTarget.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js");
/* harmony import */ var _intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../intersectorUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__.Graphic3DTarget{constructor(t,r,e,s,i,o){super(t,r),this.layerUid=t,this.graphicUid=r,this.geometryId=e,this.triangleNr=s,this.baseBoundingSphere=i,this.numLodLevels=o}}function i(r){return (0,_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.isValidIntersectorResult)(r)&&r.intersector===_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.IntersectorType.LOD&&!!r.target}


/***/ })

}]);
//# sourceMappingURL=ViewshedLayer.js.map