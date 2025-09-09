"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["views-3d-layers-PointCloudWorker"],{

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

/***/ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f32.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f32.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ONES: function() { return /* binding */ l; },
/* harmony export */   UNIT_X: function() { return /* binding */ s; },
/* harmony export */   UNIT_Y: function() { return /* binding */ _; },
/* harmony export */   UNIT_Z: function() { return /* binding */ y; },
/* harmony export */   ZEROS: function() { return /* binding */ f; },
/* harmony export */   clone: function() { return /* binding */ t; },
/* harmony export */   create: function() { return /* binding */ n; },
/* harmony export */   createView: function() { return /* binding */ e; },
/* harmony export */   fromValues: function() { return /* binding */ r; },
/* harmony export */   ones: function() { return /* binding */ u; },
/* harmony export */   unitX: function() { return /* binding */ c; },
/* harmony export */   unitY: function() { return /* binding */ i; },
/* harmony export */   unitZ: function() { return /* binding */ a; },
/* harmony export */   v: function() { return /* binding */ w; },
/* harmony export */   zeros: function() { return /* binding */ o; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(n,t){return new Float32Array(n,t,3)}function o(){return n()}function u(){return r(1,1,1)}function c(){return r(1,0,0)}function i(){return r(0,1,0)}function a(){return r(0,0,1)}const f=o(),l=u(),s=c(),_=i(),y=a(),w=Object.freeze(Object.defineProperty({__proto__:null,ONES:l,UNIT_X:s,UNIT_Y:_,UNIT_Z:y,ZEROS:f,clone:t,create:n,createView:e,fromValues:r,ones:u,unitX:c,unitY:i,unitZ:a,zeros:o},Symbol.toStringTag,{value:"Module"}));


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

/***/ "./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointCloudRenderer.js */ "./node_modules/@arcgis/core/renderers/PointCloudRenderer.js");
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/RendererLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js");
/* harmony import */ var _support_pointCloud_ColorClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/pointCloud/ColorClassBreakInfo.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let a=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new l({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.colorClassBreakInfos),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0},type:String})],a.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],a.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_support_pointCloud_ColorClassBreakInfo_js__WEBPACK_IMPORTED_MODULE_9__["default"]],json:{write:!0}})],a.prototype,"colorClassBreakInfos",void 0),a=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.PointCloudClassBreaksRenderer")],a);const d=a;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/PointCloudRenderer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _support_pointCloud_ColorModulation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/pointCloud/ColorModulation.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js");
/* harmony import */ var _support_pointCloud_pointSizeAlgorithmTypeUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/pointCloud/pointSizeAlgorithmTypeUtils.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.strict)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.pointSizeAlgorithm),colorModulation:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.colorModulation),pointsPerInch:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.pointsPerInch)}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],c.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({types:_support_pointCloud_pointSizeAlgorithmTypeUtils_js__WEBPACK_IMPORTED_MODULE_9__.pointSizeAlgorithmTypes,json:{write:!0}})],c.prototype,"pointSizeAlgorithm",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_support_pointCloud_ColorModulation_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],c.prototype,"colorModulation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0},nonNullable:!0,type:Number})],c.prototype,"pointsPerInch",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.PointCloudRenderer")],c),function(o){o.fieldTransformTypeKebabDict=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(c||(c={}));const a=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointCloudRenderer.js */ "./node_modules/@arcgis/core/renderers/PointCloudRenderer.js");
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/RendererLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js");
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visualVariables/support/ColorStop.js */ "./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_9__["default"]],json:{write:!0}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.PointCloudStretchRenderer")],d);const a=d;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointCloudRenderer.js */ "./node_modules/@arcgis/core/renderers/PointCloudRenderer.js");
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./support/RendererLegendOptions.js */ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js");
/* harmony import */ var _support_pointCloud_ColorUniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./support/pointCloud/ColorUniqueValueInfo.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let u=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.fieldTransformType),colorUniqueValueInfos:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.colorUniqueValueInfos),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0},type:String})],u.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__["default"].fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[_support_pointCloud_ColorUniqueValueInfo_js__WEBPACK_IMPORTED_MODULE_9__["default"]],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"legendOptions",void 0),u=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const i=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__.strict)()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport)){constructor(r){super(r),this.title=null,this.order=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],n.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__.enumeration)(i)],n.prototype,"order",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.renderers.support.RendererLegendOptions")],n);const a=n;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var a;let p=a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.color)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],write:!0}})],p.prototype,"color",void 0),p=a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var s;let i=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],i.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"minValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"maxValue",void 0),i=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.pointCloud.ColorModulation")],i);const l=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var l;let c=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.values),color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone)(this.color)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[String],json:{write:!0}})],c.prototype,"values",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer],write:!0}})],c.prototype,"color",void 0),c=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:p.apiValues,readOnly:!0,nonNullable:!0,json:{type:p.jsonValues,read:!1,write:p.write}})],i.prototype,"type",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i);const a=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointSizeAlgorithm.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let p=i=class extends _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({pointCloudFixedSizeAlgorithm:"fixed-size"})],p.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:Boolean,json:{write:!0}})],p.prototype,"useRealWorldSymbolSizes",void 0),p=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p);const l=p;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/enumeration.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PointSizeAlgorithm.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;let c=p=class extends _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new p({scaleFactor:this.scaleFactor})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__.enumeration)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const a=c;


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pointSizeAlgorithmTypes: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PointSizeAlgorithm.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js");
/* harmony import */ var _PointSizeFixedSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PointSizeFixedSizeAlgorithm.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js");
/* harmony import */ var _PointSizeSplatAlgorithm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PointSizeSplatAlgorithm.js */ "./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={key:"type",base:_PointSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_0__["default"],typeMap:{"fixed-size":_PointSizeFixedSizeAlgorithm_js__WEBPACK_IMPORTED_MODULE_1__["default"],splat:_PointSizeSplatAlgorithm_js__WEBPACK_IMPORTED_MODULE_2__["default"]}};


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c;let i=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.color=null,this.label=null,this.value=null}writeValue(o,r,e){r[e]=o??0}clone(){return new c({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__.Integer],write:!0}})],i.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:String,json:{write:!0}})],i.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],i.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__.writer)("value")],i.prototype,"writeValue",null),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.renderers.visualVariables.support.ColorStop")],i);const a=i;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f32.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f32.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../geometry/projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/* harmony import */ var _i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i3s/PointCloudWorkerUtil.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js");
/* harmony import */ var _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/orientedBoundingBox.js */ "./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class c{transform(t){const e=this._transform(t),o=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&o.push(e.pointIdFilterMap.buffer);for(const a of e.attributes)"buffer"in a.values&&(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(a.values.buffer)&&a.values.buffer!==e.rgb.buffer&&o.push(a.values.buffer);return Promise.resolve({result:e,transferList:o})}_transform(r){const e=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.readGeometry)(r.schema,r.geometryBuffer);let o=e.length/3,a=null;const i=new Array,f=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.getAttributeValues)(r.primaryAttributeData,e,o);null!=r.primaryAttributeData&&f&&i.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:f});const s=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.getAttributeValues)(r.modulationAttributeData,e,o);null!=r.modulationAttributeData&&s&&i.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:s});let c=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.evaluateRenderer)(r.rendererInfo,f,s,o);if(r.filterInfo&&r.filterInfo.length>0&&null!=r.filterAttributesData){const f=r.filterAttributesData.filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.isSome).map((t=>{const r=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.getAttributeValues)(t,e,o),a={attributeInfo:t.attributeInfo,values:r};return i.push(a),a}));a=new Uint32Array(o),o=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.filterInPlace)(e,c,a,r.filterInfo,f)}for(const t of r.userAttributesData){const r=(0,_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_8__.getAttributeValues)(t,e,o);i.push({attributeInfo:t.attributeInfo,values:r})}3*o<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*o))),I(e,o,r.elevationOffset);const A=h(e,o,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__.Obb.fromData(r.obbData),_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(r.inSR),_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(r.outSR));return{obbData:r.obbData,points:A,rgb:c,attributes:i,pointIdFilterMap:a}}}function h(t,r,o,n,u){if(!(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_7__.projectBuffer)(t,n,0,t,u,0,r))throw new Error("Can't reproject");const l=(0,_core_libs_gl_matrix_2_factories_vec3f32_js__WEBPACK_IMPORTED_MODULE_5__.clone)(o.center),m=(0,_core_libs_gl_matrix_2_factories_vec3f32_js__WEBPACK_IMPORTED_MODULE_5__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f32_js__WEBPACK_IMPORTED_MODULE_5__.create)(),p=(0,_core_libs_gl_matrix_2_factories_vec3f32_js__WEBPACK_IMPORTED_MODULE_5__.clone)(o.halfSize);(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__.conjugate)(A,o.quaternion);const c=new Float32Array(3*r);for(let e=0;e<r;e++){let r=3*e;m[0]=t[r]-l[0],m[1]=t[r+1]-l[1],m[2]=t[r+2]-l[2],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.w)(b,m,A),p[0]=Math.max(p[0],Math.abs(b[0])),p[1]=Math.max(p[1],Math.abs(b[1])),p[2]=Math.max(p[2],Math.abs(b[2])),c[r++]=m[0],c[r++]=m[1],c[r]=m[2]}return o.halfSize=p,c}function I(t,r,e){if(0!==e)for(let o=0;o<r;o++)t[3*o+2]+=e}const A=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__.create)();function g(){return new c}


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

