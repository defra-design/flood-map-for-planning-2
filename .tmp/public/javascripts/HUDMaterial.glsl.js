"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["HUDMaterial.glsl"],{

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterial.glsl.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterial.glsl.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   build: function() { return /* reexport safe */ _chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_27__.b; },
/* harmony export */   calculateAnchorPosForRendering: function() { return /* reexport safe */ _chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_27__.c; },
/* harmony export */   shaderSettings: function() { return /* reexport safe */ _chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_27__.s; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/Ellipsoid.js */ "./node_modules/@arcgis/core/geometry/support/Ellipsoid.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js");
/* harmony import */ var _core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/hud/AlignPixel.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl.js");
/* harmony import */ var _core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/hud/HUD.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js");
/* harmony import */ var _core_shaderLibrary_hud_HUDOcclusionPass_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/hud/HUDOcclusionPass.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDOcclusionPass.glsl.js");
/* harmony import */ var _core_shaderLibrary_hud_HUDVisibility_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderLibrary/hud/HUDVisibility.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDVisibility.glsl.js");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/shaderLibrary/util/ColorConversion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/shaderLibrary/util/RgbaFloatEncoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/shaderLibrary/util/ScreenSizePerspective.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _core_shaderModules_Float4DrawUniform_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/shaderModules/Float4DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4DrawUniform.js");
/* harmony import */ var _core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _lib_OITPass_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../lib/OITPass.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _chunks_HUDMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../chunks/HUDMaterial.glsl.js */ "./node_modules/@arcgis/core/chunks/HUDMaterial.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/



/***/ })

}]);
//# sourceMappingURL=HUDMaterial.glsl.js.map