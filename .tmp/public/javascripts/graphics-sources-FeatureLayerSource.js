"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["graphics-sources-FeatureLayerSource"],{

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

/***/ "./node_modules/@arcgis/core/core/pbf.js":
/*!***********************************************!*\
  !*** ./node_modules/@arcgis/core/core/pbf.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectPool.js */ "./node_modules/@arcgis/core/core/ObjectPool.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(e||(e={}));const i=4294967296,s=new TextDecoder("utf-8"),r=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ff")?12:32;class n{constructor(t,i,s=0,r=(t?t.byteLength:0)){this._tag=0,this._dataType=e.unknown,this._init(t,i,s,r)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}asUnsafe(){return this}clone(){return new n(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;if(t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return t;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getUint32(e+4,!0)*i;return this._skip(8),s}getSFixed64(){const t=this._dataView,e=this._pos,s=t.getUint32(e,!0)+t.getInt32(e+4,!0)*i;return this._skip(8),s}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const r=this.getMessage(),n=t(r,e,i,s);return r.release(),n}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=n.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){n.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case e.varint:this._decodeVarint();break;case e.fixed64:this._skip(8);break;case e.delimited:this._skip(this._getLength());break;case e.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,!(128&s))break;if(s=t[e++],i|=(127&s)<<7,!(128&s))break;if(s=t[e++],i|=(127&s)<<14,!(128&s))break;if(s=t[e++],i|=(127&s)<<21,!(128&s))break;if(s=t[e++],i+=268435456*(127&s),!(128&s))break;if(s=t[e++],i+=34359738368*(127&s),!(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),!(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),!(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),!(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),!(128&s))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;e!==this._end&&(s=t[e],128&s);)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const r=1&t[this._pos];if(s=t[this._pos++],i|=127&s,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<7,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<14,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<21,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=268435456*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=34359738368*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=4398046511104*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==e.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>r){const r=t.subarray(e,i);return s.decode(r)}let n="",h="";for(let s=e;s<i;++s){const e=t[s];128&e?h+="%"+e.toString(16):(n+=decodeURIComponent(h)+String.fromCharCode(e),h="")}return h.length&&(n+=decodeURIComponent(h)),n}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}}n.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_1__["default"](n,void 0,(t=>{t._data=null,t._dataView=null}));


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

