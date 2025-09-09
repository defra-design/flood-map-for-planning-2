"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["rest-knowledgeGraphService"],{

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _EntityType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EntityType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js");
/* harmony import */ var _RelationshipType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RelationshipType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js");
/* harmony import */ var _SourceTypeValueBehavior_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SourceTypeValueBehavior.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/SourceTypeValueBehavior.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null,this.provenanceSourceTypeValues=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.timestamp=e?.getTime()}}}})],l.prototype,"timestamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],l.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],l.prototype,"strict",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],l.prototype,"objectIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],l.prototype,"globalIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"arcgisManaged",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"identifierInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],l.prototype,"searchIndexes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_EntityType_js__WEBPACK_IMPORTED_MODULE_8__["default"]],json:{write:!0}})],l.prototype,"entityTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_RelationshipType_js__WEBPACK_IMPORTED_MODULE_9__["default"]],json:{write:!0}})],l.prototype,"relationshipTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_EntityType_js__WEBPACK_IMPORTED_MODULE_8__["default"]],json:{write:!0}})],l.prototype,"metaEntityTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_SourceTypeValueBehavior_js__WEBPACK_IMPORTED_MODULE_10__["default"]],json:{write:!0}})],l.prototype,"provenanceSourceTypeValues",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.DataModel")],l);const a=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _GraphObjectType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphObjectType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _GraphObjectType_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(r){super(r),this.type="entity"}};t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.rest.knowledgeGraph.EntityType")],t);const e=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],s.prototype,"unique",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],s.prototype,"ascending",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],s.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[String],json:{write:!0}})],s.prototype,"fieldNames",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.FieldIndex")],s);const i=s;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphApplyEditsResult.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphApplyEditsResult.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(r){super(r),this.hasError=null,this.error=null,this.editResults=[]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"hasError",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"error",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"editResults",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.GraphApplyEditsResult")],e);const p=e;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _FieldIndex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldIndex.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js");
/* harmony import */ var _GraphProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GraphProperty.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"role",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"strict",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_GraphProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"]],json:{write:!0}})],i.prototype,"properties",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_FieldIndex_js__WEBPACK_IMPORTED_MODULE_7__["default"]],json:{write:!0}})],i.prototype,"fieldIndexes",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.GraphObjectType")],i);const l=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"fieldType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"nullable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"editable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"required",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"defaultVisibility",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],i.prototype,"systemMaintained",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"role",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0}})],i.prototype,"defaultValue",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.GraphProperty")],i);const s=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResult.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResult.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GraphQueryResultHeader.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(r){super(r),this.resultRows=[],this.resultHeader=new _GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_7__["default"]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"resultRows",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],p.prototype,"resultHeader",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.GraphQueryResult")],p);const c=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"headerKeys",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"exceededTransferLimit",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.GraphQueryResultHeader")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreamingResult.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreamingResult.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GraphQueryResultHeader.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(r){super(r),this.resultRowsStream=new ReadableStream,this.resultHeader=new _GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_7__["default"]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],a.prototype,"resultRowsStream",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],a.prototype,"resultHeader",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.GraphQueryStreamingResult")],a);const p=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/KnowledgeGraph.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/KnowledgeGraph.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _DataModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DataModel.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js");
/* harmony import */ var _ServiceDefinition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceDefinition.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.dataModel=null,this.serviceDefinition=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_DataModel_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],p.prototype,"dataModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_ServiceDefinition_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],p.prototype,"serviceDefinition",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.KnowledgeGraph")],p);const c=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js ***!
  \***************************************************************************/
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
/* harmony import */ var _GraphObjectType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphObjectType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _GraphObjectType_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(o){super(o),this.endPoints=[],this.type="relationship"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)()],t.prototype,"endPoints",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.rest.knowledgeGraph.RelationshipType")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/SearchIndex.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/SearchIndex.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(r){super(r),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"supportedCategory",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"analyzers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],t.prototype,"searchProperties",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.SearchIndex")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[String],json:{write:!0}})],p.prototype,"capabilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"supportsSearch",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[String],json:{write:!0}})],p.prototype,"supportedQueryFormats",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"allowGeometryUpdates",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"searchMaxRecordCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Object,json:{write:!0}})],p.prototype,"serviceCapabilities",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"maxRecordCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"copyrightText",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__["default"],json:{write:!0}})],p.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],p.prototype,"currentVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Object,json:{write:!0}})],p.prototype,"dateFieldsTimeReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],p.prototype,"serviceItemId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"supportsDocuments",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"dataEditingNotSupported",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"schemaEditingNotSupported",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Boolean,json:{write:!0}})],p.prototype,"supportsProvenance",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.ServiceDefinition")],p);const s=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/SourceTypeValueBehavior.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/SourceTypeValueBehavior.js ***!
  \**********************************************************************************/
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
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(o){super(o),this.value=null,this.behavior=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],t.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],t.prototype,"behavior",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.rest.knowledgeGraph.SourceTypeValueBehavior")],t);const p=t;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/KnowledgeWasmInterface.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/KnowledgeWasmInterface.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WasmGeometryTypeCodes: function() { return /* binding */ E; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var E;!function(E){E[E.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",E[E.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",E[E.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",E[E.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",E[E.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",E[E.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",E[E.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",E[E.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"}(E||(E={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmClientDataInterfaces.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmClientDataInterfaces.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientDataKeyType: function() { return /* binding */ e; },
/* harmony export */   ClientDataType: function() { return /* binding */ t; },
/* harmony export */   DataValueCase: function() { return /* binding */ i; },
/* harmony export */   FetchResultCase: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e,t,i,n;!function(e){e[e.ClientDataKeyTypeUNSPECIFIED=0]="ClientDataKeyTypeUNSPECIFIED",e[e.ClientDataKeyTypeString=1]="ClientDataKeyTypeString"}(e||(e={})),function(e){e[e.ClientDataTypeUNSPECIFIED=0]="ClientDataTypeUNSPECIFIED",e[e.ClientDataTypeString=1]="ClientDataTypeString"}(t||(t={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.ClientData=1]="ClientData",e[e.NotModified=2]="NotModified"}(i||(i={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.Error=1]="Error",e[e.ClientDataValue=2]="ClientDataValue"}(n||(n={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EsriFieldTypes: function() { return /* binding */ r; },
/* harmony export */   EsriGeometryTypes: function() { return /* binding */ i; },
/* harmony export */   EsriGraphPropertyRole: function() { return /* binding */ p; },
/* harmony export */   EsriIdentifierInfoType: function() { return /* binding */ n; },
/* harmony export */   EsriNamedTypeCategory: function() { return /* binding */ o; },
/* harmony export */   EsriUuidMethodHintTypes: function() { return /* binding */ t; },
/* harmony export */   NamedObjectTypes: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e,r,i,t,o,p,n;!function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"}(e||(e={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(r||(r={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(i||(i={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(t||(t={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(o||(o={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",e[e.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",e[e.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",e[e.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",e[e.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",e[e.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",e[e.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",e[e.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName"}(p||(p={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(n||(n={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WasmGraphQueryResponseTypeCodes: function() { return /* binding */ e; },
/* harmony export */   WasmProvenanceBehaviorValues: function() { return /* binding */ i; },
/* harmony export */   WasmQuantizeModeCodes: function() { return /* binding */ T; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e,T,i;!function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"}(e||(e={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(T||(T={})),function(e){e[e.exclude=0]="exclude",e[e.include=1]="include"}(i||(i={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/clientDataToWasmEncodedFactories.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/clientDataToWasmEncodedFactories.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clientDataKeyToWasmFetchRequestParam: function() { return /* binding */ n; },
/* harmony export */   encodeClientDataAtKeysRequest: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _wasmUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasmUtils.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r,a,o=!1){const c=new a.ClientDataFetchRequestEncoder;c.deleteLater();for(const e of t){const t=n(e,r,a,o);c.add_client_data_fetch_request_parameter(t)}c.encode();const s=c.get_encoding_result();return (0,_wasmUtils_js__WEBPACK_IMPORTED_MODULE_0__.checkWasmError)(s.error,"knowledge-graph:fetchClientDataAtKeys-encoding-failed","Attempting to encode the fetchClientDataAtKeys failed"),structuredClone(s.get_byte_buffer())}function n(e,t,n,r){const a=new n.ClientDataKey;a.deleteLater(),a.key_string=e;const o=new n.ClientDataFetchRequestParameter;o.deleteLater(),o.set_key(a);const c=t.get(e);return c&&!r&&(o.v_tag={v_tag:c.version}),o}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewInterface: function() { return /* binding */ o; },
/* harmony export */   getWasmInterface: function() { return /* binding */ r; },
/* harmony export */   test: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t="esri/rest/knowledgeGraph/wasmInterface/";let s,n=null;async function r(){const e=n??s;if(e)return e;const t=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("wasm-simd");return s=o(t),s}async function o(s){if(s){const{default:s}=await __webpack_require__.e(/*! import() | chunks-arcgis-knowledge-client-core-simd */ "chunks-arcgis-knowledge-client-core-simd").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chunks/arcgis-knowledge-client-core-simd.js */ "./node_modules/@arcgis/core/chunks/arcgis-knowledge-client-core-simd.js")).then((e=>e.a));return s({locateFile:s=>(0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(t+s)})}const{default:n}=await __webpack_require__.e(/*! import() | chunks-arcgis-knowledge-client-core */ "chunks-arcgis-knowledge-client-core").then(__webpack_require__.bind(__webpack_require__, /*! ../../../chunks/arcgis-knowledge-client-core.js */ "./node_modules/@arcgis/core/chunks/arcgis-knowledge-client-core.js")).then((e=>e.a));return n({locateFile:s=>(0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(t+s)})}const a={setWasmInterfacePromise:e=>n=e,restoreWasmInterfacePromise:()=>n=null};


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindParamArrayToWasm: function() { return /* binding */ s; },
/* harmony export */   bindParamObjectToWasm: function() { return /* binding */ l; },
/* harmony export */   geometryToWasm: function() { return /* binding */ u; },
/* harmony export */   setInputQuantizationParametersOnEncoder: function() { return /* binding */ y; },
/* harmony export */   setOutputQuantizationParametersOnEncoder: function() { return /* binding */ m; },
/* harmony export */   setProvenanceBehaviorOnEncoder: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/Multipoint.js */ "./node_modules/@arcgis/core/geometry/Multipoint.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WasmQueryWrapperInterfaces.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js");
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/Geometry.js */ "./node_modules/@arcgis/core/geometry/Geometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(e,t){const n=new t.ArrayValue;return n.deleteLater(),e.forEach((e=>{n.add_value(f(e,t))})),n}function l(e,t){const n=new t.ObjectValue;n.deleteLater();for(const[o,r]of Object.entries(e))n.set_key_value(o,f(r,t));return n}function u(a,i){if(a instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_2__["default"])return g(a,i);if(a instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"])return h(a,i);if(a instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]||a instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"])return p(a,i);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:a})}function y(e,t){t.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function m(t,n,o){if(!t.extent)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",t.extent);if(!t.quantizeMode)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",t.quantizeMode);if(!t.tolerance)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",t.quantizeMode);n.output_quantization_parameters={extent:{xmax:t.extent.xmax,ymax:t.extent.ymax,xmin:t.extent.xmin,ymin:t.extent.ymin},quantize_mode:o.esriQuantizeMode[t.quantizeMode],tolerance:t.tolerance}}function c(e,t){t.provenance_behavior={value:_WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_6__.WasmProvenanceBehaviorValues[e]}}function f(e,t){if(null==e)return"";if("object"!=typeof e)return e;if(e instanceof Date)return e;if(e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__["default"])return u(e,t);if(Array.isArray(e)){const n=new t.ArrayValue;return n.deleteLater(),e.forEach((e=>{n.add_value(f(e,t))})),n}return l(e,t)}function p(e,t){const n=new t.GeometryValue;n.deleteLater(),n.has_z=e.hasZ,n.has_m=e.hasM;const a=[],i=[];let s=[];e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_5__["default"]?(n.geometry_type=t.esriGeometryType.esriGeometryPolyline,s=e.paths):e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_4__["default"]&&(n.geometry_type=t.esriGeometryType.esriGeometryPolygon,s=e.rings);let l=0,u=0;return s.forEach((e=>{let t=0;e.forEach((e=>{t++,e.forEach((e=>{a[u]=e,u++}))})),i[l]=t,l++})),n.coords=new Float64Array(a),n.lengths=new Uint32Array(i),n}function g(e,t){const n=new t.GeometryValue;n.deleteLater(),n.geometry_type=n.geometry_type=t.esriGeometryType.esriGeometryMultipoint,n.has_z=e.hasZ,n.has_m=e.hasM;const o=[],r=[];r[0]=e.points.length;let a=0;return e.points.forEach((e=>{e.forEach((e=>{o[a]=e,a++}))})),n.coords=new Float64Array(o),n.lengths=new Uint32Array(r),n}function h(e,t){const n=new t.GeometryValue;n.deleteLater(),n.geometry_type=t.esriGeometryType.esriGeometryPoint,n.has_z=e.hasZ,n.has_m=e.hasM;const o=[],r=[];r[0]=1,o[0]=e.x,o[1]=e.y;let a=2;return e.hasZ&&(o[a]=e.z,a++),e.hasM&&(o[a]=e.m,a++),n.coords=new Float64Array(o),n.lengths=new Uint32Array(r),n}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputQuantizationParametersToWasmFormat: function() { return /* binding */ s; },
/* harmony export */   namedObjectToWasm: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entity.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/Entity.js");
/* harmony import */ var _Relationship_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Relationship.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/Relationship.js");
/* harmony import */ var _queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryToWasmEncodedFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js");
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/Geometry.js */ "./node_modules/@arcgis/core/geometry/Geometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(i,n){if(!i.typeName)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(i instanceof _Entity_js__WEBPACK_IMPORTED_MODULE_2__["default"]){const e=new n.EntityValue;e.deleteLater(),e.type_name=i.typeName;for(const[t,o]of Object.entries(i.properties))e.set_key_value(t,a(o,n));return i.id&&e.set_id(i.id),e}if(i instanceof _Relationship_js__WEBPACK_IMPORTED_MODULE_3__["default"]){const e=new n.RelationshipValue;e.deleteLater(),e.type_name=i.typeName;for(const[t,o]of Object.entries(i.properties))e.set_key_value(t,a(o,n));return i.id&&e.set_id(i.id),i.originId&&i.destinationId&&e.set_related_entity_ids(i.originId,i.destinationId),e}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function s(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}function a(e,t){return null==e?null:"object"!=typeof e||e instanceof Date?e:e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_5__["default"]?(0,_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_4__.geometryToWasm)(e,t):null}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToClientDataFactories.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToClientDataFactories.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wasmClientDataAllKeysResponseToClientDataKeys: function() { return /* binding */ _; },
/* harmony export */   wasmClientDataFetchResponseToClientData: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _WasmClientDataInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WasmClientDataInterfaces.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmClientDataInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(a,n,_,s=!1){const r=new Map;for(let o=0;o<a.get_results_count();o++){const g=a.get_result_at(o);if(g.get_fetch_result_case().value!==_WasmClientDataInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.FetchResultCase.ClientDataValue||0!==g.error().error_code){const e=g.get_key().key_string;_.has(e)&&n.delete(e);continue}const l=g.get_value(),i=g.get_key().key_string,c=_.get(i);let u;if(l.get_data_case().value===_WasmClientDataInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.DataValueCase.NotModified&&c)u=c.value;else{if(l.get_data_case().value!==_WasmClientDataInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.DataValueCase.ClientData)continue;{u=l.get_data().client_data_string;const e=g.get_value().get_v_tag().v_tag;s||n.set(i,{key:i,version:e,value:u})}}r.set(i,u)}return r}function _(e){const t=e.get_keys(),n=new Array;for(let _=0;_<t.get_keys_count();_++){const e=t.get_key_at(_);e.get_client_data_key_type().value===_WasmClientDataInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.ClientDataKeyType.ClientDataKeyTypeString&&n.push(e.key_string)}return n}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelFactories.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelFactories.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wasmToDataModel: function() { return /* binding */ h; },
/* harmony export */   wasmToEntityType: function() { return /* binding */ v; },
/* harmony export */   wasmToFieldIndex: function() { return /* binding */ b; },
/* harmony export */   wasmToGraphObjectType: function() { return /* binding */ j; },
/* harmony export */   wasmToGraphProperty: function() { return /* binding */ T; },
/* harmony export */   wasmToRelationshipType: function() { return /* binding */ w; },
/* harmony export */   wasmToSourceTypeValueBehavior: function() { return /* binding */ I; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _DataModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataModel.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/DataModel.js");
/* harmony import */ var _EntityType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EntityType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/EntityType.js");
/* harmony import */ var _FieldIndex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FieldIndex.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/FieldIndex.js");
/* harmony import */ var _GraphObjectType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GraphObjectType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphObjectType.js");
/* harmony import */ var _GraphProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GraphProperty.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphProperty.js");
/* harmony import */ var _RelationshipType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RelationshipType.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/RelationshipType.js");
/* harmony import */ var _SearchIndex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SearchIndex.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/SearchIndex.js");
/* harmony import */ var _SourceTypeValueBehavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SourceTypeValueBehavior.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/SourceTypeValueBehavior.js");
/* harmony import */ var _WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WasmDataModelWrapperInterfaces.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmDataModelWrapperInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let g=!1;function h(r){r.deleteLater(),g=!1;const n=new _DataModel_js__WEBPACK_IMPORTED_MODULE_2__["default"]({timestamp:r.timestamp,spatialReference:new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"](r.spatial_reference),strict:r.strict,objectIdField:r.objectid_property,globalIdField:r.globalid_property,arcgisManaged:r.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriIdentifierInfoType[r.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:r.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:r.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriUuidMethodHintTypes[r.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:S(r.search_indexes),entityTypes:L(r.entity_types),relationshipTypes:F(r.relationship_types),metaEntityTypes:L(r.meta_entity_types),provenanceSourceTypeValues:G(r.provenance_source_type_values.value_behavior_array)});return g&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("A big integer field was detected in the retrieved data model.  The `big-integer` field type is not fully supported in web clients.  Please see https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type"),n}function v(e){return e.deleteLater(),new _EntityType_js__WEBPACK_IMPORTED_MODULE_3__["default"](z(e))}function b(e){return e.deleteLater(),new _FieldIndex_js__WEBPACK_IMPORTED_MODULE_4__["default"]({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:x(e.fields)})}function j(e){return e.deleteLater(),new _GraphObjectType_js__WEBPACK_IMPORTED_MODULE_5__["default"](z(e))}function z(e){return{name:e.name,alias:e.alias,role:_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.NamedObjectTypes[e.role.value]?_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.NamedObjectTypes[e.role.value]:null,strict:e.strict,properties:M(e.properties),fieldIndexes:P(e.field_indexes)}}function T(e){return e.deleteLater(),new _GraphProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"]({alias:e.alias,name:e.name,fieldType:_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriFieldTypes[e.field_type.value]?_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriFieldTypes[e.field_type.value]:null,geometryType:_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriGeometryTypes[e.geometry_type.value]?_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriGeometryTypes[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriGraphPropertyRole[e.role.value],defaultValue:e.default_value})}function w(e){e.deleteLater();const t=z(e),i=[];for(let r=0;r<e.end_points.size();r++){const t=e.end_points.get(r);i.push({originEntityType:t.origin_entity_type,destinationEntityType:t.dest_entity_type})}return e.end_points.delete(),new _RelationshipType_js__WEBPACK_IMPORTED_MODULE_7__["default"](Object.assign({endPoints:i},t))}function I(e){return new _SourceTypeValueBehavior_js__WEBPACK_IMPORTED_MODULE_9__["default"]({behavior:e.behavior,value:e.value})}function L(e){const t=[];for(let i=0;i<e.size();i++)t.push(v(e.get(i)));return e.delete(),t}function x(e){const t=[];for(let i=0;i<e.size();i++)t.push(e.get(i));return e.delete(),t}function M(e){const t=[];for(let i=0;i<e.size();i++){const r=T(e.get(i));"esriFieldTypeBigInteger"===r.fieldType&&(g=!0),t.push(r)}return e.delete(),t}function P(e){const t=[];for(let i=0;i<e.size();i++)t.push(b(e.get(i)));return e.delete(),t}function F(e){const t=[];for(let i=0;i<e.size();i++)t.push(w(e.get(i)));return e.delete(),t}function G(e){const t=[];for(let i=0;i<e.size();i++){const r=e.get(i);r.deleteLater(),t.push(I(r))}return e.delete(),t}function S(e){const t=[];for(let i=0;i<e.size();i++){const i=new _SearchIndex_js__WEBPACK_IMPORTED_MODULE_8__["default"],r=e.get(0);i.name=r.name,i.supportedCategory=_WasmDataModelWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_10__.EsriNamedTypeCategory[r.supported_category.value];const n=r.analyzers.size();for(let e=0;e<n;e++)i.analyzers.push({name:r.analyzers.get(e).name});r.analyzers.delete();for(let e=0;e<r.search_properties.keys().size();e++){const t=r.search_properties.keys().get(e),n=r.search_properties.get(t),a=[];for(let e=0;e<n.property_names.size();e++)a.push(n.property_names.get(e));i.searchProperties.set(t,{propertyNames:a})}t.push(i)}return e.delete(),t}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToGeometryFactories.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToGeometryFactories.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wasmToMultipointGeometry: function() { return /* binding */ a; },
/* harmony export */   wasmToPointGeometry: function() { return /* binding */ h; },
/* harmony export */   wasmToPolygonGeometry: function() { return /* binding */ i; },
/* harmony export */   wasmToPolylineGeometry: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/Multipoint.js */ "./node_modules/@arcgis/core/geometry/Multipoint.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KnowledgeWasmInterface.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/KnowledgeWasmInterface.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(e,o){const s={spatialReference:o},r=c(e,s),n=e.lengths,a=e.coords,h=n[0];s.points=[];let l=0;for(let t=0;t<h;t++){const e=[];for(let t=0;t<r;t++)e[t]=a[l],l++;s.points.push(e)}return new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_1__["default"](s)}function h(e,t){const s={spatialReference:t};let r=2;c(e,s);const n=e.coords;return s.x=n[0],s.y=n[1],e.has_z&&(s.z=n[r],r++),e.has_m&&(s.m=n[r]),new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"](s)}function l(e,t){const{paths:o,hasM:s,hasZ:a}=p(e,_KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_5__.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYLINE);return new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:o,hasM:s,hasZ:a,spatialReference:t})}function i(e,t){const{paths:o,hasM:r,hasZ:a}=p(e,_KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_5__.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYGON);return new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:o,hasM:r,hasZ:a,spatialReference:t})}function p(t,o){const s={paths:[],hasM:!1,hasZ:!1},r=c(t,s),{coords:n,geometry_type:a,lengths:h}=t;if(a.value!==o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");let l=0;return h.forEach((e=>{const t=[];for(let o=0;o<e;o++){const e=[];for(let t=0;t<r;t++)e[t]=n[l],l++;t.push(e)}s.paths.push(t)})),s}function c(e,t){let o=2;return e.has_z?(t.hasZ=e.has_z,o++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,o++):t.hasM=!1,o}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeWasmObjectTest: function() { return /* binding */ f; },
/* harmony export */   decodedWasmObjToQueryResponseObj: function() { return /* binding */ g; },
/* harmony export */   wasmArrayToArray: function() { return /* binding */ y; },
/* harmony export */   wasmToEntity: function() { return /* binding */ E; },
/* harmony export */   wasmToGraphObject: function() { return /* binding */ R; },
/* harmony export */   wasmToGraphQueryResponseHeader: function() { return /* binding */ w; },
/* harmony export */   wasmToObjectValue: function() { return /* binding */ j; },
/* harmony export */   wasmToPath: function() { return /* binding */ T; },
/* harmony export */   wasmToRelationship: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entity.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/Entity.js");
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GraphObject.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphObject.js");
/* harmony import */ var _GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GraphQueryResultHeader.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js");
/* harmony import */ var _ObjectValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ObjectValue.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/ObjectValue.js");
/* harmony import */ var _Path_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Path.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/Path.js");
/* harmony import */ var _Relationship_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Relationship.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/Relationship.js");
/* harmony import */ var _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KnowledgeWasmInterface.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/KnowledgeWasmInterface.js");
/* harmony import */ var _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WasmQueryWrapperInterfaces.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/WasmQueryWrapperInterfaces.js");
/* harmony import */ var _wasmToGeometryFactories_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wasmToGeometryFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToGeometryFactories.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),f={decodedWasmObjToQueryResponseObj:(e,t,r)=>{if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_POINT:return (0,_wasmToGeometryFactories_js__WEBPACK_IMPORTED_MODULE_10__.wasmToPointGeometry)(e,r);case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTIPOINT:return (0,_wasmToGeometryFactories_js__WEBPACK_IMPORTED_MODULE_10__.wasmToMultipointGeometry)(e,r);case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYLINE:return (0,_wasmToGeometryFactories_js__WEBPACK_IMPORTED_MODULE_10__.wasmToPolylineGeometry)(e,r);case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_POLYGON:return (0,_wasmToGeometryFactories_js__WEBPACK_IMPORTED_MODULE_10__.wasmToPolygonGeometry)(e,r);case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_ENVELOPE:case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_MULTI_PATCH:return m().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_NULL:case _KnowledgeWasmInterface_js__WEBPACK_IMPORTED_MODULE_8__.WasmGeometryTypeCodes.ESRI_GEOMETRY_ANY:default:return m().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return m().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.WasmGraphQueryResponseTypeCodes.OBJECT:return j(e,t,r);case _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.WasmGraphQueryResponseTypeCodes.ENTITY:return E(e,t,r);case _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.WasmGraphQueryResponseTypeCodes.RELATIONSHIP:return h(e,t,r);case _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.WasmGraphQueryResponseTypeCodes.PATH:return T(e,t,r);case _WasmQueryWrapperInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.WasmGraphQueryResponseTypeCodes.ARRAY:return y(e,t,r);default:return m().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function y(e,t,r){const n=[],o=e.count();for(let s=0;s<o;s++){const o=e.get_value_at(s);n.push(g(o,t,r))}return n}function g(e,t,r){return f.decodedWasmObjToQueryResponseObj(e,t,r)}function E(e,r,n){const o=e.type_name,s=O(e,r,n),a=e.get_id();return new _Entity_js__WEBPACK_IMPORTED_MODULE_2__["default"](Object.assign({typeName:o,id:a},s))}function R(e,t,n){return new _GraphObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](O(e,t,n))}function O(e,t,r){const n={},o=e.key_count();for(let s=0;s<o;s++)n[e.get_key_at(s)]=g(e.get_value_at(s),t,r);return{properties:n}}function j(e,t,r){return new _ObjectValue_js__WEBPACK_IMPORTED_MODULE_5__["default"](O(e,t,r))}function T(e,t,r){const n=e.entity_count(),o=e.relationship_count(),a=[];for(let s=0;s<n;s++)a.push(E(e.get_entity_at(s),t,r)),s<o&&a.push(h(e.get_relationship_at(s),t,r));return new _Path_js__WEBPACK_IMPORTED_MODULE_6__["default"]({path:a})}function h(e,t,r){const n=e.type_name,o=O(e,t,r);return new _Relationship_js__WEBPACK_IMPORTED_MODULE_7__["default"](Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}function w(e){const t=[];for(let n=0;n<e.get_header_keys().size();n++)t.push(e.get_header_keys().get(n));const r=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"](e.get_out_sr());return new _GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_4__["default"]({headerKeys:t,outSpatialReference:r,exceededTransferLimit:e.exceeded_transfer_limit()})}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decoderToApplyEditsResponse: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _GraphApplyEditsResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GraphApplyEditsResult.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphApplyEditsResult.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){const o=e.has_error(),t=new _GraphApplyEditsResult_js__WEBPACK_IMPORTED_MODULE_0__["default"]({hasError:o,error:o?{errorCode:e.error.error_code,errorMessage:e.error.error_message}:null}),s=e.get_edit_results_count();for(let r=0;r<s;r++){const o=e.get_edit_results_at(r),s=e.get_edit_results_type_name_at(r),_=[],d=[],u=[],a=o.get_add_results_count(),l=o.get_update_results_count(),g=o.get_delete_results_count();for(let r=0;r<a;r++){const e=o.get_add_result_at(r);_.push({id:e.id,error:{errorCode:e.error.error_code,errorMessage:e.error.error_message}})}for(let r=0;r<l;r++){const e=o.get_update_result_at(r);d.push({id:e.id,error:{errorCode:e.error.error_code,errorMessage:e.error.error_message}})}for(let r=0;r<g;r++){const e=o.get_delete_result_at(r);u.push({id:e.id,error:{errorCode:e.error.error_code,errorMessage:e.error.error_message}})}t.editResults.push({typeName:s,adds:_,updates:d,deletes:u})}return t}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmUtils.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkWasmError: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,o,s){if(0!==e.error_code)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o,s,{errorCode:e.error_code,errorMessage:e.error_message})}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/knowledgeGraphService.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/knowledgeGraphService.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _fetchWrapper: function() { return /* binding */ I; },
/* harmony export */   _getClientDataCacheCopy: function() { return /* binding */ D; },
/* harmony export */   clearClientDataCache: function() { return /* binding */ P; },
/* harmony export */   clientDataCache: function() { return /* binding */ C; },
/* harmony export */   executeApplyEdits: function() { return /* binding */ q; },
/* harmony export */   executeQuery: function() { return /* binding */ R; },
/* harmony export */   executeQueryStreaming: function() { return /* binding */ M; },
/* harmony export */   executeSearch: function() { return /* binding */ Q; },
/* harmony export */   executeSearchStreaming: function() { return /* binding */ j; },
/* harmony export */   fetchAllClientDataKeys: function() { return /* binding */ H; },
/* harmony export */   fetchClientDataAtKeys: function() { return /* binding */ W; },
/* harmony export */   fetchKnowledgeGraph: function() { return /* binding */ F; },
/* harmony export */   kgRestServices: function() { return /* binding */ E; },
/* harmony export */   refreshDataModel: function() { return /* binding */ K; },
/* harmony export */   refreshServiceDefinition: function() { return /* binding */ L; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _knowledgeGraph_GraphQueryResult_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knowledgeGraph/GraphQueryResult.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResult.js");
/* harmony import */ var _knowledgeGraph_GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./knowledgeGraph/GraphQueryResultHeader.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryResultHeader.js");
/* harmony import */ var _knowledgeGraph_GraphQueryStreamingResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./knowledgeGraph/GraphQueryStreamingResult.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreamingResult.js");
/* harmony import */ var _knowledgeGraph_KnowledgeGraph_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./knowledgeGraph/KnowledgeGraph.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/KnowledgeGraph.js");
/* harmony import */ var _knowledgeGraph_ServiceDefinition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./knowledgeGraph/ServiceDefinition.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/ServiceDefinition.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_clientDataToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/clientDataToWasmEncodedFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/clientDataToWasmEncodedFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/knowledgeWasmAccess.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/knowledgeWasmAccess.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/queryToWasmEncodedFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_updateToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/updateToWasmEncodedFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_wasmToClientDataFactories_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/wasmToClientDataFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToClientDataFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_wasmToDataModelFactories_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/wasmToDataModelFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToDataModelFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_wasmToQueryResponseObjFactories_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToQueryResponseObjFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_wasmToUpdateResponseFactories_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmToUpdateResponseFactories.js");
/* harmony import */ var _knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./knowledgeGraph/wasmInterface/wasmUtils.js */ "./node_modules/@arcgis/core/rest/knowledgeGraph/wasmInterface/wasmUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../geometry/Geometry.js */ "./node_modules/@arcgis/core/geometry/Geometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const C=new Map,D=()=>new Map(C.entries()),E={fetchKnowledgeGraph:async e=>{const t=new _knowledgeGraph_KnowledgeGraph_js__WEBPACK_IMPORTED_MODULE_8__["default"]({url:e}),r=[];return r.push(K(t)),r.push(L(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await X(e)},refreshServiceDefinition:async e=>{const r=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.url,{query:{f:"json"}})).data;return r.capabilities=r?.capabilities?.split(","),r.supportedQueryFormats=r?.supportedQueryFormats?.split(","),e.serviceDefinition=new _knowledgeGraph_ServiceDefinition_js__WEBPACK_IMPORTED_MODULE_9__["default"](r),e.serviceDefinition},executeQueryStreaming:async(e,t,a)=>{const n="include",o=`${e.url}/graph/query`;await U(e);const s=await B(o,a);if(!e.serviceDefinition?.supportsProvenance&&t.provenanceBehavior===n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");s.data.body=await N(t,e);const d=await I(s.data.url,s.data);if(e.dataModel){const t=await J(d,e.dataModel);return new _knowledgeGraph_GraphQueryStreamingResult_js__WEBPACK_IMPORTED_MODULE_7__["default"]({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,a)=>{if(e.serviceDefinition?.dataEditingNotSupported)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const n=`${e.url}/graph/applyEdits`;await U(e);const o=await B(n,a);o.data.body=await $(t,e);return V(await I(o.data.url,o.data))},executeQuery:async(e,a,o)=>{const i=`${e.url}/graph/query`,s=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(i,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:a.openCypherQuery,...o?.query},signal:o?.signal,timeout:o?.timeout}),d=s.getHeader?.("content-type"),p=s.data;if(d?.includes("application/x-protobuf")){const t=new((await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel){const r=Y(t,p,e.dataModel);return new _knowledgeGraph_GraphQueryResult_js__WEBPACK_IMPORTED_MODULE_5__["default"]({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:d,data:s.data})},executeSearch:async(e,a,o)=>{const i=a.typeCategoryFilter,s=`${e.url}/graph/search`,d=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(s,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${a.searchQuery}"`,typeCategoryFilter:i,...o?.query},signal:o?.signal,timeout:o?.timeout}),p=d.getHeader?.("content-type"),l=d.data;if(p?.includes("application/x-protobuf")){const t=new((await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel){const r=Y(t,l,e.dataModel);return new _knowledgeGraph_GraphQueryResult_js__WEBPACK_IMPORTED_MODULE_5__["default"]({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:p,data:d.data})},executeSearchStreaming:async(e,t,a)=>{const n=`${e.url}/graph/search`;await U(e);const o=await B(n,a);o.data.body=await O(t);const s=await I(o.data.url,o.data);if(e.dataModel){const t=await J(s,e.dataModel);return new _knowledgeGraph_GraphQueryStreamingResult_js__WEBPACK_IMPORTED_MODULE_7__["default"]({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},fetchClientDataAtKeys:async(e,t,a={ignoreCache:!1})=>{if(!t.length)return new Map;let n=C.get(e.url||"");n||(n=new Map,C.set(e.url||"",n));const o=new Map(n.entries()),i=`${e.url}/clientData/fetch`;t=Array.from(new Set(t));const s=await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)(),d=(0,_knowledgeGraph_wasmInterface_clientDataToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_10__.encodeClientDataAtKeysRequest)(t,n,s,a.ignoreCache),l=await B(i,a.requestOptions);l.data.body=d;const u=await I(l.data.url,l.data),h=u.headers.get("content-type");if(h?.includes("application/x-protobuf")){const e=new s.ClientDataFetchResponseDecoder;e.deleteLater();const t=await u.arrayBuffer();return e.decode(new Uint8Array(t)),e.has_error()&&(0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(e.error,"knowledge-graph:fetchClientDataAtKeys-decoding-error","An error occurred while decoding the client data keys response"),(0,_knowledgeGraph_wasmInterface_wasmToClientDataFactories_js__WEBPACK_IMPORTED_MODULE_14__.wasmClientDataFetchResponseToClientData)(e,n,o,a.ignoreCache)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response when fetching client data",{responseType:h,data:u})},fetchAllClientDataKeys:async(e,a)=>{const n=`${e.url}/clientData`,o=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(n,{responseType:"array-buffer",query:{f:"pbf"},signal:a?.signal,timeout:a?.timeout}),i=o.getHeader?.("content-type"),s=o.data;if(i?.includes("application/x-protobuf")){const e=new((await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)()).ClientDataKeysResponseDecoder);return e.deleteLater(),e.decode(new Uint8Array(s)),e.has_error()&&(0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(e.error,"knowledge-graph:fetchAllClientDataKeys-decoding-error","An error occurred while decoding the client data keys response"),(0,_knowledgeGraph_wasmInterface_wasmToClientDataFactories_js__WEBPACK_IMPORTED_MODULE_14__.wasmClientDataAllKeysResponseToClientDataKeys)(e)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:i,data:o.data})},clearClientDataCache:()=>C.clear(),_fetchWrapper:async(e,t)=>fetch(e,t)};async function q(e,t,r){return E.executeApplyEdits(e,t,r)}async function R(e,t,r){return E.executeQuery(e,t,r)}async function M(e,t,r){return E.executeQueryStreaming(e,t,r)}async function Q(e,t,r){return E.executeSearch(e,t,r)}async function j(e,t,r){return E.executeSearchStreaming(e,t,r)}function H(e,t){return E.fetchAllClientDataKeys(e,t)}function W(e,t,r){return E.fetchClientDataAtKeys(e,t,r)}async function F(e){return E.fetchKnowledgeGraph(e)}async function K(e){return E.refreshDataModel(e)}async function L(e){return E.refreshServiceDefinition(e)}function P(){return E.clearClientDataCache()}async function I(e,t){return E._fetchWrapper(e,t)}async function U(t){const r=_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(t.url);r||(t.dataModel?await X(t):await K(t))}function z(e,t,r,a){null==t?r.set_param_key_value(e,""):"object"!=typeof t||t instanceof Date?r.set_param_key_value(e,t):t instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_20__["default"]?r.set_param_key_value(e,(0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.geometryToWasm)(t,a)):Array.isArray(t)?r.set_param_key_value(e,(0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.bindParamArrayToWasm)(t,a)):r.set_param_key_value(e,(0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.bindParamObjectToWasm)(t,a))}async function $(e,t){if(t.dataModel||await K(t),!t.dataModel)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const a=await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)(),n=!!e.options?.cascadeDelete,o=new a.GraphApplyEditsEncoder(a.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?(0,_knowledgeGraph_wasmInterface_updateToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_13__.inputQuantizationParametersToWasmFormat)(e.options?.inputQuantizationParameters):a.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=n;try{let t;e.entityAdds?.forEach((e=>{t=o.add_entity((0,_knowledgeGraph_wasmInterface_updateToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_13__.namedObjectToWasm)(e,a)),(0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipAdds?.forEach((e=>{if(!e.originId||!e.destinationId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=o.add_relationship((0,_knowledgeGraph_wasmInterface_updateToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_13__.namedObjectToWasm)(e,a)),(0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityUpdates?.forEach((e=>{if(!e.id)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_entity((0,_knowledgeGraph_wasmInterface_updateToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_13__.namedObjectToWasm)(e,a)),(0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipUpdates?.forEach((e=>{if(!e.id)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_relationship((0,_knowledgeGraph_wasmInterface_updateToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_13__.namedObjectToWasm)(e,a)),(0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityDeletes?.forEach((e=>{if(!e.typeName)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!0);t.deleteLater(),e.ids?.forEach((e=>{t.delete_by_id(e)}))})),e.relationshipDeletes?.forEach((e=>{if(!e.typeName)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!1);e.ids?.forEach((e=>{t.delete_by_id(e)}))})),o.encode()}catch(s){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:s})}const i=o.get_encoding_result();return (0,_knowledgeGraph_wasmInterface_wasmUtils_js__WEBPACK_IMPORTED_MODULE_18__.checkWasmError)(i.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(i.get_byte_buffer())}async function N(e,t){const a=await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)(),n=new a.GraphQueryRequestEncoder;if(n.deleteLater(),e.outputSpatialReference?n.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:n.output_spatial_reference=a.SpatialReferenceUtil.WGS84(),n.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[r,s]of Object.entries(e.bindParameters))z(r,s,n,a);if(e.bindGeometryQuantizationParameters)(0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.setInputQuantizationParametersOnEncoder)(e.bindGeometryQuantizationParameters,n);else{if(t.dataModel||await K(t),4326!==t.dataModel?.spatialReference?.wkid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");n.input_quantization_parameters=a.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&(0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.setOutputQuantizationParametersOnEncoder)(e.outputQuantizationParameters,n,a),e.provenanceBehavior&&(0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.setProvenanceBehaviorOnEncoder)(e.provenanceBehavior,n);try{n.encode()}catch(i){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:i})}const o=n.get_encoding_result();if(0!==o.error.error_code)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())}async function O(e){const t=await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)(),a=new t.GraphSearchRequestEncoder;if(a.deleteLater(),a.search_query=e.searchQuery,a.type_category_filter=t.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(a.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(a.start_index=e.start),null!=e.num&&(a.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{a.set_ids_filter((0,_knowledgeGraph_wasmInterface_queryToWasmEncodedFactories_js__WEBPACK_IMPORTED_MODULE_12__.bindParamArrayToWasm)(e.idsFilter,t))}catch(o){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:o})}e.namedTypesFilter?.forEach((e=>{a.add_named_type_filter(e)}));try{a.encode()}catch(o){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:o})}const n=a.get_encoding_result();if(0!==n.error.error_code)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}async function B(e,r){return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...r?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:r?.signal,timeout:r?.timeout})}async function V(e){const t=e.headers.get("content-type");if(t?.includes("application/x-protobuf")){const t=await e.arrayBuffer(),r=new((await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)()).GraphApplyEditsDecoder);return r.deleteLater(),r.decode(new Uint8Array(t)),(0,_knowledgeGraph_wasmInterface_wasmToUpdateResponseFactories_js__WEBPACK_IMPORTED_MODULE_17__.decoderToApplyEditsResponse)(r)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}function Y(e,t,a,n){e.push_buffer(new Uint8Array(t));const o=[];let i,s,d=0;for(;e.next_row();){i&&s||(i=n??(0,_knowledgeGraph_wasmInterface_wasmToQueryResponseObjFactories_js__WEBPACK_IMPORTED_MODULE_16__.wasmToGraphQueryResponseHeader)(e),s=i.outSpatialReference??new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_19__["default"]({wkid:4326})),d||(d=e.get_header_keys().size());const t=new Array(d);for(let r=0;r<d;r++){const n=e.get_value(r);t[r]=(0,_knowledgeGraph_wasmInterface_wasmToQueryResponseObjFactories_js__WEBPACK_IMPORTED_MODULE_16__.decodedWasmObjToQueryResponseObj)(n,a,s)}o.push(t)}if(e.has_error())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return{resultHeader:i,resultRows:o}}async function J(e,t){const n=e.headers.get("content-type");if(e.headers.get("content-length")&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),n?.includes("application/x-protobuf")){const n=e.body?.getReader(),i=new((await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)()).GraphQueryDecoder);let s,d,p;i.deleteLater();const l=new Promise(((e,t)=>{d=e,p=t}));let u=!1;return{readableStream:new ReadableStream({async start(e){try{return c()}catch(l){n?.releaseLock(),e.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:l})),e.close()}function c(){return n?.read().then((({done:l,value:h})=>{try{if(l){let t;if(i.has_error()?t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:i.error.error_code,errorMessage:i.error.error_message}):u||d(new _knowledgeGraph_GraphQueryResultHeader_js__WEBPACK_IMPORTED_MODULE_6__["default"]),n.releaseLock(),t)throw e.error(t),p(t),t;return void e.close()}const a=Y(i,h,t,s),w=a.resultRows;return w.length>0&&e.enqueue(w),!s&&a.resultHeader&&(s=a.resultHeader,d(a.resultHeader),u=!0),c()}catch(w){throw _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(w),p(w),new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:w})}}))}}}),resultHeader:await l}}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:e.text()})}async function X(e){const a=`${e.url}/dataModel/queryDataModel`,n=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(a,{responseType:"array-buffer",query:{f:"pbf"}}),o=n.getHeader?.("content-type"),i=n.data;if(o?.includes("application/x-protobuf")){const e=(await (0,_knowledgeGraph_wasmInterface_knowledgeWasmAccess_js__WEBPACK_IMPORTED_MODULE_11__.getWasmInterface)()).decode_data_model_from_protocol_buffer(new Uint8Array(i));if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return (0,_knowledgeGraph_wasmInterface_wasmToDataModelFactories_js__WEBPACK_IMPORTED_MODULE_15__.wasmToDataModel)(e)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:o,data:n.data})}


/***/ })

}]);
//# sourceMappingURL=rest-knowledgeGraphService.js.map