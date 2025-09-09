"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["featureSources-SceneLayerSnappingSource"],{

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

/***/ "./node_modules/@arcgis/core/geometry/support/FloatArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/FloatArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compactFloatArray: function() { return /* binding */ e; },
/* harmony export */   floatArrayFrom: function() { return /* binding */ a; },
/* harmony export */   floatSubArray: function() { return /* binding */ o; },
/* harmony export */   newFloatArray: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function e(t){return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)?t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?t:new Float32Array(t):t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?Array.from(t):t}function a(t){return((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(t)?t.length:t.byteLength/8)<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.nativeArrayMaxSize?Array.from(t):new Float32Array(t)}function o(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}


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

/***/ "./node_modules/@arcgis/core/geometry/support/buffer/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/buffer/types.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementTypeSize: function() { return /* binding */ e; },
/* harmony export */   isInteger: function() { return /* binding */ s; },
/* harmony export */   isSigned: function() { return /* binding */ c; },
/* harmony export */   maximumValue: function() { return /* binding */ r; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function c(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function r(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}


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

/***/ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterleavedBuffer: function() { return /* binding */ D; },
/* harmony export */   InterleavedLayout: function() { return /* binding */ G; },
/* harmony export */   PackedLayout: function() { return /* binding */ I; },
/* harmony export */   newLayout: function() { return /* binding */ H; }
/* harmony export */ });
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/buffer/BufferView.js */ "./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js");
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/buffer/types.js */ "./node_modules/@arcgis/core/geometry/support/buffer/types.js");
/* harmony import */ var _webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../webgl-engine/lib/Util.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class D{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const s of e.fields.keys()){const t=e.fields.get(s);this[s]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const s=this[e];return s&&s.elementCount===t.ElementCount&&s.elementType===t.ElementType?s:null}slice(e,t){return new D(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,s=0,i=e.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class G{constructor(e){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:N(e[1].constructor)}))))}freeze(){return this}vec2f(t,s){return this._appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f,s),this}vec2f64(e,s){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f64,s),this}vec3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f,t),this}vec3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f64,t),this}vec4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f,t),this}vec4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f64,t),this}mat3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f,t),this}mat3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f64,t),this}mat4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f,t),this}mat4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f64,t),this}vec4u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u8,t),this}f32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat,t),this}f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat64,t),this}u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint8,t),this}u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint16,t),this}i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt8,t),this}vec2i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i8,t),this}vec2i16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i16,t),this}vec2u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u8,t),this}vec4u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u16,t),this}u32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint32,t),this}_appendField(e,t,s){if(this._fields.has(e))return void (0,_webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__.elementTypeSize)(t.ElementType),r=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:r,optional:s})}createBuffer(e){return new D(this,e)}createView(e){return new D(this,e)}clone(){const e=new G;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,s)=>e._fields.set(s,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_1__.elementTypeSize)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function H(){return new G}class I{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const s={...e,constructor:K(e.constructor)};this.fields.push([t,s])})),this.stride=e.stride}}const J=[_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewFloat64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat3f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewMat4f64,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3u8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3u16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewUint32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2u32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3u32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4u32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3i8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4i8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3i16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4i16,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewInt32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec2i32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec3i32,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__.BufferViewVec4i32];function K(e){return`${e.ElementType}_${e.ElementCount}`}function N(e){return O.get(e)}const O=new Map;J.forEach((e=>O.set(K(e),e)));


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glLayout: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/enums.js */ "./node_modules/@arcgis/core/views/webgl/enums.js");
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/VertexElementDescriptor.js */ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(e,t=0){const n=e.stride;return Array.from(e.fields.keys()).map((s=>{const i=e.fields.get(s),u=i.constructor.ElementCount,f=o(i.constructor.ElementType),c=i.offset,m=i.optional?.glNormalized??!1;return new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.VertexElementDescriptor(s,u,f,c,n,m,t)}))}function o(e){const r=n[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}const n={u8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_BYTE,u16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_SHORT,u32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.UNSIGNED_INT,i8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.BYTE,i16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.SHORT,i32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.INT,f32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__.DataType.FLOAT};


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packInterleavedBuffer: function() { return /* binding */ u; },
/* harmony export */   unpackInterleavedBuffer: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function u(r,u){return u.push(r.buffer),{buffer:r.buffer,layout:new _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__.PackedLayout(r.layout)}}function t(e){return new _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__.InterleavedLayout(e.layout).createView(e.buffer)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/support/meshProcessing.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/meshProcessing.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeNeighbors: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o)}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n}else{const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x)}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++)}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++}}return A}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compressAndTransformNormals: function() { return /* binding */ c; },
/* harmony export */   compressNormal: function() { return /* binding */ s; },
/* harmony export */   compressNormals: function() { return /* binding */ e; },
/* harmony export */   decodeInt16: function() { return /* binding */ u; },
/* harmony export */   decompressNormal: function() { return /* binding */ f; },
/* harmony export */   decompressNormals: function() { return /* binding */ h; },
/* harmony export */   encodeInt16: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../geometry/support/FloatArray.js */ "./node_modules/@arcgis/core/geometry/support/FloatArray.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function s(t,n,r,o,a,s=2){const e=1/(Math.abs(r)+Math.abs(o)+Math.abs(a)),c=r*e,f=o*e,h=a<=0?(c>=0?1:-1)*(1-Math.abs(f)):c,u=a<=0?(f>=0?1:-1)*(1-Math.abs(c)):f,l=n*s;t[l]=i(h),t[l+1]=i(u)}function e(t){const n=t.length/3,r=new Int16Array(2*n);let o=0;for(let a=0;a<n;++a)s(r,a,t[o++],t[o++],t[o++]);return r}function c(t,r){const a=t.length/3,e=new Int16Array(2*a);let c=0;const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();for(let o=0;o<a;++o)f[0]=t[c++],f[1]=t[c++],f[2]=t[c++],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.q)(f,f,r),s(e,o,f[0],f[1],f[2]);return e}function f(t,n,o,a=2){const s=o*a,e=u(n[s]),c=u(n[s+1]),f=1-Math.abs(e)-Math.abs(c);t[2]=f,f<0?(t[0]=(e>=0?1:-1)*(1-Math.abs(c)),t[1]=(c>=0?1:-1)*(1-Math.abs(e))):(t[0]=e,t[1]=c),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(t,t)}function h(t,n=2){const r=t.length/n,s=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_3__.newFloatArray)(3*r),e=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();let c=0;for(let o=0;o<r;++o)f(e,t,o,n),s[c++]=e[0],s[c++]=e[1],s[c++]=e[2];return s}function i(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(Math.round(32767*n),-32767,32767)}function u(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.clamp)(n/32767,-1,1)}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assert: function() { return /* binding */ s; },
/* harmony export */   isTranslationMatrix: function() { return /* binding */ m; },
/* harmony export */   logWithBase: function() { return /* binding */ u; },
/* harmony export */   project: function() { return /* binding */ a; },
/* harmony export */   rayBoxTest: function() { return /* binding */ i; },
/* harmony export */   rayRay2D: function() { return /* binding */ f; },
/* harmony export */   setMatrixTranslation3: function() { return /* binding */ l; },
/* harmony export */   verify: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec2f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "./node_modules/@arcgis/core/chunks/vec42.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/libs/gl-matrix-2/factories/vec4f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.create)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,r="Assertion"){if(!t){const t=new Error(r).stack;throw new o(`${r} at ${t}`)}}function c(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function i(t,r,n,e){let o,s=(n[0]-t[0])/r[0],c=(e[0]-t[0])/r[0];s>c&&(o=s,s=c,c=o);let i=(n[1]-t[1])/r[1],f=(e[1]-t[1])/r[1];if(i>f&&(o=i,i=f,f=o),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let a=(n[2]-t[2])/r[2],u=(e[2]-t[2])/r[2];return a>u&&(o=a,a=u,u=o),!(s>u||a>c)&&(u<c&&(c=u),!(c<0))}function f(r,n,e,o,s,c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__.create)()){const i=(o[s]-e[s])*(n[0]-r[0])-(o[0]-e[0])*(n[s]-r[s]),f=(o[0]-e[0])*(r[s]-e[s])-(o[s]-e[s])*(r[0]-e[0]);if(0===i)return!1;const a=f/i;return c[0]=r[0]+a*(n[0]-r[0]),c[1]=r[s]+a*(n[s]-r[s]),!0}function a(t,n,o,c,i){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__.t)(e,e,n),i.length>2&&(i[2]=-e[2]),(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__.t)(e,e,o),s(0!==e[3]),i[0]=e[0]/e[3],i[1]=e[1]/e[3],i[2]=e[2]/e[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function u(t,r){return Math.log(t)/Math.log(r)}function l(t,r,n,e){t[12]=r,t[13]=n,t[14]=e}function m(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


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

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class s{constructor(){this.position0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.position1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.faceNormal0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.faceNormal1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.create)(),this.componentIndex=0,this.cosAngle=0}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeWorkerHandle: function() { return /* binding */ a; },
/* harmony export */   PackedInput: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/typedArrayUtil.js */ "./node_modules/@arcgis/core/core/typedArrayUtil.js");
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/workers/WorkerHandle.js */ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js");
/* harmony import */ var _support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/buffer/workerHelper.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js");
/* harmony import */ var _edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edgeProcessing.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class a extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_1__.WorkerHandle{constructor(e){super("EdgeProcessingWorker","extract",{extract:e=>[e.dataBuffer],extractComponentsEdgeLocations:e=>[e.dataBuffer],extractEdgeLocations:e=>[e.dataBuffer]},e)}async process(e,t,r){if(r)return (0,_edgeProcessing_js__WEBPACK_IMPORTED_MODULE_3__.extract)(e);return i(await this.invoke(new o(e),t))}async extractEdgeLocations(e,t){const r=await this.invokeMethod("extractEdgeLocations",new o(e),t);return (0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__.unpackInterleavedBuffer)(r)}async extractComponentsEdgeLocations(e,t){const r=await this.invokeMethod("extractComponentsEdgeLocations",new o(e),t);return (0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__.unpackInterleavedBuffer)(r)}}function i(e){return{regular:{instancesData:(0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__.unpackInterleavedBuffer)(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:(0,_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_2__.unpackInterleavedBuffer)(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}class o{constructor(r){this.dataBuffer=r.data.buffer,this.writerSettings=r.writerSettings,this.skipDeduplicate=r.skipDeduplicate,this.indices=(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(r.indices)?r.indices:r.indices.buffer,this.indicesType=(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isArray)(r.indices)?"Array":(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__.isUint32Array)(r.indices)?"Uint32Array":"Uint16Array",this.indicesLength=r.indicesLength}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeInputBufferLayout: function() { return /* binding */ E; },
/* harmony export */   RegularEdgeInstancesLayout: function() { return /* binding */ T; },
/* harmony export */   SilhouetteEdgeInstancesLayout: function() { return /* binding */ A; },
/* harmony export */   VertexLayout: function() { return /* binding */ I; },
/* harmony export */   glVertexLayout: function() { return /* binding */ S; },
/* harmony export */   vertexAttributeLocations: function() { return /* binding */ r; }
/* harmony export */ });
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const E=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX).freeze(),I=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec2u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.SIDENESS).freeze(),S=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__.glLayout)(I),T=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION1).vec2i16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTEXTENSION,{glNormalized:!0}).freeze(),A=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION1).vec2i16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED).vec2i16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMAL2COMPRESSED).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTEXTENSION,{glNormalized:!0}).freeze(),r=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION0,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.POSITION1,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.COMPONENTINDEX,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTOFFSET,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTSTROKE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.VARIANTEXTENSION,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMALCOMPRESSED,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.NORMAL2COMPRESSED,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__.VertexAttribute.SIDENESS,8]]);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegularEdgeBufferWriter: function() { return /* binding */ w; },
/* harmony export */   SilhouetteEdgeBufferWriter: function() { return /* binding */ N; }
/* harmony export */ });
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js");
/* harmony import */ var _Normals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Normals.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bufferLayouts.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const c=.7;class f{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?d:l}write(t,o,e){B.seed=this._edgeHashFunction(e);const r=B.getIntRange(0,255),n=B.getIntRange(0,this.settings.variants-1),i=B.getFloat(),s=255*(.5*y(-(1-Math.min(i/c,1))+Math.max(0,i-c)/(1-c),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,r),t.variantStroke.set(o,n),t.variantExtension.set(o,s)}}const m=new Float32Array(6),p=new Uint32Array(m.buffer),u=new Uint32Array(1);function l(t){return m[0]=t.position0[0],m[1]=t.position0[1],m[2]=t.position0[2],m[3]=t.position1[0],m[4]=t.position1[1],m[5]=t.position1[2],u[0]=31*(31*(31*(31*(31*(166811+p[0])+p[1])+p[2])+p[3])+p[4])+p[5],u[0]}function d(t){const o=m;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u[0]=5381;for(let e=0;e<p.length;e++)u[0]=31*u[0]+p[e];return u[0]}const g=1e4;function h(t){return Math.round(t*g)/g}function y(t,o){return Math.abs(t)**o*Math.sign(t)}class w{constructor(){this._commonWriter=new f}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeInstancesLayout.createBuffer(t)}write(t,r,n){this._commonWriter.write(t,r,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.g)(S,n.faceNormal0,n.faceNormal1),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(S,S);const{typedBuffer:s,typedBufferStride:a}=t.normalCompressed;(0,_Normals_js__WEBPACK_IMPORTED_MODULE_4__.compressNormal)(s,r,S[0],S[1],S[2],a)}}w.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeInstancesLayout,w.glLayout=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__.glLayout)(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeInstancesLayout,1);class N{constructor(){this._commonWriter=new f}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeInstancesLayout.createBuffer(t)}write(t,o,e){this._commonWriter.write(t,o,e);{const{typedBuffer:r,typedBufferStride:n}=t.normalCompressed;(0,_Normals_js__WEBPACK_IMPORTED_MODULE_4__.compressNormal)(r,o,e.faceNormal0[0],e.faceNormal0[1],e.faceNormal0[2],n)}{const{typedBuffer:r,typedBufferStride:n}=t.normal2Compressed;(0,_Normals_js__WEBPACK_IMPORTED_MODULE_4__.compressNormal)(r,o,e.faceNormal1[0],e.faceNormal1[1],e.faceNormal1[2],n)}}}N.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeInstancesLayout,N.glLayout=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__.glLayout)(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeInstancesLayout,1);const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.create)(),B=new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractEdges: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "./node_modules/@arcgis/core/core/mathUtils.js");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/PooledArray.js */ "./node_modules/@arcgis/core/core/PooledArray.js");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec32.js */ "./node_modules/@arcgis/core/chunks/vec32.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _Edge_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Edge.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const d=-1;function p(e,t,o){const c=e.vertices.position,l=e.vertices.componentIndex,i=y.position0,h=y.position1,g=y.faceNormal0,u=y.faceNormal1,{edges:p,normals:v}=w(e),V=p.length/4,j=t.allocate(V);let I=0;const N=V,b=o?.allocate(N);let D=0,E=0,k=0;x.length=0;for(let s=0;s<V;++s){const e=4*s;c.getVec(p.data[e],i),c.getVec(p.data[e+1],h);const t=x.pushNew();t.index=4*s,t.length=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.j)(i,h)}x.sort(((e,t)=>t.length-e.length));const P=new Array,U=new Array;x.forAll((({length:e,index:n})=>{const w=p.data[n],x=p.data[n+1],V=p.data[n+2],N=p.data[n+3],q=N===d;if(c.getVec(w,i),c.getVec(x,h),q){const e=3*V;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(g,v.data[e],v.data[e+1],v.data[e+2]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(u,g),y.componentIndex=l.get(w),y.cosAngle=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(g,u)}else{let e=3*V;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(g,v.data[e],v.data[e+1],v.data[e+2]),e=3*N,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(u,v.data[e],v.data[e+1],v.data[e+2]),y.componentIndex=l.get(w),y.cosAngle=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(g,u),m(y,M))return;y.cosAngle<-.9999&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(u,g)}E+=e,k++,q||f(y,L)?(t.write(j,I++,y),P.push(e)):A(y,F)&&(b&&o&&o.write(b,D++,y),U.push(e))}));const q=new Float32Array(P.reverse()),z=new Float32Array(U.reverse()),B=b&&o?{instancesData:b.slice(0,D),lodInfo:{lengths:z}}:void 0;return{regular:{instancesData:j.slice(0,I),lodInfo:{lengths:q}},silhouette:B,averageEdgeLength:E/k}}function f(e,t){return e.cosAngle<t}function m(e,t){return e.cosAngle>t}function A(t,o){const n=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.acosClamped)(t.cosAngle);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.o)(N,t.position1,t.position0);return n*((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.e)(I,t.faceNormal0,t.faceNormal1),N)>0?-1:1)>o}function w(e){const t=e.faces.length/3,o=e.faces,n=e.neighbors,s=e.vertices.position;V.length=j.length=0;for(let a=0;a<t;a++){const e=3*a,t=n[e],r=n[e+1],c=n[e+2],g=o[e],u=o[e+1],p=o[e+2];s.getVec(g,b),s.getVec(u,D),s.getVec(p,E),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(D,D,b),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(E,E,b),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.e)(b,D,E),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.n)(b,b),j.pushArray(b),(t===d||g<u)&&(V.push(g),V.push(u),V.push(a),V.push(t)),(r===d||u<p)&&(V.push(u),V.push(p),V.push(a),V.push(r)),(c===d||p<g)&&(V.push(p),V.push(g),V.push(a),V.push(c))}return{edges:V,normals:j}}class v{constructor(){this.index=0,this.length=0}}const x=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({allocator:e=>e||new v,deallocator:null}),V=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({deallocator:null}),j=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__["default"]({deallocator:null}),y=new _Edge_js__WEBPACK_IMPORTED_MODULE_4__.Edge,I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),N=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),b=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),D=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),E=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.create)(),F=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(4),M=Math.cos(F),k=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__.deg2rad)(35),L=Math.cos(k);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extract: function() { return /* binding */ f; },
/* harmony export */   extractComponentsEdgeLocationsLayout: function() { return /* binding */ m; },
/* harmony export */   extractEdgeInformation: function() { return /* binding */ u; },
/* harmony export */   extractEdgeLocationsLayout: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/meshUtils/deduplicate.js */ "./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js");
/* harmony import */ var _support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/meshProcessing.js */ "./node_modules/@arcgis/core/views/3d/support/meshProcessing.js");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js");
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VertexAttribute.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bufferLayouts.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js");
/* harmony import */ var _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edgeBufferWriters.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js");
/* harmony import */ var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edgePreprocessing.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function f(e){const t=u(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return g.updateSettings(e.writerSettings),a.updateSettings(e.writerSettings),(0,_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_6__.extractEdges)(t,g,a)}function u(r,i,n,o){if(i){const e=(0,_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__.computeNeighbors)(n,o,r.count);return new p(n,o,e,r)}const c=(0,_geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__.deduplicate)(r.buffer,r.stride/4,{originalIndices:n,originalIndicesLength:o}),f=(0,_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_1__.computeNeighbors)(c.indices,o,c.uniqueCount);return{faces:c.indices,facesLength:c.indices.length,neighbors:f,vertices:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__.EdgeInputBufferLayout.createView(c.buffer)}}class p{constructor(e,t,r,i){this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=i}}const g=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_5__.RegularEdgeBufferWriter,a=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_5__.SilhouetteEdgeBufferWriter,d=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_2__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION1),m=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_2__.newLayout)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.POSITION1).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__.VertexAttribute.COMPONENTINDEX);


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

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I3SSnappingSource: function() { return /* binding */ p; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/maybe.js */ "./node_modules/@arcgis/core/core/maybe.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/support/UpdatingHandles.js */ "./node_modules/@arcgis/core/core/support/UpdatingHandles.js");
/* harmony import */ var _3d_webgl_engine_lib_edgeRendering_EdgeWorkerHandle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js */ "./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js");
/* harmony import */ var _sceneLayerSource_SceneLayerSnappingSourceWorkerHandle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let p=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_10__.UpdatingHandles,this._abortController=new AbortController}destroy(){this._tracker=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.removeMaybe)(this._tracker),this._abortController=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__.abortMaybe)(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,r=e.resourceController;this._edgeWorker=new _3d_webgl_engine_lib_edgeRendering_EdgeWorkerHandle_js__WEBPACK_IMPORTED_MODULE_11__.EdgeWorkerHandle(h(r)),this._workerHandle=new _sceneLayerSource_SceneLayerSnappingSourceWorkerHandle_js__WEBPACK_IMPORTED_MODULE_12__.SceneLayerSnappingSourceWorkerHandle({renderCoordsHelper:this.view.renderCoordsHelper,schedule:h(r),fetchEdgeLocations:async(e,r)=>{if(null==this._tracker)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,r)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__.destroyHandle)(this._workerHandle),(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_2__.destroyHandle)(this._edgeWorker)])}async fetchCandidates(e,r){return this._workerHandle.fetchCandidates(e,r)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=this._abortController?.signal,r=await this.getLayerView();null==r||(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.isAborted)(e)||(this._tracker=r.trackSnappingSources({add:(r,t)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:r,bounds:t},e))},remove:r=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:r},e))}}))}};function h(e){return r=>e.immediate.schedule(r)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],p.prototype,"getLayerView",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({constructOnly:!0})],p.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],p.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__.property)({readOnly:!0})],p.prototype,"availability",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__.subclass)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],p);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneLayerSnappingSource: function() { return /* binding */ c; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/arrayUtils.js */ "./node_modules/@arcgis/core/core/arrayUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _I3SSnappingSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./I3SSnappingSource.js */ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{get updating(){return this._i3sSources.some((e=>e.updating))}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,r=this.layerSource.layer;this._i3sSources="building-scene"===r.type?this._getBuildingSceneI3SSources(e,r):[this._getSceneLayerI3SSource(e,r)]}async fetchCandidates(e,r){const t=await Promise.all(this._i3sSources.map((t=>t.fetchCandidates(e,r))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(r),t.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,r){return r.allSublayers.toArray().map((t=>"building-component"===t.type?new _I3SSnappingSource_js__WEBPACK_IMPORTED_MODULE_8__.I3SSnappingSource({getLayerView:async()=>(await e.whenLayerView(r)).whenSublayerView(t),view:e}):null)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSome)}_getSceneLayerI3SSource(e,r){return new _I3SSnappingSource_js__WEBPACK_IMPORTED_MODULE_8__.I3SSnappingSource({getLayerView:async()=>{const t=await e.whenLayerView(r);return"scene-layer-graphics-3d"===t.type?void 0:t},view:e})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({constructOnly:!0})],c.prototype,"layerSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({constructOnly:!0})],c.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__.property)({readOnly:!0})],c.prototype,"availability",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],c);


