"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["rest-support-meshFeatureSet"],{

/***/ "./node_modules/@arcgis/core/chunks/earcut.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/earcut.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t,x){x=x||2;var i,u,v,y,o,p,a,l=t&&t.length,h=l?t[0]*x:e.length,c=n(e,0,h,x,!0),s=[];if(!c||c.next===c.prev)return s;if(l&&(c=f(e,t,c,x)),e.length>80*x){i=v=e[0],u=y=e[1];for(var Z=x;Z<h;Z+=x)(o=e[Z])<i&&(i=o),(p=e[Z+1])<u&&(u=p),o>v&&(v=o),p>y&&(y=p);a=0!==(a=Math.max(v-i,y-u))?1/a:0}return r(c,s,x,i,u,a),s}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,y,o,p,a){if(e){!a&&p&&h(e,y,o,p);for(var l,c,s=e;e.prev!==e.next;)if(l=e.prev,c=e.next,p?i(e,y,o,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(c.i/f),C(e),e=c.next,s=c.next;else if((e=c)===s){a?1===a?r(e=u(t(e),n,f),n,f,y,o,p,2):2===a&&v(e,n,f,y,o,p):r(t(e),n,f,y,o,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,y=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,o=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=s(v,f,n,t,r),a=s(y,o,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var y=f.next.next;y!==f.prev;){if(f.i!==y.i&&d(f,y)){var o=A(f,y);return f=t(f,f.next),o=t(o,o.next),r(f,n,x,i,u,v),void r(o,n,x,i,u,v)}y=y.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,o=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),o.push(Z(f));for(o.sort(y),u=0;u<o.length;u++)x=t(x=p(o[u],x),x.next);return x}function y(e,n){return e.x-n.x}function o(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=o(x);return t(u,u.next),i=o(i),o(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,y=t,o=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=o&&x!==r.x&&g(i<p?x:u,i,o,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==y);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{null===x.z&&(x.z=s(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,c(x)}function c(e){var n,t,r,x,i,u,v,f,y=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<y&&(v++,r=r.nextZ);n++);for(f=y;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,y*=2}while(u>1);return e}function s(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||(!(0!==x||!b(e,t,n))||(!(0!==i||!b(e,r,n))||(!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r)))))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var y=n[v]*t,o=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,y,o,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t};


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

/***/ "./node_modules/@arcgis/core/core/imageUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/imageUtils.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEmptyImageData: function() { return /* binding */ s; },
/* harmony export */   getImageData: function() { return /* binding */ p; },
/* harmony export */   wrapImageData: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_base64Utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support/base64Utils.js */ "./node_modules/@arcgis/core/support/base64Utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let i=null,o=!0;function s(t,e,r){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e)}catch(a){o=!1}return m(t,e,r)}function c(t,e,r,a){if(!e||!r)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e,r)}catch(i){o=!1}const n=m(e,r,a);return n.data.set(t,0),n}function f(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function m(t,e,r){return r||(r=f()),r.getContext("2d").createImageData(t,e)}async function u(a,n){const i=window.URL.createObjectURL(a);try{const{data:e}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i,{...n,responseType:"image"});return e}catch(o){if(!(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(o))throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("invalid-image",`Could not fetch requested image at ${i}`);throw o}finally{window.URL.revokeObjectURL(i)}}async function p(t,e){const{arrayBuffer:r,mediaType:a}=await d(t,e),n="image/png"===a;if("image/gif"===a){const{isAnimatedGIF:t,parseGif:a}=await __webpack_require__.e(/*! import() | image-gif */ "image-gif").then(__webpack_require__.bind(__webpack_require__, /*! ./image/gif.js */ "./node_modules/@arcgis/core/core/image/gif.js"));if(t(r))return a(r,e)}if(n){const{isAnimatedPNG:t,parseApng:a}=await __webpack_require__.e(/*! import() | image-apng */ "image-apng").then(__webpack_require__.bind(__webpack_require__, /*! ./image/apng.js */ "./node_modules/@arcgis/core/core/image/apng.js"));if(t(r))return a(r,e)}return u(new Blob([r],{type:a}),e)}async function d(e,r){const i=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.dataComponents)(e);if(i?.isBase64)return{arrayBuffer:(0,_support_base64Utils_js__WEBPACK_IMPORTED_MODULE_4__.base64ToArrayBuffer)(i.data),mediaType:i.mediaType};const o=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e,{responseType:"array-buffer",...r});return{arrayBuffer:o.data,mediaType:o.getHeader?.("Content-Type")??""}}


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

