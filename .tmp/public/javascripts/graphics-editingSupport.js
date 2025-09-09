"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["graphics-editingSupport"],{

/***/ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClosestDenormalizedXToReference: function() { return /* binding */ P; },
/* harmony export */   getDenormalizedExtent: function() { return /* binding */ v; },
/* harmony export */   normalizeCentralMeridian: function() { return /* binding */ R; },
/* harmony export */   normalizeMapX: function() { return /* binding */ L; },
/* harmony export */   straightLineDensify: function() { return /* binding */ M; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalizeUtilsCommon.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../rest/geometryService/cut.js */ "./node_modules/@arcgis/core/rest/geometryService/cut.js");
/* harmony import */ var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../rest/geometryService/simplify.js */ "./node_modules/@arcgis/core/rest/geometryService/simplify.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.geometry.support.normalizeUtils");function g(t){return"polygon"===t.type}function y(t){return"polygon"===t[0].type}function x(t){return"polyline"===t[0].type}function d(t){const e=[];let n=0,o=0;for(let s=0;s<t.length;s++){const r=t[s];let i=null;for(let t=0;t<r.length;t++)i=r[t],e.push(i),0===t?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&e.push([(n+o)/2,0])}return e}function M(t,n){if(!(t instanceof _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]||t instanceof _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"])){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](t)}const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(t),l=[];for(const e of i){const t=[];l.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],c=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),f=(l-r)/c,u=(i-s)/c,p=c/n;if(p>1){for(let l=1;l<=p-1;l++){const e=l*n,o=u*e+s,i=f*e+r;t.push([o,i])}const e=(c+Math.floor(p-1)*n)/2,o=u*e+s,i=f*e+r;t.push([o,i])}t.push([i,l])}}return g(t)?new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:l,spatialReference:t.spatialReference}):new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:l,spatialReference:t.spatialReference})}function w(t,e,n){if(e){const e=M(t,1e6);t=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.webMercatorToGeographic)(e,!0)}return n&&(t=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,e);t[0]=o+n*(-2*e)}else if(o<n){const e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,n);t[0]=o+e*(-2*n)}}else{const o=t.x;if(o>e){const n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,e);t=t.clone().offset(n*(-2*e),0)}else if(o<n){const e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,n);t=t.clone().offset(e*(-2*n),0)}}return t}function j(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],i=e.geometries[o],c=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i);for(let t=0;t<c.length;t++){const e=c[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,180);for(let s=0;s<e.length;s++){const e=i.getPoint(t,s);i.setPoint(t,s,e.clone().offset(o,0))}return!0}}))}if(s===n){if(y(t))for(const e of (0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i))t[s]=t[s].addRing(e);else if(x(t))for(const e of (0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i))t[s]=t[s].addPath(e)}else n=s,t[s]=i}return t}async function R(e,n,r){if(!Array.isArray(e))return R([e],n);n&&"string"!=typeof n&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const p="string"==typeof n?n:n?.url??_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;let g,y,x,d,M,v,P,L,U=0;const z=[],A=[];for(const t of e)if(null!=t)if(g||(g=t.spatialReference,y=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(g),x=g.isWebMercator,v=x?102100:4326,d=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].maxX,M=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].minX,P=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].plus180Line,L=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].minus180Line),y)if("mesh"===t.type)A.push(t);else if("point"===t.type)A.push(b(t.clone(),d,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,d,M))),A.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);A.push(e.rings?new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"](e):e)}else if(t.extent){const e=t.extent,n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(e.xmin,M)*(2*d);let o=0===n?t.clone():(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(t.clone(),n);e.offset(n,0);let{xmin:s,xmax:r}=e;s=Number(s.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(P)&&r!==d?(U=r>U?r:U,o=w(o,x),z.push(o),A.push("cut")):e.intersects(L)&&s!==M?(U=r*(2*d)>U?r*(2*d):U,o=w(o,x,360),z.push(o),A.push("cut")):A.push(o)}else A.push(t.clone());else A.push(t);else A.push(t);let F=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(U,d),N=-90;const S=F,k=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"];for(;F>0;){const t=360*F-180;k.addPath([[t,N],[t,-1*N]]),N*=-1,F--}if(z.length>0&&S>0){const t=j(z,await (0,_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_8__.cut)(p,z,k,r)),n=[],o=[];for(let r=0;r<A.length;r++){const s=A[r];if("cut"!==s)o.push(s);else{const s=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&s.rings.length>=i.rings.length?(n.push(s),o.push("simplify")):o.push(x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(s):s)}}if(!n.length)return o;const s=await (0,_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_9__.simplify)(p,n,r),i=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?i.push(t):i.push(x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(s.shift()):s.shift())}return i}const C=[];for(let t=0;t<A.length;t++){const e=A[t];if("cut"!==e)C.push(e);else{const t=z.shift();C.push(!0===x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(t):t)}}return C}function v(t){if(!t)return null;const e=t.extent;if(!e)return null;const n=t.spatialReference&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(t.spatialReference);if(!n)return e;const[o,s]=n.valid,r=2*s,{width:i}=e;let l,{xmin:c,xmax:u}=e;if([c,u]=[u,c],"extent"===t.type||0===i||i<=s||i>r||c<o||u>s)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;l=d(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;l=d(t.paths);break;case"multipoint":l=t.points}const p=e.clone();for(let f=0;f<l.length;f++){let t=l[f][0];t<0?(t+=s,u=Math.max(t,u)):(t-=s,c=Math.min(t,c))}return p.xmin=c,p.xmax=u,p.width<i?(p.xmin-=s,p.xmax-=s,p):e}function P(t,e,n){const o=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(n);if(null==o)return t;const[s,r]=o.valid,i=2*r;let l=0,c=0;e>r?l=Math.ceil(Math.abs(e-r)/i):e<s&&(l=-Math.ceil(Math.abs(e-s)/i)),t>r?c=Math.ceil(Math.abs(t-r)/i):t<s&&(c=-Math.ceil(Math.abs(t-s)/i));let u=t+(l-c)*i;const p=u-e;return p>r?u-=i:p<s&&(u+=i),u}function L(t,e){const n=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s}return t}


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

/***/ "./node_modules/@arcgis/core/layers/graphics/editingSupport.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/editingSupport.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyEdits: function() { return /* binding */ $; },
/* harmony export */   checkEditingCapabilities: function() { return /* binding */ V; },
/* harmony export */   isFeatureIdentifierArrayWithGlobalId: function() { return /* binding */ I; },
/* harmony export */   isFeatureIdentifierArrayWithObjectId: function() { return /* binding */ A; },
/* harmony export */   isFeatureIdentifierWithGlobalId: function() { return /* binding */ v; },
/* harmony export */   isFeatureIdentifierWithObjectId: function() { return /* binding */ F; },
/* harmony export */   normalizeCollections: function() { return /* binding */ D; },
/* harmony export */   normalizeEdits: function() { return /* binding */ G; },
/* harmony export */   normalizeGeometries: function() { return /* binding */ T; },
/* harmony export */   shallowCloneFeature: function() { return /* binding */ M; },
/* harmony export */   uploadAssets: function() { return /* binding */ q; }
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/EditBusLayer.js */ "./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function w(e){return null!=e?.applyEdits}function F(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function A(e){return e.every(F)}function v(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function I(e){return e.every(v)}async function $(e,t,a,s={}){let n;const o="gdbVersion"in e?e.gdbVersion:null,l=s.gdbVersion??o;if((0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__.isEditBusLayer)(e)&&e.url)n=(0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__.emitApplyEditsEvent)(e.url,e.layerId,l,"original-and-current-features"===s.returnServiceEditsOption);else{n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createResolver)(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:n.promise};e.emit("apply-edits",t)}try{const{results:i,edits:o}=await E(e,t,a,s),l=e=>e.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone),d={edits:o,addedFeatures:l(i.addFeatureResults),updatedFeatures:l(i.updateFeatureResults),deletedFeatures:l(i.deleteFeatureResults),addedAttachments:l(i.addAttachmentResults),updatedAttachments:l(i.updateAttachmentResults),deletedAttachments:l(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:s.globalIdToObjectId};return i.editedFeatureResults?.length&&(d.editedFeatures=i.editedFeatureResults),n.resolve(d),i}catch(d){throw n.reject(d),d}}async function E(e,t,r,s){if(await e.load(),!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.getEffectiveEditingEnabled)(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await S(e,r,s);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function S(e,t,r){const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.getEffectiveLayerCapabilities)(e),n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(V(t,i,r,!!n,!!o,`${e.type}-layer`),!i.data.isVersioned&&r?.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...r};if(null!=d.rollbackOnFailureEnabled||i.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const u=G(t,i,`${e.type}-layer`),p=r?.globalIdUsed||l,c=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach((e=>B(e,t)))}u.addFeatures.forEach((t=>O(t,e,p,c))),u.updateFeatures.forEach((t=>k(t,e,p,c))),u.deleteFeatures.forEach((t=>U(t,e,p,c))),u.addAttachments.forEach((t=>L(t,e))),u.updateAttachments.forEach((t=>L(t,e))),l&&await x(u,e);return{edits:await T(u),options:d}}function R(e,t,r,s){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(s.length&&"attributes"in e)for(const i of s){const r=e.attributes[i.name];if(void 0!==r&&!(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__.isValidFieldValue)(i,r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,`Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function j(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:s,vertexSpace:i}=r,n=t.spatialReference,o="local"===i.type,l=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isGeographic)(n),h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.equals)(n,s),m=h||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isWGS84)(n)&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isWGS84)(s)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isWebMercator)(s));if(!(o&&l&&m||!o&&!l&&h))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${n.wkid} is not supported.`)}}function O(e,t,a,r){R(e,t,a,r),j(e,t)}function U(e,t,a,r){R(e,t,a,r)}function k(e,t,r,s){R(e,t,r,s),j(e,t);const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.getEffectiveLayerCapabilities)(t);if("geometry"in e&&null!=e.geometry&&!i?.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function L(e,t){const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.dataComponents)(s.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function B(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_7__.generateBracedUUID)())}async function T(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalizeCentralMeridian)(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function D(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function G(e,t,r){const s=D(e);if(s.addFeatures?.length&&!t.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r}:unsupported-operation`,"Layer does not support adding features.");if(s.updateFeatures?.length&&!t.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r}:unsupported-operation`,"Layer does not support updating features.");if(s.deleteFeatures?.length&&!t.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r}:unsupported-operation`,"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(M),s.updateFeatures=s.updateFeatures.map(M),s.addAssetFeatures=[],s}function V(e,t,r,s,i,n){if(!e||!s&&!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function M(t){const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"];return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}async function x(e,t){const{infoFor3D:r}=t;if(null==r)return;if(!(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.isGlbSupportedEditFormat)(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const a of e.addFeatures??[])z(a)&&s.push(a);for(const a of e.updateFeatures??[])z(a)&&s.push(a)}function z(e){return"mesh"===e?.geometry?.type}function q(e,t,r,s){if(!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditBusLayer: function() { return /* binding */ F; },
/* harmony export */   emitApplyEditsEvent: function() { return /* binding */ c; },
/* harmony export */   emitUpdateMomentEvent: function() { return /* binding */ u; },
/* harmony export */   isEditBusLayer: function() { return /* binding */ p; },
/* harmony export */   isLayerWithGDBVersion: function() { return /* binding */ b; },
/* harmony export */   onApplyEditsEvent: function() { return /* binding */ l; },
/* harmony export */   onUpdateMomentEvent: function() { return /* binding */ h; },
/* harmony export */   versionMatches: function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../versionManagement/support/versionManagementUtils.js */ "./node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"].EventEmitter;function l(t){return a.on("apply-edits",new WeakRef(t))}function h(t){return a.on("update-moment",new WeakRef(t))}function c(t,e,i=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.createResolver)();return r=null==e||r,a.emit("apply-edits",{serviceUrl:t,layerId:e,gdbVersion:i,mayReceiveServiceEdits:r,result:d.promise}),d}function u(t,e,i=null,s){a.emit("update-moment",{serviceUrl:t,layerId:e,gdbVersion:i,moment:s})}const m=Symbol();function p(t){return null!=t&&"object"==typeof t&&m in t}function b(t){return null!=t&&"object"==typeof t&&"gdbVersion"in t}function g(t,e,i){const s=new URL(t).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__.defaultVersionNameLookup.get(s),d=t=>!t||t===r;return d(e)&&d(i)||e===i}const F=e=>{var s;let o=class extends e{constructor(...t){super(...t),this[s]=!0,this._applyEditsHandler=t=>{const{serviceUrl:e,layerId:s,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=t,n=e===this.url,a=null!=s&&null!=this.layerId&&s===this.layerId,l=b(this),h=b(this)&&g(e,r,this.gdbVersion);if(!n||l&&!h||!a&&!d)return;const c=o.then((t=>{if(this.lastEditsEventDate=new Date,a&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t)),t;const s=t.editedFeatures?.find((({layerId:t})=>t===this.layerId));if(s){const{adds:e,updates:r,deletes:d}=s.editedFeatures,o={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:e?e.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.historicMoment)};return this.emit("edits",o),o}const d={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,d.historicMoment)&&this.emit("edits",d),d})).then((t=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,t.historicMoment)&&(this.historicMoment=t.historicMoment),t)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=t=>{const{serviceUrl:e,gdbVersion:i,moment:s}=t,r=e===this.url,d=b(this),o=b(this)&&g(e,i,this.gdbVersion),n=b(this)&&!g(e,this.gdbVersion,null);r&&d&&o&&n&&"historicMoment"in this&&this.historicMoment!==s&&(this.historicMoment=s)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(h(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(t,e,i){return"historicMoment"in this&&this.historicMoment!==i&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__.isVersionInEditSession)(t,e)}};return s=m,(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],o.prototype,"lastEditsEventDate",void 0),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.mixins.EditBusLayer")],o),o};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/infoFor3D.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/infoFor3D.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAssetMapTable: function() { return /* binding */ M; },
/* harmony export */   getFileFormatId: function() { return /* binding */ c; },
/* harmony export */   getFilePickerAcceptType: function() { return /* binding */ e; },
/* harmony export */   getFilenameFormatId: function() { return /* binding */ i; },
/* harmony export */   getFormatDescription: function() { return /* binding */ y; },
/* harmony export */   getFormatExtensions: function() { return /* binding */ j; },
/* harmony export */   getFormatId: function() { return /* binding */ L; },
/* harmony export */   getFormatIdMimeType: function() { return /* binding */ s; },
/* harmony export */   getFormatMimeType: function() { return /* binding */ g; },
/* harmony export */   getGlbFormatId: function() { return /* binding */ a; },
/* harmony export */   getGltfFormatId: function() { return /* binding */ d; },
/* harmony export */   getMimeTypeFormatId: function() { return /* binding */ u; },
/* harmony export */   getMimeTypeOrFilenameFormatId: function() { return /* binding */ p; },
/* harmony export */   getPrjFormatId: function() { return /* binding */ m; },
/* harmony export */   getSupportedExtensions: function() { return /* binding */ o; },
/* harmony export */   getWorldFileFormatId: function() { return /* binding */ l; },
/* harmony export */   isFileEditFormat: function() { return /* binding */ r; },
/* harmony export */   isFileSupported: function() { return /* binding */ n; },
/* harmony export */   isGlbSupportedEditFormat: function() { return /* binding */ f; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=[["binary","application/octet-stream","bin",""]];function n(t,n){return null!=C(n.name,t?.supportedFormats??[])}function r(t,n){if(!t)return!1;const r=c(n,t.supportedFormats??[]);return null!=r&&t.editFormats.includes(r)}function o(t){return F(t?.supportedFormats??[]).flatMap(j).map((t=>`.${t}`))}function e(t){const n={};for(const r of F(t?.supportedFormats??[])){const[t,o]=g(r).split(";"),e=t.trim().toLowerCase(),u=j(r).map((t=>`.${t}`));n[e]??=[],n[e].push(...u)}return{description:"3D Models",accept:n}}function u(t,n){return L(b(t,n))}function i(t,n){return L(C(t,n))}function s(t,n){return g(w(t,n))}function c(t,n){return i(t.name,n)??u(t.type,n)}function p(t,n,r){return u(t,r)??i(n,r)}function a({supportedFormats:t}){return p("model/gltf-binary","glb",t)}function f(t){const n=a(t);return null!=n&&t.editFormats.includes(n)}function d({supportedFormats:t}){return p("model/gltf+json","gltf",t)}function l({supportedFormats:t}){return p("application/esri3do-SR_world","wld",t)}function m({supportedFormats:t}){return p("application/esri3do-SR_prj","prj",t)}function F(n){return[...t,...n]}function w(t,n){return F(n).find((n=>L(n)===t))}function b(t,n){const r=t.toLowerCase();return F(n).find((t=>g(t)===r))}function C(t,n){const r=t.toLowerCase();return F(n).find((t=>j(t).some((t=>r.endsWith(t)))))}function L(t){return t?.[0]}function g(t){return t?.[1].toLowerCase()}function j(t){return t?.[2].split(",").map((t=>t.toLowerCase()))??[]}function y(t){return t?.[3]}function M(t){return t.tables?.find((t=>"assetMaps"===t.role))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/cut.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/cut.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cut: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function i(i,n,p,m){const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.parseUrl)(i),u=n[0].spatialReference,c={...m,responseType:"json",query:{...a.query,f:"json",sr:(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.srToRESTValue)(u),target:JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n[0]),geometries:n}),cutter:JSON.stringify(p)}},f=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a.path+"/cut",c),{cutIndexes:y,geometries:g=[]}=f.data;return{cutIndexes:y,geometries:g.map((e=>{const t=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e);return t.spatialReference=u,t}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/simplify.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/simplify.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simplify: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/rest/geometryService/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function m(m,p,f){const n="string"==typeof m?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(m):m,a=p[0].spatialReference,u=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(p[0]),l={...f,query:{...n.query,f:"json",sr:(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.srToRESTValue)(a),geometries:JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(p))}},{data:y}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n.path+"/simplify",l);return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.decodeGeometries)(y.geometries,u,a)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/utils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeGeometries: function() { return /* binding */ o; },
/* harmony export */   encodeGeometries: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(t){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJsonType)(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryType)(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/utils.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asValidOptions: function() { return /* binding */ i; },
/* harmony export */   encode: function() { return /* binding */ s; },
/* harmony export */   getToken: function() { return /* binding */ u; },
/* harmony export */   parseUrl: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/apiKeyUtils.js */ "./node_modules/@arcgis/core/support/apiKeyUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(r,t){return t?{...t,query:{...r??{},...t.query}}:{query:r}}function f(r){return"string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)(r):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(r)}function s(r,t,o){const n={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[e]=i.map((r=>s(r)));else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(o?.[e]);n[e]=t?r:JSON.stringify(r)}else n[e]=t?i:JSON.stringify(i);else n[e]=i}return n}function u(o,n){return o?(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__.isApiKeyApplicable)(o,n)?n||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey:_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(o)?.token:null}


/***/ }),

