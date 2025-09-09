"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["featureSources-FeatureServiceSnappingSource"],{

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

/***/ "./node_modules/@arcgis/core/core/memoize.js":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/core/memoize.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   memoize: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){let r,e,i=[],u=!1;function f(...f){return u&&r===this&&n(f,i)||(e=t.apply(this,f),r=this,i=f,u=!0),e}return f}function n(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/Connection.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/Connection.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _Queue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Queue.js */ "./node_modules/@arcgis/core/core/Queue.js");
/* harmony import */ var _connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectionRegistry.js */ "./node_modules/@arcgis/core/core/workers/connectionRegistry.js");
/* harmony import */ var _InvokeHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InvokeHandler.js */ "./node_modules/@arcgis/core/core/workers/InvokeHandler.js");
/* harmony import */ var _RemoteClient_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RemoteClient.js */ "./node_modules/@arcgis/core/core/workers/RemoteClient.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new _Queue_js__WEBPACK_IMPORTED_MODULE_3__["default"]}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,s){return new Promise(((i,o)=>{let r=!0;const l=e=>{(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(s.signal),r&&(r=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let n=0;n<e.length;++n){const r=e[n];(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPromiseLike)(r)?this._clientPromises[n]=r.then((e=>(this._clients[n]=new _RemoteClient_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,s,this._ongoingJobsQueue),l(i),this._clients[n])),(()=>(l(o),null))):(this._clients[n]=new _RemoteClient_js__WEBPACK_IMPORTED_MODULE_6__["default"](r,s,this._ongoingJobsQueue),this._clientPromises[n]=Promise.resolve(this._clients[n]),l(i))}}))}broadcast(e,t,s){const i=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const o=this._clientPromises[n];i[n]=o.then((i=>i?.invoke(e,t,s)))}return i}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.createAbortError)(`Worker closing, aborting job calling '${e.methodName}'`));for(const t of this._clientPromises)t.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,(0,_connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__.unregister)(this)}invoke(e,t,s){return this.apply(e,[t],s)}apply(e,t,s){const n=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.createResolver)();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:s,resolver:n});for(let i=0;i<this._clientPromises.length;i++){const e=this._clients[i];e?e.jobAdded():this._clientPromises[i].then((e=>e?.jobAdded()))}return n.promise}createInvokeProxy(e){return (0,_InvokeHandler_js__WEBPACK_IMPORTED_MODULE_5__.createInvokeProxy)(this,e)}on(t,s){return Promise.all(this._clientPromises).then((()=>(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__.handlesGroup)(this._clients.map((e=>e.on(t,s))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let s=t.length;for(let i=0;i<this._clientPromises.length;++i){this._clientPromises[i].then((n=>{n&&(t[i]=n.openPort()),0==--s&&e(t)}))}}))}get test(){}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/InvokeHandler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/InvokeHandler.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvokeProxy: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r){return new Proxy({},{get:(e,i,s)=>(...e)=>{let s,o;const a=e[e.length-1];n(a)&&(s=a.signal,o=a.transferList,e.pop());return t.apply(r?`${r}.${i.toString()}`:i.toString(),e,{transferList:o,signal:s})}})}function n(t){return"object"==typeof t&&!Array.isArray(t)&&null!=t&&("signal"in t||"transferList"in t||0===Object.keys(t).length)}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/RemoteClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/RemoteClient.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ E; }
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _InvokeHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InvokeHandler.js */ "./node_modules/@arcgis/core/core/workers/InvokeHandler.js");
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registry.js */ "./node_modules/@arcgis/core/core/workers/registry.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/* harmony import */ var _support_revision_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../support/revision.js */ "./node_modules/@arcgis/core/support/revision.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const{CLOSE:M,ABORT:k,INVOKE:j,RESPONSE:y,OPEN_PORT:I,ON:J}=_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType,w=2;class O{constructor(e){this._invoke=e,this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._timer=null,this._process=this._process.bind(this)}push(e){e.type===_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))}clear(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null}_process(){this._timer=null;for(const e of this._invokeMessages)this._cancelledJobIds.has(e.jobId)||this._invoke(e);this._cancelledJobIds.clear(),this._invokeMessages.length=0}}class E{static connect(e,s){const t=new MessageChannel;let o;o="function"==typeof e?new e:"default"in e&&"function"==typeof e.default?new e.default:e;const n=new E(t.port1,{channel:t,client:o,schedule:s});return"object"==typeof o&&"remoteClient"in o&&(o.remoteClient=n),E.clients.set(n,o),t.port2}static loadWorker(e){const s=_registry_js__WEBPACK_IMPORTED_MODULE_7__.registry[e];return s?s():Promise.resolve(null)}constructor(e,s,t){this._port=e,this._jobQueue=t,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new O((e=>this._onInvokeMessage(e))),this._client=s.client,this._onMessage=this._onMessage.bind(this),this._channel=s.channel,this._schedule=s.schedule,this._port.addEventListener("message",this._onMessage),this._port.start()}close(){this._post({type:M}),this._close()}isBusy(){return this._outJobs.size>0}invoke(e,s,t){return this.apply(e,[s],t)}apply(e,t,o){const a=o?.signal,h=o?.transferList;if(!this._port)return Promise.reject(new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](_utils_js__WEBPACK_IMPORTED_MODULE_8__.portClosedErrorName,`Cannot call invoke('${e}'), port is closed`,{methodName:e,data:t}));const c=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.newJobId)();return new Promise(((s,o)=>{if((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAborted)(a))return this._processWork(),void o((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)());const p=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.onAbort)(a,(()=>{const e=this._outJobs.get(c);e&&(this._outJobs.delete(c),this._processWork(),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__.removeMaybe)(e.abortHandle),this._post({type:k,jobId:c}),o((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)()))})),_={resolve:s,reject:o,abortHandle:p,debugInfo:e};this._outJobs.set(c,_),this._post({type:j,jobId:c,methodName:e,abortable:null!=a},t,h)}))}createInvokeProxy(e){return (0,_InvokeHandler_js__WEBPACK_IMPORTED_MODULE_6__.createInvokeProxy)(this,e)}on(e,s){const t=new MessageChannel;function n(e){s(e.data)}return this._port.postMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.ON,eventType:e,port:t.port2},[t.port2]),t.port1.addEventListener("message",n),t.port1.start(),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__.makeHandle)((()=>{t.port1.postMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.CLOSE}),t.port1.close(),t.port1.removeEventListener("message",n)}))}jobAdded(){this._processWork()}openPort(){const e=new MessageChannel;return this._post({type:I,port:e.port2}),e.port1}_processWork(){if(this._outJobs.size>=w)return;const e=this._jobQueue?.pop();if(!e)return;const{methodName:s,data:t,invokeOptions:o,resolver:n}=e;this.apply(s,t,o).then((e=>n.resolve(e))).catch((e=>n.reject(e)))}_close(){this._channel&&(this._channel=void 0),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((e=>{(0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__.removeMaybe)(e.abortHandle),e.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createAbortError)(`Worker closing, aborting job calling '${e.debugInfo}'`))})),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=null,this._client=null,this._schedule=null}_onMessage(e){null!=this._schedule?this._schedule((()=>this._processMessage(e,!0))):this._processMessage(e,!1)}_processMessage(e,s){const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.receiveMessage)(e);if(t)switch(t.type){case y:this._onResponseMessage(t);break;case j:s?this._onInvokeMessage(t):this._invokeQueue.push(t);break;case k:this._onAbortMessage(t);break;case M:this._onCloseMessage();break;case I:this._onOpenPortMessage(t);break;case J:this._onOnMessage(t)}}_onAbortMessage(e){const s=this._inJobs,t=e.jobId,o=s.get(t);this._invokeQueue.push(e),o&&(o.controller&&o.controller.abort(),s.delete(t))}_onCloseMessage(){const e=this._client;this._close(),e&&"destroy"in e&&E.clients.get(this)===e&&e.destroy(),E.clients.delete(this),e?.remoteClient&&(e.remoteClient=null)}_onInvokeMessage(e){const{methodName:s,jobId:t,data:o=[],abortable:n}=e,r=n?new AbortController:null,i=this._inJobs;let l,c=this._client,p=c[s];try{if(!p&&s&&s.includes(".")){const e=s.split(".");for(let s=0;s<e.length-1;s++)c=c[e[s]],p=c[e[s+1]]}if("function"!=typeof p)throw new TypeError(`${s} is not a function`);o.push({client:this,signal:r?r.signal:null}),l=p.apply(c,o)}catch(_){return void this._post({type:y,jobId:t,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.toInvokeError)(_)})}(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isPromiseLike)(l)?(i.set(t,{controller:r,promise:l}),l.then((e=>{i.has(t)&&(i.delete(t),this._post({type:y,jobId:t},e))}),(e=>{i.has(t)&&(i.delete(t),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.isAbortError)(e)||this._post({type:y,jobId:t,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.toInvokeError)(e||{message:`Error encountered at method ${s}`})}))}))):this._post({type:y,jobId:t},l)}_onOpenPortMessage(e){new E(e.port,{client:this._client})}_onOnMessage(e){const{port:s}=e,o=this._client.on(e.eventType,(e=>{s.postMessage(e)})),n=(0,_events_js__WEBPACK_IMPORTED_MODULE_2__.on)(e.port,"message",(e=>{const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.receiveMessage)(e);t?.type===_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType.CLOSE&&(n.remove(),o.remove(),s.close())}))}_onResponseMessage(e){const{jobId:t,error:o,data:r}=e,i=this._outJobs;if(!i.has(t))return;const l=i.get(t);i.delete(t),this._processWork(),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_4__.removeMaybe)(l.abortHandle),o?l.reject(_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(JSON.parse(o))):l.resolve(r)}_post(e,s,t){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.postMessage)(this._port,e,s,t)}}E.kernelInfo={buildDate:_support_revision_js__WEBPACK_IMPORTED_MODULE_9__.buildDate,fullVersion:_kernel_js__WEBPACK_IMPORTED_MODULE_0__.fullVersion,revision:_support_revision_js__WEBPACK_IMPORTED_MODULE_9__.commitHash},E.clients=new Map;


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/WorkerFallback.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerFallback.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nextTick.js */ "./node_modules/@arcgis/core/core/nextTick.js");
/* harmony import */ var _RemoteClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteClient.js */ "./node_modules/@arcgis/core/core/workers/RemoteClient.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((s=>{this[s]=(...r)=>e[s](...r)}))}}class a{constructor(){this._dispatcher=new n,this._workerPostMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageType.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(s){(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:s}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,s,r){this._dispatcher.addEventListener(e,s,r)}removeEventListener(e,s,r){this._dispatcher.removeEventListener(e,s,r)}_workerPostMessage(s){(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__.nextTick)((()=>{this.dispatchEvent(new MessageEvent("message",{data:s}))}))}async _workerMessageHandler(e){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.receiveMessage)(e);if(n&&n.type===_utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageType.OPEN){const{modulePath:e,jobId:t}=n;let a=await _RemoteClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadWorker(e);a||(a=await import(/* @vite-ignore */ /* webpackIgnore: true */e));const o=_RemoteClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].connect(a);this._workerPostMessage({type:_utils_js__WEBPACK_IMPORTED_MODULE_2__.MessageType.OPENED,jobId:t,data:o})}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerHandle.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerHandle: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workers.js */ "./node_modules/@arcgis/core/core/workers/workers.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_4__.open)(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeHandle)((()=>{i.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,s){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:s})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/WorkerOwner.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerOwner.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _staticWorkerMessages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticWorkerMessages.js */ "./node_modules/@arcgis/core/core/workers/staticWorkerMessages.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/* harmony import */ var _workerFactory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workerFactory.js */ "./node_modules/@arcgis/core/core/workers/workerFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const{ABORT:b,INVOKE:m,OPEN:_,OPENED:g,RESPONSE:u}=_utils_js__WEBPACK_IMPORTED_MODULE_5__.MessageType;class j{static async create(e){const t=await (0,_workerFactory_js__WEBPACK_IMPORTED_MODULE_6__.createWorker)();return new j(t,e)}constructor(e,o){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=o,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:o}=t,r=(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.newJobId)();return new Promise(((t,n)=>{const a={resolve:t,reject:n,abortHandle:(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.onAbortOrThrow)(o,(()=>{this._outJobs.delete(r),this._post({type:b,jobId:r})}))};this._outJobs.set(r,a),this._post({type:_,jobId:r,modulePath:e})}))}_onMessage(e){const t=(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.receiveMessage)(e);if(t)switch(t.type){case g:this._onOpenedMessage(t);break;case u:this._onResponseMessage(t);break;case b:this._onAbortMessage(t);break;case m:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,o=e.jobId,s=t.get(o);s&&(s.controller&&s.controller.abort(),t.delete(o))}_onInvokeMessage(e){const{methodName:t,jobId:o,data:s,abortable:i}=e,l=i?new AbortController:null,c=this._inJobs,h=_staticWorkerMessages_js__WEBPACK_IMPORTED_MODULE_4__.staticWorkerMessages[t];let p;try{if("function"!=typeof h)throw new TypeError(`${t} is not a function`);p=h.call(null,s,{signal:l?l.signal:null})}catch(b){return void this._post({type:u,jobId:o,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.toInvokeError)(b)})}(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isPromiseLike)(p)?(c.set(o,{controller:l,promise:p}),p.then((e=>{c.has(o)&&(c.delete(o),this._post({type:u,jobId:o},e))}),(e=>{c.has(o)&&(c.delete(o),e||(e={message:"Error encountered at method"+t}),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbortError)(e)||this._post({type:u,jobId:o,error:(0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.toInvokeError)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:u,jobId:o},p)}_onOpenedMessage(e){const{jobId:t,data:s}=e,r=this._outJobs.get(t);r&&(this._outJobs.delete(t),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(r.abortHandle),r.resolve(s))}_onResponseMessage(t){const{jobId:s,error:r,data:n}=t,a=this._outJobs.get(s);a&&(this._outJobs.delete(s),(0,_maybe_js__WEBPACK_IMPORTED_MODULE_2__.removeMaybe)(a.abortHandle),r?a.reject(_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(JSON.parse(r))):a.resolve(n))}_post(e,t,o){return (0,_utils_js__WEBPACK_IMPORTED_MODULE_5__.postMessage)(this.worker,e,t,o)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/connectionRegistry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/connectionRegistry.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   register: function() { return /* binding */ e; },
/* harmony export */   unregister: function() { return /* binding */ i; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=new FinalizationRegistry((n=>{n.close()}));function e(e,i){n.register(e,i,i)}function i(e){n.unregister(e)}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/loaderConfig.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/loaderConfig.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLoaderUrl: function() { return /* binding */ s; },
/* harmony export */   loaderConfig: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let s=null;const a={};function r(s){const r={async:s.async,isDebug:s.isDebug,locale:s.locale,baseUrl:s.baseUrl,has:{...s.has},map:{...s.map},packages:s.packages?.slice()||[],paths:{...a.paths,...s.paths}};return s.hasOwnProperty("async")||(r.async=!0),s.hasOwnProperty("isDebug")||(r.isDebug=!1),s.baseUrl||(r.baseUrl=a.baseUrl),r}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/registry.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/registry.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registry: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={statsWorker:()=>__webpack_require__.e(/*! import() | smartMapping-statistics-support-statsWorker */ "smartMapping-statistics-support-statsWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../smartMapping/statistics/support/statsWorker.js */ "./node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js")),geometryEngineWorker:()=>__webpack_require__.e(/*! import() | geometry-geometryEngineWorker */ "geometry-geometryEngineWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../geometry/geometryEngineWorker.js */ "./node_modules/@arcgis/core/geometry/geometryEngineWorker.js")),CSVSourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-support-CSVSourceWorker */ "layers-graphics-sources-support-CSVSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/support/CSVSourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js")),EdgeProcessingWorker:()=>__webpack_require__.e(/*! import() | views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker */ "views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js")),ElevationSamplerWorker:()=>__webpack_require__.e(/*! import() | geometry-support-meshUtils-ElevationSamplerWorker */ "geometry-support-meshUtils-ElevationSamplerWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../geometry/support/meshUtils/ElevationSamplerWorker.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js")),FeatureServiceSnappingSourceWorker:()=>__webpack_require__.e(/*! import() | views-interactive-snapping-featureSources-featureServiceSource-FeatureServiceSnappingSourceWorker */ "views-interactive-snapping-featureSources-featureServiceSource-FeatureServiceSnappingSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorker.js")),GeoJSONSourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-geojson-GeoJSONSourceWorker */ "layers-graphics-sources-geojson-GeoJSONSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/geojson/GeoJSONSourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/geojson/GeoJSONSourceWorker.js")),LercWorker:()=>__webpack_require__.e(/*! import() | layers-support-LercWorker */ "layers-support-LercWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/support/LercWorker.js */ "./node_modules/@arcgis/core/layers/support/LercWorker.js")),MemorySourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-support-MemorySourceWorker */ "layers-graphics-sources-support-MemorySourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/support/MemorySourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/MemorySourceWorker.js")),PBFDecoderWorker:()=>__webpack_require__.e(/*! import() | views-3d-support-PBFDecoderWorker */ "views-3d-support-PBFDecoderWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/support/PBFDecoderWorker.js */ "./node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js")),FeaturePipelineWorker:()=>__webpack_require__.e(/*! import() | views-2d-layers-features-FeaturePipelineWorker */ "views-2d-layers-features-FeaturePipelineWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/2d/layers/features/FeaturePipelineWorker.js */ "./node_modules/@arcgis/core/views/2d/layers/features/FeaturePipelineWorker.js")),PointCloudWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-PointCloudWorker */ "views-3d-layers-PointCloudWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/PointCloudWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js")),RasterWorker:()=>__webpack_require__.e(/*! import() | layers-support-RasterWorker */ "layers-support-RasterWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/support/RasterWorker.js */ "./node_modules/@arcgis/core/layers/support/RasterWorker.js")),SceneLayerSnappingSourceWorker:()=>__webpack_require__.e(/*! import() | views-interactive-snapping-featureSources-sceneLayerSource-SceneLayerSnappingSourceWorker */ "views-interactive-snapping-featureSources-sceneLayerSource-SceneLayerSnappingSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js")),SceneLayerWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-SceneLayerWorker */ "views-3d-layers-SceneLayerWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/SceneLayerWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js")),WFSSourceWorker:()=>__webpack_require__.e(/*! import() | layers-graphics-sources-WFSSourceWorker */ "layers-graphics-sources-WFSSourceWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../layers/graphics/sources/WFSSourceWorker.js */ "./node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js")),WorkerTileHandler:()=>__webpack_require__.e(/*! import() | views-2d-engine-vectorTiles-WorkerTileHandler */ "views-2d-engine-vectorTiles-WorkerTileHandler").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/2d/engine/vectorTiles/WorkerTileHandler.js */ "./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTileHandler.js")),Lyr3DWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-Lyr3DWorker */ "views-3d-layers-Lyr3DWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/Lyr3DWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js")),Feature3DPipelineWorker:()=>__webpack_require__.e(/*! import() | views-3d-layers-graphics-pipeline-Feature3DPipelineWorker */ "views-3d-layers-graphics-pipeline-Feature3DPipelineWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../views/3d/layers/graphics/pipeline/Feature3DPipelineWorker.js */ "./node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/Feature3DPipelineWorker.js"))};


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/staticWorkerMessages.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/staticWorkerMessages.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   staticWorkerMessages: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a={async request(a,s){const r=a.options,n=r.responseType;r.signal=s?.signal,r.responseType="native"===n||"native-request-init"===n?"native-request-init":n&&["blob","json","text"].includes(n)&&(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.getInterceptor)(a.url)?.after?n:"array-buffer";const i=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a.url,r),o={data:i.data,httpStatus:i.httpStatus,ssl:i.ssl};switch(i.requestOptions?.responseType){case"native-request-init":return delete o.data.signal,o;case"blob":o.data=await o.data.arrayBuffer();break;case"json":o.data=(new TextEncoder).encode(JSON.stringify(o.data)).buffer;break;case"text":o.data=(new TextEncoder).encode(o.data).buffer}return{result:o,transferList:[o.data]}}};


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageType: function() { return /* binding */ e; },
/* harmony export */   ignoreConnectionErrors: function() { return /* binding */ O; },
/* harmony export */   isTransferrableResult: function() { return /* binding */ o; },
/* harmony export */   newJobId: function() { return /* binding */ s; },
/* harmony export */   portClosedErrorName: function() { return /* binding */ r; },
/* harmony export */   postMessage: function() { return /* binding */ a; },
/* harmony export */   receiveMessage: function() { return /* binding */ f; },
/* harmony export */   toInvokeError: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r="worker:port-closed";var e;!function(t){t[t.HANDSHAKE=0]="HANDSHAKE",t[t.OPEN=1]="OPEN",t[t.OPENED=2]="OPENED",t[t.RESPONSE=3]="RESPONSE",t[t.INVOKE=4]="INVOKE",t[t.ABORT=5]="ABORT",t[t.CLOSE=6]="CLOSE",t[t.OPEN_PORT=7]="OPEN_PORT",t[t.ON=8]="ON"}(e||(e={}));let n=0;function s(){return n++}function o(t){return t&&"object"==typeof t&&("result"in t||"transferList"in t)}function i(t){return t?"string"==typeof t?JSON.stringify({name:"message",message:t}):t.toJSON?JSON.stringify(t):JSON.stringify({name:t.name,message:t.message,details:t.details||{stack:t.stack}}):null}function a(t,r,n,s){if(r.type===e.OPEN_PORT)return void t.postMessage(r,[r.port]);if(r.type!==e.INVOKE&&r.type!==e.RESPONSE)return void t.postMessage(r);let f;if(o(n)?(f=u(n.transferList),r.data=n.result):(f=u(s),r.data=n),f){if((0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ff"))for(const n of f)if("byteLength"in n&&n.byteLength>267386880){const n="Worker call with large ArrayBuffer would crash Firefox";switch(r.type){case e.INVOKE:throw n;case e.RESPONSE:return void a(t,{type:e.RESPONSE,jobId:r.jobId,error:i(n)})}}t.postMessage(r,f)}else t.postMessage(r)}function f(t){if(!t)return null;const r=t.data;return r?"string"==typeof r?JSON.parse(r):r:null}function u(t){if(!t?.length)return null;if((0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-workers-arraybuffer-transfer"))return t;const r=t.filter((t=>!c(t)));return r.length?r:null}function c(t){return t instanceof ArrayBuffer||"ArrayBuffer"===t?.constructor?.name}async function O(e){try{return await e}catch(n){const e=n?.name===r;if(!((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.isAbortError)(n)||e))throw n;return}}


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/workerFactory.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/workerFactory.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorker: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _intl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../intl.js */ "./node_modules/@arcgis/core/intl.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _loaderConfig_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loaderConfig.js */ "./node_modules/@arcgis/core/core/workers/loaderConfig.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/core/workers/utils.js");
/* harmony import */ var _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorkerFallback.js */ "./node_modules/@arcgis/core/core/workers/WorkerFallback.js");
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../intl/locale.js */ "./node_modules/@arcgis/core/intl/locale.js");
/* harmony import */ var _support_revision_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/revision.js */ "./node_modules/@arcgis/core/support/revision.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=()=>_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:m}=_utils_js__WEBPACK_IMPORTED_MODULE_8__.MessageType,p='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let g,h;const k="Failed to create Worker. Fallback to execute module in main thread";async function y(){if(!(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-workers"))return w(new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"]);if(!g&&!h)try{const e=p.split("{CONFIGURATION}").join(b());g=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(r){h=r||{}}let e;if(g)try{e=new Worker(g,{name:"esri-worker-"+v++})}catch(r){d().warn(k,h),e=new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"]}else d().warn(k,h),e=new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"];return w(e)}async function w(e){return new Promise((r=>{function t(s){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__.receiveMessage)(s);n&&n.type===m&&(e.removeEventListener("message",t),e.removeEventListener("error",o),r(e))}function o(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",o),d().warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new _WorkerFallback_js__WEBPACK_IMPORTED_MODULE_9__["default"]).addEventListener("message",t),e.addEventListener("error",o)}e.addEventListener("message",t),e.addEventListener("error",o)}))}function b(){let o;if(null!=_config_js__WEBPACK_IMPORTED_MODULE_1__["default"]["default"]){const e={..._config_js__WEBPACK_IMPORTED_MODULE_1__["default"]};delete e.default,o=JSON.parse(JSON.stringify(e))}else o=JSON.parse(JSON.stringify(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"]));o.assetsPath=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.assetsPath),o.defaultAssetsPath=o.defaultAssetsPath?(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.defaultAssetsPath):void 0,o.request.interceptors=[],o.log.interceptors=[],o.locale=(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_10__.getLocale)(),o.has={"esri-csp-restrictions":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-2d-update-debug"),"esri-2d-log-updating":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-2d-log-updating"),"featurelayer-pbf":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("featurelayer-snapshot-enabled"),"esri-atomics":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-atomics"),"esri-shared-array-buffer":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-shared-array-buffer"),"esri-tiles-debug":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,_has_js__WEBPACK_IMPORTED_MODULE_4__["default"])("feature-polyline-generalization-factor"),"host-webworker":1},o.workers.loaderUrl&&(o.workers.loaderUrl=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.workers.loaderUrl)),o.workers.workerPath?o.workers.workerPath=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)(o.workers.workerPath):o.workers.workerPath=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.makeAbsolute)((0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)("esri/core/workers/RemoteClient.js")),o.workers.useDynamicImport=!1;const a=_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].workers.loaderConfig,i=(0,_loaderConfig_js__WEBPACK_IMPORTED_MODULE_7__.loaderConfig)({baseUrl:a?.baseUrl,locale:(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_10__.getLocale)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...a?.has},map:{...a?.map},paths:{...a?.paths},packages:a?.packages||[]}),l={buildDate:_support_revision_js__WEBPACK_IMPORTED_MODULE_11__.buildDate,fullVersion:_kernel_js__WEBPACK_IMPORTED_MODULE_3__.fullVersion,revision:_support_revision_js__WEBPACK_IMPORTED_MODULE_11__.commitHash};return JSON.stringify({esriConfig:o,loaderConfig:i,kernelInfo:l})}let v=0;


/***/ }),

