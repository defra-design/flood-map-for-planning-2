"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[1536],{35106:function(e,a,r){r.d(a,{v:function(){return n}});var t=r(36070);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},56172:function(e,a,r){r.d(a,{L:function(){return u}});var t=r(7156),n=r(93040),i=r(39819),s=r(60539),c=r(93389),o=r(51432),l=r(43173);async function u(e,a){const r=(0,c.qg)(e);if(!r)throw new i.A("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new l.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,s.QP)(e)}return null}(e);null!=i&&(r.portal=new o.A({url:i}));try{return await r.load({signal:e.signal})}catch(e){return(0,s.QP)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new l.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,s.QP)(e),null}}(u);if(!f?.url)throw new i.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=f;const p=await d(f.url,u);return p.portalItem=f,p}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,c.qg)(e);if(!r)throw new i.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const o=y(a),l=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(l?.layers?.[0]||l?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},f=d("anonymous").catch((()=>d("no-prompt"))),[p,L]=await Promise.all([f,o]),m=L?.layers,w=p.data&&p.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(m)){for(let e=0;e<Math.min(m.length,w.length);e++)if(m[e].id===s)return{serverUrl:t,layerId:w[e].id}}else if(null!=s&&s<w.length)return{serverUrl:t,layerId:w[s].id};throw new Error("could not find matching associated sublayer")}},88921:function(e,a,r){r.d(a,{K:function(){return d},Q:function(){return i}});var t=r(36070);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:r,...n}=a||{},i=r?await r.fetchServiceMetadata(e,n):await(0,t.V)(e,n);y(i),o(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const c=`${e}/layers`,l=r?await r.fetchServiceMetadata(c,n):await(0,t.V)(c,n);return y(l),o(l),s.layersJSON={layers:l.layers,tables:l.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function o(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(c)}function l(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(l),e.tables?.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},80669:function(e,a,r){r.d(a,{N:function(){return M},populateOperationalLayers:function(){return u}});var t=r(78879),n=(r(58941),r(35106)),i=r(74712),s=r(43173);function c(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var o=r(70138),l=r(52374);async function u(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await M(t,a,r):v(a)?function(e,a,r){a.itemId&&(e.portalItem=new s.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;G(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):b(a)&&await async function(e,a,r){const t=i.S.FeatureLayer,n=await t(),s=a.featureCollection,c=s?.showLegend,o=s?.layers?.map(((t,i)=>{const s=new n;s.read(t,r);const o={...r,ignoreDefaults:!0};return G(s,e,a,i,o),null!=c&&s.read({showLegend:c},o),s}));e.layers.addMany(o??[])}(t,a,r.context)),await(0,l.L)(t,r.context),t}(await I(e,a),e,a)}(e,r))),n=await Promise.allSettled(t);for(const a of n)"rejected"===a.status||a.value&&e.add(a.value)}const y={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},f={ArcGISFeatureLayer:"FeatureLayer"},p={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},L={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},w={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={...L,LinkChartLayer:"LinkChartLayer"},h={...m},g={...w};async function I(e,a){const r=a.context,t=T(r);let l=e.layerType||e.type;!l&&a?.defaultLayerType&&(l=a.defaultLayerType);const u=t[l];let y=u?i.S[u]:i.S.UnknownLayer;if(v(e)){const a=r?.portal;if(e.itemId){const r=new s.default({id:e.itemId,portal:a});await r.load();const t=(await(0,o.n)(r,new n.v)).className||"UnknownLayer";y=i.S[t]}}else"ArcGISFeatureLayer"===l?function(e){return c(e,"notes")}(e)||function(e){return c(e,"markup")}(e)?y=i.S.MapNotesLayer:function(e){return c(e,"route")}(e)?y=i.S.RouteLayer:b(e)&&(y=i.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?y=i.S.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo?.version&&(y=i.S.UnsupportedLayer);return y()}function b(e){return"ArcGISFeatureLayer"===e.layerType&&!v(e)&&(e.featureCollection?.layers?.length??0)>1}function v(e){return"Feature Collection"===e.type}function T(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=p;break;case"ground":a=d;break;case"tables":a=f;break;default:a=y}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=g;break;case"tables":a=h;break;default:a=S}break;default:switch(e.layerContainerType){case"basemap":a=w;break;case"tables":a=m;break;default:a=L}}return a}async function M(e,a,r){const n=new t.A,i=u(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(a){e.destroy();for(const e of n)e.destroy();throw a}}catch(e){throw e}}function G(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},74712:function(e,a,r){r.d(a,{S:function(){return t}});const t={BingMapsLayer:async()=>(await r.e(4695).then(r.bind(r,94279))).default,BuildingSceneLayer:async()=>(await r.e(3236).then(r.bind(r,15158))).default,CSVLayer:async()=>(await r.e(8368).then(r.bind(r,64209))).default,CatalogLayer:async()=>(await r.e(4743).then(r.bind(r,32934))).default,DimensionLayer:async()=>(await r.e(4916).then(r.bind(r,98242))).default,ElevationLayer:async()=>(await r.e(4579).then(r.bind(r,52035))).default,FeatureLayer:async()=>(await r.e(2938).then(r.bind(r,57534))).default,GeoJSONLayer:async()=>(await r.e(5147).then(r.bind(r,71930))).default,GeoRSSLayer:async()=>(await r.e(4281).then(r.bind(r,7744))).default,GroupLayer:async()=>(await r.e(9883).then(r.bind(r,1778))).default,ImageryLayer:async()=>(await r.e(5732).then(r.bind(r,10734))).default,ImageryTileLayer:async()=>(await r.e(2072).then(r.bind(r,53286))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(4676).then(r.bind(r,86115))).default,IntegratedMeshLayer:async()=>(await r.e(3854).then(r.bind(r,12153))).default,KMLLayer:async()=>(await r.e(2028).then(r.bind(r,34019))).default,KnowledgeGraphLayer:async()=>(await r.e(9974).then(r.bind(r,56749))).default,LineOfSightLayer:async()=>(await r.e(9920).then(r.bind(r,47738))).default,LinkChartLayer:async()=>(await r.e(1232).then(r.bind(r,26438))).default,MapImageLayer:async()=>(await r.e(4241).then(r.bind(r,57216))).default,MapNotesLayer:async()=>(await r.e(3449).then(r.bind(r,61635))).default,MediaLayer:async()=>(await r.e(4692).then(r.bind(r,96392))).default,OGCFeatureLayer:async()=>(await r.e(705).then(r.bind(r,23819))).default,OpenStreetMapLayer:async()=>(await r.e(8363).then(r.bind(r,33578))).default,OrientedImageryLayer:async()=>(await r.e(2212).then(r.bind(r,64512))).default,PointCloudLayer:async()=>(await r.e(2237).then(r.bind(r,40588))).default,RouteLayer:async()=>(await r.e(9033).then(r.bind(r,10842))).default,SceneLayer:async()=>(await r.e(5092).then(r.bind(r,24046))).default,StreamLayer:async()=>(await r.e(4850).then(r.bind(r,53323))).default,SubtypeGroupLayer:async()=>(await r.e(243).then(r.bind(r,28816))).default,TileLayer:async()=>(await r.e(6966).then(r.bind(r,26685))).default,UnknownLayer:async()=>(await r.e(3398).then(r.bind(r,67565))).default,UnsupportedLayer:async()=>(await r.e(8495).then(r.bind(r,28438))).default,VectorTileLayer:async()=>(await r.e(4401).then(r.bind(r,47940))).default,VideoLayer:async()=>(await r.e(987).then(r.bind(r,78789))).default,ViewshedLayer:async()=>(await r.e(8117).then(r.bind(r,36313))).default,VoxelLayer:async()=>(await r.e(888).then(r.bind(r,8669))).default,WFSLayer:async()=>(await r.e(582).then(r.bind(r,82961))).default,WMSLayer:async()=>(await r.e(2193).then(r.bind(r,28287))).default,WMTSLayer:async()=>(await r.e(4547).then(r.bind(r,66087))).default,WebTileLayer:async()=>(await r.e(2730).then(r.bind(r,55561))).default}},28993:function(e,a,r){r.d(a,{m:function(){return s},v:function(){return i}});var t=r(90683),n=r(51432);function i(e,a){return{...c(e,a),readResourcePaths:[]}}function s(e,a,r){const n=(0,t.An)(e.itemUrl);return{...c(e,a),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function c(e,a){return{origin:a,url:(0,t.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},58615:function(e,a,r){r.d(a,{load:function(){return L}});var t=r(39819),n=r(93389),i=r(88921),s=r(35106),c=r(80669),o=r(74712),l=r(51432),u=r(28993),y=r(85177),d=r(29606),f=r(52374),p=r(36070);async function L(e,a){const r=e.instance.portalItem;if(r?.id)return await r.load(a),function(e){const a=e.instance.portalItem;if(!a?.type||!e.supportedTypes.includes(a.type))throw new t.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a?.type,expectedType:e.supportedTypes.join(", ")})}(e),e.validateItem&&e.validateItem(r),async function(e,a){const r=e.instance,n=r.portalItem;if(!n)return;const{url:o,title:l}=n,L=(0,u.v)(n,"portal-item");if("group"===r.type)return async function(e,a,r){const n=e.portalItem;if(!e.sourceIsPortalItem)return;const{title:o,type:l}=n;if("Group Layer"===l){if(!(0,d.Y)(n,"Map"))throw new t.A("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");return async function(e){const a=e.portalItem,r=await a.fetchData("json");if(!r)return;const t=(0,u.v)(a,"web-map");e.read(r,t),await(0,c.N)(e,r,{context:t}),e.resourceReferences={portalItem:a,paths:t.readResourcePaths??[]}}(e)}return e.read({title:o},a),async function(e,a){let r;const{portalItem:n}=e;if(!n)return;const c=n.type,o=a.layerModuleTypeMap;switch(c){case"Feature Service":case"Feature Collection":r=o.FeatureLayer;break;case"Stream Service":r=o.StreamLayer;break;case"Scene Service":r=o.SceneLayer;break;default:throw new t.A("portal:unsupported-item-type-as-group",`The item type '${c}' is not supported as a 'IGroupLayer'`)}const l=new s.v;let[u,d]=await Promise.all([r(),S(a,l)]),f=()=>u;if("Feature Service"===c){const a=(0,y.pJ)(d)?.customParameters;d=n.url?await(0,y.bO)(d,n.url,l):{},f=await async function(e,a){const{layers:r}=e;if(!r?.length)return;const t=new Set,n=[];for(const{layerType:e}of r){const r=e??"ArcGISFeatureLayer";if(t.has(r))continue;t.add(r);const i=a[(0,y.K8)(r)];n.push(i())}const i=await Promise.all(n),s=new Map;return Array.from(t).forEach(((e,a)=>{s.set(e,i[a])})),({layerType:e})=>{const a=e??"ArcGISFeatureLayer";return s.get(a)}}(d,o)||f;const r=await async function(e,a){const{layersJSON:r}=await(0,i.Q)(e,a);if(!r)return null;const t=[...r.layers,...r.tables];return e=>t.find((a=>a.id===e.id))}(n.url,{customParameters:a,loadContext:l});return await m(e,f,d,r)}return"Scene Service"===c&&n.url&&(d=await(0,y.nu)(n,d,l)),(0,y.XH)(d)>0?await m(e,f,d):await async function(e,a){const{portalItem:r}=e;if(!r?.url)return;const t=await(0,p.V)(r.url);t&&m(e,a,{layers:t.layers?.map(y._r),tables:t.tables?.map(y._r)})}(e,f)}(e,r)}(r,L,e);o&&"media"!==r.type&&r.read({url:o},L);const w=new s.v,h=await S(e,w,a);return h&&r.read(h,L),r.resourceReferences={portalItem:n,paths:L.readResourcePaths??[]},"subtype-group"!==r.type&&r.read({title:l},L),(0,f.L)(r,L)}(e,a)}async function m(e,a,r,t){let n=r.layers||[];const i=r.tables||[];if("Feature Collection"===e.portalItem?.type?(n.forEach(((e,a)=>{e.id=a,"Table"===e?.layerDefinition?.type&&i.push(e)})),n=n.filter((e=>"Table"!==e?.layerDefinition?.type))):(n.reverse(),i.reverse()),n.forEach((n=>{const i=t?.(n);if(i||!t){const t=w(e,a(n),r,n,i);e.add(t)}})),i.length){const a=await o.S.FeatureLayer();i.forEach((n=>{const i=t?.(n);if(i||!t){const t=w(e,a,r,n,i);e.tables.add(t)}}))}}function w(e,a,r,t,n){const i=e.portalItem,s={portalItem:i.clone(),layerId:t.id};null!=t.url&&(s.url=t.url);const c=new a(s);if("sourceJSON"in c&&(c.sourceJSON=n),"subtype-group"!==c.type&&"catalog"!==c.type&&(c.sublayerTitleMode="service-name"),"Feature Collection"===i.type){const e={origin:"portal-item",portal:i.portal||l.A.getDefault()};c.read(t,e);const a=r.showLegend;null!=a&&c.read({showLegend:a},e)}return c}async function S(e,a,r){if(!1===e.supportsData)return;const t=e.instance,i=t.portalItem;if(!i)return;let s=null;try{s=await i.fetchData("json",r)}catch(e){}if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let e=null;const r=await async function(e,a,r){if(a?.layers&&a?.tables)return(0,y.XH)(a);const t=(0,n.qg)(e.url);if(!t)return 1;const i=await r.fetchServiceMetadata(t.url.path,{customParameters:(0,y.pJ)(a)?.customParameters}).catch((()=>null));return(a?.layers?.length??i?.layers?.length??0)+(a?.tables?.length??i?.tables?.length??0)}(i,s,a);if((s?.layers||s?.tables)&&r>0){if(null==t.layerId){const e=(0,y.iK)(t.type),a=e?(0,y.Ju)(s,e)[0]:(0,y.pJ)(s);a&&(t.layerId=a.id)}e=function(e,a){const{layerId:r}=a,t=e.layers?.find((e=>e.id===r))||e.tables?.find((e=>e.id===r));return t&&function(e,a){const r="layerType"in e&&e.layerType,{type:t}=a;return!("feature"===t&&r&&"ArcGISFeatureLayer"!==e.layerType||"catalog"===t&&!r||"oriented-imagery"===t&&!r||"subtype-group"===t&&!r)}(t,a)?t:null}(s,t),"OrientedImageryLayer"===e?.layerType&&"oriented-imagery"===t.type&&t.supportedSourceTypes.add("Feature Layer"),e&&null!=s.showLegend&&(e.showLegend=s.showLegend)}return r>1&&"sublayerTitleMode"in t&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),e}return s}},85177:function(e,a,r){r.d(a,{Ju:function(){return l},K8:function(){return d},XH:function(){return u},_r:function(){return i},bO:function(){return s},iK:function(){return y},nu:function(){return f},pJ:function(){return c},rc:function(){return o}});var t=r(56172),n=r(88921);function i(e){const a={id:e.id,name:e.name},r=(0,n.K)(e.type);return"FeatureLayer"!==r&&(a.layerType=r),a}async function s(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(i),e.tables=e.tables||t?.tables?.map(i)}return e}function c(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function o(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function l(e,a){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?e===a:"ArcGISFeatureLayer"===a))}function u(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function y(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function f(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(i)}const{serverUrl:n,portalItem:s}=await(0,t.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData().catch((()=>null));if(e?.tables)a.tables=e.tables.map(i);else{const t=await r.fetchServiceMetadata(n,{customParameters:c(e)?.customParameters}).catch((()=>null));a.tables=t?.tables?.map(i)}}if(a.tables)for(const e of a.tables)e.url=`${n}/${e.id}`;return a}},70138:function(e,a,r){r.d(a,{fromItem:function(){return d},n:function(){return f}});var t=r(39819),n=r(56172),i=r(88921),s=r(35106),c=r(11432),o=r(74712),l=r(43173),u=r(85177),y=r(29606);async function d(e){let{portalItem:a}=e;!a||a instanceof l.default||(a=new l.default(a));const r=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,r=o.S[a];return{constructor:await r(),properties:e.properties}}(await f(e,a))}(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function f(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,y.Y)(e,"Map Notes"),r=(0,y.Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,y.Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,u.XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await p(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=i.cacheType?.toLowerCase(),c=i.capabilities?.toLowerCase().includes("tilesonly"),o=i.tileInfo?.format?.toLowerCase()??"",l=null==s&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(o);return"map"===s||l||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await p(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const i=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,u.pJ)(e)?.customParameters))});return{className:c.XX[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function p(e,a,r){const{url:t,type:n}=e,s="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(s){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>(0,u.pJ)(e)?.customParameters))});return{id:r.id,className:(0,i.K)(r.type),sourceJSON:r}}return{}}await e.load();let c=await a.fetchItemData(e);if(s){const e=await(0,u.bO)(c,t,a),r=L(e);if("object"==typeof r){const a=(0,u.rc)(e,r.id);r.className=(0,u.K8)(a?.layerType)}return r}if("Scene Service"===n&&(c=await(0,u.nu)(e,c,a)),(0,u.XH)(c)>0)return L(c);const o=await a.fetchServiceMetadata(t);return r&&(o.tables=await r()),L(o)}function L(e){return 1===(0,u.XH)(e)&&{id:(0,u.pJ)(e)?.id}}},52374:function(e,a,r){r.d(a,{L:function(){return s}});var t=r(77472),n=r(60539),i=r(89001);async function s(e,a,r){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const c=await(0,t.Ke)(s.populateFromStyle());if((0,n.Te)(r),!1===c.ok){const r=c.error;a?.messages&&a.messages.push(new i.A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a?.origin)}}}},36070:function(e,a,r){r.d(a,{V:function(){return n}});var t=r(93040);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);
//# sourceMappingURL=portal-support-layersLoader.js.map