"use strict";
(self["webpackChunkdefra"] = self["webpackChunkdefra"] || []).push([["@esri-calcite-components-dist-components-calcite-chip"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/calcite-chip.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/calcite-chip.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalciteChip: function() { return /* binding */ CalciteChip; },
/* harmony export */   defineCustomElement: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _chip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chip.js */ "./node_modules/@esri/calcite-components/dist/components/chip.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */


const CalciteChip = _chip_js__WEBPACK_IMPORTED_MODULE_0__.C;
const defineCustomElement = _chip_js__WEBPACK_IMPORTED_MODULE_0__.d;



//# sourceMappingURL=calcite-chip.js.map

/***/ }),

/***/ "./node_modules/@esri/calcite-components/dist/components/chip.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/chip.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ Chip; },
/* harmony export */   d: function() { return /* binding */ defineCustomElement; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadable.js */ "./node_modules/@esri/calcite-components/dist/components/loadable.js");
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t9n.js */ "./node_modules/@esri/calcite-components/dist/components/t9n.js");
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/@esri/calcite-components/dist/components/interactive.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component.js */ "./node_modules/@esri/calcite-components/dist/components/component.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon.js */ "./node_modules/@esri/calcite-components/dist/components/icon.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */











const CSS = {
    title: "title",
    close: "close",
    imageContainer: "image-container",
    chipIcon: "chip-icon",
    textSlotted: "text--slotted",
    container: "container",
    imageSlotted: "image--slotted",
    closable: "closable",
    multiple: "multiple",
    single: "single",
    selectable: "selectable",
    selectIcon: "select-icon",
    selectIconActive: "select-icon--active",
    nonInteractive: "non-interactive",
    isCircle: "is-circle",
    selected: "selected",
};
const SLOTS = {
    image: "image",
};
const ICONS = {
    close: "x",
    checkedSingle: "circle-f",
    uncheckedMultiple: "square",
    checkedMultiple: "check-square-f",
};

const chipCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;cursor:default;border-radius:var(--calcite-chip-corner-radius, 9999px)}:host([closed]){display:none}:host([appearance=outline]) .container,:host([appearance=outline-fill]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([appearance=outline]):host([kind=brand]) .container,:host([appearance=outline-fill]):host([kind=brand]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-brand))}:host([appearance=outline]):host([kind=inverse]) .container,:host([appearance=outline-fill]):host([kind=inverse]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-inverse))}:host([appearance=outline]):host([kind=neutral]) .container,:host([appearance=outline-fill]):host([kind=neutral]) .container{border-color:var(--calcite-chip-border-color, var(--calcite-color-border-1))}:host([appearance=outline]) .container{background-color:transparent}:host([appearance=outline-fill]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-1))}:host([appearance=solid]) .container{border-color:transparent}:host([appearance=solid]):host([kind=brand]) .container,:host([appearance=solid]):host([kind=inverse]) .container{color:var(--calcite-chip-text-color, var(--calcite-color-text-inverse))}:host([appearance=solid]):host([kind=brand]) .close,:host([appearance=solid]):host([kind=inverse]) .close{outline-color:var(--calcite-color-text-inverse)}:host([appearance=solid]):host([kind=brand]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-brand))}:host([appearance=solid]):host([kind=inverse]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-inverse))}:host([appearance=solid]):host([kind=neutral]) .container{background-color:var(--calcite-chip-background-color, var(--calcite-color-foreground-2))}:host([kind=neutral]) .container{--calcite-internal-chip-close-icon-color:var(--calcite-color-text-3);color:var(--calcite-chip-text-color, var(--calcite-color-text-1))}:host([selected]) .select-icon{opacity:1}:host([scale=s]) .container{--calcite-internal-chip-block-size:1.5rem ;--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--2);--calcite-internal-chip-icon-size:1rem ;--calcite-internal-chip-icon-space:0.25rem ;--calcite-internal-chip-image-size:1.25rem ;--calcite-internal-chip-title-space:0.25rem ;--calcite-internal-close-size:1rem }:host([scale=s]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px)}:host([scale=s]) .container.image--slotted:has(.chip-icon),:host([scale=s]) .container.image--slotted.text--slotted,:host([scale=s]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.25rem }:host([scale=s]) .container.image--slotted:not(.text--slotted,:has(.chip-icon)),:host([scale=s]) .container.image--slotted:not(.selectable){--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=s]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=s]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=s]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.375rem ;--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=s]) .container.multiple:not(.is-circle).image--slotted:not(.text--slotted){--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container{--calcite-internal-chip-block-size:2rem ;--calcite-internal-chip-container-space-x-end:0.375rem ;--calcite-internal-chip-container-space-x-start:0.375rem ;--calcite-internal-chip-font-size:var(--calcite-font-size--1);--calcite-internal-chip-icon-size:1.5rem ;--calcite-internal-chip-icon-space:0.375rem ;--calcite-internal-chip-image-size:1.5rem ;--calcite-internal-chip-title-space:0.375rem ;--calcite-internal-close-size:1.5rem }:host([scale=m]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-container-space-x-start:var(--calcite-spacing-px)}:host([scale=m]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.image--slotted:has(.chip-icon),:host([scale=m]) .container.image--slotted.text--slotted,:host([scale=m]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.375rem }:host([scale=m]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=m]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:var(--calcite-spacing-px);--calcite-internal-chip-select-space-x-start:0}:host([scale=m]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.375rem }:host([scale=m]) .container.multiple:not(.is-circle){--calcite-internal-chip-select-space-x-end:0.125rem ;--calcite-internal-chip-select-space-x-start:0.125rem }:host([scale=m]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.5rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=m]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.25rem }:host([scale=l]) .container{--calcite-internal-chip-block-size:2.75rem ;--calcite-internal-chip-container-space-x-end:0.5rem ;--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-font-size:var(--calcite-font-size-0);--calcite-internal-chip-icon-size:2rem ;--calcite-internal-chip-icon-space:0.5rem ;--calcite-internal-chip-image-size:2rem ;--calcite-internal-chip-title-space:0.5rem ;--calcite-internal-close-size:2rem }:host([scale=l]) .container:not(.closable).is-circle{--calcite-internal-chip-container-space-x-end:0.25rem ;--calcite-internal-chip-container-space-x-start:0.25rem }:host([scale=l]) .container.image--slotted:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.image--slotted:has(.chip-icon),:host([scale=l]) .container.image--slotted.text--slotted,:host([scale=l]) .container.image--slotted.closable{--calcite-internal-chip-image-space-x-end:0.5rem }:host([scale=l]) .container.selectable.single:not(.is-circle).image--slotted{--calcite-internal-chip-container-space-x-start:0.375rem }:host([scale=l]) .container.selectable.single:not(.is-circle).selected{--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0}:host([scale=l]) .container.selectable.single:not(.is-circle).selected.image--slotted{--calcite-internal-chip-select-space-x-end:0.375rem ;--calcite-internal-chip-select-space-x-start:0.5rem }:host([scale=l]) .container.multiple:not(.is-circle){--calcite-internal-chip-container-space-x-start:0.5rem ;--calcite-internal-chip-select-space-x-end:0.25rem ;--calcite-internal-chip-select-space-x-start:0.25rem }:host([scale=l]) .container.multiple:not(.is-circle).image--slotted{--calcite-internal-chip-select-space-x-end:0.75rem }:host([scale=l]) .container.closable:not(.is-circle){--calcite-internal-chip-container-space-x-end:0.375rem }.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;border-radius:var(--calcite-chip-corner-radius, 9999px);border-width:var(--calcite-border-width-sm);border-style:solid;font-size:var(--calcite-internal-chip-font-size, var(--calcite-font-size));padding-inline-start:var(--calcite-internal-chip-container-space-x-start);padding-inline-end:var(--calcite-internal-chip-container-space-x-end);block-size:var(--calcite-internal-chip-block-size, auto);inline-size:var(--calcite-internal-chip-inline-size, auto);min-inline-size:var(--calcite-internal-chip-block-size, auto)}.container:hover .select-icon--active{opacity:1}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.container:not(.text--slotted) .title,.container:not(.image--slotted) .image-container{display:none}.container.is-circle .chip-icon,.container.is-circle .image-container{padding:0}.title{padding-inline:var(--calcite-internal-chip-title-space)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none;block-size:var(--calcite-internal-chip-image-size, 1.5rem);inline-size:var(--calcite-internal-chip-image-size, 1.5rem);padding-inline-start:0;padding-inline-end:var(--calcite-internal-chip-image-space-x-end, 0)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-chip-icon-color, var(--calcite-chip-text-color, var(--calcite-icon-color, currentColor)));padding-inline:var(--calcite-internal-chip-icon-space, 0.375rem)}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:absolute;visibility:hidden;inline-size:auto;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out;color:var(--calcite-chip-select-icon-color, currentColor)}.select-icon.select-icon--active{position:relative;visibility:visible;opacity:0.5;color:var(--calcite-chip-select-icon-color-pressed, var(--calcite-chip-select-icon-color, currentColor))}.multiple .select-icon{display:flex;align-items:center;justify-content:center}.multiple .select-icon,.single .select-icon--active{padding-inline-start:var(--calcite-internal-chip-select-space-x-start);padding-inline-end:var(--calcite-internal-chip-select-space-x-end);block-size:var(--calcite-internal-chip-icon-size, 1.5rem);inline-size:var(--calcite-internal-chip-icon-size, 1.5rem)}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}.close{margin:0px;cursor:pointer;align-items:center;border-radius:50%;border-style:none;outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-close-background-color, var(--calcite-color-transparent));-webkit-appearance:none;display:flex;align-content:center;justify-content:center;color:var(--calcite-chip-close-icon-color, var(--calcite-close-icon-color, var(--calcite-internal-chip-close-icon-color, var(--calcite-color-text-1))));block-size:var(--calcite-internal-close-size, 1.5rem);inline-size:var(--calcite-internal-close-size, 1.5rem);padding:0}.close:hover,.close:focus{background-color:var(--calcite-close-background-color-hover, var(--calcite-color-transparent-hover))}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-close-background-color-press, var(--calcite-color-transparent-press))}.close calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteChipStyle0 = chipCss;

