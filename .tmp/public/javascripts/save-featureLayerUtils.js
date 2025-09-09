"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["save-featureLayerUtils"],{

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

/***/ "./node_modules/@arcgis/core/layers/save/featureLayerUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/save/featureLayerUtils.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   save: function() { return /* binding */ se; },
/* harmony export */   saveAll: function() { return /* binding */ ie; },
/* harmony export */   saveAllAs: function() { return /* binding */ ce; },
/* harmony export */   saveAs: function() { return /* binding */ le; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/originUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/layers/save/utils.js");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _support_fetchService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/fetchService.js */ "./node_modules/@arcgis/core/layers/support/fetchService.js");
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/lazyLayerLoader.js */ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/portalItemUtils.js */ "./node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const L="Feature Service",P="feature-layer-utils",N=`${P}-save`,$=`${P}-save-as`,g=`${P}-saveall`,x=`${P}-saveall-as`;function O(e){return{isValid:(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_6__.isLayerWithFeatureLayerSource)(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function R(e){const r=[],a=[];for(const{layer:t,layerJSON:n}of e)t.isTable?a.push(n):r.push(n);return{layers:r,tables:a}}function U(e){return R([e])}async function j(e,r){return/\/\d+\/?$/.test(e.url)?U(r[0]):M(r,e)}async function M(e,r){if(e.reverse(),!r)return R(e);const a=await D(r,e);for(const t of e)k(t.layer,t.layerJSON,a);return _(a,e),a}async function D(e,r){let a=await e.fetchData("json");if(J(a))return a;a||={},Y(a);const{layer:{url:t,customParameters:n,apiKey:o}}=r[0];return await K(a,{url:t??"",customParameters:n,apiKey:o},r.map((e=>e.layer.layerId))),a}function J(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}function Y(e){e.layers||=[],e.tables||=[]}function _(e,r){const a=[],t=[];for(const{layer:n}of r){const{isTable:e,layerId:r}=n;e?t.push(r):a.push(r)}F(e.layers,a),F(e.tables,t)}function F(r,a){if(r.length<2)return;const t=[];for(const{id:e}of r)t.push(e);(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.equals)(t.sort(G),a.slice().sort(G))&&r.sort(((e,r)=>{const t=a.indexOf(e.id),n=a.indexOf(r.id);return t<n?-1:t>n?1:0}))}function G(e,r){return e<r?-1:e>r?1:0}async function K(e,r,a){const{url:t,customParameters:n,apiKey:o}=r,{serviceJSON:s,layersJSON:i}=await (0,_support_fetchService_js__WEBPACK_IMPORTED_MODULE_5__.fetchFeatureService)(t,{customParameters:n,apiKey:o}),l=z(e.layers,s.layers,a),c=z(e.tables,s.tables,a);e.layers=l.itemResources,e.tables=c.itemResources;const u=[...l.added,...c.added],p=i?[...i.layers,...i.tables]:[];await B(e,u,t,p)}function z(e,a,t){const n=(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.difference)(e,a,((e,r)=>e.id===r.id));e=e.filter((e=>!n.removed.some((r=>r.id===e.id))));const o=n.added;return o.forEach((({id:r})=>{e.push({id:r})})),{itemResources:e,added:o.filter((({id:e})=>!t.includes(e)))}}async function B(e,r,a,t){const n=await V(r),o=r.map((({id:e,type:r})=>new(n.get(r))({url:a,layerId:e,sourceJSON:t.find((({id:r})=>r===e))})));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((r=>{const{layerId:a,loaded:t,defaultPopupTemplate:n}=r;if(!t||null==n)return;const o={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==r.operationalLayerType&&(o.layerType=r.operationalLayerType),k(r,o,e)}))}async function V(e){const r=[];e.forEach((({type:e})=>{const a=(0,_support_fetchService_js__WEBPACK_IMPORTED_MODULE_5__.getLayerModuleType)(e),t=_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_7__.layerLookupMap[a];r.push(t())}));const a=await Promise.all(r),t=new Map;return e.forEach((({type:e},r)=>{t.set(e,a[r])})),t}function k(e,r,a){e.isTable?q(a.tables,r):q(a.layers,r)}function q(e,r){const a=e.findIndex((({id:e})=>e===r.id));-1===a?e.push(r):e[a]=r}function C(e,r){if(!e.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:missing-parameters`,"'layers' array should contain at least one feature layer")}function H(e,r){const a=e.map((e=>e.portalItem.id));if(new Set(a).size>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function Q(e,r){const a=e.map((e=>e.layerId));if(new Set(a).size!==a.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function W(e){C(e,g),await Promise.all(e.map((e=>e.load())));for(const r of e)(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureLayerConfig)(r,g,O),(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureItemConfig)({layer:r,itemType:L,errorNamePrefix:g});H(e,g),Q(e,g)}function X(e,r){const a=e.layers.some((e=>"OrientedImageryLayer"===e.layerType));(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.toggleTypeKeyword)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.ORIENTED_IMAGERY_LAYER,a)}function Z(e,r){const a=e.some((e=>"oriented-imagery"===e.type));(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.toggleTypeKeyword)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.ORIENTED_IMAGERY_LAYER,a)}async function ee(e,r,a){X(a,r)}async function re(e,r){const{url:a,layerId:t,title:n,fullExtent:o,isTable:s}=e,i=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(a);r.url=("FeatureServer"===i?.serverType?a:`${a}/${t}`)??null,r.title||=n,r.extent=null,s||null==o||(r.extent=await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.getWGS84ExtentForItem)(o)),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.removeTypeKeyword)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.METADATA),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.removeTypeKeyword)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.MULTI_LAYER),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.addTypeKeyword)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.SINGLE_LAYER),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.toggleTypeKeyword)(r,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.TABLE,s),Z([e],r)}function ae(e,r){for(const s of e){const a=s.parsedUrl.path,n=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(a),o=n?.url.path;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`,(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(s,`has unsupported url pattern: ${a}`),{layer:s});const i=n?.serverType;if("FeatureServer"!==i&&"MapServer"!==i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`,(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.createErrorMessage)(s,`has unsupported server type: ${i}`),{layer:s});if("MapServer"===i&&e.length>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const a=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(e[0].parsedUrl.path),n=a?.url.path,o=e.every((e=>{const r=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(e.parsedUrl.path);return r?.url.path===n}));if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function te(e){C(e,x),await Promise.all(e.map((e=>e.load())));for(const r of e)(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.ensureLayerConfig)(r,x,O);ae(e,x),Q(e,x)}function ne(e,r){X(r,e),(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.setCommonItemProperties)(e)}async function oe(e,r){let t=0,n=0;for(const{isTable:a}of r)a?n++:t++;const o=r[0].parsedUrl.path,s=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(o);if(e.url="FeatureServer"===s?.serverType?s.url.path:o,e.title||=s.title,e.extent=null,t>0){const t=r.map((e=>e.fullExtent)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.isSome).reduce(((e,r)=>e.clone().union(r)));t&&(e.extent=await (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.getWGS84ExtentForItem)(t))}(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.removeTypeKeyword)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.METADATA),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.toggleTypeKeyword)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.MULTI_LAYER,r.length>1),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.toggleTypeKeyword)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.SINGLE_LAYER,1===r.length),(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.toggleTypeKeyword)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.typeKeyword.TABLE,n>0&&0===t),Z(r,e),(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.setCommonItemProperties)(e)}async function se(e,r){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.save)({layer:e,itemType:L,validateLayer:O,createItemData:(e,r)=>j(r,[e]),errorNamePrefix:N,setItemProperties:ee},r)}async function ie(e,r){await W(e);const a=e[0].portalItem,t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.createJSONContextForWrite)(a),o=await Promise.all(e.map((e=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getLayerJSON)(e,t,r)))),l=await j(a,e.map(((e,r)=>({layer:e,layerJSON:o[r]}))));return ne(a,l),await a.update({data:l}),await Promise.all(e.slice(1).map((e=>e.portalItem.reload()))),(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_2__.updateOrigins)(t),a.clone()}async function le(e,r,a){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.saveAs)({layer:e,itemType:L,validateLayer:O,createItemData:(e,r)=>Promise.resolve(U(e)),errorNamePrefix:$,newItem:r,setItemProperties:re},a)}async function ce(e,r,a){await te(e);const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getPortalItem)({itemType:L,errorNamePrefix:x,newItem:r}),o=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.createJSONContextForWrite)(t),l=await Promise.all(e.map((e=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.getLayerJSON)(e,o,a)))),p=await M(e.map(((e,r)=>({layer:e,layerJSON:l[r]}))));await oe(t,e),await (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.addItem)(t,p,a);for(const n of e)n.portalItem=t.clone();return (0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_2__.updateOrigins)(o),t}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/save/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/save/utils.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItem: function() { return /* binding */ v; },
/* harmony export */   createErrorMessage: function() { return /* binding */ m; },
/* harmony export */   createJSONContextForWrite: function() { return /* binding */ y; },
/* harmony export */   ensureItemConfig: function() { return /* binding */ f; },
/* harmony export */   ensureLayerConfig: function() { return /* binding */ p; },
/* harmony export */   getLayerJSON: function() { return /* binding */ w; },
/* harmony export */   getPortalItem: function() { return /* binding */ d; },
/* harmony export */   save: function() { return /* binding */ P; },
/* harmony export */   saveAs: function() { return /* binding */ $; },
/* harmony export */   setCommonItemProperties: function() { return /* binding */ I; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ "./node_modules/@arcgis/core/core/accessorSupport/originUtils.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/support/jsonContext.js */ "./node_modules/@arcgis/core/portal/support/jsonContext.js");
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/support/portalItemUtils.js */ "./node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/* harmony import */ var _webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webdoc/support/saveUtils.js */ "./node_modules/@arcgis/core/webdoc/support/saveUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function p(t,r,a){const o=a(t);if(!o.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`${r}:invalid-parameters`,o.errorMessage,{layer:t})}async function l(e){const{layer:t,errorNamePrefix:r,validateLayer:a}=e;await t.load(),p(t,r,a)}function m(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function c(t){const{item:r,errorNamePrefix:a,layer:o,validateItem:i}=t;if(u(t),i){const t=i(r);if(!t.isValid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`${a}:invalid-parameters`,t.errorMessage,{layer:o})}}function u(t){const{item:r,itemType:a,additionalItemType:o,errorNamePrefix:i,layer:n}=t,s=[a];if(o&&s.push(o),!s.includes(r.type)){const t=s.map((e=>`'${e}'`)).join(", ");throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${t}"`,{item:r,layer:n})}}function f(t){const{layer:r,errorNamePrefix:a}=t,{portalItem:o}=r;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`${a}:portal-item-not-set`,m(r,"requires the portalItem property to be set"));if(!o.loaded)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`${a}:portal-item-not-loaded`,m(r,"cannot be saved to a portal item that does not exist or is inaccessible"));c({...t,item:o})}function d(e){const{newItem:t,itemType:o}=e;let i=_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(t);return i.id&&(i=i.clone(),i.id=null),i.type??=o,i.portal??=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault(),c({...e,item:i}),i}function y(e){return (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_4__.createForItemWrite)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,_webdoc_support_saveUtils_js__WEBPACK_IMPORTED_MODULE_6__.evaluateWriteErrors)(t,{errorName:"layer-write:unsupported"},r),a}function I(e){(0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__.addTypeKeyword)(e,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__.typeKeyword.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function v(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}async function P(e,r){const{layer:a,createItemData:o,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await l(e),f(e);const m=a.portalItem,c=i?i(m):y(m),u=await w(a,c,{...r,supplementalUnsupportedErrors:p}),d=await o({layer:a,layerJSON:u},m);return await(n?.(a,m,d)),I(m),await m.update({data:d}),(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateOrigins)(c),await(s?.(m,c)),m}async function $(e,r){const{layer:a,createItemData:o,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=e;await l(e);const m=d(e),c=i?i(m):y(m),u=await w(a,c,{...r,supplementalUnsupportedErrors:p}),f=await o({layer:a,layerJSON:u},m);return await n(a,m,f),I(m),await v(m,f,r),a.portalItem=m,(0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_1__.updateOrigins)(c),await(s?.(m,c)),m}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/fetchService.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/fetchService.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchFeatureService: function() { return /* binding */ t; },
/* harmony export */   getLayerModuleType: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/requestPresets.js */ "./node_modules/@arcgis/core/support/requestPresets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function t(a,t){const{loadContext:r,...n}=t||{},c=r?await r.fetchServiceMetadata(a,n):await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__.fetchArcGISServiceJSON)(a,n);o(c),s(c);const y={serviceJSON:c};if((c.currentVersion??0)<10.5)return y;const i=`${a}/layers`,u=r?await r.fetchServiceMetadata(i,n):await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__.fetchArcGISServiceJSON)(i,n);return o(u),s(u),y.layersJSON={layers:u.layers,tables:u.tables},y}function r(e){const{type:t}=e;return!!t&&a.has(t)}function n(e){return"Table"===e.type}function s(e){e.layers=e.layers?.filter(r),e.tables=e.tables?.filter(n)}function c(e){e.type||="Feature Layer"}function y(e){e.type||="Table"}function o(e){e.layers?.forEach(c),e.tables?.forEach(y)}function i(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layerLookupMap: function() { return /* binding */ a; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/*! import() | BingMapsLayer */ "BingMapsLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../BingMapsLayer.js */ "./node_modules/@arcgis/core/layers/BingMapsLayer.js"))).default,BuildingSceneLayer:async()=>(await __webpack_require__.e(/*! import() | BuildingSceneLayer */ "BuildingSceneLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../BuildingSceneLayer.js */ "./node_modules/@arcgis/core/layers/BuildingSceneLayer.js"))).default,CSVLayer:async()=>(await __webpack_require__.e(/*! import() | CSVLayer */ "CSVLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../CSVLayer.js */ "./node_modules/@arcgis/core/layers/CSVLayer.js"))).default,CatalogLayer:async()=>(await __webpack_require__.e(/*! import() | CatalogLayer */ "CatalogLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../CatalogLayer.js */ "./node_modules/@arcgis/core/layers/CatalogLayer.js"))).default,DimensionLayer:async()=>(await __webpack_require__.e(/*! import() | DimensionLayer */ "DimensionLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../DimensionLayer.js */ "./node_modules/@arcgis/core/layers/DimensionLayer.js"))).default,ElevationLayer:async()=>(await __webpack_require__.e(/*! import() | ElevationLayer */ "ElevationLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ElevationLayer.js */ "./node_modules/@arcgis/core/layers/ElevationLayer.js"))).default,FeatureLayer:async()=>(await __webpack_require__.e(/*! import() | FeatureLayer */ "FeatureLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../FeatureLayer.js */ "./node_modules/@arcgis/core/layers/FeatureLayer.js"))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(/*! import() | GeoJSONLayer */ "GeoJSONLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../GeoJSONLayer.js */ "./node_modules/@arcgis/core/layers/GeoJSONLayer.js"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/*! import() | GeoRSSLayer */ "GeoRSSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../GeoRSSLayer.js */ "./node_modules/@arcgis/core/layers/GeoRSSLayer.js"))).default,GroupLayer:async()=>(await __webpack_require__.e(/*! import() | GroupLayer */ "GroupLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../GroupLayer.js */ "./node_modules/@arcgis/core/layers/GroupLayer.js"))).default,ImageryLayer:async()=>(await __webpack_require__.e(/*! import() | ImageryLayer */ "ImageryLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ImageryLayer.js */ "./node_modules/@arcgis/core/layers/ImageryLayer.js"))).default,ImageryTileLayer:async()=>(await __webpack_require__.e(/*! import() | ImageryTileLayer */ "ImageryTileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ImageryTileLayer.js */ "./node_modules/@arcgis/core/layers/ImageryTileLayer.js"))).default,IntegratedMesh3DTilesLayer:async()=>(await __webpack_require__.e(/*! import() | IntegratedMesh3DTilesLayer */ "IntegratedMesh3DTilesLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../IntegratedMesh3DTilesLayer.js */ "./node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js"))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(/*! import() | IntegratedMeshLayer */ "IntegratedMeshLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../IntegratedMeshLayer.js */ "./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js"))).default,KMLLayer:async()=>(await __webpack_require__.e(/*! import() | KMLLayer */ "KMLLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../KMLLayer.js */ "./node_modules/@arcgis/core/layers/KMLLayer.js"))).default,KnowledgeGraphLayer:async()=>(await __webpack_require__.e(/*! import() | KnowledgeGraphLayer */ "KnowledgeGraphLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../KnowledgeGraphLayer.js */ "./node_modules/@arcgis/core/layers/KnowledgeGraphLayer.js"))).default,LineOfSightLayer:async()=>(await __webpack_require__.e(/*! import() | LineOfSightLayer */ "LineOfSightLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../LineOfSightLayer.js */ "./node_modules/@arcgis/core/layers/LineOfSightLayer.js"))).default,LinkChartLayer:async()=>(await __webpack_require__.e(/*! import() | LinkChartLayer */ "LinkChartLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../LinkChartLayer.js */ "./node_modules/@arcgis/core/layers/LinkChartLayer.js"))).default,MapImageLayer:async()=>(await __webpack_require__.e(/*! import() | MapImageLayer */ "MapImageLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../MapImageLayer.js */ "./node_modules/@arcgis/core/layers/MapImageLayer.js"))).default,MapNotesLayer:async()=>(await __webpack_require__.e(/*! import() | MapNotesLayer */ "MapNotesLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../MapNotesLayer.js */ "./node_modules/@arcgis/core/layers/MapNotesLayer.js"))).default,MediaLayer:async()=>(await __webpack_require__.e(/*! import() | MediaLayer */ "MediaLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../MediaLayer.js */ "./node_modules/@arcgis/core/layers/MediaLayer.js"))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(/*! import() | OGCFeatureLayer */ "OGCFeatureLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../OGCFeatureLayer.js */ "./node_modules/@arcgis/core/layers/OGCFeatureLayer.js"))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(/*! import() | OpenStreetMapLayer */ "OpenStreetMapLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../OpenStreetMapLayer.js */ "./node_modules/@arcgis/core/layers/OpenStreetMapLayer.js"))).default,OrientedImageryLayer:async()=>(await __webpack_require__.e(/*! import() | OrientedImageryLayer */ "OrientedImageryLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../OrientedImageryLayer.js */ "./node_modules/@arcgis/core/layers/OrientedImageryLayer.js"))).default,PointCloudLayer:async()=>(await __webpack_require__.e(/*! import() | PointCloudLayer */ "PointCloudLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../PointCloudLayer.js */ "./node_modules/@arcgis/core/layers/PointCloudLayer.js"))).default,RouteLayer:async()=>(await __webpack_require__.e(/*! import() | RouteLayer */ "RouteLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../RouteLayer.js */ "./node_modules/@arcgis/core/layers/RouteLayer.js"))).default,SceneLayer:async()=>(await __webpack_require__.e(/*! import() | SceneLayer */ "SceneLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../SceneLayer.js */ "./node_modules/@arcgis/core/layers/SceneLayer.js"))).default,StreamLayer:async()=>(await __webpack_require__.e(/*! import() | StreamLayer */ "StreamLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../StreamLayer.js */ "./node_modules/@arcgis/core/layers/StreamLayer.js"))).default,SubtypeGroupLayer:async()=>(await __webpack_require__.e(/*! import() | SubtypeGroupLayer */ "SubtypeGroupLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../SubtypeGroupLayer.js */ "./node_modules/@arcgis/core/layers/SubtypeGroupLayer.js"))).default,TileLayer:async()=>(await __webpack_require__.e(/*! import() | TileLayer */ "TileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../TileLayer.js */ "./node_modules/@arcgis/core/layers/TileLayer.js"))).default,UnknownLayer:async()=>(await __webpack_require__.e(/*! import() | UnknownLayer */ "UnknownLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../UnknownLayer.js */ "./node_modules/@arcgis/core/layers/UnknownLayer.js"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/*! import() | UnsupportedLayer */ "UnsupportedLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../UnsupportedLayer.js */ "./node_modules/@arcgis/core/layers/UnsupportedLayer.js"))).default,VectorTileLayer:async()=>(await __webpack_require__.e(/*! import() | VectorTileLayer */ "VectorTileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../VectorTileLayer.js */ "./node_modules/@arcgis/core/layers/VectorTileLayer.js"))).default,VideoLayer:async()=>(await __webpack_require__.e(/*! import() | VideoLayer */ "VideoLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../VideoLayer.js */ "./node_modules/@arcgis/core/layers/VideoLayer.js"))).default,ViewshedLayer:async()=>(await __webpack_require__.e(/*! import() | ViewshedLayer */ "ViewshedLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ViewshedLayer.js */ "./node_modules/@arcgis/core/layers/ViewshedLayer.js"))).default,VoxelLayer:async()=>(await __webpack_require__.e(/*! import() | VoxelLayer */ "VoxelLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../VoxelLayer.js */ "./node_modules/@arcgis/core/layers/VoxelLayer.js"))).default,WFSLayer:async()=>(await __webpack_require__.e(/*! import() | WFSLayer */ "WFSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WFSLayer.js */ "./node_modules/@arcgis/core/layers/WFSLayer.js"))).default,WMSLayer:async()=>(await __webpack_require__.e(/*! import() | WMSLayer */ "WMSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WMSLayer.js */ "./node_modules/@arcgis/core/layers/WMSLayer.js"))).default,WMTSLayer:async()=>(await __webpack_require__.e(/*! import() | WMTSLayer */ "WMTSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WMTSLayer.js */ "./node_modules/@arcgis/core/layers/WMTSLayer.js"))).default,WebTileLayer:async()=>(await __webpack_require__.e(/*! import() | WebTileLayer */ "WebTileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WebTileLayer.js */ "./node_modules/@arcgis/core/layers/WebTileLayer.js"))).default};


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

/***/ "./node_modules/@arcgis/core/support/requestPresets.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestPresets.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchArcGISServiceJSON: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(t,o){const{data:r}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}


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
//# sourceMappingURL=save-featureLayerUtils.js.map