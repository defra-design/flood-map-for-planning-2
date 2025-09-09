"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["support-uploadAssets"],{

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssetErrors.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssetErrors.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BadResponseError: function() { return /* binding */ a; },
/* harmony export */   Convert3DFailedError: function() { return /* binding */ l; },
/* harmony export */   MultipleModelsError: function() { return /* binding */ m; },
/* harmony export */   NoGlbSupportError: function() { return /* binding */ t; },
/* harmony export */   NoModelError: function() { return /* binding */ i; },
/* harmony export */   NoSupportedSourceError: function() { return /* binding */ n; },
/* harmony export */   NotBase64Error: function() { return /* binding */ u; },
/* harmony export */   UnableToPrepareOptionsError: function() { return /* binding */ p; },
/* harmony export */   UnsupportedError: function() { return /* binding */ r; },
/* harmony export */   UnsupportedFormatUploadedError: function() { return /* binding */ c; },
/* harmony export */   UploadFailedError: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e="upload-assets",o=()=>new Error;class r extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(`${e}:unsupported`,"Layer does not support asset uploads.",o())}}class t extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(`${e}:no-glb-support`,"Layer does not support glb.",o())}}class n extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(`${e}:no-supported-source`,"No supported external source found",o())}}class u extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(`${e}:not-base-64`,"Expected gltf data in base64 format after conversion.",o())}}class p extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(`${e}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",o())}}class a extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s,r){super(`${e}:bad-response`,`Bad response. Uploaded ${s} items and received ${r} results.`,o())}}class d extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s,r){super(`${e}-layer:upload-failed`,`Failed to upload mesh file ${s}. Error code: ${r?.code??"-1"}. Error message: ${r?.messages??"unknown"}`,o())}}class c extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(s){super(`${e}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${s}, but it does not list it in its supported formats.`,o())}}class l extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(`${e}:convert3D-failed`,"convert3D failed.")}}class i extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super("invalid-input:no-model","No supported model found")}}class m extends _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadAssets: function() { return /* binding */ B; }
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry.js */ "./node_modules/@arcgis/core/geometry.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/time.js */ "./node_modules/@arcgis/core/core/time.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "./node_modules/@arcgis/core/core/uuid.js");
/* harmony import */ var _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/meshUtils/External.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/External.js");
/* harmony import */ var _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uploadAssetErrors.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssetErrors.js");
/* harmony import */ var _uploadProgressWeights_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uploadProgressWeights.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js");
/* harmony import */ var _uploads_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uploads.js */ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js");
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../support/infoFor3D.js */ "./node_modules/@arcgis/core/layers/support/infoFor3D.js");
/* harmony import */ var _support_meshSpatialReferenceScaleUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../support/meshSpatialReferenceScaleUtils.js */ "./node_modules/@arcgis/core/layers/support/meshSpatialReferenceScaleUtils.js");
/* harmony import */ var _rest_support_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../rest/support/meshFeatureAttributes.js */ "./node_modules/@arcgis/core/rest/support/meshFeatureAttributes.js");
/* harmony import */ var _support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../support/progressUtils.js */ "./node_modules/@arcgis/core/support/progressUtils.js");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../geometry/SpatialReference.js */ "./node_modules/@arcgis/core/geometry/SpatialReference.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function B(e,s,t){const r=e.length;if(!r)return t?.onProgress?.(1),[];const o=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.makeProgressManager)(r,t?.onProgress,"uploadAssets");return Promise.all(e.map(((e,r)=>q(e,s,{...t,onProgress:o.makeOnProgress(r)}))))}async function q(e,{layer:s,ongoingUploads:t},r){const o=t.get(e);if(o)return o;if(!ne(s))throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.UnsupportedError;if(L(e,s))return r?.onProgress?.(1),e;const n=H(e,s,r);t.set(e,n);try{await n}finally{t.delete(e)}return e}function L(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,_geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.externalIsOnService)(e,t)))}async function H(e,s,r){const{metadata:o}=e,{displaySource:n}=o,a=W(n?.source,s,{checkForConversionRequired:(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("enable-feature:georeferenced-uploads")}),i=null!=a?$(a,s,r):o.externalSources.length>0?J(e,s,r):z(e,s,r),c=await i;return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),e.addExternalSources([c]),e}async function $(e,s,t){return{source:await Q(e,s,t),original:!0,unitConversionDisabled:!0}}async function J(e,s,t){const r=ae(s),{externalSources:o}=e.metadata,n=M(o,s);if(!n)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.NoSupportedSourceError;const a=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.makeProgressManager)(_uploadProgressWeights_js__WEBPACK_IMPORTED_MODULE_10__.uploadProgressWeights.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),i=await Q(n,s,{onProgress:a.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:i,original:!0}]);const c=n.reduce(((e,{asset:s})=>s instanceof File?e+s.size:e),0),u=a.simulate("serviceAssetsToGlb",(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.estimatedConversionTime)(c));try{const{source:o,transform:n,origin:a}=await se(i,s,r);return e.transform=n,a&&(e.metadata.georeferenced=!0,t?.useAssetOrigin&&(e.vertexSpace.origin=[a.x,a.y,a.z??0],e.spatialReference=a.spatialReference)),{source:o,unitConversionDisabled:!0}}finally{u.remove()}}async function z(e,s,t){const r=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.makeProgressManager)(_uploadProgressWeights_js__WEBPACK_IMPORTED_MODULE_10__.uploadProgressWeights.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),o=G(e,s,{...t,onProgress:r.makeOnProgress("meshToAssetBlob")});return{source:await V([o],s,{...t,onProgress:r.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}async function G(e,s,r){const o=ae(s),n=await e.load(r),a=await n.toBinaryGLTF({origin:n.origin,signal:r?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),{blob:new Blob([a],{type:"model/gltf-binary"}),assetName:`${(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_7__.generateBracedUUID)()}.glb`,assetType:o}}function M(e,s){for(const t of e){const e=W(t.source,s);if(e)return e}return null}function W(e,{infoFor3D:s},t={}){if(!e)return null;const{supportedFormats:r,editFormats:o}=s,n=(0,_geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.externalSourceToMultiPart)(e),a=new Array,i=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.getPrjFormatId)(s),c=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.getWorldFileFormatId)(s);let u=!1;for(const l of n){const e=K(l,r);if(!e)return null;const{assetType:s}=e;if(t.checkForConversionRequired&&(s===i||s===c))return null;o.includes(s)&&(u=!0),a.push(e)}return u?a:null}function K(e,s){const t=(0,_geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.assetFormatId)(e,s);return t?{asset:e,assetType:t}:null}async function Q(e,s,t){return V(e.map((e=>X(e,t))),s,t)}async function V(e,s,r){const o=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.makeProgressManager)(_uploadProgressWeights_js__WEBPACK_IMPORTED_MODULE_10__.uploadProgressWeights.uploadAssetBlobs,r?.onProgress,"uploadAssetBlobs"),n=await Z(e,s,{...r,onProgress:o.makeOnProgress("prepareAssetItems")});(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r);const a=n.map((({item:e})=>e)),{uploadResults:i}=await _(a,s,{...r,onProgress:o.makeOnProgress("uploadAssetItems")});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),e.map(((e,t)=>ee(n[t],i[t],s)))}async function X(e,s){const{asset:r,assetType:o}=e;if(r instanceof File)return{blob:r,assetName:r.name,assetType:o};const n=await r.toBlob(s);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(s),{blob:n,assetName:r.assetName,assetType:o}}async function Y(e,s,r){const{blob:n,assetType:a,assetName:c}=e;let u=null;try{const e=await (0,_uploads_js__WEBPACK_IMPORTED_MODULE_11__.uploadItem)({data:n,name:c},s.url,r);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),u={assetType:a,assetUploadId:e.itemID}}catch(l){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAbortError)(l),ie().warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!u){const e=await (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.parseData)(n);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),!e.isBase64)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.NotBase64Error;u={assetType:a,assetData:e.data}}if(!u)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.UnableToPrepareOptionsError;return{item:u,assetName:c}}function Z(e,s,r){const o=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.makeProgressManager)(e.length,r?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,n)=>{const a=Y(await e,s,{...r,onProgress:o.makeOnProgress(n)});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(r),a})))}async function _(s,r,o){const n=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_15__.simulateProgress)(o?.onProgress);try{const n=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.join)(r.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(s)},method:"post",responseType:"json"});if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(o),n.data.uploadResults.length!==s.length)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.BadResponseError(s.length,n.data.uploadResults.length);return n.data}finally{n.remove()}}function ee(e,s,t){const{success:r}=s;if(!r){const{error:t}=s;throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.UploadFailedError(e.assetName,t)}const{assetHash:o}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.getFormatIdMimeType)(a,i);if(!c)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.UnsupportedFormatUploadedError(a);return new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.ServiceAsset(n,c,[new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.ServiceAssetPart(`${t.parsedUrl.path}/assets/${o}`,o)])}async function se(e,s,t){const r=e.map((({assetName:e,parts:s})=>({assetName:e,assetHash:s[0].partHash})));let o;try{const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.join)(s.parsedUrl.path,"convert3D"),n=s.capabilities?.operations.supportsAsyncConvert3D;o=(await(n?oe:re)(e,{query:{f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:n},responseType:"json",timeout:0})).data}catch(n){throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.Convert3DFailedError}return te(s,o)}function te(e,s){const t={source:s.assets.map((s=>{const t=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.getMimeTypeFormatId)(s.contentType,e.infoFor3D.supportedFormats);if(!t)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.UnsupportedFormatUploadedError(t);return new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.ServiceAsset(s.assetName,s.contentType,[new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_8__.ServiceAssetPart(s.assetURL,s.assetHash)])})),origin:void 0,transform:void 0};if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("enable-feature:georeferenced-uploads")&&s.transform){if(t.transform=(0,_rest_support_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_14__.extractMeshFeatureTransform)(s.transform),s.spatialReference){const e=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(s.spatialReference);t.origin=(0,_rest_support_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_14__.extractMeshFeatureOrigin)(s.transform,e)}}else t.transform=(0,_support_meshSpatialReferenceScaleUtils_js__WEBPACK_IMPORTED_MODULE_13__.getMeshTransformForMetersToSpatialReference)(e.spatialReference);return t}function re(s,t){return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,t)}async function oe(s,t){const o=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s,t)).data.statusUrl;for(;;){const s=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(o,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(s.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.after)(ce)}}function ne(e){return!!e.infoFor3D&&!!e.url}function ae({infoFor3D:e}){const s=(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_12__.getGlbFormatId)(e);if(!s)throw new _uploadAssetErrors_js__WEBPACK_IMPORTED_MODULE_9__.NoGlbSupportError;return s}function ie(){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.graphics.sources.support.uploadAssets")}const ce=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_5__.Milliseconds)(1e3);


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadProgressWeights: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadItem: function() { return /* binding */ m; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _support_progressUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../support/progressUtils.js */ "./node_modules/@arcgis/core/support/progressUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=1e6,i=20*n,p=2e9,l=3;async function m({data:m,name:f,description:d},u,h){let w=null;try{const y=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(u,"uploads"),j=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(y,"info"),{data:g}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(j,{query:{f:"json"},responseType:"json"});(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(h);const q=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_3__.isHostedAgolService)(u),z=g.maxUploadFileSize*n,T=q?p:z,U=q?Math.min(i,z):i;if(m.size>T)throw new Error("Data too large");const A=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(y,"register"),{data:E}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(A,{query:{f:"json",itemName:c(f),description:d},responseType:"json",method:"post"});if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(h),!E.success)throw new Error("Registration failed");const{itemID:P}=E.item;w=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(y,P);const D=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(w,"uploadPart"),I=Math.ceil(m.size/U),M=new Array;for(let e=0;e<I;++e)M.push(m.slice(e*U,Math.min((e+1)*U,m.size)));const v=M.slice().reverse(),x=new Array,F=(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_4__.makeProgressManager)(I,h?.onProgress,"uploadItem"),_=async()=>{for(;0!==v.length;){const t=M.length-v.length,r=v.pop(),s=new FormData,n=F.simulate(t,(0,_support_progressUtils_js__WEBPACK_IMPORTED_MODULE_4__.estimatedTransferTime)(r.size));try{s.append("f","json"),s.append("file",r),s.append("partId",`${t}`);const{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(D,{timeout:0,body:s,responseType:"json",method:"post"});if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(h),!a.success)throw new Error("Part upload failed")}finally{n.remove()}}};for(let e=0;e<l&&0!==v.length;++e)x.push(_());await Promise.all(x);const b=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(w,"commit"),{data:C}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(b,{query:{f:"json",parts:M.map(((e,o)=>o)).join(",")},responseType:"json",method:"post"});if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(h),!C.success)throw new Error("Commit failed");return C.item}catch(y){if(null!=w){const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(w,"delete");await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o,{query:{f:"json"},responseType:"json",method:"post"})}throw y}}function c(e){return e.replaceAll("/","_").replaceAll("\\","_")}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/meshSpatialReferenceScaleUtils.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/meshSpatialReferenceScaleUtils.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMeshTransformForMetersToSpatialReference: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/unitUtils.js */ "./node_modules/@arcgis/core/core/unitUtils.js");
/* harmony import */ var _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/support/MeshTransform.js */ "./node_modules/@arcgis/core/geometry/support/MeshTransform.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t){const e=1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerUnitForSR)(t,1);return 1!==e?new _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__["default"]({scale:[e,e,e]}):void 0}


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

/***/ "./node_modules/@arcgis/core/support/progressUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/progressUtils.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressManager: function() { return /* binding */ n; },
/* harmony export */   estimatedConversionTime: function() { return /* binding */ m; },
/* harmony export */   estimatedTransferTime: function() { return /* binding */ h; },
/* harmony export */   makeProgressManager: function() { return /* binding */ i; },
/* harmony export */   simulateProgress: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/MapUtils.js */ "./node_modules/@arcgis/core/core/MapUtils.js");
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/time.js */ "./node_modules/@arcgis/core/core/time.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function i(s,t=s=>{},e){return new n(s,t,e)}class n{constructor(s,t=s=>{},e){if(this.onProgress=t,this.taskName=e,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let t=0;t<s;t++){const e=t,r=1/s;this._weights[e]=r,this._progressMap.set(e,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[t,e]of this._progressMap.entries()){s+=e*this._weights[t]}if(1===s&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,e]of this._timingsMap){const r=Math.round(e.end-e.start)/1e3,o=Math.round(r/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:r,relativeTime:o})}}this.onProgress(s)}setProgress(s,e){if(this._progressMap.set(s,e),(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:esri-3dofl-upload-timings")){const r=performance.now();this._startTime??=r;const o=(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(this._timingsMap,s,(()=>({start:r,end:0})));1===e&&(o.end=r)}this.emitProgress()}simulate(s,t){return a((t=>this.setProgress(s,t)),t)}makeOnProgress(s){return t=>this.setProgress(s,t)}}function a(t=s=>{},e=l){const r=performance.now();t(0);const o=setInterval((()=>{const s=performance.now()-r,o=1-Math.exp(-s/e);t(o)}),g);return (0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__.makeHandle)((()=>{clearInterval(o),t(1)}))}function h(s,t=c){return (0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsFromSeconds)((0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Seconds)(s*f/t))}function m(s,t=p){return (0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsFromSeconds)((0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Seconds)(s*f/t))}const c=10,p=10,f=8e-6,g=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Milliseconds)(50),l=(0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Milliseconds)(1e3);


/***/ })

}]);
//# sourceMappingURL=support-uploadAssets.js.map