"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["views-3d-layers-graphics-objectResourceUtils"],{

/***/ "./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ K; },
/* harmony export */   b: function() { return /* binding */ J; }
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function J(J){const K=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_33__.ShaderBuilder,{vertex:Q,fragment:X,varyings:Y}=K,{output:Z,normalType:ee,offsetBackfaces:re,instancedColor:oe,spherical:ie,receiveShadows:ae,snowCover:le,pbrMode:se,textureAlphaPremultiplied:te,instancedDoublePrecision:ne,hasVertexColors:de,hasVertexTangents:ce,hasColorTexture:me,hasNormalTexture:ge,hasNormalTextureTransform:ve,hasColorTextureTransform:ue}=J;if((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_28__.addProjViewLocalOrigin)(Q,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.PositionAttribute),Y.add("vpos","vec3"),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__.VisualVariables,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__.InstancedDoublePrecision,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__.VerticalOffset,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__.colorTextureUV,J),!(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.isColorOrColorEmission)(Z))return K.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__.DefaultMaterialAuxiliaryPasses,J),K;K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__.normalTextureUV,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__.emissiveTextureUV,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__.occlusionTextureUV,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__.metallicRoughnessTextureUV,J),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_28__.addCameraPosition)(Q,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalAttribute,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__.Transform,J);const be=ee===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalType.Attribute||ee===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalType.Compressed;return be&&re&&K.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__.Offset),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__.ComputeNormalTexture,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__.VertexNormal,J),oe&&K.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_35__.VertexAttribute.INSTANCECOLOR,"vec4"),Y.add("vPositionLocal","vec3"),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.TextureCoordinateAttribute,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.ForwardLinearDepth,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__.SymbolColor,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VertexColor,J),Q.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_30__.Float4PassUniform("externalColor",(e=>e.externalColor))),Y.add("vcolorExt","vec4"),J.terrainDepthTest&&Y.add("depth","float"),Q.main.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(oe,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_25__.alphaCutoff)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(be,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(ce,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(be&&re,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(J.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__.EvaluateSceneLighting,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__.EvaluateAmbientOcclusion,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_26__.DiscardOrAdjustAlphaPass,J),K.include(ne?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__.ReadShadowMapPass:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__.ReadShadowMapDraw,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_22__.terrainDepthTest,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__.SliceDraw,J),K.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_36__.outputColorHighlightOID,J),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_28__.addCameraPosition)(X,J),X.uniforms.add(Q.uniforms.get("localOrigin"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_29__.Float3PassUniform("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_29__.Float3PassUniform("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_31__.FloatPassUniform("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_31__.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),me&&X.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_34__.Texture2DPassUniform("tex",(e=>e.texture))),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__.PhysicallyBasedRenderingParameters,J),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__.PhysicallyBasedRendering,J),X.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_27__.MixExternalColor),K.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__.Normals,J),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__.addAmbientBoostFactor)(X),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__.addLightingGlobalFactor)(X),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__.addMainLightIntensity)(X),X.main.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`
      discardBySlice(vpos);
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(J.terrainDepthTest,"terrainDepthTest(depth);")}
      ${me?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`
              vec4 texColor = texture(tex, ${ue?"colorUV":"vuv0"});
              ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(te,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${ee===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalType.ScreenDerivative?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`vec3 normal = screenDerivativeNormal(vPositionLocal);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${ae?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(ie,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(de,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(de,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${ge?`mat3 tangentSpace = computeTangentSpace(${ce?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ve?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${ie?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(le,(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${se===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__.PBRMode.Normal||se===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__.PBRMode.Schematic?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.If)(le,(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${le?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_32__.glsl)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),K}const K=Object.freeze(Object.defineProperty({__proto__:null,build:J},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ z; },
/* harmony export */   b: function() { return /* binding */ R; }
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../views/3d/webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function R(R){const z=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_29__.ShaderBuilder,{vertex:k,fragment:G,varyings:U}=z,{output:W,offsetBackfaces:H,instancedColor:q,pbrMode:J,snowCover:K,spherical:Q}=R,X=J===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__.PBRMode.Normal||J===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__.PBRMode.Schematic;if((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__.addProjViewLocalOrigin)(k,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__.PositionAttribute),U.add("vpos","vec3"),z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_20__.VisualVariables,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__.InstancedDoublePrecision,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__.VerticalOffset,R),W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Color&&((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__.addCameraPosition)(z.vertex,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.NormalAttribute,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__.Transform,R),H&&z.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__.Offset),q&&z.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_31__.VertexAttribute.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),R.terrainDepthTest&&U.add("depth","float"),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__.TextureCoordinateAttribute,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.ForwardLinearDepth,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__.SymbolColor,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VertexColor,R),k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_26__.Float4PassUniform("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),k.main.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(q,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_21__.alphaCutoff)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(H,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(R.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Color){const{hasColorTexture:e,hasColorTextureTransform:r,receiveShadows:i}=R;z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__.EvaluateSceneLighting,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__.EvaluateAmbientOcclusion,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_22__.DiscardOrAdjustAlphaPass,R),z.include(R.instancedDoublePrecision?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__.ReadShadowMapPass:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_18__.ReadShadowMapDraw,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_19__.terrainDepthTest,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__.SliceDraw,R),z.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_32__.outputColorHighlightOID,R),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_24__.addCameraPosition)(z.fragment,R),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addMainLightDirection)(G),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__.addAmbientBoostFactor)(G),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__.addLightingGlobalFactor)(G),G.uniforms.add(k.uniforms.get("localOrigin"),k.uniforms.get("view"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_25__.Float3PassUniform("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_25__.Float3PassUniform("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__.FloatPassUniform("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_27__.FloatPassUniform("layerOpacity",(e=>e.layerOpacity))),e&&G.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_30__.Texture2DPassUniform("tex",(e=>e.texture))),z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_17__.PhysicallyBasedRenderingParameters,R),z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_16__.PhysicallyBasedRendering,R),G.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_23__.MixExternalColor),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__.addMainLightIntensity)(G),G.main.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`
      discardBySlice(vpos);
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(R.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${e?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(e,`${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(R.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${i?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":Q?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${R.hasVertexColors?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(K,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(X,`vec3 normalGround = ${Q?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${X?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.If)(K,(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${K?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_28__.glsl)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return z.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__.DefaultMaterialAuxiliaryPasses,R),z}const z=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/SSAO.glsl.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/SSAO.glsl.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ v; },
/* harmony export */   b: function() { return /* binding */ f; },
/* harmony export */   g: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=16;function f(){const r=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_8__.ShaderBuilder,f=r.fragment;return r.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__.ScreenSpacePass),r.include(_views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__.CameraSpace),f.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__.ReadDepth),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("radius",((e,r)=>d(r.camera)))).code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),f.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("normalMap",(e=>e.normalTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("projScale",(e=>e.projScale)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("rnm",(e=>e.noiseTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("rnmScale",((r,t)=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__.set)(m,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("intensity",(e=>e.intensity)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("screenSize",((r,t)=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__.set)(m,t.camera.fullWidth,t.camera.fullHeight)))),r.outputs.add("fragOcclusion","float"),f.main.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl.int(u)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl.int(u)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),r}function d(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const m=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),v=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:d},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ f; },
/* harmony export */   b: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=4;function i(){const i=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_5__.ShaderBuilder,f=i.fragment;i.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__.ScreenSpacePass);const u=(d+1)/2,c=1/(2*u*u);return f.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__.ReadDepth),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_7__.Texture2DPassUniform("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Texture2DDrawUniform("tex",(e=>e.colorTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float2DrawUniform("blurSize",(e=>e.blurSize)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_3__.FloatPassUniform("projScale",((e,r)=>{const o=r.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),f.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.glsl)`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.glsl.float(c)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),i.outputs.add("fragBlur","float"),f.main.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.glsl)`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.glsl.int(d)}; r <= ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.glsl.int(d)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),i}const f=Object.freeze(Object.defineProperty({__proto__:null,build:i},Symbol.toStringTag,{value:"Module"}));


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

/***/ "./node_modules/@arcgis/core/chunks/vec2.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec2.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ n; },
/* harmony export */   f: function() { return /* binding */ l; },
/* harmony export */   n: function() { return /* binding */ o; },
/* harmony export */   v: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(n)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isFloat)(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.maximumValue)(n);if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isSigned)(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u}function l(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n}const u=Object.freeze(Object.defineProperty({__proto__:null,fill:l,normalizeIntegerBuffer:n,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec3.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ i; },
/* harmony export */   b: function() { return /* binding */ f; },
/* harmony export */   c: function() { return /* binding */ r; },
/* harmony export */   d: function() { return /* binding */ t; },
/* harmony export */   e: function() { return /* binding */ u; },
/* harmony export */   f: function() { return /* binding */ o; },
/* harmony export */   g: function() { return /* binding */ a; },
/* harmony export */   n: function() { return /* binding */ l; },
/* harmony export */   s: function() { return /* binding */ n; },
/* harmony export */   t: function() { return /* binding */ e; },
/* harmony export */   v: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r,f){e(t.typedBuffer,r.typedBuffer,f,t.typedBufferStride,r.typedBufferStride)}function e(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[4],s=r[5],c=r[6],d=r[8],p=r[9],h=r[10],y=r[12],B=r[13],g=r[14];let m=0,M=0;for(let S=0;S<o;S++){const r=e[m],o=e[m+1],S=e[m+2];t[M]=i*r+a*o+d*S+y,t[M+1]=u*r+s*o+p*S+B,t[M+2]=l*r+c*o+h*S+g,m+=n,M+=f}return t}function r(t,e,r){f(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function f(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[3],s=r[4],c=r[5],d=r[6],p=r[7],h=r[8];let y=0,B=0;for(let g=0;g<o;g++){const r=e[y],o=e[y+1],g=e[y+2];t[B]=i*r+a*o+d*g,t[B+1]=u*r+s*o+p*g,t[B+2]=l*r+c*o+h*g,y+=n,B+=f}}function n(t,e,r){o(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function o(t,e,r,f=3,n=f){const o=Math.min(t.length/f,e.length/n);let i=0,u=0;for(let l=0;l<o;l++)t[u]=r*e[i],t[u+1]=r*e[i+1],t[u+2]=r*e[i+2],i+=n,u+=f;return t}function i(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let i=0,u=0;for(let l=0;l<o;l++)t[u]=e[i]+r[0],t[u+1]=e[i+1]+r[1],t[u+2]=e[i+2]+r[2],i+=n,u+=f;return t}function u(t,e){l(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function l(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,i=0;for(let u=0;u<n;u++){const n=e[o],u=e[o+1],l=e[o+2],a=n*n+u*u+l*l;if(a>0){const e=1/Math.sqrt(a);t[i]=e*n,t[i+1]=e*u,t[i+2]=e*l}o+=f,i+=r}}function a(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,u=e.typedBufferStride;let l=0,a=0;for(let s=0;s<f;s++)n[a]=i[l]>>r,n[a+1]=i[l+1]>>r,n[a+2]=i[l+2]>>r,l+=u,a+=o}const s=Object.freeze(Object.defineProperty({__proto__:null,normalize:l,normalizeView:u,scale:o,scaleView:n,shiftRight:a,transformMat3:f,transformMat3View:r,transformMat4:e,transformMat4View:t,translate:i},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec33.js":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec33.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ e; },
/* harmony export */   c: function() { return /* binding */ t; },
/* harmony export */   f: function() { return /* binding */ f; },
/* harmony export */   v: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f.typedBuffer,e.typedBufferStride,f.typedBufferStride)}function t(e,t,f=3,o=f){const r=t.length/o;let n=0,u=0;for(let c=0;c<r;++c)e[n]=t[u],e[n+1]=t[u+1],e[n+2]=t[u+2],n+=f,u+=o}function f(e,t,f,o,r){const n=e.typedBuffer,u=e.typedBufferStride,c=r?.count??e.count;let d=(r?.dstIndex??0)*u;for(let l=0;l<c;++l)n[d]=t,n[d+1]=f,n[d+2]=o,d+=u}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec4.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ f; },
/* harmony export */   b: function() { return /* binding */ s; },
/* harmony export */   c: function() { return /* binding */ e; },
/* harmony export */   d: function() { return /* binding */ r; },
/* harmony export */   n: function() { return /* binding */ o; },
/* harmony export */   s: function() { return /* binding */ u; },
/* harmony export */   t: function() { return /* binding */ n; },
/* harmony export */   v: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/support/buffer/math/common.js */ "./node_modules/@arcgis/core/geometry/support/buffer/math/common.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(t,e,r){if(t.count!==e.count)return;const f=t.count,n=r[0],o=r[1],u=r[2],s=r[3],c=r[4],i=r[5],a=r[6],d=r[7],l=r[8],p=r[9],y=r[10],m=r[11],B=r[12],h=r[13],g=r[14],S=r[15],M=t.typedBuffer,b=t.typedBufferStride,j=e.typedBuffer,v=e.typedBufferStride;for(let _=0;_<f;_++){const t=_*b,e=_*v,r=j[e],f=j[e+1],w=j[e+2],V=j[e+3];M[t]=n*r+c*f+l*w+B*V,M[t+1]=o*r+i*f+p*w+h*V,M[t+2]=u*r+a*f+y*w+g*V,M[t+3]=s*r+d*f+m*w+S*V}}function r(e,r,f,n=4,o=n){if(e.length/n!=r.length/o)return void (0,_geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_1__.getMathLogger)().error("source and destination buffers need to have the same number of elements");const u=e.length/n,s=f[0],c=f[1],i=f[2],a=f[3],d=f[4],l=f[5],p=f[6],y=f[7],m=f[8],B=f[9],h=f[10],g=f[11],S=f[12],M=f[13],b=f[14],j=f[15];let v=0,_=0;for(let t=0;t<u;t++){const t=r[v],f=r[v+1],u=r[v+2],w=r[v+3];e[_]=s*t+d*f+m*u+S*w,e[_+1]=c*t+l*f+B*u+M*w,e[_+2]=i*t+p*f+h*u+b*w,e[_+3]=a*t+y*f+g*u+j*w,v+=o,_+=n}}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function n(t,e,r,f=4,n=f){if(t.length/f!=e.length/n)return;const o=t.length/f,u=r[0],s=r[1],c=r[2],i=r[3],a=r[4],d=r[5],l=r[6],p=r[7],y=r[8];let m=0,B=0;for(let h=0;h<o;h++){const r=e[m],o=e[m+1],h=e[m+2],g=e[m+3];t[B]=u*r+i*o+l*h,t[B+1]=s*r+a*o+p*h,t[B+2]=c*r+d*o+y*h,t[B+3]=g,m+=n,B+=f}}function o(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,n=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;for(let s=0;s<r;s++){const t=s*n,e=s*u,r=o[e],c=o[e+1],i=o[e+2],a=r*r+c*c+i*i;if(a>0){const e=1/Math.sqrt(a);f[t]=e*r,f[t+1]=e*c,f[t+2]=e*i}}}function u(t,e,r){s(t.typedBuffer,e,r,t.typedBufferStride)}function s(t,e,r,f=4){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let s=0,c=0;for(let i=0;i<n;i++)t[c]=r*o[s],t[c+1]=r*o[s+1],t[c+2]=r*o[s+2],t[c+3]=r*o[s+3],s+=u,c+=f}const c=Object.freeze(Object.defineProperty({__proto__:null,normalize:o,scale:s,scaleView:u,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/vec43.js":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec43.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ t; },
/* harmony export */   c: function() { return /* binding */ e; },
/* harmony export */   f: function() { return /* binding */ f; },
/* harmony export */   v: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f,e.typedBufferStride)}function t(e,t,f=4){const o=t.typedBuffer,r=t.typedBufferStride,n=t.count;let u=0,c=0;for(let d=0;d<n;++d)e[u]=o[c],e[u+1]=o[c+1],e[u+2]=o[c+2],e[u+3]=o[c+3],u+=f,c+=r}function f(e,t,f,o,r,n){const u=e.typedBuffer,c=e.typedBufferStride,d=n?.count??e.count;let l=(n?.dstIndex??0)*c;for(let p=0;p<d;++p)u[l]=t,u[l+1]=f,u[l+2]=o,u[l+3]=r,l+=c}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/NestedMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/NestedMap.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedMap: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}getInner(t){return this._outer.get(t)}set(t,e,r){const o=this._outer.get(t);o?o.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}forAll(t){for(const e of this._outer.values())for(const r of e.values())t(r)}}


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

/***/ "./node_modules/@arcgis/core/core/devEnvironmentUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustStaticAGOUrl: function() { return /* binding */ a; },
/* harmony export */   devHostnames: function() { return /* binding */ i; },
/* harmony export */   isDevEnvironment: function() { return /* binding */ c; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,i.some((a=>null!=c?.match(a)))}function a(c,a){return c?(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(o)||null!=a.match(l)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c:null}const t=/^devext\.arcgis\.com$/,o=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,t,o,/^jsapps\.esri\.com$/,s,l];


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

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f32.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f32.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ONES: function() { return /* binding */ f; },
/* harmony export */   UNIT_X: function() { return /* binding */ l; },
/* harmony export */   UNIT_Y: function() { return /* binding */ s; },
/* harmony export */   ZEROS: function() { return /* binding */ i; },
/* harmony export */   clone: function() { return /* binding */ r; },
/* harmony export */   create: function() { return /* binding */ n; },
/* harmony export */   createView: function() { return /* binding */ e; },
/* harmony export */   fromValues: function() { return /* binding */ t; },
/* harmony export */   ones: function() { return /* binding */ u; },
/* harmony export */   unitX: function() { return /* binding */ c; },
/* harmony export */   unitY: function() { return /* binding */ a; },
/* harmony export */   v: function() { return /* binding */ y; },
/* harmony export */   zeros: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(){return new Float32Array(2)}function r(n){const r=new Float32Array(2);return r[0]=n[0],r[1]=n[1],r}function t(n,r){const t=new Float32Array(2);return t[0]=n,t[1]=r,t}function e(n,r){return new Float32Array(n,r,2)}function o(){return n()}function u(){return t(1,1)}function c(){return t(1,0)}function a(){return t(0,1)}const i=o(),f=u(),l=c(),s=a(),y=Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:l,UNIT_Y:s,ZEROS:i,clone:r,create:n,createView:e,fromValues:t,ones:u,unitX:c,unitY:a,zeros:o},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: function() { return /* binding */ Y; },
/* harmony export */   calculateW: function() { return /* binding */ k; },
/* harmony export */   conjugate: function() { return /* binding */ O; },
/* harmony export */   copy: function() { return /* binding */ W; },
/* harmony export */   dot: function() { return /* binding */ B; },
/* harmony export */   equals: function() { return /* binding */ Q; },
/* harmony export */   exactEquals: function() { return /* binding */ N; },
/* harmony export */   fromEuler: function() { return /* binding */ T; },
/* harmony export */   fromMat3: function() { return /* binding */ S; },
/* harmony export */   getAxisAngle: function() { return /* binding */ v; },
/* harmony export */   identity: function() { return /* binding */ I; },
/* harmony export */   invert: function() { return /* binding */ L; },
/* harmony export */   len: function() { return /* binding */ F; },
/* harmony export */   length: function() { return /* binding */ D; },
/* harmony export */   lerp: function() { return /* binding */ C; },
/* harmony export */   mul: function() { return /* binding */ Z; },
/* harmony export */   multiply: function() { return /* binding */ x; },
/* harmony export */   normalize: function() { return /* binding */ K; },
/* harmony export */   q: function() { return /* binding */ rt; },
/* harmony export */   random: function() { return /* binding */ E; },
/* harmony export */   rotateX: function() { return /* binding */ y; },
/* harmony export */   rotateY: function() { return /* binding */ A; },
/* harmony export */   rotateZ: function() { return /* binding */ _; },
/* harmony export */   rotationTo: function() { return /* binding */ R; },
/* harmony export */   scale: function() { return /* binding */ w; },
/* harmony export */   set: function() { return /* binding */ X; },
/* harmony export */   setAxes: function() { return /* binding */ ot; },
/* harmony export */   setAxisAngle: function() { return /* binding */ b; },
/* harmony export */   slerp: function() { return /* binding */ z; },
/* harmony export */   sqlerp: function() { return /* binding */ tt; },
/* harmony export */   sqrLen: function() { return /* binding */ J; },
/* harmony export */   squaredLength: function() { return /* binding */ H; },
/* harmony export */   str: function() { return /* binding */ G; }
/* harmony export */ });
/* harmony import */ var _factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function I(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function b(t,n,s){s*=.5;const o=Math.sin(s);return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=Math.cos(s),t}function v(t,n){const s=2*Math.acos(n[3]),o=Math.sin(s/2);return o>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.getEpsilon)()?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),s}function x(t,n,s){const o=n[0],a=n[1],r=n[2],e=n[3],c=s[0],i=s[1],u=s[2],h=s[3];return t[0]=o*h+e*c+a*u-r*i,t[1]=a*h+e*i+r*c-o*u,t[2]=r*h+e*u+o*i-a*c,t[3]=e*h-o*c-a*i-r*u,t}function y(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+e*c,t[1]=a*i+r*c,t[2]=r*i-a*c,t[3]=e*i-o*c,t}function A(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i-r*c,t[1]=a*i+e*c,t[2]=r*i+o*c,t[3]=e*i-a*c,t}function _(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+a*c,t[1]=a*i-o*c,t[2]=r*i+e*c,t[3]=e*i-r*c,t}function k(t,n){const s=n[0],o=n[1],a=n[2];return t[0]=s,t[1]=o,t[2]=a,t[3]=Math.sqrt(Math.abs(1-s*s-o*o-a*a)),t}function z(t,n,s,o){const r=n[0],e=n[1],c=n[2],i=n[3];let u,h,M,f,l,m=s[0],p=s[1],q=s[2],j=s[3];return h=r*m+e*p+c*q+i*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.getEpsilon)()?(u=Math.acos(h),M=Math.sin(u),f=Math.sin((1-o)*u)/M,l=Math.sin(o*u)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*i+l*j,t}function E(t){const n=_common_js__WEBPACK_IMPORTED_MODULE_3__.RANDOM,s=n(),o=n(),a=n(),e=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=e*Math.sin(2*Math.PI*o),t[1]=e*Math.cos(2*Math.PI*o),t[2]=c*Math.sin(2*Math.PI*a),t[3]=c*Math.cos(2*Math.PI*a),t}function L(t,n){const s=n[0],o=n[1],a=n[2],r=n[3],e=s*s+o*o+a*a+r*r,c=e?1/e:0;return t[0]=-s*c,t[1]=-o*c,t[2]=-a*c,t[3]=r*c,t}function O(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function S(t,n){const s=n[0]+n[4]+n[8];let o;if(s>0)o=Math.sqrt(s+1),t[3]=.5*o,o=.5/o,t[0]=(n[5]-n[7])*o,t[1]=(n[6]-n[2])*o,t[2]=(n[1]-n[3])*o;else{let s=0;n[4]>n[0]&&(s=1),n[8]>n[3*s+s]&&(s=2);const a=(s+1)%3,r=(s+2)%3;o=Math.sqrt(n[3*s+s]-n[3*a+a]-n[3*r+r]+1),t[s]=.5*o,o=.5/o,t[3]=(n[3*a+r]-n[3*r+a])*o,t[a]=(n[3*a+s]+n[3*s+a])*o,t[r]=(n[3*r+s]+n[3*s+r])*o}return t}function T(t,n,s,o){const a=.5*Math.PI/180;n*=a,s*=a,o*=a;const r=Math.sin(n),e=Math.cos(n),c=Math.sin(s),i=Math.cos(s),u=Math.sin(o),h=Math.cos(o);return t[0]=r*i*h-e*c*u,t[1]=e*c*h+r*i*u,t[2]=e*i*u-r*c*h,t[3]=e*i*h+r*c*u,t}function G(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const W=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.c,X=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.s,Y=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.g,Z=x,w=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.d,B=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.h,C=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.l,D=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.j,F=D,H=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.b,J=H,K=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.n,N=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.a,Q=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.e;function R(t,n,s){const o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)(n,s);return o<-.999999?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(U,V,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.G)(U)<1e-6&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(U,$,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),b(t,U,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(U,n,s),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+o,K(t,t))}const U=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),V=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(1,0,0),$=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(0,1,0);function tt(t,n,s,o,a,r){return z(nt,n,a,r),z(st,s,o,r),z(t,nt,st,2*r*(1-r)),t}const nt=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),st=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function ot(t,n,s,o){const a=at;return a[0]=s[0],a[3]=s[1],a[6]=s[2],a[1]=o[0],a[4]=o[1],a[7]=o[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],K(t,S(t,a))}const at=(0,_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:Y,calculateW:k,conjugate:O,copy:W,dot:B,equals:Q,exactEquals:N,fromEuler:T,fromMat3:S,getAxisAngle:v,identity:I,invert:L,len:F,length:D,lerp:C,mul:Z,multiply:x,normalize:K,random:E,rotateX:y,rotateY:A,rotateZ:_,rotationTo:R,scale:w,set:X,setAxes:ot,setAxisAngle:b,slerp:z,sqlerp:tt,sqrLen:J,squaredLength:H,str:G},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeTranslationToOriginAndRotation: function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _localRotationUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localRotationUtils.js */ "./node_modules/@arcgis/core/geometry/projection/localRotationUtils.js");
/* harmony import */ var _projectors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectors.js */ "./node_modules/@arcgis/core/geometry/projection/projectors.js");
/* harmony import */ var _support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function C(r,n,C,R){if(null==r||null==R)return!1;const p=(0,_projectors_js__WEBPACK_IMPORTED_MODULE_4__.classifySpatialReference)(r,_projectors_js__WEBPACK_IMPORTED_MODULE_4__.sourceClassificationCache),a=(0,_projectors_js__WEBPACK_IMPORTED_MODULE_4__.classifySpatialReference)(R,_projectors_js__WEBPACK_IMPORTED_MODULE_4__.destClassificationCache);if(p===a&&!E(a)&&(p!==_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.UNKNOWN||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.equals)(r,R)))return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.fromTranslation)(C,n),!0;if(E(a)){const r=_projectors_js__WEBPACK_IMPORTED_MODULE_4__.projectionTable[p][_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.LON_LAT],t=_projectors_js__WEBPACK_IMPORTED_MODULE_4__.projectionTable[_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.LON_LAT][a];return null!=r&&null!=t&&(r(n,0,A,0),t(A,0,L,0),(0,_localRotationUtils_js__WEBPACK_IMPORTED_MODULE_3__.computeENUToPCPFLocalRotation)(_*A[0],_*A[1],C),C[12]=L[0],C[13]=L[1],C[14]=L[2],!0)}const O=E(p);if((a===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.WEB_MERCATOR||a===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.PLATE_CARREE||a===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.WGS84||a===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.CGCS2000)&&(p===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.WGS84||O||p===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.WEB_MERCATOR||p===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.CGCS2000)){const r=_projectors_js__WEBPACK_IMPORTED_MODULE_4__.projectionTable[p][_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.LON_LAT],t=_projectors_js__WEBPACK_IMPORTED_MODULE_4__.projectionTable[_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.LON_LAT][a];return null!=r&&null!=t&&(r(n,0,A,0),t(A,0,L,0),O?(0,_localRotationUtils_js__WEBPACK_IMPORTED_MODULE_3__.computePCPFToENULocalRotation)(_*A[0],_*A[1],C):(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.identity)(C),C[12]=L[0],C[13]=L[1],C[14]=L[2],!0)}return!1}function E(r){return r===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.SPHERICAL_ECEF||r===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.SPHERICAL_MARS_PCPF||r===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.SPHERICAL_MOON_PCPF||r===_projectors_js__WEBPACK_IMPORTED_MODULE_4__.ProjectionID.WGS84_ECEF}const _=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(1),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),L=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/projection/localRotationUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/projection/localRotationUtils.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeENUToPCPFLocalRotation: function() { return /* binding */ n; },
/* harmony export */   computePCPFToENULocalRotation: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(t,n,o){const r=Math.sin(t),a=Math.cos(t),i=Math.sin(n),s=Math.cos(n),c=o;return c[0]=-r,c[4]=-i*a,c[8]=s*a,c[12]=0,c[1]=a,c[5]=-i*r,c[9]=s*r,c[13]=0,c[2]=0,c[6]=s,c[10]=i,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function o(o,r,a){return n(o,r,a),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.transpose)(a,a),a}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SphericalECEFSpatialReference: function() { return /* binding */ p; },
/* harmony export */   SphericalPCPFMars: function() { return /* binding */ l; },
/* harmony export */   SphericalPCPFMoon: function() { return /* binding */ f; },
/* harmony export */   WGS84ECEFSpatialReference: function() { return /* binding */ w; },
/* harmony export */   getSphericalPCPF: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ellipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/ellipsoidUtils.js");
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"](_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__.SphericalECEFSpatialReferenceLike),l=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"](_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__.SphericalPCPFMarsLike),f=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"](_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__.SphericalPCPFMoonLike),w=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"](_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__.WGS84ECEFSpatialReferenceLike);function a(e){const t=c.get(e);if(t)return t;let s=p;if(e)if(e===l)s=l;else if(e===f)s=f;else{const t=e.wkid,n=e.latestWkid;if(null!=t||null!=n)(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.isWKIDFromMars)(t)||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.isWKIDFromMars)(n)?s=l:((0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.isWKIDFromMoon)(t)||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.isWKIDFromMoon)(n))&&(s=f);else{const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===k?s=l:e===m&&(s=f)}}}return c.set(e,s),s}const c=new Map,k=l.wkt.toUpperCase(),m=f.wkt.toUpperCase();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/FloatArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/FloatArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compactFloatArray: function() { return /* binding */ e; },
/* harmony export */   floatArrayFrom: function() { return /* binding */ a; },
/* harmony export */   floatSubArray: function() { return /* binding */ o; },
/* harmony export */   newFloatArray: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function e(t){return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)?t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?t:new Float32Array(t):t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?Array.from(t):t}function a(t){return((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)?t.length:t.byteLength/8)<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?Array.from(t):new Float32Array(t)}function o(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/Indices.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/Indices.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compactIndices: function() { return /* binding */ t; },
/* harmony export */   getContinuousIndexArray: function() { return /* binding */ l; },
/* harmony export */   getZeroIndexArray: function() { return /* binding */ A; },
/* harmony export */   newIndexArray: function() { return /* binding */ i; },
/* harmony export */   newIntArray: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize)return Array.from(t);let i=!0,f=!0;return t.some(((r,n)=>(i=i&&0===r,f=f&&r===n,!i&&!f))),i?A(t.length):f?l(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?e(t):t}function e(n){let t=!0;for(const e of n){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(n)?new Uint32Array(n):n;e>=256&&(t=!1)}return t?new Uint8Array(n):new Uint16Array(n)}function i(r){return r<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}function f(r){return r<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?new Array(r):new Uint32Array(r)}let a=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const u=[0],o=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function l(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize)return Array.from(new Uint16Array(o.buffer,0,r));if(r<o.length)return new Uint16Array(o.buffer,0,r);if(r>a.length){const n=Math.max(2*a.length,r);a=new Uint32Array(n);for(let r=0;r<a.length;r++)a[r]=r}return new Uint32Array(a.buffer,0,r)}let y=new Uint8Array(65536);function A(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize)return new Array(r).fill(0);if(r>y.length){const n=Math.max(2*y.length,r);y=new Uint8Array(n)}return new Uint8Array(y.buffer,0,r)}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewFloat: function() { return /* binding */ y; },
/* harmony export */   BufferViewFloat64: function() { return /* binding */ o; },
/* harmony export */   BufferViewInt16: function() { return /* binding */ k; },
/* harmony export */   BufferViewInt32: function() { return /* binding */ C; },
/* harmony export */   BufferViewInt8: function() { return /* binding */ j; },
/* harmony export */   BufferViewMat3f: function() { return /* binding */ l; },
/* harmony export */   BufferViewMat3f64: function() { return /* binding */ a; },
/* harmony export */   BufferViewMat4f: function() { return /* binding */ p; },
/* harmony export */   BufferViewMat4f64: function() { return /* binding */ b; },
/* harmony export */   BufferViewUint16: function() { return /* binding */ g; },
/* harmony export */   BufferViewUint32: function() { return /* binding */ B; },
/* harmony export */   BufferViewUint8: function() { return /* binding */ d; },
/* harmony export */   BufferViewVec2f: function() { return /* binding */ u; },
/* harmony export */   BufferViewVec2f64: function() { return /* binding */ m; },
/* harmony export */   BufferViewVec2i16: function() { return /* binding */ q; },
/* harmony export */   BufferViewVec2i32: function() { return /* binding */ D; },
/* harmony export */   BufferViewVec2i8: function() { return /* binding */ V; },
/* harmony export */   BufferViewVec2u16: function() { return /* binding */ w; },
/* harmony export */   BufferViewVec2u32: function() { return /* binding */ F; },
/* harmony export */   BufferViewVec2u8: function() { return /* binding */ A; },
/* harmony export */   BufferViewVec3f: function() { return /* binding */ i; },
/* harmony export */   BufferViewVec3f64: function() { return /* binding */ T; },
/* harmony export */   BufferViewVec3i16: function() { return /* binding */ v; },
/* harmony export */   BufferViewVec3i32: function() { return /* binding */ G; },
/* harmony export */   BufferViewVec3i8: function() { return /* binding */ M; },
/* harmony export */   BufferViewVec3u16: function() { return /* binding */ E; },
/* harmony export */   BufferViewVec3u32: function() { return /* binding */ I; },
/* harmony export */   BufferViewVec3u8: function() { return /* binding */ O; },
/* harmony export */   BufferViewVec4f: function() { return /* binding */ c; },
/* harmony export */   BufferViewVec4f64: function() { return /* binding */ h; },
/* harmony export */   BufferViewVec4i16: function() { return /* binding */ z; },
/* harmony export */   BufferViewVec4i32: function() { return /* binding */ H; },
/* harmony export */   BufferViewVec4i8: function() { return /* binding */ S; },
/* harmony export */   BufferViewVec4u16: function() { return /* binding */ L; },
/* harmony export */   BufferViewVec4u32: function() { return /* binding */ U; },
/* harmony export */   BufferViewVec4u8: function() { return /* binding */ x; }
/* harmony export */ });
/* harmony import */ var _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internals/Mat3.js */ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js");
/* harmony import */ var _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internals/Mat4.js */ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js");
/* harmony import */ var _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internals/Scalar.js */ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js");
/* harmony import */ var _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internals/Vec2.js */ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js");
/* harmony import */ var _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internals/Vec3.js */ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js");
/* harmony import */ var _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internals/Vec4.js */ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class y extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class u extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(u,e,t)}static fromTypedArray(e,t){return new u(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}u.ElementType="f32";class i extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(i,e,t)}static fromTypedArray(e,t){return new i(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}i.ElementType="f32";class c extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(c,e,t)}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class l extends _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3Impl{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3Impl{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f64";class p extends _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewMat4Impl{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewMat4Impl{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class o extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f64";class m extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class T extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class h extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f64";class d extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="u8";class A extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u8";class O extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class x extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class g extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u16";class w extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class E extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class L extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class B extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="u32";class F extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class j extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class V extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class M extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="i8";class S extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="i8";class k extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class q extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class v extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class z extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class C extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__.BufferViewScalarImpl{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i32";class D extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__.BufferViewVec2Impl{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__.BufferViewVec3Impl{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__.BufferViewVec4Impl{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewMat3Impl: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=9;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewMat4Impl: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){this.copyFromTypedBuffer(t,e.typedBuffer,r*e.typedBufferStride)}copyFromTypedBuffer(t,e,r){const f=this.typedBuffer;let s=t*this.typedBufferStride;for(let i=0;i<16;++i)f[s++]=e[r++]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=16;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewScalarImpl: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=1;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewVec2Impl: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__.set)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i]=s[d]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=2;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewVec3Impl: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=3;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferViewVec4Impl: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_0__.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=4;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/math/common.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/math/common.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMathLogger: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/types.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementTypeSize: function() { return /* binding */ e; },
/* harmony export */   isInteger: function() { return /* binding */ s; },
/* harmony export */   isSigned: function() { return /* binding */ c; },
/* harmony export */   maximumValue: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function c(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function r(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}


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

/***/ "./node_modules/@arcgis/core/geometry/support/triangle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangle.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areaPoints2d: function() { return /* binding */ v; },
/* harmony export */   areaPoints3d: function() { return /* binding */ S; },
/* harmony export */   copy: function() { return /* binding */ h; },
/* harmony export */   create: function() { return /* binding */ j; },
/* harmony export */   distance2: function() { return /* binding */ d; },
/* harmony export */   fromValues: function() { return /* binding */ b; },
/* harmony export */   intersectRay: function() { return /* binding */ k; },
/* harmony export */   wrap: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lineSegment.js */ "./node_modules/@arcgis/core/geometry/support/lineSegment.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function j(t){return t?{p0:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.p0),p1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.p1),p2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.clone)(t.p2)}:{p0:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),p1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),p2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)()}}function l(t,e,n){const r=x.get();return r.p0=t,r.p1=e,r.p2=n,r}function h(t,e=j()){return b(t.p0,t.p1,t.p2,e)}function b(t,n,r,o=j()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.p0,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.p1,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.p2,r),o}function d(t,e){const c=t.p0,s=t.p1,p=t.p2,i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),s,c),a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),p,s),f=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),c,p),j=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),e,c),l=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),e,s),h=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),e,p),b=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(i,i,f),d=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),i,b),j),k=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),a,b),l),v=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_4__.sv3d.get(),f,b),h);if(d>0&&k>0&&v>0){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(b,j);return t*t/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.f)(b,b)}const S=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(c,i,w.get()),e),x=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(s,a,w.get()),e),M=(0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.distance2)((0,_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(p,f,w.get()),e);return Math.min(S,x,M)}function k(t,e,n){const r=1e-5,{direction:o,origin:p}=e,{p0:i,p1:a,p2:f}=t,u=a[0]-i[0],g=a[1]-i[1],m=a[2]-i[2],j=f[0]-i[0],l=f[1]-i[1],h=f[2]-i[2],b=o[1]*h-l*o[2],d=o[2]*j-h*o[0],k=o[0]*l-j*o[1],v=u*b+g*d+m*k;if(v>-r&&v<r)return!1;const S=1/v,w=p[0]-i[0],x=p[1]-i[1],M=p[2]-i[2],O=S*(w*b+x*d+M*k);if(O<0||O>1)return!1;const V=x*m-g*M,q=M*u-m*w,y=w*g-u*x,z=S*(o[0]*V+o[1]*q+o[2]*y);if(z<0||O+z>1)return!1;if(n){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(n,o,S*(j*V+l*q+h*y)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(n,p,n)}return!0}function v(t,e,n){const r=e[0]-t[0],o=e[1]-t[1],c=n[0]-t[0],s=n[1]-t[1];return.5*Math.abs(r*s-o*c)}function S(t,e,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(M,e,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(O,o,t),.5*(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(M,M,O))}const w=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack(_lineSegment_js__WEBPACK_IMPORTED_MODULE_3__.create),x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack((()=>j())),M=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


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

/***/ "./node_modules/@arcgis/core/libs/basisu/BasisU.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/BasisU.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasisTranscoder: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(){return t??=(async()=>{const i=await __webpack_require__.e(/*! import() | chunks-basis_transcoder */ "chunks-basis_transcoder").then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/basis_transcoder.js */ "./node_modules/@arcgis/core/chunks/basis_transcoder.js")),t=await i.default({locateFile:i=>(0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(`esri/libs/basisu/${i}`)});return t.initializeBasis(),t})(),t}let t;


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/basisu/TextureFormat.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/basisu/TextureFormat.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextureFormat: function() { return /* binding */ _; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var _;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(_||(_={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/support/requestImageUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestImage: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultLoadingContext: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n{constructor(r){this._streamDataRequester=r}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isDataProtocol)(r)?((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.dataToArrayBuffer)(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a,s,i){if(null==this._streamDataRequester)return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(s,{responseType:m[a]})).data;const n=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)(this._streamDataRequester.request(s,a,i));if(!0===n.ok)return n.value;throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAbortError)(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("glt-loader-request-error",`Request for resource failed: ${n.error}`)}}const m={image:"image",binary:"array-buffer",json:"json","image+type":void 0};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTransformMatrix: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec2f32.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f32.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(s){if(null==s)return null;const a=null!=s.offset?s.offset:_core_libs_gl_matrix_2_factories_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__.ZEROS,n=null!=s.rotation?s.rotation:0,e=null!=s.scale?s.scale:_core_libs_gl_matrix_2_factories_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__.ONES,f=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(1,0,0,0,1,0,a[0],a[1],1),c=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),m=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(e[0],0,0,0,e[1],0,0,0,1),u=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)();return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.multiply)(u,c,m),(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.multiply)(u,f,u),u}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertPrimitiveToTriangles: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/Indices.js */ "./node_modules/@arcgis/core/geometry/support/Indices.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(r,t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.PrimitiveType.TRIANGLES:return f(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.PrimitiveType.TRIANGLE_STRIP:return u(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.PrimitiveType.TRIANGLE_FAN:return i(r)}}function f(e){return"number"==typeof e?(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__.getContinuousIndexArray)(e):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isUint8Array)(e)?new Uint16Array(e):e}function u(r){const t="number"==typeof r?r:r.length;if(t<3)return[];const n=t-2,o=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__.newIndexArray)(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2)}else{let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2])}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t}return n}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncodedMeshTexture: function() { return /* binding */ t; },
/* harmony export */   imageFromBinaryData: function() { return /* binding */ o; },
/* harmony export */   isEncodedMeshTexture: function() { return /* binding */ r; },
/* harmony export */   jsonFromBinaryData: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__.TextureEncodingMimeType.KTX2_ENCODING}}function r(e){return"encoded-mesh-texture"===e?.type}async function n(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function o(r,n){if(n===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__.TextureEncodingMimeType.KTX2_ENCODING)return new t(r);const o=new Blob([r],{type:n}),c=URL.createObjectURL(o),s=new Image;if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(s)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",r),s.removeEventListener("error",n)};s.addEventListener("load",r),s.addEventListener("error",n),s.src=c}));try{s.src=c,await s.decode()}catch(i){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(c),s}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProcessedObjectResource: function() { return /* binding */ t; },
/* harmony export */   ProcessedObjectStageResources: function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class t{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new s,this.numberOfVertices=0}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetch: function() { return /* binding */ ee; },
/* harmony export */   parseUrl: function() { return /* binding */ te; }
/* harmony export */ });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "./node_modules/@arcgis/core/core/devEnvironmentUtils.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/FloatArray.js */ "./node_modules/@arcgis/core/geometry/support/FloatArray.js");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "./node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../chunks/vec33.js */ "./node_modules/@arcgis/core/chunks/vec33.js");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../chunks/vec43.js */ "./node_modules/@arcgis/core/chunks/vec43.js");
/* harmony import */ var _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../glTF/DefaultLoadingContext.js */ "./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js");
/* harmony import */ var _glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../glTF/internal/indexUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js");
/* harmony import */ var _glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../glTF/internal/resourceUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js");
/* harmony import */ var _glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../glTF/internal/TextureTransformUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js");
/* harmony import */ var _ProcessedObjectResource_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ProcessedObjectResource.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js");
/* harmony import */ var _wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wosrLoader.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js");
/* harmony import */ var _webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../webgl-engine/lib/Attribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js");
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js");
/* harmony import */ var _webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../webgl-engine/materials/pbrUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function ee(t,r){const o=te((0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__.adjustStaticAGOUrl)(t));if("wosr"===o.fileType){const e=await(r.cache?r.cache.loadWOSR(o.url,r):(0,_wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__.load)(o.url,r)),{engineResources:t,referenceBoundingBox:s}=(0,_wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__.processLoadResult)(e,r);return{lods:t,referenceBoundingBox:s,isEsriSymbolResource:!1,isWosr:!0}}let s;if(r.cache)s=await r.cache.loadGLTF(o.url,r,!!r.usePBR);else{const{loadGLTF:e}=await __webpack_require__.e(/*! import() | glTF-loader */ "glTF-loader").then(__webpack_require__.bind(__webpack_require__, /*! ../../glTF/loader.js */ "./node_modules/@arcgis/core/views/3d/glTF/loader.js"));s=await e(new _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_17__.DefaultLoadingContext(r.streamDataRequester),o.url,r,r.usePBR)}const i=s.model.meta?.ESRI_proxyEllipsoid,n=s.meta.isEsriSymbolResource&&null!=i&&"EsriRealisticTreesStyle"===s.meta.ESRI_webstyle;n&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,ae(s,i));const a=!!r.usePBR,l=s.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:n,mrrFactors:_webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_31__.esriSymbologyMRRFactors}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:_webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_31__.advancedMRRFactors},u={...r.materialParameters,treeRendering:n},{engineResources:c,referenceBoundingBox:m}=re(s,l,u,r,o.specifiedLodIndex);return{lods:c,referenceBoundingBox:m,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function te(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function re(e,t,r,o,s){const i=e.model,n=new Array,a=new Map,l=new Map,u=i.lods.length,c=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.empty)();return i.lods.forEach(((e,m)=>{const f=!0===o.skipHighLods&&(u>1&&0===m||u>3&&1===m)||!1===o.skipHighLods&&null!=s&&m!==s;if(f&&0!==m)return;const d=new _ProcessedObjectResource_js__WEBPACK_IMPORTED_MODULE_21__.ProcessedObjectResource(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const s=f?new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_29__.DefaultMaterial({},o):oe(i,e,d,t,r,a,l,o),{geometry:n,vertexCount:u}=se(e,s??new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_29__.DefaultMaterial({},o)),p=n.boundingInfo;null!=p&&0===m&&((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.expandWithVec3)(c,p.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.expandWithVec3)(c,p.bbMax)),null!=s&&(d.stageResources.geometries.push(n),d.numberOfVertices+=u)})),f||n.push(d)})),{engineResources:n,referenceBoundingBox:c}}function oe(e,t,r,o,s,i,n,l){const u=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),m=null!=t.attributes.texCoord0,f=null!=t.attributes.normal;if(null==c)return null;const d=ne(c.alphaMode);if(!i.has(u)){if(m){const t=(t,r=!1)=>{if(null!=t&&!n.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;n.set(t,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_27__.Texture((0,_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_19__.isEncodedMeshTexture)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_19__.isEncodedMeshTexture)(e)&&r,encoding:(0,_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_19__.isEncodedMeshTexture)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(c.textureColor,d!==_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.AlphaDiscardMode.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__.colorGamma),p=c.color[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__.colorGamma),g=c.color[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__.colorGamma),x=c.emissiveFactor[0]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__.colorGamma),b=c.emissiveFactor[1]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__.colorGamma),h=c.emissiveFactor[2]**(1/_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_30__.colorGamma),T=null!=c.textureColor&&m?n.get(c.textureColor):null,y=(0,_webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_31__.useSchematicPBR)({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),w=null!=c.normalTextureTransform?.scale?c.normalTextureTransform?.scale:_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__.ONES;i.set(u,new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_29__.DefaultMaterial({...o,transparent:d===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.AlphaDiscardMode.Blend,customDepthTest:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.DepthTestFunction.Lequal,textureAlphaMode:d,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,p,g],ambient:[r,p,g],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.CullFaceOptions.None:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.CullFaceOptions.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:f?_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_23__.NormalType.Attribute:_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_23__.NormalType.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:null!=T?T.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:null!=c.textureNormal&&m?n.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:null!=T&&!!T.parameters.preMultiplyAlpha,occlusionTextureId:null!=c.textureOcclusion&&m?n.get(c.textureOcclusion).id:void 0,emissiveTextureId:null!=c.textureEmissive&&m?n.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=c.textureMetallicRoughness&&m?n.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[x,b,h],mrrFactors:y?_webgl_engine_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_31__.schematicMRRFactors:[c.metallicFactor,c.roughnessFactor,o.mrrFactors[2]],isSchematic:y,colorTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_20__.getTransformMatrix)(c.colorTextureTransform),normalTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_20__.getTransformMatrix)(c.normalTextureTransform),scale:[w[0],w[1]],occlusionTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_20__.getTransformMatrix)(c.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_20__.getTransformMatrix)(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,_glTF_internal_TextureTransformUtils_js__WEBPACK_IMPORTED_MODULE_20__.getTransformMatrix)(c.metallicRoughnessTextureTransform),...s},l))}const p=i.get(u);if(r.stageResources.materials.push(p),m){const e=e=>{null!=e&&r.stageResources.textures.push(n.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return p}function se(e,s){const i=e.attributes.position.count,n=(0,_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_18__.convertPrimitiveToTriangles)(e.indices||i,e.primitiveType),a=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_10__.newFloatArray)(3*i),{typedBuffer:l,typedBufferStride:u}=e.attributes.position;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__.t)(a,l,e.transform,3,u);const c=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__.VertexAttribute.POSITION,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_24__.Attribute(a,n,3,!0)]];if(null!=e.attributes.normal){const o=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_10__.newFloatArray)(3*i),{typedBuffer:s,typedBufferStride:a}=e.attributes.normal;(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.normalFromMat4)(ie,e.transform),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__.b)(o,s,ie,3,a),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.hasScaling)(ie)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__.n)(o,o),c.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__.VertexAttribute.NORMAL,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_24__.Attribute(o,n,3,!0)])}if(null!=e.attributes.tangent){const r=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_10__.newFloatArray)(4*i),{typedBuffer:s,typedBufferStride:a}=e.attributes.tangent;(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.fromMat4)(ie,e.transform),(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_13__.t)(r,s,ie,4,a),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.hasScaling)(ie)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__.n)(r,r,4),c.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__.VertexAttribute.TANGENT,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_24__.Attribute(r,n,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_10__.newFloatArray)(2*i),{typedBuffer:r,typedBufferStride:o}=e.attributes.texCoord0;(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__.a)(t,r,2,o),c.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__.VertexAttribute.UV0,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_24__.Attribute(t,n,2,!0)])}const m=e.attributes.color;if(null!=m){const t=new Uint8Array(4*i);4===m.elementCount?m instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec4f?(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_13__.b)(t,m,255):m instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec4u8?(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_16__.a)(t,m):m instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec4u16&&(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_13__.b)(t,m,1/256):(t.fill(255),m instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__.f)(t,m.typedBuffer,255,4,m.typedBufferStride):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3u8?(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_15__.c)(t,m.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3u16&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_12__.f)(t,m.typedBuffer,1/256,4,m.typedBufferStride)),c.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__.VertexAttribute.COLOR,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_24__.Attribute(t,n,4,!0)])}return{geometry:new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_26__.Geometry(s,c),vertexCount:i}}const ie=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)();function ne(e){switch(e){case"BLEND":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.AlphaDiscardMode.Blend;case"MASK":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.AlphaDiscardMode.Mask;case"OPAQUE":case null:case void 0:return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_25__.AlphaDiscardMode.Opaque}}function ae(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const s of o.parts){const o=s.attributes.normal;if(null==o)return;const a=s.attributes.position,g=a.count,x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),y=new Uint8Array(4*g),v=new Float64Array(3*g),R=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.invert)((0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),s.transform);let j=0,B=0;for(let i=0;i<g;i++){a.getVec(i,b),o.getVec(i,x),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(b,b,s.transform),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.d)(h,b,t.center),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.E)(h,h,t.radius);const n=h[2],p=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.l)(h),g=Math.min(.45+.55*p*p,1);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.E)(h,h,t.radius),null!==R&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(h,h,R),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.n)(h,h),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.m)(h,h,x,n>-1?.2:Math.min(-4*n-3.8,1)),v[j]=h[0],v[j+1]=h[1],v[j+2]=h[2],j+=3,y[B]=255*g,y[B+1]=255*g,y[B+2]=255*g,y[B+3]=255,B+=4}s.attributes.normal=new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec3f(v),s.attributes.color=new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__.BufferViewVec4u8(y)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTextureResources: function() { return /* binding */ E; },
/* harmony export */   load: function() { return /* binding */ A; },
/* harmony export */   processLoadResult: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/byteSizeEstimations.js */ "./node_modules/@arcgis/core/core/byteSizeEstimations.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/NestedMap.js */ "./node_modules/@arcgis/core/core/NestedMap.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Version.js */ "./node_modules/@arcgis/core/core/Version.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/Indices.js */ "./node_modules/@arcgis/core/geometry/support/Indices.js");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "./node_modules/@arcgis/core/support/requestImageUtils.js");
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/lib/Attribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js");
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const v=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function A(e,t){const n=await j(e,t),s=await E(n.textureDefinitions??{},t);let a=0;for(const r in s)if(s.hasOwnProperty(r)){const e=s[r];a+=e?.image?e.image.width*e.image.height*4:0}return{resource:n,textures:s,size:a+(0,_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_2__.estimateNestedObjectSize)(n)}}async function j(r,n){const s=n?.streamDataRequester;if(s)return I(r,s,n);const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)((0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r,n));if(!0===a.ok)return a.value.data;(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError)(a.error),P(a.error)}async function I(e,r,n){const s=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__.result)(r.request(e,"json",n));if(!0===s.ok)return s.value;(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAbortError)(s.error),P(s.error.details.url)}function P(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("",`Request for object resource failed: ${e}`)}function M(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(v().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(v().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(v().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(v().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else v().warn("Indexed geometries must specify faces"),n=!1;break}default:v().warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(v().warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const a in s){s[a].values||(v().warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function T(e,t){const r=new Array,n=new Array,s=new Array,o=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_5__.NestedMap,u=e.resource,c=_core_Version_js__WEBPACK_IMPORTED_MODULE_7__.Version.parse(u.version||"1.0","wosr");q.validate(c);const p=u.model.name,g=u.model.geometries,h=u.materialDefinitions??{},v=e.textures;let A=0;const j=new Map;for(let a=0;a<g.length;a++){const e=g[a];if(!M(e))continue;const i=k(e),u=e.params.vertexAttributes,c=[],p=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},I=u[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__.VertexAttribute.POSITION],P=I.values.length/I.valuesPerElement;for(const t in u){const e=u[t],r=e.values,n=p(t)??(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_10__.getContinuousIndexArray)(P);c.push([t,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_12__.Attribute(r,n,e.valuesPerElement,!0)])}const T=i.texture,U=v&&v[T];if(U&&!j.has(T)){const{image:e,parameters:t}=U,r=new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_15__.Texture(e,t);n.push(r),j.set(T,r)}const E=j.get(T),q=E?E.id:void 0,R=i.material;let B=o.get(R,T);if(null==B){const e=h[R.slice(R.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=U&&U.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s=U?O(U.alphaChannelUsage):void 0,a={ambient:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.fromArray)(e.diffuse),diffuse:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.fromArray)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:q,initTextureTransparent:!0,doubleSided:!0,cullFace:_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__.CullFaceOptions.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:U?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),B=new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_17__.DefaultMaterial(a,t),o.set(R,T,B)}s.push(B);const C=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_14__.Geometry(B,c);A+=c.find((e=>e[0]===_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__.VertexAttribute.POSITION))?.[1]?.indices.length??0,r.push(C)}return{engineResources:[{name:p,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:u.model.pivotOffset,numberOfVertices:A,lodThreshold:null}],referenceBoundingBox:U(r)}}function U(e){const t=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.empty)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.expandWithVec3)(t,r.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.expandWithVec3)(t,r.bbMax))})),t}async function E(e,t){const r=new Array;for(const a in e){const n=e[a],s=n.images[0].data;if(!s){v().warn("Externally referenced texture data is not yet supported");continue}const o=n.encoding+";base64,"+s,i="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.TextureWrapMode.REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.TextureWrapMode.REPEAT},preMultiplyAlpha:O(l)!==_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__.AlphaDiscardMode.Opaque},c=t?.disableTextures?Promise.resolve(null):(0,_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_11__.requestImage)(o,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function O(e){switch(e){case"mask":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__.AlphaDiscardMode.Mask;case"maskAndTransparency":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__.AlphaDiscardMode.MaskBlend;case"none":return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__.AlphaDiscardMode.Opaque;default:return _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_13__.AlphaDiscardMode.Blend}}function k(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const q=new _core_Version_js__WEBPACK_IMPORTED_MODULE_7__.Version(1,2,"wosr");


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConvertOptions: function() { return /* binding */ B; },
/* harmony export */   FastColorInfo: function() { return /* binding */ b; },
/* harmony export */   FastOpacityInfo: function() { return /* binding */ C; },
/* harmony export */   FastRotationInfo: function() { return /* binding */ D; },
/* harmony export */   FastRotationType: function() { return /* binding */ y; },
/* harmony export */   FastSizeInfo: function() { return /* binding */ g; },
/* harmony export */   FastSizeType: function() { return /* binding */ h; },
/* harmony export */   FastSymbolUpdatesState: function() { return /* binding */ N; },
/* harmony export */   FastVisualVariables: function() { return /* binding */ U; },
/* harmony export */   VisualVariablesParameters: function() { return /* binding */ J; },
/* harmony export */   convertVisualVariables: function() { return /* binding */ L; },
/* harmony export */   evaluateModelTransform: function() { return /* binding */ Q; },
/* harmony export */   evaluateModelTransformScale: function() { return /* binding */ W; },
/* harmony export */   getAttributeValue: function() { return /* binding */ X; },
/* harmony export */   getMaterialParameters: function() { return /* binding */ K; },
/* harmony export */   initFastSymbolUpdatesState: function() { return /* binding */ O; },
/* harmony export */   updateFastSymbolUpdatesState: function() { return /* binding */ G; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../renderers/support/lengthUtils.js */ "./node_modules/@arcgis/core/renderers/support/lengthUtils.js");
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/debugFlags.js */ "./node_modules/@arcgis/core/views/3d/support/debugFlags.js");
/* harmony import */ var _webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl-engine/core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var h,y;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(h||(h={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(y||(y={}));class x{constructor(e){this.field=e}}class g extends x{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[h.Undefined,h.Undefined,h.Undefined]}}class b extends x{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}}class C extends x{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}class D extends x{constructor(e){super(e),this.offset=[0,0,0],this.factor=[1,1,1],this.type=[0,0,0]}}class U{}function w(e){return null!=e}function V(e){return"number"==typeof e}function M(e){return"string"==typeof e}function j(e){return null==e||M(e)}function A(e,t){e&&e.push(t)}function I(e,t,o,i=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.create)()){const n=e||0,s=t||0,r=o||0;return 0!==n&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.rotateZ)(i,i,-n/180*Math.PI),0!==s&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.rotateX)(i,i,s/180*Math.PI),0!==r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.rotateY)(i,i,r/180*Math.PI),i}function T(e,t,o,i,n){const s=e.minSize,r=e.maxSize;if(e.useSymbolValue){const e=i.symbolSize[o];return t.minSize[o]=e,t.maxSize[o]=e,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=h.DefinedSize,!0}if(w(e.field))return w(e.stops)?2===e.stops.length&&V(e.stops[0].size)&&V(e.stops[1].size)?(F(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=h.DefinedSize,!0):(A(n,"Could not convert size info: stops only supported with 2 elements"),!1):V(s)&&V(r)&&w(e.minDataValue)&&w(e.maxDataValue)?(F(s,r,e.minDataValue,e.maxDataValue,t,o),t.type[o]=h.DefinedSize,!0):"unknown"===e.valueUnit?(A(n,"Could not convert size info: proportional size not supported"),!1):null!=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_8__.meterIn[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_8__.meterIn[e.valueUnit],t.type[o]=h.DefinedSize,!0):(A(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!w(e.field)){if(e.stops?.[0]&&V(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=h.DefinedSize,!0;if(V(s))return t.minSize[o]=s,t.maxSize[o]=s,t.offset[o]=s,t.factor[o]=0,t.type[o]=h.DefinedSize,!0}return A(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function F(e,t,o,i,n,s){const r=Math.abs(i-o)>0?(t-e)/(i-o):0;n.minSize[s]=r>0?e:t,n.maxSize[s]=r>0?t:e,n.offset[s]=e-o*r,n.factor[s]=r}function P(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return A(i,"Could not convert size info: unsupported property"),null;if(!j(e.field))return A(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return A(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new g(e.field);let n;switch(e.axis){case"width":return n=T(e,t.size,0,o,i),n?t:null;case"height":return n=T(e,t.size,2,o,i),n?t:null;case"depth":return n=T(e,t.size,1,o,i),n?t:null;case"width-and-depth":return n=T(e,t.size,0,o,i),n&&T(e,t.size,1,o,i),n?t:null;case null:case void 0:case"all":return n=T(e,t.size,0,o,i),n=n&&T(e,t.size,1,o,i),n=n&&T(e,t.size,2,o,i),n?t:null;default:return A(i,`Could not convert size info: unknown axis "${e.axis}""`),null}}function R(e,t,o){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===h.DefinedSize&&(o*=t.modelSize[n],e.type[n]=h.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o}let i;if(e.type[0]!==h.Undefined)i=0;else if(e.type[1]!==h.Undefined)i=1;else{if(e.type[2]===h.Undefined)return A(o,"No size axis contains a valid size or scale"),!1;i=2}for(let n=0;n<3;++n)e.type[n]===h.Undefined&&(e.minSize[n]=e.minSize[i],e.maxSize[n]=e.maxSize[i],e.offset[n]=e.offset[i],e.factor[n]=e.factor[i],e.type[n]=e.type[i]);return!0}function k(e,t,o){e[4*t]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function E(e,t,o){if(e.normalizationField)return A(o,"Could not convert color info: unsupported property"),null;if(M(e.field)){if(!e.stops)return A(o,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return A(o,"Could not convert color info: too many color stops"),null;t.color=new b(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.color.values[e]=o.value,k(t.color.colors,e,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return A(o,"Could not convert color info: no field and no colors/stops"),null;{const o=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.color.values[e]=1/0,k(t.color.colors,e,o)}}return t}function _(e,t,o){if(e.normalizationField)return A(o,"Could not convert opacity info: unsupported property"),null;if(M(e.field)){if(!e.stops)return A(o,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return A(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new C(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.opacity.values[e]=o.value,t.opacity.opacityValues[e]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return A(o,"Could not convert opacity info: no field and no opacities/stops"),null;{const o=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=o}}return t}function q(e,t,o){const i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1}function $(e,t,o){if(!M(e.field))return A(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return A(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return q(e,t.rotation,0),t;case"roll":return q(e,t.rotation,1),t;case null:case void 0:case"heading":return q(e,t.rotation,2),t;default:return A(o,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}class B{constructor(e,t=[1,1,1],o=[1,1,1],i=1,n=[0,0,0],s=[1,1,1],r=[0,0,0]){this.supports=e,this.modelSize=t,this.symbolSize=o,this.unitInMeters=i,this.anchor=n,this.scale=s,this.rotation=r}}function L(e,t,o){if(!e)return null;const i=e.reduce(((e,i)=>{if(!e)return e;if(i.valueExpression)return A(o,"Could not convert visual variables: arcade expressions not supported"),null;switch(i.type){case"size":return t.supports.size?P(i,e,t,o):e;case"color":return t.supports.color?E(i,e,o):e;case"opacity":return t.supports.opacity?_(i,e,o):null;case"rotation":return t.supports.rotation?$(i,e,o):e;default:return null}}),new U);return!(e.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i?.size&&!R(i.size,t,o)?null:i:null}class N{constructor(e,t,o){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=o}}function O(e,t){if(!e)return null;if(_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_9__.debugFlags.TESTS_DISABLE_FAST_UPDATES)return null;const o=L(e.visualVariables,t);return o?new N(o,K(o,t),!!o.size):null}function G(e,t,o){if(!t||!e)return!1;const i=e.visualVariables,n=L(t.visualVariables,o);return!!n&&(!!(H(i.size,n.size,"size")&&H(i.color,n.color,"color")&&H(i.rotation,n.rotation,"rotation")&&H(i.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=K(n,o),e.requiresShaderTransformation=!!n.size,!0))}function H(e,t,o){if(!!e!=!!t)return!1;if(e&&e.field!==t?.field)return!1;if(e&&"rotation"===o){const o=e,i=t;for(let e=0;e<3;e++)if(o.type[e]!==i.type[e]||o.offset[e]!==i.offset[e]||o.factor[e]!==i.factor[e])return!1}return!0}class J extends _webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__.NoParameters{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function K(e,n){const s=new J(e);return s.vvSize&&(s.vvSymbolAnchor=n.anchor,(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.identity)(ee),I(n.rotation[2],n.rotation[0],n.rotation[1],ee),s.vvSymbolRotationMatrix=s.vvSymbolRotationMatrix||(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__.fromMat4)(s.vvSymbolRotationMatrix,ee)),s}function Q(t,o,i){if(!t.vvSize)return i;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.copy)(Y,i);const u=t.vvSymbolRotationMatrix;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.set)(ee,u[0],u[1],u[2],0,u[3],u[4],u[5],0,u[6],u[7],u[8],0,0,0,0,1),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.multiply)(Y,Y,ee);for(let n=0;n<3;++n){const i=t.vvSize.offset[n]+o[0]*t.vvSize.factor[n];Z[n]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(i,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.scale)(Y,Y,Z),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__.translate)(Y,Y,t.vvSymbolAnchor),Y}function W(t,o,i){if(!o.vvSize)return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_6__.i)(t,1,1,1),t;for(let n=0;n<3;++n){const s=o.vvSize.offset[n]+i[0]*o.vvSize.factor[n];t[n]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(s,o.vvSize.minSize[n],o.vvSize.maxSize[n])}return t}function X(e,t){const o=null==e?0:t.attributes[e];return"number"==typeof o&&isFinite(o)?o:0}const Y=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),Z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)(),ee=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorMixModeEnum: function() { return /* binding */ n; },
/* harmony export */   encodeSymbolColor: function() { return /* binding */ r; },
/* harmony export */   parseColorMixMode: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,a){if(null==e||r===n.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const c=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[3]*i),0,i),p=0===c||r===n.Tint?0:r===n.Replace?u:l;a[0]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[0]*o),0,o),a[1]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[1]*o),0,o),a[2]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(e[2]*o),0,o),a[3]=c+p}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const o=255,i=85,u=i,l=2*i;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterleavedBuffer: function() { return /* binding */ D; },
/* harmony export */   InterleavedLayout: function() { return /* binding */ G; },
/* harmony export */   PackedLayout: function() { return /* binding */ I; },
/* harmony export */   newLayout: function() { return /* binding */ H; }
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/buffer/types.js */ "./node_modules/@arcgis/core/geometry/support/buffer/types.js");
/* harmony import */ var _webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webgl-engine/lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class D{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const s of e.fields.keys()){const t=e.fields.get(s);this[s]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const s=this[e];return s&&s.elementCount===t.ElementCount&&s.elementType===t.ElementType?s:null}slice(e,t){return new D(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,s=0,i=e.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class G{constructor(e){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:N(e[1].constructor)}))))}freeze(){return this}vec2f(t,s){return this._appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f,s),this}vec2f64(e,s){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f64,s),this}vec3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f,t),this}vec3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f64,t),this}vec4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f,t),this}vec4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f64,t),this}mat3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f,t),this}mat3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f64,t),this}mat4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f,t),this}mat4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f64,t),this}vec4u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u8,t),this}f32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat,t),this}f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat64,t),this}u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint8,t),this}u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint16,t),this}i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt8,t),this}vec2i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i8,t),this}vec2i16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i16,t),this}vec2u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u8,t),this}vec4u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u16,t),this}u32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint32,t),this}_appendField(e,t,s){if(this._fields.has(e))return void (0,_webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__.elementTypeSize)(t.ElementType),r=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:r,optional:s})}createBuffer(e){return new D(this,e)}createView(e){return new D(this,e)}clone(){const e=new G;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,s)=>e._fields.set(s,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__.elementTypeSize)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function H(){return new G}class I{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const s={...e,constructor:K(e.constructor)};this.fields.push([t,s])})),this.stride=e.stride}}const J=[_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3u8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3u16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3u32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3i8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4i8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3i16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4i16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3i32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4i32];function K(e){return`${e.ElementType}_${e.ElementCount}`}function N(e){return O.get(e)}const O=new Map;J.forEach((e=>O.set(K(e),e)));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/debugFlags.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/debugFlags.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugFlags: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let T=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LABELS_SHOW_BORDER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TEXT_SHOW_BASELINE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TEXT_SHOW_BORDER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"SHOW_POI",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],T.prototype,"LINE_WIREFRAMES",void 0),T=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.3d.support.debugFlags")],T);const t=new T;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/dito.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/dito.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeOBB: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl-engine/lib/Attribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=1e-6,f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();function u(t,r){const{data:n,size:i}=t,o=n.length/i;if(o<=0)return;const s=new tt(t);it(f,s.minProj,s.maxProj),st(f,f,.5),ot(h,s.maxProj,s.minProj);const a=nt(h),m=new rt;m.quality=a,o<14&&(t=new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_5__.Vertices(new Float64Array(s.buffer,112,42),3));const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),P=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),N=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();switch(l(s,t,N,u,j,P,b,x,I,m)){case 1:return void O(f,h,r);case 2:return void K(t,b,r)}w(t,N,u,j,P,b,x,I,m),L(t,m.b0,m.b1,m.b2,D,H);const V=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();ot(V,H,D),m.quality=nt(V),m.quality<a?Z(m.b0,m.b1,m.b2,D,H,V,r):O(f,h,r)}function l(t,r,n,i,o,s,e,a,c,f){if(A(t,i,o),ft(i,o)<m)return 1;ot(e,i,o),ct(e,e);return q(r,i,e,s)<m?2:(ot(a,o,s),ct(a,a),ot(c,s,i),ct(c,c),at(n,a,e),ct(n,n),Y(r,n,e,a,c,f),0)}const j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),P=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),N=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),V=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),y=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();function w(t,r,n,i,o,s,e,a,c){M(t,r,n,j,P),void 0!==j[0]&&(ot(b,j,n),ct(b,b),ot(x,j,i),ct(x,x),ot(I,j,o),ct(I,I),at(N,x,s),ct(N,N),at(V,I,e),ct(V,V),at(y,b,a),ct(y,y),Y(t,N,s,x,b,c),Y(t,V,e,I,x,c),Y(t,y,a,b,I,c)),void 0!==P[0]&&(ot(b,P,n),ct(b,b),ot(x,P,i),ct(x,x),ot(I,P,o),ct(I,I),at(N,x,s),ct(N,N),at(V,I,e),ct(V,V),at(y,b,a),ct(y,y),Y(t,N,s,x,b,c),Y(t,V,e,I,x,c),Y(t,y,a,b,I,c))}function A(t,r,n){let i=ft(t.maxVert[0],t.minVert[0]),o=0;for(let s=1;s<7;++s){const r=ft(t.maxVert[s],t.minVert[s]);r>i&&(i=r,o=s)}et(r,t.minVert[o]),et(n,t.maxVert[o])}const g=[0,0,0];function q(t,r,n,i){const{data:o,size:s}=t;let e=Number.NEGATIVE_INFINITY,a=0;for(let c=0;c<o.length;c+=s){g[0]=o[c]-r[0],g[1]=o[c+1]-r[1],g[2]=o[c+2]-r[2];const t=n[0]*g[0]+n[1]*g[1]+n[2]*g[2],i=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=g[0]*g[0]+g[1]*g[1]+g[2]*g[2]-t*t/i;s>e&&(e=s,a=c)}return et(i,o,a),e}const d=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();function M(t,r,n,i,o){G(t,r,d,o,i);const s=ht(n,r);d[1]-m<=s&&(i[0]=void 0),d[0]+m>=s&&(o[0]=void 0)}const F=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),T=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),E=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),p=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();function Y(t,r,n,i,o,s){if(mt(r)<m)return;at(F,n,r),at(T,i,r),at(v,o,r),S(t,r,d),p[1]=d[0],E[1]=d[1],z[1]=E[1]-p[1];const e=[n,i,o],a=[F,T,v];for(let c=0;c<3;++c){S(t,e[c],d),p[0]=d[0],E[0]=d[1],S(t,a[c],d),p[2]=d[0],E[2]=d[1],z[0]=E[0]-p[0],z[2]=E[2]-p[2];const n=nt(z);n<s.quality&&(et(s.b0,e[c]),et(s.b1,r),et(s.b2,a[c]),s.quality=n)}}const _=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();function S(t,r,n){const{data:i,size:o}=t;n[0]=Number.POSITIVE_INFINITY,n[1]=Number.NEGATIVE_INFINITY;for(let s=0;s<i.length;s+=o){const t=i[s]*r[0]+i[s+1]*r[1]+i[s+2]*r[2];n[0]=Math.min(n[0],t),n[1]=Math.max(n[1],t)}}function G(t,r,n,i,o){const{data:s,size:e}=t;et(i,s),et(o,i),n[0]=ht(_,r),n[1]=n[0];for(let a=e;a<s.length;a+=e){const t=s[a]*r[0]+s[a+1]*r[1]+s[a+2]*r[2];t<n[0]&&(n[0]=t,et(i,s,a)),t>n[1]&&(n[1]=t,et(o,s,a))}}function O(t,n,i){i.center=t,i.halfSize=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)(n,n,.5),i.quaternion=_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.IDENTITY}const k=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),C=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),D=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),H=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),J=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();function K(t,r,n){et(k,r),Math.abs(r[0])>Math.abs(r[1])&&Math.abs(r[0])>Math.abs(r[2])?k[0]=0:Math.abs(r[1])>Math.abs(r[2])?k[1]=0:k[2]=0,mt(k)<m&&(k[0]=k[1]=k[2]=1),at(B,r,k),ct(B,B),at(C,r,B),ct(C,C),L(t,r,B,C,D,H),ot(J,H,D),Z(r,B,C,D,H,J,n)}function L(t,r,n,i,o,s){S(t,r,d),o[0]=d[0],s[0]=d[1],S(t,n,d),o[1]=d[0],s[1]=d[1],S(t,i,d),o[2]=d[0],s[2]=d[1]}const Q=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),R=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),W=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(1,0,0,0,1,0,0,0,1),X=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function Z(t,r,n,i,e,a,c){W[0]=t[0],W[1]=t[1],W[2]=t[2],W[3]=r[0],W[4]=r[1],W[5]=r[2],W[6]=n[0],W[7]=n[1],W[8]=n[2],c.quaternion=ut(X,W),it(Q,i,e),st(Q,Q,.5),st(R,t,Q[0]),st(U,r,Q[1]),it(R,R,U),st(U,n,Q[2]),c.center=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.g)(R,R,U),c.halfSize=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)(Q,a,.5)}const $=7;class tt{constructor(t){this.minVert=new Array($),this.maxVert=new Array($);const r=64*$;this.buffer=new ArrayBuffer(r);let n=0;this.minProj=new Float64Array(this.buffer,n,$),n+=8*$,this.maxProj=new Float64Array(this.buffer,n,$),n+=8*$;for(let a=0;a<$;++a)this.minVert[a]=new Float64Array(this.buffer,n,3),n+=24;for(let a=0;a<$;++a)this.maxVert[a]=new Float64Array(this.buffer,n,3),n+=24;for(let a=0;a<$;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;const i=new Array($),o=new Array($),{data:s,size:e}=t;for(let a=0;a<s.length;a+=e){let t=s[a];t<this.minProj[0]&&(this.minProj[0]=t,i[0]=a),t>this.maxProj[0]&&(this.maxProj[0]=t,o[0]=a),t=s[a+1],t<this.minProj[1]&&(this.minProj[1]=t,i[1]=a),t>this.maxProj[1]&&(this.maxProj[1]=t,o[1]=a),t=s[a+2],t<this.minProj[2]&&(this.minProj[2]=t,i[2]=a),t>this.maxProj[2]&&(this.maxProj[2]=t,o[2]=a),t=s[a]+s[a+1]+s[a+2],t<this.minProj[3]&&(this.minProj[3]=t,i[3]=a),t>this.maxProj[3]&&(this.maxProj[3]=t,o[3]=a),t=s[a]+s[a+1]-s[a+2],t<this.minProj[4]&&(this.minProj[4]=t,i[4]=a),t>this.maxProj[4]&&(this.maxProj[4]=t,o[4]=a),t=s[a]-s[a+1]+s[a+2],t<this.minProj[5]&&(this.minProj[5]=t,i[5]=a),t>this.maxProj[5]&&(this.maxProj[5]=t,o[5]=a),t=s[a]-s[a+1]-s[a+2],t<this.minProj[6]&&(this.minProj[6]=t,i[6]=a),t>this.maxProj[6]&&(this.maxProj[6]=t,o[6]=a)}for(let a=0;a<$;++a){let t=i[a];et(this.minVert[a],s,t),t=o[a],et(this.maxVert[a],s,t)}}}class rt{constructor(){this.b0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(1,0,0),this.b1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(0,1,0),this.b2=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(0,0,1),this.quality=0}}function nt(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function it(t,r,n){t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2]}function ot(t,r,n){t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2]}function st(t,r,n){t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n}function et(t,r,n=0){t[0]=r[n],t[1]=r[n+1],t[2]=r[n+2]}function at(t,r,n){const i=r[0],o=r[1],s=r[2],e=n[0],a=n[1],c=n[2];t[0]=o*c-s*a,t[1]=s*e-i*c,t[2]=i*a-o*e}function ct(t,r){const n=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(n>0){const i=1/Math.sqrt(n);t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i}}function mt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function ft(t,r){const n=r[0]-t[0],i=r[1]-t[1],o=r[2]-t[2];return n*n+i*i+o*o}function ht(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function ut(t,r){const n=r[0]+r[4]+r[8];if(n>0){let i=Math.sqrt(n+1);t[3]=.5*i,i=.5/i,t[0]=(r[5]-r[7])*i,t[1]=(r[6]-r[2])*i,t[2]=(r[1]-r[3])*i}else{let n=0;r[4]>r[0]&&(n=1),r[8]>r[3*n+n]&&(n=2);const i=(n+1)%3,o=(n+2)%3;let s=Math.sqrt(r[3*n+n]-r[3*i+i]-r[3*o+o]+1);t[n]=.5*s,s=.5/s,t[3]=(r[3*i+o]-r[3*o+i])*s,t[i]=(r[3*i+n]+r[3*n+i])*s,t[o]=(r[3*o+n]+r[3*n+o])*s}return t}


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