/***/ "./node_modules/@arcgis/core/geometry/Mesh.js":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/Mesh.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ $; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/deprecate.js */ "./node_modules/@arcgis/core/core/deprecate.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Loadable.js */ "./node_modules/@arcgis/core/core/Loadable.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Promise.js */ "./node_modules/@arcgis/core/core/Promise.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Geometry.js */ "./node_modules/@arcgis/core/geometry/Geometry.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Polygon.js */ "./node_modules/@arcgis/core/geometry/Polygon.js");
/* harmony import */ var _support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support/aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./support/axisAngleDegrees.js */ "./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js");
/* harmony import */ var _support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/MeshComponent.js */ "./node_modules/@arcgis/core/geometry/support/MeshComponent.js");
/* harmony import */ var _support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/meshErrors.js */ "./node_modules/@arcgis/core/geometry/support/meshErrors.js");
/* harmony import */ var _support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/MeshGeoreferencedVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js");
/* harmony import */ var _support_MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./support/MeshLocalVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js");
/* harmony import */ var _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./support/MeshTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js");
/* harmony import */ var _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./support/MeshVertexAttributes.js */ "./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js");
/* harmony import */ var _support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./support/meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/triangulationUtils.js */ "./node_modules/@arcgis/core/geometry/support/triangulationUtils.js");
/* harmony import */ var _support_meshUtils_centerAt_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/meshUtils/centerAt.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js");
/* harmony import */ var _support_meshUtils_extent_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/meshUtils/extent.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/extent.js");
/* harmony import */ var _support_meshUtils_loadExternal_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/meshUtils/loadExternal.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js");
/* harmony import */ var _support_meshUtils_Metadata_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/meshUtils/Metadata.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js");
/* harmony import */ var _support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/meshUtils/primitives.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js");
/* harmony import */ var _support_meshUtils_rotate_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/meshUtils/rotate.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js");
/* harmony import */ var _support_meshUtils_scale_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./support/meshUtils/scale.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/scale.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var H;const K="esri.geometry.Mesh";function J(){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger(K)}const Q={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:_support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_20__["default"],local:_support_MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_21__["default"]}};let X=H=class extends(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_3__["default"].LoadableMixin((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_5__.EsriPromiseMixin)(_Geometry_js__WEBPACK_IMPORTED_MODULE_13__["default"]))){constructor(e){super(e),this.components=null,this.vertexSpace=new _support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_20__["default"],this.transform=null,this.metadata=new _support_meshUtils_Metadata_js__WEBPACK_IMPORTED_MODULE_29__.Metadata,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__.MeshVertexAttributes,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_7__.watch)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=this.metadata.displaySource?.extent}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,r=this;return (0,_support_meshUtils_extent_js__WEBPACK_IMPORTED_MODULE_27__.computeMeshExtent)({get transform(){return r.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return 0===e.length||0===t?.length?(0,_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_16__.create)(_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_16__.zero):(0,_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_16__.fromBuffer)(e)}get origin(){const e=(0,_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_24__.vertexSpaceOriginToPoint)(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:r}=this._transformedExtent;return new _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get extent(){return this.loaded||null==this.metadata?.displaySource?.extent?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(_support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_18__["default"].from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}J().error("removeComponent()",_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.componentNotFoundMessage)}}rotate(e,t,r,o){return (0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_17__.composeAxes)(e,t,r,Y),(0,_support_meshUtils_rotate_js__WEBPACK_IMPORTED_MODULE_31__.rotate)(this,Y,o),this}offset(e,t,r){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:o,vertexAttributes:s}=this,n=s?.position;if(!n)return this;if((0,_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_24__.isRelativeVertexSpace)(o)){const[s,n,i]=o.origin;o.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.fromValues)(s+e,n+t,i+r)}else{for(let o=0;o<n.length;o+=3)n[o]+=e,n[o+1]+=t,n[o+2]+=r;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?((0,_support_meshUtils_scale_js__WEBPACK_IMPORTED_MODULE_32__.scale)(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?((0,_support_meshUtils_centerAt_js__WEBPACK_IMPORTED_MODULE_26__.centerAt)(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise((0,_support_meshUtils_loadExternal_js__WEBPACK_IMPORTED_MODULE_28__.loadExternal)(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,r){let o=null;if(this.components){const e=new Map,t=new Map;o=this.components.map((r=>r.cloneWithDeduplication(e,t)))}const s={components:o,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:r?.preserveMetadata?this.metadata.clone():new _support_meshUtils_Metadata_js__WEBPACK_IMPORTED_MODULE_29__.Metadata};return new H(s)}cloneShallow(){return new H({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([__webpack_require__.e(/*! import() | support-meshUtils-exporters-gltf-gltfexport */ "support-meshUtils-exporters-gltf-gltfexport").then(__webpack_require__.bind(__webpack_require__, /*! ./support/meshUtils/exporters/gltf/gltfexport.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js")),this.load(e)]);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.throwIfAborted)(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(J().error(e,_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.meshNotLoadedMessage),!1)}static createBox(e,t){if(!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]))return J().error(".createBox()",_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.invalidLocationMessage),null;const r=new H((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.createUnitSizeBox)(),e,t));return t?.imageFace&&"all"!==t.imageFace?(0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.extractSingleFaceOfBox)(r,t.imageFace):r}static createSphere(e,t){return e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]?new H((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.createUnitSizeSphere)(t?.densificationFactor||0),e,t)):(J().error(".createSphere()",_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.invalidLocationMessage),null)}static createCylinder(e,t){return e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]?new H((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.createUnitSizeCylinder)(t?.densificationFactor||0),e,t)):(J().error(".createCylinder()",_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.invalidLocationMessage),null)}static createPlane(e,t){if(!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"]))return J().error(".createPlane()",_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.invalidLocationMessage),null;const r=t?.facing??"up",o=(0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.convertPlaneSizeParameter)(r,t?.size);return new H((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.convertUnitGeometry)((0,_support_meshUtils_primitives_js__WEBPACK_IMPORTED_MODULE_30__.createUnitSizePlane)(r),e,{...t,size:o}))}static createFromPolygon(e,t){if(!(e instanceof _Polygon_js__WEBPACK_IMPORTED_MODULE_15__["default"]))return J().error(".createFromPolygon()",_support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.invalidPolygonMessage),null;const r=(0,_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_25__.triangulate)(e);return new H({vertexAttributes:new _support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__.MeshVertexAttributes({position:r.position}),components:[new _support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_18__["default"]({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new _support_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_20__["default"]})}static async createFromGLTF(e,t,r){if(!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"])){const e=new _support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.InvalidLocationError;throw J().error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:o}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__.whenOrAbort)(__webpack_require__.e(/*! import() | support-meshUtils-loadGLTFMesh */ "loadGLTFMesh").then(__webpack_require__.bind(__webpack_require__, /*! ./support/meshUtils/loadGLTFMesh.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js")),r);return new H(await o(e,t,r))}static async createFromFiles(e,o,s){(0,_core_deprecate_js__WEBPACK_IMPORTED_MODULE_1__.deprecatedFunction)(J(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const n=e=>J().error(".createFromFiles()",e.message);if(!(e instanceof _Point_js__WEBPACK_IMPORTED_MODULE_14__["default"])){const e=new _support_meshErrors_js__WEBPACK_IMPORTED_MODULE_19__.InvalidLocationError;throw n(e),e}if(!s?.layer)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("invalid:no-layer","SceneLayer required for file to mesh conversion.");return s.layer.convertMesh(o,{location:e,...s})}static createWithExternalSource(e,t,r){const o=r?.extent??null,{spatialReference:s}=e,n=r?.transform?.clone()??new _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__["default"],i=(0,_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_24__.selectVertexSpace)(e,r),a=r?.unitConversionDisabled,c={source:t,extent:o,unitConversionDisabled:a},p=new _support_meshUtils_Metadata_js__WEBPACK_IMPORTED_MODULE_29__.Metadata;return p.externalSources.push(c),new H({metadata:p,transform:n,vertexSpace:i,spatialReference:s})}static createIncomplete(e,t){const{spatialReference:o}=e,s=t?.transform?.clone()??new _support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__["default"],n=(0,_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_24__.selectVertexSpace)(e,t),i=new H({transform:s,vertexSpace:n,spatialReference:o});return i.addResolvingPromise(Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mesh-incomplete","Mesh resources are not complete"))),i}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:[_support_MeshComponent_js__WEBPACK_IMPORTED_MODULE_18__["default"]],json:{write:!0}})],X.prototype,"components",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({nonNullable:!0,types:Q,constructOnly:!0,json:{write:!0}})],X.prototype,"vertexSpace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_22__["default"],json:{write:!0}})],X.prototype,"transform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({constructOnly:!0})],X.prototype,"metadata",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()],X.prototype,"hasExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()],X.prototype,"_transformedExtent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()],X.prototype,"_untransformedBounds",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)()],X.prototype,"origin",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0,json:{read:!1}})],X.prototype,"extent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],X.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],X.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_8__.property)({type:_support_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_23__.MeshVertexAttributes,nonNullable:!0,json:{write:!0}})],X.prototype,"vertexAttributes",void 0),X=H=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__.subclass)(K)],X);const Y=(0,_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_17__.create)(),$=X;


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

/***/ "./node_modules/@arcgis/core/geometry/support/MeshComponent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshComponent.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MeshMaterial.js */ "./node_modules/@arcgis/core/geometry/support/MeshMaterial.js");
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeshMaterialMetallicRoughness.js */ "./node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js");
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meshProperties.js */ "./node_modules/@arcgis/core/geometry/support/meshProperties.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var u;let h=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{static from(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.ensureClass)(u,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__.castArray)(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this))}castMaterial(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__.ensureClass)(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?_MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__["default"]:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__["default"],t)}clone(){return new u({faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.faces),shading:this.shading,material:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,r){const s={faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new u(s)}get memoryUsage(){let t=0;return null!=this.faces&&(t+=this.faces.byteLength),null!=this.material&&(t+=this.material.memoryUsage),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__.writeTypedArray}})],h.prototype,"faces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("faces")],h.prototype,"castFaces",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],h.prototype,"material",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("material")],h.prototype,"castMaterial",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0}})],h.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:!0}})],h.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean})],h.prototype,"trustSourceNormals",void 0),h=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.geometry.support.MeshComponent")],h);const f=h;


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

