"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["portal-support-layersLoader"],{

/***/ "./node_modules/@arcgis/core/layers/support/LayerLoadContext.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/LayerLoadContext.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerLoadContext: function() { return /* binding */ e; }
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/requestPresets.js */ "./node_modules/@arcgis/core/support/requestPresets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
class e{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const s=this._serviceMetadatas.get(e);if(s)return s;const r=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__.fetchArcGISServiceJSON)(e,a);return this._serviceMetadatas.set(e,r),r}async fetchItemData(t){const{id:e}=t;if(!e)return null;const{_itemDatas:a}=this;if(a.has(e))return a.get(e);const s=await t.fetchData();return a.set(e,s),s}async fetchCustomParameters(t,e){const a=await this.fetchItemData(t);return a&&"object"==typeof a&&(e?e(a):a.customParameters)||null}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findAssociatedFeatureService: function() { return /* binding */ s; }
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function s(e,r){const n=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(e);if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("invalid-url","Invalid scene service url");const o={...r,sceneServerUrl:n.url.path,layerId:n.sublayer??void 0};if(o.sceneLayerItem??=await l(o),null==o.sceneLayerItem)return f(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const i=await y(o);if(!i?.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=i;const s=await f(i.url,o);return s.portalItem=i,s}async function l(e){const r=(await c(e)).serviceItemId;if(!r)return null;const t=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({id:r,apiKey:e.apiKey}),a=await u(e);null!=a&&(t.portal=new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_5__["default"]({url:a}));try{return await t.load({signal:e.signal})}catch(s){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAbortError)(s),null}}async function c(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const n=await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e.sceneServerUrl,t);e.rootDocument=n.data}catch{e.rootDocument={}}return e.rootDocument}async function u(t){const a=_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id?.findServerInfo(t.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const o=t.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(o,{query:{f:"json"},responseType:"json",signal:t.signal})).data.owningSystemUrl;if(e)return e}catch(i){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAbortError)(i)}return null}async function f(e,n){const o=(0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_4__.parse)(e);if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("invalid-feature-service-url","Invalid feature service url");const i=o.url.path,s=n.layerId;if(null==s)return{serverUrl:i};const l=c(n),u=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,f=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,y=e=>{const t={query:{f:"json",...f},responseType:"json",authMode:e,signal:n.signal};return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i,t)},m=y("anonymous").catch((()=>y("no-prompt"))),[p,d]=await Promise.all([m,l]),v=d?.layers,w=p.data&&p.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(v))for(let r=0;r<Math.min(v.length,w.length);r++){if(v[r].id===s)return{serverUrl:i,layerId:w[r].id}}else if(null!=s&&s<w.length)return{serverUrl:i,layerId:w[s].id};throw new Error("could not find matching associated sublayer")}async function y({sceneLayerItem:e,signal:r}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const n=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]({portal:t.portal,id:t.id});return await n.load(),n}catch(t){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAbortError)(t),null}}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/fetchService.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/fetchService.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchFeatureService: function() { return /* binding */ t; },
/* harmony export */   getLayerModuleType: function() { return /* binding */ i; }
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../support/requestPresets.js */ "./node_modules/@arcgis/core/support/requestPresets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function t(a,t){const{loadContext:r,...n}=t||{},c=r?await r.fetchServiceMetadata(a,n):await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__.fetchArcGISServiceJSON)(a,n);o(c),s(c);const y={serviceJSON:c};if((c.currentVersion??0)<10.5)return y;const i=`${a}/layers`,u=r?await r.fetchServiceMetadata(i,n):await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__.fetchArcGISServiceJSON)(i,n);return o(u),s(u),y.layersJSON={layers:u.layers,tables:u.tables},y}function r(e){const{type:t}=e;return!!t&&a.has(t)}function n(e){return"Table"===e.type}function s(e){e.layers=e.layers?.filter(r),e.tables=e.tables?.filter(n)}function c(e){e.type||="Feature Layer"}function y(e){e.type||="Table"}function o(e){e.layers?.forEach(c),e.tables?.forEach(y)}function i(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/layersCreator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/layersCreator.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateGroupLayer: function() { return /* binding */ v; },
/* harmony export */   populateOperationalLayers: function() { return /* binding */ l; }
/* harmony export */ });
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Collection.js */ "./node_modules/@arcgis/core/core/Collection.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerLoadContext.js */ "./node_modules/@arcgis/core/layers/support/LayerLoadContext.js");
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazyLayerLoader.js */ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/support/featureCollectionUtils.js */ "./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js");
/* harmony import */ var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/portalLayers.js */ "./node_modules/@arcgis/core/portal/support/portalLayers.js");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "./node_modules/@arcgis/core/renderers/support/styleUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function l(e,r,a){if(!r)return;const t=r.map((e=>G(e,a))),y=await Promise.allSettled(t);for(const i of y)"rejected"===i.status||i.value&&e.add(i.value)}const c={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},I={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={...u,LinkChartLayer:"LinkChartLayer"},g={...d},T={...I};async function G(e,r){return f(await M(e,r),e,r)}async function f(e,r,a){const t=new e;return t.read(r,a.context),"group"===t.type&&("GroupLayer"===r.layerType?await v(t,r,a):b(r)?h(t,r,a.context):A(r)&&await C(t,r,a.context)),await (0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_7__.loadStyleRenderer)(t,a.context),t}async function M(e,o){const l=o.context,c=w(l);let s=e.layerType||e.type;!s&&o?.defaultLayerType&&(s=o.defaultLayerType);const p=c[s];let S=p?_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap[p]:_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.UnknownLayer;if(b(e)){const y=l?.portal;if(e.itemId){const i=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"]({id:e.itemId,portal:y});await i.load();const L=(await (0,_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_6__.selectLayerClassPath)(i,new _LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_2__.LayerLoadContext)).className||"UnknownLayer";S=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap[L]}}else"ArcGISFeatureLayer"===s?(0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__.isMapNotesLayer)(e)||(0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__.isMarkupLayer)(e)?S=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.MapNotesLayer:(0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_5__.isRouteLayer)(e)?S=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.RouteLayer:A(e)&&(S=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?S=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.WMTSLayer:"WFS"===s&&"2.0.0"!==e.wfsInfo?.version&&(S=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.UnsupportedLayer);return S()}function A(e){if("ArcGISFeatureLayer"!==e.layerType||b(e))return!1;return(e.featureCollection?.layers?.length??0)>1}function b(e){return"Feature Collection"===e.type}function w(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=p;break;default:r=c}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=m}break;default:switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=d;break;default:r=u}}return r}async function v(r,a,t){const y=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__["default"],i=l(y,Array.isArray(a.layers)?a.layers:[],t);try{try{if(await i,"group"===r.type)return r.layers.addMany(y),r}catch(L){r.destroy();for(const e of y)e.destroy();throw L}}catch(L){throw L}}function h(e,r,a){r.itemId&&(e.portalItem=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"]({id:r.itemId,portal:a?.portal}),e.when((()=>{const t=t=>{const y=t.layerId;F(t,e,r,y,a);const i=r.featureCollection?.layers?.[y];i&&t.read(i,a)};e.layers?.forEach(t),e.tables?.forEach(t)})))}async function C(e,r,t){const y=_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_3__.layerLookupMap.FeatureLayer,i=await y(),L=r.featureCollection,n=L?.showLegend,o=L?.layers?.map(((a,y)=>{const L=new i;L.read(a,t);const o={...t,ignoreDefaults:!0};return F(L,e,r,y,o),null!=n&&L.read({showLegend:n},o),L}));e.layers.addMany(o??[])}function F(e,r,a,t,y){e.read({id:`${r.id}-sublayer-${t}`,visibility:a.visibleLayers?.includes(t)??!0},y)}


/***/ }),

