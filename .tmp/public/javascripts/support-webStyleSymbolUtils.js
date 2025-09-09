"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["support-webStyleSymbolUtils"],{

/***/ "./node_modules/@arcgis/core/core/devEnvironmentUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustStaticAGOUrl: function() { return /* binding */ a; },
/* harmony export */   devHostnames: function() { return /* binding */ i; },
/* harmony export */   isDevEnvironment: function() { return /* binding */ c; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,i.some((a=>null!=c?.match(a)))}function a(c,a){return c?(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(o)||null!=a.match(l)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c:null}const t=/^devext\.arcgis\.com$/,o=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,t,o,/^jsapps\.esri\.com$/,s,l];


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/defaults.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaults.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPointSymbol2D: function() { return /* binding */ S; },
/* harmony export */   defaultPolygonSymbol2D: function() { return /* binding */ c; },
/* harmony export */   defaultPolylineSymbol2D: function() { return /* binding */ u; },
/* harmony export */   defaultTextSymbol2D: function() { return /* binding */ a; },
/* harmony export */   errorPointSymbol2D: function() { return /* binding */ N; },
/* harmony export */   errorPolygonSymbol2D: function() { return /* binding */ y; },
/* harmony export */   errorPolylineSymbol2D: function() { return /* binding */ O; },
/* harmony export */   getDefaultSymbol2D: function() { return /* binding */ J; }
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleFillSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js");
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SimpleLineSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js");
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TextSymbol.js */ "./node_modules/@arcgis/core/symbols/TextSymbol.js");
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultsJSON.js */ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const S=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultPointSymbolJSON),u=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultPolylineSymbolJSON),c=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultPolygonSymbolJSON),a=_TextSymbol_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.defaultTextSymbolJSON);function J(r){if(null==r)return null;switch(r.type){case"mesh":return null;case"point":case"multipoint":return S;case"polyline":return u;case"polygon":case"extent":return c}return null}const N=_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.errorPointSymbolJSON),O=_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.errorPolylineSymbolJSON),y=_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_5__.errorPolygonSymbolJSON);


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/defaults3D.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaults3D.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRendererPolygonSymbol3D: function() { return /* binding */ D; },
/* harmony export */   defaultRendererPolylineSymbol3D: function() { return /* binding */ L; },
/* harmony export */   getDefaultSymbol3D: function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Color.js */ "./node_modules/@arcgis/core/Color.js");
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/screenUtils.js */ "./node_modules/@arcgis/core/core/screenUtils.js");
/* harmony import */ var _FillSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FillSymbol3DLayer.js */ "./node_modules/@arcgis/core/symbols/FillSymbol3DLayer.js");
/* harmony import */ var _LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LineSymbol3D.js */ "./node_modules/@arcgis/core/symbols/LineSymbol3D.js");
/* harmony import */ var _MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MeshSymbol3D.js */ "./node_modules/@arcgis/core/symbols/MeshSymbol3D.js");
/* harmony import */ var _PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PointSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PointSymbol3D.js");
/* harmony import */ var _PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PolygonSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PolygonSymbol3D.js");
/* harmony import */ var _edges_SolidEdges3D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../edges/SolidEdges3D.js */ "./node_modules/@arcgis/core/symbols/edges/SolidEdges3D.js");
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaults.js */ "./node_modules/@arcgis/core/symbols/support/defaults.js");
/* harmony import */ var _defaultsJSON_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./defaultsJSON.js */ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js");
/* harmony import */ var _LineSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../LineSymbol3DLayer.js */ "./node_modules/@arcgis/core/symbols/LineSymbol3DLayer.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const u=_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_8__["default"].fromSimpleMarkerSymbol(_defaults_js__WEBPACK_IMPORTED_MODULE_11__.defaultPointSymbol2D),w=_LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromSimpleLineSymbol(_defaults_js__WEBPACK_IMPORTED_MODULE_11__.defaultPolylineSymbol2D),S=_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromSimpleFillSymbol(_defaults_js__WEBPACK_IMPORTED_MODULE_11__.defaultPolygonSymbol2D),b=new _MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_7__["default"]({symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]([new _FillSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_5__["default"]({material:{color:_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_12__.defaultColor},edges:new _edges_SolidEdges3D_js__WEBPACK_IMPORTED_MODULE_10__["default"]({size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.px2pt)(1),color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"](_defaultsJSON_js__WEBPACK_IMPORTED_MODULE_12__.defaultOutlineColor)})})])}),L=new _LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__["default"]({symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]([new _LineSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_13__["default"]({material:{color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0])},size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.px2pt)(1)})])}),D=new _PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_9__["default"]({symbolLayers:new _core_Collection_js__WEBPACK_IMPORTED_MODULE_2__["default"]([new _FillSymbol3DLayer_js__WEBPACK_IMPORTED_MODULE_5__["default"]({outline:{color:new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0,0,0]),size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__.px2pt)(1)}})])});function d(o){if(null==o)return null;switch(o.type){case"mesh":return b;case"point":case"multipoint":return u;case"polyline":return w;case"polygon":case"extent":return S}return null}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/defaultsJSON.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/defaultsJSON.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultColor: function() { return /* binding */ e; },
/* harmony export */   defaultOutlineColor: function() { return /* binding */ i; },
/* harmony export */   defaultPointSymbolJSON: function() { return /* binding */ l; },
/* harmony export */   defaultPolygonSymbolJSON: function() { return /* binding */ S; },
/* harmony export */   defaultPolylineSymbolJSON: function() { return /* binding */ o; },
/* harmony export */   defaultTextSymbolJSON: function() { return /* binding */ t; },
/* harmony export */   errorPointSymbolJSON: function() { return /* binding */ r; },
/* harmony export */   errorPolygonSymbolJSON: function() { return /* binding */ y; },
/* harmony export */   errorPolylineSymbolJSON: function() { return /* binding */ s; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=[252,146,31,255],i=[153,153,153,255],l={type:"esriSMS",style:"esriSMSCircle",size:6,color:e,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:e},S={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},t={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},r={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},s={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},y={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null};


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/jsonUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/jsonUtils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromJSON: function() { return /* binding */ p; },
/* harmony export */   write: function() { return /* binding */ l; },
/* harmony export */   writeLabelSymbol: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _Symbol3D_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Symbol3D.js */ "./node_modules/@arcgis/core/symbols/Symbol3D.js");
/* harmony import */ var _symbolConversion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbolConversion.js */ "./node_modules/@arcgis/core/symbols/support/symbolConversion.js");
/* harmony import */ var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../WebStyleSymbol.js */ "./node_modules/@arcgis/core/symbols/WebStyleSymbol.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function l(e,o,n,t){const s=y(e,{},{context:t,isLabelSymbol:!1});null!=s&&(o[n]=s)}function i(e,o,n,t){const s=y(e,{},{context:t,isLabelSymbol:!0});null!=s&&(o[n]=s)}function m(e){return e instanceof _Symbol3D_js__WEBPACK_IMPORTED_MODULE_3__["default"]||e instanceof _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"]}function a(e){return e instanceof _Symbol3D_js__WEBPACK_IMPORTED_MODULE_3__["default"]&&("polygon-3d"===e.type||"line-3d"===e.type)}function y(e,t,r){if(null==e)return null;const{context:l,isLabelSymbol:i}=r,y=l?.origin,p=l?.messages;if("web-scene"===y&&!m(e)){const n=(0,_symbolConversion_js__WEBPACK_IMPORTED_MODULE_4__.to3D)(e,{retainCIM:!0,hasLabelingContext:i});return null!=n.symbol?n.symbol.write(t,l):(p?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:l,error:n.error})),null)}return (0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSceneServiceLayer)(l?.layer)&&a(e)?(p?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported on layers of type '${l?.layer?.declaredClass}'.`,{symbol:e,context:l})),null):("web-map"===y||"portal-item"===y&&!(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__.isSceneServiceLayer)(l?.layer))&&m(e)?(p?.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:l})),null):e.write(t,l)}function p(o,n){return (0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.readSymbol)(o,null,n)}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/styleCache.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/styleCache.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cachedStyles: function() { return /* binding */ e; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const e=new Map;


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/styleUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/styleUtils.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Style2DUrlTemplate: function() { return /* binding */ h; },
/* harmony export */   fetchStyle: function() { return /* binding */ i; },
/* harmony export */   makeCIMSymbolRef: function() { return /* binding */ m; },
/* harmony export */   requestJSON: function() { return /* binding */ p; },
/* harmony export */   symbolUrlFromStyleItem: function() { return /* binding */ y; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/PortalQueryParams.js */ "./node_modules/@arcgis/core/portal/PortalQueryParams.js");
/* harmony import */ var _styleCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styleCache.js */ "./node_modules/@arcgis/core/symbols/support/styleCache.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function f(e,t){try{return{data:(await p(e,t)).data,baseUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeFile)(e),styleUrl:e}}catch(o){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAbortError)(o),null}}function u(e,t,r){const o=null!=t.portal?t.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__["default"].getDefault();let s;const l=`${o.url} - ${o.user?.username} - ${e}`,f=_styleCache_js__WEBPACK_IMPORTED_MODULE_7__.cachedStyles.get(l);if(f)return f;const u=c(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl??"",styleName:e})));return _styleCache_js__WEBPACK_IMPORTED_MODULE_7__.cachedStyles.set(l,u),u}function c(e,r,o){return r.load(o).then((()=>{const t=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_6__["default"]({disableExtraQuery:!0,query:`owner:${d} AND type:${b} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===b&&e.owner===d){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function i(e,r,o){return null!=e?.styleUrl?f(e.styleUrl,o):null!=e?.styleName?u(e.styleName,r,o):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function m(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function y(e,t,r=["gltf"]){if("cimRef"===t)return encodeURI(e.cimRef);if(e.formatInfos&&!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__["default"])("enable-feature:force-wosr"))for(const o of r){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return encodeURI(e.webRef)}function p(t,r){const s={responseType:"json",query:{f:"json"},...r};return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalize)(t),s)}const d="esri_en",b="Style",h="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/symbolConversion.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/symbolConversion.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultTo3DOptions: function() { return /* binding */ g; },
/* harmony export */   to3D: function() { return /* binding */ u; }
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _defaults3D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults3D.js */ "./node_modules/@arcgis/core/symbols/support/defaults3D.js");
/* harmony import */ var _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WebStyleSymbol.js */ "./node_modules/@arcgis/core/symbols/WebStyleSymbol.js");
/* harmony import */ var _PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PointSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PointSymbol3D.js");
/* harmony import */ var _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SimpleLineSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleLineSymbol.js");
/* harmony import */ var _LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LineSymbol3D.js */ "./node_modules/@arcgis/core/symbols/LineSymbol3D.js");
/* harmony import */ var _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SimpleMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js");
/* harmony import */ var _PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PictureMarkerSymbol.js */ "./node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js");
/* harmony import */ var _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SimpleFillSymbol.js */ "./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js");
/* harmony import */ var _MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MeshSymbol3D.js */ "./node_modules/@arcgis/core/symbols/MeshSymbol3D.js");
/* harmony import */ var _PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../PolygonSymbol3D.js */ "./node_modules/@arcgis/core/symbols/PolygonSymbol3D.js");
/* harmony import */ var _TextSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TextSymbol.js */ "./node_modules/@arcgis/core/symbols/TextSymbol.js");
/* harmony import */ var _LabelSymbol3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../LabelSymbol3D.js */ "./node_modules/@arcgis/core/symbols/LabelSymbol3D.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const S="#useCIMFallbackSymbology()",g={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function u(u,d=g){if(!u)return{symbol:null};const{retainId:D=g.retainId,ignoreDrivers:M=g.ignoreDrivers,hasLabelingContext:j=g.hasLabelingContext,retainCIM:C=g.retainCIM,cimFallbackEnabled:I=g.cimFallbackEnabled}=d;let k=null;if((0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol3D)(u)||u instanceof _WebStyleSymbol_js__WEBPACK_IMPORTED_MODULE_3__["default"])k=u.clone();else if("cim"===u.type){const o=u.data?.symbol?.type;switch(o){case"CIMPointSymbol":k=C?u.clone():_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromCIMSymbol(u);break;case"CIMLineSymbol":I&&(k=_defaults3D_js__WEBPACK_IMPORTED_MODULE_2__.defaultRendererPolylineSymbol3D.clone(),d?.logWarning?.(S,"Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case"CIMPolygonSymbol":I&&(k=_defaults3D_js__WEBPACK_IMPORTED_MODULE_2__.defaultRendererPolygonSymbol3D.clone(),d?.logWarning?.(S,"Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!k)return{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:u})}}else if(u instanceof _SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_5__["default"])k=_LineSymbol3D_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromSimpleLineSymbol(u);else if(u instanceof _SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_7__["default"])k=_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromSimpleMarkerSymbol(u);else if(u instanceof _PictureMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_8__["default"])k=_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromPictureMarkerSymbol(u);else if(u instanceof _SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_9__["default"])k=d.geometryType&&"mesh"===d.geometryType?_MeshSymbol3D_js__WEBPACK_IMPORTED_MODULE_10__["default"].fromSimpleFillSymbol(u):_PolygonSymbol3D_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromSimpleFillSymbol(u);else{if(!(u instanceof _TextSymbol_js__WEBPACK_IMPORTED_MODULE_12__["default"]))return{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${u.type||u.declaredClass}' is unsupported in 3D`,{symbol:u})};k=j?_LabelSymbol3D_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromTextSymbol(u):_PointSymbol3D_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromTextSymbol(u)}return D&&k&&"cim"!==k.type&&(k.id=u.id),M&&(0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol3D)(k)&&k.symbolLayers.forEach((o=>o.ignoreDrivers=!0)),{symbol:k}}