/***/ "./node_modules/@arcgis/core/geometry/support/MeshMaterial.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshMaterial.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MeshTexture.js */ "./node_modules/@arcgis/core/geometry/support/MeshTexture.js");
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeshTextureTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport{constructor(o){super(o),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const e=null!=o?o.get(this):null;if(e)return e;const t=new n(this.clonePropertiesWithDeduplication(r));return null!=o&&o.set(this,t),t}clonePropertiesWithDeduplication(o){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(o),normalTexture:this.normalTexture?.cloneWithDeduplication(o),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let o=0;return o+=null!=this.color?16:0,null!=this.colorTexture&&(o+=this.colorTexture.memoryUsage),o+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(o+=this.normalTexture.memoryUsage),o+=null!=this.normalTextureTransform?20:0,o}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"colorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],u.prototype,"colorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],u.prototype,"normalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({nonNullable:!0,json:{write:!0}})],u.prototype,"doubleSided",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.geometry.support.MeshMaterial")],u);const a=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MeshMaterial.js */ "./node_modules/@arcgis/core/geometry/support/MeshMaterial.js");
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MeshTexture.js */ "./node_modules/@arcgis/core/geometry/support/MeshTexture.js");
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MeshTextureTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var n;let u=n=class extends _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,s){const o=null!=e?e.get(this):null;if(o)return o;const t=new n(this.clonePropertiesWithDeduplication(s));return null!=e&&e.set(this,t),t}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__["default"],json:{write:!0}})],u.prototype,"emissiveColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],u.prototype,"emissiveTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],u.prototype,"occlusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__["default"],json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__["default"],json:{write:!0}})],u.prototype,"metallicRoughnessTextureTransform",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.geometry.support.MeshMaterialMetallicRoughness")],u);const m=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/MeshTexture.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshTexture.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/imageUtils.js */ "./node_modules/@arcgis/core/core/imageUtils.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var p;const h=new WeakMap;let d=0,u=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__.JSONSupport{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),crossOrigin:t.crossOrigin};e[a]=s}else if(t instanceof HTMLCanvasElement){const r={type:"canvas-element",imageData:m(t.getContext("2d").getImageData(0,0,t.width,t.height))};e[a]=r}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s}else if(t instanceof ImageData){const r={type:"image-data",imageData:m(t)};e[a]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=g(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return g(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const{data:t,url:e}=this;return t instanceof HTMLCanvasElement?f(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData?f(t):!(!e?.toLowerCase().endsWith(".png")&&!e?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(h.has(this.data)||h.set(this.data,++d),e(h.get(this.data))):e()}get memoryUsage(){let t=0;if(t+=null!=this.url?this.url.length:0,null!=this.data){const e=this.data;"data"in e?t+=e.data.byteLength:e instanceof HTMLImageElement?t+=e.naturalWidth*e.naturalHeight*3:e instanceof HTMLCanvasElement&&(t+=e.width*e.height*3)}return t}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new p(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(t){return"string"==typeof t?new p({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p({data:t}):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__.ensureClass)(p,t)}};function m(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}}function g(t){const a=atob(t.data),r=new Uint8ClampedArray(a.length);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return (0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__.wrapImageData)(r,t.width,t.height)}function f(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:String,json:{write:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.w}})],u.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],u.prototype,"data",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("data")],u.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("data")],u.prototype,"readData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:!0}})],u.prototype,"wrap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],u.prototype,"contentHash",null),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.geometry.support.MeshTexture")],u);const w=u;


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.ClonableMixin)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport)){constructor(o){super(o),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.geometry.support.MeshTextureTransform")],p);const c=p;


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

/***/ "./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeshVertexAttributes: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meshProperties.js */ "./node_modules/@arcgis/core/geometry/support/meshProperties.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var g;let p=g=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__.JSONSupport{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.castArray)(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this))}castPosition(t){t&&t instanceof Float32Array&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.castArray)(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this))}castUv(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.castArray)(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this))}castNormal(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.castArray)(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this))}castTangent(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.castArray)(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this))}clone(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.position),uv:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.uv),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.tangent),color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.color)};return new g(t)}clonePositional(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.position),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(this.tangent),uv:this.uv,color:this.color};return new g(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,null!=this.uv&&(t+=this.uv.byteLength),null!=this.normal&&(t+=this.normal.byteLength),null!=this.tangent&&(t+=this.tangent.byteLength),null!=this.color&&(t+=this.color.byteLength),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.writeTypedArray}})],p.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("color")],p.prototype,"castColor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({nonNullable:!0,json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.writeTypedArray}})],p.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("position")],p.prototype,"castPosition",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.writeTypedArray}})],p.prototype,"uv",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("uv")],p.prototype,"castUv",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.writeTypedArray}})],p.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("normal")],p.prototype,"castNormal",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__.writeTypedArray}})],p.prototype,"tangent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__.cast)("tangent")],p.prototype,"castTangent",null),p=g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.geometry.support.MeshVertexAttributes")],p);


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

