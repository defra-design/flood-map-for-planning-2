"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["arcade"],{

/***/ "./node_modules/@arcgis/core/arcade.js":
/*!*********************************************!*\
  !*** ./node_modules/@arcgis/core/arcade.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createArcadeExecutor: function() { return /* binding */ A; },
/* harmony export */   createArcadeProfile: function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arcade/ArcadeDate.js */ "./node_modules/@arcgis/core/arcade/ArcadeDate.js");
/* harmony import */ var _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arcade/ImmutableArray.js */ "./node_modules/@arcgis/core/arcade/ImmutableArray.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/sql/DateOnly.js */ "./node_modules/@arcgis/core/core/sql/DateOnly.js");
/* harmony import */ var _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/sql/TimeOnly.js */ "./node_modules/@arcgis/core/core/sql/TimeOnly.js");
/* harmony import */ var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layers/FeatureLayer.js */ "./node_modules/@arcgis/core/layers/FeatureLayer.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rest/support/FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/arcadeOnDemand.js */ "./node_modules/@arcgis/core/support/arcadeOnDemand.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=null;function f(e,t,a,n={}){const o=t.elementType,s="value",c="array"===o.type?[{name:s,type:o.type,elementType:o.elementType}]:"dictionary"===o.type?[{name:s,type:o.type,properties:o.properties}]:[{name:s,type:o.type}];return new _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.map((e=>{const t={};return b(t,c,{[s]:e},a,n),t[s]})))}function m(e,t,r={}){const a=e instanceof _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"]?new _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_7__["default"]({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(a,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function y(e,t,r={}){const{spatialReference:a,interceptor:n,lruCache:o}=r;return"string"==typeof e?t.createFeatureSetCollectionFromService(e,a,o,n):t.createFeatureSetCollectionFromMap(e,a,o,n)}function d(e,t,r,a={}){const n={};return b(n,t.properties,e,r,a),new p.Dictionary(n)}function b(e,r,a,n,c={}){const i={};for(const t of Object.keys(a))i[t.toLowerCase()]=a[t];for(const l of r){const r=l.name.toLowerCase();if(c.variablesPreProcessed)e[r]=i[r];else switch(l.type){case"array":{const t=i[r];e[r]=null==t?null:f(t,l,n,c);break}case"feature":{const t=i[r];e[r]=null==t?null:p.Feature.createFromGraphic(t,c?.timeZone);break}case"featureSet":{const t=i[r];e[r]=null==t?null:n?m(t,n,c):null;break}case"featureSetCollection":{const t=i[r];e[r]=null==t?null:n?y(t,n,c):null;break}case"dictionary":{const t=i[r];e[r]=null==t?null:d(t,l,n,c);break}case"date":{const a=i[r];e[r]=a?a instanceof _arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_1__.ArcadeDate?a:c?.timeZone?_arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_1__.ArcadeDate.dateJSAndZoneToArcadeDate(a,c?.timeZone):_arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_1__.ArcadeDate.dateJSToArcadeDate(a):null;break}case"dateOnly":{const t=i[r];e[r]=t?t instanceof _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_5__.DateOnly?t:_core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_5__.DateOnly.fromReader(t):null;break}case"time":{const t=i[r];e[r]=t?t instanceof _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_6__.TimeOnly?t:_core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_6__.TimeOnly.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[r]=i[r]}}}function v(e,t){for(const r of e)t.push(r),"dictionary"===r.type&&v(r.properties,t);return t}function S(e,t,r,a,n){const{spatialReference:o,interceptor:s,lruCache:c,console:l,abortSignal:u,timeZone:p,services:f={portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_8__["default"].getDefault()}}=r,m={vars:{},spatialReference:o,interceptor:s,timeZone:p,lrucache:c,useAsync:n,services:f,console:l,abortSignal:u};return t?(b(m.vars,e.variables,t,a,r),m):m}function g(t,r){switch(r.getArcadeType(t)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return t;case"date":return t.toJSDate();case"time":case"dateOnly":return t.toString();case"feature":{const r=(t.type,t),a="geometry"in r?r.geometry():null,n="readAttributes"in r?r.readAttributes():r.attributes;return new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]({geometry:a,attributes:n})}case"dictionary":{const e=t,a=e.attributes,n={};for(const t of Object.keys(a))n[t]=g(e.field(t),r);return n}case"array":return("toArray"in t?t.toArray():t).map((e=>g(e,r)))}return t}const w={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},$={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},h=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",w],["popup-element",w],["feature-reduction-popup",$],["feature-reduction-popup-element",$],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function C(e){const t=h.get(e);if(!t){const t=Array.from(h.keys()).map((e=>`'${e}'`)).join(", ");throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${t}`)}return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_4__.clone)(t)}async function A(e,t,r={}){p||(p=await (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_10__.loadArcade)());const{arcade:n,arcadeUtils:o}=p,{loadScriptDependencies:s,referencesMember:c,scriptIsAsync:i}=n,l=v(t.variables,[]),f=l.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),m=n.parseScript(e,f);if(!m)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("arcade:invalid-script","Unable to create SyntaxTree");const y=o.extractFieldNames(m),d=n.scriptTouchesGeometry(m),b=l.map((e=>e.name.toLowerCase())).filter((e=>c(m,e))),w=i(m,f);await s(m,w,f);const $={vars:{},spatialReference:null,useAsync:w};for(const a of b)$.vars[a]="any";const{lruCache:h}=r,C=n.compileScript(m,$),A=n.featureSetUtils(),{services:j}=r;return{execute:(e,r={})=>{if(w)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const n=C(S(t,e,{lruCache:h,...r},A,w));return r.rawOutput?n:g(n,o)},executeAsync:async(e,r={})=>{const a=await C(S(t,e,{lruCache:h,services:j,...r},A,w));return r.rawOutput?a:g(a,o)},isAsync:w,variablesUsed:b,fieldsUsed:y,geometryUsed:d,syntaxTree:m}}


/***/ }),

/***/ "./node_modules/@arcgis/core/arcade/ImmutableArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/arcade/ImmutableArray.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t=[]){this._elements=t}length(){return this._elements.length}get(t){return this._elements[t]}toArray(){return this.slice()}slice(t=0,e=this.length()){const s=[];for(let r=t;r<e;r++)s.push(this.get(r));return s}}


/***/ })

}]);
//# sourceMappingURL=arcade.js.map