/***/ "./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elevationFromPositions: function() { return /* binding */ a; },
/* harmony export */   evaluateRenderer: function() { return /* binding */ i; },
/* harmony export */   filterInPlace: function() { return /* binding */ f; },
/* harmony export */   getAttributeValues: function() { return /* binding */ c; },
/* harmony export */   readGeometry: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../renderers/PointCloudClassBreaksRenderer.js */ "./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js");
/* harmony import */ var _renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../renderers/PointCloudStretchRenderer.js */ "./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js");
/* harmony import */ var _renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../renderers/PointCloudUniqueValueRenderer.js */ "./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js");
/* harmony import */ var _I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./I3SBinaryReader.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js");
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LEPCC.js */ "./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(t,n,l,s){const{rendererJSON:i,isRGBRenderer:u}=t;let c=null,a=null;if(n&&u)c=n;else if(n&&"pointCloudUniqueValueRenderer"===i?.type){a=_renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(i);const e=a.colorUniqueValueInfos;c=new Uint8Array(3*s);const r=d(a.fieldTransformType);for(let o=0;o<s;o++){const t=(r?r(n[o]):n[o])+"";for(let r=0;r<e.length;r++)if(e[r].values.includes(t)){c[3*o]=e[r].color.r,c[3*o+1]=e[r].color.g,c[3*o+2]=e[r].color.b;break}}}else if(n&&"pointCloudStretchRenderer"===i?.type){a=_renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(i);const e=a.stops;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let r=0;r<s;r++){const t=o?o(n[r]):n[r],l=e.length-1;if(t<e[0].value)c[3*r]=e[0].color.r,c[3*r+1]=e[0].color.g,c[3*r+2]=e[0].color.b;else if(t>=e[l].value)c[3*r]=e[l].color.r,c[3*r+1]=e[l].color.g,c[3*r+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(t<e[o].value){const n=(t-e[o-1].value)/(e[o].value-e[o-1].value);c[3*r]=e[o].color.r*n+e[o-1].color.r*(1-n),c[3*r+1]=e[o].color.g*n+e[o-1].color.g*(1-n),c[3*r+2]=e[o].color.b*n+e[o-1].color.b*(1-n);break}}}else if(n&&"pointCloudClassBreaksRenderer"===i?.type){a=_renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(i);const r=a.colorClassBreakInfos;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let e=0;e<s;e++){const t=o?o(n[e]):n[e];for(let o=0;o<r.length;o++)if(t>=r[o].minValue&&t<=r[o].maxValue){c[3*e]=r[o].color.r,c[3*e+1]=r[o].color.g,c[3*e+2]=r[o].color.b;break}}}else c=new Uint8Array(3*s).fill(255);if(l&&a?.colorModulation){const e=a.colorModulation.minValue,r=a.colorModulation.maxValue,o=.3;for(let t=0;t<s;t++){const n=l[t],s=n>=r?1:n<=e?o:o+(1-o)*(n-e)/(r-e);c[3*t]=s*c[3*t],c[3*t+1]=s*c[3*t+1],c[3*t+2]=s*c[3*t+2]}}return c}function u(e,r){if(null==e.encoding||""===e.encoding){const o=(0,_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_4__.createGeometryIndexFromSchema)(r,e);if(null==o.vertexAttributes.position)return;const l=(0,_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_4__.createTypedView)(r,o.vertexAttributes.position),s=o.header.fields,i=[s.offsetX,s.offsetY,s.offsetZ],u=[s.scaleX,s.scaleY,s.scaleZ],c=l.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=l[3*e]*u[0]+i[0],a[3*e+1]=l[3*e+1]*u[1]+i[1],a[3*e+2]=l[3*e+2]*u[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return (0,_LEPCC_js__WEBPACK_IMPORTED_MODULE_5__.decodeXYZ)(r).result}function c(e,r,o){return e?.attributeInfo.useElevation?r?a(r,o):null:e?.attributeInfo.storageInfo?(0,_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_4__.readBinaryAttribute)(e.attributeInfo.storageInfo,e.buffer,o):null}function a(e,r){const o=new Float64Array(r);for(let t=0;t<r;t++)o[t]=e[3*t+2];return o}function f(e,r,o,t,n){const l=e.length/3;let s=0;for(let i=0;i<l;i++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:r}=t[e],o=n[e].values[i];switch(r.type){case"pointCloudValueFilter":{const e="exclude"===r.mode;r.values.includes(o)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=p(r.requiredSetBits),t=p(r.requiredClearBits);((o&e)!==e||o&t)&&(l=!1);break}case"pointCloudReturnFilter":{const e=15&o,t=o>>>4&15,n=t>1,s=1===e,i=e===t;let u=!1;for(const o of r.includedReturns)if("last"===o&&i||"firstOfMany"===o&&s&&n||"lastOfMany"===o&&i&&n||"single"===o&&!n){u=!0;break}u||(l=!1);break}}}l&&(o[s]=i,e[3*s]=e[3*i],e[3*s+1]=e[3*i+1],e[3*s+2]=e[3*i+2],r[3*s]=r[3*i],r[3*s+1]=r[3*i+1],r[3*s+2]=r[3*i+2],s++)}return s}function d(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function p(e){let r=0;for(const o of e||[])r|=1<<o;return r}


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


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-PointCloudWorker.js.map