/***/ }),

/***/ "./node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSymbolFromStyle: function() { return /* binding */ h; },
/* harmony export */   getStyleItemFromStyle: function() { return /* binding */ j; },
/* harmony export */   resolveWebStyleSymbol: function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../symbols.js */ "./node_modules/@arcgis/core/symbols.js");
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/devEnvironmentUtils.js */ "./node_modules/@arcgis/core/core/devEnvironmentUtils.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "./node_modules/@arcgis/core/chunks/persistableUrlUtils.js");
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jsonUtils.js */ "./node_modules/@arcgis/core/symbols/support/jsonUtils.js");
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleOrigin.js */ "./node_modules/@arcgis/core/symbols/support/StyleOrigin.js");
/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styleUtils.js */ "./node_modules/@arcgis/core/symbols/support/styleUtils.js");
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Thumbnail.js */ "./node_modules/@arcgis/core/symbols/support/Thumbnail.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function g(t,e,r,o){const n=t.name;return null==n?Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):"Esri2DPointSymbolsStyle"===t.styleName?d(n,e,o):(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.fetchStyle)(t,e,o).then((t=>h(t,n,e,r,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.symbolUrlFromStyleItem,o)))}function j(t,e){return e.items.find((e=>e.name===t))}function h(u,y,c,g,h,d){const U=null!=c?.portal?c.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDefault(),N={portal:U,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)(u.baseUrl),origin:"portal-item"},w=j(y,u.data);if(!w){const t=`The symbol name '${y}' could not be found`;return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("symbolstyleutils:symbol-name-not-found",t,{symbolName:y}))}let S=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(h(w,g),N),D=w.thumbnail?.href??null;const O=w.thumbnail?.imageData;(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.isDevEnvironment)()&&(S=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.adjustStaticAGOUrl)(S)??"",D=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__.adjustStaticAGOUrl)(D));const P={portal:U,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeFile)(S)),origin:"portal-item"};return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.requestJSON)(S,d).then((e=>{const r="cimRef"===g?(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.makeCIMSymbolRef)(e.data):e.data,l=(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromJSON)(r,P);if(l&&(0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__.isSymbol3D)(l)){if(D){const t=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(D,N);l.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__.Thumbnail({url:t})}else O&&(l.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__.Thumbnail({url:`data:image/png;base64,${O}`}));u.styleUrl?l.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:c.portal,styleUrl:u.styleUrl,name:y}):u.styleName&&(l.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:c.portal,styleName:u.styleName,name:y}))}return l}))}function d(t,e,r){const l=_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.Style2DUrlTemplate.replaceAll(/\{SymbolName\}/gi,t),i=null!=e.portal?e.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__["default"].getDefault();return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.requestJSON)(l,r).then((t=>{const e=(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.makeCIMSymbolRef)(t.data);return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__.fromJSON)(e,{portal:i,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.urlToObject)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.removeFile)(l)),origin:"portal-item"})}))}


/***/ })

}]);
//# sourceMappingURL=support-webStyleSymbolUtils.js.map