/***/ }),

/***/ "./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneLayerSnappingSourceWorkerHandle: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Accessor.js */ "./node_modules/@arcgis/core/core/Accessor.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "./node_modules/@arcgis/core/core/RandomLCG.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/factories/vec3f64.js */ "./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js");
/* harmony import */ var _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/workers/WorkerHandle.js */ "./node_modules/@arcgis/core/core/workers/WorkerHandle.js");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../chunks/sphere.js */ "./node_modules/@arcgis/core/chunks/sphere.js");
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../sketch/normalizedPoint.js */ "./node_modules/@arcgis/core/views/interactive/sketch/normalizedPoint.js");
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../candidates/EdgeSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/EdgeSnappingCandidate.js");
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../candidates/VertexSnappingCandidate.js */ "./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new h(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:o}=e,s=u;this.renderCoordsHelper.toRenderCoords(o,r.spatialReference,s);const n=e.distance,a="number"==typeof n?n:n.distance,d=await this._workerHandle.invoke({bounds:(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_9__.f)(s[0],s[1],s[2],a),returnEdge:e.returnEdge,returnVertex:"none"!==e.vertexMode},t);return d.candidates.sort(((e,t)=>e.distance-t.distance)),d.candidates.map((e=>this._convertCandidate(r,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_11__.EdgeSnappingCandidate({objectId:t.objectId,targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_10__.markAsTarget)(this._convertRenderCoordinate(e,t.target)),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_12__.VertexSnappingCandidate({objectId:t.objectId,targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_10__.markAsTarget)(this._convertRenderCoordinate(e,t.target)),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)();return this.renderCoordsHelper.fromRenderCoords(t,r,e),(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_10__.fromVec3)(r)}async _fetchAllEdgeLocations(e,t){const r=[],o=[];for(const{id:s,uid:n}of e.components)this._ids.has(s)&&r.push((async()=>{const e=await this.fetchEdgeLocations(s,t.signal),r=e.locations.buffer;return o.push(r),{id:s,uid:n,objectIds:e.objectIds,locations:r,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(r)).filter((({id:e})=>this._ids.has(e)))},transferList:o}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],l.prototype,"renderCoordsHelper",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],l.prototype,"fetchEdgeLocations",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({constructOnly:!0})],l.prototype,"schedule",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({readOnly:!0})],l.prototype,"availability",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],l);class h extends _core_workers_WorkerHandle_js__WEBPACK_IMPORTED_MODULE_8__.WorkerHandle{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__.create)();


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

