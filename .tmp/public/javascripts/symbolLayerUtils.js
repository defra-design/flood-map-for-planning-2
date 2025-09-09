"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["symbolLayerUtils"],{

/***/ "./node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearBoundingBoxCache: function() { return /* binding */ a; },
/* harmony export */   computeIconLayerResourceSize: function() { return /* binding */ l; },
/* harmony export */   computeObjectLayerResourceSize: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/LRUCache.js */ "./node_modules/@arcgis/core/core/LRUCache.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbolLayerUtils3D.js */ "./node_modules/@arcgis/core/symbols/support/symbolLayerUtils3D.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=u();function u(){return new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__.LRUCache(50)}function a(){c=u()}async function l(e,o){if(e.resource?.href)return m(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function m(r){return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource?.href;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:invalid-resource","The symbol does not have a valid resource");const s=c.get(o);if(void 0!==s)return s;const{fetch:n}=await __webpack_require__.e(/*! import() | views-3d-layers-graphics-objectResourceUtils */ "views-3d-layers-graphics-objectResourceUtils").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/graphics/objectResourceUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js")),u=await n(o,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),a=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.size)(u.referenceBoundingBox,(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)());return c.put(o,a),a}if(!e.resource?.primitive)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:invalid-resource","The symbol does not have a valid resource");const u=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.create)((0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_5__.objectSymbolLayerPrimitiveBoundingBox)(e.resource.primitive));if(null!=o)for(let r=0;r<u.length;r++)u[r]*=o;return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__.size)(u,(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)())}


/***/ })

}]);
//# sourceMappingURL=symbolLayerUtils.js.map