/***/ "./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Obb: function() { return /* binding */ I; },
/* harmony export */   compute: function() { return /* binding */ J; },
/* harmony export */   computeOffsetObb: function() { return /* binding */ L; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../geometry/ellipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/ellipsoidUtils.js");
/* harmony import */ var _geometry_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/spatialReferenceEllipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js");
/* harmony import */ var _geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/* harmony import */ var _geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry/projection/projectors.js */ "./node_modules/@arcgis/core/geometry/projection/projectors.js");
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/support/plane.js */ "./node_modules/@arcgis/core/geometry/support/plane.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../geometry/support/vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/* harmony import */ var _dito_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dito.js */ "./node_modules/@arcgis/core/views/3d/support/dito.js");
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../webgl-engine/lib/Attribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class I{constructor(t=_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.ZEROS,a=gt,e=_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__.IDENTITY){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],e[0],e[1],e[2],e[3]]}clone(){const t=new I;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new I;return a._data=t.slice(),a}static fromJSON(t){return new I(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_16__.sv3d.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,e){this._data[0]=t,this._data[1]=a,this._data[2]=e}get halfSize(){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_16__.sv3d.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.set)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_16__.sq4d.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=O,e=this._data;a[0]=e[6],a[1]=e[7],a[2]=e[8],a[3]=e[9];for(let s=0;s<8;++s){const i=t[s];i[0]=(1&s?-1:1)*e[3],i[1]=(2&s?-1:1)*e[4],i[2]=(4&s?-1:1)*e[5],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(i,i,a),i[0]+=e[0],i[1]+=e[1],i[2]+=e[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],e=this._data[5];return Math.sqrt(t*t+a*a+e*e)}intersectSphere(t){X[0]=this._data[0]-t[0],X[1]=this._data[1]-t[1],X[2]=this._data[2]-t[2];const a=this.getQuaternion(T);return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.conjugate)(O,a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(X,X,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.x)(X,X),Y[0]=Math.min(X[0],this._data[3]),Y[1]=Math.min(X[1],this._data[4]),Y[2]=Math.min(X[2],this._data[5]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.y)(Y,X)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const e=this._data;X[0]=e[0]-t[0],X[1]=e[1]-t[1],X[2]=e[2]-t[2];const s=t[3],i=s+a;return!((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.z)(X)>i*i)&&(O[0]=-e[6],O[1]=-e[7],O[2]=-e[8],O[3]=e[9],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(X,X,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.x)(X,X),Y[0]=Math.min(X[0],e[3]),Y[1]=Math.min(X[1],e[4]),Y[2]=Math.min(X[2],e[5]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.y)(Y,X)<s*s)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],e=this.projectedRadius((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_14__.getNormal)(t));return a>e?1:a<-e?-1:0}intersectRay(t,a,e=0){const s=this._data,i=O;i[0]=-s[6],i[1]=-s[7],i[2]=-s[8],i[3]=s[9],X[0]=t[0]-s[0],X[1]=t[1]-s[1],X[2]=t[2]-s[2];const r=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(X,X,O),n=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(Y,a,O);let o=-1/0,h=1/0;const c=this.getHalfSize(ct);for(let d=0;d<3;d++){const t=r[d],a=n[d],s=c[d]+e;if(Math.abs(a)>1e-6){const e=(s-t)/a,i=(-s-t)/a;o=Math.max(o,Math.min(e,i)),h=Math.min(h,Math.max(e,i))}else if(t>s||t<-s)return!1}return o<=h}projectedArea(e,s,i,n){const o=this.getQuaternion(T);(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.conjugate)(O,o),X[0]=e[0]-this._data[0],X[1]=e[1]-this._data[1],X[2]=e[2]-this._data[2],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(X,X,O);const h=this.getHalfSize(ct),_=X[0]<-h[0]?-1:X[0]>h[0]?1:0,l=X[1]<-h[1]?-1:X[1]>h[1]?1:0,m=X[2]<-h[2]?-1:X[2]>h[2]?1:0,g=Math.abs(_)+Math.abs(l)+Math.abs(m);if(0===g)return 1/0;const p=1===g?4:6,M=6*(_+3*l+9*m+13);(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat)(dt,o),(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.scale)(dt,dt,h);const b=this.getCenter(ot);for(let t=0;t<p;t++){const a=K[M+t];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(X,((1&a)<<1)-1,(2&a)-1,((4&a)>>1)-1),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(X,X,dt),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(E,b,X),E[3]=1,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_7__.t)(E,E,s);const e=1/Math.max(1e-6,E[3]);N[2*t]=E[0]*e,N[2*t+1]=E[1]*e}const j=2*p-2;let S=N[0]*(N[3]-N[j+1])+N[j]*(N[1]-N[j-1]);for(let t=2;t<j;t+=2)S+=N[t]*(N[t+3]-N[t-1]);return Math.abs(S)*i*n*.125}projectedRadius(t){const a=this.getQuaternion(T);return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.conjugate)(O,a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(X,t,O),Math.abs(X[0]*this._data[3])+Math.abs(X[1]*this._data[4])+Math.abs(X[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_14__.getNormal)(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_14__.getNormal)(t))}toAaBoundingBox(a){const e=this.getQuaternion(T),s=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat)(dt,e),i=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),r=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),n=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);a[0]=this._data[0]-i,a[1]=this._data[1]-r,a[2]=this._data[2]-n,a[3]=this._data[0]+i,a[4]=this._data[1]+r,a[5]=this._data[2]+n}transform(t,a,e,s=0,i=(0,_geometry_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__.getSphericalPCPF)(e),r=(0,_geometry_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__.getSphericalPCPF)(a),n=(0,_geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_13__.getProjector)(a,r)){if(e===i)a.isGeographic?st(this,t,a,s,r):et(this,t,a,s,r,n);else if(a.isWGS84&&(e.isWebMercator||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPlateCarree)(e)))$(a,this,e,t,s);else if(a.isWebMercator&&(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_15__.isPlateCarree)(e))tt(a,this,e,t,s);else{const i=this.getCenter(ot);i[2]+=s,(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_12__.projectBuffer)(i,a,0,i,e,0),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(T),t.halfSize=this.getHalfSize(ct))}}}const O=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),T=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),V=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),X=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),Y=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),E=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__.create)();function J(t,a=new I){return (0,_dito_js__WEBPACK_IMPORTED_MODULE_18__.computeOBB)(t,a),a}const N=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],K=(()=>{const t=new Int8Array(162);let a=0;const e=e=>{for(let s=0;s<e.length;s++)t[a+s]=e[s];a+=6};return e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4]),t})();function L(t,a,e,s,i){const n=t.getQuaternion(T);i.quaternion=n,(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.conjugate)(O,n);const o=t.getCenter(ot),h=t.getHalfSize(ct);if(s===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_17__.ViewingMode.Global){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(mt,o,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.x)(ft,mt),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.A)(ut,ft,h),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.a)(ut,ft,ut);const s=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(ut);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(ut,ft,h);const r=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(ut);if(s<e)i.center=o,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(mt,e,e,e),i.halfSize=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(mt,h,mt);else{const n=r>0?1+a/r:1,o=s>0?1+e/s:1,c=(o+n)/2,_=(o-n)/2;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.h)(ut,ft,_),i.halfSize=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.b)(ut,ut,h,c),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.h)(ut,ft,c),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.b)(ut,ut,h,_),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.B)(mt,mt),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.C)(mt,ut,mt);const l=t.getQuaternion(V);i.center=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(mt,mt,l)}}else{i.center=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.b)(mt,o,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.UNIT_Z,(e+a)/2);const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(mt,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.UNIT_Z,O);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.x)(t,t),i.halfSize=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.b)(ft,h,t,(e-a)/2)}return i}function $(t,a,e,s,i){a.getCenter(ot),ot[2]+=i;const r=(0,_geometry_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__.getSphericalPCPF)(e);(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_12__.projectBuffer)(ot,t,0,ot,r,0),at(r,a,ot,e,s)}function tt(t,a,e,s,i){a.getCenter(ot),ot[2]+=i,at(t,a,ot,e,s)}function at(a,e,s,i,r){const n=e.getQuaternion(T),o=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.fromQuat)(dt,n),h=e.getHalfSize(ct);for(let t=0;t<8;++t){for(let a=0;a<3;++a)nt[a]=h[a]*(t&1<<a?-1:1);for(let a=0;a<3;++a){let e=s[a];for(let t=0;t<3;++t)e+=nt[t]*o[3*t+a];it[3*t+a]=e}}(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_12__.projectBuffer)(it,a,0,it,i,0,8),J(rt,r)}function et(t,a,e,s,i=(0,_geometry_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__.getSphericalPCPF)(e),o=(0,_geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_13__.getProjector)(e,i)){t.getCorners(lt),t.getCenter(nt),nt[2]+=s,(0,_geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_11__.computeTranslationToOriginAndRotation)(e,nt,_t,i),a.setCenter(_t[12],_t[13],_t[14]);const h=2*Math.sqrt(1+_t[0]+_t[5]+_t[10]);O[0]=(_t[6]-_t[9])/h,O[1]=(_t[8]-_t[2])/h,O[2]=(_t[1]-_t[4])/h,O[3]=.25*h;const l=t.getQuaternion(T);a.quaternion=(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.multiply)(O,O,l),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.conjugate)(O,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(ft,0,0,0);const m=a.getCenter(ht);for(const r of lt)r[2]+=s,o(r,0,r,0),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.a)(mt,r,m),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(mt,mt,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.x)(mt,mt),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.D)(ft,ft,mt);a.halfSize=ft}function st(t,a,e,s,i=(0,_geometry_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__.getSphericalPCPF)(e)){const n=(0,_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__.getReferenceEllipsoid)(e),o=1+Math.max(0,s)/(n.radius+t.centerZ);t.getCenter(nt),nt[2]+=s,(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_12__.projectBuffer)(nt,e,0,nt,i,0),a.center=nt;const h=t.getQuaternion(T);a.quaternion=h,(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_3__.conjugate)(O,h),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(mt,0,0,1),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.w)(mt,mt,O);const _=t.getHalfSize(ct);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(mt,_[0]*Math.abs(mt[0]),_[1]*Math.abs(mt[1]),_[2]*Math.abs(mt[2])),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.h)(mt,mt,n.inverseFlattening),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(mt,_,mt),a.halfSize=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.h)(mt,mt,o)}const it=new Array(24),rt=new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_19__.Vertices(it,3),nt=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),ot=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),ht=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),ct=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),dt=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),_t=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),lt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],mt=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),ft=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),ut=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),gt=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.freeze)(-1,-1,-1);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecodeSymbolColor: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../layers/support/symbolColorUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForwardLinearDepth: function() { return /* binding */ n; },
/* harmony export */   addCalculateLinearDepth: function() { return /* binding */ d; },
/* harmony export */   addLinearDepth: function() { return /* binding */ t; },
/* harmony export */   addNearFar: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes/VertexPosition.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(e){e.varyings.add("linearDepth","float")}function i(e){e.vertex.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float2PassUniform("nearFar",((e,a)=>a.camera.nearFar)))}function d(e){e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function n(r,n){const{vertex:s}=r;switch(n.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Color:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ColorEmission:if(n.receiveShadows)return t(r),void s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ViewshedShadow:return r.include(_attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__.VertexPosition,n),t(r),i(r),d(r),void s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void forwardLinearDepth() {}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Offset: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenSpacePass: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(i,o=!0){i.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__.VertexAttribute.POSITION,"vec2"),o&&i.varyings.add("uv","vec2"),i.vertex.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`
      gl_Position = vec4(position, 0.0, 1.0);
      ${o?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`uv = position * 0.5 + vec2(0.5);`:""}
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShaderOutput: function() { return /* binding */ n; },
/* harmony export */   is2DGeometryOutput: function() { return /* binding */ h; },
/* harmony export */   is3DGeometryOutput: function() { return /* binding */ r; },
/* harmony export */   is3DGeometryOutputMRT: function() { return /* binding */ t; },
/* harmony export */   isColor: function() { return /* binding */ e; },
/* harmony export */   isColorEmission: function() { return /* binding */ S; },
/* harmony export */   isColorEmissionHighlightOIDOrDepth: function() { return /* binding */ w; },
/* harmony export */   isColorEmissionHighlightOrOID: function() { return /* binding */ g; },
/* harmony export */   isColorHighlightOIDOrDepth: function() { return /* binding */ f; },
/* harmony export */   isColorHighlightOrDepth: function() { return /* binding */ c; },
/* harmony export */   isColorHighlightOrOID: function() { return /* binding */ a; },
/* harmony export */   isColorOrColorEmission: function() { return /* binding */ u; },
/* harmony export */   isColorOrHighlight: function() { return /* binding */ d; },
/* harmony export */   isColorOrOID: function() { return /* binding */ l; },
/* harmony export */   isDepth: function() { return /* binding */ C; },
/* harmony export */   isHighlightOrOID: function() { return /* binding */ i; },
/* harmony export */   isShadowRelatedOutput: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;function o(o){return o===n.Shadow||o===n.ShadowHighlight||o===n.ShadowExcludeHighlight||o===n.ViewshedShadow}function r(o){return f(o)||o===n.Normal}function t(o){return w(o)||o===n.Normal}function i(o){return o===n.Highlight||o===n.ObjectAndLayerIdColor}function h(n){return e(n)||i(n)}function e(o){return o===n.Color}function u(n){return e(n)||S(n)}function l(o){return e(o)||o===n.ObjectAndLayerIdColor}function d(o){return e(o)||o===n.Highlight}function c(n){return d(n)||C(n)}function a(n){return e(n)||i(n)}function g(n){return u(n)||i(n)}function f(n){return a(n)||C(n)}function w(n){return g(n)||C(n)}function C(o){return o===n.Depth}function S(o){return o===n.ColorEmission}!function(n){n[n.Color=0]="Color",n[n.ColorEmission=1]="ColorEmission",n[n.Depth=2]="Depth",n[n.Normal=3]="Normal",n[n.Shadow=4]="Shadow",n[n.ShadowHighlight=5]="ShadowHighlight",n[n.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",n[n.ViewshedShadow=7]="ViewshedShadow",n[n.Highlight=8]="Highlight",n[n.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",n[n.COUNT=10]="COUNT"}(n||(n={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliceDraw: function() { return /* binding */ P; },
/* harmony export */   SlicePass: function() { return /* binding */ _; },
/* harmony export */   SlicePlaneParameters: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class u extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.NoParameters{constructor(e){super(),this.slicePlaneLocalOrigin=e}}function _(e,s){m(e,s,new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("slicePlaneBasis1",((e,i)=>I(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("slicePlaneBasis2",((e,i)=>I(s,e,i,i.slicePlane?.basis2))))}function P(e,s){m(e,s,new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("slicePlaneBasis1",((e,i)=>I(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("slicePlaneBasis2",((e,i)=>I(s,e,i,i.slicePlane?.basis2))))}function m(e,s,...i){if(!s.hasSlicePlane){const i=(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}const a=(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=s.hasSliceHighlight?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i).code.add(a),e.fragment.uniforms.add(...i).code.add(a),e.fragment.code.add(o)}function p(e,s,i){return e.instancedDoublePrecision?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function h(e,s){return null!=e?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(B,s.origin,e):s.origin}function H(s,i,a){return s.hasSliceTranslatedView?null!=i?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.translate)(S,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function g(e,s,a){if(null==a.slicePlane)return _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.ZEROS;const l=p(e,s,a),o=h(l,a.slicePlane),r=H(e,l,a);return null!=r?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)(B,o,r):o}function I(e,s,o,r){if(null==r||null==o.slicePlane)return _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.ZEROS;const t=p(e,s,o),n=h(t,o.slicePlane),f=H(e,t,o);return null!=f?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(v,r,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)(B,n,f),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)(v,v,f),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(v,v,B)):r}const b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),S=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(o){(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.addCalculateLinearDepth)(o),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoubleConfiguration.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoubleConfiguration.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstancedDoubleConfiguration: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderTechnique/ShaderTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class i extends _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_1__.ShaderTechniqueConfiguration{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_1__.parameter)()],i.prototype,"instancedDoublePrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_1__.parameter)()],i.prototype,"hasModelTransformation",void 0);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstancedDoublePassParameters: function() { return /* binding */ x; },
/* harmony export */   InstancedDoublePrecision: function() { return /* binding */ M; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js");
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../webgl/doublePrecisionUtils.js */ "./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class x extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.NoParameters{constructor(){super(...arguments),this.modelTransformation=null}}const f=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function M(r,n){const m=n.hasModelTransformation,x=n.instancedDoublePrecision;m&&(r.vertex.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__.Matrix4PassUniform("model",(e=>e.modelTransformation??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.IDENTITY))),r.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_10__.Matrix3PassUniform("normalLocalOriginFromModel",(r=>((0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.normalFromMat4)(f,r.modelTransformation??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.IDENTITY),f))))),n.instanced&&x&&(r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__.VertexAttribute.INSTANCEMODELORIGINHI,"vec3"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__.VertexAttribute.INSTANCEMODELORIGINLO,"vec3"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__.VertexAttribute.INSTANCEMODEL,"mat3"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__.VertexAttribute.INSTANCEMODELNORMAL,"mat3"));const M=r.vertex;x&&(M.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__.DoublePrecision,n),M.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Float3DrawUniform("viewOriginHi",((e,r)=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_13__.encodeDoubleHi)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(O,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),O))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Float3DrawUniform("viewOriginLo",((e,r)=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_13__.encodeDoubleLo)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(O,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),O))))),M.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
    vec3 getVertexInLocalOriginSpace() {
      return ${m?x?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":x?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${x?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),M.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${m?x?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":x?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),n.output===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__.ShaderOutput.Normal&&((0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__.addViewNormal)(M),M.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${m?x?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":x?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),n.hasVertexTangents&&M.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${m?x?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":x?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalAttribute: function() { return /* binding */ t; },
/* harmony export */   NormalType: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,i){switch(i.normalType){case a.Compressed:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED,"vec2"),t.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMAL,"vec3"),t.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:t.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(i.normalType);case a.COUNT:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(a||(a={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectAndLayerIdColor: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t){if(t.output!==_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ObjectAndLayerIdColor)return e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`void outputObjectAndLayerIdColor() {}`);const a=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(a?_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR:_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${a?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionAttribute: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(o){o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__.VertexAttribute.POSITION,"vec3"),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec3 positionModel() { return position; }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SymbolColor: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js");
/* harmony import */ var _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/IntegerPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../materials/internal/MaterialUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(i,t){t.hasSymbolColors?(i.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__.DecodeSymbolColor),i.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_1__.IntegerPassUniform("colorMixMode",(o=>_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__.colorMixModes[o.colorMixMode]))),i.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextureCoordinateAttribute: function() { return /* binding */ o; },
/* harmony export */   TextureCoordinateType: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d;function o(o,v){switch(v.textureCoordinateType){case d.Default:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d.Compressed:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d.Atlas:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(v.textureCoordinateType);case d.None:return void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`void forwardTextureCoordinates() {}`);case d.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(d||(d={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexColor: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,d){d.hasVertexColors?(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__.VertexAttribute.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexNormal: function() { return /* binding */ c; },
/* harmony export */   VertexNormalDrawParameters: function() { return /* binding */ n; },
/* harmony export */   VertexNormalPassParameters: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VertexPosition.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Matrix3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(o,a){switch(a.normalType){case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.Attribute:case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.Compressed:o.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalAttribute,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Matrix3DrawUniform("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__.Matrix3PassUniform("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.ScreenDerivative:o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`void forwardNormal() {}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(a.normalType);case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.COUNT:}}class f extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexPositionPassParameters{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()}}class n extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexPositionDrawParameters{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),this.toMapSpace=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.create)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexPosition: function() { return /* binding */ v; },
/* harmony export */   VertexPositionDrawParameters: function() { return /* binding */ W; },
/* harmony export */   VertexPositionPassParameters: function() { return /* binding */ F; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PositionAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Matrix3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function v(r,o){r.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.PositionAttribute);const e=r.vertex;e.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__.DoublePrecision,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix3PassUniform("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__.Matrix4PassUniform("transformProjFromView",(r=>r.transformProjFromView)),new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix3DrawUniform("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3DrawUniform("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3DrawUniform("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float3PassUniform("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class F extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.NoParameters{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.transformWorldFromViewTL=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.transformViewFromCameraRelativeRS=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.transformProjFromView=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()}}class W extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.NoParameters{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.transformWorldFromModelTH=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.transformWorldFromModelTL=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexTextureCoordinates: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/TextureAtlasLookup.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u(u,n){const{textureCoordinateType:s}=n;if(s===_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__.TextureCoordinateType.None||s===_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__.TextureCoordinateType.COUNT)return;u.include(_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__.TextureCoordinateAttribute,n);const i=s===_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__.TextureCoordinateType.Atlas;i&&u.include(_util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureAtlasLookup),u.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerticalOffset: function() { return /* binding */ a; },
/* harmony export */   addVerticalOffset: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/ScreenSizePerspective.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js");
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(e,r){const c=e.vertex;r.hasVerticalOffset?(f(c),r.hasScreenSizePerspective&&(e.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__.ScreenSizePerspective),(0,_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__.addScreenSizePerspectiveAlignment)(c),(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addCameraPosition)(e.vertex,r)),c.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`vec3 worldNormal = normalize(worldPos + localOrigin);`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const s=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function f(r){r.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float4PassUniform("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,i=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_0__.s)(s,c*a,i,l,o)})))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMaterialAuxiliaryPasses: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ForwardLinearDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js");
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Slice.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js");
/* harmony import */ var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Transform.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js");
/* harmony import */ var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../attributes/ObjectAndLayerIdColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../output/OutputDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js");
/* harmony import */ var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../output/OutputHighlight.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js");
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shading/VisualVariables.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js");
/* harmony import */ var _util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/DiscardOrAdjustAlpha.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js");
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/View.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function h(h,O){const{vertex:j,fragment:w}=h,b=O.hasColorTexture&&O.alphaDiscardMode!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_15__.AlphaDiscardMode.Opaque,{output:C,normalType:V,hasColorTextureTransform:A}=O;switch(C){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.Depth:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__.addProjViewLocalOrigin)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__.Transform,O),h.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__.SliceDraw,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.TextureCoordinateAttribute,O),b&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__.Texture2DPassUniform("tex",(e=>e.texture))),j.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__.DiscardOrAdjustAlphaPass,O),w.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`
          discardBySlice(vpos);
          ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.If)(b,(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.ViewshedShadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.ObjectAndLayerIdColor:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__.addProjViewLocalOrigin)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__.Transform,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.TextureCoordinateAttribute,O),h.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VisualVariables,O),h.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_8__.OutputDepth,O),h.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__.SliceDraw,O),h.include(_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_5__.ObjectAndLayerIdColor,O),(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.addNearFar)(h),h.varyings.add("depth","float"),b&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__.Texture2DPassUniform("tex",(e=>e.texture))),j.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__.DiscardOrAdjustAlphaPass,O),w.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`
          discardBySlice(vpos);
          ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.If)(b,(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${C===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.ObjectAndLayerIdColor?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`outputObjectAndLayerIdColor();`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`outputDepth(depth);`}`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.Normal:{(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__.addProjViewLocalOrigin)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__.Transform,O),h.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalAttribute,O),h.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_7__.VertexNormal,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.TextureCoordinateAttribute,O),h.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VisualVariables,O),b&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__.Texture2DPassUniform("tex",(e=>e.texture))),V===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalType.ScreenDerivative&&h.varyings.add("vPositionView","vec3");const e=V===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalType.Attribute||V===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalType.Compressed;j.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`
          vpos = getVertexInLocalOriginSpace();
          ${e?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),h.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__.SliceDraw,O),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__.DiscardOrAdjustAlphaPass,O),w.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`
          discardBySlice(vpos);
          ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.If)(b,(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${V===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalType.ScreenDerivative?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vec3 normal = screenDerivativeNormal(vPositionView);`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.Highlight:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__.addProjViewLocalOrigin)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__.Transform,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__.TextureCoordinateAttribute,O),h.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__.VisualVariables,O),b&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__.Texture2DPassUniform("tex",(e=>e.texture))),j.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),h.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__.SliceDraw,O),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__.DiscardOrAdjustAlphaPass,O),h.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_9__.OutputHighlight,O),w.main.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`
          discardBySlice(vpos);
          ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.If)(b,(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_13__.glsl)`vec4 texColor = texture(tex, ${A?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmissionSource: function() { return /* binding */ d; },
/* harmony export */   Emissions: function() { return /* binding */ c; },
/* harmony export */   EmissionsParameters: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/GLTextureMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var d;!function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"}(d||(d={}));class f extends _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_8__.GLEmissiveTexturePassParameters{}function c(u,f){if(!(0,_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.isColorOrColorEmission)(f.output))return;const{emissionSource:c,hasEmissiveTextureTransform:x,bindType:l}=f,p=c===d.Texture;p&&(u.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__.VertexTextureCoordinates,f),u.fragment.uniforms.add(l===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_7__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Texture2DPassUniform("texEmission",(e=>e.textureEmissive)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DDrawUniform("texEmission",(e=>e.textureEmissive))));const v=c===d.Value||p;v&&u.fragment.uniforms.add(l===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_7__.BindType.Pass?new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Float3PassUniform("emissionFactor",(e=>e.emissiveFactor)):new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float3DrawUniform("emissionFactor",(e=>e.emissiveFactor))),u.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.glsl)`
    vec4 getEmissions() {
      vec4 emissions = ${v?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_4__.If)(p,`emissions *= textureLookup(texEmission, ${x?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputDepth: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _util_RgbaFloat16Encoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/RgbaFloat16Encoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,d){switch(d.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ViewshedShadow:e.fragment.include(_util_RgbaFloat16Encoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__.Rgba4FloatEncoding),e.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutputHighlight: function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _shaderModules_Integer2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Integer2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2PassUniform.js");
/* harmony import */ var _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/IntegerPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function g(g,d){const{fragment:c}=g;d.output===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.Highlight?(c.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DPassUniform("depthTexture",((i,e)=>e.mainDepth)),new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DPassUniform("highlightTexture",((i,e)=>e.highlightMixTexture)),new _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.IntegerPassUniform("highlightLevel",((i,e)=>e.highlightLevel)),new _shaderModules_Integer2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Integer2PassUniform("highlightMixOrigin",((i,e)=>e.highlightMixOrigin))),g.outputs.add("fragHighlight","vec2",0),c.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),d.canHaveOverlay&&(c.constants.add("occlusionAndMask","int",85),c.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):c.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void calculateOcclusionAndOutputHighlight() {}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadDepth: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(e){e.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float2PassUniform("zProjectionMap",((e,t)=>c(t.camera)))),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function c(t){const r=t.projectionMatrix;return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__.set)(d,r[14],r[10])}const d=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalyticalSkyModel: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputeNormalTexture: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js");
/* harmony import */ var _Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function T(T,u){const x=T.fragment;u.hasVertexTangents?(T.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__.VertexAttribute.TANGENT,"vec4"),T.varyings.add("vTangent","vec4"),u.doubleSidedMode===_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalsDoubleSidedMode.WindingOrder?x.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):x.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):x.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),u.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__.TextureCoordinateType.None&&(T.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_3__.VertexTextureCoordinates,u),x.uniforms.add(u.bindType===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_10__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Texture2DPassUniform("normalTexture",(e=>e.textureNormal)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Texture2DDrawUniform("normalTexture",(e=>e.textureNormal))),u.hasNormalTextureTransform&&(x.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float2PassUniform("scale",(e=>e.scale??_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.ONES))),x.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__.Matrix3PassUniform("normalTextureTransformMatrix",(t=>t.normalTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY)))),x.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),u.hasNormalTextureTransform&&x.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),x.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`return tangentSpace * rawNormal;
}`))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluateAmbientLighting: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(n,g){const r=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("lightingAmbientSH0",((n,t)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_R",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_G",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_B",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))),r.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("lightingAmbientSH0",((n,t)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_R1",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_G1",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_B1",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_R2",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_G2",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__.Float4PassUniform("lightingAmbientSH_B2",((i,n)=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))),r.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__.PBRMode.Normal&&g.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__.PBRMode.Schematic||r.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const a=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),m=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluateAmbientOcclusion: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _effects_ssao_SSAO_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../effects/ssao/SSAO.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,o){const a=t.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Texture2DPassUniform("ssaoTex",((e,s)=>s.ssao?.getTexture()))),a.constants.add("blurSizePixelsInverse","float",1/_effects_ssao_SSAO_js__WEBPACK_IMPORTED_MODULE_2__.blurSizePixels),a.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluateSceneLighting: function() { return /* binding */ p; },
/* harmony export */   addAmbientBoostFactor: function() { return /* binding */ h; },
/* harmony export */   addLightingGlobalFactor: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvaluateAmbientLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js");
/* harmony import */ var _EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EvaluateAmbientOcclusion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js");
/* harmony import */ var _MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainLighting.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js");
/* harmony import */ var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PhysicallyBasedRendering.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js");
/* harmony import */ var _shaderModules_BooleanPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/BooleanPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js");
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lighting_SceneLighting_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lighting/SceneLighting.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function h(i){i.constants.add("ambientBoostFactor","float",_lighting_SceneLighting_js__WEBPACK_IMPORTED_MODULE_10__.ambientBoost)}function u(i){i.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.FloatPassUniform("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)))}function p(g,p){const v=g.fragment;switch(g.include(_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_2__.EvaluateAmbientOcclusion,p),p.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled&&g.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__.PhysicallyBasedRendering,p),g.include(_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_1__.EvaluateAmbientLighting,p),g.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_6__.PiUtils),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h(v),u(v),(0,_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addMainLightDirection)(v),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`normalize(vPosWorld)`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addMainLightIntensity)(v),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.WaterOnIntegratedMesh:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Water:g.include(_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.applyShading),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Normal:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Schematic:v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new _shaderModules_BooleanPassUniform_js__WEBPACK_IMPORTED_MODULE_7__.BooleanPassUniform("hasFillLights",((i,n)=>n.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.FloatPassUniform("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.FloatPassUniform("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Schematic||p.hasColorTexture?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Simplified:case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.TerrainWithWater:(0,_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addMainLightDirection)(v),(0,_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_3__.addMainLightIntensity)(v),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_9__.glsl)`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(p.pbrMode);case _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.COUNT:}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMainLightDirection: function() { return /* binding */ t; },
/* harmony export */   addMainLightIntensity: function() { return /* binding */ a; },
/* harmony export */   applyShading: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n){n.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)))}function a(n){n.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)))}function o(i){t(i.fragment),a(i.fragment),i.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Normals: function() { return /* binding */ e; },
/* harmony export */   NormalsDoubleSidedMode: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,o){const n=e.fragment;switch(n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i.None:n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(o.doubleSidedMode);case i.COUNT:}}var i;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"}(i||(i={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PhysicallyBasedRendering: function() { return /* binding */ n; },
/* harmony export */   PhysicallyBasedRenderingWater: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalyticalSkyModel.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js");
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n,r){const l=n.fragment.code;n.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__.PiUtils),r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Normal&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Schematic&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Simplified&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.TerrainWithWater||(l.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Normal&&r.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_1__.PBRMode.Schematic||(n.include(_AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_0__.AnalyticalSkyModel),l.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function r(e,o){const n=e.fragment.code;e.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_2__.PiUtils),n.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),n.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),n.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),n.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),n.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PBRMode: function() { return /* binding */ n; },
/* harmony export */   PBRRenderingParameters: function() { return /* binding */ d; },
/* harmony export */   PhysicallyBasedRenderingParameters: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../lib/GLTextureMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js");
/* harmony import */ var _materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../materials/pbrUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(n||(n={}));class d extends _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_7__.GLTextureMaterialBindParameters{constructor(){super(...arguments),this.mrrFactors=_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_8__.schematicMRRFactors}}function m(l,u){const d=u.pbrMode,m=l.fragment;if(d!==n.Schematic&&d!==n.Disabled&&d!==n.Normal)return void m.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void applyPBRFactors() {}`);if(d===n.Disabled)return void m.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(d===n.Schematic)return void m.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:p,hasMetallicRoughnessTextureTransform:h,hasOcclusionTexture:f,hasOcclusionTextureTransform:v,bindType:x}=u;(p||f)&&l.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__.VertexTextureCoordinates,u),m.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 mrr;
float occlusion;`),p&&m.uniforms.add(x===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DPassUniform("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DDrawUniform("texMetallicRoughness",(e=>e.textureMetallicRoughness))),f&&m.uniforms.add(x===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Texture2DPassUniform("texOcclusion",(e=>e.textureOcclusion)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Texture2DDrawUniform("texOcclusion",(e=>e.textureOcclusion))),m.uniforms.add(x===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__.BindType.Pass?new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float3PassUniform("mrrFactors",(e=>e.mrrFactors)):new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float3DrawUniform("mrrFactors",(e=>e.mrrFactors))),m.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
    ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.If)(p,(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.If)(f,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${f?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.If)(p,`applyMetallicRoughness(${h?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.If)(f,`applyOcclusion(${v?"occlusionUV":"vuv0"});`)}
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PiUtils: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){const a=3.141592653589793,n=.3183098861837907;t.vertex.constants.add("PI","float",a),t.fragment.constants.add("PI","float",a),t.fragment.constants.add("LIGHT_NORMALIZATION","float",n),t.fragment.constants.add("INV_PI","float",n),t.fragment.constants.add("HALF_PI","float",1.570796326794897),t.fragment.constants.add("TWO_PI","float",6.28318530717958)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadShadowMapDraw: function() { return /* binding */ x; },
/* harmony export */   ReadShadowMapDrawParameters: function() { return /* binding */ l; },
/* harmony export */   ReadShadowMapParameters: function() { return /* binding */ v; },
/* harmony export */   ReadShadowMapPass: function() { return /* binding */ m; },
/* harmony export */   ReadShadowMapPassParameters: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _util_RgbaFloat16Encoding_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/RgbaFloat16Encoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/IntegerPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix4sDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/Matrix4sDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js");
/* harmony import */ var _shaderModules_Matrix4sPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/Matrix4sPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.NoParameters{constructor(){super(...arguments),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()}}class l extends n{}class v extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.NoParameters{constructor(){super(...arguments),this.modelTransformation=_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY}}class h extends v{constructor(){super(...arguments),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()}}function m(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new _shaderModules_Matrix4sPassUniform_js__WEBPACK_IMPORTED_MODULE_7__.Matrix4sPassUniform("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function x(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new _shaderModules_Matrix4sDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.Matrix4sDrawUniform("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e))}function f(e){const s=e.fragment;s.include(_util_RgbaFloat16Encoding_glsl_js__WEBPACK_IMPORTED_MODULE_2__.Rgba4FloatEncoding),s.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_8__.Texture2DPassUniform("shadowMap",((e,s)=>s.shadowMap.depthTexture)),new _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_4__.IntegerPassUniform("numCascades",((e,s)=>s.shadowMap.numCascades)),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Float4PassUniform("cascadeDistances",((e,s)=>s.shadowMap.cascadeDistances))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceConstants.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceConstants.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distanceFadeEnd: function() { return /* binding */ o; },
/* harmony export */   distanceFadeStart: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=3e5,o=5e5;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TerrainDepthTest.glsl.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   terrainDepthTest: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../output/ReadDepth.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Texture2DPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(a,{occlusionPass:n,terrainDepthTest:i,cullAboveTerrain:o}){i?(a.fragment.include(_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__.ReadDepth),a.fragment.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Texture2DPassUniform("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`
   ${n?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${n?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`return fragmentDepth < linearDepth && depth < 1.0;`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`if(fragmentDepth ${o?">":"<="} linearDepth) discard;`}
    }`)):n?a.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`#define terrainDepthTest(fragmentDepth) false`):a.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.glsl)`#define terrainDepthTest(fragmentDepth) {}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/TextureTransformUV.glsl.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorTextureUV: function() { return /* binding */ s; },
/* harmony export */   emissiveTextureUV: function() { return /* binding */ t; },
/* harmony export */   metallicRoughnessTextureUV: function() { return /* binding */ n; },
/* harmony export */   normalTextureUV: function() { return /* binding */ i; },
/* harmony export */   occlusionTextureUV: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(e,s){s.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Matrix3PassUniform("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardColorUV(){}`)}function i(s,i){i.hasNormalTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateType.None?(s.varyings.add("normalUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Matrix3PassUniform("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardNormalUV(){}`)}function t(s,i){i.hasEmissionTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateType.None?(s.varyings.add("emissiveUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Matrix3PassUniform("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardEmissiveUV(){}`)}function d(s,i){i.hasOcclusionTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateType.None?(s.varyings.add("occlusionUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Matrix3PassUniform("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardOcclusionUV(){}`)}function n(s,i){i.hasMetallicRoughnessTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.TextureCoordinateType.None?(s.varyings.add("metallicRoughnessUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__.Matrix3PassUniform("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY))).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`void forwardMetallicRoughnessUV(){}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualVariables: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/Float4sPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js");
/* harmony import */ var _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/FloatsPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../materials/VisualVariablePassParameters.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l(l,n){const{vertex:s,attributes:u}=l;n.hasVvInstancing&&(n.vvSize||n.vvColor)&&u.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"vec4"),n.vvSize?(s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeMinSize",(e=>e.vvSize.minSize))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeMaxSize",(e=>e.vvSize.maxSize))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeOffset",(e=>e.vvSize.offset))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSizeFactor",(e=>e.vvSize.factor))),s.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Matrix3PassUniform("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__.Float3PassUniform("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(s.constants.add("vvColorNumber","int",_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__.vvColorNumber),s.uniforms.add(new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.FloatsPassUniform("vvColorValues",(e=>e.vvColor.values),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__.vvColorNumber),new _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_1__.Float4sPassUniform("vvColorColors",(e=>e.vvColor.colors),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_6__.vvColorNumber)),s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec4 vvColor() { return vec4(1.0); }`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphaCutoff: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=1/255.5;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraSpace: function() { return /* binding */ f; },
/* harmony export */   getProjectionInfo: function() { return /* binding */ c; },
/* harmony export */   getZScale: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Float2PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js");
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(r){r.fragment.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float4PassUniform("projInfo",((r,o)=>c(o.camera)))),r.fragment.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float2PassUniform("zScale",((r,o)=>m(o.camera)))),r.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__.glsl)`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function c(r){const o=r.projectionMatrix;return 0===o[11]?(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(n,2/(r.fullWidth*o[0]),2/(r.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(n,-2/(r.fullWidth*o[0]),-2/(r.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const n=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.create)();function m(o){return 0===o.projectionMatrix[11]?(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__.set)(l,0,1):(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__.set)(l,1,0)}const l=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorConversion: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscardOrAdjustAlphaDraw: function() { return /* binding */ s; },
/* harmony export */   DiscardOrAdjustAlphaPass: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/FloatDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js");
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(o,a){f(o,a,new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__.FloatPassUniform("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function s(o,r){f(o,r,new _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_1__.FloatDrawUniform("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function f(a,r,t){const s=a.fragment;switch(r.alphaDiscardMode){case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Blend:a.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`
        #define discardOrAdjustAlpha(color) { if (color.a < ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl.float(_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_0__.alphaCutoff)}) { discard; } }
      `);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Opaque:s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.Mask:s.uniforms.add(t).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_4__.AlphaDiscardMode.MaskBlend:s.uniforms.add(t).code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DoublePrecision: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c({code:c},i){i.doublePrecisionRequiresObfuscation?c.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):c.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MixExternalColor: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/symbolColorUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js");
/* harmony import */ var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorConversion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(i){i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__.ColorConversion),i.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl)`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Multiply)}) {
        return allMixed;
      }
      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.glsl.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__.ColorMixModeEnum.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rgba4FloatEncoding: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(a){a.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScreenSizePerspective: function() { return /* binding */ s; },
/* harmony export */   addScreenSizePerspective: function() { return /* binding */ t; },
/* harmony export */   addScreenSizePerspectiveAlignment: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(e){e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__.glsl)`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function t(e){e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float3PassUniform("screenSizePerspective",(e=>i(e.screenSizePerspective))))}function o(e){e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__.Float3PassUniform("screenSizePerspectiveAlignment",(e=>i(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function i(a){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(n,a.parameters.divisor,a.parameters.offset,a.minScaleFactor)}const n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextureAtlasLookup: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){e.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCameraPosition: function() { return /* binding */ f; },
/* harmony export */   addPixelRatio: function() { return /* binding */ w; },
/* harmony export */   addProjViewLocalOrigin: function() { return /* binding */ d; },
/* harmony export */   addViewNormal: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _shaderModules_Matrix4DrawUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shaderModules/Matrix4DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js");
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.ZEROS):r.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("cameraPosition",((r,e)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))))}function d(e,a){if(!a.instancedDoublePrecision)return void e.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix4PassUniform("proj",((r,e)=>e.camera.projectionMatrix)),new _shaderModules_Matrix4DrawUniform_js__WEBPACK_IMPORTED_MODULE_7__.Matrix4DrawUniform("view",((e,i)=>(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.translate)(l,i.camera.viewMatrix,e.origin))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("localOrigin",(r=>r.origin)));const o=r=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix4PassUniform("proj",((r,e)=>e.camera.projectionMatrix)),new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix4PassUniform("view",((e,i)=>(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.translate)(l,i.camera.viewMatrix,o(i)))),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("localOrigin",((r,e)=>o(e))))}const l=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)();function p(r){r.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix4PassUniform("viewNormal",((r,e)=>e.camera.viewInverseTransposeMatrix)))}function w(r){r.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("pixelRatio",((r,e)=>e.camera.pixelRatio/e.overlayStretch)))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanPassUniform: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(o,s){super(o,"bool",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2DrawUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float2DrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"vec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float2PassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"vec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float3DrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"vec3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float3PassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"vec3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float4PassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"vec4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float4sPassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e,o){super(r,"vec4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatDrawUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((o,s,t)=>o.setUniform1f(r,e(s,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatPassUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FloatsPassUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o,e){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2PassUniform.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2PassUniform.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Integer2PassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"ivec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,i)=>s.setUniform2iv(r,e(o,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntegerPassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"int",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix3DrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"mat3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix3PassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"mat3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4DrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4PassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4sDrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o,s){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t,i)=>e.setUniformMatrix4fv(r,o(s,t,i))),s)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix4sPassUniform: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,e,o){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Code: function() { return /* binding */ c; },
/* harmony export */   Includes: function() { return /* binding */ i; },
/* harmony export */   Main: function() { return /* binding */ u; },
/* harmony export */   ShaderBuilder: function() { return /* binding */ o; },
/* harmony export */   Stage: function() { return /* binding */ h; },
/* harmony export */   Uniforms: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class i{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class o extends i{constructor(){super(...arguments),this.vertex=new h,this.fragment=new h,this.attributes=new m,this.varyings=new _,this.extensions=new d,this.outputs=new l}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a=s.main.generateSource(),u="vertex"===e?S:f,c=s.constants.generateSource(),h=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${u}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${h.join("\n")}\n\n${o.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__.BindType.Pass];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__.BindType.Pass];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return(t,r)=>{for(let i=0;i<s;++i)n[i](e,t,r)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__.BindType.Draw];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__.BindType.Draw];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return(t,r,i)=>{for(let o=0;o<s;++o)n[o](e,i,t,r)}}}class a{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else s().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Shader does not contain main function body.")}}class c{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class h extends i{constructor(){super(...arguments),this.uniforms=new a(this),this.main=new u(this),this.code=new c(this),this.constants=new g(this)}get builder(){return this}}class m{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class _{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__.assert)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}}class d{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}d.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d.ALLOWLIST_VERTEX=[];class l{constructor(){this._entries=new Map}add(e,t,r=0){const s=this._entries.get(r);s?(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__.assert)(s.name===e&&s.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:l.DEFAULT_NAME,type:l.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}l.DEFAULT_TYPE="vec4",l.DEFAULT_NAME="fragColor";class g{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=g._numberToFloatStr(r);break;case"int":n=g._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${g._numberToFloatStr(r[0])},                            ${g._numberToFloatStr(r[1])},                            ${g._numberToFloatStr(r[2])},                            ${g._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${g._numberToIntStr(r[0])},                             ${g._numberToIntStr(r[1])},                             ${g._numberToIntStr(r[2])},                             ${g._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>g._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${n};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const f="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",S="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Texture2DDrawUniform: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,s){super(r,"sampler2D",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,o,t)=>e.bindTexture(r,s(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Texture2DPassUniform: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,s){super(r,"sampler2D",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uniform: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a{constructor(a,i,e,r,t=null){if(this.name=a,this.type=i,this.arraySize=t,this.bind={[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Pass]:null,[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Draw]:null},r)switch(e){case _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Pass:this.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Pass]=r;break;case _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Draw:this.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__.BindType.Draw]=r}}equals(s){return this.type===s.type&&this.name===s.name&&this.arraySize===s.arraySize}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   If: function() { return /* binding */ r; },
/* harmony export */   NoParameters: function() { return /* binding */ t; },
/* harmony export */   glsl: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n{}const t=n;function o(n,...t){let o="";for(let r=0;r<t.length;r++)o+=n[r]+t[r];return o+=n[n.length-1],o}function r(n,t,o=""){return n?t:o}!function(n){function t(n){return Math.round(n).toString()}function o(n){return n.toPrecision(8)}n.int=t,n.float=o}(o||(o={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindType: function() { return /* binding */ a; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var a;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw"}(a||(a={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReloadableShaderModule: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._load=o}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShaderTechnique: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _lib_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Program.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n{constructor(o,s,a,n,l=_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__.Default3D){this.release=n,this.locations=l,this.primitiveType=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__.PrimitiveType.TRIANGLES,this.key=s.key,this._program=new _lib_Program_js__WEBPACK_IMPORTED_MODULE_2__.Program(o.rctx,a.get().build(s),l),this._pipeline=this.initializePipeline(s),this.reload=async e=>{if(e&&await a.reload(),!this.key.equals(s.key))throw new Error("Configuration was changed after construction, cannot reload shader");(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._program),this._program=new _lib_Program_js__WEBPACK_IMPORTED_MODULE_2__.Program(o.rctx,a.get().build(s),l),this._pipeline=this.initializePipeline(s)}}destroy(){this._program=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.disposeMaybe)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}getPipeline(i,e){return this._pipeline}initializePipeline(i){return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_4__.makePipelineState)({blending:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_4__.blendWithPremultipliedAlpha,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_4__.defaultColorWrite})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShaderTechniqueConfiguration: function() { return /* binding */ a; },
/* harmony export */   parameter: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _ShaderTechniqueConfigurationKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShaderTechniqueConfigurationKey.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfigurationKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new _ShaderTechniqueConfigurationKey_js__WEBPACK_IMPORTED_MODULE_2__.ShaderTechniqueConfigurationKey(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}}function i(t={}){return(r,a)=>{r.hasOwnProperty("_parameterNames")||Object.defineProperty(r,"_parameterNames",{value:r._parameterNames?.slice()??[],configurable:!0,writable:!0}),r.hasOwnProperty("_parameterBits")||Object.defineProperty(r,"_parameterBits",{value:r._parameterBits?.slice()??[0],configurable:!0,writable:!0}),r._parameterNames.push(a);const i=t.count||2,s=Math.ceil(Math.log2(i)),o=r._parameterBits;let n=0;for(;o[n]+s>16;)n++,n>=o.length&&o.push(0);const p=o[n],m=(1<<s)-1<<p;o[n]+=s,t.count?Object.defineProperty(r,a,{get(){return(this._parameterBits[n]&m)>>p},set(r){if(this[a]!==r){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~m|+r<<p&m,"number"!=typeof r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Configuration value for ${a} must be a number, got ${typeof r}`);if(null==t.count)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Configuration value for ${a} must provide a count option`)}}}):Object.defineProperty(r,a,{get(){return!!((this._parameterBits[n]&m)>>p)},set(t){if(this[a]!==t&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~m|+t<<p&m,"boolean"!=typeof t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Configuration value for ${a} must be boolean, got ${typeof t}`)}})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfigurationKey.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfigurationKey.js ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShaderTechniqueConfigurationKey: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(t){this._bits=[...t]}equals(s){return (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.equals)(this._bits,s.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   olidEnabled: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(){return!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("enable-feature:objectAndLayerId-rendering")}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSAO: function() { return /* binding */ O; },
/* harmony export */   blurSizePixels: function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/time.js */ "./node_modules/@arcgis/core/core/time.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/math/vec2.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../webgl.js */ "./node_modules/@arcgis/core/views/3d/webgl.js");
/* harmony import */ var _webgl_formats_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../webgl/formats.js */ "./node_modules/@arcgis/core/views/3d/webgl/formats.js");
/* harmony import */ var _webgl_RenderNode_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../webgl/RenderNode.js */ "./node_modules/@arcgis/core/views/3d/webgl/RenderNode.js");
/* harmony import */ var _core_shaderLibrary_shading_ScreenSpaceConstants_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/shaderLibrary/shading/ScreenSpaceConstants.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceConstants.js");
/* harmony import */ var _SSAOBlurTechnique_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SSAOBlurTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js");
/* harmony import */ var _SSAONoiseData_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SSAONoiseData.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js");
/* harmony import */ var _SSAOParameters_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SSAOParameters.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js");
/* harmony import */ var _SSAOTechnique_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SSAOTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../chunks/SSAO.glsl.js */ "./node_modules/@arcgis/core/chunks/SSAO.glsl.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../webgl/TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const A=2;let O=class extends _webgl_RenderNode_js__WEBPACK_IMPORTED_MODULE_13__["default"]{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=_webgl_js__WEBPACK_IMPORTED_MODULE_11__.InternalRenderCategory.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_4__.Milliseconds)(0),this._passParameters=new _SSAOParameters_js__WEBPACK_IMPORTED_MODULE_17__.SSAOPassParameters,this._drawParameters=new _SSAOParameters_js__WEBPACK_IMPORTED_MODULE_17__.BlurDrawParameters}initialize(){const e=Uint8Array.from(atob(_SSAONoiseData_js__WEBPACK_IMPORTED_MODULE_16__.noiseData),(e=>e.charCodeAt(0))),r=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_23__.TextureDescriptor;r.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_21__.TextureWrapMode.CLAMP_TO_EDGE,r.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_21__.PixelFormat.RGB,r.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_21__.TextureWrapMode.REPEAT,r.hasMipmap=!0,r.width=32,r.height=32,this._passParameters.noiseTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_22__.Texture(this.renderingContext,r,e),this.techniques.precompile(_SSAOTechnique_js__WEBPACK_IMPORTED_MODULE_18__.SSAOTechnique),this.techniques.precompile(_SSAOBlurTechnique_js__WEBPACK_IMPORTED_MODULE_15__.SSAOBlurTechnique),this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.watch)((()=>this.isEnabled()),(()=>this._enableTime=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_4__.Milliseconds)(0))))}destroy(){this._passParameters.noiseTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.disposeMaybe)(this._passParameters.noiseTexture)}render(e){const s=this.bindParameters,t=e.find((({name:e})=>"normals"===e)),o=t?.getTexture(),a=t?.getTexture(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_21__.DepthStencilAttachment),p=this.fboCache,d=s.camera,f=d.fullViewport[2],b=d.fullViewport[3],_=Math.round(f/A),P=Math.round(b/A),x=this.techniques.acquire(_SSAOTechnique_js__WEBPACK_IMPORTED_MODULE_18__.SSAOTechnique),q=this.techniques.acquire(_SSAOBlurTechnique_js__WEBPACK_IMPORTED_MODULE_15__.SSAOBlurTechnique);if(!x.compiled||!q.compiled)return this._enableTime=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_4__.Milliseconds)(performance.now()),this.requestRender(_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_19__.RenderRequestType.UPDATE),x.release(),q.release(),p.acquire(_,P,_webgl_js__WEBPACK_IMPORTED_MODULE_11__.InternalRenderCategory.SSAO,_webgl_formats_js__WEBPACK_IMPORTED_MODULE_12__.ColorFormat.RED);0===this._enableTime&&(this._enableTime=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_4__.Milliseconds)(performance.now()));const O=this.renderingContext,E=this.view.qualitySettings.fadeDuration,v=d.relativeElevation,R=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)((_core_shaderLibrary_shading_ScreenSpaceConstants_js__WEBPACK_IMPORTED_MODULE_14__.distanceFadeEnd-v)/(_core_shaderLibrary_shading_ScreenSpaceConstants_js__WEBPACK_IMPORTED_MODULE_14__.distanceFadeEnd-_core_shaderLibrary_shading_ScreenSpaceConstants_js__WEBPACK_IMPORTED_MODULE_14__.distanceFadeStart),0,1),C=E>0?Math.min(E,performance.now()-this._enableTime)/E:1,D=C*R;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*y/(0,_chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_20__.g)(d)**6*D;const V=p.acquire(f,b,"ssao input",_webgl_formats_js__WEBPACK_IMPORTED_MODULE_12__.ColorFormat.RG);O.bindFramebuffer(V.fbo),O.setViewport(0,0,f,b),O.bindTechnique(x,s,this._passParameters,this._drawParameters),O.screen.draw(),x.release();const M=p.acquire(_,P,"ssao blur",_webgl_formats_js__WEBPACK_IMPORTED_MODULE_12__.ColorFormat.RED);O.bindFramebuffer(M.fbo),this._drawParameters.colorTexture=V.getTexture(),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_10__.set)(this._drawParameters.blurSize,0,A/b),O.bindTechnique(q,s,this._passParameters,this._drawParameters),O.setViewport(0,0,_,P),O.screen.draw(),V.release();const L=p.acquire(_,P,_webgl_js__WEBPACK_IMPORTED_MODULE_11__.InternalRenderCategory.SSAO,_webgl_formats_js__WEBPACK_IMPORTED_MODULE_12__.ColorFormat.RED);return O.bindFramebuffer(L.fbo),O.setViewport(0,0,f,b),O.setClearColor(1,1,1,0),O.clear(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_21__.FramebufferBit.COLOR),this._drawParameters.colorTexture=M.getTexture(),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_10__.set)(this._drawParameters.blurSize,A/f,0),O.bindTechnique(q,s,this._passParameters,this._drawParameters),O.setViewport(0,0,_,P),O.screen.draw(),q.release(),O.setViewport4fv(d.fullViewport),M.release(),C<1&&this.requestRender(_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_19__.RenderRequestType.UPDATE),L}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],O.prototype,"consumes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],O.prototype,"produces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],O.prototype,"techniques",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],O.prototype,"isEnabled",void 0),O=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],O);const y=.5;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSAOBlurTechnique: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shaderTechnique/ShaderTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js");
/* harmony import */ var _chunks_SSAOBlur_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/SSAOBlur.glsl.js */ "./node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class l extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__.ShaderTechnique{constructor(r,s,i){super(r,s,new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__.ReloadableShaderModule(_chunks_SSAOBlur_glsl_js__WEBPACK_IMPORTED_MODULE_2__.S,(()=>__webpack_require__.e(/*! import() | shaders-SSAOBlur.glsl */ "shaders-SSAOBlur.glsl").then(__webpack_require__.bind(__webpack_require__, /*! ../../shaders/SSAOBlur.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAOBlur.glsl.js")))),i)}initializePipeline(){return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.makePipelineState)({colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.defaultColorWrite})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noiseData: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlurDrawParameters: function() { return /* binding */ o; },
/* harmony export */   BlurPassParameters: function() { return /* binding */ r; },
/* harmony export */   SSAODrawParameters: function() { return /* binding */ c; },
/* harmony export */   SSAOPassParameters: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{constructor(){super(...arguments),this.projScale=1}}class t extends r{constructor(){super(...arguments),this.intensity=1}}class c extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{}class o extends c{constructor(){super(...arguments),this.blurSize=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__.create)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SSAOTechnique: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shaderTechnique/ShaderTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js");
/* harmony import */ var _chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/SSAO.glsl.js */ "./node_modules/@arcgis/core/chunks/SSAO.glsl.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_1__.ShaderTechnique{constructor(r,s,i){super(r,s,new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__.ReloadableShaderModule(_chunks_SSAO_glsl_js__WEBPACK_IMPORTED_MODULE_2__.S,(()=>__webpack_require__.e(/*! import() | shaders-SSAO.glsl */ "shaders-SSAO.glsl").then(__webpack_require__.bind(__webpack_require__, /*! ../../shaders/SSAO.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/SSAO.glsl.js")))),i)}initializePipeline(){return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.makePipelineState)({colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.defaultColorWrite})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attribute: function() { return /* binding */ t; },
/* harmony export */   Vertices: function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=t){this.data=s,this.size=t,this.stride=i}}class t extends s{constructor(s,t,i,e=!1,c=i){super(s,i,c),this.indices=t,this.exclusive=e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneAttributeData: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(o){if(o.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize)return Array.from(o);if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isUint16Array)(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTextureBasis: function() { return /* binding */ h; },
/* harmony export */   createTextureKTX2: function() { return /* binding */ _; },
/* harmony export */   estimateMemoryBasis: function() { return /* binding */ u; },
/* harmony export */   estimateMemoryKTX2: function() { return /* binding */ c; },
/* harmony export */   loadBasis: function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libs/basisu/BasisU.js */ "./node_modules/@arcgis/core/libs/basisu/BasisU.js");
/* harmony import */ var _libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../libs/basisu/TextureFormat.js */ "./node_modules/@arcgis/core/libs/basisu/TextureFormat.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=null,o=null;async function g(){return null==o&&(o=(0,_libs_basisu_BasisU_js__WEBPACK_IMPORTED_MODULE_0__.getBasisTranscoder)(),l=await o),o}function u(e,t){if(null==l)return e.byteLength;const n=new l.BasisFile(new Uint8Array(e)),s=E(n)?m(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c(e,t){if(null==l)return e.byteLength;const n=new l.KTX2File(new Uint8Array(e)),s=T(n)?m(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m(e,t,s,r,i){const l=(0,_webgl_Util_js__WEBPACK_IMPORTED_MODULE_4__.getBytesPerElementFormat)(t?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function E(e){return e.getNumImages()>=1&&!e.isUASTC()}function T(e){return e.getFaces()>=1&&e.isETC1S()}async function h(e,t,n){null==l&&(l=await g());const s=new l.BasisFile(new Uint8Array(n));if(!E(s))return null;s.startTranscoding();const r=p(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _(e,t,n){null==l&&(l=await g());const s=new l.KTX2File(new Uint8Array(n));if(!T(s))return null;s.startTranscoding();const r=p(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p(e,a,l,o,g,u,c,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[h,_]=E?o?[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.ETC2_RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.ETC1_RGB,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB8_ETC2]:T?o?[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.BC3_RGBA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.BC1_RGB,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_libs_basisu_TextureFormat_js__WEBPACK_IMPORTED_MODULE_1__.TextureFormat.RGBA32,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.LINEAR,a.width=g,a.height=u,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__.Texture(e,a,{type:"compressed",levels:A})}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoundingInfo: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o{constructor(i,e,o){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(i.length>=1),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(3===o.size||4===o.size);const{data:c,size:l,indices:m}=o;(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(m.length%this._numIndexPerPrimitive==0),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.assert)(m.length>=i.length*this._numIndexPerPrimitive);const d=i.length;let u=l*m[this._numIndexPerPrimitive*i[0]];a.clear(),a.push(u);const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(c[u],c[u+1],c[u+2]),x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.clone)(f);for(let t=0;t<d;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*m[e+i],a.push(u);let t=c[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=c[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=c[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2])}}this.bbMin=f,this.bbMax=x;const P=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a.length;++t){u=a.at(t);const i=c[u]-P[0],e=c[u+1]-P[1],s=c[u+2]-P[2],r=i*i+e*e+s*s;if(r<=v)continue;const n=Math.sqrt(r),h=.5*(n-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/n;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o}this.center=P,a.clear()}getChildren(){if(this._children||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.bbMin,this.bbMax)<=1)return this._children;const i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c,indices:l}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let n=c*l[s],o=a[n],m=a[n+1],d=a[n+2];for(let i=1;i<this._numIndexPerPrimitive;++i){n=c*l[s+i];const t=a[n],e=a[n+1],r=a[n+2];t<o&&(o=t),e<m&&(m=e),r<d&&(d=r)}o<i[0]&&(e|=1),m<i[1]&&(e|=2),d<i[2]&&(e|=4),r[t]=e,++h[e]}let m=0;for(let t=0;t<8;++t)h[t]>0&&++m;if(m<2)return;const d=new Array(8);for(let t=0;t<8;++t)d[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=r[t];d[i][h[i]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==d[t]&&this._children.push(new o(d[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){a.prune()}}const a=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null});


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentObject: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "./node_modules/@arcgis/core/core/uid.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r{constructor(){this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__.generateUID)()}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentObjectType: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDDSTexture: function() { return /* binding */ E; },
/* harmony export */   createDDSTextureData: function() { return /* binding */ S; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a=542327876,i=131072,s=4;function l(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function u(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c=l("DXT1"),h=l("DXT3"),m=l("DXT5"),f=31,d=0,p=1,g=2,D=3,C=4,w=7,T=20,_=21;function E(e,r,o){const a=S(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:s,width:l,height:u}=a;return r.samplingMode=i.levels.length>1?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureSamplingMode.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=s,r.width=l,r.height=u,new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__.Texture(e,r,i)}function S(e,t){const n=new Int32Array(e.buffer,e.byteOffset,f);if(n[d]!==a)return o().error("Invalid magic number in DDS header"),null;if(!(n[T]&s))return o().error("Unsupported format, must contain a FourCC code"),null;const l=n[_];let E,S;switch(l){case c:E=8,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h:E=16,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case m:E=16,S=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return o().error("Unsupported FourCC code:",u(l)),null}let b=1,A=n[C],M=n[D];(3&A||3&M)&&(o().warn("Rounding up compressed texture size to nearest multiple of 4."),A=A+3&-4,M=M+3&-4);const x=A,R=M;let X,I;n[g]&i&&!1!==t&&(b=Math.max(1,n[w]));let v=e.byteOffset+n[p]+4;const y=[];for(let r=0;r<b;++r)I=(A+3>>2)*(M+3>>2)*E,X=new Uint8Array(e.buffer,v,I),y.push(X),v+=I,A=Math.max(1,A>>1),M=Math.max(1,M>>1);return{textureData:{type:"compressed",levels:y},internalFormat:S,width:x,height:R}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default3D: function() { return /* binding */ O; }
/* harmony export */ });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.NORMAL,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.NORMALCOMPRESSED,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.UV0,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.COLOR,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.COLORFEATUREATTRIBUTE,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.SIZE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.TANGENT,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.CENTEROFFSETANDDISTANCE,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.SYMBOLCOLOR,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.FEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEFEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCECOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.OBJECTANDLAYERIDCOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEOBJECTANDLAYERIDCOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.ROTATION,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEMODEL,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEMODELNORMAL,12],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEMODELORIGINHI,11],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.INSTANCEMODELORIGINLO,15]]);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(t){return _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.ResourceState.LOADED}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLEmissiveTexturePassParameters: function() { return /* binding */ l; },
/* harmony export */   GLTextureMaterial: function() { return /* binding */ u; },
/* harmony export */   GLTextureMaterialBindParameters: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GLMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class u extends _GLMaterial_js__WEBPACK_IMPORTED_MODULE_4__["default"]{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t))}dispose(){super.dispose(),this._texture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._texture),this._textureNormal=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureNormal),this._textureEmissive=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureEmissive),this._textureOcclusion=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureOcclusion),this._textureMetallicRoughness=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.ResourceState.LOADED:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__.ResourceState.LOADING}get textureBindParameters(){return new h(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)))}_acquire(s,i){if(null==s)return void i(null);const r=this._textures.acquire(s);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.isPromiseLike)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.releaseMaybe)(e),void i(null);i(e)})).finally((()=>--this._numLoading));i(r)}}class l extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__.NoParameters{constructor(t=null){super(),this.textureEmissive=t}}class h extends l{constructor(t=null,e=null,s=null,i=null,r=null,u,l){super(s),this.texture=t,this.textureNormal=e,this.textureOcclusion=i,this.textureMetallicRoughness=r,this.scale=u,this.normalTextureTransformMatrix=l}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geometry: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/Indices.js */ "./node_modules/@arcgis/core/geometry/support/Indices.js");
/* harmony import */ var _AttributeArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeArray.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js");
/* harmony import */ var _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoundingInfo.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContentObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geometryDataUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js");
/* harmony import */ var _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Object3DStateID.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class p extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_5__.ContentObject{constructor(t,i,e=null,n=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_6__.ContentObjectType.Mesh,r=null,h=-1){super(),this.material=t,this.mapPositions=e,this.type=n,this.objectAndLayerIdColor=r,this.edgeIndicesLength=h,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[o,u]of i)this._attributes.set(o,{...u,indices:(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__.compactIndices)(u.indices)}),o===_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__.VertexAttribute.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(o).indices.length:this.edgeIndicesLength)}instantiate(t={}){const i=new p(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,e)=>{t.exclusive=!1,i._attributes.set(e,t)})),i._boundingInfo=this._boundingInfo,i.transformation=t.transformation||this.transformation,i}get attributes(){return this._attributes}getMutableAttribute(t){let i=this._attributes.get(t);return i&&!i.exclusive&&(i={...i,exclusive:!0,data:(0,_AttributeArray_js__WEBPACK_IMPORTED_MODULE_3__.cloneAttributeData)(i.data)},this._attributes.set(t,i)),i}setAttributeData(t,i){const e=this._attributes.get(t);e&&this._attributes.set(t,{...e,exclusive:!0,data:i})}get indexCount(){const t=this._attributes.values().next().value.indices;return t?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_6__.ContentObjectType.Mesh?this._computeAttachmentOriginTriangles(t):this.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_6__.ContentObjectType.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.t)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const i=this.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__.VertexAttribute.POSITION);return (0,_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__.computeAttachmentOriginTriangles)(i,t)}_computeAttachmentOriginLines(t){const i=this.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__.VertexAttribute.POSITION);return (0,_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__.computeAttachmentOriginLines)(i,f(this.material.parameters,i),t)}_computeAttachmentOriginPoints(t){const i=this.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__.VertexAttribute.POSITION);return (0,_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_7__.computeAttachmentOriginPoints)(i,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__.VertexAttribute.POSITION);if(!t||0===t.indices.length)return null;const i=this.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_6__.ContentObjectType.Mesh?3:1;(0,_Util_js__WEBPACK_IMPORTED_MODULE_9__.assert)(t.indices.length%i==0,"Indexing error: "+t.indices.length+" not divisible by "+i);const e=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_2__.getContinuousIndexArray)(t.indices.length/i);return new _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_4__.BoundingInfo(e,i,t)}get transformation(){return this._transformation??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY}set transformation(e){this._transformation=e&&e!==_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.IDENTITY?(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.clone)(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(t){this._highlightGroupCounts.forEach(((i,e)=>t(e)))}allocateIdAndHighlight(t){const i=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__.Object3DHighlightStateID(t);return this.addHighlight(i)}addHighlight(t){this.highlights.add(t);const{highlightGroupName:i}=t,e=(this._highlightGroupCounts.get(i)??0)+1;return this._highlightGroupCounts.set(i,e),t}removeHighlight(t){if(this.highlights.delete(t)){const{highlightGroupName:i}=t,e=this._highlightGroupCounts.get(i)??0;e<=1?this._highlightGroupCounts.delete(i):this._highlightGroupCounts.set(i,e-1)}}}function f(t,i){return!(!("isClosed"in t)||!t.isClosed)&&i.indices.length>2}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: function() { return /* binding */ l; },
/* harmony export */   dotProduct: function() { return /* binding */ t; },
/* harmony export */   elementwiseProduct: function() { return /* binding */ n; },
/* harmony export */   scalarProduct: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,n){let e=0;for(let l=0;l<t.length;l++)e+=t[l]*n[l];return e}function n(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function e(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function l(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Material: function() { return /* binding */ n; },
/* harmony export */   MaterialParameters: function() { return /* binding */ d; },
/* harmony export */   RenderOccludedFlag: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_2__.ContentObject{constructor(r,t){super(),this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_3__.ContentObjectType.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_4__.Default3D,this._pp0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(0,0,1),this._pp1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(0,0,0),this._parameters=new t,(0,_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_5__.updateParameters)(this._parameters,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){(0,_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_5__.updateParameters)(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,r,t,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,r,t,this._pp0,this._pp1,i)}}var p;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(p||(p={}));class d extends _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__.NoParameters{constructor(){super(...arguments),this.renderOccluded=p.Occlude,this.isDecoration=!1}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OITPass: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var o;!function(o){o[o.NONE=0]="NONE",o[o.ColorAlpha=1]="ColorAlpha",o[o.FrontFace=2]="FrontFace",o[o.COUNT=3]="COUNT"}(o||(o={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Object3DHighlightStateID: function() { return /* binding */ r; },
/* harmony export */   Object3DOccludeeStateID: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/uid.js */ "./node_modules/@arcgis/core/core/uid.js");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class c{constructor(){this.uid=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__.generateUID)()}}class r extends c{constructor(s){super(),this.highlightGroupName=s,this.channel=_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__.Object3DState.Highlight}}class e extends c{constructor(){super(...arguments),this.channel=_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__.Object3DState.MaskOccludee}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OITPolygonOffset: function() { return /* binding */ C; },
/* harmony export */   OITPolygonOffsetLimit: function() { return /* binding */ A; },
/* harmony export */   blending: function() { return /* binding */ a; },
/* harmony export */   blendingColorAlpha: function() { return /* binding */ O; },
/* harmony export */   depthWrite: function() { return /* binding */ l; },
/* harmony export */   getDrawBuffers: function() { return /* binding */ i; },
/* harmony export */   getOITPolygonOffset: function() { return /* binding */ N; },
/* harmony export */   oitBlending: function() { return /* binding */ T; },
/* harmony export */   oitDepthTest: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _OITPass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OITPass.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.separateBlendingParams)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.BlendFactor.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.BlendFactor.ZERO,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.BlendFactor.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.BlendFactor.ONE_MINUS_SRC_ALPHA);function T(r){return r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.FrontFace?null:O}function a(r){switch(r){case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.NONE:return _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.premultipliedAlphaToPremultipliedAlpha;case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.ColorAlpha:return O;case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.FrontFace:case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.COUNT:return null}}function l(r){if(r.draped)return null;switch(r.oitPass){case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.NONE:case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.FrontFace:return r.writeDepth?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__.defaultDepthWrite:null;case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.ColorAlpha:case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.COUNT:return null}}const A=5e5,C={factor:-1,units:-2};function N(r){return r?C:null}function f(r,n=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompareFunction.LESS){return r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.NONE||r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.FrontFace?n:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.CompareFunction.LEQUAL}function i(n,t){const u=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.isColorEmission)(t);return n===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__.OITPass.ColorAlpha?u?{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT0,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT1,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT2]}:{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT0,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT1]}:u?{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT0,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__.ColorAttachment.COLOR_ATTACHMENT1]}:null}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Program: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r{constructor(r,i,s){this._context=r,this._locations=s,this._textures=new Map,this._freeTextureUnits=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null}),this._glProgram=r.programCache.acquire(i.generate("vertex"),i.generate("fragment"),s),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBindPass(this),this.bindDraw=i.generateBindDraw(this),this._fragmentUniforms=(0,_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()?i.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0)}setUniform1i(t,e){this._glProgram.setUniform1i(t,e)}setUniform1f(t,e){this._glProgram.setUniform1f(t,e)}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e)}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e)}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e)}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e)}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e)}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e)}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e)}setUniform2iv(t,e){this._glProgram.setUniform2iv(t,e)}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e)}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,e){if(null==e?.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),this._fragmentUniforms?.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)}))}_allocTextureUnit(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshIntersectionOptions: function() { return /* binding */ m; },
/* harmony export */   computeInvDir: function() { return /* binding */ B; },
/* harmony export */   computeInvDirFromDirection: function() { return /* binding */ C; },
/* harmony export */   computeNormalFromBarycentric: function() { return /* binding */ I; },
/* harmony export */   intersectAabbInvDir: function() { return /* binding */ k; },
/* harmony export */   intersectAabbInvDirBefore: function() { return /* binding */ w; },
/* harmony export */   intersectRayTriangles: function() { return /* binding */ g; },
/* harmony export */   intersectRayTrianglesWithDisplacementWatertight: function() { return /* binding */ V; },
/* harmony export */   intersectRayTrianglesWithVerticalOffsetENUGlobal: function() { return /* binding */ y; },
/* harmony export */   intersectTriangleGeometry: function() { return /* binding */ p; },
/* harmony export */   intersectTriangles: function() { return /* binding */ x; },
/* harmony export */   triangleRayParallelTolerance: function() { return /* binding */ P; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class m{constructor(t=!1,n=!0){this.isVerticalRay=t,this.normalRequired=n}}const h=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.create)();function p(n,o,i,e,s,c){if(!n.visible)return;const r=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(S,e,i),a=(t,n,o)=>{c(t,o,n,!1)},h=new m(!1,o.options.normalRequired);if(n.boundingInfo){(0,_Util_js__WEBPACK_IMPORTED_MODULE_4__.assert)(n.type===_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_3__.ContentObjectType.Mesh);const t=o.tolerance;b(n.boundingInfo,i,r,t,s,h,a)}else{const t=n.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__.VertexAttribute.POSITION),o=t.indices;V(i,r,0,o.length/3,o,t.data,t.stride,s,h,a)}}const M=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function b(t,n,o,i,e,s,c){if(null==t)return;const f=C(o,M);if((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.setMin)(h,t.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.setMax)(h,t.bbMax),null!=e&&e.applyToAabb(h),k(h,n,f,i)){const{primitiveIndices:r,position:a}=t,f=r?r.length:a.indices.length/3;if(f>N){const r=t.getChildren();if(void 0!==r){for(const t of r)b(t,n,o,i,e,s,c);return}}T(n,o,0,f,a.indices,a.data,a.stride,r,e,s,c)}}const d=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function x(n,o,i,e,s,c,r,a,f){const{data:u,stride:l}=c;V(n,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(S,o,n),i,e,s,u,l,r,a,f)}function g(t,n,o,i,e,s,c,r,a,f=null,u=0){const l=t[0],m=t[1],h=t[2],p=n[0],M=n[1],b=n[2];for(let x=o;x<i;++x){const t=u+(f?f[x]:x),n=3*t,o=c*e[n],i=s[o],g=s[o+1],y=s[o+2],T=c*e[n+1],V=s[T],j=s[T+1],q=s[T+2],v=c*e[n+2],R=V-i,O=j-g,A=q-y,B=s[v]-i,C=s[v+1]-g,k=s[v+2]-y,w=M*k-C*b,N=b*B-k*p,S=p*C-B*M,U=R*w+O*N+A*S;if(Math.abs(U)<=P)continue;const z=l-i,D=m-g,E=h-y,F=z*w+D*N+E*S;if(U>0){if(F<0||F>U)continue}else if(F>0||F<U)continue;const G=D*A-O*E,H=E*R-A*z,J=z*O-R*D,K=p*G+M*H+b*J;if(U>0){if(K<0||F+K>U)continue}else if(K>0||F+K<U)continue;const L=(B*G+C*H+k*J)/U;if(L>=0){a(L,t,r?I(R,O,A,B,C,k,d):null)}}}function y(t,n,o,i,e,s,c,r,a,f,u,l=null,m=0){const h=t[0],p=t[1],M=t[2],b=n[0],x=n[1],g=n[2];for(let y=o;y<i;++y){const t=m+(l?l[y]:y),n=3*t,o=c*e[n],i=s[o],T=s[o+1],V=s[o+2],j=c*e[n+1],q=s[j],v=s[j+1],R=s[j+2],O=c*e[n+2],A=s[O],B=s[O+1],C=s[O+2],k=V-a,w=r/Math.sqrt(i*i+T*T+k*k),N=i+i*w,S=T+T*w,U=V+k*w,z=R-a,D=r/Math.sqrt(q*q+v*v+z*z),E=q+q*D,F=v+v*D,G=R+z*D,H=C-a,J=r/Math.sqrt(A*A+B*B+H*H),K=E-N,L=F-S,Q=G-U,W=A+A*J-N,X=B+B*J-S,Y=C+H*J-U,Z=x*Y-X*g,$=g*W-Y*b,_=b*X-W*x,tt=K*Z+L*$+Q*_;if(Math.abs(tt)<=P)continue;const nt=h-N,ot=p-S,it=M-U,et=nt*Z+ot*$+it*_;if(tt>0){if(et<0||et>tt)continue}else if(et>0||et<tt)continue;const st=ot*Q-L*it,ct=it*K-Q*nt,rt=nt*L-K*ot,at=b*st+x*ct+g*rt;if(tt>0){if(at<0||et+at>tt)continue}else if(at>0||et+at<tt)continue;const ft=(W*st+X*ct+Y*rt)/tt;if(ft>=0){u(ft,t,f?I(K,L,Q,W,X,Y,d):null)}}}function T(t,n,o,i,e,s,c,r,a,f,u){const l=t[0],m=t[1],h=t[2],p=n[0],M=n[1],b=n[2],{normalRequired:x}=f;for(let g=o;g<i;++g){const t=r[g],n=3*t,o=c*e[n];let i=s[o],f=s[o+1],y=s[o+2];const T=c*e[n+1];let V=s[T],j=s[T+1],q=s[T+2];const v=c*e[n+2];let R=s[v],O=s[v+1],A=s[v+2];null!=a&&([i,f,y]=a.applyToVertex(i,f,y,g),[V,j,q]=a.applyToVertex(V,j,q,g),[R,O,A]=a.applyToVertex(R,O,A,g));const B=V-i,C=j-f,k=q-y,w=R-i,N=O-f,S=A-y,U=M*S-N*b,z=b*w-S*p,D=p*N-w*M,E=B*U+C*z+k*D;if(Math.abs(E)<=P)continue;const F=l-i,G=m-f,H=h-y,J=F*U+G*z+H*D;if(E>0){if(J<0||J>E)continue}else if(J>0||J<E)continue;const K=G*k-C*H,L=H*B-k*F,Q=F*C-B*G,W=p*K+M*L+b*Q;if(E>0){if(W<0||J+W>E)continue}else if(W>0||J+W<E)continue;const X=(w*K+N*L+S*Q)/E;if(X>=0){u(X,t,x?I(B,C,k,w,N,S,d):null)}}}function V(i,e,s,c,r,a,f,u,l,m){const h=e,p=U,M=Math.abs(h[0]),b=Math.abs(h[1]),d=Math.abs(h[2]),x=M>=b?M>=d?0:2:b>=d?1:2,g=x,y=h[g]<0?2:1,T=(x+y)%3,V=(x+(3-y))%3,I=h[T]/h[g],O=h[V]/h[g],A=1/h[g],B=j,C=q,k=v,{normalRequired:w}=l;for(let j=s;j<c;++j){const e=3*j,s=f*r[e];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(p[0],a[s+0],a[s+1],a[s+2]);const c=f*r[e+1];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(p[1],a[c+0],a[c+1],a[c+2]);const l=f*r[e+2];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(p[2],a[l+0],a[l+1],a[l+2]),u&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(p[0],u.applyToVertex(p[0][0],p[0][1],p[0][2],j)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(p[1],u.applyToVertex(p[1][0],p[1][1],p[1][2],j)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(p[2],u.applyToVertex(p[2][0],p[2][1],p[2][2],j))),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(B,p[0],i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(C,p[1],i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(k,p[2],i);const h=B[T]-I*B[g],M=B[V]-O*B[g],b=C[T]-I*C[g],d=C[V]-O*C[g],x=k[T]-I*k[g],y=k[V]-O*k[g],q=x*d-y*b,v=h*y-M*x,N=b*M-d*h;if((q<0||v<0||N<0)&&(q>0||v>0||N>0))continue;const P=q+v+N;if(0===P)continue;const S=q*(A*B[g])+v*(A*C[g])+N*(A*k[g]);if(S*Math.sign(P)<0)continue;const U=S/P;if(U>=0){m(U,j,w?R(p):null)}}}const j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),q=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function I(t,o,s,c,r,a,f){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(O,t,o,s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(A,c,r,a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.e)(f,O,A),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.n)(f,f),f}function R(n){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(O,n[1],n[0]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(A,n[2],n[0]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.e)(d,O,A),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.n)(d,d),d}const O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();function B(t,o,i){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,1/(o[0]-t[0]),1/(o[1]-t[1]),1/(o[2]-t[2]))}function C(t,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(o,1/t[0],1/t[1],1/t[2])}function k(t,n,o,i){return w(t,n,o,i,1/0)}function w(t,n,o,i,e){const s=(t[0]-i-n[0])*o[0],c=(t[3]+i-n[0])*o[0];let r=Math.min(s,c),a=Math.max(s,c);const f=(t[1]-i-n[1])*o[1],u=(t[4]+i-n[1])*o[1];if(a=Math.min(a,Math.max(f,u)),a<0)return!1;if(r=Math.max(r,Math.min(f,u)),r>a)return!1;const l=(t[2]-i-n[2])*o[2],m=(t[5]+i-n[2])*o[2];return a=Math.min(a,Math.max(l,m)),!(a<0)&&(r=Math.max(r,Math.min(l,m)),!(r>a)&&r<e)}const N=1e3,P=1e-7,S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),U=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)()];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderSlot: function() { return /* binding */ A; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var A;!function(A){A[A.INTEGRATED_MESH=0]="INTEGRATED_MESH",A[A.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",A[A.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",A[A.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",A[A.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",A[A.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",A[A.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",A[A.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",A[A.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",A[A.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",A[A.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",A[A.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",A[A.HUD_MATERIAL=12]="HUD_MATERIAL",A[A.LABEL_MATERIAL=13]="LABEL_MATERIAL",A[A.LINE_CALLOUTS=14]="LINE_CALLOUTS",A[A.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",A[A.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",A[A.DRAPED_WATER=17]="DRAPED_WATER",A[A.VOXEL=18]="VOXEL",A[A.MAX_SLOTS=19]="MAX_SLOTS"}(A||(A={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depthCompareAlways: function() { return /* binding */ s; },
/* harmony export */   depthCompareLess: function() { return /* binding */ i; },
/* harmony export */   renderWhenBitIsNotSet: function() { return /* binding */ t; },
/* harmony export */   replaceBitWhenDepthTestPasses: function() { return /* binding */ u; },
/* harmony export */   stencilBaseAllZerosParams: function() { return /* binding */ f; },
/* harmony export */   stencilToolMaskBaseParams: function() { return /* binding */ o; },
/* harmony export */   stencilToolMaskOccluderParams: function() { return /* binding */ P; },
/* harmony export */   stencilToolTransparentOccluderParams: function() { return /* binding */ m; },
/* harmony export */   stencilWriteMaskOff: function() { return /* binding */ l; },
/* harmony export */   stencilWriteMaskOn: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.LESS},s={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS},e={mask:255},l={mask:0},t=a=>({function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.NOTEQUAL,ref:a,mask:a},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP}}),u=a=>({function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS,ref:a,mask:a},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.REPLACE}}),f={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.ZERO}},o={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.REPLACE}},P={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.EQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP}},m={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.CompareFunction.NOTEQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.StencilBits.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.StencilOperation.KEEP}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Texture: function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "./node_modules/@arcgis/core/support/requestImageUtils.js");
/* harmony import */ var _support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../support/requestUtils.js */ "./node_modules/@arcgis/core/support/requestUtils.js");
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BasisUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js");
/* harmony import */ var _ContentObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContentObject.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js");
/* harmony import */ var _ContentObjectType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ContentObjectType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js");
/* harmony import */ var _DDSUtil_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DDSUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js");
/* harmony import */ var _textureUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./textureUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../webgl/TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class C extends _ContentObject_js__WEBPACK_IMPORTED_MODULE_11__.ContentObject{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_12__.ContentObjectType.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._parameters={...M,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isBlobProtocol)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isDataProtocol)(e.src)||(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.isBlobProtocol)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_18__.TextureDescriptor;return t.wrapMode=this._parameters.wrap??_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.TextureWrapMode.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.TextureSamplingMode.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||H(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_17__.Texture(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(t)&&this._parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.DDS_ENCODING?this._loadFromDDSData(e,t):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(t)&&this._parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(t)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(t))&&this._parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(t)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(t))&&this._parameters.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.BASIS_ENCODING?this._loadFromBasis(e,t):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(t)?this._loadFromPixelData(e,t):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<V.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=(0,_DDSUtil_js__WEBPACK_IMPORTED_MODULE_13__.createDDSTexture)(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.createTextureKTX2)(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.createTextureBasis)(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,_Util_js__WEBPACK_IMPORTED_MODULE_15__.assert)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.PixelFormat.LUMINANCE:3===this._parameters.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.PixelFormat.RGB:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.PixelFormat.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_17__.Texture(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const s=await (0,_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_7__.requestImage)(t,{signal:r});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),this._loadFromImage(e,s)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const s=await (0,_support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__.loadImageAsync)(t,t.src,!1,r);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),this._loadFromImage(e,s)}))}_loadFromVideoElement(e,t){return t.readyState>=V.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(t,r){return this._loadAsync((a=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",_),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.removeMaybe)(p)},h=()=>{r.readyState>=V.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(t,r)))},_=t=>{m(),l(t||new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Failed to load video"))};r.addEventListener("loadeddata",h),r.addEventListener("error",_);const p=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.onAbort)(a,(()=>_((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.createAbortError)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?(0,_textureUtils_js__WEBPACK_IMPORTED_MODULE_14__.downsampleImage)(r,t):(0,_textureUtils_js__WEBPACK_IMPORTED_MODULE_14__.ensureImageMaxSize)(r,t)}const s=R(r);this._parameters.width=s.width,this._parameters.height=s.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this._parameters.components?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.PixelFormat.RGB:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.PixelFormat.RGBA,a.width=s.width,a.height=s.height,this._glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_17__.Texture(e,a,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const s=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(s,s),r}unload(){if(this._glTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.disposeMaybe)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function H(e,t){if(null==e)return 0;if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isArrayBuffer)(e)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isUint8Array)(e))return t.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.KTX2_ENCODING?(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.estimateMemoryKTX2)(e,!!t.mipmap):t.encoding===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_9__.TextureEncodingMimeType.BASIS_ENCODING?(0,_BasisUtil_js__WEBPACK_IMPORTED_MODULE_10__.estimateMemoryBasis)(e,!!t.mipmap):e.byteLength;const{width:r,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R(e):t;return(t.mipmap?4/3:1)*r*s*(t.components||4)||0}function R(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var V;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(V||(V={}));const M={wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.TextureWrapMode.REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_16__.TextureWrapMode.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: function() { return /* binding */ s; },
/* harmony export */   isTranslationMatrix: function() { return /* binding */ m; },
/* harmony export */   logWithBase: function() { return /* binding */ u; },
/* harmony export */   project: function() { return /* binding */ a; },
/* harmony export */   rayBoxTest: function() { return /* binding */ i; },
/* harmony export */   rayRay2D: function() { return /* binding */ f; },
/* harmony export */   setMatrixTranslation3: function() { return /* binding */ l; },
/* harmony export */   verify: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,r="Assertion"){if(!t){const t=new Error(r).stack;throw new o(`${r} at ${t}`)}}function c(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function i(t,r,n,e){let o,s=(n[0]-t[0])/r[0],c=(e[0]-t[0])/r[0];s>c&&(o=s,s=c,c=o);let i=(n[1]-t[1])/r[1],f=(e[1]-t[1])/r[1];if(i>f&&(o=i,i=f,f=o),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let a=(n[2]-t[2])/r[2],u=(e[2]-t[2])/r[2];return a>u&&(o=a,a=u,u=o),!(s>u||a>c)&&(u<c&&(c=u),!(c<0))}function f(r,n,e,o,s,c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__.create)()){const i=(o[s]-e[s])*(n[0]-r[0])-(o[0]-e[0])*(n[s]-r[s]),f=(o[0]-e[0])*(r[s]-e[s])-(o[s]-e[s])*(r[0]-e[0]);if(0===i)return!1;const a=f/i;return c[0]=r[0]+a*(n[0]-r[0]),c[1]=r[s]+a*(n[s]-r[s]),!0}function a(t,n,o,c,i){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__.t)(e,e,n),i.length>2&&(i[2]=-e[2]),(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__.t)(e,e,o),s(0!==e[3]),i[0]=e[0]/e[3],i[1]=e[1]/e[3],i[2]=e[2]/e[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function u(t,r){return Math.log(t)/Math.log(r)}function l(t,r,n,e){t[12]=r,t[13]=n,t[14]=e}function m(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexAttribute: function() { return /* binding */ e; },
/* harmony export */   affectsGeometry: function() { return /* binding */ E; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;function E(E){return E===e.POSITION}!function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.ROTATION="rotation",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",e.LENGTH="length",e.PREVPOSITION="prevPosition",e.NEXTPOSITION="nextPosition",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMAL2COMPRESSED="normal2Compressed",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.START_UP="startUp",e.END_UP="endUp",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlphaDiscardMode: function() { return /* binding */ i; },
/* harmony export */   CullFaceOptions: function() { return /* binding */ e; },
/* harmony export */   DepthTestFunction: function() { return /* binding */ n; },
/* harmony export */   Object3DState: function() { return /* binding */ t; },
/* harmony export */   RenderRequestType: function() { return /* binding */ a; },
/* harmony export */   ResourceState: function() { return /* binding */ O; },
/* harmony export */   StencilBits: function() { return /* binding */ s; },
/* harmony export */   TextureEncodingMimeType: function() { return /* binding */ u; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e,n,a,O,s,t,i,u;!function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(e||(e={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(a||(a={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(O||(O={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(t||(t={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(i||(i={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeAttachmentOriginLines: function() { return /* binding */ f; },
/* harmony export */   computeAttachmentOriginPoints: function() { return /* binding */ c; },
/* harmony export */   computeAttachmentOriginTriangles: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/triangle.js */ "./node_modules/@arcgis/core/geometry/support/triangle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(r,o){if(!r)return!1;const{size:i,data:c,indices:f}=r;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(o,0,0,0),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(m,0,0,0);let g=0,d=0;for(let p=0;p<f.length-2;p+=3){const r=f[p]*i,h=f[p+1]*i,j=f[p+2]*i;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(a,c[r],c[r+1],c[r+2]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(l,c[h],c[h+1],c[h+2]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(u,c[j],c[j+1],c[j+2]);const z=(0,_geometry_support_triangle_js__WEBPACK_IMPORTED_MODULE_2__.areaPoints3d)(a,l,u);z?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(a,a,l),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(a,a,u),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(a,a,1/3*z),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(o,o,a),g+=z):((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(m,m,a),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(m,m,l),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(m,m,u),d+=3)}return(0!==d||0!==g)&&(0!==g?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(o,o,1/g),!0):0!==d&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(o,m,1/d),!0))}function c(e,r){if(!e)return!1;const{size:o,data:s,indices:i}=e;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(r,0,0,0);let c=-1,f=0;for(let t=0;t<i.length;t++){const e=i[t]*o;c!==e&&(r[0]+=s[e],r[1]+=s[e+1],r[2]+=s[e+2],f++),c=e}return f>1&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(r,r,1/f),f>0}function f(o,s,i){if(!o)return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,0,0,0),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(m,0,0,0);let c=0,f=0;const{size:u,data:g,indices:d}=o,p=d.length-1,h=p+(s?2:0);for(let t=0;t<h;t+=2){const o=t<p?t+1:0,s=d[t<p?t:p]*u,h=d[o]*u;a[0]=g[s],a[1]=g[s+1],a[2]=g[s+2],l[0]=g[h],l[1]=g[h+1],l[2]=g[h+2],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(a,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(a,a,l),.5);const j=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.F)(a,l);j>0?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(i,i,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(a,a,j)),c+=j):0===c&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(m,m,a),f++)}return 0!==c?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(i,i,1/c),!0):0!==f&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(i,m,1/f),!0)}const a=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),l=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),m=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyPrecomputedScaleFactor: function() { return /* binding */ p; },
/* harmony export */   applyScaleFactor: function() { return /* binding */ m; },
/* harmony export */   getLabelSettings: function() { return /* binding */ o; },
/* harmony export */   getSettings: function() { return /* binding */ s; },
/* harmony export */   precomputeScaleFactor: function() { return /* binding */ d; },
/* harmony export */   scale: function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/boundedPlane.js */ "./node_modules/@arcgis/core/chunks/boundedPlane.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(e,t){return new F(e,g,t)}function o(e,t){const{curvatureDependent:a,scaleStart:r,scaleFallOffRange:n}=g;return new F(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:_.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:_.curvatureDependent.max.scaleFallOffFactor}},scaleStart:r,scaleFallOffRange:n,minPixelSize:_.minPixelSize},t)}function u(e){return Math.abs(e*e*e)}function f(e,t,a){const r=a.parameters;return C.scale=Math.min(r.divisor/(t-r.offset),1),C.factor=u(e),C}function m(t,a){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(t*Math.max(a.scale,a.minScaleFactor),t,a.factor)}function h(e,t,a){const r=f(e,t,a);return r.minScaleFactor=0,m(1,r)}function d(e,t,a,r){r.scale=h(e,t,a),r.factor=0,r.minScaleFactor=a.minScaleFactor}function p(e,t,a=[0,0]){const r=Math.min(Math.max(t.scale,t.minScaleFactor),1);return a[0]=e[0]*r,a[1]=e[1]*r,a}function v(e,t,a,r){return m(e,f(t,a,r))}class F{get minScaleFactor(){return null!=this._fontHeight?Math.min(this._description.minPixelSize/this._fontHeight,1):0}constructor(e,t,a,r=O(),n){this._viewingMode=e,this._description=t,this._ellipsoidRadius=a,this.parameters=r,this._fontHeight=n,this._viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__.ViewingMode.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),!0)}overrideFontHeight(e){return e!==this._fontHeight?new F(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:r,scaleFallOffRange:n}=this._description,{fovY:i,distance:c}=e,l=this._calculateCurvatureDependentParameters(e,t),s=this._coverageCompensation(e,t,l),{tiltAngle:o,scaleFallOffFactor:u}=l,f=Math.sin(o)*c,m=.5*Math.PI-o-i*(.5-r*s),h=f/Math.cos(m),d=m+i*n*s,p=(h-u*(f/Math.cos(d)))/(1-u);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=p,a.divisor=h-p,a}_calculateCurvatureDependentParametersLocal(e,t,a=x){return a.tiltAngle=this._description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,r,n=x){const i=this._description.curvatureDependent,c=1+t.distance/r,l=Math.sqrt(c*c-1),[s,o]=[i.min.curvature,i.max.curvature],u=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)((l-s)/(o-s),0,1),[f,m]=[i.min,i.max];return n.tiltAngle=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(f.tiltAngle,m.tiltAngle,u),n.scaleFallOffFactor=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(f.scaleFallOffFactor,m.scaleFallOffFactor,u),n}_surfaceCoverageCompensationLocal(e,t,a){return (0,_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_1__.d)(a.tiltAngle,e.fovY)}_surfaceCoverageCompensationGlobal(e,t,a){return (0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_2__.b)(D,t),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_2__.d)(D,a.tiltAngle,e.distance,e.fovY)}}const g={curvatureDependent:{min:{curvature:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(10),tiltAngle:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(12),scaleFallOffFactor:.5},max:{curvature:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(70),tiltAngle:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},_={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function O(){return{camera:{distance:0,fovY:0},divisor:0,offset:0}}const C={scale:0,factor:0,minScaleFactor:0},x={tiltAngle:0,scaleFallOffFactor:0},D=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTextureResizeFloorModulo: function() { return /* binding */ i; },
/* harmony export */   applyTextureResizeModulo: function() { return /* binding */ n; },
/* harmony export */   downsampleImage: function() { return /* binding */ r; },
/* harmony export */   ensureImageMaxSize: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=16;function n(t){return Math.ceil(t/e)*e}function i(t){return Math.floor(t/e)*e}function r(t,e){const n=1048576,i=4096,r=2;let h=t.width*t.height;if(h<i)return t instanceof ImageData?a(t):t;let c=t.width,u=t.height;do{c=Math.ceil(c/r),u=Math.ceil(u/r),h=c*u}while(h>n||null!=e&&(c>e||u>e));return o(t,c,u)}function h(t,e){const n=Math.max(t.width,t.height);if(n<=e)return t;const i=e/n;return o(t,Math.round(t.width*i),Math.round(t.height*i))}function o(t,e,n){if(t instanceof ImageData)return o(a(t),e,n);const i=document.createElement("canvas");i.width=e,i.height=n;return i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function a(e){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");if(null==i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Failed to create 2d context from HTMLCanvasElement");return i.putImageData(e,0,0),n}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I3SVerticalOffsetGlobalViewingMode: function() { return /* binding */ x; },
/* harmony export */   IntersectorTransform: function() { return /* binding */ b; },
/* harmony export */   Object3DVerticalOffsetGlobalViewingMode: function() { return /* binding */ O; },
/* harmony export */   TerrainVerticalOffsetGlobalViewingMode: function() { return /* binding */ T; },
/* harmony export */   getVerticalOffsetI3S: function() { return /* binding */ L; },
/* harmony export */   getVerticalOffsetObject3D: function() { return /* binding */ d; },
/* harmony export */   getVerticalOffsetTerrain: function() { return /* binding */ I; },
/* harmony export */   terrainId: function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/* harmony import */ var _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/orientedBoundingBox.js */ "./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class b{constructor(){this._transform=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),this._transformInverse=new v({value:this._transform},_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__.invert,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.create),this._transformInverseTranspose=new v(this._transformInverse,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__.transpose,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.create),this._transformTranspose=new v({value:this._transform},_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__.transpose,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.create),this._transformInverseRotation=new v({value:this._transform},_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__.normalFromMat4Legacy,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__.copy)(this._transform,t)}multiplyTransform(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__.multiply)(this._transform,this._transform,t)}set(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__.copy)(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms()}}class v{constructor(t,s,r){this._original=t,this._update=s,this._dirty=!0,this._transform=r()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class T{constructor(t=0){this.offset=t,this.tmpVertex=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)()}applyToVertex(t,s,r){const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(q,t,s,r),i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.g)(z,e,this.localOrigin),o=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.tmpVertex,e,i,o),this.tmpVertex}applyToAabb(t){const s=A,r=R,e=B;for(let n=0;n<3;++n)s[n]=t[0+n]+this.localOrigin[n],r[n]=t[3+n]+this.localOrigin[n],e[n]=s[n];const i=this.applyToVertex(s[0],s[1],s[2]);for(let n=0;n<3;++n)t[n]=i[n],t[n+3]=i[n];const o=s=>{const r=this.applyToVertex(s[0],s[1],s[2]);for(let e=0;e<3;++e)t[e]=Math.min(t[e],r[e]),t[e+3]=Math.max(t[e+3],r[e])};for(let n=1;n<8;++n){for(let t=0;t<3;++t)e[t]=n&1<<t?r[t]:s[t];o(e)}let a=0;for(let n=0;n<3;++n){s[n]*r[n]<0&&(a|=1<<n)}if(0!==a&&7!==a)for(let n=0;n<8;++n)if(!(a&n)){for(let t=0;t<3;++t)e[t]=a&1<<t?0:n&1<<t?s[t]:r[t];o(e)}for(let n=0;n<3;++n)t[n]-=this.localOrigin[n],t[n+3]-=this.localOrigin[n];return t}}class x{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),this._tmpMbs=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this._tmpObb=new _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.Obb,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(t)}applyToVertex(t,s,r){const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(q,t,s,r),i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(z,t,s,r+this.componentLocalOriginLength),o=this._totalOffset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(this._tmpVertex,e,i,o),this._tmpVertex}applyToAabb(t){const s=this.componentLocalOriginLength,r=t[0],e=t[1],i=t[2]+s,o=t[3],a=t[4],n=t[5]+s,h=Math.abs(r),f=Math.abs(e),l=Math.abs(i),m=Math.abs(o),p=Math.abs(a),c=Math.abs(n),_=.5*(1+Math.sign(r*o))*Math.min(h,m),u=.5*(1+Math.sign(e*a))*Math.min(f,p),g=.5*(1+Math.sign(i*n))*Math.min(l,c),M=Math.max(h,m),b=Math.max(f,p),v=Math.max(l,c),T=Math.sqrt(_*_+u*u+g*g),x=Math.sign(h+r),O=Math.sign(f+e),y=Math.sign(l+i),d=Math.sign(m+o),V=Math.sign(p+a),L=Math.sign(c+n),j=this._totalOffset;if(T<j)return t[0]-=(1-x)*j,t[1]-=(1-O)*j,t[2]-=(1-y)*j,t[3]+=d*j,t[4]+=V*j,t[5]+=L*j,t;const I=j/Math.sqrt(M*M+b*b+v*v),w=j/T,q=w-I,z=-q;return t[0]+=r*(x*z+w),t[1]+=e*(O*z+w),t[2]+=i*(y*z+w),t[3]+=o*(d*q+I),t[4]+=a*(V*q+I),t[5]+=n*(L*q+I),t}applyToMbs(t){const s=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t)),r=this._totalOffset/s;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(this._tmpMbs),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),r),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/s,this._tmpMbs}applyToObb(t){return (0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.computeOffsetObb)(t,this._totalOffset,this._totalOffset,_ViewingMode_js__WEBPACK_IMPORTED_MODULE_7__.ViewingMode.Global,this._tmpObb),this._tmpObb}}class O{constructor(t=0){this.offset=t,this.sphere=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.tmpVertex=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)()}applyToVertex(t,s,r){const e=this.objectTransform.transform,i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(q,t,s,r),o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.t)(i,i,e),a=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(o);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(o,o,o,a);const h=this.objectTransform.inverse;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.t)(this.tmpVertex,o,h),this.tmpVertex}applyToMinMax(t,s){const r=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(t);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(t,t,t,r);const e=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(s);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(s,s,s,e)}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t)),r=this.offset/s;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.sphere),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),r),this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const y=new O;function d(t){return null!=t?(y.offset=t,y):null}const V=new x;function L(t){return null!=t?(V.offset=t,V):null}const j=new T;function I(t){return null!=t?(j.offset=t,j):null}const w="terrain",q=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),R=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AmbientLight: function() { return /* binding */ i; },
/* harmony export */   FillLight: function() { return /* binding */ r; },
/* harmony export */   MainLight: function() { return /* binding */ c; },
/* harmony export */   SphericalHarmonicsAmbientLight: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class i{constructor(s=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.zeros)()){this.intensity=s}}class r{constructor(i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.zeros)(),r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(.57735,.57735,.57735)){this.intensity=i,this.direction=r}}class c{constructor(i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.zeros)(),r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(.57735,.57735,.57735),c=!0,n=1,o=1){this.intensity=i,this.direction=r,this.castShadows=c,this.specularStrength=n,this.environmentStrength=o}}class n{constructor(){this.r=[0],this.g=[0],this.b=[0]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneLighting: function() { return /* binding */ _; },
/* harmony export */   SunLight: function() { return /* binding */ m; },
/* harmony export */   ambientBoost: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Lightsources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lightsources.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js");
/* harmony import */ var _SphericalHarmonics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SphericalHarmonics.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class g{constructor(){this.color=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.intensity=1}}class m{constructor(){this.direction=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),this.ambient=new g,this.diffuse=new g}}const l=.4;class _{constructor(){this._shOrder=2,this._legacy=new m,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new _Lightsources_js__WEBPACK_IMPORTED_MODULE_3__.SphericalHarmonicsAmbientLight,this._mainLight=new _Lightsources_js__WEBPACK_IMPORTED_MODULE_3__.MainLight((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(i){(0,_SphericalHarmonics_js__WEBPACK_IMPORTED_MODULE_4__.combineLights)(i,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(this._legacy.diffuse.color,this._mainLight.intensity,r),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(L,this._legacy.diffuse.color),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(L,L,l*this.globalFactor),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(this._legacy.ambient.color,this._legacy.ambient.color,L)}copyFrom(i){this._sphericalHarmonics.r=Array.from(i.sh.r),this._sphericalHarmonics.g=Array.from(i.sh.g),this._sphericalHarmonics.b=Array.from(i.sh.b),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._mainLight.direction,i.mainLight.direction),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._mainLight.intensity,i.mainLight.intensity),this._mainLight.castShadows=i.mainLight.castShadows,this._mainLight.specularStrength=i.mainLight.specularStrength,this._mainLight.environmentStrength=i.mainLight.environmentStrength,this.globalFactor=i.globalFactor,this.noonFactor=i.noonFactor}lerpLighting(s,h,n){if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)(this._mainLight.intensity,s.mainLight.intensity,h.mainLight.intensity,n),this._mainLight.environmentStrength=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.mainLight.environmentStrength,h.mainLight.environmentStrength,n),this._mainLight.specularStrength=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.mainLight.specularStrength,h.mainLight.specularStrength,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(this._mainLight.direction,h.mainLight.direction),this._mainLight.castShadows=h.mainLight.castShadows,this.globalFactor=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.globalFactor,h.globalFactor,n),this.noonFactor=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.noonFactor,h.noonFactor,n),s.sh.r.length===h.sh.r.length)for(let t=0;t<h.sh.r.length;t++)this._sphericalHarmonics.r[t]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.sh.r[t],h.sh.r[t],n),this._sphericalHarmonics.g[t]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.sh.g[t],h.sh.g[t],n),this._sphericalHarmonics.b[t]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.lerp)(s.sh.b[t],h.sh.b[t],n);else for(let i=0;i<h.sh.r.length;i++)this._sphericalHarmonics.r[i]=h.sh.r[i],this._sphericalHarmonics.g[i]=h.sh.g[i],this._sphericalHarmonics.b[i]=h.sh.b[i]}}const L=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   combineLights: function() { return /* binding */ M; },
/* harmony export */   computeCoefficients: function() { return /* binding */ m; },
/* harmony export */   initSHCoefficients: function() { return /* binding */ p; },
/* harmony export */   numberOfCoefficients: function() { return /* binding */ u; },
/* harmony export */   orderFromNumberOfCoefficients: function() { return /* binding */ l; },
/* harmony export */   projectAmbientLights: function() { return /* binding */ y; },
/* harmony export */   projectFillLights: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/LongVectorMath.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js");
/* harmony import */ var _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lightsources.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u(t){return(t+1)*(t+1)}function l(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.floor(Math.sqrt(n)-1),0,2)}function m(t,n,o){const r=t[0],e=t[1],i=t[2],s=o||[];return s.length=u(n),n>=0&&(s[0]=.28209479177),n>=1&&(s[1]=.4886025119*r,s[2]=.4886025119*i,s[3]=.4886025119*e),n>=2&&(s[4]=1.09254843059*r*e,s[5]=1.09254843059*e*i,s[6]=.31539156525*(3*i*i-1),s[7]=1.09254843059*r*i,s[8]=.54627421529*(r*r-e*e)),s}function p(t,n){const o=u(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function b(t,o){const r=l(o.r.length);for(const e of t)(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.v)(P,e.direction),m(P,r,v),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.elementwiseProduct)(v,w),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.scalarProduct)(v,e.intensity[0],I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(o.r,I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.scalarProduct)(v,e.intensity[1],I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(o.g,I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.scalarProduct)(v,e.intensity[2],I),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(o.b,I);return o}function y(t,n){m(P,0,v);for(const o of t)n.r[0]+=v[0]*w[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v[0]*w[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v[0]*w[0]*o.intensity[2]*4*Math.PI;return n}function M(t,n,e,i){p(n,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(e.intensity,0,0,0);let s=!1;const u=S,l=d,m=j;u.length=0,l.length=0,m.length=0;for(const o of t)o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.MainLight&&!s?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(e.direction,o.direction),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.c)(e.intensity,o.intensity),e.specularStrength=o.specularStrength,e.environmentStrength=o.environmentStrength,e.castShadows=o.castShadows,s=!0):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.MainLight||o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.FillLight?u.push(o):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.AmbientLight?l.push(o):o instanceof _Lightsources_js__WEBPACK_IMPORTED_MODULE_4__.SphericalHarmonicsAmbientLight&&m.push(o);b(u,i),y(l,i);for(const o of m)(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(i.r,o.r),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(i.g,o.g),(0,_lib_LongVectorMath_js__WEBPACK_IMPORTED_MODULE_3__.add)(i.b,o.b)}const S=[],d=[],j=[],v=[0],I=[0],P=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),w=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultBufferWriter: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r{constructor(t){this.vertexBufferLayout=t}elementCount(e){return e.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__.VertexAttribute.POSITION).indices.length}write(t,r,i,o,s,u){(0,_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_1__.writeDefaultAttributes)(i,o,this.vertexBufferLayout,t,r,s,u)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultGLMaterial: function() { return /* binding */ q; },
/* harmony export */   DefaultMaterial: function() { return /* binding */ B; },
/* harmony export */   DefaultMaterialParameters: function() { return /* binding */ z; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ViewingMode.js */ "./node_modules/@arcgis/core/views/ViewingMode.js");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderLibrary/output/Emissions.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _effects_geometry_olidUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../effects/geometry/olidUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/GLTextureMaterial.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/Material.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js");
/* harmony import */ var _lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/RayIntersections.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js");
/* harmony import */ var _lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lib/RenderSlot.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../lib/verticalOffsetUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js");
/* harmony import */ var _DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DefaultBufferWriter.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js");
/* harmony import */ var _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js");
/* harmony import */ var _shaders_DefaultMaterialTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js");
/* harmony import */ var _shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shaders/RealisticTreeTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class B extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_13__.Material{constructor(e,r){super(e,z),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_16__.RenderSlot.OPAQUE_MATERIAL,e=>((0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.is3DGeometryOutputMRT)(e)||(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.isShadowRelatedOutput)(e))&&!this.parameters.transparent],[_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_16__.RenderSlot.TRANSPARENT_MATERIAL,e=>((0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.is3DGeometryOutputMRT)(e)||(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.isShadowRelatedOutput)(e))&&this.parameters.transparent&&this.parameters.writeDepth],[_lib_RenderSlot_js__WEBPACK_IMPORTED_MODULE_16__.RenderSlot.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.is3DGeometryOutput)(e)||(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.isShadowRelatedOutput)(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=U(this.parameters),this._configuration=new _shaders_DefaultMaterialTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_22__.DefaultMaterialTechniqueConfiguration(r.spherical,r.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.Shadow&&e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.ShadowExcludeHighlight&&e!==_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__.ShaderOutput.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_9__.alphaCutoff)return!1;const{hasInstancedColor:r,hasVertexColors:t,hasSymbolColors:i,vvColor:s}=e,a=r||s||i,o="replace"===e.colorMixMode,n=e.opacity>=_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_9__.alphaCutoff;if(t&&a)return o||n;const c=e.externalColor&&e.externalColor[3]>=_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_9__.alphaCutoff;return t?o?c:n:a?o||n:o?c:n}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.parameters.emissiveFactor,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.ZEROS)}getConfiguration(e,r){const t=this.parameters,{treeRendering:i,doubleSided:s,doubleSidedType:a}=t;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!t.normalTextureId,this._configuration.hasColorTexture=!!t.textureId,this._configuration.hasVertexTangents=!i&&t.hasVertexTangents,this._configuration.instanced=t.isInstanced,this._configuration.instancedDoublePrecision=t.instancedDoublePrecision,this._configuration.vvSize=!!t.vvSize,this._configuration.hasVerticalOffset=null!=t.verticalOffset,this._configuration.hasScreenSizePerspective=null!=t.screenSizePerspective,this._configuration.hasSlicePlane=t.hasSlicePlane,this._configuration.hasSliceHighlight=t.hasSliceHighlight,this._configuration.alphaDiscardMode=t.textureAlphaMode,this._configuration.normalType=i?_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__.NormalType.Attribute:t.normalType,this._configuration.transparent=t.transparent,this._configuration.writeDepth=t.writeDepth,null!=t.customDepthTest&&(this._configuration.customDepthTest=t.customDepthTest),this._configuration.hasOccludees=r.hasOccludees,this._configuration.cullFace=t.hasSlicePlane?_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_11__.CullFaceOptions.None:t.cullFace,this._configuration.terrainDepthTest=r.terrainDepthTest,this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=t.modelTransformation,this._configuration.hasVertexColors=t.hasVertexColors,this._configuration.hasSymbolColors=t.hasSymbolColors,this._configuration.doubleSidedMode=i?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.WindingOrder:s&&"normal"===a?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.View:s&&"winding-order"===a?_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.WindingOrder:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_7__.NormalsDoubleSidedMode.None,this._configuration.instancedColor=t.hasInstancedColor,this._configuration.receiveShadows=t.receiveShadows&&t.receiveShadows,this._configuration.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=r.ssao,this._configuration.vvColor=!!t.vvColor,this._configuration.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,this._configuration.pbrMode=t.usePBR?t.isSchematic?_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__.PBRMode.Schematic:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__.PBRMode.Normal:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_8__.PBRMode.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!t.metallicRoughnessTextureId,this._configuration.emissionSource=i?_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_6__.EmissionSource.None:null!=t.emissiveTextureId?_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_6__.EmissionSource.Texture:t.usePBR?_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_6__.EmissionSource.Value:_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_6__.EmissionSource.None,this._configuration.hasOcclusionTexture=!i&&!!t.occlusionTextureId,this._configuration.offsetBackfaces=!(!t.transparent||!t.offsetTransparentBackfaces),this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__.OITPolygonOffsetLimit,this._configuration.snowCover=H(r),this._configuration.hasColorTextureTransform=!!t.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,l,u,h,m,p){if(null!=this.parameters.verticalOffset){const e=u.camera;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(J,l[12],l[13],l[14]);let p=null;switch(u.viewingMode){case _ViewingMode_js__WEBPACK_IMPORTED_MODULE_2__.ViewingMode.Global:p=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.n)(G,J);break;case _ViewingMode_js__WEBPACK_IMPORTED_MODULE_2__.ViewingMode.Local:p=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(G,F)}let d=0;const g=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.d)(Q,J,e.eye),T=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.l)(g),x=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(g,g,1/T);let v=null;this.parameters.screenSizePerspective&&(v=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.f)(p,x)),d+=(0,_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_20__.verticalOffsetAtDistance)(e,T,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(p,p,d),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(Y,p,u.transform.inverseRotation),h=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.d)(W,h,Y),m=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.d)(k,m,Y)}(0,_lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_15__.intersectTriangleGeometry)(e,u,h,m,(0,_lib_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_18__.getVerticalOffsetObject3D)(u.verticalOffset),p)}createGLMaterial(e){return new q(e)}createBufferWriter(){return new _DefaultBufferWriter_js__WEBPACK_IMPORTED_MODULE_19__.DefaultBufferWriter(this._vertexBufferLayout)}}class q extends _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_12__.GLTextureMaterial{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const i=e.camera.viewInverseTransposeMatrix;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?_shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_23__.RealisticTreeTechnique:_shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_21__.DefaultMaterialTechnique,e)}}class z extends _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_21__.DefaultMaterialPassParameters{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function H(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}function U(e){const r=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__.newLayout)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.POSITION);e.normalType===_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__.NormalType.Compressed?r.vec2i16(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.NORMALCOMPRESSED,{glNormalized:!0}):r.vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.NORMAL),e.hasVertexTangents&&r.vec4f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&r.vec2f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.UV0),e.hasVertexColors&&r.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.COLOR),e.hasSymbolColors&&r.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.SYMBOLCOLOR),(0,_effects_geometry_olidUtils_js__WEBPACK_IMPORTED_MODULE_10__.olidEnabled)()&&r.vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_17__.VertexAttribute.OBJECTANDLAYERIDCOLOR),r}const W=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),k=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),F=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.fromValues)(0,0,1),G=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),Y=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),J=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),Q=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorGamma: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=2.1;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultTechniqueConfiguration: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoubleConfiguration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/InstancedDoubleConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoubleConfiguration.js");
/* harmony import */ var _core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js");
/* harmony import */ var _lib_OITPass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/OITPass.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a extends _core_shaderLibrary_attributes_InstancedDoubleConfiguration_js__WEBPACK_IMPORTED_MODULE_2__.InstancedDoubleConfiguration{constructor(){super(...arguments),this.output=_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.Color,this.oitPass=_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_5__.OITPass.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=_core_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_3__.BindType.Pass,this.writeDepth=!0}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__.parameter)({count:_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__.ShaderOutput.COUNT})],a.prototype,"output",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__.parameter)({count:_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_5__.OITPass.COUNT})],a.prototype,"oitPass",void 0);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualVariablePassParameters: function() { return /* binding */ t; },
/* harmony export */   vvColorNumber: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _layers_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layers/support/FastSymbolUpdates.js */ "./node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Material.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t extends _layers_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_0__.VisualVariablesParameters{constructor(){super(...arguments),this.renderOccluded=_lib_Material_js__WEBPACK_IMPORTED_MODULE_1__.RenderOccludedFlag.Occlude,this.isDecoration=!1}}const e=8;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorMixModes: function() { return /* binding */ o; },
/* harmony export */   updateParameters: function() { return /* binding */ n; },
/* harmony export */   verticalOffsetAtDistance: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/screenSizePerspectiveUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(r,i,n,o,l){let s=(n.screenLength||0)*r.pixelRatio;null!=l&&(s=(0,_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.scale)(s,o,i,l));const a=s*Math.tan(.5*r.fovY)/(.5*r.fullHeight);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.clamp)(a*i,n.minWorldLength||0,null!=n.maxWorldLength?n.maxWorldLength:1/0)}function n(t,e){let i=!1;for(const n in e){const o=e[n];void 0!==o&&(Array.isArray(o)?Array.isArray(t[n])&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.equals)(o,t[n])||(t[n]=o.slice(),i=!0):t[n]!==o&&(i=!0,t[n]=o))}return i}const o={multiply:1,ignore:2,replace:3,tint:4};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeBufferFloat: function() { return /* binding */ d; },
/* harmony export */   writeBufferMat3f: function() { return /* binding */ y; },
/* harmony export */   writeBufferMat4f: function() { return /* binding */ g; },
/* harmony export */   writeBufferVec2: function() { return /* binding */ u; },
/* harmony export */   writeBufferVec3: function() { return /* binding */ a; },
/* harmony export */   writeBufferVec4: function() { return /* binding */ p; },
/* harmony export */   writeBufferVec4Zeros: function() { return /* binding */ B; },
/* harmony export */   writeColor: function() { return /* binding */ S; },
/* harmony export */   writeColorFeatureAttribute: function() { return /* binding */ N; },
/* harmony export */   writeDefaultAttribute: function() { return /* binding */ F; },
/* harmony export */   writeDefaultAttributes: function() { return /* binding */ E; },
/* harmony export */   writeNormal: function() { return /* binding */ O; },
/* harmony export */   writeObjectAndLayerIdColor: function() { return /* binding */ R; },
/* harmony export */   writePosition: function() { return /* binding */ b; },
/* harmony export */   writeTangent: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function d(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l)s[f]=r[i[l]],f+=n;else for(let l=0;l<c;++l){const e=r[i[l]];for(let t=0;t<o;t++)s[f]=e,f+=n}}function u(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=2*r[c];i[f]=o[e],i[f+1]=o[e+1],f+=s}}function a(e,t,f,o){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,null==o||1===o)for(let l=0;l<c;++l){const e=3*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n}else for(let l=0;l<c;++l){const e=3*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n}}function p(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l){const e=4*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n}else for(let l=0;l<c;++l){const e=4*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n}}function B(e,t,f){const o=e.typedBuffer,r=e.typedBufferStride;t*=r;for(let i=0;i<f;++i)o[t]=0,o[t+1]=0,o[t+2]=0,o[t+3]=0,t+=r}function y(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=9*r[c];for(let t=0;t<9;++t)i[f+t]=o[e+t];f+=s}}function g(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=16*r[c];for(let t=0;t<16;++t)i[f+t]=o[e+t];f+=s}}function b(t,f,o,r,i=1){if(!f)return void a(t,o,r,i);const{data:s,indices:n}=t,c=o.typedBuffer,l=o.typedBufferStride,d=n.length,u=f[0],p=f[1],B=f[2],y=f[4],g=f[5],b=f[6],O=f[8],h=f[9],S=f[10],N=f[12],R=f[13],E=f[14];r*=l;let F=0,z=0,A=0;const L=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.hasIdentityRotation)(f)?e=>{F=s[e]+N,z=s[e+1]+R,A=s[e+2]+E}:e=>{const t=s[e],f=s[e+1],o=s[e+2];F=u*t+y*f+O*o+N,z=p*t+g*f+h*o+R,A=B*t+b*f+S*o+E};if(1===i)for(let e=0;e<d;++e)L(3*n[e]),c[r]=F,c[r+1]=z,c[r+2]=A,r+=l;else for(let e=0;e<d;++e){L(3*n[e]);for(let e=0;e<i;++e)c[r]=F,c[r+1]=z,c[r+2]=A,r+=l}}function O(f,o,r,i,s=1){if(!o)return void a(f,r,i,s);const{data:n,indices:c}=f,l=o,d=r.typedBuffer,u=r.typedBufferStride,p=c.length,B=l[0],y=l[1],g=l[2],b=l[4],O=l[5],h=l[6],S=l[8],N=l[9],R=l[10],E=!(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.isOrthoNormal)(l),F=1e-6,z=1-F;i*=u;let A=0,L=0,m=0;const T=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.hasIdentityRotation)(l)?e=>{A=n[e],L=n[e+1],m=n[e+2]}:e=>{const t=n[e],f=n[e+1],o=n[e+2];A=B*t+b*f+S*o,L=y*t+O*f+N*o,m=g*t+h*f+R*o};if(1===s)if(E)for(let e=0;e<p;++e){T(3*c[e]);const t=A*A+L*L+m*m;if(t<z&&t>F){const e=1/Math.sqrt(t);d[i]=A*e,d[i+1]=L*e,d[i+2]=m*e}else d[i]=A,d[i+1]=L,d[i+2]=m;i+=u}else for(let e=0;e<p;++e)T(3*c[e]),d[i]=A,d[i+1]=L,d[i+2]=m,i+=u;else for(let e=0;e<p;++e){if(T(3*c[e]),E){const e=A*A+L*L+m*m;if(e<z&&e>F){const t=1/Math.sqrt(e);A*=t,L*=t,m*=t}}for(let e=0;e<s;++e)d[i]=A,d[i+1]=L,d[i+2]=m,i+=u}}function h(e,f,o,r,i=1){if(!f)return void p(e,o,r,i);const{data:s,indices:n}=e,c=f,l=o.typedBuffer,d=o.typedBufferStride,u=n.length,a=c[0],B=c[1],y=c[2],g=c[4],b=c[5],O=c[6],h=c[8],S=c[9],N=c[10],R=!(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__.isOrthoNormal)(c),E=1e-6,F=1-E;if(r*=d,1===i)for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],i=s[e+2],c=s[e+3];let u=a*f+g*o+h*i,p=B*f+b*o+S*i,z=y*f+O*o+N*i;if(R){const e=u*u+p*p+z*z;if(e<F&&e>E){const t=1/Math.sqrt(e);u*=t,p*=t,z*=t}}l[r]=u,l[r+1]=p,l[r+2]=z,l[r+3]=c,r+=d}else for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],c=s[e+2],u=s[e+3];let p=a*f+g*o+h*c,z=B*f+b*o+S*c,A=y*f+O*o+N*c;if(R){const e=p*p+z*z+A*A;if(e<F&&e>E){const t=1/Math.sqrt(e);p*=t,z*=t,A*=t}}for(let t=0;t<i;++t)l[r]=p,l[r+1]=z,l[r+2]=A,l[r+3]=u,r+=d}}function S(e,t,f,o,r=1){const{data:i,indices:s}=e,n=f.typedBuffer,c=f.typedBufferStride,l=s.length;if(o*=c,t!==i.length||4!==t)if(1!==r)if(4!==t)for(let d=0;d<l;++d){const e=3*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=255,o+=c}else for(let d=0;d<l;++d){const e=4*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=i[e+3],o+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=i[t+3],o+=c}return}for(let e=0;e<l;++e){const t=3*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=255,o+=c}}else{n[o]=i[0],n[o+1]=i[1],n[o+2]=i[2],n[o+3]=i[3];const e=new Uint32Array(f.typedBuffer.buffer,f.start),t=c/4,s=e[o/=4];o+=t;const d=l*r;for(let f=1;f<d;++f)e[o]=s,o+=t}}function N(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length,c=o[0];f*=s;for(let l=0;l<n;++l)i[f]=c,f+=s}function R(e,t,f,o,r=1){const i=t.typedBuffer,s=t.typedBufferStride;if(o*=s,1===r)for(let n=0;n<f;++n)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s;else for(let n=0;n<f;++n)for(let t=0;t<r;++t)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s}function E(e,t,o,r,i,s,n){for(const c of o.fields.keys()){const o=e.get(c),d=o?.indices;if(o&&d)F(c,o,r,i,s,n);else if(c===_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.OBJECTANDLAYERIDCOLOR&&null!=t){const o=e.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION)?.indices;if(o){const e=o.length;R(t,s.getField(c,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4u8),e,n)}}}}function F(e,t,d,a,B,y){switch(e){case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(3===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec3f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&b(t,d,f,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.NORMAL:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(3===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec3f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&O(t,a,f,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.NORMALCOMPRESSED:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(2===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec2i16);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&u(t,f,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.UV0:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(2===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec2f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&u(t,f,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.COLOR:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.SYMBOLCOLOR:{const o=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4u8);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!o,`No buffer view for ${e}`),(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||S(t,t.size,o,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.COLORFEATUREATTRIBUTE:{const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewFloat);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(1===t.size),f&&1===t.size&&N(t,f,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.TANGENT:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(4===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&h(t,d,f,y);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.PROFILERIGHT:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.PROFILEUP:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.PROFILEVERTEXANDNORMAL:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.FEATUREVALUE:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(4===t.size);const f=B.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__.BufferViewVec4f);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!!f,`No buffer view for ${e}`),f&&p(t,f,y)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedMRRFactors: function() { return /* binding */ t; },
/* harmony export */   esriSymbologyMRRFactors: function() { return /* binding */ s; },
/* harmony export */   schematicMRRFactors: function() { return /* binding */ o; },
/* harmony export */   useSchematicPBR: function() { return /* binding */ n; },
/* harmony export */   useSchematicPBRI3S: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:t,emissiveTexture:o,emissiveFactor:s,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==s||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.p)(s,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.ZEROS))&&null==c&&(null==t||1===t)&&(null==r||1===r)}function r({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:t,emissiveTexture:o,emissiveFactor:s,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==s||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.p)(s,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.ZEROS))&&null==c&&(null==t||1===t)&&(null==r||1===r||0===r)}const t=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.freeze)(1,1,.5),o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.freeze)(0,.6,.2),s=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.freeze)(0,1,.2);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMaterialDrawParameters: function() { return /* binding */ N; },
/* harmony export */   DefaultMaterialPassParameters: function() { return /* binding */ F; },
/* harmony export */   DefaultMaterialTechnique: function() { return /* binding */ k; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VertexNormal.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/Material.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js");
/* harmony import */ var _lib_OITPass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/OITPass.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js");
/* harmony import */ var _materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../materials/pbrUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "./node_modules/@arcgis/core/views/webgl/renderState.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class F extends _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexNormalPassParameters{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_13__.advancedMRRFactors,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_8__.CullFaceOptions.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.ZEROS,this.instancedDoublePrecision=!1,this.normalType=_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__.NormalType.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.freeze)(.2,.2,.2),this.diffuse=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.freeze)(.8,.8,.8),this.externalColor=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__.fromValues)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_8__.DepthTestFunction.Less,this.textureAlphaMode=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_8__.AlphaDiscardMode.Blend,this.textureAlphaCutoff=_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_5__.alphaCutoff,this.textureAlphaPremultiplied=!1,this.renderOccluded=_lib_Material_js__WEBPACK_IMPORTED_MODULE_9__.RenderOccludedFlag.Occlude,this.isDecoration=!1}}class N extends _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_4__.VertexNormalDrawParameters{constructor(){super(...arguments),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.slicePlaneLocalOrigin=this.origin}}class k extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_7__.ShaderTechnique{constructor(e,t,i,s=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_6__.ReloadableShaderModule(_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_14__.D,(()=>__webpack_require__.e(/*! import() | DefaultMaterial.glsl */ "DefaultMaterial.glsl").then(__webpack_require__.bind(__webpack_require__, /*! ./DefaultMaterial.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterial.glsl.js"))))){super(e,t,s,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:i,output:s,transparent:o,cullFace:a,customDepthTest:n,hasOccludees:h,enableOffset:c}=e,u=i===_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_10__.OITPass.NONE,m=i===_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_10__.OITPass.FrontFace;return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_16__.makePipelineState)({blending:(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.isColorOrColorEmission)(s)&&o?(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_11__.blending)(i):null,culling:B(e)?(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_16__.cullingParams)(a):null,depthTest:{func:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_11__.oitDepthTest)(i,q(n))},depthWrite:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_11__.depthWrite)(e),drawBuffers:s===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__.ShaderOutput.Depth?{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.SpecialDrawBuffers.NONE]}:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_11__.getDrawBuffers)(i,s),colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_16__.defaultColorWrite,stencilWrite:h?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__.stencilWriteMaskOn:null,stencilTest:h?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__.stencilToolMaskBaseParams:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_12__.stencilBaseAllZerosParams:null,polygonOffset:u||m?null:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_11__.getOITPolygonOffset)(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function q(e){return e===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_8__.DepthTestFunction.Lequal?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.CompareFunction.LEQUAL:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__.CompareFunction.LESS}function B(e){return e.cullFace!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_8__.CullFaceOptions.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultMaterialTechniqueConfiguration: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/output/Emissions.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/shading/Normals.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js");
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../materials/DefaultTechniqueConfiguration.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class c extends _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_8__.DefaultTechniqueConfiguration{constructor(e,o){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=o,this.alphaDiscardMode=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.AlphaDiscardMode.Opaque,this.doubleSidedMode=_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalsDoubleSidedMode.None,this.pbrMode=_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.Disabled,this.cullFace=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.CullFaceOptions.None,this.normalType=_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.NormalType.Attribute,this.customDepthTest=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.DepthTestFunction.Less,this.emissionSource=_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_3__.EmissionSource.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_3__.EmissionSource.Texture||this.hasOcclusionTexture||this.hasNormalTexture?_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__.TextureCoordinateType.Default:_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__.TextureCoordinateType.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.AlphaDiscardMode.COUNT})],c.prototype,"alphaDiscardMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__.NormalsDoubleSidedMode.COUNT})],c.prototype,"doubleSidedMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_5__.PBRMode.COUNT})],c.prototype,"pbrMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.CullFaceOptions.COUNT})],c.prototype,"cullFace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.NormalType.COUNT})],c.prototype,"normalType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.DepthTestFunction.COUNT})],c.prototype,"customDepthTest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)({count:_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_3__.EmissionSource.COUNT})],c.prototype,"emissionSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasVertexColors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasSymbolColors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasVerticalOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasSlicePlane",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasSliceHighlight",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasColorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasMetallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasOcclusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasNormalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasScreenSizePerspective",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasVertexTangents",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasOccludees",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasModelTransformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"offsetBackfaces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"vvSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"vvColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"receiveShadows",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"receiveAmbientOcclusion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"textureAlphaPremultiplied",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"instanced",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"instancedColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"writeDepth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"transparent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"enableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"terrainDepthTest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"cullAboveTerrain",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"snowCover",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasColorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasEmissionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasNormalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasOcclusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_6__.parameter)()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outputColorHighlightOID: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/shaderLibrary/output/Emissions.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaCutoff.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js");
/* harmony import */ var _core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderLibrary/util/ColorConversion.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _lib_OITPass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/OITPass.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function d(d,f){d.include(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__.OutputHighlight,f),d.include(_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_1__.Emissions,f),d.fragment.include(_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_4__.ColorConversion);const p=f.output===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.ShaderOutput.ObjectAndLayerIdColor,c=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.isColorEmission)(f.output),g=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.isColorOrColorEmission)(f.output)&&f.oitPass===_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_6__.OITPass.ColorAlpha,h=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__.isColorOrColorEmission)(f.output)&&f.oitPass!==_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_6__.OITPass.ColorAlpha,m=f.discardInvisibleFragments;let C=0;(h||c||g)&&d.outputs.add("fragColor","vec4",C++),c&&d.outputs.add("fragEmission","vec4",C++),g&&d.outputs.add("fragAlpha","float",C++),d.fragment.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.If)(p,(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`finalColor.a = 1.0;`)}

      ${(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.If)(m,(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`if (finalColor.a < ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl.float(_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_3__.alphaCutoff)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.If)(g,(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.glsl)`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.If)(h,"fragColor = finalColor;")}
      ${(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.If)(c,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.If)(p,"outputObjectAndLayerIdColor();")}
    }
  `)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RealisticTreeTechnique: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js");
/* harmony import */ var _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultMaterialTechnique.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js");
/* harmony import */ var _chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/RealisticTree.glsl.js */ "./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class i extends _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_1__.DefaultMaterialTechnique{constructor(r,i,t){super(r,i,t,new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__.ReloadableShaderModule(_chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_2__.R,(()=>__webpack_require__.e(/*! import() | RealisticTree.glsl */ "RealisticTree.glsl").then(__webpack_require__.bind(__webpack_require__, /*! ./RealisticTree.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTree.glsl.js"))))),this.type="RealisticTreeTechnique"}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InternalRenderCategory: function() { return /* binding */ t; },
/* harmony export */   RenderCategory: function() { return /* binding */ n; },
/* harmony export */   fromRenderCoordinates: function() { return /* binding */ i; },
/* harmony export */   renderCoordinateTransformAt: function() { return /* binding */ a; },
/* harmony export */   toRenderCoordinates: function() { return /* binding */ c; },
/* harmony export */   webgl: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n,t;!function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"}(n||(n={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(t||(t={}));const l=null;function c(e,o,n,t,l,c,i){return t=t||e.spatialReference,(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__.projectBuffer)(o,t,n,l,e.renderCoordsHelper.spatialReference,c,i)?l:null}function i(e,o,n,t,l,c,i){return c=c||e.spatialReference,(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__.projectBuffer)(o,e.renderCoordsHelper.spatialReference,n,t,c,l,i)?t:null}function a(r,n,t,l){return l||(l=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.create)()),t=t||r.spatialReference,(0,_geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_1__.computeTranslationToOriginAndRotation)(t,n,l,r.renderCoordsHelper.spatialReference)?l:null}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl/RenderNode.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl/RenderNode.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl.js */ "./node_modules/@arcgis/core/views/3d/webgl.js");
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=_webgl_js__WEBPACK_IMPORTED_MODULE_6__.RenderCategory.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.watch)((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.initial)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,r=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return r.fbo?.initializeAndBind(),r}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__.RenderRequestType.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({constructOnly:!0})],u.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({constructOnly:!0})],u.prototype,"consumes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],u.prototype,"produces",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__.subclass)("esri.views.3d.webgl.RenderNode")],u);const c=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl/formats.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl/formats.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorFormat: function() { return /* binding */ R; },
/* harmony export */   DepthFormat: function() { return /* binding */ E; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var R,E;!function(R){R[R.RED=0]="RED",R[R.RG=1]="RG",R[R.RGBA4=2]="RGBA4",R[R.RGBA=3]="RGBA",R[R.RGBA_MIPMAP=4]="RGBA_MIPMAP",R[R.R16F=5]="R16F",R[R.RGBA16F=6]="RGBA16F"}(R||(R={})),function(R){R[R.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",R[R.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(E||(E={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/ViewingMode.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/ViewingMode.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewingMode: function() { return /* binding */ l; },
/* harmony export */   stringFromViewingMode: function() { return /* binding */ a; },
/* harmony export */   viewingModeFromString: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;function o(o){return"global"===o?l.Global:l.Local}function a(o){return o===l.Global?"global":"local"}!function(l){l[l.Global=1]="Global",l[l.Local=2]="Local"}(l||(l={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/GLObjectType.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLObjectType: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Texture.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Texture.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Texture: function() { return /* binding */ m; },
/* harmony export */   tracer: function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GLObjectType.js */ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js");
/* harmony import */ var _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/* harmony import */ var _ValidatedTextureDescriptor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValidatedTextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const _=null;let m=class l{constructor(e,r=null,s=null){if(this.type=_GLObjectType_js__WEBPACK_IMPORTED_MODULE_4__.GLObjectType.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,s=r;else{const i=_ValidatedTextureDescriptor_js__WEBPACK_IMPORTED_MODULE_6__.ValidatedTextureDescriptor.validate(e,r);if(!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Texture descriptor invalid");this._descriptor=i}this._descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_CUBE_MAP?this._setDataCubeMap(s):this.setData(s)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return (0,_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_5__.estimateMemory)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){const s=this._descriptor;if(s.width!==e||s.height!==r){if(this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Immutable textures can't be resized!");s.width=e,s.height=r,this._descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X;e<=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(i,s){const o=this._descriptor.context?.gl;if(!o)return;(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(o),this._glName||(this._glName=o.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.Texture,this));const a=this._descriptor,n=s??a.target,h=f(n),p=this._descriptor.context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(l.TEXTURE_UNIT_FOR_UPDATES),c(a),this._configurePixelStorage(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(o);const d=this._deriveInternalFormat();if(I(i)){let t="width"in i?i.width:i.codedWidth,r="height"in i?i.height:i.codedHeight;const s=1;i instanceof HTMLVideoElement&&(t=i.videoWidth,r=i.videoHeight),a.width&&a.height,h&&a.depth,a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,d,a.hasMipmap,t,r,s),this._texImage(n,0,d,t,r,s,i),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(o),a.hasMipmap&&(this.generateMipmap(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(o)),a.width||(a.width=t),a.height||(a.height=r),h&&!a.depth&&(a.depth=s)}else{const{width:r,height:s,depth:l}=a;if(null==r||null==s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Width and height must be specified!");if(h&&null==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Depth must be specified!");if(a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,d,a.hasMipmap,r,s,l),M(i)){const e=i.levels,h=R(n,r,s,l),p=Math.min(h-1,e.length-1);o.texParameteri(a.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,p);const _=d;if(!x(_))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((t,i,r,s)=>{const o=e[Math.min(t,e.length-1)];this._compressedTexImage(n,t,_,i,r,s,o)}),p)}else this._texImage(n,0,d,r,s,l,i),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(o),a.hasMipmap&&this.generateMipmap()}u(o,this._descriptor),T(o,this._descriptor),E(this._descriptor.context,this._descriptor),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_2__.checkWebGLError)(o),this._descriptor.context.bindTexture(p,l.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,i,r,s,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor,p=this._deriveInternalFormat(),{context:d,pixelFormat:_,dataType:m,target:c,isImmutable:u}=h;if(u&&!this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot update immutable texture before allocation!");const T=d.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES,!0);(i<0||r<0||i+s>h.width||r+o>h.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:E}=d;n&&E.pixelStorei(E.UNPACK_SKIP_ROWS,n),I(a)?E.texSubImage2D(c,e,i,r,s,o,_,m,a):M(a)?E.compressedTexSubImage2D(c,e,i,r,s,o,p,a.levels[e]):E.texSubImage2D(c,e,i,r,s,o,_,m,a),n&&E.pixelStorei(E.UNPACK_SKIP_ROWS,0),d.bindTexture(T,l.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,i,r,s,o,a,n,h){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._descriptor,d=this._deriveInternalFormat(),{context:_,pixelFormat:m,dataType:c,isImmutable:u,target:T}=p;if(u&&!this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot update immutable texture before allocation!");f(T)||console.warn("Attempting to set 3D texture data on a non-3D texture");const E=_.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);_.setActiveTexture(l.TEXTURE_UNIT_FOR_UPDATES),(i<0||r<0||s<0||i+o>p.width||r+a>p.height||s+n>p.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:g}=_;if(M(h))h=h.levels[e],g.compressedTexSubImage3D(T,e,i,r,s,o,a,n,d,h);else{const t=h;g.texSubImage3D(T,e,i,r,s,o,a,n,m,c,t)}_.bindTexture(E,l.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,c(e)}e.samplingMode===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR_MIPMAP_NEAREST):e.samplingMode===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,l.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(l.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,l.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,c(e)}e.samplingMode===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR):e.samplingMode===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,c(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._descriptor,e=t.context.gl;this._samplingModeDirty&&(u(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(T(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===_enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.DEPTH_STENCIL&&(this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case _enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelType.FLOAT:switch(this._descriptor.pixelFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.RGBA:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_3__.SizedPixelFormat.RGBA32F;case _enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.RGB:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_3__.SizedPixelFormat.RGB32F;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Unable to derive format")}case _enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelType.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.RGBA:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_3__.SizedPixelFormat.RGBA8;case _enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.RGB:return this._descriptor.internalFormat=_enums_js__WEBPACK_IMPORTED_MODULE_3__.SizedPixelFormat.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===_enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.DEPTH_STENCIL?_enums_js__WEBPACK_IMPORTED_MODULE_3__.PixelFormat.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const t=this._descriptor.context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,i,r,s,o,a){const{gl:n}=this._descriptor.context;if(!g(i))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const l=r?R(e,s,o,a):1;if(f(e)){if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");n.texStorage3D(e,l,i,s,o,a)}else n.texStorage2D(e,l,i,s,o);this._wasImmutablyAllocated=!0}_texImage(e,i,r,s,o,a,n){const l=this._descriptor.context.gl,h=f(e),{isImmutable:p,pixelFormat:d,dataType:_}=this._descriptor;if(p){if(null!=n){const r=n;if(h){if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");l.texSubImage3D(e,i,0,0,0,s,o,a,d,_,r)}else l.texSubImage2D(e,i,0,0,s,o,d,_,r)}}else{const p=n;if(h){if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");l.texImage3D(e,i,r,s,o,a,0,d,_,p)}else l.texImage2D(e,i,r,s,o,0,d,_,p)}}_compressedTexImage(e,i,r,s,o,a,n){const l=this._descriptor.context.gl,h=f(e);if(this._descriptor.isImmutable){if(null!=n)if(h){if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,i,0,0,0,s,o,a,r,n)}else l.compressedTexSubImage2D(e,i,0,0,s,o,r,n)}else if(h){if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,i,r,s,o,a,0,n)}else l.compressedTexImage2D(e,i,r,s,o,0,n)}_forEachMipmapLevel(e,r=1/0){let{width:s,height:o,depth:a,hasMipmap:n,target:l}=this._descriptor;const h=l===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_3D;if(null==s||null==o||h&&null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Missing texture dimensions for mipmap calculation");for(let t=0;e(t,s,o,a),n&&(1!==s||1!==o||h&&1!==a)&&!(t>=r);++t)s=Math.max(1,s>>1),o=Math.max(1,o>>1),h&&(a=Math.max(1,a>>1))}};function c(t){(null!=t.width&&t.width<0||null!=t.height&&t.height<0||null!=t.depth&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function u(t,e){let i=e.samplingMode,r=e.samplingMode;i===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR_MIPMAP_NEAREST||i===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR?(i=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR,e.hasMipmap||(r=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.LINEAR)):i!==_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST_MIPMAP_NEAREST&&i!==_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST_MIPMAP_LINEAR||(i=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST,e.hasMipmap||(r=_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureSamplingMode.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}function T(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function E(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function g(t){return t in _enums_js__WEBPACK_IMPORTED_MODULE_3__.SizedPixelFormat}function x(t){return t in _enums_js__WEBPACK_IMPORTED_MODULE_3__.CompressedTextureFormat}function M(t){return null!=t&&"type"in t&&"compressed"===t.type}function A(t){return null!=t&&"byteLength"in t}function I(t){return null!=t&&!M(t)&&!A(t)}function f(t){return t===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_3D||t===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_2D_ARRAY}function R(t,e,r,s=1){let o=Math.max(e,r);return t===_enums_js__WEBPACK_IMPORTED_MODULE_3__.TextureType.TEXTURE_3D&&(o=Math.max(o,s)),Math.round(Math.log(o)/Math.LN2)+1}m.TEXTURE_UNIT_FOR_UPDATES=0;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextureDescriptor: function() { return /* binding */ p; },
/* harmony export */   estimateMemory: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class p{constructor(e=0,p=e){this.width=e,this.height=p,this.target=_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureType.TEXTURE_2D,this.pixelFormat=_enums_js__WEBPACK_IMPORTED_MODULE_0__.PixelFormat.RGBA,this.dataType=_enums_js__WEBPACK_IMPORTED_MODULE_0__.PixelType.UNSIGNED_BYTE,this.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureSamplingMode.LINEAR,this.wrapMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureWrapMode.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function r(i){return i.width<=0||i.height<=0?0:Math.round(i.width*i.height*(i.hasMipmap?4/3:1)*(null==i.internalFormat?4:(0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.getBytesPerElementFormat)(i.internalFormat))*(i.target===_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureType.TEXTURE_CUBE_MAP?6:1))}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Util.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindVertexBufferLayout: function() { return /* binding */ E; },
/* harmony export */   getBytesPerElementFormat: function() { return /* binding */ u; },
/* harmony export */   getErrorString: function() { return /* binding */ o; },
/* harmony export */   getStride: function() { return /* binding */ R; },
/* harmony export */   unbindVertexBufferLayout: function() { return /* binding */ _; },
/* harmony export */   vertexCount: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _getDataTypeBytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getDataTypeBytes.js */ "./node_modules/@arcgis/core/views/webgl/getDataTypeBytes.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(e){const r=e.gl;switch(r.getError()){case r.NO_ERROR:return null;case r.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case r.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case r.INVALID_OPERATION:return"The specified command is not allowed for the current state";case r.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case r.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case r.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function i(e,r){return(e.vertexBuffers.get(r)?.usedMemory??0)/R(e.layout.get(r))}function R(e){return e[0].stride}function E(r,t,s,a,c=0){const i=r.gl;r.bindBuffer(s);for(const R of a){const s=t.get(R.name);if(null==s){console.warn(`There is no location for vertex attribute '${R.name}' defined.`);continue}const a=c*R.stride;if(R.count<=4)i.vertexAttribPointer(s,R.count,R.type,R.normalized,R.stride,R.offset+a),i.enableVertexAttribArray(s),R.divisor>0&&r.gl.vertexAttribDivisor(s,R.divisor);else if(9===R.count)for(let e=0;e<3;e++)i.vertexAttribPointer(s+e,3,R.type,R.normalized,R.stride,R.offset+12*e+a),i.enableVertexAttribArray(s+e),R.divisor>0&&r.gl.vertexAttribDivisor(s+e,R.divisor);else if(16===R.count)for(let e=0;e<4;e++)i.vertexAttribPointer(s+e,4,R.type,R.normalized,R.stride,R.offset+16*e+a),i.enableVertexAttribArray(s+e),R.divisor>0&&r.gl?.vertexAttribDivisor(s+e,R.divisor);else console.error("Unsupported vertex attribute element count: "+R.count);if((0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglDebugEnabled)()){const e=o(r),t=(0,_getDataTypeBytes_js__WEBPACK_IMPORTED_MODULE_3__.getDataTypeBytes)(R.type),s=R.offset,c=Math.round(t/s)!==t/s?`. Offset not a multiple of stride. DataType requires ${t} bytes, but descriptor has an offset of ${s}`:"";e&&console.error(`Unable to bind vertex attribute "${R.name}" with baseInstanceOffset ${a}${c}:`,e,R)}}}function _(e,t,s,a){const c=e.gl;e.bindBuffer(s);for(const r of a){const s=t.get(r.name);if(r.count<=4)c.disableVertexAttribArray(s),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(s,0);else if(9===r.count)for(let t=0;t<3;t++)c.disableVertexAttribArray(s+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(s+t,0);else if(16===r.count)for(let t=0;t<4;t++)c.disableVertexAttribArray(s+t),r.divisor&&r.divisor>0&&e.gl?.vertexAttribDivisor(s+t,0);else console.error("Unsupported vertex attribute element count: "+r.count)}e.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_2__.BufferType.ARRAY_BUFFER)}function u(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.LUMINANCE:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RED:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RED_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R8I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.STENCIL_INDEX8:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.LUMINANCE_ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RG:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RG_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA4:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R16F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R16I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG8I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB565:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB5_A1:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.DEPTH_COMPONENT16:return 2;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.DEPTH_COMPONENT:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGB:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGB_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB8I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.SRGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.DEPTH_COMPONENT24:return 3;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R32F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R11F_G11F_B10F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG16F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R32I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.R32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG16I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA8I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.SRGB8_ALPHA8:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB9_E5:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB10_A2UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB10_A2:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.DEPTH_COMPONENT32F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.DEPTH24_STENCIL8:return 4;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.RenderbufferFormat.DEPTH32F_STENCIL8:return 5;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB16F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB16I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB16UI:return 6;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG32F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG32I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RG32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA16F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA16I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA16UI:return 8;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB32F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB32I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGB32UI:return 12;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA32F:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA32I:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA32UI:return 16;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_SIGNED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_SRGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_SIGNED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_2__.CompressedTextureFormat.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatedTextureDescriptor: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextureDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/TextureDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a extends _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.TextureDescriptor{constructor(t,a){switch(super(),this.context=t,Object.assign(this,a),this.internalFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R16F:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R16I:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R32F:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R32I:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8I:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.SizedPixelFormat.R8UI:this.pixelFormat=_enums_js__WEBPACK_IMPORTED_MODULE_0__.PixelFormat.RED}}static validate(s,e){return new a(s,e)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/checkWebGLError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkWebGLError: function() { return /* binding */ u; },
/* harmony export */   hasFeatureFlagWebGLDebug: function() { return /* binding */ n; },
/* harmony export */   webglDebugEnabled: function() { return /* binding */ a; },
/* harmony export */   webglValidateShadersEnabled: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const n=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:webgl-debug");function a(){return n}function c(){return n}function u(r){if(a()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o().error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("webgl-error","WebGL error occurred",{message:a,stack:c}))}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeDoubleArray: function() { return /* binding */ n; },
/* harmony export */   encodeDoubleArray: function() { return /* binding */ t; },
/* harmony export */   encodeDoubleHi: function() { return /* binding */ o; },
/* harmony export */   encodeDoubleLo: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,n,o){for(let r=0;r<o;++r)n[2*r]=t[r],n[2*r+1]=t[r]-n[2*r]}function n(t,n,o){for(let r=0;r<o;++r)n[r]=t[2*r]+t[2*r+1]}function o(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],n[r]=e[0];return n}function r(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],e[1]=t[r]-e[0],n[r]=e[1];return n}const e=new Float32Array(2);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/enums.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendFactor: function() { return /* binding */ R; },
/* harmony export */   BlendOperation: function() { return /* binding */ T; },
/* harmony export */   BufferType: function() { return /* binding */ A; },
/* harmony export */   ClientWaitSyncStatus: function() { return /* binding */ i; },
/* harmony export */   ColorAttachment: function() { return /* binding */ X; },
/* harmony export */   CompareFunction: function() { return /* binding */ O; },
/* harmony export */   CompressedTextureFormat: function() { return /* binding */ c; },
/* harmony export */   CullMode: function() { return /* binding */ S; },
/* harmony export */   DataType: function() { return /* binding */ C; },
/* harmony export */   DepthStencilAttachment: function() { return /* binding */ t; },
/* harmony export */   Face: function() { return /* binding */ N; },
/* harmony export */   FramebufferBit: function() { return /* binding */ _; },
/* harmony export */   FramebufferTarget: function() { return /* binding */ n; },
/* harmony export */   PixelFormat: function() { return /* binding */ G; },
/* harmony export */   PixelType: function() { return /* binding */ U; },
/* harmony export */   PrimitiveType: function() { return /* binding */ E; },
/* harmony export */   RenderbufferFormat: function() { return /* binding */ B; },
/* harmony export */   ResourceType: function() { return /* binding */ V; },
/* harmony export */   ShaderType: function() { return /* binding */ H; },
/* harmony export */   SizedPixelFormat: function() { return /* binding */ P; },
/* harmony export */   SpecialDrawBuffers: function() { return /* binding */ f; },
/* harmony export */   StencilOperation: function() { return /* binding */ I; },
/* harmony export */   SyncCondition: function() { return /* binding */ r; },
/* harmony export */   SyncFlag: function() { return /* binding */ W; },
/* harmony export */   SyncParameter: function() { return /* binding */ u; },
/* harmony export */   SyncStatus: function() { return /* binding */ e; },
/* harmony export */   TextureSamplingMode: function() { return /* binding */ L; },
/* harmony export */   TextureType: function() { return /* binding */ M; },
/* harmony export */   TextureWrapMode: function() { return /* binding */ D; },
/* harmony export */   UniformType: function() { return /* binding */ o; },
/* harmony export */   Usage: function() { return /* binding */ F; },
/* harmony export */   baseTextureUnit: function() { return /* binding */ Y; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var _,E,R,T,A,N,S,C,O,I,L,D,M,G,P,U,B,F,H,n;!function(_){_[_.DEPTH=256]="DEPTH",_[_.STENCIL=1024]="STENCIL",_[_.COLOR=16384]="COLOR"}(_||(_={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_[_.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(A||(A={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(N||(N={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(S||(S={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT",_[_.HALF_FLOAT=5131]="HALF_FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(O||(O={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(I||(I={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(L||(L={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(D||(D={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(G||(G={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(P||(P={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(U||(U={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(B||(B={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(F||(F={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(H||(H={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(n||(n={}));const Y=33984;var V,X,f;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.TransformFeedback=7]="TransformFeedback",_[_.Sync=8]="Sync",_[_.UNCOUNTED=9]="UNCOUNTED",_[_.LinesOfCode=9]="LinesOfCode",_[_.Uniform=10]="Uniform",_[_.COUNT=11]="COUNT"}(V||(V={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(X||(X={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(f||(f={}));const t=33306;var c,o,u,e,i,r,W;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(c||(c={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(o||(o={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(u||(u={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(e||(e={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(i||(i={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(r||(r={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(W||(W={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/getDataTypeBytes.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/getDataTypeBytes.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataTypeBytes: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(s){switch(s){case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.BYTE:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_BYTE:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.SHORT:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_SHORT:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.HALF_FLOAT:return 2;case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.FLOAT:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.INT:case _enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_INT:return 4}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/renderState.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/renderState.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StateTracker: function() { return /* binding */ Q; },
/* harmony export */   backFaceCullingParams: function() { return /* binding */ d; },
/* harmony export */   blendWithPremultipliedAlpha: function() { return /* binding */ o; },
/* harmony export */   cullingParams: function() { return /* binding */ f; },
/* harmony export */   defaultColorWrite: function() { return /* binding */ g; },
/* harmony export */   defaultDepthWrite: function() { return /* binding */ p; },
/* harmony export */   frontFaceCullingParams: function() { return /* binding */ u; },
/* harmony export */   keepSourceValues: function() { return /* binding */ _; },
/* harmony export */   makeBlending: function() { return /* binding */ v; },
/* harmony export */   makeColorWrite: function() { return /* binding */ w; },
/* harmony export */   makeCulling: function() { return /* binding */ I; },
/* harmony export */   makeDepthTest: function() { return /* binding */ W; },
/* harmony export */   makeDepthWrite: function() { return /* binding */ T; },
/* harmony export */   makeDrawBuffers: function() { return /* binding */ A; },
/* harmony export */   makePipelineState: function() { return /* binding */ B; },
/* harmony export */   makePolygonOffset: function() { return /* binding */ S; },
/* harmony export */   makeStencilTest: function() { return /* binding */ b; },
/* harmony export */   makeStencilWrite: function() { return /* binding */ O; },
/* harmony export */   premultipliedAlphaToPremultipliedAlpha: function() { return /* binding */ c; },
/* harmony export */   separateBlendingParams: function() { return /* binding */ r; },
/* harmony export */   simpleBlendingParams: function() { return /* binding */ l; },
/* harmony export */   weightedAdd: function() { return /* binding */ h; },
/* harmony export */   writeDestinationPremultipliedAlpha: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../3d/webgl-engine/lib/basicInterfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l(t,e,i=_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendOperation.ADD,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function r(t,e,i,n,l=_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendOperation.ADD,r=_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendOperation.ADD,a=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:l,opAlpha:r,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}const a=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ZERO,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA),_=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ZERO),h=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE),o=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA),c=r(_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.SRC_ALPHA,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA,_enums_js__WEBPACK_IMPORTED_MODULE_1__.BlendFactor.ONE_MINUS_SRC_ALPHA),d={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__.Face.BACK,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__.CullMode.CCW},u={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__.Face.FRONT,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__.CullMode.CCW},f=e=>e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.CullFaceOptions.Back?d:e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__.CullFaceOptions.Front?u:null,p={zNear:0,zFar:1},g={r:!0,g:!0,b:!0,a:!0};function v(t){return R.intern(t)}function I(t){return N.intern(t)}function S(t){return P.intern(t)}function W(t){return k.intern(t)}function b(t){return F.intern(t)}function T(t){return L.intern(t)}function w(t){return U.intern(t)}function O(t){return K.intern(t)}function A(t){return x.intern(t)}function B(t){return G.intern(t)}class D{constructor(t,e){this._makeKey=t,this._makeRef=e,this._interns=new Map}intern(t){if(!t)return null;const e=this._makeKey(t),i=this._interns;return i.has(e)||i.set(e,this._makeRef(t)),i.get(e)??null}}function C(t){return"["+t.join(",")+"]"}const R=new D(y,(t=>({__tag:"Blending",...t})));function y(t){return t?C([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const N=new D(m,(t=>({__tag:"Culling",...t})));function m(t){return t?C([t.face,t.mode]):null}const P=new D(E,(t=>({__tag:"PolygonOffset",...t})));function E(t){return t?C([t.factor,t.units]):null}const k=new D(z,(t=>({__tag:"DepthTest",...t})));function z(t){return t?C([t.func]):null}const F=new D(H,(t=>({__tag:"StencilTest",...t})));function H(t){return t?C([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const L=new D(M,(t=>({__tag:"DepthWrite",...t})));function M(t){return t?C([t.zNear,t.zFar]):null}const U=new D(j,(t=>({__tag:"ColorWrite",...t})));function j(t){return t?C([t.r,t.g,t.b,t.a]):null}const K=new D(Z,(t=>({__tag:"StencilWrite",...t})));function Z(t){return t?C([t.mask]):null}const x=new D(q,(t=>({__tag:"DrawBuffers",...t})));function q(t){return t?C(t.buffers):null}const G=new D(J,(t=>({blending:v(t.blending),culling:I(t.culling),polygonOffset:S(t.polygonOffset),depthTest:W(t.depthTest),stencilTest:b(t.stencilTest),depthWrite:T(t.depthWrite),colorWrite:w(t.colorWrite),stencilWrite:O(t.stencilWrite),drawBuffers:A(t.drawBuffers)})));function J(t){return t?C([y(t.blending),m(t.culling),E(t.polygonOffset),z(t.depthTest),H(t.stencilTest),M(t.depthWrite),j(t.colorWrite),Z(t.stencilWrite),q(t.drawBuffers)]):null}class Q{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-graphics-objectResourceUtils.js.map