/***/ "./node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentSessionId: function() { return /* binding */ t; },
/* harmony export */   defaultVersionNameLookup: function() { return /* binding */ n; },
/* harmony export */   isHistoricVersion: function() { return /* binding */ o; },
/* harmony export */   isSafeToEditVersion: function() { return /* binding */ i; },
/* harmony export */   isVersionInEditSession: function() { return /* binding */ c; },
/* harmony export */   versionCollection: function() { return /* binding */ s; },
/* harmony export */   versionCollectionCount: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_1__.generateLowercaseBracedUUID)(),n=new Map,s=new Map,a=new Map;async function o(r,t,s){if(!r||!s)return!1;if(!t)return!0;const a=new URL(r).host;let o=n.get(a);if(!o){const t=r.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");o=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return o===t}async function i(e,r,n=!1){if(!e||!r)return!0;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=s.get(a)?.entries();if(o)for(const[s,i]of o)if(i.name===r){const e=!i.stack?.hasForwardEdits();if(!e&&n){const[{deleteForwardEdits:e},{default:r}]=await Promise.all([__webpack_require__.e(/*! import() | rest-versionManagement-gdbVersion-deleteForwardEdits */ "rest-versionManagement-gdbVersion-deleteForwardEdits").then(__webpack_require__.bind(__webpack_require__, /*! ../../rest/versionManagement/gdbVersion/deleteForwardEdits.js */ "./node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js")),__webpack_require__.e(/*! import() | rest-versionManagement-gdbVersion-support-DeleteForwardEditsParameters */ "rest-versionManagement-gdbVersion-support-DeleteForwardEditsParameters").then(__webpack_require__.bind(__webpack_require__, /*! ../../rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters.js */ "./node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters.js"))]),n=await e(a,s,new r({sessionId:t,moment:i.moment}));return n.success&&i.stack?.clearForwardEdits(),n.success}return e}return!0}function c(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=s.get(t)?.entries();if(n)for(const[s,a]of n)if(a.name===r){return"edit"===a.lockType}return!1}


/***/ })

}]);
//# sourceMappingURL=graphics-editingSupport.js.map