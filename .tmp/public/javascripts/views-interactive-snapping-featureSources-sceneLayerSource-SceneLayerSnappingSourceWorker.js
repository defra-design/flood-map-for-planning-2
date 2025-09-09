"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["views-interactive-snapping-featureSources-sceneLayerSource-SceneLayerSnappingSourceWorker"],{

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

/***/ "./node_modules/@arcgis/core/geometry/support/clipRay.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/clipRay.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copy: function() { return /* binding */ s; },
/* harmony export */   create: function() { return /* binding */ a; },
/* harmony export */   fromLineSegmentAndDirection: function() { return /* binding */ m; },
/* harmony export */   fromRay: function() { return /* binding */ y; },
/* harmony export */   fromValues: function() { return /* binding */ f; },
/* harmony export */   getAt: function() { return /* binding */ j; },
/* harmony export */   getEnd: function() { return /* binding */ g; },
/* harmony export */   getStart: function() { return /* binding */ p; },
/* harmony export */   wrap: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ray.js */ "./node_modules/@arcgis/core/geometry/support/ray.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(r){return r?{ray:(0,_ray_js__WEBPACK_IMPORTED_MODULE_2__.create)(r.ray),c0:r.c0,c1:r.c1}:{ray:(0,_ray_js__WEBPACK_IMPORTED_MODULE_2__.create)(),c0:0,c1:Number.MAX_VALUE}}function i(r,c,n){const t=A.get();return t.ray=r,t.c0=c,t.c1=n,t}function s(r,c=a()){return f(r.ray,r.c0,r.c1,c)}function f(r,c,n,t=a()){return (0,_ray_js__WEBPACK_IMPORTED_MODULE_2__.copy)(r,t.ray),t.c0=c,t.c1=n,t}function y(r,c=a()){return (0,_ray_js__WEBPACK_IMPORTED_MODULE_2__.copy)(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function m(r,n,t=a()){const o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(r.vector);return (0,_ray_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(r.origin,n,t.ray),t.c0=0,t.c1=o,t}function p(r,c){return j(r,r.c0,c)}function g(r,c){return j(r,r.c1,c)}function j(r,c,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(o,r.ray.origin,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(o,r.ray.direction,c))}const A=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack((()=>a()));


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/frustum.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/frustum.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaneIndex: function() { return /* binding */ j; },
/* harmony export */   PointIndex: function() { return /* binding */ g; },
/* harmony export */   computePlanes: function() { return /* binding */ P; },
/* harmony export */   copy: function() { return /* binding */ N; },
/* harmony export */   create: function() { return /* binding */ H; },
/* harmony export */   createPoints: function() { return /* binding */ I; },
/* harmony export */   fromMatrix: function() { return /* binding */ L; },
/* harmony export */   intersectClipRay: function() { return /* binding */ m; },
/* harmony export */   intersectsLineSegment: function() { return /* binding */ a; },
/* harmony export */   intersectsPoint: function() { return /* binding */ l; },
/* harmony export */   intersectsRay: function() { return /* binding */ u; },
/* harmony export */   intersectsSphere: function() { return /* binding */ s; },
/* harmony export */   numPlanes: function() { return /* binding */ b; },
/* harmony export */   numPoints: function() { return /* binding */ h; },
/* harmony export */   planePointIndices: function() { return /* binding */ v; }
/* harmony export */ });
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ObjectStack.js */ "./node_modules/@arcgis/core/core/ObjectStack.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _clipRay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clipRay.js */ "./node_modules/@arcgis/core/geometry/support/clipRay.js");
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plane.js */ "./node_modules/@arcgis/core/geometry/support/plane.js");
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vectorStacks.js */ "./node_modules/@arcgis/core/geometry/support/vectorStacks.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function H(T){return T?[(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(T[0]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(T[1]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(T[2]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(T[3]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(T[4]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(T[5])]:[(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.create)()]}function I(){return[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)()]}function N(T,_){for(let O=0;O<b;O++)(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.copy)(T[O],_[O]);return T}function L(T,t,A,E=y){const F=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.multiply)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_8__.sm4d.get(),t,T);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.invert)(F,F);for(let _=0;_<h;++_){const T=(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.t)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_8__.sv4d.get(),k[_],F);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(E[_],T[0]/T[3],T[1]/T[3],T[2]/T[3])}P(A,E)}function P(T,_){(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.fromPoints)(_[g.FAR_BOTTOM_LEFT],_[g.NEAR_BOTTOM_LEFT],_[g.NEAR_TOP_LEFT],T[j.LEFT]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.fromPoints)(_[g.NEAR_BOTTOM_RIGHT],_[g.FAR_BOTTOM_RIGHT],_[g.FAR_TOP_RIGHT],T[j.RIGHT]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.fromPoints)(_[g.FAR_BOTTOM_LEFT],_[g.FAR_BOTTOM_RIGHT],_[g.NEAR_BOTTOM_RIGHT],T[j.BOTTOM]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.fromPoints)(_[g.NEAR_TOP_LEFT],_[g.NEAR_TOP_RIGHT],_[g.FAR_TOP_RIGHT],T[j.TOP]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.fromPoints)(_[g.NEAR_BOTTOM_LEFT],_[g.NEAR_BOTTOM_RIGHT],_[g.NEAR_TOP_RIGHT],T[j.NEAR]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.fromPoints)(_[g.FAR_BOTTOM_RIGHT],_[g.FAR_BOTTOM_LEFT],_[g.FAR_TOP_LEFT],T[j.FAR])}function s(T,_){for(let O=0;O<b;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return!1}return!0}function u(T,_){return p(T,(0,_clipRay_js__WEBPACK_IMPORTED_MODULE_6__.fromRay)(_,x.get()))}function m(T,_){for(let O=0;O<b;O++){const R=T[O];if(!(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.clipInfinite)(R,_))return!1}return!0}function a(T,_,O){return p(T,(0,_clipRay_js__WEBPACK_IMPORTED_MODULE_6__.fromLineSegmentAndDirection)(_,O,x.get()))}function l(T,_){for(let O=0;O<b;O++){if((0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.signedDistance)(T[O],_)>0)return!1}return!0}function p(T,_){for(let O=0;O<b;O++)if(!(0,_plane_js__WEBPACK_IMPORTED_MODULE_7__.clip)(T[O],_))return!1;return!0}var j,g;!function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR"}(j||(j={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(g||(g={}));const v={bottom:[g.FAR_BOTTOM_RIGHT,g.NEAR_BOTTOM_RIGHT,g.NEAR_BOTTOM_LEFT,g.FAR_BOTTOM_LEFT],near:[g.NEAR_BOTTOM_LEFT,g.NEAR_BOTTOM_RIGHT,g.NEAR_TOP_RIGHT,g.NEAR_TOP_LEFT],far:[g.FAR_BOTTOM_RIGHT,g.FAR_BOTTOM_LEFT,g.FAR_TOP_LEFT,g.FAR_TOP_RIGHT],right:[g.NEAR_BOTTOM_RIGHT,g.FAR_BOTTOM_RIGHT,g.FAR_TOP_RIGHT,g.NEAR_TOP_RIGHT],left:[g.FAR_BOTTOM_LEFT,g.NEAR_BOTTOM_LEFT,g.NEAR_TOP_LEFT,g.FAR_TOP_LEFT],top:[g.FAR_TOP_LEFT,g.NEAR_TOP_LEFT,g.NEAR_TOP_RIGHT,g.FAR_TOP_RIGHT]},b=6,h=8,k=[(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(-1,-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(1,-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(1,1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(-1,1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(-1,-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(1,-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(1,1,1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.fromValues)(-1,1,1,1)],x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_0__.ObjectStack(_clipRay_js__WEBPACK_IMPORTED_MODULE_6__.create),y=I();


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

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deduplicate: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Indices.js */ "./node_modules/@arcgis/core/geometry/support/Indices.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,s,u){const c=Array.isArray(e),a=c?e.length/s:e.byteLength/(4*s),h=c?e:new Uint32Array(e,0,a*s),y=u?.minReduction??0,A=u?.originalIndices||null,g=A?A.length:0,m=u?.componentOffsets||null;let w=0;if(m)for(let t=0;t<m.length-1;t++){const n=m[t+1]-m[t];n>w&&(w=n)}else w=a;const U=Math.floor(1.1*w)+1;(null==i||i.length<2*U)&&(i=new Uint32Array((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.nextHighestPowerOfTwo)(2*U)));for(let t=0;t<2*U;t++)i[t]=0;let b=0;const d=!!m&&!!A,p=d?g:a;let M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__.newIndexArray)(a);const j=new Uint32Array(g),q=1.96;let I=0!==y?Math.ceil(4*q*q/(y*y)*y*(1-y)):p,k=1,x=m?m[1]:p;for(let t=0;t<p;t++){if(t===I){const n=1-b/t;if(n+q*Math.sqrt(n*(1-n)/t)<y)return null;I*=2}if(t===x){for(let t=0;t<2*U;t++)i[t]=0;if(A)for(let t=m[k-1];t<m[k];t++)j[t]=M[A[t]];x=m[++k]}const n=d?A[t]:t,r=n*s,e=f(h,r,s);let o=e%U,u=b;for(;0!==i[2*o+1];){if(i[2*o]===e){const t=i[2*o+1]-1;if(l(h,r,t*s,s)){u=M[t];break}}o++,o>=U&&(o-=U)}u===b&&(i[2*o]=e,i[2*o+1]=n+1,b++),M[n]=u}if(0!==y&&1-b/a<y)return null;if(d){for(let t=m[k-1];t<j.length;t++)j[t]=M[A[t]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__.compactIndices)(j)}const C=c?new Array(b):new Uint32Array(b*s);b=0;for(let t=0;t<p;t++)if(M[t]===b){o(h,(d?A[t]:t)*s,C,b*s,s),b++}if(A&&!d){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=M[A[n]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__.compactIndices)(t)}return{buffer:Array.isArray(C)?C:C.buffer,indices:M,uniqueCount:b}}function l(t,n,r,e){for(let l=0;l<e;l++)if(t[n+l]!==t[r+l])return!1;return!0}function o(t,n,r,e,l){for(let o=0;o<l;o++)r[e+o]=t[n+o]}function f(t,n,r){let e=0;for(let l=0;l<r;l++)e=t[n+l]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let i=null;


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

/***/ "./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glLayout: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(e,t=0){const n=e.stride;return Array.from(e.fields.keys()).map((s=>{const i=e.fields.get(s),u=i.constructor.ElementCount,f=o(i.constructor.ElementType),c=i.offset,m=i.optional?.glNormalized??!1;return new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.VertexElementDescriptor(s,u,f,c,n,m,t)}))}function o(e){const r=n[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}const n={u8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_BYTE,u16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_SHORT,u32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_INT,i8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.BYTE,i16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.SHORT,i32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.INT,f32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.FLOAT};


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

/***/ "./node_modules/@arcgis/core/views/3d/support/meshProcessing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/meshProcessing.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeNeighbors: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o)}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n}else{const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x)}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++)}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++}}return A}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compressAndTransformNormals: function() { return /* binding */ c; },
/* harmony export */   compressNormal: function() { return /* binding */ s; },
/* harmony export */   compressNormals: function() { return /* binding */ e; },
/* harmony export */   decodeInt16: function() { return /* binding */ u; },
/* harmony export */   decompressNormal: function() { return /* binding */ f; },
/* harmony export */   decompressNormals: function() { return /* binding */ h; },
/* harmony export */   encodeInt16: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/FloatArray.js */ "./node_modules/@arcgis/core/geometry/support/FloatArray.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(t,n,r,o,a,s=2){const e=1/(Math.abs(r)+Math.abs(o)+Math.abs(a)),c=r*e,f=o*e,h=a<=0?(c>=0?1:-1)*(1-Math.abs(f)):c,u=a<=0?(f>=0?1:-1)*(1-Math.abs(c)):f,l=n*s;t[l]=i(h),t[l+1]=i(u)}function e(t){const n=t.length/3,r=new Int16Array(2*n);let o=0;for(let a=0;a<n;++a)s(r,a,t[o++],t[o++],t[o++]);return r}function c(t,r){const a=t.length/3,e=new Int16Array(2*a);let c=0;const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();for(let o=0;o<a;++o)f[0]=t[c++],f[1]=t[c++],f[2]=t[c++],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.q)(f,f,r),s(e,o,f[0],f[1],f[2]);return e}function f(t,n,o,a=2){const s=o*a,e=u(n[s]),c=u(n[s+1]),f=1-Math.abs(e)-Math.abs(c);t[2]=f,f<0?(t[0]=(e>=0?1:-1)*(1-Math.abs(c)),t[1]=(c>=0?1:-1)*(1-Math.abs(e))):(t[0]=e,t[1]=c),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(t,t)}function h(t,n=2){const r=t.length/n,s=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_3__.newFloatArray)(3*r),e=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();let c=0;for(let o=0;o<r;++o)f(e,t,o,n),s[c++]=e[0],s[c++]=e[1],s[c++]=e[2];return s}function i(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(32767*n),-32767,32767)}function u(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(n/32767,-1,1)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Y; }
/* harmony export */ });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "./node_modules/@arcgis/core/core/ObjectPool.js");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/support/frustum.js */ "./node_modules/@arcgis/core/geometry/support/frustum.js");
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/support/ray.js */ "./node_modules/@arcgis/core/geometry/support/ray.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),g.clearPool(),k[0]=null,K.prune(),Q.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=g.acquire();for(let o=0;o<e;o++){const e=t[o];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}g.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=g.acquire();for(const o of t){const t=e??(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(this.objectToBoundingSphere(o),J);C(t[3])?(n.init(this._root),O(o,t,n)):this._degenerateObjects.delete(o)}g.release(n),this._shrink()}update(t,e){if(!C(e[3])&&this._isDegenerate(t))return;const n=q(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__.wrap)(t,e);S(this._root,(t=>{if(!T(o,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__.wrap)(t,e);S(this._root,(t=>{if(!z(i,t,o))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),!0}))}forEach(t){S(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,o=()=>!0,s=1/0){let h=1/0,a=1/0,d=null;const u=F(t,e),c=i=>{if(--s,!o(i))return;const r=this.objectToBoundingSphere(i);if(!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__.intersectsSphere)(n,r))return;const u=v(t,e,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(r)),c=u-r[3],f=u+r[3];c<h&&(h=c,a=f,d=i)};return j(this._root,(o=>{if(s<=0||!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__.intersectsSphere)(n,o.bounds))return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.h)(I,u,o.halfSize),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(I,I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(o.bounds));if(v(t,e,I)>a)return!1;const h=o.node;return h.terminals.forAll((t=>c(t))),null!==h.residents&&h.residents.forAll((t=>c(t))),!0}),t,e),d}forEachInDepthRange(t,e,n,o,s,h,a){let d=-1/0,u=1/0;const c={setRange:t=>{n===b.DepthOrder.FRONT_TO_BACK?(d=Math.max(d,t.near),u=Math.min(u,t.far)):(d=Math.max(d,-t.far),u=Math.min(u,-t.near))}};c.setRange(o);const f=v(e,n,t),_=F(e,n),p=F(e,-n),g=t=>{if(!a(t))return;const o=this.objectToBoundingSphere(t),i=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(o),r=v(e,n,i)-f,_=r-o[3],p=r+o[3];_>u||p<d||!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__.intersectsSphere)(h,o)||s(t,c)};j(this._root,(t=>{if(!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__.intersectsSphere)(h,t.bounds))return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.h)(I,_,t.halfSize),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(I,I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t.bounds));if(v(e,n,I)-f>u)return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.h)(I,p,t.halfSize),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(I,I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t.bounds));if(v(e,n,I)-f<d)return!1;const o=t.node;return o.terminals.forAll((t=>g(t))),null!==o.residents&&o.residents.forAll((t=>g(t))),!0}),e,n)}forEachNode(t){S(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(e),o=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e),i=e=>{const i=this.objectToBoundingSphere(e),r=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(i),h=n+r;return!((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(i),o)-h*h<=0)||t(e)};let r=!0;const h=t=>{r&&(r=i(t))};S(this._root,(t=>{const e=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(t.bounds),i=n+e;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t.bounds),o)-i*i>0)return!1;const a=t.node;return a.terminals.forAll(h),r&&null!==a.residents&&a.residents.forAll(h),r})),r&&this.forEachDegenerateObject(h)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.k)(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this.objectToBoundingSphere(e);return!(o[3]>0)||(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.k)(n.applyToBoundingSphere(o),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=g.acquire().init(t);this._add(e.at(n),o),g.release(o)}}_grow(t,e){if(0!==e&&(D(t,e,(t=>this.objectToBoundingSphere(t)),W),C(W[3])&&!this._fitsInsideTree(W)))if(N(this._root.node))(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(W,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(W,t):this._growRootAsSubNode(t),g.release(t)}}_rebuildTree(t,e){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(V),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds)),V[3]=e.halfSize,D([t,V],2,(t=>t),G);const o=g.acquire().init(this._root);this._root.initFrom(null,G,G[3]),this._root.increaseHalfSize(1.25),S(o,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),g.release(o)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return S(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,r=this._root.halfSize;for(let h=0;h<3;h++){const t=i[h]-r-(n[h]-e),s=n[h]+e-(i[h]+r),a=Math.max(0,Math.ceil(t/(2*r))),l=Math.max(0,Math.ceil(s/(2*r)))+1,d=2**Math.ceil(Math.log(a+l)*Math.LOG2E);o=Math.max(o,d),U[h].min=a,U[h].max=l}for(let h=0;h<3;h++){let t=U[h].min,e=U[h].max;const n=(o-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const s=i[h]-r-t*r*2;y[h]=s+(e+t)*r}const s=o*r;return y[3]=s*w,g.acquire().initFrom(null,y,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(W),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(this._root.bounds)),W[3]=this._root.halfSize,this._root.init(t),t.advanceTo(W,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&null==t;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!C(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),o=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:o}}static fromJSON(t){const e=new b((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class g{constructor(){this.bounds=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,o=this.depth){return this.node=null!=t?t:g.createEmptyNode(),e&&(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(e,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*w}advance(t){let e=this.node.children[t];e||(e=g.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=E[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({shrink:!0}),residents:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({shrink:!0})}}static acquire(){return g._pool.acquire()}static release(t){g._pool.release(t)}static clearPool(){g._pool.prune()}}function S(t,e){let n=g.acquire().init(t);const o=[n];for(;0!==o.length;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++){n.node.children[t]&&o.push(g.acquire().init(n).advance(t))}g.release(n)}}function j(t,e,n,o=b.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(t);const r=[i];for(R(n,o,X);0!==r.length;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=X[t];i.node.children[e]&&r.push(g.acquire().init(i).advance(e))}g.release(i)}}function O(t,e,n){K.clear();const o=n.advanceTo(e,((t,e)=>{K.push(t.node),K.push(e)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(t),0===o.length)for(let i=K.length-2;i>=0;i-=2){if(!x(K.data[i],K.data[i+1]))break}}function x(t,n){return n>=0&&(t.children[n]=null),!!N(t)&&(null===t.residents&&(t.residents=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({shrink:!0})),!0)}function T(t,e){return B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*-e.halfSize,L),B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*e.halfSize,H),(0,_Util_js__WEBPACK_IMPORTED_MODULE_7__.rayBoxTest)(t.origin,t.direction,L,H)}function z(t,e,n){return B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*-e.halfSize,L),B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*e.halfSize,H),n.applyToMinMax(L,H),(0,_Util_js__WEBPACK_IMPORTED_MODULE_7__.rayBoxTest)(t.origin,t.direction,L,H)}function N(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function M(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function A(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function B(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function D(t,e,n,i){if(1===e){const e=n(t[0]);(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(e,i)}else{L[0]=1/0,L[1]=1/0,L[2]=1/0,H[0]=-1/0,H[1]=-1/0,H[2]=-1/0;for(let o=0;o<e;o++){const e=n(t[o]);C(e[3])&&(M(L,e),A(H,e))}(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.m)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(i),L,H,.5),i[3]=Math.max(H[0]-L[0],H[1]-L[1],H[2]-L[2])/2}}function R(t,e,n){if(!Q.length)for(let o=0;o<8;++o)Q.push({index:0,distance:0});for(let o=0;o<8;++o){const n=E[o];Q.data[o].index=o,Q.data[o].distance=v(t,e,n)}Q.sort(((t,e)=>t.distance-e.distance));for(let o=0;o<8;++o)n[o]=Q.data[o].index}function F(t,e){let n,o=1/0;for(let i=0;i<8;++i){const r=v(t,e,P[i]);r<o&&(o=r,n=P[i])}return n}function v(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function C(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}g._pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](g),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(b||(b={}));const E=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,1,1)],P=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(1,1,1)],w=Math.sqrt(3),k=[null];function q(t){return k[0]=t,k}const y=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),L=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),H=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),K=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"],J=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),W=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),V=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),G=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),U=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Q=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"],X=[0,0,0,0,0,0,0,0],Y=b;


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(){this.position0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.position1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.faceNormal0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.faceNormal1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.componentIndex=0,this.cosAngle=0}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeInputBufferLayout: function() { return /* binding */ E; },
/* harmony export */   RegularEdgeInstancesLayout: function() { return /* binding */ T; },
/* harmony export */   SilhouetteEdgeInstancesLayout: function() { return /* binding */ A; },
/* harmony export */   VertexLayout: function() { return /* binding */ I; },
/* harmony export */   glVertexLayout: function() { return /* binding */ S; },
/* harmony export */   vertexAttributeLocations: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const E=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX).freeze(),I=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec2u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.SIDENESS).freeze(),S=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__.glLayout)(I),T=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION1).vec2i16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTEXTENSION,{glNormalized:!0}).freeze(),A=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION1).vec2i16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED).vec2i16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMAL2COMPRESSED).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTEXTENSION,{glNormalized:!0}).freeze(),r=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION0,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION1,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTOFFSET,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTSTROKE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTEXTENSION,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMAL2COMPRESSED,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.SIDENESS,8]]);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegularEdgeBufferWriter: function() { return /* binding */ w; },
/* harmony export */   SilhouetteEdgeBufferWriter: function() { return /* binding */ N; }
/* harmony export */ });
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js");
/* harmony import */ var _Normals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Normals.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bufferLayouts.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=.7;class f{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?d:l}write(t,o,e){B.seed=this._edgeHashFunction(e);const r=B.getIntRange(0,255),n=B.getIntRange(0,this.settings.variants-1),i=B.getFloat(),s=255*(.5*y(-(1-Math.min(i/c,1))+Math.max(0,i-c)/(1-c),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,r),t.variantStroke.set(o,n),t.variantExtension.set(o,s)}}const m=new Float32Array(6),p=new Uint32Array(m.buffer),u=new Uint32Array(1);function l(t){return m[0]=t.position0[0],m[1]=t.position0[1],m[2]=t.position0[2],m[3]=t.position1[0],m[4]=t.position1[1],m[5]=t.position1[2],u[0]=31*(31*(31*(31*(31*(166811+p[0])+p[1])+p[2])+p[3])+p[4])+p[5],u[0]}function d(t){const o=m;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u[0]=5381;for(let e=0;e<p.length;e++)u[0]=31*u[0]+p[e];return u[0]}const g=1e4;function h(t){return Math.round(t*g)/g}function y(t,o){return Math.abs(t)**o*Math.sign(t)}class w{constructor(){this._commonWriter=new f}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeInstancesLayout.createBuffer(t)}write(t,r,n){this._commonWriter.write(t,r,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(S,n.faceNormal0,n.faceNormal1),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(S,S);const{typedBuffer:s,typedBufferStride:a}=t.normalCompressed;(0,_Normals_js__WEBPACK_IMPORTED_MODULE_4__.compressNormal)(s,r,S[0],S[1],S[2],a)}}w.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeInstancesLayout,w.glLayout=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__.glLayout)(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeInstancesLayout,1);class N{constructor(){this._commonWriter=new f}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeInstancesLayout.createBuffer(t)}write(t,o,e){this._commonWriter.write(t,o,e);{const{typedBuffer:r,typedBufferStride:n}=t.normalCompressed;(0,_Normals_js__WEBPACK_IMPORTED_MODULE_4__.compressNormal)(r,o,e.faceNormal0[0],e.faceNormal0[1],e.faceNormal0[2],n)}{const{typedBuffer:r,typedBufferStride:n}=t.normal2Compressed;(0,_Normals_js__WEBPACK_IMPORTED_MODULE_4__.compressNormal)(r,o,e.faceNormal1[0],e.faceNormal1[1],e.faceNormal1[2],n)}}}N.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeInstancesLayout,N.glLayout=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__.glLayout)(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeInstancesLayout,1);const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),B=new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractEdges: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Edge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edge.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=-1;function p(e,t,o){const c=e.vertices.position,l=e.vertices.componentIndex,i=y.position0,h=y.position1,g=y.faceNormal0,u=y.faceNormal1,{edges:p,normals:v}=w(e),V=p.length/4,j=t.allocate(V);let I=0;const N=V,b=o?.allocate(N);let D=0,E=0,k=0;x.length=0;for(let s=0;s<V;++s){const e=4*s;c.getVec(p.data[e],i),c.getVec(p.data[e+1],h);const t=x.pushNew();t.index=4*s,t.length=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.j)(i,h)}x.sort(((e,t)=>t.length-e.length));const P=new Array,U=new Array;x.forAll((({length:e,index:n})=>{const w=p.data[n],x=p.data[n+1],V=p.data[n+2],N=p.data[n+3],q=N===d;if(c.getVec(w,i),c.getVec(x,h),q){const e=3*V;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(g,v.data[e],v.data[e+1],v.data[e+2]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(u,g),y.componentIndex=l.get(w),y.cosAngle=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(g,u)}else{let e=3*V;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(g,v.data[e],v.data[e+1],v.data[e+2]),e=3*N,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(u,v.data[e],v.data[e+1],v.data[e+2]),y.componentIndex=l.get(w),y.cosAngle=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(g,u),m(y,M))return;y.cosAngle<-.9999&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(u,g)}E+=e,k++,q||f(y,L)?(t.write(j,I++,y),P.push(e)):A(y,F)&&(b&&o&&o.write(b,D++,y),U.push(e))}));const q=new Float32Array(P.reverse()),z=new Float32Array(U.reverse()),B=b&&o?{instancesData:b.slice(0,D),lodInfo:{lengths:z}}:void 0;return{regular:{instancesData:j.slice(0,I),lodInfo:{lengths:q}},silhouette:B,averageEdgeLength:E/k}}function f(e,t){return e.cosAngle<t}function m(e,t){return e.cosAngle>t}function A(t,o){const n=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.acosClamped)(t.cosAngle);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.o)(N,t.position1,t.position0);return n*((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.e)(I,t.faceNormal0,t.faceNormal1),N)>0?-1:1)>o}function w(e){const t=e.faces.length/3,o=e.faces,n=e.neighbors,s=e.vertices.position;V.length=j.length=0;for(let a=0;a<t;a++){const e=3*a,t=n[e],r=n[e+1],c=n[e+2],g=o[e],u=o[e+1],p=o[e+2];s.getVec(g,b),s.getVec(u,D),s.getVec(p,E),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(D,D,b),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(E,E,b),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.e)(b,D,E),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.n)(b,b),j.pushArray(b),(t===d||g<u)&&(V.push(g),V.push(u),V.push(a),V.push(t)),(r===d||u<p)&&(V.push(u),V.push(p),V.push(a),V.push(r)),(c===d||p<g)&&(V.push(p),V.push(g),V.push(a),V.push(c))}return{edges:V,normals:j}}class v{constructor(){this.index=0,this.length=0}}const x=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({allocator:e=>e||new v,deallocator:null}),V=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({deallocator:null}),j=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({deallocator:null}),y=new _Edge_js__WEBPACK_IMPORTED_MODULE_4__.Edge,I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),N=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),D=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),E=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),F=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(4),M=Math.cos(F),k=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(35),L=Math.cos(k);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extract: function() { return /* binding */ f; },
/* harmony export */   extractComponentsEdgeLocationsLayout: function() { return /* binding */ m; },
/* harmony export */   extractEdgeInformation: function() { return /* binding */ u; },
/* harmony export */   extractEdgeLocationsLayout: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/meshUtils/deduplicate.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js");
/* harmony import */ var _support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/meshProcessing.js */ "./node_modules/@arcgis/core/views/3d/support/meshProcessing.js");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bufferLayouts.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js");
/* harmony import */ var _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edgeBufferWriters.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js");
/* harmony import */ var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edgePreprocessing.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(e){const t=u(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return g.updateSettings(e.writerSettings),a.updateSettings(e.writerSettings),(0,_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_6__.extractEdges)(t,g,a)}function u(r,i,n,o){if(i){const e=(0,_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__.computeNeighbors)(n,o,r.count);return new p(n,o,e,r)}const c=(0,_geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__.deduplicate)(r.buffer,r.stride/4,{originalIndices:n,originalIndicesLength:o}),f=(0,_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__.computeNeighbors)(c.indices,o,c.uniqueCount);return{faces:c.indices,facesLength:c.indices.length,neighbors:f,vertices:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__.EdgeInputBufferLayout.createView(c.buffer)}}class p{constructor(e,t,r,i){this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=i}}const g=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeBufferWriter,a=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeBufferWriter,d=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_2__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION1),m=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_2__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION1).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.COMPONENTINDEX);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../geometry/support/lineSegment.js */ "./node_modules/@arcgis/core/geometry/support/lineSegment.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _3d_webgl_engine_lib_Octree_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../3d/webgl-engine/lib/Octree.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js");
/* harmony import */ var _3d_webgl_engine_lib_edgeRendering_edgeProcessing_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../3d/webgl-engine/lib/edgeRendering/edgeProcessing.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js");
/* harmony import */ var _sceneLayerSnappingUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sceneLayerSnappingUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let f=class{constructor(){this._idToComponent=new Map,this._components=new _3d_webgl_engine_lib_Octree_js__WEBPACK_IMPORTED_MODULE_11__["default"]((e=>e.bounds)),this._edges=new _3d_webgl_engine_lib_Octree_js__WEBPACK_IMPORTED_MODULE_11__["default"]((e=>e.bounds)),this._tmpLineSegment=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__.create)(),this._tmpP1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),this._tmpP2=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),this._tmpP3=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),this.remoteClient=null}async fetchCandidates(e,o){await Promise.resolve(),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(o),await this._ensureEdgeLocations(e,o);const s=[];return this._edges.forEachNeighbor((t=>(this._addCandidates(e,t,s),s.length<_sceneLayerSnappingUtils_js__WEBPACK_IMPORTED_MODULE_13__.maxCandidateCount)),e.bounds),{result:{candidates:s}}}async _ensureEdgeLocations(e,t){const o=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:s}=e;o.push({id:t,uid:s})}return!0}),e.bounds),!o.length)return;const s={components:o},n=await this.remoteClient.invoke("fetchAllEdgeLocations",s,t??{});for(const i of n.components)this._setFetchEdgeLocations(i)}async add(e){const t=new j(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((o=>(o.component===t&&e.push(o),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if(null==t||e.uid!==t.uid)return;const o=_3d_webgl_engine_lib_edgeRendering_edgeProcessing_js__WEBPACK_IMPORTED_MODULE_12__.extractComponentsEdgeLocationsLayout.createView(e.locations),s=new Array(o.count),n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)();for(let i=0;i<o.count;i++){o.position0.getVec(i,n),o.position1.getVec(i,r);const c=(0,_sceneLayerSnappingUtils_js__WEBPACK_IMPORTED_MODULE_13__.boundsFromEdge)(n,r,e.origin),d=new w(t,i,c);s[i]=d}this._edges.add(s);const{objectIds:c,origin:d}=e;t.info={locations:o,objectIds:c,origin:d}}_addCandidates(e,t,o){const{info:n}=t.component,{origin:i,objectIds:r}=n,c=n.locations,d=c.position0.getVec(t.index,this._tmpP1),a=c.position1.getVec(t.index,this._tmpP2);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.g)(d,d,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.g)(a,a,i);const p=r[c.componentIndex.get(t.index)];this._addEdgeCandidate(e,p,d,a,o),b(e,p,d,o),b(e,p,a,o)}_addEdgeCandidate(e,t,o,s,i){if(!e.returnEdge)return;const c=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_10__.a)(e.bounds),u=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__.fromPoints)(o,s,this._tmpLineSegment),h=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__.projectPoint)(u,c,this._tmpP3);(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_10__.o)(e.bounds,h)&&i.push({type:"edge",objectId:t,target:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.clone)(h),distance:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.j)(c,h),start:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.clone)(o),end:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.clone)(s)})}};f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);const _=f;function b(e,t,o,s){if(!e.returnVertex||!(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_10__.o)(e.bounds,o))return;const i=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_10__.a)(e.bounds);s.push({type:"vertex",objectId:t,target:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.clone)(o),distance:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.j)(i,o)})}class j{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++j.uid}}j.uid=0;class w{constructor(e,t,o){this.component=e,this.index=t,this.bounds=o}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boundsFromEdge: function() { return /* binding */ a; },
/* harmony export */   maxCandidateCount: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=1e3;function a(t,a,e){const m=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_1__.c)(),p=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_1__.a)(m);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.b)(p,p,t,.5),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.b)(p,p,a,.5),m[3]=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.j)(p,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(p,p,e),m}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexElementDescriptor: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,h,o,e=!1,r=0){this.name=t,this.count=s,this.type=i,this.offset=h,this.stride=o,this.normalized=e,this.divisor=r}}


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
//# sourceMappingURL=views-interactive-snapping-featureSources-sceneLayerSource-SceneLayerSnappingSourceWorker.js.map