const Chip = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.proxyCustomElement)(class Chip extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteChipClose = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteChipClose", 6);
        this.calciteChipSelect = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteChipSelect", 6);
        this.calciteInternalChipKeyEvent = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalChipKeyEvent", 6);
        this.calciteInternalChipSelect = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalChipSelect", 6);
        this.calciteInternalSyncSelectedChips = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.createEvent)(this, "calciteInternalSyncSelectedChips", 6);
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleDefaultSlotChange = () => {
            this.updateHasText();
        };
        this.close = () => {
            this.calciteChipClose.emit();
            this.selected = false;
            this.closed = true;
        };
        this.closeButtonKeyDownHandler = (event) => {
            if ((0,_key_js__WEBPACK_IMPORTED_MODULE_5__.i)(event.key)) {
                event.preventDefault();
                this.close();
            }
        };
        this.handleSlotImageChange = (event) => {
            this.hasImage = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.d)(event);
        };
        this.handleEmittingEvent = () => {
            if (this.interactive) {
                this.calciteChipSelect.emit();
            }
        };
        this.disabled = false;
        this.appearance = "solid";
        this.kind = "neutral";
        this.closable = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.scale = "m";
        this.label = undefined;
        this.value = undefined;
        this.closed = false;
        this.selectionMode = "none";
        this.selected = false;
        this.messageOverrides = undefined;
        this.messages = undefined;
        this.interactive = false;
        this.parentChipGroup = undefined;
        this.defaultMessages = undefined;
        this.effectiveLocale = undefined;
        this.hasText = false;
        this.hasImage = false;
    }
    watchSelected(selected) {
        if (this.selectionMode === "none") {
            return;
        }
        this.handleSelectionPropertyChange(selected);
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    effectiveLocaleChange() {
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    }
    componentDidLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.a)(this);
        if (this.selectionMode !== "none" && this.interactive && this.selected) {
            this.handleSelectionPropertyChange(this.selected);
        }
    }
    componentDidRender() {
        (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
    }
    disconnectedCallback() {
        (0,_locale_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
        (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    }
    async componentWillLoad() {
        (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.s)(this);
        if ((0,_browser_js__WEBPACK_IMPORTED_MODULE_7__.i)()) {
            await (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
            this.updateHasText();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(event) {
        if (event.target === this.el) {
            switch (event.key) {
                case " ":
                case "Enter":
                    this.handleEmittingEvent();
                    event.preventDefault();
                    break;
                case "ArrowRight":
                case "ArrowLeft":
                case "Home":
                case "End":
                    this.calciteInternalChipKeyEvent.emit(event);
                    event.preventDefault();
                    break;
            }
        }
    }
    clickHandler() {
        if (!this.interactive && this.closable) {
            this.closeButtonEl.focus();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await (0,_loadable_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
        if (!this.disabled && this.interactive) {
            this.containerEl?.focus();
        }
        else if (!this.disabled && this.closable) {
            this.closeButtonEl?.focus();
        }
    }
    updateHasText() {
        this.hasText = this.el.textContent.trim().length > 0;
    }
    handleSelectionPropertyChange(selected) {
        if (this.selectionMode === "single") {
            this.calciteInternalSyncSelectedChips.emit();
        }
        const selectedInParent = this.parentChipGroup.selectedItems.includes(this.el);
        if (!selectedInParent && selected && this.selectionMode !== "multiple") {
            this.calciteInternalChipSelect.emit();
        }
        if (this.selectionMode !== "single") {
            this.calciteInternalSyncSelectedChips.emit();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    renderChipImage() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: CSS.imageContainer }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { name: SLOTS.image, onSlotchange: this.handleSlotImageChange })));
    }
    renderSelectionIcon() {
        const icon = this.selectionMode === "multiple"
            ? this.selected
                ? ICONS.checkedMultiple
                : ICONS.uncheckedMultiple
            : this.selected
                ? ICONS.checkedSingle
                : undefined;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("div", { class: {
                [CSS.selectIcon]: true,
                [CSS.selectIconActive]: this.selectionMode === "multiple" || this.selected,
            } }, icon ? (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }) : null));
    }
    renderCloseButton() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("button", { "aria-label": this.messages.dismissLabel, class: CSS.close, onClick: this.close, onKeyDown: this.closeButtonKeyDownHandler, ref: (el) => (this.closeButtonEl = el), tabIndex: this.disabled ? -1 : 0 }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { icon: ICONS.close, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) })));
    }
    renderIcon() {
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("calcite-icon", { class: CSS.chipIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.scale) }));
    }
    render() {
        const { disabled } = this;
        const disableInteraction = disabled || (!disabled && !this.interactive);
        const role = this.selectionMode === "multiple" && this.interactive
            ? "checkbox"
            : this.selectionMode !== "none" && this.interactive
                ? "radio"
                : this.interactive
                    ? "button"
                    : undefined;
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.Host, { key: '7feca8bad37627baabfc4abd25cf135e1e9f196b' }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)(_interactive_js__WEBPACK_IMPORTED_MODULE_3__.I, { key: 'af2360b4b768ae8c643d52f4bdb9f5d282504114', disabled: disabled }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("div", { key: '8d905c4ab20d271a211282b95ebcb2d305d76cb7', "aria-checked": this.selectionMode !== "none" && this.interactive
                ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.selected)
                : undefined, "aria-label": this.label, class: {
                [CSS.container]: true,
                [CSS.textSlotted]: this.hasText,
                [CSS.imageSlotted]: this.hasImage,
                [CSS.selectable]: this.selectionMode !== "none",
                [CSS.multiple]: this.selectionMode === "multiple",
                [CSS.single]: this.selectionMode === "single" || this.selectionMode === "single-persist",
                [CSS.selected]: this.selected,
                [CSS.closable]: this.closable,
                [CSS.nonInteractive]: !this.interactive,
                [CSS.isCircle]: !this.closable &&
                    !this.hasText &&
                    (!this.icon || !this.hasImage) &&
                    (this.selectionMode === "none" ||
                        (!!this.selectionMode && this.selectionMode !== "multiple" && !this.selected)),
            }, onClick: this.handleEmittingEvent, ref: (el) => (this.containerEl = el), role: role, tabIndex: disableInteraction ? -1 : 0 }, this.selectionMode !== "none" && this.renderSelectionIcon(), this.renderChipImage(), this.icon && this.renderIcon(), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("span", { key: 'dab6eae3f8330b85ffac4c7fe1b2fcbb53327196', class: CSS.title }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_9__.h)("slot", { key: '72ba5bd0c7a97c30f766da119f419261aab24acb', onSlotchange: this.handleDefaultSlotChange })), this.closable && this.renderCloseButton()))));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "selected": ["watchSelected"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteChipStyle0; }
}, [1, "calcite-chip", {
        "disabled": [516],
        "appearance": [513],
        "kind": [513],
        "closable": [516],
        "icon": [513],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "scale": [513],
        "label": [1],
        "value": [8],
        "closed": [1540],
        "selectionMode": [1, "selection-mode"],
        "selected": [1540],
        "messageOverrides": [1040],
        "messages": [1040],
        "interactive": [4],
        "parentChipGroup": [16],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "hasText": [32],
        "hasImage": [32],
        "setFocus": [64]
    }, [[0, "keydown", "keyDownHandler"], [0, "click", "clickHandler"]], {
        "selected": ["watchSelected"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-chip", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-chip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Chip);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                (0,_icon_js__WEBPACK_IMPORTED_MODULE_8__.d)();
            }
            break;
    } });
}
defineCustomElement();