/***/ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   layerLookupMap: function() { return /* binding */ a; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await __webpack_require__.e(/*! import() | BingMapsLayer */ "BingMapsLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../BingMapsLayer.js */ "./node_modules/@arcgis/core/layers/BingMapsLayer.js"))).default,BuildingSceneLayer:async()=>(await __webpack_require__.e(/*! import() | BuildingSceneLayer */ "BuildingSceneLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../BuildingSceneLayer.js */ "./node_modules/@arcgis/core/layers/BuildingSceneLayer.js"))).default,CSVLayer:async()=>(await __webpack_require__.e(/*! import() | CSVLayer */ "CSVLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../CSVLayer.js */ "./node_modules/@arcgis/core/layers/CSVLayer.js"))).default,CatalogLayer:async()=>(await __webpack_require__.e(/*! import() | CatalogLayer */ "CatalogLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../CatalogLayer.js */ "./node_modules/@arcgis/core/layers/CatalogLayer.js"))).default,DimensionLayer:async()=>(await __webpack_require__.e(/*! import() | DimensionLayer */ "DimensionLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../DimensionLayer.js */ "./node_modules/@arcgis/core/layers/DimensionLayer.js"))).default,ElevationLayer:async()=>(await __webpack_require__.e(/*! import() | ElevationLayer */ "ElevationLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ElevationLayer.js */ "./node_modules/@arcgis/core/layers/ElevationLayer.js"))).default,FeatureLayer:async()=>(await __webpack_require__.e(/*! import() | FeatureLayer */ "FeatureLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../FeatureLayer.js */ "./node_modules/@arcgis/core/layers/FeatureLayer.js"))).default,GeoJSONLayer:async()=>(await __webpack_require__.e(/*! import() | GeoJSONLayer */ "GeoJSONLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../GeoJSONLayer.js */ "./node_modules/@arcgis/core/layers/GeoJSONLayer.js"))).default,GeoRSSLayer:async()=>(await __webpack_require__.e(/*! import() | GeoRSSLayer */ "GeoRSSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../GeoRSSLayer.js */ "./node_modules/@arcgis/core/layers/GeoRSSLayer.js"))).default,GroupLayer:async()=>(await __webpack_require__.e(/*! import() | GroupLayer */ "GroupLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../GroupLayer.js */ "./node_modules/@arcgis/core/layers/GroupLayer.js"))).default,ImageryLayer:async()=>(await __webpack_require__.e(/*! import() | ImageryLayer */ "ImageryLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ImageryLayer.js */ "./node_modules/@arcgis/core/layers/ImageryLayer.js"))).default,ImageryTileLayer:async()=>(await __webpack_require__.e(/*! import() | ImageryTileLayer */ "ImageryTileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ImageryTileLayer.js */ "./node_modules/@arcgis/core/layers/ImageryTileLayer.js"))).default,IntegratedMesh3DTilesLayer:async()=>(await __webpack_require__.e(/*! import() | IntegratedMesh3DTilesLayer */ "IntegratedMesh3DTilesLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../IntegratedMesh3DTilesLayer.js */ "./node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js"))).default,IntegratedMeshLayer:async()=>(await __webpack_require__.e(/*! import() | IntegratedMeshLayer */ "IntegratedMeshLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../IntegratedMeshLayer.js */ "./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js"))).default,KMLLayer:async()=>(await __webpack_require__.e(/*! import() | KMLLayer */ "KMLLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../KMLLayer.js */ "./node_modules/@arcgis/core/layers/KMLLayer.js"))).default,KnowledgeGraphLayer:async()=>(await __webpack_require__.e(/*! import() | KnowledgeGraphLayer */ "KnowledgeGraphLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../KnowledgeGraphLayer.js */ "./node_modules/@arcgis/core/layers/KnowledgeGraphLayer.js"))).default,LineOfSightLayer:async()=>(await __webpack_require__.e(/*! import() | LineOfSightLayer */ "LineOfSightLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../LineOfSightLayer.js */ "./node_modules/@arcgis/core/layers/LineOfSightLayer.js"))).default,LinkChartLayer:async()=>(await __webpack_require__.e(/*! import() | LinkChartLayer */ "LinkChartLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../LinkChartLayer.js */ "./node_modules/@arcgis/core/layers/LinkChartLayer.js"))).default,MapImageLayer:async()=>(await __webpack_require__.e(/*! import() | MapImageLayer */ "MapImageLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../MapImageLayer.js */ "./node_modules/@arcgis/core/layers/MapImageLayer.js"))).default,MapNotesLayer:async()=>(await __webpack_require__.e(/*! import() | MapNotesLayer */ "MapNotesLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../MapNotesLayer.js */ "./node_modules/@arcgis/core/layers/MapNotesLayer.js"))).default,MediaLayer:async()=>(await __webpack_require__.e(/*! import() | MediaLayer */ "MediaLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../MediaLayer.js */ "./node_modules/@arcgis/core/layers/MediaLayer.js"))).default,OGCFeatureLayer:async()=>(await __webpack_require__.e(/*! import() | OGCFeatureLayer */ "OGCFeatureLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../OGCFeatureLayer.js */ "./node_modules/@arcgis/core/layers/OGCFeatureLayer.js"))).default,OpenStreetMapLayer:async()=>(await __webpack_require__.e(/*! import() | OpenStreetMapLayer */ "OpenStreetMapLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../OpenStreetMapLayer.js */ "./node_modules/@arcgis/core/layers/OpenStreetMapLayer.js"))).default,OrientedImageryLayer:async()=>(await __webpack_require__.e(/*! import() | OrientedImageryLayer */ "OrientedImageryLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../OrientedImageryLayer.js */ "./node_modules/@arcgis/core/layers/OrientedImageryLayer.js"))).default,PointCloudLayer:async()=>(await __webpack_require__.e(/*! import() | PointCloudLayer */ "PointCloudLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../PointCloudLayer.js */ "./node_modules/@arcgis/core/layers/PointCloudLayer.js"))).default,RouteLayer:async()=>(await __webpack_require__.e(/*! import() | RouteLayer */ "RouteLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../RouteLayer.js */ "./node_modules/@arcgis/core/layers/RouteLayer.js"))).default,SceneLayer:async()=>(await __webpack_require__.e(/*! import() | SceneLayer */ "SceneLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../SceneLayer.js */ "./node_modules/@arcgis/core/layers/SceneLayer.js"))).default,StreamLayer:async()=>(await __webpack_require__.e(/*! import() | StreamLayer */ "StreamLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../StreamLayer.js */ "./node_modules/@arcgis/core/layers/StreamLayer.js"))).default,SubtypeGroupLayer:async()=>(await __webpack_require__.e(/*! import() | SubtypeGroupLayer */ "SubtypeGroupLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../SubtypeGroupLayer.js */ "./node_modules/@arcgis/core/layers/SubtypeGroupLayer.js"))).default,TileLayer:async()=>(await __webpack_require__.e(/*! import() | TileLayer */ "TileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../TileLayer.js */ "./node_modules/@arcgis/core/layers/TileLayer.js"))).default,UnknownLayer:async()=>(await __webpack_require__.e(/*! import() | UnknownLayer */ "UnknownLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../UnknownLayer.js */ "./node_modules/@arcgis/core/layers/UnknownLayer.js"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/*! import() | UnsupportedLayer */ "UnsupportedLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../UnsupportedLayer.js */ "./node_modules/@arcgis/core/layers/UnsupportedLayer.js"))).default,VectorTileLayer:async()=>(await __webpack_require__.e(/*! import() | VectorTileLayer */ "VectorTileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../VectorTileLayer.js */ "./node_modules/@arcgis/core/layers/VectorTileLayer.js"))).default,VideoLayer:async()=>(await __webpack_require__.e(/*! import() | VideoLayer */ "VideoLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../VideoLayer.js */ "./node_modules/@arcgis/core/layers/VideoLayer.js"))).default,ViewshedLayer:async()=>(await __webpack_require__.e(/*! import() | ViewshedLayer */ "ViewshedLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../ViewshedLayer.js */ "./node_modules/@arcgis/core/layers/ViewshedLayer.js"))).default,VoxelLayer:async()=>(await __webpack_require__.e(/*! import() | VoxelLayer */ "VoxelLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../VoxelLayer.js */ "./node_modules/@arcgis/core/layers/VoxelLayer.js"))).default,WFSLayer:async()=>(await __webpack_require__.e(/*! import() | WFSLayer */ "WFSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WFSLayer.js */ "./node_modules/@arcgis/core/layers/WFSLayer.js"))).default,WMSLayer:async()=>(await __webpack_require__.e(/*! import() | WMSLayer */ "WMSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WMSLayer.js */ "./node_modules/@arcgis/core/layers/WMSLayer.js"))).default,WMTSLayer:async()=>(await __webpack_require__.e(/*! import() | WMTSLayer */ "WMTSLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WMTSLayer.js */ "./node_modules/@arcgis/core/layers/WMTSLayer.js"))).default,WebTileLayer:async()=>(await __webpack_require__.e(/*! import() | WebTileLayer */ "WebTileLayer").then(__webpack_require__.bind(__webpack_require__, /*! ../WebTileLayer.js */ "./node_modules/@arcgis/core/layers/WebTileLayer.js"))).default};


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isMapNotesLayer: function() { return /* binding */ e; },
/* harmony export */   isMarkupLayer: function() { return /* binding */ r; },
/* harmony export */   isRouteLayer: function() { return /* binding */ n; }
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(e){return t(e,"notes")}function r(e){return t(e,"markup")}function n(e){return t(e,"route")}function t(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/jsonContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForItemRead: function() { return /* binding */ e; },
/* harmony export */   createForItemWrite: function() { return /* binding */ o; }
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),portalItem:e}}


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/layersLoader.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/layersLoader.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   load: function() { return /* binding */ g; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layers/support/arcgisLayerUrl.js */ "./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js");
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/support/fetchService.js */ "./node_modules/@arcgis/core/layers/support/fetchService.js");
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/support/LayerLoadContext.js */ "./node_modules/@arcgis/core/layers/support/LayerLoadContext.js");
/* harmony import */ var _layers_support_layersCreator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/support/layersCreator.js */ "./node_modules/@arcgis/core/layers/support/layersCreator.js");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Portal.js */ "./node_modules/@arcgis/core/portal/Portal.js");
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jsonContext.js */ "./node_modules/@arcgis/core/portal/support/jsonContext.js");
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loadUtils.js */ "./node_modules/@arcgis/core/portal/support/loadUtils.js");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portalItemUtils.js */ "./node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "./node_modules/@arcgis/core/renderers/support/styleUtils.js");
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/requestPresets.js */ "./node_modules/@arcgis/core/support/requestPresets.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function g(e,t){const r=e.instance.portalItem;if(r?.id)return await r.load(t),b(e),e.validateItem&&e.validateItem(r),L(e,t)}function b(t){const r=t.instance.portalItem;if(!r?.type||!t.supportedTypes.includes(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r?.type,expectedType:t.supportedTypes.join(", ")})}async function L(e,t){const r=e.instance,o=r.portalItem;if(!o)return;const{url:n,title:s}=o,l=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_7__.createForItemRead)(o,"portal-item");if("group"===r.type)return S(r,l,e);n&&"media"!==r.type&&r.read({url:n},l);const c=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__.LayerLoadContext,u=await M(e,c,t);return u&&r.read(u,l),r.resourceReferences={portalItem:o,paths:l.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:s},l),(0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_10__.loadStyleRenderer)(r,l)}async function S(t,r,a){const o=t.portalItem;if(!t.sourceIsPortalItem)return;const{title:n,type:s}=o;if("Group Layer"===s){if(!(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_9__.hasTypeKeyword)(o,"Map"))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return T(t)}return t.read({title:n},r),v(t,a)}async function T(e){const t=e.portalItem,r=await t.fetchData("json");if(!r)return;const a=(0,_jsonContext_js__WEBPACK_IMPORTED_MODULE_7__.createForItemRead)(t,"web-map");e.read(r,a),await (0,_layers_support_layersCreator_js__WEBPACK_IMPORTED_MODULE_4__.populateGroupLayer)(e,r,{context:a}),e.resourceReferences={portalItem:t,paths:a.readResourcePaths??[]}}async function v(t,r){let o;const{portalItem:n}=t;if(!n)return;const s=n.type,i=r.layerModuleTypeMap;switch(s){case"Feature Service":case"Feature Collection":o=i.FeatureLayer;break;case"Stream Service":o=i.StreamLayer;break;case"Scene Service":o=i.SceneLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'IGroupLayer'`)}const y=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__.LayerLoadContext;let[f,m]=await Promise.all([o(),M(r,y)]),d=()=>f;if("Feature Service"===s){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.getFirstLayerOrTable)(m)?.customParameters;m=n.url?await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.preprocessFSItemData)(m,n.url,y):{},d=await E(m,i)||d;const r=await k(n.url,{customParameters:e,loadContext:y});return await F(t,d,m,r)}return"Scene Service"===s&&n.url&&(m=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.populateSceneServiceItemData)(n,m,y)),(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.getNumLayersAndTables)(m)>0?await F(t,d,m):await j(t,d)}async function j(e,t){const{portalItem:r}=e;if(!r?.url)return;const a=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_11__.fetchArcGISServiceJSON)(r.url);a&&F(e,t,{layers:a.layers?.map(_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.createSublayerData),tables:a.tables?.map(_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.createSublayerData)})}async function F(e,t,r,a){let o=r.layers||[];const s=r.tables||[];if("Feature Collection"===e.portalItem?.type?(o.forEach(((e,t)=>{e.id=t,"Table"===e?.layerDefinition?.type&&s.push(e)})),o=o.filter((e=>"Table"!==e?.layerDefinition?.type))):(o.reverse(),s.reverse()),o.forEach((o=>{const n=a?.(o);if(n||!a){const a=P(e,t(o),r,o,n);e.add(a)}})),s.length){const t=await _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__.layerLookupMap.FeatureLayer();s.forEach((o=>{const n=a?.(o);if(n||!a){const a=P(e,t,r,o,n);e.tables.add(a)}}))}}function P(e,t,r,a,o){const n=e.portalItem,i={portalItem:n.clone(),layerId:a.id};null!=a.url&&(i.url=a.url);const l=new t(i);if("sourceJSON"in l&&(l.sourceJSON=o),"subtype-group"!==l.type&&"catalog"!==l.type&&(l.sublayerTitleMode="service-name"),"Feature Collection"===n.type){const e={origin:"portal-item",portal:n.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_6__["default"].getDefault()};l.read(a,e);const t=r.showLegend;null!=t&&l.read({showLegend:t},e)}return l}async function M(e,t,r){if(!1===e.supportsData)return;const a=e.instance,o=a.portalItem;if(!o)return;let n=null;try{n=await o.fetchData("json",r)}catch(s){}if(D(a)){let e=null;const r=await x(o,n,t);if((n?.layers||n?.tables)&&r>0){if(null==a.layerId){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.instanceTypeToLayerType)(a.type),t=e?(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.getSublayersByLayerType)(n,e)[0]:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.getFirstLayerOrTable)(n);t&&(a.layerId=t.id)}e=C(n,a),"OrientedImageryLayer"===e?.layerType&&"oriented-imagery"===a.type&&a.supportedSourceTypes.add("Feature Layer"),e&&null!=n.showLegend&&(e.showLegend=n.showLegend)}return r>1&&"sublayerTitleMode"in a&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),e}return n}async function x(e,r,a){if(r?.layers&&r?.tables)return (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.getNumLayersAndTables)(r);const o=(0,_layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_1__.parse)(e.url);if(!o)return 1;const n=await a.fetchServiceMetadata(o.url.path,{customParameters:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.getFirstLayerOrTable)(r)?.customParameters}).catch((()=>null));return(r?.layers?.length??n?.layers?.length??0)+(r?.tables?.length??n?.tables?.length??0)}function C(e,t){const{layerId:r}=t,a=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return a&&G(a,t)?a:null}function D(e){return"stream"!==e.type&&"layerId"in e}function G(e,t){const r="layerType"in e&&e.layerType,{type:a}=t;return!("feature"===a&&r&&"ArcGISFeatureLayer"!==e.layerType||"catalog"===a&&!r||"oriented-imagery"===a&&!r||"subtype-group"===a&&!r)}async function k(e,t){const{layersJSON:a}=await (0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__.fetchFeatureService)(e,t);if(!a)return null;const o=[...a.layers,...a.tables];return e=>o.find((t=>t.id===e.id))}async function E(e,t){const{layers:r}=e;if(!r?.length)return;const a=new Set,o=[];for(const{layerType:i}of r){const e=i??"ArcGISFeatureLayer";if(a.has(e))continue;a.add(e);const r=t[(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_8__.layerTypeToLayerModuleType)(e)];o.push(r())}const n=await Promise.all(o),s=new Map;return Array.from(a).forEach(((e,t)=>{s.set(e,n[t])})),({layerType:e})=>{const t=e??"ArcGISFeatureLayer";return s.get(t)}}


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/loadUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/loadUtils.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSublayerData: function() { return /* binding */ t; },
/* harmony export */   getFirstLayerOrTable: function() { return /* binding */ l; },
/* harmony export */   getLayerOrTable: function() { return /* binding */ s; },
/* harmony export */   getNumLayersAndTables: function() { return /* binding */ u; },
/* harmony export */   getSublayersByLayerType: function() { return /* binding */ n; },
/* harmony export */   instanceTypeToLayerType: function() { return /* binding */ c; },
/* harmony export */   layerTypeToLayerModuleType: function() { return /* binding */ i; },
/* harmony export */   populateSceneServiceItemData: function() { return /* binding */ o; },
/* harmony export */   preprocessFSItemData: function() { return /* binding */ a; }
/* harmony export */ });
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layers/support/associatedFeatureServiceUtils.js */ "./node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js");
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layers/support/fetchService.js */ "./node_modules/@arcgis/core/layers/support/fetchService.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
function t(e){const t={id:e.id,name:e.name},a=(0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_1__.getLayerModuleType)(e.type);return"FeatureLayer"!==a&&(t.layerType=a),t}async function a(e,r,a){if(null==e?.layers||null==e?.tables){const s=await a.fetchServiceMetadata(r,{customParameters:l(e)?.customParameters});(e=e||{}).layers=e.layers||s?.layers?.map(t),e.tables=e.tables||s?.tables?.map(t)}return e}function l(e){if(!e)return null;const{layers:r,tables:t}=e;return r?.length?r[0]:t?.length?t[0]:null}function s(e,r){if(null==r)return null;return[...e.layers||[],...e.tables||[]].find((e=>e.id===r))}function n(e,r){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?e===r:"ArcGISFeatureLayer"===r))}function u(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function c(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function i(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function o(r,a,s){if(!r?.url)return a??{};if(a??={},!a.layers){const e=await s.fetchServiceMetadata(r.url);a.layers=e.layers?.map(t)}const{serverUrl:n,portalItem:u}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__.findAssociatedFeatureService)(r.url,{sceneLayerItem:r,customParameters:l(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&u){const e=await u.fetchData().catch((()=>null));if(e?.tables)a.tables=e.tables.map(t);else{const r=await s.fetchServiceMetadata(n,{customParameters:l(e)?.customParameters}).catch((()=>null));a.tables=r?.tables?.map(t)}}if(a.tables)for(const e of a.tables)e.url=`${n}/${e.id}`;return a}


/***/ }),

/***/ "./node_modules/@arcgis/core/portal/support/portalLayers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalLayers.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromItem: function() { return /* binding */ p; },
/* harmony export */   selectLayerClassPath: function() { return /* binding */ L; }
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layers/support/associatedFeatureServiceUtils.js */ "./node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js");
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layers/support/fetchService.js */ "./node_modules/@arcgis/core/layers/support/fetchService.js");
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/support/LayerLoadContext.js */ "./node_modules/@arcgis/core/layers/support/LayerLoadContext.js");
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/support/layerUtils.js */ "./node_modules/@arcgis/core/layers/support/layerUtils.js");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js");
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PortalItem.js */ "./node_modules/@arcgis/core/portal/PortalItem.js");
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadUtils.js */ "./node_modules/@arcgis/core/portal/support/loadUtils.js");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portalItemUtils.js */ "./node_modules/@arcgis/core/portal/support/portalItemUtils.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function p(e){let{portalItem:a}=e;!a||a instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]||(a=new _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"](a));const r=await d(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function d(e){await e.load();const a=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__.LayerLoadContext;return w(await L(e,a))}async function L(a,r){switch(a.type){case"3DTiles Service":return j();case"CSV":return C();case"Feature Collection":return v(a);case"Feature Service":return S(a,r);case"Feed":return U();case"GeoJson":return T();case"Group Layer":return V();case"Image Service":return I(a,r);case"KML":return G();case"Knowledge Graph Layer":return P();case"Map Service":return N(a,r);case"Media Layer":return W();case"Scene Service":return h(a,r);case"Stream Service":return M();case"Vector Tile Service":return g();case"WFS":return F();case"WMS":return b();case"WMTS":return K();default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type})}}async function w(e){const a=e.className,r=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__.layerLookupMap[a];return{constructor:await r(),properties:e.properties}}async function N(e,a){return await x(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function S(e,a){const r=await D(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}async function h(e,r){const t=await D(e,r,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__.findAssociatedFeatureService)(e.url,{sceneLayerItem:e}),s=await r.fetchServiceMetadata(t);return s?.tables??[]}catch{return[]}}));if("object"==typeof t){const a={};let c;if(null!=t.id?(a.layerId=t.id,c=`${e.url}/layers/${t.id}`):c=e.url,e.typeKeywords?.length)for(const r of Object.keys(_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.sceneServiceLayerTypeToClassName))if(e.typeKeywords.includes(r))return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.sceneServiceLayerTypeToClassName[r]};const n=await r.fetchServiceMetadata(c,{customParameters:await r.fetchCustomParameters(e,(e=>(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getFirstLayerOrTable)(e)?.customParameters))});return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__.sceneServiceLayerTypeToClassName[n?.layerType]||"SceneLayer",properties:a}}if(!1===t){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function v(e){await e.load();const a=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.hasTypeKeyword)(e,"Map Notes"),r=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.hasTypeKeyword)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__.hasTypeKeyword)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNumLayersAndTables)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function I(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),s=t?.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),n=c.cacheType?.toLowerCase(),o=c.capabilities?.toLowerCase().includes("tilesonly"),i=c.tileInfo?.format?.toLowerCase()??"",u=null==n&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return"map"===n||u||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function M(){return{className:"StreamLayer"}}function g(){return{className:"VectorTileLayer"}}function T(){return{className:"GeoJSONLayer"}}function j(){return{className:"IntegratedMesh3DTilesLayer"}}function C(){return{className:"CSVLayer"}}function G(){return{className:"KMLLayer"}}function P(){return{className:"KnowledgeGraphLayer"}}function F(){return{className:"WFSLayer"}}function b(){return{className:"WMSLayer"}}function K(){return{className:"WMTSLayer"}}function U(){return{className:"StreamLayer"}}function V(){return{className:"GroupLayer"}}function W(){return{className:"MediaLayer"}}async function x(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function D(e,a,t){const{url:s,type:c}=e,n="Feature Service"===c;if(!s)return{};if(/\/\d+$/.test(s)){if(n){const t=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,(e=>(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getFirstLayerOrTable)(e)?.customParameters))});return{id:t.id,className:(0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__.getLayerModuleType)(t.type),sourceJSON:t}}return{}}await e.load();let f=await a.fetchItemData(e);if(n){const e=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.preprocessFSItemData)(f,s,a),r=J(e);if("object"==typeof r){const a=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getLayerOrTable)(e,r.id);r.className=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.layerTypeToLayerModuleType)(a?.layerType)}return r}"Scene Service"===c&&(f=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.populateSceneServiceItemData)(e,f,a));if((0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNumLayersAndTables)(f)>0)return J(f);const p=await a.fetchServiceMetadata(s);return t&&(p.tables=await t()),J(p)}function J(e){return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getNumLayersAndTables)(e)&&{id:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__.getFirstLayerOrTable)(e)?.id}}


/***/ }),

/***/ "./node_modules/@arcgis/core/renderers/support/styleUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/styleUtils.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStyleRenderer: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "./node_modules/@arcgis/core/core/asyncUtils.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Warning.js */ "./node_modules/@arcgis/core/core/Warning.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__.result)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__.throwIfAborted)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__["default"]("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ "./node_modules/@arcgis/core/support/requestPresets.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestPresets.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchArcGISServiceJSON: function() { return /* binding */ t; }
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
async function t(t,o){const{data:r}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"json",query:{f:"json",...o?.customParameters,token:o?.apiKey}});return r}


/***/ })

}]);
//# sourceMappingURL=portal-support-layersLoader.js.map