"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["rest-query-executeRelationshipQuery"],{

/***/ "./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeRelationshipQuery: function() { return /* binding */ n; },
/* harmony export */   executeRelationshipQueryForCount: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_queryRelatedRecords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/queryRelatedRecords.js */ "./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js");
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/RelationshipQuery.js */ "./node_modules/@arcgis/core/rest/support/RelationshipQuery.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function n(e,n,u){n=_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(n);const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(e);return (0,_operations_queryRelatedRecords_js__WEBPACK_IMPORTED_MODULE_1__.executeRelationshipQuery)(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(r[t]))),e}))}async function u(r,o,n){o=_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(o);const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(r);return (0,_operations_queryRelatedRecords_js__WEBPACK_IMPORTED_MODULE_1__.executeRelationshipQueryForCount)(u,o,{...n}).then((t=>t.data))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeRelationshipQuery: function() { return /* binding */ s; },
/* harmony export */   executeRelationshipQueryForCount: function() { return /* binding */ n; },
/* harmony export */   toQueryStringParameters: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../operations/urlUtils.js */ "./node_modules/@arcgis/core/rest/operations/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(e,o){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!o?.returnCountOnly?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSR&&(r.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.srToRESTValue)(r.outSR)),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function s(e,t,o){const r=await a(e,t,o),s=r.data,n=s.geometryType,d=s.spatialReference,c={};for(const a of s.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:d,hasZ:!!s.hasZ,hasM:!!s.hasM,features:a.relatedRecords};if(null!=a.objectId)c[a.objectId]=e;else for(const t of Object.keys(a))"relatedRecords"!==t&&(c[a[t]]=e)}return{...r,data:c}}async function n(e,t,o){const r=await a(e,t,o,{returnCountOnly:!0}),s=r.data,n={};for(const a of s.relatedRecordGroups)null!=a.objectId&&(n[a.objectId]=a.count);return{...r,data:n}}async function a(t,s,n={},a){const d=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.mapParameters)({...t.query,f:"json",...a,...r(s,a)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t.path+"/queryRelatedRecords",{...n,query:{...n.query,...d}})}


/***/ })

}]);
//# sourceMappingURL=rest-query-executeRelationshipQuery.js.map