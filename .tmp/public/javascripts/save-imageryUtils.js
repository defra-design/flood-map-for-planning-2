"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[3662],{17643:function(e,t,r){r.d(t,{v:function(){return n}});var a=r(73888);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},73888:function(e,t,r){function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:function(){return a}})},47259:function(e,t,r){r.d(t,{save:function(){return m},saveAs:function(){return d}});var a=r(5553),n=r(29606);const i="Image Service",o="imagery-layer-save",s="imagery-layer-save-as",l="imagery-tile-layer-save",u="imagery-tile-layer-save-as";function c(e){if("imagery"===e.type)return{isValid:!0};const{raster:t}=e,r="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===r?.datasetFormat&&("Raster"===r.tileType||"Map"===r.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function p(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function f(e,t){const{parsedUrl:r,title:a,fullExtent:i}=e;t.url=r.path,t.title||=a;try{t.extent=await(0,n.sQ)(i)}catch{t.extent=void 0}(0,n.OM)(t,n.mm.METADATA),(0,n.Sm)(t,n.mm.TILED_IMAGERY,"imagery-tile"===e.type)}async function m(e,t){const r="imagery"===e.type?o:l;return(0,a.UN)({layer:e,itemType:i,validateLayer:c,createItemData:p,errorNamePrefix:r},t)}async function d(e,t,r){const n="imagery"===e.type?s:u;return(0,a.Uh)({layer:e,itemType:i,validateLayer:c,createItemData:p,errorNamePrefix:n,newItem:t,setItemProperties:f},r)}},5553:function(e,t,r){r.d(t,{UN:function(){return g},Uh:function(){return h}});var a=r(39819),n=r(17643),i=r(51432),o=r(43173),s=r(28993),l=r(29606),u=r(4584);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function p(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function f(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:i}=e;if(function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:i,layer:o}=e,s=[r];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>`'${e}'`)).join(", ");throw new a.A(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:o})}}(e),i){const e=i(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function m(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,p(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}function d(e){const{newItem:t,itemType:r}=e;let a=o.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=i.A.getDefault(),f({...e,item:a}),a}function y(e){return(0,s.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function v(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e),m(e);const u=r.portalItem,p=i?i(u):y(u),f=await w(r,p,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:f},u);return await(o?.(r,u,d)),v(u),await u.update({data:d}),(0,n.v)(p),await(s?.(u,p)),u}async function h(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:o,saveResources:s,supplementalUnsupportedErrors:l}=e;await c(e);const u=d(e),p=i?i(u):y(u),f=await w(r,p,{...t,supplementalUnsupportedErrors:l}),m=await a({layer:r,layerJSON:f},u);return await o(r,u,m),v(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(u,m,t),r.portalItem=u,(0,n.v)(p),await(s?.(u,p)),u}},28993:function(e,t,r){r.d(t,{m:function(){return o},v:function(){return i}});var a=r(90683),n=r(51432);function i(e,t){return{...s(e,t),readResourcePaths:[]}}function o(e,t,r){const n=(0,a.An)(e.itemUrl);return{...s(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function s(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},4584:function(e,t,r){r.d(t,{c:function(){return o},d:function(){return n}});var a=r(39819);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const i=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function o(e,t,r){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new a.A(e,t,r)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((({name:e})=>!(i.has(e)||t.includes(e))))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);
//# sourceMappingURL=save-imageryUtils.js.map