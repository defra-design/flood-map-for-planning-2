"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["loadGLTFMesh"],{

/***/ "./node_modules/@arcgis/core/chunks/mat3.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ e; },
/* harmony export */   m: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<9;++e)r[u+e]=d[l+e];u+=f,l+=n}}const t=Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/mat4.js":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ e; },
/* harmony export */   m: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<16;++e)r[u+e]=d[l+e];u+=f,l+=n}}const t=Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ "./node_modules/@arcgis/core/chunks/scalar.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/scalar.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ e; },
/* harmony export */   s: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}const t=Object.freeze(Object.defineProperty({__proto__:null,makeDense:e},Symbol.toStringTag,{value:"Module"}));


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

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/utils.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBuffer: function() { return /* binding */ r; },
/* harmony export */   mat3: function() { return /* reexport safe */ _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.m; },
/* harmony export */   mat4: function() { return /* reexport safe */ _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.m; },
/* harmony export */   scalar: function() { return /* reexport safe */ _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__.s; },
/* harmony export */   vec2: function() { return /* reexport safe */ _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__.v; },
/* harmony export */   vec3: function() { return /* reexport safe */ _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__.v; },
/* harmony export */   vec4: function() { return /* reexport safe */ _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__.v; }
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/@arcgis/core/geometry/support/buffer/types.js");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "./node_modules/@arcgis/core/chunks/mat3.js");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat4.js */ "./node_modules/@arcgis/core/chunks/mat4.js");
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/scalar.js */ "./node_modules/@arcgis/core/chunks/scalar.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "./node_modules/@arcgis/core/chunks/vec2.js");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec33.js */ "./node_modules/@arcgis/core/chunks/vec33.js");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/vec43.js */ "./node_modules/@arcgis/core/chunks/vec43.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*(0,_types_js__WEBPACK_IMPORTED_MODULE_0__.elementTypeSize)(s.ElementType)))}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGLTFMesh: function() { return /* binding */ K; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MeshComponent.js */ "./node_modules/@arcgis/core/geometry/support/MeshComponent.js");
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MeshMaterialMetallicRoughness.js */ "./node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js");
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../MeshTexture.js */ "./node_modules/@arcgis/core/geometry/support/MeshTexture.js");
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MeshTextureTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js");
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MeshVertexAttributes.js */ "./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/* harmony import */ var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../buffer/utils.js */ "./node_modules/@arcgis/core/geometry/support/buffer/utils.js");
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vertexSpaceConversion.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js");
/* harmony import */ var _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../views/3d/glTF/DefaultLoadingContext.js */ "./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js");
/* harmony import */ var _views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../views/3d/glTF/loader.js */ "./node_modules/@arcgis/core/views/3d/glTF/loader.js");
/* harmony import */ var _views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../views/3d/glTF/internal/indexUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js");
/* harmony import */ var _views_3d_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../views/3d/glTF/internal/resourceUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js");
/* harmony import */ var _views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js");
/* harmony import */ var _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../views/webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../chunks/vec33.js */ "./node_modules/@arcgis/core/chunks/vec33.js");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../chunks/vec43.js */ "./node_modules/@arcgis/core/chunks/vec43.js");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "./node_modules/@arcgis/core/chunks/vec2.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function K(e,t,o){const n=new _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_20__.DefaultLoadingContext(Q(o)),s=(await (0,_views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_21__.loadGLTF)(n,t,o,!0)).model,a=s.lods.shift(),i=new Map,l=new Map;s.textures.forEach(((e,t)=>i.set(t,X(e)))),s.materials.forEach(((e,t)=>l.set(t,Y(e,i))));const c=W(a);for(const r of c.parts)Z(c,r,l);const{position:u,normal:f,tangent:m,color:p,texCoord0:d}=c.vertexAttributes,h=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_14__.selectVertexSpace)(e,o),T=e.spatialReference.isGeographic?(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_14__.selectVertexSpace)(e):h,v=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_19__.convertVertexSpace)({vertexAttributes:{position:u.typedBuffer,normal:f?.typedBuffer,tangent:m?.typedBuffer},vertexSpace:T,spatialReference:e.spatialReference},h,{allowBufferReuse:!0,sourceUnit:o?.unitConversionDisabled?void 0:"meters"});if(!v)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${T.type} to ${h.type}`);return{transform:null,vertexSpace:h,components:c.components,spatialReference:e.spatialReference,vertexAttributes:new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_13__.MeshVertexAttributes({...v,color:p?.typedBuffer,uv:d?.typedBuffer})}}function Q(e){const r=e?.resolveFile;return r?{busy:!1,request:async(e,o,n)=>{const s=r?.(e)??e,a="image"===o?"image":"binary"===o||"image+type"===o?"array-buffer":"json";return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,{responseType:a,signal:n?.signal,timeout:0})).data}}:null}function H(e,t){if(null==e)return"-";const r=e.typedBuffer;return`${(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__.getOrCreateMapValue)(t,r.buffer,(()=>t.size))}/${r.byteOffset}/${r.byteLength}`}function J(e){return null!=e?e.toString():"-"}function W(e){let t=0;const has={color:!1,tangent:!1,normal:!1,texCoord0:!1},r=new Map,n=new Map,s=[];for(const a of e.parts){const{attributes:{position:e,normal:i,color:l,tangent:c,texCoord0:u}}=a,f=`\n      ${H(e,r)}/\n      ${H(i,r)}/\n      ${H(l,r)}/\n      ${H(c,r)}/\n      ${H(u,r)}/\n      ${J(a.transform)}\n    `;let m=!1;const p=(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__.getOrCreateMapValue)(n,f,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),i&&(has.normal=!0),l&&(has.color=!0),c&&(has.tangent=!0),u&&(has.texCoord0=!0),s.push({gltf:a,writeVertices:m,region:p})}return{vertexAttributes:{position:(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_18__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec3f64,t),normal:has.normal?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_18__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec3f,t):null,tangent:has.tangent?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_18__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec4f,t):null,color:has.color?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_18__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec4u8,t):null,texCoord0:has.texCoord0?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_18__.createBuffer)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec2f,t):null},parts:s,components:[]}}function X(e){return new _MeshTexture_js__WEBPACK_IMPORTED_MODULE_11__["default"]({data:((0,_views_3d_glTF_internal_resourceUtils_js__WEBPACK_IMPORTED_MODULE_23__.isEncodedMeshTexture)(e.data),e.data),wrap:re(e.parameters.wrap)})}function Y(t,r){const o=new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](se(t.color,t.opacity)),n=t.emissiveFactor?new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](ae(t.emissiveFactor)):null,a=e=>e?new _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_12__["default"]({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.rad2deg)(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_10__["default"]({color:o,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:n,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:te(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:a(t.colorTextureTransform),normalTextureTransform:a(t.normalTextureTransform),occlusionTextureTransform:a(t.occlusionTextureTransform),emissiveTextureTransform:a(t.emissiveTextureTransform),metallicRoughnessTextureTransform:a(t.metallicRoughnessTextureTransform)})}function Z(e,t,r){t.writeVertices&&ee(e,t);const{indices:o,attributes:n,primitiveType:s,material:a}=t.gltf;let i=(0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_22__.convertPrimitiveToTriangles)(o||n.position.count,s);const l=t.region.start;if(l){const e=new Uint32Array(i);for(let t=0;t<i.length;t++)e[t]+=l;i=e}e.components.push(new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_9__["default"]({name:t.gltf.name,faces:i,material:r.get(a),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function ee(e,t){const{position:r,normal:o,tangent:s,color:c,texCoord0:u}=e.vertexAttributes,f=t.region.start,{attributes:m,transform:p}=t.gltf,d=m.position.count;if((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_16__.d)(r.slice(f,d),m.position,p),null!=m.normal&&null!=o){const e=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_5__.normalFromMat4)((0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),p),t=o.slice(f,d);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_16__.c)(t,m.normal,e),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.hasScaling)(e)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_16__.e)(t,t)}else null!=o&&(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_26__.f)(o,0,0,1,{dstIndex:f,count:d});if(null!=m.tangent&&null!=s){const e=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_5__.fromMat4)((0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),p),t=s.slice(f,d);(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_17__.a)(t,m.tangent,e),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__.hasScaling)(e)&&(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_17__.n)(t,t)}else null!=s&&(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_27__.f)(s,0,0,1,1,{dstIndex:f,count:d});if(null!=m.texCoord0&&null!=u?(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_28__.n)(u.slice(f,d),m.texCoord0):null!=u&&(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_28__.f)(u,0,0,{dstIndex:f,count:d}),null!=m.color&&null!=c){const e=m.color,t=c.slice(f,d);if(4===e.elementCount)e instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec4f?(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_17__.s)(t,e,255):e instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec4u8?(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_27__.c)(t,e):e instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec4u16&&(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_17__.s)(t,e,1/256);else{(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_27__.f)(t,255,255,255,255);const r=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec3u8.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec3f?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_16__.s)(r,e,255):e instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec3u8?(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_26__.a)(r,e):e instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_15__.BufferViewVec3u16&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_16__.s)(r,e,1/256)}}else null!=c&&(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_27__.f)(c.slice(f,d),255,255,255,255)}function te(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function re(e){return{horizontal:oe(e.s),vertical:oe(e.t)}}function oe(e){switch(e){case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_25__.TextureWrapMode.CLAMP_TO_EDGE:return"clamp";case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_25__.TextureWrapMode.MIRRORED_REPEAT:return"mirror";case _views_webgl_enums_js__WEBPACK_IMPORTED_MODULE_25__.TextureWrapMode.REPEAT:return"repeat"}}function ne(e){return e**(1/_views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_24__.colorGamma)*255}function se(e,t){return (0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_8__.fromValues)(ne(e[0]),ne(e[1]),ne(e[2]),t)}function ae(e){return (0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.fromValues)(ne(e[0]),ne(e[1]),ne(e[2]))}


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