/***/ "./node_modules/@arcgis/core/core/workers/workers.js":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/workers.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connection: function() { return /* reexport safe */ _Connection_js__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   RemoteClient: function() { return /* reexport safe */ _RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   initialize: function() { return /* binding */ m; },
/* harmony export */   open: function() { return /* binding */ p; },
/* harmony export */   openWithPorts: function() { return /* binding */ u; },
/* harmony export */   terminate: function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _Connection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Connection.js */ "./node_modules/@arcgis/core/core/workers/Connection.js");
/* harmony import */ var _connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connectionRegistry.js */ "./node_modules/@arcgis/core/core/workers/connectionRegistry.js");
/* harmony import */ var _RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemoteClient.js */ "./node_modules/@arcgis/core/core/workers/RemoteClient.js");
/* harmony import */ var _WorkerOwner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkerOwner.js */ "./node_modules/@arcgis/core/core/workers/WorkerOwner.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s=(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("workers-pool-size")??8):0;let a=(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-mobile")?Math.min(s,3):s;a||(a=(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("safari")&&(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("mac")?7:2);let c=0;const l=[];function m(){g()}function u(r,t){return f(r,{client:t})}async function f(r,t){const n=new _Connection_js__WEBPACK_IMPORTED_MODULE_3__["default"],{registryTarget:i,...s}=t;return await n.open(r,s),i&&(0,_connectionRegistry_js__WEBPACK_IMPORTED_MODULE_4__.register)(i,n),n}async function p(e,o={}){if("string"!=typeof e)throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("workers:undefined-module","modulePath is missing");let i=o.strategy||"distributed";if((0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("host-webworker")&&!(0,_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-workers")&&(i="local"),"local"===i){let r=await _RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].loadWorker(e);r||(r=await import(/* @vite-ignore */ /* webpackIgnore: true */e)),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(o.signal);const i=o.client||r;return f([_RemoteClient_js__WEBPACK_IMPORTED_MODULE_5__["default"].connect(r,o.schedule)],{...o,client:i})}if(await g(),(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(o.signal),"dedicated"===i){const r=c++%a;return f([await l[r].open(e,o)],o)}if(o.maxNumWorkers&&o.maxNumWorkers>0){const r=Math.min(o.maxNumWorkers,a);if(r<a){const t=new Array(r);for(let n=0;n<r;++n){const r=c++%a;t[n]=l[r].open(e,o)}return f(t,o)}}return f(l.map((r=>r.open(e,o))),o)}function w(){d&&(h.abort(),d=null);for(let r=0;r<l.length;r++)l[r]&&l[r].terminate();l.length=0}let h,d=null;async function g(){if(d)return d;h=new AbortController;const r=[];for(let t=0;t<a;t++){const e=_WorkerOwner_js__WEBPACK_IMPORTED_MODULE_6__["default"].create(t).then((r=>(l[t]=r,r)));r.push(e)}return d=Promise.all(r),d}


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

/***/ "./node_modules/@arcgis/core/layers/support/LOD.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LOD.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var i;let l=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new i({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"cols",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__.Integer,json:{write:!0}})],l.prototype,"level",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:String,json:{write:!0}})],l.prototype,"levelValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],l.prototype,"resolution",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"rows",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,json:{write:!0}})],l.prototype,"scale",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.LOD")],l);const p=l;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TileInfo.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TileInfo.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ z; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/support/webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _LOD_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LOD.js */ "./node_modules/@arcgis/core/layers/support/LOD.js");
/* harmony import */ var _TileKey_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TileKey.js */ "./node_modules/@arcgis/core/layers/support/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var w;const x=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__.JSONMap({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let j=w=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{static create(e={}){const{resolutionFactor:t=1,scales:o,size:r=256,spatialReference:i=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].WebMercator,numLODs:l=24}=e;if(!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.isValid)(i)){const e=[];if(o)for(let t=0;t<o.length;t++){const s=o[t];e.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:t,scale:s,resolution:s}))}else{let t=5e-4;for(let o=l-1;o>=0;o--)e.unshift(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:o,scale:t,resolution:t})),t*=2}return new w({dpi:96,lods:e,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](0,0,i),size:[r,r],spatialReference:i})}const n=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.getInfo)(i),p=e.origin?new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:e.origin.x,y:e.origin.y,spatialReference:i}):new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"](n?{x:n.origin[0],y:n.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),u=96,d=1/((0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.getMetersPerUnitForSR)(i)*39.37*u),g=[];if(o)for(let s=0;s<o.length;s++){const e=o[s],t=e*d;g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:s,scale:e,resolution:t}))}else{let e=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.isGeographic)(i)?512/r*591657527.5917094:256/r*591657527.591555;const o=Math.ceil(l/t);g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:0,scale:e,resolution:e*d}));for(let s=1;s<o;s++){const o=e/2**t,r=o*d;g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:s,scale:o,resolution:r})),e=o}}return new w({dpi:u,lods:g,origin:p,size:[r,r],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.getInfo)(e);return e.isWrappable&&!!o&&Math.abs(o.origin[0]-t.x)<=o.dx}return!1}readOrigin(e,t){return _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const s=[],r=this._levelToLOD={};e&&(t=-1/0,o=1/0,e.forEach((e=>{s.push(e.scale),t=e.scale>t?e.scale:t,o=e.scale<o?e.scale:o,r[e.level]=e}))),this._set("scales",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const o=Math.floor(e),s=o+1;return t[o]/(t[o]/t[s])**(e-o)}scaleToZoom(e){const t=this.scales,o=t.length-1;let s=0;for(;s<o;s++){const o=t[s],r=t[s+1];if(o<=e)return s;if(r===e)return s+1;if(o>e&&r<e)return s+Math.log(o/e)/Math.log(o/r)}return s}tileAt(e,t,o,s){const r=this.lodAt(e);if(!r)return null;let i,l;if("number"==typeof t)i=t,l=o;else if((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__.equals)(t.spatialReference,this.spatialReference))i=t.x,l=t.y,s=o;else{const e=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_15__.project)(t,this.spatialReference);if(null==e)return null;i=e.x,l=e.y,s=o}const n=r.resolution*this.size[0],p=r.resolution*this.size[1];return s||(s=new _TileKey_js__WEBPACK_IMPORTED_MODULE_17__.TileKey(null,0,0,0,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.create)())),s.level=e,s.row=Math.floor((this.origin.y-l)/p+.001),s.col=Math.floor((i-this.origin.x)/n+.001),this.updateTileInfo(s),s}updateTileInfo(e,t=w.ExtrapolateOptions.NONE){let o=this.lodAt(e.level);if(!o&&t===w.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(o=t)}if(!o)return;const s=e.level-o.level,r=o.resolution*this.size[0]/2**s,i=o.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__.create)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const o=this.lodAt(t.level);if(null==o)return null;const{resolution:s}=o,r=s*this.size[0],i=s*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+r,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return w.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const o=[],s=this.lods.length-t;for(let r=0;r<s;r++){const e=r+t,{scale:s,resolution:i}=e>=0?this.lods[e]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};o.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]({level:r,scale:s,resolution:i}))}return new w({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:o})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const s=e[o];this._upsampleLevels[s.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/s.resolution:0},t=s}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],j.prototype,"compressionQuality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Number,json:{write:!0}})],j.prototype,"dpi",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{read:x.read,write:x.write,origins:{"web-scene":{read:!1,write:!1}}}})],j.prototype,"format",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],j.prototype,"isWrappable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:!0}})],j.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("origin")],j.prototype,"readOrigin",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:[_LOD_js__WEBPACK_IMPORTED_MODULE_16__["default"]],value:null,json:{write:!0}})],j.prototype,"lods",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],j.prototype,"scales",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],j.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__.reader)("size",["rows","cols"])],j.prototype,"readSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__.writer)("size",{cols:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer},rows:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.Integer}})],j.prototype,"writeSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:!0}})],j.prototype,"spatialReference",void 0),j=w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.support.TileInfo")],j),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(j||(j={}));const z=j;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/TileKey.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TileKey.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileKey: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,o,e=void 0){this.id=t,this.level=s,this.row=i,this.col=o,this.extent=e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureServiceTiles2D: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_support_TileKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../layers/support/TileKey.js */ "./node_modules/@arcgis/core/layers/support/TileKey.js");
/* harmony import */ var _interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../interactive/snapping/featureSources/featureServiceSource/tileUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/tileUtils.js");
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../support/layerViewUtils.js */ "./node_modules/@arcgis/core/views/support/layerViewUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>(0,_interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__.distanceToTile)(t,e)-(0,_interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__.distanceToTile)(t,i))),e}_scaleEnabled(){return (0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_10__.scaleBoundsPredicate)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,r=[];for(const{row:o,colFrom:s,colTo:n}of e)for(let e=s;e<=n;e++){const s=t.normalizeCol(e),n=new _layers_support_TileKey_js__WEBPACK_IMPORTED_MODULE_8__.TileKey(null,i,o,s);this.tileInfo.updateTileInfo(n),r.push(n)}return r}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.watch)((()=>this.view?.state?.viewpoint),(()=>this.notifyChange("tilesCoveringView")),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.sync))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],p.prototype,"tiles",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],p.prototype,"_scaleEnabled",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],p.prototype,"tilesCoveringView",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],p.prototype,"tileInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],p.prototype,"tileSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({constructOnly:!0})],p.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({constructOnly:!0})],p.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],p.prototype,"pointOfInterest",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],p);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureServiceTiles3D: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _layers_support_TileKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../layers/support/TileKey.js */ "./node_modules/@arcgis/core/layers/support/TileKey.js");
/* harmony import */ var _interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../interactive/snapping/featureSources/featureServiceSource/tileUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/tileUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const r=e.map((e=>(0,_interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__.distanceToTile)(t,e)));for(let i=1;i<r.length;i++)if(r[i-1]>r[i])return e.sort(((e,r)=>(0,_interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__.distanceToTile)(t,e)-(0,_interactive_snapping_featureSources_featureServiceSource_tileUtils_js__WEBPACK_IMPORTED_MODULE_9__.distanceToTile)(t,r))),e.slice()}return e}get tilesCoveringView(){return(this.view.featureTiles?.tiles?.toArray()??[]).map(p)}get tileInfo(){return this.view.featureTiles?.tilingScheme?.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){const e=this.pointOfInterest;return null!=e?e:this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.watch)((()=>this.view.featureTiles),(e=>{this.removeHandles(a),e&&this.addHandles(e.addClient(),a)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.initial))}};function p({lij:[e,t,r],extent:i}){return new _layers_support_TileKey_js__WEBPACK_IMPORTED_MODULE_8__.TileKey(`${e}/${t}/${r}`,e,t,r,i)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],c.prototype,"tiles",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],c.prototype,"tilesCoveringView",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],c.prototype,"tileInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({readOnly:!0})],c.prototype,"tileSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({constructOnly:!0})],c.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],c.prototype,"pointOfInterest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)()],c.prototype,"_effectivePointOfInterest",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],c);const a="feature-tiles";


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexSnappingCandidate: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/constraints.js */ "./node_modules/@arcgis/core/views/interactive/sketch/constraints.js");
/* harmony import */ var _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/FeatureSnappingCandidate.js");
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hints/PointSnappingHint.js */ "./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class r extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__.FeatureSnappingCandidate{constructor(n){super({...n,constraint:new _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__.PointConstraint(n.targetPoint)})}get hints(){return[new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__.PointSnappingHint(this.targetPoint,this.isDraped,this.domain)]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureServiceSnappingSource.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureServiceSnappingSource.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureServiceSnappingSource: function() { return /* binding */ F; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_memoize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/memoize.js */ "./node_modules/@arcgis/core/core/memoize.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/support/UpdatingHandles.js */ "./node_modules/@arcgis/core/core/support/UpdatingHandles.js");
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layers/support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../support/elevationInfoUtils.js */ "./node_modules/@arcgis/core/support/elevationInfoUtils.js");
/* harmony import */ var _2d_interactive_snapping_featureSources_featureServiceSource_FeatureServiceTiles2D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js */ "./node_modules/@arcgis/core/views/2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js");
/* harmony import */ var _3d_interactive_snapping_featureSources_featureServiceSource_FeatureServiceTiles3D_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js */ "./node_modules/@arcgis/core/views/3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js");
/* harmony import */ var _snappingUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../snappingUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js");
/* harmony import */ var _queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./queryEngineUtils.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js");
/* harmony import */ var _WorkerTileTreeDebugger_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WorkerTileTreeDebugger.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/WorkerTileTreeDebugger.js");
/* harmony import */ var _featureServiceSource_FeatureServiceSnappingSourceWorkerHandle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./featureServiceSource/FeatureServiceSnappingSourceWorkerHandle.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorkerHandle.js");
/* harmony import */ var _featureServiceSource_FeatureServiceTilesSimple_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./featureServiceSource/FeatureServiceTilesSimple.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTilesSimple.js");
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../support/debugFlags.js */ "./node_modules/@arcgis/core/views/support/debugFlags.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let F=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.isSubtypeGroupLayer)(this._layer)){if(!this.layerSource.sublayerSources.some((e=>e.enabled&&e.layer.visible)))return!0}return!!this.view&&(!1!==this._layerView?.suspended||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:r}=this,{layer:i}=r,{fieldsIndex:s,timeInfo:o,floorInfo:a,subtypeField:n}=i,l=t&&"filter"in t?t.filter:null,d=l?.where&&"1=1"!==l.where?this._getOrLoadWhereFields(l.where,s):[];if(l?.timeExtent&&o){const{startField:e,endField:t}=o,r=s.get(e)?.name??e,i=s.get(t)?.name??t;r&&d.push(r),i&&d.push(i)}if(e?.map&&(0,_snappingUtils_js__WEBPACK_IMPORTED_MODULE_17__.isUtilityNetworkWebMap)(e.map)&&e.map.utilityNetworks?.find((e=>e.isUtilityLayer(i)))){const e=i.fieldsIndex.get("assetGroup")?.name,t=i.fieldsIndex.get("assetType")?.name;e&&t&&(d.push(e),d.push(t))}if(i&&a?.floorField&&e?.floors?.length){const e=s.get(a.floorField)?.name??a.floorField;e&&d.push(e)}if(n){const e=s.get(n)?.name??n;e&&d.push(e)}return new Set(d)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:r}=this._layer,i=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...r,token:t}:r,viewType:i}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_12__.UpdatingHandles,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=(0,_core_memoize_js__WEBPACK_IMPORTED_MODULE_4__.memoize)(_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_18__.makeGetGroundElevation)}initialize(){let e;const t=this.view;if(null==t||t.destroyed)this._tilesOfInterest=new _featureServiceSource_FeatureServiceTilesSimple_js__WEBPACK_IMPORTED_MODULE_21__.FeatureServiceTilesSimple({layer:this._layer}),e=this._workerHandle=new _featureServiceSource_FeatureServiceSnappingSourceWorkerHandle_js__WEBPACK_IMPORTED_MODULE_20__.FeatureServiceSnappingSourceWorkerHandle;else switch(t.type){case"2d":this._tilesOfInterest=new _2d_interactive_snapping_featureSources_featureServiceSource_FeatureServiceTiles2D_js__WEBPACK_IMPORTED_MODULE_15__.FeatureServiceTiles2D({view:t,layer:this._layer}),e=this._workerHandle=new _featureServiceSource_FeatureServiceSnappingSourceWorkerHandle_js__WEBPACK_IMPORTED_MODULE_20__.FeatureServiceSnappingSourceWorkerHandle;break;case"3d":{const{resourceController:r}=t,i=this._layer;this._tilesOfInterest=new _3d_interactive_snapping_featureSources_featureServiceSource_FeatureServiceTiles3D_js__WEBPACK_IMPORTED_MODULE_16__.FeatureServiceTiles3D({view:t}),e=this._workerHandle=new _featureServiceSource_FeatureServiceSnappingSourceWorkerHandle_js__WEBPACK_IMPORTED_MODULE_20__.FeatureServiceSnappingSourceWorkerHandle({schedule:e=>r.immediate.schedule(e),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(e,r)=>{const s=await t.whenLayerView(i);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(r),s.elevationAlignPointsInFeatures(e,r)},queryForSymbologySnapping:async(e,r)=>{const s=await t.whenLayerView(i);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.throwIfAborted)(r),s.queryForSymbologySnapping(e,r)}}),this.addHandles([t.elevationProvider.on("elevation-change",(({context:t})=>{const{elevationInfo:r}=i;(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__.elevationContextAffectsAlignment)(t,r)&&(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.notifyElevationSourceChange())})),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>i.elevationInfo),(()=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.notifyElevationSourceChange())),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.initial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this._layerView?.layer?.renderer),(()=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.notifySymbologyChange())),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.initial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this._layerView?.symbologySnappingSupported??!1),(t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.setSymbologySnappingSupported(t))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.initial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.on)((()=>this._layerView?.layer),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}this.addHandles([(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__.destroyHandle)(e)]),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.updateTiles(this._updateTilesParameters,null))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.initial),this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this.configuration),(t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.configure(t,null))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.sync),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this._layer.historicMoment),(t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.setHistoricMoment(t))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.syncAndInitial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this._outFields),(t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.updateOutFields(t))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.initial),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>this._isSuspended),(t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.setSuspended(t))),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.syncAndInitial)]),null!=t&&this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.watch)((()=>_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_22__["default"].FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this._debug?(this._debug=new _WorkerTileTreeDebugger_js__WEBPACK_IMPORTED_MODULE_19__.WorkerTileTreeDebugger({view:t,handle:e}),this.addHandles((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_3__.destroyHandle)(this._debug),"debug")):!r&&this._debug&&this.removeHandles("debug")}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_6__.initial)),this.addHandles([this.layerSource.layer.on("edits",(t=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.ignoreAbortErrors)(e.handleEdits(t,null)))),this.layerSource.layer.on("apply-edits",(e=>this._updatingHandles.addPromise(e.result)))])}destroy(){this._updatingHandles.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:r,point:i}=e;this._tilesOfInterest.pointOfInterest=r.arrayToPoint(i);const s=this._memoizedMakeGetGroundElevation(this.view,r.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>(0,_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_18__.convertSnappingCandidate)(e,s)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const e=(0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__.createTask)((async()=>{const e=await __webpack_require__.e(/*! import() | core-sql-WhereClause */ "sql-WhereClause").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../core/sql/WhereClause.js */ "./node_modules/@arcgis/core/core/sql/WhereClause.js"));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!i)return[];try{return i.create(e,{fieldsIndex:t}).fieldNames}catch(s){return[]}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({constructOnly:!0})],F.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({constructOnly:!0})],F.prototype,"layerSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({constructOnly:!0})],F.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],F.prototype,"_tilesOfInterest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],F.prototype,"_updateTilesParameters",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],F.prototype,"_layerView",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],F.prototype,"_isSuspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],F.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],F.prototype,"_outFields",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],F.prototype,"configuration",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],F.prototype,"availability",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],F.prototype,"_loadWhereModuleTask",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],F.prototype,"_whereModule",void 0),F=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],F);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/WorkerTileTreeDebugger.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/WorkerTileTreeDebugger.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkerTileTreeDebugger: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _support_TileTreeDebugger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../support/TileTreeDebugger.js */ "./node_modules/@arcgis/core/views/support/TileTreeDebugger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let n=class extends _support_TileTreeDebugger_js__WEBPACK_IMPORTED_MODULE_9__.TileTreeDebugger{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles((0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeHandle)((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((r=>{e.set(r.data.id,r.featureCount),t.set(r.data.id,r.state)}));const r=r=>{const o=t.get(r),s=e.get(r)??"?";return o?`${o}:${s}\n${r}`:`store:${s}\n${r}`},o=new Map;return this._debugInfo.storedTiles.forEach((e=>{o.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{o.set(e.data.id,e.data)})),Array.from(o.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromExtent((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__.toExtent)(e.extent,this.view.spatialReference)),label:r(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],n.prototype,"handle",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],n);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorkerHandle.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceSnappingSourceWorkerHandle.js ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureServiceSnappingSourceWorkerHandle: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/support/UpdatingHandles.js */ "./node_modules/@arcgis/core/core/support/UpdatingHandles.js");
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/workers/WorkerHandle.js */ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../geometry/support/typeUtils.js */ "./node_modules/@arcgis/core/geometry/support/typeUtils.js");
/* harmony import */ var _layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../layers/graphics/dehydratedPoint.js */ "./node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_9__.UpdatingHandles,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:o}of e.pointsInFeatures)for(const{z:e}of o)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this.updateOutFields=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.debounce)((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.abortMaybe)(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new y(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",(({updating:e})=>this._workerHandleUpdating=e)),this._workerHandle.on("notify-availability",(({availability:e})=>this._set("availability",e)))])}async setup(e,t){const o=c(e.layer);if(null==o)return;const i={configuration:h(e.configuration),serviceInfo:o,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const o=h(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:o,filter:i,coordinateHelper:n}=e,a={...e,point:(0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_12__.makeDehydratedPoint)(o[0],o[1],o[2],n.spatialReference.toJSON()),filter:i?.toJSON()};return this._workerHandle.invoke(a,t)}async updateTiles(e,t){const o={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async handleEdits({historicMoment:e,addedFeatures:t,deletedFeatures:i,updatedFeatures:n},a){const s={historicMoment:e,addedFeatures:t?.map((({objectId:e})=>e)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSome)??[],deletedFeatures:i?.map((({objectId:e,globalId:t})=>({objectId:e,globalId:t})))??[],updatedFeatures:n?.map((({objectId:e})=>e)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSome)??[]};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("handleEdits",s,a)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},a))}async setHistoricMoment(e,t){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setHistoricMoment",{moment:e},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function h(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}function c(e){return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_11__.featureGeometryTypeKebabDictionary.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],u.prototype,"schedule",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],u.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],u.prototype,"elevationAlignPointsInFeatures",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],u.prototype,"queryForSymbologySnapping",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],u.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],u.prototype,"availability",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)()],u.prototype,"_workerHandleUpdating",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],u);class y extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_10__.WorkerHandle{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTilesSimple.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTilesSimple.js ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureServiceTilesSimple: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../layers/support/LOD.js */ "./node_modules/@arcgis/core/layers/support/LOD.js");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../layers/support/TileInfo.js */ "./node_modules/@arcgis/core/layers/support/TileInfo.js");
/* harmony import */ var _layers_support_TileKey_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../layers/support/TileKey.js */ "./node_modules/@arcgis/core/layers/support/TileKey.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get tiles(){return[new _layers_support_TileKey_js__WEBPACK_IMPORTED_MODULE_11__.TileKey("0/0/0",0,0,0,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__.fromValues)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_10__["default"]({origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_7__["default"]({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_9__["default"]({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],a.prototype,"tiles",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],a.prototype,"tileInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],a.prototype,"tileSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],a.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],a.prototype,"pointOfInterest",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],a);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/tileUtils.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/featureServiceSource/tileUtils.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distanceToTile: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/boundedPlane.js */ "./node_modules/@arcgis/core/chunks/boundedPlane.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a(s,e){return (0,_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_2__.g)(e.extent,c),(0,_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_2__.h)(c,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(n,s.x,s.y,0))}const c=(0,_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_2__.a)(),n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSnappingCandidate: function() { return /* binding */ o; },
/* harmony export */   makeGetGroundElevation: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/normalizedPoint.js */ "./node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js");
/* harmony import */ var _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidates/DrapedEdgeSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/DrapedEdgeSnappingCandidate.js");
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidates/EdgeSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js");
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidates/VertexSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function a({x:e,y:n,z:d}){return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(e,n,d??0)}function o(t,o){switch(t.type){case"edge":return t.draped?new _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__.DrapedEdgeSnappingCandidate({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.markAsTarget)(a(t.target)),objectId:t.objectId,getGroundElevation:o}):new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__.EdgeSnappingCandidate({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.markAsTarget)(a(t.target)),objectId:t.objectId,isDraped:!1});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__.VertexSnappingCandidate({targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.markAsTarget)(a(t.target)),objectId:t.objectId,isDraped:!1})}}function i(e,t){return null!=e&&"3d"===e.type?(n,d)=>e.elevationProvider.getElevation(n,d,0,t,"ground"):()=>null}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/hints/PointSnappingHint.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PointSnappingHint: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SnappingHint.js */ "./node_modules/@arcgis/core/views/interactive/snapping/hints/SnappingHint.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class n extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__.SnappingHint{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.p)(this.point,s.point)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/support/TileTreeDebugger.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/TileTreeDebugger.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TileTreeDebugger: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _symbols_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../symbols/PointSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PointSymbol3D.js");
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../symbols/SimpleFillSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js");
/* harmony import */ var _symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../symbols/TextSymbol.js */ "./node_modules/@arcgis/core/symbols/TextSymbol.js");
/* harmony import */ var _symbols_TextSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../symbols/TextSymbol3DLayer.js */ "./node_modules/@arcgis/core/symbols/TextSymbol3DLayer.js");
/* harmony import */ var _symbols_support_Symbol3DVerticalOffset_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../symbols/support/Symbol3DVerticalOffset.js */ "./node_modules/@arcgis/core/symbols/support/Symbol3DVerticalOffset.js");
/* harmony import */ var _symbols_callouts_LineCallout3D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../symbols/callouts/LineCallout3D.js */ "./node_modules/@arcgis/core/symbols/callouts/LineCallout3D.js");
/* harmony import */ var _symbols_callouts_LineCallout3DBorder_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../symbols/callouts/LineCallout3DBorder.js */ "./node_modules/@arcgis/core/symbols/callouts/LineCallout3DBorder.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let d=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_4__["default"]{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=u.map((e=>new _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_13__["default"]({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=e=>{if(null!=e.label)return e.label;let s=e.lij.toString();return null!=e.loadPriority&&(s+=` (${e.loadPriority})`),e.measures&&(s+=`[${e.measures.effectiveLevelForLod}]`),s},t=this.getTiles(),i=new Array,a=new Set((this._labels.size,this._labels.keys()));t.forEach(((m,u)=>{const d=m.lij.toString();a.delete(d);const g=m.measures?.effectiveLevelForLod??m.lij[0],f=m.geometry;if(this.enablePolygons&&!this._polygons.has(d)){const e=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({geometry:f,symbol:this._symbols[g%this._symbols.length]});this._polygons.set(d,e),i.push(e)}if(this.enableLabels){const a=e(m),g=u/(t.length-1),w=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.lerp)(0,200,g),_=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__.lerp)(20,6,g)/.75,j=null!=m.loadPriority&&m.loadPriority>=t.length,v=new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([w,j?0:w,j?0:w]),S="3d"===this.view.type?()=>new _symbols_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_12__["default"]({verticalOffset:new _symbols_support_Symbol3DVerticalOffset_js__WEBPACK_IMPORTED_MODULE_16__["default"]({screenLength:40/.75}),callout:new _symbols_callouts_LineCallout3D_js__WEBPACK_IMPORTED_MODULE_17__["default"]({color:new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]("white"),border:new _symbols_callouts_LineCallout3DBorder_js__WEBPACK_IMPORTED_MODULE_18__["default"]({color:new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]("black")})}),symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"]([new _symbols_TextSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_15__["default"]({text:a,halo:{color:"white",size:1/.75},material:{color:v},size:_})])}):()=>new _symbols_TextSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"]({text:a,haloColor:"white",haloSize:1/.75,color:v,size:_}),L=this._labels.get(d);if(L){const e=S();null!=L.symbol&&JSON.stringify(e)===JSON.stringify(L.symbol)||(L.symbol=e)}else{const e=new _Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]({geometry:f.extent.center,symbol:S()});this._labels.set(d,e),i.push(e)}}}));const m=new Array;a.forEach((e=>{const s=this._polygons.get(e);null!=s&&(m.push(s),this._polygons.delete(e));const o=this._labels.get(e);null!=o&&(m.push(o),this._labels.delete(e))})),this.view.graphics.removeMany(m),this.view.graphics.addMany(i)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({constructOnly:!0})],d.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({readOnly:!0})],d.prototype,"updating",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)()],d.prototype,"enabled",null),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)("esri.views.support.TileTreeDebugger")],d);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/support/debugFlags.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/debugFlags.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ E; }
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
let e=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(...arguments),this.SCHEDULER_LOG_SLOW_TASKS=!1,this.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"SCHEDULER_LOG_SLOW_TASKS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],e.prototype,"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.support.debugFlags")],e);const E=new e;


/***/ })

}]);
//# sourceMappingURL=featureSources-FeatureServiceSnappingSource.js.map