//# sourceMappingURL=chip.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/key.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/key.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ isActivationKey; },
/* harmony export */   n: function() { return /* binding */ numberKeys; }
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function isActivationKey(key) {
    return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



//# sourceMappingURL=key.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/locale.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/locale.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ BigDecimal; },
/* harmony export */   N: function() { return /* binding */ NumberStringFormat; },
/* harmony export */   a: function() { return /* binding */ addLocalizedTrailingDecimalZeros; },
/* harmony export */   b: function() { return /* binding */ getDateTimeFormat; },
/* harmony export */   c: function() { return /* binding */ connectLocalized; },
/* harmony export */   d: function() { return /* binding */ disconnectLocalized; },
/* harmony export */   e: function() { return /* binding */ getDateFormatSupportedLocale; },
/* harmony export */   f: function() { return /* binding */ getSupportedNumberingSystem; },
/* harmony export */   g: function() { return /* binding */ getSupportedLocale; },
/* harmony export */   i: function() { return /* binding */ isValidNumber; },
/* harmony export */   n: function() { return /* binding */ numberStringFormatter; },
/* harmony export */   p: function() { return /* binding */ parseNumberString; },
/* harmony export */   s: function() { return /* binding */ sanitizeNumberString; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./node_modules/@esri/calcite-components/dist/components/dom.js");
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key.js */ "./node_modules/@esri/calcite-components/dist/components/key.js");
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observers.js */ "./node_modules/@esri/calcite-components/dist/components/observers.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
// adopted from https://stackoverflow.com/a/66939244
class BigDecimal {
    constructor(input) {
        if (input instanceof BigDecimal) {
            return input;
        }
        const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
        this.value =
            BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) +
                BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
        this.isNegative = input.charAt(0) === "-";
    }
    getIntegersAndDecimals() {
        const s = this.value
            .toString()
            .replace("-", "")
            .padStart(BigDecimal.DECIMALS + 1, "0");
        const integers = s.slice(0, -BigDecimal.DECIMALS);
        const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
        return { integers, decimals };
    }
    toString() {
        const { integers, decimals } = this.getIntegersAndDecimals();
        return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
    }
    formatToParts(formatter) {
        const { integers, decimals } = this.getIntegersAndDecimals();
        const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
        this.isNegative && parts.unshift({ type: "minusSign", value: formatter.minusSign });
        if (decimals.length) {
            parts.push({ type: "decimal", value: formatter.decimal });
            decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
        }
        return parts;
    }
    format(formatter) {
        const { integers, decimals } = this.getIntegersAndDecimals();
        const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
        const decimalsFormatted = decimals.length
            ? `${formatter.decimal}${decimals
                .split("")
                .map((char) => formatter.numberFormatter.format(Number(char)))
                .join("")}`
            : "";
        return `${integersFormatted}${decimalsFormatted}`;
    }
    add(n) {
        return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
    }
    subtract(n) {
        return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
    }
    multiply(n) {
        return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
    }
    divide(n) {
        return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
    }
}
// Configuration: constants
BigDecimal.DECIMALS = 100; // number of decimals on all instances
BigDecimal.ROUNDED = true; // numbers are truncated (false) or rounded (true)
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? ((dividend * BigInt(2)) / divisor) % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
function isValidNumber(numberString) {
    return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
    if (!numberString || !stringContainsNumbers(numberString)) {
        return "";
    }
    return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
        let containsDecimal = false;
        const result = nonExpoNumString
            .split("")
            .filter((value, i) => {
            if (value.match(/\./g) && !containsDecimal) {
                containsDecimal = true;
                return true;
            }
            if (value.match(/-/g) && i === 0) {
                return true;
            }
            return _key_js__WEBPACK_IMPORTED_MODULE_1__.n.includes(value);
        })
            .join("");
        return isValidNumber(result) ? new BigDecimal(result).toString() : "";
    });
}
// regex for number sanitization
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const hasTrailingDecimalZeros = /0*$/;
const sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    const sanitizedValue = nonExpoNumString
        .replace(allHyphensExceptTheStart, "")
        .replace(decimalOnlyAtEndOfString, "")
        .replace(allLeadingZerosOptionallyNegative, "$1");
    return isValidNumber(sanitizedValue)
        ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
            ? sanitizedValue
            : getBigDecimalAsString(sanitizedValue)
        : nonExpoNumString;
});
function getBigDecimalAsString(sanitizedValue) {
    const sanitizedValueDecimals = sanitizedValue.split(".")[1];
    const value = new BigDecimal(sanitizedValue).toString();
    const [bigDecimalValueInteger, bigDecimalValueDecimals] = value.split(".");
    return sanitizedValueDecimals && bigDecimalValueDecimals !== sanitizedValueDecimals
        ? `${bigDecimalValueInteger}.${sanitizedValueDecimals}`
        : value;
}
function sanitizeExponentialNumberString(numberString, func) {
    if (!numberString) {
        return numberString;
    }
    const firstE = numberString.toLowerCase().indexOf("e") + 1;
    if (!firstE) {
        return func(numberString);
    }
    return numberString
        .replace(/[eE]*$/g, "")
        .substring(0, firstE)
        .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
        .split(/[eE]/)
        .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
        .join("e")
        .replace(/^e/, "1e");
}
/**
 * Converts an exponential notation numberString into decimal notation.
 * BigInt doesn't support exponential notation, so this is required to maintain precision
 *
 * @param {string} numberString - pre-validated exponential or decimal number
 * @returns {string} numberString in decimal notation
 */