/***/ "./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeMaterialParameters: function() { return /* binding */ r; },
/* harmony export */   makeTextureSource: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l(r,l={}){return{data:r,parameters:{wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureWrapMode.REPEAT,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.TextureWrapMode.REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinaryStreamReader: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const s=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,s,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GLTFResource: function() { return /* binding */ Y; },
/* harmony export */   transformGltfToEngine: function() { return /* binding */ q; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/Version.js */ "./node_modules/@arcgis/core/core/Version.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/scalar.js */ "./node_modules/@arcgis/core/chunks/scalar.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BinaryStreamReader.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/enums.js");
/* harmony import */ var _fillDefaults_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fillDefaults.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js");
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pathUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js");
/* harmony import */ var _resourceUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resourceUtils.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const k={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class Y{constructor(t,r,o,n){if(this._context=t,this.uri=r,this.json=o,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=(0,_pathUtils_js__WEBPACK_IMPORTED_MODULE_16__.splitURI)(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==o.scenes)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==o.meshes)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Meshes must be defined");if(null==o.nodes)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(t,r,o){if((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.isDataProtocol)(r)){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.dataComponents)(r);if(e&&"model/gltf-binary"!==e.mediaType)try{const o=JSON.parse(e.isBase64?atob(e.data):e.data);return new Y(t,r,o)}catch{}const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.dataToArrayBuffer)(r);if(Y._isGLBData(o))return this._fromGLBData(t,r,o)}if(ee.test(r)||"gltf"===o?.expectedType){const e=await t.loadJSON(r,o);return new Y(t,r,e)}const i=await t.loadBinary(r,o);if(Y._isGLBData(i))return this._fromGLBData(t,r,i);if(te.test(r)||"glb"===o?.expectedType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-invalid-glb","This is not a valid glb file.");const u=await t.loadJSON(r,o);return new Y(t,r,u)}static _isGLBData(e){if(null==e)return!1;const t=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_13__.BinaryStreamReader(e);return t.remainingBytes()>=4&&t.readUint32()===k.MAGIC}static async _fromGLBData(e,t,r){const o=await Y._parseGLBData(r);return new Y(e,t,o.json,o.binaryData)}static async _parseGLBData(r){const o=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_13__.BinaryStreamReader(r);if(o.remainingBytes()<12)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","glb binary data is insufficiently large.");const n=o.readUint32(),s=o.readUint32(),a=o.readUint32();if(n!==k.MAGIC)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(r.byteLength<a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let i,u,f=0;for(;o.remainingBytes()>=8;){const r=o.readUint32(),n=o.readUint32();if(0===f){if(n!==k.CHUNK_TYPE_JSON)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","First glb chunk must be JSON.");if(r<0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","No JSON data found.");i=await (0,_resourceUtils_js__WEBPACK_IMPORTED_MODULE_17__.jsonFromBinaryData)(o.readUint8Array(r))}else if(1===f){if(n!==k.CHUNK_TYPE_BIN)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");u=o.readUint8Array(r)}else _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1}if(!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","No glb JSON chunk detected.");return{json:i,binaryData:u}}async getBuffer(t,r){const o=this.json.buffers[t];if(null==o.uri){if(null==this._glbBuffer)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(t,r);if(n.byteLength!==o.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(t,r){if(!this.json.accessors)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Accessors missing.");const o=this.json.accessors[t];if(null==o?.bufferView)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(o.type in[_enums_js__WEBPACK_IMPORTED_MODULE_14__.AttributeType.MAT2,_enums_js__WEBPACK_IMPORTED_MODULE_14__.AttributeType.MAT3,_enums_js__WEBPACK_IMPORTED_MODULE_14__.AttributeType.MAT4])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature",`AttributeType ${o.type} is not supported`);const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,r),a=X[o.type],i=$[o.componentType],u=a*i,f=n.byteStride||u;return{raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(n.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:f===u,componentCount:a,componentByteSize:i,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_BYTE:return (0,_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_11__.m)(Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewUint8,r));case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_SHORT:return (0,_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_11__.m)(Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewUint16,r));case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_INT:return (0,_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_11__.m)(Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewUint32,r))}}async getPositionData(t,r){if(null==t.attributes.POSITION)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","No POSITION vertex data found.");const o=await this.getAccessor(t.attributes.POSITION,r);if(o.componentType!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType[o.componentType]);if(3!==o.componentCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec3f,o)}async getNormalData(t,r){if(null==t.attributes.NORMAL)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","No NORMAL vertex data found.");const o=await this.getAccessor(t.attributes.NORMAL,r);if(o.componentType!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType[o.componentType]);if(3!==o.componentCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec3f,o)}async getTangentData(t,r){if(null==t.attributes.TANGENT)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","No TANGENT vertex data found.");const o=await this.getAccessor(t.attributes.TANGENT,r);if(o.componentType!==_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType[o.componentType]);if(4!==o.componentCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed());return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec4f,o)}async getTextureCoordinates(t,r){if(null==t.attributes.TEXCOORD_0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);if(2!==o.componentCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed());if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2f,o);if(!o.normalized)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return W(o)}async getVertexColors(t,r){if(null==t.attributes.COLOR_0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error","No COLOR_0 vertex data found.");const o=await this.getAccessor(t.attributes.COLOR_0,r);if(4!==o.componentCount&&3!==o.componentCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed());if(4===o.componentCount){if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec4f,o);if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_BYTE)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec4u8,o);if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_SHORT)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec4u16,o)}else if(3===o.componentCount){if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec3f,o);if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_BYTE)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec3u8,o);if(o.componentType===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_SHORT)return Q(_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec3u16,o)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const n=null!=e.material?(0,_fillDefaults_js__WEBPACK_IMPORTED_MODULE_15__.material)(this.json.materials[e.material]):(0,_fillDefaults_js__WEBPACK_IMPORTED_MODULE_15__.material)(),s=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),f=r?this.getTexture(n.occlusionTexture,t):void 0,l=r?this.getTexture(n.emissiveTexture,t):void 0,d=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,c=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:s.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:c,occlusionTexture:await f,emissiveTexture:await l,emissiveFactor:n.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:n.extras.ESRI_receiveAmbientOcclusion,receiveShadows:n.extras.ESRI_receiveShadows}}return o}async getTexture(t,o){if(!t)return;if(0!==(t.texCoord||0))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const n=t.index,s=this.json.textures[n],a=(0,_fillDefaults_js__WEBPACK_IMPORTED_MODULE_15__.textureSampler)(null!=s.sampler?this.json.samplers[s.sampler]:{}),i=Z(s),u=this.json.images[i],f=await this._loadTextureImageData(n,s,o);return (0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(this._textureCache,n,(()=>{const t=e=>33071===e||33648===e||10497===e,r=t=>{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return{data:f,wrapS:t(a.wrapS)?a.wrapS:r(a.wrapS),wrapT:t(a.wrapT)?a.wrapT:r(a.wrapT),minFilter:a.minFilter,name:u.name,id:n}}))}getNodeTransform(e){if(void 0===e)return q;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__.multiply)((0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__.create)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__.clone)(r),o.translation&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__.translate)(t,t,o.translation),o.rotation&&(z[3]=(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_8__.getAxisAngle)(z,o.rotation),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__.rotate)(t,t,z[3],z)),o.scale&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__.scale)(t,t,o.scale)):t=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__.clone)(r),this._nodeTransformCache.set(e,t)}return t}_resolveUri(e){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.makeAbsolute)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=_core_Version_js__WEBPACK_IMPORTED_MODULE_5__.Version.parse(this.json.asset.version,"glTF");J.validate(e)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}async _createTextureLoader(t,r){const o=Z(t),n=this.json.images[o];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),r);return new _resourceUtils_js__WEBPACK_IMPORTED_MODULE_17__.EncodedMeshTexture(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(null==n.bufferView)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(null!=s.byteStride)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return (0,_resourceUtils_js__WEBPACK_IMPORTED_MODULE_17__.imageFromBinaryData)(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.allSettledValues)(Array.from(this._bufferLoaders.values())),t=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.allSettledValues)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?(0,_resourceUtils_js__WEBPACK_IMPORTED_MODULE_17__.isEncodedMeshTexture)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const q=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__.fromXRotation)((0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__.create)(),Math.PI/2),J=new _core_Version_js__WEBPACK_IMPORTED_MODULE_5__.Version(2,0,"glTF"),z=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),X={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$={[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.BYTE]:1,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_BYTE]:1,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.SHORT]:2,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_SHORT]:2,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.HALF_FLOAT]:2,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT]:4,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.INT]:4,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_INT]:4};function W(e){switch(e.componentType){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.BYTE:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2i8(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_BYTE:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2u8(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.SHORT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2i16(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_SHORT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2u16(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.UNSIGNED_INT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2u32(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_18__.DataType.FLOAT:return new _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__.BufferViewVec2f(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}function Q(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}function Z(t){if(null!=t.extensions?.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const ee=/\.gltf$/i,te=/\.glb$/i;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/enums.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/enums.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeType: function() { return /* binding */ A; },
/* harmony export */   BufferViewTarget: function() { return /* binding */ E; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var A,E;!function(A){A.SCALAR="SCALAR",A.VEC2="VEC2",A.VEC3="VEC3",A.VEC4="VEC4",A.MAT2="MAT2",A.MAT3="MAT3",A.MAT4="MAT4"}(A||(A={})),function(A){A[A.ARRAY_BUFFER=34962]="ARRAY_BUFFER",A[A.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   material: function() { return /* binding */ i; },
/* harmony export */   textureSampler: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},l={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},i=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...l,...e.extras});return{...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const c={magFilter:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureSamplingMode.LINEAR,minFilter:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,wrapS:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureWrapMode.REPEAT,wrapT:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__.TextureWrapMode.REPEAT},n=e=>({...c,...e});


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

/***/ "./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitURI: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}


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

/***/ "./node_modules/@arcgis/core/views/3d/glTF/loader.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/loader.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadGLTF: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _LoaderResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoaderResult.js */ "./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js");
/* harmony import */ var _internal_Resource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/Resource.js */ "./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n=0;async function l(o,r,a={},l=!0){const m=await _internal_Resource_js__WEBPACK_IMPORTED_MODULE_3__.GLTFResource.load(o,r,a),p="gltf_"+n++,T={lods:[],materials:new Map,textures:new Map,meta:u(m)},f=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),x=m.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,g=new Map;await c(m,(async(o,r,s,n)=>{const u=g.get(s)??0;g.set(s,u+1);const c=void 0!==o.mode?o.mode:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.PrimitiveType.TRIANGLES,f=c===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.PrimitiveType.TRIANGLES||c===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.PrimitiveType.TRIANGLE_STRIP||c===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.PrimitiveType.TRIANGLE_FAN?c:null;if(null==f)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.PrimitiveType[c]+"). Skipping primitive.");if(!m.hasPositions(o))return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const x=m.getPositionData(o,a),h=m.getMaterial(o,a,l),w=m.hasNormals(o)?m.getNormalData(o,a):null,v=m.hasTangents(o)?m.getTangentData(o,a):null,S=m.hasTextureCoordinates(o)?m.getTextureCoordinates(o,a):null,R=m.hasVertexColors(o)?m.getVertexColors(o,a):null,_=m.getIndexData(o,a),E={name:n,transform:(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.clone)(r),attributes:{position:await x,normal:w?await w:null,texCoord0:S?await S:null,color:R?await R:null,tangent:v?await v:null},indices:await _,primitiveType:f,material:d(T,await h,p)};let I=null;null!=T.meta?.ESRI_lod&&"screenSpaceRadius"===T.meta.ESRI_lod.metric&&(I=T.meta.ESRI_lod.thresholds[s]),T.lods[s]=T.lods[s]||{parts:[],name:n,lodThreshold:I},T.lods[s].parts[u]=E}));for(const e of T.lods)e.parts=e.parts.filter((e=>!!e));const h=await m.getLoadedBuffersSize();return{model:T,meta:{isEsriSymbolResource:f,uri:m.uri,ESRI_webstyle:x},customMeta:{},size:h}}function u(e){const t=e.json;let o=null;return t.nodes.forEach((e=>{const t=e.extras;null!=t&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(o=t)})),o}async function c(t,o){const r=t.json,s=r.scenes[r.scene||0].nodes,a=s.length>1,i=[];for(const e of s){const t=r.nodes[e];if(i.push(n(e,0)),m(t)&&!a){t.extensions.MSFT_lod.ids.forEach(((e,t)=>n(e,t+1)))}}async function n(s,a){const l=r.nodes[s],u=t.getNodeTransform(s);if(null!=l.weights&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=l.mesh){const e=r.meshes[l.mesh];for(const t of e.primitives)i.push(o(t,u,a,e.name))}for(const e of l.children||[])i.push(n(e,a))}await Promise.all(i)}function m(e){return e.extensions?.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,t,s){const a=t=>{const o=`${s}_tex_${t&&t.id}${t?.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const s=(0,_LoaderResult_js__WEBPACK_IMPORTED_MODULE_2__.makeTextureSource)(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:p.has(t.minFilter),noUnpackFlip:!0});e.textures.set(o,s)}return o},i=`${s}_mat_${t.id}_${t.name}`;if(!e.materials.has(i)){const r=(0,_LoaderResult_js__WEBPACK_IMPORTED_MODULE_2__.makeMaterialParameters)({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?a(t.colorTexture):void 0,textureNormal:t.normalTexture?a(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?a(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?a(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?a(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor,receiveShadows:t.receiveShadows,receiveAmbientOcclustion:t.receiveAmbientOcclusion});e.materials.set(i,r)}return i}const p=new Set([_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__.TextureSamplingMode.LINEAR_MIPMAP_NEAREST]);


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


/***/ })

}]);
//# sourceMappingURL=loadGLTFMesh.js.map