/***/ "./node_modules/@arcgis/core/geometry/support/meshErrors.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshErrors.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidLocationError: function() { return /* binding */ i; },
/* harmony export */   componentNotFoundMessage: function() { return /* binding */ e; },
/* harmony export */   invalidLocationMessage: function() { return /* binding */ s; },
/* harmony export */   invalidPolygonMessage: function() { return /* binding */ n; },
/* harmony export */   meshNotLoadedMessage: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const t="Mesh must be loaded before applying operations",e="Provided component is not part of the list of components",n="Expected polygon to be a Polygon instance",s="Expected location to be a Point instance";class i extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super("invalid-input:location",s)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshProperties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshProperties.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   castArray: function() { return /* binding */ n; },
/* harmony export */   writeTypedArray: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,n,r,t){const{loggerTag:o,stride:f}=n;return e.length%f!=0?(t.error(o,`Invalid array length, expected a multiple of ${f}`),new r([])):e}function n(n,r,t,o,f){if(!n)return n;if(n instanceof r)return e(n,o,r,f);for(const i of t)if(n instanceof i)return e(new r(n),o,r,f);if(Array.isArray(n))return e(new r(n),o,r,f);{const e=t.map((e=>`'${e.name}'`));return f.error(`Failed to set property, expected one of ${e}, but got ${n.constructor.name}`),new r([])}}function r(e,n,r){n[r]=t(e)}function t(e){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r];return n}


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

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metadata: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Clonable.js */ "./node_modules/@arcgis/core/core/Clonable.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _External_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./External.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/External.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let a=class extends _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__.Clonable{constructor(e){super(e),this.externalSources=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.on)((()=>this.externalSources),"after-remove",(({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,_External_js__WEBPACK_IMPORTED_MODULE_9__.isDisplayExternal)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((r=>!(0,_External_js__WEBPACK_IMPORTED_MODULE_9__.externalSourcesAreEqual)(r,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((r=>(0,_External_js__WEBPACK_IMPORTED_MODULE_9__.externalIsOnService)(r,e)))}get _implicitDisplaySource(){return this.externalSources.find(_External_js__WEBPACK_IMPORTED_MODULE_9__.isDisplayExternal)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],a.prototype,"externalSources",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],a.prototype,"displaySource",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],a.prototype,"_implicitDisplaySource",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],a.prototype,"_explicitDisplaySource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)()],a.prototype,"georeferenced",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.geometry.support.meshUtils.Metadata")],a);


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   centerAt: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projection/projectPointToVector.js */ "./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js");
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeshGeoreferencedVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js");
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MeshLocalVertexSpace.js */ "./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geographicUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projection.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js");
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vertexSpaceConversion.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const g=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.geometry.support.meshUtils.centerAt");function u(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:i}=e,o=r?.origin??e.origin,n=(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_7__.performGlobalOperation)(g,i,o.spatialReference,r?.geographic);(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_6__.isRelativeVertexSpace)(i)?x(e,t,o):n?v(e,t,o):R(e,t,o)}function x(e,o,s){const{vertexSpace:c}=e;if(!(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_6__.isRelativeVertexSpace)(c))return;const f=h,m=b;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_3__.projectPointToVector)(o,m,e.spatialReference))return void (0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.logProjectionError)(g(),o.spatialReference,e.spatialReference,_projection_js__WEBPACK_IMPORTED_MODULE_8__.loadProjectErrorMessage);if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_3__.projectPointToVector)(s,f,e.spatialReference)){const t=e.origin;return f[0]=t.x,f[1]=t.y,f[2]=t.z,void (0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.logProjectionError)(g(),s.spatialReference,e.spatialReference,_projection_js__WEBPACK_IMPORTED_MODULE_8__.loadProjectErrorMessage)}const u=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(A,m,f);c.origin=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),c.origin,u)}function v(e,t,r){const i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(r.x,r.y,r.z??0),n=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_9__.convertVertexSpace)(e,new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_5__["default"]({origin:i}));if(!n)return;const a=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.fromValues)(t.x,t.y,t.z??0),f=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_9__.convertVertexSpace)({vertexAttributes:n,spatialReference:e.spatialReference,vertexSpace:new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_5__["default"]({origin:a})},_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_4__["default"].absolute);if(!f)return;const{position:p,normal:l,tangent:g}=f;e.vertexAttributes.position=p,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=g,e.vertexAttributesChanged()}function R(e,t,r){const i=h,o=b;if((0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_3__.projectPointToVector)(t,o,e.spatialReference)){if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_3__.projectPointToVector)(r,i,e.spatialReference)){const t=e.origin;return i[0]=t.x,i[1]=t.y,i[2]=t.z,void (0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.logProjectionError)(g(),r.spatialReference,e.spatialReference,_projection_js__WEBPACK_IMPORTED_MODULE_8__.loadProjectErrorMessage)}j(e.vertexAttributes.position,o,i),e.vertexAttributesChanged()}else (0,_projection_js__WEBPACK_IMPORTED_MODULE_8__.logProjectionError)(g(),t.spatialReference,e.spatialReference,_projection_js__WEBPACK_IMPORTED_MODULE_8__.loadProjectErrorMessage)}function j(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o]}const b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();


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

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/extent.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/extent.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeMeshExtent: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projection.js */ "./node_modules/@arcgis/core/geometry/projection.js");
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../spatialReferenceEllipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js");
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projection/projectBuffer.js */ "./node_modules/@arcgis/core/geometry/projection/projectBuffer.js");
/* harmony import */ var _aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../aaBoundingBox.js */ "./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js");
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DoubleArray.js */ "./node_modules/@arcgis/core/geometry/support/DoubleArray.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "./node_modules/@arcgis/core/chunks/vec3.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l(r){const{spatialReference:f,vertexSpace:l,untransformedBounds:d}=r,g=(0,_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.toCorners)(d,u);if((0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_8__.isRelativeVertexSpace)(l)&&r.transform&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__.t)(g,g,r.transform.localMatrix),"georeferenced"===l.type){const r=l.origin;return r&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__.a)(g,g,r),(0,_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.toExtent)((0,_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.fromBuffer)(g),f)}const y=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_3__.getSphericalPCPF)(f),B=l.origin;if(!(0,_projection_js__WEBPACK_IMPORTED_MODULE_2__.canProjectWithoutEngine)(y,f)){const[r,t,e]=B;return new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]({xmin:r,ymin:t,zmin:e,xmax:r,ymax:t,zmax:e,spatialReference:f})}return (0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_4__.computeTranslationToOriginAndRotation)(f,B,x,y),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_9__.t)(g,g,x),(0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_5__.projectBuffer)(g,y,0,g,f,0),(0,_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.toExtent)((0,_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__.fromBuffer)(g),f)}const x=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),u=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_7__.newDoubleArray)(24);


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isGlobal: function() { return /* binding */ o; },
/* harmony export */   performGlobalOperation: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/deprecate.js */ "./node_modules/@arcgis/core/core/deprecate.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(e,r){return e.isGeographic||e.isWebMercator&&(r??!0)}function t(o,t,i,a){if(void 0!==a){(0,_core_deprecate_js__WEBPACK_IMPORTED_MODULE_0__.deprecated)(o(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const c="local"===t.type;if(!(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_1__.isRelativeVertexSpace)(t)||a===c)return i.isGeographic||i.isWebMercator&&a;o().warnOnce(`Specifying the 'geographic' parameter (${a}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return i.isGeographic;case"local":return i.isGeographic||i.isWebMercator}}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadExternal: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function c(e,n,r){const{source:o}=n,{loadGLTFMesh:i}=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.whenOrAbort)(__webpack_require__.e(/*! import() | loadGLTFMesh */ "loadGLTFMesh").then(__webpack_require__.bind(__webpack_require__, /*! ./loadGLTFMesh.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js")),r),l=await f(o,r);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(r);const c=i(new _Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({x:0,y:0,z:0,spatialReference:e.spatialReference}),l.url,{resolveFile:u(l),signal:r?.signal,expectedType:l.type,unitConversionDisabled:n.unitConversionDisabled});c.then((()=>l.dispose()),(()=>l.dispose()));const{vertexAttributes:m,components:p}=await c;e.vertexAttributes=m,e.components=p}function u(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.removeFile)(e.url);return s=>{const n=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.makeRelative)(s,t,t),r=n?n.replace(/^ *\.\//,""):null;return(r?e.files.get(r):null)??s}}async function f(t,s){if(Array.isArray(t)){if(!t.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mesh-load-external:missing-assets","There must be at least one file to load");return t[0]instanceof File?y(t):h(t,s)}return p(t)}async function m(e,t){const{parts:n,assetMimeType:r,assetName:o}=e;if(1===n.length)return new v(n[0].partUrl);const i=await e.toBlob(t);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(t),v.fromBlob(i,x(o,r))}function p(e){return v.fromBlob(e,x(e.name,e.type))}function y(e){return j(e.map((e=>({name:e.name,mimeType:e.type,source:p(e)}))))}async function h(e,t){const i=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.allSettledValues)(e.map((async e=>{const n=await m(e);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(t),{name:e.assetName,mimeType:e.assetMimeType,source:n}})));if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.isAborted)(t))throw i.forEach((e=>e.source.dispose())),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.createAbortError)();return j(i)}const d=/^model\/gltf\+json$/,g=/^model\/gltf-binary$/,w=/\.gltf$/i,b=/\.glb$/i;function T({mimeType:e,source:t,name:s}){return d.test(e)||w.test(s)?{url:t.url,type:"gltf"}:g.test(e)||b.test(s)?{url:t.url,type:"glb"}:null}function j(t){const s=new Map;let n=null,r=null;for(const e of t){const{source:t,name:o}=e;n??=T(e),"ESRI3DO_NORM.glb"===o&&(r=T(e)),s.set(o,t.url),t.files.forEach(((e,t)=>s.set(t,e)))}const o=r??n;if(null==o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("mesh-load-external:missing-files","Missing files to load external mesh source");return new v(o.url,(()=>t.forEach((({source:e})=>e.dispose()))),s,o.type)}class v{constructor(e,t=()=>{},s=new Map,n){this.url=e,this.dispose=t,this.files=s,this.type=n}static fromBlob(e,t){const s=URL.createObjectURL(e);return new v(s,(()=>URL.revokeObjectURL(s)),void 0,t)}}function x(e,t){return d.test(t)||w.test(e)?"gltf":g.test(t)||w.test(e)?"glb":void 0}


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boxFaceOrder: function() { return /* binding */ b; },
/* harmony export */   convertPlaneSizeParameter: function() { return /* binding */ p; },
/* harmony export */   convertUnitGeometry: function() { return /* binding */ x; },
/* harmony export */   createUnitSizeBox: function() { return /* binding */ c; },
/* harmony export */   createUnitSizeCylinder: function() { return /* binding */ h; },
/* harmony export */   createUnitSizePlane: function() { return /* binding */ m; },
/* harmony export */   createUnitSizeSphere: function() { return /* binding */ u; },
/* harmony export */   extractSingleFaceOfBox: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MeshComponent.js */ "./node_modules/@arcgis/core/geometry/support/MeshComponent.js");
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MeshVertexAttributes.js */ "./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vertexSpaceConversion.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=F,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*t.length*3);let l=0,c=0,f=0,u=0;for(let h=0;h<t.length;h++){const n=t[h],p=l/3;for(const t of e)i[u++]=p+t;const m=n.corners;for(let t=0;t<4;t++){const e=m[t];let i=0;a[f++]=.25*r[t][0]+n.uvOrigin[0],a[f++]=n.uvOrigin[1]-.25*r[t][1];for(let t=0;t<3;t++)0!==n.axis[t]?(o[l++]=.5*n.axis[t],s[c++]=n.axis[t]):(o[l++]=.5*e[i++],s[c++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function f(t,e){const r=t.components[0],n=r.faces,s=b[e],a=6*s,i=new Array(6),l=new Array(n.length-6);let c=0,f=0;for(let o=0;o<n.length;o++)o>=a&&o<a+6?i[c++]=n[o]:l[f++]=n[o];if(null!=t.vertexAttributes.uv){const e=new Float32Array(t.vertexAttributes.uv),r=4*s*2,n=[0,1,1,1,1,0,0,0];for(let t=0;t<n.length;t++)e[r+t]=n[t];t.vertexAttributes.uv=e}return t.components=[new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_3__["default"]({faces:i,material:r.material}),new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_3__["default"]({faces:l})],t}function u(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((e-1)*r*2));let l=0,c=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,n=Math.cos(t),p=Math.sin(t);O[2]=p;const m=0===h||h===e,w=m?r-1:r;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;O[0]=-Math.sin(t)*n,O[1]=Math.cos(t)*n;for(let e=0;e<3;e++)o[l]=.5*O[e],s[l]=O[e],++l;a[c++]=(v+(m?.5:0))/r,a[c++]=h/e,0!==h&&v!==r&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-r),1!==h&&(i[f++]=u,i[f++]=u-r,i[f++]=u-r-1)),u++}}return{position:o,normal:s,uv:a,faces:i}}function h(t=0){const e=5,r=Math.round(16*2**t),n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let l=0,c=0,f=0,u=0,h=0;for(let p=0;p<=e;p++){const t=0===p||p===e,n=p<=1||p>=e-1,m=2===p||4===p,w=t?r-1:r;for(let v=0;v<=w;v++){const g=v/w*2*Math.PI,A=t?0:.5;O[0]=A*Math.sin(g),O[1]=A*-Math.cos(g),O[2]=p<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=O[t],s[c++]=n?2===t?p<=1?1:-1:0:2===t?0:O[t]/A;a[f++]=(v+(t?.5:0))/r,a[f++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,m||0===p||v===r||(p!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-r),1!==p&&(i[u++]=h,i[u++]=h-r,i[u++]=h-r-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function p(t,e){const r="number"==typeof e?e:null!=e?e.width:1,n="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}function m(t){const e=A.facingAxisOrderSwap[t],r=A.position,n=A.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const l=e[i],c=Math.abs(l)-1,f=l>=0?1:-1;o[a]=r[t+c]*f,s[a]=n[t+c]*f,a++}}return{position:o,normal:s,uv:new Float32Array(A.uv),faces:new Uint32Array(A.faces),isPlane:!0}}const w=1,v=2,g=3,A={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[g,w,v],west:[-g,-w,v],north:[-w,g,v],south:[w,-g,v],up:[w,v,g],down:[w,-v,-g]}};function x(t,e,r){t.isPlane||y(t),M(t,d(r?.size,r?.unit,e.spatialReference));const n=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_5__.selectVertexSpace)(e,r),l=e.spatialReference.isGeographic?(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_5__.selectVertexSpace)(e):n,c=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_6__.convertVertexSpace)({vertexAttributes:t,vertexSpace:l,spatialReference:e.spatialReference},n,{allowBufferReuse:!0});return{vertexAttributes:new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_4__.MeshVertexAttributes({...c,uv:t.uv}),vertexSpace:n,components:[new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_3__["default"]({faces:t.faces,material:r?.material||null})],spatialReference:e.spatialReference}}function y(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function d(t,e,r){const n=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_6__.getUnitToSpatialReferenceScaleConversion)(e,r);if(null==t&&1===n)return null;if(null==t)return[n,n,n];if("number"==typeof t){const e=t*n;return[e,e,e]}return[null!=t.width?t.width*n:n,null!=t.depth?t.depth*n:n,null!=t.height?t.height*n:n]}function M(t,n){if(null!=n){S[0]=n[0],S[4]=n[1],S[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let e=0;e<3;e++)O[e]=t.position[r+e];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.q)(O,O,S);for(let e=0;e<3;e++)t.position[r+e]=O[e]}if(n[0]!==n[1]||n[1]!==n[2]){S[0]=1/n[0],S[4]=1/n[1],S[8]=1/n[2];for(let n=0;n<t.normal.length;n+=3){for(let e=0;e<3;e++)O[e]=t.normal[n+e];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.q)(O,O,S),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(O,O);for(let e=0;e<3;e++)t.normal[n+e]=O[e]}}}}const F={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},b={south:0,east:1,north:2,west:3,up:4,down:5},O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),S=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)();


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

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rotate: function() { return /* binding */ B; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat3.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/quat.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../spatialReferenceEllipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js");
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../projection/computeTranslationToOriginAndRotation.js */ "./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js");
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projection/projectPointToVector.js */ "./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js");
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../axisAngleDegrees.js */ "./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js");
/* harmony import */ var _MeshTransform_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../MeshTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./geographicUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projection.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js");
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vertexSpaceConversion.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const O=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.geometry.support.meshUtils.rotate");function B(t,e,r){if(!t.vertexAttributes?.position||0===e[3])return;const{spatialReference:o,vertexSpace:i}=t,n=r?.origin??t.origin,s=r?.geographic,a=(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_16__.performGlobalOperation)(O,i,o,s);(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_15__.isMeshWithRelativeVertexSpace)(t)?G(t,e,n):a?H(t,e,n):I(t,e,n)}function G(t,e,r){t.transform??=new _MeshTransform_js__WEBPACK_IMPORTED_MODULE_14__["default"];const{vertexSpace:l,transform:c,spatialReference:f}=t,[g,x,h]=l.origin,R=new _Point_js__WEBPACK_IMPORTED_MODULE_9__["default"]({x:g,y:x,z:h,spatialReference:f}),d=K;if(R.equals(r))(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.i)(d,0,0,0);else if(!(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_18__.projectPointToVertexSpace)(d,r,t))return void (0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.logProjectionError)(O(),r.spatialReference,f,_projection_js__WEBPACK_IMPORTED_MODULE_17__.loadProjectErrorMessage);(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_5__.setAxisAngle)(Z,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.axis)(e),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.angleRad)(e));const y=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.fromRotationTranslationScaleOrigin)(N,Z,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.ZEROS,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.ONES,d),{localMatrix:T}=c,U=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.multiply)(N,y,T);c.scale=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.getScaling)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),U),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.scale)(U,U,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(K,c.scale));const z=c.rotationAxis;c.rotation=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.fromMatrix)(U),0===c.rotationAngle&&(c.rotationAxis=z),c.translation=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.getTranslation)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),U)}function H(t,r,o){const i=t.spatialReference,n=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_10__.getSphericalPCPF)(i),s=Y;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_12__.projectPointToVector)(o,s,n)&&((0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.logProjectionError)(O(),o.spatialReference,n,"Falling back to mesh origin"),!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_12__.projectPointToVector)(t.origin,s,n)))return void (0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.logProjectionError)(O(),t.origin.spatialReference,n);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,m=new Float64Array(a.length),f=null!=l?new Float32Array(l.length):null,p=null!=c?new Float32Array(c.length):null;(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_11__.computeTranslationToOriginAndRotation)(n,s,W,n),(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__.fromMat4)(X,W);const u=Q;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.q)((0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.axis)(Q),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.axis)(r),X),u[3]=r[3],(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.projectToPCPF)(a,i,m,n)&&(null==l||null==f||(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.projectNormalToPCPF)(l,a,i,m,n,f))&&(null==c||null==p||(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.projectTangentToPCPF)(c,a,i,m,n,p))?(J(m,u,3,s),(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.projectFromPCPF)(m,n,a,i)&&(null==l||null==f||(J(f,u,3),(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.projectNormalFromPCPF)(f,a,i,m,n,l)))&&(null==c||null==p||(J(p,u,4),(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.projectTangentFromPCPF)(p,a,i,m,n,c)))?t.vertexAttributesChanged():(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.logProjectionError)(O(),n,i)):(0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.logProjectionError)(O(),i,n)}function I(t,e,r){const o=Y;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_12__.projectPointToVector)(r,o,t.spatialReference)){const e=t.origin;return o[0]=e.x,o[1]=e.y,o[2]=e.z,void (0,_projection_js__WEBPACK_IMPORTED_MODULE_17__.logProjectionError)(O(),r.spatialReference,t.spatialReference,_projection_js__WEBPACK_IMPORTED_MODULE_17__.loadProjectErrorMessage)}J(t.vertexAttributes.position,e,3,o),J(t.vertexAttributes.normal,e,3),J(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function J(t,e,r,o=_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.ZEROS){if(null!=t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__.fromRotation)(W,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.angleRad)(e),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.axis)(e));for(let e=0;e<t.length;e+=r){for(let r=0;r<3;r++)K[r]=t[e+r]-o[r];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(K,K,W);for(let r=0;r<3;r++)t[e+r]=K[r]+o[r]}}}const K=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),N=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),Q=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.create)(),W=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__.create)(),X=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),Y=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__.create)(),Z=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_6__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/meshUtils/scale.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/scale.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scale: function() { return /* binding */ q; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/math/mat4.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/mat4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/quatf64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../spatialReferenceEllipsoidUtils.js */ "./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js");
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projection/projectPointToVector.js */ "./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js");
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../axisAngleDegrees.js */ "./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js");
/* harmony import */ var _MeshTransform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MeshTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js");
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../meshVertexSpaceUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js");
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./geographicUtils.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js");
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projection.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js");
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vertexSpaceConversion.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const k=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.geometry.support.meshUtils.scale");function q(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:o,spatialReference:i}=e,n=r?.origin??e.origin,s=r?.geographic,a=(0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_12__.performGlobalOperation)(k,o,i,s);(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_11__.isMeshWithRelativeVertexSpace)(e)?z(e,t,n):a?L(e,t,n):M(e,t,n)}function z(e,s,f){e.transform??=new _MeshTransform_js__WEBPACK_IMPORTED_MODULE_10__["default"];const{vertexSpace:g,transform:x,spatialReference:h}=e,[A,d,y]=g.origin,w=new _Point_js__WEBPACK_IMPORTED_MODULE_6__["default"]({x:A,y:d,z:y,spatialReference:h}),F=T;if(w.equals(f))(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(F,0,0,0);else if(!(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_14__.projectPointToVertexSpace)(F,f,e))return void (0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.logProjectionError)(k(),f.spatialReference,h,_projection_js__WEBPACK_IMPORTED_MODULE_13__.loadProjectErrorMessage);const S=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(V,s,s,s),U=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.fromRotationTranslationScaleOrigin)(D,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__.IDENTITY,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.ZEROS,S,F),{localMatrix:q}=x,z=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.multiply)(D,U,q);x.scale=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.getScaling)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),z),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.scale)(z,z,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.u)(T,x.scale));const L=x.rotationAxis;x.rotation=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_9__.fromMatrix)(z),0===x.rotationAngle&&(x.rotationAxis=L),x.translation=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__.getTranslation)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),z)}function L(e,t,r){const o=e.spatialReference,i=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_7__.getSphericalPCPF)(o),n=E;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_8__.projectPointToVector)(r,n,i)&&((0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.logProjectionError)(k(),r.spatialReference,i,"Falling back to mesh origin"),!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_8__.projectPointToVector)(e.origin,n,i)))return void (0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.logProjectionError)(k(),e.origin.spatialReference,i);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),f=null!=a?new Float32Array(a.length):null,m=null!=l?new Float32Array(l.length):null;(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectToPCPF)(s,o,c,i)&&(null==a||null==f||(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectNormalToPCPF)(a,s,o,c,i,f))&&(null==l||null==m||(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectTangentToPCPF)(l,s,o,c,i,m))?(P(c,t,n),(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectFromPCPF)(c,i,s,o)&&(null==a||null==f||(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectNormalFromPCPF)(f,s,o,c,i,a))&&(null==l||null==m||(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.projectTangentFromPCPF)(m,s,o,c,i,l))?e.vertexAttributesChanged():(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.logProjectionError)(k(),i,o)):(0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.logProjectionError)(k(),o,i)}function M(e,t,r){const o=E;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_8__.projectPointToVector)(r,o,e.spatialReference)){const t=e.origin;return o[0]=t.x,o[1]=t.y,o[2]=t.z,void (0,_projection_js__WEBPACK_IMPORTED_MODULE_13__.logProjectionError)(k(),r.spatialReference,e.spatialReference,_projection_js__WEBPACK_IMPORTED_MODULE_13__.loadProjectErrorMessage)}P(e.vertexAttributes.position,t,o),e.vertexAttributesChanged()}function P(e,t,r=_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.ZEROS){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)T[t]=e[o+t]-r[t];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(T,T,t);for(let t=0;t<3;t++)e[o+t]=T[t]+r[t]}}const T=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),V=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)(),D=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),E=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.create)();


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