/***/ "./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VertexElementDescriptor: function() { return /* binding */ t; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,h,o,e=!1,r=0){this.name=t,this.count=s,this.type=i,this.offset=h,this.stride=o,this.normalized=e,this.divisor=r}}


/***/ }),

/***/ "./node_modules/@arcgis/core/views/webgl/enums.js":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/enums.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlendFactor: function() { return /* binding */ R; },
/* harmony export */   BlendOperation: function() { return /* binding */ T; },
/* harmony export */   BufferType: function() { return /* binding */ A; },
/* harmony export */   ClientWaitSyncStatus: function() { return /* binding */ i; },
/* harmony export */   ColorAttachment: function() { return /* binding */ X; },
/* harmony export */   CompareFunction: function() { return /* binding */ O; },
/* harmony export */   CompressedTextureFormat: function() { return /* binding */ c; },
/* harmony export */   CullMode: function() { return /* binding */ S; },
/* harmony export */   DataType: function() { return /* binding */ C; },
/* harmony export */   DepthStencilAttachment: function() { return /* binding */ t; },
/* harmony export */   Face: function() { return /* binding */ N; },
/* harmony export */   FramebufferBit: function() { return /* binding */ _; },
/* harmony export */   FramebufferTarget: function() { return /* binding */ n; },
/* harmony export */   PixelFormat: function() { return /* binding */ G; },
/* harmony export */   PixelType: function() { return /* binding */ U; },
/* harmony export */   PrimitiveType: function() { return /* binding */ E; },
/* harmony export */   RenderbufferFormat: function() { return /* binding */ B; },
/* harmony export */   ResourceType: function() { return /* binding */ V; },
/* harmony export */   ShaderType: function() { return /* binding */ H; },
/* harmony export */   SizedPixelFormat: function() { return /* binding */ P; },
/* harmony export */   SpecialDrawBuffers: function() { return /* binding */ f; },
/* harmony export */   StencilOperation: function() { return /* binding */ I; },
/* harmony export */   SyncCondition: function() { return /* binding */ r; },
/* harmony export */   SyncFlag: function() { return /* binding */ W; },
/* harmony export */   SyncParameter: function() { return /* binding */ u; },
/* harmony export */   SyncStatus: function() { return /* binding */ e; },
/* harmony export */   TextureSamplingMode: function() { return /* binding */ L; },
/* harmony export */   TextureType: function() { return /* binding */ M; },
/* harmony export */   TextureWrapMode: function() { return /* binding */ D; },
/* harmony export */   UniformType: function() { return /* binding */ o; },
/* harmony export */   Usage: function() { return /* binding */ F; },
/* harmony export */   baseTextureUnit: function() { return /* binding */ Y; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
var _,E,R,T,A,N,S,C,O,I,L,D,M,G,P,U,B,F,H,n;!function(_){_[_.DEPTH=256]="DEPTH",_[_.STENCIL=1024]="STENCIL",_[_.COLOR=16384]="COLOR"}(_||(_={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_[_.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(A||(A={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(N||(N={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(S||(S={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT",_[_.HALF_FLOAT=5131]="HALF_FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(O||(O={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(I||(I={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(L||(L={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(D||(D={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(G||(G={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(P||(P={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(U||(U={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(B||(B={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(F||(F={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(H||(H={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(n||(n={}));const Y=33984;var V,X,f;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.TransformFeedback=7]="TransformFeedback",_[_.Sync=8]="Sync",_[_.UNCOUNTED=9]="UNCOUNTED",_[_.LinesOfCode=9]="LinesOfCode",_[_.Uniform=10]="Uniform",_[_.COUNT=11]="COUNT"}(V||(V={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(X||(X={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(f||(f={}));const t=33306;var c,o,u,e,i,r,W;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(c||(c={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(o||(o={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(u||(u={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(e||(e={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(i||(i={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(r||(r={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(W||(W={}));


/***/ })

}]);
//# sourceMappingURL=featureSources-SceneLayerSnappingSource.js.map