"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["portal-support-geometryServiceUtils"],{

/***/ "./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGeometryServiceURL: function() { return /* binding */ n; },
/* harmony export */   projectGeometry: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/geometryService/project.js */ "./node_modules/@arcgis/core/rest/geometryService/project.js");
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function n(o=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl)return _config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_4__["default"]({geometries:[r],outSpatialReference:t}),m=await (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_3__.project)(c,s,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/project.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/project.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   project: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/rest/geometryService/utils.js");
/* harmony import */ var _support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/ProjectParameters.js */ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_1__.ensureType)(_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"]);async function n(o,m,n){m=i(m);const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseUrl)(o),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(m.geometries[0]),f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.asValidOptions)(c,n);return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(u.path+"/project",f).then((({data:{geometries:r}})=>(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.decodeGeometries)(r,a,j)))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/ProjectParameters.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/ProjectParameters.js ***!
  \*********************************************************************/
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
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map((r=>r.toJSON())),o=this.geometries[0],t={};return t.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_8__.srToRESTValue)(this.outSpatialReference),t.inSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_8__.srToRESTValue)(o.spatialReference),t.geometries=JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_7__.getJsonType)(o),geometries:r}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],a.prototype,"geometries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{read:{source:"outSR"}}})],a.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],a.prototype,"transformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],a.prototype,"transformForward",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.support.ProjectParameters")],a);const p=a;


/***/ })

}]);
//# sourceMappingURL=portal-support-geometryServiceUtils.js.map