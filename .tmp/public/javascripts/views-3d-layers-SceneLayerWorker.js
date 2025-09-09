"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["views-3d-layers-SceneLayerWorker"],{

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

/***/ "./node_modules/@arcgis/core/core/floatRGBA.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/floatRGBA.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packFloatRGBA: function() { return /* binding */ o; },
/* harmony export */   unpackFloatRGBA: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(o,r,e=0){const i=(0,_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(o,0,f);for(let t=0;t<4;t++)r[e+t]=Math.floor(256*l(i*n[t]))}function r(t,o=0){let r=0;for(let n=0;n<4;n++)r+=t[o+n]*e[n];return r}const n=[1,256,65536,16777216],e=[1/256,1/65536,1/16777216,1/4294967296],f=r(new Uint8ClampedArray([255,255,255,255]));function l(t){return t-Math.floor(t)}


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

/***/ "./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectPointToVector: function() { return /* binding */ c; },
/* harmony export */   projectPointToVectorAsync: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(e,o,c,i){if((0,_projection_js__WEBPACK_IMPORTED_MODULE_1__.canProjectWithoutEngine)(e.spatialReference,c)){f[0]=e.x,f[1]=e.y;const r=e.z;return f[2]=r??i??0,(0,_projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__.projectBuffer)(f,e.spatialReference,0,o,c,0)}const s=(0,_projection_js__WEBPACK_IMPORTED_MODULE_1__.tryProjectWithZConversion)(e,c);return!!s&&(o[0]=s?.x,o[1]=s?.y,o[2]=s?.z??i??0,!0)}async function i(e,r,t,n,i){return await (0,_projection_js__WEBPACK_IMPORTED_MODULE_1__.initializeProjection)(e.spatialReference,t,null,i),c(e,r,t,n)}const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectVectorToVector: function() { return /* binding */ n; },
/* harmony export */   projectVectorToVectorAsync: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _projectPointToVector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPointToVector.js */ "./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js");
/* harmony import */ var _layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/graphics/dehydratedPoint.js */ "./node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(r,t,e,n,i){return!(null==t||null==n||r.length<2)&&(a.x=r[0],a.y=r[1],a.z=r[2],a.spatialReference=t,(0,_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_2__.projectPointToVector)(a,e,n,i))}async function i(t,o,e,i,a,c){return await (0,_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(o,i,null,c),n(t,o,e,i,a)}const a=(0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_3__.makeDehydratedPoint)(0,0,0,_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WGS84);


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

/***/ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c;let i=c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(e){super(e),this.type="georeferenced",this.origin=null}};i.absolute=new c,(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__.enumeration)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);const a=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__.enumeration)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.geometry.support.MeshLocalVertexSpace")],i);const a=i;


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

