"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["geometry-geometryEngineAsync"],{

/***/ "./node_modules/@arcgis/core/geometry/geometryEngineAsync.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryEngineAsync.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buffer: function() { return /* binding */ L; },
/* harmony export */   changeDefaultSpatialReferenceTolerance: function() { return /* binding */ X; },
/* harmony export */   clearDefaultSpatialReferenceTolerance: function() { return /* binding */ Y; },
/* harmony export */   clip: function() { return /* binding */ y; },
/* harmony export */   contains: function() { return /* binding */ p; },
/* harmony export */   convexHull: function() { return /* binding */ j; },
/* harmony export */   crosses: function() { return /* binding */ m; },
/* harmony export */   cut: function() { return /* binding */ w; },
/* harmony export */   densify: function() { return /* binding */ C; },
/* harmony export */   difference: function() { return /* binding */ E; },
/* harmony export */   disjoint: function() { return /* binding */ A; },
/* harmony export */   distance: function() { return /* binding */ d; },
/* harmony export */   equals: function() { return /* binding */ g; },
/* harmony export */   extendedSpatialReferenceInfo: function() { return /* binding */ l; },
/* harmony export */   flipHorizontal: function() { return /* binding */ I; },
/* harmony export */   flipVertical: function() { return /* binding */ q; },
/* harmony export */   generalize: function() { return /* binding */ B; },
/* harmony export */   geodesicArea: function() { return /* binding */ K; },
/* harmony export */   geodesicBuffer: function() { return /* binding */ P; },
/* harmony export */   geodesicDensify: function() { return /* binding */ U; },
/* harmony export */   geodesicLength: function() { return /* binding */ M; },
/* harmony export */   intersect: function() { return /* binding */ D; },
/* harmony export */   intersectLinesToPoints: function() { return /* binding */ Q; },
/* harmony export */   intersects: function() { return /* binding */ h; },
/* harmony export */   isSimple: function() { return /* binding */ J; },
/* harmony export */   nearestCoordinate: function() { return /* binding */ T; },
/* harmony export */   nearestVertex: function() { return /* binding */ V; },
/* harmony export */   nearestVertices: function() { return /* binding */ z; },
/* harmony export */   offset: function() { return /* binding */ v; },
/* harmony export */   overlaps: function() { return /* binding */ O; },
/* harmony export */   planarArea: function() { return /* binding */ W; },
/* harmony export */   planarLength: function() { return /* binding */ F; },
/* harmony export */   relate: function() { return /* binding */ R; },
/* harmony export */   rotate: function() { return /* binding */ H; },
/* harmony export */   simplify: function() { return /* binding */ N; },
/* harmony export */   symmetricDifference: function() { return /* binding */ k; },
/* harmony export */   touches: function() { return /* binding */ S; },
/* harmony export */   union: function() { return /* binding */ b; },
/* harmony export */   within: function() { return /* binding */ x; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/workers/workers.js */ "./node_modules/@arcgis/core/core/workers/workers.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function a(n){return n?Array.isArray(n)?n.map(a):n.toJSON?n.toJSON():n:n}function i(n){return Array.isArray(n)?n.map((n=>(0,_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.fromJSON)(n))):(0,_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.fromJSON)(n)}function o(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}let c;async function u(){return c||(c=(0,_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_1__.open)("geometryEngineWorker",{strategy:"distributed"})),c}async function s(n,t){return(await u()).invoke("executeGEOperation",{operation:n,parameters:a(t)})}async function f(n,t){const e=await u();return Promise.all(e.broadcast("executeGEOperation",{operation:n,parameters:a(t)}))}function l(n){return s("extendedSpatialReferenceInfo",[n])}async function y(n,t){return i(await s("clip",[r(n),n,t]))}async function w(n,t){return i(await s("cut",[r(n),n,t]))}function p(n,t){return s("contains",[r(n),n,t])}function m(n,t){return s("crosses",[r(n),n,t])}function d(n,t,e){return s("distance",[r(n),n,t,e])}function g(n,t){return s("equals",[r(n),n,t])}function h(n,t){return s("intersects",[r(n),n,t])}function S(n,t){return s("touches",[r(n),n,t])}function x(n,t){return s("within",[r(n),n,t])}function A(n,t){return s("disjoint",[r(n),n,t])}function O(n,t){return s("overlaps",[r(n),n,t])}function R(n,t,e){return s("relate",[r(n),n,t,e])}function J(n){return s("isSimple",[r(n),n])}async function N(n){return i(await s("simplify",[r(n),n]))}async function j(n,t=!1){return i(await s("convexHull",[r(n),n,t]))}async function E(n,t){return i(await s("difference",[r(n),n,t]))}async function k(n,t){return i(await s("symmetricDifference",[r(n),n,t]))}async function D(n,t){return i(await s("intersect",[r(n),n,t]))}async function b(n,t=null){const e=o(n,t);return i(await s("union",[r(e),e]))}async function v(n,t,e,a,o,c){return i(await s("offset",[r(n),n,t,e,a,o,c]))}async function L(n,t,e,a=!1){const o=[r(n),n,t,e,a];return i(await s("buffer",o))}async function P(n,t,e,a,o,c){const u=[r(n),n,t,e,a,o,c];return i(await s("geodesicBuffer",u))}async function T(n,e,a=!0){const i=await s("nearestCoordinate",[r(n),n,e,a]);return{...i,coordinate:_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(i.coordinate)}}async function V(n,e){const a=await s("nearestVertex",[r(n),n,e]);return{...a,coordinate:_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(a.coordinate)}}async function z(n,e,a,i){return(await s("nearestVertices",[r(n),n,e,a,i])).map((n=>({...n,coordinate:_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(n.coordinate)})))}function G(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function H(n,t,e){if(null==n)throw new Z;const r=n.spatialReference;if(null==(e=e??G(n)))throw new Z;const a=n.constructor.fromJSON(await s("rotate",[r,n,t,e]));return a.spatialReference=r,a}async function I(n,t){if(null==n)throw new Z;const e=n.spatialReference;if(null==(t=t??G(n)))throw new Z;const r=n.constructor.fromJSON(await s("flipHorizontal",[e,n,t]));return r.spatialReference=e,r}async function q(n,t){if(null==n)throw new Z;const e=n.spatialReference;if(null==(t=t??G(n)))throw new Z;const r=n.constructor.fromJSON(await s("flipVertical",[e,n,t]));return r.spatialReference=e,r}async function B(n,t,e,a){return i(await s("generalize",[r(n),n,t,e,a]))}async function C(n,t,e){return i(await s("densify",[r(n),n,t,e]))}async function U(n,t,e,a=0){return i(await s("geodesicDensify",[r(n),n,t,e,a]))}function W(n,t){return s("planarArea",[r(n),n,t])}function F(n,t){return s("planarLength",[r(n),n,t])}function K(n,t,e){return s("geodesicArea",[r(n),n,t,e])}function M(n,t,e){return s("geodesicLength",[r(n),n,t,e])}async function Q(n,t){return i(await s("intersectLinesToPoints",[r(n),n,t]))}async function X(n,t){await f("changeDefaultSpatialReferenceTolerance",[n,t])}async function Y(n){await f("clearDefaultSpatialReferenceTolerance",[n])}class Z extends Error{constructor(){super("Illegal Argument Exception")}}


/***/ })

}]);
//# sourceMappingURL=geometry-geometryEngineAsync.js.map