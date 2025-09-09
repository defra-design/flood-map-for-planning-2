"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["webglDeps"],{

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

/***/ "./node_modules/@arcgis/core/views/2d/webglDeps.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/webglDeps.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferObject: function() { return /* reexport safe */ _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__.BufferObject; },
/* harmony export */   FramebufferObject: function() { return /* reexport safe */ _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__.FramebufferObject; },
/* harmony export */   Program: function() { return /* reexport safe */ _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__.Program; },
/* harmony export */   ProgramCache: function() { return /* reexport safe */ _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__.ProgramCache; },
/* harmony export */   Renderbuffer: function() { return /* reexport safe */ _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__.Renderbuffer; },
/* harmony export */   ShaderCompiler: function() { return /* reexport safe */ _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__.ShaderCompiler; },
/* harmony export */   Texture: function() { return /* reexport safe */ _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__.Texture; },
/* harmony export */   VertexArrayObject: function() { return /* reexport safe */ _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__.VertexArrayObject; },
/* harmony export */   createProgram: function() { return /* reexport safe */ _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_9__.createProgram; },
/* harmony export */   glslifyDefineMap: function() { return /* reexport safe */ _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__.glslifyDefineMap; }
/* harmony export */ });
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/FramebufferObject.js */ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/Program.js */ "./node_modules/@arcgis/core/views/webgl/Program.js");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/ProgramCache.js */ "./node_modules/@arcgis/core/views/webgl/ProgramCache.js");
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/Renderbuffer.js */ "./node_modules/@arcgis/core/views/webgl/Renderbuffer.js");
/* harmony import */ var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webgl/ShaderCompiler.js */ "./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../webgl/Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webgl/VertexArrayObject.js */ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl/programUtils.js */ "./node_modules/@arcgis/core/views/webgl/programUtils.js");
/* harmony import */ var _webgl_ProgramTemplate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../webgl/ProgramTemplate.js */ "./node_modules/@arcgis/core/views/webgl/ProgramTemplate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/



