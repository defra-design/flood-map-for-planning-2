"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[763],{80683:function(e,t,n){n.d(t,{Al:function(){return c},NZ:function(){return u},Vb:function(){return i},af:function(){return h},rK:function(){return f}});var a=n(25591);const i="arial-unicode-ms",o="woff2",l=new Map,s=new Set;class r{constructor(e,t){this.fontFace=e,this.promise=t}}async function c(e){const t=d(e),n=f(e),i=l.get(t);if(i)return i.promise;const c=new FontFace(e.family,`url('${a.default.fontsUrl}/woff2/${n}.${o}') format('${o}')`,{style:e.style,weight:e.weight}),u=document.fonts;if(u.has(c)&&"loading"===c.status)return c.loaded;const h=c.load().then((()=>(u.add(c),c)));return l.set(t,new r(c,h)),s.add(c),h}function u(e){return s.has(e)}function h(e){if(!e)return i;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function f(e){const t=m(e)+p(e);return h(e.family)+(t.length>0?t:"-regular")}function d(e){const t=m(e)+p(e);return(e.family||i)+(t.length>0?t:"-regular")}function m(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function p(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}},2337:function(e,t,n){n.d(t,{previewSymbol2D:function(){return S}});var a=n(52874),i=n(75505),o=n(39819),l=n(80683),s=n(13520),r=n(31827),c=n(63578),u=n(84694),h=n(64303);const f="picture-fill",d="picture-marker",m="simple-fill",p="simple-line",y="simple-marker",w="text",g="Aa",b=c.CB.size,v=c.CB.maxSize,L=c.CB.maxOutlineSize,z=c.CB.lineWidth,k=225,M=document.createElement("canvas");function x(e,t){const n=M.getContext("2d"),a=[];t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" ");const{width:i,actualBoundingBoxLeft:o,actualBoundingBoxRight:l,actualBoundingBoxAscent:s,actualBoundingBoxDescent:r}=n.measureText(e);return{width:Math.ceil(Math.max(i,o+l)),height:Math.ceil(s+r),x:Math.floor(o),y:Math.floor((s-r)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.Lz)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.Lz)(t.height):null}}function B(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:n,size:a,renderOptions:i}=function(e,t){const n="number"==typeof t?.size?t?.size:null,a=null!=n?(0,s.Lz)(n):null,i=null!=t?.maxSize?(0,s.Lz)(t.maxSize):null;let o="angle"in e?e.angle:null;null!=t?.rotation&&(o=(o??0)+t.rotation);const l=(0,r.eH)(e);let u=(0,r.$4)(e);"dark"!==A(e,245)||t?.ignoreWhiteSymbols||(u={width:.75,...u,color:"#bdc3c7"});const h={shape:null,fill:l,stroke:u,offset:[0,0]};u?.width&&(u.width=Math.min(u.width,L));const k=u?.width||0;let M=null!=t?.size&&(null==t?.scale||t?.scale),B=0,S=0,F=!1;switch(e.type){case y:{const n=e.style,{width:l,height:r}=C(t),c=l===r&&null!=l?l:null!=a?a:Math.min((0,s.Lz)(e.size),i||v);switch(B=c,S=c,n){case"circle":h.shape={type:"circle",cx:0,cy:0,r:.5*c},M||(B+=k,S+=k);break;case"cross":h.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[B,.5*S]},{command:"M",values:[.5*B,0]},{command:"L",values:[.5*B,S]}]};break;case"diamond":h.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*B,0]},{command:"L",values:[B,.5*S]},{command:"L",values:[.5*B,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k);break;case"square":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),o&&(F=!0);break;case"triangle":h.shape={type:"path",path:[{command:"M",values:[.5*B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),o&&(F=!0);break;case"x":h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,S]},{command:"M",values:[B,0]},{command:"L",values:[0,S]}]},o&&(F=!0);break;case"path":h.shape={type:"path",path:e.path||""},M||(B+=k,S+=k),o&&(F=!0),M=!0}break}case p:{const{width:e,height:n}=C(t),i=(0,r.O0)(u).reduce(((e,t)=>e+t),0),o=i&&Math.ceil(z/i),l=n??a??k,s=e??(i*o||z);u&&(u.width=l),B=s,S=l,M=!0,h.shape={type:"path",path:[{command:"M",values:[l/2,S/2]},{command:"L",values:[B-l/2,S/2]}]};break}case f:case m:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:n,height:i}=C(t);B=!e&&n!==i||null==n?null!=a?a:b:n,S=!e&&n!==i||null==i?B:i,M||(B+=k,S+=k),M=!0,h.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:c.nq.fill[0];break}case d:{const n=Math.min((0,s.Lz)(e.width),i||v),l=Math.min((0,s.Lz)(e.height),i||v),{width:r,height:c}=C(t),u=r===c&&null!=r?r:null!=a?a:Math.max(n,l),f=n/l;B=f<=1?Math.ceil(u*f):u,S=f<=1?u:Math.ceil(u/f),h.shape={type:"image",x:-Math.round(B/2),y:-Math.round(S/2),width:B,height:S,src:e.url||""},o&&(F=!0);break}case w:{const n=e,o=t?.overrideText||n.text||g,l=n.font,{width:r,height:c}=C(t),u=null!=c?c:null!=a?a:Math.min((0,s.Lz)(l.size),i||v),{width:f,height:d}=x(o,{weight:l.weight,size:u,family:l.family}),m=/[\uE600-\uE6FF]/.test(o);B=r??(m?u:f),S=m?u:d;let p=.5*(m?u:d);m&&(p+=5),h.shape={type:"text",text:o,x:n.xoffset||0,y:n.yoffset||p,align:"middle",alignBaseline:n.verticalAlignment,decoration:l&&l.decoration,rotated:n.rotated,kerning:n.kerning},h.font=l&&{size:u,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return{shapeDescriptor:h,size:[B,S],renderOptions:{node:t?.node,scale:M,opacity:t?.opacity,rotations:[o],useRotationSize:F,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!n.shape)throw new o.A("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const n=t.fill,a=e.color;if("pattern"===n?.type&&a&&e.type!==f){const e=await(0,r.rc)(n.src,a.toCss(!0));n.src=e,t.fill=n}}(e,n),await async function(e,t,n,a){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,l.Al)(e.font)}catch{}const{width:i,height:o}=C(a);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:l,height:s,x:r,y:c}=x(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});n[0]=i??l,n[1]=o??s,t.shape.x=r,t.shape.y=c;let u="angle"in e?e.angle:null;if(null!=a?.rotation&&(u=(u??0)+a.rotation),u){const e=u*(Math.PI/180),t=Math.abs(Math.sin(e)),a=Math.abs(Math.cos(e));n[1]=n[0]*t+n[1]*a}}}(e,n,a,t);const k=[[n]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*a[0];k.unshift([{...n,offset:[-e,0],fill:(0,c.QC)(n.fill,-.3)}]),k.push([{...n,offset:[e,0],fill:(0,c.QC)(n.fill,.3)}]),a[0]+=2*e,i.scale=!1}return"text"===e.type&&function(e,t,n,a,i){if(null!=e.haloColor&&null!=e.haloSize){i.masking??=n.map((()=>[]));const o=(0,s.Lz)(e.haloSize);a[0]+=o,a[1]+=o,n.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*o,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:a[0]+2*h.y7,height:a[1]+2*h.y7},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(a[0]+=2*h.y7,a[1]+=2*h.y7,n.unshift([{shape:{type:"rect",x:0,y:0,width:a[0],height:a[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.Lz)(e.borderLineSize)}}]),i.masking?.unshift([]))}(e,n,k,a,i),(0,u.fz)(k,a,i)}function A(e,t=k){const n=(0,r.eH)(e),o=(0,r.$4)(e),l=!n||"type"in n?null:new a.A(n),s=o?.color?new a.A(o?.color):null,c=l?B((0,i.Ws)(l),t):null,u=s?B((0,i.Ws)(s),t):null;return u?c?c===u?c:t>=k?"light":"dark":u:c}}}]);
//# sourceMappingURL=previewSymbol2D.js.map