"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["@esri-calcite-components-dist-components-calcite-list-item-group"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-list-item-group.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-list-item-group.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteListItemGroup: function() { return /* binding */ CalciteListItemGroup; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _resources4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources4.js */ "./node_modules/@esri/calcite-components/dist/components/resources4.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const CSS = {
    container: "container",
    heading: "heading",
};

const listItemGroupCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteListItemGroupStyle0 = listItemGroupCss;

const ListItemGroup = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class ListItemGroup extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteInternalListItemGroupDefaultSlotChange = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalListItemGroupDefaultSlotChange", 6);
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleDefaultSlotChange = () => {
            this.calciteInternalListItemGroupDefaultSlotChange.emit();
        };
        this.disabled = false;
        this.filterHidden = false;
        this.heading = undefined;
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_0__.u)(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { disabled, heading } = this;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.Host, { key: 'e1e0304c3d4fe02909fd0075de2e4f5ef806be39' }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_0__.I, { key: '5fb0861fb58de90808e98b7061d3c906c822203c', disabled: disabled }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("tr", { key: 'c77af78f937c3135601df2c4574b858662d5fcdb', class: CSS.container }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("td", { key: 'f1ae6b9e09e78f87b814287f8eaeb0a105575c7a', class: CSS.heading, colSpan: _resources4_js__WEBPACK_IMPORTED_MODULE_1__.M }, heading)), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: '7346d5d774173403910eddd35bf700ccd1437c4f', onSlotchange: this.handleDefaultSlotChange }))));
    }
    get el() { return this; }
    static get style() { return CalciteListItemGroupStyle0; }
}, [1, "calcite-list-item-group", {
        "disabled": [516],
        "filterHidden": [516, "filter-hidden"],
        "heading": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-list-item-group"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-list-item-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ListItemGroup);
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteListItemGroup = ListItemGroup;
const defineCustomElement = defineCustomElement$1;



//# sourceMappingURL=calcite-list-item-group.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/resources4.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/resources4.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ CSS; },
/* harmony export */   I: function() { return /* binding */ ICONS; },
/* harmony export */   M: function() { return /* binding */ MAX_COLUMNS; },
/* harmony export */   S: function() { return /* binding */ SLOTS; },
/* harmony export */   a: function() { return /* binding */ activeCellTestAttribute; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const CSS = {
    wrapper: "wrapper",
    wrapperBordered: "wrapper--bordered",
    container: "container",
    containerHover: "container--hover",
    containerBorder: "container--border",
    containerBorderSelected: "container--border-selected",
    containerBorderUnselected: "container--border-unselected",
    contentContainer: "content-container",
    contentContainerUnavailable: "content-container--unavailable",
    contentContainerSelectable: "content-container--selectable",
    contentContainerHasCenterContent: "content-container--has-center-content",
    nestedContainer: "nested-container",
    nestedContainerOpen: "nested-container--open",
    content: "content",
    customContent: "custom-content",
    actionsStart: "actions-start",
    contentStart: "content-start",
    label: "label",
    description: "description",
    contentEnd: "content-end",
    contentBottom: "content-bottom",
    actionsEnd: "actions-end",
    selectionContainer: "selection-container",
    selectionContainerSingle: "selection-container--single",
    openContainer: "open-container",
    dragContainer: "drag-container",
    close: "close",
};
const SLOTS = {
    actionsStart: "actions-start",
    contentStart: "content-start",
    content: "content",
    contentBottom: "content-bottom",
    contentEnd: "content-end",
    actionsEnd: "actions-end",
};
// Set to zero to extend until the end of the table section.
const MAX_COLUMNS = 0;
const ICONS = {
    selectedMultiple: "check-square-f",
    selectedSingle: "bullet-point-large",
    unselectedMultiple: "square",
    unselectedSingle: "bullet-point-large",
    closedLTR: "chevron-right",
    closedRTL: "chevron-left",
    open: "chevron-down",
    blank: "blank",
    close: "x",
};
const activeCellTestAttribute = "data-test-active";



//# sourceMappingURL=resources4.js.map

/***/ })

}]);
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-list-item-group.js.map