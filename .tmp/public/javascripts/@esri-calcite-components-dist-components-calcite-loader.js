/*! For license information please see @esri-calcite-components-dist-components-calcite-loader.js.LICENSE.txt */
"use strict";(self.webpackChunkdefra=self.webpackChunkdefra||[]).push([[1927],{39101:function(e,t,n){n.r(t),n.d(t,{CalciteLoader:function(){return i},defineCustomElement:function(){return a}});var r=n(48131);const i=r.L,a=r.d},72006:function(e,t,n){n.d(t,{E:function(){return D},H:function(){return x},a:function(){return I},b:function(){return R},c:function(){return A},d:function(){return U},e:function(){return L},f:function(){return T},g:function(){return B},h:function(){return E},i:function(){return V},j:function(){return w},k:function(){return S},l:function(){return _},m:function(){return f},n:function(){return z},o:function(){return j},q:function(){return C},r:function(){return q},s:function(){return G},t:function(){return H},u:function(){return J},v:function(){return X},w:function(){return K},y:function(){return W}}),n(96367);var r=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],i=r.join(","),a="undefined"==typeof Element,o=a?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!a&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},s=function e(t,n){var r;void 0===n&&(n=!0);var i=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===i||"true"===i||n&&t&&e(t.parentNode)},c=function(e,t,n){if(s(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(i));return t&&o.call(e,i)&&r.unshift(e),r.filter(n)},u=function e(t,n,r){for(var a=[],l=Array.from(t);l.length;){var c=l.shift();if(!s(c,!1))if("SLOT"===c.tagName){var u=c.assignedElements(),d=e(u.length?u:c.children,!0,r);r.flatten?a.push.apply(a,d):a.push({scopeParent:c,candidates:d})}else{o.call(c,i)&&r.filter(c)&&(n||!t.includes(c))&&a.push(c);var f=c.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(c),m=!s(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(c));if(f&&m){var h=e(!0===f?c.children:f.children,!0,r);r.flatten?a.push.apply(a,h):a.push({scopeParent:c,candidates:h})}else l.unshift.apply(l,c.children)}}return a},d=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},f=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!d(e)?0:e.tabIndex},m=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},g=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},p=function(e,t){return!(t.disabled||s(t)||function(e){return h(e)&&"hidden"===e.type}(t)||function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=o.call(e,"details>summary:first-of-type")?e.parentElement:e;if(o.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return g(e)}else{if("function"==typeof r){for(var a=e;e;){var s=e.parentElement,c=l(e);if(s&&!s.shadowRoot&&!0===r(s))return g(e);e=e.assignedSlot?e.assignedSlot:s||c===e.ownerDocument?s:c.host}e=a}if(function(e){var t,n,r,i,a=e&&l(e),o=null===(t=a)||void 0===t?void 0:t.host,s=!1;if(a&&a!==e)for(s=!!(null!==(n=o)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(o)||null!=e&&null!==(i=e.ownerDocument)&&void 0!==i&&i.contains(e));!s&&o;){var c,u,d;s=!(null===(u=o=null===(c=a=l(o))||void 0===c?void 0:c.host)||void 0===u||null===(d=u.ownerDocument)||void 0===d||!d.contains(o))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!o.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},v=function(e,t){return!(function(e){return function(e){return h(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||l(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var i=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!i||i===e}(e)}(t)||f(t)<0||!p(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],r=[];return t.forEach((function(t,i){var a=!!t.scopeParent,o=a?t.scopeParent:t,l=function(e,t){var n=f(e);return n<0&&t&&!d(e)?0:n}(o,a),s=a?e(t.candidates):o;0===l?a?n.push.apply(n,s):n.push(o):r.push({documentOrder:i,tabIndex:l,item:t,isScope:a,content:s})})),r.sort(m).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},w=function(e,t){var n;return n=(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:v.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):c(e,t.includeContainer,v.bind(null,t)),y(n)},S=function(e,t){return(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:p.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):c(e,t.includeContainer,p.bind(null,t))},_=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==o.call(e,i)&&v(t,e)},k=r.concat("iframe").join(","),E=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==o.call(e,k)&&p(t,e)};const z={getShadowRoot:!0};function I(e){const t=A(e,"[dir]");return t?t.getAttribute("dir"):"ltr"}function N(e){return e.getRootNode()}function x(e){const t=N(e);return"host"in t?t:null}function $(e){return e.host||null}function C(e,{selector:t,id:n}){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const r=N(e);return(n?"getElementById"in r?r.getElementById(n):null:t?r.querySelector(t):null)||C($(r),{selector:t,id:n})}function A(e,t){return e?e.closest(t)||A($(N(e)),t):null}function F(e,t){return O(e,t)}function O(e,t){if(!e)return;const n=t(e);if(void 0!==n)return n;const{parentNode:r}=e;return O(r instanceof ShadowRoot?r.host:r,t)}function R(e,t){return!!F(t,(t=>t===e||void 0))}async function L(e){if(e)return function(e){return"function"==typeof e?.setFocus}(e)?e.setFocus():e.focus()}function D(e){if(e)return w(e,z)[0]??e}function T(e){D(e)?.focus()}const P=":not([slot])";function B(e,t,n){t&&!Array.isArray(t)&&"string"!=typeof t&&(n=t,t=null);const r=t?Array.isArray(t)?t.map((e=>`[slot="${e}"]`)).join(","):`[slot="${t}"]`:P;return n?.all?function(e,t,n){let r=t===P?M(e,P):Array.from(e.querySelectorAll(t));r=n&&!1===n.direct?r:r.filter((t=>t.parentElement===e)),r=n?.matches?r.filter((e=>e?.matches(n.matches))):r;const i=n?.selector;return i?r.map((e=>Array.from(e.querySelectorAll(i)))).reduce(((e,t)=>[...e,...t]),[]).filter((e=>!!e)):r}(e,r,n):function(e,t,n){let r=t===P?M(e,P)[0]||null:e.querySelector(t);r=n&&!1===n.direct||r?.parentElement===e?r:null,r=n?.matches?r?.matches(n.matches)?r:null:r;const i=n?.selector;return i?r?.querySelector(i):r}(e,r,n)}function M(e,t){return e?Array.from(e.children||[]).filter((e=>e?.matches(t))):[]}function j(e,t,n){return"string"==typeof t&&""!==t?t:""===t?e[n]:void 0}function H(e){return Boolean(e).toString()}function q(e){return U(e)||function(e){return!!function(e){return function(e){return e.currentTarget.assignedNodes({flatten:!0})}(e).filter((e=>e.nodeType===Node.TEXT_NODE)).map((e=>e.textContent)).join("").trim()}(e)}(e)}function U(e){return!!G(e).length}function G(e,t){return function(e,t){const n=e.assignedElements({flatten:!0});return t?function(e,t){return e.filter((e=>e.matches(t)))}(n,t):n}(e.target,t)}function W(e){return!(!e.isPrimary||0!==e.button)}function V(e){return 0===e.detail}const X=(e,t,n,r=!0)=>{const i=e.indexOf(t),a=0===i,o=i===e.length-1;let l;return r&&(n="previous"===n&&a?"last":"next"===n&&o?"first":n),l="previous"===n?e[i-1]||e[r?e.length-1:i]:"next"===n?e[i+1]||e[r?0:i]:"last"===n?e[e.length-1]:e[0],L(l),l};function J(e,t){if(e.parentNode!==t.parentNode)return!1;const n=Array.from(e.parentNode.children);return n.indexOf(e)<n.indexOf(t)}async function K(e,t,n,r){return async function(e,t,n,r,i){const a=window.getComputedStyle(e),o="transition"===n?a.transitionDuration:a.animationDuration,l="transition"===n?a.transitionProperty:a.animationName,s=o.split(","),c=s[l.split(",").map((e=>e.trim())).indexOf(t)]??s[0];function u(){requestAnimationFrame((()=>{r?.(),requestAnimationFrame((()=>i?.()))}))}if("0s"===c)return void u();const d="transition"===n?"transitionstart":"animationstart",f="transition"===n?"transitionend":"animationend",m="transition"===n?"transitioncancel":"animationcancel";return new Promise((n=>{const a=window.setTimeout((()=>{e.removeEventListener(d,o),e.removeEventListener(f,l),e.removeEventListener(m,l),u(),n()}),1e3*parseFloat(c));function o(n){n.target===e&&Y(n)===t&&(window.clearTimeout(a),e.removeEventListener(d,o),r?.())}function l(r){r.target===e&&Y(r)===t&&(e.removeEventListener(f,l),e.removeEventListener(m,l),i?.(),n())}e.addEventListener(d,o),e.addEventListener(f,l),e.addEventListener(m,l)}))}(e,t,"transition",n,r)}function Y(e){return function(e){return"propertyName"in e}(e)?e.propertyName:e.animationName}},60005:function(e,t,n){n.d(t,{g:function(){return r}});const r=()=>[2,1,1,1,3].map((e=>{let t="";for(let n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t})).join("-")},7105:function(e,t,n){function r(e){return"Enter"===e||" "===e}n.d(t,{i:function(){return r},n:function(){return i}});const i=["0","1","2","3","4","5","6","7","8","9"]},48131:function(e,t,n){n.d(t,{L:function(){return l},d:function(){return s}});var r=n(3102),i=n(60005),a=n(32282);const o={loader:"loader",loaderParts:"loader__svgs",loaderPart:"loader__svg",loaderPartId:e=>`${o.loaderPart}--${e}`,loaderText:"loader__text",loaderPercentage:"loader__percentage"},l=(0,r.w$)(class extends r.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.formatValue=()=>"determinate-value"!==this.type?`${this.value}`:this.formatter.format(this.value/100),this.complete=!1,this.inline=!1,this.label=void 0,this.scale="m",this.type="indeterminate",this.value=0,this.text="",this.effectiveLocale=""}valueChangeHandler(){this.complete=this.type.startsWith("determinate")&&100===this.value}connectedCallback(){(0,a.c)(this),this.updateFormatter()}disconnectedCallback(){(0,a.d)(this)}componentWillLoad(){requestAnimationFrame((()=>this.valueChangeHandler()))}render(){const{el:e,inline:t,label:n,scale:a,text:l,type:s,value:c}=this,u=e.id||(0,i.g)(),d=t?this.getInlineSize(a):this.getSize(a),f=.45*d,m=`0 0 ${d} ${d}`,h=s.startsWith("determinate"),g=2*f*Math.PI,p=c/100*g,v=g-p,b=Math.floor(c),y={"stroke-dasharray":`${p} ${v}`};return(0,r.h)(r.xr,{key:"8272bdfae9fff51b19ed8fa66197eb93b53feb4c","aria-label":n,"aria-valuemax":h?"100":void 0,"aria-valuemin":h?"0":void 0,"aria-valuenow":h?b.toString():void 0,id:u,role:"progressbar"},(0,r.h)("div",{key:"3d410c178af39bb57cc478bdd06c0392f6ba71a3",class:o.loaderParts},[1,2,3].map((e=>(0,r.h)("svg",{"aria-hidden":"true",class:{[o.loaderPart]:!0,[o.loaderPartId(e)]:!0},key:e,style:h&&3===e?y:void 0,viewBox:m},(0,r.h)("circle",{cx:d/2,cy:d/2,r:f})))),h&&(0,r.h)("div",{key:"4ccc633930dee031bf769908d712df39e0677bbb",class:o.loaderPercentage},this.formatValue())),l&&(0,r.h)("div",{key:"6d0d51988bdfafee2a19faed9e14d3bda06d79b5",class:o.loaderText},l))}formatterPropsChange(){this.updateFormatter()}getSize(e){return{s:32,m:56,l:80}[e]}getInlineSize(e){return{s:12,m:16,l:20}[e]}updateFormatter(){"determinate-value"===this.type&&this.formatter?.resolvedOptions().locale!==this.effectiveLocale&&(this.formatter=new Intl.NumberFormat(this.effectiveLocale,{style:"percent"}))}get el(){return this}static get watchers(){return{value:["valueChangeHandler"],effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale=s]){--calcite-loader-font-size:var(--calcite-font-size--3);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem;--calcite-internal-loader-value-line-height:0.625rem}:host([scale=m]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem;--calcite-internal-loader-value-line-height:1.375rem}:host([scale=l]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem;--calcite-internal-loader-value-line-height:1.71875rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);line-height:var(--calcite-internal-loader-value-line-height);align-self:center}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise;display:flex}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type=determinate]),:host([type=determinate-value]){animation:none;stroke:var(--calcite-color-border-3)}:host([type=determinate]) .loader__svgs,:host([type=determinate-value]) .loader__svgs{animation:none}:host([type=determinate]) .loader__svg--3,:host([type=determinate-value]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-loader",{complete:[1540],inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],effectiveLocale:[32]},void 0,{value:["valueChangeHandler"],effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}]);function s(){"undefined"!=typeof customElements&&["calcite-loader"].forEach((e=>{"calcite-loader"===e&&(customElements.get(e)||customElements.define(e,l))}))}s()},32282:function(e,t,n){n.d(t,{B:function(){return s},a:function(){return b},c:function(){return x},d:function(){return $},g:function(){return I},i:function(){return c},n:function(){return A},p:function(){return u},s:function(){return p}});var r=n(72006),i=n(7105),a=n(40313);const o=new RegExp("\\.(0+)?$"),l=new RegExp("0+$");class s{constructor(e){if(e instanceof s)return e;const[t,n]=function(e){const t=e.split(/[eE]/);if(1===t.length)return e;const n=+e;if(Number.isSafeInteger(n))return`${n}`;const r="-"===e.charAt(0),i=+t[1],a=t[0].split("."),l=(r?a[0].substring(1):a[0])||"",s=a[1]||"",c=i>0?`${l}${((e,t)=>{const n=t>e.length?`${e}${"0".repeat(t-e.length)}`:e;return`${n.slice(0,t)}.${n.slice(t)}`})(s,i)}`:`${((e,t)=>{const n=Math.abs(t)-e.length,r=n>0?`${"0".repeat(n)}${e}`:e;return`${r.slice(0,t)}.${r.slice(t)}`})(l,i)}${s}`;return`${r?"-":""}${"."===c.charAt(0)?"0":""}${c.replace(o,"").replace(d,"")}`}(e).split(".").concat("");this.value=BigInt(t+n.padEnd(s.DECIMALS,"0").slice(0,s.DECIMALS))+BigInt(s.ROUNDED&&n[s.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace("-","").padStart(s.DECIMALS+1,"0");return{integers:e.slice(0,-s.DECIMALS),decimals:e.slice(-s.DECIMALS).replace(l,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals(),r=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&r.unshift({type:"minusSign",value:e.minusSign}),n.length&&(r.push({type:"decimal",value:e.decimal}),n.split("").forEach((e=>r.push({type:"fraction",value:e})))),r}format(e){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}${n.length?`${e.decimal}${n.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}add(e){return s.fromBigInt(this.value+new s(e).value)}subtract(e){return s.fromBigInt(this.value-new s(e).value)}multiply(e){return s._divRound(this.value*new s(e).value,s.SHIFT)}divide(e){return s._divRound(this.value*s.SHIFT,new s(e).value)}}function c(e){return!(!e||isNaN(Number(e)))}function u(e){return e&&(t=e,i.n.some((e=>t.includes(e))))?v(e,(e=>{let t=!1;const n=e.split("").filter(((e,n)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/-/g)||0!==n)||i.n.includes(e))).join("");return c(n)?new s(n).toString():""})):"";var t}s.DECIMALS=100,s.ROUNDED=!0,s.SHIFT=BigInt("1"+"0".repeat(s.DECIMALS)),s._divRound=(e,t)=>s.fromBigInt(e/t+(s.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),s.fromBigInt=e=>Object.assign(Object.create(s.prototype),{value:e,isNegative:e<BigInt(0)});const d=/^([-0])0+(?=\d)/,f=/(?!^\.)\.$/,m=/(?!^-)-/g,h=/^-\b0\b\.?0*$/,g=/0*$/,p=e=>v(e,(e=>{const t=e.replace(m,"").replace(f,"").replace(d,"$1");return c(t)?h.test(t)?t:function(e){const t=e.split(".")[1],n=new s(e).toString(),[r,i]=n.split(".");return t&&i!==t?`${r}.${t}`:n}(t):e}));function v(e,t){if(!e)return e;const n=e.toLowerCase().indexOf("e")+1;return n?e.replace(/[eE]*$/g,"").substring(0,n).concat(e.slice(n).replace(/[eE]/g,"")).split(/[eE]/).map(((e,n)=>t(1===n?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}function b(e,t,n){const r=t.split(".")[1];if(r){const i=r.match(g)[0];if(i&&n.delocalize(e).length!==t.length&&-1===r.indexOf("e")){const t=n.decimal;return(e=e.includes(t)?e:`${e}${t}`).padEnd(e.length+i.length,n.localize("0"))}}return e}const y="en",w=["ar","bg","bs","ca","cs","da","de","el",y,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],S=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",y,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],_=["arab","arabext","latn"],k=e=>_.includes(e),E=(new Intl.NumberFormat).resolvedOptions().numberingSystem,z="arab"!==E&&k(E)?E:"latn";function I(e,t="cldr"){const n="cldr"===t?S:w;return e?n.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,n)=>`${t}-${n.toUpperCase()}`)),n.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":n.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),y)):y}const N=new Set;function x(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,r.c)(e.el,"[lang]")?.lang||document.documentElement.lang||y}(e)}(e),0===N.size&&C?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),N.add(e)}function $(e){N.delete(e),0===N.size&&C.disconnect()}const C=(0,a.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;N.forEach((e=>{if(!(0,r.b)(t,e.el))return;const n=(0,r.c)(e.el,"[lang]");if(!n)return void(e.effectiveLocale=y);const i=n.lang;e.effectiveLocale=n.hasAttribute("lang")&&""===i?y:i}))}))})),A=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?v(e,(e=>e.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?v(e,(e=>c(e.trim())?new s(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){var t;if(e.locale=I(e?.locale),e.numberingSystem=(t=e?.numberingSystem,k(t)?t:z),!this._numberFormatOptions&&e.locale===y&&e.numberingSystem===z&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((e,t)=>[e,t]))),r=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=r.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?" ":this._actualGroup,this._decimal=r.find((e=>"decimal"===e.type)).value,this._minusSign=r.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>n.get(e)}}},40313:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(54038);function i(e,t,n){if(!(0,r.i)())return;const i=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new i(t,n)}}}]);
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-loader.js.map