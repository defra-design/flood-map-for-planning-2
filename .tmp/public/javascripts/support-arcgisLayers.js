"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[3128,4292],{93389:function(e,t,r){r.d(t,{Fi:function(){return u},HZ:function(){return f},Jf:function(){return g},LS:function(){return w},Wo:function(){return m},bd:function(){return v},cr:function(){return y},iz:function(){return d},qg:function(){return p},yG:function(){return h}});var a=r(90683),i=r(60534);const n={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",knowledgegraphserver:"KnowledgeGraphServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer","3dtilesserver":"3DTilesServer",videoserver:"VideoServer"},s=Object.values(n),o=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${s.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),c=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function u(e){return o.test(e)}function p(e){if(null==e)return null;const t=(0,a.An)(e),r=t?.path.match(o)||t?.path.match(l);if(!r)return null;const[,i,s,c,u]=r,p=s.indexOf("/");return{title:y(-1!==p?s.slice(p+1):s),serverType:n[c.toLowerCase()],sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:i}}}function d(e){const t=(0,a.An)(e).path.match(c);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function y(e){return(e=e.replaceAll(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function h(e,t){const r=[];if(e){const t=p(e);null!=t&&t.title&&r.push(t.title)}if(t){const e=y(t);r.push(e)}if(2===r.length){if(r[0].toLowerCase().includes(r[1].toLowerCase()))return r[0];if(r[1].toLowerCase().includes(r[0].toLowerCase()))return r[1]}return r.join(" - ")}function m(e){let t=(0,a.$z)(e,!0);return!!t&&(t=t.toLowerCase(),t.endsWith(".arcgis.com")&&(t.startsWith("services")||t.startsWith("tiles")||t.startsWith("features")))}function g(e,t){return e?(0,a.UC)((0,a.zi)(e,t)):e}function f(e){let{url:t}=e;if(!t)return{url:t};t=(0,a.zi)(t,e.logger);const r=(0,a.An)(t),i=p(r.path);let n;if(null!=i)null!=i.sublayer&&null==e.layer.layerId&&(n=i.sublayer),t=i.url.path;else if(e.nonStandardUrlAllowed){const e=d(r.path);null!=e&&(t=e.serviceUrl,n=e.sublayerId)}return{url:(0,a.UC)(t),layerId:n}}function w(e,t,r,n,s){(0,i.w)(t,n,"url",s),n.url&&null!=e.layerId&&(n.url=(0,a.fj)(n.url,r,e.layerId.toString()))}function v(e){if(!e)return!1;const t=e.toLowerCase(),r=t.includes("/services/"),a=t.includes("/mapserver/wmsserver"),i=t.includes("/imageserver/wmsserver"),n=t.includes("/wmsserver");return r&&(a||i||n)}},51513:function(e,t,r){r.r(t),r.d(t,{fromUrl:function(){return d}});var a=r(39819),i=r(90683),n=r(93389),s=r(56172),o=r(88921),l=r(11432),c=r(74712),u=r(36070);const p={FeatureLayer:!0,SceneLayer:!0};async function d(e){const{properties:t,url:a}=e,i={...t,url:a},n=await m(a,t?.customParameters),{Constructor:s,layerId:o,sourceJSON:l,parsedUrl:c,layers:u,tables:p}=n;if(u.length+p.length===0)return null!=o&&(i.layerId=o),null!=l&&(i.sourceJSON=l),new s(i);const d=new(0,(await r.e(9883).then(r.bind(r,1778))).default)({title:c.title});return await async function(e,t,r){const a=t.sublayerConstructorProvider;for(const{id:i,serverUrl:n}of t.layers){const s=y(t.sublayerInfos,i),o=h(n,i,s,(s&&a?.(s))??t.Constructor,r);e.add(o)}if(t.tables.length){const a=await f("FeatureLayer");t.tables.forEach((({id:i,serverUrl:n})=>{const s=h(n,i,y(t.tableInfos,i),a,r);e.tables.add(s)}))}}(d,n,i),d}function y(e,t){return e?e.find((({id:e})=>e===t)):null}function h(e,t,r,a,i){const n={...i,layerId:t};return null!=e&&(n.url=e),null!=r&&(n.sourceJSON=r),"sublayerTitleMode"in a.prototype&&(n.sublayerTitleMode="service-name"),new a(n)}async function m(e,t){let r=(0,n.qg)(e);if(null==r&&(r=await async function(e,t){const r=await(0,u.V)(e,{customParameters:t});let a=null,s=null;const o=r.type;if("Feature Layer"===o||"Table"===o?(a="FeatureServer",s=r.id??null):"indexedVector"===o?a="VectorTileServer":r.hasOwnProperty("mapName")?a="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?a="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":r.hasOwnProperty("streamUrls")?a="StreamServer":g(r)?(a="SceneServer",s=r.id):r.hasOwnProperty("layers")&&g(r.layers?.[0])&&(a="SceneServer"),!a)return null;const l=null!=s?(0,n.iz)(e):null;return{title:null!=l&&r.name||(0,i.e7)(e),serverType:a,sublayer:s,url:{path:null!=l?l.serviceUrl:(0,i.An)(e).path}}}(e,t)),null==r)throw new a.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:c,sublayer:d}=r;let y;const h={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},m="FeatureServer"===c,w="SceneServer"===c,v={parsedUrl:r,Constructor:null,layerId:m||w?d??void 0:void 0,layers:[],tables:[]};switch(c){case"MapServer":if(null!=d){const{type:r}=await(0,u.V)(e,{customParameters:t});switch(y="FeatureLayer",r){case"Catalog Layer":y="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new a.A("arcgis-layers:unsupported",`fromUrl() not supported for "${r}" layers`)}}else y=await async function(e,t){return(await(0,u.V)(e,{customParameters:t})).tileInfo}(e,t)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,u.V)(e,{customParameters:t}),{tileInfo:a,cacheType:i}=r;y=a?"LERC"!==a?.format?.toUpperCase()||i&&"elevation"!==i.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,u.V)(r.url.path,{customParameters:t});if(y="SceneLayer",e){const t=e?.layers;if("Voxel"===e?.layerType)y="VoxelLayer";else if(t?.length){const e=t[0]?.layerType;null!=e&&null!=l.XX[e]&&(y=l.XX[e])}}break}case"3DTilesServer":throw new a.A("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(y="FeatureLayer",null!=d){const r=await(0,u.V)(e,{customParameters:t});v.sourceJSON=r,y=(0,o.K)(r.type)}break;default:y=h[c]}if(p[y]&&null==d){const r=await async function(e,t,r){let a,i,n=!1;switch(t){case"FeatureServer":{const t=await(0,o.Q)(e,{customParameters:r});n=!!t.layersJSON,a=t.layersJSON||t.serviceJSON;break}case"SceneServer":{const t=await async function(e,t){const r=await(0,u.V)(e,{customParameters:t}),a=r.layers?.[0];if(!a)return{serviceInfo:r};try{const{serverUrl:a}=await(0,s.L)(e),i=await(0,u.V)(a,{customParameters:t}).catch((()=>null));return i&&(r.tables=i.tables),{serviceInfo:r,tableServerUrl:a}}catch{return{serviceInfo:r}}}(e,r);a=t.serviceInfo,i=t.tableServerUrl;break}default:a=await(0,u.V)(e,{customParameters:r})}const l=a?.layers,c=a?.tables;return{layers:l?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:i,id:e.id}))).reverse()||[],layerInfos:n?l:[],tableInfos:n?c:[]}}(e,c,t);if(m&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,m&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){if(!e.length)return;const t=new Set,r=[];for(const{type:a}of e)t.has(a)||(t.add(a),r.push(f((0,o.K)(a))));const a=await Promise.all(r),i=new Map;return Array.from(t).forEach(((e,t)=>{i.set(e,a[t])})),e=>i.get(e.type)}(r.layerInfos));else if(m||w){const e=r.layerInfos?.[0]??r.tableInfos?.[0];if(v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,m){const t=e?.type;y=(0,o.K)(t)}}}return v.Constructor=await f(y),v}function g(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function f(e){return(0,c.S[e])()}},56172:function(e,t,r){r.d(t,{L:function(){return u}});var a=r(7156),i=r(93040),n=r(39819),s=r(60539),o=r(93389),l=r(51432),c=r(43173);async function u(e,t){const r=(0,o.qg)(e);if(!r)throw new n.A("invalid-url","Invalid scene service url");const u={...t,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const t=(await p(e)).serviceItemId;if(!t)return null;const r=new c.default({id:t,apiKey:e.apiKey}),n=await async function(e){const t=a.id?.findServerInfo(e.sceneServerUrl);if(t?.owningSystemUrl)return t.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const t=(await(0,i.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(t)return t}catch(e){(0,s.QP)(e)}return null}(e);null!=n&&(r.portal=new l.A({url:n}));try{return await r.load({signal:e.signal})}catch(e){return(0,s.QP)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const y=await async function({sceneLayerItem:e,signal:t}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:t})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const a=new c.default({portal:r.portal,id:r.id});return await a.load(),a}catch(e){return(0,s.QP)(e),null}}(u);if(!y?.url)throw new n.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=y;const h=await d(y.url,u);return h.portalItem=y,h}async function p(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,i.A)(e.sceneServerUrl,t);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,t){const r=(0,o.qg)(e);if(!r)throw new n.A("invalid-feature-service-url","Invalid feature service url");const a=r.url.path,s=t.layerId;if(null==s)return{serverUrl:a};const l=p(t),c=t.featureServiceItem?await t.featureServiceItem.fetchData("json"):null,u=(c?.layers?.[0]||c?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...u},responseType:"json",authMode:e,signal:t.signal};return(0,i.A)(a,r)},y=d("anonymous").catch((()=>d("no-prompt"))),[h,m]=await Promise.all([y,l]),g=m?.layers,f=h.data&&h.data.layers;if(!Array.isArray(f))throw new Error("expected layers array");if(Array.isArray(g)){for(let e=0;e<Math.min(g.length,f.length);e++)if(g[e].id===s)return{serverUrl:a,layerId:f[e].id}}else if(null!=s&&s<f.length)return{serverUrl:a,layerId:f[s].id};throw new Error("could not find matching associated sublayer")}},88921:function(e,t,r){r.d(t,{K:function(){return d},Q:function(){return n}});var a=r(36070);const i=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function n(e,t){const{loadContext:r,...i}=t||{},n=r?await r.fetchServiceMetadata(e,i):await(0,a.V)(e,i);p(n),l(n);const s={serviceJSON:n};if((n.currentVersion??0)<10.5)return s;const o=`${e}/layers`,c=r?await r.fetchServiceMetadata(o,i):await(0,a.V)(o,i);return p(c),l(c),s.layersJSON={layers:c.layers,tables:c.tables},s}function s(e){const{type:t}=e;return!!t&&i.has(t)}function o(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(o)}function c(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function p(e){e.layers?.forEach(c),e.tables?.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},74712:function(e,t,r){r.d(t,{S:function(){return a}});const a={BingMapsLayer:async()=>(await r.e(4695).then(r.bind(r,94279))).default,BuildingSceneLayer:async()=>(await r.e(3236).then(r.bind(r,15158))).default,CSVLayer:async()=>(await r.e(8368).then(r.bind(r,64209))).default,CatalogLayer:async()=>(await r.e(4743).then(r.bind(r,32934))).default,DimensionLayer:async()=>(await r.e(4916).then(r.bind(r,98242))).default,ElevationLayer:async()=>(await r.e(4579).then(r.bind(r,52035))).default,FeatureLayer:async()=>(await r.e(2938).then(r.bind(r,57534))).default,GeoJSONLayer:async()=>(await r.e(5147).then(r.bind(r,71930))).default,GeoRSSLayer:async()=>(await r.e(4281).then(r.bind(r,7744))).default,GroupLayer:async()=>(await r.e(9883).then(r.bind(r,1778))).default,ImageryLayer:async()=>(await r.e(5732).then(r.bind(r,10734))).default,ImageryTileLayer:async()=>(await r.e(2072).then(r.bind(r,53286))).default,IntegratedMesh3DTilesLayer:async()=>(await r.e(4676).then(r.bind(r,86115))).default,IntegratedMeshLayer:async()=>(await r.e(3854).then(r.bind(r,12153))).default,KMLLayer:async()=>(await r.e(2028).then(r.bind(r,34019))).default,KnowledgeGraphLayer:async()=>(await r.e(9974).then(r.bind(r,56749))).default,LineOfSightLayer:async()=>(await r.e(9920).then(r.bind(r,47738))).default,LinkChartLayer:async()=>(await r.e(1232).then(r.bind(r,26438))).default,MapImageLayer:async()=>(await r.e(4241).then(r.bind(r,57216))).default,MapNotesLayer:async()=>(await r.e(3449).then(r.bind(r,61635))).default,MediaLayer:async()=>(await r.e(4692).then(r.bind(r,96392))).default,OGCFeatureLayer:async()=>(await r.e(705).then(r.bind(r,23819))).default,OpenStreetMapLayer:async()=>(await r.e(8363).then(r.bind(r,33578))).default,OrientedImageryLayer:async()=>(await r.e(2212).then(r.bind(r,64512))).default,PointCloudLayer:async()=>(await r.e(2237).then(r.bind(r,40588))).default,RouteLayer:async()=>(await r.e(9033).then(r.bind(r,10842))).default,SceneLayer:async()=>(await r.e(5092).then(r.bind(r,24046))).default,StreamLayer:async()=>(await r.e(4850).then(r.bind(r,53323))).default,SubtypeGroupLayer:async()=>(await r.e(243).then(r.bind(r,28816))).default,TileLayer:async()=>(await r.e(6966).then(r.bind(r,26685))).default,UnknownLayer:async()=>(await r.e(3398).then(r.bind(r,67565))).default,UnsupportedLayer:async()=>(await r.e(8495).then(r.bind(r,28438))).default,VectorTileLayer:async()=>(await r.e(4401).then(r.bind(r,47940))).default,VideoLayer:async()=>(await r.e(987).then(r.bind(r,78789))).default,ViewshedLayer:async()=>(await r.e(8117).then(r.bind(r,36313))).default,VoxelLayer:async()=>(await r.e(888).then(r.bind(r,8669))).default,WFSLayer:async()=>(await r.e(582).then(r.bind(r,82961))).default,WMSLayer:async()=>(await r.e(2193).then(r.bind(r,28287))).default,WMTSLayer:async()=>(await r.e(4547).then(r.bind(r,66087))).default,WebTileLayer:async()=>(await r.e(2730).then(r.bind(r,55561))).default}},43173:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var a=r(53804),i=r(53216),n=r(39819),s=r(30905),o=r(21609),l=r(31609),c=r(90683),u=r(23502),p=r(67888),d=r(47332),y=r(65953),h=r(91484),m=r(51432),g=r(83525),f=r(40633),w=r(77560);r(13798),r(58941);let v=class extends g.A{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e?.portalItem&&e.path?{...e,path:b(e.path,e.portalItem)}:e}set path(e){null!=e&&(0,c.oP)(e)?f.A.getLogger(this).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return b(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get cdnUrl(){return this.portalItem&&this.path?`${this.portalItem.itemCdnUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const r=this.cdnUrl;if(null==r)throw new n.A("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(r,{responseType:e,query:{token:this.portalItem.apiKey,_ts:t?.cacheBust?Date.now():null},signal:t?.signal})}async update(e,t){const{addOrUpdateResources:a}=await r.e(4460).then(r.bind(r,55597));return await a(this.portalItem,[{resource:this,content:e,compress:t?.compress,access:t?.access}],"update",t),this}hasPath(){return null!=this.path}};function b(e,t){return null==e?e:(e=e.replace(/^\/+/,""),null!=t&&(0,c.oP)(e)&&(e=(0,c.V1)(e,t.itemUrl)),e?.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}(0,a._)([(0,u.MZ)()],v.prototype,"portalItem",void 0),(0,a._)([(0,u.MZ)({type:String,value:null})],v.prototype,"path",null),(0,a._)([(0,w.w)("path")],v.prototype,"_castPath",null),(0,a._)([(0,u.MZ)({type:String,readOnly:!0})],v.prototype,"url",null),(0,a._)([(0,u.MZ)({type:String,readOnly:!0})],v.prototype,"cdnUrl",null),(0,a._)([(0,u.MZ)({type:String,readOnly:!0})],v.prototype,"itemRelativeUrl",null),v=(0,a._)([(0,y.$)("esri.portal.PortalItemResource")],v);const S=v;let I=class extends g.A{constructor(e){super(e),this.created=null,this.rating=null}};(0,a._)([(0,u.MZ)()],I.prototype,"created",void 0),(0,a._)([(0,u.MZ)()],I.prototype,"rating",void 0),I=(0,a._)([(0,y.$)("esri.portal.PortalRating")],I);const L=I;var k,M=r(60534);const U=new Set(["3DTiles Service","CSV","Feature Collection","Feature Service","Feed","GeoJson","Group Layer","Image Service","KML","Map Service","Media Layer","Scene Service","Stream Service","Vector Tile Service","WFS","WMS","WMTS"]),P=new Set(["KML","GeoJson","CSV"]);let O=k=class extends((0,s.Te)(l.A)){static from(e){return(0,p.PZ)(k,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.classification=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return"Feature Service"===e||"Feature Collection"===e?r=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":"Image Service"===e?r=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===e?r="Scene Layer":"Video Service"===e?r="Video Layer":"Scene Package"===e?r="Scene Layer Package":"Stream Service"===e?r="Feature Layer":"Geoprocessing Service"===e?r=t.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geoenrichment Service"===e?r="GeoEnrichment Service":"Geocoding Service"===e?r="Locator":"Microsoft Powerpoint"===e?r="Microsoft PowerPoint":"GeoJson"===e?r="GeoJSON":"Globe Service"===e?r="Globe Layer":"Vector Tile Service"===e?r="Tile Layer":"netCDF"===e?r="NetCDF":"Map Service"===e?r=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e?.toLowerCase().includes("add in")?r=e.replaceAll(/(add in)/gi,"Add-In"):"datastore catalog service"===e?r="Big Data File Share":"Compact Tile Package"===e?r="Tile Package (tpkx)":"Raster function template"===e?r="Raster Function Template":"OGCFeatureServer"===e?r="OGC Feature Layer":"web mapping application"===e&&t.includes("configurableApp")?r="Instant App":"Insights Page"===e?r="Insights Report":"Excalibur Imagery Project"===e?r="Excalibur Project":"3DTiles Service"===e?r="3D tiles layer":"3DTiles Package"===e&&(r="3D tiles package"),r}readExtent(e){return e&&e.length?new h.default(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type?.toLowerCase()||"",t=this.typeKeywords||[];let r,a=!1,n=!1,s=!1,o=!1,l=!1,c=!1,u=!1,p=!1;return e.indexOf("service")>0||"feature collection"===e||"kml"===e||"wms"===e||"wmts"===e||"wfs"===e?(a=t.includes("Hosted Service"),"feature service"===e||"feature collection"===e||"kml"===e||"wfs"===e?(n=t.includes("Table"),s=t.includes("Route Layer"),o=t.includes("Markup"),l=t.includes("Spatiotemporal"),c=t.includes("UtilityNetwork"),r=l&&n?"spatiotemporaltable":n?"table":s?"routelayer":o?"markup":l?"spatiotemporal":c?"utilitynetwork":a?"featureshosted":"features"):"map service"===e||"wms"===e||"wmts"===e?(l=t.includes("Spatiotemporal"),u=t.includes("Relational"),r=l||u?"mapimages":a||t.includes("Tiled")||"wmts"===e?"maptiles":"mapimages"):r="scene service"===e?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===e?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===e?"streamlayer":"vector tile service"===e?"vectortile":"datastore catalog service"===e?"datastorecollection":"geocoding service"===e?"geocodeservice":"video service"===e?t.includes("Live Stream")?"livestreamvideolayer":"videolayer":"geoprocessing service"===e?t.includes("Web Tool")?"tool":"layers":"geodata service"===e?"geodataservice":"3dtiles service"===e?t.includes("3DObject")?"3dobjecttileslayer":t.includes("IntegratedMesh")?"integratedmeshtileslayer":"3dtileslayer":"layers"):"web map"===e||"cityengine web scene"===e?r="maps":"web scene"===e?r=t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===e&&t.includes("configurableApp")?r="instantapps":"web mapping application"===e||"mobile application"===e||"application"===e||"operation view"===e||"desktop application"===e?r="apps":"map document"===e||"map package"===e||"published map"===e||"scene document"===e||"globe document"===e||"basemap package"===e||"mobile basemap package"===e||"mobile map package"===e||"project package"===e||"project template"===e||"pro map"===e||"layout"===e||"layer"===e&&t.includes("ArcGIS Pro")||"explorer map"===e&&t.indexOf("Explorer Document")?r="mapsgray":"service definition"===e||"shapefile"===e||"cad drawing"===e||"geojson"===e||"netcdf"===e||"administrative report"===e?r="datafiles":"360 vr experience"===e?r="360vr":"explorer add in"===e||"desktop add in"===e||"windows viewer add in"===e||"windows viewer configuration"===e?r="appsgray":"arcgis pro add in"===e||"arcgis pro configuration"===e?r="addindesktop":"pdf"===e?r="pdf":"microsoft word"===e?r="word":"microsoft excel"===e?r="excel":"microsoft powerpoint"===e?r="ppt":"rule package"===e||"file geodatabase"===e||"sqlite geodatabase"===e||"csv collection"===e||"kml collection"===e||"windows mobile package"===e||"map template"===e||"desktop application template"===e||"gml"===e||"arcpad package"===e||"code sample"===e||"document link"===e||"earth configuration"===e||"operations dashboard add in"===e||"rules package"===e||"workflow manager package"===e||"explorer map"===e&&t.includes("Explorer Mapping Application")||t.includes("Document")?r="datafilesgray":"network analysis service"===e||"geoprocessing service"===e||"geodata service"===e||"geometry service"===e||"geoprocessing package"===e||"locator package"===e||"geoprocessing sample"===e||"workflow manager service"===e?r="toolsgray":"layer"===e||"layer package"===e||"explorer layer"===e?r="layersgray":"analysis model"===e?r="analysismodel":"scene package"===e?r="scenepackage":"3dtiles package"===e?r="3dtileslayerpackage":"3dtiles service"===e?r="3dtileslayer":"mobile scene package"===e?r="mobilescenepackage":"tile package"===e||"compact tile package"===e?r="tilepackage":"task file"===e?r="taskfile":"report template"===e?r="report-template":"statistical data collection"===e?r="statisticaldatacollection":"insights workbook"===e?r="workbook":"insights model"===e?r="insightsmodel":"insights page"===e?r="insightspage":"insights theme"===e?r="insightstheme":"hub initiative"===e?r="hubinitiative":"hub page"===e?r="hubpage":"hub site application"===e?r="hubsite":"hub event"===e?r="hubevent":"hub project"===e?r="hubproject":"relational database connection"===e?r="relationaldatabaseconnection":"big data file share"===e?r="datastorecollection":"image collection"===e?r="imagecollection":"desktop style"===e?r="desktopstyle":"style"===e?r=t.includes("Dictionary")?"dictionarystyle":"style":"dashboard"===e?r="dashboard":"raster function template"===e?r="rasterprocessingtemplate":"vector tile package"===e?r="vectortilepackage":"ortho mapping project"===e?r="orthomappingproject":"ortho mapping template"===e?r="orthomappingtemplate":"solution"===e?r="solutions":"geopackage"===e?r="geopackage":"deep learning package"===e?r="deeplearningpackage":"real time analytic"===e?r="realtimeanalytics":"reality mapping project"===e?r="realitymappingproject":"big data analytic"===e?r="bigdataanalytics":"feed"===e?r="feed":"excalibur imagery project"===e?r="excaliburimageryproject":"notebook"===e?r="notebook":"storymap"===e?r="storymap":"survey123 add in"===e?r="survey123addin":"mission"===e?r="mission":"mission report"===e?r="missionreport":"mission template"===e?r="missiontemplate":"quickcapture project"===e?r="quickcaptureproject":"pro report"===e?r="proreport":"pro report template"===e?r="proreporttemplate":"urban model"===e?r="urbanmodel":"urban project"===e?r="urbanproject":"web experience"===e?r="experiencebuilder":"web experience template"===e?r="webexperiencetemplate":"experience builder widget"===e?r="experiencebuilderwidget":"experience builder widget package"===e?r="experiencebuilderwidgetpackage":"workflow"===e?r="workflow":"kernel gateway connection"===e?r="kernelgatewayconnection":"insights script"===e?r="insightsscript":"hub initiative template"===e?r="hubinitiativetemplate":"storymap theme"===e?r="storymaptheme":"knowledge graph"===e?r="knowledgegraph":"knowledge graph layer"===e?r="knowledgegraphlayer":"knowledge studio project"===e?r="knowledgestudio":"native application"===e?r="nativeapp":"native application installer"===e?r="nativeappinstaller":"web link chart"===e?r="linkchart":"knowledge graph web investigation"===e?r="investigation":"ogcfeatureserver"===e?r="features":"pro presentation"===e?r="propresentation":"pro project"===e?r="proproject":"insights workbook package"===e?r="insightsworkbookpackage":"apache parquet"===e?r="apacheparquet":"notebook code snippet library"===e?r="notebookcodesnippets":"suitability model"===e?r="suitabilitymodel":"esri classifier definition"===e?r="classifierdefinition":"esri classification schema"===e?r="classificationschema":"insights data engineering workbook"===e?r="dataengineeringworkbook":"insights data engineering model"===e?r="dataengineeringmodel":"deep learning studio project"===e?r="deeplearningproject":"discussion"===e?r="discussion":"allsource project"===e?r="allsourceproject":"api key"===e?r="apikey":"data pipeline"===e?r="datapipelines":"group layer"===e?(p=t.includes("Map"),r=p?"layergroup2d":"layergroup"):r="media layer"===e?"onlinemedialayer":"form"===e?t.includes("Survey123")?"survey":"datafilesgray":"csv"===e?"csv":"image"===e?"image":"maps",r?(0,i.s)("esri/images/portal/"+r+"16.png"):null}get isLayer(){return null!=this.type&&U.has(this.type)}get itemCdnUrl(){return(0,M.a)(this.itemUrl)}get itemPageUrl(){const e=this.portal?.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){const e=this.portal?.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal?.normalizeUrl(`${e}/info/${t}?f=json`)??null:null}get userItemUrl(){const e=this.portal?.restUrl;if(!e)return null;const t=this.owner||this.portal?.user?.username;return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){const t=this.portal??(this.portal=m.A.getDefault()),r=t.load(e).then((()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t.request(this.itemUrl,{signal:null!=e?e.signal:null,query:{token:this.apiKey}}):{})).then((e=>{this.sourceJSON=e,this.read(e)}));return this.addResolvingPromise(r),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}};return e instanceof L&&(e=e.rating),null==e||isNaN(e)||"number"!=typeof e||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new L({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:(0,o.o8)(this.applicationProxies),avgRating:this.avgRating,categories:(0,o.o8)(this.categories),classification:(0,o.o8)(this.classification),created:(0,o.o8)(this.created),culture:this.culture,description:this.description,extent:(0,o.o8)(this.extent),groupCategories:(0,o.o8)(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:(0,o.o8)(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:(0,o.o8)(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:(0,o.o8)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,o.o8)(this.typeKeywords),url:this.url};this.loaded&&(e.loadStatus="loaded");const t=new k({sourceJSON:this.sourceJSON}).set(e);return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON();for(const t of["tags","typeKeywords","categories"])e[t]=e[t]?.join(", ");for(const t of["extent","classification"]){const r=e[t];r&&(e[t]=JSON.stringify(r))}return e}async deleteRating(){await this.portal.request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return this.portal.request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await this.portal.request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return null!=t.rating?(t.created=new Date(t.created),new L(t)):null}fetchRelatedItems(e,t){return this.portal.requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},k)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal.request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then((e=>(this.applicationProxies&&!Object.hasOwn(e,"appProxies")&&(this.applicationProxies=null),this.sourceJSON=e,this.read(e),this)))}update(e){return this.id?this.load().then((()=>this.portal.signIn())).then((()=>{const t=e?.data,r={method:"post"};r.query=this.createPostQuery();for(const e in r.query)null===r.query[e]&&(r.query[e]="");return r.query.clearEmptyFields=!0,null!=t&&("string"==typeof t?r.query.text=t:"object"==typeof t&&(r.query.text=JSON.stringify(t))),this.portal.request(`${this.userItemUrl}/update`,r).then((()=>this.reload()))})):Promise.reject(new n.A("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new n.A("portal:item-does-not-exist","The item does not exist yet");await this.load();const{portal:t,itemUrl:r}=this;await t.signIn();const{copyResources:a,folder:i,tags:s,title:o}=e||{},l={method:"post",query:{copyPrivateResources:"all"===a,folder:"string"==typeof i?i:i?.id,includeResources:!!a,tags:s?.join(","),title:o}},{itemId:c}=await t.request(`${r}/copy`,l);return new k({id:c,portal:t})}updateThumbnail(e){return this.id?this.load().then((()=>this.portal.signIn())).then((()=>{const t=e.thumbnail,r=e.filename,a={method:"post"};if("string"==typeof t)(0,c.DB)(t)?a.query={data:t}:a.query={url:(0,c.s2)(t)},null!=r&&(a.query.filename=r);else{const e=new FormData;null!=r?e.append("file",t,r):e.append("file",t),a.body=e}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,a).then((()=>this.reload()))})):Promise.reject(new n.A("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){const{fetchResources:a}=await r.e(4460).then(r.bind(r,55597));return a(this,e,t)}async addResource(e,t,a){const{addOrUpdateResources:i}=await r.e(4460).then(r.bind(r,55597));return e.portalItem=this,await i(this,[{resource:e,content:t,compress:a?.compress,access:a?.access}],"add",a),e}async removeResource(e,t){const{removeResource:a}=await r.e(4460).then(r.bind(r,55597));if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new n.A("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return a(this,e,t)}async removeAllResources(e){const{removeAllResources:t}=await r.e(4460).then(r.bind(r,55597));return t(this,e)}resourceFromPath(e){return new S({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:(0,o.o8)(this.categories),classification:(0,o.o8)(this.classification),created:this.created?.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified?.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:(0,o.o8)(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:(0,o.o8)(this.typeKeywords),url:this.url};return(0,o.oy)(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new k({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)"tags"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"typeKeywords"===t&&null!==e[t]&&(e[t]=e[t].join(", ")),"extent"===t&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};(0,a._)([(0,u.MZ)({type:["private","shared","org","public"]})],O.prototype,"access",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"accessInformation",void 0),(0,a._)([(0,u.MZ)({type:String})],O.prototype,"apiKey",void 0),(0,a._)([(0,u.MZ)({json:{read:{source:"appProxies"}}})],O.prototype,"applicationProxies",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"avgRating",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"categories",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"classification",void 0),(0,a._)([(0,u.MZ)({type:Date})],O.prototype,"created",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"culture",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"description",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"displayName",null),(0,a._)([(0,u.MZ)({type:h.default})],O.prototype,"extent",void 0),(0,a._)([(0,d.w)("extent")],O.prototype,"readExtent",null),(0,a._)([(0,u.MZ)()],O.prototype,"groupCategories",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"iconUrl",null),(0,a._)([(0,u.MZ)()],O.prototype,"id",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"isLayer",null),(0,a._)([(0,u.MZ)({type:Boolean,readOnly:!0})],O.prototype,"isOrgItem",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"itemControl",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"itemPageUrl",null),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"itemUrl",null),(0,a._)([(0,u.MZ)()],O.prototype,"licenseInfo",void 0),(0,a._)([(0,u.MZ)({type:Date})],O.prototype,"modified",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"name",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"numComments",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"numRatings",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"numViews",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"owner",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"ownerFolder",void 0),(0,a._)([(0,u.MZ)({type:m.A})],O.prototype,"portal",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"screenshots",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"size",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"snippet",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"sourceJSON",void 0),(0,a._)([(0,u.MZ)({type:String})],O.prototype,"sourceUrl",void 0),(0,a._)([(0,u.MZ)({type:String})],O.prototype,"spatialReference",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"tags",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"thumbnail",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"thumbnailUrl",null),(0,a._)([(0,u.MZ)()],O.prototype,"title",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"type",void 0),(0,a._)([(0,u.MZ)()],O.prototype,"typeKeywords",void 0),(0,a._)([(0,u.MZ)({type:String,json:{read(e,t){if(P.has(t.type)){const t=this.portal?.restUrl;e||=t&&this.id?`${t}/content/items/${this.id}/data`:null}return e}}})],O.prototype,"url",void 0),(0,a._)([(0,u.MZ)({readOnly:!0})],O.prototype,"userItemUrl",null),O=k=(0,a._)([(0,y.$)("esri.portal.PortalItem")],O);const x=O},36070:function(e,t,r){r.d(t,{V:function(){return i}});var a=r(93040);async function i(e,t){const{data:r}=await(0,a.A)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return r}}}]);
//# sourceMappingURL=support-arcgisLayers.js.map