/***/ "./node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeDehydratedPoint: function() { return /* binding */ e; },
/* harmony export */   setDehydratedPoint: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,n,t,a){return{x:e,y:n,z:t,hasZ:null!=t,hasM:!1,spatialReference:a,type:"point"}}function n(e,n,t,a,l){e.x=n,e.y=t,e.z=a,e.hasZ=null!=a,e.spatialReference=l}


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/i3s/I3SModule.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/i3s/I3SModule.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(){return n||(n=new Promise((t=>__webpack_require__.e(/*! import() | chunks-i3s */ "chunks-i3s").then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/i3s.js */ "./node_modules/@arcgis/core/chunks/i3s.js")).then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((t=>{throw t}))),n}function i(e){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(`esri/libs/i3s/${e}`)}let n;


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/i3s/enums.js":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/i3s/enums.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexType: function() { return /* binding */ n; },
/* harmony export */   ModificationType: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n,e;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32"}(n||(n={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished"}(e||(e={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyContext: function() { return /* binding */ h; },
/* harmony export */   dracoDecompressPointCloudData: function() { return /* binding */ l; },
/* harmony export */   filterObbsForModifications: function() { return /* binding */ u; },
/* harmony export */   filterObbsForModificationsSync: function() { return /* binding */ j; },
/* harmony export */   initialize: function() { return /* binding */ x; },
/* harmony export */   interpretObbModificationResults: function() { return /* binding */ A; },
/* harmony export */   process: function() { return /* binding */ c; },
/* harmony export */   project: function() { return /* binding */ p; },
/* harmony export */   setLegacySchema: function() { return /* binding */ y; },
/* harmony export */   setModifications: function() { return /* binding */ m; },
/* harmony export */   setModificationsSync: function() { return /* binding */ w; },
/* harmony export */   test: function() { return /* binding */ _; },
/* harmony export */   transformNormals: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/MeshGeoreferencedVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js");
/* harmony import */ var _geometry_support_MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/MeshLocalVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _libs_i3s_enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/i3s/enums.js */ "./node_modules/@arcgis/core/libs/i3s/enums.js");
/* harmony import */ var _libs_i3s_I3SModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/i3s/I3SModule.js */ "./node_modules/@arcgis/core/libs/i3s/I3SModule.js");
/* harmony import */ var _i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i3s/I3SNode.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function c(e){g=await S();const t=[e.geometryBuffer];return{result:E(g,e,t),transferList:t}}async function l(e){g=await S();const t=[e.geometryBuffer],{geometryBuffer:r}=e,o=r.byteLength,n=g._malloc(o),s=new Uint8Array(g.HEAPU8.buffer,n,o);s.set(new Uint8Array(r));const i=g.dracoDecompressPointCloudData(n,s.byteLength);if(g._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&t.push(a.buffer),t.push(f.buffer),{result:{positions:f,featureIds:a},transferList:t}}async function u(e){await S(),j(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function m(e){await S(),w(e)}async function y(e){g=await S(),g.setLegacySchema(e.context,e.jsonSchema)}async function p(e){const{localMatrix:n,origin:s,positions:i,vertexSpace:a}=e,f=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(e.inSpatialReference),c=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(e.outSpatialReference);let l;const[{projectBuffer:u},{initializeProjection:m}]=await Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js")),Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js"))]);await m(f,c);const y=[0,0,0];if(!u(s,f,0,y,c,0))throw new Error("Failed to project");if("georeferenced"===a.type&&null==a.origin){if(l=new Float64Array(i.length),!u(i,f,0,l,c,0,l.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===a.type?_geometry_support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(a):_geometry_support_MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(a),{projectMeshVertexPositions:t}=await __webpack_require__.e(/*! import() | geometry-support-meshUtils-projectMeshVertexPositions */ "geometry-support-meshUtils-projectMeshVertexPositions").then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/support/meshUtils/projectMeshVertexPositions.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js")),s=t({vertexAttributes:{position:i},transform:n?{localMatrix:n}:void 0,vertexSpace:e,spatialReference:f},c);if(!s)throw new Error("Failed to project");l=s}const p=l.length,[d,h,b]=y;for(let t=0;t<p;t+=3)l[t]-=d,l[t+1]-=h,l[t+2]-=b;return{result:{projected:l,original:i,projectedOrigin:y},transferList:[l.buffer,i.buffer]}}async function d({normalMatrix:t,normals:r}){const o=new Float32Array(r.length);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(o,r,t),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasScaling)(t)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(o,o),{result:{transformed:o,original:r},transferList:[o.buffer,r.buffer]}}function h(e){L(e)}let b,g;function w(e){if(!g)return;const t=e.modifications,r=g._malloc(8*t.length),o=new Float64Array(g.HEAPU8.buffer,r,t.length);for(let n=0;n<t.length;++n)o[n]=t[n];g.setModifications(e.context,r,t.length,e.isGeodetic),g._free(r)}function E(e,t,r){const{context:o,globalTrafo:n,mbs:s,obbData:a,elevationOffset:f,geometryBuffer:c,geometryDescriptor:l,indexToVertexProjector:u,vertexToRenderProjector:m}=t,y=e._malloc(c.byteLength),p=33,d=e._malloc(p*Float64Array.BYTES_PER_ELEMENT),h=new Uint8Array(e.HEAPU8.buffer,y,c.byteLength);h.set(new Uint8Array(c));const b=new Float64Array(e.HEAPU8.buffer,d,p);I(b,[NaN,NaN,NaN]);let g=b.byteOffset+3*b.BYTES_PER_ELEMENT,w=new Float64Array(b.buffer,g);I(w,n),g+=16*b.BYTES_PER_ELEMENT,w=new Float64Array(b.buffer,g),I(w,s),g+=4*b.BYTES_PER_ELEMENT,a&&(w=new Float64Array(b.buffer,g),I(w,a));const E=l,A={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:E.featureIndex},j=e.process(o,!!t.obbData,y,h.byteLength,E,A,d,f,u,m,t.normalReferenceFrame);if(e._free(d),e._free(y),j.error.length>0)throw new Error(`i3s.wasm: ${j.error}`);if(j.discarded)return null;const L=j.componentOffsets.length>0?j.componentOffsets.slice():null,x=j.featureIds.length>0?j.featureIds.slice():null,S=j.anchorIds.length>0?Array.from(j.anchorIds):null,_=j.anchors.length>0?Array.from(j.anchors):null,P=j.interleavedVertedData.slice().buffer,M=j.indicesType===_libs_i3s_enums_js__WEBPACK_IMPORTED_MODULE_5__.IndexType.Int16?new Uint16Array(j.indices.buffer,j.indices.byteOffset,j.indices.byteLength/2).slice():new Uint32Array(j.indices.buffer,j.indices.byteOffset,j.indices.byteLength/4).slice(),N=j.positions.slice(),U=j.positionIndicesType===_libs_i3s_enums_js__WEBPACK_IMPORTED_MODULE_5__.IndexType.Int16?new Uint16Array(j.positionIndices.buffer,j.positionIndices.byteOffset,j.positionIndices.byteLength/2).slice():new Uint32Array(j.positionIndices.buffer,j.positionIndices.byteOffset,j.positionIndices.byteLength/4).slice(),T={layout:t.layouts[0],interleavedVertexData:P,indices:M,hasColors:j.hasColors,hasModifications:j.hasModifications,positionData:{data:N,indices:U}};return x&&r.push(x.buffer),L&&r.push(L.buffer),r.push(P),r.push(M.buffer),r.push(N.buffer),r.push(U.buffer),{componentOffsets:L,featureIds:x,anchorIds:S,anchors:_,transformedGeometry:T,obb:j.obb,globalTrafo:n}}function A(e){return 0===e?_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_7__.NodeIMModificationImpact.Unmodified:1===e?_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_7__.NodeIMModificationImpact.PotentiallyModified:2===e?_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_7__.NodeIMModificationImpact.Culled:_i3s_I3SNode_js__WEBPACK_IMPORTED_MODULE_7__.NodeIMModificationImpact.Unknown}function j(e){if(!g)return;const{context:t,buffer:r}=e,o=g._malloc(r.byteLength),n=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(g.HEAPU8.buffer,o,n),i=new Float64Array(r);s.set(i),g.filterOBBs(t,o,n),i.set(s),g._free(o)}function L(e){g&&0===g.destroy(e)&&(g=null)}function I(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function x(){g||await S()}function S(){return g?Promise.resolve(g):(b||(b=(0,_libs_i3s_I3SModule_js__WEBPACK_IMPORTED_MODULE_6__.get)().then((e=>(g=e,b=null,g)))),b)}const _={transform:(e,t)=>g&&E(g,e,t),destroy:L};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAttributeDataIndex: function() { return /* binding */ b; },
/* harmony export */   createGeometryDescriptor: function() { return /* binding */ p; },
/* harmony export */   createGeometryDescriptorForDraco: function() { return /* binding */ v; },
/* harmony export */   createGeometryDescriptorFromDefinition: function() { return /* binding */ g; },
/* harmony export */   createGeometryDescriptorFromSchema: function() { return /* binding */ m; },
/* harmony export */   createGeometryIndexFromSchema: function() { return /* binding */ w; },
/* harmony export */   createRawView: function() { return /* binding */ d; },
/* harmony export */   createTypedView: function() { return /* binding */ l; },
/* harmony export */   getBytesPerValue: function() { return /* binding */ E; },
/* harmony export */   isValueType: function() { return /* binding */ O; },
/* harmony export */   readBinaryAttribute: function() { return /* binding */ I; },
/* harmony export */   readDateStringArray: function() { return /* binding */ c; },
/* harmony export */   readHeader: function() { return /* binding */ s; },
/* harmony export */   readStringArray: function() { return /* binding */ f; },
/* harmony export */   valueType2ArrayBufferReader: function() { return /* binding */ A; },
/* harmony export */   valueType2TypedArrayClassMap: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LEPCC.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js");
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function a(t,n,r){let o="",i=0;for(;i<r;){const u=t[n+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function s(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=A[u];n.fields[i.property]=a(e,r),r+=h[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function c(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}function f(t,n,r){const o=[];let i,u,s=0;for(u=0;u<t;u+=1){if(i=n[u],i>0){if(o.push(a(r,s,i-1)),0!==r[s+i-1])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function l(e,t){return new(0,h[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function d(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function b(n,r,o){const i=null!=r.header?s(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let s=0;s<r.ordering.length;s++){const n=r.ordering[s],o=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(r[n]);if(o.count=i.fields.count??0,"String"===o.valueType){if(o.byteOffset=a,o.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==o.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else{if(!O(o.valueType))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=E(o.valueType);a+=a%e!=0?e-a%e:0,o.byteOffset=a,o.byteCount=e*o.valuesPerElement*o.count}}a+=o.byteCount??0,u.entries[n]=o}return u.byteCount=a-u.byteOffset,u}function y(t,n,r){if(n!==t&&u().error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function g(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function w(e,t){const n=s(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const e={...t.vertexAttributes[s],byteOffset:r,count:u},n=C[s]||"_"+s;o.vertexAttributes[n]=e,r+=E(e.valueType)*e.valuesPerElement*u}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=E(n.valueType)*n.valuesPerElement*a}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:E(n.valueType))*n.valuesPerElement*c}}return y(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function p(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?v(e.compressedAttributes.attributes):e?g(e):m(t)}function m(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const C={position:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__.VertexAttribute.POSITION,normal:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__.VertexAttribute.NORMAL,color:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__.VertexAttribute.COLOR,uv0:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__.VertexAttribute.UV0,region:_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__.VertexAttribute.UVREGION};function I(t,n,i){if("lepcc-rgb"===t.encoding)return (0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__.decodeRGB)(n);if("lepcc-intensity"===t.encoding)return (0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__.decodeIntensity)(n);if(null!=t.encoding&&""!==t.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(u().warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(u().warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const a=b(n,t,i);y(a.byteOffset+a.byteCount,n.byteLength,"attribute");const s=a.entries.attributeValues||a.entries.objectIds;if(s){if("String"===s.valueType){const e=a.entries.attributeByteCounts,t=l(n,e),r=d(n,s);return s.timeEncoding?c(e.count,t,r):f(e.count,t,r)}return l(n,s)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const h={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function O(e){return h.hasOwnProperty(e)}function E(e){return O(e)?h[e].BYTES_PER_ELEMENT:0}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheState: function() { return /* binding */ a; },
/* harmony export */   LodMetric: function() { return /* binding */ d; },
/* harmony export */   Node: function() { return /* binding */ h; },
/* harmony export */   NodeBase: function() { return /* binding */ s; },
/* harmony export */   NodeFilterImpact: function() { return /* binding */ o; },
/* harmony export */   NodeIMModificationImpact: function() { return /* binding */ r; },
/* harmony export */   NodeState: function() { return /* binding */ c; },
/* harmony export */   NodeTraversalState: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _I3SUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./I3SUtil.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js");
/* harmony import */ var _support_ElevationRange_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/ElevationRange.js */ "./node_modules/@arcgis/core/views/3d/support/ElevationRange.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _support_ElevationRange_js__WEBPACK_IMPORTED_MODULE_3__.ElevationRange{constructor(e,n){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=n,this.serviceMbsInRenderSR=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_1__.f)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){(0,_I3SUtil_js__WEBPACK_IMPORTED_MODULE_2__.invalidateMbs)(this.serviceMbsInRenderSR),this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}var o,r,a,d,c;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(o||(o={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class h extends s{constructor(i,n,t,s,o,d,c,h,l,u){super(i,t),this.index=n,this.childCount=s,this.level=o,this.resources=d,this.version=c,this.lodMetric=h,this.maxError=l,this.numFeatures=u,this.failed=!1,this.cacheState=a.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked,this.elevationAgnosticBoundingVolume=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(a||(a={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(d||(d={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(c||(c={}));class l{constructor(e,i,n,t){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=n,this.version=t}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeGlobalTransformation: function() { return /* binding */ n; },
/* harmony export */   getLocalOrigin: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/ellipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/ellipsoidUtils.js");
/* harmony import */ var _geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(r,a,n,s,e){const h="east-north-up"===n?(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.clone)(r):c(r,a,s),m=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.create)();return (0,_geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_3__.computeTranslationToOriginAndRotation)(s,h,m,e),m}const s=1,e=5-s;function c(t,o,i){const n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)(),c=t[3],h=2**(Math.ceil(Math.log(c)*Math.LOG2E/e)*e+s);if(i.isGeographic){const o=h/(0,_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_2__.getReferenceEllipsoid)(i).radius*180/Math.PI,r=Math.round(t[1]/o),s=Math.max(-90,Math.min(90,r*o)),e=o/Math.cos((Math.abs(s)-o/2)/180*Math.PI),c=Math.round(t[0]/e)*e;n[0]=c,n[1]=s}else{const o=Math.round(t[0]/h),r=Math.round(t[1]/h);n[0]=o*h,n[1]=r*h}const m=t[2]+o,M=Math.round(m/h);return n[2]=M*h,n}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MbsIntersectResult: function() { return /* binding */ q; },
/* harmony export */   SymbolInfo: function() { return /* binding */ fe; },
/* harmony export */   addWraparound: function() { return /* binding */ me; },
/* harmony export */   checkPointCloudLayerCompatibleWithView: function() { return /* binding */ se; },
/* harmony export */   checkPointCloudLayerValid: function() { return /* binding */ ie; },
/* harmony export */   checkRecyclable: function() { return /* binding */ X; },
/* harmony export */   checkSceneLayerCompatibleWithView: function() { return /* binding */ oe; },
/* harmony export */   checkSceneLayerValid: function() { return /* binding */ re; },
/* harmony export */   checkSpatialReference: function() { return /* binding */ J; },
/* harmony export */   checkSpatialReferences: function() { return /* binding */ ee; },
/* harmony export */   computeVisibilityObb: function() { return /* binding */ de; },
/* harmony export */   containsDraco: function() { return /* binding */ k; },
/* harmony export */   extractWkid: function() { return /* binding */ U; },
/* harmony export */   filterInPlace: function() { return /* binding */ D; },
/* harmony export */   findFieldsCaseInsensitive: function() { return /* binding */ L; },
/* harmony export */   findIntersectingNodes: function() { return /* binding */ N; },
/* harmony export */   getCachedAttributeValue: function() { return /* binding */ Q; },
/* harmony export */   getClipRect: function() { return /* binding */ O; },
/* harmony export */   getIndexCrs: function() { return /* binding */ Z; },
/* harmony export */   getSymbolInfo: function() { return /* binding */ pe; },
/* harmony export */   getVertexCrs: function() { return /* binding */ H; },
/* harmony export */   intersectBoundingRectWithMbs: function() { return /* binding */ F; },
/* harmony export */   invalidateMbs: function() { return /* binding */ he; },
/* harmony export */   isSupportedLocalModeProjection: function() { return /* binding */ Y; },
/* harmony export */   isValidMbs: function() { return /* binding */ ye; },
/* harmony export */   objectIdFilter: function() { return /* binding */ W; },
/* harmony export */   queryAttributesFromCachedAttributesId: function() { return /* binding */ V; },
/* harmony export */   rendererNeedsTextures: function() { return /* binding */ ce; },
/* harmony export */   transparentEdgeMaterial: function() { return /* binding */ ue; },
/* harmony export */   whenGraphicAttributes: function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_projection_projectVectorToVector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/projection/projectVectorToVector.js */ "./node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./I3SBinaryReader.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js");
/* harmony import */ var _I3SProjectionUtil_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./I3SProjectionUtil.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js");
/* harmony import */ var _support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../support/edgeUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js");
/* harmony import */ var _support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../support/symbolColorUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js");
/* harmony import */ var _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../support/orientedBoundingBox.js */ "./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js");
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../support/layerViewUtils.js */ "./node_modules/@arcgis/core/views/support/layerViewUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function U(e){return e?parseInt(e.slice(e.lastIndexOf("/")+1),10):void 0}function k(e){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes?.encoding)return!0;return!1}function N(e,t,r,o){r.traverse(t,(t=>{const r=t.serviceMbsInIndexSR;return(null!=r&&F(e,r))!==q.OUTSIDE&&(o(t),!0)}))}function D(e,t,r){let o=0,n=0;for(let i=0;i<t.length&&o<e.length;i++)e[o]===t[i]&&(r(i)&&(e[n]=e[o],n++),o++);e.length=n}function W(e,r,o){let n=0,i=0;for(;n<o.length;){(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.binaryIndexOf)(e,o[n])>=0===r&&(o[i]=o[n],i++),n++}o.length=i}const _=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.create)();function O(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return _[0]=(e[0]-t.position[0])/t.rotationScale[0],_[1]=(e[1]-t.position[1])/t.rotationScale[4],_[2]=(e[2]-t.position[0])/t.rotationScale[0],_[3]=(e[3]-t.position[1])/t.rotationScale[4],_}var q;function F(e,t){const r=t[0],o=t[1],n=t[3],i=e[0]-r,s=r-e[2],a=e[1]-o,l=o-e[3],c=Math.max(i,s,0),u=Math.max(a,l,0),f=c*c+u*u;if(f>n*n)return q.OUTSIDE;if(f>0)return q.INTERSECTS_CENTER_OUTSIDE;return-Math.max(i,s,a,l)>n?q.INSIDE:q.INTERSECTS_CENTER_INSIDE}function L(e,t,r){const o=[],n=r?.missingFields,i=r?.originalFields;for(const s of e){const e=s.toLowerCase();let r=!1;for(const n of t)if(e===n.name.toLowerCase()){o.push(n.name),r=!0,i&&i.push(s);break}!r&&n&&n.push(s)}return o}async function A(e,t,r,n,i,s){if(0===t.length)return[];const a=e.attributeStorageInfo;if(null!=e.associatedLayer)try{return await P(e.associatedLayer,t,r,n,s)}catch(l){if(e.associatedLayer.loaded)throw l}if(a){const l=K(t,r,i);if(null==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(l.map((t=>G(c,a,t.node,t.indices,n,e.apiKey,e.customParameters,s).then((e=>{for(let r=0;r<t.graphics.length;r++){const o=t.graphics[r],n=e[r];if(o.attributes)for(const e in o.attributes)e in n||(n[e]=o.attributes[e]);o.attributes=n}return t.graphics})))))).flat()}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function K(e,t,r){const o=new Map,n=[],i=r();for(const s of e){const e=s.attributes[t];for(let t=0;t<i.length;t++){const r=i[t],a=r.featureIds.indexOf(e);if(a>=0){let e=o.get(r.node);e||(e={node:r.node,indices:[],graphics:[]},n.push(e),o.set(r.node,e)),e.indices.push(a),e.graphics.push(s);for(let r=t;r>0;r--)i[r]=i[r-1];i[0]=r;break}}}return n}async function P(e,t,r,o,n){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const i=t.map((e=>e.attributes[r])),s=[],a=L(o,e.fields,{originalFields:s}),l=await B(e,i,a,n);for(let c=0;c<t.length;c++){const e=t[c],r=l[c],o={};if(e.attributes)for(const t in e.attributes)o[t]=e.attributes[t];for(let t=0;t<s.length;t++)o[s[t]]=r[a[t]];e.attributes=o}return t}function B(e,t,n,i){const s=e.capabilities.query.maxRecordCount;if(null!=s&&t.length>s){const o=(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.splitIntoChunks)(t,s);return Promise.all(o.map((t=>B(e,t,n,i)))).then((e=>e.flat()))}const a=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_14__["default"]({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(a,i).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function G(e,t,r,o,n,i,s,a){return V(e,t,r.resources.attributes,o,n,i,s,a)}async function V(t,r,o,n,i,s,a,l){const c=[];for(const e of r)if(e&&i.includes(e.name)){const r=`${t}/nodes/${o}/attributes/${e.key}/0`;c.push({url:r,storageInfo:e})}const u=await Promise.allSettled(c.map((t=>(0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t.url,{responseType:"array-buffer",query:{...a,token:s},signal:l?.signal}).then((e=>(0,_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_15__.readBinaryAttribute)(t.storageInfo,e.data)))))),f=[];for(const e of n){const t={};for(let r=0;r<u.length;r++){const o=u[r];if("fulfilled"===o.status){const n=o.value;t[c[r].storageInfo.name]=Q(n,e)}}f.push(t)}return f}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(q||(q={}));const $=-32768,z=-(2**31);function Q(e,t){if(!e)return null;const r=e[t];if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isInt16Array)(e))return r===$?null:r;if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_5__.isInt32Array)(e))return r===z?null:r;return r!=r?null:r}function Z(e){const t=e.store,r=t.indexCRS||t.geographicCRS,n=void 0===r?t.indexWKT:void 0;if(n){if(!e.spatialReference)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const i=r?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__["default"](U(r)):e.spatialReference;return i.equals(e.spatialReference)?e.spatialReference:i}function H(e){const t=e.store,r=t.vertexCRS||t.projectedCRS,n=void 0===r?t.vertexWKT:void 0;if(n){if(!e.spatialReference)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const i=r?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_21__["default"](U(r)):e.spatialReference;return i.equals(e.spatialReference)?e.spatialReference:i}function J(e,t,r){if(!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_10__.canProjectWithoutEngine)(e,t))throw (0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_20__.spatialReferenceIncompatibleError)("scene layer",e?.wkid,t?.wkid);if("local"===r&&!Y(e,t))throw (0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_20__.spatialReferenceIncompatibleError)("scene layer",e?.wkid,t?.wkid)}function X(e,t,r){if(e.serviceUpdateTimeStamp?.lastUpdate!==t.serviceUpdateTimeStamp?.lastUpdate||!r.isEmpty||e.associatedLayer?.url!==t.associatedLayer?.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("layerview:recycle-failed")}function Y(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function ee(e,t,r){const o=Z(e),n=H(e);J(o,t,r),J(n,t,r)}function te(e){return(null==e.geometryType||"triangles"===e.geometryType)&&((null==e.topology||"PerAttributeArray"===e.topology)&&null!=e.vertexAttributes?.position)}function re(e){if(null==e.store?.defaultGeometrySchema||!te(e.store.defaultGeometrySchema))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function oe(e,t){ee(e,t.spatialReference,t.viewingMode)}function ne(e){return null!=e.geometryType&&"points"===e.geometryType&&((null==e.topology||"PerAttributeArray"===e.topology)&&((null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&null!=e.vertexAttributes?.position))}function ie(e){if(null==e.store?.defaultGeometrySchema||!ne(e.store.defaultGeometrySchema))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function se(e,t){J(e.spatialReference,t.spatialReference,t.viewingMode)}function ae(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function le(e){return"mesh-3d"===e.type}function ce(e){if(null==e||!ae(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const r of t){if(!le(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items)if("fill"!==e.type||null==e.material?.color||"replace"!==e.material.colorMixMode)return!0}return!1}const ue=(0,_support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_17__.createSolidEdgeMaterial)({color:[0,0,0,0],opacity:0});class fe{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function pe(e){const t=new fe;let r=!1,o=!1;for(const n of e.symbolLayers.items)if("fill"===n.type&&n.enabled){const e=n.material,i=n.edges;if(null!=e&&!r){const o=e.color,i=(0,_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_18__.parseColorMixMode)(e.colorMixMode);t.material=null!=o?{color:[o.r/255,o.g/255,o.b/255],alpha:o.a,colorMixMode:i}:{color:[1,1,1],alpha:1,colorMixMode:_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_18__.ColorMixModeEnum.Multiply},t.castShadows=n.castShadows,r=!0}null==i||o||(t.edgeMaterial=(0,_support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_17__.createMaterialFromEdges)(i,{}),o=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_18__.ColorMixModeEnum.Multiply}),t}function me(e,t){return(0|e)+(0|t)|0}function de(e,t,r,o,n,i,a){if(!i||0===i.length||null==t||!e.serviceMbsInIndexSR)return null;const f=(0,_I3SProjectionUtil_js__WEBPACK_IMPORTED_MODULE_16__.computeGlobalTransformation)(e.serviceMbsInIndexSR,n,"none",r,t);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_6__.invert)(Ee,f);let p=null;const d=()=>{if(!p)if(p=ge,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.empty)(be),null!=e.serviceObbInIndexSR){e.serviceObbInIndexSR.transform(we,r,t,n,a),we.getCorners(p);for(const e of p)(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.t)(e,e,Ee),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.expandPointInPlace)(be,e)}else{const o=e.serviceMbsInIndexSR;if(!o)return;const i=o[3];(0,_geometry_projection_projectVectorToVector_js__WEBPACK_IMPORTED_MODULE_11__.projectVectorToVector)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_13__.a)(o),r,Ie,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.t)(Ie,Ie,Ee),Ie[2]+=n;for(let e=0;e<8;++e){const t=1&e?i:-i,r=2&e?i:-i,o=4&e?i:-i,n=p[e];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.c)(n,[Ie[0]+t,Ie[1]+r,Ie[2]+o]),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.expandPointInPlace)(be,n)}}};let b=1/0,w=-1/0;const T=e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r?.hasZ)return;(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.empty)(Se);const n=r.spatialReference||o,i=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.i)(Ie,r[0],r[1],r[2]),(0,_geometry_projection_projectVectorToVector_js__WEBPACK_IMPORTED_MODULE_11__.projectVectorToVector)(Ie,n,Ie,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.t)(Ie,Ie,Ee),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.expandPointInPlace)(Se,Ie),Math.min(Ie[2],e))),e)),1/0);d(),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.intersects)(be,Se)&&(b=Math.min(b,i),w=Math.max(w,i))};if(i.forEach((e=>T(e))),b===1/0)return null;const E=(e,t,r)=>{(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.t)(Ie,r,f),e[t]=Ie[0],e[t+1]=Ie[1],e[t+2]=Ie[2],t+=24,r[2]=b,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.t)(Ie,r,f),e[t]=Ie[0],e[t+1]=Ie[1],e[t+2]=Ie[2],t+=24,r[2]=w,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_8__.t)(Ie,r,f),e[t]=Ie[0],e[t+1]=Ie[1],e[t+2]=Ie[2]};for(let s=0;s<8;++s)E(Te.data,3*s,p[s]);return (0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_19__.compute)(Te)}function ye(e){return e[3]>=0}function he(e){null!=e&&(e[3]=-1)}const ge=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)()],Se=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.create)(),be=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_12__.create)(),we=new _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_19__.Obb,Ie=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.create)(),Te={data:new Array(72),size:3,exclusive:!0,stride:3},Ee=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_7__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeIntensity: function() { return /* binding */ w; },
/* harmony export */   decodeRGB: function() { return /* binding */ u; },
/* harmony export */   decodeXYZ: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,r,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,t),checksum:r.getUint32(n+o.checksumOffset,t)}}const n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return{sizeLo:e.getUint32(o+n.sizeLo,t),sizeHi:e.getUint32(o+n.sizeHi,t),minX:e.getFloat64(o+n.minX,t),minY:e.getFloat64(o+n.minY,t),minZ:e.getFloat64(o+n.minZ,t),maxX:e.getFloat64(o+n.maxX,t),maxY:e.getFloat64(o+n.maxY,t),maxZ:e.getFloat64(o+n.maxZ,t),errorX:e.getFloat64(o+n.errorX,t),errorY:e.getFloat64(o+n.errorY,t),errorZ:e.getFloat64(o+n.errorZ,t),count:e.getUint32(o+n.count,t),reserved:e.getUint32(o+n.reserved,t)}}function c(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(a>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const u=i(c,d);d+=n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s(t,d,h),d=s(t,d,w),d=s(t,d,g),d=s(t,d,p),d!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s(e,t,o){const r=[];t=d(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function d(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else{if(2!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2}if(d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return r+g}const l={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a(e,o){return{sizeLo:e.getUint32(o+l.sizeLo,t),sizeHi:e.getUint32(o+l.sizeHi,t),count:e.getUint32(o+l.count,t),colorMapCount:e.getUint16(o+l.colorMapCount,t),lookupMethod:e.getUint8(o+l.lookupMethod),compressionMethod:e.getUint8(o+l.compressionMethod)}}function u(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const d=a(n,i);i+=l.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2]}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,o){return{sizeLo:e.getUint32(o+f.sizeLo,t),sizeHi:e.getUint32(o+f.sizeHi,t),count:e.getUint32(o+f.count,t),scaleFactor:e.getUint16(o+f.scaleFactor,t),bitsPerPoint:e.getUint8(o+f.bitsPerPoint),reserved:e.getUint8(o+f.reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const l=h(n,i);i+=f.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else{const o=[];if(d(t,i,o)!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}return a}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMaterial: function() { return /* binding */ a; },
/* harmony export */   createMaterialFromEdges: function() { return /* binding */ f; },
/* harmony export */   createSolidEdgeMaterial: function() { return /* binding */ g; },
/* harmony export */   hasEdges: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/* harmony import */ var _layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layerUtils.js */ "./node_modules/@arcgis/core/views/3d/layers/support/layerUtils.js");
/* harmony import */ var _webgl_engine_lib_edgeRendering_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webgl-engine/lib/edgeRendering/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/interfaces.js");
/* harmony import */ var _webgl_engine_shaders_sources_edgeRenderer_EdgeUtil_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(e){return e&&e.enabled&&((0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.isExtrudeSymbol3DLayer)(e)||(0,_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.isFillSymbol3DLayer)(e))&&null!=e.edges}function u(e){return e&&e.enabled&&e.edges||null}function a(e,n){return f(u(e),n)}function f(o,i){if(null==o)return null;const s=null!=o.color?(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.fromArray)(_Color_js__WEBPACK_IMPORTED_MODULE_0__["default"].toUnitRGBA(o.color)):(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(0,0,0,0),l=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__.pt2px)(o.size),c=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__.pt2px)(o.extensionLength);switch(o.type){case"solid":return g({color:s,size:l,extensionLength:c,...i});case"sketch":return p({color:s,size:l,extensionLength:c,...i});default:return}}function g(e){return{...m,...e,type:_webgl_engine_shaders_sources_edgeRenderer_EdgeUtil_glsl_js__WEBPACK_IMPORTED_MODULE_6__.EdgeType.Solid}}function p(e){return{...d,...e,type:_webgl_engine_shaders_sources_edgeRenderer_EdgeUtil_glsl_js__WEBPACK_IMPORTED_MODULE_6__.EdgeType.Sketch}}const m={color:(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:_webgl_engine_lib_edgeRendering_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.Transparency.OPAQUE,hasSlicePlane:!1},d={color:(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.fromValues)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:_webgl_engine_lib_edgeRendering_interfaces_js__WEBPACK_IMPORTED_MODULE_5__.Transparency.OPAQUE,hasSlicePlane:!1};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/layerUtils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/layerUtils.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isExtrudeSymbol3DLayer: function() { return /* binding */ e; },
/* harmony export */   isFillSymbol3DLayer: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){return"fill"===t.type}function e(t){return"extrude"===t.type}


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

/***/ "./node_modules/@arcgis/core/views/3d/support/ElevationRange.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/ElevationRange.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElevationRange: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(e=1/0,a=-1/0){this.elevationRangeMin=e,this.elevationRangeMax=a}get elevationRangeValid(){return!Number.isNaN(this.elevationRangeMin)}invalidateElevationRange(){this.elevationRangeMin=NaN}expandElevationRangeValues(e,a){this.elevationRangeMin=Math.min(this.elevationRangeMin,e),this.elevationRangeMax=Math.max(this.elevationRangeMax,a)}expandElevationRange(e){this.elevationRangeMin=Math.min(this.elevationRangeMin,e.elevationRangeMin),this.elevationRangeMax=Math.max(this.elevationRangeMax,e.elevationRangeMax)}setElevationRange(e){this.elevationRangeMin=e.elevationRangeMin,this.elevationRangeMax=e.elevationRangeMax}}


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentData: function() { return /* binding */ f; },
/* harmony export */   ComponentDataType: function() { return /* binding */ x; },
/* harmony export */   encodeElevationOffset: function() { return /* binding */ m; },
/* harmony export */   maxElevationOffset: function() { return /* binding */ C; }
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../core/compilerUtils.js */ "./node_modules/@arcgis/core/core/compilerUtils.js");
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../core/floatRGBA.js */ "./node_modules/@arcgis/core/core/floatRGBA.js");
/* harmony import */ var _DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecodeSymbolColor.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js");
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/shaderLibrary/ShaderOutput.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js");
/* harmony import */ var _core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js");
/* harmony import */ var _core_shaderModules_Float4DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/shaderModules/Float4DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4DrawUniform.js");
/* harmony import */ var _core_shaderModules_IntegerDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/shaderModules/IntegerDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerDrawUniform.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _effects_geometry_olidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../effects/geometry/olidUtils.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var x;!function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"}(x||(x={}));const C=429496.7296;function m(o,r){(0,_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__.packFloatRGBA)(o/C*.5+.5,r)}function f(e,r){switch(r.componentData){case x.Varying:return u(e,r);case x.Uniform:return v(e,r);case x.COUNT:return;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__.neverReached)(r.componentData)}}function u(o,e){const{vertex:a,fragment:d}=o;a.include(_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_4__.RgbaFloatEncoding),a.uniforms.add(new _core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Texture2DDrawUniform("componentColorTex",(o=>o.componentParameters.texture.texture))),o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__.VertexAttribute.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");const x=e.output===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__.ShaderOutput.ObjectAndLayerIdColor;x&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__.DecodeSymbolColor),a.constants.add("stride","float",(0,_effects_geometry_olidUtils_js__WEBPACK_IMPORTED_MODULE_9__.olidEnabled)()?3:2),a.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),a.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl.float(C)};
  }

  ${x?(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),d.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${x?(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function v(o,e){const{vertex:r,fragment:n}=o;r.uniforms.add(new _core_shaderModules_Float4DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float4DrawUniform("externalColor",(o=>o.componentParameters.externalColor))),n.uniforms.add(new _core_shaderModules_IntegerDrawUniform_js__WEBPACK_IMPORTED_MODULE_6__.IntegerDrawUniform("externalColorMixMode",(o=>o.componentParameters.externalColorMixMode))),o.varyings.add("vExternalColor","vec4"),r.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const c=e.output===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__.ShaderOutput.ObjectAndLayerIdColor;n.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
  void readExternalColor(out vec4 color, out int colorMixMode) {
    color = vExternalColor;
    colorMixMode = externalColorMixMode;
  }

  void outputObjectAndLayerIdColor() {
    ${c?(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`fragColor = vec4(0, 0, 0, 0);`:""}
 }
`)}


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RgbaFloatEncoding: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){t.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`),t.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__.glsl)`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4DrawUniform.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4DrawUniform.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Float4DrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"vec4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,t)=>e.setUniform4fv(r,o(s,t))))}}


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerDrawUniform.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerDrawUniform.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntegerDrawUniform: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js");
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaderTechnique/BindType.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__.Uniform{constructor(r,o){super(r,"int",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__.BindType.Draw,((e,s,i)=>e.setUniform1i(r,o(s,i))))}}


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/interfaces.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/interfaces.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transparency: function() { return /* binding */ A; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var A;!function(A){A[A.TRANSPARENT=0]="TRANSPARENT",A[A.OPAQUE=1]="OPAQUE"}(A||(A={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeSilhouette: function() { return /* binding */ x; },
/* harmony export */   EdgeType: function() { return /* binding */ p; },
/* harmony export */   EdgeUtil: function() { return /* binding */ v; },
/* harmony export */   usesSketchLogic: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _collections_Component_Material_shader_ComponentData_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../collections/Component/Material/shader/ComponentData.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js");
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shaderLibrary/util/DoublePrecision.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js");
/* harmony import */ var _core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js");
/* harmony import */ var _core_shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/shaderModules/Float3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js");
/* harmony import */ var _core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/shaderModules/Float3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js");
/* harmony import */ var _core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/shaderModules/FloatPassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js");
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/shaderModules/interfaces.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js");
/* harmony import */ var _core_shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/shaderModules/Matrix3DrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js");
/* harmony import */ var _core_shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/shaderModules/Matrix3PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js");
/* harmony import */ var _core_shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/shaderModules/Matrix4PassUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js");
/* harmony import */ var _core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/shaderModules/Texture2DDrawUniform.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js");
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function v(v,u){const p=v.vertex;p.include(_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_3__.RgbaFloatEncoding),v.include(_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__.NormalAttribute,u),p.uniforms.add(new _core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__.FloatPassUniform("distanceFalloffFactor",(o=>o.distanceFalloffFactor))),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`float distanceBasedPerspectiveFactor(float distance) {
return clamp(sqrt(distanceFalloffFactor / distance), 0.0, 1.0);
}`),p.uniforms.add(new _core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_11__.Texture2DDrawUniform("componentDataTex",(o=>o.componentDataTexture))),v.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__.VertexAttribute.COMPONENTINDEX,"float"),p.constants.add("componentColorFieldOffset","float",0),p.constants.add("componentOtherFieldOffset","float",1),p.constants.add("componentVerticalOffsetFieldOffset","float",2),p.constants.add("componentFieldCount","float",3),p.constants.add("lineWidthFractionFactor","float",8),p.constants.add("extensionLengthOffset","float",128),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = componentFieldCount * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, componentColorFieldOffset);
      vec2 otherIndex = _componentTextureCoords(componentIndex, componentOtherFieldOffset);
      vec2 verticalOffsetIndex = _componentTextureCoords(componentIndex, componentVerticalOffsetFieldOffset);
      vec3 normal = normalModel();
      vec3 normal2 = ${u.silhouette?(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`decompressNormal(normal2Compressed)`:(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl.float(_collections_Component_Material_shader_ComponentData_glsl_js__WEBPACK_IMPORTED_MODULE_0__.maxElevationOffset)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / lineWidthFractionFactor),
        otherValue.y * 255.0 - extensionLengthOffset,
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),u.legacy?p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(p.uniforms.add(new _core_shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix3DrawUniform("transformNormalGlobalFromModel",(o=>o.transformNormalGlobalFromModel))),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),u.silhouette?(v.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__.VertexAttribute.NORMAL2COMPRESSED,"vec2"),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),u.legacy?p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(p.include(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_2__.DoublePrecision,u),p.uniforms.add(new _core_shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__.Matrix3PassUniform("transformViewFromCameraRelativeRS",(o=>o.transformViewFromCameraRelativeRS)),new _core_shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__.Matrix3DrawUniform("transformWorldFromModelRS",(o=>o.transformWorldFromModelRS)),new _core_shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("transformWorldFromModelTL",(o=>o.transformWorldFromModelTL)),new _core_shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__.Float3DrawUniform("transformWorldFromModelTH",(o=>o.transformWorldFromModelTH)),new _core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("transformWorldFromViewTL",(o=>o.transformWorldFromViewTL)),new _core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__.Float3PassUniform("transformWorldFromViewTH",(o=>o.transformWorldFromViewTH))),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${u.spherical?(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`normalize(transformWorldFromModelTL + rotatedModelPosition);`:(0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec3(0.0, 0.0, 1.0);`}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),p.uniforms.add(new _core_shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__.Matrix4PassUniform("transformProjFromView",((o,e)=>e.camera.projectionMatrix))),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),p.code.add((0,_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__.glsl)`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function u(o){return o===p.Sketch||o===p.Mixed}var p,x;!function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"}(p||(p={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(x||(x={}));


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

/***/ "./node_modules/@arcgis/core/views/support/layerViewUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/layerViewUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractSafeScaleBounds: function() { return /* binding */ u; },
/* harmony export */   highlightsSupported: function() { return /* binding */ n; },
/* harmony export */   isInEffectiveScaleRange: function() { return /* binding */ r; },
/* harmony export */   isScaleRangeActive: function() { return /* binding */ c; },
/* harmony export */   isSelectableLayerView2D: function() { return /* binding */ l; },
/* harmony export */   occludeesSupported: function() { return /* binding */ t; },
/* harmony export */   scaleBoundsPredicate: function() { return /* binding */ i; },
/* harmony export */   spatialReferenceIncompatibleError: function() { return /* binding */ o; },
/* harmony export */   validateScaleRange: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(e){return e&&"function"==typeof e.highlight}function t(e){return e&&"function"==typeof e.maskOccludee}function i(e,n,t){return null==e||e>=t&&(0===n||e<=n)}function r(e,n){if(n&&e){const{minScale:t,maxScale:r}=e;if(c(t,r))return i(n,t,r)}return!0}function c(e,n){return null!=e&&e>0||null!=n&&n>0}function a(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}function u(e){const n=e.effectiveScaleRange;return{minScale:n?.minScale??0,maxScale:n?.maxScale??0}}function l(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function o(n,t,i){return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("layerview:spatial-reference-incompatible",`The spatial reference of this ${n}${t?`(wkid:${t})`:""} is incompatible with the spatial reference of the view${i?`(wkid:${i})`:""}.`,{})}


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-SceneLayerWorker.js.map