/***/ "./node_modules/@arcgis/core/geometry/support/polygonUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/polygonUtils.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fitPlane: function() { return /* binding */ e; },
/* harmony export */   leastSignificantAxis: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Axis.js */ "./node_modules/@arcgis/core/geometry/support/Axis.js");
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plane.js */ "./node_modules/@arcgis/core/geometry/support/plane.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(t,o,s){const a=e(f,t,o,s)?(0,_plane_js__WEBPACK_IMPORTED_MODULE_4__.getNormal)(f):[0,0,1];return Math.abs(a[2])>Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(80))?_Axis_js__WEBPACK_IMPORTED_MODULE_3__.Axis.Z:Math.abs(a[1])>Math.abs(a[0])?_Axis_js__WEBPACK_IMPORTED_MODULE_3__.Axis.Y:_Axis_js__WEBPACK_IMPORTED_MODULE_3__.Axis.X}function e(r,i,a,n){const c=(r=>!Array.isArray(r[0]))(i)?(r,t)=>i[3*r+t]:(r,t)=>i[r][t],e=n?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnitForSR)(n)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerVerticalUnitForSR)(n):1;return (0,_plane_js__WEBPACK_IMPORTED_MODULE_4__.fromManyPoints)(r,((r,t)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,c(t,0)*e,c(t,1)*e,c(t,2))),a)}const f=(0,_plane_js__WEBPACK_IMPORTED_MODULE_4__.create)();