function expandExponentialNumberString(numberString) {
    const exponentialParts = numberString.split(/[eE]/);
    if (exponentialParts.length === 1) {
        return numberString;
    }
    const number = +numberString;
    if (Number.isSafeInteger(number)) {
        return `${number}`;
    }
    const isNegative = numberString.charAt(0) === "-";
    const magnitude = +exponentialParts[1];
    const decimalParts = exponentialParts[0].split(".");
    const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
    const decimals = decimalParts[1] || "";
    const shiftDecimalLeft = (integers, magnitude) => {
        const magnitudeDelta = Math.abs(magnitude) - integers.length;
        const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers}` : integers;
        const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude)}${"."}${leftPaddedZeros.slice(magnitude)}`;
        return shiftedDecimal;
    };
    const shiftDecimalRight = (decimals, magnitude) => {
        const rightPaddedZeros = magnitude > decimals.length ? `${decimals}${"0".repeat(magnitude - decimals.length)}` : decimals;
        const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude)}${"."}${rightPaddedZeros.slice(magnitude)}`;
        return shiftedDecimal;
    };
    const expandedNumberString = magnitude > 0
        ? `${integers}${shiftDecimalRight(decimals, magnitude)}`
        : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
    return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString
        .replace(unnecessaryDecimal, "")
        .replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
    return _key_js__WEBPACK_IMPORTED_MODULE_1__.n.some((number) => string.includes(number));
}
/**
 * Adds localized trailing decimals zero values to the number string.
 * BigInt conversion to string removes the trailing decimal zero values (Ex: 1.000 is returned as 1). This method helps adding them back.
 *
 * @param {string} localizedValue - localized number string value
 * @param {string} value - current value in the input field
 * @param {NumberStringFormat} formatter - numberStringFormatter instance to localize the number value
 * @returns {string} localized number string value
 */
function addLocalizedTrailingDecimalZeros(localizedValue, value, formatter) {
    const decimals = value.split(".")[1];
    if (decimals) {
        const trailingDecimalZeros = decimals.match(hasTrailingDecimalZeros)[0];
        if (trailingDecimalZeros &&
            formatter.delocalize(localizedValue).length !== value.length &&
            decimals.indexOf("e") === -1) {
            const decimalSeparator = formatter.decimal;
            localizedValue = !localizedValue.includes(decimalSeparator)
                ? `${localizedValue}${decimalSeparator}`
                : localizedValue;
            return localizedValue.padEnd(localizedValue.length + trailingDecimalZeros.length, formatter.localize("0"));
        }
    }
    return localizedValue;
}

const defaultLocale = "en";
const t9nLocales = [
    "ar",
    "bg",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    defaultLocale,
    "es",
    "et",
    "fi",
    "fr",
    "he",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "lt",
    "lv",
    "no",
    "nl",
    "pl",
    "pt-BR",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW",
];
const locales = [
    "ar",
    "bg",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "de-AT",
    "de-CH",
    "el",
    defaultLocale,
    "en-AU",
    "en-CA",
    "en-GB",
    "es",
    "es-MX",
    "et",
    "fi",
    "fr",
    "fr-CH",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "it-CH",
    "ja",
    "ko",
    "lt",
    "lv",
    "mk",
    "no",
    "nl",
    "pl",
    "pt",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW",
];
const numberingSystems = ["arab", "arabext", "latn"];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
// for consistent browser behavior, we normalize numberingSystem to prevent the browser-inferred value
// see https://github.com/Esri/calcite-design-system/issues/3079#issuecomment-1168964195 for more info
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem)
    ? "latn"
    : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
/**
 * Gets the locale that best matches the context.
 *
 * @param locale – the BCP 47 locale code
 * @param context - specifies whether the locale code should match in the context of CLDR or T9N (translation)
 */
function getSupportedLocale(locale, context = "cldr") {
    const contextualLocales = context === "cldr" ? locales : t9nLocales;
    if (!locale) {
        return defaultLocale;
    }
    if (contextualLocales.includes(locale)) {
        return locale;
    }
    locale = locale.toLowerCase();
    // we support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
    if (locale === "nb") {
        return "no";
    }
    // we use `pt-BR` as it will have the same translations as `pt`, which has no corresponding bundle
    if (context === "t9n" && locale === "pt") {
        return "pt-BR";
    }
    if (locale.includes("-")) {
        locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
        if (!contextualLocales.includes(locale)) {
            locale = locale.split("-")[0];
        }
    }
    // we can `zh-CN` as base translation for chinese locales which has no corresponding bundle.
    if (locale === "zh") {
        return "zh-CN";
    }
    if (!contextualLocales.includes(locale)) {
        console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
        return defaultLocale;
    }
    return locale;
}
/**
 * Gets the locale that best matches the context for date formatting.
 *
 * Intl date formatting has some quirks with certain locales. This handles those quirks by mapping a locale to another for date formatting.
 *
 * See https://github.com/Esri/calcite-design-system/issues/9387
 *
 * @param locale – the BCP 47 locale code
 * @returns {string} a BCP 47 locale code
 */
function getDateFormatSupportedLocale(locale) {
    switch (locale) {
        case "it-CH":
            return "de-CH";
        case "bs":
            return "bs-Cyrl";
        default:
            return locale;
    }
}
const connectedComponents = new Set();
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
function connectLocalized(component) {
    updateEffectiveLocale(component);
    if (connectedComponents.size === 0) {
        mutationObserver?.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
            subtree: true,
        });
    }
    connectedComponents.add(component);
}
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
function updateEffectiveLocale(component) {
    component.effectiveLocale = getLocale(component);
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectLocalized(component) {
    connectedComponents.delete(component);
    if (connectedComponents.size === 0) {
        mutationObserver.disconnect();
    }
}
const mutationObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_2__.c)("mutation", (records) => {
    records.forEach((record) => {
        const el = record.target;
        connectedComponents.forEach((component) => {
            const inUnrelatedSubtree = !(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.b)(el, component.el);
            if (inUnrelatedSubtree) {
                return;
            }
            const closestLangEl = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]");
            if (!closestLangEl) {
                component.effectiveLocale = defaultLocale;
                return;
            }
            const closestLang = closestLangEl.lang;
            component.effectiveLocale =
                // user set lang="" means unknown language, so we use default
                closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
        });
    });
});
/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component) {
    return (component.el.lang ||
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.c)(component.el, "[lang]")?.lang ||
        document.documentElement.lang ||
        defaultLocale);
}
/**
 * This util formats and parses numbers for localization
 */
class NumberStringFormat {
    constructor() {
        this.delocalize = (numberString) => 
        // For performance, (de)localization is skipped if the formatter isn't initialized.
        // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
        // `numberFormatOptions` must be set in a component to create and cache the formatter.
        this._numberFormatOptions
            ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString
                .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
                .replace(new RegExp(`[${this._group}]`, "g"), "")
                .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
                .replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex))
            : numberString;
        this.localize = (numberString) => this._numberFormatOptions
            ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim())
                ? new BigDecimal(nonExpoNumString.trim())
                    .format(this)
                    .replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group)
                : nonExpoNumString)
            : numberString;
    }
    get group() {
        return this._group;
    }
    get decimal() {
        return this._decimal;
    }
    get minusSign() {
        return this._minusSign;
    }
    get digits() {
        return this._digits;
    }
    get numberFormatter() {
        return this._numberFormatter;
    }
    get numberFormatOptions() {
        return this._numberFormatOptions;
    }
    /**
     * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
     */
    set numberFormatOptions(options) {
        options.locale = getSupportedLocale(options?.locale);
        options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
        if (
        // No need to create the formatter if `locale` and `numberingSystem`
        // are the default values and `numberFormatOptions` has not been set
        (!this._numberFormatOptions &&
            options.locale === defaultLocale &&
            options.numberingSystem === defaultNumberingSystem &&
            // don't skip initialization if any options besides locale/numberingSystem are set
            Object.keys(options).length === 2) ||
            // cache formatter by only recreating when options change
            JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)) {
            return;
        }
        this._numberFormatOptions = options;
        this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
        this._digits = [
            ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
                useGrouping: false,
                numberingSystem: this._numberFormatOptions.numberingSystem,
            }).format(9876543210),
        ].reverse();
        const index = new Map(this._digits.map((d, i) => [d, i]));
        // numberingSystem is parsed to return consistent decimal separator across browsers.
        const parts = new Intl.NumberFormat(this._numberFormatOptions.locale, {
            numberingSystem: this._numberFormatOptions.numberingSystem,
        }).formatToParts(-12345678.9);
        this._actualGroup = parts.find((d) => d.type === "group").value;
        // change whitespace group separators to the unicode non-breaking space (nbsp)
        this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? "\u00A0" : this._actualGroup;
        this._decimal = parts.find((d) => d.type === "decimal").value;
        this._minusSign = parts.find((d) => d.type === "minusSign").value;
        this._getDigitIndex = (d) => index.get(d);
    }
}
const numberStringFormatter = new NumberStringFormat();
/**
 * Exported for testing purposes only.
 *
 * @internal
 */
let dateTimeFormatCache;
/**
 * Used to ensure all cached formats are for the same locale.
 *
 * @internal
 */
let previousLocaleUsedForCaching;
/**
 * Generates a cache key for date time format lookups.
 *
 * @internal
 */
function buildDateTimeFormatCacheKey(options = {}) {
    return Object.entries(options)
        .sort(([key1], [key2]) => key1.localeCompare(key2))
        .map((keyValue) => `${keyValue[0]}-${keyValue[1]}`)
        .flat()
        .join(":");
}
/**
 * Returns an instance of Intl.DateTimeFormat and reuses it if requested with the same locale and options.
 *
 * **Note**: the cache will be cleared if a different locale is provided
 *
 * @internal
 */
function getDateTimeFormat(locale, options) {
    locale = getSupportedLocale(locale);
    if (!dateTimeFormatCache) {
        dateTimeFormatCache = new Map();
    }
    if (previousLocaleUsedForCaching !== locale) {
        dateTimeFormatCache.clear();
        previousLocaleUsedForCaching = locale;
    }
    const key = buildDateTimeFormatCacheKey(options);
    const cached = dateTimeFormatCache.get(key);
    if (cached) {
        return cached;
    }
    const format = new Intl.DateTimeFormat(locale, options);
    dateTimeFormatCache.set(key, format);
    return format;
}



//# sourceMappingURL=locale.js.map

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

/***/ "./node_modules/@esri/calcite-components/dist/components/t9n.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/t9n.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ connectMessages; },
/* harmony export */   d: function() { return /* binding */ disconnectMessages; },
/* harmony export */   s: function() { return /* binding */ setUpMessages; },
/* harmony export */   u: function() { return /* binding */ updateMessages; }
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/@esri/calcite-components/dist/components/locale.js");
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browser.js */ "./node_modules/@esri/calcite-components/dist/components/browser.js");
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */




const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
    const key = `${component}_${lang}`;
    if (componentLangToMessageBundleCache[key]) {
        return componentLangToMessageBundleCache[key];
    }
    componentLangToMessageBundleCache[key] = fetch((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_2__.getAssetPath)(`./assets/${component}/t9n/messages_${lang}.json`))
        .then((resp) => {
        if (!resp.ok) {
            throwMessageFetchError();
        }
        return resp.json();
    })
        .catch(() => throwMessageFetchError());
    return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
    throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
    component.messages = {
        ...component.defaultMessages,
        ...component.messageOverrides,
    };
}
function noop() {
    // intentionally empty
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
    component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
    mergeMessages(component);
}
async function fetchMessages(component, lang) {
    if (!(0,_browser_js__WEBPACK_IMPORTED_MODULE_1__.i)()) {
        return {};
    }
    const { el } = component;
    const tag = el.tagName.toLowerCase();
    const componentName = tag.replace("calcite-", "");
    return getMessageBundle((0,_locale_js__WEBPACK_IMPORTED_MODULE_0__.g)(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
    component.defaultMessages = await fetchMessages(component, lang);
    mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
    component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
    // we set this to noop to for watchers triggered when components are disconnected
    component.onMessagesChange = noop;
}
function defaultOnMessagesChange() {
    mergeMessages(this);
}



//# sourceMappingURL=t9n.js.map

/***/ })

}]);
//# sourceMappingURL=@esri-calcite-components-dist-components-calcite-chip.js.map