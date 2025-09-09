"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["@esri-calcite-components-dist-components-calcite-dropdown-item"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteDropdownItem: function() { return /* binding */ CalciteDropdownItem; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources3.js */ "./node_modules/@esri/calcite-components/dist/components/resources3.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */








const dropdownItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.container a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}:host([scale=s]) .container{padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:0.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-xl)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-xl)}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}";
const CalciteDropdownItemStyle0 = dropdownItemCss;

const DropdownItem = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class DropdownItem extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteDropdownItemSelect = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteDropdownItemSelect", 6);
        this.calciteInternalDropdownItemSelect = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteInternalDropdownItemSelect", 6);
        this.calciteInternalDropdownItemKeyEvent = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteInternalDropdownItemKeyEvent", 6);
        this.calciteInternalDropdownCloseRequest = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteInternalDropdownCloseRequest", 6);
        this.disabled = false;
        this.href = undefined;
        this.iconFlipRtl = undefined;
        this.iconStart = undefined;
        this.iconEnd = undefined;
        this.label = undefined;
        this.rel = undefined;
        this.selected = false;
        this.target = undefined;
        this.selectionMode = "single";
        this.scale = "m";
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
        this.el?.focus();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentWillLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
        this.initialize();
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
    }
    connectedCallback() {
        this.initialize();
    }
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
    }
    render() {
        const { href, selectionMode, label, iconFlipRtl } = this;
        const iconStartEl = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", { key: '1ec1c941651dda8f39fa15427592141f04180f3e', class: _resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.iconStart, flipRtl: iconFlipRtl === "start" || iconFlipRtl === "both", icon: this.iconStart, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.scale) }));
        const contentNode = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("span", { key: '3ab167ed4054ca34b4e13e72b752af6cf25522ae', class: _resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.itemContent }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("slot", { key: '88cf44809fb48450c66cc8f105bbda008a78157d' })));
        const iconEndEl = ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", { key: '32fb27182943a032c0037f1f878a95c194d2dff1', class: _resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.iconEnd, flipRtl: iconFlipRtl === "end" || iconFlipRtl === "both", icon: this.iconEnd, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.scale) }));
        const slottedContent = this.iconStart && this.iconEnd
            ? [iconStartEl, contentNode, iconEndEl]
            : this.iconStart
                ? [iconStartEl, contentNode]
                : this.iconEnd
                    ? [contentNode, iconEndEl]
                    : contentNode;
        const contentEl = !href ? (slottedContent) : ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("a", { "aria-label": label, class: _resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.link, href: href, ref: (el) => (this.childLink = el), rel: this.rel, tabIndex: -1, target: this.target }, slottedContent));
        const itemRole = href
            ? null
            : selectionMode === "single"
                ? "menuitemradio"
                : selectionMode === "multiple"
                    ? "menuitemcheckbox"
                    : "menuitem";
        const itemAria = selectionMode !== "none" ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.selected) : null;
        const { disabled } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.Host, { key: 'beec8e51bf18bdcab1928181828b372cc70bb7ee', "aria-checked": itemAria, "aria-label": !href ? label : "", role: itemRole, tabIndex: disabled ? -1 : 0 }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_3__.I, { key: '5cbbd1074d6c571f4cac3a99e4a2c09bf113db55', disabled: disabled }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("div", { key: 'bff025aeb280c9d0d829e5cf4d94e9392604e607', class: {
                [_resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.container]: true,
                [_resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.containerNone]: selectionMode === "none",
            } }, selectionMode !== "none" ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", { class: _resources3_js__WEBPACK_IMPORTED_MODULE_4__.C.icon, icon: selectionMode === "multiple" ? "check" : "bullet-point", scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.scale) })) : null, contentEl))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    onClick() {
        this.emitRequestedItem();
    }
    keyDownHandler(event) {
        switch (event.key) {
            case " ":
            case "Enter":
                this.emitRequestedItem();
                if (this.href) {
                    this.childLink.click();
                }
                event.preventDefault();
                break;
            case "Escape":
                this.calciteInternalDropdownCloseRequest.emit();
                event.preventDefault();
                break;
            case "Tab":
                this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
                break;
            case "ArrowUp":
            case "ArrowDown":
            case "Home":
            case "End":
                event.preventDefault();
                this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
                break;
        }
    }
    updateActiveItemOnChange(event) {
        const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
        if (parentEmittedChange) {
            this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
            this.requestedDropdownItem = event.detail.requestedDropdownItem;
            this.determineActiveItem();
        }
        event.stopPropagation();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    initialize() {
        this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
        if (this.selectionMode === "none") {
            this.selected = false;
        }
    }
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multiple":
                if (this.el === this.requestedDropdownItem) {
                    this.selected = !this.selected;
                }
                break;
            case "single":
                if (this.el === this.requestedDropdownItem) {
                    this.selected = true;
                }
                else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
                    this.selected = false;
                }
                break;
            case "none":
                this.selected = false;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteDropdownItemSelect.emit();
        this.calciteInternalDropdownItemSelect.emit({
            requestedDropdownItem: this.el,
            requestedDropdownGroup: this.parentDropdownGroupEl,
        });
    }
    get el() { return this; }
    static get style() { return CalciteDropdownItemStyle0; }
}, [1, "calcite-dropdown-item", {
        "disabled": [516],
        "href": [513],
        "iconFlipRtl": [513, "icon-flip-rtl"],
        "iconStart": [513, "icon-start"],
        "iconEnd": [513, "icon-end"],
        "label": [1],
        "rel": [513],
        "selected": [1540],
        "target": [513],
        "selectionMode": [1, "selection-mode"],
        "scale": [513],
        "setFocus": [64]
    }, [[0, "click", "onClick"], [0, "keydown", "keyDownHandler"], [16, "calciteInternalDropdownItemChange", "updateActiveItemOnChange"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-dropdown-item", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-dropdown-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownItem);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteDropdownItem = DropdownItem;
const defineCustomElement = defineCustomElement$1;



//# sourceMappingURL=calcite-dropdown-item.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/component.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/component.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ componentOnReady; },
/* harmony export */   g: function() { return /* binding */ getIconScale; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function getIconScale(componentScale) {
    return componentScale === "l" ? "m" : "s";
}
/**
 * This util helps us wait for a component to be ready for both lazy-loading (`dist` output) and non-lazy-loading (`components` output) components.
 *
 * Based on https://github.com/ionic-team/ionic-framework/blob/1a8bd6d/core/src/utils/helpers.ts#L60C1-L79C3
 *
 * @param el - the host element to wait for
 */
async function componentOnReady(el) {
    await (isStencilEl(el)
        ? el.componentOnReady()
        : new Promise((resolve) => requestAnimationFrame(() => resolve())));
}
function isStencilEl(el) {
    return typeof el.componentOnReady === "function";
}



//# sourceMappingURL=component.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/dom.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/dom.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ filterDirectChildren; },
/* harmony export */   B: function() { return /* binding */ getSlotAssignedElements; },
/* harmony export */   C: function() { return /* binding */ getElementWidth; },
/* harmony export */   D: function() { return /* binding */ getTextWidth; },
/* harmony export */   E: function() { return /* binding */ getFirstTabbable; },
/* harmony export */   F: function() { return /* binding */ intersects; },
/* harmony export */   G: function() { return /* binding */ ensureId; },
/* harmony export */   H: function() { return /* binding */ getShadowRootNode; },
/* harmony export */   a: function() { return /* binding */ getElementDir; },
/* harmony export */   b: function() { return /* binding */ containsCrossShadowBoundary; },
/* harmony export */   c: function() { return /* binding */ closestElementCrossShadowBoundary; },
/* harmony export */   d: function() { return /* binding */ slotChangeHasAssignedElement; },
/* harmony export */   e: function() { return /* binding */ focusElement; },
/* harmony export */   f: function() { return /* binding */ focusFirstTabbable; },
/* harmony export */   g: function() { return /* binding */ getSlotted; },
/* harmony export */   h: function() { return /* binding */ isFocusable; },
/* harmony export */   i: function() { return /* binding */ isKeyboardTriggeredClick; },
/* harmony export */   j: function() { return /* binding */ tabbable; },
/* harmony export */   k: function() { return /* binding */ focusable; },
/* harmony export */   l: function() { return /* binding */ isTabbable; },
/* harmony export */   m: function() { return /* binding */ getTabIndex; },
/* harmony export */   n: function() { return /* binding */ tabbableOptions; },
/* harmony export */   o: function() { return /* binding */ setRequestedIcon; },
/* harmony export */   p: function() { return /* binding */ getModeName; },
/* harmony export */   q: function() { return /* binding */ queryElementRoots; },
/* harmony export */   r: function() { return /* binding */ slotChangeHasContent; },
/* harmony export */   s: function() { return /* binding */ slotChangeGetAssignedElements; },
/* harmony export */   t: function() { return /* binding */ toAriaBoolean; },
/* harmony export */   u: function() { return /* binding */ isBefore; },
/* harmony export */   v: function() { return /* binding */ focusElementInGroup; },
/* harmony export */   w: function() { return /* binding */ whenTransitionDone; },
/* harmony export */   x: function() { return /* binding */ whenAnimationDone; },
/* harmony export */   y: function() { return /* binding */ isPrimaryPointerButton; },
/* harmony export */   z: function() { return /* binding */ nodeListToArray; }
/* harmony export */ });
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guid.js */ "./node_modules/@esri/calcite-components/dist/components/guid.js");
/* harmony import */ var _resources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.js */ "./node_modules/@esri/calcite-components/dist/components/resources.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */



/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode$1 = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode$1(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode$1(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode$1(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode$1(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

/**
 * The default `focus-trap/tabbable` options.
 *
 * See https://github.com/focus-trap/tabbable#tabbable
 */
const tabbableOptions = {
    getShadowRoot: true,
};
/**
 * This helper will guarantee an ID on the provided element.
 *
 * If it already has an ID, it will be preserved, otherwise a unique one will be generated and assigned.
 *
 * @param {Element} el An element.
 * @returns {string} The element's ID.
 */
function ensureId(el) {
    if (!el) {
        return "";
    }
    return (el.id = el.id || `${el.tagName.toLowerCase()}-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_0__.g)()}`);
}
/**
 * This helper returns an array from a NodeList.
 *
 * @param {NodeList} nodeList A NodeList.
 * @returns {Element[]} An array of elements.
 */
function nodeListToArray(nodeList) {
    return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
/**
 * This helper returns the Calcite "mode" of an element.
 *
 * @param {HTMLElement} el An element.
 * @returns {"light"|"dark"} The Calcite mode.
 */
function getModeName(el) {
    const closestElWithMode = closestElementCrossShadowBoundary(el, `.${_resources_js__WEBPACK_IMPORTED_MODULE_1__.C.darkMode}, .${_resources_js__WEBPACK_IMPORTED_MODULE_1__.C.lightMode}`);
    return closestElWithMode?.classList.contains("calcite-mode-dark") ? "dark" : "light";
}
/**
 * This helper returns the direction of a HTML element.
 *
 * @param {HTMLElement} el An element.
 * @returns {Direction} The direction.
 */
function getElementDir(el) {
    const prop = "dir";
    const selector = `[${prop}]`;
    const closest = closestElementCrossShadowBoundary(el, selector);
    return closest ? closest.getAttribute(prop) : "ltr";
}
/**
 * This helper returns the computed width in pixels of a rendered HTMLElement.
 *
 * @param {HTMLElement} el An element.
 * @returns {number} The element's width.
 */
function getElementWidth(el) {
    if (!el) {
        return 0;
    }
    return parseFloat(getComputedStyle(el).inlineSize);
}
/**
 * This helper returns the rootNode of an element.
 *
 * @param {Element} el An element.
 * @returns {Document|ShadowRoot} The element's root node.
 */
function getRootNode(el) {
    return el.getRootNode();
}
/**
 * This helper returns the node's shadowRoot root node if it exists.
 *
 * @param {Element} el The element.
 * @returns {ShadowRoot|null} The element's root node ShadowRoot.
 */
function getShadowRootNode(el) {
    const rootNode = getRootNode(el);
    return "host" in rootNode ? rootNode : null;
}
/**
 * This helper returns the computed width in pixels a given text string takes up on screen.
 *
 * See https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
 *
 * @param {string} text The string of text to measure.
 * @param {string} font The CSS font attribute's value, which should include size and face, e.g. "12px Arial".
 */
function getTextWidth(text, font) {
    if (!text) {
        return 0;
    }
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
}
/**
 * This helper returns the host of a ShadowRoot.
 *
 * @param {Document | ShadowRoot} root A root element.
 * @returns {Element | null} The host element.
 */
function getHost(root) {
    return root.host || null;
}
/**
 * This helper queries an element's rootNode and any ancestor rootNodes.
 *
 * If both an 'id' and 'selector' are supplied, 'id' will take precedence over 'selector'.
 *
 * @param {Element} el An element.
 * @param root0
 * @param root0.selector
 * @param root0.id
 * @returns {Element} An element.
 */
function queryElementRoots(el, { selector, id, }) {
    if (!el) {
        return null;
    }
    if (el.assignedSlot) {
        el = el.assignedSlot;
    }
    const rootNode = getRootNode(el);
    const found = id
        ? "getElementById" in rootNode
            ? /*
                Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
                https://github.com/Esri/calcite-design-system/pull/4280
                 */
                rootNode.getElementById(id)
            : null
        : selector
            ? rootNode.querySelector(selector)
            : null;
    return found || queryElementRoots(getHost(rootNode), { selector, id });
}
function closestElementCrossShadowBoundary(element, selector) {
    return element
        ? element.closest(selector) || closestElementCrossShadowBoundary(getHost(getRootNode(element)), selector)
        : null;
}
/**
 * This utility helps invoke a callback as it traverses a node and its ancestors until reaching the root document.
 *
 * Returning early or undefined in `onVisit` will continue traversing up the DOM tree. Otherwise, traversal will halt with the returned value as the result of the function
 *
 * @param {Element} element An element.
 * @param {(node: Node) => Element} onVisit The callback.
 * @returns {Element} The result.
 */
function walkUpAncestry(element, onVisit) {
    return visit(element, onVisit);
}
function visit(node, onVisit) {
    if (!node) {
        return;
    }
    const result = onVisit(node);
    if (result !== undefined) {
        return result;
    }
    const { parentNode } = node;
    return visit(parentNode instanceof ShadowRoot ? parentNode.host : parentNode, onVisit);
}
/**
 * This helper returns true when an element has the descendant in question.
 *
 * @param {Element} element The starting element.
 * @param {Element} maybeDescendant The descendant.
 * @returns {boolean} The result.
 */
function containsCrossShadowBoundary(element, maybeDescendant) {
    return !!walkUpAncestry(maybeDescendant, (node) => (node === element ? true : undefined));
}
/**
 * This helper returns true when an element has a setFocus method.
 *
 * @param {Element} el An element.
 * @returns {boolean} The result.
 */
function isCalciteFocusable(el) {
    return typeof el?.setFocus === "function";
}
/**
 * This helper focuses an element using the `setFocus` method if available and falls back to using the `focus` method if not available.
 *
 * @param {Element} el An element.
 */
async function focusElement(el) {
    if (!el) {
        return;
    }
    return isCalciteFocusable(el) ? el.setFocus() : el.focus();
}
/**
 * Helper to get the first tabbable element.
 *
 * @param {HTMLElement} element The html element containing tabbable elements.
 * @returns the first tabbable element.
 */
function getFirstTabbable(element) {
    if (!element) {
        return;
    }
    return (tabbable(element, tabbableOptions)[0] ?? element);
}
/**
 * Helper to focus the first tabbable element.
 *
 * @param {HTMLElement} element The html element containing tabbable elements.
 */
function focusFirstTabbable(element) {
    getFirstTabbable(element)?.focus();
}
const defaultSlotSelector = ":not([slot])";
function getSlotted(element, slotName, options) {
    if (slotName && !Array.isArray(slotName) && typeof slotName !== "string") {
        options = slotName;
        slotName = null;
    }
    const slotSelector = slotName
        ? Array.isArray(slotName)
            ? slotName.map((name) => `[slot="${name}"]`).join(",")
            : `[slot="${slotName}"]`
        : defaultSlotSelector;
    if (options?.all) {
        return queryMultiple(element, slotSelector, options);
    }
    return querySingle(element, slotSelector, options);
}
function getDirectChildren(el, selector) {
    return el ? Array.from(el.children || []).filter((child) => child?.matches(selector)) : [];
}
function queryMultiple(element, slotSelector, options) {
    let matches = slotSelector === defaultSlotSelector
        ? getDirectChildren(element, defaultSlotSelector)
        : Array.from(element.querySelectorAll(slotSelector));
    matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
    matches = options?.matches ? matches.filter((el) => el?.matches(options.matches)) : matches;
    const selector = options?.selector;
    return selector
        ? matches
            .map((item) => Array.from(item.querySelectorAll(selector)))
            .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
            .filter((match) => !!match)
        : matches;
}
function querySingle(element, slotSelector, options) {
    let match = slotSelector === defaultSlotSelector
        ? getDirectChildren(element, defaultSlotSelector)[0] || null
        : element.querySelector(slotSelector);
    match = options && options.direct === false ? match : match?.parentElement === element ? match : null;
    match = options?.matches ? (match?.matches(options.matches) ? match : null) : match;
    const selector = options?.selector;
    return selector ? match?.querySelector(selector) : match;
}
/**
 * Filters direct children.
 *
 * @param {Element} el An element.
 * @param {string} selector The selector.
 * @returns {Element[]} An array of elements.
 */
function filterDirectChildren(el, selector) {
    return Array.from(el.children).filter((child) => child.matches(selector));
}
/**
 * Filters an array of HTML elements by the provided css selector string.
 *
 * @param {Element[]} elements An array of elements, such as one returned by HTMLSlotElement.assignedElements().
 * @param {string} selector The CSS selector string to filter the returned elements by.
 * @returns {Element[]} A filtered array of elements.
 */
function filterElementsBySelector(elements, selector) {
    return elements.filter((element) => element.matches(selector));
}
/**
 * Set a default icon from a defined set or allow an override with an icon name string
 *
 * @param {Record<string, string>} iconObject The icon object.
 * @param {string | boolean} iconValue The icon value.
 * @param {string} matchedValue The matched value.
 * @returns {string|undefined} The resulting icon value.
 */
function setRequestedIcon(iconObject, iconValue, matchedValue) {
    if (typeof iconValue === "string" && iconValue !== "") {
        return iconValue;
    }
    else if (iconValue === "") {
        return iconObject[matchedValue];
    }
}
/**
 * This helper returns true when two rectangles intersect.
 *
 * @param {DOMRect} rect1 The first rectangle.
 * @param {DOMRect} rect2 The second rectangle.
 * @returns {boolean} The result.
 */
function intersects(rect1, rect2) {
    return !(rect2.left > rect1.right ||
        rect2.right < rect1.left ||
        rect2.top > rect1.bottom ||
        rect2.bottom < rect1.top);
}
/**
 * This helper makes sure that boolean aria attributes are properly converted to a string.
 *
 * It should only be used for aria attributes that require a string value of "true" or "false".
 *
 * @param {boolean} value The value.
 * @returns {string} The string conversion of a boolean value ("true" | "false").
 */
function toAriaBoolean(value) {
    return Boolean(value).toString();
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has any content (text or elements).
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasContent = slotChangeHasContent(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any content.
 */
function slotChangeHasContent(event) {
    return slotChangeHasAssignedElement(event) || slotChangeHasTextContent(event);
}
/**
 * This helper returns a string of textContent if the target `slot` element from the `onSlotchange` event has any text content.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotText = slotChangeGetTextContent(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {string} The slots text.
 */
function slotChangeGetTextContent(event) {
    return slotChangeGetAssignedNodes(event)
        .filter((node) => node.nodeType === Node.TEXT_NODE)
        .map((node) => node.textContent)
        .join("")
        .trim();
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has any text content.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasTextContent = slotChangeHasTextContent(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any text content.
 */
function slotChangeHasTextContent(event) {
    return !!slotChangeGetTextContent(event);
}
/**
 * This helper returns the assigned nodes on a `slot` element from the `onSlotchange` event.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotNodes = slotChangeGetAssignedNodes(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned nodes.
 */
function slotChangeGetAssignedNodes(event) {
    return event.currentTarget.assignedNodes({
        flatten: true,
    });
}
/**
 * This helper returns `true` if the target `slot` element from the `onSlotchange` event has an assigned element.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @returns {boolean} Whether the slot has any assigned elements.
 */
function slotChangeHasAssignedElement(event) {
    return !!slotChangeGetAssignedElements(event).length;
}
/**
 * This helper returns the assigned elements on a `slot` element from the `onSlotchange` event.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotElements = slotChangeGetAssignedElements(event)} />}
 * ```
 *
 * @param {Event} event The event.
 * @param {string} selector The CSS selector string to filter the returned elements by.
 * @returns {Element[]} An array of elements.
 */
function slotChangeGetAssignedElements(event, selector) {
    return getSlotAssignedElements(event.target, selector);
}
/**
 * This helper returns the assigned elements on a `slot` element, filtered by an optional css selector.
 *
 * @param {HTMLSlotElement} slot The slot element.
 * @param {string} selector CSS selector string to filter the returned elements by.
 * @returns {Element[]} An array of elements.
 */
function getSlotAssignedElements(slot, selector) {
    const assignedElements = slot.assignedElements({
        flatten: true,
    });
    return selector ? filterElementsBySelector(assignedElements, selector) : assignedElements;
}
/**
 * This helper returns true if the pointer event fired from the primary button of the device.
 *
 * See https://www.w3.org/TR/pointerevents/#the-button-property.
 *
 * @param {PointerEvent} event The pointer event.
 * @returns {boolean} The value.
 */
function isPrimaryPointerButton(event) {
    return !!(event.isPrimary && event.button === 0);
}
/**
 * This helper returns true if the mouse event was triggered by a keyboard click.
 *
 * @param {MouseEvent} event The mouse event.
 * @returns {boolean} The value.
 */
function isKeyboardTriggeredClick(event) {
    // we assume event.detail = 0 is a keyboard click
    // see https://www.w3.org/TR/uievents/#event-type-click
    // see https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#usage_notes
    return event.detail === 0;
}
/**
 * This helper sets focus on and returns a destination element from within a group of provided elements.
 *
 * @param {Element[]} elements An array of elements.
 * @param {Element} currentElement The current element.
 * @param {FocusElementInGroupDestination} destination The target destination element to focus.
 * @param {boolean} cycle Should navigation cycle through elements or stop at extent - defaults to true.
 * @returns {Element} The focused element
 */
const focusElementInGroup = (elements, currentElement, destination, cycle = true) => {
    const currentIndex = elements.indexOf(currentElement);
    const isFirstItem = currentIndex === 0;
    const isLastItem = currentIndex === elements.length - 1;
    if (cycle) {
        destination =
            destination === "previous" && isFirstItem ? "last" : destination === "next" && isLastItem ? "first" : destination;
    }
    let focusTarget;
    if (destination === "previous") {
        focusTarget = elements[currentIndex - 1] || elements[cycle ? elements.length - 1 : currentIndex];
    }
    else if (destination === "next") {
        focusTarget = elements[currentIndex + 1] || elements[cycle ? 0 : currentIndex];
    }
    else if (destination === "last") {
        focusTarget = elements[elements.length - 1];
    }
    else {
        focusTarget = elements[0];
    }
    focusElement(focusTarget);
    return focusTarget;
};
/**
 * This helper determines if an element is before another element in the DOM.
 *
 * @param a the reference element to compare
 * @param b the element to compare against
 *
 * @returns true when a is before b in the DOM
 */
function isBefore(a, b) {
    if (a.parentNode !== b.parentNode) {
        return false;
    }
    const children = Array.from(a.parentNode.children);
    return children.indexOf(a) < children.indexOf(b);
}
/**
 * This util helps determine when an animation has completed.
 *
 * @param targetEl The element to watch for the animation to complete.
 * @param animationName The name of the animation to watch for completion.
 * @param onStart A callback to run when the animation starts.
 * @param onEnd A callback to run when the animation ends or is canceled.
 */
async function whenAnimationDone(targetEl, animationName, onStart, onEnd) {
    return whenTransitionOrAnimationDone(targetEl, animationName, "animation", onStart, onEnd);
}
/**
 * This util helps determine when a transition has completed.
 *
 * @param targetEl The element to watch for the transition to complete.
 * @param transitionProp The name of the transition to watch for completion.
 * @param onStart A callback to run when the transition starts.
 * @param onEnd A callback to run when the transition ends or is canceled.
 */
async function whenTransitionDone(targetEl, transitionProp, onStart, onEnd) {
    return whenTransitionOrAnimationDone(targetEl, transitionProp, "transition", onStart, onEnd);
}
/**
 * This util helps determine when a transition has completed.
 *
 * @param targetEl The element to watch for the transition or animation to complete.
 * @param transitionPropOrAnimationName The transition or animation property to watch for completion.
 * @param type The type of property to watch for completion. Defaults to "transition".
 * @param onStart A callback to run when the transition or animation starts.
 * @param onEnd A callback to run when the transition or animation ends or is canceled.
 */
async function whenTransitionOrAnimationDone(targetEl, transitionPropOrAnimationName, type, onStart, onEnd) {
    const style = window.getComputedStyle(targetEl);
    const allDurations = type === "transition" ? style.transitionDuration : style.animationDuration;
    const allProps = type === "transition" ? style.transitionProperty : style.animationName;
    const allDurationsArray = allDurations.split(",");
    const allPropsArray = allProps.split(",").map((prop) => prop.trim());
    const propIndex = allPropsArray.indexOf(transitionPropOrAnimationName);
    const duration = allDurationsArray[propIndex] ??
        /* Safari will have a single duration value for the shorthand prop when multiple, separate names/props are defined,
                so we fall back to it if there's no matching prop duration */
        allDurationsArray[0];
    function triggerFallbackStartEnd() {
        // offset callbacks by a frame to simulate event counterparts
        requestAnimationFrame(() => {
            onStart?.();
            requestAnimationFrame(() => onEnd?.());
        });
    }
    if (duration === "0s") {
        triggerFallbackStartEnd();
        return;
    }
    const startEvent = type === "transition" ? "transitionstart" : "animationstart";
    const endEvent = type === "transition" ? "transitionend" : "animationend";
    const cancelEvent = type === "transition" ? "transitioncancel" : "animationcancel";
    return new Promise((resolve) => {
        const fallbackTimeoutId = window.setTimeout(() => {
            targetEl.removeEventListener(startEvent, onTransitionOrAnimationStart);
            targetEl.removeEventListener(endEvent, onTransitionOrAnimationEndOrCancel);
            targetEl.removeEventListener(cancelEvent, onTransitionOrAnimationEndOrCancel);
            triggerFallbackStartEnd();
            resolve();
        }, parseFloat(duration) * 1000);
        targetEl.addEventListener(startEvent, onTransitionOrAnimationStart);
        targetEl.addEventListener(endEvent, onTransitionOrAnimationEndOrCancel);
        targetEl.addEventListener(cancelEvent, onTransitionOrAnimationEndOrCancel);
        function onTransitionOrAnimationStart(event) {
            if (event.target === targetEl && getTransitionOrAnimationName(event) === transitionPropOrAnimationName) {
                window.clearTimeout(fallbackTimeoutId);
                targetEl.removeEventListener(startEvent, onTransitionOrAnimationStart);
                onStart?.();
            }
        }
        function onTransitionOrAnimationEndOrCancel(event) {
            if (event.target === targetEl && getTransitionOrAnimationName(event) === transitionPropOrAnimationName) {
                targetEl.removeEventListener(endEvent, onTransitionOrAnimationEndOrCancel);
                targetEl.removeEventListener(cancelEvent, onTransitionOrAnimationEndOrCancel);
                onEnd?.();
                resolve();
            }
        }
    });
}
function isTransitionEvent(event) {
    return "propertyName" in event;
}
function getTransitionOrAnimationName(event) {
    return isTransitionEvent(event) ? event.propertyName : event.animationName;
}



//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/guid.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/guid.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ guid; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function gen(counts) {
    return counts
        .map((count) => {
        let out = "";
        for (let i = 0; i < count; i++) {
            out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return out;
    })
        .join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);



//# sourceMappingURL=guid.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/icon.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/icon.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ Icon; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */





const CSS = {
    icon: "icon",
    flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
    s: 16,
    m: 24,
    l: 32,
};
function generateIconId({ icon, scale }) {
    const size = scaleToPx[scale];
    const name = normalizeIconName(icon);
    const filled = name.charAt(name.length - 1) === "F";
    const iconName = filled ? name.substring(0, name.length - 1) : name;
    return `${iconName}${size}${filled ? "F" : ""}`;
}
async function fetchIcon(props) {
    const cachedIconKey = generateIconId(props);
    const cachedIconData = getCachedIconDataByKey(cachedIconKey);
    if (cachedIconData) {
        return cachedIconData;
    }
    if (!requestCache[cachedIconKey]) {
        requestCache[cachedIconKey] = fetch((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.getAssetPath)(`./assets/icon/${cachedIconKey}.json`))
            .then((resp) => resp.json())
            .catch(() => {
            console.error(`"${cachedIconKey}" is not a valid calcite-ui-icon name`);
            return "";
        });
    }
    const path = await requestCache[cachedIconKey];
    iconCache[cachedIconKey] = path;
    return path;
}
/**
 * Util to retrieve cached icon data based on icon name and scale.
 *
 * @param props – icon properties
 */
function getCachedIconData(props) {
    return getCachedIconDataByKey(generateIconId(props));
}
function getCachedIconDataByKey(id) {
    return iconCache[id];
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
    const numberLeadingName = !isNaN(Number(name.charAt(0)));
    const parts = name.split("-");
    const kebabCased = parts.length > 0;
    if (kebabCased) {
        const firstNonDigitInPartPattern = /[a-z]/i;
        name = parts
            .map((part, partIndex) => {
            return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
                const isFirstCharInName = partIndex === 0 && offset === 0;
                if (isFirstCharInName) {
                    return match;
                }
                return match.toUpperCase();
            });
        })
            .join("");
    }
    return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteIconStyle0 = iconCss;

const Icon = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.proxyCustomElement)(class Icon extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = null;
        this.flipRtl = false;
        this.scale = "m";
        this.textLabel = undefined;
        this.pathData = undefined;
        this.visible = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        if (!this.visible) {
            this.waitUntilVisible(() => {
                this.visible = true;
                this.loadIconPathData();
            });
        }
    }
    disconnectedCallback() {
        this.intersectionObserver?.disconnect();
        this.intersectionObserver = null;
    }
    render() {
        const { el, flipRtl, pathData, scale, textLabel } = this;
        const dir = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.a)(el);
        const size = scaleToPx[scale];
        const semantic = !!textLabel;
        const paths = [].concat(pathData || "");
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.Host, { key: '724265acdc6fb528bf7b25d7ec445c73a63f4c8e', "aria-hidden": (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)("svg", { key: '864ee2d80bebd282543ba5d94c57f84b48a6204d', "aria-hidden": "true", class: {
                [CSS.flipRtl]: dir === "rtl" && flipRtl,
                svg: true,
            }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)("path", { d: path })) : ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_3__.h)("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    async loadIconPathData() {
        const { icon, scale, visible } = this;
        if (!(0,_browser_js__WEBPACK_IMPORTED_MODULE_2__.i)() || !icon || !visible) {
            return;
        }
        const fetchIconProps = { icon, scale };
        const pathData = getCachedIconData(fetchIconProps) || (await fetchIcon(fetchIconProps));
        // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
        if (icon !== this.icon) {
            return;
        }
        this.pathData = pathData;
    }
    waitUntilVisible(callback) {
        this.intersectionObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_1__.c)("intersection", (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.intersectionObserver.disconnect();
                    this.intersectionObserver = null;
                    callback();
                }
            });
        }, { rootMargin: "50px" });
        if (!this.intersectionObserver) {
            callback();
            return;
        }
        this.intersectionObserver.observe(this.el);
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "icon": ["loadIconPathData"],
        "scale": ["loadIconPathData"]
    }; }
    static get style() { return CalciteIconStyle0; }
}, [1, "calcite-icon", {
        "icon": [513],
        "flipRtl": [516, "flip-rtl"],
        "scale": [513],
        "textLabel": [1, "text-label"],
        "pathData": [32],
        "visible": [32]
    }, undefined, {
        "icon": ["loadIconPathData"],
        "scale": ["loadIconPathData"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Icon);
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=icon.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/interactive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/interactive.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ InteractiveContainer; },
/* harmony export */   u: function() { return /* binding */ updateHostInteraction; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


function interceptedClick() {
    const { disabled } = this;
    if (!disabled) {
        HTMLElement.prototype.click.call(this);
    }
}
function onPointerDown(event) {
    const interactiveElement = event.target;
    if (interactiveElement.disabled) {
        // prevent click from moving focus on host
        event.preventDefault();
    }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
    const interactiveElement = event.target;
    // prevent disallowed mouse events from being emitted on the disabled host (per https://github.com/whatwg/html/issues/5886)
    // ⚠ we generally avoid stopping propagation of events, but this is needed to adhere to the intended spec changes above ⚠
    if (interactiveElement.disabled) {
        event.stopImmediatePropagation();
        event.preventDefault();
    }
}
const captureOnlyOptions = { capture: true };
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 */
function updateHostInteraction(component) {
    if (component.disabled) {
        component.el.setAttribute("aria-disabled", "true");
        if (component.el.contains(document.activeElement)) {
            document.activeElement.blur();
        }
        blockInteraction(component);
        return;
    }
    restoreInteraction(component);
    component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
    component.el.click = interceptedClick;
    addInteractionListeners(component.el);
}
function addInteractionListeners(element) {
    element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function restoreInteraction(component) {
    delete component.el.click; // fallback on HTMLElement.prototype.click
    removeInteractionListeners(component.el);
}
function removeInteractionListeners(element) {
    element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
    nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
const CSS = {
    container: "interaction-container",
};
const InteractiveContainer = ({ disabled }, children) => ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: CSS.container, inert: disabled }, ...children));



//# sourceMappingURL=interactive.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/loadable.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/loadable.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ setComponentLoaded; },
/* harmony export */   b: function() { return /* binding */ componentLoaded; },
/* harmony export */   c: function() { return /* binding */ componentFocusable; },
/* harmony export */   s: function() { return /* binding */ setUpLoadableComponent; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */



const resolveMap = new WeakMap();
const promiseMap = new WeakMap();
/**
 * This helper util sets up the component for the ability to know when the component has been loaded.
 *
 * This should be used in the `componentWillLoad` lifecycle hook.
 *
 * ```
 * componentWillLoad(): void {
 *   setUpLoadableComponent(this);
 * }
 * ```
 *
 * @param component
 */
function setUpLoadableComponent(component) {
    promiseMap.set(component, new Promise((resolve) => resolveMap.set(component, resolve)));
}
/**
 * This helper util lets the loadable component know that it is now loaded.
 *
 * This should be used in the `componentDidLoad` lifecycle hook.
 *
 * ```
 * componentDidLoad(): void {
 *   setComponentLoaded(this);
 * }
 * ```
 *
 * @param component
 */
function setComponentLoaded(component) {
    resolveMap.get(component)();
}
/**
 * This helper util can be used to ensure a component has been loaded (The "componentDidLoad" Stencil lifecycle method has been called).
 *
 * Requires requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first.
 *
 * ```
 * async myMethod(): Promise<void> {
 *   await componentLoaded(this);
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
function componentLoaded(component) {
    return promiseMap.get(component);
}
/**
 * This helper util can be used to ensuring the component is loaded and rendered by the browser (The "componentDidLoad" Stencil lifecycle method has been called and any internal elements are focusable).
 *
 * Requires `LoadableComponent` to be implemented.
 *
 * A component developer can await this method before proceeding with any logic that requires a component to be loaded first and then an internal element be focused.
 *
 * ```
 * async setFocus(): Promise<void> {
 *   await componentFocusable(this);
 *   this.internalElement?.focus();
 * }
 * ```
 *
 * @param component
 * @returns Promise<void>
 */
async function componentFocusable(component) {
    await componentLoaded(component);
    if (!(0,_browser_js__WEBPACK_IMPORTED_MODULE_0__.i)()) {
        return;
    }
    (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_1__.forceUpdate)(component);
    return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}



//# sourceMappingURL=loadable.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/observers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/observers.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ createObserver; }
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
function createObserver(type, callback, options) {
    if (!(0,_browser_js__WEBPACK_IMPORTED_MODULE_0__.i)()) {
        return undefined;
    }
    const Observer = getObserver(type);
    return new Observer(callback, options);
}
function getObserver(type) {
    // based on https://github.com/whatwg/dom/issues/126#issuecomment-1049814948
    class ExtendedMutationObserver extends window.MutationObserver {
        constructor(callback) {
            super(callback);
            this.observedEntry = [];
            this.callback = callback;
        }
        observe(target, options) {
            this.observedEntry.push({ target, options });
            return super.observe(target, options);
        }
        unobserve(target) {
            const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
            this.observedEntry = [];
            this.callback(super.takeRecords(), this);
            this.disconnect();
            newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
        }
    }
    return (function () {
        return (type === "intersection"
            ? window.IntersectionObserver
            : type === "mutation"
                ? ExtendedMutationObserver
                : window.ResizeObserver);
    })();
}



//# sourceMappingURL=observers.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/resources3.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources3.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ CSS; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const CSS = {
    container: "container",
    containerNone: "container--none-selection",
    icon: "dropdown-item-icon",
    iconEnd: "dropdown-item-icon--end",
    iconStart: "dropdown-item-icon--start",
    itemContent: "dropdown-item-content",
    link: "dropdown-link",
};



//# sourceMappingURL=resources3.js.map

/***/ })

}]);
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-dropdown-item.js.map