/***/ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshTransform.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ N; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./axisAngleDegrees.js */ "./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var y;let A=y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.translation=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.create)(),this.rotationAxis=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.fromArray)(_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.up),this.rotationAngle=0,this.scale=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.fromValues)(1,1,1)}get rotation(){return (0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.fromAxisAndAngle)(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.clone)((0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.axis)(t)),this.rotationAngle=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.angle)(t)}get localMatrix(){const t=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__.create)();return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_9__.setAxisAngle)(d,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.axis)(this.rotation),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.angleRad)(this.rotation)),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__.fromRotationTranslationScale)(t,d,this.translation,this.scale),t}get localMatrixInverse(){return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__.invert)((0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),this.localMatrix)}equals(t){return this===t||null!=t&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__.exactEquals)(this.localMatrix,t.localMatrix)}clone(){const t={translation:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.clone)(this.translation),rotationAxis:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.clone)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__.clone)(this.scale)};return new y(t)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"translation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAxis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAngle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],A.prototype,"rotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],A.prototype,"localMatrix",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()],A.prototype,"localMatrixInverse",null),A=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.geometry.support.MeshTransform")],A);const d=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_10__.create)(),N=A;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angle: function() { return /* binding */ y; },
/* harmony export */   angleRad: function() { return /* binding */ z; },
/* harmony export */   axis: function() { return /* binding */ w; },
/* harmony export */   compose: function() { return /* binding */ U; },
/* harmony export */   composeAxes: function() { return /* binding */ d; },
/* harmony export */   copy: function() { return /* binding */ g; },
/* harmony export */   create: function() { return /* binding */ j; },
/* harmony export */   fromAxisAndAngle: function() { return /* binding */ q; },
/* harmony export */   fromMatrix: function() { return /* binding */ k; },
/* harmony export */   fromPoints: function() { return /* binding */ v; },
/* harmony export */   fromValues: function() { return /* binding */ h; },
/* harmony export */   setAngle: function() { return /* binding */ A; },
/* harmony export */   up: function() { return /* binding */ B; },
/* harmony export */   wrap: function() { return /* binding */ x; },
/* harmony export */   wrapAxisAngle: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function j(r=B){return[r[0],r[1],r[2],r[3]]}function x(r,t,n,o){return h(r,t,n,o,E)}function b(r,t){return h(r[0],r[1],r[2],t,E)}function g(r,t=j()){return h(r[0],r[1],r[2],r[3],t)}function h(r,t,n,o,i=j()){return i[0]=r,i[1]=t,i[2]=n,i[3]=o,i}function q(r,t,n=j()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(w(n),r),n[3]=t,n}function v(r,t,n){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(n,r,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(n,n),n[3]=-(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.r)(r,t),n}function k(t,i=j()){const u=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.getRotation)(C,t);return A(i,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.rad2deg)((0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__.getAxisAngle)(i,u))),i}function U(t,n,c=j()){return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__.setAxisAngle)(C,w(t),z(t)),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__.setAxisAngle)(D,w(n),z(n)),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__.multiply)(C,D,C),A(c,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.rad2deg)((0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__.getAxisAngle)(w(c),C)))}function d(r,t,n,o=j()){return q(_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.UNIT_X,r,F),q(_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.UNIT_Y,t,G),q(_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.UNIT_Z,n,H),U(F,G,F),U(F,H,o),o}function w(r){return r}function y(r){return r[3]}function z(r){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(r[3])}function A(r,t){return r[3]=t,r}const B=[0,0,1,0],C=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),D=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),E=j(),F=j(),G=j(),H=j();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/External.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/External.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAsset: function() { return /* binding */ a; },
/* harmony export */   ServiceAssetPart: function() { return /* binding */ i; },
/* harmony export */   assetFormatId: function() { return /* binding */ b; },
/* harmony export */   assetIsOnService: function() { return /* binding */ g; },
/* harmony export */   externalIsOnService: function() { return /* binding */ m; },
/* harmony export */   externalSourceToMultiPart: function() { return /* binding */ N; },
/* harmony export */   externalSourcesAreEqual: function() { return /* binding */ h; },
/* harmony export */   isDisplayAsset: function() { return /* binding */ p; },
/* harmony export */   isDisplayExternal: function() { return /* binding */ o; },
/* harmony export */   isDisplaySource: function() { return /* binding */ l; },
/* harmony export */   isOriginalExternal: function() { return /* binding */ A; },
/* harmony export */   sourceIsOnService: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a{constructor(t,r,e){this.assetName=t,this.assetMimeType=r,this.parts=e}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__.equals)(this.parts,t.parts,((t,r)=>t.equals(r)))}isOnService(t){return this.parts.every((r=>r.isOnService(t)))}makeHash(){let t="";for(const r of this.parts)t+=r.partHash;return t}async toBlob(t){const{parts:r}=this;if(1===r.length)return r[0].toBlob(t);const s=await Promise.all(r.map((r=>r.toBlob(t))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(t),new Blob(s)}}class i{constructor(t,r){this.partUrl=t,this.partHash=r}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(r){const{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.partUrl,{responseType:"blob"});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.throwIfAborted)(r),s}}function o(t){return l(t?.source)}function u(t){if(!Array.isArray(t))return!1;return t.every((t=>t instanceof a))}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,f=/\.(gltf|glb)/i;function l(t){if(!t)return!1;if(Array.isArray(t)){return t.some(p)}return p(t)}function p(t){if(t instanceof File){const{type:r,name:e}=t;return c.test(r)||f.test(e)}return c.test(t.assetMimeType)||f.test(t.assetName)}function m(t,r){if(!t)return!1;const{source:e}=t;return y(e,r)}function h(t,r){if(t===r)return!0;const{source:e}=t,{source:s}=r;if(e===s)return!0;if(u(e)&&u(s)){if(e.length!==s.length)return!1;const t=(t,r)=>t.assetName<r.assetName?-1:t.assetName>r.assetName?1:0,r=[...e].sort(t),n=[...s].sort(t);for(let e=0;e<r.length;++e)if(!r[e].equals(n[e]))return!1;return!0}return!1}function y(t,r){if(Array.isArray(t)){const e=t;return e.length>0&&e.every((t=>g(t,r)))}return g(t,r)}function g(t,r){return t instanceof a&&t.isOnService(r)}function b(t,r){return t instanceof File?(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__.getFileFormatId)(t,r):(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__.getMimeTypeOrFilenameFormatId)(t.assetMimeType,t.assetName,r)}function N(t){return Array.isArray(t)?t:[t]}function A(t){return!!t.original}


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


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClosestDenormalizedXToReference: function() { return /* binding */ P; },
/* harmony export */   getDenormalizedExtent: function() { return /* binding */ v; },
/* harmony export */   normalizeCentralMeridian: function() { return /* binding */ R; },
/* harmony export */   normalizeMapX: function() { return /* binding */ L; },
/* harmony export */   straightLineDensify: function() { return /* binding */ M; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./normalizeUtilsCommon.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js");
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webMercatorUtils.js */ "./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js");
/* harmony import */ var _rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../rest/geometryService/cut.js */ "./node_modules/@arcgis/core/rest/geometryService/cut.js");
/* harmony import */ var _rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../rest/geometryService/simplify.js */ "./node_modules/@arcgis/core/rest/geometryService/simplify.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const m=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.geometry.support.normalizeUtils");function g(t){return"polygon"===t.type}function y(t){return"polygon"===t[0].type}function x(t){return"polyline"===t[0].type}function d(t){const e=[];let n=0,o=0;for(let s=0;s<t.length;s++){const r=t[s];let i=null;for(let t=0;t<r.length;t++)i=r[t],e.push(i),0===t?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&e.push([(n+o)/2,0])}return e}function M(t,n){if(!(t instanceof _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]||t instanceof _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"])){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](t)}const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(t),l=[];for(const e of i){const t=[];l.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],c=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),f=(l-r)/c,u=(i-s)/c,p=c/n;if(p>1){for(let l=1;l<=p-1;l++){const e=l*n,o=u*e+s,i=f*e+r;t.push([o,i])}const e=(c+Math.floor(p-1)*n)/2,o=u*e+s,i=f*e+r;t.push([o,i])}t.push([i,l])}}return g(t)?new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:l,spatialReference:t.spatialReference}):new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:l,spatialReference:t.spatialReference})}function w(t,e,n){if(e){const e=M(t,1e6);t=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.webMercatorToGeographic)(e,!0)}return n&&(t=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,e);t[0]=o+n*(-2*e)}else if(o<n){const e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,n);t[0]=o+e*(-2*n)}}else{const o=t.x;if(o>e){const n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,e);t=t.clone().offset(n*(-2*e),0)}else if(o<n){const e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(o,n);t=t.clone().offset(e*(-2*n),0)}}return t}function j(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],i=e.geometries[o],c=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i);for(let t=0;t<c.length;t++){const e=c[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(n,180);for(let s=0;s<e.length;s++){const e=i.getPoint(t,s);i.setPoint(t,s,e.clone().offset(o,0))}return!0}}))}if(s===n){if(y(t))for(const e of (0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i))t[s]=t[s].addRing(e);else if(x(t))for(const e of (0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.getGeometryParts)(i))t[s]=t[s].addPath(e)}else n=s,t[s]=i}return t}async function R(e,n,r){if(!Array.isArray(e))return R([e],n);n&&"string"!=typeof n&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const p="string"==typeof n?n:n?.url??_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl;let g,y,x,d,M,v,P,L,U=0;const z=[],A=[];for(const t of e)if(null!=t)if(g||(g=t.spatialReference,y=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(g),x=g.isWebMercator,v=x?102100:4326,d=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].maxX,M=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].minX,P=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].plus180Line,L=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.cutParams[v].minus180Line),y)if("mesh"===t.type)A.push(t);else if("point"===t.type)A.push(b(t.clone(),d,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,d,M))),A.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);A.push(e.rings?new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"](e):e)}else if(t.extent){const e=t.extent,n=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(e.xmin,M)*(2*d);let o=0===n?t.clone():(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.updatePolyGeometry)(t.clone(),n);e.offset(n,0);let{xmin:s,xmax:r}=e;s=Number(s.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(P)&&r!==d?(U=r>U?r:U,o=w(o,x),z.push(o),A.push("cut")):e.intersects(L)&&s!==M?(U=r*(2*d)>U?r*(2*d):U,o=w(o,x,360),z.push(o),A.push("cut")):A.push(o)}else A.push(t.clone());else A.push(t);else A.push(t);let F=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_5__.offsetMagnitude)(U,d),N=-90;const S=F,k=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"];for(;F>0;){const t=360*F-180;k.addPath([[t,N],[t,-1*N]]),N*=-1,F--}if(z.length>0&&S>0){const t=j(z,await (0,_rest_geometryService_cut_js__WEBPACK_IMPORTED_MODULE_8__.cut)(p,z,k,r)),n=[],o=[];for(let r=0;r<A.length;r++){const s=A[r];if("cut"!==s)o.push(s);else{const s=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&s.rings.length>=i.rings.length?(n.push(s),o.push("simplify")):o.push(x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(s):s)}}if(!n.length)return o;const s=await (0,_rest_geometryService_simplify_js__WEBPACK_IMPORTED_MODULE_9__.simplify)(p,n,r),i=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?i.push(t):i.push(x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(s.shift()):s.shift())}return i}const C=[];for(let t=0;t<A.length;t++){const e=A[t];if("cut"!==e)C.push(e);else{const t=z.shift();C.push(!0===x?(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__.geographicToWebMercator)(t):t)}}return C}function v(t){if(!t)return null;const e=t.extent;if(!e)return null;const n=t.spatialReference&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(t.spatialReference);if(!n)return e;const[o,s]=n.valid,r=2*s,{width:i}=e;let l,{xmin:c,xmax:u}=e;if([c,u]=[u,c],"extent"===t.type||0===i||i<=s||i>r||c<o||u>s)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;l=d(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;l=d(t.paths);break;case"multipoint":l=t.points}const p=e.clone();for(let f=0;f<l.length;f++){let t=l[f][0];t<0?(t+=s,u=Math.max(t,u)):(t-=s,c=Math.min(t,c))}return p.xmin=c,p.xmax=u,p.width<i?(p.xmin-=s,p.xmax-=s,p):e}function P(t,e,n){const o=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(n);if(null==o)return t;const[s,r]=o.valid,i=2*r;let l=0,c=0;e>r?l=Math.ceil(Math.abs(e-r)/i):e<s&&(l=-Math.ceil(Math.abs(e-s)/i)),t>r?c=Math.ceil(Math.abs(t-r)/i):t<s&&(c=-Math.ceil(Math.abs(t-s)/i));let u=t+(l-c)*i;const p=u-e;return p>r?u-=i:p<s&&(u+=i),u}function L(t,e){const n=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__.getInfo)(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s}return t}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cutParams: function() { return /* binding */ r; },
/* harmony export */   getGeometryParts: function() { return /* binding */ o; },
/* harmony export */   offsetMagnitude: function() { return /* binding */ i; },
/* harmony export */   updatePolyGeometry: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Polyline.js */ "./node_modules/@arcgis/core/geometry/Polyline.js");
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WebMercator}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[180,-180],[180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WGS84}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__["default"]({paths:[[[-180,-180],[-180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"].WGS84})}};function i(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const r of t)for(const e of r)e[0]+=n;return e}function o(e){return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.isPolygon)(e)?e.rings:e.paths}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizedFeature: function() { return /* binding */ e; },
/* harmony export */   OptimizedFeatureWithGeometry: function() { return /* binding */ o; },
/* harmony export */   hasGeometry: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(t=null,e={},s,o){this.geometry=t,this.attributes=e,this.centroid=s,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}static fromJSON(s,o){const h=s.geometry?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(s.geometry):null,i=s.centroid?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(s.centroid):null,r=s.attributes[o];return new e(h,s.attributes,i,r)}weakClone(){const t=new e(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}clone(){const t=this.geometry?.clone(),s=new e(t,{...this.attributes},this.centroid?.clone(),this.objectId);return s.displayId=this.displayId,s.geohashX=this.geohashX,s.geohashY=this.geohashY,s}}function s(t){return!!t.geometry?.coords?.length}class o extends e{}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.objectIdFieldName=this.objectIdFieldName,t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=2;class s{constructor(t=[],s=[]){this.lengths=t??[],this.coords=s??[]}static fromJSON(t){return new s(t.lengths,t.coords)}static fromRect(t){const[e,r,h,o]=t,n=h-e,l=o-r;return new s([5],[e,r,n,0,0,l,-n,0,0,-l])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,s)=>t+s))}forEachVertex(s){let e=0;this.lengths.length||s(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const h=this.lengths[r];for(let r=0;r<h;r++){s(this.coords[t*(r+e)],this.coords[t*(r+e)+1])}e+=h}}deltaDecode(){const t=this.clone(),{coords:s,lengths:e}=t;let r=0;for(const h of e){for(let t=1;t<h;t++)s[2*(r+t)]+=s[2*(r+t)-2],s[2*(r+t)+1]+=s[2*(r+t)-1];r+=h}return t}clone(e){if(0===this.lengths.length)return new s([],[this.coords[0],this.coords[1]]);const r=(0===this.lengths.length?1:this.lengths.reduce(((t,s)=>t+s)))*t,h=this.coords.slice(0,r);return e?(e.set(h),new s(this.lengths,e)):new s(Array.from(this.lengths),Array.from(h))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditedFeatures: function() { return /* binding */ I; },
/* harmony export */   createFeatureEditResult: function() { return /* binding */ R; },
/* harmony export */   getAttachmentEditsJSON: function() { return /* binding */ f; },
/* harmony export */   getFeatureIds: function() { return /* binding */ b; },
/* harmony export */   getFeatureJSON: function() { return /* binding */ m; },
/* harmony export */   isProtectedOrPrivateVersionError: function() { return /* binding */ j; },
/* harmony export */   unpackEditResultData: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/support/MeshTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _editingSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editingSupport.js */ "./node_modules/@arcgis/core/layers/graphics/editingSupport.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function m(t,e,r){const{geometry:o}=e,i={...e.attributes};if(null!=r&&"mesh"===o?.type){const{transformFieldRoles:e}=r,{origin:c,spatialReference:p,vertexSpace:m}=o,f=o.transform??new _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_7__["default"],g="local"===m.type,b=t.spatialReference,y=b.isGeographic,R=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_8__.equals)(b,p),h=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.isEqualBaseGCS)(p,b)&&(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.canProjectWithoutEngine)(p,b);if(!(g&&y&&h||!g&&!y&&R))return null;const I=(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__.projectWithoutEngine)(c,p,b);if(null==I)return null;if(i[e.originX]=I.x,i[e.originY]=I.y,i[e.originZ]=I.z??0,null!=f){const{translation:t,scale:r,rotation:o}=f,s=g?1:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.getMetersPerCartesianUnitForSR)(p)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__.getMetersPerCartesianUnitForSR)(b);i[e.translationX]=t[0]*s,i[e.translationY]=t[2]*s,i[e.translationZ]=-t[1]*s,i[e.scaleX]=r[0],i[e.scaleY]=r[2],i[e.scaleZ]=r[1],i[e.rotationX]=o[0],i[e.rotationY]=o[2],i[e.rotationZ]=-o[1],i[e.rotationDeg]=o[3]}return{attributes:i}}return null==o?{attributes:i}:"mesh"===o.type||"extent"===o.type?null:{geometry:o.toJSON(),attributes:i}}async function f(t,e){const r=await Promise.all((e.addAttachments??[]).map((e=>g(t,e)))),a=await Promise.all((e.updateAttachments??[]).map((e=>g(t,e)))),o=e.deleteAttachments??[];return r.length||a.length||o.length?{adds:r,updates:a,deletes:[...o]}:null}async function g(t,e){const{feature:r,attachment:a}=e,{globalId:s,name:n,contentType:l,data:i,uploadId:u}=a,d={globalId:s};if(r&&("attributes"in r?d.parentGlobalId=r.attributes?.[t.globalIdField]:r.globalId&&(d.parentGlobalId=r.globalId)),u)d.uploadId=u;else if(i){const t=await (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.parseData)(i);t&&(d.contentType=t.mediaType,d.data=t.data),i instanceof File&&(d.name=i.name)}return n&&(d.name=n),l&&(d.contentType=l),d}function b(t,e,r){if(!e||0===e.length)return[];if(r&&(0,_editingSupport_js__WEBPACK_IMPORTED_MODULE_9__.isFeatureIdentifierArrayWithGlobalId)(e))return e.map((t=>t.globalId));if((0,_editingSupport_js__WEBPACK_IMPORTED_MODULE_9__.isFeatureIdentifierArrayWithObjectId)(e))return e.map((t=>t.objectId));const a=r?t.globalIdField:t.objectIdField;return a?e.map((t=>t.getAttribute(a))):[]}function y(t){const e=t?.assetMaps;if(e){for(const t of e.addResults)t.success||_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`);for(const t of e.updateResults)t.success||_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`)}const a=t?.attachments,o={addFeatureResults:t?.addResults?.map(R)??[],updateFeatureResults:t?.updateResults?.map(R)??[],deleteFeatureResults:t?.deleteResults?.map(R)??[],addAttachmentResults:a?.addResults?a.addResults.map(R):[],updateAttachmentResults:a?.updateResults?a.updateResults.map(R):[],deleteAttachmentResults:a?.deleteResults?a.deleteResults.map(R):[]};return t?.editMoment&&(o.editMoment=t.editMoment),o}function R(t){const r=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:r?new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("feature-layer-source:edit-failure",r.description,{code:r.code}):null}}function h(e,r){return new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]({attributes:e.attributes,geometry:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromJSON)({...e.geometry,spatialReference:r})})}function I(t,e){return{adds:t?.adds?.map((t=>h(t,e)))||[],updates:t?.updates?.map((t=>({original:h(t[0],e),current:h(t[1],e)})))||[],deletes:t?.deletes?.map((t=>h(t,e)))||[],spatialReference:e}}function j(t){const e=t.details.raw,r=+e.code,a=+e.extendedCode;return 500===r&&(-2147217144===a||-2147467261===a)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryCapabilities: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!0,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!0,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/editingSupport.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/editingSupport.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyEdits: function() { return /* binding */ $; },
/* harmony export */   checkEditingCapabilities: function() { return /* binding */ V; },
/* harmony export */   isFeatureIdentifierArrayWithGlobalId: function() { return /* binding */ I; },
/* harmony export */   isFeatureIdentifierArrayWithObjectId: function() { return /* binding */ A; },
/* harmony export */   isFeatureIdentifierWithGlobalId: function() { return /* binding */ v; },
/* harmony export */   isFeatureIdentifierWithObjectId: function() { return /* binding */ F; },
/* harmony export */   normalizeCollections: function() { return /* binding */ D; },
/* harmony export */   normalizeEdits: function() { return /* binding */ G; },
/* harmony export */   normalizeGeometries: function() { return /* binding */ T; },
/* harmony export */   shallowCloneFeature: function() { return /* binding */ M; },
/* harmony export */   uploadAssets: function() { return /* binding */ q; }
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/EditBusLayer.js */ "./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/fieldUtils.js */ "./node_modules/@arcgis/core/layers/support/fieldUtils.js");
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function w(e){return null!=e?.applyEdits}function F(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function A(e){return e.every(F)}function v(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function I(e){return e.every(v)}async function $(e,t,a,s={}){let n;const o="gdbVersion"in e?e.gdbVersion:null,l=s.gdbVersion??o;if((0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__.isEditBusLayer)(e)&&e.url)n=(0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__.emitApplyEditsEvent)(e.url,e.layerId,l,"original-and-current-features"===s.returnServiceEditsOption);else{n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__.createResolver)(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:n.promise};e.emit("apply-edits",t)}try{const{results:i,edits:o}=await E(e,t,a,s),l=e=>e.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__.clone),d={edits:o,addedFeatures:l(i.addFeatureResults),updatedFeatures:l(i.updateFeatureResults),deletedFeatures:l(i.deleteFeatureResults),addedAttachments:l(i.addAttachmentResults),updatedAttachments:l(i.updateAttachmentResults),deletedAttachments:l(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:s.globalIdToObjectId};return i.editedFeatureResults?.length&&(d.editedFeatures=i.editedFeatureResults),n.resolve(d),i}catch(d){throw n.reject(d),d}}async function E(e,t,r,s){if(await e.load(),!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.getEffectiveEditingEnabled)(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await S(e,r,s);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function S(e,t,r){const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.getEffectiveLayerCapabilities)(e),n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(V(t,i,r,!!n,!!o,`${e.type}-layer`),!i.data.isVersioned&&r?.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...r};if(null!=d.rollbackOnFailureEnabled||i.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const u=G(t,i,`${e.type}-layer`),p=r?.globalIdUsed||l,c=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach((e=>B(e,t)))}u.addFeatures.forEach((t=>O(t,e,p,c))),u.updateFeatures.forEach((t=>k(t,e,p,c))),u.deleteFeatures.forEach((t=>U(t,e,p,c))),u.addAttachments.forEach((t=>L(t,e))),u.updateAttachments.forEach((t=>L(t,e))),l&&await x(u,e);return{edits:await T(u),options:d}}function R(e,t,r,s){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(s.length&&"attributes"in e)for(const i of s){const r=e.attributes[i.name];if(void 0!==r&&!(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__.isValidFieldValue)(i,r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,`Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function j(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:s,vertexSpace:i}=r,n=t.spatialReference,o="local"===i.type,l=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isGeographic)(n),h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.equals)(n,s),m=h||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isWGS84)(n)&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isWGS84)(s)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__.isWebMercator)(s));if(!(o&&l&&m||!o&&!l&&h))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${n.wkid} is not supported.`)}}function O(e,t,a,r){R(e,t,a,r),j(e,t)}function U(e,t,a,r){R(e,t,a,r)}function k(e,t,r,s){R(e,t,r,s),j(e,t);const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_13__.getEffectiveLayerCapabilities)(t);if("geometry"in e&&null!=e.geometry&&!i?.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function L(e,t){const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.dataComponents)(s.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function B(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_7__.generateBracedUUID)())}async function T(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__.normalizeCentralMeridian)(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function D(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"].isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function G(e,t,r){const s=D(e);if(s.addFeatures?.length&&!t.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r}:unsupported-operation`,"Layer does not support adding features.");if(s.updateFeatures?.length&&!t.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r}:unsupported-operation`,"Layer does not support updating features.");if(s.deleteFeatures?.length&&!t.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${r}:unsupported-operation`,"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(M),s.updateFeatures=s.updateFeatures.map(M),s.addAssetFeatures=[],s}function V(e,t,r,s,i,n){if(!e||!s&&!i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${n}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function M(t){const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"];return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}async function x(e,t){const{infoFor3D:r}=t;if(null==r)return;if(!(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.isGlbSupportedEditFormat)(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const a of e.addFeatures??[])z(a)&&s.push(a);for(const a of e.updateFeatures??[])z(a)&&s.push(a)}function z(e){return"mesh"===e?.geometry?.type}function q(e,t,r,s){if(!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"](`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertFromFeature: function() { return /* binding */ tt; },
/* harmony export */   convertFromFeatureSet: function() { return /* binding */ ct; },
/* harmony export */   convertFromFeatures: function() { return /* binding */ et; },
/* harmony export */   convertFromGeometry: function() { return /* binding */ ot; },
/* harmony export */   convertFromMultipoint: function() { return /* binding */ R; },
/* harmony export */   convertFromMultipointFeatures: function() { return /* binding */ q; },
/* harmony export */   convertFromNestedArray: function() { return /* binding */ Q; },
/* harmony export */   convertFromPoint: function() { return /* binding */ O; },
/* harmony export */   convertFromPointFeatures: function() { return /* binding */ L; },
/* harmony export */   convertFromPolygon: function() { return /* binding */ K; },
/* harmony export */   convertFromPolyline: function() { return /* binding */ C; },
/* harmony export */   convertFromPolylineFeatures: function() { return /* binding */ B; },
/* harmony export */   convertToFeature: function() { return /* binding */ nt; },
/* harmony export */   convertToFeatureSet: function() { return /* binding */ lt; },
/* harmony export */   convertToFeatures: function() { return /* binding */ ut; },
/* harmony export */   convertToGeometry: function() { return /* binding */ rt; },
/* harmony export */   convertToMultipoint: function() { return /* binding */ U; },
/* harmony export */   convertToMultipointFeatures: function() { return /* binding */ S; },
/* harmony export */   convertToPoint: function() { return /* binding */ P; },
/* harmony export */   convertToPolygon: function() { return /* binding */ H; },
/* harmony export */   convertToPolyline: function() { return /* binding */ $; },
/* harmony export */   generalizeOptimizedGeometry: function() { return /* binding */ ht; },
/* harmony export */   getBoundsOptimizedGeometry: function() { return /* binding */ gt; },
/* harmony export */   getQuantizedArea: function() { return /* binding */ Nt; },
/* harmony export */   getQuantizedBoundsOptimizedGeometry: function() { return /* binding */ yt; },
/* harmony export */   getSignedQuantizedRingArea: function() { return /* binding */ Mt; },
/* harmony export */   quantizeOptimizedFeatureSet: function() { return /* binding */ ft; },
/* harmony export */   quantizeOptimizedGeometry: function() { return /* binding */ at; },
/* harmony export */   quantizeX: function() { return /* binding */ N; },
/* harmony export */   quantizeY: function() { return /* binding */ w; },
/* harmony export */   removeCollinearVertices: function() { return /* binding */ bt; },
/* harmony export */   removeZMValues: function() { return /* binding */ It; },
/* harmony export */   unquantizeOptimizedFeatureSet: function() { return /* binding */ it; },
/* harmony export */   unquantizeOptimizedGeometry: function() { return /* binding */ pt; },
/* harmony export */   unquantizeValue: function() { return /* binding */ F; },
/* harmony export */   unquantizeX: function() { return /* binding */ G; },
/* harmony export */   unquantizeY: function() { return /* binding */ T; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptimizedFeature.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js");
/* harmony import */ var _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OptimizedFeatureSet.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function d(t,e){return t?e?4:3:e?3:2}const m=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},y=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s},p=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2]},I=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+3]},b=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2],t[n+3]=e[o+3]};function M(t,e,n,o){if(t){if(n)return e&&o?b:p;if(e&&o)return I}else if(e&&o)return p;return y}function N({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function w({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function G(t,e){return F(t,e,0)}function T(t,e){return F(t,-e,1)}function F({scale:t,translate:e},n,o){return n*t[o]+e[o]}function P(t,e,n){return t?e?n?k(t):Z(t):n?v(t):x(t):null}function x(t){const e=t.coords;return{x:e[0],y:e[1]}}function j(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function Z(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function E(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function v(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function z(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function k(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function V(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function Y(t,e,n,o){let r=x;n&&o?r=k:n?r=Z:o&&(r=v);for(const s of e){const{geometry:e,attributes:n}=s,o=null!=e?r(e):null;t.push({attributes:n,geometry:o})}return t}function _(t,e){return t&&e?V:t?E:e?z:j}function L(t,e,n,o,r){const s=_(n,o);for(const{geometry:u,attributes:l}of e){const e=null!=u?s(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],u):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__.OptimizedFeature(e,l,null,r?l[r]:void 0))}return t}function O(t,e,n=_(null!=e.z,null!=e.m)){return n(t,e)}function S(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?U(r,n,o):null});return t}function U(t,e,n){if(null==t)return null;const o=d(e,n),r=[];for(let s=0;s<t.coords.length;s+=o){const e=[];for(let n=0;n<o;n++)e.push(t.coords[s+n]);r.push(e)}return e?n?{points:r,hasZ:e,hasM:n}:{points:r,hasZ:e}:n?{points:r,hasM:n}:{points:r}}function q(t,e,n,o,r){const s=d(n,o);for(const{geometry:u,attributes:l}of e){const e=null!=u?R(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],u,s):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__.OptimizedFeature(e,l,null,r?l[r]:void 0))}return t}function R(t,e,n=d(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const o=t.coords;let r=0;for(const s of e.points)for(let t=0;t<n;t++)o[r++]=s[t];return t}function A(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?$(r,n,o):null});return t}function $(t,e,n){if(!t)return null;const o=d(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{paths:u,hasZ:e,hasM:n}:{paths:u,hasZ:e}:n?{paths:u,hasM:n}:{paths:u}}function B(t,e,n,o,r){const s=d(n,o);for(const{geometry:u,attributes:l,centroid:c}of e){const e=null!=u?C(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],u,s):null,n=null!=c?O(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],c):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__.OptimizedFeature(e,l,n,r?l[r]:void 0))}return t}function C(t,e,n=d(e.hasZ,e.hasM)){const{lengths:o,coords:r}=t;let s=0;for(const u of e.paths){for(const t of u)for(let e=0;e<n;e++)r[s++]=t[e];o.push(u.length)}return t}function D(t,e,n,o){for(const{geometry:r,attributes:s,centroid:u}of e){const e=null!=r?H(r,n,o):null;if(null!=u){const n=x(u);t.push({attributes:s,centroid:n,geometry:e})}else t.push({attributes:s,geometry:e})}return t}function H(t,e,n){if(!t)return null;const o=d(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{rings:u,hasZ:e,hasM:n}:{rings:u,hasZ:e}:n?{rings:u,hasM:n}:{rings:u}}function J(t,e,n,o,r){for(const{geometry:s,centroid:u,attributes:l}of e){const e=null!=s?K(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],s,n,o):null,c=r?l[r]:void 0;null!=u?t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__.OptimizedFeature(e,l,j(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],u),c)):t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__.OptimizedFeature(e,l,null,c))}return t}function K(t,e,n=e.hasZ,o=e.hasM){return Q(t,e.rings,n,o)}function Q(t,e,n,o){const r=d(n,o),{lengths:s,coords:u}=t;let l=0;wt(t);for(const c of e){for(const t of c)for(let e=0;e<r;e++)u[l++]=t[e];s.push(c.length)}return t}const W=[],X=[];function tt(t,e,n,o,r){W[0]=t;const[s]=et(X,W,e,n,o,r);return Gt(W),Gt(X),s}function et(e,n,o,r,s,u){if(Gt(e),!o){for(const t of n){const n=u?t.attributes[u]:void 0;e.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_6__.OptimizedFeature(null,t.attributes,null,n))}return e}switch(o){case"esriGeometryPoint":return L(e,n,r,s,u);case"esriGeometryMultipoint":return q(e,n,r,s,u);case"esriGeometryPolyline":return B(e,n,r,s,u);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return J(e,n,r,s,u);default:m().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to parse unknown geometry type '${o}'`)),Gt(e)}return e}function nt(t,e,n,o){X[0]=t,ut(W,X,e,n,o);const r=W[0];return Gt(W),Gt(X),r}function ot(e,n,o){if(null==e)return null;const r=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"];if("hasZ"in e&&null==n&&(n=e.hasZ),"hasM"in e&&null==o&&(o=e.hasM),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.isPoint)(e)){return _(null!=n?n:null!=e.z,null!=o?o:null!=e.m)(r,e)}return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.isPolygon)(e)?K(r,e,n,o):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.isPolyline)(e)?C(r,e,d(n,o)):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__.isMultipoint)(e)?R(r,e,d(n,o)):void m().error("convertFromGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to parse unknown geometry type '${e}'`))}function rt(e,n,o,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(n){case"esriGeometryPoint":{let t=x;return o&&r?t=k:o?t=Z:r&&(t=v),t(s)}case"esriGeometryMultipoint":return U(s,o,r);case"esriGeometryPolyline":return $(s,o,r);case"esriGeometryPolygon":return H(s,o,r);default:return m().error("convertToGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to parse unknown geometry type '${n}'`)),null}}function st(t,e){for(const n of e)t.push({attributes:n.attributes});return t}function ut(e,n,o,r,s){if(Gt(e),null==o)return st(e,n);switch(o){case"esriGeometryPoint":return Y(e,n,r,s);case"esriGeometryMultipoint":return S(e,n,r,s);case"esriGeometryPolyline":return A(e,n,r,s);case"esriGeometryPolygon":return D(e,n,r,s);default:m().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to parse unknown geometry type '${o}'`))}return e}function lt(t){const{objectIdFieldName:e,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:u,features:l,geometryType:c,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:a,queryGeometryType:h}=t,d={features:ut([],l,c,u,s),fields:r,geometryType:c,objectIdFieldName:e,spatialReference:n,uniqueIdField:f,queryGeometry:rt(a,h,!1,!1)};return o&&(d.transform=o),i&&(d.exceededTransferLimit=i),s&&(d.hasM=s),u&&(d.hasZ=u),d}function ct(e,n){const o=new _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_7__["default"],{hasM:r,hasZ:s,features:u,objectIdFieldName:l,spatialReference:c,geometryType:i,exceededTransferLimit:f,transform:h,fields:d}=e;return d&&(o.fields=d),o.geometryType=i??null,o.objectIdFieldName=l??n??null,o.spatialReference=c??null,o.objectIdFieldName?(u&&et(o.features,u,i,s,r,o.objectIdFieldName),f&&(o.exceededTransferLimit=f),r&&(o.hasM=r),s&&(o.hasZ=s),h&&(o.transform=h),o):(m().error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),o)}function it(t){const{transform:e,features:n,hasM:o,hasZ:r}=t;if(!e)return t;for(const s of n)null!=s.geometry&&pt(s.geometry,s.geometry,o,r,e),null!=s.centroid&&pt(s.centroid,s.centroid,o,r,e);return t.transform=null,t}function ft(t,e){const{geometryType:n,features:o,hasM:r,hasZ:s}=e;if(!t)return e;for(let u=0;u<o.length;u++){const e=o[u],l=e.weakClone();l.geometry=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],at(l.geometry,e.geometry,r,s,n,t),e.centroid&&(l.centroid=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_8__["default"],at(l.centroid,e.centroid,r,s,"esriGeometryPoint",t)),o[u]=l}return e.transform=t,e}function at(t,e,n,o,r,s,u=n,l=o){if(wt(t),!e?.coords.length)return null;const c=g[r],{coords:i,lengths:f}=e,a=d(n,o),h=d(n&&u,o&&l),m=M(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,N(s,i[0]),w(s,i[1])),wt(t,a,0),t;let y,p,I,b,G=0,T=0,F=T;for(const d of f){if(d<c)continue;let e=0;T=F,I=y=N(s,i[G]),b=p=w(s,i[G+1]),m(t.coords,i,T,G,I,b),e++,G+=a,T+=h;for(let n=1;n<d;n++,G+=a)I=N(s,i[G]),b=w(s,i[G+1]),I===y&&b===p||(m(t.coords,i,T,G,I-y,b-p),T+=h,e++,y=I,p=b);e>=c&&(t.lengths.push(e),F=T)}return Gt(t.coords,F),t.coords.length?t:null}function ht(t,e,n,o,r,s,u=n,l=o){if(wt(t),!e?.coords.length)return null;const c=g[r],{coords:i,lengths:f}=e,a=d(n,o),h=d(n&&u,o&&l),m=M(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),wt(t,a,0),t;let y=0;const p=s*s;for(const d of f){if(d<c){y+=d*a;continue}const e=t.coords.length/h,n=y,o=y+(d-1)*a;m(t.coords,i,t.coords.length,n,i[n],i[n+1]),mt(t.coords,i,a,p,m,n,o),m(t.coords,i,t.coords.length,o,i[o],i[o+1]);const r=t.coords.length/h-e;r>=c?t.lengths.push(r):Gt(t.coords,e*h),y+=d*a}return t.coords.length?t:null}function dt(t,e,n,o){const r=t[e],s=t[e+1],u=t[n],l=t[n+1],c=t[o],i=t[o+1];let f=u,a=l,h=c-f,d=i-a;if(0!==h||0!==d){const t=((r-f)*h+(s-a)*d)/(h*h+d*d);t>1?(f=c,a=i):t>0&&(f+=h*t,a+=d*t)}return h=r-f,d=s-a,h*h+d*d}function mt(t,e,n,o,r,s,u){let l,c=o,i=0;for(let f=s+n;f<u;f+=n)l=dt(e,f,s,u),l>c&&(i=f,c=l);c>o&&(i-s>n&&mt(t,e,n,o,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),u-i>n&&mt(t,e,n,o,r,i,u))}function gt(t,e,n,u){if(!e?.coords?.length)return null;const l=d(n,u);let c=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=l){const n=t[e],o=t[e+1];c=Math.min(c,n),f=Math.max(f,n),i=Math.min(i,o),a=Math.max(a,o)}}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__.is)(t)?(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__.fromRectValues)(t,c,i,f,a):(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__.fromValues)(c,i,f,a,t),t}function yt(t,e,n,o){const r=d(n,o),{lengths:s,coords:u}=e;let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=0;for(const h of s){let t=u[a],e=u[a+1];l=Math.min(t,l),c=Math.min(e,c),i=Math.max(t,i),f=Math.max(e,f),a+=r;for(let n=1;n<h;n++,a+=r){const n=u[a],o=u[a+1];t+=n,e+=o,n<0&&(l=Math.min(l,t)),n>0&&(i=Math.max(i,t)),o<0?c=Math.min(c,e):o>0&&(f=Math.max(f,e))}}return t[0]=l,t[1]=c,t[2]=i,t[3]=f,t}function pt(t,e,o,r,s){const{coords:u,lengths:l}=e,c=d(o,r);if(!u.length)return t!==e&&wt(t),t;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.assertIsSome)(s);const{originPosition:i,scale:f,translate:a}=s,h=Tt;h.originPosition=i;const m=h.scale;m[0]=f[0]??1,m[1]=-(f[1]??1),m[2]=f[2]??1,m[3]=f[3]??1;const g=h.translate;if(g[0]=a[0]??0,g[1]=a[1]??0,g[2]=a[2]??0,g[3]=a[3]??0,!l.length){for(let e=0;e<c;++e)t.coords[e]=F(h,u[e],e);return t!==e&&wt(t,c,0),t}let y=0;for(let n=0;n<l.length;n++){const e=l[n];t.lengths[n]=e;for(let n=0;n<c;++n)t.coords[y+n]=F(h,u[y+n],n);let o=t.coords[y],r=t.coords[y+1];y+=c;for(let n=1;n<e;n++,y+=c){o+=u[y]*m[0],r+=u[y+1]*m[1],t.coords[y]=o,t.coords[y+1]=r;for(let e=2;e<c;++e)t.coords[y+e]=F(h,u[y+e],e)}}return t!==e&&wt(t,u.length,l.length),t}function It(t,e,n,o,r,s){if(wt(t),t.lengths.push(...e.lengths),n===r&&o===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=d(n,o),l=M(n,o,r,s),c=e.coords;for(let e=0;e<c.length;e+=u)l(t.coords,c,t.coords.length,e,c[e],c[e+1])}return t}function bt(t,e,n,o,r){if(!e?.coords?.length)return null;const s=g[n],{coords:u,lengths:l}=e,c=M(o,r,o,r),i=d(o,r);let f=0,a=0,h=0,m=0;for(const d of l){a=m,c(t.coords,u,a,f,u[f],u[f+1]),f+=i;let e=u[f],n=u[f+1],o=e,r=n,l=n/e;a+=i,c(t.coords,u,a,f,o,r),f+=i;for(let s=2;s<d;s++){e=u[f],n=u[f+1];const s=n/e,h=l===s||!isFinite(l)&&!isFinite(s),d=h&&isFinite(s)?l>=0&&s>=0||l<=0&&s<=0:r>=0&&n>=0||r<=0&&n<=0;h&&d?(o+=e,r+=n):(o=e,r=n,a+=i),c(t.coords,u,a,f,o,r),f+=i,l=s}a+=i;const g=(a-m)/i;g>=s&&(t.lengths[h]=g,m=a,h++)}return t.coords.length>m&&(t.coords.length=m),t.lengths.length>h&&(t.lengths.length=h),t.coords.length&&t.lengths.length?t:null}function Mt(t,e,n,o){let r=0,s=t[o*e],u=t[o*(e+1)];for(let l=1;l<n;l++){const n=s+t[o*(e+l)],c=u+t[o*(e+l)+1],i=(n-s)*(c+u);s=n,u=c,r+=i}return.5*r}function Nt(t,e){const{coords:n,lengths:o}=t;let r=0,s=0;for(let u=0;u<o.length;u++){const t=o[u];s+=Mt(n,r,t,e),r+=t}return Math.abs(s)}function wt(t,e=0,n=0){Gt(t.lengths,n),Gt(t.coords,e)}function Gt(t,e=0){t.length!==e&&(t.length=e)}const Tt={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ B; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../geometry/support/MeshGeoreferencedVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js");
/* harmony import */ var _geometry_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../geometry/support/meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../geometry/support/meshUtils/External.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/External.js");
/* harmony import */ var _applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../applyEditsUtils.js */ "./node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js");
/* harmony import */ var _support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/clientSideDefaults.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js");
/* harmony import */ var _support_QueryTask_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/QueryTask.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../support/featureLayerUtils.js */ "./node_modules/@arcgis/core/layers/support/featureLayerUtils.js");
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/* harmony import */ var _rest_query_executeQueryJSON_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../rest/query/executeQueryJSON.js */ "./node_modules/@arcgis/core/rest/query/executeQueryJSON.js");
/* harmony import */ var _rest_query_operations_editsZScale_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../rest/query/operations/editsZScale.js */ "./node_modules/@arcgis/core/rest/query/operations/editsZScale.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../time/TimeExtent.js */ "./node_modules/@arcgis/core/time/TimeExtent.js");
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../versionManagement/support/versionManagementUtils.js */ "./node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const V=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__.JSONMap({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),$=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__.JSONMap({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let G=class extends _core_Loadable_js__WEBPACK_IMPORTED_MODULE_8__["default"]{constructor(e){super(e),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.debounce)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,r=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(r),Promise.resolve(this)}initialize(){this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_12__.watch)((()=>{const e=this.layer;return e&&"lastEditsEventDate"in e?e.lastEditsEventDate:null}),(e=>this._handleLastEditsEventChange(e)))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:e,parsedUrl:t,gdbVersion:r,spatialReference:s,fieldsIndex:a}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,n="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_6__["default"])("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==i,u=e?.operations?.supportsQueryAttachments??!1;return new _support_QueryTask_js__WEBPACK_IMPORTED_MODULE_23__["default"]({url:t.path,pbfSupported:o,fieldsIndex:a,infoFor3D:i,dynamicDataSource:n,gdbVersion:r,sourceSpatialReference:s,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:s}=this;await (0,_support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__.ensureLayerCredential)(s,"editing");const a=e.attributes[s.objectIdField],i=s.parsedUrl.path+"/"+a+"/addAttachment",n=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,n.query);try{const e=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i,{body:o});return (0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.createFeatureEditResult)(e.data.addAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async updateAttachment(e,t,s){await this.load();const{layer:a}=this;await (0,_support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__.ensureLayerCredential)(a,"editing");const i=e.attributes[a.objectIdField],n=a.parsedUrl.path+"/"+i+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(s,o.query);try{const e=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(n,{body:u});return (0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.createFeatureEditResult)(e.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(i,l)}}async applyEdits(e,t){await this.load();const{layer:a}=this;await (0,_support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__.ensureLayerCredential)(a,"editing");const n="infoFor3D"in a?a.infoFor3D:null,o=null!=n,u=o||(t?.globalIdUsed??!1),l=o?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,c=e.addFeatures?.map((e=>(0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.getFeatureJSON)(this.layer,e,n)))??[],d=(await Promise.all(c)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__.isSome),p=e.updateFeatures?.map((e=>(0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.getFeatureJSON)(this.layer,e,n)))??[],y=(await Promise.all(p)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__.isSome),h=(0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.getFeatureIds)(this.layer,e.deleteFeatures,u);(0,_rest_query_operations_editsZScale_js__WEBPACK_IMPORTED_MODULE_28__.unapplyEditsZUnitScaling)(d,y,a.spatialReference);const m=await (0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.getAttachmentEditsJSON)(this.layer,e),f=a.capabilities.editing.supportsAsyncApplyEdits&&o,g=t?.gdbVersion||a.gdbVersion,w={gdbVersion:g,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:f};await (0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_31__.isSafeToEditVersion)(this.layer.url,g,!0);const q=(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_31__.isVersionInEditSession)(this.layer.url,g||null);if(await (0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_31__.isHistoricVersion)(a.url,g,a.historicMoment))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("feature-layer-source:historic-version","Editing a historic version is not allowed");t?.returnServiceEditsOption?(w.edits=JSON.stringify([{id:a.layerId,adds:d.length?d:null,updates:y.length?y:null,deletes:h.length?h:null,attachments:m,assetMaps:l}]),w.returnServiceEditsOption=V.toJSON(t?.returnServiceEditsOption),w.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(w.adds=d.length?JSON.stringify(d):null,w.updates=y.length?JSON.stringify(y):null,w.deletes=h.length?u?JSON.stringify(h):h.join(","):null,w.attachments=m&&JSON.stringify(m),w.assetMaps=null!=l?JSON.stringify(l):void 0);const S=this._getLayerRequestOptions({method:"post",query:w});q&&(S.authMode="immediate",S.query.returnEditMoment=!0,S.query.sessionId=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_31__.currentSessionId);const E=t?.returnServiceEditsOption?a.url:a.parsedUrl.path;let O;try{O=f?await this._asyncApplyEdits(E+"/applyEdits",S):await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(E+"/applyEdits",S)}catch(F){if(!(0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.isProtectedOrPrivateVersionError)(F))throw F;S.authMode="immediate",O=f?await this._asyncApplyEdits(E+"/applyEdits",S):await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(E+"/applyEdits",S)}return this._createEditsResult(O)}async deleteAttachments(e,t){await this.load();const{layer:s}=this;await (0,_support_featureLayerUtils_js__WEBPACK_IMPORTED_MODULE_25__.ensureLayerCredential)(s,"editing");const a=e.attributes[s.objectIdField],i=s.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.createFeatureEditResult)}catch(n){throw this._createAttachmentErrorResult(a,n)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:i}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${a}/${s}`,t),{id:n,extent:o,fullExtent:u,timeExtent:l}=i,c=o||u;return{id:n,fullExtent:c&&_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_17__["default"].fromJSON(c),timeExtent:l&&_time_TimeExtent_js__WEBPACK_IMPORTED_MODULE_30__["default"].fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){await this.load();const r=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){await this.load();const r=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&r.features.length&&r.features.forEach((t=>{const r=t.attributes;e.outStatistics?.forEach((({outStatisticFieldName:e})=>{if(e){const t=e.toLowerCase();t&&t in r&&e!==t&&(r[e]=r[t],delete r[t])}}))})),r}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryBins(e,t){return await this.load(),this.queryTask.executeBinsQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_24__.isHostedAgolService)(this.layer.url))return"unavailable";const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__.join)(this.layer.url,"status"),t=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{query:{f:"json"}});return $.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:r}=await __webpack_require__.e(/*! import() | support-uploadAssets */ "support-uploadAssets").then(__webpack_require__.bind(__webpack_require__, /*! ./support/uploadAssets.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js"));return r(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}_handleLastEditsEventChange(e){const t=this.layer;if(null==e||!("capabilities"in t)||!("effectiveCapabilities"in t))return;if(!(!t.capabilities?.operations?.supportsEditing&&t.effectiveCapabilities?.operations?.supportsEditing))return;const r=t.url;if(null==r)return;"layerId"in t&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__.join)(r,t.layerId.toString());this._getOrCreateEditInterceptor(r).before=t=>{const r=t.requestOptions.method??"auto";if("auto"===r||"head"===r){const r=t.requestOptions.query??{};r._ts=e.getTime(),t.requestOptions.query=r}}}_getOrCreateEditInterceptor(e){return null==this._editInterceptor&&(this._editInterceptor={urls:e},_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){null!=this._editInterceptor&&((0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__.remove)(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(e,t){const s=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,t)).data.statusUrl;for(;;){const e=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(s,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.after)(H)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const s={};(0,_core_has_js__WEBPACK_IMPORTED_MODULE_6__["default"])("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),t?.cacheBust&&(s._ts=Date.now());const{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:t?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const s=e.type;if(!this.supportedSourceTypes.has(s))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("feature-layer-source:unsupported-type",`Source type "${s}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_22__.createDrawingInfo)(e.geometryType).renderer;(0,_core_object_js__WEBPACK_IMPORTED_MODULE_10__.setDeepValue)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.layer.url,this._getLayerRequestOptions({signal:t}));s.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__.throwIfAbortError)(s)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;if(await this._areAllAssetsAlreadyMapped(t))return null;const r=e.addFeatures.filter((e=>e.geometry));if(t.length!==r.length+e.updateFeatures.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const s=new Array,a=new Map;for(const i of t){const{geometry:e}=i,{vertexSpace:t}=e;if((0,_geometry_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_19__.isRelativeVertexSpace)(t))s.push(e);else{const t=e.origin,{convertMeshVertexSpace:r}=await __webpack_require__.e(/*! import() | geometry-support-meshUtils-convertMeshVertexSpace */ "geometry-support-meshUtils-convertMeshVertexSpace").then(__webpack_require__.bind(__webpack_require__, /*! ../../../geometry/support/meshUtils/convertMeshVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/convertMeshVertexSpace.js")),n=await r(e,new _geometry_support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_18__["default"]({origin:[t.x,t.y,t.z??0]}));a.set(n,e),i.geometry=n,s.push(n)}}await this.uploadAssets(s);for(const[i,n]of a)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(t),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,r=this.layer.globalIdField,s=this.layer.parsedUrl;for(const a of e){const e=a.geometry,{metadata:i}=e,n=i.getExternalSourcesOnService(s),o=a.getAttribute(r);if(0===n.length){_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=n.find(_geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_20__.isOriginalExternal)??n[0];for(const r of l)1===r.parts.length?t.push({globalId:(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_14__.generateBracedUUID)(),parentGlobalId:o,assetName:r.assetName,assetHash:r.parts[0].partHash,flags:[]}):_core_Logger_js__WEBPACK_IMPORTED_MODULE_9__["default"].getLogger(this).error(`Skipping asset ${r.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(t))for(const n of t)s.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===r&&(a={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else a=t;const i=(0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.unpackEditResultData)(a);if(s.length>0){i.editedFeatureResults=[];for(const e of s){const{editedFeatures:t}=e,r=t?.spatialReference?new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_32__["default"](t.spatialReference):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:(0,_applyEditsUtils_js__WEBPACK_IMPORTED_MODULE_21__.createEditedFeatures)(t,r)})}}return i}_createAttachmentErrorResult(e,t){const r=t.details.messages?.[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__["default"]("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const e=t[s];null!=e&&(r.set?r.set(s,e):r.append(s,e))}return r}_getLayerRequestOptions(e={}){const{layer:t,layer:{parsedUrl:r,gdbVersion:s}}=this;return{...e,query:{gdbVersion:s,layer:"dynamicDataSource"in t&&t.dynamicDataSource?JSON.stringify({source:t.dynamicDataSource}):void 0,...r.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _areAllAssetsAlreadyMapped(e){const{layer:t}=this,{globalIdField:r,parsedUrl:a}=t,i="infoFor3D"in t?t.infoFor3D:null;if(null==i||null==r)return!1;const n=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_26__.getAssetMapTable)(i);if(null==n)return!1;const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__.join)(a.path,`../${n.id}`),u=new Array;for(const s of e){if(!(s.geometry.metadata.getExternalSourcesOnService(a).length>0))return!1;u.push(s)}const l=u.map((e=>e.getAttribute(r))).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__.isSome);if(0===l.length)return!1;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:d}}=i,p=new _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_29__["default"]({where:`${c} IN (${l.map((e=>`'${e}'`))})`,outFields:[d,c],returnGeometry:!1}),y=await (0,_rest_query_executeQueryJSON_js__WEBPACK_IMPORTED_MODULE_27__.executeQueryJSON)(o,p),{features:m}=y;return 0!==m.length&&!u.some((e=>{const t=e.getAttribute(r);if(!t)return!0;const{metadata:s}=e.geometry,i=m.filter((e=>e.getAttribute(c)===t));if(0===i.length)return!0;const n=i.map((e=>e.getAttribute(d)));return s.getExternalSourcesOnService(a).flatMap((({source:e})=>e.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>n.every((t=>e!==t))))}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)()],G.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({constructOnly:!0})],G.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({constructOnly:!0})],G.prototype,"supportedSourceTypes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_15__.property)({readOnly:!0})],G.prototype,"queryTask",null),G=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__.subclass)("esri.layers.graphics.sources.FeatureLayerSource")],G);const H=1e3,B=G;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ j; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/* harmony import */ var _support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../support/source/DataLayerSource.js */ "./node_modules/@arcgis/core/layers/support/source/DataLayerSource.js");
/* harmony import */ var _rest_utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../rest/utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _rest_query_executeForCount_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../rest/query/executeForCount.js */ "./node_modules/@arcgis/core/rest/query/executeForCount.js");
/* harmony import */ var _rest_query_executeForExtent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../rest/query/executeForExtent.js */ "./node_modules/@arcgis/core/rest/query/executeForExtent.js");
/* harmony import */ var _rest_query_executeForIds_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../rest/query/executeForIds.js */ "./node_modules/@arcgis/core/rest/query/executeForIds.js");
/* harmony import */ var _rest_query_executeQueryJSON_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../rest/query/executeQueryJSON.js */ "./node_modules/@arcgis/core/rest/query/executeQueryJSON.js");
/* harmony import */ var _rest_query_executeQueryPBF_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../rest/query/executeQueryPBF.js */ "./node_modules/@arcgis/core/rest/query/executeQueryPBF.js");
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../rest/support/FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _rest_support_Query_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../rest/support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let x=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.urlToObject)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),o=null!=e.outStatistics?.[0],s=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_3__["default"])("featurelayer-pbf-statistics"),i=!o||s;let u;if(this.pbfSupported&&i)try{u=await (0,_rest_query_executeQueryPBF_js__WEBPACK_IMPORTED_MODULE_18__.executeRawQueryPBF)(this.url,r,t)}catch(a){if("query:parsing-pbf"!==a.name)throw a;this.pbfSupported=!1}return this.pbfSupported&&i||(u=await (0,_rest_query_executeQueryJSON_js__WEBPACK_IMPORTED_MODULE_17__.executeRawQueryJSON)(this.url,r,t)),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_19__["default"].fromJSON(t);const{meshFeatureSetFromJSON:s}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-support-meshFeatureSet */ "rest-support-meshFeatureSet").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/support/meshFeatureSet.js */ "./node_modules/@arcgis/core/rest/support/meshFeatureSet.js")),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return (0,_rest_query_executeForCount_js__WEBPACK_IMPORTED_MODULE_14__.executeForCount)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return (0,_rest_query_executeForExtent_js__WEBPACK_IMPORTED_MODULE_15__.executeForExtent)(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return (0,_rest_query_executeForIds_js__WEBPACK_IMPORTED_MODULE_16__.executeForIds)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/support/RelationshipQuery.js */ "./node_modules/@arcgis/core/rest/support/RelationshipQuery.js")),__webpack_require__.e(/*! import() | rest-query-executeRelationshipQuery */ "rest-query-executeRelationshipQuery").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeRelationshipQuery.js */ "./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js"))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(Promise.all([Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/support/RelationshipQuery.js */ "./node_modules/@arcgis/core/rest/support/RelationshipQuery.js")),__webpack_require__.e(/*! import() | rest-query-executeRelationshipQuery */ "rest-query-executeRelationshipQuery").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeRelationshipQuery.js */ "./node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js"))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:i}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-query-operations-queryAttachments */ "rest-query-operations-queryAttachments").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/operations/queryAttachments.js */ "./node_modules/@arcgis/core/rest/query/operations/queryAttachments.js")),t),u=(0,_rest_utils_js__WEBPACK_IMPORTED_MODULE_13__.parseUrl)(this.url);return i(u,await(this.queryAttachmentsSupported?r(u,e,t):s(u,e,t)))}async executeBinsQuery(e,t){const{executeBinsQuery:r}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-query-executeBinsQuery */ "rest-query-executeBinsQuery").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeBinsQuery.js */ "./node_modules/@arcgis/core/rest/query/executeBinsQuery.js")),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-query-executeTopFeaturesQuery */ "rest-query-executeTopFeaturesQuery").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeTopFeaturesQuery.js */ "./node_modules/@arcgis/core/rest/query/executeTopFeaturesQuery.js")),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-query-executeForTopIds */ "rest-query-executeForTopIds").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeForTopIds.js */ "./node_modules/@arcgis/core/rest/query/executeForTopIds.js")),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-query-executeForTopExtents */ "rest-query-executeForTopExtents").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeForTopExtents.js */ "./node_modules/@arcgis/core/rest/query/executeForTopExtents.js")),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.whenOrAbort)(__webpack_require__.e(/*! import() | rest-query-executeForTopCount */ "rest-query-executeForTopCount").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../rest/query/executeForTopCount.js */ "./node_modules/@arcgis/core/rest/query/executeForTopCount.js")),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=_rest_support_Query_js__WEBPACK_IMPORTED_MODULE_20__["default"].from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_12__.DataLayerSource.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:o}=this;if(null!=o&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const s=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_11__.getGlbFormatId)(o),i=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_11__.getGltfFormatId)(o);for(const e of o.queryFormats){if(e===s){t.formatOf3DObjects=e;break}e!==i||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__.equals)(t.outSpatialReference,this.sourceSpatialReference))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:r,originY:s,originZ:i,translationX:u,translationY:a,translationZ:n,scaleX:c,scaleY:p,scaleZ:l,rotationX:m,rotationY:y,rotationZ:f,rotationDeg:d}=o.transformFieldRoles;t.outFields.push(r,s,i,u,a,n,c,p,l,m,y,f,d)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_12__.DataLayerSource})],x.prototype,"dynamicDataSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],x.prototype,"fieldsIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],x.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],x.prototype,"infoFor3D",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({readOnly:!0})],x.prototype,"parsedUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],x.prototype,"pbfSupported",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],x.prototype,"queryAttachmentsSupported",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)()],x.prototype,"sourceSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String})],x.prototype,"url",void 0),x=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.layers.graphics.sources.support.QueryTask")],x);const j=x;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCapabilities: function() { return /* binding */ y; },
/* harmony export */   createDefaultAttributesFunction: function() { return /* binding */ a; },
/* harmony export */   createDefaultTemplate: function() { return /* binding */ l; },
/* harmony export */   createDrawingInfo: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/QueryEngineCapabilities.js */ "./node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js");
/* harmony import */ var _support_capabilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/capabilities.js */ "./node_modules/@arcgis/core/layers/support/capabilities.js");
/* harmony import */ var _symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../symbols/support/defaultsJSON.js */ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.defaultPointSymbolJSON:"esriGeometryPolyline"===t?_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.defaultPolylineSymbolJSON:_symbols_support_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_4__.defaultPolygonSymbolJSON}}}const n=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function a(t,s){if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let r=`this${c(s)} = null;`;for(const s in t){r+=`this${c(s)} = ${JSON.stringify(t[s])};`}const e=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new e}catch(r){return()=>({[s]:null,...t})}}function c(t){return n.test(t)?`.${t}`:`["${t}"]`}function l(s={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__.clone)(s)}}]}function y(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:_data_QueryEngineCapabilities_js__WEBPACK_IMPORTED_MODULE_2__.queryCapabilities,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:_support_capabilities_js__WEBPACK_IMPORTED_MODULE_3__.zeroQueryBins,editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/capabilities.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/capabilities.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zeroCapabilities: function() { return /* binding */ t; },
/* harmony export */   zeroQueryBins: function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportedStatistics:void 0},t={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/infoFor3D.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/infoFor3D.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAssetMapTable: function() { return /* binding */ M; },
/* harmony export */   getFileFormatId: function() { return /* binding */ c; },
/* harmony export */   getFilePickerAcceptType: function() { return /* binding */ e; },
/* harmony export */   getFilenameFormatId: function() { return /* binding */ i; },
/* harmony export */   getFormatDescription: function() { return /* binding */ y; },
/* harmony export */   getFormatExtensions: function() { return /* binding */ j; },
/* harmony export */   getFormatId: function() { return /* binding */ L; },
/* harmony export */   getFormatIdMimeType: function() { return /* binding */ s; },
/* harmony export */   getFormatMimeType: function() { return /* binding */ g; },
/* harmony export */   getGlbFormatId: function() { return /* binding */ a; },
/* harmony export */   getGltfFormatId: function() { return /* binding */ d; },
/* harmony export */   getMimeTypeFormatId: function() { return /* binding */ u; },
/* harmony export */   getMimeTypeOrFilenameFormatId: function() { return /* binding */ p; },
/* harmony export */   getPrjFormatId: function() { return /* binding */ m; },
/* harmony export */   getSupportedExtensions: function() { return /* binding */ o; },
/* harmony export */   getWorldFileFormatId: function() { return /* binding */ l; },
/* harmony export */   isFileEditFormat: function() { return /* binding */ r; },
/* harmony export */   isFileSupported: function() { return /* binding */ n; },
/* harmony export */   isGlbSupportedEditFormat: function() { return /* binding */ f; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t=[["binary","application/octet-stream","bin",""]];function n(t,n){return null!=C(n.name,t?.supportedFormats??[])}function r(t,n){if(!t)return!1;const r=c(n,t.supportedFormats??[]);return null!=r&&t.editFormats.includes(r)}function o(t){return F(t?.supportedFormats??[]).flatMap(j).map((t=>`.${t}`))}function e(t){const n={};for(const r of F(t?.supportedFormats??[])){const[t,o]=g(r).split(";"),e=t.trim().toLowerCase(),u=j(r).map((t=>`.${t}`));n[e]??=[],n[e].push(...u)}return{description:"3D Models",accept:n}}function u(t,n){return L(b(t,n))}function i(t,n){return L(C(t,n))}function s(t,n){return g(w(t,n))}function c(t,n){return i(t.name,n)??u(t.type,n)}function p(t,n,r){return u(t,r)??i(n,r)}function a({supportedFormats:t}){return p("model/gltf-binary","glb",t)}function f(t){const n=a(t);return null!=n&&t.editFormats.includes(n)}function d({supportedFormats:t}){return p("model/gltf+json","gltf",t)}function l({supportedFormats:t}){return p("application/esri3do-SR_world","wld",t)}function m({supportedFormats:t}){return p("application/esri3do-SR_prj","prj",t)}function F(n){return[...t,...n]}function w(t,n){return F(n).find((n=>L(n)===t))}function b(t,n){const r=t.toLowerCase();return F(n).find((t=>g(t)===r))}function C(t,n){const r=t.toLowerCase();return F(n).find((t=>j(t).some((t=>r.endsWith(t)))))}function L(t){return t?.[0]}function g(t){return t?.[1].toLowerCase()}function j(t){return t?.[2].split(",").map((t=>t.toLowerCase()))??[]}function y(t){return t?.[3]}function M(t){return t.tables?.find((t=>"assetMaps"===t.role))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/cut.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/cut.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cut: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function i(i,n,p,m){const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.parseUrl)(i),u=n[0].spatialReference,c={...m,responseType:"json",query:{...a.query,f:"json",sr:(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.srToRESTValue)(u),target:JSON.stringify({geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n[0]),geometries:n}),cutter:JSON.stringify(p)}},f=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a.path+"/cut",c),{cutIndexes:y,geometries:g=[]}=f.data;return{cutIndexes:y,geometries:g.map((e=>{const t=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.fromJSON)(e);return t.spatialReference=u,t}))}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/simplify.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/simplify.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simplify: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/rest/geometryService/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function m(m,p,f){const n="string"==typeof m?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(m):m,a=p[0].spatialReference,u=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(p[0]),l={...f,query:{...n.query,f:"json",sr:(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__.srToRESTValue)(a),geometries:JSON.stringify((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.encodeGeometries)(p))}},{data:y}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n.path+"/simplify",l);return (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.decodeGeometries)(y.geometries,u,a)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/geometryService/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/geometryService/utils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeGeometries: function() { return /* binding */ o; },
/* harmony export */   encodeGeometries: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function r(t){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getJsonType)(t[0]),geometries:t.map((e=>e.toJSON()))}}function o(e,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryType)(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/operations/urlUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/operations/urlUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapParameters: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/executeForCount.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeForCount.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeForCount: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/query.js */ "./node_modules/@arcgis/core/rest/query/operations/query.js");
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function s(s,i,m){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(s),{data:p}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__.executeQueryForCount)(n,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(i),m);return p.count}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/executeForExtent.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeForExtent.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeForExtent: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/query.js */ "./node_modules/@arcgis/core/rest/query/operations/query.js");
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function n(n,a,e){const i=(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.parseUrl)(n),s=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_2__.executeQueryForExtent)(i,_support_Query_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(a),{...e}),u=s.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(u)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/executeForIds.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeForIds.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeForIds: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/query.js */ "./node_modules/@arcgis/core/rest/query/operations/query.js");
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function s(s,i,m){const p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(s),{data:a}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__.executeQueryForIds)(p,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(i),m);return a.objectIds}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/executeQueryJSON.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeQueryJSON.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQueryJSON: function() { return /* binding */ s; },
/* harmony export */   executeRawQueryJSON: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/query.js */ "./node_modules/@arcgis/core/rest/query/operations/query.js");
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support/FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function s(r,t,e){const s=await a(r,t,e);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(s)}async function a(o,s,a){const n=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(o),i={...a},p=_support_Query_js__WEBPACK_IMPORTED_MODULE_3__["default"].from(s),{data:u}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__.executeQuery)(n,p,p.sourceSpatialReference,i);return u}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/executeQueryPBF.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/executeQueryPBF.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeQueryPBF: function() { return /* binding */ s; },
/* harmony export */   executeRawQueryPBF: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/@arcgis/core/rest/utils.js");
/* harmony import */ var _operations_pbfJSONFeatureSet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/pbfJSONFeatureSet.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js");
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/query.js */ "./node_modules/@arcgis/core/rest/query/operations/query.js");
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../support/FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/Query.js */ "./node_modules/@arcgis/core/rest/support/Query.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function s(r,e,t){const s=await n(r,_support_Query_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(e),t);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(s)}async function n(o,s,n){const p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.parseUrl)(o),i={...n},u=_support_Query_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(s),m=!u.quantizationParameters,{data:f}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_2__.executeQueryPBF)(p,u,new _operations_pbfJSONFeatureSet_js__WEBPACK_IMPORTED_MODULE_1__.JSONFeatureSetParserContext({sourceSpatialReference:u.sourceSpatialReference,applyTransform:m}),i);return f}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/editsZScale.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/editsZScale.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unapplyEditsZUnitScaling: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n,e,t){if(null==n.hasM||n.hasZ)for(const i of e)for(const n of i)n.length>2&&(n[2]*=t)}function i(e,t,i){if(!e&&!t||!i)return;const s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(i);o(e,i,s),o(t,i,s)}function o(n,e,t){if(n)for(const i of n)s(i.geometry,e,t)}function s(i,o,s){if(!i?.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.equals)(i.spatialReference,o))return;const f=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(i.spatialReference)/s;if(1!==f)if("x"in i)null!=i.z&&(i.z*=f);else if("rings"in i)t(i,i.rings,f);else if("paths"in i)t(i,i.paths,f);else if("points"in i&&(null==i.hasM||i.hasZ))for(const n of i.points)n.length>2&&(n[2]*=f)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseFeatureQuery: function() { return /* binding */ S; },
/* harmony export */   parseField: function() { return /* binding */ b; },
/* harmony export */   parseFieldType: function() { return /* binding */ o; },
/* harmony export */   parseTransform: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/pbf.js */ "./node_modules/@arcgis/core/core/pbf.js");
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pbfOptimizedFeatureSet.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],n=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function o(e){return e>=a.length?null:a[e]}function c(e){return e>=n.length?null:n[e]}function l(e){return e>=i.length?null:i[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,s){const r=3,a=e.asUnsafe(),n=t.createPointGeometry(s);for(;a.next();)switch(a.tag()){case r:{const e=a.getUInt32(),s=a.pos()+e;let r=0;for(;a.pos()<s;)t.addCoordinatePoint(n,a.getSInt64(),r++);break}default:a.skip()}return n}function u(e,t,s){const r=2,a=3,n=e.asUnsafe(),i=t.createGeometry(s),o=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case r:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(;n.pos()<s;)t.addLength(i,n.getUInt32(),r++);break}case a:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(t.allocateCoordinates(i);n.pos()<s;)t.addCoordinate(i,n.getSInt64(),r),r++,r===o&&(r=0);break}default:n.skip()}return i}function f(e){const t=1,a=2,n=3,i=e.asUnsafe(),o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"];let c="esriGeometryPoint";for(;i.next();)switch(i.tag()){case a:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.lengths.push(i.getUInt32());break}case n:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.coords.push(i.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__.optimizedGeometryTypes[i.getEnum()];break;default:i.skip()}return{queryGeometry:o,queryGeometryType:c}}function y(e){const t=1,s=2,r=3,a=4,n=5,i=6,o=7,c=8,l=9,g=e.asUnsafe();for(;g.next();)switch(g.tag()){case t:return g.getString();case s:return g.getFloat();case r:return g.getDouble();case a:return g.getSInt32();case n:return g.getUInt32();case i:return g.getInt64();case o:return g.getUInt64();case c:return g.getSInt64();case l:return g.getBool();default:return g.skip(),null}return null}function b(e){const t=1,s=2,r=3,a=4,n=5,i=6,l=e.asUnsafe(),g={type:o(0)};for(;l.next();)switch(l.tag()){case t:g.name=l.getString();break;case s:g.type=o(l.getEnum());break;case r:g.alias=l.getString();break;case a:g.sqlType=c(l.getEnum());break;case n:l.skip();break;case i:g.defaultValue=l.getString();break;default:l.skip()}return g}function k(e){const t=1,s=2,r={},a=e.asUnsafe();for(;a.next();)switch(a.tag()){case t:r.name=a.getString();break;case s:r.isSystemMaintained=a.getBool();break;default:a.skip()}return r}function d(e,t,s,r){const a=1,n=2,i=4,o=t.createFeature(s);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=r[c++].name;o.attributes[t]=e.processMessage(y);break}case n:o.geometry=e.processMessageWithArgs(u,t,s);break;case i:o.centroid=e.processMessageWithArgs(p,t,s);break;default:e.skip()}return o}function T(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function m(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function h(e){const t=1,s=2,r=3,a={originPosition:l(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.originPosition=l(n.getEnum());break;case s:a.scale=n.processMessage(T);break;case r:a.translate=n.processMessage(m);break;default:n.skip()}return a}function F(e){const t=1,s=2,r=3,a={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.shapeAreaFieldName=n.getString();break;case s:a.shapeLengthFieldName=n.getString();break;case r:a.units=n.getString();break;default:n.skip()}return a}function q(e,t){const s=1,r=2,a=3,n=4,i=5,o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:o.wkid=e.getUInt32();break;case i:o.wkt=e.getString();break;case r:o.latestWkid=e.getUInt32();break;case a:o.vcsWkid=e.getUInt32();break;case n:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function I(e,t){const s=1,r=2,a=3,n=4,i=5,o=7,c=8,l=9,p=10,u=11,f=12,y=13,T=15,m=t.createFeatureResult(),I=e.asUnsafe();m.geometryType=g(t,0);let U=!1;for(;I.next();)switch(I.tag()){case s:m.objectIdFieldName=I.getString();break;case a:m.globalIdFieldName=I.getString();break;case n:m.geohashFieldName=I.getString();break;case i:m.geometryProperties=I.processMessage(F);break;case o:m.geometryType=g(t,I.getEnum());break;case c:m.spatialReference=I.processMessageWithArgs(q,t);break;case p:m.hasZ=I.getBool();break;case u:m.hasM=I.getBool();break;case f:m.transform=I.processMessage(h);break;case l:m.exceededTransferLimit=I.getBool();break;case y:t.addField(m,I.processMessage(b));break;case T:U||(t.prepareFeatures(m),U=!0),t.addFeature(m,I.processMessageWithArgs(d,t,m,m.fields));break;case r:m.uniqueIdField=I.processMessage(k);break;default:I.skip()}return t.finishFeatureResult(m),m}function U(e,t){const s=1,r=4,a={};let n=null;for(;e.next();)switch(e.tag()){case r:n=e.processMessageWithArgs(f);break;case s:a.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=n&&a.featureResult&&t.addQueryGeometry(a,n),a}function S(s,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(s),new DataView(s)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(U,r);else a.skip();return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONFeatureSetParserContext: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/zscale.js */ "./node_modules/@arcgis/core/geometry/support/zscale.js");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/graphics/featureConversionUtils.js */ "./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(e,t){return t}function i(e,t,r,s){switch(r){case 0:return u(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?u(e,t+s,1):l(e,t+s,1)}}function n(e,t,r,s){return 2===r?u(e,t,2):i(e,t,r,s)}function a(e,t,r,s){return 2===r?0===t?0:u(e,t,3):i(e,t,r,s)}function h(e,t,r,s){return 3===r?0===t?0:u(e,t,3):n(e,t,r,s)}function u({translate:e,scale:t},r,s){return e[s]+r*t[s]}function l({translate:e,scale:t},r,s){return e[s]-r*t[s]}class d{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=o,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const r=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_1__.getGeometryZScaler)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=r)for(const t of e.features)r(t.geometry)}createSpatialReference(){return{}}addField(t,r){const s=t.fields;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__.assertIsSome)(s),s.push(r);const o=s.map((e=>e.name));this._attributesConstructor=function(){for(const e of o)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:o,queryGeometryType:i}=t,n=(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__.unquantizeOptimizedGeometry)(o.clone(),o,!1,!1,this._transform),a=(0,_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_2__.convertToGeometry)(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform;switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=this._transform;return null!==this._mValueOffset&&0===e&&t>0&&!(t%this._mValueOffset)?0:this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0==this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n:r?a:i}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfOptimizedFeatureSet.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizedFeatureSetParserContext: function() { return /* binding */ a; },
/* harmony export */   optimizedGeometryTypes: function() { return /* binding */ n; }
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedFeature.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js");
/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedFeatureSet.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedFeatureSet.js");
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layers/graphics/OptimizedGeometry.js */ "./node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this._options=e,this.geometryTypes=n,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__["default"]}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(o){if(!o?.features||!o.hasZ||!this._options.sourceSpatialReference||!o.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__.equals)(o.spatialReference,this._options.sourceSpatialReference)||o.spatialReference.vcsWkid)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(this._options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(o.spatialReference);if(1!==i)for(const e of o.features){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.hasGeometry)(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__.OptimizedFeature}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"]}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__["default"]}}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parsePBFFeatureQuery: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pbfFeatureServiceParser.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__.parseFeatureQuery)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/query.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/query.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   encodeGeometry: function() { return /* binding */ m; },
/* harmony export */   executeQuery: function() { return /* binding */ c; },
/* harmony export */   executeQueryForCount: function() { return /* binding */ S; },
/* harmony export */   executeQueryForExtent: function() { return /* binding */ x; },
/* harmony export */   executeQueryForIds: function() { return /* binding */ p; },
/* harmony export */   executeQueryPBF: function() { return /* binding */ f; },
/* harmony export */   executeQueryPBFBuffer: function() { return /* binding */ d; },
/* harmony export */   queryToQueryStringParameters: function() { return /* binding */ y; },
/* harmony export */   runQuery: function() { return /* binding */ E; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ "./node_modules/@arcgis/core/geometry/support/normalizeUtils.js");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ "./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js");
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../operations/urlUtils.js */ "./node_modules/@arcgis/core/rest/operations/urlUtils.js");
/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pbfQueryUtils.js */ "./node_modules/@arcgis/core/rest/query/operations/pbfQueryUtils.js");
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queryZScale.js */ "./node_modules/@arcgis/core/rest/query/operations/queryZScale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const s="Layer does not support extent calculation.";function m(t,e){if(e&&"extent"===t.type)return`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`;if(e&&"point"===t.type)return`${t.x},${t.y}`;const n=t.toJSON();return delete n.spatialReference,JSON.stringify(n)}function y(t,e){const n=t.geometry,i=t.toJSON();delete i.compactGeometryEnabled,delete i.defaultSpatialReferenceEnabled;const o=i;let u,l,s;if(null!=n&&(l=n.spatialReference,s=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.srToRESTValue)(l),o.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__.getJsonType)(n),o.geometry=m(n,t.compactGeometryEnabled),o.inSR=s),i.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=i.groupByFieldsForStatistics.join(",")),i.objectIds&&(o.objectIds=i.objectIds.join(",")),i.orderByFields&&(o.orderByFields=i.orderByFields.join(",")),!i.outFields||!i.returnDistinctValues&&(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?delete o.outFields:i.outFields.includes("*")?o.outFields="*":o.outFields=i.outFields.join(","),i.outSR?(o.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__.srToRESTValue)(i.outSR),u=t.outSpatialReference):n&&(i.returnGeometry||i.returnCentroid)&&(o.outSR=o.inSR,u=l),i.returnGeometry&&delete i.returnGeometry,i.outStatistics&&(o.outStatistics=JSON.stringify(i.outStatistics)),i.fullText&&(o.fullText=JSON.stringify(i.fullText)),i.pixelSize&&(o.pixelSize=JSON.stringify(i.pixelSize)),i.quantizationParameters&&(t.defaultSpatialReferenceEnabled&&null!=l&&null!=t.quantizationParameters?.extent&&l.equals(t.quantizationParameters.extent.spatialReference)&&delete i.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(i.quantizationParameters)),i.parameterValues&&(o.parameterValues=JSON.stringify(i.parameterValues)),i.rangeValues&&(o.rangeValues=JSON.stringify(i.rangeValues)),i.dynamicDataSource&&(o.layer=JSON.stringify({source:i.dynamicDataSource}),delete i.dynamicDataSource),i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete i.timeExtent}return t.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function c(t,e,n,r){const i=null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await E(t,e,"json",r);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_7__.applyFeatureSetZUnitScaling)(e,n,i.data),i}async function f(t,e,n,r){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:n.createFeatureResult()};const i=await d(t,e,r),a=i;return a.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_6__.parsePBFFeatureQuery)(i.data,n),a}function d(t,e,n){return E(t,e,"pbf",n)}function p(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):E(t,e,"json",n,{returnIdsOnly:!0})}function S(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}async function x(t,e,n){if(null!=e.timeExtent&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const r=await E(t,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}),i=r.data;if(i.hasOwnProperty("extent"))return r;if(i.features)throw new Error(s);if(i.hasOwnProperty("count"))throw new Error(s);return r}async function E(r,a,u,l={},s={}){const m="string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.urlToObject)(r):r,c=a.geometry?[a.geometry]:[],f=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__.normalizeCentralMeridian)(c,null,{signal:l.signal}),d=f?.[0];null!=d&&((a=a.clone()).geometry=d);const p=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_5__.mapParameters)({...m.query,f:u,...s,...y(a,s)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__.join)(m.path,g(a,s)?"query3d":"query"),{...l,responseType:"pbf"===u?"array-buffer":"json",query:{...p,...l.query}})}function g(t,e){return null!=t.formatOf3DObjects&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/query/operations/queryZScale.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/queryZScale.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFeatureSetZUnitScaling: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/zscale.js */ "./node_modules/@arcgis/core/geometry/support/zscale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__.getGeometryZScaler)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/FeatureSet.js":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/FeatureSet.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/jsonMap.js */ "./node_modules/@arcgis/core/core/jsonMap.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "./node_modules/@arcgis/core/geometry/support/jsonUtils.js");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layers/support/Field.js */ "./node_modules/@arcgis/core/layers/support/Field.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var y;const h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_3__.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let g=y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_4__.JSONSupport{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t.spatialReference),s=[];for(let n=0;n<e.length;n++){const t=e[n],i=_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(t),l=t.geometry?.spatialReference;null==i.geometry||l||(i.geometry.spatialReference=o);const a=t.aggregateGeometries,p=i.aggregateGeometries;if(a&&null!=p)for(const e in p){const t=p[e],r=a[e],s=r?.spatialReference;null==t||s||(t.spatialReference=o)}s.push(i)}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const n of s)if(null!=n?.geometry)return void h.write(n.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__.fromJSON)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}clone(){return new y(this.cloneProperties())}cloneProperties(){return (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e?.[r];o.geometry=t?.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),i=e=>Math.round((s-e)/r),l=this.features,a=this._getQuantizationFunction(this.geometryType,n,i);for(let p=0,m=l.length;p<m;p++)a?.(l[p].geometry)||(l.splice(p,1),p--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[n,i]}=r,l=e=>e*n+o,a=e=>s-e*i;let p=null,m=null;if(this.hasZ&&null!=r?.scale?.[2]){const{translate:[,,e],scale:[,,t]}=r;p=r=>r*t+e}if(this.hasM&&null!=r?.scale?.[3]){const{translate:[,,,e],scale:[,,,t]}=r;m=r=>null==r?r:r*t+e}const c=this._getHydrationFunction(e,l,a,p,m);for(const{geometry:f}of t)null!=f&&c&&c(f);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,l=e.length;i<l;i++){const l=e[i];if(i>0){const e=t(l[0]),i=r(l[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i)}else o=t(l[0]),s=r(l[1]),n.push([o,s])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__.isPolygon)(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i)}return s.length>0?((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__.isPolygon)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r,o,s){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y),o&&(e.z=o(e.z))}:"polyline"===e||"polygon"===e?e=>{const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__.isPolygon)(e)?e.rings:e.paths;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];for(let o=0,s=e.length;o<s;o++){const s=e[o];o>0?(i+=s[0],l+=s[1]):(i=s[0],l=s[1]),s[0]=t(i),s[1]=r(l)}}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2]),r[3]=s(r[3])}}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=o(r[2])}}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];for(let t=0,r=e.length;t<r;t++){const r=e[t];r[2]=s(r[2])}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),o&&null!=e.zmax&&null!=e.zmin&&(e.zmax=o(e.zmax),e.zmin=o(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?e=>{const n=e.points;let i,l;for(let o=0,s=n.length;o<s;o++){const e=n[o];o>0?(i+=e[0],l+=e[1]):(i=e[0],l=e[1]),e[0]=t(i),e[1]=r(l)}if(o&&s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2]),e[3]=s(e[3])}else if(o)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=o(e[2])}else if(s)for(let t=0,r=n.length;t<r;t++){const e=n[t];e[2]=s(e[2])}}:null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:String,json:{write:!0}})],g.prototype,"displayFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"exceededTransferLimit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_2__["default"]],json:{write:!0}})],g.prototype,"features",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("features")],g.prototype,"readFeatures",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:[_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_14__["default"]],json:{write:!0}})],g.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],g.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("geometryType")],g.prototype,"writeGeometryType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],g.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_1__.geometryTypes,json:{write:!0}})],g.prototype,"queryGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__.reader)("queryGeometry")],g.prototype,"readQueryGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"],json:{write:!0}})],g.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__.writer)("spatialReference")],g.prototype,"writeSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__.property)({json:{write:!0}})],g.prototype,"transform",void 0),g=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.rest.support.FeatureSet")],g),g.prototype.toJSON.isDefaultToJSON=!0;const d=g;


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/utils.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asValidOptions: function() { return /* binding */ i; },
/* harmony export */   encode: function() { return /* binding */ s; },
/* harmony export */   getToken: function() { return /* binding */ u; },
/* harmony export */   parseUrl: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/apiKeyUtils.js */ "./node_modules/@arcgis/core/support/apiKeyUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(r,t){return t?{...t,query:{...r??{},...t.query}}:{query:r}}function f(r){return"string"==typeof r?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)(r):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(r)}function s(r,t,o){const n={};for(const e in r){if("declaredClass"===e)continue;const i=r[e];if(null!=i&&"function"!=typeof i)if(Array.isArray(i))n[e]=i.map((r=>s(r)));else if("object"==typeof i)if(i.toJSON){const r=i.toJSON(o?.[e]);n[e]=t?r:JSON.stringify(r)}else n[e]=t?i:JSON.stringify(i);else n[e]=i}return n}function u(o,n){return o?(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__.isApiKeyApplicable)(o,n)?n||_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey:_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(o)?.token:null}


/***/ })

}]);
//# sourceMappingURL=graphics-sources-FeatureLayerSource.js.map