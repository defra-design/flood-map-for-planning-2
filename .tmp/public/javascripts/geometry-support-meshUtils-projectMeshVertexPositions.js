"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["geometry-support-meshUtils-projectMeshVertexPositions"],{

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

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectMeshVertexPositions: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MeshGeoreferencedVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vertexSpaceConversion.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(n,i){const p=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_3__.convertVertexSpace)(n,_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_1__["default"].absolute);if(!p)return null;let s=p.position;return (0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__.equals)(n.spatialReference,i)||(s=new Float64Array(p.position.length),(0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__.projectBuffer)(p.position,n.spatialReference,0,s,i,0))?s:null}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorType: function() { return /* binding */ V; },
/* harmony export */   loadProjectErrorMessage: function() { return /* binding */ O; },
/* harmony export */   logProjectionError: function() { return /* binding */ F; },
/* harmony export */   projectFromPCPF: function() { return /* binding */ h; },
/* harmony export */   projectNormalFromPCPF: function() { return /* binding */ R; },
/* harmony export */   projectNormalToPCPF: function() { return /* binding */ E; },
/* harmony export */   projectTangentFromPCPF: function() { return /* binding */ G; },
/* harmony export */   projectTangentToPCPF: function() { return /* binding */ w; },
/* harmony export */   projectToPCPF: function() { return /* binding */ g; },
/* harmony export */   transformNormal: function() { return /* binding */ _; },
/* harmony export */   transformTangent: function() { return /* binding */ C; },
/* harmony export */   transformVectorENUPlateCarree: function() { return /* binding */ b; },
/* harmony export */   transformVectorWMPlateCarree: function() { return /* binding */ L; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/* harmony import */ var _Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Ellipsoid.js */ "./node_modules/@arcgis/core/geometry/support/Ellipsoid.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/vec4.js */ "./node_modules/@arcgis/core/chunks/vec4.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O="Projection may be possible after calling projection.load().";function F(r,t,o,e){r.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${o.wkid}).${e?" ":""}${e}`)}function E(r,t,o,e,n,i){return B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(i))?i:null}function R(r,t,o,e,n,i){return B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(i))?i:null}function g(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function h(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function _(t,e,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__.normalFromMat4)(Y,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.b)(e,t,Y),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasScaling)(Y)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(e,e),e}function C(t,o,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__.fromMat4)(Y,n),(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__.t)(o,t,Y),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.hasScaling)(Y)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(o,o,4),o}function b(r,o,e,n){const i=o===V.NORMAL;return k(r,o,e,((r,o)=>{const e=Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(r));o[0]=i?e:1/e,o[1]=1}),n)}function L(r,t,o,e){const n=t===V.NORMAL;return k(r,t,o,((r,t)=>{const o=Math.cosh(-r/_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__.earth.radius);t[0]=1,t[1]=n?o:1/o}),e)}function k(r,t,o,e,n){const i=t===V.NORMAL?3:4,f=[0,0];for(let c=0,a=1;c<r.length;c+=i,a+=3){e(o[a],f);const t=r[c]*f[0],s=r[c+1]*f[1],m=r[c+2],u=1/Math.sqrt(t*t+s*s+m*m);n[c]=t*u,n[c+1]=s*u,n[c+2]=m*u,4===i&&(n[c+3]=r[c+3])}return n}function w(r,t,o,e,n,i){if(!B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}function G(r,t,o,e,n,i){if(!B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(r,16),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f64.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__.BufferViewVec3f.fromTypedArray(i,16)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}var V,x;function v(r,t,n,f,c){switch((0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__.computeTranslationToOriginAndRotation)(f,n,q,f),r===x.FROM_PCPF&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.invert)(q,q),t){case V.NORMAL:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__.normalFromMat4)(c,q);case V.TANGENT:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__.fromMat4)(c,q)}}function B(r,t,o,e,n,i,f,s){if(!t)return;const m=e.count;if($(n))for(let a=0;a<m;a++)i.getVec(a,S),t.getVec(a,U),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(U,U,v(r,o,S,f,Y)),s.setVec(a,U);else for(let u=0;u<m;u++){i.getVec(u,S),t.getVec(u,U);const n=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__.y2lat)(e.get(u,1));let m=Math.cos(n);o===V.TANGENT!=(r===x.TO_PCPF)&&(m=1/m),v(r,o,S,f,Y),r===x.TO_PCPF?(Y[0]*=m,Y[1]*=m,Y[2]*=m,Y[3]*=m,Y[4]*=m,Y[5]*=m):(Y[0]*=m,Y[3]*=m,Y[6]*=m,Y[1]*=m,Y[4]*=m,Y[7]*=m),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(U,U,Y),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(U,U),s.setVec(u,U)}return s}function $(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.isCGCS2000)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.isMars)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.isMoon)(r)}!function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"}(V||(V={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(x||(x={}));const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),q=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),Y=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertVertexSpace: function() { return /* binding */ B; },
/* harmony export */   getUnitToSpatialReferenceScaleConversion: function() { return /* binding */ nt; },
/* harmony export */   projectPointToVertexSpace: function() { return /* binding */ k; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../spatialReferenceEllipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js");
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../projection/projectPointToVector.js */ "./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projection.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const M=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function k(t,n,{vertexSpace:r,spatialReference:e}){if("georeferenced"===r.type){const o=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__.projectPointToVector)(n,o,e))return!1;const{origin:i}=r;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.d)(t,o,i),!0}const o=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__.getSphericalPCPF)(e),i=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__.projectPointToVector)(n,i,o))return!1;const{origin:a}=r,s=lt;if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__.computeTranslationToOriginAndRotation)(e,a,s,o))return!1;const c=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.invert)(lt,s);return null!=c&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(t,i,c),!0)}function B(t,n,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=t,l=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__.isRelativeVertexSpace)(e)?o:null,s=X(t.spatialReference,r,at.SOURCE_AND_TARGET);if((0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__.vertexSpaceEquals)(e,n)&&(!l||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.exactEquals)(l.localMatrix,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.IDENTITY))&&Y(s)){const{position:t,normal:n,tangent:e}=i,o=r?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?e:e?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?H(t,t.vertexSpace,n.origin,r):P(t,t.vertexSpace,n.origin,r);case"georeferenced":return"local"===n.type?q(t,t.vertexSpace,n.origin,r):L(t,t.vertexSpace,n.origin,r)}}function L({vertexAttributes:t,transform:n,spatialReference:r},{origin:e},o,i){const l=X(r,i,at.SOURCE_AND_TARGET),a=e||!Y(l)?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.copy)(rt,n?.localMatrix??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.IDENTITY):null;a&&W(a,r,i,at.SOURCE_AND_TARGET);const{position:c,normal:u,tangent:m}=a?I(t,a):t,p=i?.allowBufferReuse,g=p?c:new Float64Array(c.length);let R=c;if(e&&(R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(g,R,e)),o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.v)(it,o);R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(g,R,t)}return{position:R!==t.position||p?R:R.slice(),normal:u!==t.normal||p?u:u?.slice(),tangent:m!==t.tangent||p?m:m?.slice()}}function V(t,n){return n?.useEllipsoid&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__.isEarth)(t)?_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__.WGS84ECEFSpatialReference:(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__.getSphericalPCPF)(t)}function P({spatialReference:t,vertexAttributes:n,transform:r},{origin:e},o,i){const l=V(t,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__.computeTranslationToOriginAndRotation)(t,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),t,l),null;r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.multiply)(rt,rt,r.localMatrix),W(rt,t,i,at.SOURCE);const a=new Float64Array(n.position.length),s=J(n.position,rt,t,a,l);if(!s)return null;const u=K(s,t,a,l,n.normal,rt);if(n.normal&&!u)return null;const f=Q(s,t,a,l,n.tangent,rt);if(n.tangent&&!f)return null;if(o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.v)(it,o);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(s,s,t)}return{position:s,normal:u,tangent:f}}function q({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},i,a){const s=V(n,a);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__.computeTranslationToOriginAndRotation)(n,i,rt,s))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),n,s),null;const c=1/X(n,a,at.TARGET);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.scale)(rt,rt,[c,c,c]);const f=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.invert)(et,rt),{position:m,normal:p,tangent:g}=z(t,e,r),A=new Float64Array(m.length),R=Z(m,n,f,A,s);if(!R)return null;const x=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__.normalFromMat4)(ot,f),E=$(p,m,n,A,s,x,p!==t.normal?p:void 0);if(!E&&p)return null;const T=tt(g,m,n,A,s,x,g!==t.tangent?g:void 0);return!T&&g?null:{position:R,normal:E,tangent:T}}function z(t,n,r){if(!n)return t;if(!r){const{position:r,normal:e,tangent:o}=t;return{position:(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(new Float64Array(r.length),r,n),tangent:o,normal:e}}const e=I(t,r.localMatrix);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(e.position,e.position,n),e}function H({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},o,i){const a=V(n,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__.computeTranslationToOriginAndRotation)(n,e,rt,a))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),n,a),null;if(r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.multiply)(rt,rt,r.localMatrix),!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__.computeTranslationToOriginAndRotation)(n,o,et,a))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),a,n),null;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.invert)(et,et);const s=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.multiply)(rt,et,rt);return W(s,n,i,at.SOURCE_AND_TARGET),I(t,s)}function I(t,n){const r=new Float64Array(t.position.length);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(r,t.position,n);const e=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return e&&t.normal&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.transformNormal)(t.normal,e,n),o&&t.tangent&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.transformTangent)(t.tangent,o,n),{position:r,normal:e,tangent:o}}function J(t,n,r,e,o){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(e,t,n);const i=new Float64Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.projectFromPCPF)(e,o,i,r)?i:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),o,r),null)}function K(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.transformNormal)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.projectNormalFromPCPF)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),e,n),null)}function Q(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.transformTangent)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.projectTangentFromPCPF)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),e,n),null)}function W(t,n,r,e){const o=X(n,r,e);Y(o)||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__.scale)(t,t,[o,o,o])}function X(t,n,r){const e=!!(r&at.SOURCE),o=!!(r&at.TARGET),i=n?.sourceUnit,l=n?.targetUnit;if(!i&&!l)return 1;let a=nt(i,t);e||!i||Y(a)||(M().warn("source unit conversion not supported"),a=1);let s=1/nt(l,t);return o||!l||Y(s)||(M().warn("target unit conversion not supported"),s=1),a*s}function Y(t){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__.floatEqualUlp)(t,1)}function Z(t,n,r,e,o){const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.projectToPCPF)(t,n,e,o);if(!i)return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),n,o),null;const l=new Float64Array(i.length);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(l,i,r),l}function $(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.projectNormalToPCPF)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),r,o),null)}function tt(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.projectTangentToPCPF)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i,4),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__.logProjectionError)(M(),r,o),null)}function nt(t,n){if(null==t)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.getMetersPerCartesianUnitForSR)(n);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__.convertUnit)(o,"meters",t)}const rt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),et=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.create)(),ot=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),it=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),lt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__.create)();var at;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(at||(at={}));


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAbsoluteVertexSpace: function() { return /* binding */ p; },
/* harmony export */   isMeshWithRelativeVertexSpace: function() { return /* binding */ g; },
/* harmony export */   isRelativeVertexSpace: function() { return /* binding */ a; },
/* harmony export */   selectVertexSpace: function() { return /* binding */ s; },
/* harmony export */   vertexSpaceEquals: function() { return /* binding */ m; },
/* harmony export */   vertexSpaceOriginToPoint: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/deprecate.js */ "./node_modules/@arcgis/core/core/deprecate.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeshGeoreferencedVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js");
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MeshLocalVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.geometry.Mesh")}function p(e){return!a(e)}function a(e){return null!=e.origin}function g(e){return a(e.vertexSpace)}function u(e,r){if(!a(e))return null;const[n,i,t]=e.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({x:n,y:i,z:t,spatialReference:r})}function s(r,n){const{x:o,y:p,z:a,spatialReference:g}=r,u=[o,p,a??0];void 0!==n?.geographic&&((0,_core_deprecate_js__WEBPACK_IMPORTED_MODULE_0__.deprecated)(c(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),n.vertexSpace&&c().warn("Deprecated geographic flag ignored since vertexSpace option is provided."));return"local"===(n?.vertexSpace??l(n?.geographic)??f(g))?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_5__["default"]({origin:u}):new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_4__["default"]({origin:u})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function l(e){return null==e?void 0:e?"local":"georeferenced"}function m(e,r){return e.type===r.type&&(e.origin===r.origin||null!=e.origin&&null!=r.origin&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.p)(e.origin,r.origin))}


/***/ })

}]);
//# sourceMappingURL=geometry-support-meshUtils-projectMeshVertexPositions.js.map