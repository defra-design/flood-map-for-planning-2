"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[9520],{89675:function(e,t,o){o.r(t),o.d(t,{executeRelationshipQuery:function(){return l},executeRelationshipQueryForCount:function(){return f}});var r=o(39397),n=o(93040),a=o(57652),u=o(12873);function c(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSR&&(o.outSR=(0,a.YX)(o.outSR)),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function s(e,t,o={},r){const a=(0,u.z)({...e.query,f:"json",...r,...c(t,r)});return(0,n.A)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...a}})}var d=o(51084),i=o(95470);async function l(e,t,o){return t=i.default.from(t),async function(e,t,o){const r=await s(e,t,o),n=r.data,a=n.geometryType,u=n.spatialReference,c={};for(const e of n.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:u,hasZ:!!n.hasZ,hasM:!!n.hasM,features:e.relatedRecords};if(null!=e.objectId)c[e.objectId]=t;else for(const o of Object.keys(e))"relatedRecords"!==o&&(c[e[o]]=t)}return{...r,data:c}}((0,r.Dl)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=d.A.fromJSON(t[e]))),o}))}async function f(e,t,o){return t=i.default.from(t),async function(e,t,o){const r=await s(e,t,o,{returnCountOnly:!0}),n=r.data,a={};for(const e of n.relatedRecordGroups)null!=e.objectId&&(a[e.objectId]=e.count);return{...r,data:a}}((0,r.Dl)(e),t,{...o}).then((e=>e.data))}}}]);
//# sourceMappingURL=rest-query-executeRelationshipQuery.js.map