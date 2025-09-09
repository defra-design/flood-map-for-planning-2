"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["views-3d-layers-Lyr3DWorker"],{

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

/***/ "./node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyWasm: function() { return /* binding */ i; },
/* harmony export */   initialize: function() { return /* binding */ o; },
/* harmony export */   process: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../layers/ILyr3DWasmPerSceneView.js */ "./node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js");
/* harmony import */ var _libs_lyr3d_Lyr3DModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../libs/lyr3d/Lyr3DModule.js */ "./node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let e,n;async function r(t){if(await o(),t.inputs.length<1)return{result:{status:_layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__.Lyr3DWasmWorkerOutputStatus.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const e={ptrs:[],sizes:[]};for(const s of t.inputs){const t=n._malloc(s.byteLength);new Uint8Array(n.HEAPU8.buffer,t,s.byteLength).set(new Uint8Array(s)),e.ptrs.push(t),e.sizes.push(s.byteLength)}const r=n.process(t.jobDescJson,e,t.isMissingResourceCase),i=r.status===_layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__.Lyr3DWasmWorkerOutputStatus.Succeeded&&r.data,a=r.status===_layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__.Lyr3DWasmWorkerOutputStatus.MissingInputs&&r.missingInputUrls.length>0;if(i){const s=r.data.slice();r.data=s}else a&&(r.jobDescJson=r.jobDescJson.slice(),r.originalInputs=t.inputs);for(let s=0;s<e.ptrs.length;++s)n._free(e.ptrs[s]);const u=[];if(i)u.push(r.data.buffer);else if(a)for(const s of t.inputs)u.push(s);return{result:r,transferList:u}}function i(){n&&(n.uninitialize_lyr3d_worker_wasm(),n=null)}function o(){return n?Promise.resolve():(e||(e=(0,_libs_lyr3d_Lyr3DModule_js__WEBPACK_IMPORTED_MODULE_1__.loadLyr3DWorkerWASM)().then((s=>{n=s,n.initialize_lyr3d_worker_wasm(),e=null}))),e)}


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-Lyr3DWorker.js.map