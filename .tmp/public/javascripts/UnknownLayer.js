"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[3398],{77793:function(e,t,r){r.d(t,{P:function(){return v},L:function(){return I}});var i=r(53804),s=r(83525),n=r(90194),o=r(21609),a=r(72977);class l{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(a.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new l,r=this._originStores[a.Gr.DEFAULTS];r&&r.forEach(((e,r)=>{t.set(r,(0,o.o8)(e),a.Gr.DEFAULTS)}));for(let r=a.Gr.SERVICE;r<a.AU;r++){const i=this._originStores[r];i&&i.forEach(((i,s)=>{e&&e.has(s)||t.set(s,(0,o.o8)(i),r)}))}return t}get(e,t){const r=void 0===t?this._values:this._originStores[t];return r?r.get(e):void 0}keys(e){const t=null==e?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,r=a.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(e,t),!this._values.has(e)||this._propertyOriginMap.get(e)<=r){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,r),i!==t}return!1}delete(e,t=a.Gr.USER){const r=this._originStores[t];if(!r)return;const i=r.get(e);if(r.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let r=t-1;r>=0;r--){const t=this._originStores[r];if(t&&t.has(e)){this._values.set(e,t.get(e)),this._propertyOriginMap.set(e,r);break}}}return i}has(e,t){const r=void 0===t?this._values:this._originStores[t];return!!r&&r.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const r=this._originStores[t],i=r?.get(e),s=this._values.get(e);return this._values.set(e,i),this._propertyOriginMap.set(e,t),s!==i}originOf(e){return this._propertyOriginMap.get(e)||a.Gr.DEFAULTS}forEach(e){this._values.forEach(e)}}var u=r(97354),c=r(63693),p=r(65953);const d=e=>{let t=class extends e{constructor(...e){super(...e);const t=(0,c.oY)(this),r=t.store,i=new l;t.store=i,(0,n.k)(t,r,i)}read(e,t){(0,u.L)(this,e,t)}getAtOrigin(e,t){const r=h(this),i=(0,a.aB)(t);if("string"==typeof e)return r.get(e,i);const s={};return e.forEach((e=>{s[e]=r.get(e,i)})),s}originOf(e){return(0,a.OL)(this.originIdOf(e))}originIdOf(e){return h(this).originOf(e)}revert(e,t){const r=h(this),i=(0,a.aB)(t),s=(0,c.oY)(this);let n;n="string"==typeof e?"*"===e?r.keys(i):[e]:e,n.forEach((e=>{s.invalidate(e),r.revert(e,i),s.commit(e)}))}};return t=(0,i._)([(0,p.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],t),t};function h(e){return(0,c.oY)(e).store}let f=class extends(d(s.A)){};f=(0,i._)([(0,p.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);var g=r(62664),y=r(99495);const _=e=>{let t=class extends e{constructor(...e){super(...e)}clear(e,t="user"){return m(this).delete(e,(0,a.aB)(t))}write(e,t){return(0,y.M)(this,e=e||{},t),e}setAtOrigin(e,t,r){(0,c.oY)(this).setAtOrigin(e,t,(0,a.aB)(r))}removeOrigin(e){const t=m(this),r=(0,a.aB)(e),i=t.keys(r);for(const e of i)t.originOf(e)===r&&t.set(e,t.get(e,r),a.Gr.USER)}updateOrigin(e,t){const r=m(this),i=(0,a.aB)(t),s=(0,g.Jt)(this,e);for(let t=i+1;t<a.AU;++t)r.delete(e,t);r.set(e,s,i)}toJSON(e){return this.write({},e)}};return t=(0,i._)([(0,p.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],t),t.prototype.toJSON.isDefaultToJSON=!0,t};function m(e){return(0,c.oY)(e).store}const v=e=>{let t=class extends(_(d(e))){constructor(...e){super(...e)}};return t=(0,i._)([(0,p.$)("esri.core.MultiOriginJSONSupport")],t),t};let I=class extends(v(s.A)){};I=(0,i._)([(0,p.$)("esri.core.MultiOriginJSONSupport")],I)},67565:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var i=r(53804),s=r(39819),n=r(77793),o=r(74087),a=r(23502),l=(r(58941),r(40633),r(13798),r(65953)),u=r(20833),c=r(61380);let p=class extends((0,c.A)((0,n.P)(u.A))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,t)=>{(0,o._)((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let r="Unknown layer type";e&&(r+=" "+e),t(new s.A("layer:unknown-layer-type",r,{layerType:e}))}))})))}read(e,t){super.read({resourceInfo:e},t)}write(e,t){return null}};(0,i._)([(0,a.MZ)({readOnly:!0})],p.prototype,"resourceInfo",void 0),(0,i._)([(0,a.MZ)({type:["show","hide"]})],p.prototype,"listMode",void 0),(0,i._)([(0,a.MZ)({json:{read:!1},readOnly:!0,value:"unknown"})],p.prototype,"type",void 0),p=(0,i._)([(0,l.$)("esri.layers.UnknownLayer")],p);const d=p},61380:function(e,t,r){r.d(t,{A:function(){return S}});var i=r(53804),s=r(25591),n=r(7156),o=r(93040),a=r(77472),l=r(39819),u=r(40633),c=r(95929),p=r(60539),d=r(90683),h=r(23502),f=(r(58941),r(13798),r(47332)),g=r(65953),y=r(81392),_=r(11432),m=r(51432),v=r(43173),I=r(85956),E=r(29606);const S=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,c.pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new v.default({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:i}=await r.e(1536).then(r.bind(r,58615));return(0,p.Te)(t),await i({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(e){throw(0,p.zf)(e)||u.A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,p.QP)(e),!0))))}async setUserPrivileges(e,t){if(!s.default.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(t);if(this.url)try{const{features:{edit:r,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(e,t);this._set("userHasEditingPrivileges",r),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(e){(0,p.QP)(e)}}async _fetchUserPrivileges(e,t){let r=this.portalItem;if(!e||!r||!r.loaded||r.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===r.id;if(i&&r.portal.user)return(0,E.It)(r);let s,o;if(i)s=r.portal.url;else try{s=await(0,_.wI)(this.url,t)}catch(e){(0,p.QP)(e)}if(!s||!(0,d.b8)(s,r.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;o=await(n.id?.getCredential(`${s}/sharing`,{prompt:!1,signal:e}))}catch(e){(0,p.QP)(e)}const a=!0,l=!1,u=!1;if(!o)return{features:{edit:a,fullEdit:l},content:{updateItem:u}};try{if(i?await r.reload():(r=new v.default({id:e,portal:{url:s}}),await r.load(t)),r.portal.user)return(0,E.It)(r)}catch(e){(0,p.QP)(e)}return{features:{edit:a,fullEdit:l},content:{updateItem:u}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(e){(0,p.QP)(e)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=w.credential===t?w.user:await this._fetchEditingUser(e);return w.credential=t,w.user=r,null==r?.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id?.findServerInfo(this.url??"");if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,s=m.A.getDefault();if(s&&s.loaded&&(0,d.S8)(s.restUrl)===(0,d.S8)(i))return s.user;const l=`${i}/community/self`,u=null!=e?e.signal:null,c=await(0,a.Ke)((0,o.A)(l,{authMode:"no-prompt",query:{f:"json"},signal:u}));return c.ok?I.A.fromJSON(c.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,i=this.portalItem?.id&&(this.portalItem.portal||m.A.getDefault());return r&&i&&!(0,d.ut)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new l.A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,h.MZ)({type:v.default})],t.prototype,"portalItem",null),(0,i._)([(0,f.w)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,y.K)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,h.MZ)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasFullEditingPrivileges",void 0),(0,i._)([(0,h.MZ)({type:Boolean,readOnly:!0})],t.prototype,"userHasUpdateItemPrivileges",void 0),t=(0,i._)([(0,g.$)("esri.layers.mixins.PortalLayer")],t),t},w={credential:null,user:null}},29606:function(e,t,r){r.d(t,{It:function(){return h},LG:function(){return o},OM:function(){return u},Sm:function(){return c},Y:function(){return a},bK:function(){return l},mm:function(){return d},sQ:function(){return p}});var i=r(46157),s=r(57165),n=r(1644);function o(e,t){if(!a(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function a(e,t){return!!e.typeKeywords?.includes(t)}function l(e){return a(e,d.HOSTED_SERVICE)}function u(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function c(e,t,r){r?o(e,t):u(e,t)}async function p(e){const t=e.clone().normalize();let r;if(t.length>1)for(const e of t)r?e.width>r.width&&(r=e):r=e;else r=t[0];return async function(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return(0,n.ci)(e);const r=s.A.WGS84;return await(0,i.initializeProjection)(t,r),(0,i.project)(e,r)}(r)}const d={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer"};function h(e){const{portal:t,isOrgItem:r,itemControl:i}=e,s=t.user?.privileges;let n=!s||s.includes("features:user:edit"),o=!!r&&!!s?.includes("features:user:fullEdit");const a="update"===i||"admin"===i;return a?o=n=!0:o&&(n=!0),{features:{edit:n,fullEdit:o},content:{updateItem:a}}}}}]);
//# sourceMappingURL=UnknownLayer.js.map