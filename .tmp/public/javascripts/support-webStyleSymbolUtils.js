"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[1024],{14520:function(e,n,t){function o(e){return e=e||globalThis.location.hostname,a.some((n=>null!=e?.match(n)))}function r(e,n){return e?(n=n||globalThis.location.hostname)?null!=n.match(l)||null!=n.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=n.match(s)||null!=n.match(u)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}t.d(n,{EM:function(){return r},b5:function(){return o}});const l=/^devext\.arcgis\.com$/,s=/^qaext\.arcgis\.com$/,i=/^[\w-]*\.mapsdevext\.arcgis\.com$/,u=/^[\w-]*\.mapsqa\.arcgis\.com$/,a=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,l,s,/^jsapps\.esri\.com$/,i,u]},74661:function(e,n,t){t.d(n,{A7:function(){return a},Cx:function(){return c},Hk:function(){return m},JJ:function(){return p},SF:function(){return y},UK:function(){return u},jM:function(){return f},x3:function(){return b}}),t(58941);var o=t(8740),r=t(22198),l=t(90363),s=t(90972),i=t(6259);const u=l.A.fromJSON(i.Cb),a=r.A.fromJSON(i.yM),c=o.A.fromJSON(i.WR),m=s.A.fromJSON(i.JZ);function y(e){if(null==e)return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return u;case"polyline":return a;case"polygon":case"extent":return c}return null}const f=l.A.fromJSON(i.nC),b=r.A.fromJSON(i.HW),p=o.A.fromJSON(i.b6)},40990:function(e,n,t){t.d(n,{af:function(){return g},al:function(){return w},dX:function(){return h}});var o=t(52874),r=(t(10748),t(78879)),l=(t(58941),t(13520)),s=t(22762),i=t(56150),u=t(97025),a=t(78018),c=t(15186),m=t(10052),y=t(74661),f=t(6259),b=t(77529);const p=a.A.fromSimpleMarkerSymbol(y.UK),d=i.A.fromSimpleLineSymbol(y.A7),S=c.A.fromSimpleFillSymbol(y.Cx),A=new u.A({symbolLayers:new r.A([new s.A({material:{color:f.fT},edges:new m.A({size:(0,l.PN)(1),color:new o.A(f.JR)})})])}),w=new i.A({symbolLayers:new r.A([new b.A({material:{color:new o.A([0,0,0])},size:(0,l.PN)(1)})])}),g=new c.A({symbolLayers:new r.A([new s.A({outline:{color:new o.A([0,0,0]),size:(0,l.PN)(1)}})])});function h(e){if(null==e)return null;switch(e.type){case"mesh":return A;case"point":case"multipoint":return p;case"polyline":return d;case"polygon":case"extent":return S}return null}},6259:function(e,n,t){t.d(n,{Cb:function(){return l},HW:function(){return c},JR:function(){return r},JZ:function(){return u},WR:function(){return i},b6:function(){return m},fT:function(){return o},nC:function(){return a},yM:function(){return s}});const o=[252,146,31,255],r=[153,153,153,255],l={type:"esriSMS",style:"esriSMSCircle",size:6,color:o,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o},i={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},u={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},c={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},m={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},8404:function(e,n,t){t.d(n,{M9:function(){return a},oO:function(){return c},rS:function(){return f}});var o=t(10748),r=t(39819),l=t(11432),s=t(97992),i=t(11299),u=t(36e3);function a(e,n,t,o){const r=y(e,{},{context:o,isLabelSymbol:!1});null!=r&&(n[t]=r)}function c(e,n,t,o){const r=y(e,{},{context:o,isLabelSymbol:!0});null!=r&&(n[t]=r)}function m(e){return e instanceof s.A||e instanceof u.A}function y(e,n,t){if(null==e)return null;const{context:o,isLabelSymbol:u}=t,a=o?.origin,c=o?.messages;if("web-scene"===a&&!m(e)){const t=(0,i.t)(e,{retainCIM:!0,hasLabelingContext:u});return null!=t.symbol?t.symbol.write(n,o):(c?.push(new r.A("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:e,context:o,error:t.error})),null)}return(0,l.TU)(o?.layer)&&function(e){return e instanceof s.A&&("polygon-3d"===e.type||"line-3d"===e.type)}(e)?(c?.push(new r.A("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported on layers of type '${o?.layer?.declaredClass}'.`,{symbol:e,context:o})),null):("web-map"===a||"portal-item"===a&&!(0,l.TU)(o?.layer))&&m(e)?(c?.push(new r.A("symbol:unsupported",`Symbols of type '${e.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:e,context:o})),null):e.write(n,o)}function f(e,n){return(0,o.Bu)(e,null,n)}},58916:function(e,n,t){t.d(n,{jg:function(){return S},cF:function(){return m},bo:function(){return y},yA:function(){return b},o5:function(){return f}});var o=t(93040),r=t(39819),l=t(58941),s=t(60539),i=t(90683),u=t(51432),a=t(26544);const c=new Map;function m(e,n,t){return null!=e?.styleUrl?async function(e,n){try{return{data:(await b(e,n)).data,baseUrl:(0,i.nM)(e),styleUrl:e}}catch(e){return(0,s.QP)(e),null}}(e.styleUrl,t):null!=e?.styleName?function(e,n,t){const o=null!=n.portal?n.portal:u.A.getDefault();let l;const s=`${o.url} - ${o.user?.username} - ${e}`,i=c.get(s);if(i)return i;const m=function(e,n,t){return n.load(t).then((()=>{const o=new a.A({disableExtraQuery:!0,query:`owner:${p} AND type:${d} AND typekeywords:"${e}"`});return n.queryItems(o,t)})).then((({results:n})=>{let o=null;const l=e.toLowerCase();if(n&&Array.isArray(n))for(const e of n){const n=e.typeKeywords?.some((e=>e.toLowerCase()===l));if(n&&e.type===d&&e.owner===p){o=e;break}}if(!o)throw new r.A("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return o.load(t)}))}(e,o,t).then((e=>(l=e,e.fetchData()))).then((n=>({data:n,baseUrl:l.itemUrl??"",styleName:e})));return c.set(s,m),m}(e.styleName,n,t):Promise.reject(new r.A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function y(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function f(e,n,t=["gltf"]){if("cimRef"===n)return encodeURI(e.cimRef);if(e.formatInfos&&!(0,l.A)("enable-feature:force-wosr"))for(const n of t){const t=e.formatInfos.find((e=>e.type===n));if(t)return t.href}return encodeURI(e.webRef)}function b(e,n){const t={responseType:"json",query:{f:"json"},...n};return(0,o.A)((0,i.S8)(e),t)}const p="esri_en",d="Style",S="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"},11299:function(e,n,t){t.d(n,{c:function(){return A},t:function(){return w}});var o=t(10748),r=t(39819),l=t(40990),s=t(36e3),i=t(78018),u=t(22198),a=t(56150),c=t(90363),m=t(24411),y=t(8740),f=t(97025),b=t(15186),p=t(90972),d=t(56922);const S="#useCIMFallbackSymbology()",A={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function w(e,n=A){if(!e)return{symbol:null};const{retainId:t=A.retainId,ignoreDrivers:w=A.ignoreDrivers,hasLabelingContext:g=A.hasLabelingContext,retainCIM:h=A.retainCIM,cimFallbackEnabled:C=A.cimFallbackEnabled}=n;let M=null;if((0,o.wk)(e)||e instanceof s.A)M=e.clone();else if("cim"===e.type){const t=e.data?.symbol?.type;switch(t){case"CIMPointSymbol":M=h?e.clone():i.A.fromCIMSymbol(e);break;case"CIMLineSymbol":C&&(M=l.al.clone(),n?.logWarning?.(S,"Unsupported CIM line symbology converted to fallback 3D line symbology"));break;case"CIMPolygonSymbol":C&&(M=l.af.clone(),n?.logWarning?.(S,"Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"))}if(!M)return{error:new r.A("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${t||"unknown"}' is unsupported in 3D`,{symbol:e})}}else if(e instanceof u.A)M=a.A.fromSimpleLineSymbol(e);else if(e instanceof c.A)M=i.A.fromSimpleMarkerSymbol(e);else if(e instanceof m.A)M=i.A.fromPictureMarkerSymbol(e);else if(e instanceof y.A)M=n.geometryType&&"mesh"===n.geometryType?f.A.fromSimpleFillSymbol(e):b.A.fromSimpleFillSymbol(e);else{if(!(e instanceof p.A))return{error:new r.A("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${e.type||e.declaredClass}' is unsupported in 3D`,{symbol:e})};M=g?d.A.fromTextSymbol(e):i.A.fromTextSymbol(e)}return t&&M&&"cim"!==M.type&&(M.id=e.id),w&&(0,o.wk)(M)&&M.symbolLayers.forEach((e=>e.ignoreDrivers=!0)),{symbol:M}}},27923:function(e,n,t){t.d(n,{I:function(){return p},p:function(){return b},resolveWebStyleSymbol:function(){return f}});var o=t(10748),r=t(14520),l=t(39819),s=t(90683),i=t(51432),u=t(60534),a=t(8404),c=t(48812),m=t(58916),y=t(11355);function f(e,n,t,o){const r=e.name;return null==r?Promise.reject(new l.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):"Esri2DPointSymbolsStyle"===e.styleName?function(e,n,t){const o=m.jg.replaceAll(/\{SymbolName\}/gi,e),r=null!=n.portal?n.portal:i.A.getDefault();return(0,m.yA)(o,t).then((e=>{const n=(0,m.bo)(e.data);return(0,a.rS)(n,{portal:r,url:(0,s.An)((0,s.nM)(o)),origin:"portal-item"})}))}(r,n,o):(0,m.cF)(e,n,o).then((e=>p(e,r,n,t,m.o5,o)))}function b(e,n){return n.items.find((n=>n.name===e))}function p(e,n,t,f,p,d){const S=null!=t?.portal?t.portal:i.A.getDefault(),A={portal:S,url:(0,s.An)(e.baseUrl),origin:"portal-item"},w=b(n,e.data);if(!w){const e=`The symbol name '${n}' could not be found`;return Promise.reject(new l.A("symbolstyleutils:symbol-name-not-found",e,{symbolName:n}))}let g=(0,u.f)(p(w,f),A),h=w.thumbnail?.href??null;const C=w.thumbnail?.imageData;(0,r.b5)()&&(g=(0,r.EM)(g)??"",h=(0,r.EM)(h));const M={portal:S,url:(0,s.An)((0,s.nM)(g)),origin:"portal-item"};return(0,m.yA)(g,d).then((r=>{const l="cimRef"===f?(0,m.bo)(r.data):r.data,s=(0,a.rS)(l,M);if(s&&(0,o.wk)(s)){if(h){const e=(0,u.f)(h,A);s.thumbnail=new y.V({url:e})}else C&&(s.thumbnail=new y.V({url:`data:image/png;base64,${C}`}));e.styleUrl?s.styleOrigin=new c.A({portal:t.portal,styleUrl:e.styleUrl,name:n}):e.styleName&&(s.styleOrigin=new c.A({portal:t.portal,styleName:e.styleName,name:n}))}return s}))}}}]);
//# sourceMappingURL=support-webStyleSymbolUtils.js.map