"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["@esri-calcite-components-dist-components-calcite-dropdown-group"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteDropdownGroup: function() { return /* binding */ CalciteDropdownGroup; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/* harmony import */ var _resources3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources3.js */ "./node_modules/@esri/calcite-components/dist/components/resources3.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const dropdownGroupCss = ":host{position:relative;display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteDropdownGroupStyle0 = dropdownGroupCss;

const DropdownGroup = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.proxyCustomElement)(class DropdownGroup extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteInternalDropdownItemChange = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.createEvent)(this, "calciteInternalDropdownItemChange", 6);
        this.updateItems = () => {
            Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((item) => (item.selectionMode = this.selectionMode));
        };
        this.mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_0__.c)("mutation", () => this.updateItems());
        this.groupTitle = undefined;
        this.scale = "m";
        this.selectionMode = "single";
    }
    handlePropsChange() {
        this.updateItems();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.updateItems();
        this.mutationObserver?.observe(this.el, { childList: true });
    }
    componentWillLoad() {
        this.groupPosition = this.getGroupPosition();
    }
    disconnectedCallback() {
        this.mutationObserver?.disconnect();
    }
    render() {
        const groupTitle = this.groupTitle ? ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("span", { "aria-hidden": "true", class: "dropdown-title" }, this.groupTitle)) : null;
        const dropdownSeparator = this.groupPosition > 0 ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { class: "dropdown-separator", role: "separator" }) : null;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.Host, { key: 'f41943751aefdb17d4f5d5bd8778c219cfd01a00', "aria-label": this.groupTitle, role: "group" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("div", { key: '87b78040b93c06081ca8282a785d466ed8fcf334', class: {
                [_resources3_js__WEBPACK_IMPORTED_MODULE_1__.C.container]: true,
            } }, dropdownSeparator, groupTitle, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.h)("slot", { key: 'f635a5bdbe439315eba6292a4858cbd8519d23d1' }))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    updateActiveItemOnChange(event) {
        this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
        this.requestedDropdownItem = event.detail.requestedDropdownItem;
        this.calciteInternalDropdownItemChange.emit({
            requestedDropdownGroup: this.requestedDropdownGroup,
            requestedDropdownItem: this.requestedDropdownItem,
        });
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    getGroupPosition() {
        return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
    }
    static get delegatesFocus() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "selectionMode": ["handlePropsChange"]
    }; }
    static get style() { return CalciteDropdownGroupStyle0; }
}, [17, "calcite-dropdown-group", {
        "groupTitle": [513, "group-title"],
        "scale": [513],
        "selectionMode": [513, "selection-mode"]
    }, [[0, "calciteInternalDropdownItemSelect", "updateActiveItemOnChange"]], {
        "selectionMode": ["handlePropsChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-dropdown-group"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-dropdown-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DropdownGroup);
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteDropdownGroup = DropdownGroup;
const defineCustomElement = defineCustomElement$1;



//# sourceMappingURL=calcite-dropdown-group.js.map

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
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-dropdown-group.js.map