/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/BufferObject.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/BufferObject.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BufferObject: function() { return /* binding */ E; },
/* harmony export */   tracer: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const h=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.webgl.BufferObject"),c=null;class E{static createIndex(t,e,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.Usage.STREAM_READ,i){const s=new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.PIXEL_PACK_BUFFER,e);return i&&s.setSize(i),s}static createPixelUnpack(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.Usage.STREAM_DRAW,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.PIXEL_UNPACK_BUFFER,e,i)}static createTransformFeedback(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.Usage.STATIC_DRAW,i){const s=new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.TRANSFORM_FEEDBACK_BUFFER,e);return s.setSize(i),s}constructor(t,e,i,s){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ResourceType.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.checkWebGLError)(this._context.gl),s&&this.setData(s)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ELEMENT_ARRAY_BUFFER){if(this._indexType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_INT)return 4*this._size;if(this._indexType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ELEMENT_ARRAY_BUFFER||this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ARRAY_BUFFER}dispose(){if(this._context?.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null}this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ResourceType.BufferObject,this),this._context=null}else this._glName&&h().warn("Leaked WebGL buffer object")}setSize(t,e=null){if(this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ELEMENT_ARRAY_BUFFER&&null!=e)switch(this._indexType=e,e){case _enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_SHORT:t*=2;break;case _enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.ELEMENT_ARRAY_BUFFER&&((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isUint8Array)(t)?this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_BYTE:(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isUint16Array)(t)?(e/=2,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_SHORT):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__.isUint32Array)(t)&&(e/=4,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__.DataType.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;null!=e?s.bufferData(this.bufferType,e,this.usage):s.bufferData(this.bufferType,t,this.usage),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.checkWebGLError)(s),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,s){if(!t)return;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:_}=this._context;_.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,s-i),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.checkWebGLError)(_),this._isVAOAware&&this._context.bindVAO(r)}getSubData(t,e=0,i,s){if(i<0||s<0)return;const r=o(t)?t.BYTES_PER_ELEMENT:1;if(r*((i??0)+(s??0))>t.byteLength)return;e+r*(s??0)>this.usedMemory&&h().warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.TRANSFORM_FEEDBACK_BUFFER),n.getBufferSubData(_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.TRANSFORM_FEEDBACK_BUFFER,e,t,i,s),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.COPY_READ_BUFFER),n.getBufferSubData(_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.COPY_READ_BUFFER,e,t,i,s),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.COPY_READ_BUFFER))}async getSubDataAsync(t,e=0,i,s){await this._context.clientWaitAsync(),this.getSubData(t,e,i,s)}}function o(e){return (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.isArrayLike)(e)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/FramebufferObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/FramebufferObject.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FramebufferObject: function() { return /* binding */ x; },
/* harmony export */   ensureAttachmentMaxSize: function() { return /* binding */ A; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BufferObject.js */ "./node_modules/@arcgis/core/views/webgl/BufferObject.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GLObjectType.js */ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js");
/* harmony import */ var _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Renderbuffer.js */ "./node_modules/@arcgis/core/views/webgl/Renderbuffer.js");
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Texture.js */ "./node_modules/@arcgis/core/views/webgl/Texture.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const p=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.webgl.FramebufferObject");class x{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ResourceType.FramebufferObject,this);const r=E(e)?e:new _Texture_js__WEBPACK_IMPORTED_MODULE_8__.Texture(this._context,e);if(this._colorAttachments.set(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0),null!=i)if(b(i))this._depthStencilTexture=E(i)?i:new _Texture_js__WEBPACK_IMPORTED_MODULE_8__.Texture(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=g(i)?i:new _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__.Renderbuffer(this._context,i);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();if(this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ResourceType.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce(((t,[e,i])=>t+i.usedMemory),this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&E(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__.GLObjectType.Texture:return this._attachDepthStencilTexture(t);case _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__.GLObjectType.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.DEPTH_STENCIL&&e.pixelFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelFormat.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.PixelType.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,_enums_js__WEBPACK_IMPORTED_MODULE_5__.DepthStencilAttachment)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){const t=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,_enums_js__WEBPACK_IMPORTED_MODULE_5__.DepthStencilAttachment),this._context.bindFramebuffer(t)}return this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__.FramebufferTarget.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(t.descriptor);i.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__.FramebufferTarget.FRAMEBUFFER,r,i.RENDERBUFFER,null),this._context.bindFramebuffer(e)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,s,n,h){(t<0||e<0||s<0||n<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=h.descriptor;h.descriptor.target!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==o?.width||null==o?.height||t+i>this.width||e+r>this.height||s+i>o.width||n+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,a=c.bindTexture(h,_Texture_js__WEBPACK_IMPORTED_MODULE_8__.Texture.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(_Texture_js__WEBPACK_IMPORTED_MODULE_8__.Texture.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_2D,0,s,n,t,e,i,r),c.bindTexture(a,_Texture_js__WEBPACK_IMPORTED_MODULE_8__.Texture.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,n,h){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,n,h)}async readPixelsAsync(t,e,r,s,n,h,o){const{gl:c}=this._context,a=_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__.BufferObject.createPixelPack(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_5__.Usage.STREAM_READ,o.byteLength);this._context.bindBuffer(a);const u=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),c.readPixels(t,e,r,s,n,h,0),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__.BufferType.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(u),await a.getSubDataAsync(o),a.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};A(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(A(i,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=_enums_js__WEBPACK_IMPORTED_MODULE_5__.FramebufferTarget.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,S(e),t))),this._depthStencilBuffer){const i=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,S(this._depthStencilTexture),t);if((0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__.webglDebugEnabled)()){e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!")}this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0,i=_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_2D,r=_enums_js__WEBPACK_IMPORTED_MODULE_5__.FramebufferTarget.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__.FramebufferTarget.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.disposeMaybe)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__.disposeMaybe)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_2D&&t.target!==_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),A(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){A(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.DEPTH_COMPONENT16:case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.DEPTH_COMPONENT24:case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.DEPTH32F_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case _enums_js__WEBPACK_IMPORTED_MODULE_5__.RenderbufferFormat.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===x._MAX_COLOR_ATTACHMENTS){const{gl:t}=this._context;x._MAX_COLOR_ATTACHMENTS=t.getParameter(t.MAX_COLOR_ATTACHMENTS)}const i=e-_enums_js__WEBPACK_IMPORTED_MODULE_5__.ColorAttachment.COLOR_ATTACHMENT0;i+1>x._MAX_COLOR_ATTACHMENTS&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${x._MAX_COLOR_ATTACHMENTS} color attachments`)}}function E(t){return null!=t&&"type"in t&&t.type===_GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__.GLObjectType.Texture}function g(t){return null!=t&&"type"in t&&t.type===_GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__.GLObjectType.RenderBuffer}function b(t){return E(t)||null!=t&&"pixelFormat"in t}function A(t,e){const i=Math.max(t.width,t.height);if(i>e){p().warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return!0}function S(t){return t.descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP?_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X:_enums_js__WEBPACK_IMPORTED_MODULE_5__.TextureType.TEXTURE_2D}x._MAX_COLOR_ATTACHMENTS=-1;


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Program.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Program.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Program: function() { return /* binding */ r; },
/* harmony export */   test: function() { return /* binding */ f; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkWebGLError.js */ "./node_modules/@arcgis/core/views/webgl/checkWebGLError.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShaderTranspiler.js */ "./node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const o=4294967295;class r{constructor(r,a,h,m,c=new Map,_=[]){this._context=r,this._locations=m,this._uniformBlockBindings=c,this._transformFeedbackVaryings=_,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,r||console.error("RenderingContext isn't initialized!"),0===a.length&&console.error("Shaders source should not be empty!"),a=(0,_ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_3__.transpileShader)(a,_enums_js__WEBPACK_IMPORTED_MODULE_2__.ShaderType.VERTEX_SHADER),h=(0,_ShaderTranspiler_js__WEBPACK_IMPORTED_MODULE_3__.transpileShader)(h,_enums_js__WEBPACK_IMPORTED_MODULE_2__.ShaderType.FRAGMENT_SHADER),this._vShader=s(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_2__.ShaderType.VERTEX_SHADER,a),this._fShader=s(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_2__.ShaderType.FRAGMENT_SHADER,h),f.enabled&&(this._linesOfCode=a.match(/\n/g).length+h.match(/\n/g).length+2,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.LinesOfCode,this._vShader,this._linesOfCode)),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Shader,this),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglValidateShadersEnabled)()&&(this.vertexShader=a,this.fragmentShader=h),this.usedMemory=a.length+h.length;const l=this._context.gl,g=l.createProgram();l.attachShader(g,this._vShader),l.attachShader(g,this._fShader),this._locations.forEach(((t,e)=>l.bindAttribLocation(g,t,e))),this._transformFeedbackVaryings?.length&&l.transformFeedbackVaryings(g,this._transformFeedbackVaryings,l.SEPARATE_ATTRIBS),l.linkProgram(g),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglValidateShadersEnabled)()&&!l.getProgramParameter(g,l.LINK_STATUS)&&console.error(`Could not link shader\nvalidated: ${l.getProgramParameter(g,l.VALIDATE_STATUS)}, gl error ${l.getError()}, vertex: ${l.getShaderParameter(this._vShader,l.COMPILE_STATUS)}, fragment: ${l.getShaderParameter(this._fShader,l.COMPILE_STATUS)}, info log: ${l.getProgramInfoLog(g)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[t,e]of this._uniformBlockBindings){const n=l.getUniformBlockIndex(g,t);n<o&&l.uniformBlockBinding(g,n,e)}this._glName=g,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==t||null==this.glName?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,e=this._context.instanceCounter;this._nameToUniformLocation.forEach((t=>t&&e.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Uniform,t))),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(e.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,e.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,e.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Program,this))}ref(){++this._refCount}_getUniformLocation(t){const e=this._nameToUniformLocation.get(t);if(void 0!==e)return e;if(this.glName){const e=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,e),e&&this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__.ResourceType.Uniform,e),e}return null}hasUniform(t){return null!=this._getUniformLocation(t)}setUniform1i(t,e){const n=this._nameToUniform1.get(t);void 0!==n&&e===n||(this._context.gl.uniform1i(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1iv(t,e){m(this._nameToUniform1v,t,e)&&this._context.gl.uniform1iv(this._getUniformLocation(t),e)}setUniform2iv(t,e){m(this._nameToUniform2,t,e)&&this._context.gl.uniform2iv(this._getUniformLocation(t),e)}setUniform3iv(t,e){m(this._nameToUniform3,t,e)&&this._context.gl.uniform3iv(this._getUniformLocation(t),e)}setUniform4iv(t,e){m(this._nameToUniform4,t,e)&&this._context.gl.uniform4iv(this._getUniformLocation(t),e)}setUniform1f(t,e){const n=this._nameToUniform1.get(t);void 0!==n&&e===n||(this._context.gl.uniform1f(this._getUniformLocation(t),e),this._nameToUniform1.set(t,e))}setUniform1fv(t,e){m(this._nameToUniform1v,t,e)&&this._context.gl.uniform1fv(this._getUniformLocation(t),e)}setUniform2f(t,e,n){const i=this._nameToUniform2.get(t);void 0===i?(this._context.gl.uniform2f(this._getUniformLocation(t),e,n),this._nameToUniform2.set(t,[e,n])):e===i[0]&&n===i[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),e,n),i[0]=e,i[1]=n)}setUniform2fv(t,e){m(this._nameToUniform2,t,e)&&this._context.gl.uniform2fv(this._getUniformLocation(t),e)}setUniform3f(t,e,n,i){const o=this._nameToUniform3.get(t);void 0===o?(this._context.gl.uniform3f(this._getUniformLocation(t),e,n,i),this._nameToUniform3.set(t,[e,n,i])):e===o[0]&&n===o[1]&&i===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),e,n,i),o[0]=e,o[1]=n,o[2]=i)}setUniform3fv(t,e){const n=this._getUniformLocation(t);null!=n&&m(this._nameToUniform3,t,e)&&this._context.gl.uniform3fv(n,e)}setUniform4f(t,e,n,i,o){const r=this._nameToUniform4.get(t);void 0===r?(this._context.gl.uniform4f(this._getUniformLocation(t),e,n,i,o),this._nameToUniform4.set(t,[e,n,i,o])):void 0!==r&&e===r[0]&&n===r[1]&&i===r[2]&&o===r[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),e,n,i,o),r[0]=e,r[1]=n,r[2]=i,r[3]=o)}setUniform4fv(t,e){const n=this._getUniformLocation(t);null!=n&&m(this._nameToUniform4,t,e)&&this._context.gl.uniform4fv(n,e)}setUniformMatrix3fv(t,e,n=!1){const i=this._getUniformLocation(t);null!=i&&m(this._nameToUniformMatrix3,t,e)&&this._context.gl.uniformMatrix3fv(i,n,e)}setUniformMatrix4fv(t,e,n=!1){const i=this._getUniformLocation(t);null!=i&&m(this._nameToUniformMatrix4,t,e)&&this._context.gl.uniformMatrix4fv(i,n,e)}stop(){}}function s(n,i,o){const r=n.gl,s=r.createShader(i);return r.shaderSource(s,o),r.compileShader(s),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__.webglValidateShadersEnabled)()&&!r.getShaderParameter(s,r.COMPILE_STATUS)&&(console.error("Compile error in ".concat(i===_enums_js__WEBPACK_IMPORTED_MODULE_2__.ShaderType.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(r.getShaderInfoLog(s)),console.error(a(o))),s}function a(t){let e=2;return t.replaceAll("\n",(()=>"\n"+h(e++)+":"))}function h(t){return t>=1e3?t.toString():("  "+t).slice(-3)}function m(t,e,n){const i=t.get(e);if(!i)return t.set(e,Array.from(n)),!0;const o=n.length;if(i.length!==o)return t.set(e,Array.from(n)),!0;for(let r=0;r<o;++r){const t=n[r];if(i[r]!==t){for(i[r]=t;r<o;++r)i[r]=n[r];return!0}}return!1}const f={enabled:!1};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ProgramCache.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramCache: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/NestedMap.js */ "./node_modules/@arcgis/core/core/NestedMap.js");
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Program.js */ "./node_modules/@arcgis/core/views/webgl/Program.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(r){this._rctx=r,this._store=new _core_NestedMap_js__WEBPACK_IMPORTED_MODULE_1__.NestedMap}dispose(){this._store.forAll((t=>t.dispose())),this._store.clear()}acquire(t,s,e,o){const i=this._store.get(t,s);if(null!=i)return i.ref(),i;const c=new _Program_js__WEBPACK_IMPORTED_MODULE_2__.Program(this._rctx,t,s,e,o);return c.ref(),this._store.set(t,s,c),c}get test(){}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ProgramTemplate.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramTemplate.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProgram: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Program.js */ "./node_modules/@arcgis/core/views/webgl/Program.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e,t,a=""){return new _Program_js__WEBPACK_IMPORTED_MODULE_0__.Program(e,a+t.shaders.vertexShader,a+t.shaders.fragmentShader,t.attributes)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/Renderbuffer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/Renderbuffer.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderbuffer: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GLObjectType.js */ "./node_modules/@arcgis/core/views/webgl/GLObjectType.js");
/* harmony import */ var _RenderbufferDescriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderbufferDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(r,s){this._context=r,this._descriptor=s,this.type=_GLObjectType_js__WEBPACK_IMPORTED_MODULE_1__.GLObjectType.RenderBuffer,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:o,internalFormat:h,multisampled:d}=s;d?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,h,n,o):i.renderbufferStorage(i.RENDERBUFFER,h,n,o),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get usedMemory(){return (0,_RenderbufferDescriptor_js__WEBPACK_IMPORTED_MODULE_2__.estimateMemory)(this._descriptor)}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const s=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):s.renderbufferStorage(s.RENDERBUFFER,r.internalFormat,r.width,r.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.Renderbuffer,this),this._context=null)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RenderbufferDescriptor: function() { return /* binding */ i; },
/* harmony export */   estimateMemory: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class i{constructor(t,i,h=i){this.internalFormat=t,this.width=i,this.height=h,this.multisampled=!1,this.samples=1}}function h(i){return i.width<=0||i.height<=0||null==i.internalFormat?0:i.width*i.height*(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.getBytesPerElementFormat)(i.internalFormat)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShaderCompiler: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this._resolve(e.path,t),a=e.start+e.length})),h+=r.slice(a),t.set(e,h),h}_read(e){return this._readFile(e)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ShaderTranspiler.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   transpileShader: function() { return /* binding */ S; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _reservedWordsGLSL3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservedWordsGLSL3.js */ "./node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js");
/* harmony import */ var _testUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testUtils.js */ "./node_modules/@arcgis/core/views/webgl/testUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],o=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],n=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var i=999,l=9999,s=0,c=1,d=2,u=3,g=4,p=5,f=6,_=7,h=8,x=9,m=10,y=11,w=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function M(){var e,t,r,M=0,v=0,T=i,b=[],P=[],E=1,C=0,k=0,D=!1,j=!1,F="";return function(e){return P=[],null!==e?S(e.replace?e.replace(/\r\n/g,"\n"):e):R()};function L(e){e.length&&P.push({type:w[T],data:e,position:k,line:E,column:C})}function S(t){var a;for(M=0,r=(F+=t).length;e=F[M],M<r;){switch(a=M,T){case s:M=I();break;case c:M=G();break;case d:M=A();break;case u:M=O();break;case g:M=B();break;case y:M=q();break;case p:M=H();break;case l:M=N();break;case x:M=X();break;case i:M=V()}if(a!==M)if("\n"===F[a])C=0,++E;else++C}return v+=M,F=F.slice(M),P}function R(e){return b.length&&L(b.join("")),T=m,L("(eof)"),P}function V(){return b=b.length?[]:b,"/"===t&&"*"===e?(k=v+M-1,T=s,t=e,M+1):"/"===t&&"/"===e?(k=v+M-1,T=c,t=e,M+1):"#"===e?(T=d,k=v+M,M):/\s/.test(e)?(T=x,k=v+M,M):(D=/\d/.test(e),j=/[^\w_]/.test(e),k=v+M,T=D?g:j?u:l,M)}function X(){return/[^\s]/g.test(e)?(L(b.join("")),T=i,M):(b.push(e),t=e,M+1)}function A(){return"\r"!==e&&"\n"!==e||"\\"===t?(b.push(e),t=e,M+1):(L(b.join("")),T=i,M)}function G(){return A()}function I(){return"/"===e&&"*"===t?(b.push(e),L(b.join("")),T=i,M+1):(b.push(e),t=e,M+1)}function O(){if("."===t&&/\d/.test(e))return T=p,M;if("/"===t&&"*"===e)return T=s,M;if("/"===t&&"/"===e)return T=c,M;if("."===e&&b.length){for(;U(b););return T=p,M}if(";"===e||")"===e||"("===e){if(b.length)for(;U(b););return L(e),T=i,M+1}var r=2===b.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;U(b););return T=i,M}return b.push(e),t=e,M+1}function U(e){for(var t,r,a=0;;){if(t=o.indexOf(e.slice(0,e.length+a).join("")),r=o[t],-1===t){if(a--+e.length>0)continue;r=e.slice(0,1).join("")}return L(r),k+=r.length,(b=b.slice(r.length)).length}}function q(){return/[^a-fA-F0-9]/.test(e)?(L(b.join("")),T=i,M):(b.push(e),t=e,M+1)}function B(){return"."===e||/[eE]/.test(e)?(b.push(e),T=p,t=e,M+1):"x"===e&&1===b.length&&"0"===b[0]?(T=y,b.push(e),t=e,M+1):/[^\d]/.test(e)?(L(b.join("")),T=i,M):(b.push(e),t=e,M+1)}function H(){return"f"===e&&(b.push(e),t=e,M+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(b.push(e),t=e,M+1):/[^\d]/.test(e)?(L(b.join("")),T=i,M):(b.push(e),t=e,M+1)}function N(){if(/[^\d\w_]/.test(e)){var r=b.join("");return T=a.indexOf(r)>-1?h:n.indexOf(r)>-1?_:f,L(b.join("")),T=i,M}return b.push(e),t=e,M+1}}function v(e){var t=M(),r=[];return r=(r=r.concat(t(e))).concat(t(null))}function T(e){return v(e)}function b(e){return e.map((e=>"eof"!==e.type?e.data:"")).join("")}const P=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function E(e,t="100",r="300 es"){const a=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const o of e)if("preprocessor"===o.type){const e=a.exec(o.data);if(e){const a=e[1].replaceAll(/\s{2,}/g," ");if(a===r)return a;if(a===t)return o.data="#version "+r,t;throw new Error("unknown glsl version: "+a)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}function C(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function k(e,t,r,a){a=a||r;for(const o of e)if("ident"===o.type&&o.data===r){a in t?t[a]++:t[a]=0;return k(e,t,a+"_"+t[a],a)}return r}function D(e,t,r="afterVersion"){function a(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}function o(e){let t=-1,o=0,n=-1;for(let i=0;i<e.length;i++){const l=e[i];if("preprocessor"===l.type&&(/#(if|ifdef|ifndef)\s+.+/.test(l.data)?++o:/#endif\s*.*/.test(l.data)&&--o),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===l.type&&l.data.startsWith("#version")&&(n=Math.max(n,i)),"afterPrecision"===r&&"keyword"===l.type&&"precision"===l.data){const t=a(e,i);if(null===t)throw new Error("precision statement not followed by any semicolons!");n=Math.max(n,t)}t<n&&0===o&&(t=i)}return t+1}const n={data:"\n",type:"whitespace"},i=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let l=o(e);i(l-1)&&e.splice(l++,0,n);for(const s of t)e.splice(l++,0,s);i(l-1)&&i(l)&&e.splice(l,0,n)}function j(e,t,r,a="lowp"){D(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function F(e,t,r,a,o="lowp"){D(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:a.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function L(e,t){let r,a,o=-1;for(let n=t;n<e.length;n++){const t=e[n];if("operator"===t.type&&("["===t.data&&(r=n),"]"===t.data)){a=n;break}"integer"===t.type&&(o=parseInt(t.data,10))}return r&&a&&e.splice(r,a-r+1),o}function S(r,a){if(r.startsWith("#version 300"))return r;const o=V(r);if(null!=o)return o;const n=T(r);if("300 es"===E(n,"100","300 es"))return r;let i=null,l=null;const s={},c={};for(let d=0;d<n.length;++d){const r=n[d];switch(r.type){case"keyword":a===_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderType.VERTEX_SHADER&&"attribute"===r.data?r.data="in":"varying"===r.data&&(r.data=a===_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderType.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(r.data.trim())&&(r.data=r.data.replaceAll(/(2D|Cube|EXT)/g,"")),a===_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderType.FRAGMENT_SHADER&&"gl_FragColor"===r.data&&(i||(i=k(n,s,"fragColor"),j(n,i,"vec4")),r.data=i),a===_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderType.FRAGMENT_SHADER&&"gl_FragData"===r.data){const e=L(n,d+1),t=k(n,s,"fragData");F(n,t,"vec4",e,"mediump"),r.data=t}else a===_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderType.FRAGMENT_SHADER&&"gl_FragDepthEXT"===r.data&&(l||(l=k(n,s,"gl_FragDepth")),r.data=l);break;case"ident":if(_reservedWordsGLSL3_js__WEBPACK_IMPORTED_MODULE_2__["default"].includes(r.data)){if(a===_enums_js__WEBPACK_IMPORTED_MODULE_1__.ShaderType.VERTEX_SHADER&&C(n,d))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");r.data in c||(c[r.data]=k(n,s,r.data)),r.data=c[r.data]}}}for(let e=n.length-1;e>=0;--e){const t=n[e];if("preprocessor"===t.type){const r=t.data.match(/#extension\s+(.*):/);if(r?.[1]&&P.has(r[1].trim())){const t=n[e+1];n.splice(e,t&&"whitespace"===t.type?2:1)}const a=t.data.match(/#ifdef\s+(.*)/);a?.[1]&&P.has(a[1].trim())&&(t.data="#if 1");const o=t.data.match(/#ifndef\s+(.*)/);o?.[1]&&P.has(o[1].trim())&&(t.data="#if 0")}}return X(r,b(n))}const R=new Map;function V(e){return _testUtils_js__WEBPACK_IMPORTED_MODULE_3__.shaderTranspiler.enableCache?R.get(e):null}function X(e,t){return _testUtils_js__WEBPACK_IMPORTED_MODULE_3__.shaderTranspiler.enableCache&&R.set(e,t),t}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexArrayObject.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexArrayObject: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./node_modules/@arcgis/core/views/webgl/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.webgl.VertexArrayObject");let o=class{constructor(e,t,i,r,s=null){this._context=e,this._locations=t,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Array.from(this._buffers.values()).reduce(((e,t)=>e+t.usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__.typedArrayStaticSize}dispose(){this._context?(this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers.forEach((e=>e.dispose())),this._buffers.clear(),this._indexBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__.disposeMaybe)(this._indexBuffer),this.disposeVAOOnly()):(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&n().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_3__.ResourceType.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:i}=this;e||n().error("Vertex buffer dictionary is empty!");const r=this._context.gl;this._buffers.forEach(((e,i)=>{const r=t.get(i);r?(0,_Util_js__WEBPACK_IMPORTED_MODULE_4__.bindVertexBufferLayout)(this._context,this._locations,e,r):n().error("Vertex element descriptor is empty!")})),null!=i&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/programUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/programUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glslifyDefineMap: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){const{options:n,value:o}=e;return"number"==typeof n[o]}function n(n){let o="";for(const t in n){const i=n[t];if("boolean"==typeof i)i&&(o+=`#define ${t}\n`);else if("number"==typeof i)o+=`#define ${t} ${i.toFixed()}\n`;else if("object"==typeof i)if(e(i)){const{value:e,options:n,namespace:f}=i,s=f?`${f}_`:"";for(const t in n)o+=`#define ${s}${t} ${n[t].toFixed()}\n`;o+=`#define ${t} ${s}${e}\n`}else{const e=i.options;let n=0;for(const t in e)o+=`#define ${e[t]} ${(n++).toFixed()}\n`;o+=`#define ${t} ${e[i.value]}\n`}}return o}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/reservedWordsGLSL3.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/testUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/testUtils.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shaderTranspiler: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={enableCache:!1};


/***/ })

}]);
//# sourceMappingURL=webglDeps.js.map