/***/ }),

/***/ "./node_modules/@arcgis/core/geometry/support/triangulationUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/triangulationUtils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CounterClockwiseMode: function() { return /* binding */ p; },
/* harmony export */   isCounterClockwise: function() { return /* binding */ u; },
/* harmony export */   ringsToTriangulationInfo: function() { return /* binding */ a; },
/* harmony export */   triangulate: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/earcut.js */ "./node_modules/@arcgis/core/chunks/earcut.js");
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Axis.js */ "./node_modules/@arcgis/core/geometry/support/Axis.js");
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coordsUtils.js */ "./node_modules/@arcgis/core/geometry/support/coordsUtils.js");
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DoubleArray.js */ "./node_modules/@arcgis/core/geometry/support/DoubleArray.js");
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Indices.js */ "./node_modules/@arcgis/core/geometry/support/Indices.js");
/* harmony import */ var _polygonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygonUtils.js */ "./node_modules/@arcgis/core/geometry/support/polygonUtils.js");
/* harmony import */ var _meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./meshUtils/deduplicate.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(t){const e=a(t.rings,t.hasZ,p.CCW_IS_HOLE,t.spatialReference),s=new Array;let l=0,f=0;for(const r of e.polygons){const t=r.count,c=r.index,h=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__.doubleSubArray)(e.position,3*c,3*t),a=r.holeIndices.map((n=>n-c)),g=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__.compactIndices)((0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__.e)(h,a,3));s.push({position:h,faces:g}),l+=h.length,f+=g.length}const g=h(s,l,f),u=Array.isArray(g.position)?(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__.deduplicate)(g.position,3,{originalIndices:g.faces}):(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__.deduplicate)(g.position.buffer,6,{originalIndices:g.faces});return g.position=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__.doubleArrayFrom)(new Float64Array(u.buffer)),g.faces=u.indices,g}function h(n,t,e){if(1===n.length)return n[0];const o=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__.newDoubleArray)(t),r=new Array(e);let l=0,c=0,f=0;for(const s of n){for(let n=0;n<s.position.length;n++)o[l++]=s.position[n];for(const n of s.faces)r[c++]=n+f;f=l/3}return{position:o,faces:(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__.compactIndices)(r)}}function a(n,t,e,o){const r=n.length,i=new Array(r),l=new Array(r),c=new Array(r);let f=0;for(let s=0;s<r;++s)f+=n[s].length;let h=0,a=0,m=0;const d=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__.newDoubleArray)(3*f);let y=0;for(let s=r-1;s>=0;s--){const f=n[s],A=e===p.CCW_IS_HOLE&&u(f,t,o);if(A&&1!==r)i[h++]=f;else{let n=f.length;for(let t=0;t<h;++t)n+=i[t].length;const e={index:y,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=f.length,f.length>0&&(c[m++]={index:y,count:f.length}),y=A?g(f,f.length-1,-1,d,y,f.length,t):g(f,0,1,d,y,f.length,t);for(let o=0;o<h;++o){const n=i[o];e.holeIndices[o]=y,e.pathLengths[o+1]=n.length,n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}h=0,e.count>0&&(l[a++]=e)}}for(let s=0;s<h;++s){const n=i[s];n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}return l.length=a,c.length=m,{position:d,polygons:l,outlines:c}}function g(n,t,e,o,r,s,i){r*=3;for(let l=0;l<s;++l){const s=n[t];o[r++]=s[0],o[r++]=s[1],o[r++]=i&&s[2]?s[2]:0,t+=e}return r/3}function u(n,o,r){if(!o)return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__.isClockwise)(n);const s=n.length-1;switch((0,_polygonUtils_js__WEBPACK_IMPORTED_MODULE_5__.leastSignificantAxis)(n,s,r)){case _Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.X:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__.isClockwise)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.Y,_Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.Z);case _Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.Y:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__.isClockwise)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.Z);case _Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.Z:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__.isClockwise)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__.Axis.Y)}}var p;!function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(p||(p={}));


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

