"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["layers-Lyr3DWasmPerSceneView"],{

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

/***/ "./node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lyr3DAlphaMode: function() { return /* binding */ a; },
/* harmony export */   Lyr3DFaceCullingMode: function() { return /* binding */ S; },
/* harmony export */   Lyr3DFeatureIndexSource: function() { return /* binding */ l; },
/* harmony export */   Lyr3DImageFormat: function() { return /* binding */ t; },
/* harmony export */   Lyr3DLightingModel: function() { return /* binding */ g; },
/* harmony export */   Lyr3DMagFilterMode: function() { return /* binding */ p; },
/* harmony export */   Lyr3DMinFilterMode: function() { return /* binding */ s; },
/* harmony export */   Lyr3DPixelFormat: function() { return /* binding */ n; },
/* harmony export */   Lyr3DPrimitiveType: function() { return /* binding */ r; },
/* harmony export */   Lyr3DSchemaPropertySemantic: function() { return /* binding */ c; },
/* harmony export */   Lyr3DTransparency: function() { return /* binding */ o; },
/* harmony export */   Lyr3DType: function() { return /* binding */ e; },
/* harmony export */   Lyr3DUvWrapMode: function() { return /* binding */ N; },
/* harmony export */   Lyr3DVtxAtrbSemantic: function() { return /* binding */ i; },
/* harmony export */   Lyr3DWasmWorkerOutputStatus: function() { return /* binding */ u; },
/* harmony export */   invalidLayerView: function() { return /* binding */ m; },
/* harmony export */   wasmFailedToInit: function() { return /* binding */ d; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var e,t,n,i,a,o,r,N,p,s,c,l,S,g,u;!function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(e||(e={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(t||(t={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.NotSet="NotSet"}(n||(n={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(i||(i={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(a||(a={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(o||(o={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(r||(r={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(N||(N={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(p||(p={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(s||(s={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(c||(c={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(l||(l={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(S||(S={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(g||(g={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(u||(u={}));const m=-1,d=-2;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/Lyr3DWasmPerSceneView.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/Lyr3DWasmPerSceneView.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ w; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/reactiveUtils.js */ "./node_modules/@arcgis/core/core/reactiveUtils.js");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/scheduling.js */ "./node_modules/@arcgis/core/core/scheduling.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ILyr3DWasmPerSceneView.js */ "./node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js");
/* harmony import */ var _Lyr3DWorkerHandle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Lyr3DWorkerHandle.js */ "./node_modules/@arcgis/core/layers/Lyr3DWorkerHandle.js");
/* harmony import */ var _libs_lyr3d_Lyr3DModule_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../libs/lyr3d/Lyr3DModule.js */ "./node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js");
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/elevationInfoUtils.js */ "./node_modules/@arcgis/core/support/elevationInfoUtils.js");
/* harmony import */ var _views_3d_layers_support_makeScheduleFunction_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/layers/support/makeScheduleFunction.js */ "./node_modules/@arcgis/core/views/3d/layers/support/makeScheduleFunction.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var c,b;!function(e){e[e.Lifetime=0]="Lifetime",e[e.Jobs=1]="Jobs",e[e.Renderables=2]="Renderables"}(c||(c={})),function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(b||(b={}));let f=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=b.Critical,this._wasmNotLoaded="method requiring WASM was called when WASM isn't loaded",this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(c.Lifetime),this._debugFlags.add(c.Jobs),this._debugFlags.add(c.Renderables)}_debugLog(e,t,i,s=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=s?`[js] ${i}`:`${i}`;t===b.Critical||t===b.Error?_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).error(e):t===b.Warning&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).warn(e),_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).info(e)}}initialize(){this._debugLevel>b.Warning&&(_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this).level="info"),this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.watch)((()=>this.view.state?.contentCamera),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=(0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_6__.addFrameTask)({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then((()=>{this._worker?.destroy(),this._worker=null})),this._pulseTaskHandle?.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(c.Lifetime,b.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.wasmFailedToInit)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0,i.needFrame=!0,i.layerView.updatingFlagChanged())}setLayerOffset(e,t){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t)}getAttributionText(){if(!this._lyr3DMain)return this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded),[];return this._lyr3DMain.get_current_attribution_text().split("|")}onRenderableEvicted(e,t,i){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i)}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0||t.needFrame)}initializeWasm(e){return this._lyr3DMain?Promise.resolve():(this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=(0,_libs_lyr3d_Lyr3DModule_js__WEBPACK_IMPORTED_MODULE_13__.loadLyr3DMainWASM)().then((t=>{this._lyr3DMain=t,this._lyr3DMainPromise=null;const i=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),r=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),s=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),n=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),a=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),o="global"===this.view.viewingMode,l=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1,d=this.view.heightModelInfo?.heightModel,h=!d||"gravity-related-height"===d;return this._lyr3DMain.initialize_lyr3d_wasm(a,i,r,s,n,e,o,h,l,this._debugLevel)?(this._worker=new _Lyr3DWorkerHandle_js__WEBPACK_IMPORTED_MODULE_12__.Lyr3DWorkerHandle((0,_views_3d_layers_support_makeScheduleFunction_js__WEBPACK_IMPORTED_MODULE_15__.makeScheduleFunction)(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(c.Lifetime,b.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(c.Lifetime,b.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)}))),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0,t=0;this._layers.forEach((i=>{e+=i.layerView.usedMemory,t+=i.layerView.cachedMemory})),e/=1048576,t/=1048576;const i=this.view.resourceController.memoryController,r=i.usedMemory*i.maxMemory-e;this._lyr3DMain.frame_pulse(i.memoryFactor,e,t,r,i.maxMemory),this._layers.forEach((e=>{!0===e.needFrame&&(e.needFrame=!1,e.layerView.updatingFlagChanged())}))}}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(c.Jobs,b.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const e=t.data.byteLength,r=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,e).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,r,e),this._lyr3DMain._free(r)}this._decrementJobCount(e)}_getRequestPromises(e,i,r){const s=[];for(const n of e){const e=new URL(n),a=e.searchParams.get("session");a?this._session=a:!this._session||e.origin===r.origin&&e.pathname===r.pathname||e.searchParams.append("session",this._session),s.push((0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.toString(),i).then((e=>e.data)))}return s}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},n={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},a=new URL(t.layerView.layer.url),o=this._getRequestPromises(e.urls,r,a);Promise.all(o).then((e=>(n.inputs=e,this._worker.invoke(n,i)))).then((e=>e)).catch((t=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(t)?this._debugLog(c.Jobs,b.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(c.Jobs,b.Error,`job ${e.jobId} failed with error ${t}.`),{status:_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.Lyr3DWasmWorkerOutputStatus.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((o=>{if(o.status===_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.Lyr3DWasmWorkerOutputStatus.Failed)this._onJobFailed(t,o,e);else if(o.status===_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.Lyr3DWasmWorkerOutputStatus.Succeeded)this._onJobSucceeded(t,o,e);else if(o.status===_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.Lyr3DWasmWorkerOutputStatus.MissingInputs){const l=this._getRequestPromises(o.missingInputUrls,r,a);Promise.all(l).then((e=>{n.jobDescJson=o.jobDescJson,o.originalInputs?n.inputs=o.originalInputs:n.inputs=[],n.isMissingResourceCase=!0;for(const t of e)n.inputs.push(t);return this._worker.invoke(n,i)})).then((i=>{i.status===_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.Lyr3DWasmWorkerOutputStatus.Failed?this._onJobFailed(t,i,e):i.status===_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.Lyr3DWasmWorkerOutputStatus.Succeeded&&this._onJobSucceeded(t,i,e)})).catch((i=>{this._decrementJobCount(t),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(i)?this._debugLog(c.Jobs,b.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(c.Jobs,b.Error,`job ${e.jobId} failed with error2 ${i}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.memUsageBytes),this._decrementRenderableCount(i)})).catch((t=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAbortError)(t)||this._debugLog(c.Renderables,b.Error,`createRenderable failed with error ${t}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)})))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const s=r.layerView,n=[],a=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let o=0;o<i;++o)n.push(a[o]);for(let o=0;o<i;++o)s.freeRenderable(n[o])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const s=this._layers.get(e);if(!s)return;const n=s.layerView,a=[],o=[],l=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let h=0;h<r;++h)a.push(l[h]),o.push(1===d[h]);n.setRenderableVisibility(a,o,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return _ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.invalidLayerView;const i=this._lyr3DMain.get_next_layer_id(),r=new AbortController;this._layers.set(i,{layerView:e,abortController:r,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey,needFrame:!1});const s=(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_14__.getElevationOffsetInMeters)(t.elevationInfo);return this._lyr3DMain.add_layer(t.url,i,s)?(this._updateWasmCamera(),i):(this._layers.delete(i),_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_11__.invalidLayerView)}_updateWasmCamera(){const e=this.view.state?.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:i,up:r,near:s,far:n,fovY:a}=e,o=[e.viewport[2],e.viewport[3]],l=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:i,up:r,near:s,far:n,fov:a,aspectRatio:l,viewport:o})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__.property)({constructOnly:!0})],f.prototype,"view",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__.subclass)("esri.layers.Lyr3DWasmPerSceneView")],f);const w=f;


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/Lyr3DWorkerHandle.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/Lyr3DWorkerHandle.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lyr3DWorkerHandle: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/workers/WorkerHandle.js */ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_0__.WorkerHandle{constructor(r){super("Lyr3DWorker","process",{process:r=>r.inputs},r,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}


/***/ }),

/***/ "./node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLyr3DMainWASM: function() { return /* binding */ n; },
/* harmony export */   loadLyr3DWorkerWASM: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets.js */ "./node_modules/@arcgis/core/assets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function n(){return new Promise((t=>__webpack_require__.e(/*! import() | chunks-lyr3DMain */ "chunks-lyr3DMain").then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/lyr3DMain.js */ "./node_modules/@arcgis/core/chunks/lyr3DMain.js")).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function e(){return new Promise((t=>__webpack_require__.e(/*! import() | chunks-lyr3DWorker */ "chunks-lyr3DWorker").then(__webpack_require__.bind(__webpack_require__, /*! ../../chunks/lyr3DWorker.js */ "./node_modules/@arcgis/core/chunks/lyr3DWorker.js")).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function i(n){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__.getAssetUrl)(`esri/libs/lyr3d/${n}`)}


/***/ }),

/***/ "./node_modules/@arcgis/core/support/elevationInfoUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/elevationInfoUtils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   absoluteHeightElevationInfo: function() { return /* binding */ j; },
/* harmony export */   elevationContextAffectsAlignment: function() { return /* binding */ y; },
/* harmony export */   elevationModeRequiredMessage: function() { return /* binding */ Z; },
/* harmony export */   elevationModeUnsupportedMessage: function() { return /* binding */ P; },
/* harmony export */   featureExpressionInfoIsZero: function() { return /* binding */ d; },
/* harmony export */   featureExpressionUnsupportedMessage: function() { return /* binding */ w; },
/* harmony export */   getConvertedElevation: function() { return /* binding */ m; },
/* harmony export */   getConvertedElevationFromVector: function() { return /* binding */ x; },
/* harmony export */   getConvertedElevationFromXYZ: function() { return /* binding */ E; },
/* harmony export */   getEffectiveElevationInfo: function() { return /* binding */ u; },
/* harmony export */   getEffectiveElevationMode: function() { return /* binding */ r; },
/* harmony export */   getElevationOffset: function() { return /* binding */ h; },
/* harmony export */   getElevationOffsetInMeters: function() { return /* binding */ R; },
/* harmony export */   getGeometryEffectiveElevationInfo: function() { return /* binding */ s; },
/* harmony export */   getGeometryEffectiveElevationMode: function() { return /* binding */ i; },
/* harmony export */   getGraphicEffectiveElevationInfo: function() { return /* binding */ a; },
/* harmony export */   getGraphicEffectiveElevationMode: function() { return /* binding */ l; },
/* harmony export */   getZForElevationMode: function() { return /* binding */ p; },
/* harmony export */   hasEffectiveFeatureExpressionInfo: function() { return /* binding */ v; },
/* harmony export */   hasFeatureExpressionInfo: function() { return /* binding */ c; },
/* harmony export */   hasGraphicFeatureExpressionInfo: function() { return /* binding */ f; },
/* harmony export */   logInvalidElevationInfoWarning: function() { return /* binding */ $; },
/* harmony export */   onTheGroundElevationInfo: function() { return /* binding */ z; },
/* harmony export */   zValueInAbsoluteHeightMode: function() { return /* binding */ b; }
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbols/support/unitConversionUtils.js */ "./node_modules/@arcgis/core/symbols/support/unitConversionUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function o(e){return e?j:z}function r(e,n){return n?.mode?n.mode:o(e).mode}function u(e,n){return null!=n?n:o(e)}function i(e,n){return r(null==e||(e.hasZ??!1),n)}function s(e,n){return u(null==e||(e.hasZ??!1),n)}function l(e){const n=g(e);return i(e.geometry,n)}function a(e){const n=g(e),t=i(e.geometry,n),o=null!=n&&"on-the-ground"!==t?R(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function f(e){return v(a(e))}function c(e){return v(e)||d(e)}function d(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const n=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||"0"===n)}function g(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(t,o){if(!t?.offset)return 0;const{offset:r,unit:u}=t;if("decimal-degrees"===u)return 0;const i="unknown"!==u&&u?u:"meters",s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.verticalLengthUnitFromSpatialReference)(o);return s?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.convertUnit)(r,i,s):0}function p(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=h(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function m(e,n,t,o=null){return E(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function x(e,n,t,o,r=null){return E(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function E(e,n,t,o,r,u,i=null){if(null==u)return;const s=null!=i?i.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:l}=b(n,t,o,r,e,u);return I(l,n,t,o,r,e,i,s)}function b(e,n,t,o,r,u){const i=h(u,o);switch(u.mode){case"absolute-height":return{absoluteZ:t+i,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+i,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+i,elevation:u}}}}function I(e,n,t,o,r,u,i,s){const l=h(i,r);switch(s){case"absolute-height":return e-l;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+l);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+l)}}function y(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function Z(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function P(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function w(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function $(e,n){n&&e.warn(".elevationInfo=",n)}function R(e){return(e?.offset??0)*(0,_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__.getMetersPerUnit)(e?.unit)}const j={mode:"absolute-height",offset:0},z={mode:"on-the-ground",offset:null};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/layers/support/makeScheduleFunction.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/support/makeScheduleFunction.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeScheduleFunction: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return r=>{if(e.immediate)return e.immediate.schedule(r);const o="No immediate scheduler";throw console.error(o),new Error(o)}}


/***/ })

}]);
//# sourceMappingURL=layers-Lyr3DWasmPerSceneView.js.map