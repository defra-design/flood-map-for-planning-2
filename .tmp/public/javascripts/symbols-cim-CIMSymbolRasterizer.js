"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["symbols-cim-CIMSymbolRasterizer"],{

/***/ "./node_modules/@arcgis/core/symbols/cim/CIMResourceManager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMResourceManager.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _core_fontUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/fontUtils.js */ "./node_modules/@arcgis/core/core/fontUtils.js");
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/imageUtils.js */ "./node_modules/@arcgis/core/core/imageUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class i{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){return this._resourceMap.get(e)??null}async fetchResource(e,i){const h=this._resourceMap.get(e);if(h)return{width:h.width,height:h.height};let r=this._inFlightResourceMap.get(e);return r?r.then((e=>({width:e.width,height:e.height}))):(r=(0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_1__.getImageData)(e,i),this._inFlightResourceMap.set(e,r),r.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(t){return (0,_core_fontUtils_js__WEBPACK_IMPORTED_MODULE_0__.loadFont)(t)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CIMSymbolRasterizer: function() { return /* binding */ h; }
/* harmony export */ });
/* harmony import */ var _CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CIMResourceManager.js */ "./node_modules/@arcgis/core/symbols/cim/CIMResourceManager.js");
/* harmony import */ var _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CIMSymbolDrawHelper.js */ "./node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js");
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CIMSymbolHelper.js */ "./node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js");
/* harmony import */ var _OverrideHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverrideHelper.js */ "./node_modules/@arcgis/core/symbols/cim/OverrideHelper.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/@arcgis/core/symbols/cim/utils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const n=96/72;class h{constructor(t){this._spatialReference=t,this._imageDataCanvas=null,this._cimResourceManager=new _CIMResourceManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,i,n,h,l,c,m,g){if(!e)return null;const{data:y}=e;if(!y||"CIMSymbolReference"!==y.type||!y.symbol)return null;const{symbol:d}=y;l||(l=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.mapCIMSymbolToGeometryType)(d));const u=await _OverrideHelper_js__WEBPACK_IMPORTED_MODULE_3__.OverrideHelper.resolveSymbolOverrides(y,t,this._spatialReference,h,l,c,m),w=this._cimResourceManager,p=[];_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__.CIMSymbolHelper.fetchResources(u,w,p),_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__.CIMSymbolHelper.fetchFonts(u,w,p),p.length>0&&await Promise.all(p);const{width:b,height:f}=i,M=o(l,b,f,n),C=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__.CIMSymbolHelper.getEnvelope(u,M,w);if(!C)return null;C.x===1/0&&(C.x=b+2),C.y===1/0&&(C.y=-f/2),C.width===-1/0&&(C.width=b),C.height===-1/0&&(C.height=f);let R=1,v=0,x=0;switch(d.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;C.width>b&&(e=b/C.width);let t=1;C.height>f&&(t=f/C.height),"preview"===n&&(C.width<b&&(e=b/C.width),C.height<f&&(t=f/C.height)),R=Math.min(e,t),v=C.x+C.width/2,x=C.y+C.height/2}break;case"CIMLineSymbol":{(g||C.height>f)&&(R=f/C.height),x=C.y+C.height/2;const e=C.x*R+b/2,t=(C.x+C.width)*R+b/2,{paths:i}=M;i[0][0][0]-=e/R,i[0][2][0]-=(t-b)/R}break;case"CIMPolygonSymbol":{v=C.x+C.width/2,x=C.y+C.height/2;const e=C.x*R+b/2,t=(C.x+C.width)*R+b/2,i=C.y*R+f/2,r=(C.y+C.height)*R+f/2,{rings:a}=M;e<0&&(a[0][0][0]-=e,a[0][3][0]-=e,a[0][4][0]-=e),i<0&&(a[0][0][1]+=i,a[0][1][1]+=i,a[0][4][1]+=i),t>b&&(a[0][1][0]-=t-b,a[0][2][0]-=t-b),r>f&&(a[0][2][1]+=r-f,a[0][3][1]+=r-f)}}const I={type:"cim",data:{type:"CIMSymbolReference",symbol:u}};return this.rasterize(I,b,f,v,x,R,l,1,M)}rasterize(e,r,a,h,l,c,m,g=0,y=null){const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:u}=d,w=this._canvas,p=(window.devicePixelRatio||1)*n;w.width=r*p,w.height=a*p,m||(m=(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.mapCIMSymbolToGeometryType)(u)),y||(y=o(m,r,a,"legend")),w.width+=2*g,w.height+=2*g;const b=w.getContext("2d",{willReadFrequently:!0}),f=_CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_1__.Transformation.createIdentity();f.translate(-h,-l),f.scale(c*p,-c*p),f.translate(r*p/2+g,a*p/2+g),b.clearRect(0,0,w.width,w.height);return new _CIMSymbolDrawHelper_js__WEBPACK_IMPORTED_MODULE_1__.CanvasDrawHelper(b,this._cimResourceManager,f,!0).drawSymbol(u,y),b.getImageData(0,0,w.width,w.height)}}function o(e,t,i,r){const a=1,s=-t/2+a,n=t/2-a,h=i/2-a,o=-i/2+a;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[s,0],[0,0],[n,0]]]};default:return"legend"===r?{rings:[[[s,h],[n,0],[n,o],[s,o],[s,h]]]}:{rings:[[[s,h],[n,h],[n,o],[s,o],[s,h]]]}}}


/***/ })

}]);
//# sourceMappingURL=symbols-cim-CIMSymbolRasterizer.js.map