/***/ "./node_modules/@arcgis/core/rest/support/meshFeatureAttributes.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/meshFeatureAttributes.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractMeshFeatureOrigin: function() { return /* binding */ n; },
/* harmony export */   extractMeshFeatureTransform: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/MeshTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/Point.js */ "./node_modules/@arcgis/core/geometry/Point.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(t,n,i=r){return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__["default"]({x:t[i.originX],y:t[i.originY],z:t[i.originZ],spatialReference:n})}function i(o,n=r){return new _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__["default"]({translation:[o[n.translationX],-o[n.translationZ],o[n.translationY]],rotationAxis:[o[n.rotationX],-o[n.rotationZ],o[n.rotationY]],rotationAngle:o[n.rotationDeg],scale:[o[n.scaleX],o[n.scaleZ],o[n.scaleY]]})}const r={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};


/***/ }),

/***/ "./node_modules/@arcgis/core/rest/support/meshFeatureSet.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/support/meshFeatureSet.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assetMapFromAssetMapsJSON: function() { return /* binding */ g; },
/* harmony export */   extractMesh: function() { return /* binding */ E; },
/* harmony export */   meshFeatureSetFromJSON: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Graphic.js */ "./node_modules/@arcgis/core/Graphic.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/Extent.js */ "./node_modules/@arcgis/core/geometry/Extent.js");
/* harmony import */ var _geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/Mesh.js */ "./node_modules/@arcgis/core/geometry/Mesh.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/* harmony import */ var _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/meshUtils/External.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/External.js");
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layers/support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FeatureSet.js */ "./node_modules/@arcgis/core/rest/support/FeatureSet.js");
/* harmony import */ var _meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meshFeatureAttributes.js */ "./node_modules/@arcgis/core/rest/support/meshFeatureAttributes.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.rest.support.meshFeatureSet");function l(t,r,s){const o=s.features;s.features=[],delete s.geometryType;const a=_FeatureSet_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromJSON(s);if(a.geometryType="mesh",!s.assetMaps)return a;const u=g(r,s.assetMaps),i=t.sourceSpatialReference??_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__["default"].WGS84,m=s.globalIdFieldName,{outFields:c}=t,p=null!=c&&c.length>0?y(c.includes("*")?null:new Set(c)):()=>({});for(const n of o){const t=E(n,m,i,r,u);a.features.push(new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__["default"]({geometry:t,attributes:p(n)}))}return a}function y(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function E(e,t,r,n,a){const u=e.attributes[t],i=a.get(u);if(null==i||!e.geometry)return null;const f=(0,_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_9__.extractMeshFeatureOrigin)(e.attributes,r,n.transformFieldRoles),p=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.geometry);p.spatialReference=r;const l=(0,_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_9__.extractMeshFeatureTransform)(e.attributes,n.transformFieldRoles),y=r.isGeographic?"local":"georeferenced",E=d(i);return E?_geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_4__["default"].createWithExternalSource(f,E,{extent:p,transform:l,vertexSpace:y,unitConversionDisabled:!0}):_geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_4__["default"].createIncomplete(f,{extent:p,transform:l,vertexSpace:y})}var h;function g(e,t){const s=new Map;for(const o of t){const t=o.parentGlobalId;if(null==t)continue;const n=o.assetName,a=o.assetType,u=o.assetHash,f=o.assetURL,m=o.conversionStatus,c=o.seqNo,l=(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_7__.getFormatIdMimeType)(a,e.supportedFormats);if(!l){p().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const y=(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(s,t,(()=>({files:new Map})));(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(y.files,n,(()=>({name:n,type:a,mimeType:l,status:S(m),parts:[]}))).parts[c]={hash:u,url:f}}return s}function d(e){const t=Array.from(e.files.values()),r=new Array;for(const s of t){if(s.status!==h.COMPLETED)return null;const e=new Array;for(const t of s.parts){if(!t)return null;e.push(new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_6__.ServiceAssetPart(t.url,t.hash))}r.push(new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_6__.ServiceAsset(s.name,s.mimeType,e))}return r}function S(e){switch(e){case"COMPLETED":case"SUBMITTED":return h.COMPLETED;case"INPROGRESS":return h.PENDING;default:return h.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"}(h||(h={}));


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


/***/ })

}]);
//# sourceMappingURL=rest-support-meshFeatureSet.js.map