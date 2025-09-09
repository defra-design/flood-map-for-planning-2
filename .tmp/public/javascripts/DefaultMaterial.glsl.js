"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["DefaultMaterial.glsl"],{

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterial.glsl.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterial.glsl.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   build: function() { return /* reexport safe */ _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_37__.b; }
/* harmony export */ });
/* harmony import */ var _core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderLibrary/ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/Offset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/SymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VertexColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js");
/* harmony import */ var _core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/shaderLibrary/shading/MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/shaderLibrary/shading/TerrainDepthTest.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../core/shaderLibrary/shading/TextureTransformUV.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../core/shaderLibrary/util/MixExternalColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../core/shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../core/shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./OutputColorHighlightOID.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/



/***/ })

}]);
//# sourceMappingURL=DefaultMaterial.glsl.js.map